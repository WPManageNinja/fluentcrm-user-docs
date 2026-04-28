---
title: "Dark Mode"
slug: "dark-mode"
category: "miscellaneous"
order: 0
---

# Dark Mode

FluentCRM v3 ships with a system-wide **Dark Mode** so you can work in low-light environments without straining your eyes. The preference is stored per WordPress user, which means each member of your team can pick the theme they prefer.

## Toggle Dark Mode

1. From any FluentCRM screen, click the **theme toggle** icon (sun/moon) in the top-right header next to your profile menu.
2. The interface switches immediately – no save button, no page reload.
3. Click the icon again to switch back to **Light Mode**.

## How the preference is stored

Your choice is stored against your WordPress user (so it survives logout and applies on every device you use to log in to the same site). It does **not** affect the WordPress admin colour scheme outside FluentCRM, and it does not affect what other team members see.

## Compatibility

-   **Charts and reports** automatically adapt to the dark palette so contrast and legibility stay consistent.
-   **Email previews** continue to render with the light background that subscribers will actually see in their inbox – Dark Mode only restyles the FluentCRM admin chrome.
-   **RTL support** works alongside Dark Mode. If your site uses a right-to-left language, see [RTL Support](/docs/rtl-support).
-   **Third-party plugins** that hook into FluentCRM's admin pages may not honour Dark Mode if they ship their own CSS – this is rare but worth knowing if you notice a single panel still rendering in light theme.
