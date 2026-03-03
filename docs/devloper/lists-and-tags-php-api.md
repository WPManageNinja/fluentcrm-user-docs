---
title: "Lists and Tags PHP API"
slug: "lists-and-tags-php-api"
category: "devloper"
order: 0
---

# Lists and Tags PHP API
### Accessing lists

&lt;?php

   /\*
    \* List is a contact segment.
    \*/
    $listApi = FluentCrmApi('lists');

    // Get all the lists
    $allLists = $listApi->all(); // array of all the lists and each list is an object

    // get a single list
    $list = $listApi->find(1); // finding the list id 1

    // accessing a list
    $listId = $list->id;
    $listTitle = $list->title;
    $listSlug = $list->slug;

### [](https://github.com/FluentCRM/fluent-crm/wiki/PHP-API#accessing-tags)Accessing Tags

&lt;?php
    /\*
    \* Tag is a contact segment. You can easily access those
    \*/

    $tagApi = FluentCrmApi('tags');

    // Get all the tags
    $allTags = $tagApi->all(); // array of all the lists and each list is an object

    // get a single tag
    $tag = $tagApi->find(1); // finding the list id 1

    // accessing a tag
    $tagId = $tag->id;
    $tagTitle = $tag->title;
    $tagSlug = $tag->slug;

## [](https://github.com/FluentCRM/fluent-crm/wiki/PHP-API#filtering-contacts)

### Check if a contact is in any provided tags

    $contactApi = FluentCrmApi('contacts');
    // get current logged in contact
    $contact = $contactApi->getCurrentContact();
     
    $targetTagIds = \[1,2,3\];
    $isInTags = ($contact && $contact->hasAnyTagId($targetTagIds));