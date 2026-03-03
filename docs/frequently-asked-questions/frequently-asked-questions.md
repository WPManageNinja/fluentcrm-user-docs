---
title: "General Questions"
slug: "frequently-asked-questions"
category: "frequently-asked-questions"
order: 0
---

# General Questions
**FluentCRM** is the **Email Marketing & CRM solution** for WordPress with loads of features and functionality. In order to help you make the most of this tool, we tried to cover as much as possible in our regular documentation. However, if you still have questions, this FAQ page is the perfect place to get your question answered.

## My scheduled email/email sequence isn't being sent correctly, what should I do?

The most common case we found for a few reported issues is CRON is not running for some reason(Go to **FluentCRM>Settings>Tools** and see when is the last time your CRON has been run.). This happens because WordPress CRON is quite unreliable. Check out [this doc](/docs/replace-wordpress-cron-with-a-real-cron-job) to replace WordPress CRON with a real CRON job.

## Both FluentCRM and Fluent Forms have double opt-in, which one should I use?

Double opt-in emails are a way to acquire 'consent of subscription' from users to send them emails. If you enable the double opt-in feature, both FluentCRM and Fluent Forms will require the user's consent before they can process the data.

In order to effectively set up double opt-in with FluentCRM, you should leave the **Enable Double Opt-in Confirmation before Form Data Processing** option(**Form>Form Settings**) unchecked within Fluent Forms. This will ensure that your contact will receive the double opt-in email you've set up within FluentCRM. If you enable double opt-in in both Fluent Forms and FluentCRM, your system will send the double opt-in email twice, one from Fluent Forms and another from FluentCRM.

## How can I store data in Custom Fields I've created in FluentCRM?

Once you've created custom fields, you'll need to map the field data. For example, if you want to map Fluent Forms data inside FluentCRM, you need to go to **Form Settings**\> **FluentCRM Integration** and map the data fields. Alternatively, you can also map the data from the Automations.

![fluent forms custom fields mapping](/frequently-asked-questions/frequently-asked-questions/Screenshot-2024-08-12-at-10.25.31-E2-80-AFAM-1024x793.webp)

## Email Templates: Can I set alternate text in case there isn't a value for the dynamic tags I'm using?

Yes, you can set alternate text for [merge codes](/docs/merge-codes-smart-codes-usage) within email templates. In case there isn't a value available for your dynamic tag, FluentCRM will automatically replace it with the alternate text you've provided.

Suppose you're using a dynamic tag to pull off the contact's name within your email template. In that case, the dynamic tag will be: **&#123;&#123;contact.first\_name&#125;&#125;**

In order to add an alternate text, simply add a pipe "**|**" symbol after the dynamic tag string and add your alternate text. For example, if you want to replace the contact's name with "**there**", add the text after adding a pipe symbol **&#123;&#123;contact.first\_name|there&#125;&#125;**. In case the contact's first name isn't available in the system, FluentCRM will replace the first name with "**there**".

This also works within double opt-in emails, subject lines and anywhere you can use a dynamic tag. So you can always use dynamic tags with confidence and replace them with alternate text if the value isn't available.

## How can I connect other WordPress form plugins with FluentCRM?

FluentCRM supports incoming webhooks. So if your form supports sending webhooks, you can integrate any form plugin with FluentCRM.

\***Tutorial:** [How to Connect Any WordPress Forms with FluentCRM](https://fluentcrm.com/connect-wp-forms-ninja-forms-gravity-forms-or-any-forms-with-fluentcrm/)

## Where can I get FluentCRM Tutorials?

We regularly publish tutorials on [our blog](https://fluentcrm.com/category/tutorials/) and [Youtube channel](https://www.youtube.com/channel/UCiyeXfnGx9e06hXWf0Hz7ow). You can also follow us on [Twitter](https://twitter.com/fluentcrm?lang=en) or join our [Facebook group](https://www.facebook.com/groups/fluentcrm/).