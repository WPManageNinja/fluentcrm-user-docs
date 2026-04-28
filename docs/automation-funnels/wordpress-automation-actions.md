---
title: "WordPress Actions"
slug: "wordpress-automation-actions"
category: "automation-funnels"
order: 0
---

# WordPress Actions
FluentCRM provides several [Actions](/docs/primary-automation-actions), **especially for WordPress sites,** to trigger tasks automatically. Once automation is triggered, you can add the desired **Actions** to handle advanced, repetitive, or routine tasks. This article provides detailed information about all **WordPress Actions** in **FluentCRM Automation**.

> **Remember**, to use all the **WordPress** **Actions**, you need to have [FluentCRM Pro Plugin](/docs/how-to-install-upgrade-and-activate-license) installed and activated in your WordPress Site.

## All WordPress Actions

Go to the **Automation** section from the **FluentCRM Navbar**, and open your **desired** **Automation** by clicking on its title.  
Or, create a new one by clicking the **+ New Automation.**

> To learn how to create a new automation funnel, read this [Documentation](/docs/automation-editor).

For example, I opened the **List Applied** automation funnel to explain all the **Actions** in **CRM**.

![Open desired automation or create new one](/automation-funnels/wordpress-automation-actions/Open-desired-Automation-or-Create-new-one-1-scaled-1.webp)

Now, click the **Plus Icon,** or just hover over it and click the **Add Action / Goal** option to get all the **WordPress Actions**.

![Click plus icon or add actions:goal options](/automation-funnels/wordpress-automation-actions/Add-ActionsGoal-options-scaled-2.webp)

Now, a pop-up page will appear with all the **WordPress Action Blocks** of FluentCRM to choose from.

![All WordPress Actions](/automation-funnels/wordpress-automation-actions/All-WordPress-Actions-3.webp)

### 1. Create WordPress User

This action lets you **Create WordPress Users** with a role (if the user is not already registered with a contact email) for the contacts within the automation funnel. After selecting this **Action**, a tab will appear on the right-hand side with options to set up your action.

#### Settings of Create WP User Action

-   **Interval Label**: Here, a **Name** for the Action will be automatically added so you can easily find it later. You can change it according to your needs.

-   **Internal Description**: A **description** **of the action** will also be automatically added as a Subtitle. You can also change it according to your needs.

-   **User Role**: Select available **WordPress** **User** **Roles** for the **CRM Contacts** using the **Dropdown** **Arrow**. To learn more about WordPress User Roles, read this [**Documentation**](https://wordpress.org/documentation/article/roles-and-capabilities/#summary-of-roles). 

-   **Password**: Check the **Generate Password Automatically** box for automatic password generation for WP Users. Or you can set a custom password manually by entering the custom text or using the [**SmartCodes**](/docs/merge-codes-smart-codes-usage/#wp-user-codes) **Button** in the **Provide Custom User Password** field. 

-   **Custom Username (optional)**: With this option, you can set a **Custom** **Username** by using the [**SmartCodes**](/docs/merge-codes-smart-codes-usage/#contact8217s-default-merge-codes) **Button** or entering **Custom** **Text**. If you leave it blank, the email address will be used as the username. If the provided username is not available then the email address will be used for the username. This is optional.

-   **User Meta Mapping**: If you want to map user meta properties you can add that here. This is also totally optional. Also, you can add more mapping fields by clicking the **+Add More** button and delete any existing fields by clicking the **Trash** **Icon** if needed.
    1.  **Meta Key**: The key is mapped to the Database as the Meta Key.
    2.  **Meta Value**: The value against the User Meta Key. You can use **SmartCodes** too as described in this [SmartCode Documentation](/docs/merge-codes-smart-codes-usage/#wp-user-codes).

-   **User Notification**: Check this box if you want to send the WordPress User Notification Email to the **CRM** **Contacts**. 

Once you are done, click the **Save Settings** button to save all your changes. You can also **Delete** the action by clicking the **Trash** **Icon** if needed.

![Create WP user](/automation-funnels/wordpress-automation-actions/Create-WP-User-4.webp)

### 2. Update WP User Meta

This action lets you **Update WP User Meta Data** for the contacts within the automation funnel.  
After selecting this **Action**, a tab will appear on the right-hand side with options to set up your action.

Here are the Settings of the Update WordPress User Meta action:

-   **User Meta Mapping**: If you want to map user meta properties you can add that here. This is also totally optional. Also, you can add more mapping fields by clicking the **+Add More** button and delete any existing fields by clicking the **Trash** **Icon** if needed.
   1.  **Meta Key**: The key is mapped to the Database as the Meta Key.
   2.  **Meta Value**: The value against the User Meta Key. You can use **SmartCodes** too as described in this **[SmartCode Documentation](/docs/merge-codes-smart-codes-usage/#wp-user-codes).**

> To learn the use of first Two settings mentioned in the screenshot below, read this [**Section**](/docs/wordpress-automation-actions/#settings-of-create-wp-user-action) as it works the same way.

Once you are done, click the **Save Settings** button to save all your changes.

![Update WP user meta](/automation-funnels/wordpress-automation-actions/Update-WP-User-Meta-5.webp)

### 3. Change WP User Role

This action lets you **Change** connected **WordPress User Roles** for the contacts within the automation funnel.  
After selecting this **Action**, a tab will appear on the right-hand side with options to set up your action. 

Here are the Settings of the Change WP User Role action:

-   **User Role**: Select available **WordPress** **User** **Roles** for the **CRM Contacts** using the **Dropdown** **Arrow**. To learn more about WordPress User Roles, read this [**Documentation**](https://wordpress.org/documentation/article/roles-and-capabilities/#summary-of-roles). 

-   **Replacing Existing Role**: Check this boxing you want the User Role selected will be replaced or updated for the user. If you do not check this, then the User Role you Selected will be appended to the User. 

> To learn the use of first Two settings mentioned in the screenshot below, read this [**Section**](/docs/wordpress-automation-actions/#settings-of-create-wp-user-action) as it works the same way.

Once you are done, click the **Save Settings** button to save all your changes.

![Change WP user role](/automation-funnels/wordpress-automation-actions/Change-WP-User-Role-6.webp)

### 4. Remove the Selected Role of User 

This action lets you Select the WordPress Role that you want to remove from the targeted Contact.  
After selecting this **Action**, a tab will appear on the right-hand side with options to set up your action.

Here are the Settings of the Remove WP User Role action:

-   **User Role**: Select available **WordPress** **User** **Roles** for the **CRM Contacts** using the **Dropdown** **Arrow**. To learn more about WordPress User Roles, read this [**Documentation**](https://wordpress.org/documentation/article/roles-and-capabilities/#summary-of-roles). 

> To learn the use of first Two settings mentioned in the screenshot below, read this [**Section**](/docs/wordpress-automation-actions/#settings-of-create-wp-user-action) as it works the same way.

Once you are done, click the **Save Settings** button to save all your changes.

![Remove WP user role](/automation-funnels/wordpress-automation-actions/Remove-WP-User-Role-7.webp)
