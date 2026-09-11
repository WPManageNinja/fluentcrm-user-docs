#!/usr/bin/env node
/**
 * Generates branded 1200x630 featured/OG images for every doc page, so a link
 * shared on Slack / X / Facebook / LinkedIn previews with that page's own title
 * instead of one generic hero image for the whole site.
 *
 * Sources: `index.md` (home) and `docs/<category>/<slug>.md` (`docs/public/` is skipped).
 * Output:  docs/public/images/featured/<slug>.png
 *          (`docs/public` is the configured publicDir, so these are served at
 *          `/images/featured/<slug>.png`.)
 *
 * NAMING RULE — kept in sync with `featuredImageFor()` in `.vitepress/config.mts`.
 * This repo's `rewrites` maps `docs/:category/:slug.md` -> `:slug.md`, so by the
 * time `transformHead` runs, `pageData.relativePath` is already the flat
 * `<slug>.md`. The card is therefore named after that same flat slug — the file's
 * basename — and the home page's `index.md` becomes `index.png`.
 *
 * Two guards keep that rule honest:
 *  - a page nested deeper than `docs/<category>/` is NOT matched by the rewrite,
 *    so its served URL (and card name) is unknown — the script fails rather than guess;
 *  - two files sharing a basename would also collide in `rewrites`, so a duplicate
 *    slug fails loudly rather than letting one card silently overwrite another.
 *
 * A `default.png` is also emitted as the fallback for any page with no card.
 *
 * Idempotent: skips any output file that already exists unless --force is passed.
 * Run via `npm run featured:generate` (or `featured:regenerate`).
 */

import { readdirSync, statSync, readFileSync, existsSync, mkdirSync } from 'node:fs'
import { join, relative, dirname, basename, sep } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = join(__dirname, '..')
const DOCS_DIR = join(REPO_ROOT, 'docs')
const DOCS_PUBLIC_DIR = join(DOCS_DIR, 'public')
const OUTPUT_DIR = join(DOCS_PUBLIC_DIR, 'images', 'featured')
const HOME_PATH = join(REPO_ROOT, 'index.md')
// The only wordmark in the repo is the colour lockup (purple icon tile, "fluent" in
// #7742e6, "CRM" in #441d99). That deep purple disappears on a dark ground, so the
// card uses a derived dark-mode variant — see loadLogo() — rather than a second asset.
const LOGO_PATH = join(DOCS_PUBLIC_DIR, 'brand', 'fluentCRM-logo-color.svg')

const FORCE = process.argv.includes('--force')

// Palette mirrors .vitepress/theme/style.css: the brand purple (#431d99) family on a
// near-black violet ground, so the cards sit with the site's own dark mode.
const BG_TOP = '#1E1440'
const BG_BOTTOM = '#0B0A14'
const BRAND_PURPLE = '#431d99'
const BRAND_VIOLET = '#7742e6'
const GLOW_2 = '#5a28b3'
const EYEBROW_COLOR = '#B69CFF'
const FONT_STACK = 'Helvetica, Arial, sans-serif'

const CANVAS_W = 1200
const CANVAS_H = 630
const MARGIN_X = 88
const TEXT_MAX_W = 1000

// Logo viewBox is 1788x300 (5.96:1); 330px wide keeps the lockup readable without dominating.
const LOGO_W = 330
const LOGO_X = MARGIN_X
const LOGO_Y = 76

// Kept in step with SITE_URL in config.mts.
const FOOTER_TEXT = 'docs.fluentcrm.com'

/**
 * Category folder -> eyebrow label. Folders that title-case badly (acronyms, the
 * legacy `devloper` typo CLAUDE.md says to leave alone) are pinned here; everything
 * else goes through titleCaseSlug().
 */
const CATEGORY_LABELS = {
  devloper: 'Developer',
  'fluentcrm-essentials': 'FluentCRM Essentials',
  'sms-module': 'SMS Module',
  'whatsapp-module': 'WhatsApp Module',
  'change-log': 'Changelog',
  'frequently-asked-questions': 'FAQ',
}

// -------------------------------------------------------------------------
// File discovery
// -------------------------------------------------------------------------

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    const stat = statSync(full)
    if (stat.isDirectory()) {
      if (full === DOCS_PUBLIC_DIR) continue
      walk(full, files)
    } else if (stat.isFile() && entry.endsWith('.md')) {
      files.push(full)
    }
  }
  return files
}

// -------------------------------------------------------------------------
// Titles + labels
// -------------------------------------------------------------------------

function titleCaseSlug(slug) {
  return slug
    .split('-')
    .map((word) => (word ? word.charAt(0).toUpperCase() + word.slice(1) : word))
    .join(' ')
}

function categoryLabel(folder) {
  return CATEGORY_LABELS[folder] ?? titleCaseSlug(folder)
}

function stripMarkdown(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/`([^`]*)`/g, '$1')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .trim()
}

function unquote(text) {
  return text.trim().replace(/^(["'])(.*)\1$/, '$2')
}

/** Frontmatter `title`, else the first `# H1`, else the home hero, else the slug. */
function extractTitle(mdPath, fallbackSlug) {
  const content = readFileSync(mdPath, 'utf8')

  // Every article here carries `title:` frontmatter (CLAUDE.md's required format),
  // and that is what the page's <title> and og:title use — so the card should
  // carry the same string the share preview's headline does.
  const fm = content.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (fm) {
    const title = fm[1].match(/^title:\s*(.+?)\s*$/m)
    if (title) return stripMarkdown(unquote(title[1]))
  }

  for (const line of content.split(/\r?\n/)) {
    const match = line.trim().match(/^#\s+(.+)$/)
    if (match) return stripMarkdown(match[1])
  }

  // The home page uses `layout: home` with no H1 — fall back to its hero.
  const heroName = content.match(/^\s{2}name:\s*["']?(.+?)["']?\s*$/m)
  const heroText = content.match(/^\s{2}text:\s*["']?(.+?)["']?\s*$/m)
  if (heroName) return heroText ? `${heroName[1]} ${heroText[1]}` : heroName[1]

  return titleCaseSlug(fallbackSlug)
}

function escapeXml(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

// -------------------------------------------------------------------------
// Title layout
// -------------------------------------------------------------------------
//
// librsvg returns no text metrics, so line breaking approximates: bold Helvetica
// averages ~0.55em per character over mixed-case English. Walk the sizes from
// largest down and take the first that fits, so short titles stay big and long
// ones step down instead of running off the canvas.

const CHAR_WIDTH_RATIO = 0.55
const FONT_SIZE_TIERS = [66, 58, 50, 44, 38]
const MAX_LINES = 3

function wrapAt(title, fontSize) {
  const budget = Math.floor(TEXT_MAX_W / (fontSize * CHAR_WIDTH_RATIO))
  const lines = []
  let current = ''

  for (const word of title.split(/\s+/)) {
    const attempt = current ? `${current} ${word}` : word
    if (attempt.length <= budget || !current) {
      current = attempt
    } else {
      lines.push(current)
      current = word
    }
  }
  if (current) lines.push(current)

  return { lines, budget }
}

function layoutTitle(title) {
  for (const fontSize of FONT_SIZE_TIERS) {
    const { lines } = wrapAt(title, fontSize)
    if (lines.length <= MAX_LINES) return { fontSize, lines }
  }

  const fontSize = FONT_SIZE_TIERS[FONT_SIZE_TIERS.length - 1]
  const { lines, budget } = wrapAt(title, fontSize)
  lines.length = MAX_LINES
  lines[MAX_LINES - 1] = `${lines[MAX_LINES - 1].slice(0, budget - 1).replace(/\s+$/, '')}…`
  return { fontSize, lines }
}

// -------------------------------------------------------------------------
// SVG template
// -------------------------------------------------------------------------

function buildSvg({ title, eyebrow }) {
  const { fontSize, lines } = layoutTitle(title)
  const lineHeight = Math.round(fontSize * 1.18)

  // Bottom-anchored above the footer, so one-, two- and three-line cards share
  // the same optical baseline. The eyebrow and the accent rule sit relative to
  // the block so they travel with it.
  const blockBottom = 468
  const firstBaseline = blockBottom - (lines.length - 1) * lineHeight
  const eyebrowBaseline = firstBaseline - fontSize - 22
  const ruleY = blockBottom + 40

  const tspans = lines
    .map(
      (line, i) =>
        `<tspan x="${MARGIN_X}" y="${firstBaseline + i * lineHeight}">${escapeXml(line)}</tspan>`
    )
    .join('')

  return `<svg width="${CANVAS_W}" height="${CANVAS_H}" viewBox="0 0 ${CANVAS_W} ${CANVAS_H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${BG_TOP}"/>
      <stop offset="100%" stop-color="${BG_BOTTOM}"/>
    </linearGradient>
    <linearGradient id="rule" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${BRAND_VIOLET}"/>
      <stop offset="100%" stop-color="${EYEBROW_COLOR}"/>
    </linearGradient>
    <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="90"/>
    </filter>
  </defs>
  <rect width="${CANVAS_W}" height="${CANVAS_H}" fill="url(#bg)"/>
  <!-- Soft brand-purple fields pushed to the edges so the text column stays on
       the darkest part of the ground. -->
  <g filter="url(#blur)">
    <ellipse cx="1020" cy="110" rx="340" ry="230" fill="${BRAND_VIOLET}" opacity="0.50"/>
    <ellipse cx="1180" cy="540" rx="300" ry="240" fill="${BRAND_PURPLE}" opacity="0.65"/>
    <ellipse cx="120" cy="650" rx="360" ry="200" fill="${GLOW_2}" opacity="0.35"/>
  </g>
  <text x="${MARGIN_X}" y="${eyebrowBaseline}" font-family="${FONT_STACK}" font-size="21" font-weight="700" letter-spacing="4" fill="${EYEBROW_COLOR}">${escapeXml(
    eyebrow.toUpperCase()
  )}</text>
  <text font-family="${FONT_STACK}" font-weight="700" font-size="${fontSize}" fill="#FFFFFF">${tspans}</text>
  <rect x="${MARGIN_X}" y="${ruleY}" width="132" height="5" rx="2.5" fill="url(#rule)"/>
  <text x="${MARGIN_X}" y="574" font-family="${FONT_STACK}" font-size="18" font-weight="400" letter-spacing="1" fill="#FFFFFF" opacity="0.55">${FOOTER_TEXT}</text>
</svg>`
}

/**
 * Dark-mode lockup derived from the colour SVG: the icon tile and "fluent" keep
 * their violet, "CRM" (#441d99) becomes white so it reads on the dark ground.
 * Rasterised once and reused — re-rendering the same SVG 170 times is pure waste.
 */
async function loadLogo() {
  const svg = readFileSync(LOGO_PATH, 'utf8')
  if (!/#441d99/i.test(svg)) {
    throw new Error(
      `${LOGO_PATH} no longer contains the #441d99 fill this script recolours to white; ` +
        `update loadLogo() to match the new artwork.`
    )
  }
  const darkModeSvg = svg.replace(/#441d99/gi, '#FFFFFF')
  return sharp(Buffer.from(darkModeSvg)).resize({ width: LOGO_W }).png().toBuffer()
}

async function renderCard({ title, eyebrow, outPath, logo }) {
  await sharp(Buffer.from(buildSvg({ title, eyebrow })))
    .composite([{ input: logo, left: LOGO_X, top: LOGO_Y }])
    // Flat gradient + text compresses well at max effort, and this is lossless.
    .png({ compressionLevel: 9, effort: 10 })
    .toFile(outPath)
}

// -------------------------------------------------------------------------
// Main
// -------------------------------------------------------------------------

async function main() {
  if (!existsSync(LOGO_PATH)) {
    throw new Error(`Logo source not found at ${LOGO_PATH}`)
  }
  if (!existsSync(OUTPUT_DIR)) {
    mkdirSync(OUTPUT_DIR, { recursive: true })
  }

  const logo = await loadLogo()

  const jobs = [
    {
      outPath: join(OUTPUT_DIR, 'default.png'),
      title: 'FluentCRM Documentation',
      eyebrow: 'Documentation',
    },
  ]

  if (existsSync(HOME_PATH)) {
    jobs.push({
      outPath: join(OUTPUT_DIR, 'index.png'),
      title: extractTitle(HOME_PATH, 'fluentcrm'),
      eyebrow: 'Documentation',
    })
  }

  const seen = new Map() // slug -> first source path, for the collision check
  const collisions = []
  const unrewritten = []

  for (const filePath of walk(DOCS_DIR).sort()) {
    const relPath = relative(REPO_ROOT, filePath).split(sep).join('/')
    const parts = relPath.split('/') // docs/<category>/<slug>.md — rewrites keeps only <slug>

    if (parts.length !== 3) {
      unrewritten.push(relPath)
      continue
    }

    const slug = basename(relPath, '.md')
    if (seen.has(slug)) {
      collisions.push(`${slug}  <-  ${seen.get(slug)}  and  ${relPath}`)
      continue
    }
    seen.set(slug, relPath)

    jobs.push({
      outPath: join(OUTPUT_DIR, `${slug}.png`),
      title: extractTitle(filePath, slug),
      eyebrow: categoryLabel(parts[1]),
    })
  }

  if (unrewritten.length) {
    throw new Error(
      `${unrewritten.length} page(s) are not at docs/<category>/<slug>.md, so the \`rewrites\` ` +
        `rule in config.mts does not apply and their served URL — and card name — is unknown:\n  ${unrewritten.join('\n  ')}`
    )
  }
  if (collisions.length) {
    throw new Error(
      `${collisions.length} slug collision(s): these files share a basename, so \`rewrites\` ` +
        `serves them at the same URL and their cards would overwrite each other:\n  ${collisions.join('\n  ')}`
    )
  }

  let generated = 0
  let skipped = 0

  for (const job of jobs) {
    if (existsSync(job.outPath) && !FORCE) {
      skipped++
      continue
    }
    await renderCard({ ...job, logo })
    generated++
  }

  console.log(`Featured images: generated ${generated}, skipped ${skipped}.`)

  // A renamed or deleted page leaves its card behind, and nothing else would
  // ever notice. Report them rather than deleting — the call is the author's.
  const expected = new Set(jobs.map((job) => basename(job.outPath)))
  const orphans = readdirSync(OUTPUT_DIR).filter(
    (name) => name.endsWith('.png') && !expected.has(name)
  )
  if (orphans.length) {
    console.log(
      `\n${orphans.length} card(s) no longer match a page — delete them if the page is gone:`
    )
    orphans.forEach((name) => console.log(`  docs/public/images/featured/${name}`))
  }
}

main().catch((err) => {
  console.error(err.message ?? err)
  process.exitCode = 1
})
