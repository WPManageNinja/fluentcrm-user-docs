---
title: "Messaging Reports"
description: "Track SMS and WhatsApp volume and delivery in FluentCRM with the Messaging report: attempted, sent, delivered, failed, received, and opt-out counts plus outbound and engagement charts."
slug: "messaging-reports"
category: "advanced-reports"
order: 0
---

# Messaging Reports

The **Messaging** report shows how your SMS and WhatsApp messages perform over a date range: how many you sent, how many reached the phone, how many failed, and how many replies and opt-outs came back. Use it to catch delivery problems early, such as a provider rejecting messages or a sudden rise in opt-outs.

>[!Note]
> This feature requires **FluentCRM Pro**. [See what's included →](/how-to-install-upgrade-and-activate-license)

To open it, click **Reports** in the top navbar, then **Messaging** in the left sidebar. The report counts every SMS and WhatsApp message the [Messaging module](/messaging-overview) sends or receives.

![Screenshot of the Messaging report showing stat cards and the Outbound chart for the last 90 days](/advanced-reports/messaging-reports/messaging-report-overview.webp)

## Choose a Date Range and Channel

The controls at the top right set what the report covers:

* **7D**, **30D**, and **90D** show the last 7, 30, or 90 days.
* The date picker sets a custom range.
* The channel dropdown narrows the report to **SMS** or **WhatsApp**. Choose **All channels** to combine them.

![Screenshot of the date presets, channel dropdown with All channels, SMS, and WhatsApp, and the date range picker](/advanced-reports/messaging-reports/messaging-report-filters.webp)

## Stat Cards

| Card | What it counts |
|------|----------------|
| **Attempted** | Outbound messages that finished processing, whether they were sent or failed |
| **Sent** | Outbound messages the provider accepted, including those later marked delivered or read |
| **Delivered** | Messages confirmed as delivered or read, with the percentage of sent messages |
| **Failed** | Messages that failed, with the percentage of attempted messages |
| **Received** | Inbound messages from your contacts and other senders |
| **Opt-outs (inbound)** | Replies that unsubscribed the sender, such as "STOP" |

>[!Note]
> **Delivered** depends on delivery receipts from your provider. If your SMS or WhatsApp provider doesn't send them back to FluentCRM, messages stay at **Sent** and the Delivered card shows 0.

## Charts

* **Outbound** plots **Sent** and **Failed** messages over the selected range. A spike in the red line is the first place to look when a provider starts rejecting messages.
* **Engagement** plots **Received** messages and **Opt-outs** over the same range, so you can see how people respond to your campaigns.

Both charts group the data by day, week, or month depending on the length of the range, the same way the [Emails Report](/emails-report) does. If nothing happened in the range, a chart shows **No data available**.
