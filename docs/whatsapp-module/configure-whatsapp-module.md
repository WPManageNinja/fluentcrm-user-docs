---
title: "Configure WhatsApp Module"
slug: "configure-whatsapp-module"
category: "whatsapp-module"
order: 1
---

# Configure WhatsApp Module

Turning on WhatsApp gives you WhatsApp campaigns, approved message templates, WhatsApp conversations in the [Unified Inbox](/unified-inbox), and WhatsApp actions inside automations.

>[!Note]
> This feature requires **FluentCRM Pro**. [See what's included →](/how-to-install-upgrade-and-activate-license)

Setup is three things: switch on the module, connect a provider, and hand that provider your webhook URL. This guide covers the FluentCRM side of all three. The provider account itself is set up in [Meta Cloud API Integration](/whatsapp-meta-cloud-api-integration) or [Twilio WhatsApp Integration](/whatsapp-twilio-integration).

## Step 1: Enable the Message Module

Go to **FluentCRM → Settings → Messaging** and turn on **Enable Message Module**.

WhatsApp lives inside FluentCRM's shared messaging module, alongside SMS — so this master switch comes first. Nothing WhatsApp-specific appears until it's on.

![FluentCRM Settings Messaging page with the Enable Message Module toggle](/whatsapp-module/configure-whatsapp-module/enable-message-module-1.webp)

## Step 2: Enable WhatsApp

Open the **WhatsApp** tab and turn on **Enable WhatsApp Module**.

![Messaging settings on the WhatsApp tab with the Enable WhatsApp Module toggle](/whatsapp-module/configure-whatsapp-module/enable-whatsapp-module-2.webp)

>[!Note]
> The **SMS** tab beside it is a separate channel with its own switch. Enabling WhatsApp doesn't enable SMS, and you don't need SMS to use WhatsApp.

## Step 3: Choose a Provider

FluentCRM doesn't talk to WhatsApp directly — WhatsApp requires a business platform in between. Pick yours from **Choose your WhatsApp provider**.

![WhatsApp provider dropdown open with Twilio WhatsApp and Meta Cloud API options](/whatsapp-module/configure-whatsapp-module/choose-provider-3.webp)

- **Meta Cloud API (WhatsApp Business):** WhatsApp's official platform, run by Meta. More setup up front, and the cheaper option at volume.
- **Twilio WhatsApp:** Twilio handles the Meta relationship for you. Faster to get running, especially if you already send SMS through Twilio.

Either one delivers the same messages. Choose on setup effort and pricing, not features.

The fields below the dropdown change to match your choice.

### Meta Cloud API Fields

![Meta Cloud API credential fields including Business Account ID, Phone Number ID, and Permanent Access Token](/whatsapp-module/configure-whatsapp-module/meta-cloud-fields-5.webp)

- **WhatsApp Business Account ID:** Identifies the account that owns your message templates. Found in **Meta Business Settings → WhatsApp Accounts**.
- **Phone Number ID:** A numeric ID, not the phone number itself. Found in **Meta for Developers → WhatsApp → API Setup**.
- **Permanent Access Token:** Generated from a Meta System User. The temporary token Meta offers first expires and takes your connection down with it.
- **App Secret:** Used to verify that incoming webhooks genuinely came from Meta.
- **Webhook Verify Token:** Any secret string you choose. Write it down — you enter the identical string on Meta's side when you create the webhook.

The [Meta Cloud API Integration guide](/whatsapp-meta-cloud-api-integration) walks through collecting each of these.

### Twilio WhatsApp Fields

![Twilio WhatsApp credential fields including Account SID, Auth Token, and WhatsApp From Number](/whatsapp-module/configure-whatsapp-module/twilio-fields-4.webp)

- **Twilio Account SID:** The same Account SID as your Twilio account.
- **Twilio Auth Token:** The same Auth Token as your Twilio account.
- **WhatsApp From Number:** Your approved Twilio WhatsApp sender in full international format, such as `+14155238886`.
- **Messaging Service SID:** Optional. Use a Messaging Service sender pool for template messages.

The [Twilio WhatsApp Integration guide](/whatsapp-twilio-integration) covers where to find these.

Click **Save** when your credentials are in.

## Step 4: Connect the Webhook

After saving, FluentCRM generates a **Webhook URL** at the bottom of the page. Copy it and paste it into your provider's webhook settings.

![WhatsApp settings showing the saved credentials and the generated Webhook URL field](/whatsapp-module/configure-whatsapp-module/webhook-url-6.webp)

This step is easy to skip and expensive to skip. Without the webhook, messages still go out — but nothing comes back. No delivery statuses, no replies in your inbox, and no opt-outs recorded when someone texts STOP.

Each provider guide shows exactly where to paste it.

>[!Warning]
> The Webhook URL contains a hash unique to your site. Treat it like a credential and don't share it publicly.

## What's Next?

- [Connect Meta Cloud API](/whatsapp-meta-cloud-api-integration)
- [Connect Twilio WhatsApp](/whatsapp-twilio-integration)
- [Create your first WhatsApp template](/whatsapp-templates)
