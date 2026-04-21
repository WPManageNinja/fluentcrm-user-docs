---
title: "Configure SMS Module"
slug: "configure-sms-module"
category: "sms-module"
order: 1
---

# Configure SMS Module

The **SMS Module** is a powerful feature in FluentCRM that allows you to deliver SMS campaigns and automate messages directly to your subscribers or customers. This feature is crucial for time-sensitive or high-priority communications, complementing your existing email marketing efforts.

In this article, you will learn how to enable the core SMS Module in your FluentCRM installation before configuring your preferred SMS provider.

## Enabling the SMS Module

To activate SMS functionality within your CRM, you need to navigate to the plugin settings and enable the module.

First, from your WordPress dashboard, go to **FluentCRM Pro** and click **Settings** in the main navigation sidebar.

Once in the Settings area, click **SMS Settings** from the left-hand menu. On the SMS Settings page, locate the toggle switch for **Enable SMS Module**.

Enabling this module unlocks the ability to create and send SMS campaigns and use SMS in your automations. After enabling the module, you must select an **SMS Provider** from the dropdown menu below. Currently, FluentCRM supports **Twilio** and **Amazon SNS**.

Once you have enabled the module and selected a provider (which will be configured in separate steps), be sure to click the **Save Settings** button to apply your changes.

![Enable SMS Module](/sms-module/configure-sms-module/enable-sms-module.webp)

Enabling the SMS Module is the essential first step to using this feature for delivering **SMS Campaigns** to specific subscribers based on tags or lists, and viewing **SMS Activities** within your dashboard.

>[!Note]
>You must configure either Twilio or Amazon End User Messaging before enabling these SMS settings. Without setting up one of these services, the SMS options will remain disabled.


## SMS Campaigns: Creating and Managing your SMS

The **SMS Campaigns** area is your central hub for creating, scheduling, and managing targeted SMS broadcasts. This feature allows you to reach specific segments of your audience instantly with time-sensitive information, special offers, or critical updates.

### Overview

You can access this feature from the main menu on the FluentCRM top menu bar and selecting the **SMS** dropdown submenu. Here, you will find a dashboard listing all your drafted, scheduled, and completed SMS campaigns.

![Creating and Mnaging your SMS](/sms-module/configure-sms-module/sms-campaign-2.webp)

### Creating a new SMS campaign

To start a new campaign, click the **Create New Campaign** button on the main SMS Campaigns dashboard. The process involves three guided steps: **Start**, **Recipients**, and **Review**.

![Create a new SMS Campaign](/sms-module/configure-sms-module/create-new-campaign-3.webp)

#### Step 1: Start (basic information)

This is where you define the content and identity of your campaign:

* **Title of the SMS campaign:** Provide a clear, internal title for your campaign (for example, “Black Friday special discount”). This is for internal identification only.
* **Message content of the SMS campaign:** Enter the exact text you wish to send to your subscribers (for example, “You will get a 30% discount.”).

Once you have filled in the required details, click **Create & Continue** to go to the next step (**Recipients**).

![Start](/sms-module/configure-sms-module/start-4.webp)

#### Step 2: Recipients (selecting subscribers)

In this step, you define your target audience. You have three methods for selecting subscribers:

* **By List & Tag:** Select **Included Contacts** based on specific lists and tags. You can also choose contacts to **exclude**, which removes specific lists or tags from your selection. To add multiple lists and tags, click the **Plus (+)** icon.

![Recipients](/sms-module/configure-sms-module/by-list-and-tag-5.webp)

* **By Dynamic Segment:** If you have pre-configured dynamic segments in FluentCRM, select one from the dropdown. The system targets all contacts currently matching that segment’s criteria.

![Dynamic Segment](/sms-module/configure-sms-module/by-dynamic-segment-6.webp)

* **By Advanced Filter:** Build conditional filters using data from modules like Contact Activities, FluentAffiliate, and FluentCart to target subscribers by actions, purchases, or engagement.

![Advanced Filter](/sms-module/configure-sms-module/by-advanced-filter-7.webp)

As you define your criteria, the system shows a live count (for example, “109 contacts found”) to validate your selection. When you are satisfied, click **Continue** to go to the next step (**Review**).

#### Step 3: Review & broadcast (scheduling and sending)

This is the final step where you verify campaign details and set the broadcast time.

* **Review summary:** The page summarizes total **Recipients** and the **SMS body**. Use the **Edit** links next to either section to jump back and make changes.
* **Scheduling options:** Under **Broadcast / schedule this SMS campaign now**, choose when and how messages are delivered:
  * **Send the SMS messages right now:** Sends the campaign immediately when you confirm.
  * **Schedule the SMS messages:** Sets a single date and time for the broadcast using the available fields.
  * **Schedule SMS messages within a specified date-time range:** Sets a start and end window; the system schedules sends randomly within that range (useful for load distribution or a more natural delivery pattern).

When you have chosen your scheduling method and verified recipients and content, click **Send SMS messages now** or **Schedule this campaign** to finalize.

![Review and broadcast step](/sms-module/configure-sms-module/receipients-8.webp)

### Key Features and Data Columns

The campaigns dashboard shows each broadcast with:

* **Title:** Internal name of your campaign.
* **Message:** Short snippet of the message content.
* **Status:** Current status. You can filter by:
  * **Draft:** Being created or edited.
  * **Pending / scheduled:** Waiting for the send time.
  * **Processing:** Currently sending.
  * **Archived / purged:** Removed from the active list.
  * **Incomplete:** Needs more configuration before sending.
* **Labels:** Organizational labels applied to the campaign.
* **Broadcast:** Date and time the campaign was or will be broadcast.
* **Recipients:** The total count of contacts targeted for the broadcast.

![Feature and Data Columns](/sms-module/configure-sms-module/data-colum-9.webp)

## SMS Activities: Monitoring Delivery and Status

The **All SMS Activities** section is a centralized log of every SMS sent through your FluentCRM account, including messages from campaigns and automations. Use it to monitor delivery, troubleshoot, and audit your communication history.

### Overview

SMS Activities acts as a reporting view into every transaction handled by the SMS Module so you can confirm delivery and spot failures quickly.

![Review and broadcast step](/sms-module/configure-sms-module/all-sms-10.webp)


### Key Data Points for Tracking

The activity log includes:

* **Contact:** The subscriber who received the message.
* **Message:** Full SMS content sent to the contact.
* **Source:** How the message was triggered (for example, a campaign broadcast or an automation).
* **Status:** Delivery status (for example, **Delivered**, **Failed**, or **Pending**) as reported by your provider (**[Twilio](/twilio-integration)**, **Amazon End User Messaging**, etc.).
* **Sending time:** When the message was sent or attempted.
* **Actions:** Options such as viewing details or troubleshooting.

![Key Data Point Tracking](/sms-module/configure-sms-module/sms-activities-11.webp)

## Send SMS from individual contacts

In addition to campaigns and automations, you can send direct, one-to-one messages from a contact’s profile.

### Accessing the Direct SMS Feature

1. Open **Contacts** from the FluentCRM dashboard and select the contact.
2. On the contact’s details page (emails, lists, tags, etc.), open the **SMS** tab next to **Emails** and **Purchase History** (or similar tabs).

### Using the Direct Messaging Interface

The SMS tab includes:

* **SMS stats:** A breakdown of the contact’s message history (**ALL**, **CAMPAIGN**, **AUTOMATION**, **DIRECT**).
* **Direct send interface:** A simple, chat-style area at the bottom.

Type your message in the field labeled **Type a message**, then press **Enter** or click **Send**. A character count (for example, `0/160 msg`) helps you stay within SMS length limits.

Messages sent this way appear in the contact’s activity and count toward **DIRECT** in SMS stats.

To build full workflows that include SMS, start with [Introduction to FluentCRM Automation](/docs/introduction-to-fluentcrm-automation).

![Indivisual SMS Send](/sms-module/configure-sms-module/individualy-sms-send-12.webp)

That covers the core SMS Module setup and usage. If you have any further questions about this article, please contact our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/).
