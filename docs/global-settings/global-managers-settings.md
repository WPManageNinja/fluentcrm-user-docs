---
title: "Managers"
slug: "global-managers-settings"
category: "global-settings"
order: 0
---

# Managers
## Prerequisites

Efficient management leads to better economic production which helps in turn to increase the welfare of the Business. Managers alongside the Administrators are responsible to manage the FluentCRM dashboard. In this tutorial, we will learn about Fluent CRM Managers and their permissions.

FluentCRM managers are WordPress users that will get permissions defined by the Administrator of the FluentCRM which is generally the WordPress Administrator. Users with any user role like subscribers can be a Manager of FluentCRM.

First of all, get the user email address for the user to whom you want to allow access or add as a Manager of FluentCRM.

![crm add manger users list 1](/global-settings/global-managers-settings/crm_add_manger_users_list-1.png)

## New Manager & Permissions

Now Go to **FluentCRM Dashboard** ➜ **Managers** ➜ **Add New Manager**

![crm add manager](/global-settings/global-managers-settings/crm_add_manager.png)

This will open a popup and now input the email address which we collected from the previous step. In the next section, there are a lot of permissions available to be assigned to the user or the new manager.

![crm create manager](/global-settings/global-managers-settings/crm_create_manager.png)

The available permissions are:

1.  **CRM Dashboard:** Access to FluentCRM dashboard. When any other plugin like Woocommerce is activated, it forces you to log in to Woocommerce My Account only instead of the **/wp-admin/** area for the **Subscriber** user role. This type of access will work without any issues for REST API Management. But if you want the user to log in to the Admin area then you need to escalate the FluentCRM Manager User role such as a **Contributor**. This permission will only let a Manager see the statistics available in the Dashboard.
2.  **Contacts Read:** This permission will grant the Manager to view all the contacts and their details. But the Manager will not be able to Edit, Delete or Update any contact details or contacts.
3.  **Contacts Edit/Update/Delete:** This will grant the Manager to Edit, Delete or Update any contact details or contacts.
4.  **Contact Tags/List/Segment Manage:** This permission will let the Manager access all the Lists, Tags, and Dynamic Segments along with editing and updating them.
5.  **Emails Read:** This permission will let the Manager view all Email Campaigns, Sequences, and All Email Activities. Also, the Manager will not be able to send or resend any emails.
6.  **Emails Write/Send/Delete:** This will allow the Manager to Duplicate, Delete, Send, or Resend Email Campaigns, Sequences, and Email Activities.
7.  **Email Templates Manage:** This will grant a Manager to Manage Email Templates.
8.  **Manage Forms:** A Manager will be able to Manage Fluent Forms connected to FluentCRM.
9.  **Automation Read:** A Manager will be able to view Automations and their reports.
10.  **Automation Write/Edit/Delete:** This will grant a Manager to manage automation.
11.  **Settings Manage:** This will let a manager access the Global Settings of the FluentCRM which is generally an Admin area.

![crm managers list](/global-settings/global-managers-settings/crm_managers_list.png)

When you are done with adding the new manager you will see them listed as CRM Managers along with their assigned permissions. If any user does not have sufficient permission granted he/ she will see an error message like the below:

![crm manager permission not granted](/global-settings/global-managers-settings/crm_manager_permission_not_granted.png)

**Note:** All the permissions are set or allowed or accessed globally. For example, a manager will have access to all the lists, tags, and contacts depending on the permission granted.

.