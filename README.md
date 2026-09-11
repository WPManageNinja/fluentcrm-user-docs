# FluentCRM User Documentation

Official user documentation site for [FluentCRM](https://fluentcrm.com) — the self-hosted email marketing and CRM automation plugin for WordPress. Built with [VitePress 1.6.4](https://vitepress.dev).

---

## Overview

This repository contains 158+ markdown docs organized into 16 topic sections, covering everything from installation and onboarding to advanced automation funnels, SMS campaigns, integrations, and developer references.

The site is deployed at **[docs.fluentcrm.com](https://docs.fluentcrm.com)**.

---

## Project Structure

```
fluentcrm-user-docs/
├── docs/
│   ├── getting-started-with-audience/   # Installation, onboarding, licensing
│   ├── email-campaign/                  # Campaigns, templates, visual builder, sequences
│   ├── automation-funnels/              # Triggers, actions, conditions, automation editor
│   ├── sms-module/                      # SMS campaigns, Twilio, Amazon messaging
│   ├── integrations/                    # 24 third-party integrations
│   ├── global-settings/                 # All settings pages
│   ├── grow-your-audience/              # Lists, tags, segments, forms
│   ├── forms/                           # Opt-in forms and lead capture
│   ├── event-tracking/                  # Activity tracking, webhooks
│   ├── advanced-reports/                # Analytics and reporting
│   ├── bounce-handlers/                 # Email bounce management
│   ├── migrating-from-other-platforms/  # Migration guides
│   ├── frequently-asked-questions/      # FAQs
│   ├── miscellaneous/                   # Smartcodes, custom fields, misc guides
│   ├── devloper/                        # REST API and developer reference
│   ├── change-log/                      # Release notes
│   └── public/                          # Static assets and images (WebP)
│       └── images/featured/             # Generated 1200x630 social-share cards, one per page
├── .vitepress/
│   └── config.mts                       # VitePress config: nav, sidebar, URL rewrites, YouTube plugin, OG tags
├── scripts/
│   └── generate-featured-images.mjs     # Renders the social-share cards (npm run featured:generate)
├── CLAUDE.md                            # AI contributor guidelines
├── package.json
└── index.md                             # Homepage
```

---

## Integrations Documented

WooCommerce · Easy Digital Downloads · MemberPress · LearnDash · LearnPress · LifterLMS · TutorLMS · BuddyBoss · AffiliateWP · FluentForms · FluentSupport · FluentCart · FluentCommunity · FluentBoards · FluentAffiliate · Fluent Booking · Elementor · Zapier · Pabbly · and more.

---

## Local Development

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start dev server (hot-reload)
npm run docs:dev

# Build for production
npm run docs:build

# Preview production build
npm run docs:preview

# Render a social-share card for any page that doesn't have one yet
npm run featured:generate

# Re-render every card (after changing the generator's design)
npm run featured:regenerate
```

The dev server runs at `http://localhost:5173` by default.

---

## Contributing

### Branch Strategy

- Active development happens on the `docteam` branch.
- Merges to `master` go live on the production docs site.

### Adding a New Doc

1. Create `docs/<category>/<slug>.md` with the correct frontmatter:

   ```yaml
   ---
   title: "Human Readable Title"
   slug: "url-slug-matching-filename"
   category: "folder-name-exactly"
   order: 0
   ---
   ```

2. Add a sidebar entry in `.vitepress/config.mts`:

   ```ts
   { text: 'Page Title', link: '/the-slug' },
   ```

3. Place any images in `docs/public/<category>/<slug>/` as `.webp` files.

4. Run `npm run featured:generate` to create the page's social-share card, and commit the PNG it writes to `docs/public/images/featured/<slug>.png`.

### Writing Style

- **Voice:** Second person, active voice, conversational but precise.
- **Images:** Always `.webp`.
- **Product names:** `FluentCRM` (never "Fluent CRM"), `WooCommerce`, `LearnDash`, etc. — see `CLAUDE.md` for the full casing reference table.
- **Callouts:**

  ```
  >[!Note]
  > Supplementary information.

  >[!Warning]
  > Something critical the user must not skip.

  >[!Tip]
  > Optional but helpful suggestion.
  ```

- **Pro feature notice:**

  ```
  >[!Note]
  > This feature requires **FluentCRM Pro**. [See what's included →](/how-to-install-upgrade-and-activate-license)
  ```

### Featured (social-share) images

Every page gets its own link-preview card — the image Slack, X, LinkedIn and Facebook show when someone shares a docs URL. Cards are **generated, not designed by hand**: `scripts/generate-featured-images.mjs` renders a branded 1200×630 PNG carrying the page's `title` and its category into `docs/public/images/featured/<slug>.png`, and `.vitepress/config.mts` points each page's `og:image` / `twitter:image` at it. A page with no card falls back to `default.png`.

- Run `npm run featured:generate` after adding a page. It only renders missing cards, so it's safe to run any time; commit the new PNG alongside the page.
- If you rename or retitle a page, delete its old card first (`rm docs/public/images/featured/<old-slug>.png`) and run the generator again — it skips existing files and only *reports* orphans, it never deletes them.
- The card is named after the page's URL slug (the file basename, since the rewrite below drops the category). That rule is written in both the script and the config, so a change to one must be mirrored in the other.
- These PNGs are the one deliberate exception to the "all images must be `.webp`" rule: social scrapers expect PNG/JPEG.

### URL Rewrites

URLs are rewritten so that `docs/:category/:slug.md` maps to `/:slug` — the `/docs/` prefix and category folder are hidden. Always use `/slug-here` format in sidebar links, never `/docs/category/slug`.

---

## Team

| GitHub | Responsibilities |
|--------|-----------------|
| `ah-rasel5` | Core maintainer |
| `tajulauth` | Feature docs |
| `reachkamrul` | Documentation contributor |

---

## License

Documentation content © [WPManageNinja](https://wpmanageninja.com). All rights reserved.
