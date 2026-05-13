# Workflows

Four workflows. Pick by intent: write new / update / audit / sidebar.

---

## Workflow A — Write a New Doc

### A1. Confirm Scope
Before writing, answer:
1. What is the topic? (be specific)
2. Which doc type is this? (concept / how-to / reference / integration / settings — see `doc-anatomy.md`)
3. Which folder does it belong in? (see `sidebar-and-folders.md`)
4. What slug will it use? (kebab-case, will match the filename)
5. Does a similar doc already exist? (search for it before duplicating)
6. Are screenshots available, or should you write placeholder image references?

If anything is unclear, ask.

### A2. Create the File
- File path: `docs/[folder]/[slug].md`
- Use the matching template from `doc-anatomy.md`
- Fill frontmatter correctly:
  - `title` Title Case
  - `slug` matches filename
  - `category` matches folder name exactly (including the `devloper` typo)
  - `order: 0`
- Write the intro that front-loads value (no "this article will guide you through…")

### A3. Write the Body
- Apply voice/tone from `voice-and-tone.md`
- Pick a step style from `style-rules.md` (sequential / bold-label / prose) — don't mix in one section
- Place callouts strategically per `style-rules.md` — one per section max
- Write descriptive alt text for every image
- Cross-link to related docs (descriptive link text, no "click here")

### A4. Add to Sidebar
- Update `.vitepress/config.mts`
- Find the right top-level section (see `sidebar-and-folders.md`)
- Add: `{ text: 'Page Title', link: '/the-slug' },`
- The `link` is `/[slug]` — never includes the folder or `/docs/` prefix

### A5. Run the Quality Checklist
See `quality-checklist.md`. Don't declare done until every item passes.

---

## Workflow B — Update an Existing Doc

### B1. Read the Whole File First
Use the `Read` tool to load the complete file before making any edits. **Never edit blind.**

### B2. Identify Exactly What's Changing

Classify each proposed change:
- **Factual changes** (feature behaviour, step sequences, UI labels) — only with user instruction or verification from `source-plugin/`
- **Tone & formatting fixes** — safe to apply per the standards in `voice-and-tone.md` and `style-rules.md`
- **Missing content** — confirm with user before adding

### B3. Make Targeted Edits
- Use the `Edit` tool with surgical precision (not `Write` unless rewriting whole file)
- **Never rewrite accurate sections** to "improve" them unless asked
- **Preserve all factual content** unless explicitly told otherwise
- **Match existing callout style** — if the doc uses `> **Note:**`, don't introduce `>[!Note]` (and vice versa)
- **Match existing heading capitalization** — if the file is consistently sentence case, stay sentence case

### B4. Run Quality Checklist on Touched Sections
Don't audit the whole file unless asked — just verify the parts you changed pass `quality-checklist.md`.

---

## Workflow C — Audit a Doc

### C1. Read the File
Load it fully.

### C2. Check Against the Quality Checklist
Run `quality-checklist.md` against the file. Note line numbers as you go.

### C3. Report, Don't Auto-Fix

Format issues as:
```
[Line ~N] Issue: [what's wrong]
  → Fix: [what it should be]
```

End the audit with:

> *"Should I apply all of these fixes, or which specific ones would you like?"*

Wait for the user to confirm before editing.

---

## Workflow D — Update the Sidebar Only

1. Read `.vitepress/config.mts`
2. Find the correct section by its `// N. Section Name` comment
3. Add, remove, or reorder entries
4. Verify the link is `/slug` format (no `/docs/` prefix) and the `.md` file actually exists on disk
5. Don't change the top-level section structure unless asked. The 25 sections (as of last audit) are listed in `sidebar-and-folders.md`.

---

## Source Plugin Verification

When in doubt about whether a feature behaves as the doc claims, check the plugin source:
- `source-plugin/fluent-crm/` — Free version (`3.0.0-rc.2`)
- `source-plugin/fluentcampaign-pro/` — Pro version (`3.0.0-rc.2.1`)

Don't invent functionality. If the doc says a feature exists and you can't find it in the source, ask the user before adding/removing references.
