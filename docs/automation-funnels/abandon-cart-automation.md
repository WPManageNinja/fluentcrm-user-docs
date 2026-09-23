---
title: "Abandon Cart Automation"
slug: "abandon-cart-automation"
category: "automation-funnels"
order: 0
---

# Abandon Cart Automation

With FluentCRM, you can automate abandoned cart recovery for **WooCommerce**, segment your customers by adding tags and lists, and run email campaigns to bring shoppers back. This article walks you through building the recovery automation for WooCommerce.

## When a cart counts as abandoned

FluentCRM starts tracking a cart on the **checkout page**, not when a product is added to the cart. A cart record needs an email address to attach to, so it's created as soon as the billing email is available:

- **Logged-in customers**: WooCommerce prefills the billing email, so the cart is captured when the checkout page loads.
- **Guests**: the cart is captured once they type their email into the billing email field.

From that point the **Cart Abandoned Cut-off Time** countdown starts. If the customer doesn't complete the order within that window, a background task (which runs every five minutes) marks the cart as abandoned, matches it to your highest-priority Cart Abandoned automation, and starts the funnel. In practice, expect the automation to start up to five minutes after the cut-off time has passed.

>[!Note]
> Adding a product to the cart and leaving without opening checkout is not tracked. Nudge shoppers toward checkout with a clear cart-page call to action if you want more carts captured.

## Enable Abandoned Cart in global settings

Before you build **WooCommerce** abandoned-cart automations, turn on abandoned-cart tracking in FluentCRM:

1. In the WordPress admin, open **FluentCRM → Settings → Abandoned Cart Settings**.
2. Turn **on** the **Enable Abandoned Cart Module** toggle.
3. In the **WooCommerce** section, check **Enable Abandoned cart feature for WooCommerce**.
4. Choose which order statuses should mark a cart as **recovered** (for example **Processing** and **Completed**, depending on your store).
5. Click **Save** (top right).

For every option on this screen, see [Abandoned Cart Settings](/abandoned-cart-settings).

![Enable Abandoned Cart module and WooCommerce abandoned cart feature](/automation-funnels/abandon-cart-automation/enable-abandoned-cart-module-woocommerce.png)

## Abandon Cart Automation 

Go to your FluentCRM and select **[Automation](/introduction-to-fluentcrm-automation)** from the Navbar then click on the **New Automation** button. 

![automation funnels fluentcrm abandon 1](/automation-funnels/abandon-cart-automation/Automation-Funnels-FluentCRM-Abandon-1-scaled.webp)

Here, FluentCRM provides several free automation funnel templates, including a built-in automation funnel template specifically for **Abandoned Cart**. You can choose this template or create new from scratch to design your own.

First, give your automation funnel a name, then select **WooCommerce** from the sidebar in the popup. Next, choose the **Cart Abandoned** Trigger and click the **Continue** button.

![automation funnels fluentcrm abandon](/automation-funnels/abandon-cart-automation/Automation-Funnels-FluentCRM-Abandon-2-scaled.webp)

A side pop-up will appear from the right, displaying the settings for this automation funnel. Choose the priority for the abandoned cart automation if you have multiple automations. 

>[!Note]
>A higher priority means it will be matched earlier.

**Run the Automation Action Even if Contact Status is Not in Subscribed Status** means that the automation will execute its actions regardless of whether the contact is on the subscribed list or not. 

If you enable this then it ensures that the automation triggers and performs its actions for all relevant contacts, even if they are not currently marked as subscribed.

You can enable the **Condition** for this automation. Click on the **Add Property** button to set the conditions. 

Enabling **Skip this Automation if the Contact is Already in Active State** will prevent the automation from running multiple times for the same contact if they are already active within this automation.

If you enable **Only Run this Automation for Subscribed Contact** then it will run this automation for subscribed contacts. 

![automation funnels fluentcrm abandon 4](/automation-funnels/abandon-cart-automation/Automation-Funnels-FluentCRM-Abandon-4-scaled.webp)

#### Condition Options 

With the default condition options, you will also see a specific condition option for the Abandoned Cart called **Cart Data**. This option allows you to specify more detailed criteria for when the automation should run.

Finally, click the **Save Settings** button to save your automation settings then design your automation funnel as desired.

![automation funnels fluentcrm abandon 5](/automation-funnels/abandon-cart-automation/Automation-Funnels-FluentCRM-Abandon-5-scaled.webp)

## Troubleshooting: the automation doesn't start

The cart shows up in the report but nobody enters the automation? Open **Reports → Abandoned Carts**, set the filter to **Skipped Carts**, and hover the **skipped** badge on the cart. The tooltip tells you exactly why FluentCRM didn't start a funnel for it. The usual reasons:

- **No automation found for this cart based on condition match**: the cart didn't pass the trigger's conditions. Test conditions are the most common cause, for example an *Email includes* rule that your test address doesn't match. Remove or widen the condition, then test again.
- **Contact status is not allowed to process this cart**: the contact already exists in FluentCRM with a status other than **Subscribed** or **Transactional** (typically **Pending** from double opt-in). Only subscribed and transactional contacts can enter an abandoned cart automation.
- **Under Cool Off Period**: the same email or WordPress user placed an order within the **Cool-off Period** set in [Abandoned Cart Settings](/abandoned-cart-settings). Any order status you selected under *Mark Cart as Recovered* counts, including *Pending payment*. Use a fresh email or set the cool-off to 0 while testing.
- **No automation found for this cart**: no published automation uses the *Cart Abandoned - WooCommerce* trigger. Check the automation's status is **Published**, not **Draft**.

If the cart never appears in the report at all, check that:

- the test customer reached the **checkout page** and an email was available (see [When a cart counts as abandoned](#when-a-cart-counts-as-abandoned));
- the customer's WordPress role isn't listed under **Disable Tracking for User Roles**. Testing while logged in as an administrator is the classic trap here;
- WP-Cron is running on your site. FluentCRM evaluates draft carts on its five-minute scheduled task, so a site with cron disabled or blocked never promotes carts to abandoned.

## Related reading

-   [FluentCart Abandon Cart Automation](/fluentcart-abandon-cart-automation)
-   [Abandoned Cart Settings](/abandoned-cart-settings)
-   [Abandoned Cart Report](/abandoned-cart-report)
