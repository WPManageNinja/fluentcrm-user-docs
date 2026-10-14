---
title: "FluentSupport integration with FluentCRM"
slug: "fluentsupport-integration-with-fluentcrm"
category: "integrations"
order: 0
---

# FluentSupport integration with FluentCRM

[**FluentSupport**](https://fluentsupport.com/) is the WordPress helpdesk from the WPManageNinja family. Connect it to FluentCRM and your support customers become contacts, your agents can tag and segment those contacts without leaving a ticket, and your automations can open tickets on their own.

The integration works in both directions. FluentSupport pushes customers into FluentCRM and edits their tags and lists. FluentCRM shows each contact's tickets and creates tickets from automations.

## Requirements

There is nothing to connect and no API key. The integration switches on when both plugins are active.

- **FluentCRM** (free or Pro) and **FluentSupport** are installed and activated.
- **FluentSupport Pro** is only needed for the [workflow actions](#fluentsupport-workflows-pro) at the end of this page.

>[!Note]
> FluentCRM does not add any FluentSupport triggers. Support events do not start a FluentCRM automation by themselves. Use the [FluentSupport workflow actions](#fluentsupport-workflows-pro) to start an automation from a ticket.

## Sync FluentSupport customers to FluentCRM

When a new customer appears in FluentSupport, usually because they submit their first ticket, FluentSupport can add them to FluentCRM for you. The setting lives on the FluentSupport side and is off by default.

1. In WordPress, go to **Fluent Support → Settings**.
2. Open **FluentCRM Integration** in the settings menu.
3. Tick **Enable FluentCRM Integration**.
4. Fill in the options below, then click **Save Settings**.

![Screenshot of the FluentCRM Integration settings in FluentSupport](/integrations/fluentsupport-integration-with-fluentcrm/fluentsupport-crm-settings.webp)

- **Default status for new contacts**: Choose **Subscribed** or **Pending**. With **Pending**, a brand-new contact receives a double opt-in email.
- **Add to FluentCRM list (optional)**: The list every synced customer joins.
- **Add to Tags**: One or more tags every synced customer receives.

If the customer's email already belongs to a FluentCRM contact, FluentSupport updates that contact's name and address and keeps the existing email and status. It still adds the list and tags you chose.

>[!Warning]
> Someone who opens a support ticket has not necessarily agreed to marketing emails. If that matters for your audience or your local privacy rules, choose **Pending** so new contacts confirm first.

>[!Note]
> The sync runs when FluentSupport creates a customer. It does not backfill customers who already exist in FluentSupport.

## Manage a contact's tags and lists from a ticket

Agents can see and change the customer's FluentCRM data on the ticket screen. Open any ticket in FluentSupport and look at **Customer Informations** in the right sidebar. When the customer's email matches a FluentCRM contact, a **CRM** section appears with:

- The contact's status, such as **Subscribed**. Click the badge to open the contact in FluentCRM in a new tab.
- **Contacts Tag** with the tags the contact has.
- **Contacts List** with the lists the contact belongs to.

![Screenshot of a FluentSupport ticket with the CRM status, Contacts Tag and Contacts List in the sidebar](/integrations/fluentsupport-integration-with-fluentcrm/ticket-crm-sidebar.webp)

If the contact's name in FluentCRM differs from the customer's name in FluentSupport, the FluentCRM name also appears beside the status badge so you can spot the mismatch.

To change tags or lists, click the **+** button next to **Contacts Tag** or **Contacts List**. A box titled **Apply / Remove Tags on FluentCRM Profile** (or **Apply / Remove Lists on FluentCRM Profile**) opens with the contact's current selection. Add or remove items, then click **Update Settings**.

![Screenshot of the Apply / Remove Tags on FluentCRM Profile box in a FluentSupport ticket](/integrations/fluentsupport-integration-with-fluentcrm/ticket-crm-tag-picker.webp)

What you save becomes the contact's full set, so anything you remove from the box is removed from the contact.

>[!Note]
> The CRM section only appears for customers who already exist as FluentCRM contacts. The **+** buttons only appear if your account can manage contacts in FluentCRM. Without that permission you can see the tags and lists but not change them.

## See a contact's tickets in FluentCRM

Open a contact in **FluentCRM → Contacts** and click the **Tickets** tab. The **Support Tickets by Fluent Support** table lists every ticket from the customer with the same email: the ticket ID, title, status, when it was submitted, and a **View Ticket** link that opens the ticket in FluentSupport.

![Screenshot of the Tickets tab on a FluentCRM contact profile](/integrations/fluentsupport-integration-with-fluentcrm/contact-tickets-tab.webp)

The match is by email address. A contact with no matching FluentSupport customer has no tickets to list.

## Create a ticket from an automation

FluentSupport adds a **Fluent Support** group of actions to the FluentCRM automation editor with one block, **Create Support Ticket**. Use it when something in your funnel needs a human, such as a VIP contact getting a tag or a customer reaching a milestone.

1. Open an automation, click the **+** between two steps, and choose **Add Action / Goal**.
2. Pick **Create Support Ticket** under **Fluent Support**.
3. Fill in the ticket and save the step.

The block has these fields:

- **Ticket Title**: Required. Supports smart codes, so you can write something like a subject that includes the contact's name.
- **Ticket Description**: Required. Supports smart codes.
- **Default Business Inbox**: The FluentSupport inbox that receives the ticket. If you leave it empty, FluentSupport uses its default inbox.
- **Default Assigned Agent (optional)**: The agent who owns the ticket.
- **Priority (Admin)**: **Normal**, **Medium**, or **Critical**.

If the contact has no FluentSupport customer record yet, FluentSupport creates one. If the title or description is empty, the step is skipped and the contact moves on. For the full walkthrough with screenshots, see [Miscellaneous Automation Actions](/miscellaneous-automation-actions).

## FluentSupport workflows (Pro)

With FluentSupport Pro, go to **Fluent Support → Workflows** and create a workflow. The trigger can be **On Ticket Creation**, **On Customer Response**, **On Ticket Reopened**, **On Agent Response**, **On Agent Assigned**, **On Customer Feedback**, or **On Ticket Closed**. Once FluentCRM is active, the workflow editor gains FluentCRM actions and conditions that act on the ticket's customer.

**Actions**

- **Add To FluentCRM Tag(s)**
- **Remove From FluentCRM Tag(s)**
- **Add To FluentCRM List(s)**
- **Remove From FluentCRM List(s)**
- **Run Automation**: Starts the FluentCRM automation you select for the customer. If the customer isn't a contact yet, FluentSupport creates the contact first.

**Conditions**

- **Customer CRM Tag(s)**: Match tickets whose customer has the tags you pick.
- **Customer CRM List(s)**: Match tickets whose customer is on the lists you pick.

This is how support activity starts a FluentCRM automation. For example, a workflow that runs **On Ticket Closed** can use **Run Automation** to start a follow-up sequence in FluentCRM.

>[!Note]
> Workflows are part of **FluentSupport Pro**. For setup, triggers, and the other actions, see the [FluentSupport documentation](https://fluentsupport.com/docs/).
