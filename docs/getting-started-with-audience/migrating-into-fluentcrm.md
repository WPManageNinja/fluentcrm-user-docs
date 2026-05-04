---
title: "Migrating into FluentCRM from Other Platforms"
slug: "migrating-into-fluentcrm"
category: "getting-started-with-audience"
order: 0
---

# Migrating into FluentCRM from Other Platforms
You can migrate to FluentCRM from your existing CRM or Email marketing platform. In this article, you will learn the best practices to do migration.

https://www.youtube.com/watch?v=rcusBlnZ-WI&t=26s

## Migrate via CSV

### Prepare Your Data in CSV

No matter what CRM or email marketing service you are currently in, it will allow you to export your data in CSV format. Take a look at your service provider doc about how you can export your contacts as CSV.

For example, for MailChimp, you can go to the **Audience** and the **All Contacts**. From there you can export all contacts as CSV.

![migrating to fluentcrm from mailchimp](/getting-started-with-audience/migrating-into-fluentcrm/mailchimp-export.webp)

If you have multiple lists and tags, prepare a CSV for each of the lists and tags so you can export the contacts and maintain the segmentations.

### Import in FluentCRM

Before importing the CSV files into FluentCRM, go ahead and create the necessary lists and tags for your contacts. To create a list hover over **Contacts** and choose List from the dropdown. Now click on the **Create List** button and name your list.

![create list fluentcrm](/getting-started-with-audience/migrating-into-fluentcrm/fluentcrm-list-2.webp)

Creating a tag is almost identical to creating a list. hover over Contacts and choose Tags from the dropdown. Now click on the Create Tag button and name your tag.

![create a tag fluentcrm](/getting-started-with-audience/migrating-into-fluentcrm/fluentcrm-tag-3.webp)

Go to the FluentCRM dashboard and choose the Contacts tab from the top and then click on Import from the top-right.

![](/getting-started-with-audience/migrating-into-fluentcrm/fluentcrm-contact-1.webp)

A popup will appear where you need to select the CSV as the contact source and then click next.

![](/getting-started-with-audience/migrating-into-fluentcrm/fluentcrm-import-contacts-4.webp)

In the second step, you will be asked to Select Your CSV Delimiter, by default CSV delimiter is commas, but if you used semicolon you need to select it in the delimiter. Here I used Comma Separated. Now upload your CSV and again click next.

![](/getting-started-with-audience/migrating-into-fluentcrm/fluentcrm-map-contacts-5.webp)

In the third step, you will need to configure the field mapping from your CSV file with FluentCRM fields. My example CSV file has three simple fields which are Firstname, Lastname, and Email. Your CSV might have more. Map the fields accordingly. The left column has your CSV data and the right column is the FluentCRM fields.

![](/getting-started-with-audience/migrating-into-fluentcrm/fluentcrm-map-csvfeed-contacts-6.webp)

Select the List & Tags for the imported contacts(Create the lists and tags first). You can also Update a Subscriber with new data from CSV if the contact is already existing. The email is a unique field and based on email FluentCRM determines if a contact is already existing. Lastly, you need to give the subscribers a status. You can select “subscribed” as the status but make sure that you have permission to send them marketing.

Now click next and that’s it. Your contacts are successfully imported into FluentCRM.

If you imported multiple CSV files for separate lists and tags, the import process for each CSV will be the same. You just need to choose your appropriate lists and tags while importing.  
  

## Bulk Export and Import of Contact Lists

You can easily export all your lists into a single CSV file and re-import them in just a few clicks. This feature is perfect for migrating your setup to a new site or restoring your list structure, eliminating the need to rebuild everything from scratch.

### How to Export or Import Your Lists

From your WordPress dashboard, navigate to **FluentCRM → Contacts** and select the **Lists** tab.

Locate the vertical three-dots menu **icon (⋮)** on the right side of the page, next to the **\+ Create List** button. Click the icon to open the dropdown menu.

**To Export:** Choose **Export All Lists**. This will download a CSV file containing all your existing contact lists to your computer.

**To Import:** Click the **Import** button. A pop-up will appear, allowing you to upload your contact list CSV file. FluentCRM will then automatically recreate your contact list structure.

![export contact list](/getting-started-with-audience/migrating-into-fluentcrm/list.webp)

## Migrate via API

Currently, we support migrating from other CRM via API, the list of supported CRM with migration process is as follows:

1.  **[MailChimp](/docs/migrating-into-fluentcrm-from-mailchimp)**
2.  **[ConvertKit](/docs/migrating-into-fluentcrm-from-convertkit)**
3.  **[MailerLite](/docs/migrating-into-fluentcrm-from-mailerlite)**
4.  **[Drip](/docs/migrating-into-fluentcrm-from-drip)**
5.  **[ActiveCampaign](/docs/migrating-into-fluentcrm-from-activecampaign)**