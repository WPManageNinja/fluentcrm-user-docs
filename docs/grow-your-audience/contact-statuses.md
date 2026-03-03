---
title: "Contact Statuses"
slug: "contact-statuses"
category: "grow-your-audience"
order: 0
---

# Contact Statuses
## Contact Statuses in FluentCRM

FluentCRM offers a robust system for managing contact statuses, allowing you to control and segment your audience effectively. Understanding these statuses is crucial for proper contact management, email marketing, and automation.

In FluentCRM, a contact can have one of the following six statuses:

1.  Subscribed
2.  Pending
3.  Unsubscribed
4.  Bounced
5.  Complained
6.  Transactional

Let's delve into each status to understand its implications and use cases.

### Subscribed Contacts

**Status: subscribed**

-   These are your active and engaged contacts.
-   Subscribed contacts have explicitly opted in to receive your communications or you directly added as subscribed.
-   You can send all types of emails (promotional and transactional) to these contacts.
-   All automation workflows can be run for subscribed contacts.

**Key Points:**

-   Ideal for your main email marketing efforts.
-   These contacts form the core of your active audience.

### Pending Contacts

**Status: pending**

-   Contacts in this status are awaiting confirmation of their subscription.
-   Typically, these contacts have signed up through a double opt-in process but haven't confirmed their subscription yet.
-   You cannot send campaign or promotional emails to pending contacts.
-   Automation can be run for pending contacts if you enable that in the automation configuration, mainly focused on getting them to confirm their subscription. Please note that no email from the automation will be sent but other actions will run.

**Key Points:**

-   Used in double opt-in processes to ensure subscriber intent.
-   These contacts need to confirm their subscription to move to 'subscribed' status.

### Unsubscribed Contacts

**Status: unsubscribed**

-   These contacts have opted out of your communications.
-   A contact can become unsubscribed by:

1.  Clicking an unsubscribe link in an email.
2.  Being manually unsubscribed by an admin.

-   You should not send promotional emails to unsubscribed contacts.
-   Automation can be run for pending contacts if you enable that in the automation configuration, mainly focused on getting them to confirm their subscription. Please note that no email from the automation will be sent but other actions will run.

**Key Points:**

-   Respect this status to maintain a good sender reputation and comply with email regulations.

### Bounced Contacts

**Status: bounced**

-   This status is applied to contacts whose email addresses have resulted in hard bounces.
-   FluentCRM can automatically mark contacts as bounced when integrated with certain email service providers if you configure the bounce handler with your email-sending service.
-   No emails will be sent to these contacts from FluentCRM unless resubscribed.

**Key Points:**

-   Regularly clean your list by removing or attempting to update bounced contacts.
-   Set up proper bounce handling in your email service provider integration.

### Complained Contacts

**Status: complained**

-   Contacts who have marked your emails as spam receive this status.
-   This status helps protect your sender's reputation.
-   Avoid sending further communications to these contacts.

**Key Points:**

-   Take complaints seriously and review your email practices if you receive many complaints.
-   Consider removing these contacts from your list entirely.

### Transactional Contacts

**Status: transactional**

-   This status is for contacts who should receive only transactional emails.
-   Campaign emails will not be sent but emails from automation will be sent.
-   You can set this status manually from bulk action or automation trigger. This is the default status for the WooCommerce Abandon Cart Module in FluentCRM

## Best Practices for Managing Contact Statuses

1.  Regularly review and clean your contact list.
2.  Set up proper integrations for automatic status updates (especially for bounces and complaints).
3.  Respect unsubscribe requests promptly.
4.  Use segmentation based on status for targeted and appropriate communication.
5.  Implement a re-engagement strategy for unengaged subscribers before they unsubscribe.

By effectively managing these statuses, you can maintain a healthy email list, improve deliverability, and ensure compliance with email marketing best practices and regulations.