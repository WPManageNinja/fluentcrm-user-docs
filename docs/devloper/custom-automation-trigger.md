---
title: "Custom Automation Trigger"
slug: "custom-automation-trigger"
category: "devloper"
order: 0
---

# Custom Automation Trigger

This guide shows you how to register a **custom automation trigger** in FluentCRM so that your own plugin or custom code can start funnels based on events in your site (for example, a custom registration or purchase flow).

---

## What is an automation trigger?

An automation (or funnel) trigger defines **when** a funnel should start. Triggers are based on user behavior or system events. FluentCRM ships with many built‑in triggers, such as:

- [Primary Automation Triggers](/docs/fluentcrm-automation-triggers)
- [Ecommerce Triggers](/docs/fluentcrm-ecommerce-triggers)
- [Membership Triggers](/docs/fluentcrm-membership-triggers)
- [LMS Triggers](/docs/fluentcrm-lms-triggers)

Sometimes, you need to start a funnel from **your own plugin logic**. In that case, you can register a custom trigger and fire it whenever your event happens.

---

## Hooks used for a custom trigger

To implement a custom trigger you will typically use **two filters** and **one action**:

| Type   | Hook name                                        | Purpose |
| ------ | ------------------------------------------------ | ------- |
| Filter | `fluentcrm_funnel_triggers`                      | Register your trigger in the global trigger list so it appears in the funnel builder. |
| Filter | `fluentcrm_funnel_editor_details_{trigger_name}` | Provide the settings and conditions schema for the trigger configuration UI. Replace `{trigger_name}` with your own trigger slug. |
| Action | `fluentcrm_funnel_start_{trigger_name}`          | Fired automatically when FluentCRM decides the trigger should run, based on your settings and conditions. Your business logic goes here. |

In the example below, the **trigger name** is:

```text
my_plugin_registration
```

So the concrete hooks will be:

- `fluentcrm_funnel_editor_details_my_plugin_registration`
- `fluentcrm_funnel_start_my_plugin_registration`

---

## Step 1 – Create the trigger class

Create a PHP class, for example `Custom\Triggers\CustomTrigger`, that encapsulates the trigger definition, editor fields and handler logic.

```php
<?php

namespace Custom\Triggers;

class CustomTrigger
{
    protected $triggerName;
    protected $priority;
    protected $actionArgNum;

    public function __construct()
    {
        $this->triggerName   = 'my_plugin_registration';
        $this->priority      = 20;
        $this->actionArgNum  = 2;

        // 1) Register the trigger in the trigger list
        add_filter(
            'fluentcrm_funnel_triggers',
            [$this, 'addTrigger'],
            $this->priority,
            1
        );

        // 2) Provide editor configuration for this trigger
        add_filter(
            'fluentcrm_funnel_editor_details_' . $this->triggerName,
            [$this, 'prepareEditorDetails'],
            10,
            1
        );

        // 3) Handle the trigger when it fires
        add_action(
            'fluentcrm_funnel_start_' . $this->triggerName,
            [$this, 'handle'],
            10,
            2
        );
    }

    /**
     * Basic trigger metadata used in the trigger list.
     */
    public function getTrigger()
    {
        return [
            'category'    => __('My-plugin'),
            'label'       => __('My-plugin'),
            'description' => __(
                'This funnel will be initiated when a My-plugin registration is completed'
            ),
            'icon'        => 'fc-icon-wp_new_user_signup',
        ];
    }

    /**
     * Attach this trigger definition to FluentCRM's trigger registry.
     */
    public function addTrigger($triggers)
    {
        $triggers[$this->triggerName] = $this->getTrigger();

        return $triggers;
    }

    /**
     * Configuration fields for the trigger settings panel.
     */
    public function getSettingsFields($funnel)
    {
        return [
            'title'      => __('My-plugin Registration'),
            'sub_title'  => __(
                'This funnel will be initiated when a My-plugin registration is completed'
            ),
            'fields'     => [
                'message'     => [
                    'type'        => 'input-text',
                    'label'       => __('Message Title'),
                    'placeholder' => __('Type Message Title'),
                ],
                'description' => [
                    'type'  => 'html',
                    'label' => 'Description',
                    'info'  => '<b>' . __(
                        'This message will be added to the user but needs a title'
                    ) . '</b>',
                ],
            ],
        ];
    }

    /**
     * Build the full editor details object that FluentCRM expects.
     */
    public function prepareEditorDetails($funnel)
    {
        $funnel->settings        = wp_parse_args(
            $funnel->settings,
            $this->getFunnelSettingsDefaults()
        );
        $funnel->settingsFields  = $this->getSettingsFields($funnel);
        $funnel->conditions      = wp_parse_args(
            $funnel->conditions,
            $this->getFunnelConditionDefaults($funnel)
        );
        $funnel->conditionFields = $this->getConditionFields($funnel);

        return $funnel;
    }

    /**
     * Default values for the "Settings" section.
     */
    public function getFunnelSettingsDefaults()
    {
        return [
            'subscription_status' => 'subscribed',
        ];
    }

    /**
     * Definition of the "Conditions" fields for this trigger.
     */
    public function getConditionFields($funnel)
    {
        return [
            'update_type' => [
                'type'    => 'radio',
                'label'   => __('If Contact Already Exists?', 'fluent-crm'),
                'help'    => __(
                    'Specify what will happen if the subscriber already exists in the database',
                    'fluent-crm'
                ),
                'options' => $this->getUpdateOptions(),
            ],
            'user_roles'  => [
                'type'         => 'multi-select',
                'is_multiple'  => true,
                'label'        => __('Targeted User Roles', 'fluent-crm'),
                'help'         => __(
                    'Select which roles’ registration will run this automation funnel',
                    'fluent-crm'
                ),
                'placeholder'  => __('Select Roles', 'fluent-crm'),
                'options'      => $this->getUserRoles(),
                'inline_help'  => __(
                    'Leave blank to run for all user roles',
                    'fluent-crm'
                ),
            ],
            'run_multiple' => [
                'type'        => 'yes_no_check',
                'label'       => '',
                'check_label' => __(
                    'Restart the automation multiple times for a contact for this event (only enable if you want to restart automation for the same contact)'
                ),
                'inline_help' => __(
                    'If enabled, the automation will restart for a contact even if they are already in the automation. Otherwise, it will be skipped.',
                    'fluent-crm'
                ),
            ],
        ];
    }

    /**
     * Default values for the condition fields.
     */
    public function getFunnelConditionDefaults($funnel)
    {
        return [
            'update_type'  => 'update', // other options: skip_all_if_exist, skip_update_if_exist
            'user_roles'   => $this->getUserRoles(),
            'run_multiple' => 'yes',
        ];
    }

    /**
     * Options for the "update_type" radio field.
     */
    public function getUpdateOptions()
    {
        return [
            [
                'id'    => 'update',
                'title' => __('Update if Exist', 'fluent-crm'),
            ],
            [
                'id'    => 'skip_all_if_exist',
                'title' => __(
                    'Skip this automation if contact already exists',
                    'fluent-crm'
                ),
            ],
        ];
    }

    /**
     * Get all editable WordPress roles in the format expected by FluentCRM.
     */
    public function getUserRoles($keyed = false)
    {
        if (!function_exists('get_editable_roles')) {
            require_once ABSPATH . 'wp-admin/includes/user.php';
        }

        $roles          = get_editable_roles();
        $formattedRoles = [];

        foreach ($roles as $roleKey => $role) {
            if ($keyed) {
                $formattedRoles[$roleKey] = $role['name'];
            } else {
                $formattedRoles[] = [
                    'id'    => $roleKey,
                    'title' => $role['name'],
                ];
            }
        }

        return $formattedRoles;
    }

    /**
     * Main handler that runs when the trigger fires.
     *
     * @param \FluentCrm\App\Models\Funnel $funnel
     * @param array                        $originalArgs Event arguments passed when firing the trigger.
     */
    public function handle($funnel, $originalArgs)
    {
        // Replace this with your own logic.
        error_log(print_r([$funnel, $originalArgs], true));
    }
}
```

The `prepareEditorDetails()` method is responsible for returning an object that FluentCRM uses to render the **settings** and **conditions** panels for this trigger in the automation editor.

The trigger configuration panel will look similar to this:

![Custom automation trigger settings](/devloper/custom-automation-trigger/Screenshot-2022-09-07-at-9.31.23-AM-1024x740.png)

> The "Target Products" (or similar) area in your UI is generated from the `getSettingsFields()` definition. For more field types and structures, see the [form field code structure](/docs/form-field-code-structure) reference.

---

## Step 2 – Register the trigger class

Finally, you need to instantiate your trigger class when FluentCRM (FluentCampaign) is available. A common place to do this is on the `plugins_loaded` action:

```php
add_action('plugins_loaded', function () {
    if (defined('FLUENTCAMPAIGN_DIR_FILE')) {
        new \Custom\Triggers\CustomTrigger();
    }
});
```

Once this code is in place:

1. The **My-plugin** trigger will appear in the **Automation Trigger** list in FluentCRM.
2. You can configure its settings and conditions in the funnel editor.
3. When your custom event fires (and you call the appropriate FluentCRM APIs), FluentCRM will run the `fluentcrm_funnel_start_my_plugin_registration` action and execute your `handle()` method, allowing you to start and control the automation flow.