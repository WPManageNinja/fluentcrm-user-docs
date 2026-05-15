---
title: "FluentCRM Glossary"
slug: "fluentcrm-glossary"
category: "fluentcrm-essentials"
order: 0
---

# FluentCRM Glossary

Every term, feature, and concept you'll meet across FluentCRM — defined in plain language, grouped by topic so related ideas stay together. Use this page when you're learning the product or want a quick refresher on a word you've seen but can't quite place. Each entry links to the full doc.

>[!Tip]
> Press **Ctrl + F** (or **⌘ + F**) to search this page for a specific term.

---

## 1. Contacts & Audience

**Contact**: A person or record stored in FluentCRM. Every individual in your CRM is a contact, whether they came from a form, an import, or an integration. See [Contact Overview](/contact-overview).

**Contact Profile**: The 360-degree view of a single contact. Shows their identity, status, tags, lists, emails received, sequences they're in, automations they're running through, and recent activity. See [Contact Overview](/contact-overview).

**Subscriber**: A contact whose status is **Subscribed**. They've explicitly opted in to receive your marketing emails. See [Contact Statuses](/contact-statuses).

**Pending**: A contact who signed up but hasn't confirmed their email yet (double opt-in). They don't receive marketing emails until they confirm. See [Contact Statuses](/contact-statuses).

**Unsubscribed**: A contact who opted out of marketing. You must not send them promotional emails. See [Contact Statuses](/contact-statuses).

**Bounced**: A contact whose email address rejected delivery (invalid or non-existent). FluentCRM stops sending to bounced addresses automatically. See [Contact Statuses](/contact-statuses).

**Complained**: A contact who marked one of your emails as spam. Stop sending to protect your sender reputation. See [Contact Statuses](/contact-statuses).

**Transactional**: A contact who should only receive functional emails like receipts or shipping updates — never marketing campaigns. See [Contact Statuses](/contact-statuses).

**Lead**: A contact tagged as a prospect who hasn't bought yet. Useful for separating prospects from existing customers in segments. See [Contact Overview](/contact-overview).

**List**: A static group of contacts you manage manually. Use lists for broad categorization like "Newsletter Subscribers" or "Webinar Attendees". See [Segment Your Audience](/segment-your-audience).

**Tag**: A static label applied to contacts for granular categorization. Tags are more flexible than lists — a contact can have many tags reflecting behavior ("Clicked Promo", "Abandoned Cart"). See [Segment Your Audience](/segment-your-audience).

**Segment / Dynamic Segment**: An auto-updating group of contacts defined by rules. Members come and go as their data changes — unlike a static list, you never edit membership manually. See [Segment Your Audience](/segment-your-audience).

**Company**: A B2B organization record that groups one or more contacts together (employees of the same company, for example). See [Company Module](/company-module).

**Company Module**: The feature that lets you organize contacts under company records for B2B marketing and segmentation. See [Company Module](/company-module).

**Custom Field**: A user-defined data field added to contacts beyond the built-in name/email/phone fields. Field types include text, number, select, radio, checkboxes, and date. See [Custom Fields](/global-custom-contact-fields).

**Advanced Filter**: A query builder in the Contacts dashboard that finds and segments contacts using complex conditions across static and dynamic data. See [Advanced Filter](/advanced-filter).

**Integrated Contact Overview**: A view on a contact's profile showing their purchase history and payment data from integrated platforms like WooCommerce and Paymattic. See [Integrated Contact Overview](/additional-integrated-contact-overview).

**Import Contacts**: Bulk-add contacts to FluentCRM from CSV files, existing WordPress users, or other CRM platforms. See [Import Contacts](/import-contacts-into-fluentcrm).

**Export Contacts**: Download contacts and their associated data as a CSV file for backup or migration. *(Pro)* See [Export Contacts](/export-contacts-from-fluentcrm).

---

## 2. Email Campaigns & Editor

**Campaign**: A one-time bulk email sent to selected contacts, either immediately or scheduled for later. See [Setting Up Campaign](/setting-up-campaign).

**Email Sequence**: A series of emails delivered to contacts on a timed schedule — a welcome series, an onboarding drip, a re-engagement flow. See [Email Sequence](/email-sequence).

**Recurring Campaign**: A campaign that sends itself on a repeating schedule (daily, weekly, monthly), often with dynamic content like the latest blog posts. See [Recurring Campaign](/recurring-campaign).

**Email Template**: A reusable full-email design saved for reuse across campaigns, sequences, and automations. See [Email Templates](/email-templates).

**Email Pattern**: A reusable section of design (header, hero, footer) built as a Gutenberg block. Drop a pattern into any email instead of rebuilding the same section every time. Synced patterns stay linked so updates propagate. See [Email Patterns](/email-patterns).

**Content Block**: A modular building piece in the email editor: text, image, button, table, column, etc. You compose emails by stacking blocks. See [Content Blocks](/content-blocks-in-fluentcrm-email-editor).

**Conditional Section**: A block that shows or hides content based on a contact's tags or other data. Use it to personalize one email for multiple audience segments. See [Conditional Sections](/conditional-sections-in-fluentcrm-email-editor).

**Smart Code** *(also called Merge Code)*: A dynamic placeholder like <code v-pre>{{contact.first_name}}</code> that's replaced with the contact's real data when the email is sent. See [Smart Codes in Email Editor](/smartcodes-in-fluentcrm-email-editor) and [Merge Codes Usage](/merge-codes-smart-codes-usage).

**Visual Builder**: A drag-and-drop email designer for building polished layouts without writing HTML. See [FluentCRM Visual Builder](/fluentcrm-visual-builder).

**Block Editor**: The Gutenberg-native email editor introduced in FluentCRM v3. Uses the same blocks you know from WordPress posts. See [Compose Email](/compose-email-in-fluentcrm).

**A/B Testing**: Send different subject lines to slices of your audience to see which gets more opens, then the winner sends to the rest. See [Setting Up Campaign](/setting-up-campaign).

**UTM Parameters**: Tracking tags (`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`) appended to links in your emails so analytics tools can attribute traffic correctly. See [Setting Up Campaign](/setting-up-campaign).

**Double Opt-in**: A signup flow where new contacts must click a confirmation link before becoming **Subscribed**. Keeps your list clean and helps with compliance. See [Double Opt-in Settings](/global-double-opt-in-settings).

**From Name**: The sender name your recipients see in their inbox. Set in Global Email Settings. See [Global Email Settings](/global-email-settings).

**Reply-To**: The address that receives replies when recipients hit Reply. Often different from your From Email. See [Global Email Settings](/global-email-settings).

**Campaign Label**: A color-coded tag you apply to campaigns to organize and filter them in the dashboard. See [Labels for Email Campaigns](/labels-for-email-campaigns).

**Campaign Summary Actions**: Post-send rules that apply or remove tags from contacts based on how they interacted with a campaign — opened, clicked, ignored. See [Campaign Summary Actions](/campaign-summary-actions).

---

## 3. Automations

**Automation** *(also called Funnel)*: A workflow that runs in the background. Triggers start it, actions do the work, conditions branch the path, and goals let contacts jump ahead. See [Introduction to FluentCRM Automation](/introduction-to-fluentcrm-automation).

**Automation Editor**: The visual canvas where you build an automation by connecting triggers, actions, conditionals, and goals into a flowchart. See [Automation Editor](/automation-editor).

**Trigger**: The starting event that puts a contact into an automation (form submitted, list applied, order placed, tag added). See [FluentCRM Automation Triggers](/fluentcrm-automation-triggers).

**Action**: A task the automation performs — send email, add tag, wait 3 days, update contact, run a webhook. See [Primary Automation Actions](/primary-automation-actions).

**Conditional / Conditional Action**: A branching block that splits contacts into different paths based on their data (if they have tag X, go left; otherwise, go right). See [Conditional Automation Actions](/conditional-automation-actions).

**Goal / Benchmark**: A jump-ahead checkpoint. When a contact hits the goal (for example, "Order Completed"), they skip the steps in between and continue from the goal's location. See [Goals or Benchmark Actions](/goals-or-benchmark-actions).

**Automation Email Action**: An email step inside an automation. Can send a one-off email or a multi-step sequence. See [Automation Email Actions](/automation-email-actions).

**Email Sequence in an Automation**: A series of timed emails sent as a single block within a larger automation. See [Automation Email Actions](/automation-email-actions).

**Automation Reports**: Built-in dashboards that show how a funnel is performing — including Chart Report, Step Report, and Emails Analytics. See [Automation Reports](/automation-reports).

**Chart Report**: A bar/line graph showing how many contacts moved through each step of an automation over time. See [Automation Reports](/automation-reports).

**Step Report**: A summary view showing the count and percentage of contacts that reached each step in the funnel. See [Automation Reports](/automation-reports).

**Abandon Cart Automation**: A ready-made automation triggered when a contact leaves items in a WooCommerce or FluentCart cart. Sends recovery emails. See [Abandon Cart Automation](/abandon-cart-automation) and [FluentCart Abandon Cart](/fluentcart-abandon-cart-automation).

**Automation Label**: A color-coded tag on an automation for organization and filtering. See [Labels for Automations](/labels-for-automations).

---

## 4. Forms & Lead Capture

**Opt-in Form**: A form on your site that collects contact info and pushes new contacts into FluentCRM with assigned lists and tags. See [Opt-in Forms — Fluent Forms Basic Configuration](/opt-in-forms-fluent-forms-basic-configuration).

**Fluent Forms**: The form plugin made by the same team as FluentCRM. The default and most deeply-integrated form solution. See [Opt-in Forms](/opt-in-forms-fluent-forms-basic-configuration).

**Advanced Form Configuration**: Per-form rules for double opt-in, custom field mapping, dynamic list/tag assignment, and post-submission automation. See [Advanced Form Configuration](/opt-in-forms-advanced-configuration).

**Auto-fill Form Fields**: A feature that pre-populates Fluent Forms fields with the logged-in contact's data so they don't retype it. See [Auto-fill Fluent Forms Fields](/auto-fill-fluent-forms-fields-with-fluentcrm-data).

**Webhook Lead Capture**: Capture leads from external platforms by sending form submissions to a FluentCRM incoming webhook URL. See [Capturing Leads via Fluent Forms Webhook](/capturing-leads-through-fluent-forms-webhook).

---

## 5. SMS Module *(Pro)*

**SMS Module**: The Pro feature that lets you send and automate text messages alongside email. See [Configure SMS Module](/configure-sms-module).

**SMS Campaign**: A bulk text message sent to selected contacts immediately or on schedule. See [Configure SMS Module](/configure-sms-module).

**SMS Automation**: A "Send SMS" action block inside an automation funnel — same triggers and conditions as email, just SMS instead. See [SMS Automation](/sms-automation).

**Twilio**: A leading SMS provider you can connect to FluentCRM for sending and receiving messages. See [Twilio SMS Integration](/twilio-integration).

**Amazon End User Messaging**: AWS's SMS service, an alternative to Twilio. See [Amazon End User Messaging](/amazon-end-user-messaging).

**SMS Incoming Webhook**: A FluentCRM URL you paste into Twilio so inbound replies appear on the contact's SMS timeline and can trigger automations. See [Twilio SMS Integration](/twilio-integration).

**SMS Report**: A dashboard of SMS campaign performance — sent, delivered, replies, and engagement metrics. See [SMS Campaign Report](/sms-campaign-report).

---

## 6. Integrations

FluentCRM connects natively with these platforms. Each integration adds contact sync, triggers, conditions, and actions to automations.

### E-commerce
- **WooCommerce**: Order-based triggers, customer sync, abandoned cart recovery. See [WooCommerce Automation](/woocommerce-automation-with-fluentcrm).
- **FluentCart**: Native ecommerce by the same team. See [FluentCart Integration](/fluentcart-integration-with-fluentcrm).
- **SureCart**: Automation triggers for SureCart orders. See [SureCart Automation](/surecart-automation-with-fluentcrm).
- **Easy Digital Downloads (EDD)**: Customer and order sync for digital product sales. See [EDD Integration](/easy-digital-downloads-integration-with-fluentcrm).

### LMS
- **LearnDash**: Triggers for course enrollment, lesson completion, course completion, quiz attempts. See [LearnDash Integration](/learndash-integration-with-fluentcrm).
- **LifterLMS**: Course and membership-based triggers. See [LifterLMS Integration](/lifterlms-integration-with-fluentcrm).
- **LearnPress**: Triggers for LearnPress course events. See [LearnPress Integration](/learpress-integration-with-fluentcrm).
- **TutorLMS**: Triggers for TutorLMS course events. See [Tutor LMS Integration](/tutorlms-integration-with-fluentcrm).

### Membership
- **MemberPress**: Triggers for membership signups, renewals, expirations. See [MemberPress Integration](/memberpress-integration-with-fluentcrm).
- **Paid Memberships Pro**: Membership level triggers and contact sync. See [PMPro Integration](/paid-memberships-pro-integration-with-fluentcrm).
- **Restrict Content Pro**: RCP membership triggers and contact sync. See [RCP Integration](/restrict-content-pro-integration-with-fluentcrm).

### Community, Affiliate, Booking & Support
- **BuddyBoss**: Community member triggers, group events, profile updates. See [BuddyBoss Integration](/buddyboss-integration-with-fluentcrm).
- **FluentCommunity**: Native community plugin from the same team. See [Fluent Community Integration](/fluentcommunity-integration-with-fluentcrm).
- **FluentAffiliate**: Native affiliate plugin. See [Fluent Affiliate Integration](/fluentaffiliate-integration-with-fluentcrm).
- **AffiliateWP**: Triggers for AffiliateWP affiliate events. See [AffiliateWP Integration](/affiliatewp-integration-with-fluentcrm).
- **FluentBooking**: Booking event triggers from the native FluentBooking plugin. See [Fluent Booking Integration](/fluent-booking-integration-with-fluentcrm).
- **FluentBoards**: Project board triggers. See [FluentBoards Integration](/fluentboards-integration-with-fluentcrm).
- **FluentSupport**: Support ticket triggers and customer sync. See [FluentSupport Integration](/fluentsupport-integration-with-fluentcrm).

### Builders & Automation Tools
- **Elementor**: Capture Elementor form submissions as contacts. See [Elementor Integration](/elementor-integration-with-fluentcrm).
- **Oxygen Builder**: Capture Oxygen form submissions as contacts. See [Oxygen Builder Integration](/oxygen-builder-integration-with-fluentcrm).
- **Zapier**: Connect to 6,000+ third-party services through Zapier. See [Zapier Integration](/zapier-integration-with-fluentcrm).
- **Webhook**: Bidirectional HTTP endpoints for any external service. See [Webhook Integration](/webhook-integration).

---

## 7. Sending & Deliverability

**Email Service**: The SMTP provider that actually delivers your emails (Amazon SES, Mailgun, SendGrid, etc.). Configured in Email Service Settings. See [Email Service](/smtp-bounce-handlers-settings).

**SMTP**: Simple Mail Transfer Protocol — the standard for sending email. FluentCRM relies on an SMTP provider to deliver mail. See [Sending Emails & Deliverability](/sending-emails-and-email-deliverability).

**FluentSMTP**: A free WordPress plugin by the same team that routes all WordPress mail through professional providers. Recommended for reliable delivery. See [Sending Emails & Deliverability](/sending-emails-and-email-deliverability).

**Bounce Handler**: An endpoint that catches bounce notifications from your email service and marks the bouncing contact as **Bounced** automatically. See [Bounce Handling Overview](/bounce-handling-overview).

**Cron Job**: A scheduled task that processes FluentCRM's background work — sending automation emails, processing sequences, running campaigns. See [Cron Job Basics](/fluentcrm-cron-job-basics-and-checklist).

**WP-Cron**: WordPress's built-in pseudo-cron. It only runs when someone visits your site, so it's unreliable for consistent sending. Replace it on production sites. See [Replace WP-Cron with Real Cron](/replace-wordpress-cron-with-a-real-cron-job).

**Real Cron**: A server-level cron job that runs on a fixed schedule regardless of site traffic. Required for reliable email delivery. See [Replace WP-Cron with Real Cron](/replace-wordpress-cron-with-a-real-cron-job).

**Sending Speed**: How fast FluentCRM sends emails per second/minute. Set under Global Email Settings to respect your SMTP provider's rate limits. See [Global Email Settings](/global-email-settings).

---

## 8. Tracking & Analytics

**Event Tracking**: A system for logging custom behaviors on a contact's profile — "viewed pricing", "watched demo", "downloaded sample" — that you can then use in conditions and triggers. See [Event Tracking Record](/event-tracking-record).

**Event Tracking Record**: A stored instance of a tracked event on one contact. You can store multiple records of the same event with different values. See [Event Tracking Record](/event-tracking-record).

**Event Tracking Automation**: A trigger that fires when a contact accumulates N records of a specific event. See [Event Tracking Automation](/event-tracking-automation).

**Event Tracking via Action Hooks**: Programmatically record events from your code using WordPress action hooks. See [Event Tracking with Action Hooks](/event-tracking-with-action-hooks).

**Smart Link**: A trackable redirect URL that applies or removes tags and lists from the contact who clicks it. Use them in emails, social posts, or anywhere you need a link with side effects. See [Smart Links](/global-smartlinks-settings).

**Advanced Reports**: Dashboards covering contacts, emails, and integrations with charts, trends, and per-source breakdowns. See [Reports Overview](/advanced-reports-overview).

**CRM Contact Report**: Snapshot of your audience — status breakdown, growth trend, geography, top tags and lists. See [CRM Contact Report](/crm-contact-report).

**Emails Report**: Email performance dashboard: Sent, Delivered, Opened, Clicked, Bounced, plus per-campaign engagement. See [Emails Report](/emails-report).

---

## 9. Settings & Administration

**Global Settings**: The central settings panel where you configure FluentCRM's business info, email defaults, integrations, compliance, and advanced features. See [Global Settings Overview](/fluentcrm-global-settings).

**Business Settings**: Your company name, address, logo, and timezone — used in email footers and compliance. See [Business Settings](/global-business-settings).

**Global Email Settings**: Default From Name, From Email, Reply-To, footer text, and maximum sending speed. See [Global Email Settings](/global-email-settings).

**Compliance Settings**: GDPR-related controls, data retention rules, and how FluentCRM responds to data requests from your contacts. See [Compliance Settings](/global-compliance-settings).

**Smart Links**: Centrally-managed trackable URLs that apply tags/lists on click. See [Smart Links](/global-smartlinks-settings).

**CRM Manager**: A WordPress user given access to the FluentCRM dashboard without being a full site administrator. See [CRM Managers](/global-managers-settings).

**Incoming Webhook**: A unique URL FluentCRM generates for an external service to POST contact data to — creating or updating contacts from outside WordPress. See [Incoming Webhooks](/global-incoming-webhooks).

**AI Model**: Hook up an AI provider (OpenAI, etc.) to power AI-generated subject lines, headlines, and button text in the email editor. See [AI Model Setup](/ai-model-setup).

**MCP for AI Agents**: Model Context Protocol endpoint that lets AI agents like Claude securely read and act on your FluentCRM data via API. See [MCP for AI Agents](/mcp-for-ai-agents).

**System Admin Tools**: Diagnostic and maintenance utilities — cron monitor, data cleanup, CRM reset. See [System Admin Tools](/fluentcrm-tools-settings).

**Abandoned Cart Settings**: Enable abandoned cart tracking and set the wait time before a cart is considered abandoned. See [Abandoned Cart Settings](/abandoned-cart-settings).

---

## 10. Developer & Extensibility

**Action Hook**: A WordPress action fired by FluentCRM at key lifecycle moments — contact created, status changed, email opened. Use them to extend behavior. See [Action Hooks](/action-hooks).

**Contact PHP API**: A PHP class for creating, reading, updating, and deleting contacts programmatically. See [Contact PHP API](/contact-php-api).

**Lists & Tags PHP API**: A PHP class for managing lists and tags in code. See [Lists & Tags PHP API](/lists-and-tags-php-api).

**WP-CLI Commands**: Command-line tools for license activation, syncing customers, and viewing system status. See [WP-CLI Commands](/wp-cli-commands).

**Custom Automation Trigger**: Define your own trigger event for automation funnels via a PHP plugin. See [Custom Automation Trigger](/custom-automation-trigger).

**Custom Automation Action**: Define your own action block that authors can drop into funnels. See [Custom Automation Action](/custom-automation-action).

**Custom Automation Condition**: Define your own conditional block for branching funnels. See [Custom Automation Condition](/custom-automation-condition).

**Custom Automation Benchmark / Goal**: Define your own goal checkpoint for funnels. See [Custom Automation Benchmark/Goal](/custom-automation-benchmark-goal).

**Outgoing Webhook**: An automation action that POSTs contact data to an external URL. See [Webhook Integration](/webhook-integration).

**Form Field Code Structure**: The PHP array schema used to declare custom fields and options shown in the automation builder UI. See [Form Field Code Structure](/form-field-code-structure).

**Useful Code Snippets**: A library of small PHP recipes for common customization tasks. See [Useful Code Snippets](/useful-code-snippets).

---

## 11. Licensing & Pro

**License**: Your FluentCRM Pro key. Activates Pro features and unlocks support. See [Install & Activate License](/how-to-install-upgrade-and-activate-license).

**FluentCRM Pro**: The paid version. Adds SMS, advanced reports, contact export, premium integrations, and the Frontend Portal add-on. See [Install & Activate License](/how-to-install-upgrade-and-activate-license).

**Frontend Portal** *(Pro add-on)*: A public-facing page where subscribers manage their own preferences, opt in/out of lists, and update their profile data.

**License Transfer**: Move your Pro license from one domain to another when you migrate or rebuild a site. See [Transfer Your License](/transfer-license-from-one-domain-to-another).

---

## What's Next?

- New to FluentCRM? Start with the [Dashboard Overview](/dashboard-introduction).
- Building your first workflow? Read the [Introduction to FluentCRM Automation](/introduction-to-fluentcrm-automation).
- Need help? See [How to Get Support](/how-to-get-support).
