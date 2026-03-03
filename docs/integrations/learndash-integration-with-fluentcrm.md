---
title: "Learndash Integration with FluentCRM"
slug: "learndash-integration-with-fluentcrm"
category: "integrations"
order: 0
---

# Learndash Integration with FluentCRM
Learndash is one of the most popular LMS plugins for WordPress. If you have created an eLearning course platform on WordPress using Learndash, FluentCRM can help you automate your course marketing with activity monitoring, contact segmentation, email marketing, and many more.

Follow these simple guides to learn how to integrate Learn Dash with FluentCRM.

https://www.youtube.com/watch?v=H3JY6gWEYjs

\*Tutorial: [Learndash email marketing automation with FluentCRM](https://fluentcrm.com/learndash-email-marketing-automation-tutorial/)

## Integration Settings

To enable the integration and sync your LearnDash with FluentCRM, navigate to the **Settings** and select **Integration Settings** from the left sidebar, then choose **LearnDash**. Here, you'll find options to set a default list, tag, and contact status for LearnDash students in FluentCRM, allowing you to segment your contacts effectively. 

After configuring these settings using the dropdown menus, click on **Sync LearnDash Students** to update existing student data and automatically segment future LearnDash students based on the specified tags, lists, and contact status.

![image](/integrations/learndash-integration-with-fluentcrm/image-67.png)

Your data syncing has been completed and you will see a button **Reload Page** for reloading the page.

![image](/integrations/learndash-integration-with-fluentcrm/image-68.png)

To save your settings click the **Save Settings** button. Also, you can re-sync data again or disable auto-syncing data here.

![image](/integrations/learndash-integration-with-fluentcrm/image-69.png)

## Tag Settings in Learndash

To capture and apply tags based on course enrollment and completion, go to edit your LearnDash course and switch to the **Settings** tab. In the **Course Access Settings** section, select the tags you want to apply when course enrollments and completions occur. You can apply multiple tags in these sections.

![image](/integrations/learndash-integration-with-fluentcrm/image-70.png)

## Marketing Automation

FluentCRM also lets you automate a wide range of tasks such as sending behavioral emails, email sequences, contact property updates, and many more.

FluentCRM’s email marketing automation includes four major elements. These are:

FluentCRM’s email marketing automation includes four major elements. These are:

**Triggers:** Triggers are essential for initiating email marketing automation. They can be behavior-based, or time-based. Learn more about [FluentCRM’s Triggers](/docs/fluentcrm-automation-triggers).

**Action Blocks:** The actions that will be done throughout the funnel for example sending an email, adding the user to a list, etc. Learn everything about [FluentCRM Action Blocks](/docs/primary-automation-actions).

**Goals:** Goals or Benchmarking Action is the behavior of the users for example whether they purchased a product, clicked on a link, etc. Learn everything about [FluentCRM Goals Blocks](/docs/goals-or-benchmark-actions).

**Conditionals:** Conditionals will let you set multiple paths based on if/else conditions. Learn more about [FluentCRM Conditionals](/docs/conditional-automation-actions).

## LearnDash Automation

First, from your FluentCRM dashboard & go to the Automation option. Then click on the Create a **New Automation** button to add an automation funnel.

![image](/integrations/learndash-integration-with-fluentcrm/image-71.png)

You will notice a pop-up window appear. Add a suitable Internal Label and choose the trigger that will initiate an automation funnel. You can choose on from available **Learndash Triggers** then click the **Continue** button.

1.  **Course Enrolled:** When someone enrolls in a Learndash course, you can use this to start an automation funnel.
2.  **Course Left:** This will let you trigger an automation funnel when someone leaves the Learndash course.
3.  **Course Completed:** This will let you trigger an automation funnel when someone completes a Learndash course.
4.  **Lesson Completed:** This will let you trigger an automation funnel when someone Completes a lesson in a Learndash course.
5.  **Topic Completed:** This will let you trigger an automation funnel when someone completes a topic in a Learndash course lesson.
6.  **Group Enrollment:** This will let you trigger an automation funnel when someone enrolls in a group in Learndash.

![image](/integrations/learndash-integration-with-fluentcrm/image-72.png)

> Apart from these triggers, FluentCRM also comes with lots of other triggers. To see the full list of triggers and learn how to configure them, please check this [documentation](/docs/fluentcrm-automation-triggers).

When you select a trigger and click **Continue**, a pop-up box will appear with some options to set up the trigger. You can set your **Automation Name** and **Internal Description** of your Automation here. 

Also, you can change your **Subscription Status** and **conditions**, and select the specific courses to run this Automation with the **Target Courses field**.

If you enable the **Restart the Automation Multiple Times** option for this event, it will restart the automation for a contact already in an automation.

Once you’re done setting up the trigger click on the **Save Settings** button, now you can use Actions, Goals, and Conditionals to design your marketing automation Funnel.

![image](/integrations/learndash-integration-with-fluentcrm/image-73.png)

## Action Blocks

These [Action Blocks](/docs/primary-automation-actions) allow FluentCRM users to automate their LearnDash course management, such as enrolling or removing students from courses and groups based on specific triggers or conditions defined within FluentCRM's automation workflows.

Click on the plus icon on the Automation Funnel page and the **Add Action/Goal** option will come click on it.

![image](/integrations/learndash-integration-with-fluentcrm/image-74.png)

Then you will notice a pop-up with a set of Action blocks to choose from. If you scroll down, you will see four dedicated action blocks available for LearnDash.

From here, you can choose any type of action block. Please check our funnel action blocks documentation to learn how to use [funnel action blocks](/docs/primary-automation-actions).

**Enroll To Course:** This action enrolls the contact into a specific LearnDash course.

**Remove From Course:** This action removes the contact from a particular LearnDash course.

**Enroll To Group:** This action enrolls the contact into a certain LearnDash group.

**Remove From Group:** This action removes the contact from a specific LearnDash group.

![image](/integrations/learndash-integration-with-fluentcrm/image-75.png)

## Goals/Trigger Blocks (Benchmark)

[Goals/Trigger blocks](/docs/goals-or-benchmark-actions) are goal or trigger items that your user might do. They let you measure these steps and automate the funnel based on goal completion.

Click on the plus icon(+) to open the pop-up for selecting the **Add Action/Goals**. For Learndash, you can choose **List Applied goal.** 

![image](/integrations/learndash-integration-with-fluentcrm/image-76.png)

This trigger block will run once a list is applied to a contact within the automation funnel. In this block, you can add an internal label, specify the list for which the goal applies, when it will run, and Benchmark Type. 

Click **Save Settings** when you’re done. You can use other [goals](/docs/goals-or-benchmark-actions) or benchmarks

## Conditionals

Conditionals are conditional logic. If you want to automate different activities based on If/Else conditions, you can choose a conditional block. For Learndash, FluentCRM allows you to automate different activities based on two conditionals. Click on the plus icon(+) from the Automation Funnel page to open the pop-up for selecting the **Conditional Action**.

**Specify Matching Conditions**: With this, you can add different action blocks based on your preference, click on the Add button to see the conditions options.

Then make sure to click the **Save Settings** button.

If you want to use other conditionals please check out this [documentation](/docs/conditional-automation-actions). 

Once you've completed these steps, you'll see a report of your course enrollment contacts, similar to the screenshot below.

![image](/integrations/learndash-integration-with-fluentcrm/image-77.png)

## Advanced Filtering Option

Advanced filtering allows you to use a variety of essential data points, including the latest enrollment date, beginning enrollment data, courses enrolled, enrolled categories, and enrollment tags. This makes it simple to send hyper-targeted emails and implement automation.

Now, you may filter your course data. To perform filtering, navigate to your **FluentCRM contact** area and click the **Advanced filter** button. Next, select the **Add** button to begin filtering data. 

Here you can add multiple filters by clicking the **+OR** icon. Also, you can delete your advanced data filter by clicking the **delete** icon on the left sidebar.

![image](/integrations/learndash-integration-with-fluentcrm/image-78.png)

You must choose **Learndash** for data filtering. Then click the **Filter** option. You can also clear your data filter by clicking the **Clear Filter** button on the left sidebar.

-   **Last Enrollment Date**
-   **First Enrollment Date**
-   **Enrollment Course**
-   **Enrollment Group**
-   **Enrollment Categories**
-   **Enrollment Tags**
-   **Is a Student?**

![image](/integrations/learndash-integration-with-fluentcrm/image-79.png)

## Advanced Reports

To access your course enrollment report, navigate to the FluentCRM dashboard and click **Reports** from the top menu. Then, select the **LearnDash** option to see full information about your enrolled contacts and courses.

To learn more about the advanced report of LearnDash read this [Documentation](/docs/crm-advanced-reports#learndash-advanced-reports).

![image](/integrations/learndash-integration-with-fluentcrm/image-80.png)

If you have any further questions about this guide, please don't hesitate to [contact us](https://wpmanageninja.com/support-tickets/).

\*Tutorial: [Learndash email marketing automation with FluentCRM](https://fluentcrm.com/learndash-email-marketing-automation-tutorial/)