---
title: "Bounce Handling with Postal Server"
slug: "bounce-handling-with-postal-server"
category: "bounce-handlers"
order: 0
---

# Bounce Handling with Postal Server
Postal Server is an open source that is ready to run your server. Managing bounced emails is critical for improving the availability of emails. This documentation describes how the Postal handles bounce messages with FluentCRM. 

## Setup Bounce Handling

To set up the Postal Server follow this step-by-step guide to bounce handling with FluentCRM. 

First, go to your FluentCRM dashboard, navigate to the **Settings** tab, and click the **SMTP/Email Service Settings** from the left sidebar.

Now Select your email service provider **Postal Server** from the drop-down menu. Next copy the Postal Server Bounce Handler **Webhook URL** for later use.

![bounce handling settings 10 15 2024 04 49 pm](/bounce-handlers/bounce-handling-with-postal-server/bounce-handling-settings-10-15-2024_04_49_PM.webp)

## Postal Server Webhook Settings

Now log in to your account or create a new [Postal Server](https://github.com/postalserver/postal). Then navigate to the **Webhooks** settings section. Here you’ll see:

**Name:** Enter a name to identify these Webhooks.

**URL:** Paste the **Webhook URL** that you copied from your FluentCRM websites.

**Enabled:** Here you’ll pick **Yes- send requests to this webhook**.

**Events:** In this events section you’ll choose **No-I’ll choose which requests to send**. After that scroll down and select **MessageDeliveryFailed** and **Message Bounced** by tick the boxes.

Now click on the **Save Webhook** to save your webhook settings. 

![fluentcrm 2 8 40 multi threaded email sending event monitoring and a lot more ](/bounce-handlers/bounce-handling-with-postal-server/FluentCRM-2-8-40-Multi-Threaded-Email-Sending-Event-Monitoring-and-a-Lot-More-.webp)

## Viewing Bounced Contacts

If you want to view bounced contacts, go to FluentCRM Contacts. Then click Filter By Statuses and enable the **Bounced** checkbox.

![bounce handling with sendgrid fluentcrm](/bounce-handlers/bounce-handling-with-postal-server/Bounce-Handling-with-SendGrid-FluentCRM.webp)

If you have any further questions about this guide, please don't hesitate to [contact us](https://wpmanageninja.com/support-tickets/).