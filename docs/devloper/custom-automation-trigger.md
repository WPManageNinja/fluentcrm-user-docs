---
title: "Custom Automation Trigger"
slug: "custom-automation-trigger"
category: "devloper"
order: 0
---

# Custom Automation Trigger
Automation is magic and FluentCRM is the magician. But anyone can be part of this. Following some steps, anyone can be part of this magic. In this article, we will show you, how you are able to add a custom trigger in automation.

**Trigger**

 A funnel trigger or automation trigger will let you start an automation funnel based on your user's behavior. Triggers are essential for initiating email marketing automation. There are a lot of triggers that can start or initiate automation in FluentCRM such as [Primary Automation Triggers](/docs/fluentcrm-automation-triggers), [Ecommerce Triggers](/docs/fluentcrm-ecommerce-triggers), [Membership Triggers](/docs/fluentcrm-membership-triggers), [LMS Triggers](/docs/fluentcrm-lms-triggers), and many more. Using trigger you can track various activities in your WordPress ecosystem. Isn't cool. Let's dive into deep to learn, how to create a custom trigger in FluentCRM.

To make an automation trigger, we need to use two filters and one action hook.

Type

Hook

Description

Filter

fluentcrm\_funnel\_triggers

This is a filter hook and this hook will add your custom trigger to the automation trigger list.

Filter

fluentcrm\_funnel\_editor\_details\_{trigger\_name}

This is a filter hook and this hook will generate your custom trigger setting block. For the following trigger source code, the **{trigger\_name}** is my\_plugin\_registration.

Action

fluentcrm\_funnel\_start\_{trigger\_name}

This is an action hook and this action will be called automatically depending on the trigger setting. You can do further using this action hook.

To add a custom trigger in automation, I am going to tell you to step by step. This example will be using composer, you can do without composer too.

**Step 1**

First of all, I created a class named CustomTrigger which will contain the full source code of this automation trigger.

&lt;?php

namespace Custom\\Triggers;

class CustomTrigger
{
    public function \_\_construct()
    {
        $this->triggerName = 'my\_plugin\_registration';
        $this->priority = 20;
        $this->actionArgNum = 2;
        add\_filter('fluentcrm\_funnel\_triggers', array($this, 'addTrigger'), $this->priority, 1);
        add\_filter('fluentcrm\_funnel\_editor\_details\_'.$this->triggerName, array($this, 'prepareEditorDetails'), 10, 1);
        add\_action('fluentcrm\_funnel\_start\_' . $this->triggerName, array($this, 'handle'), 10, 2);
    }

    public function getTrigger()
    {
        return \[
            'category'    => \_\_('My-plugin'),
            'label'       => \_\_('My-plugin'),
            'description' => \_\_('This Funnel will be initiated when a My-plugin registration completed'),
            'icon'        => 'fc-icon-wp\_new\_user\_signup',
        \];
    }

    public function addTrigger($triggers)
    {
        $triggers\[$this->triggerName\] = $this->getTrigger();
        return $triggers;
    }

    public function getSettingsFields($funnel)
    {
        return \[
            'title'     => \_\_('My-plugin Registration'),
            'sub\_title' => \_\_('This Funnel will be initiated when a My-plugin registration completed'),
            'fields'    => \[
                'message' => \[
                    'type'        => 'input-text',
                    'label'       => \_\_('Message Title'),
                    'placeholder' => \_\_('Type Message Title')
                \],
                'description' => \[
                    'type' => 'html',
                    'label' => 'Description',
                    'info' => '<b>'.\_\_('This message will add to user but need to set title').'</b>'
                \]
            \]
        \];
    }

    public function prepareEditorDetails($funnel)
    {
        $funnel->settings = wp\_parse\_args($funnel->settings, $this->getFunnelSettingsDefaults());
        $funnel->settingsFields = $this->getSettingsFields($funnel);
        $funnel->conditions = wp\_parse\_args($funnel->conditions, $this->getFunnelConditionDefaults($funnel));
        $funnel->conditionFields = $this->getConditionFields($funnel);
        return $funnel;
    }

    public function getFunnelSettingsDefaults()
    {
        return \[
            'subscription\_status' => 'subscribed'
        \];
    }

    public function getConditionFields($funnel)
    {
        return \[
            'update\_type'  => \[
                'type'    => 'radio',
                'label'   => \_\_('If Contact Already Exist?', 'fluent-crm'),
                'help'    => \_\_('Please specify what will happen if the subscriber already exist in the database', 'fluent-crm'),
                'options' => $this->getUpdateOptions()
            \],
            'user\_roles'   => \[
                'type'        => 'multi-select',
                'is\_multiple' => true,
                'label'       => \_\_('Targeted User Roles', 'fluent-crm'),
                'help'        => \_\_('Select which roles registration will run this automation Funnel', 'fluent-crm'),
                'placeholder' => \_\_('Select Roles', 'fluent-crm'),
                'options'     => $this->getUserRoles(),
                'inline\_help' => \_\_('Leave blank to run for all user roles', 'fluent-crm')
            \],
            'run\_multiple'       => \[
                'type'        => 'yes\_no\_check',
                'label'       => '',
                'check\_label' => \_\_('Restart the Automation Multiple times for a contact for this event. (Only enable if you want to restart automation for the same contact)'),
                'inline\_help' => \_\_('If you enable, then it will restart the automation for a contact if the contact already in the automation. Otherwise, It will just skip if already exist')
            \]
        \];
    }

    public function getFunnelConditionDefaults($funnel)
    {
        return \[
            'update\_type'  => 'update', // skip\_all\_actions, skip\_update\_if\_exist
            'user\_roles'   => $this->getUserRoles(),
            'run\_multiple'       => 'yes'
        \];
    }

    public function getUpdateOptions()
    {
        return \[
            \[
                'id'    => 'update',
                'title' => \_\_('Update if Exist', 'fluent-crm')
            \],
            \[
                'id'    => 'skip\_all\_if\_exist',
                'title' => \_\_('Skip this automation if contact already exist', 'fluent-crm')
            \]
        \];
    }

    public function getUserRoles($keyed = false)
    {
        if (!function\_exists('get\_editable\_roles')) {
            require\_once(_ABSPATH_ . '/wp-admin/includes/user.php');
        }

        $roles = \\get\_editable\_roles();
        $formattedRoles = \[\];
        foreach ($roles as $roleKey => $role) {

            if ($keyed) {
                $formattedRoles\[$roleKey\] = $role\['name'\];
            } else {
                $formattedRoles\[\] = \[
                    'id'    => $roleKey,
                    'title' => $role\['name'\]
                \];
            }

        }
        return $formattedRoles;
    }

    public function handle($funnel, $originalArgs)
    {
        error\_log(print\_r(\[$funnel, $originalArgs\], 1));
    }
}

In the above example, you see, there is a method called **prepareEditorDetails**. This method returns an object and the object contains several fields. This object is the structure of this trigger's setting page design. Let's see the preview of this trigger's setting block and discuss it.

![screenshot 2022 09 07 at 9.31.23 am](/devloper/custom-automation-trigger/Screenshot-2022-09-07-at-9.31.23-AM-1024x740.png)

In the above source code, the Target Products block is generated by **getSettingsFields**. You see there is a fields property in this method return array. There is so many field type in FluentCRM, you can find those [here](/docs/form-field-code-structure).

In the above example, you see, there is a method called **handle**. This method is called when this trigger is triggered. With this method you can do, what you want.

**Step 2**

Using the following code, You can able to add this custom trigger code in FluentCRM.

add\_action('plugins\_loaded', function () {
   if (defined('FLUENTCAMPAIGN\_DIR\_FILE')) {
      new \\Custom\\Triggers\\CustomTrigger();
   }
});