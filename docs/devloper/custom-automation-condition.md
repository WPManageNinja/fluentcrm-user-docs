---
title: "Custom Automation Condition"
slug: "custom-automation-condition"
category: "devloper"
order: 0
---

# Custom Automation Condition

This guide shows you how to register a **custom automation condition** in FluentCRM so you can segment contacts and control whether an automation step should run based on your own logic (for example, “purchased specific products” defined by your plugin).

---

## What is an automation condition?

Conditions are checked when an automation is running. They decide:

- **Which contacts will continue** through a funnel step.
- **Which contacts will be filtered out** based on your rules.

FluentCRM ships with many built‑in conditions, but you can also expose conditions from your own plugin and implement the matching logic yourself.

---

## Hooks used for a custom condition

To implement a custom condition group you will use **two filter hooks**:

| Type   | Hook name                                        | Purpose |
| ------ | ------------------------------------------------ | ------- |
| Filter | `fluentcrm_automation_condition_groups`          | Add your condition group and condition items to the condition builder UI. |
| Filter | `fluentcrm_automation_conditions_assess_custom`  | Evaluate your custom conditions for a given subscriber and return the result. |

In the example below we will expose a **“Purchased Products”** condition under a **Custom** group.

---

## Step 1 – Create the condition class

Create a PHP class, for example `Custom\Conditions\CustomCondition`, that registers the conditions and assesses them.

```php
<?php

namespace Custom\Conditions;

class CustomCondition
{
    public function __construct()
    {
        // 1) Register condition group/items in the UI
        add_filter(
            'fluentcrm_automation_condition_groups',
            [$this, 'addAutomationConditions'],
            10,
            2
        );

        // 2) Provide the assessment logic for custom conditions
        add_filter(
            'fluentcrm_automation_conditions_assess_custom',
            [$this, 'assessAutomationConditions'],
            10,
            3
        );
    }

    /**
     * Add a "Custom" group with a "Purchased Products" condition.
     */
    public function addAutomationConditions($groups, $funnel)
    {
        $customerItems = [
            [
                'value'             => 'purchased_items',
                'label'             => 'Purchased Products',
                'type'              => 'selections',
                'component'         => 'product_selector',
                'is_singular_value' => true,
                'is_multiple'       => true,
                'disabled'          => false,
            ],
        ];

        $groups['custom'] = [
            'label'    => 'Custom',
            'value'    => 'custom',
            'children' => $customerItems,
        ];

        return $groups;
    }

    /**
     * Assess your custom conditions for the given subscriber.
     *
     * @param bool                                      $result     Existing result (from other conditions).
     * @param \FluentCrm\Framework\Support\Arryable[]   $conditions Array of condition definitions.
     * @param \FluentCrm\App\Models\Subscriber          $subscriber Current subscriber.
     *
     * @return bool
     */
    public function assessAutomationConditions($result, $conditions, $subscriber)
    {
        // Example skeleton: loop conditions and apply your own logic.
        foreach ($conditions as $condition) {
            if ($condition['value'] === 'purchased_items') {
                // TODO: Replace with your own purchase-check logic.
                // If subscriber matches the rule, keep $result = true,
                // otherwise you may set $result = false and break.
            }
        }

        return $result;
    }
}
```

When this class is loaded, FluentCRM will:

- Show a **Custom → Purchased Products** condition in the automation condition builder.
- Call `assessAutomationConditions()` whenever that condition is used, passing the condition data and the current subscriber so you can decide whether it matches.

The condition UI will look similar to this:

![Custom automation condition settings](/devloper/custom-automation-condition/Screenshot-2022-09-07-at-12.02.07-PM-1024x467.png)

---

## Step 2 – Register the condition class

Finally, instantiate your condition class once FluentCRM (FluentCampaign) is available. A common place is the `plugins_loaded` hook:

```php
add_action('plugins_loaded', function () {
    if (defined('FLUENTCAMPAIGN_DIR_FILE')) {
        new \Custom\Conditions\CustomCondition();
    }
});
```

After this:

1. Your **Custom → Purchased Products** condition will be available in the automation condition builder.
2. FluentCRM will call your `assessAutomationConditions()` method whenever that condition is evaluated.
3. You can extend the same pattern to add more custom conditions and implement more complex segmentation logic.***