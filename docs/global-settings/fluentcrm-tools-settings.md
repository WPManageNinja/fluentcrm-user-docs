---
title: "Tools"
slug: "fluentcrm-tools-settings"
category: "global-settings"
order: 0
---

# Tools

## REST API 

The WordPress REST API **provides REST endpoints (URLs) representing the posts, pages, taxonomies, and other built-in WordPress data types**. Your application can send JSON data to these endpoints to query, modify and create content on your site.

FluentCRM uses WordPress REST API to process data; it is very important that the API is working. Without REST API FluentCRM will not work. There are 4 API Methods that need to be working and they are **GET**, **POST**, **PUT**, and **DELETE**.

You can check the REST API status from the tools. To check the REST API status, Go to **FluentCRM Dashboard ➜ Settings ➜ System Admin Tools ➜ Cron Job Monitor**.

## Cron Job Status (Cron Job Monitor)

Another extremely important part of FluentCRM is the Cron Job. Cron is a utility that schedules a command or script on your server to run automatically at a specified time and date. Like any other Email Marketing Application (EMA), FluentCRM processes data periodically, sends emails, checks for clicks/opens, and cleans data.

To monitor your scheduled tasks, navigate to: **FluentCRM Dashboard ➜ Settings ➜ System Admin Tools ➜ Cron Job Monitor**.

By default, WordPress handles these via PHP-based scheduled jobs, which can be unreliable. We strongly recommend replacing the default WordPress cron with a server-side Cron Job. FluentCRM operates three primary types of scheduled jobs:

 * **Scheduled Email Sending:** Processes the email sending queue. This should run **every** minute.
 * **Scheduled Email Processing:** Runs every **5 minutes** to process tasks like email opens and clicks.
 * **Scheduled Automation Tasks:** Runs **hourly** for automation steps and **weekly** for database cleanup logs.

In the **Cron Job Monitor**, you can see the **Hook Name**, **Interval**, and the **Next Run** time. If a task is overdue, it will be highlighted to alert you of a potential scheduling issue.

![crm tools cron job](/global-settings/fluentcrm-tools-settings/crm_tools_Cron_job.webp)

It is strongly recommended that you replace your default WordPress cron that runs by PHP script with a server-side Cron Job. We have a guide on how to do this on various platforms here: [Server Side Cron Job Replacement](/docs/replace-wordpress-cron-with-a-real-cron-job). This will ensure that scheduled events are running timely and properly and FluentCRM also runs smoothly and do not miss any events.

## Reset FluentCRM Data

If you want to delete all your FluentCRM data (Contacts, Campaigns, Settings, Emails) then you can utilize this feature to Reset the data of the FluentCRM. This will only work with FluentCRM database tables. But to use this feature you also need to add a configuration directive in your **wp-config.php** file.

![crm tools danger zone](/global-settings/fluentcrm-tools-settings/crm_tools_danger_zone.webp)

Open your wp-config.php with any editor from the Hosting Control Panel like cPanel, or Plesk or download it using FTP and update it and reupload and overwrite it.

Add **define('FLUENTCRM\_IS\_DEV\_FEATURES', true);** **before** the line says **/\* That's all, stop editing! Happy publishing. \*/**

![crm tools debug wp config](/global-settings/fluentcrm-tools-settings/crm_tools_debug_wp_config.webp)

## FluentCRM Data Cleanup

In some cases, you might not want to delete all of your contacts, maybe you just want to reset the logs. You can do it inside the **Data Cleanup** section. FluentCRM allows you to delete Email History Logs, Email Click Logs, and Email Open Logs older than your specified period in days.

![crm tools data cleanup](/global-settings/fluentcrm-tools-settings/crm_tools_data_cleanup.webp)

Select the Logs you want to delete, click on the **Preview Log Summary** button. This period should be at least **7 days** or you will see an error like the above screenshot.

![crm tools data cleanup min 7days](/global-settings/fluentcrm-tools-settings/crm_tools_data_cleanup_min_7days.webp)


Review the summary and click on the **Yes, I want to delete the Old Logs** button only if you know what you are doing. 