---
title: "Ecommerce Triggers"
slug: "fluentcrm-ecommerce-triggers"
category: "automation-funnels"
order: 0
---

# Ecommerce Triggers

FluentCRM provides powerful automation triggers for leading E-commerce Platforms like **WooCommerce**, **FluentCart**, **SureCart**, and **Easy Digital Downloads (EDD)**. These triggers allow you to start dynamic marketing funnels based entirely on your customers' shopping behavior and purchase history.

> **Note:** **FluentCart** triggers ship with **FluentCRM core (free)** – no Pro upgrade required. **WooCommerce**, **SureCart**, **EDD**, and **AffiliateWP** triggers require **FluentCRM Pro**. The respective e-commerce plugin must be installed and activated on your site.

Here is everything you need to know to automate your e-commerce workflows!

## Access Ecommerce Triggers

Finding and selecting your e-commerce triggers is simple and fast. 

1. Go to **FluentCRM → Automations** from your WordPress dashboard.
2. Click the blue **+ Create Automation** button in the top right corner.
3. A window titled **Automation Templates** will pop up. 
4. On the left sidebar, look for the e-commerce platform you are using (WooCommerce, SureCart, Easy Digital Downloads, or AffiliateWP). Clicking any of these will display the available starting triggers for that platform!

![Ecommerce Trigger](/automation-funnels/fluentcrm-ecommerce-triggers/ecommerce-automation-1.webp)

### 1. WooCommerce Triggers

WooCommerce is deeply integrated with FluentCRM. Clicking the WooCommerce tab reveals **6 distinct triggers** to kick off your marketing funnels:

* **New Order:** This funnel starts the moment any new order is placed in your store.
* **Order Processing:** This starts when a customer's order status changes to "Processing" (typically right after a successful payment). Perfect for sending order confirmation or "what to expect next" emails.
* **Order Completed:** This funnel starts when an order is officially marked as "Completed." Ideal for sending product onboarding guides or requesting a review.
* **Order Refunded:** This starts if an order is refunded. You can use this to automatically add a "Refunded" tag and remove the customer from promotional sequences.
* **Order Status Changed:** This funnel allows you to trigger an action when an order moves from *any* specific status to another (e.g., from *Processing* to *Completed*).
* **Cart Abandoned:** This powerful trigger starts when a user leaves items in their cart without checking out. Use this to send automated cart recovery emails to boost your sales!

![Ecommerce Trigger](/automation-funnels/fluentcrm-ecommerce-triggers/ecommerce-automation-3.webp)

### 2. FluentCart Triggers *(included in FluentCRM core)*

FluentCart includes dedicated order, subscription, and abandoned-cart triggers so you can automate post-purchase and lifecycle communication from one place. **These triggers ship with the free FluentCRM plugin** – you do not need FluentCRM Pro to use them.

Available FluentCart triggers include:

* **Order Paid (Payment/Subscription):** Runs when a successful order is created.
* **Order Shipped:** Runs when an order is marked as shipped.
* **Order Delivered:** Runs when an order is marked as delivered.
* **Order Refunded (Full):** Runs when an order is fully refunded.
* **Order Canceled:** Runs when an order is canceled.
* **Order Status Changed:** Runs when a FluentCart order moves between statuses.
* **Subscription Activated:** Runs when a subscription becomes active.
* **Subscription Cancelled:** Runs when a subscription is canceled.
* **Subscription Renewed:** Runs after a successful subscription renewal.
* **Subscription Expired / End of Access Validity:** Runs when subscription access ends.
* **Cart Abandoned (FluentCart):** Runs when a FluentCart cart is left without checkout. See [FluentCart Abandon Cart Automation](/fluentcart-abandon-cart-automation) for the full walkthrough.

![Ecommerce Trigger](/automation-funnels/fluentcrm-ecommerce-triggers/ecommerce-automation-2.webp)

### 3. SureCart Triggers

If you use SureCart for your checkout flows, FluentCRM provides **3 dedicated triggers**:

* **Order Paid (Payment/Subscription):** This funnel initiates when a customer successfully pays for a product or a recurring subscription. Great for welcoming new subscribers!
* **Order Revoked:** This starts when an order or subscription is revoked or canceled. You can use this to trigger a "win-back" email campaign.
* **New Customer/Lead:** This starts the moment a new customer or lead is captured via SureCart, allowing you to instantly add them to your general newsletter lists.

![Ecommerce Trigger](/automation-funnels/fluentcrm-ecommerce-triggers/ecommerce-automation-5.webp)

### 4. Easy Digital Downloads (EDD) Triggers

For stores selling digital products via EDD, FluentCRM offers a primary purchase trigger:

* **New Order Success:** This automation funnel will start immediately once a new EDD order payment is successful. Use this to automatically email digital files, license keys, or onboarding instructions.


![Ecommerce Trigger](/automation-funnels/fluentcrm-ecommerce-triggers/ecommerce-automation-4.webp)

### Configuring Your Ecommerce Trigger Settings

Once you click on any of the e-commerce triggers mentioned above, a settings panel will slide out from the right side of your screen. This is where you set the specific rules for your funnel. 

While options vary slightly depending on the trigger, here are the most important settings you can configure (using the **WooCommerce New Order** trigger as an example):

* **Internal Label & Description:** Give your automation a clear name and a brief note so you can easily identify it later.
* **Subscription Status:** Choose the required contact status (e.g., Subscribed) for the user to be allowed into this funnel.
* **Conditions (Skip if active):** Check this box if you want to skip this automation for a contact if they are *already* actively running through this specific funnel.
* **Target Products:** Click the dropdown to select specific products. The funnel will *only* trigger if the customer buys the exact product(s) you select here. Leave it blank to trigger for all store products.
* **Target Product Categories:** Select specific product categories. The funnel will trigger if a customer buys anything from the selected category.
* **Purchase Type:** This is a highly powerful setting! Choose who gets this automation:
    * **Any type of purchase:** Runs for everyone.
    * **Only for First Purchase:** Runs *only* if this is the customer's very first time buying from you (great for special "First Time Buyer" discounts).
    * **From 2nd Purchase:** Runs for returning, loyal customers. 
* **Restart the Automation:** Check this box if you want to allow the customer to go through this exact funnel again if they make another purchase in the future.

Once you are happy with your settings, click the blue **Save Settings** button at the bottom to jump into the visual editor and start building your email sequence!