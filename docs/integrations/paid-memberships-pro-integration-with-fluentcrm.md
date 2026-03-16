---
title: "Paid Memberships Pro Integration with FluentCRM"
slug: "paid-memberships-pro-integration-with-fluentcrm"
category: "integrations"
order: 0
---

# Paid Memberships Pro Integration with FluentCRM

The Paid Memberships Pro plugin is designed to manage subscription-based memberships. By integrating it with FluentCRM, you can automate email campaigns and manage member communication through tags and lists. FluentCRM automatically integrates with Paid Memberships Pro.

In this article, we’ll guide you through creating automation and managing tags and lists for your contacts.

## Automation Funnel For Paid Membership Pro

Go to the FluentCRM dashboard and select **Automation** from the navbar then create or edit an **Automation Funnel** that you want to run for your site.

![New Automation](/integrations/paid-memberships-pro-integration-with-fluentcrm/image-8-1.webp)

A popup will appear here. Now, choose **Paid Membership Pro** from the left sidebar. 

Now select the Trigger for this Automation. Here you’ll see available triggers. These are:

 **Memberships Enrolled:** This funnel runs when a member is added to a membership level.
 **Memberships Level Expired:** This funnel runs when a membership expires.
 **Membership Level Cancelled:** This funnel runs when a membership level is canceled.

After selecting an Automation Trigger click on the **Continue** button.

![image](/integrations/paid-memberships-pro-integration-with-fluentcrm/image-7-2.webp)

Here also opens a popup and you’ll see **Enrollment in a Membership Level in PMPro**. Now fill in the required fields. 

 **Automation Name:** Enter an Automation name.
 **Internal Description:** Put an Internal Description for this Automation
 **Subscription Status:** Choose the subscription status- subscribed, pending, or unsubscribed.
 **Conditions:** In the conditions sections, you can specify what will happen if the subscriber is already in your database. You can select **update if it exists** or **skip this automation if it already exists.**
 **Target Memberships Level:** Here you can choose your Paid Membership Pro Levels. You can also keep it blank to run to any level.

If you want to restart the automation for a contact multiple times check the **Restart the Automation Multiple times for a contact for this event** options.

After that click **Save Settings** to save it.

![image](/integrations/paid-memberships-pro-integration-with-fluentcrm/image-6-3.webp)

After that, you can add [action](/docs/primary-automation-actions) blocks to target membership websites for specific contact segments.

If you have any further questions about this guide, please don't hesitate to [contact us](https://wpmanageninja.com/support-tickets/).