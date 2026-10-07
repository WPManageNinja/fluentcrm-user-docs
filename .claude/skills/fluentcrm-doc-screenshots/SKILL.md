---
name: fluentcrm-doc-screenshots
description: Take, annotate, and place pixel-consistent screenshots of the FluentCRM admin for docs.fluentcrm.com pages. Use whenever the user asks to "take screenshots", "add images", "capture the UI", "update the screenshot", or when a doc page you are writing needs an image of a FluentCRM screen. Covers the headless-Chrome runner (scripts/screenshots/shoot.cjs), JSON shot plans, crop/arrow/naming rules, placing images in markdown, and verification. Do NOT use the Claude-in-Chrome extension or macOS screencapture for this.
---

# FluentCRM Doc Screenshots

Every screenshot is taken by a script, never by hand, so the output is reproducible and every image on the site shares the same framing, scale, and arrow style. Read this whole file before shooting.

## 1. Facts you must not rediscover

| Thing | Value |
|---|---|
| Dev site | `http://localhost:10053` (Local by Flywheel site `fcrmv3`, FluentCRM Free + Pro). Login `admin` / `admin`. Override with env `FCRM_SITE`, `FCRM_USER`, `FCRM_PASS`. The site must be **running in Local** first. |
| Admin URL pattern | `http://localhost:10053/wp-admin/admin.php?page=fluentcrm-admin#<route>`. Routes: `/` dashboard, `/subscribers`, `/email/campaigns`, `/email/templates`, `/email/sequences`, `/funnels`, `/forms`, `/reports`, `/settings`, `/settings/messaging`, `/add-ons`. The full list is the `path:` entries in the plugin's `assets/admin/app.js`. |
| App root | `#fluentcrm_app`. Sits 160px from the left (WP menu) and 32px from the top (WP bar). The runner hides both. |
| Runner | `npm run shots -- scripts/screenshots/plans/<plan>.json` (= `node scripts/screenshots/shoot.cjs …`). Library in `scripts/screenshots/lib/`. Step vocabulary is documented at the top of `shoot.cjs`. |
| Browser | Headless real Google Chrome through `playwright-core`. No download, no macOS permission. |
| Output | `docs/public/<category>/<slug>/<name>.webp`, referenced as `/<category>/<slug>/<name>.webp`. Raw PNGs go to `scripts/screenshots/raw/` (gitignored). |
| Scale | Viewport 1600 CSS px wide, device scale factor 2, so images are about 2880 px wide. Never resize output. |
| Arrow colour | Brand purple `#431d99` with a white halo (`lib/annotate.cjs`). |
| webp quality | 82. |

### What does NOT work (do not retry)
- **Claude-in-Chrome extension** (`mcp__claude-in-chrome__*`): it is bound to a different browser and shows an error page for the local dev site. Skip it.
- **macOS `screencapture`**: grabs overlapping windows and needs permissions the CLI lacks.

## 2. Workflow

1. **Shot list from the doc.** One image per click-step, placed right after the step. Field-reference images get no arrow. Skip a step's image if the control is already obvious in the previous one. Name files `kebab-case`, `<screen>-<what>.webp`, no numbers or dates. Reuse an existing name when replacing a stale image.
2. **Confirm the site is up.** `lsof -nP -iTCP:10053 -sTCP:LISTEN` should list nginx. If not, ask the user to start `fcrmv3` in Local.
3. **Write the plan** at `scripts/screenshots/plans/<doc-slug>.json`. Copy `plans/campaign-archive.json` (an add-ons card with an arrow, then a drawer opened and filled in) and edit it.
4. **Run it**: `npm run shots -- scripts/screenshots/plans/<doc-slug>.json`. Re-run selected shots with `--only=name1,name2`.
5. **Verify every image** with the Read tool: no WP bar or menu, control fully framed, arrow tip just outside the control and not covering text, correct state (checkbox ticked, dialog open), no big empty area at the bottom (fix with `crop.height`). Fix the plan and re-run; never hand-edit images.
6. **Place in markdown**: `![Screenshot of <what the reader sees>](/<category>/<slug>/<name>.webp)`, alt text starting with "Screenshot of", on its own line right after the step, indented four spaces inside a numbered list. Never stack two images with no text between them.
7. **Finish**: `npm run docs:build` must be clean. Do not commit unless asked.
8. **Leave the site as you found it.** Fill fields but do not click Save unless the shot needs a saved state; if you save, put the setting back. Use obviously sample data, never real contacts.

## 3. Selectors and clips

Selector forms: a CSS string, `{ "text": "Save" }`, `{ "role": "button", "name": "^save$" }`, `{ "selector": ".x", "hasText": "…" }`, or a Playwright chain such as `button:has-text("Settings") >> nth=2` (the Add-ons list repeats **Settings**, so count from the top).

Clips: `"app"` (whole admin app), `"viewport"`, `{ "element": "<sel>", "pad": 24 }`, `{ "rows": ["Label"], "pad": 24 }` (Element UI form rows by label text), or explicit `{x,y,width,height}`. `crop` takes image pixels (`top`, `height`, optional `left`, `width`) and trims a tall `app` shot to the rows you need. Raise `viewport.height` when the screen is taller than 1100.

Arrows: `from` is the side the arrow comes from; pick the side with empty space. `len` 130 to 160. One arrow per image, never labelled.

Side drawers (`.el-drawer`) and dialogs (`.el-dialog`) are appended to `<body>`; click the trigger, `{"wait": 1200}`, then clip to the element. Drawers stretch to the full viewport height, so crop the dead space.

## 4. Hard rules
- Never take screenshots by hand or with the Chrome extension; extend the runner if it cannot do something.
- Never crop out part of a control to fit an arrow; move the arrow.
- Never publish an image showing the WordPress chrome or another plugin's UI.
- Never invent UI. If a label from the doc is not on the site, stop and tell the user which step is missing.
- Screenshots show what the dev site renders; check the plugin version matches the one in `CLAUDE.md` before shooting.
