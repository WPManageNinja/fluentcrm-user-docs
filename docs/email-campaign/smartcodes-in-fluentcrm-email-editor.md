---
title: "SmartCode In Editor of Email Templates"
slug: "smartcodes-in-fluentcrm-email-editor"
category: "email-campaign"
order: 0
---

# SmartCode In Editor of Email Templates
FluentCRM is an amazing tool for **WordPress** regarding Email Marketing and Automation. It also offers a great email editor and one more interesting feature of dynamic information to be used by **SmartCode**. This article will guide you through the process of using **SmartCode** in Email Templates.

## Smartcode

 There are 2 types of SmartCode available in Fluent CRM. These are:

-   **Primary SmartCodes**: This group stores the information regarding Contact and FluentCRM general information. Such as Contacts, General, and WP User.
-   **Additional SmartCodes**: This group contains some plugins and user-dependent fields. Such as smartcodes based on Custom Fields and Integrations.

**To learn the process of Smartcode, follow the steps with screenshots below –** 

First, go to the **Email Templates** from the **Email** section of **Fluent CRM Navbar, open one of your desired emails, and click the SmartCode** button.

![smartcode button](/email-campaign/smartcodes-in-fluentcrm-email-editor/SmartCode-Button-scaled.webp)

Once you click the button, you will get all the available options for the Smartcodes.

![all available options for smartcodes](/email-campaign/smartcodes-in-fluentcrm-email-editor/All-Available-Options-for-Smartcodes.webp)

**All the Smartcoeds and their functional description mentioned above are briefly explained below –**

### Primary Smartcodes

#### Contacts

Code

Description

&#123;&#123;contact.full\_name&#125;&#125;

Full name of the contact

&#123;&#123;contact.prefix&#125;&#125;

Name Prefix of the contact

&#123;&#123;contact.first\_name&#125;&#125;

First Name of the contact

&#123;&#123;contact.last\_name&#125;&#125;

Last Name of the contact

&#123;&#123;contact.email&#125;&#125;

Email address

&#123;&#123;contact.id&#125;&#125;

Contact's unique ID (Numeric)

&#123;&#123;contact.user\_id&#125;&#125;

Connected User ID of the contact

&#123;&#123;contact.address\_line\_1&#125;&#125;

Address Line 1

&#123;&#123;contact.address\_line\_2&#125;&#125;

Address Line 2

&#123;&#123;contact.city&#125;&#125;

Address City

&#123;&#123;contact.state&#125;&#125;

Address State

&#123;&#123;contact.postal\_code&#125;&#125;

Address Postal Code

&#123;&#123;contact.country&#125;&#125;

Address Country

&#123;&#123;contact.phone&#125;&#125;

Phone Number

&#123;&#123;contact.status&#125;&#125;

Contact's Status

&#123;&#123;contact.date\_of\_birth&#125;&#125;

Date of Birth

&#123;&#123;contact.company.name&#125;&#125;

Company Name

&#123;&#123;contact.company.industry&#125;&#125;

Company Industry

&#123;&#123;contact.company.address&#125;&#125;

Company Address

&#123;&#123;contact.created\_at&#125;&#125;

Time of Created Contact

#### General

Code

Description

**&#123;&#123;crm.business\_name&#125;&#125;**

Business Name defined in FluentCRM Settings

**&#123;&#123;crm.business\_address&#125;&#125;**

Business Address defined in FluentCRM Settings

**&#123;&#123;wp.admin\_email&#125;&#125;**

Email Address defined in WordPress settings

**&#123;&#123;wp.url&#125;&#125;**

Your Website URL

&#123;&#123;other.date.+2 days&#125;&#125;

Dynamic Date Field. You can replace **+2 days** with your own date strings. it will return the date (WP Date Format) when parsing the data.

&#123;&#123;other.date\_format.D, d M, Y&#125;&#125;

Custom Date Format (Any PHP Date Format)

&#123;&#123;other.latest\_post.title&#125;&#125;

Latest Post Tittle (Published)

##crm.unsubscribe\_url##

Web preview URL of an email

##crm.manage\_subscription\_url##

Manage the Subscription page URL of the contact

##web\_preview\_url##

Web preview URL of an email

&#123;&#123;crm.unsubscribe\_html|Unsubscribe&#125;&#125;

This will return an unsubscribe link with HTML code and the link text will be **Unsubscribe.**

'&#123;&#123;crm.manage\_subscription\_html|Manage Preference&#125;&#125;

Manage Subscription Hyperlink HTML with the link text "Manage Preference"

#### WP User

Code

Description

&#123;&#123;wp\_user.display\_name&#125;&#125;

User’s display name

&#123;&#123;wp\_user.user\_login&#125;&#125;

User Login (username)

\## wp\_user.password\_reset\_url ##

Password reset URL (as plain text)

&#123;&#123;wp\_user.password\_reset\_url&#125;&#125;

Password reset url (as plain text)

&#123;&#123;wp\_user.meta.META\_KEY&#125;&#125;

User Meta Data

### Additional Smartcodes

#### Custom Fields

In this option, you will get all the **SmartCodes** based on your [**Custom Fields**](/docs/global-custom-contact-fields) that you created in your **Fluent CRM** plugin.

> For example, here, I have the **smartcodes** for **showcasing** the users’ **Number, Gender, Login Date**, and **Descriptions** related information **based on** the **Custom Fields** i have created before.

![custom field smartcodes](/email-campaign/smartcodes-in-fluentcrm-email-editor/Custom-Field-smartcodes.webp)

#### Integrations

In this option, you will get all the **SmartCodes** based on the **Plugin Integrations** that you integrated with your **Fluent CRM** plugin.

> For example, here, I have the **smartcodes** for **showcasing** the **Enrolled Course Names** and **Enrolled Course with links (list)** related information based on the **TutorLMS** plugin that I have **integrated with** **Fluent CRM** before.

![smartcodes based on integrations](/email-campaign/smartcodes-in-fluentcrm-email-editor/Smartcodes-based-on-Integrations.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.