---
title: "Twilio SMS Integration"
slug: "twilio-integration"
category: "sms-module"
order: 2
---

### Twilio SMS Integration 

Twilio is a leading cloud communication platform that empowers developers to create powerful customer engagement features. By integrating **FluentCRM** with **Twilio**, you can reliably send SMS campaigns and automated messages to your subscribers worldwide.

This article will guide you through connecting your Twilio account to FluentCRM.


## Accessing the Twilio SMS Provider

Before you begin, ensure you have enabled the **SMS Module** in your FluentCRM settings. You can do this by navigating to **FluentCRM Pro** $\rightarrow$ **Settings** $\rightarrow$ **SMS Settings** and toggling the **Enable SMS Module** switch to **ON**.

1.  From the **SMS Settings** page, locate the **SMS Provider** section.
2.  Click the **Choose your SMS provider** dropdown menu and select **Twilio** from the available options.

![Accessing the Twilio SMS Provider](/sms-module/twilio-integration/twilio-sms-1.webp)

#### Twilio Credentials

To configure the integration, you need three key pieces of information from your Twilio account: the **Twilio Account SID**, **Twilio Auth Token**, and your **Twilio From Number**.

1.  **Log in** to your [Twilio account dashboard](https://www.twilio.com/login).
2.  Navigate to the **Account Info** section on your Twilio home page.
3.  Locate and copy your **Account SID** and **Auth Token**. (Note: You may need to click **Show** to reveal your Auth Token).
4.  Copy your **My Twilio phone number** as well.

![Twilio Credentials](/sms-module/twilio-integration/twilio-credentials-2.webp)

#### Configuring FluentCRM Twilio Settings

Now return to the **SMS Settings** page in FluentCRM to enter your credentials.

1.  **Twilio Account SID:** Paste the **Account SID** you copied from your Twilio dashboard.
2.  **Twilio Auth Token:** Paste the **Auth Token** into this field.
3.  **Twilio From Number:** Enter the provisioned phone number from your Twilio account.
4.  **Save Settings:** Once all credentials are added, click the **Save** button at the top right of the page.

#### SMS Incoming Webhook (Optional)

Upon saving, FluentCRM will generate a unique **SMS Incoming Webhook** URL. You can copy this URL and paste it into your Twilio provider's webhook settings if you need to handle incoming message data.

Your **Twilio integration** is now complete! You are ready to start creating and sending SMS campaigns or utilizing SMS in your automated funnels.

Your Twilio integration is now complete. You are ready to start creating and sending SMS campaigns.

If you want to learn how to create an SMS campaign, read [Configure SMS Module](/docs/configure-sms-module).

![Configure FluentCRM Twilio Settings](/sms-module/twilio-integration/save-twilio-sms-3.webp)


