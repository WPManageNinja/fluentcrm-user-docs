---
title: "Contact Message Tab"
slug: "contact-message-tab"
category: "messaging"
order: 2
---

# Contact Message Tab

Every contact profile has a **Message** tab holding their full SMS and WhatsApp history — and a composer for messaging them right there, without leaving the record you're already looking at.

>[!Note]
> This feature requires **FluentCRM Pro**. [See what's included →](/how-to-install-upgrade-and-activate-license)

The [Unified Inbox](/unified-inbox) is where you work through conversations. This tab is the opposite view: you're already looking at one person, and you want their messaging history in the same place as their tags, lists, and purchases.

## Opening the Tab

Go to **FluentCRM → Contacts**, open a contact, and click **Message** in the row of tabs beneath their details.

The tab appears once the [Messaging module is enabled](/messaging-overview) and at least one channel is active.

## Choosing a Channel

**SMS** and **WhatsApp** buttons sit at the top of the tab. Each channel has its own conversation, its own history, and its own consent status — switching between them switches everything below.

Only channels you've switched on appear here. On a WhatsApp-only site there's no SMS button to choose.

## Chat View

**Chat** is the default: the conversation as the contact sees it, oldest to newest, split by day.

![Contact profile Message tab in Chat view with the WhatsApp conversation, status dropdown, and No Active Session notice](/messaging/contact-message-tab/message-tab-chat-1.webp)

Messages you sent from a template carry a **TEMPLATE** badge, so you can tell a broadcast apart from something typed by hand. Each outgoing message shows its delivery state — a tick when it landed, a red icon when it didn't.

Above the conversation you'll find:

- **The contact's consent status:** A dropdown set to **Subscribed**, **Unsubscribed**, or **Pending**. Change it here when someone asks you to stop by phone or email rather than by replying — contacts who reply `STOP` on WhatsApp are unsubscribed automatically, so you'll usually find this already updated for you. See [how contacts opt themselves out](/whatsapp-activities#how-contacts-opt-themselves-out).
- **Send Template:** Send an approved template. See [WhatsApp Templates](/whatsapp-templates).
- **Refresh:** Pull the latest messages.
- **Expand:** Make the conversation taller for long histories.

>[!Note]
> A fourth status, **Bounced**, can appear on the badge but isn't in the dropdown. FluentCRM sets it when the number can't be reached, so it isn't yours to choose.

### The Session Notice

On WhatsApp, a notice below the conversation tells you what you're allowed to send right now:

> **No Active Session** — Only template messages can be sent

That's WhatsApp's 24-hour rule. When a contact messages you, a 24-hour window opens and you can reply with any free-form text. Once it closes, only an approved template gets through — so the composer gives way to **Send Template** until the contact writes again.

SMS has no such rule. You can message an SMS contact whenever you like, as long as they're subscribed.

## History View

Switch to **History** for the same messages as a table — easier to scan when you're auditing rather than reading.

![Contact profile Message tab in History view showing a table of messages with direction, status, and date columns](/messaging/contact-message-tab/message-tab-history-2.webp)

Each row shows:

- **Message:** The message body, with a **Template** tag when it came from one.
- **Direction:** **Out** for messages you sent, **In** for the contact's replies.
- **Status:** `SENT`, `DELIVERED`, `READ`, `FAILED`, or `PENDING`.
- **Date:** When it was sent.

Use the dropdown above the table to narrow the list to **Campaign** messages or **Custom** ones — a quick way to separate broadcasts from one-to-one conversations.

## What's Next?

- [Work through every conversation in the Unified Inbox](/unified-inbox)
- [Send a WhatsApp campaign](/whatsapp-campaign)
- [Review delivery results across all contacts](/whatsapp-activities)
