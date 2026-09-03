---
title: "WhatsApp Templates"
slug: "whatsapp-templates"
category: "whatsapp-module"
order: 4
---

# WhatsApp Templates

A WhatsApp template is a message your provider has reviewed and approved in advance. Templates exist because WhatsApp won't let businesses message people freely — outside a 24-hour reply window, an approved template is the only thing that reaches a contact.

>[!Note]
> This feature requires **FluentCRM Pro**. [See what's included →](/how-to-install-upgrade-and-activate-license)

That makes templates the backbone of almost every WhatsApp campaign you'll run.

>[!Note]
> **The 24-hour rule:** when a contact messages or calls you, a 24-hour window opens — Meta calls it the *customer service window* — and you can reply with any free-form text. Each new message or call from that contact resets the timer. Once the window closes, free-form messages stop going through and only approved templates reach them.
>
> Most of your contacts have never messaged you first, so plan on templates for anything you initiate. Templates don't override opt-in either — Meta requires contacts to have agreed to hear from you before you message them at all.

## Where to Find Templates

Go to **FluentCRM → Messaging → Templates**.

This screen is shared with SMS. Use the **All / SMS / WhatsApp** filter to show just one channel. Above the table, FluentCRM shows your current provider and when it last synced.

![Templates screen listing WhatsApp templates with provider, category, language, status, and variable columns](/whatsapp-module/whatsapp-templates/templates-list-1.webp)

Each row shows:

- **Template Name:** The name your provider knows it by.
- **Provider:** Which platform approved it.
- **Category:** `MARKETING`, `UTILITY`, or `AUTHENTICATION`.
- **Language:** The language the template was submitted in.
- **Status:** `APPROVED`, `PENDING`, or `REJECTED`. Only approved templates can be sent.
- **Variables:** How many placeholders the template expects.

The eye icon previews a template; the bin icon deletes it.

>[!Note]
> SMS templates appear on this same screen with `-` in the Category, Language, and Status columns. Those columns describe provider approval, and an SMS template doesn't need any — you write it and it's ready.

## Syncing Templates

Click **Sync Templates** to pull the current list and approval statuses from your provider.

Sync whenever you've created a template in Meta's dashboard instead of here, or when you're waiting on a review to clear. A template that was `PENDING` when you last looked won't flip to `APPROVED` on its own.

## Creating a Template

Click **Create Template** to build one and submit it for review.

![Template editor with channel, name, category, language, content fields, buttons, and a live preview](/whatsapp-module/whatsapp-templates/create-template-2.webp)

### Template Details

- **Channel:** Select **WhatsApp**. (The same editor creates SMS templates, which skip the review process entirely.)
- **Name your template:** Lowercase letters, numbers, and underscores only — for example `winter_offer`. This is the name Meta's reviewers see.
- **Category:** What the message is for. **Marketing** covers promotions, offers, and updates; **Utility** covers order updates and account alerts; **Authentication** covers OTP and verification codes. Categorise honestly — Meta rejects templates whose content doesn't match the category they were submitted under.
- **Language:** The language you've written the template in.

### Content

- **Header** *(optional)*: A short bold line at the top, up to 60 characters.
- **Body** *(required)*: The message itself, up to 1024 characters. The toolbar adds bold, italic, strikethrough, and monospace formatting.
- **Footer** *(optional)*: Small grey text at the bottom, up to 60 characters. A good home for "Reply STOP to unsubscribe".

### Variables

Insert placeholders with the `{x}` toolbar button. They're numbered — <code v-pre>{{1}}</code>, <code v-pre>{{2}}</code>, and so on — and you map each one to real contact data when you build the campaign.

Write your body so the variables read naturally in a sentence. Meta reviews templates by eye, and one that's mostly placeholders tends to get rejected.

### Buttons

Add up to three buttons. Click **+ Add Button**, then pick a type:

- **Quick reply:** Sends a preset reply back to you when tapped.
- **Visit website:** Opens a URL you provide.
- **Call phone:** Dials a number you provide.

While a template has no buttons yet, a second shortcut appears — **+ Add Unsubscribe Button**. It drops in a "Stop messages" quick reply so contacts can opt out in one tap.

A contact who taps **Stop messages** is unsubscribed automatically — the button sends the word back to you as a reply, and FluentCRM reads it the same way it reads a typed `STOP`. See [how contacts opt themselves out](/whatsapp-activities#how-contacts-opt-themselves-out).

>[!Tip]
> Add an unsubscribe button to marketing templates. It gives people a clean way out, which protects your number's quality rating — and WhatsApp throttles senders that collect blocks and reports.

### Submitting

The **Template preview** on the right shows how the message will look on a phone as you type. When it reads right, click **Submit for Review**.

The template arrives as `PENDING`. Meta usually answers within minutes, though it can take up to 24 hours. Click **Sync Templates** to check.

If it comes back `REJECTED`, the usual culprits are a category that doesn't match the content, promotional language in a template submitted as `UTILITY`, or a body that's mostly variables. Fix it and submit again under a new name.

## Using a Template

Templates show up wherever WhatsApp messages are sent:

- **In a campaign:** Select **Approved Template** as the message type, pick the template, and map its variables. See [WhatsApp Campaign](/whatsapp-campaign).
- **In the inbox:** Use **Send Template** to reach someone whose 24-hour window has closed. See the [Unified Inbox guide](/unified-inbox).
- **In automations:** WhatsApp actions use approved templates the same way.

Only `APPROVED` templates appear in these pickers.

## What's Next?

- [Send a WhatsApp campaign with your template](/whatsapp-campaign)
- [Reply to contacts in the Unified Inbox](/unified-inbox)
