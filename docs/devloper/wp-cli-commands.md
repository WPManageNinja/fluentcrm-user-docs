---
title: "WP Cli Commands"
slug: "wp-cli-commands"
category: "devloper"
order: 0
---

FluentCRM provides useful WP-CLI commands to manage contacts, licensing, and customer sync tasks.

## Available Commands

### Activate License

Activate your FluentCRM license key from WP-CLI.

```bash
wp fluent_crm activate_license --key=YOUR_LICENSE_KEY
```

### View Stats

Show basic statistics for contacts, campaigns, automations, and emails.

```bash
wp fluent_crm stats
```

### Sync Easy Digital Downloads Customers

Sync Easy Digital Downloads customers and purchase data into FluentCRM.

```bash
wp fluent_crm sync_edd_customers --tags=TAG_ID_1,TAG_ID_2 --lists=LIST_ID_1,LIST_ID_2 --contact_status=subscribed
```

### Sync WooCommerce Customers

Sync WooCommerce customers and purchase data into FluentCRM.

```bash
wp fluent_crm sync_woo_customers --tags=TAG_ID_1,TAG_ID_2 --lists=LIST_ID_1,LIST_ID_2 --contact_status=subscribed
```

## Optional Arguments

The following options are supported by customer sync commands:

- `--tags`: Comma-separated tag IDs to assign to imported contacts.
- `--lists`: Comma-separated list IDs to assign to imported contacts.
- `--contact_status`: Contact status to assign (for example, `subscribed`).
