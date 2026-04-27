---
title: "Frontend Portal"
slug: "frontend-portal"
category: "grow-your-audience"
order: 0
---

# Frontend Portal (Pro)

The **Frontend Portal** in [FluentCRM](https://fluentcrm.com/) Pro turns your WordPress site into a self-service hub for your contacts. Logged-in users can review their profile, update preferences, manage subscriptions, and read past campaigns – all from a clean, branded portal page that you control.

This article walks you through enabling the Frontend Portal, choosing a render mode, and embedding it on your site.

> **Note:** Frontend Portal is a **FluentCRM Pro** feature. The free FluentCRM plugin does not include the portal.

## Enable the Frontend Portal

1. Go to **FluentCRM → Settings → Frontend Portal** in your WordPress admin.
2. Toggle **Enable Frontend Portal** to **On**.
3. Click **Save Settings**.

Once enabled, you can choose how the portal is rendered on your site.

## Render modes

FluentCRM supports two render modes for the Frontend Portal:

### 1. Standalone page

This mode gives you a dedicated URL that FluentCRM serves directly – no WordPress page or shortcode required. It is the simplest option for most sites.

1. From the same settings panel, set **Render Type** to **Standalone**.
2. Enter a **Portal Slug** (for example, `my-account` or `crm-portal`). The portal will live at `https://yourdomain.com/<slug>/`.
3. Click **Save Settings**.

FluentCRM handles routing, theming, and access control – logged-in users see the portal, logged-out users are redirected to the WordPress login page.

### 2. Shortcode on a WordPress page

If you'd rather embed the portal inside an existing page (so it inherits your theme's header, footer, and styling), use the shortcode mode.

1. Set **Render Type** to **Shortcode**.
2. (Optional) Pick the **WordPress Page** the portal should live on – FluentCRM will redirect users there for portal links inside emails.
3. Click **Save Settings**.
4. On the chosen WordPress page, paste the shortcode:

```text
[fluent_crm]
```

The portal will render in place. The page itself can be styled with your theme or page builder of choice.

## What contacts can do in the portal

Out of the box, the portal exposes:

-   **Profile** – Name, email, phone, custom fields the contact is allowed to edit.
-   **Lists & Tags** – Self-managed subscription preferences for the lists you mark as public.
-   **Email Preferences** – Opt out of specific list/tag groupings or unsubscribe entirely.
-   **Past Campaigns** – Read-only history of emails the contact has received.
-   **Profile Picture / Branding** – If enabled, the portal honours your brand colours and logo.

Logged-in WordPress users are matched to a FluentCRM contact by their account email. If no matching contact exists, FluentCRM creates one in the **Pending** state on first login.

## Customise the look

You can override styling through your theme or a child theme. The portal markup uses scoped class names like `.fc_frontend_portal_wrapper`, `.fc_portal_nav`, and `.fc_portal_panel`, so you can target them directly with CSS in your theme's stylesheet or the WordPress Customiser.

For brand colours and logo, FluentCRM honours the **Business Settings** values configured at **FluentCRM → Settings → Business Settings**.

## Linking to the portal from emails

Use the built-in smart code in any email or pattern:

```text
##crm.frontend_portal_url##
```

This renders a one-click link that auto-logs the contact into their portal. Combine it with [Smart Links](/docs/global-smartlinks-settings) to add tags or trigger automation steps when someone opens their portal from an email.

## Permissions and security

-   The portal is gated to **logged-in WordPress users** only. Anonymous visitors are redirected to `wp-login.php`.
-   Auto-login links generated for emails are **single-use** and tied to the contact's hashed identifier, so a link forwarded to someone else will not give them access to a different contact's data.
-   Admins, editors, or any role with `publish_posts` capability never trigger auto-login from email links – they must log in normally.

## Disable the portal

If you ever need to turn the portal off:

1. Go to **FluentCRM → Settings → Frontend Portal**.
2. Toggle **Enable Frontend Portal** to **Off**.
3. Click **Save Settings**.

Existing portal URLs and shortcodes will return a 404 / empty render until you re-enable.

## Next steps

-   Combine the portal with [Compliance Settings](/docs/global-compliance-settings) so contacts can manage GDPR-style preferences themselves.
-   Use [Lists & Tags](/docs/segment-your-audience) to control which audiences a contact can self-subscribe to.

If you have any questions about the Frontend Portal, please feel free to [contact us](https://wpmanageninja.com/support-tickets/).
