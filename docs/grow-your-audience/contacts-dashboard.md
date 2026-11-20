---
title: "Contacts Dashboard"
slug: "contacts-dashboard"
category: "grow-your-audience"
order: 0
---

# Contacts Dashboard

FluentCRM provides an excellent contacts dashboard that represents all the necessary summaries of the activities. Total Contacts Paginated, Filter by Tags, Lists, Status & Segment, Advanced Filter with numerous data, Searchbox, Import & Export of the contacts, Bulk Actions on Contact Selection, and many more on the front page or the Contacts Dashboard.


https://www.youtube.com/watch?v=tKrGDW6L62Y

> **New in v3:**
>
> -   **Bulk-action floating bar** – When you select one or more contacts, a floating action bar appears at the bottom of the screen with the most-used bulk actions (apply tag/list, change status, send double opt-in, export, delete). It stays in view as you scroll, so you no longer have to scroll back to the top to apply an action.
> -   **Up to 600 contacts per page** – The pagination dropdown now goes up to **600 / page** for power users managing very large lists.
> -   **Segments menu item** – **Contacts → Segments** sits alongside Lists, Tags, and Companies for quick access to [Dynamic Segments](/segment-your-audience#dynamic-segments).

![contacts fluentcrm](/grow-your-audience/contacts-dashboard/Contacts-FluentCRM.webp)

The key points are discussed below:

### 1\. **Filter By Lists:**

This is a dropdown option where you will see all the Lists you have created and if you want you can filter by each or multiple Lists depending on your selection. More on this is discussed in the [Basic Filters & Pagination](#Basic-Filters-Pagination) below.

### 2\. Filter By Tags:

This is another dropdown option where you will see all the Tags you have created and if you want you can filter by each or multiple Tags depending on your selection. More on this is discussed in the [Basic Filters & Pagination](#Basic-Filters-Pagination) below.

### 3\. Filters Popover (Status, Segment, Added, Company, Purchase History):

The funnel button next to the **Advanced Filter** switch opens a popover with the rest of the quick filters: contact status, dynamic segment, when the contact was added, company, and purchase history. A dot appears on the funnel while any of them is active. More on this is discussed in [Filters Popover](#Filters-Popover) below.

### 4\. Add Contact:

FluentCRM provides an easy way to add a new contact with a popup letting you add contact details. More on Adding a new Contact is discussed in [Add New Contact.](/manage-contacts/#Add-New-Contact)

### 5\. Import:

With this option, you can import contacts from different sources like CSV files, WordPress Users, 3rd Party sources like Active Campaign, etc. More on Importing Contacts are discussed in [Import Contacts](/manage-contacts/#Import-Contacts).

### 6\. Export:

To Export all or specific contacts by limits along with data properties selected you can use this FluentCRM option. More on exporting contacts are discussed in [Export Contacts.](/manage-contacts/#Export-Contacts)

### 7\. Advanced Filter:

This is a very advanced filter that provides numerous data types and also puts logical conditions like AND & OR to filter your contacts based on advanced data conditions. More on Advanced Filter are discussed in [Advanced Filter.](/advanced-filter)

### 8\. Searchbox:

A search box where you will be able to search for contacts by email address or name.

### 9\. Columns:

Contacts have numerous data fields and you can customize the view according to your needs by selecting the suitable fields as columns beside the contacts to get an overview quickly.

![contacts fluentcrm 1](/grow-your-audience/contacts-dashboard/Contacts-FluentCRM-1.webp)

## Basic Filters & Pagination

### Filter By Lists & Tags

Filter By Lists, Tags & Number of contacts is the basic type of filtering.

If you have multiple Lists, for example, a List named Students contains 60 contacts and another List named Teachers contains 10 contacts then you will be able to filter them out by this filter option. You can select only Students to see all 60 contacts. If you want to include Teachers too then you will be able to add teachers to your selection and you will see 70 contacts in total.

The same goes for Tags as well.

All the above filters, including the ones in the [Filters Popover](#Filters-Popover), work as **AND** conditions in conjunction.

![contacts fluentcrm 2](/grow-your-audience/contacts-dashboard/Contacts-FluentCRM-2.webp)

### Filters Popover

Click the funnel button to the right of the **Advanced Filter** switch to open the popover. Everything you pick here narrows the contact list, the status counts, **Select all** bulk actions, and exports, so a bulk action or an export only touches the contacts you can see.

- **Status:** Show contacts with one status. This filter is greyed out while the Advanced Filter is on. To know more about status types and what they are, please visit [FluentCRM Contact Status.](/fluentcrm-contacts-status)
- **Segment:** Show only the contacts in one [Dynamic Segment](/segment-your-audience#dynamic-segments). You can pick one segment at a time. This filter appears only with FluentCRM Pro once you have at least one segment, and only for managers who can manage lists, tags, and segments. If you delete a segment you had selected, FluentCRM drops it from the filter the next time you open the page.
- **Added:** Show contacts added **today**, in the **last 7 days**, or in the **last 30 days**, counted in your site's time.
- **Company:** Show contacts that belong to one company. It appears only when the [Company module](/company-module) is on.
- **Has purchase history:** Tick this box to show only contacts who have bought from your store. It appears only with FluentCRM Pro and a store plugin FluentCRM integrates with.

A dot appears on the funnel while any popover filter is active. Click **Reset** inside the popover to clear only these filters. Your search, lists, and tags stay as they were. Switching to the [Advanced Filter](/advanced-filter) also resets the popover filters.

>[!Note]
> The **Segment** and **Has purchase history** filters require **FluentCRM Pro**. [See what's included →](/how-to-install-upgrade-and-activate-license)

### Clear All Filters

Once a search, status, list, tag, or advanced filter condition is active, a **Clear all filters** link appears beside **More actions** at the top of the page. Click it to remove every filter at once and return to the first page of contacts. Your sorting, page size, and column choices stay as they were.

![Screenshot of the Contacts page with an active search and the Clear all filters link](/grow-your-audience/contacts-dashboard/contacts-clear-all-filters.webp)

If your filters match no contacts, the empty list offers the same **Clear all filters** button, so you can start over without removing each filter one by one.

![Screenshot of the empty Contacts list with a Clear all filters button](/grow-your-audience/contacts-dashboard/contacts-clear-filters-empty-state.webp)

### Pagination

And contacts listed can be paginated per 10, 20,.. contacts per page from the bottom dropdown option as shown in the below screenshot.

![contacts fluentcrm 3](/grow-your-audience/contacts-dashboard/Contacts-FluentCRM-3.webp)

### Data Columns

#### Primary Columns

By default, the contacts dashboard shows the contact images coming from Gravatar, Email addresses, Names, Lists, Tags, and Status Columns. You can additionally choose to see more or fewer columns as you wish to see. 