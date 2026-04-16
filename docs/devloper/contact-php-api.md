---
title: "Contact PHP API"
slug: "contact-php-api"
category: "devloper"
order: 0
---

Use FluentCRM's Contact PHP API to find, update, create, and filter contacts.

## Initialize the Contact API

```php
<?php

$contactApi = FluentCrmApi('contacts');
```

## Retrieve Contacts

### Get by Email or Contact ID

`getContact()` accepts either email or contact ID (contact ID is not WordPress user ID).

```php
<?php

$contact = $contactApi->getContact($emailOrContactId);
```

### Get by Contact ID

```php
<?php

$contact = $contactApi->getContact($contactId);
```

### Get by Email

```php
<?php

$contact = $contactApi->getContact($emailAddress);
```

### Get by WordPress User ID

```php
<?php

$contact = $contactApi->getContactByUserRef($userId);
```

### Get Current Logged-In User's Contact

```php
<?php

$contact = $contactApi->getCurrentContact();
```

## Access Contact Properties

```php
<?php

$firstName = $contact->first_name;
$lastName = $contact->last_name;
$email = $contact->email;

$tags = $contact->tags()->get();   // Tags assigned to the contact
$lists = $contact->lists()->get(); // Lists assigned to the contact
```

## Update Contact Data

### Update Basic Fields

```php
<?php

$contact->first_name = 'New First Name';
$contact->last_name = 'Last Name';
$contact->save();
```

### Attach Tags

```php
<?php

$tagIds = [1, 2, 3];
$contact->attachTags($tagIds);
```

### Attach Lists

```php
<?php

$listIds = [2, 3];
$contact->attachLists($listIds);
```

### Detach Tags

```php
<?php

$tagIds = [1, 2, 3];
$contact->detachTags($tagIds);
```

### Detach Lists

```php
<?php

$listIds = [2, 3];
$contact->detachLists($listIds);
```

## Create or Update a Contact

`createOrUpdate()` can create a new contact or update an existing one in a single call.

```php
<?php

$contactApi = FluentCrmApi('contacts');

$data = [
    'first_name' => 'John',
    'last_name'  => 'Doe',
    'email'      => 'john@doe.com', // required
    'status'     => 'pending',
    'tags'       => [1, 2, 3],      // tag IDs
    'lists'      => [4]             // list IDs
];

$contact = $contactApi->createOrUpdate($data);

// Send double opt-in email when contact is pending
if ($contact->status === 'pending') {
    $contact->sendDoubleOptinEmail();
}
```

## Filter Contacts

### Get Subscribed Contacts

```php
<?php

$subscribedContacts = $contactApi
    ->getInstance()
    ->where('status', 'subscribed')
    ->get(); // You can also use paginate()
```

### Get Pending and Unsubscribed Contacts

```php
<?php

$contacts = $contactApi
    ->getInstance()
    ->whereIn('status', ['unsubscribed', 'pending'])
    ->get();
```

### Get Contacts by Tag IDs

```php
<?php

$tagIds = [1, 2];
$tagContacts = $contactApi->getInstance()->filterByTags($tagIds)->get();
```

### Get Contacts by List IDs

```php
<?php

$listIds = [1, 2];
$listContacts = $contactApi->getInstance()->filterByLists($listIds)->get();
```

### Search Contacts

```php
<?php

$searchResult = $contactApi->getInstance()->searchBy('search_string')->get();
```
