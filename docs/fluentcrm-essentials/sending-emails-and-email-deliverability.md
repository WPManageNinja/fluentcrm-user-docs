---
title: "Email Delivery of FluentCRM"
slug: "sending-emails-and-email-deliverability"
category: "fluentcrm-essentials"
order: 0
---

# Email Delivery of FluentCRM

FluentCRM is an Email Marketing & Automation tool. It helps you launch Email Campaigns, Email sequences, and Email Automation to automate your marketing emails.

Using your hosting space for email isn't a good idea. And using the hosting for sending PHP emails would most likely deplete the hosting resources. Thus, we suggest that you use a separate email service.

To learn more about various Email Delivery Providers and their overview, you may check out some of the blogs below:

## Configure an Email Delivery Service Provider

In order to use an email service, you need to use an SMTP plugin. There are plenty of SMTP plugins in the WordPress repository. But most of them offer slow email sending.

### FluentSMTP to Handle All Email Delivery

That's why we've created a free-for-lifetime SMTP plugin called FluentSMTP. In fact, it is the only SMTP plugin that allows multiple SMTP connections at the same time described here: **[Multiple SMTP Connections & Auto Routing](https://fluentsmtp.com/docs/using-multiple-smtp-drivers-with-fluent-smtp/).** This means, if you install FluentSMTP, you can use multiple email-sending services to cut down your email-sending costs. Some email services can be a bit costly. 

So if you have FluentSMTP, you can use the expensive email service for your marketing emails and the less expensive email service for not-so-important WordPress emails.

![fluent smtp wordpress](/fluentcrm-essentials/sending-emails-and-email-deliverability/fluent-smtp-wordpress.webp)

For more about FluentSMTP, Configurations, and features please check the relevant documentation: [**Install and Activate FluentSMTP**](https://fluentsmtp.com/docs/installing-fluent-smtp/), [**Configurable Email Delivery Providers**](https://fluentsmtp.com/docs/configurable-email-delivery-providers/), and [**Introduction to FluentSMTP Dashboard**](https://fluentsmtp.com/docs/introduction-to-fluent-smtp-dashboard/)

Click the button to install FluentSMTP. Or, you can download and install FluentSMTP on your WordPress by clicking the button below:

[Download FluentSMTP](https://wordpress.org/plugins/fluent-smtp/)

### List of Configurable Delivery Providers

There a lot of different Email Delivery Providers can be configured natively via API-based connection as listed below:

1.  [Amazon SES API.](https://fluentsmtp.com/docs/set-up-amazon-ses-in-fluent-smtp/)
2.  [Mailgun API.](https://fluentsmtp.com/docs/configure-mailgun-in-fluent-smtp-to-send-emails/)
3.  [SendGrid API.](https://fluentsmtp.com/docs/set-up-the-sendgrid-driver-in-fluent-smtp/)
4.  [Sendinblue API.](https://fluentsmtp.com/docs/setting-up-sendinblue-mailer-in-fluent-smtp/)
5.  [SparkPost API.](https://fluentsmtp.com/docs/configure-sparkpost-in-fluent-smtp-to-send-emails/)
6.  [Netcore API (formerly Pepipost).](https://fluentsmtp.com/docs/set-up-the-pepipost-mailer-in-fluent-smtp/)
7.  [PostMark API.](https://fluentsmtp.com/docs/configure-postmark-in-fluent-smtp-to-send-emails/)
8.  [Elastic Mail API.](https://fluentsmtp.com/docs/configure-elastic-email-in-fluent-smtp/)
9.  [Gmail & Google Workspace OAuth API.](https://fluentsmtp.com/docs/connect-gmail-or-google-workspace-emails-with-fluentsmtp/)
10.  [Outlook OAuth API.](https://fluentsmtp.com/docs/setup-outlook-with-fluentsmtp/)
11.  [All Other SMTP.](https://fluentsmtp.com/docs/set-up-fluent-smtp-with-any-host-or-mailer/)

### Example of Multiple Email Delivery Connections

Below is an example screenshot of multiple Email Delivery Connections based on various Delivery Providers:

![fluent smtp multiple connections](/fluentcrm-essentials/sending-emails-and-email-deliverability/fluent-smtp-multiple-connections.webp)

## FluentCRM Email Processing

There are different places from where Emails can be sent such as **Test Emails** from [**Email Templates**](/docs/email-templates), [**Email Campaigns**](/docs/setting-up-campaign), [**Email Sequences**](/docs/email-sequence), [**Automation Email Actions**](/docs/automation-email-actions), [**Double Opt-in Settings**](/docs/global-double-opt-in-settings), and [**Recurring Campaigns**](/docs/recurring-campaign).

**Send the emails right now:** Once the scheduling is set to "right now," the emails will begin processing. This process is a task where FluentCRM starts generating Emails against each subscriber with necessary headers and email content.

**Schedule the emails:** You can set specific dates and times for your email processing.

**Schedule emails within a specified date-time range:** Your emails will start processing between your specified time-date range.

![schedule the emails](/fluentcrm-essentials/sending-emails-and-email-deliverability/Schedule-the-emails.webp)

The next step is to deliver the emails. It can be delivered through wp\_mail() directly or if you have a plugin like FluentSMTP. FluentSMTP takes emails from FluentCRM and then relays them to the Email Delivery Provider you configure in settings and used from FluentCRM.

Below is a screenshot of an Email campaign while sending a campaign. Please check the above links for specific features.

![flunetcrm email processing](/fluentcrm-essentials/sending-emails-and-email-deliverability/flunetcrm-email-processing.webp)

## FluentCRM Email Scheduling

The emails can be scheduled or waited until a period of time from different places described below:

### Delay Emails in Automation

Below is an example screenshot of Automation Emails waiting for 1 Day. For more about this please check: [**Wait X Days/Hours**](/docs/primary-automation-actions/#wait-x-days-hours)

![crm automation wait](/fluentcrm-essentials/sending-emails-and-email-deliverability/crm-automation-wait.webp)

## Compare Cron Status

  
FluentCRM Cron Status runs 60 Seconds, 5 Minutes, and 60 Minutes Intervals.

That's all about Email Sending from FluentCRM! Please read through our guidelines and documentation to learn in-depth knowledge about using and utilizing the features of FluentCRM.