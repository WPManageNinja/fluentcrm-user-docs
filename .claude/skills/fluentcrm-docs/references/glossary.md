# FluentCRM Glossary

Use these terms consistently. They are FluentCRM's product vocabulary.

| Term | Definition | When to use |
|------|-----------|-------------|
| **Contact** | A person/record in FluentCRM | Always for individuals in the database |
| **Subscriber** | A contact with `Subscribed` status | Only when status is the point |
| **Lead** | A new contact, not yet engaged | Marketing context |
| **List** | Static contact grouping (manual) | When teaching segmentation |
| **Tag** | Static contact label (granular) | When teaching segmentation |
| **Segment** | Dynamic contact grouping (auto-updates) | The dynamic feature, post-v3 |
| **Dynamic Segment** | Same as Segment, when contrasting with Lists/Tags | When clarifying static vs dynamic |
| **Company** | A company record that contains contacts | B2B context |
| **Custom Field** | User-defined data field on a contact | Extending contact data |
| **Campaign** | A one-time bulk email blast | Scheduled or immediate |
| **Email Sequence** | A series of timed emails sent to a contact | Onboarding, drip series |
| **Recurring Campaign** | A campaign sent on a schedule (daily/weekly/monthly) | Newsletters |
| **Email Template** | A reusable full email design | Stored in Templates |
| **Email Pattern** | A reusable design block (header, footer, etc.) | New in v3, Gutenberg-based |
| **Funnel** | Synonym for an automation workflow | "Automation Funnel" in older docs |
| **Automation** | The feature that runs Funnels | Top-level feature name |
| **Trigger** | The event that starts a Funnel | "When this happens..." |
| **Action** | A task the Funnel performs | "...do this" |
| **Goal** / **Benchmark** | A jump-ahead point in a Funnel | "If user does X, skip ahead" |
| **Conditional** | A branch in a Funnel based on data | "Check if..." |
| **Smart Code** | A dynamic placeholder, e.g., `{{contact.first_name}}` | Content personalization |
| **Smart Link** | A trackable URL that triggers actions on click | Trackable links + segmentation |
| **Bounce Handler** | The endpoint that processes hard bounces from your email service | Deliverability |
| **SMS Module** | The optional add-on for SMS messaging | Twilio + Amazon EUM |
| **Webhook** | An external HTTP endpoint that posts data to or receives data from FluentCRM | Integrations |
| **Event Tracking** | The feature for logging custom events on contact profiles | Module |
| **Smart Headings / Smart Buttons / Magic Image** | AI Writing tools in the Visual Builder | Pro feature |
| **Visual Builder** | The drag-and-drop email editor | Alternative to Gutenberg-native editor |
| **A/B Testing** | Subject line split testing (campaigns) | Email feature |
| **UTM Parameters** | Campaign tracking parameters appended to email links | Email feature |
| **Double Opt-in** | Email confirmation before subscription | Compliance feature |

---

## Capitalization Rules for FluentCRM Concepts

When referring to a concept as a **product feature**, capitalize it:
- ✓ "Use **Smart Codes** to personalize your emails."
- ✓ "Configure your **Email Sequence**."

When using the same word in a generic sense, use lowercase:
- ✓ "Each contact has a status."
- ✓ "The campaign was sent yesterday."
