---
title: "SmartCodes in the FluentCRM Email Editor"
slug: "smartcodes-in-fluentcrm-email-editor"
category: "email-campaign"
order: 0
---

# SmartCodes in the FluentCRM Email Editor

**SmartCodes** are dynamic tokens you place inside your email subject lines, pre-headers, and body content. When FluentCRM sends the email, every token is replaced with the real value for that contact — so one email template can greet each subscriber by name, show their company, link to their personal unsubscribe page, and more.

This article explains the two types of SmartCodes, lists every available token, and shows you where to find and insert them in the editor.

## Types of SmartCodes

FluentCRM organises SmartCodes into two groups:

- **Primary SmartCodes** — built-in tokens for contact profile fields, general CRM/site values, and WordPress user data. These are always available.
- **Additional SmartCodes** — tokens generated from your own Custom Fields and from third-party plugin integrations (LMS courses, membership levels, etc.). These appear automatically once you create custom fields or activate an integration.

## Where to find SmartCodes in the editor

Open any email template, campaign, or sequence step in the **Email** section. In the editor toolbar, click the **SmartCode** button (or the `{}` shortcut). A panel opens listing every available token grouped by category. Click any token to insert it at your cursor position.

## Primary SmartCodes

### Contact

These tokens pull from the contact's profile stored in FluentCRM.

| SmartCode | What it returns |
| --- | --- |
| <code>&#123;&#123;contact.full_name&#125;&#125;</code> | Full name |
| <code>&#123;&#123;contact.prefix&#125;&#125;</code> | Name prefix (Mr., Ms., Dr., etc.) |
| <code>&#123;&#123;contact.first_name&#125;&#125;</code> | First name |
| <code>&#123;&#123;contact.last_name&#125;&#125;</code> | Last name |
| <code>&#123;&#123;contact.email&#125;&#125;</code> | Email address |
| <code>&#123;&#123;contact.id&#125;&#125;</code> | Contact's unique numeric ID |
| <code>&#123;&#123;contact.user_id&#125;&#125;</code> | Linked WordPress user ID |
| <code>&#123;&#123;contact.address_line_1&#125;&#125;</code> | Address line 1 |
| <code>&#123;&#123;contact.address_line_2&#125;&#125;</code> | Address line 2 |
| <code>&#123;&#123;contact.city&#125;&#125;</code> | City |
| <code>&#123;&#123;contact.state&#125;&#125;</code> | State / Province |
| <code>&#123;&#123;contact.postal_code&#125;&#125;</code> | Postal / ZIP code |
| <code>&#123;&#123;contact.country&#125;&#125;</code> | Country |
| <code>&#123;&#123;contact.phone&#125;&#125;</code> | Phone number |
| <code>&#123;&#123;contact.status&#125;&#125;</code> | Subscription status |
| <code>&#123;&#123;contact.date_of_birth&#125;&#125;</code> | Date of birth |
| <code>&#123;&#123;contact.company.name&#125;&#125;</code> | Company name |
| <code>&#123;&#123;contact.company.industry&#125;&#125;</code> | Company industry |
| <code>&#123;&#123;contact.company.address&#125;&#125;</code> | Company address |
| <code>&#123;&#123;contact.created_at&#125;&#125;</code> | Date the contact was added |

### General

These tokens pull from your FluentCRM settings, your WordPress site, or are computed at send time.

| SmartCode | What it returns |
| --- | --- |
| <code>&#123;&#123;crm.business_name&#125;&#125;</code> | Business name from FluentCRM Settings |
| <code>&#123;&#123;crm.business_address&#125;&#125;</code> | Business address from FluentCRM Settings |
| <code>&#123;&#123;wp.admin_email&#125;&#125;</code> | Admin email from WordPress settings |
| <code>&#123;&#123;wp.url&#125;&#125;</code> | Your site URL |
| <code>&#123;&#123;other.date.+2 days&#125;&#125;</code> | Dynamic date — replace `+2 days` with any relative date string; returns a formatted date at send time |
| <code>&#123;&#123;other.date_format.D, d M, Y&#125;&#125;</code> | Custom date using any PHP date format |
| <code>&#123;&#123;other.latest_post.title&#125;&#125;</code> | Title of the most recently published post |
| <code>##crm.unsubscribe_url##</code> | Unsubscribe URL for the contact |
| <code>##crm.manage_subscription_url##</code> | Manage subscriptions page URL |
| <code>##web_preview_url##</code> | Web preview (view in browser) URL |
| <code>&#123;&#123;crm.unsubscribe_html\|Unsubscribe&#125;&#125;</code> | Ready-made unsubscribe hyperlink (link text: "Unsubscribe") |
| <code>&#123;&#123;crm.manage_subscription_html\|Manage Preference&#125;&#125;</code> | Ready-made manage-subscription hyperlink (link text: "Manage Preference") |

> **CAN-SPAM / GDPR reminder:** Your email footer should always include your business address and a working unsubscribe link. Use <code>&#123;&#123;crm.business_address&#125;&#125;</code> and the unsubscribe tokens above to make this automatic.

### WP User

These tokens are available when a contact is also a registered WordPress user.

| SmartCode | What it returns |
| --- | --- |
| <code>&#123;&#123;wp_user.display_name&#125;&#125;</code> | User's display name |
| <code>&#123;&#123;wp_user.user_login&#125;&#125;</code> | Username (login) |
| <code>##wp_user.password_reset_url##</code> | Password reset URL (for use in buttons / links) |
| <code>&#123;&#123;wp_user.password_reset_url&#125;&#125;</code> | Password reset URL (plain text) |
| <code>&#123;&#123;wp_user.meta.META_KEY&#125;&#125;</code> | Any WordPress user meta value — replace `META_KEY` with the actual meta key |

## Additional SmartCodes

### Custom Fields

Any Custom Fields you create in **FluentCRM → Settings → Custom Fields** automatically generate their own SmartCodes. They appear in the SmartCode panel under the **Custom Fields** group, named after the field label you set.

For example, if you created custom fields called **Number**, **Gender**, **Login Date**, and **Description**, you will see a matching token for each in the panel.

To learn how to create custom fields, see [Custom Contact Fields](/docs/global-custom-contact-fields).

### Integrations

When you connect a third-party plugin — such as an LMS, membership platform, or ecommerce tool — FluentCRM adds integration-specific tokens to the SmartCode panel. These let you reference course enrolments, membership levels, order data, and similar plugin-side values directly in your emails.

For example, with TutorLMS connected you might see tokens for enrolled course names and course links.

Available tokens depend on which integrations are active on your site. Head to **FluentCRM → Settings → Integrations** to connect plugins and unlock their SmartCodes.

## Practical tips

- **Fallback values:** If a token might be empty for some contacts (for example, `first_name` is not always filled), consider writing your copy to work naturally even when the token returns nothing — for example, "Hi there" as a fallback greeting.
- **Subject lines:** SmartCodes work in subject lines too. Personalising the subject with the contact's first name can noticeably improve open rates.
- **Testing:** Use **Send a test email** from the editor toolbar and enter your own email address. Your own contact record values will be used, so you can verify that every token resolves correctly before sending.
