---
title: "Cloudflare or Security Plugin Compatibility"
slug: "cloudflare-or-security-plugin-compatibility"
category: "miscellaneous"
order: 0
---

# Cloudflare or Security Plugin Compatibility

FluentCRM is built on top of the WordPress REST API and relies heavily on background CRON jobs to function smoothly. Because FluentCRM processes real-time data (like sending emails, tracking link clicks, and running automations), caching plugins and security firewalls (like Cloudflare or Wordfence) can sometimes block these vital processes. 

If your emails are not sending, or you are seeing unexpected errors while performing actions in FluentCRM, your security or caching settings are likely the cause. Follow this guide to exclude FluentCRM's important URLs from your caching and security plugins so everything runs seamlessly.

## 1. URLs and Actions to Exclude

To prevent conflicts, you need to tell your caching and security plugins to ignore or bypass the following URL structures and AJAX actions.

### REST API Base URL
Your security plugin must allow requests to this path:
* `https://yoursite.com/wp-json/fluent-crm/v2/*` 

> **Note:** Replace `yoursite.com` with your actual domain name.

### Frontend URL Patterns (Link Tracking)
FluentCRM uses these patterns to track email opens, redirect links, and handle Smart URLs. These must **never** be cached:
* `https://yoursite.com/?fluentcrm=1&route=*`
* `https://yoursite.com/?ns_url=*&mid=*`

### AJAX Actions
FluentCRM uses specific background (POST) requests for long-running tasks. Ensure your security firewall does not block requests containing `fluentcrm` as the body action value. Specifically:
* `fluentcrm-post-campaigns-emails-processing`
* `fluentcrm_callback_for_background`
* `fluentcrm-post-campaigns-send-now`

---

## 2. How to Configure Cloudflare

If you are using Cloudflare, you need to create Page Rules to bypass the cache for FluentCRM's background processes.

1.  Log in to your Cloudflare dashboard and go to **Rules → Page Rules**.
2.  Create a new rule for your REST API and Frontend URL patterns (listed above).
3.  Set the setting to **Cache Level: Bypass**.

> **💡 Pro Tip:** If you are on a Cloudflare Pro plan, you can set up individual firewall rules for each endpoint pattern. This ensures maximum compatibility with FluentCRM without sacrificing your overall site security.

---

## 3. How to Configure Caching Plugins (WP Rocket, LiteSpeed, etc.)

Most WordPress caching plugins have an "Advanced" or "Exclusions" settings tab.

1.  Navigate to your caching plugin's exclusion settings (often labeled "Never Cache URL(s)", "Exclude URLs", or "Bypass Cache").
2.  Paste the **Frontend URL Patterns** and the **REST API Base URL** into the exclusion box.
3.  Save your settings and completely purge/clear your existing cache.

---

## 4. How to Configure Wordfence (or other Firewalls)

Strict security plugins like Wordfence can sometimes mistake FluentCRM's automated email-sending actions for malicious bot activity and block them.

**The Easiest Fix for Wordfence:**
1.  In your WordPress dashboard, go to **Wordfence → Firewall**.
2.  Change your Web Application Firewall (WAF) status to **Learning Mode**.
3.  Leave it in Learning Mode for about one week while you use FluentCRM normally (e.g., send a test campaign, let your automations run, and add subscribers).
4.  Wordfence will safely "learn" that FluentCRM's actions are normal site behavior. After a week, you can safely switch the firewall back to **Enabled and Protecting**.