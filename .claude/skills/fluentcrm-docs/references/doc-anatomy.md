# Doc Anatomy & Templates

Every doc follows this structure:

```markdown
---
title: "[Descriptive Human-Readable Title]"
slug: "[kebab-case-slug-matches-filename]"
category: "[folder-name-exactly]"
order: 0
---

# [Same as title]

[Intro paragraph: 1–2 sentences. What this is + why it matters. No "this article will guide you through".]

[Optional: Pre-flight callout if the user needs prerequisites]
> **Note:** Before you begin, [prerequisite].

[Optional: YouTube video embed on its own line]
https://www.youtube.com/watch?v=VIDEO_ID

## [First Major Section H2]

[1–2 sentence intro to the section if needed.]

1. Step one with **bold UI elements**.
2. Step two.

![Descriptive alt text](/category/slug/image-name-1.webp)

> **Tip:** [Optional tip relevant to this section.]

## [Second Major Section H2]

...

## What's Next?

- [Link to the logical next doc in the user's journey]
- [Link to a related doc]
```

---

## Frontmatter Rules

| Field | Format | Notes |
|-------|--------|-------|
| `title` | `"Human Readable Title"` | Use Title Case. This becomes the H1. |
| `slug` | `"kebab-case-slug"` | Must match the `.md` filename exactly (without `.md`) |
| `category` | `"folder-name"` | Must match the actual folder on disk exactly |
| `order` | `0` | Sidebar position is set in `.vitepress/config.mts`, this is unused |

> **Note:** The `category` field must match the folder name verbatim — including the `devloper` typo for the developer folder. Don't "fix" it in the frontmatter.

## Body Structure Rules

- **No H1 in the body** — the frontmatter `title` renders as H1
- **H2** for major sections — Title Case (e.g., `## Setting Up the Integration`)
- **H3** for subsections within H2 — Title Case for older docs, sentence case acceptable for newer docs (e.g., `### Configure your provider`)
- **H4** sparingly — only when you need a third level of depth
- **Avoid H5/H6** — if you need them, restructure
- Always leave a blank line above and below headings, lists, callouts, and images

## Heading Capitalization Standard

| Level | Style | Example |
|-------|-------|---------|
| H1 (frontmatter title) | **Title Case** | `Email Patterns` |
| H2 | **Title Case** | `## Where to Find Patterns` |
| H3 | **Title Case** preferred | `### Edit a Pattern` |
| H4 | Sentence case OK | `#### Available field types` |

If you're updating a doc that consistently uses sentence case, **match the existing convention**. Don't mix in one file.

---

## Doc Type Templates

Pick the template that matches the doc's purpose.

### Type 1: Concept Doc (explains what something IS and WHY)

For: `Email Patterns`, `Contact Statuses`, `Smart Codes`, `Introduction to FluentCRM Automation`

```markdown
---
title: "[Concept Name]"
slug: "[slug]"
category: "[folder]"
order: 0
---

# [Concept Name]

[1–2 sentence definition + why it matters.]

## What is [Concept]?

[Explain in plain language with a real-world analogy if helpful.]

## When to Use [Concept]

[Use cases. When this is the right tool.]

## How It Works

[Brief explanation of the mechanics.]

## What's Next?

- [Link to a how-to doc that uses this concept]
- [Link to related concept]
```

### Type 2: How-To / Walkthrough

For: `Setting Up Campaign`, `Configure SMS Module`, `Migrating from Mailchimp`

```markdown
---
title: "[Action-oriented title]"
slug: "[slug]"
category: "[folder]"
order: 0
---

# [Action-oriented title]

[1–2 sentence overview of what the user will accomplish.]

> **Note:** Before you begin, [prerequisites].

## Step 1: [First Major Stage]

1. Action.
2. Action.

![Alt text](/category/slug/image-1.webp)

## Step 2: [Second Major Stage]

...

## What's Next?

- [Logical next doc in the user journey]
```

### Type 3: Reference Doc

For: `Primary Automation Triggers`, `Smart Codes Editor`, `WooCommerce Automation Actions`

```markdown
---
title: "[Reference Topic]"
slug: "[slug]"
category: "[folder]"
order: 0
---

# [Reference Topic]

[1 sentence: what this is a reference for.]

## How to Access [Item]

[Brief steps to find this in the UI.]

## Available [Items]

[Categorized list of all items in this reference.]

### [Item 1]

[1 sentence: what it does.]

#### Settings

- **[Setting Name]:** [What it controls.]
- **[Setting Name]:** [What it controls.]

![Settings panel](/category/slug/item-1.webp)

### [Item 2]

...
```

### Type 4: Integration Doc

For all `*-integration-with-fluentcrm.md` files in `docs/integrations/`

```markdown
---
title: "[Plugin Name] Integration with FluentCRM"
slug: "[plugin]-integration-with-fluentcrm"
category: "integrations"
order: 0
---

# [Plugin Name] Integration with FluentCRM

[1–2 sentence summary: what this integration enables and why it matters.]

> **Note:** To use this integration, you must have **[Plugin Name]** installed and activated on your WordPress site.

## Setting Up the Integration

[Steps to enable/configure inside FluentCRM.]

## Available Triggers

[List of automation triggers this plugin adds.]

## Available Actions

[List of automation actions this plugin adds.]

## Available Conditions

[Optional — if the plugin adds conditional checks.]

## Smart Codes

[Optional — if the plugin adds Smart Codes for emails.]

## What's Next?

- [Build your first automation with the relevant triggers]
- [Related integration doc]
```

### Type 5: Settings Doc

For: `Business Settings`, `Email Settings`, `Compliance Settings`

```markdown
---
title: "[Settings Page Name]"
slug: "[slug]"
category: "global-settings"
order: 0
---

# [Settings Page Name]

[1 sentence: what this settings page controls.]

To access these settings, go to **FluentCRM → Settings → [Settings Page]**.

## [Setting Group 1]

- **[Setting Name]:** [What it does, what values are valid, what the default is.]
- **[Setting Name]:** [What it does.]

![Settings page](/global-settings/slug/settings-1.webp)

## [Setting Group 2]

...

## What's Next?

- [Related setting / next configuration step]
```
