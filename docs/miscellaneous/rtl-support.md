---
title: "RTL Support"
slug: "rtl-support"
category: "miscellaneous"
order: 0
---

# RTL Support

Starting with v3, FluentCRM ships with native **right-to-left (RTL)** language support. If your WordPress site is configured in Arabic, Hebrew, Persian, Urdu, or any other RTL language, FluentCRM automatically loads its RTL stylesheet so menus, tables, modals, and the email builder all render in the correct reading direction.

## How RTL is activated

You don't need to flip a switch in FluentCRM – the plugin detects RTL automatically using WordPress's locale.

1. Go to **Settings → General** in WordPress and confirm the **Site Language** is set to an RTL language (e.g. *العربية*, *עברית*, *فارسی*, *اردو*).
2. Save the WordPress settings.
3. Reload any FluentCRM screen – the layout flips to RTL.

Internally, FluentCRM checks `is_rtl()` and loads `admin_rtl.css` on top of the standard admin stylesheet whenever the helper returns `true`.

## What gets mirrored

-   **Admin shell** – Sidebar, breadcrumbs, primary menu, and tabs are mirrored.
-   **Tables and lists** – Column order, row actions, and bulk-action bar.
-   **Forms and modals** – Labels, helper text, and buttons.
-   **Email builder** – The Gutenberg block editor follows WordPress's own RTL handling, so blocks read correctly while you compose.
-   **Reports and charts** – Tooltip alignment and legend placement.

## Tips & known limitations

-   **Email content itself is not flipped.** RTL only restyles the admin UI you use to author emails. The email message is laid out using WordPress's standard email rendering, which respects the recipient's mail client. If you author in an RTL language and want to keep the rendered email RTL, set `dir="rtl"` on the outermost block or use a Pattern that already includes that attribute.
-   **Custom theme overrides** that target FluentCRM's admin CSS can leak left-aligned spacing back in. If a panel still looks mis-aligned, check whether your theme is enqueueing CSS on the admin side.
-   **Dark Mode** works alongside RTL – see [Dark Mode](/dark-mode).

## Switching back to LTR

To switch back to a left-to-right layout, change the WordPress **Site Language** at **Settings → General** to an LTR language and save. FluentCRM will stop loading the RTL stylesheet on the next page load.
