---
title: "Bounce Handling with toSend"
slug: "bounce-handling-with-tosend"
category: "bounce-handlers"
order: 0
---

# Bounce Handling with toSend

If you use the [toSend](https://tosend.io/) email service to deliver your FluentCRM campaigns, this guide shows you how to forward bounces and complaints back to FluentCRM so contact statuses stay clean and accurate.

## Copy your FluentCRM webhook URL

First, copy the **Webhook URL** from FluentCRM. Go to **FluentCRM → Settings → Email Service**, select **toSend** from the **Bounce Handler** dropdown, and copy the URL that appears.

The URL follows this pattern:

```text
https://yourdomain.com/?fluentcrm=1&route=bounce_handler&handler=tosend&hash=<unique-hash>
```

Keep this URL handy – you will paste it into your toSend account in the next step.

## Configure the webhook in toSend

1. **Log in** to your [toSend account](https://tosend.io/) and open the project that sends mail for your FluentCRM site.
2. Navigate to **Settings → Webhooks** (or **Notifications → Webhooks**, depending on your plan).
3. Click **Add Webhook** and paste the FluentCRM webhook URL into the **URL** field.
4. Select the events you want forwarded:
    -   **Bounce** – hard and soft bounces.
    -   **Spam Complaint** – recipient marked the email as spam.
    -   **Unsubscribe** *(optional)* – list-unsubscribe header clicks.
5. Save the webhook.

> **Note:** You do **not** need to forward message content. FluentCRM only requires the recipient address and the bounce/complaint reason to update contact status.

## Test the integration

After saving the webhook, send a test bounce from inside toSend (most providers offer a "send test event" or "trigger sample webhook" button). You can confirm the call landed by checking **FluentCRM → Settings → System Logs** for an incoming `bounce_handler/tosend` request.

You can also send a real campaign to a known-bouncing address and verify the contact's status flips to **Bounced** in **FluentCRM → Contacts**.

## View bounced contacts

To review bounced contacts, go to **FluentCRM → Contacts**, enable **Advanced Filter**, then click **Add Property → Contact Segment → Status**, and choose **Bounce**.

> **Tip:** If toSend retries a webhook several times before FluentCRM acknowledges it, the contact may briefly show as **Pending** before being marked **Bounced**. Subsequent retries are idempotent – FluentCRM will not double-count the bounce.

If you have any questions about bounce handling with toSend, please feel free to [contact us](https://wpmanageninja.com/support-tickets/).
