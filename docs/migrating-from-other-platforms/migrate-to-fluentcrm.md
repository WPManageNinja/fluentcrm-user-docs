---
title: "Migrate to FluentCRM"
slug: "migrate-to-fluentcrm"
category: "migrating-from-other-platforms"
order: 0
---

# Migrate to FluentCRM

Switching to FluentCRM from another email marketing platform is straightforward. FluentCRM connects directly to your existing provider via API, so you can transfer your contacts, lists, and tags in minutes — no CSV files, no manual data wrangling.

## What Gets Migrated

Each platform-specific guide walks you through migrating:

- **Contacts** — names, email addresses, and any custom field data available via the source platform's API
- **Lists / Audiences** — mapped to FluentCRM Lists
- **Tags** — transferred as FluentCRM Tags

Automation sequences, email templates, and campaign history from your old platform cannot be imported, but FluentCRM's automation builder lets you recreate your workflows from scratch with full flexibility.

## Choose Your Platform

Select the guide for the platform you are migrating from:

| Platform | What you need |
|----------|--------------|
| [Migrating from ActiveCampaign](/migrating-into-fluentcrm-from-activecampaign) | ActiveCampaign API URL + API Key |
| [Migrating from ConvertKit](/migrating-into-fluentcrm-from-convertkit) | ConvertKit API Key |
| [Migrating from Drip](/migrating-into-fluentcrm-from-drip) | Drip API Token + Account ID |
| [Migrating from Mailchimp](/migrating-into-fluentcrm-from-mailchimp) | Mailchimp API Key |
| [Migrating from MailerLite](/migrating-into-fluentcrm-from-mailerlite) | MailerLite API Key |

## How the Migration Works

All five guides follow the same three-step pattern:

1. **Get your API credentials** from your current platform's settings or developer section.
2. **Start the import in FluentCRM** — go to **FluentCRM → Contacts → Import**, select **Import from Other Providers**, and choose your platform.
3. **Map your data** — select the lists or tags you want to bring over and choose a status for the imported contacts.

FluentCRM handles the rest. Once the import finishes, your contacts appear in the Contacts dashboard, tagged and segmented exactly as you configured.

>[!Tip]
> If your platform is not listed above, you can still migrate by exporting your contacts as a CSV and using the [Import Contacts](/import-contacts-into-fluentcrm) tool.
