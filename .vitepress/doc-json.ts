import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { createMarkdownRenderer, type SiteConfig } from 'vitepress'

/**
 * JSON copy of every doc page, for the FluentCRM plugin's in-app help.
 *
 * For each page `/<slug>` the build writes `/<slug>.json` next to the HTML, plus
 * `/docs-index.json` listing all of them. Cloudflare Pages serves both as static files.
 *
 * The HTML comes from the markdown source, rendered with the site's own markdown
 * config (so callouts, the YouTube embed and code highlighting match the site) —
 * NOT from the built .html files: doc images are a <ClientOnly> component there and
 * the static HTML holds only an empty `<!---->` in their place.
 *
 * The HTML is made portable for rendering on another domain:
 *  - the <ZoomableImage> component becomes a plain <img>;
 *  - root-relative `src` / `href` become absolute docs.fluentcrm.com URLs;
 *  - header anchor links and code-block copy buttons are removed;
 *  - the leading <h1> is removed, because `title` carries it.
 */

interface DocHeading {
  level: number
  title: string
  id: string
}

interface DocJson {
  slug: string
  title: string
  description: string
  category: string
  url: string
  html: string
  headings: DocHeading[]
  hash: string
}

// Read from the final HTML: the site's markdown renderer is a cached singleton with
// header extraction off, so `env.headers` is never filled here.
function headingsOf(html: string): DocHeading[] {
  return [...html.matchAll(/<h([23]) id="([^"]+)"[^>]*>([\s\S]*?)<\/h\1>/g)].map((m) => ({
    level: Number(m[1]),
    title: m[3]
      .replace(/<[^>]+>/g, '')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&')
      .trim(),
    id: m[2],
  }))
}

function portableHtml(html: string, siteUrl: string): string {
  return (
    html
      // Same attribute order the zoomable plugin emits; src/alt are already escaped.
      .replace(
        /<ClientOnly><ZoomableImage src="([^"]*)" alt="([^"]*)"><\/ZoomableImage><\/ClientOnly>/g,
        '<img src="$1" alt="$2" loading="lazy">'
      )
      .replace(/\s*<a class="header-anchor"[^>]*>[^<]*<\/a>/g, '')
      .replace(/<button title="[^"]*" class="copy"><\/button>/g, '')
      .replace(/\b(src|href)="\/(?!\/)/g, `$1="${siteUrl}/`)
      .replace(/^\s*<h1[^>]*>[\s\S]*?<\/h1>\s*/, '')
  )
}

export async function writeDocJson(siteConfig: SiteConfig, siteUrl: string) {
  const md = await createMarkdownRenderer(
    siteConfig.srcDir,
    siteConfig.markdown,
    siteConfig.site.base,
    siteConfig.logger
  )

  const index: Omit<DocJson, 'html' | 'headings'>[] = []

  for (const page of siteConfig.pages) {
    // `relativePath` is the REWRITTEN path (docs/forms/x.md -> x.md), the same
    // flattening the public URL gets from the `rewrites` option in config.mts.
    const relativePath = siteConfig.rewrites.map[page] || page
    const file = join(siteConfig.srcDir, page)
    const env: Record<string, any> = { path: file, relativePath, cleanUrls: siteConfig.cleanUrls }
    const rendered = md.render(readFileSync(file, 'utf-8'), env)

    const fm = env.frontmatter || {}
    if (fm.layout === 'home' || fm.layout === 'page') continue

    const slug = relativePath.replace(/\.md$/, '')
    const html = portableHtml(rendered, siteUrl)
    const doc: DocJson = {
      slug,
      title: fm.title || env.title || slug,
      description: fm.description || '',
      // The source folder, e.g. docs/forms/x.md -> forms.
      category: fm.category || page.split('/').slice(-2, -1)[0] || '',
      url: `${siteUrl}/${slug}`,
      html,
      headings: headingsOf(html),
      hash: createHash('sha256').update(html).digest('hex').slice(0, 12),
    }

    const out = join(siteConfig.outDir, `${slug}.json`)
    mkdirSync(dirname(out), { recursive: true })
    writeFileSync(out, JSON.stringify(doc))

    const { html: _html, headings: _headings, ...summary } = doc
    index.push(summary)
  }

  index.sort((a, b) => a.slug.localeCompare(b.slug))
  writeFileSync(join(siteConfig.outDir, 'docs-index.json'), JSON.stringify(index))
  siteConfig.logger.info(`doc-json: wrote ${index.length} doc JSON files`)
}
