---
title: "Easy Digital Downloads Integration with FluentCRM"
slug: "easy-digital-downloads-integration-with-fluentcrm"
category: "integrations"
order: 0
---

# Easy Digital Downloads Integration with FluentCRM

**Easy Digitals Downloads** is a leading e-commerce solution for selling digital products such as software, ebooks, pdfs, apps, etc. **FluentCRM’s** Easy Digital Downloads integration will help you develop perfectly data-based automation.

Just follow this simple guide to learn how to integrate Easy Digital Downloads with FluentCRM.

## Setting Up an EDD Automation Funnel

Go to your FluentCRM dashboard and click on the **+ New Automation** button to add a new automation funnel. 

![New Automation](/integrations/easy-digital-downloads-integration-with-fluentcrm/new-automation-1.webp)

Here you will see a pop-up window appear. Then select the **Category** as Easy Digital Downloads & click the **Trigger,** to start this Funnel once a new order will be added as successful payment. Lastly, click on the **Continue** button.

![Automation Funnel](/integrations/easy-digital-downloads-integration-with-fluentcrm/automation-funnel-2.webp)

## Funnel Configuration & Target Conditions

Enter a descriptive **Automation Name** and **Decription** for your funnel (e.g., "EDD Customer Onboarding"). Next, choose your **Subscription Status** from the dropdown menu. In the conditions section, you can specify what will happen if the subscriber already exists in the database. Select for which products this automation will run using the **Target Products** option. 

You can also keep it blank to run it on any product purchase. Then with the **Target Product Categories,** you can select for which product category the automation will run. 

Then, choose the **Purchase Type,** there are three options to choose from: 

 * **Any type of purchase**
 * **Only for first purchase** 
 * **From 2nd Purchase for what type of purchase you want run this funnel.** 
Lastly, click the **Save Settings** button.

![Target Condition](/integrations/easy-digital-downloads-integration-with-fluentcrm/automation-funnel-3.webp)

**Action Block**

Action blocks are tasks that you want to trigger from your side. On the Automation Funnel page, click on the plus icon. You will then find that a pop-up appears with a set of action blocks to choose from. It's suggested that you select the **Wait X Days/Hours** block first. This can be used to wait before executing the action for a given time period.

![Action Block](/integrations/easy-digital-downloads-integration-with-fluentcrm/action-block-4.webp)

Next, you can select **Send Custom Email** to your subscriber's email address or use a custom email address. You can add the Internal Label, Send Email to, Email Subject, Email Pre-Header & Email Body to this block. You can also send a test email by clicking the **Send a test email** button. Lastly, click the **Save Settings** button.

![Sends a Custom Email](/integrations/easy-digital-downloads-integration-with-fluentcrm/send-a-custom-email-5.webp)

You can use the **Apply Contact Block List** to choose which list will be added to the contact. Simply select the desired lists and save your settings afterward.

![Applyb List](/integrations/easy-digital-downloads-integration-with-fluentcrm/apply-list-6.webp)

You can also **Send Campaign Email** to send an email from your current campaign if you want. Other action blocks, such as **Cancel Sequence Emails, Cancel Automations, Apply Tag, Remove from List** & **Remove from Tag**, are available to use for your automation.

![Send Campaign Email](/integrations/easy-digital-downloads-integration-with-fluentcrm/schedule-campaign-email-7.webp)
![Action Block](/integrations/easy-digital-downloads-integration-with-fluentcrm/action-block-8.webp)

**Benchmark/Trigger Block**

These are the goal or trigger items that your user is going to do & you can measure or add these steps to this funnel. And only when the action blocks are completed can these benchmarks be triggered. 

![Goals](/integrations/easy-digital-downloads-integration-with-fluentcrm/goals-9.webp)

To open a pop-up to choose the benchmarks, click on the plus icon(+). At first, you can choose **Order Received in WooCommerce**. When a new order is placed for processing, this trigger block will run. You can add an internal label, choose target products, target product categories & Benchmark Type in this block.

![Trigger Block](/integrations/easy-digital-downloads-integration-with-fluentcrm/order-received-in-woocommerce-10.webp)

Then select the **Link Click** block that runs after a subscriber has clicked on the link provided. Before saving them, make sure to customize the settings.

![Link Click](/integrations/easy-digital-downloads-integration-with-fluentcrm/link-click-11.webp)

If you want to add more then you can use trigger blocks like:

 * **New Order Success in EDD:** This will run once new order will be placed as processing in EDD.
 * **List Applied:** This will run when selected lists will be applied to a contact. 
 * **Tag Applied:** This will run when selected Tags will be applied to a contact.
 * **Tag Removed:** It will run when selected Tags will be removed from a contact.
 * **List Removed:** It will run when selected lists will get removed from a contact.
 * **Link Click:** This will run when a contact clicks a specific tracked link in your email.
 * **New Order Success:** This will run once a new order is placed as "Processing" or "Publish" in EDD.
 * **

This is how the final output of the Easy Digital Downloads automation funnel looks like:

![Automation](/integrations/easy-digital-downloads-integration-with-fluentcrm/automation-12.webp)

## View Customer Profile for EDD

Go to your CRM contact and click on the Purchase History to show the EDD purchase story of that contact. Purchase history is sorted by **Order, Date, and Total** for **EDD**. This lets you easily view the most recent orders or track top-spending customers.

![View Customer](/integrations/easy-digital-downloads-integration-with-fluentcrm/view-customer-13.webp)