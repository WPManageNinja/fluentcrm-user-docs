---
title: "Cron Job: Set up on a VPS (SSH & Crontab)"
slug: "fluentcrm-cron-on-a-vps"
category: "fluentcrm-essentials"
order: 0
---

# Cron Job: Set up on a VPS (SSH & Crontab)

If you run FluentCRM on a VPS or dedicated server without a control panel like cPanel, you set the cron job up directly from the command line using `crontab`. This is the most reliable method — it runs on a fixed schedule regardless of site traffic, and with WP-CLI it doesn't even depend on your site being reachable over HTTP.

## Prechecks

First, disable the default WordPress cron as described in [Cron Job: Basics & Checklist](/fluentcrm-cron-job-basics-and-checklist/#step-1-disable-the-default-wordpress-cron). Add this to your `wp-config.php`:

```
define('DISABLE_WP_CRON', true);    // Disable the default PHP-based Cron invocation.
```

>[!Warning]
> Disabling the WordPress cron without adding the server cron below stops all scheduled tasks. Complete both parts.

You'll also need:

- SSH access to your server
- The full path to your WordPress installation (for example, `/var/www/html`)
- The user that owns your WordPress files — often `www-data` on Ubuntu/Debian, or `nginx`/`apache` on other systems

## Choose a method

There are two ways to trigger WordPress every minute. **Method B (WP-CLI) is recommended** when WP-CLI is available, because it runs WordPress directly instead of making an HTTP request.

### Method A — Trigger over HTTP (works everywhere)

This calls `wp-cron.php` the same way a visitor would, but on a fixed schedule. It only needs `wget` or `curl`, which are available on virtually every server.

1. Connect to your server over SSH.
2. Open the crontab for the user that owns your WordPress files, so permissions stay correct:

```bash
sudo -u www-data crontab -e
```

3. Add this line, replacing the URL with your site:

```cron
* * * * * wget -q -O - https://yoursite.com/wp-cron.php?doing_wp_cron >/dev/null 2>&1
```

Prefer `curl`? This does the same thing:

```cron
* * * * * curl -s https://yoursite.com/wp-cron.php?doing_wp_cron >/dev/null 2>&1
```

4. Save and exit.

### Method B — Run via WP-CLI (recommended)

[WP-CLI](https://wp-cli.org/) runs WordPress directly on the server, skipping the HTTP request entirely. This avoids trouble on servers where the site can't reliably reach itself — loopback restrictions, internal DNS, or self-signed certificates.

1. Confirm WP-CLI is installed:

```bash
wp --info
```

2. Open the crontab for the WordPress file owner:

```bash
sudo -u www-data crontab -e
```

3. Add this line, replacing the path and the `wp` location with yours:

```cron
* * * * * cd /var/www/html && /usr/local/bin/wp cron event run --due-now >/dev/null 2>&1
```

>[!Note]
> Use the full path to both your WordPress directory and the `wp` binary. Cron runs with a minimal environment, so a command that works in your shell can fail under cron when the paths aren't absolute. Run `which wp` to find the binary path.

4. Save and exit.

## Understanding the schedule

Each `*` in `* * * * *` is a time field: minute, hour, day-of-month, month, and day-of-week. Five stars means **every minute of every hour, every day** — which is what FluentCRM needs for timely email processing.

## Verify it's working

Wait a couple of minutes, then confirm cron is firing:

- **In FluentCRM:** go to **Settings → System Admin Tools → Cron Job Monitor** and check that the intervals match the [recommended values](/fluentcrm-cron-job-basics-and-checklist/#fluentcrm-cron-job-status).
- **From the command line (WP-CLI):** list the scheduled events and their next run times:

```bash
cd /var/www/html && wp cron event list
```

If those times advance each minute, your cron job is running correctly.

>[!Tip]
> If emails still aren't sending, the two most common causes are a path that isn't absolute and a crontab created under the wrong user. Make sure you edited the crontab as the user that owns your WordPress files (Step 2 above), and that every path in the command is a full path.
