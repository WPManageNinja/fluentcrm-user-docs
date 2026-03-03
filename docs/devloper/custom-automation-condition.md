---
title: "Custom Automation Condition"
slug: "custom-automation-condition"
category: "devloper"
order: 0
---

# Custom Automation Condition
Automation is magic and FluentCRM is the magician. But anyone can be part of this. Following some steps, anyone can be part of this magic. In this article, we will show you, how you are able to add a custom condition in automation.

**Condition**

Conditions are essential for initiating email marketing automation. There are a lot of conditions that can start or initiate automation in FluentCRM. Using conditions you can track various activities in your WordPress ecosystem. Isn't cool. Let's dive deep to learn, how to create a custom condition in FluentCRM.

To make an automation condition, we need to use two filter hooks.

Type

Hook

Description

Filter

fluentcrm\_automation\_condition\_groups

This is a filter hook and this hook will add your custom condition to the automation condition list.

Filter

fluentcrm\_automation\_conditions\_assess\_custom

This is a filter hook and this hook will filter records according to your custom condition logic.

To add a custom condition in automation, I am going to tell you step by step. This example will be using composer, you can do without composer too.

**Step 1**

First of all, I created a class named CustomCondition which will contain the full source code of this automation condition.

&lt;?php
namespace Custom\\Conditions;

class CustomCondition
{
    public function \_\_construct()
    {
        add\_filter('fluentcrm\_automation\_condition\_groups', array($this, 'addAutomationConditions'), 10, 2);
        add\_filter('fluentcrm\_automation\_conditions\_assess\_custom', array($this, 'assessAutomationConditions'), 10, 3);
    }

    public function addAutomationConditions($groups, $funnel)
    {
        $customerItems = \[
            \[
                'value'             => 'purchased\_items',
                'label'             => 'Purchased Products',
                'type'              => 'selections',
                'component'         => 'product\_selector',
                'is\_singular\_value' => true,
                'is\_multiple'       => true,
                'disabled'          => false
            \]
        \];

        $groups\['custom'\] = \[
            'label'    => 'Custom',
            'value'    => 'custom',
            'children' => $customerItems,
        \];

        return $groups;
    }

    public function assessAutomationConditions($result, $conditions, $subscriber)
    {

        // do something here

        return $result;
    }
}

In the above example, you see, there is a method called **addAutomationConditions**. This method will filter records according to this condition logic. Let’s see the preview of this condition's block and discuss it.

![screenshot 2022 09 07 at 12.02.07 pm](/devloper/custom-automation-condition/Screenshot-2022-09-07-at-12.02.07-PM-1024x467.png)

**Step 2**

Using the following code, You can able to add this custom action code in FluentCRM.

add\_action('plugins\_loaded', function () {
   if (defined('FLUENTCAMPAIGN\_DIR\_FILE')) {
      new \\Custom\\Conditions\\CustomCondition();
   }
});