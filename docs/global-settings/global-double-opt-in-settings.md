---
title: "Double Opt-in Settings"
slug: "global-double-opt-in-settings"
category: "global-settings"
order: 0
---

# Double Opt-in Settings
## Email Subject & Body

The double opt-in email feature of FluentCRM acts as an extra layer of confirmation to verify each email address is a verified user and FluentCRM can add the email address to your contact list. Contacts that are added via form submissions, automation funnels, or by selecting the WooCommmerce subscription checkbox will automatically receive a double opt-in email to confirm their subscription if this setting is enabled.

![crm double opt in email body](/global-settings/global-double-opt-in-settings/crm_double_opt_in_email_body.png)

-   **Email Subject:** Give an appropriate subject for the email to the recipient.
-   **Email Body:** Write the email body for the double opt-in email. There will be a default one. You can customize it as you want. Use the SmartCode from the dropdown to create a customized one. But using the SmartCode **#activate_link#** for a **Plain Text Email** or `&#123;&#123;crm.activate_button|Confirm Subscription&#125;&#125;` for **HTML Email** with a button to click for the subscription is mandatory because it contains the activation URL.

## Design Template

Select the email Design Template for this double-opt-in email. You can choose from four different options.

![crm double opt in email body design template](/global-settings/global-double-opt-in-settings/crm_double_opt_in_email_body_design_template.png)

## **After Confirmation Actions**

### **Show Message**

Select the confirmation message for the user. When they will click on the subscription confirmation button they will land on this page.

![crm double opt in after confirmation show message](/global-settings/global-double-opt-in-settings/crm_double_opt_in_after_confirmation_show_message.png)

\***Note:** If you're using Fluent Forms, leave the **Enable Double Opt-in Confirmation before the Form Data Processing** option( **Form -> Form Settings**) unchecked to send the above double opt-in email template to your contacts. If you enable both Fluent Forms and FluentCRM double opt-in, your system will send the Fluent Forms double opt-in email template to your contacts.

### **Redirect to an URL**

If you want to redirect your user to a specific URL then you can use this option to confirm the subscription and immediately automatically redirect to your desired URL, Landing Page, or anywhere you want.

![crm double opt in after confirmation redirect](/global-settings/global-double-opt-in-settings/crm_double_opt_in_after_confirmation_redirect.png)

Below is an example screenshot of what the Double Opt-in Emails look like in the recipient's mailbox.

![crm double opt in email](/global-settings/global-double-opt-in-settings/crm_double_opt_in_email.png)

And when the user clicks on the **Subscription Confirmation Button** and you configure it to **show a message after confirmation** they will see a message like the below:

![crm double opt in confirmed](/global-settings/global-double-opt-in-settings/crm_double_opt_in_confirmed.png)

That's all for Double Opt-in Confirmation Email Settings!