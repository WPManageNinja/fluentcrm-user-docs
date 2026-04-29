---
title: "Event Tracking Record"
slug: "event-tracking-record"
category: "event-tracking"
order: 0
---

# Event Tracking Record

For Tracking Event Records create an Automation Funnel. Select **Tracking Event Recorded** automation Trigger. Click on the **Continue** button after that.

![Tracking Record](/event-tracking/event-tracking-record/tracking-record-1.webp)

Here you’ll add your Automation name. You can also edit it.

 * **Event Key:** Put your Event Keywords.
 * **Internal description:** Enter a Description of the description of your event.
 * **Minimum Occurrence:** To set a **Minimum Occurrence** count for the event, click the Plus “+” icon. By default, the count is set to 1.

After that click the **save setting** button to store your Tracking Events Record.

>[!Note]
> The minimum occurrence count will only trigger if the contact is on the subscribed list.

![Tracking Event Recorded](/event-tracking/event-tracking-record/tracking-event-recorded-2.webp)

Add an action by clicking the **Add Action/Goal** button. 

![Add Action](/event-tracking/event-tracking-record/add-action-3.webp)

Now opens a new popup on the right side. Here select **Add Event Tracking** action blocks.

![Add Event Tracking](/event-tracking/event-tracking-record/add-event-tracking-4.webp)

Here appears a new popup and see **Add Event Tracking to contact profile**. Now Enter the **Internal Label**, **Internal Description**, **Tracking key**, **Event tracking Title**, and **Event value**. Then click the **Save Settings** button to save the action.

![Event Tracking](/event-tracking/event-tracking-record/add-event-tracking-5.webp)

Now add another **Action** block to actions. 

![add action block](/event-tracking/event-tracking-record/add-action-6.webp)

Now add **internal Lable** and **Internal Description**. Select the FluentCRM contact that you want to run your Tracking Record. Click the **Save Settings** button.

![Save Settings](/event-tracking/event-tracking-record/save-settings-7.webp)

Here, See the Event Tracking Record.

![Event Tracking Record](/event-tracking/event-tracking-record/event-tracking-record-8.webp)

## Filter Data Properties 

If you want to **Check the Condition** of your contact data then you can set up these data filters. To filter Specific data, click the Plus (+) icon and then the **Conditional Action**. 

![Condition](/event-tracking/event-tracking-record/condition-9.webp)

Here appears a new popup. Type the **Internal Lable** name and **Internal Description** shown in the screenshot below.

>[!Note]
> Specify which contact properties need to be matched. Based on the Condition it will run yes blocks or no blocks

Now Click on the + **Add** icon to add a Data Filter to Specify the Matching Condition Section. Then click **Event Tracking** and click the particular one. Each time you can add multiple data filters.

You can use the **“+OR”** button to add multiple conditions and the **Delete** icon to delete conditions.

After clicking the add button you’ll see **Event Tracking**.

-   Event Key
-   Event Occurrence Count
-   Event Value
-   Event Title

![Event Tracking](/event-tracking/event-tracking-record/event-tracking-10.webp)

-   **Event key:** A filter for **"in"** and **"not in,"** which indicates whether the specified event key should be included or excluded. Enter a keyword that is likely used to match event keys or values for the condition.

_If the event key is the same don’t create a new event it was just created._



![Event Key](/event-tracking/event-tracking-record/event-key-11.webp)

-   **Event Occurrence Count:** The number you provided matches the count of times the selected event has occurred.

![Event Occurrence](/event-tracking/event-tracking-record/event-ocurrence-12.webp)

-   **Event Value:** The compare value will be matched with the selected event & last recorded value of the selected event key.

![Event Value](/event-tracking/event-tracking-record/event-value-13.webp)

-   **Event Title:** Filter by match Title.

![Event Title](/event-tracking/event-tracking-record/Event-titile-14.webp)

If you want to track events programmatically, please check out [the developer's doc here](https://developers.fluentcrm.com/modules/event-tracking/).
