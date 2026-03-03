---
title: "Bounce Handling with Mailgun"
slug: "bounce-handling-with-mailgun"
category: "bounce-handlers"
order: 0
---

# Bounce Handling with Mailgun
If you use Mailgun email service then use this documentation to set up Bounce handling with FluentCRM.

First copy the Webhook URL at FluentCRM -> Settings -> SMTP/Email Sending Service Settings and Select Mailgun from the dropdown

![](/bounce-handlers/bounce-handling-with-mailgun/Screenshot-2021-07-20-at-12.29.33-PM-1024x558.png)

Login to your Mailgun account and then navigate to Sending > Webhook then click on the "Add webhook" button

Select the Event type as **Spam Complaints** and then paste the URL that you have copied from FluentCRM for Mailgun

![](/bounce-handlers/bounce-handling-with-mailgun/Screenshot-2021-07-20-at-12.27.03-PM-1024x640.png)

Then create another webhook in Mailgun for Permanent Failure

![](/bounce-handlers/bounce-handling-with-mailgun/Screenshot-2021-07-20-at-12.26.26-PM-1024x637.png)

If you set up these two webhook correctly, so whenever an email mark as a complaint or Detected as a permanent Failure, Then FluentCRM will change the contact status accordingly.

### Viewing Bounced Contacts

If you want to view bounced contacts, go to FluentCRM **Contacts**. Then click **Filter By Statuses** and enable the **Bounced** checkbox.

![view bounced contacts in fluentcrm](/bounce-handlers/bounce-handling-with-mailgun/Screenshot-2023-08-12-at-3.31.52-PM-1024x529.png)