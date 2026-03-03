---
title: "Merge Codes / Smart Codes usage"
slug: "merge-codes-smart-codes-usage"
category: "miscellaneous"
order: 0
---

# Merge Codes / Smart Codes usage
FluentCRM offers lots of dynamic merge codes for your email subject, the body that you can use to personalize your emails.

### Basic Structure:

Merge codes are structured as &#123;&#123;DataGroup.Property|FallbackValue|Transformer&#125;&#125;

-   **DataGroup**: FluentCRM has different types of data group. Examples: contact, contact.custom, wp etc.
-   **Property**: Each data groups offer many data values, and you can call that the property. For example: first\_name, last\_name, email
-   **Fallback Value (Optional)**: This is an optional parameter. If the defined property is empty, the fallback value will be returned.
-   **Transformer (optional):** Fluent Forms offers utility functions to transform the dynamic return value. For example: &#123;&#123;contact.first\_name|Hi|ucfirst&#125;&#125; will make this first letter of the first as uppercase.

### Usage:

Using merge is very easy. From your email composer, just type @ and then type the name or title of the merge code and you can see all of them.

![image](/miscellaneous/merge-codes-smart-codes-usage/image-1024x747.png)

You can see all the merge codes by clicking the &#123;&#123; &#125;&#125; icon in your email composer's top bar.

![image 1](/miscellaneous/merge-codes-smart-codes-usage/image-1-1024x250.png)

This will show a pop-up and you can copy any SmartCode you want and use it in your email body or subject.

![image 2](/miscellaneous/merge-codes-smart-codes-usage/image-2-1024x724.png)
*Merge code Lists*

### Contact's Default Merge Codes

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

&#123;&#123;contact.custom.CUSTOM\_FIELD\_SLUG&#125;&#125;

Custom Field value of the contact. Please replace CUSTOM\_FIELD\_SLUG with your defined slug of the field

### Other General Codes

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

&#123;&#123;other.date\_format.Y-m-d&#125;&#125;

Current date field as your own date format. Support Y-m-d date formate.

##crm.unsubscribe\_url##

Unsubscribe URL of the contact

##crm.manage\_subscription\_url##

Manage Subscription page URL of the contact

##web\_preview\_url##

Web preview Url of an email

&#123;&#123;crm.unsubscribe\_html|Unsubscribe&#125;&#125;

This will return an unsubscribe link with HTML code and link text will be **Unsubscribe.**

'&#123;&#123;crm.manage\_subscription\_html|Manage Preference&#125;&#125;

Manage Subscription Hyperlink HTML with link text "Manage Preference"

### WP User Codes

If the contact is also your WordPress user then you can use the following merge codes in your email

Code

Description

&#123;&#123;user.ANY\_USER\_PROPERY&#125;&#125;

example: get any user property from WP\_User Class. Example: user\_login, user\_first\_name etc.

&#123;&#123;user.meta.USER\_META\_KEY&#125;&#125;

access meta value of a user

&#123;&#123;user.password\_reset\_direct\_link&#125;&#125;

Direct Password Reset link of a user

### Data Transformers

Using Data Transformers you can transform / Format a dynamic value easily. Here is the list of available transformers

Transformer

Usage

Description

**trim**

&#123;&#123;contact.first\_name|There|trim&#125;&#125;

if the **contact.first\_name** returns value and have space at first or after it will trim that.

**ucfirst**

&#123;&#123;contact.first\_name|There|ucfirst&#125;&#125; /  
&#123;&#123;contact.first\_name||ucfirst&#125;&#125;

If the contact.first\_name returns the first letter lowercase, it will make it uppercase of the first letter

**strtolower**

&#123;&#123;contact.first\_name|There|strtolower&#125;&#125; /  
&#123;&#123;contact.first\_name||strtolower&#125;&#125;

It will make the all the letters as lowercase

**strtoupper**

&#123;&#123;contact.first\_name|There|strtoupper&#125;&#125; /  
&#123;&#123;contact.first\_name||strtoupper&#125;&#125;

It will make the all the letters as uppercase

**ucwords**

&#123;&#123;contact.full\_name|There|ucwords&#125;&#125; /  
&#123;&#123;contact.full\_name||ucwords&#125;&#125;

This will make the first letter of each word uppercase.

**concat\_first**

&#123;&#123;contact.first\_name||concat\_first|Hello&#125;&#125;

if a contact's first name is **John** then it will return as "Hello **John**"

**concat\_last**

&#123;&#123;contact.first\_last||concat\_last|**,**&#125;&#125;

Sometimes you need to add "," after the first name if the name exists. This example will return **"John,"** if the first name exists . If first name does not exist then nothing will return.

**show\_if**

&#123;&#123;contact.full\_name||show\_if|First name exist&#125;&#125;

If contact's full name exist then it will return "First name exist"