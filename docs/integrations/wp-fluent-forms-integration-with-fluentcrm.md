---
title: "Fluent Forms integration with FluentCRM"
slug: "wp-fluent-forms-integration-with-fluentcrm"
category: "integrations"
order: 0
---

# Fluent Forms integration with FluentCRM

Fluent Forms integrates with FluentCRM to help you collect leads and gather valuable information about your prospects. The integration feed in Fluent Forms captures data from form submissions, and you’ll also have access to automation triggers that are based on user activities within the forms.

In this article, you’ll learn how to integrate FluentCRM with Fluent Forms and how it works.

> [!Note]
> No additional settings are required to integrate FluentCRM with Fluent Forms. Simply install and activate both plugins on your site.

## Feed integration Settings for FluentCRM

First, go to **Integrations** in the Fluent Forms navbar and search for **FluentCRM**. You’ll see the FluentCRM integration module simply toggle it to enable the FluentCRM module, which will activate the Feed Integration for FluentCRM in your forms.

![fluentfroms integation with fluentcrm 1](/integrations/wp-fluent-forms-integration-with-fluentcrm/FluentFroms-Integation-with-FluentCRM-1.webp)

## Integration Feed for FluentCRM in Forms

Go to **Forms** from the Fluent Forms navbar, and select the form you want to integrate with your FluentCRM. 

>[!Note]
>If you do not have any existing forms, read [Create a Form from Scratch](https://fluentforms.com/wp-admin/post.php?post=45036&action=edit) or [Create a Form using Templates](https://fluentforms.com/wp-admin/post.php?post=45127&action=edit) documentation to create a new one.

Now, go to the Forms **Settings and Integration** tab from the top menu bar and select **Configure Integration** from the left sidebar. After that, you will see the **Add New Integration** button click on it here you will see the **FluentCRM Integration Feed** in the dropdown menu. 

![fluentfroms integation with fluentcrm 2](/integrations/wp-fluent-forms-integration-with-fluentcrm/FluentFroms-Integation-with-FluentCRM-2.webp)

### Configure FluentCRM Integration Feed

Each letter below matches the label in the screenshot.

 * **A. Feed Name:** Enter a name for the feed so you can recognize it later.
 * **B. FluentCRM List:** Select the FluentCRM list that new contacts are added to. You can change it anytime.
 * **C. Primary Fields:** Map the FluentCRM contact fields (**Email Address**, **First Name**, **Last Name**, **Full Name**) to your form fields. Pick a form field from the dropdown or type a custom value with a smart code. **Email Address** is required. If you leave **First Name** and **Last Name** unmapped, FluentCRM splits **Full Name** into both.
 * **D. Other Fields:** Map additional FluentCRM fields, including custom fields, to form fields. Click the **Plus (+)** icon to add more rows.
 * **E. Company Fields (Optional):** Appears when the [Company Module](/company-module) is enabled. Map a form field to **Company Name** to attach new contacts to a company.
 * **F. Contact Tags:** Select one or more tags to apply to the contact. Check **Enable Dynamic Tag Selection** to apply tags based on submission values instead.
 * **G. Skip if contact already exists in FluentCRM:** Check this to skip the feed when the email already belongs to a contact, so no existing contact is touched.
 * **H. Skip name update if an existing contact has old data (per primary field):** Check this to keep the names already stored on an existing contact, even when the submission contains new ones.
 * **I. Enable Double opt-in for new contacts:** Check this to send a double opt-in confirmation email to new contacts.
 * **J. Enable Force Subscribe if contact is not in subscribed status (Existing contact only):** Check this to subscribe an existing contact regardless of their current status.
 * **K. Conditional Logics:** Check **Enable conditional logic** to run the feed only when the submission meets your conditions. Learn more in the [Fluent Forms conditional logic guide](https://wpmanageninja.com/docs/fluent-form/advanced-features-functionalities-in-wp-fluent-form/conditional-logic-fluent-form/).
 * **L. Remove Contact Tags:** Select the tags to remove from the contact when the feed runs.
 * **M. Status:** Check **Enable This feed** to activate the integration.

On a form with a subscription field, a **Run Only on Events** option also appears. Select an event to run the feed only when it occurs:

-   **On Subscription Active**
-   **On Subscription Cancel**
-   **On Payment Refund**

Click **Save Feed** to finish.

![fluentfroms integation with fluentcrm 3](/integrations/wp-fluent-forms-integration-with-fluentcrm/FluentFroms-Integation-with-FluentCRM-3.webp)


## Automation Triggers for Fluent Forms

FluentCRM offers automation triggers for Fluent Forms, allowing you to automate actions based on user interactions. When you create a new automation in FluentCRM, you’ll find three automation triggers for Fluent Forms.

Go to **FluentCRM** and create a new automation. Select an **Automation Trigger** from the available Fluent Forms options then click the **Continue** button and build your automation funnel as needed.

If you want to know more about how to create an automation, check out our [documentation](/automation-editor) for detailed steps

### Available Automation Triggers

-   **Subscription Canceled**This automation starts when a user cancels their subscription. It only applies to users who subscribed via Fluent Forms, and the cancellation must be done from the frontend by the user. If an admin cancels the subscription, this trigger won’t run.
-   **Subscription Payment Received**This automation triggers when a user makes a subscription-based payment through Fluent Forms.
-   **New Form Submission**This automation runs when a new form submission occurs.

![fluentfroms integation with fluentcrm 4](/integrations/wp-fluent-forms-integration-with-fluentcrm/FluentFroms-Integation-with-FluentCRM-4.webp)

#### Subscription Canceled

After selecting the **Subscription Canceled** automation trigger, a pop-up will appear where you need to provide some necessary details.

Next, choose the **Subscription Status** after this trigger action.

You can also specify if this automation should run for specific forms. To do this, select the desired forms from the **Target Forms** dropdown menu.

![fluentfroms integation with fluentcrm 5](/integrations/wp-fluent-forms-integration-with-fluentcrm/FluentFroms-Integation-with-FluentCRM-5.webp)

#### Subscription Payment Received

After selecting the **Subscription Payment Received** automation trigger, a pop-up will appear where you need to enter the required details.

First, choose a form from the **Select Your Form** dropdown if you want this automation to run for a specific form.

Next, map your data to collect information from the form for automation.

Select the **Subscription Status** after this trigger action.

![fluentfroms integation with fluentcrm 6](/integrations/wp-fluent-forms-integration-with-fluentcrm/FluentFroms-Integation-with-FluentCRM-6.webp)

#### New Form Submission

After selecting the **New From Submission** automation trigger, a pop-up will appear where you need to provide some necessary details.

Now choose a form from the **Select Your Form** dropdown if you want this automation to run for a specific form then map your data to collect information from the form for automation. Select the **Subscription Status** after this trigger action.

![fluentfroms integation with fluentcrm 7](/integrations/wp-fluent-forms-integration-with-fluentcrm/FluentFroms-Integation-with-FluentCRM-7.webp)

## FluentForm Subscriptions Widget in Contact Profile

A widget will appear in the FluentCRM contact’s profile for users who have subscribed via Fluent Forms.

![fluent forms subscriptions](/integrations/wp-fluent-forms-integration-with-fluentcrm/subscription-widget.webp)
