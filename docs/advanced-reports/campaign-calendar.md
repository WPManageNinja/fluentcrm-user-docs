---
title: "Campaign Calendar"
description: "See every FluentCRM email, SMS, and WhatsApp campaign on a month, quarter, or year calendar, with summary cards, a day view, and a campaign-type filter."
slug: "campaign-calendar"
category: "advanced-reports"
order: 0
---

# Campaign Calendar

The **Campaign Calendar** puts all your campaigns on one calendar, so you can spot busy weeks, gaps in your schedule, and anything still sitting in draft. It shows email campaigns alongside SMS and WhatsApp campaigns, covering past sends, campaigns sending now, and campaigns scheduled for later.

>[!Note]
> This feature requires **FluentCRM Pro**. [See what's included →](/how-to-install-upgrade-and-activate-license)

To open it, click **Reports** in the top navbar, then **Calendar** in the left sidebar.

![Screenshot of the Campaign Calendar in Month view with summary cards above the calendar grid](/advanced-reports/campaign-calendar/calendar-month-view.webp)

## Summary Cards

The header shows the period you're viewing and how many email, SMS, and WhatsApp campaigns fall in it. Below it, four cards break those numbers down:

* **Total Campaign:** Every campaign in the period, with how many are upcoming and how many have completed.
* **Email Campaign**, **SMS**, and **WhatsApp:** The count for each channel, plus that channel's next upcoming campaign and its date. Click the date to open the campaign.

## What Appears on the Calendar

* **Email:** One-time campaigns, each email a recurring campaign has already sent, and each recurring campaign's next run.
* **SMS and WhatsApp:** Campaigns for channels that are active. These only appear while the Messaging module is turned on.

Each campaign sits on its scheduled date. A draft with no schedule appears on the day you created it. Statuses are grouped into **Draft**, **Scheduled**, **Sent**, and **Failed**, and anything queued, sending, or paused counts as **Scheduled**.

## Switch Between Views

Use the **Month**, **Quarter**, and **Year** buttons above the calendar.

* **Month:** A weekday grid. Each day shows its first campaign with the send time, status, and recipient count. When a day has more campaigns, click **+ N more** to see them all. Days from the previous and next month are hatched.
* **Quarter** and **Year:** Each month becomes a small calendar with a count of email, SMS, and WhatsApp campaigns. Days are shaded by how many campaigns they hold, using the **Less** to **More** scale in the toolbar. The shading steps are fixed (1, 2, 3, and 4 or more), so a color means the same count on every screen.

![Screenshot of the Campaign Calendar in Year view with each month shaded by campaign count](/advanced-reports/campaign-calendar/calendar-year-view.webp)

To move through time, use the arrow buttons, click **Today** to jump back to the current period, or pick a month or year from the date picker.

## See Every Campaign on a Day

Click **+ N more** on a day in Month view. A panel opens on the right listing every campaign on that date, with its time, channel, and status. Click a campaign to open it: drafts open in the editor, and sent or scheduled campaigns open their report.

![Screenshot of the day panel listing three draft email campaigns scheduled on October 14](/advanced-reports/campaign-calendar/calendar-day-drawer.webp)

## Filter by Campaign Type

Click the **Filter** icon at the right of the toolbar and choose **All Campaign**, **Email**, **SMS**, or **WhatsApp** to show just one channel.

## Create a Campaign from the Calendar

Open **More Actions** in the top-right corner to start a **New Email Campaign**, **New Recurring Campaign**, **New SMS Campaign**, or **New WhatsApp Campaign** without leaving the report.

>[!Tip]
> Check the Year view before you plan a busy season. Clusters of dark days show where your audience is already getting a lot of messages, and empty weeks show where a campaign could fit.
