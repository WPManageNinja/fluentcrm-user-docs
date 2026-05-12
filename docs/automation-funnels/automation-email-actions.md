---
title: "Email Actions"
slug: "automation-email-actions"
category: "automation-funnels"
order: 0
---

# Email Actions

FluentCRM provides several [Actions](/primary-automation-actions) especially for **Email Marketing,** to automatically send emails to users. Once automation is triggered, you can add the desired **Action/s** to handle advanced, repetitive, or routine tasks. This article will provide detailed information about all **Email Actions** in **FluentCRM Automation**.

> **Remember**, to use all the **Email Actions** except “**Send Custom Email action**”, you need to have [FluentCRM Pro Plugin](/how-to-install-upgrade-and-activate-license) installed and activated on your WordPress Site.

## All Email Actions

To learn how you can use all the **Email Actions** in your **FluentCRM**, follow the steps with screenshots below –

First, go to the **Automation** section from the **FluentCRM Navbar**, and open your **desired** **Automation** by clicking on its title. Or, create a new one by clicking the **+ New Automation.** 

> To learn the process of creating a new automation funnel, read this [**Documentation**](/automation-editor).

For example, I opened the **Tag Applied** automation funnel to explain all the **Actions** in **CRM**.

![Open desired automation or create new one](/automation-funnels/automation-email-actions/automation-1.webp)

Now, click the **Plus Icon,** or just hover over it and click the **Add Action / Goal** option to get all the **Email Actions**.

![Click plus icon to add actions](/automation-funnels/automation-email-actions/add-action-2.webp)

Now, a pop-up page will appear with all the **Email Action Blocks** of **FluentCRM** to choose from. 

![All email actions](/automation-funnels/automation-email-actions/All-Email-Actions-3.webp)

**A detailed explanation of the Actions mentioned above is given below –** 

## 1\. Send Custom Email

This action lets you send a **Custom** **Email** to your **Subscriber**/**Custom Email Address** for the contacts within the automation funnel.  After selecting this **Action**, a tab will appear on the right-hand side with options to set up your action. 

Once you complete the setup, click the **Save Settings** button to save all your changes.  
You can also **Delete** the action by clicking the **Trash** **Icon** if needed.

![Send custom email](/automation-funnels/automation-email-actions/Send-Custom-Email-scaled-4.webp)

The Settings of the Send Custom Email Action mentioned in the screenshot above is briefly explained below;

### A. Internal Label

Here, a **Name** for the Action will be automatically added so you can easily find it later. You can change it to suit your needs.

### B. Internal Description

A **description** **of the action** will also be automatically added as a Subtitle. You can also change it to suit your needs.

### C. Send Email To

This option lets you customize the email you want to send and also provides **Two Recipient** options for choosing to whom you want to send the email. These are: 

1.  Send to contact
2.  Send to Custom Email Address

#### a. Send to Contact

Select this option to send emails to the CRM Contacts within the Automation.

-   **Email Subject**: The Email Subject is shown as a subject or topic in the recipient’s email clients.
-   **Email Pre-Header**: An Additional short subject is shown as a small subject line beside the primary subject.
-   **Email Body**: Here, you will write the entire email body text. To learn more, read these [Compose Email in FluentCRM](/compose-email-in-fluentcrm) and [Importing Email Templates into FluentCRM](/email-templates/#Importing-Email-Templates-into-FluentCRM) documentation.

![Send to the contact under send email to](/automation-funnels/automation-email-actions/Send-To-the-Contact-under-Send-Email-to-5.webp)

#### b. Send to Custom Email Address

Select this option to send emails to any custom email address within the Automation.

-   **Send To Email Address (If Custom)**: Here, enter the desired email address where you want to send this Email. 

> To learn the use of the other setting options mentioned in the screenshot below, read this [**Section**](/automation-email-actions/#a-send-to-contact).

![Send to custom email address under send email to](/automation-funnels/automation-email-actions/Send-To-Custom-Email-Address-under-Send-Email-to-6.webp)

### D. Send a Test Email

We always recommend using this option to test your email before sending it to real recipients to ensure it functions properly. 

To send a test email, click the **Send a test email**, input the email address where you want to receive the test email and click on the **Send** button.

Once the email is sent successfully you will see a **Success Message** in the below right corner.

![Send a test email](/automation-funnels/automation-email-actions/Send-a-Test-Email-7.webp)

### E. Schedule this email to a specific Date

Checking this option lets you **set** a **specific** **Date and Time** to send your email using the **Schedule Date and Time** field. 

Also, check this “**Skip sending email if date is overdued”** option if you don’t want to send the email after the scheduled date has passed.

![Schedule this email to a specific date](/automation-funnels/automation-email-actions/Schedule-this-email-to-a-specific-date-8.webp)

### F. Send Custom From Name and Email

Checking this option lets you customize your form name and email.

-   **From Name & Email**: Here, you can specify the sender name and email in the **From Name** and **From Email** fields respectively. Plus, you can **add different dynamic data** in the **From Name** by inserting [SmartCodes](/smartcodes-in-fluentcrm-email-editor) to make the email more personalized.

-   **Reply To Name & Email**: With this option, you can specify the receiver name and email for users to reply to the notification, ensuring you receive their responses. Also here, you can use the [SmartCodes](/smartcodes-in-fluentcrm-email-editor) in the **Reply To Name** field. If you leave this field blank, the user reply will be sent to the Default Email you set for your site. 

![Set custom from name and email](/automation-funnels/automation-email-actions/Set-Custom-From-Name-and-Email-9.webp)

## 2\. Set Sequence Emails

This action lets you select in which sequence the contact will be added within the automation.  
After selecting this **Action**, a tab will appear on the right-hand side with options to set up your action. 

#### Settings of the Set Sequence Emails action:

-   **Interval Label**: Here, a **Name** for the Action will be automatically added so you can easily find it later. You can change it to suit your needs.

-   **Internal Description**: A **description** **of the action** will also be automatically added as a Subtitle. You can also change it to suit your needs.

-   **Select Email Sequence**: Select an **Email Sequence** from the dropdown list using the **Dropdown Arrow**. If you do not have any existing **Email Sequence** in your **FluentCRM**, read this [Documentation](/email-sequence) to create one.

-   **Re-assign Sequence  Emails?**: Check this option if you want to restart the sequence emails for already existing contacts in the email sequence.

Once you are done, click the **Save Settings** button to save all your changes.  
You can also **Delete** the action by clicking the **Trash** **Icon** if needed.

![Set sequence emails action](/automation-funnels/automation-email-actions/Set-Sequence-Emails-action-10.webp)

## 3\. Remove Sequences Emails

This action lets you select from which sequences the contact will be removed within the automation.  
After selecting this **Action**, a tab will appear on the right-hand side with options to set up your action. 

Here are the Settings of the Cancel Sequences Emails action:

-   **Select Email Sequence**: Select an **Email Sequence** from the dropdown list using the **Dropdown Arrow**. If you do not have any existing **Email Sequence** in your **FluentCRM**, read this [Documentation](/email-sequence) to create one.

> To learn the use of the First Two setting options mentioned in the screenshot below, read this [**Section**](/automation-email-actions/#here-are-the-settings-of-the-set-sequence-emails-action).

Once you are done, click the **Save Settings** button to save all your changes.  
You can also **Delete** the action by clicking the **Trash** **Icon** if needed.

![Cancel sequence emails](/automation-funnels/automation-email-actions/Cancel-Sequence-Emails-11.webp)

## 4\. Schedule Campaign Email

This action lets you select for which email campaign will be scheduled to this contact within the automation.   
After selecting this **Action**, a tab will appear on the right-hand side with options to set up your action. 

Here are the Settings of the Send Campaign Email action:

-   **Select Campaign**: Select a **Campaign** from the dropdown list using the **Dropdown Arrow**. If you do not have any existing **Email Campaign** in your **FluentCRM**, read this [Documentation](/setting-up-campaign) to create one.

> To learn the use of the First Two setting options mentioned in the screenshot below, read this [Section](/automation-email-actions/#here-are-the-settings-of-the-set-sequence-emails-action).

Once you are done, click the **Save Settings** button to save all your changes.  
You can also **Delete** the action by clicking the **Trash** **Icon** if needed.

![Send campaign email](/automation-funnels/automation-email-actions/Send-Campaign-Email-12.webp)
