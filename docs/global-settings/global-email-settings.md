---
title: "Email Settings"
slug: "global-email-settings"
category: "global-settings"
order: 0
---

# Email Settings

The **Global Email Settings** define the default sender identity for FluentCRM emails, the footer that appears on outgoing messages, how subscribers manage preferences, and related compliance options. Values here apply when a specific campaign or email does not override them.

To open this screen, go to **FluentCRM ➜ Settings ➜ Global Email Settings**, then use **Save** in the top-right when you finish editing.

## Default From Settings

At the top of the page, a notice explains that this block sets the **default sender information** for your emails when no other sender is chosen for a particular message.

* **From Name:** The name recipients see as the sender in their inbox. It strongly influences whether people open the message—often your company, product, or service name.

* **From Email Address:** The sender address shown in the inbox. It should match an address your domain and **SMTP** setup actually send from; mismatches can hurt deliverability. If you use a plugin such as **FluentSMTP**, this field may appear as a dropdown so you can pick a configured connection. The number of choices depends on how many sending identities you have set up there.

* **Reply to Name:** The display name used for replies (for example, a support or team name).

* **Reply to Email:** The address that receives replies when a recipient hits “Reply.”

* **Maximum Emails Per Second:** A rate limit for how many messages FluentCRM attempts to send per second. Lower it if your host, firewall, or mail provider enforces stricter limits; raising it without headroom can overload the server or trigger SMTP throttling.

![Global Email Settings — default sender fields](/global-settings/global-email-settings/settings.webp)

> The above defaults apply when no SMTP plugin overrides them. If **FluentSMTP** (or similar) is installed and does not force its own “from” values, these settings remain in effect.

![crm smtp email default settings](/global-settings/global-email-settings/crm_smtp_email_default_settings.webp)

> With an SMTP plugin that manages delivery, you can often choose the active **From Email Address** from a list of configured connections:

![crm email settings dropdwon address](/global-settings/global-email-settings/crm_email_settings_dropdwon_address.webp)

> Below is an example of the **From Name** and **From Email Address** as they appear in the Gmail web client.

![crm email defaults preview](/global-settings/global-email-settings/crm_email_defaults_preview.webp)

> *An example email sent from FluentCRM showing how From Name and From Email appear in the inbox.*

## Email Footer Settings

**Email Footer Text** sets the content that appears at the bottom of every outgoing email. The editor supports two modes:

- **Visual mode** — a rich-text toolbar with paragraph style, font family, font size, bold, italic, underline, lists, links, blockquote, alignment, and **Add Media**.
- **Text mode** — direct HTML editing for precise control over markup.

### SmartCode Insert Menu

The footer editor includes a **SmartCode** button that opens a dedicated insert menu. Use it to browse and insert contact fields, general CRM tokens, and subscription management URLs directly into your footer — no need to type SmartCodes manually.

The most commonly used footer SmartCodes are:

* **Business Name:** <code>&#123;&#123;crm.business_name&#125;&#125;</code>
* **Business Address:** <code>&#123;&#123;crm.business_address&#125;&#125;</code>
* **Manage Subscription URL:** <code>##crm.manage_subscription_url##</code>
* **Unsubscribe URL:** <code>##crm.unsubscribe_url##</code>

A typical compliant footer looks like:

```
{{crm.business_name}}, {{crm.business_address}}
[Unsubscribe](##crm.unsubscribe_url##) | [Manage Preferences](##crm.manage_subscription_url##)
```

>[!Note]
> Business name, business address, and a working unsubscribe path are required by CAN-SPAM and similar regulations. FluentCRM shows a reminder beneath the editor.

Keep footer text in the default alignment when possible — your email template controls the final visual layout.

### Disabling the Footer Per Template

Individual email templates can disable the global footer. Open the template editor and toggle the **Disable Footer** option in the template settings. This setting now persists correctly across saves.

>[!Tip]
> Disabling the footer removes your unsubscribe link from that template. Only use this for transactional emails where you have a legal basis to omit it.

![Global Email Settings — footer editor, compliance notes, and redirect](/global-settings/global-email-settings/email-footer.webp)

## Redirect URL After Unsubscribe

**Redirect URL after unsubscribe** lets you send contacts to a specific page on your site after they unsubscribe (for example, a confirmation or feedback page). Leave the field blank if you prefer FluentCRM to show the standard inline unsubscribe message instead.

## Available SmartCodes

You can use SmartCodes in your subject, pre-header, and email body to dynamically personalize content for each recipient.

### Contact SmartCodes

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

### Custom Field SmartCodes

Custom fields depend on your FluentCRM settings. You can create as many custom fields as needed, and they will appear in the SmartCode selector.

![crm email settigns smartcodes customfields](/global-settings/global-email-settings/crm_email_settigns_SmartCodes_customFields.webp)

The **Data Field Name** matches the custom field **Label**, and the SmartCode uses the field **slug**.

![custom fields fluentcrm datetime 1](/global-settings/global-email-settings/Custom-Fields-FluentCRM__DateTime-1.webp)

Example:

* **Data Field Name:** Date and Time
* **SmartCode:** <code>&#123;&#123;contact.custom.date_time&#125;&#125;</code>

### General SmartCodes

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

### WP User SmartCodes

The following SmartCodes are available for WordPress user-related data:

| Data Field Name | SmartCode |
| --- | --- |
| User Display Name | <code>&#123;&#123;wp_user.display_name&#125;&#125;</code> |
| User Login (username) | <code>&#123;&#123;wp_user.user_login&#125;&#125;</code> |
| Password Reset URL (button / link usage) | <code>##wp_user.password_reset_url##</code> |
| Password Reset URL (plain text) | <code>&#123;&#123;wp_user.password_reset_url&#125;&#125;</code> |
| User Meta Data | <code>&#123;&#123;wp_user.meta.META_KEY&#125;&#125;</code> |

![crm email settings smartcodes wp user](/global-settings/global-email-settings/wp-user-shortcode.webp)

## Email Preference Settings

The **`##crm.manage_subscription_url##`** token (or the HTML hyperlink variants in the table above) sends subscribers to the preference experience where they can update profile fields and, depending on your rules, manage list subscriptions. The options below control what they are allowed to see and change.

![Global Email Settings — list subscriptions and preference form](/global-settings/global-email-settings/preference-settings.webp)

### List Subscription Management

This controls whether subscribers can view and manage lists from the preference page:

* **Selected Lists:** They only see and manage the lists you allow (useful when you want to expose a subset of lists).

* **All Lists:** They can view and manage every list available in FluentCRM.

### Enable Preference From Shortcode

When **Enable Preference From Shortcode** is turned on, opening the preference flow from the shortcode-based form requires an extra verification step (for example, a code sent to the contact’s email) before they can access or change preferences.

### Primary Fields That Can Be Editable

Standard contact fields appear with checkboxes. Check each field you want subscribers to be able to update on the preference form—for example **Name Prefix**, **First Name**, and **Last Name**. Leave **Phone**, **Date of Birth**, or **Address** unchecked if those should remain admin-only.

### Custom Fields That Can Be Editable

Any custom field types you have created (multiline, numeric, choice, multi-select, radio, checkbox, date, expiration, UTM, and similar) can be enabled here so subscribers may edit them on the preference page. Only enable fields you are comfortable having contacts maintain themselves.

### Show Preference Form on a Page

Toggle **Use Standard Page for Email Preference Form** when you want FluentCRM to use its built-in preference page behavior versus embedding the form yourself with the shortcode on a normal WordPress page.

### Preference Form Shortcode

Use the shortcode **`[fluentcrm_pref]`** on any page or post to display the preference form. In **Global Email Settings**, the shortcode is shown next to a copy control; the help text reminds you that subscribers can use this form to manage their options from your site.

Including **`##crm.manage_subscription_url##`** (or the HTML hyperlink SmartCodes from the General SmartCodes table) in an email adds a link such as **Manage Email Subscriptions** and opens the preference flow in the browser.

![crm email settings manage subscriptions email](/global-settings/global-email-settings/crm_email_settings_manage_subscriptions_email.webp)

With **`[fluentcrm_pref]`** on a page, visitors see a management form similar to these examples:

![crm email preference page](/global-settings/global-email-settings/email-pref.webp)

#### Adding on a Fluent Forms Notification

This can also be used in a Fluent Forms form submission notification:

![crm form confirmation email preference](/global-settings/global-email-settings/crm_form_confirmation_email_preference.webp)
