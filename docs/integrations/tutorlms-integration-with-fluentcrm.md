---
title: "TutorLMS Integration with FluentCRM"
slug: "tutorlms-integration-with-fluentcrm"
category: "integrations"
order: 0
---

# TutorLMS Integration with FluentCRM

TutorLMS is one of the most popular LMS plugins for WordPress. If you have created an eLearning course platform on WordPress using TutorLMS, FluentCRM can help you automate your course marketing with activity monitoring contact segmentation, email marketing, and more. Follow these simple steps to integrate FluentCRM with TutorLMS.

## Integration Settings

To enable the integration and sync TutorLMS with FluentCRM, go to **Settings** and select **Integration Settings** from the left sidebar, then choose TutorLMS. Here, you can assign a default list, tag, and contact status to update TutorLMS students' information in FluentCRM, allowing you to segment contacts effectively. Use the dropdown menus to select the desired tags, lists, and statuses.

Click on the **Sync TutorLMS Students** button to update the existing student data and automatically segment future students based on the selected tag, list, and contact status.

![Integration Settings](/integrations/tutorlms-integration-with-fluentcrm/sync-tutorlms-1.png)

## Course Tag settings in TutorLMS

FluentCRM allows you to capture your TutorLMS students as leads and automatically segment them based on course-specific tags. To do this, navigate to the **TutorLMS Course Edit** section then scroll down to find the **FluentCRM - Course Tag** option, and apply the appropriate tags to students enrolling in the course. This makes it easy to organize and target your communications within FluentCRM.

![fluentcrm tags for course](/integrations/tutorlms-integration-with-fluentcrm/FluentCRM-tags-for-course.webp)

## TutorLMS Automation

FluentCRM also lets you automate tasks such as sending behavioral emails, email sequences, contact property updates, and many more.

FluentCRM’s email marketing automation includes four major elements. These are:

1.  **Triggers:** Triggers are essential for initiating email marketing automation. They can be behavior-based, or time-based. Learn more about FluentCRM’s [Triggers](/docs/fluentcrm-automation-triggers).

2.  **Action Blocks:** The actions that will be done throughout the funnel for example sending an email, adding the user to a list, etc. Learn everything about FluentCRM [Action Blocks](/docs/primary-automation-actions).

3.  **Goals:** Benchmarking the behavior of the users for example whether they purchased a product, clicked on a link, etc. Learn everything about FluentCRM [Benchmark Blocks](/docs/goals-or-benchmark-actions).

4.  **Conditionals:** Conditionals will let you set multiple paths based on if/else conditions. Learn more about [FluentCRM Conditionals](/docs/conditional-automation-actions).

First, from your FluentCRM dashboard & go to the **Automation** from the navbar. Then click the **New Automation** button to add an automation funnel.

![new automation](/integrations/tutorlms-integration-with-fluentcrm/New-Automation.webp)

A pop-up window will appear, where you have to add an Internal Label and choose the trigger that will initiate an automation funnel. You can choose one from three available TutorLMS Triggers.

-   **Enrollment in a Course:** This will let you trigger an automation funnel when someone enrolls in a TutorLMS course.
-   **Student Completes a Course:** This will let you trigger an automation funnel when someone completes a TutorLMS course.
-   **Students Complete a Lesson:** This will let you trigger an automation funnel when students complete a lesson.

Now select a trigger and click the **Continue** button.

![tutorlms trigger](/integrations/tutorlms-integration-with-fluentcrm/tutorlms-trigger.webp)

A new popup will appear, allowing you to customize the Automation's name and Internal description. Next, select the desired **subscription status**.

In the **Condition** section, you can set specific rules for your automation funnel. For example, you can determine what happens if a contact already exists or doesn't exist within the automation. You'll have two options to choose from: **Update if Exists** or **Skip the Automation if Contact Already Exists**. This allows you to control how existing contacts are handled in your automated workflows.

If you want to restart automation for the same contacts then select **Restart the Automation Multiple Times for this Event** checkbox.

Click the **Save Setting** button to save all your changes.

![tutorlms trigger in fluentcrm](/integrations/tutorlms-integration-with-fluentcrm/TutorLms-trigger-in-FluentCRM.webp)

After setting up your trigger, you can design your marketing automation workflow using Actions, Goals, and Conditions.

## Action Blocks

[Actions blocks](/docs/primary-automation-actions) are tasks that you wish to trigger from your side. Click on the plus icon on the Automation Funnel page. 

![tutorlms actions goal](/integrations/tutorlms-integration-with-fluentcrm/Tutorlms-actions-goal.webp)

Then you will notice a pop-up with a set of action blocks to choose from. You can select any type of action block to automate your workflows.

FluentCRM offers two specific action blocks designed for TutorLMS marketing automation.

**Enroll to Course:** The **Enroll To Course** action enrolls a contact to a specific LMS course.

**Remove From a Course:** The **Remove From a Course** action removes a contact from a specific LMS course

![tutorlms two trigger in fluentcrm](/integrations/tutorlms-integration-with-fluentcrm/TutorLMS-two-Trigger-in-FluentCRM.webp)

After selecting the TutorLMS actions a pop-up will appear from the right side. Here enter the Internal Lable name, Internal Description. Now choose the specific TutorLMS course for enrollment.

If you don't want to enroll the existing WordPress users in the action then simply check this **Do not enroll the course if contact is not an existing WordPress user** option. Now click **Save Settings**.

![enroll action in tutorlms](/integrations/tutorlms-integration-with-fluentcrm/enroll-action-in-tutorlms.webp)

## Goals

[Goals blocks](/docs/goals-or-benchmark-actions) are goal or action items that your user might do. They let you measure these steps and automate the funnel based on goal completion. Click on the plus icon(+) to open the pop-up to select the Goals. 

![tutorlms goals in fluentcrm](/integrations/tutorlms-integration-with-fluentcrm/TutorLMS-goals-in-FluentCRM.webp)

Here you can choose any goals. In these Goals, you can add an internal label, specify the lists for the goal, set the condition when it will run, and choose Benchmark Type. After that click the **Save Settings** button.

![goal list apply](/integrations/tutorlms-integration-with-fluentcrm/goal-list-apply.webp)

## **Condition**

[Conditionals](/docs/conditional-automation-actions) are conditional logic. If you want to automate different activities based on If/Else conditions, you can choose a conditional. For TutorLMS, FluentCRM allows you to automate different activities based on whether a student in the automation has enrolled in a course.

If you want to use other conditionals please check out this [documentation](/docs/conditional-automation-actions). 

![tutorlms conditional in fluentcrm](/integrations/tutorlms-integration-with-fluentcrm/TutorLMS-Conditional-in-FluentCRM.webp)

Once you've completed these steps, you'll see a report of your course enrollment contacts, similar to the screenshot below.

![course contact details](/integrations/tutorlms-integration-with-fluentcrm/Course-Contact-details-1.webp)

## Advanced Filtering Option in FluentCRM

With the help of advanced filtering, you can use various key data points such as last **enrollment date**, **first enrollment data**, **courses enrolled**, **enrolled categories**, and **enrollment tags**. it can be as simple as checking whether a contact is a student or not. That makes it easy to send hyper-targeted emails and run automation.

Now you can filter your course data go to your FluentCRM contact section then click the Advanced filter to do filters. Next, click on the add button to start filtering data. 

![start lms advanced filter](/integrations/tutorlms-integration-with-fluentcrm/start-LMS-Advanced-filter.webp)

Here you must select TutorLMS and then click any of the filter options. You can pick multiple options to filter your LMS data.

-   Last Enrollment Date
-   First Enrollment Date
-   Enrollment Course
-   Enrollment Categories
-   Enrollment Tags
-   Is a Student

After that click the Filter button to filter your TutorLMS data.

![advanced filtering tutorlms](/integrations/tutorlms-integration-with-fluentcrm/Advanced-Filtering-tutorlms.webp)

## Advanced Reports

To view your course enrollment report, go to the FluentCRM dashboard and select the **Reports** section from the top menu. Then, click the **TutorLMS** tab to access detailed information about your enrolled contacts and their courses.

![tutorlms reports](/integrations/tutorlms-integration-with-fluentcrm/TutorLMS-Reports.webp)

So here is the entire process of integrating TutorLMS with FluentCRM. If you have any questions then feel free to contact our [support](https://wpmanageninja.com/support-tickets/) team.