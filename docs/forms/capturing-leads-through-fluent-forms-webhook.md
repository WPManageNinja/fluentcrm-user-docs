---
title: "Capturing Leads Remotely from Fluent Forms"
slug: "capturing-leads-through-fluent-forms-webhook"
category: "forms"
order: 0
---

# Capturing Leads Remotely from Fluent Forms
As we have seen that Fluent Forms and FluentCRM work greatly together to manage Subscriptions and Contacts from [Opt-in Forms (Fluent Forms) Basic Configuration](/docs/opt-in-forms-fluent-forms-basic-configuration) and [Fluent Forms Advanced Configuration](/docs/opt-in-forms-advanced-configuration). But the case was that both of the plugins were installed on the same website.

In this tutorial, we will be learning how to collect leads from different websites or domains and centralize them within your FluentCRM dashboard. We will be collecting leads or data from only one remote Fluent FormWebsite. The same way can be followed to collect leads from as many remote or different Fluent Forms as you want.

For this purpose, we will utilize the feature of [Fluent Forms webhook integration](https://wpmanageninja.com/docs/fluent-form/integrations-available-in-wp-fluent-form/webhook-integration/) and Fluent CRM [Incoming Webhooks](/docs/global-incoming-webhooks).

## Background

![crm form webhook remote](/forms/capturing-leads-through-fluent-forms-webhook/crm_form_webhook_remote.png)

As you can see in the above diagram we have installed FluentCRM on website1.com and Fluent Forms on website2.com. Please follow the below guide carefully to connect your FluentCRM with remote Fluent Forms.

## FluentCRM

### Create Incoming Webhook

From your FluentCRM dashboard, navigate to the [FluentCRM Global Settings](/docs/fluentcrm-global-settings) and select [Incoming Webhooks](/docs/global-incoming-webhooks). From there, click the **Create WebHook** button as below.

![crm create incoming webhook](/forms/capturing-leads-through-fluent-forms-webhook/crm_create_incoming_webhook.png)

Give a name for your webhook and select the lists and tags you want to assign to contacts through the webhook integration. Based on your preference, you can also set the [FluentCRM Contacts Status](/docs/fluentcrm-contacts-status) to either Pending or Subscribed. The pending status will send a [Double Opt-in Confirmation Email](/docs/global-double-opt-in-settings).

![crm create incoming webhook map](/forms/capturing-leads-through-fluent-forms-webhook/crm_create_incoming_webhook_map.png)

\***Note**: It is recommended to set up opt-in confirmation before sending marketing emails to your contacts. So if you haven’t acquired subscription confirmation from your contacts, you need to set contact status to **Pending** so that FluentCRM can send an opt-in email to your contacts. Customize the [Double Opt-in Settings](/docs/global-double-opt-in-settings) if you want.

Click **Create** to save the webhook. Upon creating the webhook, FluentCRM will automatically map the contact fields and show you the details. You can also add or change the selected list, tags, or status here. 

### Data Properties or Field Keys

![crm create incoming webhook url](/forms/capturing-leads-through-fluent-forms-webhook/crm_create_incoming_webhook_URL-1.png)

Upon successful creation, you will see a success message on the top right corner and you will also see a newly generated URL that will be used to send data to FluentCRM and a section that will provide a list of Fields with Keys to be used to Map the Data. You can check [Contacts in SmartCode](/docs/smartcodes-in-fluentcrm-email-editor#Contacts) to see the available Keys (**leave &#123;&#123;&#125;&#125; part while using in webhook**).

Close the pop-up to get you your webhook request URL. To copy the URL, simply click the copy button. If you want to change the webhook configuration or delete it, you can also do it here by editing the webhook.

![crm create incoming webhook list](/forms/capturing-leads-through-fluent-forms-webhook/crm_create_incoming_webhook_list.png)

## Sending Data

Now it's time to send the data from Fluent Forms to FluentCRM using Webhook.

### Enable Fluent Forms Webhook

At first, enable the webhook module in Fluent Forms. Go to **Fluent Forms** > **Integrations** and enable the **WebHooks** module.

![crm form enable webhook](/forms/capturing-leads-through-fluent-forms-webhook/crm_form_enable_webhook.png)

### Create Webhook

Please check [How to Create a Form with Fluent Forms](https://wpmanageninja.com/docs/fluent-form/how-to-use-wp-fluent-form/create-fluent-form/) to create a new FLuent Forms. And after enabling the WebHook module as the above step now go to the settings of the form you created and you will see the WebHook option in the left sidebar where click on the +Add New button to create a new webhook in the Fluent Forms as below.

![crm form add webhook](/forms/capturing-leads-through-fluent-forms-webhook/crm_form_add_webhook.png)

### Mapping Data

Now you will see a few options to Map and Configure the settings. Please check the below table to see the minimum recommended required settings to send the data to FluentCRM.

**Option**

**Value**

**1\. Name**

Provide a name for the webhook as an identifier.

**2\. Request URL**

The **FluentCRM WebHook URL** we created earlier.

**3\. Request Method**

Set it to **POST**

**4\. Request Format**

Set it to **JSON**

**5\. Request Header**

Set it to **No Headers**

**6\. Request Body**

**Selected Fields** because we need to map the **Keys and Values** as we saw earlier.

**7\. Request Fields**

The minimum required field to send the data is the **Email Address** and the key is **_email_**

*FluentCRM required webhook parameters*

#### General Fields

The general fields are the contact properties referred to SmartCode earlier.

#### Additional Fields

![crm form webhook configure custom (1)](/forms/capturing-leads-through-fluent-forms-webhook/crm_form_webhook_configure_custom-1.png)

The additional fields can be the [Custom Contact Fields](/docs/global-custom-contact-fields) that you configure as you want and those are also able to be mapped in the webhook.

#### **Conditional Logic**

![crm form webhook configure conditional](/forms/capturing-leads-through-fluent-forms-webhook/crm_form_webhook_configure_conditional.png)

Another powerful feature of the Fluent Forms is the [Conditional Logic in Fluent Forms](https://wpmanageninja.com/docs/fluent-form/advanced-features-functionalities-in-wp-fluent-form/conditional-logic-fluent-form/). You can use this feature here and in the above screenshot, we put a condition that we will send the Webhook data only from the Country containing Bangladesh. Otherwise, we will not send any data from Fluent Forms to FluentCRM. Configure this feature as per your requirements or leave it process all the data.

Once you’re done configuring the webhook feed, click **Create WebHook Feed**.

## Form Submission

![crm form webhook preview](/forms/capturing-leads-through-fluent-forms-webhook/crm_form_webhook_preview.png)

Let's test the form with a test data submission. As we put a condition we are selecting the Country as Bangladesh in test.

### Form Entry Data

![crm form webhook entry nofeed](/forms/capturing-leads-through-fluent-forms-webhook/crm_form_webhook_entry_noFeed-1.png)

As we have seen in the [Feed Status](/docs/opt-in-forms-fluent-forms-basic-configuration#Feed-Status) of [Basic Configuration](/docs/opt-in-forms-fluent-forms-basic-configuration) this might be confusing as the submission log will not show the webhook data processing in the General Section. The WebHook is a part of API Calls.

### Feed Inspection

To see the Webhook data submission please click on the API Calls tab. Here you will find the submission log and can investigate in the future if you find any unwanted behavior or failure.

![crm form webhook entry apicalls](/forms/capturing-leads-through-fluent-forms-webhook/crm_form_webhook_entry_APICalls.png)

### Contact Data

Now let's check the contact data in the FluentCRM on website1.com as we saw the submission was successful from the Fluent Forms on website2.com.

![crm form webhook contact overview](/forms/capturing-leads-through-fluent-forms-webhook/crm_form_webhook_contact_overview.png)

We will see that on First Name, Last Name & Email Address data is available and all other fields are empty. This is because in the [Mapping Section](#Mapping-Data) we only mapped these 3 fields.

In this way, you can create as many WebHooks as required and collect leads from various domains using this feature.

.