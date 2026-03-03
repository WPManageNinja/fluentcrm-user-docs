---
title: "WP Cli Commands"
slug: "wp-cli-commands"
category: "devloper"
order: 0
---

# WP Cli Commands
FluentCRM has few useful WP CLI commands to make it easier to manage your contacts

### wp fluent\_crm activate\_license

Using this command you can activate the license key from WP CLI.

Full command: _wp fluent\_crm activate\_license --key=YOUR\_LICENSE\_KEY_

### wp fluent\_crm stats

Using **wp fluent\_crm stats** command you can see basic information and stats of your contacts, campaign, automation and emails.

### wp fluent\_crm sync\_edd\_customers

With this command, you can easily sync your Easy Digital Downloads customers and purchase data

Full command:

`wp fluent_crm sync_edd_customers --tags=TAG_ID_1,TAG_ID_2 --lists=LIST_ID_1,LIST_ID_2 --contact_status=subscribed`

### wp fluent\_crm sync\_woo\_customers

With this command, you can easily sync WooCommerce customers and purchase data

Full command:

`wp fluent_crm sync_woo_customers --tags=TAG_ID_1,TAG_ID_2 --lists=LIST_ID_1,LIST_ID_2 --contact_status=subscribed`