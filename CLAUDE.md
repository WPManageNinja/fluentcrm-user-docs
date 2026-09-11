# FluentCRM User Documentation — Project Context

## What This Project Is

This is the official **FluentCRM user documentation site** built with **VitePress 1.6.4**.  
Repository: `WPManageNinja/fluentcrm-user-docs` | Branch: `docteam` → merges to `master`.

> **This repo is a git submodule of the main plugin repo** (`WPManageNinja/fluent-crm`), mounted at `user-docs/`. It is its own repository: commits and pushes here go to `fluentcrm-user-docs`, and the parent plugin repo only tracks the submodule pointer. The sibling `dev-docs/` submodule is the separate **developer** docs (`FluentCRM/fluent-crm-developers-docs`) — keep end-user content here, not there.

- **142 markdown files** across 16 doc sections inside `docs/`
- **VitePress config**: `.vitepress/config.mts` — controls sidebar, nav, rewrites, and a custom YouTube embed plugin
- **Images**: stored in `docs/public/[category]/[slug]/` as `.webp` files
- **Featured (social-share) images**: generated, not hand-made — `scripts/generate-featured-images.mjs` renders one branded 1200x630 PNG per page into `docs/public/images/featured/[slug].png` from the page's `title` frontmatter and category folder; `.vitepress/config.mts` (`featuredImageFor()`) points each page's `og:image` / `twitter:image` at it, falling back to `default.png`. Run `npm run featured:generate` after adding a page and commit the PNG. A renamed/retitled page needs its old card deleted first (the generator skips existing files and only reports orphans). The card is named after the URL slug (file basename) — that rule lives in both the script and the config; keep them in sync.
- **URL rewrite**: `docs/:category/:slug.md` → `:slug.md` (category folder and `/docs/` prefix are hidden from URLs)
- **Dev server**: `npm run docs:dev` | **Build**: `npm run docs:build` | **Social cards**: `npm run featured:generate`

## Plugin Versions Covered

- FluentCRM Free: `3.0.0-rc.2` (source in `source-plugin/fluent-crm/`)
- FluentCRM Pro: `3.0.0-rc.2.1` (source in `source-plugin/fluentcampaign-pro/`)

## Team

- `tajulauth` — SMS module, new feature docs
- `ah-rasel5` — Automation docs, triggers, conditions

## Critical Rules (Never Violate)

1. **Product name is always `FluentCRM`** — never "Fluent CRM" (two words)
2. **Never change factual content** (feature behaviour, step sequences, option names) without verifying from plugin source or explicit user instruction
3. **All new images must be `.webp`** — never `.jpg`, `.png`, `.gif` (the one exception: the generated social cards in `docs/public/images/featured/`, which scrapers require as PNG)
4. **Always update `.vitepress/config.mts`** when adding a new doc file, and run `npm run featured:generate` so the page gets its social card
5. **The `docs/devloper/` folder has a typo** (missing `e`) — this is intentional/legacy; use it as-is until a migration is planned
6. **Sidebar link format**: always `/slug-here` (never `/docs/slug` or `/docs/category/slug`)

## Correct Product Name Casing (Quick Reference)

| Use | Never |
|-----|-------|
| FluentCRM | Fluent CRM |
| LearnDash | Learndash |
| LearnPress | Learnpress |
| LifterLMS | Lifterlms |
| TutorLMS | Tutorlms |
| FluentCommunity | Fluent Community |
| FluentSMTP | Fluent SMTP |
| FluentSupport | Fluent Support |
| FluentCart | Fluent Cart |
| FluentForms (plugin name) | Fluent Forms |
| Fluent Forms (generic noun) | FluentForms |
| WooCommerce | Woocommerce |
| MemberPress | Memberpress |
| BuddyBoss | Buddyboss |
| AffiliateWP | AffiliateWp |
| Easy Digital Downloads / EDD | Easy digital downloads |

## Voice & Tone Standard

- **Second person** ("you"), **active voice**
- Conversational but precise — like a knowledgeable colleague, not a manual
- Explain WHY briefly before HOW
- No filler: remove "this article will guide you through", "hopefully now you understand", "follow the article accordingly", "don't hesitate"
- No passive: "will be displayed" → "appears"; "is given below" → remove or rephrase

## Callout Format (standardized — use these exact forms)

```
>[!Note]
> Supplementary information.

>[!Warning]
> Something critical the user must not skip.

>[!Tip]
> Optional but helpful suggestion.
```

**Pro feature notice (always use this exact wording):**
```
>[!Note]
> This feature requires **FluentCRM Pro**. [See what's included →](/how-to-install-upgrade-and-activate-license)
```

## Doc Frontmatter Format

```yaml
---
title: "Human Readable Title"
slug: "url-slug-matching-filename"
category: "folder-name-exactly"
order: 0
---
```

## Sidebar Config Pattern

All sidebar entries in `.vitepress/config.mts` use:
```ts
{ text: 'Page Title', link: '/the-slug' },
```
The slug is the filename without `.md` and without the folder prefix.
