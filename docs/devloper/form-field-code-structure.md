---
title: "Form Field Code Structure"
slug: "form-field-code-structure"
category: "devloper"
order: 0
---

# Form Field Code Structure
Fluent CRM has a cool structural format for generating form fields. Using this structural format anyone can make a form without writing any HTML or JavaScript. The form fields will depend on the structural format.

There are several types of form fields in Fluent CRM and all those have almost the same structural format. There are 26 types of form fields in fluent CRM. There are also some common and optional fields in every form block. Let's look at first the common/optional fields

Key

Description

label

Label title of your form field

inline\_help

Help message below your form input

placeholder

Placeholder of the selector

help

Description about selector

wrapper\_class

(Optional) With this property, someone can customize the form block design.

readonly

(Optional) If this property is true, then the field will be read-only

dependency

-   [Option selectors](#option-selectors)
-   [Single or multi-select](#signle-or-multi-select)
-   [Radio](#radio)
-   [Number input](#number-input)
-   [Text input](#text-input)
-   [Text input popper](#input-text-popper)
-   [Yes & no check](#yes-and-no-check)
-   [Grouped select](#grouped-select)
-   [Multi text options](#multi-text-options)
-   [Email campaign composer](#email-campaign-composer)
-   [Reload field selection](#reload-field-selection)
-   [Form group mapper](#form-group-mapper)
-   [Form many dropdown mappers](#form-many-dropdown-mappers)
-   [Html](#html)
-   [Url selector](#url-selector)
-   Date time
-   Condition groups
-   [Input values pair properties](#input-values-pair-properties)
-   [Text values multi properties](#text-value-multi-properties)
-   [Html editor](#html-editor)
-   [Rest selector](#rest-selector)
-   [Condition block groups](#condition-block-groups)
-   [Custom sender config](#custom-sender-config)
-   [Radio buttons](#radio-buttons)
-   [Checkboxes](#checkboxes)
-   [Time Selector](#time-selector)

**Option selectors**

```
'subscription_status' => [
    'type'        => 'option_selectors',
    'option_key'  => 'editable_statuses',
    'is_multiple' => false,
    'label'       => 'Subscription Status',
    'placeholder' => 'Select Status'
]
```

This is a simple **option\_selectors** type field component, you can find this structure in every integration. The **option\_key** is used to get the correct options from WordPress. The **is\_multiple** defines whether the option selector is multiple or not.

Key

Description

creatable

Can the user create a new tag/list

size

(Optional) Size of the field

option\_key

Dynamic Data Sets: Possible Values - [See bellow](#see-bellow-option_key)

is\_multiple

If the selector is multiple or not

**Option Key possible sets**.

Key

Description

tags

Tags are like Lists but more ways to filter your contacts inside a list.

lists

List are categories of your contacts.

editable\_statuses

All editable statuses of a user

woo\_products

All woo-commerce products

email\_sequences

All sequences of Fluent-CRM

campaigns

All campaigns of Fluent-CRM

product\_selector\_tutorlms

All courses of TutorLMS

edd\_coupons

All coupons of Easy Digital Download

product\_selector\_learndash

All options of Learndash courses

product\_selector\_learndash\_groups

All options of Learndash groups

product\_selector\_lifterlms

All options of LifterLMS courses

product\_selector\_lifterlms\_groups

All options of LifterLMS memberships

product\_selector\_pmpro

All memberships of Paid Membership Pro

product\_selector\_rcp

All memberships of Restrict Content Pro

product\_selector\_wishlist

All memberships of Wishlist Member

woo\_coupons

All Woo-commerce coupons

woo\_order\_statuses

All Woo-commerce order statuses

woo\_categories

All Woo-commerce categories

product\_selector\_woo

All Woo-commerce products

product\_selector\_woo\_order

All Woo-commerce products

edd\_products

All Easy Digital Download products

product\_selector\_edd

All Easy Digital Download products

**The preview of the example block.**

![screenshot 2022 09 01 at 11.57.47 am](/devloper/form-field-code-structure/Screenshot-2022-09-01-at-11.57.47-AM.png)

**Single or multi-select**

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

**The preview of the example block.**

![screenshot 2022 09 01 at 2.47.57 pm](/devloper/form-field-code-structure/Screenshot-2022-09-01-at-2.47.57-PM.png)

Options possible sets:

Key

Description

id

set selector id

title

set selector title

**Radio**

```
'purchase_type'      => [
    'type'        => 'radio',
    'label'       => 'Purchase Type'
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

**Options Key possible sets**:

Key

Description

id

Set selector id

title

Set selector title

**The preview of the example block.**

![screenshot 2022 09 01 at 3.10.51 pm](/devloper/form-field-code-structure/Screenshot-2022-09-01-at-3.10.51-PM.png)

**Number input**

```
'wait_time_amount' => [
    'label'         => 'Wait Time',
    'type'          => 'input-number',
    'wrapper_class' => 'fc_2col_inline pad-r-20'
],
```

This is an example **input-number** type field component, you can find this structure in every integration. There are also some optional properties.

**The preview of the example block.**

![screenshot 2022 09 01 at 3.22.58 pm](/devloper/form-field-code-structure/Screenshot-2022-09-01-at-3.22.58-PM.png)

**Text input**

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

**The preview of the example block.**

![screenshot 2022 09 01 at 3.30.03 pm 1](/devloper/form-field-code-structure/Screenshot-2022-09-01-at-3.30.03-PM-1.png)

**Text input popper**

```
'note'      => [
    'type'       => 'input-text-popper',
    'field_type' => 'textarea',
    'label'      => 'Order Note',
    'help'       => 'Type the note that you want to add to the reference order. You can also use smart tags'
]
```

This is an example **input-text-popper** type field component, you can find this structure in every integration. The possible value of the **field\_type** property is text or textarea.

**The preview of the example block.**

![screenshot 2022 09 01 at 3.50.01 pm](/devloper/form-field-code-structure/Screenshot-2022-09-01-at-3.50.01-PM.png)

**Yes & no check**

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

![screenshot 2022 09 01 at 3.54.18 pm](/devloper/form-field-code-structure/Screenshot-2022-09-01-at-3.54.18-PM.png)

**Grouped select**

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
                         'id'    => '1'
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

**Options possible sets**:

key

Description

title

set course title

slug

set course slug

options

Dynamic Data sets: Possible Values - [See below](#grouped-select-options-inside-options)

**Options -> Options possible sets:**

Key

Description

id

set selector id

title

set selector title

**The preview of the example block.**

![screenshot 2022 09 01 at 4.33.13 pm](/devloper/form-field-code-structure/Screenshot-2022-09-01-at-4.33.13-PM.png)

**Multi text options**

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

**The preview of the example block.**

![screenshot 2022 09 02 at 12.34.30 pm](/devloper/form-field-code-structure/Screenshot-2022-09-02-at-12.34.30-PM.png)

**Email campaign composer**

```
'campaign'  => [
    'label' => '',
    'type'  => 'email_campaign_composer'
],
```

This is an example **email\_campaign\_composer** type field component, you can find this structure in every integration.

**The preview of the example block.**

![screenshot 2022 09 02 at 9.27.07 am](/devloper/form-field-code-structure/Screenshot-2022-09-02-at-9.27.07-AM.png)

**Reload field selection**

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

**The preview of the example block.**

Key

Description

id

set selector id

title

set selector title

**The preview of the example block.**

![screenshot 2022 09 02 at 9.38.23 am](/devloper/form-field-code-structure/Screenshot-2022-09-02-at-9.38.23-AM.png)

**Form group mapper**

```
'primary_fields'        => [
    'label'             => 'Map Primary Data',,
    'type'              => 'form-group-mapper',
    'value_options'.    => [
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

**The preview of the example block.**

![screenshot 2022 09 02 at 2.18.05 pm](/devloper/form-field-code-structure/Screenshot-2022-09-02-at-2.18.05-PM.png)

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

**The preview of the example block.**

![screenshot 2022 09 02 at 3.20.53 pm](/devloper/form-field-code-structure/Screenshot-2022-09-02-at-3.20.53-PM.png)

**Html**

```
'subscription_status_info' => [
    'type'       => 'html',
    'info'       => 'An Automated double-optin email will be sent for new subscribers',
]
```

This is an example **html** type field component, you can find this structure in every integration. The **info** property is required.

**Url selector**

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

![screenshot 2022 09 02 at 10.03.21 am](/devloper/form-field-code-structure/Screenshot-2022-09-02-at-10.03.21-AM.png)

**Input value pair properties**

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

**property\_options possible sets**:

key

Description

label

set selector label

type

set selector type

options

Dynamic Data Sets: Possible Values – [See below](#property_options_into_options)

**property\_options -> options possible sets:**

key

Description

id

set selector id

slug

set selector slug

title

set selector title

**The preview of the example block.**

![screenshot 2022 09 02 at 10.48.35 am](/devloper/form-field-code-structure/Screenshot-2022-09-02-at-10.48.35-AM.png)

**Text value multi properties**

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

![screenshot 2022 09 02 at 11.07.51 am](/devloper/form-field-code-structure/Screenshot-2022-09-02-at-11.07.51-AM.png)

**Html editor**

```
'description' => [
    'type'    => 'html_editor',
    'label'   => 'Description'
]
```

This is an example **html\_editor** type field component, you can find this structure in every integration.

**The preview of the example block.**

![screenshot 2022 09 02 at 11.18.21 am](/devloper/form-field-code-structure/Screenshot-2022-09-02-at-11.18.21-AM.png)

**Rest selector**

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

![screenshot 2022 09 02 at 11.31.02 am](/devloper/form-field-code-structure/Screenshot-2022-09-02-at-11.31.02-AM.png)

**Condition block groups**

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

This is an example **cond****ition\_block\_groups** type field component, you can find this structure in every integration. The **labels** are a required property. The **groups** field contains the condition groups of a specific **cond****ition\_block\_groups** type field component.

**The preview of this condition block groups**

![screenshot 2022 09 01 at 10.52.37 am](/devloper/form-field-code-structure/Screenshot-2022-09-01-at-10.52.37-AM.png)

![screenshot 2022 09 01 at 10.50.34 am](/devloper/form-field-code-structure/Screenshot-2022-09-01-at-10.50.34-AM.png)

**Custom sender config**

```
'mailer_settings' => [
    'type'        => 'custom_sender_config',
    'check_label' => 'Set Custom From Name and Email',
]
```

This is an example **custom\_sender\_config** type field component, you can find this structure in every integration. The **check\_label** property is the title of the block

**The preview of this example block**

![screenshot 2022 09 01 at 11.10.55 am](/devloper/form-field-code-structure/Screenshot-2022-09-01-at-11.10.55-AM.png)

**Radio buttons**

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

**The preview of this example block.**

![screenshot 2022 09 02 at 12.08.55 pm](/devloper/form-field-code-structure/Screenshot-2022-09-02-at-12.08.55-PM.png)

**Checkboxes**

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

**The preview of this example block.**

![screenshot 2022 09 02 at 12.12.39 pm](/devloper/form-field-code-structure/Screenshot-2022-09-02-at-12.12.39-PM.png)

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

**The preview of this example block.**

![screenshot 2022 09 02 at 12.16.33 pm](/devloper/form-field-code-structure/Screenshot-2022-09-02-at-12.16.33-PM.png)