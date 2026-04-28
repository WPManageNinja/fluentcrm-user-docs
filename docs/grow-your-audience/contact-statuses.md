---
title: "Contact Statuses"
slug: "contact-statuses"
category: "grow-your-audience"
order: 0
---

# Contact Statuses 

FluentCRM offers a robust system for managing contact statuses, allowing you to control and segment your audience effectively. Understanding these statuses is crucial for proper contact management, high-performance email marketing, and accurate automation.

## Available Contact Statuses

In FluentCRM, a contact can be assigned one of the following seven statuses:

* **Subscribed:** These are active members who have explicitly opted in or were manually added. You can send them both promotional campaigns and automated transactional emails.
* **Pending:** Contacts in "waiting mode," typically used for Double Opt-in. No promotional emails are sent until the user clicks their confirmation link.
* **Unsubscribed:** Contacts who have opted out. You should never send promotional materials to these individuals to maintain compliance and sender reputation.
* **Transactional:** Reserved for contacts who receive only functional emails, such as receipts or shipping updates. They are excluded from newsletters and marketing campaigns.
* **Bounced:** Applied to invalid or non-existent addresses. FluentCRM stops further sending to these contacts to protect your deliverability.
* **Complained:** Contacts who marked your email as spam. Further communication should be avoided to protect your sender reputation.
* **Spammed:** This status is used to flag and isolate junk data or manually identified spam from your real marketing audience.

### Managing Statuses in Bulk

You can manually update the status of multiple contacts directly from the **All Contacts** dashboard:

1.  Select the desired contacts using the checkboxes.
2.  Click the **Change Contact Status** dropdown menu.
3.  Choose the new status (e.g., **Subscribed**, **Pending**, or **Spammed**) and click **Confirm**.

![Contact Status](/grow-your-audience/contacts-status/contact-status-1.webp)

### Best Practices for Status Management

* **Automated Syncing:** Configure Webhooks or Bounce Handlers with your email provider so **Bounced** and **Complained** statuses update automatically in real-time.
* **Respect Unsubscribes:** Never manually move an "Unsubscribed" contact back to "Subscribed" without the user's explicit request.
* **Hygiene Maintenance:** Periodically review and consider deleting contacts in **Bounced** or **Spammed** lists to keep your database healthy and reduce costs.

By effectively managing these statuses, you ensure a healthy email list, improved deliverability, and compliance with global marketing regulations.

