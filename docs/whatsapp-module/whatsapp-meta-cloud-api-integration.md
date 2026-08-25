---
title: "Meta Cloud API Integration with FluentCRM"
slug: "whatsapp-meta-cloud-api-integration"
category: "whatsapp-module"
order: 2
---

# Meta Cloud API Integration with FluentCRM

Meta Cloud API is WhatsApp's official sending platform, run by Meta itself. Connecting it lets FluentCRM send WhatsApp messages to your contacts and receive their replies back into the CRM.

You create an app in the Meta Developer console, copy four credentials out of it, paste them into FluentCRM, then point Meta's webhook back at your site. Budget around 15 minutes the first time.

>[!Note]
> This feature requires **FluentCRM Pro**. [See what's included →](/how-to-install-upgrade-and-activate-license)

You need a Facebook account and a Meta Business Portfolio before you start. If you don't have a portfolio yet, you can create one during Step 1.

## Step 1: Create a Meta App

1. Go to your [Meta Developer account](https://developers.facebook.com/apps/) and open the app creation page. Click **Create App**.

![Meta for Developers Apps page with the Create App button](/whatsapp-module/whatsapp-meta-cloud-api-integration/create-app-1.webp)

2. A popup appears explaining Meta's new app system. Click **Create app** to continue.

3. Enter your **App name** in the form and click **Next**.

![Create an app form with the App name and App contact email fields](/whatsapp-module/whatsapp-meta-cloud-api-integration/app-details-2.webp)

4. On the **Use cases** step, select **Connect with customers through WhatsApp**, then click **Next**.

![Use cases step with Connect with customers through WhatsApp selected](/whatsapp-module/whatsapp-meta-cloud-api-integration/use-case-whatsapp-3.webp)

5. Select your **business portfolio**. If you don't have one, click **Create a business portfolio**.

![Business portfolio selection step during app creation](/whatsapp-module/whatsapp-meta-cloud-api-integration/business-portfolio-4.webp)

6. Nothing else is required. Click **Create app** on the Overview step.

![App creation Overview step with the Create app button](/whatsapp-module/whatsapp-meta-cloud-api-integration/app-overview-5.webp)

## Step 2: Open the Customize Panel

After the app is created you land on the **Use cases** page. Click **Customize** on the WhatsApp use case.

Most of your credentials live in here, so this is the important part.

![Use cases page with the Customize button on the WhatsApp use case](/whatsapp-module/whatsapp-meta-cloud-api-integration/customize-use-case-6.webp)

## Step 3: Collect Your Credentials

Go to **Basic setup → Step 1. Try it out**. This one screen holds three of the four values you need.

Under **Claim a WhatsApp test number** you'll see your test number, and beside it:

- **Phone Number ID** — a numeric ID, not the phone number itself.
- **WhatsApp Business Account ID** — identifies the account that owns your message templates.

Further down, in the **Access token** section, click **Generate new token** and copy the token to your clipboard.

Copy all three — you'll paste them into FluentCRM shortly.

![Step 1 Try it out showing the test number, Phone Number ID, WhatsApp Business Account ID, and the Generate new token button](/whatsapp-module/whatsapp-meta-cloud-api-integration/test-number-token-7.webp)

>[!Note]
> Once you register your own business number instead of the test number, find these IDs under **Other tools → Tools → Manage phone numbers** (Phone Number ID) and in **Meta Business Settings → Accounts → WhatsApp accounts** (WhatsApp Business Account ID).

## Step 4: Copy the App Secret

Go to **App settings → Basic**. Find **App secret**, click **Show** to reveal it, and copy the value.

FluentCRM uses this to verify that incoming webhooks genuinely came from Meta.

![App settings Basic page with the App secret field and Show button](/whatsapp-module/whatsapp-meta-cloud-api-integration/app-secret-17.webp)

## Step 5: Permanent Access Token (Keeping the Connection Alive)

The token from **Generate new token** is a temporary one — it expires and takes your connection down with it. That's fine while you're testing, but a live site needs a permanent token from a Meta System User, which is what the **Permanent Access Token** field is asking for.

To create one:

1. In **Meta Business Settings**, go to **Users → System users** and click **Add**.

![System users page in Business Settings with the Add button](/whatsapp-module/whatsapp-meta-cloud-api-integration/system-users-add-11.webp)

2. Enter a **System user name**, set the **System user role**, and click **Create system user**.

![Create system user dialog with name and role fields](/whatsapp-module/whatsapp-meta-cloud-api-integration/create-system-user-12.webp)

3. Give the system user access to your app. Go to **Business assets**, select your app, and click **Assign people**.

![Business assets page showing the app with the Assign people button](/whatsapp-module/whatsapp-meta-cloud-api-integration/assign-app-asset-13.webp)

4. Back on the system user, confirm your app appears under **Assigned assets** with **Full access**, then click **Generate token**.

![System user detail showing the assigned app with Full access and the Generate token button](/whatsapp-module/whatsapp-meta-cloud-api-integration/system-user-generate-token-14.webp)

5. Select your app, set the expiry, then under **Assign permissions** select both **whatsapp_business_management** and **whatsapp_business_messaging**. Click **Generate token**.

![Assign permissions step with whatsapp_business_management and whatsapp_business_messaging checked](/whatsapp-module/whatsapp-meta-cloud-api-integration/token-permissions-15.webp)

6. Copy the token and paste it into **Permanent Access Token** in FluentCRM, replacing the temporary one.

![Token created dialog showing the generated token with a Copy button](/whatsapp-module/whatsapp-meta-cloud-api-integration/token-created-16.webp)

>[!Warning]
> Meta shows this token once. Copy it straight into FluentCRM — if you close the dialog without copying it, you have to generate a new one.

## Step 6: Enter the Credentials in FluentCRM

In WordPress, go to **FluentCRM → Settings → Messaging → WhatsApp Settings**.

1. Turn on **Enable WhatsApp Module**.
2. Set **Choose your WhatsApp provider** to **Meta Cloud API (WhatsApp Business)**.
3. Paste each credential into its matching field:
   - **WhatsApp Business Account ID**
   - **Phone Number ID**
   - **Permanent Access Token**
   - **App Secret**
4. In **Webhook Verify Token**, type any secret string you choose — for example `crmwapp`. Write it down, because you enter the identical string on Meta's side next.
5. Click **Save**.

![FluentCRM WhatsApp Settings filled in with Meta Cloud API credentials](/whatsapp-module/whatsapp-meta-cloud-api-integration/fluentcrm-meta-settings-19.webp)

After saving, copy the **Webhook URL** shown at the bottom of the page. You need it for the next step.

## Step 7: Create the Webhook

Go back to your Meta app and open **Other tools → Tools**. Among the tools listed, find **Webhooks** under **Configuration** and click **Configure webhooks**.

![WhatsApp tools page with the Webhooks card and Configure webhooks link](/whatsapp-module/whatsapp-meta-cloud-api-integration/whatsapp-tools-8.webp)

On the webhook page:

1. Paste the **Webhook URL** you copied from FluentCRM into **Callback URL**.
2. Paste your **Webhook Verify Token** — the exact string from Step 6 — into **Verify token**.
3. Click **Verify and save**.
4. Under **Webhook fields**, subscribe to the fields you want. At minimum, subscribe to **messages** so replies and delivery statuses reach FluentCRM.

![Meta webhook configuration with the Callback URL and Verify token fields](/whatsapp-module/whatsapp-meta-cloud-api-integration/webhook-callback-18.webp)

That completes the connection.

>[!Warning]
> While your app is unpublished, Meta only delivers test webhooks sent from the app dashboard. Publish the app before you rely on production data.

## Going Live

The test number is capped and only reaches recipients you add manually. To message your real audience, complete the remaining steps in Meta's panel:

- **Step 2. Production setup** — register your own business phone number as the sender.
- **Step 3. Business verification** — verify your business portfolio with Meta.
- **Add a payment method** — until you do, only conversations your customers start are free, and you can't initiate messages.
