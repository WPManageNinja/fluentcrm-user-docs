---
title: "Advanced Filter"
slug: "advanced-filter"
category: "grow-your-audience"
order: 0
---

# Advanced Filter

In FluentCRM, the **Advanced Filter** option helps you find and segment contacts using more specific conditions. This feature allows you to filter contacts based on different types of data, including both static information (such as contact details) and dynamic data that changes through contact activity or FluentCRM actions.

You can find the **Advanced Filter** option in the [**Contacts Dashboard**](/contacts-dashboard). When you turn on the **Advanced Filter** toggle, additional filtering options will appear, similar to the example shown in the screenshot.

![contacts fluentcrm 7](/grow-your-audience/advanced-filter/Contacts-FluentCRM-7.webp)

Using these options, you can:

  * Add data fields with **AND or OR** conditions
  * **Apply filters** once you have selected your conditions
  * Remove a data field using the **Delete** (recycle bin) icon
  * **Clear all** applied filters if needed

To begin creating a filter, click the **+ Add Property** button. This will display several groups of data fields that you can use to build your filtering conditions. We will explore these groups one by one in the following sections.

## General Properties

There are 3 types of general properties. 2 of them are contact properties and 1 other property is based on the activities inside the FluentCRM.

### Contact

The available data properties and their short descriptions are:

1.  **General Properties:** This is a general searchable filter that will let you filter by **Email**, **First Name**, **Last Name**, **Address Line 1** & **2**, **Postal Code**, **City**, **State**, **Country**, **Phone**, and **Status** with this single parameter.
2.  **First Name:** First Name of the contact.
3.  **Last Name:** Last Name of the contact.
4.  **Email Address:** Email Address of the contact. This is false the minimum required field to add a contact in the FleuntCRM.
5.  **Address Line 1:** The primary address field and also the minimum or default field to store the address information of the contact.
6.  **Address Line 2:** Alternative field to store additional address information.
7.  **City:** City of the contact.
8.  **State:** State of the contact.
9.  **Postal Code:** Postal Code information of the contact.
10.  **Country:** Country of the contact.
11.  **Phone/ Mobile:** Phone or Mobile Number that may contain or not contain the country code depending on how you added the information.
12.  **WP User ID:** The WordPress User ID of the contact if the contact is present in the WordPress user list.
13.  **Name Prefix(Title):** Mr, Mrs, and Ms depending on the person’s designation.
14.  **Source:** The source of the contact like Woocommerce, Fluent Forms, or other sources. You can also update or add source information while [importing the user](/import-contacts-into-fluentcrm/#Importing-Contacts-from-CSV-File). If you are using a [CSV file to import](/import-contacts-into-fluentcrm/#Importing-Contacts-from-CSV-File) please add a source column in the CSV file.
15.  **Last Activity:** The Last Activity field in FluentCRM provides a consolidated view of WordPress user logins and interactions with email campaigns, such as email click activities.
16.  **Created At:** The date and time when the user was created in the FluentCRM.

![contacts fluentcrm 1 1](/grow-your-audience/advanced-filter/Contacts-FluentCRM-1-1.webp)

### Contact Segment

The available data properties and their short descriptions are:

1.  **Status:** [**Subscription Status**](/fluentcrm-contacts-status) of the contact.
2.  **Type:** The contact type of the user is either **Customer** or **Lead**.
3.  **Tags:** Tags that are available in the FluentCRM.
4.  **Lists:** Lists that are available in the FluentCRM.

![contacts segment](/grow-your-audience/advanced-filter/Contacts-segment.webp)

### Contact Activities

The available data properties and their short descriptions are:

1.  **Last Email Sent:** The last date of the email sent to contacts.
2.  **Last Email Open:** The last date when the contacts opened any email sent to them.
3.  **Last Email Clicked:** The last date when the contacts clicked any links from emails sent to them.
4.  **Did not clicks:** This filter will show the contacts who didn’t click the link of your email.
5.  **Opened:** It will show the contacts who opened your email.
6.  **Did not open yet:** It will show the contacts who still don't open your email.
7.  **In (Email Sent):** Show the result of contacts to whom you sent the emails.
8.  **Not in (Regardless of status):** Shows the result of contact or contacts you didn’t send emails to.

![contacts fluentcrm 2 1](/grow-your-audience/advanced-filter/Contacts-activities.webp)

## Custom Field Properties

This is a user-defined option that is configured in [**Custom Contact Fields Settings**](/global-custom-contact-fields). All the available custom contact fields will be listed in this option to let you apply to filter based on the custom contact field properties.

![contacts fluentcrm 4 1](/grow-your-audience/advanced-filter/Contacts-FluentCRM-4-1.webp)

## Integrated Properties

FluentCRM integrates with popular WordPress plugins like Woocommerce, LearnDash, LifterLMS, Easy Digital Downloads, etc. Plugin Specific Data Properties are discussed below:

### FluentCommunity

Filter your contacts based on their participation and standing within your community platform:

1. **Space Membership:** Filter contacts based on the specific Spaces they have joined within your community.
2. **Course Enrollment:** Filter and segment contacts based on the specific courses they are currently enrolled in or have access to.

![contacts fluentcrm 4 1](/grow-your-audience/advanced-filter/fluent-community.webp)

### FluentAffiliate

Manage and communicate with your partners effectively by filtering through affiliate data:

1. **Affiliate Status:** Filter contacts based on their current status as an affiliate (e.g., Active, Pending, or Cancelled).
2. **Affiliate Group:** Segment your contacts by the specific affiliate groups they have been assigned to.
3. **Total Commission:** Filter affiliates based on the total amount of commission they have earned across all referrals.
4. **Total Referral Count:** Identify contacts based on the total number of successful referrals they have generated.
5. **Last Referral Date:** Filter affiliates by the date of their most recent successful referral.

![Fluent Affiliate](/grow-your-audience/advanced-filter/fluent-affiliate.webp)

### FluentCart

If you are using FluentCart for your storefront, you can filter contacts based on their shopping journey:

1. **Total Order Count:** Filter contacts based on the total number of orders they have placed through FluentCart.
2. **Total Order Value:** Segment customers based on the total monetary value of all their completed orders.
3. **Last Order Date:** Identify contacts based on the date they most recently completed a purchase.
4. **First Order Date:** Filter contacts based on the date of their very first transaction.
5. **Purchased Products:** Filter for contacts who have bought specific items or products from your store.
6. **Purchased Categories:** Segment your audience based on the product categories they have purchased from.
7. **Used Coupons:** Identify customers who have used specific discount codes or coupons during their checkout.
8. **Purchased Product Variations:** Filter contacts based on specific attributes of their purchased products, such as size, color, or plan.

![FluentCart](/grow-your-audience/advanced-filter/fluentcart.webp)

### Woocommerce

The available data properties and their short descriptions are:

1.  **Total Order Count:** Total orders against the customer.
2.  **Total Order Value:** Total order value from different orders.
3.  **Last Order Date:** The last date when the customer ordered any product.
4.  **First Order Date:** The first date when the customer orders any product.
5.  **Purchased Products:** All the purchased products against a customer.
6.  **Purchased Categories:** All the Product Categories that are assigned to the products and available in the orders for the customer.
7.  **Purchased Tags:** Product Tags assigned to purchased products available in the orders against the customer.
8.  **Used Coupons:** Any used coupons in the purchased order against the customer.
9.  **Purchased Product Variations**: Filter contacts based on their purchased WooCommerce product variations.

![contacts fluentcrm](/grow-your-audience/advanced-filter/Contacts-FluentCRM-scaled.webp)

### LearnDash

The available data properties and their short descriptions are:

1.  **Last Enrollment Date:** The last date of enrollment for any courses against the contact.
2.  **First Enrollment Date:** The first date of enrollment for any courses against the contact.
3.  **Enrollment Courses:** The Courses that are available on the Enrolled List for any contact.
4.  **Enrollment Groups:** The Groups that are available on the Enrolled List for any contact.
5.  **Enrollment Categories:** The Categories that are available on the Enrolled List for any contact.
6.  **Enrollment Tags:** The Tags that are available on the Enrolled List for any contact.

![contacts fluentcrm 8](/grow-your-audience/advanced-filter/Contacts-FluentCRM-8.webp)

## Filter Conditions

All of the above **Data Properties** can be used to filter out contacts depending on the available data. There are various conditions that can be applied to those available data such as **Equal**, **Does not equal**, **Includes**, **Does not Include**, **Before**, **After**, etc. and they are discussed below:

### Textual Conditions

The available conditional properties that can be applied with the filter are:

 * **Equal:** Give a value, for an item to be displayed in the view, its property value must include the same text that was supplied. 
 * **For example,** if you input “London” then **FluentCRM** will filter the contact or contacts that have or contain “London” against that **Text-based** Contact Field.
 * **Does not equal:** Give a value, for an item to be displayed in the view, its property value cannot include the precise text that was supplied. There will also be records that have no value for the property.
 * **For example,** if you input “London” **then FluentCRM** will filter the contact or contacts that don’t contain “London” against that **Text-based** Contact Field.
 * **Includes:** You'll see results that correspond to your input and comparable outcomes.
 * **E.g.:** When you enter "Regular," all the results that match the word or a particular letter in the term will be shown.
 * **Does not include:** Doesn't include means that the word or letter you type will not be shown.
 * **E.g.:** When you enter "Regular," neither the matching results nor those that include a letter from the word "Regular" will be displayed.
 * **Empty:** Empty is for an option that shows the empty field results. **For example,** Your contact text information contains an empty area that will display the outcome of the selected contact or contacts.  
 * **Not Empty:** Not empty will show the result of that field is not empty. **E.g.:** not empty will display the information from the fields that are filled with data.

![contacts fluentcrm 9](/grow-your-audience/advanced-filter/Contacts-FluentCRM-9.webp)

### Radio Conditions

The available conditional properties that can be applied with the filter are:

**Includes in:** This filter will display your inputs as choices, from which you must choose to filter your results.  
**Not includes in:** Doesn’t include will not show the result of the option you selected it will show the other results you input in the field.

![contacts fluentcrm 2 ](/grow-your-audience/advanced-filter/Contacts-FluentCRM-2-2.webp)

### Numeric Conditions

The available conditional properties that can be applied with the filter are:

 * **Greater than:** Showing results for numbers more significant than the number you provided. **E.g.:** You have been given the number five thousand now it will show a larger number than five thousand.
 * **Less than:** Showing results for numbers less than the number you provided. **E.g.:** You have been given the number five thousand now it will show a smaller number than five thousand.
 * **Equal:** Equal will show you the outcome which is in the same number you have provided. **E.g.:** if you gave the number input five thousand the outcome only shows the contact or contacts that match this number.
 * **Does not equal:** Doesn't equal will display contacts that differ from the number you entered.
 * **Empty:** Empty is for an option that shows the empty field results.
 * **Not empty:** Not empty will show the result that the field is not empty.

![contacts fluentcrm ](/grow-your-audience/advanced-filter/Contacts-FluentCRM-3-2.webp)

### **Contact Segment - Tag**

The available conditional properties that can be applied with the filter are:

 * **Include:** It will show you the contacts that match your input tags. **For example,** if you have selected the tag “Shirt” it will show you the results of contacts that have the tag “Shirt”.
 * **Does not Include (In any):** Doesn’t show the result on the tag you have included on your field. **For example,** if you have selected the tag “Student” it will show you the results of contacts that don’t have the tag “Student”.
 * **Includes of all:** will display the contacts for you according to the tag you entered. **For example,** if you input two tags like “Shirt” and “T-shirt” you will see the contacts that have these two tags.  
 * **Includes none of (Match all):** Includes only the tags you have given and will not show in the result.

![contacts fluentcrm](/grow-your-audience/advanced-filter/Contacts-FluentCRM.webp)

### **Contact Activities - Automation Activities** 

 * **Status Complete:** Contacts whose automation has been finished and who have received emails will be filtered by the status complete.
 * **Status Active:** This will show you the result of contacts who are subscribed contacts and under the Active automation 
 * **Status Cancelled:** It will show the result of the manually canceled automation contacts.
 * **Status waiting:** The contacts who aren’t subscribers yet but are under automation.
 * **In ( Regardless of status):** In this filter, you will see the contacts of automation.
 * **Not in (Regardless of status):** With this filter, you can find out the contacts who aren’t in the automation.

### **Activities - Email Sequence**

 * **Status Completed:** Status Complete will filter the contacts of the completed email sequence and the email that has been sent to them.
 * **Status Active:** This will only show the active contacts under this email sequence.
 * **Status Cancelled:** It will show you the contacts who are not in the email sequence.
 * **In (Regardless of status):** Will show the contacts who were in an email sequence.
 * **Not in (Regardless of status):** Will show the contact or contacts who aren’t in the email sequence.

## Example Usage

The same exact filtering method can also be applied in the Email Campaign Setup as well as the below screenshot. Below is an example of using 3 different data and using **AND** with **OR** condition to demonstrate how flexible the advanced filtering of FluentCRM.

![crm campaign subscribers advanced filter](/grow-your-audience/advanced-filter/crm_campaign_subscribers_advanced_filter.webp)