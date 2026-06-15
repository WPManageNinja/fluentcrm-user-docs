---
title: "System Admin Tools"
slug: "fluentcrm-tools-settings"
category: "global-settings"
order: 0
---

# System Admin Tools

The **System Admin Tools** area in FluentCRM v3 brings together the maintenance and troubleshooting tools you need to keep your CRM healthy. These tools now appear as dedicated sub-items under **System Admin Tools**, making it easier to jump into the exact task you need.

To open them, go to **FluentCRM → Settings → System Admin Tools** in your WordPress admin. From there, the left-hand sub-navigation exposes:

- **Cron Job Monitor** – Inspect REST API status and scheduled tasks.
- **System Logs** – Review internal processing logs with filtering and refresh controls.
- **Data Cleanup** – Trim email logs, click logs, and open logs older than a specified number of days.
- **CRM Database Reset** – Permanently erase FluentCRM data in development environments (requires a `wp-config.php` flag).

## REST API

The WordPress REST API **provides REST endpoints (URLs) representing the posts, pages, taxonomies, and other built-in WordPress data types**. Your application can send JSON data to these endpoints to query, modify and create content on your site.

FluentCRM uses WordPress REST API to process data; it is very important that the API is working. Without REST API FluentCRM will not work. There are 4 API Methods that need to be working and they are **GET**, **POST**, **PUT**, and **DELETE**.

You can check the REST API status from the tools. To check the REST API status, Go to **FluentCRM Dashboard ➜ Settings ➜ System Admin Tools ➜ Cron Job Monitor**.

## Cron Job Status (Cron Job Monitor)

Another extremely important part of FluentCRM is the Cron Job. Cron is a utility that schedules a command or script on your server to run automatically at a specified time and date. Like any other Email Marketing Application (EMA), FluentCRM processes data periodically, sends emails, checks for clicks/opens, and cleans data.

To monitor your scheduled tasks, navigate to: **FluentCRM Dashboard ➜ Settings ➜ System Admin Tools ➜ Cron Job Monitor**.

By default, WordPress handles these via PHP-based scheduled jobs, which can be unreliable. We strongly recommend replacing the default WordPress cron with a server-side Cron Job. FluentCRM operates three primary types of scheduled jobs:

- **Scheduled Email Sending:** Processes the email sending queue. This should run **every** minute.
- **Scheduled Email Processing:** Runs every **5 minutes** to process tasks like email opens and clicks.
- **Scheduled Automation Tasks:** Runs **hourly** for automation steps and **weekly** for database cleanup logs.

In the **Cron Job Monitor**, you can see the **Hook Name**, **Interval**, and the **Next Run** time. If a task is overdue, it will be highlighted to alert you of a potential scheduling issue.

![crm tools cron job](/global-settings/fluentcrm-tools-settings/crm_tools_Cron_job.webp)

It is strongly recommended that you replace your default WordPress cron that runs by PHP script with a server-side Cron Job. We have a guide on how to do this on various platforms here: [Server Side Cron Job Replacement](/replace-wordpress-cron-with-a-real-cron-job). This will ensure that scheduled events are running timely and properly and FluentCRM also runs smoothly and do not miss any events.

## System Logs

### Enable System Log for debugging

Before FluentCRM records events you can review on the **System Logs** screen, turn logging on from **FluentCRM → Settings → General Settings**. Scroll to **Enable System Log for debugging** and click **Settings**.

In the panel that opens, check **Enable System Log for debugging**, then click **Save Settings**. When the feature is active, the row shows an **Enabled** badge.

![Enable System Log for debugging settings](/global-settings/fluentcrm-tools-settings/crm_tools_enable_system_log_for_debugging.webp)

Open **FluentCRM → Settings → System Admin Tools → System Logs** to review recent background activity — automation runs, SMS scheduler checks, cron handlers, and similar system events.

The page includes:

- A **Reset** button in the top-right corner to clear applied filters and return to the default view.
- A search box (**Type & enter**) to filter log entries quickly.
- **Refresh** to reload the latest entries.
- An **Export** dropdown to download logs as CSV for a chosen date range.
- A table with **ID**, **Date & Time**, **Title**, and **Description** columns.

Typical entries include automation follow-up actions, SMS scheduler runs, and cron handler events. Each row shows when the event ran and a short status message — for example, completed job counts or the handler that executed.

![crm tools system logs](/global-settings/fluentcrm-tools-settings/crm_tools_system_logs.webp)

### Export System Logs as CSV

You can export system logs as a CSV file for debugging, support handoff, or internal audits. Click the **Export** dropdown on the System Logs page and choose a range:

| Option | What it exports |
| --- | --- |
| **Export Last 7 Days** | Logs from the past 7 days |
| **Export Last 15 Days** | Logs from the past 15 days |
| **Export Last 30 Days** | Logs from the past 30 days |
| **Export All** | Every log entry in the database |

The CSV downloads immediately with a filename such as:

```text
fluent-crm-system-logs-last-30-days-2026-06-15.csv
```

or

```text
fluent-crm-system-logs-all-2026-06-15.csv
```

The file contains four columns: **ID**, **Date & Time**, **Title**, and **Description**. Large exports are streamed in chunks so they do not load the full log set into memory at once.

>[!Tip]
> If you are sharing logs with support, **Export Last 7 Days** or **Export Last 15 Days** is usually sufficient and produces a smaller, easier-to-share file.

## Reset FluentCRM Data

Path: **FluentCRM Dashboard → Settings → System Admin Tools → CRM Database Reset**.

If you want to permanently remove all FluentCRM data (contacts, campaigns, automations, logs, tags, lists, custom fields, templates, and related settings), you can use **CRM Database Reset**. This action affects FluentCRM data only, and cannot be undone.

In the current UI, this section clearly shows a **Developer Mode Required** notice. To enable the reset actions, add the following directive to your **wp-config.php** file:

`define('FLUENTCRM_IS_DEV_FEATURES', true);`

Add it **before** the line:

`/* That's all, stop editing! Happy publishing. */`

After enabling developer mode, the page displays a **Complete Data Removal** panel with:

- A summary of the modules that will be deleted.
- An optional checkbox to include contact info in WordPress personal data export.
- A destructive button: **Permanently Erase FluentCRM Data**.

Always take a full database backup before using this action.

![crm tools danger zone](/global-settings/fluentcrm-tools-settings/crm_tools_database_reset_latest.webp)

For reference, here is the older warning-style interface from previous versions:

![crm tools debug wp config](/global-settings/fluentcrm-tools-settings/crm_tools_debug_wp_config.webp)

## FluentCRM Data Cleanup

In some cases, you might not want to delete all of your contacts, maybe you just want to reset the logs. You can do it inside the **Data Cleanup** section. FluentCRM allows you to delete Email History Logs, Email Click Logs, and Email Open Logs older than your specified period in days.

![crm tools data cleanup](/global-settings/fluentcrm-tools-settings/crm_tools_data_cleanup.webp)

Select the Logs you want to delete, click on the **Preview Log Summary** button. This period should be at least **7 days** or you will see an error like the above screenshot.

![crm tools data cleanup min 7days](/global-settings/fluentcrm-tools-settings/crm_tools_data_cleanup_min_7days.webp)
Review the summary and click on the **Yes, I want to delete the Old Logs** button only if you know what you are doing.
