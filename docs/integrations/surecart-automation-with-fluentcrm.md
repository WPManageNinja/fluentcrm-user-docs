---
title: "SureCart Automation With FluentCRM"
slug: "surecart-automation-with-fluentcrm"
category: "integrations"
order: 0
---

# SureCart Automation With FluentCRM

SureCart Plugin makes e-commerce easy for businesses. It is feature-rich and has a user-friendly interface, allowing retailers to develop gorgeous online storefronts, manage inventory efficiently, and provide secure checkout experiences.

FluentCRM automatically integrates with Surecart. It lets you automate some marketing automation [triggers](/fluentcrm-automation-triggers). Follow these steps to learn how to use marketing automation with SureCart.

## Marketing Automation Trigger for Surcart

FluentCRM provides two triggers specifically for SureCart:

#### **New Order Success**

This trigger activates whenever a new order is successfully placed on SureCart. It works similarly to the WooCommerce Order Completion trigger, enabling you to automate follow-up actions after a purchase.

-   **Upsell/Cross-Sell Emails**: Automatically send an email offering related products or services to customers who’ve just purchased.
-   **Order Confirmation and Thank You Emails**: Ensure your consumers receive a personalized thank-you email and details about their transaction promptly.

**Example:** A customer purchases a Headphone. You can set up an automation that sends them an email offering discounts on Headphones.

![image](/integrations/surecart-automation-with-fluentcrm/image.png)
![image](/integrations/surecart-automation-with-fluentcrm/image-1.png)

#### **Order Revoked**

This trigger is intended to assist you in re-engaging clients who cancel or withdraw their orders. It's critical to develop win-back strategies to re-engage such consumers.

-   **Win-Back Campaigns:** Send an email asking the consumer to reconsider their decision, perhaps with a special offer or discount.
-   **Feedback Requests:** Contact them to find out why they canceled, as this might provide helpful information for improving your products or services.

**Example:** A consumer decides to quit their subscription service. You may create an automatic that sends them a discount code or a special offer to attract them to re-subscribe.

![image](/integrations/surecart-automation-with-fluentcrm/image-2.png)
![image](/integrations/surecart-automation-with-fluentcrm/image-3.png)

## Automation Funnel Settings

To configure the automation funnel for SureCart, follow these steps:

Go to Automation from the FluentCRM dashboard Click on the **New Automation** button to proceed with the New Order Success trigger.

![image](/integrations/surecart-automation-with-fluentcrm/image-4.png)

A pop-up box will appear to provide an **Automation Funnel Name** and select your desired **trigger**. Then Click on the **Continue** button for the next step.

![image](/integrations/surecart-automation-with-fluentcrm/image-5.png)

Another pop-up will appear from the side here you can change the **Automation Name, Internal description** and choose the **Subscription Status** (Subscribed, Pending, or Unsubscribed). Selecting the **Pending** option adds contacts as pending subscribers.

In the Conditions section, specify the products for which this automation will run using the **Target Products** option. Leaving it blank will apply automation to any product purchase.

If you want to restart the automation for the same contact multiple times then check **Restart the Automation multiple times for a contact for this events** box.

Now click the **Save Settings** to save the automation.

![image](/integrations/surecart-automation-with-fluentcrm/image-6.png)

## Action blocks

Action blocks are tasks triggered by your side. To add action blocks to your automation funnel, follow these steps:

Click on the **Plus** icon (+) on the Automation Funnel page then select the **Add Action / Goal button.**

![image](/integrations/surecart-automation-with-fluentcrm/image-7.png)

A pop-up will appear, providing a selection of action blocks to choose from.

Choose the desired action block based on your requirements. FluentCRM offers many action blocks for SureCart marketing automation.

![image](/integrations/surecart-automation-with-fluentcrm/image-8.png)

See detailed instructions on using these action blocks [here](/primary-automation-actions).

## Goals/ Triggers Blocks

**Goals/Trigger** blocks allow you to measure specific user actions and automate the funnel based on goal completion. You can incorporate these blocks to track and trigger automation when users complete certain steps.

**Order Received in Surecart:** In your funnel, you can add the order received in the Surecart benchmark so that you can track whether the user purchased the product from your store, and then you can take certain actions based on the purchase in the Processing Status.

![image](/integrations/surecart-automation-with-fluentcrm/image-9.png)

If you want to use other goals or benchmarks check our [documentation](/goals-or-benchmark-actions).

## Conditions

**Condition Blocks** provide conditional logic for automating various actions based on If/Else situations. FluentCRM allows you to automate various activities in SureCart based on two specific conditions. Use conditionals to tailor your automation based on specific conditions.

![image](/integrations/surecart-automation-with-fluentcrm/image-10.png)

If you want to use other conditionals please check out this [documentation](/conditional-automation-actions).

### Contact’s Purchase History 

In your FluentCRM **Contact** section, you can quickly access a customer’s profile with the new **“View Customer Profile”** button below the purchase history for **Surecart** and **EDD** users. 

![view custom profile](/integrations/surecart-automation-with-fluentcrm/view-custom-profile-scaled.webp)

Clicking the **View Customer Profile** will redirect you to the Surecart customer dashboards.

![surecart customer details](/integrations/surecart-automation-with-fluentcrm/surecart-customer-details-scaled.webp)

By following these steps, you can successfully run marketing automation for SureCart using FluentCRM.
