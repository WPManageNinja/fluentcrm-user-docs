---
title: "Incoming Webhooks"
slug: "global-incoming-webhooks"
category: "global-settings"
order: 0
---

# Incoming Webhooks
## Configuration

As we use various platforms, services, or even plugins inside our WordPress website we may need to process data from outside of the FluentCRM and also run Email Campaigns or Automation we may need to capture data from those external services or sources. Receive data from any third-party or external services with the feature of **FluentCRM Incoming Webhook** without writing code or running servers.

Go to **Global Settings** and select **Incoming Web Hooks** from the left sidebar and click on **Create Webhook.**

![crm webhook create](/global-settings/global-incoming-webhooks/crm_webhook_create.png)

A pop-up will appear and you will need to provide the required details. Give the WebHook a **Name** as an identifier first, Choose **lists** and **tags** for the user who will subscribe through the webhook, and finally give a **subscription status** to the user. Generally, you want to give the Subscribed status.

![crm incoming webhook](/global-settings/global-incoming-webhooks/crm_incoming_webhook.png)

When you are done with the required information click on the Create button. You will be provided a webhook URL that will listen to any incoming request. You will also get the required keys for all available fields to map with. The available General Keys are:

**Contact Field**

**Key**

Name Prefix

prefix

First Name

first\_name

Last Name

last\_name

Full Name

full\_name

Email

email

TImezone

timezone

Address Line 1

address\_line\_1

Address Line 2

address\_line\_2

City

city

State

state

Postal Code

postal\_code

Country

country

IP Address

ip

Phone

phone

Source

source

Date of Birth (Y-m-d Format only)

date\_of\_birth

**Custom Contact Fields**  
You may also use these custom contact fields. Copy the keys in the right column and paste them into the app just like other contact fields.

![crm incoming webhook copy link](/global-settings/global-incoming-webhooks/crm_incoming_webhook_copy_link.png)

When you are done with setting up the details, please click on the **Copy Button** to copy the webhook URL to use from your external services or sources to send supported available data to FluentCRM.

## Application

Please check the below details that are important to work with the FluentCRM Webhook.

**Method**

POST

**Data Format**

JSON

**JSON Nesting**

Not Supported

**Minimum Field**

email