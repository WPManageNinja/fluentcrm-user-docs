---
title: "Primary Conditionals"
slug: "conditional-automation-actions"
category: "automation-funnels"
order: 0
---

# Primary Conditionals

The **Check Condition** block lets you branch an automation based on a contact's properties. Contacts who meet your conditions follow the **Yes** path; contacts who don't follow the **No** path. You can stack multiple conditions using AND/OR logic to build precise targeting rules.

>[!Note]
> This feature requires **FluentCRM Pro**. [See what's included →](/how-to-install-upgrade-and-activate-license)

https://youtu.be/yFYXfOlBVwc

## Adding a Condition Block

Open an automation funnel, click the **Plus (+)** icon between steps, and choose **Conditional Action**.

![Click the plus icon or conditional action option](/automation-funnels/conditional-automation-actions/automation-condition-2.webp)

The **Check Condition** settings panel opens in the left sidebar.

![Check condition page with settings options](/automation-funnels/conditional-automation-actions/automation-condition-3.webp)

## Configuring Conditions

### Match Type

At the top of the conditions panel, choose how the block evaluates multiple conditions:

- **True if all conditions match** — the contact must satisfy every condition (AND logic).
- **True if any of the conditions match** — the contact only needs to satisfy one condition (OR logic).

### Adding Conditions

Click **+ Add** to add a condition row. Each row has three parts:

1. **Parameter** — the contact property to check (see [Property Types](#condition-property-types) below).
2. **Operator** — how to compare the value (e.g. *is*, *is not*, *contains*, *greater than*).
3. **Value** — what to compare against.

Click the **Trash** icon on any row to remove it.

### AND / OR Groups

- **+ Add** adds another condition to the current group — all conditions in the group must match.
- **+ OR** creates a new condition group. If any group matches, the overall block evaluates as **Yes**.

Click **Save Settings** when finished.

>[!Note]
> As of FluentCRM 3.1.5, conditions are evaluated against the contact's data at the moment they reach this step — so changes made by earlier steps in the same funnel (such as adding a tag or updating a field) are reflected correctly.

## Condition Property Types

Click **+ Add** to open the property selector. Four categories are available:

### 1. Contact

Check any standard contact field:

- First Name, Last Name, Email
- Address Line 1, Address Line 2, City, State, Postal Code, Country
- Phone, WP User ID, Type, Name Prefix
- Date of Birth, Last Activity, Created At

### 2. Contact Segment

Check list and tag membership or WordPress role:

- Tags
- Lists
- WP User Role

### 3. Contact Activities

Check email engagement history:

- Last Email Sent
- Last Email Clicked
- Last Email Open (approximate)

### 4. Custom Fields

Any custom fields you have defined in FluentCRM appear here automatically. To add custom fields, see [Custom Contact Fields](/global-custom-contact-fields).

![Check condition options](/automation-funnels/conditional-automation-actions/automation-condition-4.webp)

## Setting a Condition — Example

Select **First Name** (Contact → First Name) as the parameter, choose **includes in** as the operator, and enter the value. Only contacts whose first name matches will take the **Yes** path.

![Condition example](/automation-funnels/conditional-automation-actions/automation-condition-5.webp)

## Setting Actions on Each Path

After saving the condition block, two branches appear in the funnel canvas:

- **Yes** — actions here run when the contact meets your conditions.
- **No** — actions here run when the contact does not meet your conditions.

Click **+ Add Action** under either branch to add steps. You can mix any action type on both paths.

For a full list of available actions, see [Primary Actions](/primary-automation-actions), [Email Actions](/automation-email-actions), [Goals/Benchmarks](/goals-or-benchmark-actions), [WordPress Actions](/wordpress-automation-actions), [LMS Actions](/lms-automation-actions), [WooCommerce Actions](/woocommerce-automation-actions), and [Miscellaneous Actions](/miscellaneous-automation-actions).

When the funnel is ready, enable the **Publish** toggle to make it live.

![Published funnel with conditional paths](/automation-funnels/conditional-automation-actions/automation-condition-6.webp)
