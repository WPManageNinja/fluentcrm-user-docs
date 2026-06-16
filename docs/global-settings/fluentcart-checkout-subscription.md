---
title: "FluentCart Checkout Subscription"
slug: "fluentcart-checkout-subscription"
category: "global-settings"
order: 0
---

# FluentCart Checkout Subscription

**FluentCart Checkout Subscription** lets you turn that moment into a list-building opportunity — without a separate form, webhook, or integration plugin. FluentCRM displays a newsletter opt-in checkbox directly on your FluentCart checkout page. When a customer checks the box and completes their order, FluentCRM creates or updates their contact, assigns the list and tags you choose, and optionally sends a double opt-in confirmation.

>[!Note]
> This feature requires both **FluentCRM** and **FluentCart** to be installed and active on your site. No additional plugin or API connection is needed.

## Enable the Checkout Subscription Field

Go to **FluentCRM → Settings → General Settings** and scroll to the **FluentCart Checkout Subscription Field** section.

1. Check **Enable Subscription Checkbox to FluentCart Checkout Page**.
2. Configure the checkbox label, target list, tags, and opt-in options below.
3. Click **Save** in the top-right corner.

![FluentCart Checkout Subscription settings in General Settings](/global-settings/fluentcart-checkout-subscription/fluentcart-checkout-settings.webp)


## Configure the Settings

### Checkbox Label

The **Checkbox Label for Checkout checkbox** field controls the text displayed next to the opt-in checkbox.

Default: *Sign me up for the newsletter!*

Customize this to match your brand voice — for example: *Yes, send me exclusive offers and updates.*

### Assign List

Use **Assign List** to choose the FluentCRM list contacts are added to when they check the box. Select a list from the **Select Assign List** dropdown, or leave it blank to add contacts without a list assignment.

### Assign Tags

Use **Assign Tags** to apply one or more tags when a customer opts in. Select tags from the **Select Assign Tag** dropdown. Tags are applied alongside any list assignment.

### Auto-Checked

Enable **Enable auto checked status on checkout page checkbox** to have the opt-in box pre-ticked when a customer arrives at checkout.

>[!Warning]
> Pre-checking an opt-in box may not comply with GDPR and similar consent regulations in some regions. Check your local legal requirements before enabling this option.

### Show Only to New Subscribers

**Do not show the checkbox if current user already in subscribed state** hides the opt-in checkbox from customers who are already subscribed in FluentCRM. This keeps checkout cleaner for returning subscribers and is enabled by default.

### Double Opt-In

Enable **Enable Double-Optin Email Confirmation** to set the new subscriber's status to **Pending** and send a confirmation email before they are fully subscribed.

This is enabled by default and is recommended for list quality and compliance.

>[!Tip]
> The double opt-in email content and confirmation page are configured in **FluentCRM → Settings → [Double Opt-in Settings](/global-double-opt-in-settings)**.

Disable this option only if you have a clear legal basis for single opt-in (for example, existing customer relationships under legitimate interest).

## What Customers See at Checkout

Once enabled, FluentCRM automatically displays the subscription checkbox on your FluentCart checkout page right above the payment methods section. The label you set in General Settings appears next to the checkbox.

![Subscription checkbox on the FluentCart checkout page](/global-settings/fluentcart-checkout-subscription/fluentcart-checkout-preview.webp)


## How Subscription Works

When a customer checks the opt-in box and completes their order, FluentCRM:

1. Captures the opt-in state at checkout.
2. After payment is confirmed, creates or updates the contact using the customer's billing information (first name, last name, email, and address).
3. Assigns the contact to the selected list and applies the selected tags.
4. Sets the contact status to **Pending** (if double opt-in is on) or **Subscribed** (if off). If double opt-in is enabled, the confirmation email is sent immediately.

If the customer does not check the box, no contact is created or modified.

>[!Note]
> Each order is processed only once. If FluentCart retries the payment hook, FluentCRM skips duplicate processing automatically.
