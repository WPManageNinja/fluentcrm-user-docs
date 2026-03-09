---
title: "Bounce Handling with SendGrid"
slug: "bounce-handling-with-sendgrid"
category: "bounce-handlers"
order: 0
---

# Bounce Handling with SendGrid

If you use [SendGrid](https://sendgrid.com/) email service, then use this documentation to set up Bounce handling with FluentCRM.

First copy the Webhook URL at **FluentCRM -> Settings -> Email Service** and Select **SendGrid** from the dropdown and copy the **webhook URL**.

![Select Sendgrid](/bounce-handlers/bounce-handling-with-sendgrid/select-sendgrid.webp)

Then Login to your SendGrid account then navigate to **Settings -> MailSettings** and click on **Event Webhook**.

![Event Webhook](/bounce-handlers/bounce-handling-with-sendgrid/event-webhook.webp)

Then use the following data to setup the webhook

-   **Authorization Method** -> None
-   **HTTP** Post URL: Paste the Webhook URL copied from FluentCRM
-   **Events to be POSTed to your URL:** Select **Dropped**, **Bounced, Unsubscribed,** and **Spam Reports** here.
-   **Event Webhook Status:** Enabled

Now, click on the **Save** button to save the event.

![Event Webhook](/bounce-handlers/bounce-handling-with-sendgrid/event-webhook-1.webp)

If you set up these two webhook correctly, so whenever an email mark as a complaint or Detected as a bounced, Then FluentCRM will change the contact status accordingly.

### Viewing Bounced Contacts

If you want to view bounced contacts, go to **FluentCRM → Contacts**. Then enable the **Advanced Filter** option. Click **Add Property → Contact Segment → Status**, and select **Bounce**.

![view bounced contacts in fluentcrm](/bounce-handlers/bounce-handling-with-sendgrid/bounce-filter.webp)