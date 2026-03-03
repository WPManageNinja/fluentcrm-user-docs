---
title: "Primary Automation Triggers"
slug: "fluentcrm-automation-triggers"
category: "automation-funnels"
order: 0
---

# Primary Automation Triggers
[FluentCRM](https://fluentcrm.com/) offers several **Primary Triggers** that let you start an automation funnel based on your user’s behavior. Besides primary triggers, there are plenty of other **Triggers** available in **FluentCRM** that you can use to create automation funnels for automating your workflows according to your requirements. 

This article will provide detailed information about all **Primary** **Triggers** of **FluentCRM Automation**.

https://www.youtube.com/watch?v=mmSU-Wo6YOs&t

> **Remember**, to use all the **CRM Triggers**, you need to have [FluentCRM Pro Plugin](/docs/how-to-install-upgrade-and-activate-license) installed and activated in your WordPress Site.

## Primary Triggers of FluentCRM

To learn how you can use all the primary Triggers of your FluentCRM, follow the steps with screenshots below – 

First, go to the **Automation** section from the **Fluent CRM Navbar**, and click **\+ New Automation.** 

> To learn the detailed process of creating a new automation funnel, read this [Documentation](/docs/automation-editor).

![New Automation button](/automation-funnels/fluentcrm-automation-triggers/1.-New-Automation-button-scaled.webp)

Now, a pop-up page will appear with all the Popular Pre-built Funnel Templates for creating automation.

You just need to click on the desired templates and it will redirect you to the [Automation Editor](/docs/automation-editor) where the full funnel diagram will be ready automatically. 

Alternatively, if you want to create your automation funnel from scratch, simply click on the **Create from Scratch** tab.

![Create from Scratch](/automation-funnels/fluentcrm-automation-triggers/2.-Create-from-Scratch.webp)

All the **Primary Triggers** for creating an automation funnel are divided into two major categories **in** the left sidebar. These are: 

1.  CRM Trigger
2.  WordPress Trigger

Once you select your desired **Trigger**, click the **Continue** button, and put a **Title** under the **Internal Label** field for this automation funnel so that you can easily find it later. 

If you leave it blank, it will automatically titled according to its trigger’s name.

![CRM triggers](/automation-funnels/fluentcrm-automation-triggers/3.-CRM-Triggers.webp)

## 1\. CRM Trigger

The detailed explanation of all the CRM Triggers is given below – 

### List Applied

This automation funnel will start once the selected lists have been applied to a contact.  
Once you select this trigger, a tab will appear on the right-hand side with options to set your trigger.

#### Settings of List Applied Trigger

-   **Automation Name**: Provide a **Name** for the **Automation** so that you may find it later easily.

-   **Internal Description**: Write a description that will be used as a **Subtitle** in the **Block** **Diagram** in the [Automation Editor](/docs/automation-editor).

-   **Select Lists**: Select the **Lists (single or multiple)** using the dropdown arrow for which you want to trigger this automation funnel. If you do not have any existing Contact List in your FluentCRM, you can directly create one from here by clicking the **Plus** icon.

-   **Run When**: Select whether the contact needs to belong to one list or all of the lists you’ve selected.

-   **Run the automation actions even contact status is not in subscribed status**: Check this option if you want to run the automation even when the contact's status is not in subscribed status.

-   **Restart**: Check this option if you **Restart** the automation multiple times for the same contact that triggers the automation.

Once you are done, click the **Save Settings** button to save all your changes.

![List applied](/automation-funnels/fluentcrm-automation-triggers/4.-List-Applied.webp)

### List Removed

This automation funnel will start once the selected lists have been removed from a contact.  
Once you select this trigger, a tab will appear on the right-hand side with options to set your trigger.

> To learn the use of all the settings mentioned in the screenshot below, read this [Section](/docs/fluentcrm-automation-triggers/#settings-of-list-applied-trigger).

Once you are done, click the **Save Settings** button to save all your changes.

![List removed](/automation-funnels/fluentcrm-automation-triggers/5.-List-Removed.webp)

### Tag Applied

This automation funnel will start once the selected tags have been applied to a contact.  
Once you select this trigger, a tab will appear on the right-hand side with options to set your trigger.

Here, are the Settings of Tag Applied Trigger

-   **Select Tags**: Select the **Tags (single or multiple)** using the dropdown arrow for which you want to trigger this automation funnel. If you do not have any existing Tags in your FluentCRM, you can directly create one from here by clicking the **Plus** icon.

> To learn the use of all the settings mentioned in the screenshot below, read this [Section](/docs/fluentcrm-automation-triggers/#settings-of-list-applied-trigger).

Once you are done, click the **Save Settings** button to save all your changes.

![Tag applied](/automation-funnels/fluentcrm-automation-triggers/6.-Tag-Applied.webp)

### Tag Removed

This automation funnel will start once the selected Tags have been removed from a contact.  
Once you select this trigger, a tab will appear on the right-hand side with options to set your trigger.

> To learn the use of all the settings mentioned in the screenshot below, read this [Section](/docs/fluentcrm-automation-triggers/#settings-of-list-applied-trigger).

Once you are done, click the **Save Settings** button to save all your changes.

![Tag removed](/automation-funnels/fluentcrm-automation-triggers/7.-Tag-Removed.webp)

### Contact’s Birthday

This automation funnel will be initiated on the day of the contact's birthday. With this funnel, you can send each of your subscribed contacts a custom birthday email or promotional offer on their birthday. Additionally, birthday marketing is a powerful technique to enhance customer experience and increase revenue.

Once you select this trigger, a tab will appear on the right-hand side with options to set your trigger.

> To learn the use of all the settings mentioned in the screenshot below, read this [Section](/docs/fluentcrm-automation-triggers/#settings-of-list-applied-trigger).

Once you are done, click the **Save Settings** button to save all your changes.

![8. contact's birthday](/automation-funnels/fluentcrm-automation-triggers/8.-Contacts-Birthday.webp)

### Contact Created

This automation funnel will start once a new contact will be added. To learn the detailed process of adding contacts, read this [Documentation](/docs/manage-contacts/#Add-New-Contact). 

Once you select this trigger, a tab will appear on the right-hand side with options to set your trigger.

> To learn the use of all the settings mentioned in the screenshot below, read this [Section](/docs/fluentcrm-automation-triggers/#settings-of-list-applied-trigger).

Once you are done, click the **Save Settings** button to save all your changes.

![Contact created](/automation-funnels/fluentcrm-automation-triggers/9.-Contact-Created.webp)

### New Form Submission (Fluent Forms)

This automation funnel will start once a new form is submitted in Fluent Forms.  
Once you select this trigger, a tab will appear on the right-hand side with options to set your trigger.

> **Remember**, to use this trigger you must install and activate the [FluentForms](http://fluentforms.com) plugin in your website. Plus, if you want to learn how to integrate **FluentForms** with **FluentCRM**, read this [Documentation](/docs/wp-fluent-forms-integration-with-fluentcrm).

Here are the Settings of the New Form Submission trigger

-   **Automation Name**: Provide a **Name** for the **Automation** so that you may find it later easily.

-   **Internal Description**: Write a description that will be used as a **Subtitle** in the **Block** **Diagram** in the [Automation Editor](/docs/automation-editor).

-   **Select your Form**: Select the desired **Form** using the dropdown arrow for which you want to trigger this automation funnel. 

-   **Map Primary Data**: The field will be available for mapping with the Form’s corresponding field. The left-hand side is **FluentCRM** fields and the right-hand side is user-submitted data from the selected **Fluent Form**. Click the **Dropdown Arrow** to see all the mappable field items.

-   **Map Other Data**: Use this option if you want to add your **FluentCRM** fields beside the primary fields. Here, you can also select the **Value** according to the **FluentCRM** fields using the **Dropdown** arrow. Add as many **Other Fields** as you need by clicking the **+Add More** button and delete any field by clicking the **Trash** Icon.

-   **Subscription Status**: Change the subscription status using the dropdown list for the contact that submits the form according to [FluentCRM Contacts Status](/docs/fluentcrm-contacts-status).

-   **Run the automation actions even contact status is not in subscribed status**: Check this option if you want to run the automation even when the contact's status is not in subscribed status.

-   **Conditions**: Specify what will happen if the subscriber already exists in the database or submitted the form before. Checking this option means that the contact’s form submission will not trigger the automation if he/ she already submitted the form before triggering this automation.

Once you are done, click the **Save Settings** button to save all your changes.

![New form submission (fluent forms)](/automation-funnels/fluentcrm-automation-triggers/10.-New-Form-Submission-Fluent-Forms.webp)

### Company Applied

This automation funnel will start once the selected companies have been applied to a contact.  
Once you select this trigger, a tab will appear on the right-hand side with options to set your trigger.

Here, are the Settings of the Company Applied Trigger

-   **Select Companies**: Select the **Company (single or multiple)** using the dropdown arrow for which you want to trigger this automation funnel. If you do not have any existing Company in your FluentCRM, read this [Documentation](/docs/company-module) to create one.

-   **Run When**: Select whether the contact needs to belong to one **Company** or all of the **Companies** you’ve selected.

> To learn the use of all the settings mentioned in the screenshot below, read this [Section](/docs/fluentcrm-automation-triggers/#settings-of-list-applied-trigger).

Once you are done, click the **Save Settings** button to save all your changes.

![Company applied](/automation-funnels/fluentcrm-automation-triggers/11.-Company-Applied.webp)

### Company Removed

This automation funnel will start once the selected companies have been removed from a contact  
Once you select this trigger, a tab will appear on the right-hand side with options to set your trigger.

> To learn the use of all the settings mentioned in the screenshot below, read this [Section](/docs/fluentcrm-automation-triggers/#settings-of-list-applied-trigger).

Once you are done, click the **Save Settings** button to save all your changes.

![Company removed](/automation-funnels/fluentcrm-automation-triggers/12.-Company-Removed.webp)

## 2\. WordPress Trigger

There are also a few primary **Triggers** for creating an Automation Funnel that appear under the **WordPress Triggers** options from the left sidebar. These are: 

-   New User Sign Up
-   User Login

Once you select your desired **Trigger**, click the **Continue** button, and put a **Title** under the **Internal Label** field for this automation funnel so that you can easily find it later. 

If you leave it blank, it will automatically titled according to its trigger’s name.

![Wordpress triggers](/automation-funnels/fluentcrm-automation-triggers/13.-WordPress-Triggers.webp)

**A detailed explanation of the WordPress Triggers mentioned above is given below –**

### New User Sign-Up

This automation funnel will start once a new user signs up for your WordPress Site.  
Once you select this trigger, a tab will appear on the right-hand side with options to set your trigger.

Here, are the Settings of the New User Sign-Up Trigger

-   **Subscription Status**: Change the subscription status using the dropdown list for the contact that submits the form according to [FluentCRM Contacts Status](/docs/fluentcrm-contacts-status).

-   **If Contact Already Exist?**: Specify what will happen if the subscriber already exists in the database. You can either update if the contact is already present in the FluentCRM Contacts which means recurring triggering for the automation or Skip the automation for this contact.

-   **Targeted User Roles**: Select which user roles registration will trigger this automation Funnel. Leave blank to run for all user roles.

> To learn the use of all the settings mentioned in the screenshot below, read this [Section](/docs/fluentcrm-automation-triggers/#settings-of-list-applied-trigger).

Once you are done, click the **Save Settings** button to save all your changes.

![New user sign up](/automation-funnels/fluentcrm-automation-triggers/14.-New-User-Sign-Up.webp)

### User Login

This automation funnel will start once a user logs into your WordPress Site.  
Once you select this trigger, a tab will appear on the right-hand side with options to set your trigger.

> To learn the use of all the settings mentioned in the screenshot below, read this [Section](/docs/fluentcrm-automation-triggers/#settings-of-list-applied-trigger).

Once you are done, click the **Save Settings** button to save all your changes.

![User login](https://fluentcrm.com/wp-content/uploads/2022/08/15.-User-Login.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.