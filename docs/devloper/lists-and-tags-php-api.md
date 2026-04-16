---
title: "Lists and Tags PHP API"
slug: "lists-and-tags-php-api"
category: "devloper"
order: 0
---

Use FluentCRM's Lists and Tags PHP API to access contact segments and evaluate tag membership.

## Access Lists

In FluentCRM, a list is a contact segment.

```php
<?php

$listApi = FluentCrmApi('lists');

// Get all lists (array of list objects)
$allLists = $listApi->all();

// Get a single list by ID
$list = $listApi->find(1);

// Access list properties
$listId = $list->id;
$listTitle = $list->title;
$listSlug = $list->slug;
```

## Access Tags

In FluentCRM, a tag is also a contact segment.

```php
<?php

$tagApi = FluentCrmApi('tags');

// Get all tags (array of tag objects)
$allTags = $tagApi->all();

// Get a single tag by ID
$tag = $tagApi->find(1);

// Access tag properties
$tagId = $tag->id;
$tagTitle = $tag->title;
$tagSlug = $tag->slug;
```

## Check Contact Tag Membership

### Check if a Contact Has Any Tag from a Given Set

```php
<?php

$contactApi = FluentCrmApi('contacts');

// Get current logged-in contact
$contact = $contactApi->getCurrentContact();

$targetTagIds = [1, 2, 3];
$isInTags = ($contact && $contact->hasAnyTagId($targetTagIds));
```
