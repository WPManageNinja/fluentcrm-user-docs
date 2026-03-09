---
title: "Bounce Handling with Sparkpost"
slug: "bounce-handling-with-sparkpost"
category: "bounce-handlers"
order: 0
---

# Bounce Handling with Sparkpost

If you use [SparkPost](https://sparkpost.com) email service then use this documentation to set up Bounce handling with FluentCRM.

First copy the Webhook URL at **FluentCRM -> Settings -> Email Service** and Select **SparkPost** from the dropdown and copy the **webhook URL**.

![Select Sparkpost](/bounce-handlers/bounce-handling-with-sparkpost/select-sparkpost.webp)

Then Login to your SparkPost account then navigate to Webhooks and click on Event Webhook.

![Eventy Webhook](/bounce-handlers/bounce-handling-with-sparkpost/Screenshot-2021-07-20-at-1.13.00-PM-1024x591.webp)

Then use the following data to setup the webhook

-   **Webhook Name** -> Anything you want
-   **Target URL**: Paste the Webhook Url copied from FluentCRM
-   **Events:** Select Individual Events and then check only **Link Unsubscribe**, **Bouce** and **Spam Complaint**
-   **Authentication:** None

![Setup webhook](/bounce-handlers/bounce-handling-with-sparkpost/Screenshot-2021-07-20-at-1.18.37-PM-1024x786.webp)

Then Click "Create Webhook" button

If you set up these two webhook correctly, so whenever an email mark as a complaint or Detected as a bounced, Then FluentCRM will change the contact status accordingly.

### Viewing Bounced Contacts

If you want to view bounced contacts, go to **FluentCRM → Contacts**. Then enable the **Advanced Filter** option. Click **Add Property → Contact Segment → Status**, and select **Bounce**.

![view bounced contacts in fluentcrm](/bounce-handlers/bounce-handling-with-sparkpost/Bounce-contact-scaled.webp)