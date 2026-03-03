---
title: "Contact PHP API"
slug: "contact-php-api"
category: "devloper"
order: 0
---

# Contact PHP API
FluentCRM has the following PHP api functions so you can easily add/modify contacts.

&lt;?php

    $contactApi = FluentCrmApi('contacts');
    /\*
    \* Find a contact by Email or Contact ID
    \* You can find a contact by email or contact id (ContactId is not the user ID).
    \* @return: false or Contact Model Object
    \*/
    $contact = $contactApi->getContact($emailOrContactId);

    /\*
    \* Find a contact by contact id or email address
    \* You can find a contact by contact id
    \*/
    $contact = $contactApi->getContact($contactId);

    // or find by email address
    $contact = $contactApi->getContact($emailAddress);

    // Find contact by user id
    $contact = $contactApi->getContactByUserRef($userId);

    /\*
    \* get current logged in user's contact profile
    \*
    \*/
    $contact = $contactApi->getCurrentContact();

### Accessing Contact Properties

&lt;?php
    /\*
    \* Accessing contact properties
    \*/

    $contact->first\_name;
    $contact->last\_name;
    $contact->email;
    $tags = $contact->tags()->get();   // Tags array that are assigned to the contact 
    $lists = $contact->lists()->get(); // Lists array that are assigned to the contact

### [](https://github.com/FluentCRM/fluent-crm/wiki/PHP-API#updating-contact-properies)Updating Contact Properties

&lt;?php

    /\*
    \* Updating contact properties
    \*/
    $contact->first\_name = 'New First Name';
    $contact->last\_name = 'Last Name';
    $contact->save();

    /\*
    \* Adding tags to a contact
    \*/
    $tagIds = \[1,2,3\];
    $contact->attachTags($tagIds);

    /\*
    \* Adding Lists to a contact
    \*/
    $listIds = \[2,3\];
    $contact->attachLists($listIds);

    /\*
    \* Removing tags from a contact
    \*/
    $tagIds = \[1,2,3\];
    $contact->detachTags($tagIds);

    /\*
    \* Adding Lists to a contact
    \*/
    $listIds = \[2,3\];
    $contact->detachLists($listIds);

### [](https://github.com/FluentCRM/fluent-crm/wiki/PHP-API#creating-or-updating-a-new-contact)Creating or Updating a new contact

&lt;?php

   $contactApi = FluentCrmApi('contacts');

    /\*
    \* Update/Insert a contact
    \* You can create or update a contact in a single call
    \*/

    $data = \[
        'first\_name' => 'Jhon',
        'last\_name' => 'Doe',
        'email' => 'jhon@doe.com', // requied
        'status' => 'pending',
        'tags' => \[1,2,3\], // tag ids as an array
        'lists' => \[4\] // list ids as an array
    \];

    $contact = $contactApi->createOrUpdate($data);

    // send a double opt-in email if the status is pending
    if($contact->status == 'pending') {
        $contact->sendDoubleOptinEmail();
    }

### Filtering Contacts

    $contactApi = FluentCrmApi('contacts');

    // get Subscribed Contacts
    $subscribedContacts = $contactApi->getInstance()->where('status', 'subscribed')->get(); // you can also use paginate() instead of get();

    // Get both pending and upsubscribed contacts
    $contacts = $contactApi->getInstance()->whereIn('status', \['unsubscribed', 'pending'\])->get();

    // Get contacts by tag ids
    $tagIds = \[1,2\];
    $tagOneTwoContacts = $contactApi->getInstance()->filterByTags($tagIds)->get();

    // Get contacts by list ids
    $listIds = \[1,2\];
    $ListOneTwoContacts = $contactApi->getInstance()->filterByLists($listIds)->get();

    // search contacts
    $searchResult = $contactApi->getInstance()->searchBy('search\_string')->get();