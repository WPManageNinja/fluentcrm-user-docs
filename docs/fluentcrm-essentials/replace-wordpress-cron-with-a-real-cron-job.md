---
title: "Cron Job: Replace with a Server-side Cron Job (cPanel)"
slug: "replace-wordpress-cron-with-a-real-cron-job"
category: "fluentcrm-essentials"
order: 0
---

# Cron Job: Replace with a Server-side Cron Job (cPanel)

The importance of configuring a **Cron Job** for a WordPress Website is to ensure that the scheduled jobs run timely and successfully and do not fail the scheduled jobs or events and everything works in order. This includes running FluentCRM Email Processing, Sending, Running Automation, Email Sequences, and other processing tasks.

## Prechecks

Before we begin, please make sure that you have read about the [Cron Job: Basics & Checklist](/docs/fluentcrm-cron-job-basics-and-checklist) and event recurrences of FluentCRM and also followed [Disable Default WordPress Cron System](/docs/fluentcrm-cron-job-basics-and-checklist/#disable-default-wordpress-cron-system) with the code below:

```
/* Add any custom values between this line and the "stop editing" line. */

define('DISABLE_WP_CRON', true );    // Disable the default PHP-based Cron invocation.

/* That's all, stop editing! Happy publishing. */
```

Cron Jobs or Scheduled Jobs can be run or invoked locally and remotely. In this article, we will learn about the recommended and most effective method for configuring a cron job for a WordPress Website. We also have a few articles focused on running cron jobs remotely:

## Configure WordPress Cron Job from cPanel

One of the most used and popular **Web Hosting Control Panels** is **cPanel** and we will be evaluating it in this article.

### Cron Settings

Now please go to the Cron Jobs option as shown below:

![cpanel cron jobs (1)](/fluentcrm-essentials/replace-wordpress-cron-with-a-real-cron-job/cpanel-cron-jobs-1.webp)

This will offer some input fields to set the Cron Intervals and the Cron Command as below:

![cron cpanel](/fluentcrm-essentials/replace-wordpress-cron-with-a-real-cron-job/cron-cpanel.webp)

Most of cases, the suitable recommended time interval for running the Cron job is per minute. Putting a Star(\*) means EVERY. Here all 5 stars mean Every Minute on Every Hour on Every Day on Every Month on Every Weekday.

The command for running WordPress is:

```
wget -q -O - https://testwp.ibrahim.com/wp-cron.php?doing_wp_cron > /dev/null 2>&1
```

The total command including time intervals which is the resulting final output is:

```
* * * * * wget -q -O - https://testwp.ibrahim.com/wp-cron.php?doing_wp_cron > /dev/null 2>&1
```

That's all for cPanel WordPress Cron Configuration! Thanks and enjoy working with WordPress Scheduled Events.