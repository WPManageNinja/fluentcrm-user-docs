---
title: "Cron Job: Basics & Checklist"
slug: "fluentcrm-cron-job-basics-and-checklist"
category: "fluentcrm-essentials"
order: 0
---

# Cron Job: Basics & Checklist

FluentCRM processes scheduled tasks every minute — just like any other email marketing application. Reliable email delivery depends on a reliable cron job. This page covers the primary requirements for handing WordPress cron over to either a [server-side cron](/replace-wordpress-cron-with-a-real-cron-job) or a remote alternative service.

## What Cron Jobs Do?

**Cron jobs** are important because they allow for the automated execution of scripts and programs at specified intervals. This can be useful for tasks such as **scheduling backups**, **sending notifications**, or **updating data**. Cron jobs can also help to automate repetitive tasks and improve the efficiency of a system by removing the need for manual intervention.

## FluentCRM Cron Job Status

**FluentCRM** has a few scheduled events and jobs that run frequently at various intervals. 

Go to **Settings** from the top navigation bar. Then, from the left sidebar, open the **System Admin Tools** section. Click on **Cron Job Monitor** to see the current status of FluentCRM cron jobs.

##### **Recommended (We recommend) Intervals for Cron Job Status should be as below**:

-   **Scheduled Email Sending**: This should be between 1 second to 60 seconds (1 Minute).
-   **Scheduled Email Processing**: This should be between 1 minute to 5 minutes.
-   **Scheduled Automation Tasks**: This should be between 1 minute to 60 minutes (1 hour).

![settings tools cron job status](/fluentcrm-essentials/fluentcrm-cron-job-basics-and-checklist/Settings-Tools_Cron-Job-Status-scaled.webp)

## Disable Default WordPress Cron System

Before we proceed to configure a [**Server-side**](/replace-wordpress-cron-with-a-real-cron-job) cron job, we will need to confirm that the **default PHP-based scheduled job** **running** is **disabled** from the **WordPress Configuration File** (wp-config.php).

To do this please open the wp-config.php file and look for the section below:

```
/* Add any custom values between this line and the "stop editing" line. */

/* That's all, stop editing! Happy publishing. */
```

We need to add a new Configuration Directive for Server-Side invocation within these two lines which is below:

```
define('DISABLE_WP_CRON', true); // Disable Default WordPress Cron System
```

Now the code will look similar as below:

```
/* Add any custom values between this line and the "stop editing" line. */

define('DISABLE_WP_CRON', true);    // Disable the default PHP-based Cron invocation.

/* That's all, stop editing! Happy publishing. */
```

**Now please follow the links relevant to your hosting and preference to configure the server-side cron job:**

-   [Cron Job: Replace with a Server-side Cron Job (cPanel)](/replace-wordpress-cron-with-a-real-cron-job)
-   [Cron Job: FluentCRM Cron With Cloudways](/fluentcrm-cron-with-cloudways)
-   [Cron Job: FluentCRM Cron with Cron-job.org](/fluentcrm-cron-with-cronjob-org)
-   [Cron Job: FluentCRM Cron with EasyCron](/fluentcrm-cron-with-easycron)
