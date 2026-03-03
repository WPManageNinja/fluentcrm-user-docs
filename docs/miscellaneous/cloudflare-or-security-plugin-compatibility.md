---
title: "Cloudflare or Security Plugin Compatibility"
slug: "cloudflare-or-security-plugin-compatibility"
category: "miscellaneous"
order: 0
---

# Cloudflare or Security Plugin Compatibility
FluentCRM is built on top of WordPress REST API and depends on CRON jobs and REST API endpoints. Please read the docs carefully and implement associate actions if your FluentCRM is not sending emails or getting errors in different FluentCRM actions.

### FluentCRM URL Structures:

**FluentCRM REST API URL Base:** https://your-site.com/wp-json/fluent-crm/v2/

FluentCRM also uses a few internal AJAX calls to run long-process jobs. These ajax calls are mostly POST requests, and it will always contain **fluentcrm** as a body action value.

**List of Ajax Action Names:**

-   fluentcrm-post-campaigns-emails-processing
-   fluentcrm\_callback\_for\_background
-   fluentcrm-post-campaigns-send-now

FluentCRM also has few frontend-based URLs to process different actions like redirecting Email URLs, and handling Smart URLs.

**Frontend URL Patterns:**

-   https://youtsite.com/?fluentcrm=1&route=\*\*\*\*\*
-   https://youriste.com/?ns\_url=\*\*\*\*&mid=\*\*\*

You may disable caching for these URL patterns in your cloudflare settings or caching Plugins.

### Recommended Cloudflare Page Rules

You may configure your Cloudflare page rule like the screenshot. If you are using CloudFlare pro plan then you can set the rules individually for each endpoint pattern.

![image 1](/miscellaneous/cloudflare-or-security-plugin-compatibility/image-1-1024x856.png)

### For Caching Plugins

You may exclude these URL patterns if you use a caching plugin or Security Plugin like WordFence. For WordFence, active the Learning Mode for a week and then you may activate the full protection mode.