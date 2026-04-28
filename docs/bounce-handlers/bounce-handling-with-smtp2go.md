---
title: "Bounce Handling with SMTP2GO"
slug: "bounce-handling-with-smtp2go"
category: "bounce-handlers"
order: 0
---

# Bounce Handling with SMTP2GO

SMTP2GO helps ensure reliable email delivery by effectively handling bounces or returned emails. Follow these steps to set up bounce handling with FluentCRM.

## Configure SMTP2GO in FluentCRM

To configure, go to your FluentCRM dashboard, navigate to the **Settings** tab, and click the **Email Service** from the left sidebar.

Select your email service provider, **SMTP2GO** Server, from the drop-down menu. Next, copy the SMTP2GO Server Bounce Handler **Webhook URL** for future use.

![copy webhook url(1)](/bounce-handlers/bounce-handling-with-smtp2go/Copy-webhook-url1-scaled.webp)

## Set Up Webhook in SMTP2GO

Now log in to your account or create a new [SMTP2GO Server](https://app.smtp2go.com/login/). Then navigate to the **Settings>Webhooks settings** section and click **Add Webhook**.

![smtp2go webhooks](/bounce-handlers/bounce-handling-with-smtp2go/SMTP2GO-Webhooks-scaled.webp)

Here appears a popup **Add New Webhook**. Here you’ll see:

 * **URL:** Paste the **Webhook URL** that is copied from your FluentCRM Websites.
 * **Events:** Check the **Bounce** box for bounce handling.
 * **Headers:** Enter a header that you want to be sent explicitly to event data.

Now, **Save** your webhook settings and use the **Test** button to ensure the setup works.

![paste webhook url 03](/bounce-handlers/bounce-handling-with-smtp2go/paste-webhook-url-03-scaled.webp)

## Viewing Bounced Contact

To view bounced contacts, go to **FluentCRM → Contacts**. Then enable the **Advanced Filter** option. Click **Add Property → Contact Segment → Status**, and select **Bounce**.

![bounce contact](/bounce-handlers/bounce-handling-with-smtp2go/Bounce-contact-scaled.webp)

This setup helps you track bounced emails and manage your email campaigns efficiently.
