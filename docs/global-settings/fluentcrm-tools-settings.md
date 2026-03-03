---
title: "Tools"
slug: "fluentcrm-tools-settings"
category: "global-settings"
order: 0
---

# Tools
## REST API & Cron Job Status

The WordPress REST API **provides REST endpoints (URLs) representing the posts, pages, taxonomies, and other built-in WordPress data types**. Your application can send JSON data to these endpoints to query, modify and create content on your site.

FluentCRM uses WordPress REST API to process data; it is very important that the API is working. Without REST API FluentCRM will not work. There are 4 API Methods that need to be working and they are **GET**, **POST**, **PUT**, and **DELETE**.

You can check the REST API status from the tools. To check the REST API status, Go to **FluentCRM Dashboard** ➜ **Tools** ➜ **REST API Status**

![crm tools rest api status](/global-settings/fluentcrm-tools-settings/crm_tools_REST_API_status.png)

The above screenshot represents a successful working REST API Status.

Another extremely important part of FluentCRM is the Cron Job. Cron is a Linux utility that schedules a command or script on your server to run automatically at a specified time and date. A cron job is **the scheduled task itself**. Cron jobs can be very useful to automate repetitive tasks.

Like any other Email Marketing Application (EMA) FluentCRM also processes data periodically, sends emails, checks for email clicks & email opens, and also cleans data. This is by default handled by WordPress PHP-based Scheduled Jobs is unreliable and prone to miss running at a specific time or fail due to numerous factors. There are 3 types of scheduled jobs that FluentCRM operates:

1.  **Scheduled Email Sending:** This job processes the email sending and it should be running **every minute**.
2.  **Scheduled Email Processing:** This job runs every **5 Minutes** and it processes other tasks as Email opens, Email clicks, etc.
3.  **Scheduled Automation Tasks:** This is a job that runs **Hourly** and it also processes a **Weekly** event that cleans up FluentCRM like logs and other data.

![crm tools cron job](/global-settings/fluentcrm-tools-settings/crm_tools_Cron_job.png)

It is strongly recommended that you replace your default WordPress cron that runs by PHP script with a server-side Cron Job. We have a guide on how to do this on various platforms here: [Server Side Cron Job Replacement](/docs/replace-wordpress-cron-with-a-real-cron-job). This will ensure that scheduled events are running timely and properly and FluentCRM also runs smoothly and do not miss any events.

## Reset FluentCRM Data

If you want to delete all your FluentCRM data (Contacts, Campaigns, Settings, Emails) then you can utilize this feature to Reset the data of the FluentCRM. This will only work with FluentCRM database tables. But to use this feature you also need to add a configuration directive in your **wp-config.php** file.

![crm tools danger zone](/global-settings/fluentcrm-tools-settings/crm_tools_danger_zone.png)

Open your wp-config.php with any editor from the Hosting Control Panel like cPanel, or Plesk or download it using FTP and update it and reupload and overwrite it.

Add **define('FLUENTCRM\_IS\_DEV\_FEATURES', true);** **before** the line says **/\* That's all, stop editing! Happy publishing. \*/**

![crm tools debug wp config](/global-settings/fluentcrm-tools-settings/crm_tools_debug_wp_config.png)

## FluentCRM Data Cleanup

In some cases, you might not want to delete all of your contacts, maybe you just want to reset the logs. You can do it inside the **Data Cleanup** section. FluentCRM allows you to delete Email History Logs, Email Click Logs, and Email Open Logs older than your specified period in days.

![crm tools data cleanup](/global-settings/fluentcrm-tools-settings/crm_tools_data_cleanup.png)

Select the Logs you want to delete, give the amount in days, and click on the **Preview Log Summary** button.

![crm tools data cleanup min 7days](/global-settings/fluentcrm-tools-settings/crm_tools_data_cleanup_min_7days.png)

This period should be at least **7 days** or you will see an error like the above screenshot.

![crm tools data cleanup preview logs](/global-settings/fluentcrm-tools-settings/crm_tools_data_cleanup_preview_logs.png)

Review the summary and click on the **Yes, I want to delete the Old Logs** button only if you know what you are doing. If you still want to keep the logs you leave the page or click on the **Never Mind, I changed my mind** button.