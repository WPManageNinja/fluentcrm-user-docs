---
title: "FluentCart Integration with FluentCRM"
slug: "fluentcart-integration-with-fluentcrm"
category: "integrations"
order: 0
---

# FluentCart Integration with FluentCRM

FluentCart integrates seamlessly with FluentCRM, connecting your e-commerce data directly with your marketing automation platform. This powerful combination allows you to trigger automations based on customer purchase behavior, manage post-purchase follow-ups, and segment your contacts based on their order history for highly targeted campaigns.

In this article, you’ll learn how the **FluentCRM** and **FluentCart** integration works and what features are available.

> No additional settings are required to integrate FluentCRM with FluentCart. Simply install and activate both plugins on your WordPress site to get started.

## **Automation Triggers for FluentCart**

FluentCRM provides a wide range of automation triggers for FluentCart, enabling you to launch automated workflows for key e-commerce events. When you create a new automation in FluentCRM, you’ll find a dedicated section for FluentCart triggers.

Go to **FluentCRM → Automations** and click the **\+ New Automation** button. Select an **Automation Trigger** from the available **FluentCart** options, then click the **Continue** button to build your automation funnel as needed.

>[!Note]
>If you want to know more about how to create a complete automation, check out our [documentation](/automation-editor) for detailed steps.

![new automation 01](/integrations/fluentcart-integration-with-fluentcrm/New-Automation-01-scaled.webp)

### Available Automation Triggers

Below are the triggers available for the FluentCart integration. Each one can be used to start a unique automation funnel.

-   **Order Paid (Payment/Subscription):** This will start when a successful order is created. It's perfect for sending order confirmation emails, starting a post-purchase follow-up sequence, or tagging customers based on what they bought.
-   **Order Shipped:** This will start when a successful order is shipped. Use this to send shipping notification emails to your customers.
-   **Order Delivered:** This will start when a successful order is delivered. Ideal for sending a follow-up email asking for a review or providing usage tips.
-   **Order Refunded (Full):** This will start when a successful order is refunded. You can use this to tag the user, remove them from a list, and send an email to gather feedback on their experience.
-   **Order Canceled:** This will start when an order is canceled. A great trigger for sending an email to understand why the customer canceled their order.
-   **Subscription Activated:** This will start when a subscription is activated. Use this to begin a subscription onboarding email series.
-   **Subscription Canceled:** This will start when a subscription is canceled. Perfect for triggering a survey or a special offer to win the customer back.
-   **Subscription Renewed:** This will start when a subscription is renewed. A great opportunity to thank the customer for their loyalty.
-   **Subscription Expired / End of Access Validity:** This will start when a subscription expires. Use this to trigger a final reminder or a last-chance offer to renew.
-   **Subscription End of Term (Completed):** This will start when a subscription reaches its end of term/completion.
-   **Cart Abandoned - FluentCart:** This will start when a customer abandons a cart in FluentCart. Use this to trigger a recovery sequence — send a reminder email with the abandoned items and a link back to checkout.

![automation trigger 02](/integrations/fluentcart-integration-with-fluentcrm/Automation-trigger-02.webp)

#### Order Paid (Payment/Subscription)

After selecting the **Order Paid (Payment/Subscription)** trigger from the automation builder, a settings pop-up will appear where you can configure the trigger’s behavior.

First, you can set the **Automation Name**, which is the primary label for your funnel, and add an optional **Internal Description** for your own reference.

Next, configure the **Subscription Status**. By default, contacts entering this automation will be set to **Subscribed**. You can also check the box to **Run the automation actions even contact status is not in subscribed status**, if you need the automation to run for contacts with other statuses like “**Pending**”, “**Transactional**”, or “**Unsubscribed**“.

The **Conditions** section allows you to target the trigger with precision:

-   **Target Products:** Start the automation only when specific products are purchased. Leave it blank to run for any product purchase.
-   **Or Target Product Categories:** Alternatively, start the automation only when a product from a specific category is purchased. Leave it blank to run for any category.
-   **Restart the Automation Multiple times for a contact for this event:** Enable this option if you want a contact to re-enter this automation every time they make a qualifying purchase. If this is disabled, a contact can only go through this specific automation funnel once.

Once you have configured the settings, click the **Save Settings** button to finalize the trigger and continue building your automation workflow.

> The process of creating other automations is the same as setting up the **Order Paid (Payment/Subscription)** automation. This means you can easily create any e-commerce automation following the same steps.

![order paid 03](/integrations/fluentcart-integration-with-fluentcrm/order-paid-03-scaled.webp)

## **Automation Actions for FluentCart**

After a FluentCart trigger starts an automation, you can use any of FluentCRM's core action blocks to build a powerful and customized workflow. There are no specific "FluentCart" actions because the integration is designed to work seamlessly with all of FluentCRM's native features.

For example, after an **Order Paid** trigger, you could:

-   Use the **Wait X Days/Hours** action to delay a follow-up.
-   Use **Apply Tag** to segment the customer based on the product they purchased.
-   Use **Send Custom Email** to send a thank you note with related product suggestions.
-   Use **Add Notes & Activity** to add a record of the purchase to the contact's profile.

If you want to know more about automation actions, check out our [documentation](/primary-automation-actions) for detailed steps.

## **FluentCart SmartCodes**

When a FluentCart trigger fires an automation, FluentCRM makes order and customer data available as SmartCodes you can use in email subject lines, body content, or action settings. These codes resolve to the actual values from the triggering order at send time.

### Cart Order SmartCodes

| SmartCode | Description |
| --- | --- |
| <code>&#123;&#123;cart_order.order_id&#125;&#125;</code> | Order ID |
| <code>&#123;&#123;cart_order.invoice_no&#125;&#125;</code> | Invoice Number |
| <code>&#123;&#123;cart_order.status&#125;&#125;</code> | Order Status |
| <code>&#123;&#123;cart_order.type&#125;&#125;</code> | Order Type |
| <code>&#123;&#123;cart_order.payment_method&#125;&#125;</code> | Payment Method |
| <code>&#123;&#123;cart_order.payment_method_title&#125;&#125;</code> | Payment Method Title |
| <code>&#123;&#123;cart_order.payment_status&#125;&#125;</code> | Payment Status |
| <code>&#123;&#123;cart_order.currency&#125;&#125;</code> | Currency |
| <code>&#123;&#123;cart_order.subtotal&#125;&#125;</code> | Order Subtotal |
| <code>&#123;&#123;cart_order.shipping_total&#125;&#125;</code> | Shipping Total |
| <code>&#123;&#123;cart_order.total_amount&#125;&#125;</code> | Total Amount |
| <code>&#123;&#123;cart_order.total_paid&#125;&#125;</code> | Total Paid Amount |
| <code>&#123;&#123;cart_order.total_refund&#125;&#125;</code> | Total Refund |
| <code>&#123;&#123;cart_order.shipping_status&#125;&#125;</code> | Shipping Status |
| <code>&#123;&#123;cart_order.note&#125;&#125;</code> | Order Note |
| <code>&#123;&#123;cart_order.created_at&#125;&#125;</code> | Order Creation Date |
| <code>&#123;&#123;cart_order.completed_at&#125;&#125;</code> | Order Completion Date |

### Cart Customer SmartCodes

| SmartCode | Description |
| --- | --- |
| <code>&#123;&#123;cart_customer.first_name&#125;&#125;</code> | Customer First Name |
| <code>&#123;&#123;cart_customer.last_name&#125;&#125;</code> | Customer Last Name |
| <code>&#123;&#123;cart_customer.email&#125;&#125;</code> | Customer Email |
| <code>&#123;&#123;cart_customer.status&#125;&#125;</code> | Customer Status |
| <code>&#123;&#123;cart_customer.purchase_value&#125;&#125;</code> | Total Purchase Value |
| <code>&#123;&#123;cart_customer.purchase_count&#125;&#125;</code> | Total Purchase Count |
| <code>&#123;&#123;cart_customer.aov&#125;&#125;</code> | Average Order Value (AOV) |
| <code>&#123;&#123;cart_customer.first_purchase_date&#125;&#125;</code> | First Purchase Date |
| <code>&#123;&#123;cart_customer.last_purchase_date&#125;&#125;</code> | Last Purchase Date |
| <code>&#123;&#123;cart_customer.country&#125;&#125;</code> | Customer Country |
| <code>&#123;&#123;cart_customer.city&#125;&#125;</code> | Customer City |
| <code>&#123;&#123;cart_customer.notes&#125;&#125;</code> | Customer Notes |

>[!Tip]
> SmartCodes in the `cart_order` and `cart_customer` groups are only available in automations triggered by a FluentCart event. They resolve to empty strings in non-FluentCart contexts.

## **Contact Segmentation & Filtering with FluentCart Data**

The integration allows you to filter and segment your contacts in FluentCRM based on their purchase history and data from FluentCart. This is useful for sending targeted email campaigns or for creating dynamic contact segments.

You can find these filtering options in **Advanced Filters**:

1.  In the main **Contacts** dashboard, enable the **Advanced Filter** by clicking the **toggle** button. Next, click the **Add** button and select **FluentCart**. This will display all the available advanced filters. Simply choose the filters you need and configure them according to your requirements.

The available FluentCart conditions for segmentation are:

-   **Is a customer?:** Filter contacts based on whether they have ever made a purchase.
-   **Lifetime Value:** Segment by the total amount a customer has spent.
-   **Average Order Value:** Filter contacts based on their average purchase amount.
-   **First Order Date:** Find customers who made their first purchase within a specific date range.
-   **Last Order Date:** Segment customers based on when they last made a purchase.
-   **Products:** Filter for customers who have purchased specific products.
-   **Product Variations:** Filter based on specific product variations purchased.
-   **Product Categories:** Segment customers who have bought items from certain categories.
-   **Used Coupons:** Find all contacts who have used a specific coupon code.
-   **Active Licenses:** Filter based on currently active licenses.
-   **Expired Licenses:** Find contacts with expired licenses.
-   **Has any active license?:** Segment contacts based on whether they have any active licenses or not.

![advanced filter 04](/integrations/fluentcart-integration-with-fluentcrm/advanced-filter-04-scaled.webp)

2\. These same advanced filters are also available when setting up the **Recipients** for an **Email Campaign**, allowing you to send highly targeted broadcasts to specific customer groups.

![receipt advanced filter](/integrations/fluentcart-integration-with-fluentcrm/Receipt-advanced-filter-scaled.webp)

## **Checkout Subscription Opt-In**

FluentCRM includes a built-in newsletter opt-in checkbox on the FluentCart checkout page. When a customer checks the box and completes their order, FluentCRM automatically creates or updates their contact — assigning them to a list, applying tags, and optionally triggering a double opt-in confirmation.

This lets you grow your email list directly from the checkout flow without a separate form or third-party plugin.

See [FluentCart Checkout Subscription](/fluentcart-checkout-subscription) for full configuration details.
