# Sidebar & Folder Map

Use this to determine where every new doc goes — both on disk and in the sidebar.

---

## Folder → Sidebar Section

| Topic | Folder | Sidebar Section |
|-------|--------|-----------------|
| Install, license, dashboard intro, license transfer | `fluentcrm-essentials/` | **Getting Started** |
| Migration, moving sites | `getting-started-with-audience/` | **Migration & Updates → Migration Guides** |
| Global Settings (any panel) | `global-settings/` | **Setup & Delivery → Settings** |
| Email delivery, SMTP, cron jobs | `miscellaneous/` | **Setup & Delivery → Email Delivery & Cron** |
| Bounce handlers (any provider) | `bounce-handlers/` | **Setup & Delivery → Bounce Handling** |
| Contacts, Lists, Tags, Segments, Companies | `grow-your-audience/` | **Audience** |
| Contacts dashboard, Contact profile | `getting-started-with-audience/` | **Audience** |
| Import / export contacts | `grow-your-audience/` | **Audience** |
| Email campaigns, sequences, recurring, templates, patterns, blocks, smart codes | `email-campaign/` | **Campaigns & Forms → Email Campaigns** |
| Forms (Fluent Forms basic & advanced) | `forms/` | **Campaigns & Forms → Forms** |
| SMS module | `sms-module/` | **SMS Module** |
| Automation intro, editor, reports, import/export | `automation-funnels/` | **Automations → (top-level)** |
| Automation triggers (CRM, WP, ecommerce, LMS, membership, subscription) | `automation-funnels/` | **Automations & Events → Triggers & Conditions** |
| Conditional actions | `automation-funnels/` | **Automations & Events → Triggers & Conditions** |
| Actions (primary, email, WP, Woo, LMS, misc, goals, abandon cart) | `automation-funnels/` | **Automations & Events → Actions & Goals** |
| Event tracking | `event-tracking/` | **Automations & Events → Event Tracking** |
| Forms & Ecommerce integrations | `integrations/` | **Integrations → Forms & Ecommerce** |
| LMS integrations | `integrations/` | **Integrations → LMS Integrations** |
| Membership integrations | `integrations/` | **Integrations → Membership Integrations** |
| Community / Affiliate / Booking / Boards / Support | `integrations/` | **Integrations → Community & Growth** |
| Builders (Elementor, Oxygen) / Zapier / Webhook | `integrations/` | **Integrations → Builders & Automation Tools** |
| Reports (CRM, Woo, EDD, LMS, abandoned cart) | `advanced-reports/` | **Reports & Analytics** |
| Action hooks, useful snippets | `devloper/` | **Advanced & Developer → Advanced Usage** or **Developer Tools** |
| PHP API (Contact, Lists & Tags), REST API | `devloper/` | **Advanced & Developer → Developer APIs & Hooks** |
| Custom triggers/actions/conditions/benchmarks | `devloper/` | **Advanced & Developer → Custom Automations** |
| Form field code, code snippets, WP-CLI | `devloper/` | **Advanced & Developer → Developer Tools** |
| FAQ entries | `frequently-asked-questions/` | **Help & Updates** |
| Changelog | `change-log/` | **Help & Updates** |

>[!Note]
> The `devloper/` folder name has a typo (missing the second `e`). This is the actual folder name on disk and in the config — use it as-is. Don't rename it without a coordinated migration.

---

## Sidebar Top-Level Sections (in `config.mts` order)

1. Getting Started
2. Setup & Delivery (Settings, Email Delivery & Cron, Bounce Handling)
3. Audience
4. Campaigns & Forms (Email Campaigns, Forms)
5. SMS Module
6. Automations (basics directly under)
7. Automations & Events (Triggers & Conditions, Actions & Goals, Event Tracking)
8. Integrations (Forms & Ecommerce, LMS, Membership, Community & Growth, Builders & Automation Tools)
9. Reports & Analytics
10. Advanced & Developer (Advanced Usage, Developer APIs & Hooks, Custom Automations, Developer Tools)
11. Migrate to FluentCRM
12. Help & Support

---

## Sidebar Config Entry Patterns

### Single entry
```ts
{ text: 'Page Title', link: '/the-slug' },
```

### Nested sub-group inside a section
```ts
{
  text: 'Group Name',
  collapsed: true,
  items: [
    { text: 'Page Title', link: '/the-slug' },
  ],
},
```

### Top-level section
```ts
{
  text: 'Section Name',
  collapsed: true,   // false only for "Getting Started"
  items: [ ... ],
},
```

---

## Rules for Sidebar Entries

- The `link` is always `/[slug]` — **never** `/docs/[slug]` and **never** `/docs/[category]/[slug]`. VitePress rewrites strip both.
- The slug = filename without `.md` (matches the `slug` field in the doc's frontmatter).
- Find the correct section by its `// N. Section Name` comment in `config.mts`.
- Add the entry in a logical position (alphabetical inside reference groups, journey-order inside tutorial groups).
- Verify the `.md` file actually exists on disk before adding the entry — orphan links break the build.
