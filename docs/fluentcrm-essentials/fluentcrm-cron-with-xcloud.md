---
title: "Cron Job: FluentCRM Cron With xCloud"
slug: "fluentcrm-cron-with-xcloud"
category: "fluentcrm-essentials"
order: 0
---

# Cron Job: FluentCRM Cron With xCloud

xCloud is a modern server management and hosting platform. It includes a built-in, server-level cron (**xCloud-Cron**) that replaces WordPress's default visitor-triggered cron — so FluentCRM's email sending and automations run on time, even when no one is visiting your site.

>[!Note]
> FluentCRM processes scheduled tasks every minute. Set the xCloud-Cron interval to **Every Minute** so email sending and automations aren't delayed. See [Cron Job: Basics & Checklist](/fluentcrm-cron-job-basics-and-checklist) for the recommended intervals.

## Switch to xCloud-Cron

In xCloud you choose between the default WordPress cron and the server-level xCloud-Cron from your site's settings. The two are mutually exclusive, so selecting xCloud-Cron replaces WP-Cron automatically — you don't need to edit `wp-config.php` or add a manual cron command.

1. In the xCloud Dashboard, open your site and click **Site Settings** in the left sidebar.
2. Find the **WP-Cron and xCloud-Cron** panel and select **xCloud-Cron**.
3. In the **Cron Interval for Server** dropdown, choose **Every Minute**.
4. Click **Save Settings**.

![xCloud Site Settings showing the WP-Cron and xCloud-Cron panel with xCloud-Cron selected and the interval set to Every Minute](/fluentcrm-essentials/fluentcrm-cron-with-xcloud/xcloud-cron-settings.webp)

That's all — xCloud now triggers your site's scheduled tasks every minute at the server level.

>[!Tip]
> The same panel has an **"add additional custom cronjob"** link if you ever need extra server-level cron commands beyond the standard interval. Most FluentCRM users won't need this — the **Every Minute** setting above is enough.

## Verify It's Working

Give it a couple of minutes, then open **Settings → System Admin Tools → Cron Job Monitor** in FluentCRM and confirm the intervals match the [recommended values](/fluentcrm-cron-job-basics-and-checklist/#fluentcrm-cron-job-status).

## What's Next?

- [Cron Job: Basics & Checklist](/fluentcrm-cron-job-basics-and-checklist)
- [Sending Emails and Email Deliverability](/sending-emails-and-email-deliverability)
