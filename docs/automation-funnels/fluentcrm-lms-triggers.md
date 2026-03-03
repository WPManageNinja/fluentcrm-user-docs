---
title: "LMS Triggers"
slug: "fluentcrm-lms-triggers"
category: "automation-funnels"
order: 0
---

# LMS Triggers
[FluentCRM](https://fluentcrm.com/) provides triggers for **Learning Management System (LMS)** platforms like **LearnDash**, **LifterLMS**, and **TutorLMS**, allowing you to start an automation funnel based on user behavior. This article will provide detailed information about all **LMS Triggers** of **FluentCRM Automation**.

> **Remember**, to use the **LMS Trigger** you must install and activate all the **LMS Plugins** in your website. Plus, learn the detailed integration process of [LearnDash](/docs/learndash-integration-with-fluentcrm), [LifterLMS](/docs/lifterlms-integration-with-fluentcrm), and [TutorLMS](/docs/tutorlms-integration-with-fluentcrm) with [FluentCRM](https://fluentcrm.com/).

## LMS Triggers of FluentCRM

To learn how you can use all the **LMS** **Triggers** of your **FluentCRM**, follow the steps with screenshots below – 

First, go to the **Automation** section from the **Fluent CRM Navbar**, and click **\+ New Automation.** 

> To learn the detailed process of creating a new automation funnel, read this [Documentation](/docs/automation-editor).

![New automation button](/automation-funnels/fluentcrm-lms-triggers/1.-New-Automation-button-2-scaled.webp)

Now, a pop-up page will appear with all the Popular Pre-built Funnel Templates for creating automation.

You just need to click on the desired templates, which will redirect you to the [Automation Editor](/docs/automation-editor) where the full funnel diagram will automatically be ready. 

Alternatively, if you want to create your automation funnel from scratch, simply click on the **Create from Scratch** tab. 

![Create from scratch](/automation-funnels/fluentcrm-lms-triggers/2.-Create-from-Scratch-1.webp)

All the **LMS Triggers** for creating an automation funnel are organized under plugin categories **in** the left sidebar. These are: 

1.  LearnDash
2.  LifterLMS
3.  TutorLMS

Once you select your desired **Trigger**, click the **Continue** button, and put a **Title** under the **Internal Label** field for this automation funnel to easily find it later. 

If you leave it blank, it will automatically titled according to its trigger’s name.

![Learndash triggers](/automation-funnels/fluentcrm-lms-triggers/3.-LearnDash-triggers.webp)

## 1\. LearnDash Triggers

A detailed explanation of the following Triggers is given below –

-   Course Enrolled
-   Course Left
-   Course Completed
-   Lesson Completed
-   Topic Completed
-   Group Enrolled

### Course Enrolled

This automation funnel will start once a student is enrolled in a course.  
Once you select this trigger, a tab will appear on the right-hand side with options to set your trigger.

#### Settings of Course Enrolled Trigger

-   **Automation Name**: Provide a **Name** for the **Automation** so that you may find it later easily.

-   **Internal Description**: Write a description that will be used as a **Subtitle** in the **Block** **Diagram** in the [Automation Editor](/docs/automation-editor).

-   **Subscription Status**: Change the subscription status using the dropdown list for the contact that submits the form according to [FluentCRM Contacts Status](/docs/fluentcrm-contacts-status).

-   **Run the automation actions even contact status is not in subscribed status**: Check this option if you want to run the automation even when the contact's status is not in subscribed status.

-   **If Contact Already Exist?**: Specify what will happen if the subscriber already exists in the database. You can either update if the contact is already present in the FluentCRM Contacts which means recurring triggering for the automation or Skip the automation for this contact.

-   **Target Courses**: Select which **Course** (**Single** or **Multiple**) will trigger this automation Funnel. Leave blank to run for any course enrollment.

-   **Restart**: Check this option if you **Restart** the automation multiple times for the same contact that triggers the automation.

Once you are done, click the **Save Settings** button to save all your changes.

![Course enrolled](/automation-funnels/fluentcrm-lms-triggers/4.-Course-Enrolled.webp)

### Course Left

This automation funnel will start once a student leaves a course.  
Once you select this trigger, a tab will appear on the right-hand side with options to set your trigger.

> The settings options of this **Course Left** trigger work the same way as the **Course Enrolled** trigger. To learn how to use all the settings, read this [Section](/docs/fluentcrm-lms-triggers/#settings-of-course-enrolled-trigger).

### Course Completed

This automation funnel will start once a student completes a course.  
Once you select this trigger, a tab will appear on the right-hand side with options to set your trigger.

> The settings options of this **Course Completed** trigger work the same way as the **Course Enrolled** trigger. To learn how to use all the settings, read this [Section](/docs/fluentcrm-lms-triggers/#settings-of-course-enrolled-trigger).

### Lesson Completed

This automation funnel will start once a student completes a lesson.  
Once you select this trigger, a tab will appear on the right-hand side with options to set your trigger.

Here, are the Settings of the Lesson Completed Trigger

-   **Target Course**: Select a **Course** that will trigger this automation Funnel.

-   **Target Lesson**: Select which **Lesson** (Single or Multiple) will trigger this automation Funnel. Leave blank to run for any Lesson of the targeted Course.

> To learn the use of all the settings mentioned in the screenshot below, read this [Section](/docs/fluentcrm-lms-triggers/#settings-of-course-enrolled-trigger).

Once you are done, click the **Save Settings** button to save all your changes.

![Lesson completed](/automation-funnels/fluentcrm-lms-triggers/5.-Lesson-Completed.webp)

### Topic Completed

This automation funnel will start once a student completes a lesson topic.  
Once you select this trigger, a tab will appear on the right-hand side with options to set your trigger.

Here, are the Settings of the Topic Completed Trigger

-   **Target Course**: Select a **Course** that will trigger this automation Funnel.

-   **Target Lesson**: Select a **Lesson** that will trigger this automation Funnel.

-   **Target Topic**: Select which **Topic** (Single or Multiple) will trigger this automation Funnel. Leave blank to run for any Topic of the targeted Course.

> To learn the use of all the settings mentioned in the screenshot below, read this [Section](/docs/fluentcrm-lms-triggers/#settings-of-course-enrolled-trigger).

Once you are done, click the **Save Settings** button to save all your changes.

![Topic completed](/automation-funnels/fluentcrm-lms-triggers/6.-Topic-Completed.webp)

### Group Enrolled

This automation funnel will start once a user is enrolled in a group.  
Once you select this trigger, a tab will appear on the right-hand side with options to set your trigger.

Here, are the Settings of the Group Enrolled Trigger

-   **Target Groups**: Select which **Group** (Single or Multiple) will trigger this automation Funnel. Leave blank to run for any Group Enrollment.

> To learn the use of all the settings mentioned in the screenshot below, read this [Section](/docs/fluentcrm-lms-triggers/#settings-of-course-enrolled-trigger).

Once you are done, click the **Save Settings** button to save all your changes.

![Group enrolled](/automation-funnels/fluentcrm-lms-triggers/7.-Group-Enrolled.webp)

## 2\. LifterLMS Triggers

A detailed explanation of the following Triggers is given below – 

-   Course Enrolled
-   Joined Membership
-   Lesson Completed
-   Course Completed

Once you select your desired **Trigger**, click the **Continue** button, and put a **Title** under the **Internal Label** field for this automation funnel to easily find it later. 

If you leave it blank, it will automatically titled according to its trigger’s name.

![LifterLMS triggers](/automation-funnels/fluentcrm-lms-triggers/8.-LifterLMS-Triggers.webp)

### Course Enrolled

This automation funnel will start once a contact is enrolled in a course.  
Once you select this trigger, a tab will appear on the right-hand side with options to set your trigger.

> The settings options of this **LifterLMS** **Course Enrolled** trigger work the same way as the **LearnDash** **Course Enrolled** trigger. To learn how to use all the settings, read this [Section](/docs/fluentcrm-lms-triggers/#settings-of-course-enrolled-trigger).

Once you are done, click the **Save Settings** button to save all your changes.

![Course enrolled in LifterLMS](/automation-funnels/fluentcrm-lms-triggers/9.-Course-Enrolled-in-LifterLMS.webp)

### Joined Membership

This automation funnel will start once a student has been enrolled in a membership level.  
Once you select this trigger, a tab will appear on the right-hand side with options to set your trigger.

Here, are the Settings of the Joined Membership Trigger

-   **Target Memberships**: Select which **Membership** (Single or Multiple) will trigger this automation Funnel. Leave blank to run for any Membership Enrollment. 

> To learn the use of all the settings mentioned in the screenshot below, read this [Section](/docs/fluentcrm-lms-triggers/#settings-of-course-enrolled-trigger).

Once you are done, click the **Save Settings** button to save all your changes.

![Joined membership](/automation-funnels/fluentcrm-lms-triggers/10.-Joined-Membership.webp)

### Lesson Completed

This automation funnel will start once a student completes a lesson.  
Once you select this trigger, a tab will appear on the right-hand side with options to set your trigger.

Here, are the Settings of the Lesson Completed Trigger

-   **Target Lessons**: Select which **Lesson** (Single or Multiple) will trigger this automation Funnel. Leave blank to run for any Lesson.

> To learn the use of all the settings mentioned in the screenshot below, read this [Section](/docs/fluentcrm-lms-triggers/#settings-of-course-enrolled-trigger).

Once you are done, click the **Save Settings** button to save all your changes.

![Lesson completed in LifterLMS](/automation-funnels/fluentcrm-lms-triggers/11.-Lesson-Completed-in-LifterLMS.webp)

### Course Completed

This automation funnel will start once a student completes a Course.  
Once you select this trigger, a tab will appear on the right-hand side with options to set your trigger.

> The settings options of this **LifterLMS** **Course Completed** trigger work the same way as the **LearnDash** **Course Enrolled** trigger. To learn how to use all the settings, read this [Section](/docs/fluentcrm-lms-triggers/#settings-of-course-enrolled-trigger).

## 3\. TutorLMS Triggers

A detailed explanation of the following Triggers is given below – 

-   Course Enrolled
-   Lesson Completed
-   Course Completed

Once you select your desired **Trigger**, click the **Continue** button, and put a **Title** under the **Internal Label** field for this automation funnel to easily find it later. 

If you leave it blank, it will automatically titled according to its trigger’s name.

![TutorLMS triggers](/automation-funnels/fluentcrm-lms-triggers/12.-TutorLMS-Triggers.webp)

### Course Enrolled

This automation funnel will start once a contact is enrolled in a course.  
Once you select this trigger, a tab will appear on the right-hand side with options to set your trigger.

> The settings options of this **TutorLMS** **Course Enrolled** trigger work the same way as the **LearnDash** **Course Enrolled** trigger. To learn how to use all the settings, read this [Section](/docs/fluentcrm-lms-triggers/#settings-of-course-enrolled-trigger).

Once you are done, click the **Save Settings** button to save all your changes.

![Course enrolled in TutorLMS](/automation-funnels/fluentcrm-lms-triggers/13.-Course-Enrolled-in-TutorLMS.webp)

### Lesson Completed

This automation funnel will start once a student completes a lesson.  
Once you select this trigger, a tab will appear on the right-hand side with options to set your trigger.

Here, are the Settings of the Lesson Completed Trigger

-   **Target Lessons**: Select which **Lesson** (Single or Multiple) will trigger this automation Funnel. Leave blank to run for any Lesson.

> To learn the use of all the settings mentioned in the screenshot below, read this [Section](/docs/fluentcrm-lms-triggers/#settings-of-course-enrolled-trigger).

Once you are done, click the **Save Settings** button to save all your changes.

![Lesson completed in TutorLMS](/automation-funnels/fluentcrm-lms-triggers/14.-Lesson-Completed-in-TutorLMS.webp)

### Course Completed

This automation funnel will start once a student completes a Course.  
Once you select this trigger, a tab will appear on the right-hand side with options to set your trigger.

> The settings options of this **TutorLMS** **Course Completed** trigger work the same way as the **LearnDash** **Course Enrolled** trigger. To learn how to use all the settings, read this [Section](/docs/fluentcrm-lms-triggers/#settings-of-course-enrolled-trigger).

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.