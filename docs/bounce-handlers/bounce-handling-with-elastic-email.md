---
title: "Bounce Handling with Elastic Email"
slug: "bounce-handling-with-elastic-email"
category: "bounce-handlers"
order: 0
---

# Bounce Handling with Elastic Email
If you use [ElasticEmail](https://elasticemail.com/) email service then use this documentation to set up Bounce handling with FluentCRM.

First copy the Webhook URL at FluentCRM -> Settings -> SMTP/Email Sending Service Settings and Select Elastic from the dropdown and copy the webhook URL.

![image](/bounce-handlers/bounce-handling-with-elastic-email/image-1024x569.png)

Then Login to your ElasticEmail account then navigate to Settings > Manage Webhooks and click on Create Webhook Button.

![image 1](/bounce-handlers/bounce-handling-with-elastic-email/image-1-997x1024.png)

Provide the webhook URL copied from FluentCRM and then only select "Unsubscribed", "Complaints" and "Bounce/Error" Events.

Once you are done click save.

With this integration when an email address got bounced or contact unsubscribe from ElasticEmail, FluentCRM will automatically change the status in your WordPress site's contact status.