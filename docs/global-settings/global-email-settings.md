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

![crm email settings default](/global-settings/global-email-settings/crm_email_settings_default.png)

 * **Maximum Email Limit Per Second:** The maximum number of emails attempted per second. It can be lower due to a lot of factors like site performance, security or firewall limits, rules, the number of connections allowed from the remote mail server that delivers the emails, or by default WordPress hosting if no SMTP plugin is installed and configured.

The above settings will only apply if there is no SMTP Plugin installed and uses the default mailing system. If an SMTP plugin is installed like FluentSMTP and that does not force the Sender Name and Email Address as below then the above settings will be in effect.

![crm smtp email default settings](/global-settings/global-email-settings/crm_smtp_email_default_settings.png)

But if you have any SMTP plugin installed on your website which takes over the email delivery of the website then you will be able to select your configured email addresses or connections or delivery method from **From Email Address** option as below:

![crm email settings dropdwon address](/global-settings/global-email-settings/crm_email_settings_dropdwon_address.png)

Below is an example of the **From Name** and **From Email Address** shown in Gmail Web Client.

![crm email defaults preview](/global-settings/global-email-settings/crm_email_defaults_preview.png)
*An example email sent from FluentCRM to show you how the From Name & From Email will show in the inbox.*

## Email Footer Settings

![crm business settings email footer](/global-settings/global-email-settings/crm_business_settings_email_footer.png)

**Email Footer Text**: The footer section usually contains information about the sender's unsubscribe link or forward the email. You should provide your business address &#123;&#123;crm.business\_address&#125;&#125; and manage the subscription/unsubscribe URL for the best user experience.

**Smartcode in Footer:** &#123;&#123;crm.business\_name&#125;&#125;, &#123;&#123;crm.business\_address&#125;&#125;, ##crm.manage\_subscription\_url##, ##crm.unsubscribe\_url## will be replaced with dynamic values. It is recommended to keep the texts as default aligned. Your provided email design template will align the texts.

### **Available SmartCodes:**

#### Contact

![crm email settigns smartcodes contact](/global-settings/global-email-settings/crm_email_settigns_SmartCodes_contact.png)

**Data Field Name**

**Smart Code**

Full Name

&#123;&#123;contact.full\_name&#125;&#125;

Name Prefix

&#123;&#123;contact.prefix&#125;&#125;

First Name

&#123;&#123;contact.first\_name&#125;&#125;

Last Name

&#123;&#123;contact.last\_name&#125;&#125;

Contact Email

&#123;&#123;contact.email&#125;&#125;

Contact ID

&#123;&#123;contact.id&#125;&#125;

User ID

&#123;&#123;contact.user\_id&#125;&#125;

Address Line 1

&#123;&#123;contact.address\_line\_1&#125;&#125;

Address Line 2

&#123;&#123;contact.address\_line\_2&#125;&#125;

City

&#123;&#123;contact.city&#125;&#125;

State

&#123;&#123;contact.state&#125;&#125;

Postal Code

&#123;&#123;contact.postal\_code&#125;&#125;

Country

&#123;&#123;contact.country&#125;&#125;

Phone

&#123;&#123;contact.phone&#125;&#125;

Status

&#123;&#123;contact.status&#125;&#125;

Date of Birth

&#123;&#123;contact.date\_of\_birth&#125;&#125;

#### Custom Fields

Custom Fields are dependent on the FLuentCRM Settings. You can add as many Custom Fields as you want and then they will be available here. 

![crm email settigns smartcodes customfields](/global-settings/global-email-settings/crm_email_settigns_SmartCodes_customFields.png)

The generic **Data Field Name** will be as you set in the **Label** while creation and **SmartCode** will recognize the **slug** value of the custom field as below:

![custom fields fluentcrm datetime 1](/global-settings/global-email-settings/Custom-Fields-FluentCRM__DateTime-1.png)

The above example screenshot will represent **Data Field Name** as "**Date and Time**" & **SmartCode** would be **&#123;&#123;contact.custom.date\_time&#125;&#125;**

#### General

![crm email settigns smartcodes general](/global-settings/global-email-settings/crm_email_settigns_SmartCodes_general.png)

**Data Field Name**

**Smart Code**

Business Name

&#123;&#123;crm.business\_name&#125;&#125;

Business Address

&#123;&#123;crm.business\_address&#125;&#125;

Admin Email

&#123;&#123;wp.admin\_email&#125;&#125;

Site URL

&#123;&#123;wp.url&#125;&#125;

Dynamic Date  
(example: +2Days from Now)

&#123;&#123;other.date.+2 days&#125;&#125;

Unsubscribe URL

##crm.unsubscribe\_url##

Manage Subscription URL

##crm.manage\_subscription\_url## 

View on Browser URL

##web\_preview\_url## 

Unsubscribe

&#123;&#123;crm.unsubscribe\_html|Unsubscribe&#125;&#125;

Manage Subscription  
Hyperlink HTML

&#123;&#123;crm.manage\_subscription\_html|Manage Preference&#125;&#125;

#### WP User

The available data properties and their smart codes are:

User's Display Name
{{wp_user.display_name}}

User Login (username)
{{wp_user.user_login}}

Password Reset URL (on button / link)
##wp_user.password_reset_url##

Password Reset URL (as plain text)
{{wp_user.password_reset_url}}

User Meta Data
{{wp_user.meta.META_KEY}}

![crm email settigns smartcodes general](/global-settings/global-email-settings/wp-user-shortcode.png)


## Email Preference Settings

Using The **##crm.manage\_subscription\_url##** SmartCode lets the user manage their subscriptions along with the Lists if defined in **Email Preference Settings**.

![crm email settings manage subscriptions email](/global-settings/global-email-settings/crm_email_settings_manage_subscriptions_email.png)

Below is an example email of using this SmartCode where the user will see a link saying **Manage Email Subscriptions** and this will take the user to a page similar to the below screenshot.

![crm email settings manage subscriptions](/global-settings/global-email-settings/crm_email_settings_manage_subscriptions.png)

The screenshot below represents the available options of the preferences:

![crm settings email preference](/global-settings/global-email-settings/crm_settings_email_preference.png)

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

![crm email preference page](/global-settings/global-email-settings/crm_email_preference_Page.png)

#### Adding on a Page

![crm email preference page add](/global-settings/global-email-settings/crm_email_preference_Page_Add.png)

#### Adding on a Fluent Forms Notification

This can also be used in a Fluent Forms Form Submission Notification as below:

![crm form confirmation email preference](/global-settings/global-email-settings/crm_form_confirmation_email_preference.png)