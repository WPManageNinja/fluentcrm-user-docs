---
title: "Troubleshoot: Guidelines on WordPress Error"
slug: "troubleshoot-guidelines-on-wordpress-error"
category: "fluentcrm-essentials"
order: 0
---

# Troubleshoot: Guidelines on WordPress Error

FluentCRM runs inside WordPress, and WordPress sites usually have multiple plugins, themes, and hosting-level optimizations. Because of this, issues can happen due to conflicts in environment, configuration, or third-party tools.

Below are the most common types of WordPress errors you may face, along with steps to diagnose each one before contacting support.

### 1. Compatibility Errors

These occur when a plugin or theme conflicts with your current WordPress version or another active plugin. If FluentCRM behavior changes right after installing or updating another plugin or theme, this is often the cause.

**Steps to diagnose:**
1. Deactivate all plugins except FluentCRM and FluentCRM Pro, then retest the issue.
2. If the issue disappears, reactivate plugins one by one until the conflict reappears.
3. Switch to a default WordPress theme (Twenty Twenty-Four) and retest to rule out theme conflicts.

### 2. Database Errors

These happen when WordPress cannot properly read or write data — for example, due to database connection issues, corrupted tables, or incomplete migrations.

**Steps to diagnose:**
1. Go to **Tools → Site Health** in your WordPress admin and check for database-related warnings.
2. Use a plugin like WP-DBManager or your hosting control panel to run a database repair on the WordPress tables.
3. Check your hosting error logs for `MySQL` or `database` errors tied to the time the issue occurred.

### 3. Permission Errors

These occur when files or folders on the server do not have the correct read/write permissions, blocking WordPress from loading or updating required resources.

**Steps to diagnose:**
1. Check that your `wp-content/` folder and subfolders are set to `755` and files to `644`. Your hosting file manager or an FTP client can show these values.
2. If you recently migrated hosts, re-check ownership of the WordPress files — they should be owned by the web server user (e.g., `www-data` on Apache/Nginx).
3. Go to **Tools → Site Health → Info → Filesystem Permissions** for a quick overview directly from WordPress.

### 4. Caching and Optimization Errors

Aggressive page or object caching, script optimization, or server-level caching can serve stale content or break expected plugin behavior.

**Steps to diagnose:**
1. Clear all caches — your caching plugin (WP Rocket, W3 Total Cache, LiteSpeed Cache, etc.), server-side cache (if your host has one), and your browser cache.
2. Temporarily disable your caching plugin and retest the issue.
3. If you use a CDN (Cloudflare, BunnyCDN, etc.), purge the CDN cache and check whether JS/CSS minification or rocket-loader is interfering.

---

If none of the above steps resolve your issue, contact the WPManageNinja support team with a description of what you tried and your site's [Site Health Info](/wp-admin/site-health.php) export.

[WPManageNinja Support](https://wpmanageninja.com/support-tickets/)