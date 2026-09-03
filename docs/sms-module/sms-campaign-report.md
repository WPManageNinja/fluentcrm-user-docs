---
title: "SMS Campaign Report"
slug: "sms-campaign-report"
category: "sms-module"
order: 5
---

# SMS Campaign Report

FluentCRM provides detailed reporting for SMS campaigns so you can track delivery performance, review recipient-level activity, and run post-campaign actions to keep your audience clean and engaged.

## Accessing campaign reports

To open the report for any sent or archived SMS campaign:

1. Open the **Messaging** dropdown on the top FluentCRM navbar and select **SMS Campaigns**.
2. Find your campaign in the **SMS Campaigns** list.
3. Click the **three-dots** **⋮** menu at the end of that row.
4. Select **Reports** from the dropdown.

![Reach SMS Campaigns from the Messaging dropdown, then select Reports from a campaign's ⋮ menu](/sms-module/sms-report/data-colum-9.webp)

## Campaign Details and Preview

The **Campaign Details** tab gives you a complete snapshot:

- **Technical data:** Campaign **Title**, **Total Recipients**, **Scheduled on** date/time, and **Sent By** user.
- **SMS preview:** The exact message content delivered to subscribers.
- **SMS stats:** Quick counters such as **Total Messages** and **failed SMS**.

![Campaign details, preview, and stats](/sms-module/sms-report/campaign-details-9-1.webp)

## Monitoring Recipients and Statuses

Use the **SMS** tab inside the report to audit delivery per contact:

- **Detailed list:** View recipients and their send records.
- **Delivery status:** Track success/failure outcomes for each recipient.
- **Resend option:** Click **Resend** beside a recipient to retry delivery.

![Recipients tab with delivery status and resend options](/sms-module/sms-report/sms-9-2.webp)

## Post-campaign Automation Actions

Use the **Actions** tab to manage tags based on campaign result groups:

- **Action type:** Choose **Add Tags** or **Remove Tags**.
- **Tag selection:** Select one or more tags to apply.
- **Filter subscribers:** Target by:
  - **All Recipients**
  - **Subscribers with sent messages**
  - **Subscribers with failed messages**
  - **Subscribers with delivered messages**

Then click **Add Tags to Subscribers** (or the remove action button) to execute.

![Actions tab with tag and recipient filters](/sms-module/sms-report/actions-9-3.webp)

## Reviewing Contact Selection 

The **Contact Selections** tab helps you verify how the audience was originally built:

- Review the lists/tags, dynamic segment, or advanced filter conditions used at send time — for example, the **Included Contacts** and **Excluded Contacts** lists and tags shown here.
- Confirm your segmentation logic matched the audience you intended to target.

![Contact selections tab with original audience filters](/sms-module/sms-report/contact-selections-9-4.webp)

### Export, Duplicate, and Delete Campaign

From the same **⋮** menu shown above, you can also run quick maintenance actions:

- **Export:** Click **Export** to download that campaign's data as a **JSON** file (usually generated in about a second).
- **Duplicate:** Click **Duplicate** to create a copy of the campaign with the same settings/content, so you can reuse it quickly.
- **Delete:** Click **Delete**, then confirm with **Yes** in the permission/confirmation prompt to permanently remove the campaign.