---
title: "Bounce Handling with Pepipost"
slug: "bounce-handling-with-pepipost"
category: "bounce-handlers"
order: 0
---

# Bounce Handling with Pepipost
If you use [PepiPost](https://pepipost.com) email service then use this documentation to set up Bounce handling with FluentCRM.

First copy the Webhook URL at FluentCRM -> Settings -> SMTP/Email Sending Service Settings and Select Pepipost from the dropdown

![](/bounce-handlers/bounce-handling-with-pepipost/Screenshot-2021-07-20-at-12.35.58-PM-1024x665.png)

Login to your PepiPost account and then navigate to Settings > Webhook -> Custom API then paste the webhook URL to the following inputs and click "Add Webhook" Button

-   Unsubscribes
-   Drops
-   Bounces
-   Spam Reports
-   Invalids

![](/bounce-handlers/bounce-handling-with-pepipost/Screenshot-2021-07-20-at-12.48.58-PM-1024x710.png)

If you set up these two webhook correctly, so whenever an email mark as a complaint or Detected as a permanent Failure, Then FluentCRM will change the contact status accordingly.

### Viewing Bounced Contacts

If you want to view bounced contacts, go to FluentCRM **Contacts**. Then click **Filter By Statuses** and enable the **Bounced** checkbox.

![view bounced contacts in fluentcrm](/bounce-handlers/bounce-handling-with-pepipost/Screenshot-2023-08-12-at-3.31.52-PM-1024x529.png)