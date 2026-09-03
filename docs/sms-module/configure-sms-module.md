---
title: "Configure SMS Module"
slug: "configure-sms-module"
category: "sms-module"
order: 1
---

# Configure SMS Module

The **SMS Module** is a powerful feature in FluentCRM Pro that allows you to deliver SMS campaigns and automate messages directly to your subscribers or customers. This feature is crucial for time-sensitive or high-priority communications, complementing your existing email marketing efforts.

In this article, you will learn how to enable the SMS Module in your FluentCRM installation before configuring your preferred SMS provider.

>[!Note]
> The SMS Module is a **FluentCRM Pro** feature. The free FluentCRM plugin does not include SMS campaigns or SMS automation actions.

## Enabling the SMS Module

To activate SMS functionality within your CRM, you need to navigate to the plugin settings and enable the module.

From your WordPress dashboard, go to **FluentCRM → Settings → Messaging**.

At the top of the page, turn on **Enable Message Module** — this is the shared switch that unlocks messaging (SMS and WhatsApp) so you can reach contacts from Campaigns, Automations, and a shared Inbox. 

Once it's on, switch to the **SMS** tab (next to **WhatsApp**) and turn on **Enable SMS Module** as well. This unlocks the ability to create and send SMS campaigns and use SMS in your automations.

> [!Note]
> You can also **Enable the Message Module** from **FluentCRM Dashboard → Addons → Advanced Features**. Then open **Message Module** → **Settings** and turn on **Enable Message Module**.

Next, select an **SMS Provider** from the **Choose your SMS provider** dropdown under **SMS Provider**. FluentCRM supports two providers out of the box:

-   **[Twilio](/twilio-integration)** – Global SMS leader with strong deliverability.
-   **[Amazon End User Messaging (SNS)](/amazon-end-user-messaging)** – AWS-native SMS service.

The provider's credential fields appear directly below the dropdown once you pick one — choosing **Twilio**, for example, reveals fields for your Twilio Account SID, Auth Token, and From Number. 

Once you've enabled the module, selected a provider, and entered its credentials, click **Save** to apply your changes.

![Messaging settings page](/sms-module/configure-sms-module/enable-sms-module.webp)

Enabling the SMS Module is the essential first step to using this feature for delivering **SMS Campaigns** to specific subscribers based on lists or tags, and viewing **SMS Activities** within your dashboard.

>[!Note]
>You must configure either Twilio or Amazon End User Messaging before enabling these SMS settings. Without setting up one of these services, the SMS options will remain disabled.

### Twilio incoming webhook

When you save Twilio credentials, FluentCRM also generates a unique **SMS Incoming Webhook URL** at the bottom of the SMS Settings page. 

Paste this URL into your Twilio messaging service's **A message comes in** webhook field if you want FluentCRM to receive replies and inbound messages from contacts. See the full walkthrough on the [Twilio SMS Integration](/twilio-integration) page.

### SMS Smart Codes

You can personalise every SMS just like an email. Click the **{ }** smart-code icon next to the message field to insert tokens like `##contact.first_name##`, `##contact.email##`, custom field values, or any other smart code FluentCRM ships with. The full token list is documented at [Merge Codes / Smart Codes Usage](/merge-codes-smart-codes-usage).


## SMS Campaigns: Creating and Managing your SMS

The **SMS Campaigns** area is your central hub for creating, scheduling, and managing targeted SMS broadcasts. This feature allows you to reach specific segments of your audience instantly with time-sensitive information, special offers, or critical updates.

### Overview

Open the **Messaging** dropdown on the FluentCRM top menu bar and select **SMS Campaigns** — or, once you're inside Messaging, click the **SMS** tab next to **Inbox**, **Templates**, and **Activities**. 

Here, you will find a dashboard listing all your drafted, scheduled, and completed SMS campaigns.

![Opening SMS Campaigns from the Messaging dropdown](/sms-module/configure-sms-module/sms-campaign-2.webp)

### Creating a new SMS campaign with FluentCRM

To start a new campaign, click the **Create New Campaign** button on the main SMS Campaigns dashboard. The process involves three guided steps: **Start**, **Recipients**, and **Review**. While you work through the wizard, a **progress indicator** (for example **1/3 Completed**) shows how far you are.

![Create a new SMS Campaign](/sms-module/configure-sms-module/create-new-campaign-3.webp)

#### Step 1: Start (SMS title and body)

The first screen is where you name the campaign and write the message. The layout is grouped into **SMS Title** and **SMS Body**, with live feedback as you type.

* **SMS Title — Name your campaign:** Enter an internal name only you see on the dashboard (for example, “Black Friday offer” or “Offer”). It is not the text subscribers receive.

* **SMS Body — Compose Message:** If you've saved a reusable message before, pick it from the **Template** dropdown to prefill the body, otherwise leave it on **Select a template** and write from scratch. 

As you type into **Compose Message**, FluentCRM shows a **character counter** (for example **0 / 1600**) and an **SMS segment counter** (for example **0/10 SMS messages**) so you can see length and how many SMS units the send will consume. 

An info note on the screen reminds you that the **standard SMS limit is 160 characters** and longer messages are split automatically.

You can still insert personalisation tokens from the **{ }** smart-code control next to the message field when it is available; see [SMS Smart Codes](#sms-smart-codes) above.

When you are ready, click **Create & Continue to next step [Recipients]** to open the **Recipients** step.

![SMS campaign step 1 — title, body, and segment counters](/sms-module/configure-sms-module/sms-campaign-step1-compose.webp)

#### Step 2: Recipients (selecting subscribers)

In this step, you define your target audience under **Select Subscribers**. Choose between two tabs at the top of the panel:

* **FluentCRM contacts** — target existing subscribers using lists, tags, segments, or filters.
* **One-time recipients** — message phone numbers that aren't in your CRM yet.

**FluentCRM contacts**: With this tab selected, you have three methods for selecting subscribers:

* **By List & Tag:** Select **Included Contacts** based on specific lists and tags. You can also choose contacts to **exclude**, which removes specific lists or tags from your selection. To add another row, click **+ Add More**.

![Recipients](/sms-module/configure-sms-module/by-list-and-tag-5.webp)

* **By Dynamic Segment:** If you have pre-configured dynamic segments in FluentCRM, select one from the dropdown. The system targets all contacts currently matching that segment’s criteria.

![Dynamic Segment](/sms-module/configure-sms-module/by-dynamic-segment-6.webp)

* **By Advanced Filter:** Click **+ Add** to build conditional filters from **Contact**, **Contact Segment**, **Contact Activities**, **FluentCommunity**, or **FluentAffiliate** data — target subscribers by properties, actions, or engagement. Click **Filter** to apply your conditions, or **Clear Filters** to start over.

![Advanced Filter](/sms-module/configure-sms-module/by-advanced-filter-7.webp)

As you define your criteria, the system shows a live count (for example, “174 contacts found”) to validate your selection.

## One-time Recipients

Use **One-time recipients** to send messages to phone numbers that aren't saved as contacts in FluentCRM. This is useful when you have a new list of numbers from a partner, an event, or another source.

1. Select a **Default country** so FluentCRM can normalize numbers entered without a country code.

2. Add the numbers, either by clicking **Choose CSV** under **Upload CSV** and then **Upload**, or by switching to **Paste** and pasting one number per line into the text box.

>[!Note]
> **Use this for numbers that aren't in your CRM yet.** If a number already belongs to a contact, the message still goes out — but this route skips your usual list and tag targeting, so that person can easily get it twice. Reach existing contacts through **FluentCRM contacts** instead.
>
> Anyone who has opted out is skipped for you, and counted under **Contact Opt-outs** or **Conversation Opt-outs**.

![Uploading one-time recipients by CSV](/sms-module/configure-sms-module/one-time-receiptpent-9.webp)

![Pasting one-time recipient numbers](/sms-module/configure-sms-module/one-time-by-number-10.webp)

3. Click **Save Pasted Recipients** or complete the CSV upload. FluentCRM will process the numbers and show the counts for **Parsed, Duplicate, Invalid, Contact Opt-outs, and Conversation Opt-outs**. It will also show the total number of **Accepted Recipients** and the **Batch ID**. Click **View Recipients** to review the recipients individually.
4. Check **I confirm these recipients consented to receive messages through this channel**. This is required before you can continue, since one-time recipients sit outside your normal FluentCRM opt-in lists.

![Accepted one-time recipients with the consent checkbox](/sms-module/configure-sms-module/one-time-by-number-11.webp)

>[!Warning]
>Only add one-time recipients who have actually agreed to receive messages from you. SMS regulations (such as TCPA in the US) hold you responsible for consent, regardless of where the number came from.

When you are satisfied, click **Continue** (or **Continue to next step [Review]**) to go to the next step (**Review**).

#### Step 3: Review & broadcast (scheduling and sending)

This is the final step where you verify campaign details and set the broadcast time.

* **Review summary:** The page summarizes total **Recipients** and the **SMS Body** — for one-time recipients, it also shows whether **Consent confirmed**. Use the **Edit Recipients** and **Edit Body** links to jump back and make changes. A live **SMS Preview** panel on the right mirrors exactly what the contact will see.
* **Scheduling options:** Under **Broadcast / schedule this SMS campaign now**, choose when and how messages are delivered:
  * **Send the SMS messages right now:** Sends the campaign immediately when you confirm.
  * **Schedule the SMS messages:** Sets a single date and time for the broadcast using the available fields.

>[!Warning]
>FluentCRM does not apply sending rate limits. Confirm your SMS provider account and messaging tier can handle the volume of this campaign before you send it — exceeding your provider's limits can get messages throttled or your account flagged.

When you have chosen your scheduling method and verified recipients and content, click **Send SMS messages now** or **Schedule this campaign** to finalize. For a one-time-recipients campaign, the same screen adds a **One-time recipients / Consent confirmed** line above the SMS Body so you can double-check consent before sending.

![Review and broadcast step](/sms-module/configure-sms-module/receipients-8.webp)

### Cancelling a scheduled campaign

Once you schedule a campaign, opening it again shows a status page with the **Campaign Status**, **Scheduled on** timestamp, **Estimated Contacts**, and the same **SMS Preview**. If you need to stop it before it goes out, click **Cancel Schedule**.

![Cancelling a scheduled SMS campaign](/sms-module/configure-sms-module/cancel-schedule-13.webp)

### Key Features and Data Columns

The campaigns dashboard shows each broadcast with:

* **Title:** Internal name of your campaign. A campaign still missing required details carries a **Setup** tag next to its title.
* **Message:** Short snippet of the message content.
* **Status:** Current status — **Draft**, **Pending Scheduled**, **Processing**, or **Archived**.
* **Channel:** The messaging channel used to send it (**SMS**, or **WhatsApp** once you enable that module too).
* **Labels:** Organizational labels applied to the campaign.

Click the **⋮** menu on any row for **Reports**, **Export**, **Duplicate**, and **Delete** — see [SMS Campaign Report](/sms-campaign-report) for what each of those does.

![Feature and Data Columns](/sms-module/configure-sms-module/data-colum-9.webp)

## SMS Activities: Monitoring Delivery and Status

The **Activities** section is a centralized log of every SMS sent through your FluentCRM account, including messages from campaigns and automations. Use it to monitor delivery, troubleshoot, and audit your communication history.

### Overview

Open the **Messaging** dropdown and select **Activities** to see a reporting view into every transaction handled by the SMS Module, so you can confirm delivery and spot failures quickly.

![Opening SMS Activities from the Messaging dropdown](/sms-module/configure-sms-module/all-sms-10.webp)

### Key Data Points for Tracking

The activity log includes:

* **Contact:** The subscriber who received the message.
* **Message:** Full SMS content sent to the contact.
* **Source:** How the message was triggered (for example, a campaign broadcast or an automation).
* **Type:** **Campaign**, **Automation**, **Custom SMS** (sent directly from a contact profile), or **Incoming** (a reply from the contact).
* **Channel:** The channel it went through (**SMS**, or **WhatsApp** once enabled).
* **Status:** Delivery status (for example, **Success**, **Failed**, or **Pending**) as reported by your provider (**[Twilio](/twilio-integration)**, **Amazon End User Messaging**, etc.).
* **Actions:** Click **Resend** to retry a failed message.

Use the filter icon next to the search bar to narrow the list by **Type** or **SMS Status**.

![Key Data Point Tracking](/sms-module/configure-sms-module/sms-activities-11.webp)

## Send SMS from individual contacts

In addition to campaigns and automations, you can send direct, one-to-one messages from a contact’s profile.

### Accessing the Direct SMS Feature

1. Open **Contacts** from the FluentCRM dashboard and select the contact.
2. On the contact’s details page (Overview, Emails, Purchases, etc.), open the **Message** tab.

### Using the Direct Messaging Interface

The **Message** tab has two views, toggled at the top right: **Chat** and **History**.

**Chat** is a chat-style thread of every message sent to and received from the contact. Type your message in the field labeled **Type a message and press Enter to send**, then press **Enter** or click **Send**. A character count (for example, `0/160 · 0 msg`) helps you stay within SMS length limits.

![Individual SMS Send](/sms-module/configure-sms-module/individualy-sms-send-12.webp)

**History** switches to a table view you can filter by **Type** — **All Types**, **Campaign**, **Automation**, **Custom SMS**, or **Incoming** — with **Message**, **Direction** (Outbound/Inbound), **Source**, **Status**, and **Time** columns for every message on record.

![Viewing message history in table](/sms-module/configure-sms-module/viewing-in-table-13.webp)

Messages you send from this tab are logged under the **Custom SMS** type.

To build full workflows that include SMS, start with [Introduction to FluentCRM Automation](/introduction-to-fluentcrm-automation).

That covers the core SMS Module setup and usage.
