---
title: "WhatsApp Templates"
slug: "whatsapp-templates"
category: "whatsapp-module"
order: 4
---

# WhatsApp Templates

A WhatsApp template is a pre-written message that your provider has reviewed and approved. Templates exist because WhatsApp doesn't let businesses message people freely outside a 24-hour reply window — an approved template is the only thing that reaches a contact.

>[!Note]
> This feature requires **FluentCRM Pro**. [See what's included →](/how-to-install-upgrade-and-activate-license)

That makes templates the backbone of almost every WhatsApp campaign you'll run.

>[!Note]
> **The 24-hour rule:** when a contact messages or calls you, a 24-hour window opens — Meta calls it the *customer service window* — and you can reply with any free-form text. Each new message or call from that contact resets the timer to a fresh 24 hours. Once the window closes, free-form messages stop going through and only approved templates reach them.
>
> Since most of your contacts have never messaged you first, plan on templates for anything you initiate. Templates don't override opt-in either — Meta requires contacts to have opted in before you message them at all.

## Where to Find Templates

Go to **Messaging → WhatsApp Templates** in the FluentCRM top menu, or open the **Templates** tab from the WhatsApp Campaigns screen.

The list shows each template's **Provider**, **Category**, **Language**, **Status**, and **Variables**, along with a **Preview**.

![WhatsApp Templates dashboard with Sync Templates and Create Template buttons](/whatsapp-module/whatsapp-templates/templates-dashboard-1.webp)

The current provider appears just below the page title, so you can confirm which account these templates belong to.

## Syncing Existing Templates

If you already approved templates directly with Meta or Twilio, click **Sync Templates** to pull them into FluentCRM. Nothing is created — this just fetches what your provider already has.

Sync again whenever a template's approval status changes on the provider side.

## Creating a Template

Click **Create Template** to build one and submit it for review.

![Create Template screen with name, category, language, content fields, and live preview](/whatsapp-module/whatsapp-templates/create-template-2.webp)

### Template Name and Language

- **Name your template:** Lowercase letters, numbers, and underscores only. This is the name your provider's reviewers see.
- **Category:** What the template is for — for example, **Marketing — Promotions, offers, updates**. Pick honestly; the wrong category is a common rejection reason.
- **Language:** The language the content is written in.

### Content

- **Header** *(optional)*: A short bold line above the message, up to 60 characters.
- **Body** *(required)*: The main message, up to 1024 characters. Format with `*bold*`, `_italic_`, and `~strikethrough~`.
- **Footer** *(optional)*: Small grey text below the message, up to 60 characters.

A live **Template preview** on the right shows the message as it will appear in WhatsApp.

### Variables

Use numbered placeholders — <code v-pre>{{1}}</code>, <code v-pre>{{2}}</code>, and so on — for anything that changes per contact. FluentCRM fills them from contact data when the message sends, so one approved template covers your whole list.

Click the **{x}** button in the body toolbar to insert one.

### Buttons

Add up to three buttons per template.

- **Add Button:** A standard call-to-action button.
- **Add Unsubscribe Button:** Adds a "Stop messages" button so contacts can opt out in one tap.

>[!Tip]
> Add an unsubscribe button to marketing templates. It gives people a clean way out, which protects your number's quality rating — and WhatsApp throttles senders that collect blocks and reports.

### Submitting

Click **Submit for Review** to send the template to your provider.

Approval usually takes minutes but can run longer. The template's **Status** updates in the list once your provider decides; click **Sync Templates** if it looks stale.

>[!Warning]
> You can't send with a template until it's approved. Submit templates ahead of any campaign you're planning rather than the day you want to send.

## Using Templates in a Campaign

When composing a WhatsApp campaign, set **Message Type** to **Approved Template (recommended)** and pick your template. This is the option that reaches your full audience — see [WhatsApp Campaign](/whatsapp-campaign) for the full flow.
