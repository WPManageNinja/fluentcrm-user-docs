---
title: "Email Settings"
slug: "global-email-settings"
category: "global-settings"
order: 0
---

# Email Settings

The Email Settings define the default Mail From email address and Names that will be visible to the recipients of the Fluent CRM communication emails sent. Available options are discussed below:

## Default Settings

 * **From Name:** The Name that is visible to the recipient as Sender Name. When you send marketing emails to your subscribers, the “From Name” (also known as the email Sender name) tells the recipients who sent them the email. It is very important and a determining factor for the email you will send whether your email will be opened, or get ignored by the recipients. Often it is the company name, or perhaps the product name or service name people have signed up to learn about.

 * **From Email Address:** The Name that is visible to the recipient is Sender's Email Address. This is limited to the number of available configured connections in SMTP Plugins if installed like FluentSMTP. This is the email address the user will see when they open the email. There are a number of things to follow when choosing the "From Email" address. Always avoid using free webmail addresses, and also avoid the no-reply address. Use a valid email address that also matches your SMTP email address or this will cause an email delivery issue.

 * **Reply to Name:** The Name that identifies the Name of the entity that will receive the reply to the sent email.

 * **Reply to Email:** The email that will receive the reply of the sent email.

![crm email settings default](/global-settings/global-email-settings/crm_email_settings_default.webp)

 * **Maximum Email Limit Per Second:** The maximum number of emails attempted per second. It can be lower due to a lot of factors like site performance, security or firewall limits, rules, the number of connections allowed from the remote mail server that delivers the emails, or by default WordPress hosting if no SMTP plugin is installed and configured.

The above settings will only apply if there is no SMTP Plugin installed and uses the default mailing system. If an SMTP plugin is installed like FluentSMTP and that does not force the Sender Name and Email Address as below then the above settings will be in effect.

![crm smtp email default settings](/global-settings/global-email-settings/crm_smtp_email_default_settings.webp)

But if you have any SMTP plugin installed on your website which takes over the email delivery of the website then you will be able to select your configured email addresses or connections or delivery method from **From Email Address** option as below:

![crm email settings dropdwon address](/global-settings/global-email-settings/crm_email_settings_dropdwon_address.webp)

Below is an example of the **From Name** and **From Email Address** shown in Gmail Web Client.

![crm email defaults preview](/global-settings/global-email-settings/crm_email_defaults_preview.webp)
*An example email sent from FluentCRM to show you how the From Name & From Email will show in the inbox.*

## Email Footer Settings

![crm business settings email footer](/global-settings/global-email-settings/crm_business_settings_email_footer.webp)

**Email Footer Text**: The footer section usually contains information about the sender's unsubscribe link or forward the email. You should provide your business address &#123;&#123;crm.business\_address&#125;&#125; and manage the subscription/unsubscribe URL for the best user experience.

**Smartcode in Footer:** &#123;&#123;crm.business\_name&#125;&#125;, &#123;&#123;crm.business\_address&#125;&#125;, ##crm.manage\_subscription\_url##, ##crm.unsubscribe\_url## will be replaced with dynamic values. It is recommended to keep the texts as default aligned. Your provided email design template will align the texts.

### Available SmartCodes

You can use SmartCodes in your subject, pre-header, and email body to dynamically personalize content for each recipient.

#### Contact SmartCodes

![crm email settigns smartcodes contact](/global-settings/global-email-settings/crm_email_settigns_SmartCodes_contact.webp)

| Data Field Name | SmartCode |
| --- | --- |
| Full Name | <code>&#123;&#123;contact.full_name&#125;&#125;</code> |
| Name Prefix | <code>&#123;&#123;contact.prefix&#125;&#125;</code> |
| First Name | <code>&#123;&#123;contact.first_name&#125;&#125;</code> |
| Last Name | <code>&#123;&#123;contact.last_name&#125;&#125;</code> |
| Contact Email | <code>&#123;&#123;contact.email&#125;&#125;</code> |
| Contact ID | <code>&#123;&#123;contact.id&#125;&#125;</code> |
| User ID | <code>&#123;&#123;contact.user_id&#125;&#125;</code> |
| Address Line 1 | <code>&#123;&#123;contact.address_line_1&#125;&#125;</code> |
| Address Line 2 | <code>&#123;&#123;contact.address_line_2&#125;&#125;</code> |
| City | <code>&#123;&#123;contact.city&#125;&#125;</code> |
| State | <code>&#123;&#123;contact.state&#125;&#125;</code> |
| Postal Code | <code>&#123;&#123;contact.postal_code&#125;&#125;</code> |
| Country | <code>&#123;&#123;contact.country&#125;&#125;</code> |
| Phone | <code>&#123;&#123;contact.phone&#125;&#125;</code> |
| Status | <code>&#123;&#123;contact.status&#125;&#125;</code> |
| Date of Birth | <code>&#123;&#123;contact.date_of_birth&#125;&#125;</code> |

#### Custom Field SmartCodes

Custom fields depend on your FluentCRM settings. You can create as many custom fields as needed, and they will appear in the SmartCode selector.

![crm email settigns smartcodes customfields](/global-settings/global-email-settings/crm_email_settigns_SmartCodes_customFields.webp)

The **Data Field Name** matches the custom field **Label**, and the SmartCode uses the field **slug**.

![custom fields fluentcrm datetime 1](/global-settings/global-email-settings/Custom-Fields-FluentCRM__DateTime-1.webp)

Example:

* **Data Field Name:** Date and Time
* **SmartCode:** <code>&#123;&#123;contact.custom.date_time&#125;&#125;</code>

#### General SmartCodes

![crm email settigns smartcodes general](/global-settings/global-email-settings/crm_email_settigns_SmartCodes_general.webp)

| Data Field Name | SmartCode |
| --- | --- |
| Business Name | <code>&#123;&#123;crm.business_name&#125;&#125;</code> |
| Business Address | <code>&#123;&#123;crm.business_address&#125;&#125;</code> |
| Admin Email | <code>&#123;&#123;wp.admin_email&#125;&#125;</code> |
| Site URL | <code>&#123;&#123;wp.url&#125;&#125;</code> |
| Dynamic Date (example: +2 days from now) | <code>&#123;&#123;other.date.+2 days&#125;&#125;</code> |
| Unsubscribe URL | <code>##crm.unsubscribe_url##</code> |
| Manage Subscription URL | <code>##crm.manage_subscription_url##</code> |
| View on Browser URL | <code>##web_preview_url##</code> |
| Unsubscribe Hyperlink HTML | <code>&#123;&#123;crm.unsubscribe_html\|Unsubscribe&#125;&#125;</code> |
| Manage Subscription Hyperlink HTML | <code>&#123;&#123;crm.manage_subscription_html\|Manage Preference&#125;&#125;</code> |

#### WP User SmartCodes

The following SmartCodes are available for WordPress user-related data:

| Data Field Name | SmartCode |
| --- | --- |
| User Display Name | <code>&#123;&#123;wp_user.display_name&#125;&#125;</code> |
| User Login (username) | <code>&#123;&#123;wp_user.user_login&#125;&#125;</code> |
| Password Reset URL (button / link usage) | <code>##wp_user.password_reset_url##</code> |
| Password Reset URL (plain text) | <code>&#123;&#123;wp_user.password_reset_url&#125;&#125;</code> |
| User Meta Data | <code>&#123;&#123;wp_user.meta.META_KEY&#125;&#125;</code> |

![crm email settigns smartcodes general](/global-settings/global-email-settings/wp-user-shortcode.webp)


## Email Preference Settings

Using The **##crm.manage\_subscription\_url##** SmartCode lets the user manage their subscriptions along with the Lists if defined in **Email Preference Settings**.

![crm email settings manage subscriptions email](/global-settings/global-email-settings/crm_email_settings_manage_subscriptions_email.webp)

Below is an example email of using this SmartCode where the user will see a link saying **Manage Email Subscriptions** and this will take the user to a page similar to the below screenshot.

![crm email settings manage subscriptions](/global-settings/global-email-settings/crm_email_settings_manage_subscriptions.webp)

The screenshot below represents the available options of the preferences:

![crm settings email preference](/global-settings/global-email-settings/crm_settings_email_preference.webp)

### List Subscriptions

**Option Name**

**Description**

**No, Contact can not manage list subscriptions**

Default Option. This will not let the user manage their list subscription or do not offer any lists to select.

**Contact only see and manage the following list of subscriptions**

This will allow admins to select specific lists for users to manage their list subscriptions. It can be all lists or a number of lists.

**Contact can see all lists and manage subscriptions**

This will allow the user to see all the lists and select any or all of the list's subscriptions.

### Email Preference Shortcode

Please use the shortcode **\[fluentcrm\_pref\]** to show the form for your subscribers to let them manage these options themselves:

1.  Name Prefix
2.  First Name
3.  Last Name
4.  Phone
5.  Date of Birth
6.  Address Field
7.  Lists that they are allowed to manage their subscription.

The above shortcode renders the management form on a page as below screenshot:

![crm email preference page](/global-settings/global-email-settings/crm_email_preference_Page.webp)

#### Adding on a Page

![crm email preference page add](/global-settings/global-email-settings/crm_email_preference_Page_Add.webp)

#### Adding on a Fluent Forms Notification

This can also be used in a Fluent Forms Form Submission Notification as below:

![crm form confirmation email preference](/global-settings/global-email-settings/crm_form_confirmation_email_preference.webp)