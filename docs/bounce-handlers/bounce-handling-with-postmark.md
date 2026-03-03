---
title: "Bounce Handling with PostMark"
slug: "bounce-handling-with-postmark"
category: "bounce-handlers"
order: 0
---

# Bounce Handling with PostMark
If you use the [Postmark](https://postmarkapp.com) email service then use this documentation to set up Bounce handling with FluentCRM.

First, copy the Webhook URL at FluentCRM -> Settings -> SMTP/Email Sending Service Settings Select Postmark from the dropdown and copy the Webhook URL.

![](/bounce-handlers/bounce-handling-with-postmark/Screenshot-2021-07-20-at-12.51.47-PM.png)

Then **Login** to your [Postmark account](https://postmarkapp.com), Select your **Server** and then select the **Default Transactional Stream** from there. Now you will see there is a **Webhook** option select that and click on the **Add Webhook** button.

Then paste the webhook URL and select **Bounce** and **Spam Complaint**. _Please do not check "I**nclude Message Content**"_.

![](/bounce-handlers/bounce-handling-with-postmark/Screenshot-2021-07-20-at-12.58.38-PM.png)

Then at the bottom of that page click "**Save Webhook**".

If you set up these two webhooks correctly, so whenever an email is marked as a complaint or Detected as bounced, FluentCRM will change the contact status accordingly.

### Viewing Bounced Contacts

If you want to view bounced contacts, go to FluentCRM **Contacts**. Then click **Filter By Statuses** and enable the **Bounced** checkbox.

![view bounced contacts in fluentcrm](/bounce-handlers/bounce-handling-with-postmark/Screenshot-2023-08-12-at-3.31.52-PM.png)