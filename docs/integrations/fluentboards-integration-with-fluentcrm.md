---
title: "FluentBoards integration with FluentCRM"
slug: "fluentboards-integration-with-fluentcrm"
category: "integrations"
order: 0
---

# FluentBoards integration with FluentCRM

[**FluentBoards**](https://fluentboards.com/) is the team-collaboration and project-management plugin from the WPManageNinja family. With the [**FluentCRM**](https://fluentcrm.com/) integration, your CRM can react to project activity in FluentBoards – board memberships, task assignments, stage changes – and your CRM data can power the people you work with on each board.

In this article, you'll learn how to connect FluentBoards with FluentCRM and which automation building blocks become available once both plugins are active.

## Connecting FluentCRM with FluentBoards

The integration loads automatically whenever both plugins are active – there is no API key or third-party connector to configure.

1. Make sure **FluentCRM** (free or Pro) and **FluentBoards** are installed and activated.
2. In WordPress, go to **FluentCRM → Settings → Integrations**.
3. Confirm that **FluentBoards** appears in the list with a green "Active" badge.

> **Note:** The free version of FluentCRM is enough to start automating FluentBoards workflows. Some advanced triggers and actions require **FluentCRM Pro**.

## Automation triggers for FluentBoards

To set up automation for FluentBoards, go to **FluentCRM → Automations**, click **+ New Automation**, give it a label, and select **FluentBoards** from the trigger sidebar.

Available triggers include:

-   **Member Added to Board** – Fires when a user is invited to a FluentBoards board. Great for sending an onboarding email or applying a project-specific tag.
-   **Member Removed from Board** – Fires when a user is removed from a board. Use it to clean up tags or move the contact to a different list.
-   **Task Assigned to Member** – Fires whenever a task is assigned to a particular user. Useful for "your task is waiting" reminders.
-   **Task Stage Changed** – Fires when a task moves columns/stages (e.g. **In Progress → Done**). Drives status-change notifications.
-   **Task Completed** – Fires when a task is marked complete. Ideal for kicking off a "thank you" message or a follow-up automation.

> Trigger availability depends on the version of FluentBoards you have installed. If you don't see a trigger listed here, update FluentBoards to the latest version.

## Automation actions for FluentBoards

Click the **+** between any two automation steps and choose **FluentBoards** under **Add Action / Goal**. The available actions let you push CRM activity back into FluentBoards:

-   **Add Member to Board** – Add the contact's WordPress user to a specific board.
-   **Remove Member from Board** – Remove the contact from a board.
-   **Create a Task** – Spin up a task on a chosen board/stage with a templated title and description.
-   **Assign a Task** – Assign an existing task to the contact.

## Bulk contact actions

You can also manage board membership directly from your contact list without setting up a full automation.

1. Go to **FluentCRM → Contacts → All Contacts**.
2. Select the contacts you want to add or remove.
3. Open the **Select Action** dropdown and choose a FluentBoards action (e.g. **Add to Board**, **Remove from Board**).
4. Pick the target board and click **Confirm**.

This is handy when you onboard a new team or rotate contributors between projects.

## Use cases

-   **Onboarding a new contributor:** Trigger on **Member Added to Board** → send a welcome email with the project brief, then apply a tag like *Active Contributor*.
-   **Stalled-task nudge:** Combine **Task Assigned** with a delay action and a check-condition – if the task has not moved stage in 3 days, send a friendly reminder.
-   **Project completion celebration:** Trigger on **Task Completed** for a "Final Sign-off" task → fire a campaign email and update a custom field.

If you have any questions about the FluentBoards integration, please feel free to [contact us](https://wpmanageninja.com/support-tickets/).
