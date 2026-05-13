# Quality Checklist

Run through this list before considering any doc complete or before reporting an audit done.

---

## Frontmatter
- [ ] `title` is human-readable and descriptive
- [ ] `slug` matches the filename exactly (no `.md`)
- [ ] `category` matches the folder name on disk exactly (including the `devloper` typo if applicable)
- [ ] `order` field is present (set to `0`)

## Opener
- [ ] Doesn't start with "This article will guide you through..."
- [ ] Doesn't start with "This documentation will..."
- [ ] First sentence answers "what is this and why do I care?"
- [ ] No more than 2 sentences before the first H2 (or video/image)

## Voice & Grammar
- [ ] Second person ("you") throughout
- [ ] Active voice — no "will be displayed", "is given below", "can be found"
- [ ] No banned phrases (see `voice-and-tone.md`)
- [ ] No mid-sentence capital letters that aren't proper nouns
- [ ] Contractions used naturally where they sound right
- [ ] No promotional adjectives ("powerful", "amazing", "industry-leading")
- [ ] Sentences average 15–20 words; no sentence over 30

## Product Naming
- [ ] **FluentCRM** — never "Fluent CRM" (two words)
- [ ] **LearnDash**, **LearnPress**, **LifterLMS**, **TutorLMS** — correct casing throughout
- [ ] **WooCommerce** — never "Woocommerce"
- [ ] **MemberPress** — never "Memberpress"
- [ ] All product names checked against `style-rules.md` (Product Casing table)

## Structure
- [ ] No H1 in body (frontmatter title is the H1)
- [ ] Logical H2 → H3 → H4 hierarchy
- [ ] No skipping levels (no H2 → H4)
- [ ] Heading capitalization consistent within the file
- [ ] Numbered lists used for sequential steps
- [ ] Bullet lists used for non-sequential items
- [ ] Bold-label format used consistently for option lists

## UI Elements
- [ ] All buttons, fields, toggles, menu items in **bold**
- [ ] Navigation paths use `→` arrow
- [ ] Path is fully bolded (`**FluentCRM → Settings**`, not `**FluentCRM** → **Settings**`)
- [ ] UI labels match the actual product (verify from screenshots or plugin source)

## Images
- [ ] Every image has descriptive alt text (not empty, not "image", not "screenshot")
- [ ] Images in `.webp` format (not `.jpg`, `.png`, `.gif`)
- [ ] Image paths use `/[category]/[slug]/name-N.webp` format
- [ ] No `/docs/public` prefix in markdown image references
- [ ] Images appear AFTER the relevant step or paragraph
- [ ] No more than one image per 2–3 steps

## Callouts
- [ ] Callouts used sparingly (1 per section max)
- [ ] Pro Feature notice uses the exact standard phrasing:
  ```
  >[!Note]
  > This feature requires **FluentCRM Pro**. [See what's included →](/how-to-install-upgrade-and-activate-license)
  ```
- [ ] Format consistent within the file (don't mix `> **Note:**` with `>[!Note]`)

## Links
- [ ] All internal links use `/slug` format (never `/docs/slug` or `/docs/folder/slug`)
- [ ] Link text is descriptive (no "click here" / "read more")
- [ ] All linked slugs actually exist as `.md` files on disk
- [ ] External links use full `https://` URLs
- [ ] Cross-references to prerequisite docs included where helpful

## Closing
- [ ] No "Hopefully now you understand..."
- [ ] No "Don't hesitate to..."
- [ ] "What's Next?" section included for task-based docs
- [ ] If support contact is needed: `[contact support](https://wpmanageninja.com/support-tickets/)`

## Sidebar
- [ ] New doc added to correct section in `.vitepress/config.mts`
- [ ] Link entry uses `/slug` format (no `/docs/` prefix)
- [ ] Position in sidebar is logical (not random)

## YouTube Embeds
- [ ] If a video is included, it's a bare URL on its own line
- [ ] Blank line above and below the URL
- [ ] Not wrapped in markdown link syntax (unless intentionally a non-embed link)
- [ ] H3 heading above the URL is fine and recommended for navigation

---

## Audit Reporting Format

When auditing (not auto-fixing), report issues like this:

```
[Line ~42] Issue: opens with banned phrase "This article will guide you through"
  → Fix: replace with a value-forward intro like "Email Patterns let you save reusable design blocks…"

[Line ~118] Issue: image has empty alt text
  → Fix: describe what's in the screenshot, e.g., "Compose Email panel with subject line field highlighted"

[Line ~203] Issue: link uses `/docs/email-sequence` (wrong format)
  → Fix: change to `/email-sequence`
```

End the audit with:

> *"Should I apply all of these fixes, or which specific ones would you like?"*

Wait for user confirmation before editing.
