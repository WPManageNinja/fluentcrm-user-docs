---
title: "Bounce Handling with Mailgun"
slug: "bounce-handling-with-mailgun"
category: "bounce-handlers"
order: 0
---

# Bounce Handling with Mailgun

If you use Mailgun email service then use this documentation to set up Bounce handling with FluentCRM.

First copy the Webhook URL at **FluentCRM -> Settings -> Email Service** and Select **Mailgun** from the dropdown.

![Select Mailgun](/bounce-handlers/bounce-handling-with-mailgun/mailgun.webp)

Login to your **Mailgun** account and then navigate to **Sending > Webhook** then click on the "**Add webhook**" button.

Select the Event type as **Spam Complaints** and then paste the URL that you have copied from FluentCRM for Mailgun.

![Event Type](/bounce-handlers/bounce-handling-with-mailgun/Screenshot-2021-07-20-at-12.27.03-PM-1024x640.webp)

Then create another webhook in Mailgun for Permanent Failure

![Webhook ](/bounce-handlers/bounce-handling-with-mailgun/Screenshot-2021-07-20-at-12.26.26-PM-1024x637.webp)

If you set up these two webhook correctly, so whenever an email mark as a complaint or Detected as a permanent Failure, Then FluentCRM will change the contact status accordingly.

### Viewing Bounced Contacts

If you want to view bounced contacts, go to FluentCRM **Contacts**. Then, enable to the **Advanced Filter** option. Click the **Add Property > Contact Segment > Status** and select the **Bounce** option.

![view bounced contacts in fluentcrm](/bounce-handlers/bounce-handling-with-mailgun/bounce-filter.webp)