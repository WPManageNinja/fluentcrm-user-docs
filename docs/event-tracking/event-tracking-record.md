---
title: "Event Tracking Record"
slug: "event-tracking-record"
category: "event-tracking"
order: 0
---

# Event Tracking Record
For Tracking Event Records create an Automation Funnel. Give an Internal Label and select **Tracking Event Recorded** automation Trigger. Click on the **Continue** button after that.

![11](/event-tracking/event-tracking-record/11.webp)

Here you’ll add your Automation name. You can also edit it.

**Event Key:** Put your Event Keywords.

**Internal description:** Enter a Description of the description of your event.

**Minimum Occurrence:** To set a **Minimum Occurrence** count for the event, click the Plus “+” icon. By default, the count is set to 1.

After that click the **save setting** button to store your Tracking Events Record.

> The minimum occurrence count will only trigger if the contact is on the subscribed list.

![12](/event-tracking/event-tracking-record/12.webp)

Add an action by clicking the **Add Action/Goal** button. 

![13](/event-tracking/event-tracking-record/13-scaled.webp)

Now opens a new popup on the right side. Here select **Add Event Tracking** action blocks**.**

![14](/event-tracking/event-tracking-record/14-scaled.webp)

Here appears a new popup and see **Add Event Tracking to contact profile**. Now Enter the **Tracking key**, **Event tracking Title**, and **Event value**. Then click the **Save Settings** button to save the action.

![15 profile](/event-tracking/event-tracking-record/15-profile.webp)

Now add another action block to actions. 

![16](/event-tracking/event-tracking-record/16-scaled.webp)

Now add **internal Lable** and **Internal Description**. Select the FluentCRM contact that you want to run your Tracking Record. Click the **Save Settings** button.

![17](/event-tracking/event-tracking-record/17.webp)

Here, See the Event Tracking Record.

![18](/event-tracking/event-tracking-record/18-1.webp)

## Filter Data Properties 

If you want to **Check the Condition** of your contact data then you can set up these data filters. To filter Specific data, click the Plus (+) icon and then the **Conditional Action**. 

![19](/event-tracking/event-tracking-record/19-2-scaled.webp)

Here appears a new popup. Type the **Internal Lable** name and **Internal Description** shown in the screenshot below.

> Specify which contact properties need to be matched. Based on the Condition it will run yes blocks or no blocks

Now Click on the + **Add** icon to add a Data Filter to Specify the Matching Condition Section. Then click **Event Tracking** and click the particular one. Each time you can add multiple data filters.

You can use the **“+OR”** button to add multiple conditions and the **Delete** icon to delete conditions.

After clicking the add button you’ll see **Event Tracking**.

-   Event Key
-   Event Occurrence Count
-   Event Value
-   Event Title

![21](/event-tracking/event-tracking-record/21.webp)

-   **Event key:** A filter for **"in"** and **"not in,"** which indicates whether the specified event key should be included or excluded. Enter a keyword that is likely used to match event keys or values for the condition.

_If the event key is the same don’t create a new event it was just created._

![22](/event-tracking/event-tracking-record/22.webp)

-   **Event Occurrence Count:** The number you provided matches the count of times the selected event has occurred.

![23](/event-tracking/event-tracking-record/23.webp)

-   **Event Value:** The compare value will be matched with the selected event & last recorded value of the selected event key.

![24](/event-tracking/event-tracking-record/24.webp)

-   **Event Title:** Filter by match Title.

![image](/event-tracking/event-tracking-record/image-1.png)

If you want to track events programmatically, please check out [the developer's doc here](https://developers.fluentcrm.com/modules/event-tracking/).

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/).