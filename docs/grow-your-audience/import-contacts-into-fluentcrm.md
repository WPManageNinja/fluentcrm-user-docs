---
title: "Import Contacts into FluentCRM"
slug: "import-contacts-into-fluentcrm"
category: "grow-your-audience"
order: 0
---

# Import Contacts into FluentCRM

FluentCRM offers its users to import contacts from numerous sources and ways to import them. There are 3 types of contact importing processes in FluentCRM which are from the CSV file, WordPress users list from the core and other plugins, and 3rd party or Other CRM services.

https://www.youtube.com/watch?v=rcusBlnZ-WI&t=26s

## Importing Contacts from CSV File

The CSV import tool will help you add contacts to FluentCRM. You can easily upload contacts into FluentCRM from a valid CSV(**comma-separated value**) file. During the import process, you can also auto-update the properties of already existing contact at once.

### Prerequisites to import contacts from a CSV file

-   You already have your contacts in a spreadsheet program like MS Excel or Google Sheets, Now export the contacts as a CSV file.
-   The date field must be formatted in a specific way for example the Date of Birth or other Dates must follow the **Y-m-d** format.
-   In FluentCRM, you can categorize your contacts based on their [subscription status](/fluentcrm-contacts-status), like subscribed or unsubscribed. You can only select one status at a time.
-   FluentCRM has no limit to the number of subscribers you can import like other SaaS email marketing providers, so feel free to import all your contacts.
-   If you are importing a **Country** for the contacts please use the [Alpha-2 Value \[2 Letter\] ISO 3166 Country Codes](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes). Example: BD, US, GB, etc.
-   The minimum field to import contacts into FluentCRM is the **Email field**.

### Start Importing contacts from the CSV file

Go to the **FluentCRM Dashboard** ➜ **All Contacts** and then click on the **Import** button from the top right corner.

![crm contacts options](/grow-your-audience/import-contacts-into-fluentcrm/crm_contacts_options.webp)

This will open a modal and you will see a few options and select the **CSV file** from the available options.

![contacts fluentcrm 14](/grow-your-audience/import-contacts-into-fluentcrm/Contacts-FluentCRM-14.webp)

On the next screen, you will be asked to select the **Separator Operator** of the **CSV file**. The most common format is **Comma Separated** and we strongly recommend this format.

![contacts fluentcrm 1 4](/grow-your-audience/import-contacts-into-fluentcrm/Contacts-FluentCRM-1-4.webp)

Now **choose a file or drag and drop it here** that you want to use to import contacts.

![contacts fluentcrm 2 3](/grow-your-audience/import-contacts-into-fluentcrm/Contacts-FluentCRM-2-3.webp)

On the next screen, you will be asked to map the CSV fields into FluentCRM fields. Please check and select the fields accordingly.

![contacts fluentcrm 3 3](/grow-your-audience/import-contacts-into-fluentcrm/Contacts-FluentCRM-3-3.webp)

**The available general fields as of now are:**

1.  Name Prefix.
2.  First Name.
3.  Last Name.
4.  Full Name.
5.  Email.
6.  Timezone.
7.  Address Line 1.
8.  Address Line 2.
9.  City.
10.  State.
11.  Postal Code.
12.  Country.
13.  IP Address.
14.  Phone.
15.  Source.
16.  Date of Birth (Y-m-d format)

You will also see a few other additional Custom Fields if you added them to the [**Custom Contact Fields.**](/global-custom-contact-fields)

The Other Options are:

1.  **Lists:** Assign the Lists you want to the contacts.
2.  **Tags:** Attache Tags to the contact by choosing them from the dropdown.
3.  **Update Subscribers:** If any contact is already present you can update new data for them. Otherwise, existing contacts will be skipped.
4.  **New Subscriber Status:** Give a status for the contacts.
5.  **Do Not Trigger Automations (Tag & List Related Events):** This option asks you if you want the new contacts to be added to automation if the Lists, Tags, or other conditions are triggered.
6.  **Force update contact status**. This will update all imported contact statuses regardless of their previous status: If you want to force the Contact Subscription Status to be updated to the one you select now.

## Importing WordPress Users as Contacts

Same as the **CSV Method** selection to import WordPress users this time select **WordPress Users**. This will provide a modal to select the available User Roles to be imported. You can either select **All User Roles** or **Select Specific User Roles** by checking them.

![contacts fluentcrm 4 2](/grow-your-audience/import-contacts-into-fluentcrm/Contacts-FluentCRM-4-2.webp)

On the next screen, a few of the users will be listed as per your selection in the previous screen.

![contacts fluentcrm 5 2](/grow-your-audience/import-contacts-into-fluentcrm/Contacts-FluentCRM-5-2.webp)

The options available here to be selected are:

1.  **Apply Lists:** Assign the Lists you want to the contacts.
2.  **Apply Tags:** Attache Tags to the contact by choosing them from the dropdown.
3.  **Update Subscribers:** If any contact is already present you can update new data for them. Otherwise, existing contacts will be skipped.
4.  **New Subscriber Status:** Give a status for the contacts.
5.  **Do Not Trigger Automations (Tag & List Related Events):** This option asks you if you want the new contacts to be added to automation if the Lists, Tags, or other conditions are triggered.

## Importing Contacts from Other Integrations

FluentCRM allows you to import users from other WordPress plugins into FluentCRM contacts. The relevant importing guides are listed below:

1.  **[Import contacts from WooCommerce](/import-contacts-to-fluentcrm-from-other-integrations/#Import-contacts-from-WooCommerce)**
2.  **[Import contacts from Easy Digital Downloads (EDD)](/import-contacts-to-fluentcrm-from-other-integrations/#Import-contacts-from-Easy-Digital-Downloads)**
3.  **[Import contacts from Learndash](/import-contacts-to-fluentcrm-from-other-integrations/#Import-contacts-from-Learndash)**
4.  **[Import contacts from LifterLMS](/import-contacts-to-fluentcrm-from-other-integrations/#Import-contacts-from-LifterLMS)**
5.  **[Import contacts from TutorLMS](/import-contacts-to-fluentcrm-from-other-integrations/#Import-contacts-from-TutorLMS)**
6.  **[Import contacts from Learnpress](/import-contacts-to-fluentcrm-from-other-integrations/#Import-contacts-from-Learnpress)**
7.  **[Import contacts from Paid Memberships Pro](/import-contacts-to-fluentcrm-from-other-integrations/#Import-contacts-from-Paid-Memberships-Pro)**
8.  **[Import contacts from MemberPress](/import-contacts-to-fluentcrm-from-other-integrations/#Import-contacts-from-MemberPress)**
9.  **[Import contacts from Restrict Content Pro](/import-contacts-to-fluentcrm-from-other-integrations/#Import-contacts-from-Restrict-Content-Pro)**

## Importing Contacts from Other CRM

![contacts fluentcrm 6 1](/grow-your-audience/import-contacts-into-fluentcrm/Contacts-FluentCRM-6-1.webp)

FluentCRM also provides an easy way to import Contacts from Other CRM Services like Mailchimp, ConvertKit, Mailerlite, Drip, and ActiveCampaign.

1.  **[Importing guidelines for Mailchimp.](/migrating-into-fluentcrm-from-mailchimp)**
2.  **[Importing guidelines for ConvertKit.](/migrating-into-fluentcrm-from-convertkit)**
3.  **[Importing guidelines for Mailerlite.](/migrating-into-fluentcrm-from-mailerlite)**
4.  **[Importing guidelines for Drip.](/migrating-into-fluentcrm-from-drip)**
5.  **[Importing guidelines for ActiveCampaign](/migrating-into-fluentcrm-from-activecampaign).**