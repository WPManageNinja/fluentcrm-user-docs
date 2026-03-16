---
title: "WooCommerce Automation with FluentCRM"
slug: "woocommerce-automation-with-fluentcrm"
category: "integrations"
order: 0
---

# WooCommerce Automation with FluentCRM

**WooCommerce** is an open-source e-commerce plugin for WordPress. With **FluentCRM**'s WooCommerce integration, you will gain more leverage over your customer relationships & discover new insights that weren't used before. 

https://youtu.be/uNys-7rY6wA

FluentCRM automatically integrates with WooCommerce and lets you automate various tasks including contact creation, segmentation, and marketing automation. Just follow this simple guide to learn how to automate these tasks with FluentCRM!

**Tutorial**: [Beginners Guide to WooCommerce Email Marketing Automation](https://fluentcrm.com/beginners-guide-to-woocommerce-email-marketing/)

### WooCommerce Opt-In Checkbox

Whenever a user places an order from WooCommerce, they can be imported automatically as a subscriber in FluentCRM. But in order to remain compliant with email marketing rules and regulations, you might want to get consent from your users. For that, you can add **WooCommerce Checkout Subscription Field** to the WooCommerce checkout form.

![woocommerce checkout page ](/integrations/woocommerce-automation-with-fluentcrm/WooCommerce-Checkout-page-.webp)

To add WooCommerce checkout subscription field, go to **Settings**\>**General Settings** and choose to **Enable Subscriber Checkout to WooCommerce Checkout Page**.

![general settings fluentcrm 1](/integrations/woocommerce-automation-with-fluentcrm/General-Settings-FluentCRM-1.webp)

Here are the details for the other settings:

-   **Checkout Label:** Give a label for the checkbox.
-   **Assign List**: Assign the contacts to your particular contact List.
-   **Assign Tags**: Assign the contacts to your particular contact Tags.
-   **Auto Checked**: Enable the checkbox automatically for the customer.
-   **Do not show Checkbox**: Hide the checkbox for the customer if he is already added in the FluentCRM subscription list.
-   **Double Opt-in**: Enable double [Opt-in email](/docs/fluentcrm-global-settings#4-toc-title) from the contacts.

### Contact Segmentation

FluentCRM also lets you add or remove tags to contacts based on **Product Purchases** and **Refund Requests**.

In order to apply [tags](/docs/segment-your-audience#1-toc-title) to contacts, open WooCommerce product editor and click **FluentCRM** from the product data section. Next, select which tags you want to add or remove when someone purchases your product. You can also do the same when refunds actions happen for the same contact.

![product tags in woocommerce](/integrations/woocommerce-automation-with-fluentcrm/Product-TAgs-in-WooCommerce.webp)

### WooCommerce Marketing Automation

FluentCRM also allows you to automate a wide range of tasks such as sending behavioral emails, email sequences, and many more.

https://youtu.be/Q35Yzm-bMpA?si=xGEK\_qcCSo0wN5nc

https://youtu.be/pZd2-LuocnQ?si=MAHCkPdRMbrh2\_9p

https://youtu.be/Xv77Fd6Gifw?si=wQMUH6hE78QXG7pD

FluentCRM’s email marketing automation includes four major elements. These are:

1.  **Triggers:** Triggers are essential for initiating email marketing automation. They can be behavior-based, or time-based. Learn more about [FluentCRM’s Triggers](/docs/fluentcrm-automation-triggers).
2.  **Action Blocks**: The actions that will be done throughout the funnel for example sending an email, adding the user to a list, etc. Learn everything about [FluentCRM Action Blocks](/docs/primary-automation-actions)
3.  **Benchmarks**: Benchmarking the behavior of the users for example whether they purchased a product, clicked into a link, etc. Learn everything about [FluentCRM Benchmark Blocks](/docs/goals-or-benchmark-actions)
4.  **Conditionals**: Conditionals will let you set multiple paths based on if/else conditions. Learn more about [FluentCRM Conditionals](/docs/conditional-automation-actions)

At first, from your FluentCRM dashboard & go to the **Automations** option. Then click on the **+ New Automation** button to add an automation funnel.

![automations fluentcrm](/integrations/woocommerce-automation-with-fluentcrm/Automations-FluentCRM.webp)

You will notice a pop-up window appear. And then select **WooCommerce** from the **Category** option.

![automations triggers woocommerce fluentcrm](/integrations/woocommerce-automation-with-fluentcrm/Automations-Triggers-WooCommerce-FluentCRM.webp)

From here, you can select one of four available triggers. Currently, available [WooCommmerce Triggers](/docs/fluentcrm-automation-triggers#2-toc-title) are

1.  **New Order(Processing)** - This will trigger the automation funnel once a new order is placed on WooCommerce for the targetted products, product category or all products.
2.  **Order Completed** - This will trigger the automation funnel once an order has been marked as completed in your WooCommerce store for the targetted products, product category or all products.
3.  **Order Refunded**: This will trigger an automation funnel once an order gets refunded for the targetted products, product category or all products.
4.  **Order Status Changed**: This will trigger an automation funnel when an Order status changes.

For demonstration purposes, we are using the **New Order(Processing)** trigger. So, this funnel will start once a new order is added as processing. Click on the **Continue** button.

![automations fluentcrm 1](/integrations/woocommerce-automation-with-fluentcrm/Automations-FluentCRM-1.webp)

Next, a pop-up box will appear with some options to set up the funnel automation. Add a **Automation Name** & choose the **Subscription Status,** you can choose from **Subscribed, Pending & Unsubscribed.** If you choose the **Pending** option, the contacts will join as pending contacts and FluentCRM will automatically send an opt-in email.

In the **Conditions** section, choose for which products this automation will run using the **Target Products** option. You can also keep it blank to run to any product purchase. With **Target Product Categories,** you can select from which product category the automation will run.

Choose the **Purchase Type** for what type of purchase you want to run this funnel. There are three options; **Any type of purchase, Only for first purchase & From 2nd Purchase.** Click the **Save Settings** button when you're satisfied with the trigger configuration.

![triggers condition ](/integrations/woocommerce-automation-with-fluentcrm/Triggers-Condition-.webp)

**Action Block**

[Actions blocks](/docs/primary-automation-actions) are tasks that you wish to trigger from your side. Click on the plus icon on the Automation Funnel page. Then you will notice a pop-up appear with a set of action blocks to choose from.

![woocommerce action for triggers ](/integrations/woocommerce-automation-with-fluentcrm/WooCommerce-Action-for-Triggers-.webp)

From here, you can choose any type of action block. FluentCRM offers 15 action blocks and two specific action Blocks for WooCommerce marketing automation.

The specific action blocks for WooCommerce include:

**Change Order Status(WooCommmerce Only)**: This action lets you change the order status in WooCommerce for the contacts within the automation funnel.

![Change Order status](/integrations/woocommerce-automation-with-fluentcrm/image-19.webp)

**Add Order Note(WooCommmerce Only)**: This action lets you add a **Private Note** or **Notes to Customer** in WooCommerce for the contacts within the automation funnel.

![Add Order Note](/integrations/woocommerce-automation-with-fluentcrm/image-20.webp)

**Create Coupon:** The **Create Coupon** action lets you automatically generate a WooCommerce coupon code for contacts inside your automation. You can either configure a new coupon from scratch or use an existing WooCommerce coupon as a template. Once configured, the dynamic coupon can be used later in emails or other automation steps.

![Coupon ](/integrations/woocommerce-automation-with-fluentcrm/coupon-code.webp)

**Goals/Trigger Block(Benchmark)**

[Goals/Trigger blocks](/docs/goals-or-benchmark-actions) are goal or trigger items that your user might do. They let you measure these steps and automate the funnel based on goal completion.

Click on the plus icon(+) to open the pop-up for selecting the **Goals**. For WooCommerce, you can choose **Order Received in WooCommerce** goal. This trigger block will run once a new order is placed as processing.

![goal action in woocommerce funnel](/integrations/woocommerce-automation-with-fluentcrm/Goal-Action-in-WooCommerce-funnel.webp)

In this block, you can add an internal label, choose target products, target product categories & Benchmark Type. 

![Product category](/integrations/woocommerce-automation-with-fluentcrm/Edit-Funnel-Fl-6.webp)

Please check our [documentation](/docs/goals-or-benchmark-actions) if you want to use other goals or benchmarks.

**Condition**s

If you want to automate different activities based on If/Else conditions, you can choose a condition. For WooCommerce, FluentCRM allows you to automate different activities based on Conditions.

![conditions for woocommerce 1](/integrations/woocommerce-automation-with-fluentcrm/Conditions-for-woocommerce-1.webp)

If you want to use other conditionals please check out [this documentation](/docs/conditional-automation-actions).

**Product Block(for Email Templates)**

FluentCRM also allows you to add products to your email templates with ease. If you’re using WooCommerce, you’ll notice two **Product Blocks** are arrive. This blocks allows you automatically fetch WooCommerce products within your email template with a purchase button.

![Product Block](/integrations/woocommerce-automation-with-fluentcrm/image-9.webp)

To add a product block for selling your products on WooCommerce, select any product block that your needs. Next, you’ll be asked to select your product. Choose the product you want to add and hit **Done**.

Once you have added the product, you can show or hide the product description, price, and colors of your content, content background, etc.

![Product](/integrations/woocommerce-automation-with-fluentcrm/image-11.webp)

So that's it for WooCommerce Marketing automation. If you want to get started right away, don't forget to check out our WooCommerce tutorial below:

\***Tutorial**: [Beginners Guide to WooCommerce Email Marketing Automation](https://fluentcrm.com/beginners-guide-to-woocommerce-email-marketing/)