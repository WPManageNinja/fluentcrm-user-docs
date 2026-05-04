---
title: "Form Field Code Structure"
slug: "form-field-code-structure"
category: "devloper"
order: 0
---

# Form Field Code Structure

FluentCRM uses a **declarative PHP array structure** to describe all settings and form UIs in the automation builder. Instead of writing HTML and JavaScript manually, you define fields as arrays and FluentCRM renders the UI for you.

This page is organized in two parts:

- **Concepts and common options** – how field definitions are structured and which properties are shared.
- **Per–field‑type examples** – real code snippets you can copy and adapt.

---

## Common field properties

Almost every field definition supports the following keys:

| Key            | Description                                                                                     |
| ------------- | ----------------------------------------------------------------------------------------------- |
| `label`       | The visible label for the field.                                                                |
| `inline_help` | Short help text shown under the input.                                                          |
| `placeholder` | Placeholder text for text or select inputs.                                                     |
| `help`        | Longer description or tooltip text for the field.                                              |
| `wrapper_class` | Optional CSS class to control layout (columns, spacing, etc.) in the builder UI.             |
| `readonly`    | When `true`, the field is rendered but cannot be edited.                                       |
| `dependency`  | Optional rule controlling when the field is shown, based on the value of another field.        |

Each field **must** declare a `type` (for example `input-text`, `multi-select`, `radio`), which tells FluentCRM which Vue component to use.

---

## Field types overview

FluentCRM ships with many field types. The most commonly used are:

- [Option selectors](#option-selectors)
- [Single or multi-select](#single-or-multi-select)
- [Radio](#radio)
- [Number input](#number-input)
- [Text input](#text-input)
- [Text input popper](#text-input-popper)
- [Yes & no check](#yes-and-no-check)
- [Grouped select](#grouped-select)
- [Multi text options](#multi-text-options)
- [Email campaign composer](#email-campaign-composer)
- [Reload field selection](#reload-field-selection)
- [Form group mapper](#form-group-mapper)
- [Form many dropdown mappers](#form-many-dropdown-mappers)
- [HTML](#html)
- [URL selector](#url-selector)
- Date & time related fields
- Condition/segment builders
- [Input values pair](#input-values-pair-properties)
- [Text values multi](#text-value-multi-properties)
- [HTML editor](#html-editor)
- [REST selector](#rest-selector)
- [Condition block groups](#condition-block-groups)
- [Custom sender config](#custom-sender-config)
- [Radio buttons](#radio-buttons)
- [Checkboxes](#checkboxes)
- [Time selector](#time-selector)

The following sections give practical examples for each type.

---

## Detailed examples

The rest of this page contains detailed examples for every field type. You can use the snippets directly in your own integrations.

### Option selectors

```
'subscription_status' => [
    'type'        => 'option_selectors',
    'option_key'  => 'editable_statuses',
    'is_multiple' => false,
    'label'       => 'Subscription Status',
    'placeholder' => 'Select Status'
]
```

This is a simple **option_selectors** type field component. You will see this structure across many integrations.

| **Key**       | **Description**                                                                                           |
| ------------- | --------------------------------------------------------------------------------------------------------- |
| `creatable`   | Whether users can create a new tag/list from the selector.                                               |
| `size`        | (Optional) Visual size of the field.                                                                     |
| `option_key`  | Tells FluentCRM which dynamic dataset to load (see the option key reference below).                      |
| `is_multiple` | Whether multiple values can be selected.                                                                 |

**Option key reference**

These are the most common values you will use for the `option_key` property when working with `option_selectors`.  
FluentCRM will automatically resolve each key into the right dataset.

| **option_key**                       | **What it returns**                                                                 |
| ------------------------------------ | ----------------------------------------------------------------------------------- |
| `tags`                               | All tags (used to segment contacts inside a list).                                 |
| `lists`                              | All lists (high‑level categories for contacts).                                    |
| `editable_statuses`                  | All editable contact statuses.                                                      |
| `woo_products`                       | All WooCommerce products.                                                           |
| `email_sequences`                    | All email sequences in FluentCRM.                                                  |
| `campaigns`                          | All email campaigns in FluentCRM.                                                  |
| `product_selector_tutorlms`          | All TutorLMS courses.                                                               |
| `edd_coupons`                        | All Easy Digital Downloads coupons.                                                |
| `product_selector_learndash`         | All LearnDash courses.                                                              |
| `product_selector_learndash_groups`  | All LearnDash groups.                                                               |
| `product_selector_lifterlms`         | All LifterLMS courses.                                                              |
| `product_selector_lifterlms_groups`  | All LifterLMS memberships.                                                          |
| `product_selector_pmpro`             | All Paid Memberships Pro memberships.                                              |
| `product_selector_rcp`               | All Restrict Content Pro memberships.                                              |
| `product_selector_wishlist`         | All Wishlist Member memberships.                                                   |
| `woo_coupons`                        | All WooCommerce coupons.                                                            |
| `woo_order_statuses`                 | All WooCommerce order statuses.                                                     |
| `woo_categories`                     | All WooCommerce product categories.                                                |
| `product_selector_woo`               | All WooCommerce products.                                                           |
| `product_selector_woo_order`         | All WooCommerce products (for order selectors).                                     |
| `edd_products`                       | All Easy Digital Downloads products.                                               |
| `product_selector_edd`               | All Easy Digital Downloads products.                                               |



### Single or multi-select

```
'product_ids'     => [
    'type'        => 'multi-select',
    'label'       => 'Target Products',
    'help'        => 'Select for which products this goal will run',
    'options'     => [
          [
                'id'    => '2',
                'title' => 'First Product'
          ]
    ],
    'inline_help' => 'Keep it blank to run to any product purchase',
],
```

This is an example **multi-select** type field component, you can find this structure in every integration. The **options** property contains the options of the select field. The structure of single select and multi-select is the same. Every option has two properties, **id** & **title**.



**Option structure**

Each option inside the `options` array has this shape:

| Key    | Description        |
| ------ | ------------------ |
| `id`   | Unique identifier. |
| `title`| Human‑readable label shown in the UI. |

### Radio

```
'purchase_type'      => [
    'type'        => 'radio',
    'label'       => 'Purchase Type',
    'help'        => 'Select the purchase type',
    'options'     => [
        [
            'id'    => 'all',
            'title' => 'Any type of purchase'
        ]
    ],
    'inline_help' => 'For what type of purchase you want to run this goal'
],
```

This is an example **radio** type field component, you can find this structure in every integration. The **options** property contains the values of the radio fields. Every option has two properties, **id** & **title**.

**Option structure**

Radio `options` use the same structure as select options:

| Key    | Description        |
| ------ | ------------------ |
| `id`   | Value stored/sent. |
| `title`| Label shown next to the radio button. |



### Number input

```
'wait_time_amount' => [
    'label'         => 'Wait Time',
    'type'          => 'input-number',
    'wrapper_class' => 'fc_2col_inline pad-r-20'
],
```

This is an example **input-number** type field component, you can find this structure in every integration. There are also some optional properties.



### Text input

```
'send_email_custom'  => [
    'wrapper_class' => 'fc_half_field',
    'type'          => 'input-text',
    'label'         => 'Send To Email Addresses (If Custom)',
    'placeholder'   => 'Custom Email Addresses',
    'inline_help'   => 'Use comma separated values for multiple'
]
```

This is an example **input-text** type field component, you can find this structure in every integration.



### Text input popper

```
'note'      => [
    'type'       => 'input-text-popper',
    'field_type' => 'textarea',
    'label'      => 'Order Note',
    'help'       => 'Type the note that you want to add to the reference order. You can also use smart tags'
]
```

This is an example **input-text-popper** type field component, you can find this structure in every integration. The possible value of the **field\_type** property is text or textarea.



### Yes & no check

```
'run_multiple'       => [
    'type'        => 'yes_no_check',
    'label'       => '',
    'check_label' => 'Restart the Automation Multiple times for a contact for this event. (Only enable if you want to restart automation for the same contact)',
    'inline_help' => 'If you enable, then it will restart the automation for a contact if the contact already in the automation. Otherwise, It will just skip if already exist',
]
```

This is an example **yes\_no\_check** type field component, you can find this structure in every integration.

**The preview of the example block**:


### Grouped select

```
'lesson_ids'      => [
    'type'        => 'grouped-select',
    'label'       => 'Target Lessons',
    'help'        => 'Select for which Lessons this automation will run',
    'options'     => [
          [
               'title'   => 'First Course',
               'slug'    => 'first_course',
               'options' => [
                     [
                         'id'    => '1',
                         'title' => 'First Lesson'
                     ]
               ]
          ]
    ],
    'is_multiple' => true,
    'inline_help' => 'Keep it blank to run to any Lesson',
],
```

This is an example **grouped-select** type field component, you can find this structure in every integration. The **options** property contains a list. Every option has three properties **title**, **slug** & **[options](#grouped-select-options)**(Every [options](#grouped-select-options-inside-options) of this property contains two fields named **id** & **title**).

**Group structure**

Top‑level groups inside `options`:

| Key       | Description                                                |
| --------- | ---------------------------------------------------------- |
| `title`   | Course/group title shown in the dropdown.                  |
| `slug`    | Unique slug for the course/group.                          |
| `options` | Array of child options (lessons, items) for this group.    |

Child options inside each group:

| Key    | Description        |
| ------ | ------------------ |
| `id`   | Unique identifier. |
| `title`| Label shown in the UI. |



### Multi text options

```
'target_lesson' => [
    'type'        => 'multi_text_options',
    'label'       => 'Target lessons',
    'help'        => 'Select target lessons',
    'input_type'  => 'text',
    'placeholder' => 'Target lessons',
    'inline_help' => 'Keep it blank to run all lessons'
]
```

This is an example **multi\_text\_options** type field component, you can find this structure in every integration.



### Email campaign composer

```
'campaign'  => [
    'label' => '',
    'type'  => 'email_campaign_composer'
],
```

This is an example **email\_campaign\_composer** type field component, you can find this structure in every integration.



### Reload field selection

```
'course_id'       => [
    'type'        => 'reload_field_selection',
    'label'       => 'Target Course',
    'help'        => 'Select Course to find out Lesson',
    'options'     => [
          [
              'id'    => '1',
              'title' => 'First Course'
          ]
     ],
    'inline_help' => 'You must select a course'
],
```

This is an example **reload\_field\_selection** type field component, you can find this structure in every integration. The **options** property contains a list. Every option has two properties named **id** & **title**.


Key

Description

id

set selector id

title

set selector title



**Form group mapper**

```
'primary_fields'        => [
    'label'             => 'Map Primary Data',
    'type'              => 'form-group-mapper',
    'value_options'     => [
        [
            'id'    => '',
            'title' => ''
        ]
    ],
    'local_label'      => 'Contact Field (CRM)',
    'remote_label'     => 'Form Field',
    'fields'           => [
        'first_name' => [
               'type'   => 'value_options',
               'label'  => 'First Name'
        ],
        'last_name' => [
              'type'   => 'value_options',
              'label'  => 'Last Name'
        ],
        'email'    => [
            'type'    => 'value_options',
            'label'   => 'Email'
        ]
    ]
]
```

This is an example **form-group-mapper** type field component, you can find this structure in every integration. The **value\_options** property contains a list of options of Fluent Form. Every option has two properties named **id** & **title**.

There is also a property named **fields** which contains a list of input fields.



**Form many dropdown mappers**

```
'other_fields'           => [
    'label'              => 'Map Other Data',
    'type'               => 'form-many-drop-down-mapper',
    'value_options'      => [
        [
            'id'    => '',
            'title' => ''
        ]
    ],
    'local_label'        => 'Select Contact Property',
    'remote_label'       => 'Select Form Field',
    'local_placeholder'  => 'Select Contact Property',
    'remote_placeholder' => 'Select Form Property',
    'fields'             => [
            'prefix'         => [
                'type'  => 'value_options',
                'label' => 'Name Prefix'
            ],
            'address_line_1' => [
                'type'  => 'value_options',
                'label' => 'Address Line 1'
            ],
            'address_line_2' => [
                'type'  => 'value_options',
                'label' => 'Address Line 2'
            ],
     ]
]
```

This is an example **form-many-drop-down-mapper** type field component, you can find this structure in every integration. The **value\_options** property contains a list of options of Fluent Form. Every option has two properties named **id** & **title**.

There is also a property named **fields** which contains a list of input fields.



### Html

```
'subscription_status_info' => [
    'type'       => 'html',
    'info'       => 'An Automated double-optin email will be sent for new subscribers',
]
```

This is an example **html** type field component, you can find this structure in every integration. The **info** property is required.

### Url selector

```
'redirect_to' => [
    'type'        => 'url_selector',
    'label'       => 'Redirect To',
    'placeholder' => 'Your Target URL',
    'help'        => 'Contacts will be redirected to this link.',
    'inline_help' => 'Please provide the url to where the contact will be redirected'
],
```

This is an example **url\_selector** type field component, you can find this structure in every integration.

**The preview of the example block:**


### Input value pair properties

```
'contact_properties'     => [
    'type'               => 'input_value_pair_properties',
    'support_operations' => 'yes',
    'label'              => 'Setup contact properties that you want to update',
    'data_key_label'     => 'Contact Property',
    'data_value_label'   => 'Property Value',
    'property_options'   => [
         'contact_type'  => [
             'label'     => 'Contact Type',
             'type'      => 'select',
             'options'   => [
                  [
                      'id'    => 'lead',
                      'slug'  => 'lead',
                      'title' => 'Lead'
                  ]
             ]
         ],
    ]
]
```

This is an example **input\_value\_pair\_properties** type field component, you can find this structure in every integration. The **property\_options** property contains a list of other different types of field components.

**`property_options` structure**

Top‑level `property_options` entries use:

| Key      | Description                                   |
| -------- | --------------------------------------------- |
| `label`  | Label shown for the property selector.        |
| `type`   | Field type used to select the property value. |
| `options`| Option list for that inner field.             |

Inner `options` items use:

| Key    | Description                |
| ------ | -------------------------- |
| `id`   | Internal identifier.       |
| `slug` | Optional machine‑readable key. |
| `title`| Text shown in the dropdown. |



### Text value multi properties

```
'meta_properties'            => [
    'label'                  => 'User Meta Mapping',
    'type'                   => 'text-value-multi-properties',
    'data_key_label'         => 'User Meta Key',
    'data_value_label'       => 'User Meta Value',
    'data_value_placeholder' => 'Meta Value',
    'data_key_placeholder'   => 'Meta key',
    'help'                   => 'If you want to map user meta properties you can add that here. This is totally optional',
    'value_input_type'       => 'text-popper'
],
```

This is an example **text-value-multi-properties** type field component, you can find this structure in every integration.


### Html editor

```
'description' => [
    'type'    => 'html_editor',
    'label'   => 'Description'
]
```

This is an example **html\_editor** type field component, you can find this structure in every integration.



### Rest selector

```
'course_id' => [
    'type'        => 'rest_selector',
    'option_key'  => 'product_selector_learndash',
    'is_multiple' => false,
    'clearable'   => true,
    'label'       => 'Select Course to Enroll',
    'placeholder' => 'Select Course',
]
```

This is an example **rest\_selector** type field component, you can find this structure in every integration. The **option\_key** is a required property.


### Condition block groups

```
'conditions' => [
    'type'        => 'condition_block_groups',
    'label'       => 'Specify Matching Conditions',
    'inline_help' => 'Specify which contact properties need to matched. Based on the conditions it will run yes blocks or no blocks',
    'labels'      => [
        'match_type_all_label' => 'True if all conditions match',
        'match_type_any_label' => 'True if any of the conditions match',
        'data_key_label'       => 'Contact Data',
        'condition_label'      => 'Condition',
        'data_value_label'     => 'Match Value'
    ],
    'groups'      => [
            'subscriber' => [
                'label'    => 'Contact',
                'value'    => 'subscriber',
                'children' => [
                    [
                        'label' => 'First Name',
                        'value' => 'first_name',
                        'type'  => 'nullable_text'
                    ],
                 ]
            ]
    ],
    'add_label'   => 'Add Condition to check your contact\'s properties',
]
```

This is an example **condition_block_groups** type field component. The `labels` array is required. The `groups` field defines the available condition groups and their children for this condition builder.



### Custom sender config

```
'mailer_settings' => [
    'type'        => 'custom_sender_config',
    'check_label' => 'Set Custom From Name and Email',
]
```

This is an example **custom\_sender\_config** type field component, you can find this structure in every integration. The **check\_label** property is the title of the block



### Radio buttons

```
'wait_type'        => [
    'type'    => 'radio_buttons',
    'label'   => 'Waiting Type',
    'options' => [
        [
            'id'    => 'unit_wait',
            'title' => 'Wait for a specific period'
        ],
        [
            'id'    => 'timestamp_wait',
            'title' => 'Wait until a specific date-time'
        ],
        [
            'id'    => 'to_day',
            'title' => 'To a day of the week'
        ]
    ]
],
```

This is an example **radio\_buttons** type field component, you can find this structure in every integration. The options property is a list.

**options possible sets:**

key

Description

id

set selector id

title

set selector title



### Checkboxes

```
'to_day'            => [
    'type'          => 'checkboxes',
    'label'         => 'Wait until next day(s) of the week',
    'wrapper_class' => 'fc_2col_inline pad-r-20',
    'options'       => [
        [
            'id'    => 'Mon',
            'title' => 'Mon'
        ]
    ],
],
```

This is an example **checkboxes** type field component, you can find this structure in every integration. The **options** property is a list containing days info of a week. This example block depends on a wait\_type field. If the **wait\_type** value is to\_day, then this block will show.

**options possible sets:**

key

Description

id

set selector id

title

set selector title



**Time selector**

```
'to_day_time'        => [
    'label'          => 'Time of the day',
    'type'           => 'time_selector',
    'placeholder'    => 'Select Time',
    'wrapper_class'  => 'fc_2col_inline',
    'picker_options' => [
        'start' => '00:00',
        'step'  => '00:10',
        'end'   => '23:59'
    ]
]
```

This is an example **time\_selector** type field component, you can find this structure in every integration. The **picker\_options** property contains three properties named **start**, **step** & **end**. This example block depends on a wait\_type field. If the **wait\_type** value is to\_day, then this block will show.

**options possible sets:**

key

Description

id

set selector id

title

set selector title

