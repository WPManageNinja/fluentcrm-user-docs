---
title: "FluentSupport integration with FluentCRM"
slug: "fluentsupport-integration-with-fluentcrm"
category: "integrations"
order: 0
---

# FluentSupport integration with FluentCRM

[**FluentSupport**](https://fluentsupport.com/) is the WordPress-native helpdesk plugin from the WPManageNinja family. The integration with [**FluentCRM**](https://fluentcrm.com/) lets you turn support activity into marketing intelligence – tag customers based on the products they raise tickets about, drop support agents into segmented campaigns, and trigger automations when tickets are opened, replied to, or closed.

This article walks you through enabling the integration and the automation building blocks that become available.

## Connecting FluentCRM with FluentSupport

The integration loads automatically once both plugins are active.

1. Make sure **FluentCRM** (free or Pro) and **FluentSupport** are installed and activated.
2. Go to **FluentCRM → Settings → Integrations**.
3. Confirm that **FluentSupport** appears in the list and is enabled.

> **Note:** Some advanced triggers and actions require **FluentCRM Pro**. The free FluentCRM plugin is enough to drive basic ticket-event automations.

## Automation triggers for FluentSupport

Go to **FluentCRM → Automations**, click **+ New Automation**, then choose **FluentSupport** in the trigger sidebar.

Available triggers include:

-   **Ticket Created** – Fires the moment a new support ticket is opened. Useful for tagging the customer's contact record (e.g. *Recent Support Ticket*) or sending a "we got your message" reassurance email.
-   **Ticket Replied (by Agent)** – Fires when an agent replies. Good for triggering follow-up satisfaction surveys later in the funnel.
-   **Ticket Closed** – Fires when a ticket is marked resolved. Perfect for queuing a CSAT email or removing temporary support tags.
-   **Customer Reply Received** – Fires when the customer responds. Useful for tagging "active conversation" leads.

## Automation actions for FluentSupport

Inside any automation, click the **+** between two steps and choose **FluentSupport** to expose actions such as:

-   **Create Support Ticket** – Open a ticket on behalf of the contact, with a templated subject/body, agent assignment, and product reference.
-   **Add Internal Note to Ticket** – Append an automated note to a referenced ticket (handy for cross-system audit trails).
-   **Update Ticket Status** – Mark a ticket open/closed/pending based on CRM activity.

## Smart codes

Once FluentSupport is active, the following smart codes become available inside FluentCRM emails:

-   `##fs.last_ticket_subject##` – The subject of the contact's most recent ticket.
-   `##fs.last_ticket_status##` – The current status of that ticket.
-   `##fs.open_tickets_count##` – Count of currently-open tickets for the contact.

Combine these with [Conditional Sections](/docs/conditional-sections-in-fluentcrm-email-editor) to send entirely different messages to "happy customer" vs. "open ticket" segments.

## Use cases

-   **Service-recovery sequence:** Trigger on **Ticket Closed** → wait two days → send a CSAT email with a satisfaction smart link.
-   **Tag-by-product:** Trigger on **Ticket Created** with a condition on the ticket's product → apply a product-specific tag in FluentCRM for re-engagement campaigns.
-   **Power-user identification:** Apply a *Power User* tag after a contact closes their fifth ticket – it's an excellent leading indicator for testimonials and case studies.
