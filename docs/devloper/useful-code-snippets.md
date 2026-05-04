---
title: "Useful Code Snippets"
slug: "useful-code-snippets"
category: "devloper"
order: 0
---

# Useful Code Snippets
**Disable Email Open Tracking**

```
add_filter('fluentcrm_disable_email_open_tracking', '__return_true');
```

**Disable Email Link Clicks and short URLs**

```
add_filter('fluent_crm/track_click', '__return_false');
```

**Add Custom Contact Status**

(Change "Withdrawn" to the custom contact status you want to display.)

```
add_filter('fluent_crm/contact_statuses', function($statuses){
      $statuses[] = "Withdrawn";

      return $statuses;
  },10, 1);
```

**Add Custom Contact Type**

(Replace "Student" with the new contact type and "This is a Student" with the description)

```
add_filter('fluent_crm/contact_types', function($types){

     $types['Student'] = __('This is a Student', 'fluent-crm');

     return $types;
 }, 10, 1);
```