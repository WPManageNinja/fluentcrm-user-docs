---
title: "Custom Automation Benchmark/Goal"
slug: "custom-automation-benchmark-goal"
category: "devloper"
order: 0
---

# Custom Automation Benchmark/Goal

This guide shows you how to register a **custom automation benchmark/goal** in FluentCRM so you can track important events (like a specific product purchase or custom success criteria) and move contacts forward in a funnel when those goals are achieved.

---

## What is a benchmark/goal?

Benchmarks (goals) are special funnel steps that are **triggered when a condition becomes true**. Common examples include:

- New order completed.
- List applied.
- Tag applied.

When a benchmark is hit, FluentCRM can jump the contact forward to that step, skip intermediate actions, or continue according to your configuration. With a custom benchmark, you can plug in **your own event source** (for example, from a custom plugin).

---

## Hooks used for a custom benchmark/goal

To implement a custom benchmark you will use **two filters** and **one action hook**:

| Type   | Hook name                                         | Purpose |
| ------ | ------------------------------------------------- | ------- |
| Filter | `fluentcrm_funnel_blocks`                         | Register your custom benchmark block in the funnel builder. |
| Filter | `fluentcrm_funnel_block_fields`                   | Define the settings fields for configuring the benchmark. |
| Action | `fluentcrm_funnel_benchmark_start_{benchmark_name}` | Execute your benchmark logic when the goal is hit. Replace `{benchmark_name}` with your benchmark slug. |

In the example below, the **benchmark name** is:

```text
custom_benchmark
```

So the runtime hook will be:

- `fluentcrm_funnel_benchmark_start_custom_benchmark`

---

## Step 1 – Create the benchmark class

Create a PHP class, for example `Custom\Goals\CustomBenchmark`, that:

- Registers the benchmark block.
- Defines the configuration fields.
- Handles the event when the benchmark is triggered.

```php
<?php

namespace Custom\Goals;

use FluentCrm\App\Services\Funnel\BaseBenchMark;
use FluentCrm\App\Services\Funnel\FunnelHelper;
use FluentCrm\App\Services\Funnel\FunnelProcessor;
use FluentCrm\Framework\Support\Arr;

class CustomBenchmark
{
    protected $triggerName;
    protected $actionArgNum;
    protected $priority;

    public function __construct()
    {
        $this->triggerName  = 'custom_benchmark';
        $this->actionArgNum = 3;
        $this->priority     = 20;

        // 1) Add the benchmark block to the funnel builder
        add_filter(
            'fluentcrm_funnel_blocks',
            [$this, 'addBenchmark'],
            $this->priority,
            1
        );

        // 2) Register the settings fields for this benchmark
        add_filter(
            'fluentcrm_funnel_block_fields',
            [$this, 'pushBlockFields'],
            $this->priority,
            2
        );

        // 3) Handle the benchmark when it starts
        add_action(
            'fluentcrm_funnel_benchmark_start_' . $this->triggerName,
            [$this, 'handle'],
            $this->priority,
            2
        );
    }

    /**
     * Register the benchmark block in the funnel builder.
     */
    public function addBenchmark($benchmarks)
    {
        $benchmark = $this->getBlock();
        if ($benchmark) {
            $benchmark['type']                  = 'benchmark';
            $benchmarks[$this->triggerName]     = $benchmark;
        }

        return $benchmarks;
    }

    /**
     * Attach configuration fields to this benchmark.
     */
    public function pushBlockFields($fields, $funnel)
    {
        $fields[$this->triggerName] = $this->getBlockFields($funnel);

        return $fields;
    }

    /**
     * Example helper that could be used to define benchmark type options.
     */
    public function benchmarkTypeField()
    {
        return [
            'label'       => 'Benchmark type',
            'type'        => 'radio',
            'options'     => [
                [
                    'id'    => 'optional',
                    'title' => '[Optional Point] This is an optional trigger point',
                ],
                [
                    'id'    => 'required',
                    'title' => '[Essential Point] This step is required before processing further actions',
                ],
            ],
            'inline_help' => 'If you select [Optional Point] it will work as an optional trigger; otherwise it will wait until this action is fulfilled.',
        ];
    }

    /**
     * Basic block metadata and default settings.
     */
    public function getBlock()
    {
        return [
            'title'       => 'Custom Benchmark',
            'description' => 'Runs when a specific order is completed in your system',
            'icon'        => 'fc-icon-edd',
            'settings'    => $this->getDefaultSettings(),
        ];
    }

    /**
     * Default settings for the benchmark.
     */
    public function getDefaultSettings()
    {
        return [
            'product_ids'        => [],
            'product_categories' => [],
            'purchase_type'      => 'all',
            'type'               => 'required',
        ];
    }

    /**
     * Settings fields displayed in the benchmark configuration panel.
     */
    public function getBlockFields($funnel)
    {
        return [
            'title'      => 'New Order Success in EDD',
            'sub_title'  => 'This benchmark runs when a new order is completed in EDD',
            'fields'     => [
                'product_ids' => [
                    'type'        => 'multi-select',
                    'label'       => 'Target Products',
                    'help'        => 'Select which products will satisfy this goal.',
                    'options'     => [
                        ['id' => 123, 'title' => 'Demo product one'],
                        ['id' => 124, 'title' => 'Demo product two'],
                    ],
                    'inline_help' => 'Leave blank to match any product purchase.',
                ],
                // You can add more fields here (categories, purchase type, benchmark type, etc.)
            ],
        ];
    }

    /**
     * Main handler that runs when the benchmark is started.
     *
     * @param object $benchmark     Current benchmark step configuration.
     * @param array  $originalArgs  Event arguments passed when the goal is triggered.
     */
    public function handle($benchmark, $originalArgs)
    {
        // Replace this with your own logic for when the goal is reached.
        error_log(print_r([$benchmark, $originalArgs], true));
    }
}
```

The `pushBlockFields()` method returns the configuration schema used to render the benchmark’s settings panel in the funnel editor, and `handle()` is called when the benchmark is triggered so you can implement your own goal‑handling logic.

> The “Target Products” area is generated from the `getBlockFields()` configuration. For more field types and options, see the [form field code structure](/docs/form-field-code-structure) reference.

---

## Step 2 – Register the benchmark class

Finally, instantiate your benchmark class when FluentCRM (FluentCampaign) is available. A common place is the `plugins_loaded` hook:

```php
add_action('plugins_loaded', function () {
    if (defined('FLUENTCAMPAIGN_DIR_FILE')) {
        new \Custom\Goals\CustomBenchmark();
    }
});
```

After this:

1. Your **Custom Benchmark** block will appear in the benchmark/goal list in the automation builder.
2. You can configure target products and other options in the block settings.
3. When your custom event fires and the benchmark is hit, FluentCRM will call your `handle()` method via `fluentcrm_funnel_benchmark_start_custom_benchmark`, allowing you to move contacts through your funnel based on your own goal criteria.***