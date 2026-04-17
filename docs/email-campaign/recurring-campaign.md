---
title: "Recurring Campaign"
slug: "recurring-campaign"
category: "email-campaign"
order: 0
---

# Recurring Campaign

As we have seen in the earlier guides, FluentCRM offers various features to create Email Campaigns with different types of Email templates, Content Blocks, Designs, etc to be sent out to Subscribers.

Another great feature of the FluentCRM is that you can send a recurring email campaign at different intervals like Daily, Weekly, or Monthly to Broadcast or Send your Latest Post, Products, or Posts from Available Post Types with another great feature available called "Latest Post Block".

In the following sections, we will be learning about How to Send Recurring Email Campaigns and what features we can utilize to send out automated recurring campaigns that will contain our latest posts and more.

https://youtu.be/V1ddf9k0yTk?si=Fjq2FlHDfXioNLtX

## Create Recurring Campaign

Like Email Campaigns, Email Sequences, and Email Templates; **Recurring Campaigns** can be found under **Email Menu** from the top.

After clicking on the Recurring Campaigns, we can see that no **Recurring Campaigns** are listed since we do not have any yet. From here, please click on the **+ Add Recurring Campaign** button to create one.

![crm recurring campaign](/email-campaign/recurring-campaign/add-recurring-campaign-1.webp)

## Scheduling Interval

Once you click on the Create New Recurring Campaign, A **Start** Section asks to set a few options as below:

1.  **Title of the Recurring Campaign:** Set a Related Title to understand the purpose of the Recurring Campaign.
2.  **How Often do you want to send this Email:** The scheduling interval at which you want to send out the email campaign. There are 3 Options available and discussed below.
3.  **A Checkbox:** Send Emails automatically to the selected day and time (if you disable this, emails will be in the draft state and you can trigger emails after review).

### Weekly

You can select a day from the dropdown at which day the recurring campaign should be sent including another dropdown to select a Time at 15 minutes Intervals from a dropdown option when the Recurring Campaign will be scheduled.

![recurring campaign start](/email-campaign/recurring-campaign/recurring-campaign-weekly-2.webp)

### Daily

A daily schedule that allows selecting a Time at 15 minutes Intervals from a dropdown option when the Recurring Campaign will be scheduled.

![recurring campaign start daily](/email-campaign/recurring-campaign/recurring-campaign-start-daily-3.webp)

### Monthly

You can select the **number of the day** from the dropdown at the number of the day the recurring campaign should be sent including another dropdown to select a **Time at 15 minutes Intervals** from a dropdown option when the Recurring Campaign will be scheduled.

![recurring campaign monthly](/email-campaign/recurring-campaign/recurring-campaign-monthly-4.webp)

## Conditions

Once the scheduling settings are set, in the next section the event type or trigger should be selected. You select either **Blog Posts**, **Pages**, or **Product** etc. and input the **number of days** when the recurring campaign will run and check for Posts or Pages published to run the **Recurring Campaign**.

You can additionally **set an OR condition** to check for **both Pages and Blog Posts together**.

![recurring campaign conditions](/email-campaign/recurring-campaign/recurring-campaign-conditions-5.webp)

## Recipients

In the next section, the recurring campaign subscribers should be selected. This is similar to regular campaigns. You can add recipients:

1.  By [List](/docs/segment-your-audience#Lists) & [Tag](/docs/segment-your-audience#Tags),
2.  By [Dynamic Segment](/docs/segment-your-audience#Dynamic-Segments) and
3.  By [Advanced Filter](/docs/advanced-filter).

### By List & Tag

Choose your **List & Tag**. You can select one list and one tag from the dropdown. To use multiple Lists and tags Please click on the **\+ (Plus)** icon or **– (Minus)** icon to remove any of them. You can also exclude contacts from the campaign based on a certain **List and Tag**.

### By Dynamic Segment

You can also run the campaign by dynamic segments, for example, Woocomemrce Users or LearnDash, LifterLMS users, or any other dynamic segments you created in FluentCRM. Please visit the [General & Dynamic Segments](/docs/segment-your-audience) documentation to know more details.

### By Advanced Filter

You can select custom contacts by using [Advanced Filter](/docs/advanced-filter) and filter the contacts accordingly. This is a wide conditional section based on various Data Properties for Contacts and Activities inside FluentCRM.

![recurring campaign recipients](/email-campaign/recurring-campaign/by-list-&-tag-6.webp)

## Email Content Settings

Once the Recipients are selected, the Email Content to be sent should be composed. Since this is a Recurring Campaign based on Posts and Pages Published, The Latest Posts Block is a desired and relevant Content Block we can utilize to fetch our Posts or Pages published. To know more in-depth about Latest Posts Block please check out the documentation: [Latest Posts Block](/docs/content-blocks-in-fluentcrm-email-editor#conditional-block)

![recurring campaign latest posts](/email-campaign/recurring-campaign/recurring-campaign-latest-posts-7.webp)

## Recurring Campaign Settings Summary

Once all the settings are set and the content of the email is composed, Please mark the Recurring Campaign as Active. You can review all the settings, recipients, and conditions from the Settings Tab at the top right corner.

![recurring campaign settings](/email-campaign/recurring-campaign/settings-8.webp)

## Import/ Export Recurring Campaigns

The Recurring Campaign **Import/Export** feature lets you easily move recurring campaigns between websites. Navigate to the **Recurring Campaign** panel under the Emails section.

![recurring email campaign 01](/email-campaign/recurring-campaign/Recurring-Email-Campaign-09.webp)

Now click the **Import** option button to upload a Recurring campaign in JSON format under the **More Actions**.

![import 02](/email-campaign/recurring-campaign/import-10.webp)

Here you can Drop a **JSON file** or **Upload** it from your device storage.

![upload recurring campaign 03](/email-campaign/recurring-campaign/upload-json-file-11.webp)

To export, click the **Three dots** next to the campaign, select **Export Campaign**, and download the Recurring Campaign into JSON format. You can also **Delete** or **Edit** here you recurring campaign.

![export recurring campaign](/email-campaign/recurring-campaign/Export-recurring-campaign-scaled.webp)

This will save you tons of time when managing campaigns across multiple websites.

Now you can send an automated recurring campaign to your desired specific **Lists, Tags, Dynamic Segments,** or even **advanced filtered contacts** **Daily, Weekly, or Monthly** with any content you want especially with your **latest posts, pages, and other post** **types** including **WooCommerce Products** as well.