---
title: "WhatsApp Campaign"
slug: "whatsapp-campaign"
category: "whatsapp-module"
order: 5
---

# WhatsApp Campaign

A WhatsApp campaign sends the same message out to a whole group of contacts at once — a sale you want people to hear about, an update on their order, a nudge before an event you're running. Building one takes three steps: write the message, choose who gets it, then review it and send.

>[!Note]
> This feature requires **FluentCRM Pro**. [See what's included →](/how-to-install-upgrade-and-activate-license)

Before you start, make sure the [WhatsApp module is configured](/configure-whatsapp-module) and you have at least one [approved template](/whatsapp-templates).

## Finding Your Campaigns

Go to **FluentCRM → Messaging → WhatsApp Campaigns**.

The list shows every campaign with its title, a preview of the message, its status, and its channel. Search by title, filter the list, or use **More Actions** for bulk operations.

![WhatsApp Campaigns list with titles, message previews, status badges, and the Create New Campaign button](/whatsapp-module/whatsapp-campaign/campaigns-list-1.webp)

Click **+ Create New Campaign** to start.

## Step 1: Compose the Message

Give the campaign a name in **Name your campaign**. This is internal — only you see it.

![WhatsApp campaign compose step with message type, template selection, variable mapping, and a live message preview](/whatsapp-module/whatsapp-campaign/compose-message-2.webp)

Then pick a **Message Type**:

- **Approved Template (recommended):** A template your provider has already approved. This reaches everyone.
- **Free-form Text:** Plain text you write here. This only reaches contacts who messaged you within the last 24 hours — everyone else fails.

Free-form is almost never right for a campaign. Most of the people on your list haven't messaged you today, so a free-form broadcast fails for nearly all of them.

Choosing **Approved Template** shows only templates approved for your current provider. Select one and FluentCRM shows its variables under **Variable Mapping**.

### Mapping Variables

Each numbered placeholder in the template — <code v-pre>{{1}}</code>, <code v-pre>{{2}}</code> — needs a value. Map it to a contact field like **First Name**, or type a fixed value that's the same for everyone.

>[!Warning]
> A variable that renders empty fails the send for that contact. Add a fallback with the `|` character — <code v-pre>{{contact.first_name|there}}</code> — so a contact with no first name gets "there" instead of a failed message.

The **Message preview** on the right renders the finished message as you work.

Click **Create & Continue to next step [Recipients]**.

## Step 2: Select Recipients

Choose between two kinds of audience.

### FluentCRM Contacts

Send to people already in your CRM. Three ways to pick them:

- **By List & Tag:** Choose lists and tags to include. Add multiple rows to combine them.
- **By Dynamic Segment:** Use a saved segment.
- **By Advanced Filter:** Build a detailed condition set.

**Excluded Contacts** works the same way in reverse — anyone matching is subtracted from your selection. Useful for holding back a group who just heard from you.

FluentCRM shows a running count of matching contacts at the bottom.

![Select Subscribers step with FluentCRM contacts selected, showing included and excluded list and tag rows](/whatsapp-module/whatsapp-campaign/select-subscribers-3.webp)

>[!Note]
> The count here is an estimate. Contacts who aren't WhatsApp-subscribed are skipped at send time, so the final delivered count can come in lower.

### One-Time Recipients

Send to a list of numbers that aren't in your CRM and don't need to be — a one-off notice to event attendees, say.

Set the **Default country** first. It's applied to any number entered without a country code.

![One-time recipients tab with the default country selector and the Upload CSV option](/whatsapp-module/whatsapp-campaign/one-time-upload-4.webp)

Add numbers either way:

- **Upload CSV:** Click **Choose CSV**, pick your file, then click **Upload**.
- **Paste:** Paste numbers straight into the box and click **Save pasted recipients**.

FluentCRM then reports what it made of your list: how many it **Parsed**, plus counts for **Duplicate**, **Invalid**, **Contact opt-outs**, and **Conversation opt-outs**. Anything in those last four is dropped before sending.

![One-time recipients with pasted numbers, parsed counts, and the consent confirmation checkbox](/whatsapp-module/whatsapp-campaign/one-time-paste-5.webp)

>[!Note]
> **Use this for numbers that aren't in your CRM yet.** If a number already belongs to a contact, the message still goes out — but this route skips your usual list and tag targeting, so that person can easily get it twice. Reach existing contacts through **FluentCRM contacts** instead.
>
> Anyone who has opted out is skipped for you, and counted under **Contact opt-outs** or **Conversation opt-outs**.

Finally, tick **I confirm these recipients consented to receive messages through this channel**. You can't continue without it.

>[!Warning]
> Your uploaded file is temporary — FluentCRM keeps the recipients, not the file. Hold on to your own copy if you need it later.

Click **Continue to next step [Review]**.

## Step 3: Review and Send

The review screen shows the recipient total, the message body, and a phone-style preview. **Edit Recipients** and **Edit Body** take you back if something's wrong.

![Campaign review step with recipient total, message body, send timing options, and the rate limit notice](/whatsapp-module/whatsapp-campaign/review-send-6.webp)

Under **Broadcast/Schedule This WhatsApp Campaign Now**, choose when it goes:

- **Send the WhatsApp messages right now**
- **Schedule the WhatsApp messages** — pick a date and time.

>[!Warning]
> **Check your WhatsApp sending limit before a large send.** FluentCRM applies no rate limits of its own, but Meta caps how many **unique contacts** you can message in a rolling 24 hours — **250** for a new business portfolio, **2,000** once you verify your business, then **10,000**, **100,000** and unlimited as Meta scales you up. The cap is shared by every phone number in your portfolio, and replies inside a contact's 24-hour window don't count toward it. Anything beyond the cap fails, so split a large list across several days.
>
> This limit is Meta's, not FluentCRM's — FluentCRM can't raise it. For current figures and how to move up a level, see [Meta's Messaging Limits documentation](https://developers.facebook.com/docs/whatsapp/messaging-limits).

Click **Send WhatsApp messages Now** to release the campaign.

>[!Tip]
> Close your promotional messages with a line like "Reply STOP anytime if you no longer wish to receive updates." FluentCRM picks up that reply on its own and unsubscribes them — see [how contacts opt themselves out](/whatsapp-activities#how-contacts-opt-themselves-out). Giving people an obvious way out is what keeps them from blocking your number instead.

## Watching a Campaign Send

Once it starts, the campaign opens a status screen with the **Campaign Status**, the **Scheduled on** time, and the **Estimated Contacts** count, above a preview of what's going out.

![Scheduled campaign status screen showing campaign status, scheduled time, estimated contacts, and Cancel Schedule](/whatsapp-module/whatsapp-campaign/campaign-scheduled-7.webp)

Click **Cancel Schedule** to stop a campaign that hasn't finished.

For per-contact delivery results, open **FluentCRM → Messaging → Activities**. See [WhatsApp Activities](/whatsapp-activities).

## Campaign Statuses

- **Draft:** Still being built.
- **Scheduled:** Waiting for its send time.
- **Processing:** Currently sending.
- **Archived:** Finished and removed from the active list.

## What's Next?

- [Check delivery results in Activities](/whatsapp-activities)
- [Create more templates](/whatsapp-templates)
- [Reply to the responses in the Unified Inbox](/unified-inbox)
