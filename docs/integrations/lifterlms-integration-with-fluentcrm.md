---
title: "LifterLMS Integration with FluentCRM"
slug: "lifterlms-integration-with-fluentcrm"
category: "integrations"
order: 0
---

# LifterLMS Integration with FluentCRM

LifterLMS is one of the most popular LMS plugins for WordPress. If you have created an eLearning course platform on WordPress using LifterLMS, FluentCRM can help you automate your course marketing with activity monitoring, contact segmentation, email marketing, and many more. Follow this simple guide to learn how to automate these tasks with FluentCRM!

### Lead generation and segmentation

FluentCRM lets you capture your LifterLMS students as leads and tag contacts based on course enrollment and completion.

In order to capture and apply tags based on course enrollment and course completion, go to edit your LifterLMS course and jump to the **Course Options**. Then, from **Course Options**, you’ll need to select the **FluentCRM** tab. And finally, select the tags you want to apply when course enrollments and course completions happen.

![Lead Generation](/integrations/lifterlms-integration-with-fluentcrm/image-39-1.webp)

### Marketing Automation

FluentCRM also lets you automate a wide range of tasks, such as sending behavioral emails, [email sequences](https://fluentcrm.com/how-to-write-an-email-sequence/), contact property updates, and many more.

FluentCRM’s email marketing automation includes four major elements. These are:

1.  **[Automation Editor](/automation-editor):** The editor where you will be able to add, edit or modify your desired actions or activities in automation. To know more about this please visit [Automation Editor](/automation-editor).
2.  **Triggers:** Triggers are essential for initiating email marketing automation. There are a lot of triggers that can start or initiate automation in FluentCRM such as [Primary Automation Triggers](/fluentcrm-automation-triggers), [Ecommerce Triggers](/fluentcrm-ecommerce-triggers), [Membership Triggers](/fluentcrm-membership-triggers), and [LMS Triggers](/fluentcrm-lms-triggers).
3.  **Actions**: Once an Automation is initiated you can add various actions that you want to run when such activities are triggered like [Primary Actions](/primary-automation-actions), [WordPress Actions](/wordpress-automation-actions), [Email Actions](/automation-email-actions), [Goals or BenchMark Actions](/goals-or-benchmark-actions), [LMS Actions](/lms-automation-actions), [Miscellaneous Actions](/miscellaneous-automation-actions), and [Conditional Automation Actions](/conditional-automation-actions).
4.  [**Goals**](/goals-or-benchmark-actions): Generally FluentCRM automation starts with a single and specific trigger. What if you want to run the same automation triggering based on another trigger? This way you could also benchmark the automation. To know more about this please visit [Goals or BenchMark Actions](/goals-or-benchmark-actions).
5.  **[Conditionals](/conditional-automation-actions)**: One of the most useful features of FluentCRM is that you have advanced and more control over what you want to do or customize your target more with the flexibility of the FluentCRM data. Please visit [Conditional Automation Actions](/conditional-automation-actions) to learn more about such flexibility in using data-based conditions in automation.

At first, from your FluentCRM dashboard & go to the **Automations** option. Then click on the **New Automation** button to add an automation funnel.

![New Automation](/integrations/lifterlms-integration-with-fluentcrm/Automation-2.webp)

You will notice a pop-up window appear, where you have to add a suitable **Internal Label** and choose the trigger that will initiate an automation funnel. You can choose one from four available LifterLMS Triggers.

1.  **Course Enrolled**: This will let you trigger an automation funnel when someone enrolls in a LifterLMS course.
2.  **Joined membership**: This will let you trigger an automation funnel when someone joins as a member in LifterLMS.
3.  **Lesson Completed**: This will let you trigger an automation funnel when a student completes a lesson in LifterLMS.
4.  **Course Completed**: This will let you trigger an automation funnel when your LifterLMS student completes a course.

![LifterLMS Trigger](/integrations/lifterlms-integration-with-fluentcrm/lifterlms-trigger-3.webp)

Apart from these triggers, FluentCRM also comes with lots of other triggers. To see the full list of triggers and learn how to configure them, please check [this documentation](/fluentcrm-automation-triggers).

When you select a trigger and click **Continue**, a pop-up box will appear with some options to set up the trigger. Once you're done setting up the trigger, you can use Actions, Goals, and Conditionals to design your marketing automation Funnel.

**Action Block**

[Actions blocks](/primary-automation-actions) are tasks that you wish to trigger from your side. Click on the plus icon on the Automation Funnel page. Then you will notice a pop-up appear with a set of action blocks to choose from.

![Action Block](/integrations/lifterlms-integration-with-fluentcrm/action-block-4.webp)

From here, you can choose any type of action block. FluentCRM offers 15 action blocks for LifterLMS marketing automation. Please check our [funnel action blocks](/primary-automation-actions) documentation to find out how to use action blocks.

**Goals/Trigger Block(Benchmark)**

[Goals/Trigger blocks](/goals-or-benchmark-actions) are goal or trigger items that your user might do. They let you measure these steps and automate the funnel based on goal completion.

Click on the plus icon(+) to open the pop-up for selecting the **Goals**. For LifterLMS, you can choose **List Applied** goal. This trigger block will run once a list is applied to a contact within the automation funnel. In this block, you can add an internal label, specify the list for which the goal applies, and Benchmark Type. 

![Goals Trigger](/integrations/lifterlms-integration-with-fluentcrm/goals-trigger-5.webp)
![List Applied](/integrations/lifterlms-integration-with-fluentcrm/list-applied-6.webp)

Click **Save Settings** when you’re done.

If you want to use other goals or benchmarks, please check our [goal/benchmark documentation](/goals-or-benchmark-actions).

**Conditionals**

Conditionals are conditional logic. If you want to automate different activities based on If/Else conditions, you can choose a conditional. For LifterLMS, FluentCRM allows you to automate different activities based on conditionals.

**Check Condition:**

The **Check Condition** block allows you to segment contacts in your automation based on LifterLMS data. This helps you create different paths depending on a contact’s course enrollment or progress.

![Conditional](/integrations/lifterlms-integration-with-fluentcrm/conditional-7.webp)

To configure this, click **Add Property** and select **LifterLMS** from the dropdown. You can then define conditions using properties such as **Enrollment Courses**, **Course Completed**, **Enrollment Memberships**, **Last Enrollment Date**, and **First Enrollment Date**.

Once the conditions are set, contacts will proceed through different paths in the automation based on whether they meet the defined criteria.


![Settings](/integrations/lifterlms-integration-with-fluentcrm/condiotional-8.webp)

If you want to use other conditionals please check out [this documentation](/conditional-automation-actions).