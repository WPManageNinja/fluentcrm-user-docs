---
title: "Custom Automation Action"
slug: "custom-automation-action"
category: "devloper"
order: 0
---

# Custom Automation Action

This guide shows you how to register a **custom automation action** in FluentCRM so your own plugin or custom code can perform extra work inside an automation funnel (for example, adding a note to an external system, calling an API, or updating custom data).

---

## What is an automation action?

Actions are the **steps** inside a funnel that perform work, such as:

- Updating contact properties.
- Sending webhooks.
- Splitting traffic for A/B tests.

You can add your own action to this list so that funnel builders can drag‑and‑drop it just like any built‑in block.

---

## Hooks used for a custom action

To implement a custom action you will typically use **two filters** and **one action hook**:

| Type   | Hook name                                        | Purpose |
| ------ | ------------------------------------------------ | ------- |
| Filter | `fluentcrm_funnel_blocks`                        | Register your custom block in the automation action list. |
| Filter | `fluentcrm_funnel_block_fields`                  | Define the settings fields shown when the action block is selected. |
| Action | `fluentcrm_funnel_sequence_handle_{action_name}` | Execute your custom logic when the action runs. Replace `{action_name}` with your action slug. |

In the example below, the **action name** is:

```text
custom_action_name
```

So the runtime hook will be:

- `fluentcrm_funnel_sequence_handle_custom_action_name`

---

## Step 1 – Create the action class

Create a PHP class, for example `Custom\Actions\CustomAction`, that:

- Registers the action block (`pushBlock`).
- Defines the block fields (`getBlockFields`).
- Handles the execution (`handle`).

```php
<?php

namespace Custom\Actions;

class CustomAction
{
    protected $actionName;
    protected $priority;
    protected $funnel;

    public function __construct()
    {
        $this->actionName = 'custom_action_name';
        $this->priority   = 99;

        // 1) Add the block to the funnel builder
        add_filter(
            'fluentcrm_funnel_blocks',
            [$this, 'pushBlock'],
            $this->priority,
            2
        );

        // 2) Define the block settings fields
        add_filter(
            'fluentcrm_funnel_block_fields',
            [$this, 'pushBlockFields'],
            $this->priority,
            2
        );

        // 3) Handle the action when it runs
        add_action(
            'fluentcrm_funnel_sequence_handle_' . $this->actionName,
            [$this, 'handle'],
            10,
            4
        );
    }

    /**
     * Register the block in the funnel builder.
     */
    public function pushBlock($blocks, $funnel)
    {
        $this->funnel = $funnel;

        $block = $this->getBlock();
        if ($block) {
            $block['type']               = 'action';
            $blocks[$this->actionName]   = $block;
        }

        return $blocks;
    }

    /**
     * Register the settings fields for this block.
     */
    public function pushBlockFields($fields, $funnel)
    {
        $this->funnel = $funnel;

        $fields[$this->actionName] = $this->getBlockFields();

        return $fields;
    }

    /**
     * Basic block metadata and default settings.
     */
    public function getBlock()
    {
        return [
            'category'    => 'My-plugin',
            'title'       => 'Add My-plugin Note',
            'description' => 'Add a note to My-plugin',
            'icon'        => 'fc-icon-writing',
            'settings'    => [
                'note'      => '',
                'note_type' => 'private',
            ],
        ];
    }

    /**
     * Settings fields displayed in the action configuration panel.
     */
    public function getBlockFields()
    {
        $formattedOptions = [
            [
                'id'    => 'private',
                'title' => 'Private Note',
            ],
            [
                'id'    => 'customer',
                'title' => 'Note to Customer',
            ],
        ];

        return [
            'title'      => 'Add My-plugin Note',
            'sub_title'  => 'Add a note to the related My-plugin order',
            'fields'     => [
                'note'      => [
                    'type'        => 'input-text-popper',
                    'field_type'  => 'textarea',
                    'label'       => 'My-plugin Note',
                    'help'        => 'Type the note you want to add to the reference order. Smart tags are supported.',
                ],
                'note_type' => [
                    'type'    => 'radio',
                    'label'   => 'Note Type',
                    'help'    => 'Select how this note should be stored for the reference order.',
                    'options' => $formattedOptions,
                ],
            ],
        ];
    }

    /**
     * Main handler that runs when this action step executes.
     *
     * @param \FluentCrm\App\Models\Subscriber $subscriber
     * @param object                           $sequence
     * @param int                              $funnelSubscriberId
     * @param object                           $funnelMetric
     */
    public function handle($subscriber, $sequence, $funnelSubscriberId, $funnelMetric)
    {
        // Replace this with your own integration logic.
        error_log(print_r(
            [$subscriber, $sequence, $funnelSubscriberId, $funnelMetric],
            true
        ));
    }
}
```

The `pushBlockFields()` method returns the configuration schema for the action’s settings panel. FluentCRM uses it to render the fields you see when configuring this action.

The block configuration UI will look similar to this:

![Custom automation action settings](/devloper/custom-automation-action/Screenshot-2022-09-07-at-10.46.23-AM-1024x453.png)

> The field definitions inside `getBlockFields()` follow the same structure as other FluentCRM form fields. For more field types and options, see the [form field code structure](/docs/form-field-code-structure) reference.

---

## Step 2 – Register the action class

Finally, instantiate your action class when FluentCRM (FluentCampaign) is available. A common place is the `plugins_loaded` hook:

```php
add_action('plugins_loaded', function () {
    if (defined('FLUENTCAMPAIGN_DIR_FILE')) {
        new \Custom\Actions\CustomAction();
    }
});
```

After this:

1. Your **Add My-plugin Note** action will appear in the automation action list.
2. You can configure its note text and note type inside any funnel.
3. When the step runs, FluentCRM will call your `handle()` method via `fluentcrm_funnel_sequence_handle_custom_action_name`, where you can add your own custom behavior or external integrations.***