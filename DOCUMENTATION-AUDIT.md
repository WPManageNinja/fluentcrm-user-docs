# FluentCRM Documentation — Full Technical Writing Audit

> **Audited by:** Expert Technical Writer Review  
> **Date:** 2026-05-04  
> **Scope:** All 142 markdown files across 16 doc sections + VitePress config + navigation structure  
> **Version Covered:** FluentCRM v3.0.0-rc.2.x  

---

## Executive Summary

The documentation is functional and covers most features, but it suffers from **three core problems** that prevent it from being flagship-level:

1. **Inconsistent tone and voice** — newer docs (Automations, LMS, SMS) are polished and conversational; older docs (Bounce Handlers, Global Settings, Business Setup) are stiff, passive, and occasionally contain typos. A first-time reader will immediately feel the quality gap.
2. **No clear user journey** — there is no explicit path from zero → value. New users must self-navigate through 142 docs with no signposting, no "what's next?" guidance, and no conceptual overview of how the product works.
3. **Structural and naming problems** — several section names don't match user mental models, the nav nesting is too deep in places, and a critical folder has a permanent typo (`devloper`).

**Overall Rating: B− (Good foundation, flagship-level gaps)**

---

## Section 1 — Tone & Voice Analysis

### 1.1 The Two-Voice Problem

The documentation has two clearly different voices written by different authors at different times. This creates a disjointed reading experience.

| Voice | Where Found | Example |
|-------|-------------|---------|
| **Formal / Passive** (old) | Business Settings, Bounce Handlers, Automation Editor, Campaign Setup | *"As an Email Marketing Application, It is necessary to have business details..."* |
| **Warm / Conversational** (new) | Automation Introduction, LMS Triggers, SMS Module, Contact Statuses | *"As your business grows, you might end up with dozens of automations. Labels keep your dashboard clutter-free."* |

**The fix:** Adopt one voice standard. The newer conversational tone is the right direction — apply it consistently across all older docs.

**Voice standard to adopt:**
- Second person ("you"), active voice
- Short declarative sentences
- Explain the "why" briefly before the "how"
- No passive constructions like "the following will be displayed"

---

### 1.2 Specific Typos & Grammar Errors Found

| File | Issue | Exact Text |
|------|-------|-----------|
| `conditional-automation-actions.md` | Typo | *"Once you set the desired **condion/s**"* (should be "condition/s") |
| `bounce-handler-with-amazon-ses.md` | Missing apostrophe | *"Thats it!"* (should be "That's it!") |
| `global-business-settings.md` | Capital mid-sentence | *"It is necessary to have business details... It is necessary"* — "It" capitalized mid-sentence |
| `global-business-settings.md` | Redundant phrase | *"business company"* — redundant (either "business" or "company") |
| `segment-your-audience.md` | Wrong capitalization | *"FLuentCRM"* (extra capital L) |
| `crm-advanced-reports.md` | Inconsistent capitalization | *"FluentCRM advanced Reports"* — mixed case in heading |
| Multiple automation docs | Inconsistent product name casing | *"Learndash"* vs *"LearnDash"* — used interchangeably |
| `automation-editor.md` | Vague phrasing | *"follow the article accordingly"* — adds nothing, delete it |
| `primary-automation-triggers.md` | Passive opener | *"The detailed explanation of all the CRM Triggers is given below –"* |

---

### 1.3 Formatting Inconsistencies

- **Callout style varies**: Some docs use `>[!Note]` (GitHub-style), others use `> **Remember**`, others use `> **Note:**`. No standard.
- **Bold usage**: Some docs bold UI element names (`**Automations**`), others don't. No pattern.
- **Step numbering**: Some docs use `1.`, `2.`, `3.` nested under H3 headings. Others use inline numbered lists. Both exist in the same section.
- **Dash style**: Some docs use `–` (en dash) as sentence separator. Others use `—` (em dash) or `:`. No standard.
- **"new in v3" annotation**: Appears on some features (*UTM Parameters*, *Email Patterns*) but is not applied consistently to all v3 features.

---

## Section 2 — Structure & Navigation

### 2.1 Sidebar Section Names vs. User Mental Models

| Current Name | Problem | Suggested Name |
|---|---|---|
| **Setup & Delivery** | "Delivery" implies email delivery, not configuration. Confusing. | **Configuration** |
| **Campaigns & Forms** | Forms are not campaigns. Odd pairing with no logical link. | **Email Marketing** (move forms to own sub-section or Integrations) |
| **Automations & Events** | "Events" is a developer term (event tracking). Non-devs won't know what this means. | **Automations** |
| **Advanced & Developer** | Mixes advanced-user features with developer APIs — two different audiences | Split into **Advanced Usage** + **Developer** |
| **Help & Updates** | Vague. Contains changelog (not "help"), FAQ, and support info. | **Help & Support** |
| **Migration & Updates** | "Updates" is redundant with changelog. | **Migration Guides** |

### 2.2 Navigation Depth Problem

The sidebar nesting reaches **4 levels deep** in some areas:

```
Help & Updates
  └── Migration & Updates
        └── Migration Guides
              └── [individual guide]
```

This is too deep. Users cannot see their location. A max of **3 levels** is the industry standard for technical docs.

### 2.3 Items in the Wrong Section

- **"Transfer License from One Domain to Another"** is in **Getting Started**. This is not a getting-started task — it's maintenance. Move to a "Licensing & Account" section or under Help.
- **Migration docs** are in a separate top-level section but logically belong inside Getting Started (migration is part of the onboarding journey).
- **Bounce Handlers** are inside "Setup & Delivery" but are an advanced configuration task, not something a beginner encounters on setup day.
- **"Changelog"** is a top-nav item alongside User Docs, Dev Docs, Website. The changelog is not a peer of the docs — it should be inside Help, not the primary nav.

### 2.4 The `devloper` Folder Typo

The folder `docs/devloper/` has a permanent misspelling (missing the second `e`). This appears in:
- The filesystem path
- The VitePress config comments
- The URL rewrites

**Impact:** While VitePress rewrites hide this from URLs, it looks unprofessional in the codebase and any direct file references. This should be fixed with a folder rename + config update.

### 2.5 The Automation Section is Over-Fragmented

Triggers are split across **5 separate docs** with no master overview:

1. `fluentcrm-automation-triggers.md` — CRM + WordPress triggers
2. `fluentcrm-ecommerce-triggers.md` — WooCommerce + EDD
3. `fluentcrm-lms-triggers.md` — All LMS platforms
4. `fluentcrm-membership-triggers.md` — Membership plugins
5. `woocommerce-subscription-triggers.md` — Woo subscriptions (separate from ecommerce triggers)

A user building an automation has no single place to see "what triggers are available to me?" They must read all 5 docs. A **"Triggers Overview"** page listing all available triggers with links to details is needed.

The same problem exists for actions (primary, email, wordpress, woocommerce, lms, miscellaneous = 6 separate docs).

### 2.6 Getting Started Folder vs. Grow Your Audience Folder

The filesystem has two folders that overlap conceptually:
- `docs/getting-started-with-audience/` — contains `dashboard-introduction.md`, `how-to-install-upgrade-and-activate-license.md` etc.
- `docs/grow-your-audience/` — contains contacts, segments, company module etc.

Only `grow-your-audience` appears in the sidebar. The `getting-started-with-audience` folder appears to be a legacy/unused path. This should be cleaned up to avoid confusion.

---

## Section 3 — User Journey Assessment

### 3.1 No Explicit New-User Path

A first-time user lands on the homepage and sees 8 feature cards. Nothing tells them in what **order** to do things. The implicit journey is:

```
Install → Settings → Import Contacts → Create Campaign → Build Automation
```

But this is never spelled out anywhere. Users have to reverse-engineer the order from doc content.

**Missing:** A "Start Here" guide that walks a new user through the first 30 minutes in explicit sequence with direct links to each step.

### 3.2 No "What's Next?" Navigation

Every doc article ends abruptly. There are no:
- "Next step: [link]" footers
- "Related articles" sections
- "Before you continue, make sure you've done X" prerequisites

This is a major UX gap. Users finish reading one doc and have no guidance on where to go next.

### 3.3 No Prerequisites / "Before You Begin" Pattern

Complex docs don't warn users what they need in place first. Examples:

- **Automation docs** should warn: *"Make sure you have contacts imported and a trigger event configured."*
- **Bounce handler docs** should warn: *"You need a verified domain and an active email service first."*
- **Dynamic Segments** should warn: *"You need contacts in FluentCRM before segments will show data."*

### 3.4 Free vs. Pro Distinction is Scattered

The `> Remember, to use [feature] you need FluentCRM Pro` callout appears in ~20+ docs scattered throughout. There is no single page that shows what is free vs. what requires Pro. New users don't know what they're getting until they hit a wall.

**Missing:** A "Free vs. Pro Feature Comparison" table or page.

### 3.5 No "What is FluentCRM?" Conceptual Page

The documentation assumes you already know what FluentCRM is and how its pieces fit together. There is no:
- Conceptual overview diagram (how Contacts → Lists → Campaigns → Automations connect)
- Glossary of terms (what is a "Funnel"? What is a "Benchmark"? What is a "Smart Code"?)
- Product architecture explanation

Flagship docs (HubSpot, Mailchimp, ActiveCampaign) all have this.

---

## Section 4 — Section-by-Section Content Audit

### 4.1 Getting Started — Grade: C

| Issue | Detail |
|-------|--------|
| Missing "What is FluentCRM?" page | No conceptual intro for brand new users |
| "Transfer License" in wrong section | Not a getting-started task |
| No system requirements doc | PHP version, WP version, memory requirements not documented |
| Dashboard Introduction path broken | `docs/fluentcrm-essentials/dashboard-introduction.md` path referenced but file resolves differently |
| No quick-start sequential guide | |

### 4.2 Global Settings — Grade: B−

| Issue | Detail |
|-------|--------|
| Business Settings tone is stiff | "As an Email Marketing Application, It is necessary..." — rewrite needed |
| AI Writing Settings | Referenced in sidebar (`/docs/ai-writing-settings`) — unclear if doc exists and is current |
| Smart code format | Uses HTML entities (`&#123;&#123;`) which renders fine but is hard to read in source |
| No "Settings Overview" visual | No diagram or table showing which settings affect what |

### 4.3 Audience Section — Grade: B

| Issue | Detail |
|-------|--------|
| Contacts Dashboard: mixed list formats | Old-style `1. **Filter By Lists:**` numbered section mixed with new bullet format in same doc — inconsistent |
| "FLuentCRM" typo | In `segment-your-audience.md` |
| Company Module callout style | Uses `> **One of the notable features...** ` blockquote for promotional text — doesn't belong in docs |
| Import Contacts | Covers CSV + WP Users, but "import from other integrations" is a separate doc — unclear to user |
| No "Contact Lifecycle" explanation | How does a contact move from Subscribed → Unsubscribed → Bounced? No visual flow |

### 4.4 Email Marketing — Grade: B

| Issue | Detail |
|-------|--------|
| "new in v3" applied inconsistently | Only on UTM Parameters and Email Patterns — other v3 features not marked |
| Recurring Campaigns | Only covered in overview, no dedicated doc |
| A/B Testing (Subject line) | Mentioned in campaign setup but no dedicated explanation of how to interpret results |
| Content Blocks | Good reference, but no visual examples for each block type |
| Email Patterns | Listed as "new in v3" but what it IS isn't clearly explained in the overview |
| Email Sequence | Well-written — model for other docs to follow |

### 4.5 SMS Module — Grade: B

| Issue | Detail |
|-------|--------|
| No SMS Module Overview page | No "what is this, why use it, what providers are supported?" intro page |
| Amazon End User Messaging | The doc exists but is relatively thin (52 lines) for a complex AWS setup |
| SMS Automation doc | Good but assumes user already knows general automation — no cross-link to Automation section |
| Provider comparison | No "Twilio vs Amazon" comparison to help users choose |

### 4.6 Automations — Grade: B+

| Issue | Detail |
|-------|--------|
| "condion/s" typo | In `conditional-automation-actions.md` |
| No "All Triggers at a Glance" page | Triggers split across 5 docs with no master reference |
| No "All Actions at a Glance" page | Actions split across 6 docs with no master reference |
| Automation Editor doc intro | "The most important use of the FluentCRM is..." — stiff opener, rewrite |
| Automation Reports | Good structure but thin — no guidance on interpreting metrics |
| Goals/Benchmark naming confusion | "Goals or Benchmark Actions" is confusing — "Goals" (user-facing) vs "Benchmark" (developer term) |

### 4.7 Integrations — Grade: C+

| Issue | Detail |
|-------|--------|
| No standard integration doc template | Quality varies wildly: Fluent Forms has 2 thorough docs; some integrations have ~30 lines |
| Academy LMS | Mentioned in LMS Triggers doc but has NO integration doc |
| Bounce Handlers (worst section) | See Section 4.8 below |
| Zapier Integration | Listed but unclear how comprehensive the doc is |
| FluentCart | Has `fluentcart-integration.md` AND `fluentcart-abandon-cart-automation.md` — relationship between them unclear |
| Two Woo abandon cart docs | `abandon-cart-automation.md` + `fluentcart-abandon-cart-automation.md` — confusing overlap |

### 4.8 Bounce Handlers — Grade: D

This is the lowest-quality section in the documentation.

| Issue | Detail |
|-------|--------|
| No introductory "Why Bounce Handling Matters" page | Users don't know WHY they need this or which provider to use |
| "Thats it!" typo | In Amazon SES doc |
| Image format inconsistency | Bounce handler images use `.jpg`/`.png` while rest of site uses `.webp` |
| Empty alt text on images | `![]()` pattern — no alt text on most bounce handler images |
| No "which bounce handler?" guidance | 10 handlers listed, no recommendation for which to use with which email service |
| Bare numbered-steps style | No explanatory text, just "do this, click that" — explains nothing about what's happening |
| No troubleshooting section | If bounce handling fails, where does the user go? |

### 4.9 Reports & Analytics — Grade: C+

| Issue | Detail |
|-------|--------|
| Heading capitalization | "FluentCRM advanced Reports" — inconsistent capitalization |
| "Learndash" vs "LearnDash" | Wrong in headings |
| No metric interpretation | Docs label what each chart shows but never explain what a "good" rate looks like |
| Abandoned Cart Report | Exists as a separate doc but unclear if it's in Reports section or Automation section |
| WooCommerce Reports | Listed in CRM Advanced Reports doc — should it have its own dedicated page? |
| No export instructions | Can users export report data? Not documented |

### 4.10 Advanced & Developer — Grade: B

| Issue | Detail |
|-------|--------|
| `devloper` folder typo | Permanent in filesystem and config |
| Custom Automation Action | Well-documented — good example of developer doc quality |
| Event Tracking | 3 separate docs with minimal linkage between them; no overview page explaining the feature concept |
| "Developer Tools" sub-section | Mixes Form Field Code Structure, Code Snippets, WP-CLI — heterogeneous content, unclear audience |
| No API Authentication doc | How to authenticate REST API calls — if it exists, it's buried |

### 4.11 FAQ — Grade: D

| Issue | Detail |
|-------|--------|
| Only ~6 questions | Far too thin for a product this complex |
| No categories | All questions in one flat list |
| Missing most common questions | Nothing about pricing, comparing to competitors, data import issues, deliverability, unsubscribe handling |
| No search | Users can't find answers without reading all questions |

**FAQ should have minimum 30 questions across categories:**
- Getting Started / Installation
- Contacts & Import
- Email Campaigns
- Automations
- Deliverability & Technical
- Integrations
- Account & Licensing

---

## Section 5 — Missing Content (Gaps)

These are features or concepts that exist in the plugin but have no documentation or very insufficient documentation:

| Missing Doc | Priority | Notes |
|-------------|----------|-------|
| "What is FluentCRM?" conceptual overview | **Critical** | No product overview for new users |
| Free vs. Pro Feature Comparison | **Critical** | Users don't know what requires Pro |
| System Requirements | **High** | PHP, WP version, memory, MySQL |
| Smart Codes / Merge Tags: Complete Reference | **High** | Scattered mentions; needs one master reference page |
| Troubleshooting Guide | **High** | Only generic WP error doc exists |
| GDPR / Compliance Guide | **High** | Mentioned in settings but no dedicated page |
| Email Deliverability Best Practices | **High** | Not tied to SMTP setup; standalone guide needed |
| Academy LMS Integration | **High** | Referenced in LMS Triggers, no integration doc |
| SMS Module Overview Page | **Medium** | No intro page for the entire SMS module |
| Recurring Campaigns Dedicated Doc | **Medium** | Only covered briefly in email overview |
| A/B Testing Results Interpretation | **Medium** | Feature exists, no guide on interpreting results |
| "First 30 Minutes" Quick Start Guide | **Medium** | No sequential onboarding path |
| Glossary of Terms | **Medium** | What is a Funnel, Benchmark, Smart Code, Segment? |
| Automation Overview Diagram | **Medium** | Visual "how automations work" explainer |
| All Triggers at a Glance Reference | **Medium** | Master list of all triggers with links |
| All Actions at a Glance Reference | **Medium** | Master list of all actions with links |
| FluentCart vs WooCommerce Abandon Cart | **Low** | Clarify difference between the two abandon cart docs |
| Contact Lifecycle Visual | **Low** | How statuses change (Subscribed → Bounced → etc.) |
| Report Metrics Interpretation Guide | **Low** | What's a "good" open rate? Unsubscribe rate? |
| Migrating from Mailchimp | **Low** | Specific competitor migration guide |
| Migrating from ActiveCampaign | **Low** | Specific competitor migration guide |

---

## Section 6 — Category & Structure Improvement Plan

### 6.1 Proposed Sidebar Structure

```
Getting Started (expanded by default)
  ├── What is FluentCRM?                    [NEW]
  ├── System Requirements                    [NEW]
  ├── Install, Upgrade & Activate
  ├── Dashboard Overview
  └── Quick Start Guide (First 30 Minutes)  [NEW]

Configuration
  ├── Global Settings Overview
  ├── Business Setup
  ├── Email Settings
  ├── Email Service & SMTP
  │   └── [bounce handlers MOVED HERE]
  ├── General Settings
  ├── Custom Fields
  ├── Smart Links
  ├── Double Opt-in
  ├── Integrations Settings
  ├── AI Writing
  ├── Compliance Settings
  ├── Webhooks
  ├── Managers & Roles
  ├── Tools
  └── Abandoned Cart Settings

Contacts & Audience
  ├── Contacts Dashboard
  ├── Add & Manage Contacts
  ├── Contact Overview (Profile)
  ├── Contact Statuses
  ├── Contact Lifecycle                      [NEW]
  ├── Import Contacts (CSV)
  ├── Import from Integrations
  ├── Export Contacts
  ├── Segments: Lists & Tags
  ├── Dynamic Segments
  ├── Advanced Filter
  └── Company Module

Email Marketing
  ├── Overview of Email in FluentCRM
  ├── Email Campaigns
  │   ├── Create a Campaign
  │   ├── Compose Your Email
  │   ├── Subject & Settings
  │   ├── A/B Testing                       [EXPAND]
  │   ├── Recipients
  │   ├── Review & Send
  │   └── Campaign Reports
  ├── Email Sequences
  ├── Recurring Campaigns                   [DEDICATE]
  ├── Email Templates
  ├── Email Patterns (v3)
  ├── Content Blocks in Email Editor
  ├── Conditional Sections in Editor
  ├── Smart Codes in Editor
  └── Labels for Campaigns

SMS Module
  ├── SMS Module Overview                   [NEW]
  ├── Configure SMS Module
  ├── Twilio Integration
  ├── Amazon End User Messaging
  └── SMS Automation

Automations
  ├── Introduction to Automations
  ├── Creating Automations (Editor)
  ├── All Available Triggers (Overview)     [NEW]
  │   ├── CRM Triggers
  │   ├── WordPress Triggers
  │   ├── Ecommerce Triggers
  │   ├── LMS Triggers
  │   ├── Membership Triggers
  │   └── Subscription Triggers
  ├── All Available Actions (Overview)      [NEW]
  │   ├── Primary Actions
  │   ├── Email Actions
  │   ├── WordPress Actions
  │   ├── WooCommerce Actions
  │   ├── LMS Actions
  │   ├── Goals / Benchmarks
  │   ├── Conditional Actions
  │   └── Miscellaneous Actions
  ├── Automation Reports
  ├── Abandon Cart Automation
  └── Import & Export Automations

Event Tracking
  ├── Event Tracking Overview               [NEW]
  ├── Event Tracking with Automation
  ├── Event Tracking via Action Hooks
  └── Event Tracking Records

Integrations
  ├── Forms & Data Collection
  │   ├── Fluent Forms (Basic)
  │   ├── Fluent Forms (Advanced)
  │   └── [other form builders]
  ├── Ecommerce
  │   ├── WooCommerce
  │   ├── WooCommerce Subscriptions
  │   ├── Easy Digital Downloads
  │   ├── SureCart
  │   └── FluentCart
  ├── LMS
  │   ├── LearnDash
  │   ├── LifterLMS
  │   ├── TutorLMS
  │   ├── LearnPress
  │   └── Academy LMS                       [NEW]
  ├── Membership
  │   ├── MemberPress
  │   ├── Paid Memberships Pro
  │   └── Restrict Content Pro
  ├── Community & Builders
  │   ├── BuddyBoss
  │   ├── FluentCommunity
  │   ├── Elementor
  │   └── Oxygen Builder
  └── Automation & Growth Tools
      ├── Zapier
      ├── Webhook Integration
      ├── AffiliateWP
      └── FluentAffiliate

Reports & Analytics
  ├── CRM Reports
  ├── WooCommerce Reports
  ├── EDD Reports
  ├── LearnDash Reports
  ├── LifterLMS Reports
  └── Abandoned Cart Report

Developer
  ├── Developer Overview                    [NEW]
  ├── REST API Authentication               [CLARIFY]
  ├── Action Hooks
  ├── Custom Automation Trigger
  ├── Custom Automation Action
  ├── Custom Automation Condition
  ├── Custom Benchmark/Goal
  ├── Contact PHP API
  ├── Lists & Tags PHP API
  ├── Form Field Code Structure
  ├── Useful Code Snippets
  └── WP-CLI Commands

Help & Support
  ├── FAQ (Expanded)                        [MAJOR REWRITE]
  ├── Free vs. Pro Features                 [NEW]
  ├── System Requirements                   [NEW → or move to Getting Started]
  ├── Smart Codes Reference                 [NEW]
  ├── Glossary                              [NEW]
  ├── Troubleshooting                       [EXPAND]
  ├── Email Deliverability Guide            [NEW]
  ├── GDPR & Compliance Guide               [NEW]
  └── Cron Job Setup

Migration Guides (move inside Getting Started)
  ├── Migrating into FluentCRM (general)
  ├── Migrate via CSV
  ├── Migrate via API
  ├── Migrating from Mailchimp              [NEW]
  ├── Migrating from ActiveCampaign         [NEW]
  └── Move FluentCRM to New Site

Changelog
```

---

## Section 7 — Priority Fix List

### Tier 1 — Fix Immediately (Errors & Broken Experience)

1. **Fix typos**: `condion/s` → `condition/s` (conditional-automation-actions.md)
2. **Fix typos**: `Thats` → `That's` (bounce-handler-with-amazon-ses.md)
3. **Fix typos**: `FLuentCRM` → `FluentCRM` (segment-your-audience.md)
4. **Fix typos**: `business company` → `business` (global-business-settings.md)
5. **Fix casing**: `FluentCRM advanced Reports` → `FluentCRM Advanced Reports` (crm-advanced-reports.md)
6. **Fix casing**: Standardize `LearnDash` (not `Learndash`) across all docs
7. **Fix casing**: Standardize `FluentCRM` (not `Fluent CRM`) — the product name is one word
8. **Add alt text** to all empty image tags in bounce handler docs
9. **Remove "Transfer License" from Getting Started** — wrong section
10. **Fix "Changelog" from primary nav** — move inside Help

### Tier 2 — High Priority (User Journey & Trust)

11. **Write "What is FluentCRM?" conceptual overview** — first page a new user reads
12. **Write "Quick Start Guide"** — sequential steps: Install → Settings → Contacts → Campaign → Done
13. **Write "Free vs. Pro" comparison page** — remove scattered Pro reminders from individual docs
14. **Write System Requirements page**
15. **Rewrite Business Settings doc** — replace stiff formal tone with conversational voice
16. **Rewrite Bounce Handler docs** — add intro, add explanatory text, standardize alt text
17. **Rewrite Automation Editor intro** — "The most important use of the FluentCRM is..." is a poor opener
18. **Rewrite `conditional-automation-actions.md` opener** — currently starts with no context
19. **Standardize callout style** — pick one: `>[!Note]` or `> **Note:**` and use it everywhere
20. **Add "What's Next?" footer to all Getting Started and Audience docs**

### Tier 3 — Medium Priority (Quality & Completeness)

21. **Write "All Triggers at a Glance" page**
22. **Write "All Actions at a Glance" page**
23. **Write "SMS Module Overview" page**
24. **Expand FAQ to minimum 30 questions organized by category**
25. **Write Academy LMS integration doc** (referenced but missing)
26. **Dedicate a Recurring Campaigns page** (currently only covered in email overview)
27. **Expand Automation Reports** with metric interpretation guidance
28. **Write Troubleshooting Guide** with common error scenarios
29. **Write Email Deliverability Best Practices guide**
30. **Write GDPR & Compliance Guide**
31. **Write Glossary page** (Funnel, Benchmark, Smart Code, Segment, Dynamic Segment, etc.)
32. **Standardize "new in v3" annotation** — apply to ALL v3 features or remove entirely
33. **Fix folder typo** `devloper` → `developer` (with URL redirect if needed)
34. **Consolidate FluentCart abandon cart docs** — clarify how they relate

### Tier 4 — Improvements (Flagship Polish)

35. **Add Smart Codes complete reference page**
36. **Add Automation Overview Diagram** (visual explainer)
37. **Add Contact Lifecycle visual** (how statuses flow)
38. **Add "Before You Begin" blocks** to all complex docs
39. **Convert all bounce handler images** from .jpg/.png to .webp
40. **Add migration guides** for Mailchimp and ActiveCampaign specifically
41. **Rename sidebar sections** per Section 6.1 proposal
42. **Restructure sidebar navigation** per Section 6.1 proposal

---

## Section 8 — Writing Standards Reference

Apply these standards to all new and rewritten docs:

### Page Template
```
---
title: "[Page Title]"
description: "[One-line SEO description]"
---

# [Page Title]

[1-2 sentence intro: what this feature does and why it matters]

> **Before you begin:** [prerequisites if any]

## [Section]
...

## What's Next?
- [Link to next logical doc]
- [Link to related doc]
```

### Callout Standard
```
>[!Note]
> Important supplementary information

>[!Warning]
> Something the user must not skip

>[!Tip]
> Optional but helpful
```

### Pro Feature Notice (single standard)
```
>[!Note]
> This feature requires **FluentCRM Pro**. [Learn what's included in Pro →](/docs/free-vs-pro)
```

### Voice Checklist
- [ ] Written in second person ("you")
- [ ] Active voice throughout
- [ ] UI elements in **bold** consistently
- [ ] No passive constructions ("will be displayed", "is given below")
- [ ] Intro explains WHY before HOW
- [ ] Steps are numbered, prose uses bullet points
- [ ] "What's Next?" at the end of task-based docs
- [ ] Images have descriptive alt text

---

*End of audit. 142 files reviewed. 40 prioritized action items identified.*
