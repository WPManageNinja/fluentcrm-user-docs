# Style Rules — Steps, Callouts, Images, Links, YouTube, Product Casing

All FluentCRM doc formatting standards live in this one file.

---

## Step Instruction Styles

Three valid step formats. Pick based on the content. **Don't mix styles in one section.**

### Style 1: Numbered Sequential Actions (most common)

Use when steps must be done in order:
```markdown
1. Go to **FluentCRM → Settings → Email Service Settings**.
2. Select **Amazon SES** from the dropdown.
3. Enter your **AWS Access Key** and **AWS Secret Key**.
4. Click **Save Settings**.
```

### Style 2: Bold Label + Description (for option/setting lists)

Use when describing settings panels or option lists:
```markdown
After selecting this trigger, configure the following:

- **Automation Name:** A friendly name to find this automation later.
- **Internal Description:** Notes for your team — appears in the editor.
- **Select Lists:** The lists that will trigger this automation when applied.
- **Run When:** Choose whether the contact must match one or all of the selected lists.
```

### Style 3: Prose Walk-Through (for conceptual flows)

Use when explaining how something works conceptually:
```markdown
When a contact submits the form, FluentCRM checks the **Conditions** you set. If they match, the contact enters the funnel. If they don't, the contact is skipped without ever entering.
```

### Step Style Don'ts

- **Don't mix styles in one section** — pick one
- **Don't end every step with screenshots** — use screenshots strategically, not after every line
- **Don't use bold-label format for sequential actions** — use numbered list

---

## Callouts

The codebase has TWO valid callout formats. **The current standard is GitHub-style (Format B)** — `>[!Note]`, matching what `CLAUDE.md` enforces for new docs.

### Format B: GitHub-Style (preferred for new docs)

```markdown
>[!Note]
> Supplementary information.

>[!Tip]
> Optional but helpful suggestion.

>[!Warning]
> Something critical the user must not skip.
```

### Format A: Bold-Prefix Style (legacy — still found in older docs)

```markdown
> **Note:** [Information the user should know.]
> **Tip:** [Optional but helpful suggestion.]
> **Pro Tip:** [Advanced suggestion for power users.]
> **Warning:** [Critical — skipping causes problems.]
> **Remember:** [Reminder of an earlier point.]
```

**Rule:** When updating a doc, match the format the doc already uses. Don't mix `>[!Note]` and `> **Note:**` in the same file.

### Pro Feature Notice (fixed pattern — use exactly)

```markdown
>[!Note]
> This feature requires **FluentCRM Pro**. [See what's included →](/how-to-install-upgrade-and-activate-license)
```

### Callout Usage Rules

- **One callout per section, max** — too many callouts dilute their importance
- **Callouts go AFTER the relevant content**, not before — they're emphasis, not a header
- **Don't use callouts for required info** — if it's required, put it in the main flow

### When to use which

| Type | Use For |
|------|---------|
| **Note** | Supplementary info the user should be aware of |
| **Tip** | Optional optimization or shortcut |
| **Pro Tip** | Advanced suggestion for experienced users |
| **Warning** | Something that could break things or cause data loss |
| **Remember** | Reminder of a related concept covered earlier |

---

## Images

### File Format & Location

- **Format:** `.webp` only — never `.jpg`, `.png`, `.gif` for new images
- **Location on disk:** `docs/public/[category]/[slug]/descriptive-name-N.webp`
- **Reference in markdown:** `/[category]/[slug]/descriptive-name-N.webp` (no `/docs/public` prefix — VitePress resolves it)

### File Naming

- **Use kebab-case:** `compose-email-3.webp` not `compose_email_3.webp` or `ComposeEmail3.webp`
- **Use a sequential number suffix:** `pattern-1.webp`, `pattern-2.webp`
- **Be descriptive but short:** `automation-trigger-list.webp` not `screenshot-of-the-automation-trigger-list-page.webp`
- **Don't include image dimensions in the name:** ❌ `image-1024x441.png` (legacy convention to avoid)
- **Don't include "scaled":** ❌ `Settings-FluentCRM-scaled.webp` (legacy convention to avoid)

### Alt Text — Always Required, Always Descriptive

Alt text is mandatory and must describe what the image shows. It's used by screen readers and rendered if the image fails to load.

| Bad | Good |
|-----|------|
| `![]()` | `![Twilio settings panel with Account SID field highlighted](/sms-module/twilio-integration/twilio-credentials-2.webp)` |
| `![image](...)` | `![Email composer showing subject line and recipients tab](/email-campaign/setting-up-campaign/compose-1.webp)` |
| `![screenshot](...)` | `![Bounced contacts filter active in Contacts dashboard](/grow-your-audience/contact-statuses/bounced-filter.webp)` |
| `![Settings](...)` | `![FluentCRM Compliance Settings page with Privacy Policy URL field](/global-settings/global-compliance-settings/compliance-1.webp)` |

#### Alt Text Rules
- Describe what's IN the image, not its purpose
- Mention the specific UI element being highlighted/shown
- Use proper sentence case
- Don't start with "Image of..." or "Screenshot of..."
- Keep under 125 characters when possible

### Image Placement

- Place images **AFTER** the step or paragraph they illustrate
- One image per step is the maximum — usually one per 2–3 steps is enough
- Don't lead a section with an image — lead with a sentence

---

## Cross-References & Internal Links

### Link Format

All internal links use this format:
```markdown
[descriptive link text](/slug-here)
```

The link is `/[slug]` — **never** `/docs/[category]/[slug]`. VitePress rewrites handle the folder.

### Link Text Rules

- **Use descriptive link text** — the link should make sense out of context
- **Never use "click here"** or "this link" or "read more"
- **Match link text to the destination doc's title** when possible

| Bad | Good |
|-----|------|
| *"To learn more, [click here](/email-sequence)."* | *"Read the [Email Sequence guide](/email-sequence) for details."* |
| *"Read this [documentation](/automation-editor)."* | *"See the [Automation Editor reference](/automation-editor)."* |
| *"You can find this [in this article](/contact-statuses)."* | *"This is covered in the [Contact Statuses doc](/contact-statuses)."* |

### External Links

- Use full URLs: `https://example.com/path`
- Add context for what's at the link: *"see the [Twilio API docs](https://twilio.com/docs)"*
- For support: `[contact support](https://wpmanageninja.com/support-tickets/)`

### When to Cross-Reference

Always link out to:
- **Prerequisite docs** — *"You need to [enable the SMS module](/configure-sms-module) first."*
- **Related concepts** — *"Smart Codes are explained in detail in the [Smart Codes guide](/smartcodes-in-fluentcrm-email-editor)."*
- **The next logical step** — *"Once you have your form, [build the automation that listens for it](/fluentcrm-automation-triggers)."*

### "What's Next?" Section

End every task-based doc with:

```markdown
## What's Next?

- [Set up your first automation funnel](/automation-editor)
- [Create an email sequence to nurture new contacts](/email-sequence)
```

For pure concept/reference docs, "What's Next?" is optional.

---

## Smart Code Examples in Prose (VitePress Gotcha)

VitePress 2.x parses `{{ }}` as Vue template interpolation **even inside inline backticks**. If you write a Smart Code example like `` `{{contact.first_name}}` ``, the build fails with `Cannot read properties of undefined`.

**Fix:** wrap the example in `<code v-pre>...</code>` instead of backticks:

```markdown
A dynamic placeholder like <code v-pre>{{contact.first_name}}</code> that's replaced with the contact's data.
```

The `v-pre` directive tells Vue to skip compilation. Renders identically to a backtick code span but the braces stay literal. Fenced code blocks (triple-backtick) are automatically `v-pre` so this only affects inline code.

---

## YouTube Video Embeds

The VitePress config has a custom plugin that auto-embeds YouTube URLs.

### How to Embed

Place a standalone YouTube URL on its own line — **not** inside a markdown link, **not** as part of a sentence:

```markdown
This guide explains how Email Sequences work.

https://www.youtube.com/watch?v=6nYOK2UzoVk

Now let's walk through creating one.
```

### Supported URL Formats

```
https://www.youtube.com/watch?v=VIDEO_ID
https://youtu.be/VIDEO_ID
https://youtube.com/watch?v=VIDEO_ID
```

### Rules

- The URL must be the **only thing on the line**
- **Blank lines** above and below the URL
- Don't wrap in `[]()` — the plugin only fires on bare URLs
- If you want a link to a video without embedding, use the markdown link form: `[watch the video](https://youtu.be/...)`
- H3 headings ABOVE the URL are fine — they don't break the embed

---

## Product Name Casing (Strict)

Always check casing against this list before writing or editing.

| ✓ Correct | ✗ Never write |
|-----------|--------------|
| **FluentCRM** | Fluent CRM, fluentCRM, fluentcrm, Fluent crm |
| **FluentCRM Pro** | FluentCRM pro, Fluent CRM Pro, FluentCRMPro |
| **FluentSMTP** | Fluent SMTP, FluentSmtp |
| **FluentForms** (the plugin) | Fluent Forms, fluentForms |
| **Fluent Forms** (in continuous prose / generic) | (acceptable in continuous prose; either form OK) |
| **FluentCommunity** | Fluent Community |
| **FluentSupport** | Fluent Support |
| **FluentCart** | Fluent Cart |
| **FluentBooking** | Fluent Booking |
| **FluentAffiliate** | Fluent Affiliate |
| **FluentBoards** | Fluent Boards |
| **LearnDash** | Learndash, learndash, LearnDASH |
| **LearnPress** | Learnpress, learnpress |
| **LifterLMS** | Lifterlms, LifterLms, lifterlms |
| **TutorLMS** | Tutorlms, TutorLms, tutorlms |
| **Academy LMS** | Academy lms, AcademyLMS, academy lms |
| **WooCommerce** | Woocommerce, woo commerce |
| **MemberPress** | Memberpress, memberpress |
| **BuddyBoss** | Buddyboss, buddyboss |
| **Restrict Content Pro** | Restrict content pro |
| **Paid Memberships Pro** | Paid memberships pro, PaidMembershipsPro |
| **AffiliateWP** | AffiliateWp, Affiliate WP, affiliatewp |
| **Easy Digital Downloads** | Easy digital downloads, easy digital downloads |
| **EDD** | edd (acceptable as abbreviation after first full mention) |
| **Elementor** | elementor |
| **Oxygen Builder** | oxygen builder, OxygenBuilder |
| **Zapier** | zapier |
| **Amazon SES** | Amazon ses, amazon SES |
| **Amazon SNS** | Amazon sns |
| **Amazon End User Messaging** | Amazon end user messaging |
| **Twilio** | twilio |
| **WordPress** | Wordpress, wordpress, WP (only as abbreviation, not in prose) |
| **Gutenberg** | gutenberg |
| **REST API** | Rest API, REST api, rest api |
| **WP-CLI** | wp-cli, WP CLI, wpcli |
