---
title: "WhatsApp Activities"
slug: "whatsapp-activities"
category: "whatsapp-module"
order: 6
---

# WhatsApp Activities

Activities is the record of every message FluentCRM has sent or queued — what went out, to whom, whether it arrived, and what to do when it didn't.

>[!Note]
> This feature requires **FluentCRM Pro**. [See what's included →](/how-to-install-upgrade-and-activate-license)

Campaigns tell you what you sent. Activities tells you what actually landed.

## Opening Activities

Go to **FluentCRM → Messaging → Activities**.

The screen covers both channels. Use the **All / WhatsApp / SMS** filter to show WhatsApp only, search by contact or message text, or use the filter icon for finer control.

![Messaging Activities table with channel filters and rows showing contact, message, source, type, status, and resend actions](/whatsapp-module/whatsapp-activities/activities-list-1.webp)

## Reading the Table

- **Contact:** Who the message went to. Rows with no contact record show the number alone.
- **Message:** The message body as sent.
- **Source:** The campaign it came from, or `n/a` for a one-to-one message.
- **Type:** `Campaign` for campaign sends, or `Custom SMS` for a message sent by hand or by an automation.
- **Status:** `Sent` or `Failed`.
- **Channel:** `WhatsApp` or `SMS`.

## Retrying a Failed Message

Click **Resend** on a failed row to try it again.

Fix the cause first, though, or it'll fail the same way. On WhatsApp the usual reasons are:

- **The 24-hour window has closed** and the message wasn't a template. Send an approved template instead.
- **A variable rendered empty.** Add a fallback to the template mapping, as described in [WhatsApp Campaign](/whatsapp-campaign).
- **The contact isn't WhatsApp-subscribed.** Check their status before retrying.
- **Your provider rejected it** — an expired token, your daily sending limit reached, or an unapproved template.

>[!Note]
> A campaign's delivered count often sits below the recipient estimate you saw while building it. Contacts who aren't subscribed on the channel are skipped at send time, and they're not counted as failures.

## WhatsApp Subscription Status

WhatsApp consent is tracked per conversation, separately from email. A contact who opts out of WhatsApp keeps receiving your emails, and someone you've never messaged counts as reachable.

A conversation carries one of four statuses:

- **Subscribed:** You can message them.
- **Unsubscribed:** They opted out. Campaigns and automations skip them.
- **Pending:** Consent hasn't been confirmed yet.
- **Bounced:** The number couldn't be reached. FluentCRM sets this one itself.

Change it from the **Status** dropdown in the contact panel of the [Unified Inbox](/unified-inbox), or on the [contact's Message tab](/contact-message-tab). Both offer the first three — Bounced isn't something you set by hand.

![Unified Inbox contact panel showing a contact's WhatsApp channel and Subscribed status dropdown](/whatsapp-module/whatsapp-activities/contact-status-2.webp)

## How Contacts Opt Themselves Out

Contacts don't have to contact you to stop hearing from you. They reply to your WhatsApp message with a keyword, and FluentCRM works out what they meant and updates their status — no action needed from you.

### The Keywords

| To stop messages, they reply | To start again, they reply |
|---|---|
| `stop` | `start` |
| `stopall` | `unstop` |
| `unsubscribe` | `subscribe` |
| `quit` | `resubscribe` |
| `cancel` | `resume` |
| `end` | `opt in` |
| `revoke` | `optin` |
| `opt out` | |
| `optout` | |

Any one of these on its own is enough. A contact who replies `STOP` is unsubscribed on WhatsApp immediately, and campaigns, automations, and one-to-one sends all skip them from that moment on.

### How FluentCRM Reads Them

The match is deliberately forgiving in some ways and strict in others.

- **Case and punctuation don't matter.** `STOP`, `Stop!` and `stop.` all work.
- **Filler words are ignored.** FluentCRM strips words like *please*, *me*, *my*, *send*, *sending*, *messages*, *updates*, *now*, *again*, and *thanks* before matching — so "please stop sending me messages" reads as `stop`.
- **Only short messages count as commands.** Anything longer than six words is treated as a normal message, not an instruction. That's deliberate: it stops a sentence like "I couldn't stop laughing at your last offer" from unsubscribing someone by accident.

Anything that isn't a keyword is stored as an ordinary reply and shows up in your [Unified Inbox](/unified-inbox) for you to answer.

### What the Contact Sees

An opt-out gets an automatic reply confirming it:

> You have been unsubscribed. Reply START to receive updates again.

An opt-in is applied silently — the contact's status flips back to **Subscribed** and your next campaign reaches them, with no confirmation message sent.

>[!Note]
> These keywords are the contact's route out. You can also set the status yourself from the [Unified Inbox](/unified-inbox) or the [contact's Message tab](/contact-message-tab) — useful when someone asks you to stop by phone or email instead.

>[!Tip]
> Add a "Stop messages" button to your marketing templates so people can opt out in one tap, without having to know any keyword at all. See [WhatsApp Templates](/whatsapp-templates).

## Conversation History on a Contact

Activities covers every contact at once. To see one person's history on its own — with a composer for messaging them directly — open their profile and click the **Message** tab. The [Contact Message Tab guide](/contact-message-tab) covers it.

## What's Next?

- [Reply to contacts in the Unified Inbox](/unified-inbox)
- [Message a single contact from their profile](/contact-message-tab)
- [Send another WhatsApp campaign](/whatsapp-campaign)
