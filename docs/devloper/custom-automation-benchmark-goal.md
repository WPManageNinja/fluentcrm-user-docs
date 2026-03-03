---
title: "Custom Automation Benchmark/Goal"
slug: "custom-automation-benchmark-goal"
category: "devloper"
order: 0
---

# Custom Automation Benchmark/Goal
Automation is magic and FluentCRM is the magician. But anyone can be part of this. Following some steps, anyone can be part of this magic. In this article, we will show you, how you are able to add a custom benchmark/goal in automation.

**Benchmark/Goal**

Benchmarks are essential for initiating email marketing automation. There are a lot of benchmarks that can start or initiate automation in FluentCRM such as New Order Success, List Applied, Tag Applied, and many more. Using benchmark/goal you can track various activities in your WordPress ecosystem. Isn't cool. Let's dive into deep to learn, how to create a custom benchmark/goal in FluentCRM.

To make an automation benchmark/goal, we need to use two filters and one action hook.

Type

Hook

Description

Filter

fluentcrm\_funnel\_blocks

This is a filter hook and this hook will add your custom benchmark/goal to the automation benchmark/goal list.

Filter

fluentcrm\_funnel\_block\_fields

This is a filter hook and this hook will generate your custom benchmark/goal setting block.

Action

fluentcrm\_funnel\_benchmark\_start\_{benchmark\_name}

This is an action hook and this benchmark/goal will be called automatically depending on the automation benchmark/goal setting. You can do further using this action hook. For the following trigger source code, the **{benchmark\_name}** is custom\_benchmark.

To add a custom benchmark/goal in automation, I am going to tell you to step by step. This example will be using composer, you can do without composer too.

**Step 1**

First of all, I created a class named CustomBenchmark which will contain the full source code of this automation benchmark/goal.

&lt;?php

namespace Custom\\Goals;

use FluentCrm\\App\\Services\\Funnel\\BaseBenchMark;
use FluentCrm\\App\\Services\\Funnel\\FunnelHelper;
use FluentCrm\\App\\Services\\Funnel\\FunnelProcessor;
use FluentCrm\\Framework\\Support\\Arr;

class CustomBenchmark
{
    public function \_\_construct()
    {
        $this->triggerName = 'custom\_benchmark';
        $this->actionArgNum = 3;
        $this->priority = 20;

        add\_filter('fluentcrm\_funnel\_blocks', array($this, 'addBenchmark'), $this->priority, 1);
        add\_filter('fluentcrm\_funnel\_block\_fields', array($this, 'pushBlockFields'), $this->priority, 2);
        add\_action('fluentcrm\_funnel\_benchmark\_start\_' . $this->triggerName, array($this, 'handle'), $this->priority, 2);
    }

    public function addBenchmark($benchMarks)
    {
        $benchMark = $this->getBlock();
        if($benchMark) {
            $benchMark\['type'\] = 'benchmark';
            $benchMarks\[$this->triggerName\] = $benchMark;
        }

        return $benchMarks;
    }

    public function pushBlockFields($fields, $funnel)
    {
        $fields\[$this->triggerName\] = $this->getBlockFields($funnel);
        return $fields;
    }

    public function getConditionFields($benchMark)
    {
        return \[\];
    }

    public function benchmarkTypeField()
    {
        return \[
            'label'       => 'Benchmark type',
            'type'        => 'radio',
            'options'     => \[
                \[
                    'id'    => 'optional',
                    'title' => '\[Optional Point\] This is an optional trigger point',
                \],
                \[
                    'id'    => 'required',
                    'title' => '\[Essential Point\] Select IF this step is required for processing further actions',
                \]
            \],
            'inline\_help' => 'If you select \[Optional Point\] it will work as an Optional Trigger otherwise, it will wait for full-fill this action',
        \];
    }

    public function getBlock()
    {
        return \[
            'title'       => 'Custom benchmark',
            'description' => 'This will run once new order will be placed as completed in CB',
            'icon' => 'fc-icon-edd',
            'settings'    => \[
                'product\_ids'        => \[\],
                'product\_categories' => \[\],
                'purchase\_type'      => 'all',
                'type'               => 'required'
            \]
        \];
    }

    public function getDefaultSettings()
    {
        return \[
            'product\_ids'        => \[\],
            'product\_categories' => \[\],
            'purchase\_type'      => 'all',
            'type'               => 'required'
        \];
    }

    public function getBlockFields($funnel)
    {
        return \[
            'title'     => 'New Order Success in EDD',
            'sub\_title' => 'This will run once new order will be placed as completed in EDD',
            'fields'    => \[
                'product\_ids'        => \[
                    'type'        => 'multi-select',
                    'label'       => 'Target Products',
                    'help'        => 'Select for which products this goal will run',
                    'options'     => \[
                        \['id' => 123, 'title' => 'Demo product one'\],
                        \['id' => 124, 'title' => 'Demo product two'\],
                    \],
                    'inline\_help' => 'Keep it blank to run to any product purchase',
                \]
            \]
        \];
    }

    public function handle($benchMark, $originalArgs)
    {
        error\_log(print\_r(\[$benchMark, $originalArgs\], 1));
    }
}

In the above example, you see, there is a method called **pushBlockFields**. This method returns an object and the object contains several fields. This object is the structure of this benchmark's setting page design. Let’s see the preview of this benchmark's setting block and discuss it.

![screenshot 2022 09 07 at 10.56.15 am](/devloper/custom-automation-benchmark-goal/Screenshot-2022-09-07-at-10.56.15-AM-1024x380.png)

In the above sourcecode, Target Products block is generated by **getBlockFields**. You see there is **fields** property in this method return array. There are so many field type in FluentCRM, you can find those [here](/docs/form-field-code-structure).

In the above example, you see, there is a method called **handle**. This method is called when this benchmark is start. By this method you can do, what you want.

**Step 2**

Using the following code, You can able to add this custom benchmark/goal code in FluentCRM.

add\_action('plugins\_loaded', function () {
   if (defined('FLUENTCAMPAIGN\_DIR\_FILE')) {
      new \\Custom\\Goal\\CustomBenchmark();
   }
});