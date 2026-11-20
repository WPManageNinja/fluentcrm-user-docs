---
title: "Audit Log"
slug: "audit-log"
category: "global-settings"
order: 0
---

# Audit Log

When more than one person manages your CRM, sooner or later someone asks who paused a campaign, who deleted a tag, or who changed a setting. The **Audit Log** answers that. It records which manager did what, to which item, when, and from where, so you can trace a change back to its source.

The log is **off by default**. Turn it on once, and FluentCRM starts recording from that moment.

## Turn On the Audit Log

1. Go to **FluentCRM → Addons**.
2. Under **Advanced Features**, find **Audit Log** and click **Settings**.
3. Check **Enable the audit log**.
4. Under **Keep audit log entries**, choose **For a number of days** (the minimum is 15) or **Forever**.
5. Optional: check **Store the IP address of each action** if you also want to record where each action came from.
6. Click **Save Settings**.

Once the log is on, **Audit Log** appears as the first item under **FluentCRM → Settings → System Admin Tools**. Only managers who can manage FluentCRM settings see it.

>[!Note]
> FluentCRM creates the log's database table the first time you turn the log on. If you turn it off later, the table and your old entries stay, and you can still read them. FluentCRM just stops recording new actions.

## What Gets Recorded

The log tracks actions a manager takes, not what your contacts or automations do on their own.

**FluentCRM Free**

- **Campaigns:** created, duplicated, recipients changed, scheduled, sent now, paused, resumed, unscheduled, archived, and deleted.
- **Automations:** created (from scratch, a copy, an import, or a template), published, set back to draft, steps edited while the automation is live, contacts removed, and deleted.
- **Contacts:** bulk deletes, imports, and bulk actions. Each one is a single entry with a count, and several in a row within ten minutes merge into one entry. Actions that automations, forms, or scheduled tasks run on their own are not logged.
- **Managers and API:** a manager added or removed, a change to a manager's permissions, and a REST API key created or deleted.
- **Settings:** changes to general, compliance, advanced features, double opt-in, user syncing, checkout forms, email styling, MCP, and the bounce handler key. Each entry shows the old and new value, such as **Campaign archive: Enabled → Disabled**. Anything that looks like a secret, such as a key, shows as `***`.
- **Other:** a list, tag, or email template deleted, a database reset, and any change to the audit log's own settings, exports, or clean-ups.

**FluentCRM Pro** adds more entries:

- SMS and WhatsApp campaigns, and their message templates.
- Recurring campaigns and email sequences.
- Contact and data exports.
- Messaging provider settings, with the names of the changed settings only.
- License activation and deactivation.

>[!Note]
> The Pro entries require **FluentCRM Pro**. [See what's included →](/how-to-install-upgrade-and-activate-license)

Individual email sends, contact activity such as tags, lists, opens, and clicks, and the steps an automation runs are not in the audit log. They already have their own records.

## Read the Log

Go to **FluentCRM → Settings → System Admin Tools → Audit Log**. Each row shows:

| Column | What it shows |
|---|---|
| **Date & Time** | When the action happened, in your site's time. |
| **Manager** | The person who did it. Actions with no person behind them show **System**. |
| **Action** | What happened and to which item. Click the arrow at the start of a row to expand it for the exact time, the event key, and the IP address when you store it. |
| **Source** | Where the action came from: **Web app**, **AI agent (MCP)**, **REST API**, **WP-CLI**, **Scheduled task**, or **System**. |
| **Severity** | **Info**, **Important**, or **Critical**. Sending a campaign right away or deleting something, for example, is **Critical**. |

Click **Load more** at the bottom to see older entries.

>[!Tip]
> The log opens on the most recent 30 days. Use the date range to look further back.

## Find a Specific Entry

The toolbar works like the one on your contacts list:

- **Search** by name, such as a campaign called Black Friday sale.
- **Date range** to narrow the entries to a window of time.
- **Filters** (the funnel button) to narrow by **Manager**, **Event**, and **Severity**. A dot appears on the funnel while a filter is active, and **Reset** clears those three filters.
- **Refresh** to load the newest entries.

For severity, **All severities** shows everything, **Important and critical** hides routine entries, and **Critical only** shows just the highest-risk actions.

## Export the Log

Click **Export CSV** to download the entries that match your current search, date range, and filters. Filter first if you only need one manager's actions or one week. The export itself is recorded in the log.

## Delete Old Entries

Administrators can clear out old entries. Click the trash icon, then pick **15 days**, **30 days**, **90 days**, or **Custom** and choose a date. The popover shows the cut-off date, and every entry on or before it is deleted. Click **Delete entries** to confirm.

>[!Warning]
> Deleted audit log entries can't be recovered. Export the log first if you might need the records later. The clean-up itself is recorded in the log.

## Good to Know

- Turning the log on isn't recorded as an entry. The first entry is the first action after you save.
- Managers can't edit or delete individual entries. Only an administrator can clear old entries in bulk.
- Retention runs by age. Set it to keep entries forever if you need a permanent record.

## What's Next?

- [Manage your CRM managers](/global-managers-settings)
- [System Admin Tools](/fluentcrm-tools-settings)
