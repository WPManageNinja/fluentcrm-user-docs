---
title: "TutorLMS Integration with FluentCRM"
slug: "tutorlms-integration-with-fluentcrm"
category: "integrations"
order: 0
---

# TutorLMS Integration with FluentCRM

TutorLMS is one of the most popular LMS plugins for WordPress. If you have created an eLearning course platform on WordPress using TutorLMS, FluentCRM can help you automate your course marketing with activity monitoring contact segmentation, email marketing, and more. Follow these simple steps to integrate FluentCRM with TutorLMS.

## Integration Settings

To enable the integration and sync TutorLMS with FluentCRM, click the **Settings** icon in the top-right corner of the FluentCRM navbar, select **Integrations** from the left sidebar, and click **Manage** next to **TutorLMS**.

![Integration Settings](/integrations/tutorlms-integration-with-fluentcrm/sync-tutorlms-1.webp)

On the **TutorLMS Setting** page, set the defaults FluentCRM applies to your TutorLMS students so you can segment them right away:

-   **Default List to Contact (Optional):** Select the list to add students to. Leave it blank if you don't want to filter campaigns by list.
-   **Default Tag for Contact (Optional):** Select the tag to apply to students. Leave it blank if you don't want to filter campaigns by tag.
-   **Default Contact Status (For new contacts):** Choose the status new contacts get. The default is **Subscribed**.

Click **Sync TutorLMS Students** to import your existing students and automatically segment future students with the selected list, tag, and contact status.

![fluentcrm sync data](/integrations/tutorlms-integration-with-fluentcrm/sync-fluentcrm-data-2.webp)

After the first sync, the page shows two buttons:

-   **Disable Automatic Syncing:** Stops FluentCRM from syncing new students automatically.
-   **Re-Sync Data:** Runs the sync again to update your student data.

If you have a large number of students, use WP CLI to sync instead. The **Read CLI Documentation** link below the buttons explains how.

![fluentcrm re-sync data](/integrations/tutorlms-integration-with-fluentcrm/re-sync-3.webp)

## TutorLMS Automation

FluentCRM also lets you automate tasks such as sending behavioral emails, email sequences, contact property updates, and many more.

FluentCRM’s email marketing automation includes four major elements. These are:

1.  **Triggers:** Triggers are essential for initiating email marketing automation. They can be behavior-based, or time-based. Learn more about FluentCRM’s [Triggers](/fluentcrm-automation-triggers).

2.  **Action Blocks:** The actions that will be done throughout the funnel for example sending an email, adding the user to a list, etc. Learn everything about FluentCRM [Action Blocks](/primary-automation-actions).

3.  **Goals:** Benchmarking the behavior of the users for example whether they purchased a product, clicked on a link, etc. Learn everything about FluentCRM [Benchmark Blocks](/goals-or-benchmark-actions).

4.  **Conditionals:** Conditionals will let you set multiple paths based on if/else conditions. Learn more about [FluentCRM Conditionals](/conditional-automation-actions).

First, go to **Automations** in the FluentCRM navbar. Then click the **New Automation** button to add an automation funnel.

![new automation](/integrations/tutorlms-integration-with-fluentcrm/New-Automation.webp)

A pop-up window appears. Select **TutorLMS** from the left sidebar to see the three available TutorLMS triggers:

-   **Course Enrolled:** Runs the automation when a student is enrolled in a course.
-   **Course Completed:** Runs the automation when a student completes a course.
-   **Lesson Completed:** Runs the automation when a student completes a lesson.

Select a trigger and click the **Continue** button.

![tutorlms trigger](/integrations/tutorlms-integration-with-fluentcrm/tutorlms-trigger.webp)

A settings panel opens on the right. The screenshot below shows the **Course Enrolled** trigger. Here you can:

-   Edit the **Automation Name** and add an **Internal Description**.
-   Select the **Subscription Status** contacts need to run through the automation. Check **Run the automation actions even if the contact status is not subscribed** to include other statuses.
-   Under **Conditions**, choose what happens if the contact already exists: **Update if Exist** or **Skip this automation if contact already exist**.
-   Select **Target Courses** to run the automation only for those courses. Leave it blank to run it for any course enrollment.
-   Check **Restart the Automation Multiple times for a contact for this event** if you want the automation to restart for a contact who is already in it. Otherwise, FluentCRM skips contacts who already exist in the automation.

Click **Save Settings** to save all your changes.

![tutorlms trigger in fluentcrm](/integrations/tutorlms-integration-with-fluentcrm/TutorLms-trigger-in-FluentCRM.webp)

After you set up the trigger, you can design your marketing automation workflow using Actions, Goals, and Conditions.

## Action Blocks

[Actions blocks](/primary-automation-actions) are tasks that you wish to trigger from your side. Click the plus icon on the Automation Funnel page, then select **Add Action / Goal**.

![tutorlms actions goal](/integrations/tutorlms-integration-with-fluentcrm/Tutorlms-actions-goal.webp)

A panel opens on the right with the available action blocks. You can select any action block to automate your workflow.

Under the **TutorLMS** group, FluentCRM offers two action blocks designed for TutorLMS marketing automation.

**Enroll To Course:** Enrolls the contact in a specific LMS course.

**Remove From a Course:** Removes the contact from a specific LMS course.

![tutorlms two trigger in fluentcrm](/integrations/tutorlms-integration-with-fluentcrm/TutorLMS-two-Trigger-in-FluentCRM.webp)

Select **Enroll To Course** and a panel opens on the right. In this panel:

-   Enter an **Internal Label** and an **Internal Description**.
-   Select the course from **Select Course to Enroll**.
-   Check **Do not enroll the course if contact is not an existing WordPress User** to skip contacts who don't have a WordPress account.
-   Leave **Send default WordPress Welcome Email for new WordPress users** checked to send the welcome email. If no user exists with the contact's email address, FluentCRM creates a WordPress user.

Click **Save Settings**.

![enroll action in tutorlms](/integrations/tutorlms-integration-with-fluentcrm/enroll-action-in-tutorlms.webp)

## Goals

[Goals blocks](/goals-or-benchmark-actions) are goal or action items that your user might do. They let you measure these steps and automate the funnel based on goal completion. Click the plus icon (+), select **Add Action / Goal**, and open the **Goals** tab.

![tutorlms goals in fluentcrm](/integrations/tutorlms-integration-with-fluentcrm/TutorLMS-goals-in-FluentCRM.webp)

Select a goal to configure it. The screenshot below uses **List Applied**. Here you can:

-   Add an **Internal Label** and an **Internal Description**.
-   Select the lists in **Select Lists**.
-   Choose **Run When**: the contact is added to any of the selected lists, or to all of them.
-   Choose the **Benchmark type**: **Optional Point** works as an optional trigger point, and **Essential Point** makes the funnel wait for this step before it processes further actions.
-   Check **Contacts can enter directly to this sequence point** to let any contact who meets the goal enter the funnel at this point.

Click **Save Settings**.

![goal list apply](/integrations/tutorlms-integration-with-fluentcrm/goal-list-apply.webp)

## Condition

[Conditionals](/conditional-automation-actions) are conditional logic. If you want to automate different activities based on If/Else conditions, you can choose a conditional. For TutorLMS, FluentCRM allows you to automate different activities based on whether a student in the automation has enrolled in a course.

Click the plus icon (+) and select **Conditional Action**, or open the **Conditionals** tab and choose **Check Condition**.

![tutorlms conditional in fluentcrm](/integrations/tutorlms-integration-with-fluentcrm/TutorLMS-Conditional-in-FluentCRM.webp)

Under **Specify Matching Conditions**, click **Add Property** to pick a contact property, choose an operator such as **includes**, and enter the **Condition Value**. Click **+ OR** to add another group of conditions. FluentCRM runs the yes blocks when the contact matches and the no blocks when it doesn't. Click **Save Settings** to finish.

![tutorlms check condition settings](/integrations/tutorlms-integration-with-fluentcrm/add-condition.webp)

If you want to use other conditionals please check out this [documentation](/conditional-automation-actions).

After contacts go through the enrollment, open a contact's profile and click the **Courses** tab. The **TutorLMS Courses** table lists each course's **ID**, **Course Name**, **Started At**, and **Progress**.

![course contact details](/integrations/tutorlms-integration-with-fluentcrm/Course-Contact-details-1.webp)

## Advanced Filtering Option in FluentCRM

With the help of advanced filtering, you can use various key data points such as last **enrollment date**, **first enrollment data**, **courses enrolled**, **enrolled categories**, and **enrollment tags**. it can be as simple as checking whether a contact is a student or not. That makes it easy to send hyper-targeted emails and run automation.

To filter your course data, go to **Contacts** in the FluentCRM navbar, turn on the **Advanced Filter** toggle, and click **Add Property** to start filtering.

![start lms advanced filter](/integrations/tutorlms-integration-with-fluentcrm/start-LMS-Advanced-filter.webp)

Select **TutorLMS** in the property list, then choose a filter option. You can add multiple properties to filter your LMS data.

-   Last Enrollment Date
-   First Enrollment Date
-   Enrollment Courses
-   Enrollment Categories
-   Enrollment Tags
-   Is a Student
-   Completed Lessons

Set the operator and value for each property, then click **Apply Filters**. To keep the result for later, click **Save as Segment**.

![advanced filtering tutorlms](/integrations/tutorlms-integration-with-fluentcrm/Advanced-Filtering-tutorlms.webp)

### Filter by Completed Lessons

>[!Note]
> This filter requires **FluentCRM Pro**. [See what's included →](/how-to-install-upgrade-and-activate-license)

To reach students who finished a particular TutorLMS lesson, or the ones who haven't, choose **Completed Lessons** in the TutorLMS group of the Advanced Filter. Select one or more lessons, then choose whether contacts must have completed any of them, all of them, or none of them. The results come straight from TutorLMS's own progress records, so they stay current without a re-sync. The lesson list shows lessons that sit inside a topic and a course. Read [Completed Lessons (LMS Filter)](/advanced-filter#completed-lessons-lms-filter) for every condition and its behavior.

## Advanced Reports

To view your course enrollment report, select **Reports** from the FluentCRM navbar. Then, click **TutorLMS** in the left sidebar to open **TutorLMS - Advanced Reports**. It shows your **Total Students** and **Total Course Enrollments**, with **Enrollments** and **Students Growth** tabs to chart them over a date range.

![tutorlms reports](/integrations/tutorlms-integration-with-fluentcrm/TutorLMS-Reports.webp)

So here is the entire process of integrating TutorLMS with FluentCRM.
