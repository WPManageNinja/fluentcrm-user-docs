---
title: "WhatsApp Activities and Contact Conversations"
slug: "whatsapp-activities"
category: "whatsapp-module"
order: 6
---

# WhatsApp Activities and Contact Conversations

Every WhatsApp message FluentCRM sends is logged, in two places. **Activities** gives you the site-wide view for spotting failures, and each contact's **WhatsApp** tab gives you the conversation view for a single person.

>[!Note]
> This feature requires **FluentCRM Pro**. [See what's included →](/how-to-install-upgrade-and-activate-license)

## WhatsApp Activities

Go to **Messaging → Activities** in the FluentCRM top menu, or open the **Activities** tab from the WhatsApp Campaigns screen.

![WhatsApp Activities log listing contacts, messages, source, type, status, and Resend actions](/whatsapp-module/whatsapp-activities/activities-log-1.webp)

Each row shows:

- **Contact:** Who received the message.
- **Message:** The message content.
- **Source:** What sent it — the campaign or automation name.
- **Type:** Where it came from, such as **Campaign**.
- **Status:** **Pass** for delivered, **Failed** for rejected.
- **Channel:** Always **WhatsApp** in this log.
- **Actions:** A **Resend** button to retry.

Use the search box and filter icon to narrow the log down.

>[!Tip]
> A cluster of **Failed** rows right after a campaign usually means a provider problem, not a per-contact one. Check that your access token hasn't expired and that the template you sent is still approved.

## Retrying a Failed Message

Click **Resend** on any failed row to try again. Fix the underlying cause first — resending against an expired token or a rejected template just fails a second time.

## The Contact WhatsApp Tab

Open any contact from **Contacts**, then select the **WhatsApp** tab alongside **Overview**, **Emails**, and **Purchases**.

The tab holds three things:

- **WhatsApp Stats:** Counts for **All**, **Sent**, **Received**, **Campaign**, and **Read**. Click **View as Table** for a tabular breakdown.
- **Conversation thread:** The full back-and-forth with this contact, in chat form.
- **Send Template:** Sends an approved template directly to this contact.

### Session Status

A banner in the stats panel tells you what you can send right now:

- **No Active Session** — *Only template messages can be sent.* The contact hasn't messaged you in the last 24 hours.
- An active session means free-form replies work until the window closes.

This is the [24-hour rule](/whatsapp-templates) applied to one conversation.

## WhatsApp Subscription Status

Each contact carries a WhatsApp status independent of their email subscription status, shown as a badge at the top of the profile — for example, **WA Subscribed**.

Change it from the **WhatsApp Status** dropdown on that badge, visible in the screenshot. A contact who opts out of WhatsApp keeps receiving your emails; the two channels are tracked separately.

>[!Note]
> Contacts who are not WhatsApp-subscribed are skipped when a campaign or message sends, which is why a campaign's final recipient count can come in below the count shown at the recipients step.

![Contact profile WhatsApp tab with the conversation thread, WhatsApp Stats, and WA Subscribed status](/whatsapp-module/whatsapp-activities/contact-whatsapp-tab-2.webp)
