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
7. Spammed

Let's delve into each status to understand its implications and use cases.

### Subscribed Contacts

**Status: subscribed**

These are your active members. These contacts have explicitly opted in to receive your marketing materials or were manually added as subscribed.

 * **Email Ability:** You can send both promotional campaigns and automated transactional emails.
 * **Automation:** All automation workflows run fully for these contacts.

### Pending Contacts

**Status: pending**

Contacts in this status are in "waiting mode." This usually happens when you have Double Opt-in enabled; the user has signed up but hasn't clicked the confirmation link in their email yet.

 * **Email Ability:** You cannot send campaign or promotional emails to them.
 * **Automation:** Automations can trigger, but no emails will be sent until they confirm.

### Unsubscribed Contacts

**Status: unsubscribed**

These contacts have opted out of your communications.

 * **How it happens:** A contact can become unsubscribed by clicking an unsubscribe link in an email or being manually updated by an admin.
 * **Compliance:** You should not send promotional emails to unsubscribed contacts to maintain a good sender reputation and comply with regulations.

### Bounced Contacts

**Status: bounced**

This status is applied to contacts whose email addresses resulted in "hard bounces" (invalid or non-existent addresses).

 * **Automatic Handling:** FluentCRM can automatically mark contacts as bounced if you have configured the bounce handler with your email-sending service (e.g., SES, Mailgun, Elastic Email).
 * **Protection:** No further emails will be sent to these contacts to protect your deliverability.

### Complained Contacts

**Status: complained**

Contacts who have marked your emails as spam receive this status via your email service provider's feedback loop.

 * **Action:** You should avoid sending any further communications to these contacts to protect your sender reputation.

### Spammed

**Status: spammed**

This status is used for contacts that are identified or manually flagged as spam. This helps isolate junk data from your real marketing audience.


### Transactional Contacts

**Status: transactional**

This status is for contacts who should receive only functional emails (like receipts, password resets, or shipping updates).

 * **Email Ability:** Campaign/Newsletter emails will not be sent, but automated transactional emails triggered by actions (like a WooCommerce purchase) will be delivered.

## Best Practices for Managing Contact Statuses

 * **Set up Automatic Sync:** Always configure Webhooks or Bounce Handlers with your email provider so **Bounced** and **Complained** statuses update in real-time.
 * **Respect Unsubscribe Requests:** Never manually move an "Unsubscribed" contact back to "Subscribed" without the user's explicit request.
 * **List Hygiene:** Periodically review your **Bounced** and **Spammed** lists and consider deleting those contacts to keep your database healthy and your costs low.

By effectively managing these statuses, you can maintain a healthy email list, improve deliverability, and ensure compliance with email marketing best practices and regulations.