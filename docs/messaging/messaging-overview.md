---
title: "Messaging Overview"
slug: "messaging-overview"
category: "messaging"
order: 0
---

# Messaging Overview

Messaging lets you reach contacts on SMS and WhatsApp from the same place you already send email — campaigns, automations, and a shared inbox your team can reply from.

>[!Note]
> This feature requires **FluentCRM Pro**. [See what's included →](/how-to-install-upgrade-and-activate-license)

Email goes one way. Messaging goes both ways: a contact can reply, and their reply lands back in FluentCRM against their contact record. That changes what you can do with it — order updates people actually read, appointment reminders they can answer, and a real conversation when they have a question.

SMS and WhatsApp share one module, one inbox, and one activity log. You can run either channel on its own, or both together.

## Enabling the Messaging Module

Go to **FluentCRM → Settings → Messaging** and turn on **Enable Message Module**.

![FluentCRM Settings Messaging page with the Enable Message Module toggle switched off](/messaging/messaging-overview/enable-message-module-1.webp)

Two tabs appear once the module is on — **SMS** and **WhatsApp**. Each has its own switch and its own provider fields, so turning on the module doesn't commit you to both channels.

![Messaging settings with the module enabled, showing the SMS and WhatsApp tabs](/messaging/messaging-overview/channel-tabs-2.webp)

The module on its own doesn't send anything. Each channel needs a provider connected first:

- **SMS:** Twilio or Amazon End User Messaging. Start with [Configure SMS Module](/configure-sms-module).
- **WhatsApp:** Meta Cloud API or Twilio WhatsApp. Start with [Configure WhatsApp Module](/configure-whatsapp-module).

## What You Get

Once a channel is active, **Messaging** appears in the top navigation with everything the module adds.

![FluentCRM top navigation with the Messaging dropdown open showing Inbox, SMS Campaigns, WhatsApp Campaigns, Templates, and Activities](/messaging/messaging-overview/messaging-menu-3.webp)

- **Inbox:** Every SMS and WhatsApp conversation in one screen, where you read and reply. See the [Unified Inbox guide](/unified-inbox).
- **SMS Campaigns:** One-off text broadcasts to a segment of your contacts.
- **WhatsApp Campaigns:** The same, for WhatsApp. See [WhatsApp Campaign](/whatsapp-campaign).
- **Templates:** Reusable message bodies for both channels.
- **Activities:** A log of every message sent or scheduled, across both channels.

Only channels you've switched on appear here. A site running WhatsApp alone never sees an SMS Campaigns entry.

### Campaigns

A campaign sends one message to many contacts at once. You pick the audience the same way you do for email — by list and tag, by dynamic segment, or with the advanced filter — then review and send or schedule it.

![WhatsApp Campaigns list showing campaign titles, message previews, status, and channel columns](/messaging/messaging-overview/whatsapp-campaigns-4.webp)

### Templates

Templates hold message bodies you reuse. Both channels share one screen, with a channel filter to narrow it down.

The two channels treat templates differently. An SMS template is just saved text — write it and use it. A WhatsApp template has to be approved by your provider before it can be sent, so it carries a category, a language, and an approval status. [WhatsApp Templates](/whatsapp-templates) covers that side.

![Templates screen listing WhatsApp templates with provider, category, language, status, and variables columns](/messaging/messaging-overview/templates-5.webp)

### Activities

Activities is the log of everything the module has sent. Filter it by channel, search it, and resend anything that failed.

Each row shows the contact, the message, its **Source** (the campaign it came from, or `n/a` for a one-to-one message), its **Type**, its **Status**, and the **Channel** it went out on.

![Messaging Activities table with All, WhatsApp, and SMS filters and rows showing status and resend actions](/messaging/messaging-overview/activities-6.webp)

## Messaging Elsewhere in FluentCRM

The module also shows up outside the Messaging menu:

- **Automations:** Send an SMS or WhatsApp message as an automation action, so a message can follow a purchase, a form submission, or a tag.
- **Contact profiles:** A **Message** tab on each contact holds their conversation history and lets you message them directly. See the [Contact Message Tab guide](/contact-message-tab).
- **Segmentation:** **SMS Status** and **WhatsApp Status** rows in the advanced filter let you build segments around who you're actually able to reach.

## Consent and Opt-Outs

Each channel tracks consent on its own, separately from email. A contact who opts out of WhatsApp keeps getting your emails, and a contact who has never been messaged is treated as reachable.

A conversation carries one of four statuses: **Subscribed**, **Unsubscribed**, **Pending**, or **Bounced**. Anyone who isn't subscribed on a channel is skipped when a campaign sends on it — which is why a campaign's final count can land below the estimate you saw at the recipients step.

Contacts set this themselves by replying. **STOP** opts them out and **START** opts them back in — and FluentCRM understands a range of alternatives for both, so a contact doesn't have to guess the magic word. On WhatsApp an opt-out gets an automatic confirmation reply; see [the full keyword list](/whatsapp-activities#how-contacts-opt-themselves-out).

You can also change a contact's status by hand from the [Unified Inbox](/unified-inbox) or their [Message tab](/contact-message-tab).

>[!Warning]
> Consent is your responsibility, not the provider's. Only message people who agreed to hear from you on that channel — WhatsApp in particular will restrict a number that collects blocks and reports.

## What's Next?

- [Set up the Unified Inbox and start replying](/unified-inbox)
- [Message a single contact from their profile](/contact-message-tab)
- [Configure the WhatsApp module](/configure-whatsapp-module)
- [Configure the SMS module](/configure-sms-module)
