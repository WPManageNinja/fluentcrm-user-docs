---
title: "Configure WhatsApp Module"
slug: "configure-whatsapp-module"
category: "whatsapp-module"
order: 1
---

# Configure WhatsApp Module

The **WhatsApp Module** lets you send WhatsApp messages to your contacts from campaigns and automations, right alongside your email and SMS. WhatsApp messages get opened far more often than email, which makes them a strong channel for order updates, appointment reminders, and time-sensitive offers.

>[!Note]
> This feature requires **FluentCRM Pro**. [See what's included →](/how-to-install-upgrade-and-activate-license)

## Enabling the WhatsApp Module

From your WordPress dashboard, go to **FluentCRM → Settings → Messaging → WhatsApp Settings**.

Turn on **Enable WhatsApp Module**. This unlocks WhatsApp campaigns, WhatsApp templates, the WhatsApp tab on contact profiles, and WhatsApp actions inside automations.

![WhatsApp Settings page with the Enable WhatsApp Module toggle switched on](/whatsapp-module/configure-whatsapp-module/enable-whatsapp-module-1.webp)

## Choosing a WhatsApp Provider

WhatsApp does not let plugins send messages directly. Every message goes through an approved provider, so you must connect one before anything sends.

Under **WhatsApp Provider**, pick one from **Choose your WhatsApp provider**:

- **Meta Cloud API (WhatsApp Business):** Meta's own API. You run your own WhatsApp Business Account and phone number, with no reseller in the middle. Set it up in the [Meta Cloud API integration guide](/whatsapp-meta-cloud-api-integration).
- **Twilio WhatsApp:** Uses your existing Twilio account and its WhatsApp sender. Easier to start with if you already run [Twilio SMS](/twilio-integration). Set it up in the [Twilio WhatsApp integration guide](/whatsapp-twilio-integration).

The credential fields below the dropdown change to match the provider you select.

### Meta Cloud API Fields

- **WhatsApp Business Account ID:** Identifies the WhatsApp Business Account that owns your message templates. Found in **Meta Business Settings → WhatsApp Accounts**.
- **Phone Number ID:** The sending number's ID — not the phone number itself. Found in **Meta for Developers → WhatsApp → API Setup**.
- **Permanent Access Token:** The access token from your Meta app. The token generated in Meta's **Try it out** section is temporary and expires, so a live site needs a permanent token from a Meta System User.
- **App Secret:** Used to verify the signature on webhooks Meta sends back to your site.
- **Webhook Verify Token:** Any secret string you choose. The same string must be entered on Meta's side during webhook setup, or the connection fails verification.

### Twilio WhatsApp Fields

- **Twilio Account SID:** The same Account SID your Twilio account uses.
- **Twilio Auth Token:** The same Auth Token your Twilio account uses.
- **WhatsApp From Number:** Your approved Twilio WhatsApp sender number, in full international format (for example, `+14155238886`).
- **Messaging Service SID:** Optional. Use a Messaging Service sender pool for template messages.

![WhatsApp Settings with Twilio WhatsApp selected and its credential fields](/whatsapp-module/configure-whatsapp-module/whatsapp-provider-twilio-2.webp)

Click **Save** once your credentials are in.

## Connecting the Webhook

At the bottom of the page, FluentCRM generates a **Webhook URL** unique to your site. Copy it and paste it into your provider's webhook settings.

>[!Note]
> Without this webhook, messages still go out, but your site never hears back — you get no delivery statuses, and replies from contacts never reach the CRM. Each provider guide covers exactly where to paste it.

>[!Warning]
> The Webhook URL contains a hash unique to your site. Treat it like a credential and don't share it publicly.
