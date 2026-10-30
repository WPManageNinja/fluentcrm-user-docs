---
title: "Campaign Summary & Actions"
slug: "campaign-summary-actions"
category: "email-campaign"
order: 0
---

# Campaign Summary & Actions

After running an Email Campaign in **FluentCRM**, you can access a comprehensive suite of statistics and post-campaign actions from the **Campaign Details** screen. This section allows you to monitor exactly how your audience is interacting with your content in real time.

---

### Accessing the Email Campaigns Dashboard

To view your campaign data properties, navigate to the central analytics hub:

 * **Navigate to Emails:** From the main FluentCRM sidebar, click **Emails** in the top navigation bar.
 * **Select Campaigns:** Choose Campaigns from the dropdown menu to load the list of all marketing broadcasts.

![Accessing Email Campaign Dashboard](/email-campaign/campaign-summary-actions/access-the-email-campaing-dashboard-1.webp)

## Campaign Performance & Stats Overview

Clicking on a specific campaign opens a detailed report divided into visual summaries and deep-dive tabs.

 * **Campaign Performance:** Displays the total count of **Sent Emails**.
 * **Emails Stats:** A progress-bar style breakdown showing the percentage of emails **Sent**, **Opened**, **Clicked**, and **Unsubscribed**.
 * **Link Activity:** Logs unique clicks for every URL included in the email body to identify your most engaging content.

## Detailed Report Tabs

The bottom section of the analytics page provides granular data across three tabs:

### 1. Campaign Details

This tab provides a summary of the campaign's configuration:

 * **Title:** The campaign name.
 * **Scheduled on:** The specific date and time the campaign was delivered.
 * **Subject:** The email subject line used.
 * **Total Recipients:** The final count of contacts reached.
 * **Sent By:** Identifies the WordPress user who initiated the broadcast.

![Campaign Details](/email-campaign/campaign-summary-actions/email-capaign-2.webp)

### 2. Emails & Actions

This tab lists every recipient of the campaign and lets you act on them in bulk. Since FluentCRM 3.3.0 it replaces the separate **Emails** and **Actions** tabs.

 * **Filter Options:** Refine the list with **All**, **Clicked**, **View** (opened), or **Unopened**, or use the search icon to find a recipient.
 * **Data Fields:** See each contact's name and email, their opens and clicks under **Actions**, the send **Date**, and the delivery **Status**.
 * **Per-email buttons:** **Preview** shows the email the contact received, and **Resend** sends it to that contact again.

![Screenshot of the Emails & Actions tab listing campaign recipients](/email-campaign/campaign-summary-actions/emails-and-actions-tab.webp)

#### Act on several recipients at once

Tick the checkbox beside each recipient you want, or tick the checkbox in the header to select the whole page. When more recipients match than fit on one page, you can extend the selection to every matching recipient. A bar appears at the bottom of the screen with these actions:

 * **Tags:** Choose **Add** or **Remove**, pick the tags, and apply them. Tags only change for subscribed contacts.
 * **Export:** Download the selected recipients as a **CSV** file.
 * **Resend:** Send the campaign email again to the selected recipients. Hover over the button to confirm. Resend isn't available while the campaign is still sending.

![Screenshot of three selected recipients with the Tags picker open above the bulk action bar](/email-campaign/campaign-summary-actions/emails-and-actions-bulk-tags.webp)

>[!Tip]
> Combine a filter with bulk actions to follow up on engagement. For example, filter by **Clicked**, select all, and add a "Clicked newsletter" tag, or filter by **Unopened** and export the list.

### 3. Contact Selections

Review the original logic used to target this campaign. This tab displays the Lists, Tags, or Advanced Filter conditions that selected the audience before the email was sent.

![Screenshot of the Contact Selections tab showing the advanced filter used for the campaign](/email-campaign/campaign-summary-actions/contact-selections-tab.webp)

## UTM Parameters in Campaign Details *(new in v3)*

If you applied **UTM parameters** during campaign setup ([Email Campaigns → Subject & Settings](/setting-up-campaign#utm-parameters)), they are now visible directly inside the campaign's report:

-   The **Campaign Details** tab shows the exact `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, and `utm_content` values that were appended.
-   The **Link Activity** widget displays the tagged URL alongside the click count, so you can match a click in your analytics tool back to the specific link in the email.

This is the easiest way to confirm – after the campaign has been sent – exactly how the campaign appears in Google Analytics, Plausible, or your reporting tool of choice.
