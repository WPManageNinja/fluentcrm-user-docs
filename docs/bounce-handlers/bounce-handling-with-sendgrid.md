---
title: "Bounce Handling with SendGrid"
slug: "bounce-handling-with-sendgrid"
category: "bounce-handlers"
order: 0
---

# Bounce Handling with SendGrid
If you use [SendGrid](https://sendgrid.com/) email service, then use this documentation to set up Bounce handling with FluentCRM.

First copy the Webhook URL at FluentCRM -> Settings -> SMTP/Email Sending Service Settings and Select SendGrid from the dropdown and copy the webhook URL.

![](/bounce-handlers/bounce-handling-with-sendgrid/Screenshot-2021-07-20-at-1.03.27-PM.png)

Then Login to your SendGrid account then navigate to Settings -> MailSettings and click on Event Webhook

![](/bounce-handlers/bounce-handling-with-sendgrid/Screenshot-2021-07-20-at-1.02.24-PM.png)

Then use the following data to setup the webhook

-   **Authorization Method** -> None
-   **HTTP** Post URL: Paste the Webhook URL copied from FluentCRM
-   **Events to be POSTed to your URL:** Select **Dropped**, **Bounced, Unsubscribed,** and **Spam Reports** here.
-   **Event Webhook Status:** Enabled

Now, click on the **Save** button to save the event.

![Event Webhook](/bounce-handlers/bounce-handling-with-sendgrid/photo_2025-04-17-16-54-01-04-17-2025_04_55_PM.webp)

If you set up these two webhook correctly, so whenever an email mark as a complaint or Detected as a bounced, Then FluentCRM will change the contact status accordingly.

### Viewing Bounced Contacts

If you want to view bounced contacts, go to FluentCRM **Contacts**. Then click **Filter By Statuses** and enable the **Bounced** checkbox.

![view bounced contacts in fluentcrm](/bounce-handlers/bounce-handling-with-sendgrid/Screenshot-2023-08-12-at-3.31.52-PM.png)