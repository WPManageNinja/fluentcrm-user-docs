---
title: "AffiliateWP integration with FluentCRM"
slug: "affiliatewp-integration-with-fluentcrm"
category: "integrations"
order: 0
---

# AffiliateWP integration with FluentCRM

[**AffiliateWP**](https://affiliatewp.com/) turns any WordPress site into a fully fledged affiliate program. The [**FluentCRM**](https://fluentcrm.com/) Pro integration brings that affiliate data into your CRM – so you can automate onboarding, segment your affiliates, and run targeted campaigns based on referral activity.

This article walks you through enabling the integration and the automation triggers, dynamic segments, and smart codes that become available.

> **Note:** The AffiliateWP integration is a **FluentCRM Pro** feature.

## Connecting FluentCRM with AffiliateWP

Both plugins must be active for the integration to load.

1. Make sure **FluentCRM Pro** and **AffiliateWP** are installed and activated.
2. Go to **FluentCRM → Settings → Integrations**.
3. Confirm that **AffiliateWP** appears in the integration list with a green status.

## Automation triggers for AffiliateWP

Go to **FluentCRM → Automations**, click **+ New Automation**, give it a label, and select **AffiliateWP** from the trigger sidebar.

Available triggers include:

-   **Affiliate Activated** – Fires when an affiliate's status changes to **Active**. Great for kicking off an onboarding sequence with promo banners, tracking links, and best-practice tips.

If you'd like additional event types (e.g. referral approved, payout sent), please open a feature request from **FluentCRM → Help**.

## Dynamic segment for AffiliateWP

In addition to triggers, FluentCRM Pro adds a dedicated **AffiliateWP Affiliates** dynamic segment. Use it to filter and target affiliates as a single audience without manually maintaining a list.

1. Go to **FluentCRM → Contacts → Segments**.
2. Click **+ New Dynamic Segment** and choose **AffiliateWP Affiliates**.
3. Optionally narrow by status (Active, Pending, Inactive).
4. Save the segment – it will refresh automatically as affiliate data changes.

You can use this segment as the audience for any campaign, recurring campaign, or email sequence.

## Smart codes

When AffiliateWP is active, FluentCRM exposes affiliate-specific smart codes you can use inside campaigns and patterns:

-   `##affwp.affiliate_id##` – The contact's affiliate ID.
-   `##affwp.referral_url##` – The contact's primary referral URL (with their affiliate code).
-   `##affwp.referrals_count##` – Lifetime number of referrals.
-   `##affwp.unpaid_earnings##` – Current unpaid balance.
-   `##affwp.paid_earnings##` – Lifetime paid earnings.

Combine these with [Conditional Sections](/docs/conditional-sections-in-fluentcrm-email-editor) to surface different content to high-performers vs. dormant affiliates.

## Use cases

-   **Onboarding sequence:** Trigger on **Affiliate Activated** → send a welcome email with their referral URL → schedule a 3-day "first sale" tip → tag as *Onboarded*.
-   **Re-activation campaign:** Use the AffiliateWP dynamic segment with a "no referrals in last 60 days" condition → send a re-engagement email featuring new promo materials.
-   **Quarterly performance digest:** Build a recurring campaign that uses smart codes to deliver each affiliate's stats every quarter.
