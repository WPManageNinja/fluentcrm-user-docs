---
title: "Compose Email in FluentCRM"
slug: "compose-email-in-fluentcrm"
category: "email-campaign"
order: 0
---

# Compose Email in FluentCRM
The main step of email marketing and sending out emails is to compose or prepare the Email Content when the contacts are ready. In this tutorial, we will be learning and exploring email editing or composing emails in FluentCRM.

https://www.youtube.com/watch?v=LfY6o1esuCE

## Email Editor

As we have seen above that there are different places Emails can be composed and sent. Now we will be exploring features of the FluentCRM to edit or compose an email in those places.

> **Important:** FluentCRM uses Gutenberg Editor as the default Email Editor. The features of the email editor and available blocks to use in the email is limited as per Gutenberg features and limitations.

### Email Styling Settings

![crm email emailstyling](/email-campaign/compose-email-in-fluentcrm/crm_email_emailstyling.png)

This setting is available for all template types except RAW HTML. The available options are:

1.  **Body Background Color:** The background color for the Email Body.
2.  **Content Background Color:** The background color for the Content Section only.
3.  **Default Content Color:** The text color for the content.
4.  **Content Max Width (px):** Maximum width for the content
5.  **Footer Text Color:** Text color for footer.
6.  **Default Link Color:** The link text color.
7.  **Content Font Family:** Font Family for the whole content.
8.  **Headings Font Family:** Font Family for the Header of the email content.
9.  **Disable Default Email Footer:** There is a global [Email Footer Settings](/docs/global-email-settings#Email-Footer-Settings). you can turn off the global footer by checking this option.

### Template Type

#### Simple Boxed

![crm email editor template simple boxed](/email-campaign/compose-email-in-fluentcrm/crm_email_editor_template_simple_boxed.png)

This is the default template and also works for most of the use cases.

#### Plain Centered

![crm email editor template plain centered](/email-campaign/compose-email-in-fluentcrm/crm_email_editor_template_plain_centered.png)

Simple and content centered which is almost close to the default template option.

#### Plain Left

![crm email editor template plain left](/email-campaign/compose-email-in-fluentcrm/crm_email_editor_template_plain_left.png)

This template aligns the whole email content to the left.

#### Classic Editor

![crm email editor template classic editor](/email-campaign/compose-email-in-fluentcrm/crm_email_editor_template_classic_editor.png)

If you are familiar with the legacy WordPress Classic Editor, this option is for you. You can have more control over the content rather than the Gutenberg Editor.

#### Raw HTML

FluentCRM’s **Raw HTML** Email Editor allows advanced users to create fully customized email templates. This is especially useful if you want to import templates from external sources or code the email body using **HTML**.

![raw html](/email-campaign/compose-email-in-fluentcrm/RAW-HTML-1-scaled.webp)

However, when using the Raw HTML editor, the **Global Footer**, which typically includes essential links like **Unsubscribe** and **Manage Email Subscription**, is not automatically added. You will need to manually insert these links into your template.

To do this, go to the **Settings** tab and click on **Email Settings**. Scroll to the **Email Footer Settings** section, where you can edit or insert the **Unsubscribe** or **Manage Email** **Subscription** links.

![unsubscribe or manage email subscription](/email-campaign/compose-email-in-fluentcrm/Unsubscribe-or-Manage-email-subscription-scaled.webp)

### Blocks

There are a number of Content Blocks available in the FluentCRM to be used in the email contents. More about these are discussed in **[Content Blocks in FluentCRM Email Editor](/docs/content-blocks-in-fluentcrm-email-editor)**

### Smart Codes/ Dynamic Tags

There are a number of SmartCode available in the FluentCRM to be used in the email contents. More about these are discussed in **[SmartCodes in FluentCRM Email Editor](/docs/smartcodes-in-fluentcrm-email-editor).**

### Use Email Template

This option is very helpful when you already have composed another email template and use that in the current email as a template or if you want to use a base template and extend or customize it into a new template.

You will see the **Template ID Number**, **Template Title**, and an **Action Button** to click to **Import** the template you want.

![crm email editor import template](/email-campaign/compose-email-in-fluentcrm/crm_email_editor_import_template.png)

### Preview Composed Email

One of the most helpful features of FluentCRM is the **Preview**. By clicking on the Eye button you can preview the composed email to see how it may look in the recipient's email client. Please remember that there are numerous email clients that are Web, Desktop or Mobile based. The email content you composed may look slightly different on different devices. You should add mobile device-specific CSS codes too so that the email content looks better on Mobile devices as well.

> **Important:** FluentCRM uses Gutenberg Block Editor that comes with WordPress by default. Few features and customizations are Guteberg dependent and limited by its features.

![crm email editor preview](/email-campaign/compose-email-in-fluentcrm/crm_email_editor_preview.png)

### Advanced Features

To create or compose a new email content or template FluentCRM provides you with a few more advanced features.

#### Forward Slash \[ **/** \]

![crm email editor slash](/email-campaign/compose-email-in-fluentcrm/crm_email_editor_slash.png)

By using a forward slash ( / ) in the content you will be able to use available block types used in the email content such as **Image, heading, List, Buttons, Classic Editor, Columns, Group, Row, and Stack**.

#### At Sign \[ **@** \]

![crm email editor at](/email-campaign/compose-email-in-fluentcrm/crm_email_editor_at.png)

There are some places where you might want to use Customer or Contact Data available in FluentCRM. You can quickly add such data via ShortCode and typing @ in the Email editor will offer you with such Contact Data such as **Full Name, First Name, Last Name, Contact Email, Contact ID, User ID, Address Line 1, Address Line 2, City, etc.**

### Sending test Email

Once you are done composing the email content you should test the email content to your own email to see how they are rendered in Email Client. **Remember that,** Using ShortCodes that fetch contact data will not be rendered in the test email as the test email will not have generated email that assigns an email with the relevant contact by unique parameters and renders the contact data.

![crm email sequence send test email](/email-campaign/compose-email-in-fluentcrm/crm_email_sequence_send_test_email.png)

For best email delivery of the composed emails in FluentCRM, please consider using an SMTP Plugin like FluentSMTP. You should also be careful with the content to not be filtered by Spam Filters and mark your email as a Spam and this might get your email rejected or land in the Spam Folder of the Email Clients.