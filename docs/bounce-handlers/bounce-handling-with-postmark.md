---
title: "Bounce Handling with PostMark"
slug: "bounce-handling-with-postmark"
category: "bounce-handlers"
order: 0
---

# Bounce Handling with PostMark

If you use the [Postmark](https://postmarkapp.com) email service then use this documentation to set up Bounce handling with FluentCRM.


First, copy the **Webhook URL** at **FluentCRM -> Settings -> Email Service** and select **Postmark** from the dropdown and copy the **Webhook URL**.

![Select Postmark](/bounce-handlers/bounce-handling-with-postmark/select-postmark.webp)

Then **Login** to your [Postmark account](https://postmarkapp.com), Select your **Server** and then select the **Default Transactional Stream** from there. Now you will see there is a **Webhook** option select that and click on the **Add Webhook** button.

Then paste the webhook URL and select **Bounce** and **Spam Complaint**. _Please do not check "I**nclude Message Content**"_.

![Postmark](/bounce-handlers/bounce-handling-with-postmark/postmark.webp)

Then at the bottom of that page click "**Save Webhook**".

If you set up these two webhooks correctly, so whenever an email is marked as a complaint or Detected as bounced, FluentCRM will change the contact status accordingly.

### Viewing Bounced Contacts

If you want to view bounced contacts, go to **FluentCRM → Contacts**. Then enable the **Advanced Filter** option. Click **Add Property → Contact Segment → Status**, and select **Bounce**.

![view bounced contacts in fluentcrm](/bounce-handlers/bounce-handling-with-postmark/bounce-filter.webp)