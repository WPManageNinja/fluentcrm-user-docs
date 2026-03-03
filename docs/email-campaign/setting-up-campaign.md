---
title: "Email Campaigns"
slug: "setting-up-campaign"
category: "email-campaign"
order: 0
---

# Email Campaigns
Once your list and forms are set, you are ready to go for creating an email campaign. You can run email campaigns to send your marketing messages to the subscribers who opted for your marketing messages. In FluentCRM, an email campaign is a bulk email marketing campaign that is sent to many contacts at once instantly or in a scheduled time defined by you. This is as easy as adding a template, adding the content, designing the template, selecting your audience group, and then sending it off to your subscribers.

**Things to do before you start an email campaign with FluentCRM**

-   Firstly make sure you have subscribers in your contact lists. If you don’t have subscribers in your contact lists, [Import Contacts into FluentCRM](/docs/import-contacts-into-fluentcrm) or follow the [Opt-in Forms (Fluent Forms) Basic Configuration](/docs/opt-in-forms-fluent-forms-basic-configuration) to capture leads from a Signup form.
-   Be sure to [FluentCRM Global Settings](/docs/fluentcrm-global-settings) before you start sending your first email campaign.

https://www.youtube.com/watch?v=XSAmIlfMga0

https://youtu.be/F9tRe2PA37s

## Create a New Campaign

From **Emails ➜ All Campaigns**, you can create an email campaign by clicking on the **\+ Create New Campaign** button.

![crm campaign create](/email-campaign/setting-up-campaign/crm_campaign_create.png)

After clicking on the button a modal window will appear asking for the Email Campaign Name. Please provide a relevant **Email Campaign Name** and click on the **Create Campaign** button.

![crm campaign name](/email-campaign/setting-up-campaign/crm_campaign_Name.png)

### Compose Email

Then you will be redirected to the Email Composing page of the Campaign. Please check our [**Compose Email in FluentCRM**](/docs/compose-email-in-fluentcrm) to know a detailed guide about composing Emails in FluentCRM.

![crm campaign compose overview](/email-campaign/setting-up-campaign/crm_campaign_compose_overview.png)
*Composing Emails in Email Campaign*

### Import Existing Email Template

You can also use a premade or predesigned **Email Template** to use in the Email Campaign by Clicking on the **Use Email Template** button. To know more details about Email Templates please visit [Email Templates in FluentCRM.](/docs/email-templates)

![crm campaign import template](/email-campaign/setting-up-campaign/crm_campaign_import_template.png)

Once you are done manually composing the new **Email Content** or [Importing an existing **Email Template**](/docs/email-templates#Importing-Email-Templates-into-FluentCRM) Click on the **➜ Continue \[Subject & Settings\]** button to go to the next step.

![crm campaign continue](/email-campaign/setting-up-campaign/crm_campaign_continue.png)

## Subject & Settings

In this section, you will work on the various components of your **Email Subject & Other Settings.** This step defines the Email Campaign settings that are mostly technical and very important parts of Email Marketing.

### Primary Subject & A/B Subjects

![crm campaign ab](/email-campaign/setting-up-campaign/crm_campaign_AB.png)

In the Subject field, enter a subject line for your email. The subject plays a very important role in whether the email will be opened by a user or will just ignore the email.

You can add multiple subjects for A/B testing. This will help you determine which subject is working best for your emails by checking the A/B test result. The priority ratio defines how many emails with that subject out of the total users will be sent.

You can also use dynamic values in the Email Subject choosing them by clicking on the 3 Dots. The available data properties are discussed in the [SmartCode in Email Editor](/docs/smartcodes-in-fluentcrm-email-editor).

### Email Pre-Header

![crm campaign preheader](/email-campaign/setting-up-campaign/crm_campaign_preheader.png)

This is the short summary text that follows the subject line when viewing an email from the inbox.

### Custom Mail From

![crm campaign custommailfrom](/email-campaign/setting-up-campaign/crm_campaign_customMailFrom.png)

Click the checkbox to set the custom from the name and email. If you don't set it here then your global email setting will be used for sending the emails.

If you have configured multiple email connections as delivery or senders in the FluentSMTP plugin. You can use any of them as a sender for this Email Campaign. For example, you may use **global@wpmanageninja.com** as the default sender. But if you want to use **marketing@wpmanageninja.com** as the sender for this email campaign you would need to configure it in the FluentSMTP first and then you can use it in the Custom Mail From setting here.

### UTM Parameters

![crm campaign utm](/email-campaign/setting-up-campaign/crm_campaign_UTM.png)

Click the checkbox to Add the required UTM Parameters For URLs: **Campaign Source**, **Medium**, and **Campaign Name** for the UTM parameter. You can also add Campaign Term and Content for the URL parameter.

### **Sending a Test Email from Email Campaigns**

When you are done with all the fields of **Subject & Settings**, you can send a test email to your mailbox.

To send a test email from **Email Campaigns**, please click on the **Continue \[Subject & Settings\]** button from the top right corner of the **Email Campaign Compose Settings** section and then click on the **Send a test email** button and input the email address where you want to receive the test email and click on the **Send** button as shown in the below screenshot.

![crm campaign testsend](/email-campaign/setting-up-campaign/crm_campaign_testSend.png)

Once the email is sent successfully you will see a Success Message saying the Test email is sent successfully. on the top right corner.

Click on the **Continue button** and go to the next step to add the recipient to this email campaign.

### Full Overview of Subject & Settings

Once you have configured all of the above depending on your requirements, you will see the options as below. You may leave any of the options if you do not wish to use or set them. But an **Email Subject** is required.

![crm campaign subjectsettings](/email-campaign/setting-up-campaign/crm_campaign_subjectSettings.png)

## Recipients

Now when you are done with the Email Content, Email Subject, and Sender details, it's time to select the recipients who will get the campaign or newsletter email.

![crm campaign recipients](/email-campaign/setting-up-campaign/crm_campaign_recipients.png)

You can add recipients:

1.  By [List](/docs/segment-your-audience#Lists) & [Tag](/docs/segment-your-audience#Tags),
2.  By [Dynamic Segment](/docs/segment-your-audience#Dynamic-Segments) and
3.  By [Advanced Filter](/docs/advanced-filter).

### **By List & Tag**

Choose your **List & Tag**. You can select one list and one tag from the dropdown. To use multiple Lists and tags Please click on the **\+ (Plus)** icon or **\- (Minus)** icon to remove any of them. You can also exclude contacts from the campaign based on a certain **List and Tag**.

### **By Dynamic Segment**

You can also run the campaign by dynamic segments, for example, Woocomemrce Users or LearnDash, LifterLMS users, or any other dynamic segments you created in FluentCRM. Please visit the [General & Dynamic Segments](/docs/segment-your-audience) documentation to know more details.

### **By Advanced Filter**

You can select custom contacts by using [Advanced Filter](/docs/advanced-filter) and filter the contacts accordingly. This is a wide conditional section based on various Data Properties for Contacts and Activities inside FluentCRM.

### **Recipients Processing**

Depending on your selection or the number of contacts the recipients of the email campaign will now be processed. You may not see this screen for only a few contacts. But if the recipients are too high in the number you may see a processing window like the below screenshot. It also depends on the website server resources like CPU, and MEMORY allocated to the website.

![crm recipients processing](/email-campaign/setting-up-campaign/crm_recipients_processing.png)

Once you are done choosing the **Recipients**, click continue to the Review & Send step.

## Review & Send

This step will provide you with a brief overview to review the details before sending the email campaign. The email campaign has successfully been set up. Now you can review all your settings in this step. You can still go to Edit Recipients, Edit Subjects, Edit the Email Body, and Send a Test Email.

If anything needs to change you can go back and edit. If everything has been set up correctly you can start the campaign right away.

### Send Campaign immediately

Now when you are done with all the previous settings, you can either send the campaign immediately or schedule it discussed in the later section.

![crm campaign review](/email-campaign/setting-up-campaign/crm_campaign_review.png)

### Schedule Campaign

You can schedule the campaign also by selecting the date and time. You will be able to schedule it **After 1 Hour**, **Tomorrow**, **After 2 days**, and **After 1 Week** as a built-in option on the left of the calendar. **The Send the Email Right Now** button will work as the immediate sending as the previous option. Please make sure to compare the time according to your needs with the WordPress Time settings. You will also be able to see the **Current Server Time** defined in the WordPress Settings.

![crm campaign schedule](/email-campaign/setting-up-campaign/crm_campaign_schedule.png)

## Campaign Delivery

Once you start sending immediately you will see a screen similar to the below screenshot. It will show you the Number of:

1.  **Pending Emails:** The number of remaining emails to be processed and sent.
2.  **Processing Emails:** The number of emails processing or in the memory to be sent.
3.  **Sent Emails:** Already sent or delivered emails to recipients.
4.  **Total Emails:** The total recipients for the campaign.

![crm campaign email sending live](/email-campaign/setting-up-campaign/crm_campaign_email_sending_live.png)

### Pause Campaign

If you want to pause the running campaign delivery, please click on the **Gear Icon** in the Top Right corner and then click on the **Pause** button.

Once all the emails are delivered you will then see the campaign summary with the statistics and some other actions. Please visit [Campaign Summary & Actions](/docs/campaign-summary-actions) to know in-depth details that are available in the summary.

That's all for Email Campaign creation and sending. Please visit the [Campaign Summary & Actions](/docs/campaign-summary-actions) documentation to Manage the campaigns or apply various actions to users of the campaign you sent.