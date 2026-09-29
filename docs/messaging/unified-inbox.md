---
title: "Unified Inbox"
slug: "unified-inbox"
category: "messaging"
order: 1
---

# Unified Inbox

Every SMS and WhatsApp conversation your business is having ends up in the Unified Inbox. One screen, both channels, everyone you've ever messaged — so you can work through the day's replies without hopping between contact records to find them.

>[!Note]
> This feature requires **FluentCRM Pro**. [See what's included →](/how-to-install-upgrade-and-activate-license)

Sending is the easy half. The moment you start messaging people they start messaging back, and those replies need somewhere to land where you'll actually see them. That's what this screen is for. Someone confirms an appointment, someone else wants to know where their order is, a third person just types STOP — it all arrives here, already matched to the right contact.

## Opening the Inbox

Go to **FluentCRM → Messaging → Inbox**.

![FluentCRM top navigation with the Messaging dropdown open and Inbox highlighted](/messaging/unified-inbox/messaging-menu-1.webp)

## How the Screen Is Laid Out

The inbox has three panes, left to right: your conversations, the open thread, and the contact behind it.

![Unified Inbox with the conversation list, an open WhatsApp thread, and the contact panel](/messaging/unified-inbox/inbox-panes-2.webp)

### Conversation List

Every conversation, newest activity first. Each row shows who it's with, when it last moved, and a preview of the most recent message. A small badge on the avatar tells you the channel — green for WhatsApp, blue for SMS — and a red warning icon flags a conversation whose last message failed to send.

To narrow the list:

- **Search conversations:** Find a thread by name, phone number, or email.
- **All / SMS / WhatsApp:** Show one channel or both.
- **Unread only:** Hide everything you've already answered.

Beside the search box sits a **+** button. That's how you start a conversation from scratch — with a contact, or with a number that isn't in your CRM at all. See [starting a new conversation](#starting-a-new-conversation) below.

### The Thread

The middle pane is the conversation itself, oldest to newest, split by day so you can see when things happened. Your messages sit on one side, the contact's on the other.

Each message you send carries its delivery state. When one fails, the thread says so in place — and tells you why, rather than leaving you to guess:

> No template selected and the contact has not messaged within 24 hours — Meta only accepts template messages outside that window. Select an approved template for this campaign.

That failure is the single most common one on WhatsApp, and it's worth understanding before it surprises you.

>[!Note]
> **The 24-hour rule (WhatsApp only):** when a contact messages you, a 24-hour window opens and you can reply with any free-form text. Each new message from them resets it. Once the window closes, only an approved template reaches them. SMS has no such rule — you can reply any time.

Use **Send Template** in the thread header when the window has closed. FluentCRM also offers the button directly on the locked-window notice, so you don't have to hunt for it.

### Contact Panel

The right pane is who you're talking to: their name, email, phone, the channel this conversation runs on, and their consent **Status** for that channel. Change the status straight from the dropdown here.

Below that you'll find their **Lists** and **Tags** — both editable in place, so you can tag someone the moment a conversation tells you something useful — and an **Activity** summary with the message count and last activity time.

## Replying

Type in the composer at the bottom of the thread and send.

Two things worth knowing:

- **Enter adds a new line. Ctrl+Enter (Cmd+Enter on Mac) sends.** Multi-line replies are the normal case here, so the keys work the opposite way round to most chat apps.
- **WhatsApp threads get a formatting toolbar** for bold, italic, strikethrough, and monospace. It inserts the plain markers WhatsApp itself understands — `*bold*`, `_italic_`, `~strikethrough~` — so what you see is what arrives on the recipient's phone.

The inbox refreshes itself every 20 seconds while the tab is open, so new replies appear without a reload.

## Starting a New Conversation

Click the **+** button beside the search box to message someone you haven't got a conversation with yet — including a number that isn't in your contacts.

![New conversation panel with a phone number search, SMS and WhatsApp channel toggle, and a Not in your contacts result](/messaging/unified-inbox/new-conversation-3.webp)

Type a phone number into the search box. FluentCRM lists any existing chats and contacts that match it, and if the number is new to you it shows up on its own marked **Not in your contacts** — you can still pick it and message it. Choose **SMS** or **WhatsApp**, then write your first message.

The usual rules still apply: consent is checked, and a WhatsApp message to someone outside the 24-hour window needs an approved template.

## Messages From Numbers You Don't Know

Someone can message your business number without being in your CRM. FluentCRM keeps those messages instead of discarding them: the conversation opens as normal and the contact panel reads **Not in your contacts**.

When it's someone worth keeping, click **Create contact** in that panel. FluentCRM prefills the phone number, creates the contact, and links the existing conversation to them — the history you've already exchanged stays attached.

## What's Next?

- [Message a single contact from their profile](/contact-message-tab)
- [Send a WhatsApp campaign](/whatsapp-campaign)
- [Build reusable WhatsApp templates](/whatsapp-templates)
- [Review everything the module has sent](/whatsapp-activities)
