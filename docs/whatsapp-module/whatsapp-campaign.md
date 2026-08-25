---
title: "WhatsApp Campaign"
slug: "whatsapp-campaign"
category: "whatsapp-module"
order: 5
---

# WhatsApp Campaign

A WhatsApp campaign broadcasts one message to a segment of your contacts — the same idea as an email campaign, delivered to a channel people actually check. The builder walks you through three steps: compose, choose recipients, then review and send.

>[!Note]
> This feature requires **FluentCRM Pro**. [See what's included →](/how-to-install-upgrade-and-activate-license)

Before you start, [enable the WhatsApp Module and connect a provider](/configure-whatsapp-module).

## Finding WhatsApp Campaigns

Open the **Messaging** dropdown in the FluentCRM top menu and choose **WhatsApp Campaigns**. The same menu holds **WhatsApp Templates** and **Activities**.

![FluentCRM top menu with the Messaging dropdown open showing WhatsApp Campaigns, Templates, and Activities](/whatsapp-module/whatsapp-campaign/messaging-menu-1.webp)

The dashboard lists every campaign with its **Title**, **Message**, **Status**, **Channel**, and **Labels**. Use **More Actions** to **Manage Labels** or **Import Campaign**.

![WhatsApp Campaigns dashboard with the Create New Campaign button and More Actions menu](/whatsapp-module/whatsapp-campaign/campaigns-dashboard-2.webp)

Click **Create New Campaign** to begin. A progress indicator in the top right — **1/3 Completed** — tracks where you are.

## Step 1: Compose the Message

Name the campaign under **WhatsApp Title → Name your campaign**. This is internal only; contacts never see it.

Then, under **WhatsApp Message**, pick a **Message Type**:

- **Approved Template (recommended):** Uses a template your provider has approved. This reaches your entire audience.
- **Free-form Text:** Plain text typed into **Compose Message**.

A **Message preview** on the right renders the message as a WhatsApp chat bubble as you type.

![WhatsApp campaign step 1 with Message Type options and the Compose Message editor](/whatsapp-module/whatsapp-campaign/campaign-compose-3.webp)

>[!Warning]
> Free-form messages only reach contacts who messaged you within the last 24 hours — Meta rejects them for everyone else. Use an [approved template](/whatsapp-templates) to reach your full audience.

Click **Create & Continue to next step [Recipients]**.

## Step 2: Select Recipients

Choose who receives the campaign using one of three tabs:

- **By List & Tag:** Pick lists and tags under **Included Contacts**, and optionally narrow the audience under **Excluded Contacts**. Excluded contacts are subtracted from your included selection. Click **Add More** to stack multiple rows.
- **By Dynamic Segment:** Target a pre-built dynamic segment. Everyone matching its criteria at send time is included.
- **By Advanced Filter:** Build conditional filters from contact activity, purchases, and other connected modules.

![WhatsApp campaign recipients step with Included and Excluded Contacts rows and a live contact count](/whatsapp-module/whatsapp-campaign/campaign-recipients-4.webp)

A live count — for example, **93 contacts found based on your selection** — updates as you refine the criteria, so you can sanity-check the audience size before moving on.

>[!Important]
> Only WhatsApp-subscribed contacts receive the campaign and messages. The count above reflects your list, tag, and filter criteria — it doesn't account for WhatsApp status, so unsubscribed contacts are still counted here and then dropped at send time.
>
> Set a contact's status from the **WhatsApp Status** dropdown on their contact profile. See [WhatsApp subscription status](/whatsapp-activities#whatsapp-subscription-status) for where to find it.

Click **Continue to next step [Review]**.

## Step 3: Review and Send

The review screen summarizes the total **Recipients** and the **WhatsApp Body**. Use **Edit Recipients** or **Edit Body** to jump back and change anything.

Under **Broadcast/Schedule This WhatsApp Campaign Now**, choose when to send:

- **Send the WhatsApp messages right now:** Goes out as soon as you confirm.
- **Schedule the WhatsApp messages:** Set a date and time for the broadcast.

![WhatsApp campaign review step with recipient count, message body, and scheduling options](/whatsapp-module/whatsapp-campaign/campaign-review-5.webp)

Click **Send WhatsApp messages Now** to finalize.

>[!Note]
> The recipient total here can be lower than the count from Step 2. Contacts without a valid WhatsApp number, or who have unsubscribed from WhatsApp, are dropped from the send.

## Watching a Campaign Send

Once sending starts, the campaign opens a progress screen showing **WhatsApp sending on process...** with a percentage bar, the **Campaign Status**, the **Scheduled on** time, and **Estimated Contacts**.

Click **Cancel Schedule** to stop a campaign that hasn't finished.

![WhatsApp campaign processing screen with a progress bar, campaign status, and Cancel Schedule button](/whatsapp-module/whatsapp-campaign/campaign-processing-6.webp)

## Campaign Statuses

- **Draft:** Still being built.
- **Scheduled:** Waiting for its send time.
- **Processing:** Currently sending.
- **Archived:** Removed from the active list.
