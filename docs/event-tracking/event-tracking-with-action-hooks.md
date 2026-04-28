---
title: "Event Tracking with Action Hooks"
slug: "event-tracking-with-action-hooks"
category: "event-tracking"
order: 0
---

# Event Tracking with Action Hooks
If you want to run Event Tracking with Action Hook then you will need a snippet plugin. Here we are using the **[FluentSnippets](https://wordpress.org/plugins/easy-code-manager/)** WordPress plugin.

After that navigate the **Fluentsnippets** and click **Create Your First Snippet** or **New Snippet**.

![fluent snippets](/event-tracking/event-tracking-with-action-hooks/Fluent-Snippets-scaled.webp)

Then copy this **code** and paste it into your Snippets Php code section image below.

```
do_action('fluent_crm/track_event_activity', [

    'event_key' => 'fcrm_event_tested',

    'title'     => 'Testing FluentCRM Event',

    'value'     => 'This is my event value with plain Text',

    'email'     => 'success+3000@simulator.amazonses.com',

    'provider'  => 'woocommerce'

], true);
```

Here change your **event key**, **title**, **value**, **email**, and **provider** name as you want. Then activate this snippet.

![02](/event-tracking/event-tracking-with-action-hooks/02-1-scaled.webp)

Now to see your event tracked go to FluentCRM contact.

![rjax eventv tracking 03](/event-tracking/event-tracking-with-action-hooks/Rjax-eventv-tracking-03-scaled.webp)

## Get events of a single contact

If you want to see the event tracking of a single contact, let's see how you can do that.

API: https://your-domain.com/wp-json/fluent-crm/v2/subscribers/{ID}/tracking-events

Then You will get a response like this:

![single contact event tracking 04](/event-tracking/event-tracking-with-action-hooks/single-contact-event-tracking-04.webp)
