---
title: "Twilio WhatsApp Integration with FluentCRM"
slug: "whatsapp-twilio-integration"
category: "whatsapp-module"
order: 3
---

# Twilio WhatsApp Integration with FluentCRM

Twilio acts as a middleman between your site and WhatsApp, which means you skip Meta's developer app setup entirely. If you already send [SMS through Twilio](/twilio-integration), the same Account SID and Auth Token work here — you only need to add a WhatsApp sender.

>[!Note]
> This feature requires **FluentCRM Pro**. [See what's included →](/how-to-install-upgrade-and-activate-license)

## Step 1: Copy Your Twilio Credentials

Log in to your [Twilio Console](https://console.twilio.com/). On the **Account Dashboard**, find the **Account Info** panel and copy your **Account SID** and **Auth Token**. Click **Show** to reveal the token.

![Twilio Account Dashboard with the Account SID and Auth Token fields in Account Info](/whatsapp-module/whatsapp-twilio-integration/twilio-account-credentials-1.webp)

>[!Warning]
> Your Auth Token grants full access to your Twilio account. Store it securely and never paste it anywhere public.

## Step 2: Set Up a WhatsApp Sender

Twilio needs an approved WhatsApp sender number before it will deliver anything.

### Testing with the Sandbox

For testing, use the Twilio Sandbox — it works without WhatsApp approval on your account.

In the Twilio Console, go to **Messaging → Try it out → Send a WhatsApp message**. Connect by sending the join code shown on screen (for example, `join lion-hollow`) from your phone to the sandbox number, or scan the QR code.

![Twilio Try WhatsApp sandbox page with the sandbox number, join code, and QR code](/whatsapp-module/whatsapp-twilio-integration/twilio-whatsapp-sandbox-2.webp)

Note the sandbox number — that becomes your **WhatsApp From Number** while testing.

>[!Warning]
> The sandbox only reaches phone numbers that have joined it, and Twilio warns it may not reliably deliver international messages. Register your own WhatsApp sender before going live.

### Going Live

For production, register your own WhatsApp sender in the Twilio Console under **Messaging → Senders**. Twilio walks you through Meta's business verification as part of that process. Once approved, use your own number as the **WhatsApp From Number**.

## Step 3: Enter the Credentials in FluentCRM

In WordPress, go to **FluentCRM → Settings → Messaging**.

1. Turn on **Enable Message Module**.
2. Open the **WhatsApp** tab and turn on **Enable WhatsApp Module**.
3. Set **Choose your WhatsApp provider** to **Twilio WhatsApp**.
4. Fill in the fields:
   - **Twilio Account SID:** The Account SID from Step 1.
   - **Twilio Auth Token:** The Auth Token from Step 1.
   - **WhatsApp From Number:** Your approved sender number in full international format, such as `+14155238886`.
   - **Messaging Service SID:** Optional. Use a Messaging Service sender pool for template messages.
5. Click **Save**.

![FluentCRM Messaging settings on the WhatsApp tab with Twilio WhatsApp selected and credentials entered](/whatsapp-module/whatsapp-twilio-integration/twilio-settings-fluentcrm-3.webp)

## Step 4: Connect the Webhook

After saving, copy the **Webhook URL** from the bottom of the WhatsApp tab and paste it into your Twilio WhatsApp sender's incoming message webhook field.

Without it, messages still send, but delivery statuses and contact replies never make it back to FluentCRM.
