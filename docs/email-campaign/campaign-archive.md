---
title: "Campaign Archive"
slug: "campaign-archive"
category: "email-campaign"
order: 0
---

# Campaign Archive

Newsletter archives give visitors a reason to subscribe: they can read what you actually send before they hand over an email address. The Campaign Archive publishes your past email campaigns on a page of your site, either as a plain list of links or as a grid of cards, using a block in the WordPress editor or a shortcode.

>[!Note]
> This feature requires **FluentCRM Pro**. [See what's included →](/how-to-install-upgrade-and-activate-license)

## Turn On the Archive

The archive stays off until you enable it, and both the block and the shortcode depend on that switch.

1. Go to **Settings → Advanced Features**.
2. Check **Enable Campaign Archive Frontend Feature**.
3. Set the global rules under **Campaign Archive Settings** (described below).
4. Click **Save**.

The global settings decide which campaigns appear whenever a block or shortcode doesn't say otherwise:

- **List the campaigns if the title match the provided keyword:** Show only campaigns whose internal title contains this keyword. Leave it blank to skip the check.
- **Select Campaigns:** Pick specific campaigns to show. Leave it blank to show every campaign that passes the other filters.
- **Filter by status:** Choose **All**, or one status such as **Archived**, **Draft**, or **Scheduled**. It starts on **Archived**, which is the status a campaign has once it has been sent.
- **Max Campaigns to list (max 200):** Cap how many campaigns appear. It starts at 50, and 200 is the ceiling.

If the feature is off, visitors to a page that holds the block see nothing where it sits, and the shortcode prints a notice that the archive is not enabled. Your saved block settings survive, so switching the feature back on restores the page as it was.

## Add the Archive With the Block

The **Campaign Archives** block lives in the **Widgets** category of the WordPress block inserter. Search for "Campaign Archives" or "newsletter" if you can't spot it.

1. Open the page or post where you want the archive.
2. Click **+**, then insert **Campaign Archives**.
3. Open the block's sidebar and adjust **Campaign Archive Settings**.

The editor shows a live preview, so you can see the layout change as you adjust each control.

### Choose Which Campaigns Appear

Four controls narrow the list for this one block. Each is optional, and a field you leave empty falls back to the matching global setting.

- **Campaigns:** Search by title and select up to 200 campaigns. The picker requires permission to manage FluentCRM settings. Without it, a **Campaign IDs** field appears instead, where you type comma-separated IDs.
- **Status:** Pick a status, or keep **Use global setting**.
- **Limit:** The most campaigns to show. Enter `0` to use the global maximum.
- **Search:** Show only campaigns whose title contains this text. This filters the archive itself. The search box inside the **Campaigns** picker only helps you find campaigns to select and never changes what visitors see.

### Choose a Layout

**Layout** switches between **List** and **Card grid**.

**List** prints each campaign as a linked subject line with its date, which is the original archive look.

**Card grid** shows each campaign as a card with its subject, date, a short excerpt, and a **Read More** link. No featured image is needed, and the grid drops to one column on screens narrower than 783 pixels. These options apply to the card grid only:

| Setting | What it does | Range | Default |
|---|---|---|---|
| **Columns** | Cards per row | 1 to 4 | 3 |
| **Excerpt Length (words)** | How many words each card shows | 5 to 100 | 25 |
| **Hide date** | Removes the date from each card | On or off | Off |
| **Hide excerpt** | Removes the excerpt from each card | On or off | Off |
| **Hide Read More button** | Removes the link at the bottom of each card | On or off | Off |

A number outside the range is adjusted to the nearest allowed value.

## Add the Archive With a Shortcode

Use the shortcode when you're working in a page builder or the classic editor. On its own, it prints the list layout using your global settings:

```text
[fluent_crm_campaign_archives]
```

Every option from the block has a matching shortcode attribute, and you can combine them freely:

| Attribute | Purpose | Example |
|---|---|---|
| `ids` | Specific campaign IDs, separated by commas | `ids="1101,5,1100"` |
| `status` | One campaign status, or `all` | `status="all"` |
| `search` | Match campaigns by title | `search="Summer"` |
| `limit` | Maximum campaigns to show | `limit="10"` |
| `layout` | `list` (default) or `card` | `layout="card"` |
| `columns` | Cards per row, 1 to 4 | `columns="2"` |
| `excerpt_length` | Words per excerpt, 5 to 100 | `excerpt_length="15"` |
| `hide_date` | `yes` removes the date | `hide_date="yes"` |
| `hide_excerpt` | `yes` removes the excerpt | `hide_excerpt="yes"` |
| `hide_read_more` | `yes` removes the Read More link | `hide_read_more="yes"` |

A few complete examples:

```text
[fluent_crm_campaign_archives layout="card" columns="3" excerpt_length="15"]
[fluent_crm_campaign_archives layout="card" hide_date="yes" hide_read_more="yes"]
[fluent_crm_campaign_archives ids="1101,5,1100,1072" status="all" limit="50"]
```

Any attribute you leave out falls back to the global setting, and you can place several archives on the same page, each with its own layout and filters.

## How Card Excerpts Are Built

Each card takes its excerpt from the campaign's **pre-header** text. If the campaign has no pre-header, FluentCRM uses the start of the email body. In both cases it removes any smartcode it can't fill in, then trims the text to your excerpt length.

Emails that use [conditional content](/conditional-sections-in-fluentcrm-email-editor) get no excerpt from the body, because what a reader sees depends on who they are and FluentCRM won't guess. Give those campaigns a pre-header and the card shows that instead. A body longer than about 64 KB is skipped for the same reason.

## What Visitors See When They Click

Clicking a campaign's title, or **Read More** on a card, opens the full email on the same page. Smartcodes in the email fill in when FluentCRM can identify the visitor as one of your contacts. For anyone else they stay empty.

>[!Tip]
> Test the archive in a private browser window. That shows you exactly what an anonymous visitor gets, without your own contact data filling in any smartcodes.

## What's Next?

- [Set up and send a campaign](/setting-up-campaign)
- [Use smartcodes in your emails](/smartcodes-in-fluentcrm-email-editor)
