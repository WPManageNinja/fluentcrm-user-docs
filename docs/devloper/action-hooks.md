---
title: "Action Hooks"
slug: "action-hooks"
category: "devloper"
order: 0
---

# Action Hooks
FluentCRM triggers action hooks at different points in the lifecycle of your contacts and other modules.

### Contact Specific Action Hooks

```php
<?php

// New contact created
do_action('fluentcrm_contact_created', Model $contact);

// Contact updated
do_action('fluentcrm_contact_updated', Model $contact);

// Custom fields updated
do_action('fluentcrm_contact_custom_data_updated', array $newValues, Model $contact);

// Contact added to lists
do_action( 'fluentcrm_contact_added_to_lists', array $listIds, Model $contact);

// Contact removed from lists
do_action( 'fluentcrm_contact_removed_from_lists', array $listIds, Model $contact);

// Contact added to tags
do_action( 'fluentcrm_contact_added_to_tags', array $tagIds, Model $contact);

// Contact removed from tags
do_action( 'fluentcrm_contact_removed_from_tags', array $tagIds, Model $contact);

// contact status change to subscribed
do_action('fluentcrm_subscriber_status_to_subscribed', Model $contact, string $oldStatus);

// contact status change to unsubscribed
do_action('fluentcrm_subscriber_status_to_unsubscribed', Model $contact, string $oldStatus);

// Bulk Import Contacts
do_action('fluentcrm_contacts_imported_bulk', Collections $insertedContacts);

// Bulk Update Contacts
do_action('fluentcrm_contacts_updated_bulk', Collections $updatedModels);

// Before subscribers deleted
do_action('fluentcrm_before_subscribers_deleted', array $subscriberIds);

// After Subscribers deleted
do_action('fluentcrm_after_subscribers_deleted', array $subscriberIds);
```

### [](https://github.com/FluentCRM/fluent-crm/wiki/ActionHooks#example-usage)Example Usage

```php
<?php

// Do something after contact is added
add_action('fluentcrm_contact_created', function ($contact) {
    // do your stuff here
}, 10, 1);

// Do something after a contact get updated
add_action('fluentcrm_contact_updated', function ($contact) {
    // do your stuff here
}, 10, 1);

// Do something after a contact status changed to subscribed
add_action('fluentcrm_subscriber_status_to_subscribed', function ($contact, $oldStatus) {
    // do your stuff here
}, 10, 2);
```