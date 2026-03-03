---
title: "Zapier Integration with FluentCRM"
slug: "zapier-integration-with-fluentcrm"
category: "integrations"
order: 0
---

# Zapier Integration with FluentCRM
Zapier is one of the best automation tools for automating tasks across platforms. FluentCRM’s webhook connectivity means you can achieve the following if you also have Zapier:

-   Bring contacts and data to FluentCRM from other tools and platforms
-   Send FluentCRM contacts and data to other tools and platforms

This integration will help you connect FluentCRM with thousands of other tools and platforms that integrate with Zapier and automate repetitive tasks like data import/export. Since this is a webhook integration, you can also connect multiple data sources(e.,g, tools you use on other websites) to FluentCRM. 

Follow our simple guide to connect thousands of other tools to FluentCRM using Zapier.

https://youtu.be/M2ONYRv3bWA

## Bringing Contacts and Data to FluentCRM(Incoming Webhook)

The incoming webhook will help you bring contacts and data from other platforms to FluentCRM using Zapier. For demonstration, we’ll show you how to connect Google Sheets with FluentCRM using Zapier.

### Get your Webhook URL from FluentCRM

In order to connect FluentCRM to Zapier, you need to create a webhook URL on FluentCRM at first. To do so:

1.  Go to FluentCRM dashboard. From **Settings,** select **Incoming Webhooks.**

![fluentcrm incoming webhooks](/integrations/zapier-integration-with-fluentcrm/zIcV7LTXoh8yHRwAosDtdkyInEdHp34UsSX8COvmOsLpRJcbV2wulpYqCFcNYMJtdvjDj8WdWt6ryG6zwivZ2eTUJVR6Q7NQc1DgDLcAVUe6kHwlOuVwyz32p7gEvzlJZl24EPb0C6RIOl6yIQ.png)

2.  Here you’ll get the option to **Create Webhook**.

![creating an incoming webhook in fluentcrm](/integrations/zapier-integration-with-fluentcrm/OAHglofl-u4h5zbvZc-7JLzc0PkNjdjIt53CclA-XW9iuqK9pcPpG2xVCAGtGFN_eSQiFjCPuy-UfQTM23CVQLTGnbJ9c4q4VbnuD6r9YMnY4twyx4FkGkWrZ8Mpflh9YKjwKy-dCXco_vN3NQ.png)

3.  Add a **Name** and **Status** to your webhook. You can also add a **List** and **Tag**. Set those and hit the **Create** button

![creating an incoming webhook in fluentcrm](/integrations/zapier-integration-with-fluentcrm/fMAKLDZ3dnXNGf6p6Gson9nEfGQ9Ig0U50Ld9sS1r8zs_gwiaM4o-PADkZPzJ4ZimkQTC1MIh4zZKKZKqOQDZ_QeB_vJO17V0AZ8ufGTv8D4n4LcMg-jLimCfy2MMqbfhLEK7TFZZ-XdVu_RNQ.png)

A **URL** will be generated. We are going to use this URL to connect Zapier.

![incoming webhook in fluentcrm](/integrations/zapier-integration-with-fluentcrm/ftJnNDF57c-M9gtq9PQ_Nt4yvuUP97o8EajRJ5CawuxRSQaITkwoSu0b7ft635YyhdZgmXUc8L8-VFjQxXWFS_99dJYtIYfOagZ3dIEH17_4S_F6CB0LWApzQ0u6jLwUE-GDK4RGAt_RjEtW8w.png)

### Configure Trigger in Zapier

After creating the webhook URL, you need to configure a trigger. A trigger means the automation will happen when the event happens on the other platform(in this case, Google Sheets).

To do this, you’ll need to start by creating a Zap. Go to the [Zapier Dashboard](https://zapier.com/app/dashboard) and follow the instructions. If you don’t have a Zapier account, you can create one in minutes.

1.  Click **Create Zap** from the Zapier account dashboard. 

![zapier dashboard](/integrations/zapier-integration-with-fluentcrm/Wu_D6ng77gq7O6_ZiSL2qUlaG1Le1gWXyK2LKVOzSIcuqzwcmTXGRTsoyRxHokA-s3XPDM1dnxN7-FqtSk1FNG0iFxEqIZjWDGLCm-KbnK2DUYQTwO5cjqAo6IZ8zpdUsJkO8afdRdPM0yqlUw.png)

2.  You will be redirected to the Trigger page. To set the trigger, choose your data source. In our case, we’re choosing **Google Sheets**.

![google sheets trigger in zapier](/integrations/zapier-integration-with-fluentcrm/fGf2ix-PQ48-xSTMelmdeKYnPlSvmHHDdqydokKTM4gq_3s3ZQXZ3J6l34rwLLLlIvtpLoCoNltTTehQvGxIpjAUpHg2SJTe-BftDz7yGIErUQxWrZOYp51I1rBEuNNoUXzb4cAY-QA1sBYmeQ.png)

3.  After selecting this trigger, you have to define the **Event**. As the trigger, we will set **New Spreadsheet Row**. Click **continue**.

![configuring google sheets trigger in zapier](/integrations/zapier-integration-with-fluentcrm/dO97AsTno8ZXi3Wafnu-YKoWwLtcnp08nghXYcRFcOvA-lK_AfjkfreYIqX6lKoAQMcHFZMArRnTamo04RvW9zX6-DIT-ERQiezP987MQqit8Gmc7ulRuiHzKSLEuqeCOOzwS4Chi6DSSxEPuw.png)

4.  At this point, You have to choose an **account** and click **continue**.  
      
    **Note**: You may need to allow permission to view and edit Google Sheets if you haven’t done it already.

![configuring google sheets account in zapier](/integrations/zapier-integration-with-fluentcrm/dlsQZ4VQ0iONM5yYMlQ3R1xTA4DgDb23w-7WMtrVGHe2Ll1J3045HBLrY9ca-KIorkJfN80x5dwNuVhd13W4cD9MzQXu1JlWM_0p1yPtAqJuxra0qvbCk8GfYfFT-KPg3q-M4nC6LCskxZBKIw.png)

5.  After selecting the account, you have to select the spreadsheet you want to import to FluentCRM. Select the field, choose a worksheet you’ve already created and click **continue.**

![configuring google sheets trigger in zapier](/integrations/zapier-integration-with-fluentcrm/j073IObEYR2EjquNnOlbx0zYxib0kYgaq2XU3k3K7gYNbUm8pcbylb6hn0iWAbDWO1FSEJpV7upbCyhsloYhtYiNKF0n5etnWi32w_Vlcg-ixPGp5T8SNNdABAqMQ-JJndp2qfswG7H-aPk7Uw.png)

6.  **Test Trigger** before moving on to the next step. If you created any rows, the data should show up here.

![](/integrations/zapier-integration-with-fluentcrm/5ORhEHA96ZrnK6LUUQztLbIJgKQYARUBwxfI6BzvLLzUjGo8YbYx7evlJcQYKXQEMd9eaEcyEcf4kyIulwbkxsvIMhfNRhaKQGaZtn-otQ8vj-M6Vc3lm4LGJC_sPtUXyM_baSN0fjfJBaF1ZQ.png)  
A success message means that you’ve successfully configured the trigger.

![zapier trigger success message](/integrations/zapier-integration-with-fluentcrm/TPX9tWHq8-qpt8xei_SXZ4L4xC3uWm4Dr8oZjUnEvokSLM1TvzQvg_tVcIJS24dqsIFc3qlgwREgi17FRQOlaHh4j0O13ERZUPUysMAy-tfZOEdI0znLlO9VhuLL78UcD1ZdefAPIMYn5YPF8Q.png)

### Configure Action in Zapier

After successfully configuring the trigger, you need to configure the action so that FluentCRM can receive the data via the incoming webhook we’ve created in step 1. To do so:

1.  Click action and choose **Webhook by Zapier**.

![webhook action in zapier](/integrations/zapier-integration-with-fluentcrm/SLfAVemAZXzxREZJh1CZShmn1NaBOG5NK-VMdcbv7f_j5lpsgXECcg9lNe8FkMI5n-o3DJkesc9yWF9dQNQccFcTHodXVunVMEgiCPZsipEB7xA-IdDQKmJTfwZUKABRpHrDn8hCkuyTU3g_uA.png)

2.  Set the action event to **Post** and click continue.

![configuring action webhook in zapier](/integrations/zapier-integration-with-fluentcrm/qQO2xrGovcT8Gp5ekcYt4OMlnRXLiqCfXNCczFZlAqwaypYgrbG-i5rTewSYJJKV6xkjBK_lGYYoeLcpCHns0R-gi_t91JOXy4-jDcKIR9TMPVbBpK8oyIottInZ-rH8xkvxNBZ5YHAC5_4v9Q.png)

3.  Now you’ll be asked to enter the necessary details such as URL and Payload type. You’ll also need to map the data.

**URL**: Copy the URL generated by FluentCRM as we showed in step 1.

**Payload Type**: json

**Data**: Map the prefix keys and use **Email** for the contact’s email address

You can keep the rest of the fields as they are and click continue.

![configuring action webhook in zapier](/integrations/zapier-integration-with-fluentcrm/NW8B0QuxYvxxivBpNN5SLlNX5jnAv1di5rWgqz5FkcFLR8jqa7rK_2xs4WJgDguUfoLcKs4ABXUX_oDndEk93Cgeax8X3h6ppP1rgumqNtf5tWtwfIRypd-fWNQk5XYxUh-cOfF50UaLcoGVgg.png)

4.  Finally, click **Test and continue** to proceed. If it shows a success message, the data will be sent to FluentCRM

![test action webhook in zapier](/integrations/zapier-integration-with-fluentcrm/6SV_hy0BHI-8SLtvsKzEePtVNfra9YXDFdAppMTT2hGEw7HRjwB7VemF6YJw3Hhcypj58RVHa3v4WLQUeZcKrs0eIRlSHMzTbVhSUl8ectj1qkuGe7F9SLTH4xBM71t7kblwTEosn9FEgVg1Dw.png)

5.  If everything is working fine, it means that the data will be automatically added to FluentCRM whenever a Google Sheet row is added. Click **Publish Zap** to start automating contact importing!

![publishing a zap in zapier](/integrations/zapier-integration-with-fluentcrm/gZWgEuBrZ4h9l5L29kaf1F80ROK1m1Xfrffp5HAu8KqsukM1qy3frPGJIioxx_sPbSurb9FvqlyNcBHr5Dcdmeh_8UBuPfHRYhnk1gGY6CXaoGlfeWLZfnwiUQ1XPQPHUD1WdcyR8PKH-6jyZQ.png)

## Sending FluentCRM Data to Other Platforms(Outgoing Webhook)

The contact and data you’ve gathered inside FluentCRM are valuable assets you have to keep safe and use for other purposes As a result, you might want to export it to 3rd party platforms. Connecting FluentCRM to Zapier using outgoing webhooks is undoubtedly a reliable way to do so!

To send FluentCRM data to other platforms, you’ll need to use an automation you’ve already created. Or you can create one from scratch. For demonstration, we’ll create one and show you how to send data to Google Sheets.

### Set Up Incoming Webhook in Zapier

At first, you need to set up an incoming webhook in Zapier. To get the incoming webhook URL:

1.  Go to Zapier and click **Create Zap.** Then select **Webhook** as the trigger. 

![creating a webhook trigger in zapier](/integrations/zapier-integration-with-fluentcrm/05lj_0J0ZpOjCDeDs_8IZihvwXQsLP1ni8qIYOvUlQ4qfb-cEnFRPdxLtM4fA5YkODQSzQVmZHu-oTqWVEIcI7CGPj8ZO9i4mWWzf6BNRKqhzBeZ7mf87NvA5uTvE8F-a4blDplitaHrsRd49A.png)

2.  For **Action Event,** choose **Catch Hook.**

![configuring a webhook trigger in zapier](/integrations/zapier-integration-with-fluentcrm/NSPp6bGa73eTtJD3ZebEnAMestBJaDtx-KyoPxB-UFP0q0S3KdzYFjd3kNILwOo2GALh7pGyEl7aBPAAuDyjzIEq3CWrg8b238-aiAsM6z7hURnzJqlmae-kFsNgxDw-BMH-ETrnITMRHASQw.png)

3.  In the next step, you’ll be asked to pick off a **Child Key**. Since this is optional, you can keep it blank and click **Continue**, you’ll be presented with a webhook URL. ![](/integrations/zapier-integration-with-fluentcrm/woAICUg5_w-JKdxrvGHpgtrHjyWTCaNzf7lKhMxgTdhnBIXdNdzQumiwZzuIurIF3c91mNLFbESbpgRJRSnW9LapGgL-qRl1hMQwzns2GAxFP8LeIiFkLsIRPPRfgEHhsdq5n6pAD2x9b7QfCA.png)

### Create Automation and Outgoing Webhook

As we mentioned, you can only send contacts and data if you have an existing automation. We’ll start by creating one.

1.  Go to FluentCRM>**Automations** and click **Create a New Automation.**

![creating an automation in fluentcrm](/integrations/zapier-integration-with-fluentcrm/gQerR4RLbNamDh1Fgczg-IszR7TnDvg6TlOVAyumFPWESDCku5GMyjpdtjYgluErxVvCVG1DoiHpsmTdTIvOrXdZXOxBuQ3YI0QsXIZX6zFaz9bhvpZj8q0UpbFL8b607p4utFaB0JabRHRH0Q.png)

2.  Let’s set a trigger. We selected the list applied for this tutorial, named it, and selected the list. Click **Save setting**.

![creating an automation in fluentcrm](/integrations/zapier-integration-with-fluentcrm/W903SX_hVd5aUt6_XQSCxdadNVDsp4ZT7vtuaFCb7fppG4v5-go8zOnQvQprHxQyzSZpfYJepxQP18UDw1I2qAl1oO60d5IUivxt2n0f_VVeW9DU2B-jJd6i3X-G7xqOAJ51lUSZEN-n_mgNQA.png)

3.  Now, when the automation window is open, click (**+**) and choose **Outgoing Webhook** from the **Action Blocks**.

![fluentcrm actions](/integrations/zapier-integration-with-fluentcrm/s4nco8XhVrAJFejnDWunH2cOymx_Il0Fwwk-G7TcQSIGVDNnM5C66oodDaRZQ9DJONOkN_Wehdp1_8cVmnINELuPJtR7TtpO3Q3VI3Y6-SNPB4klN0jVpKPVuSaSaSjLzBlqY54_YjqBm0hx7Q.png)

4.  The outgoing webhooks action needs to be configured properly before it can send your data to other platforms. You should configure it like the following:

**Data Send Method**: Post Method  
**Remote URL**: The URL you’ve generated in Step 1.  
**Request Format**: Send as JSON Format

**Request Body:** you can choose to load the **Full subscriber's data.** If you don’t want all your data transferred, select **Custom data**.  
**Request Header**: No Header

You can send additional data with the Request Header since it’s an optional field; we will skip this for now. To finish off, **Save your settings**.

![configuring outgoing webhook in. fluentcrm](/integrations/zapier-integration-with-fluentcrm/0QYe6ldTY4ysoEE6CPjaly9BIfru9TTkrNj3u6aArcwLd4G9RhEZN8rQwF0y31Xfvj9VH-o9akDs2N7XhATsoAeBY2JcFGZnZBBrd41YjH96Dc0E_5FtaoiUcG7t7W29vfMZYnK915oVJhQhPA.png)

5.  Publish the automation to put it into effect.

![publish automation in fluentcrm](/integrations/zapier-integration-with-fluentcrm/3OqkTd2nWEElfG-aThfg31fMQTVxeF43tIki0X9dL3QSt0o7KS2EVRkCaTPsRbq5WwJLW3dFROvPhlHmmJ8NjaCi3tEWfY6m-DKLUGYzicOgb2wIlHnNNI-5jpBo2tLloLXQC0JXnNWgYmiH9w.png)

**Note(Skip if you’re testing with existing automation)**: The automation is live. However, it doesn’t have any data to test our Zapier integration. So we’ll have to manually add a contact to the automation. To do so, go to **FluentCRM**\>**Contacts** and select a contact. On the top of the screen, choose **Add to Automation** and choose the automation funnel you’ve created earlier. Finally, click **Add to Automation** to proceed to the next step.

![manually add contacts to fluentcrm automation](/integrations/zapier-integration-with-fluentcrm/mdZEs26O4jGNiIgjtXJSwStfuQj6eKe5x7mvDOCht5BYMIjurEFCnsQlbC1B9Kfb-A26cgb-Me2Z8Y2J5yDo31strG6JXo9CBX5wMzaUqEPGzgdSNhL-IsQg4Opo5H5W8F2cBpBCq0QxKzUQDg.png)

6.  Go back to Zapier and click **Test Trigger** now. If it returns with information, the trigger is configured successfully. Click **Continue** to save the automation.

![webhook test in zapier](/integrations/zapier-integration-with-fluentcrm/CvY4gWKni9q0eD5ebx966MV6mHmfevFhRWwAbGkpEI8-P4QA3HsAIinpMzBlmjq1ngEUxxBj2feYPyDy8dwE1knDojuqbLWBHvH2wJuHqgcHqvLa_FuNJydSzgEOU6Mk8AQVrPxKFgL3Uv_qEQ.png)

### Configure Zapier Action

We can now move on to Action.

1.  From the **Action** menu, select whatever works for you. We want to export our FluentCRM data to Google Sheets, so we’ll select that.

![select google sheets action in zapier](/integrations/zapier-integration-with-fluentcrm/TNMngmVr16jJQoNVhz1lySmdr0H4AnNeJYMMakF1VtaA6ExBAxBizCPY23LvD5FLWHkZXxD1n2zzx4UoTS1vV4R_mIuvqTHtQH7u3c28Lmr06N5duhz_1yoBw-Xldsa2rGsneaknrgfAc0Acuw.png)

2.  Now select an Action that meets your need. We want to export our FluentCRM data in a demo sheet.  So we’ll select **Create Spreadsheet Column** and click **Continue**.

![configuring google sheets action in zapier](/integrations/zapier-integration-with-fluentcrm/uKJX5OuAfPkZ6PEOUxpbtLoN2GM5KcmaXBK9Yjk3XLnm4gL9ZEu_SJDRNop4MVZdDGZ5tgIIvolZNs_RXOsg9P-ssapEcrXSO244H-PRkCh_stCwA9Pn7ilymyuVrf6dDJbt4usMjgjBLGJ7oA.png)

3.  Now choose the account from which you want to select your spreadsheet and click Continue.
4.  Next, select your Drive, Spreadsheet, Worksheet, and Column Name. and click **Continue**. If you don’t have a sheet for this purpose, you’ll have to create it.

![configuring google sheets action in zapier](/integrations/zapier-integration-with-fluentcrm/kQcWasqKPGLc8u21hoI0WW6yfVmp52qdeaZTFmSDIBaH0f6flbGSbRnWAKgMvSOX-TGYi4k6RlGQ7FyRxXHYUaZBNF9Zvgk8-j7yAcEFRfiUj2_8f17TZ6XsOJgbDJFyTRKr0uJs2m_bRZUogQ.png)

5.  Finally, click test and continue, If you get a success message like shown below, the integration is successful. Click **Publish Zap** to publish the automation.

![testing google sheets action in zapier](/integrations/zapier-integration-with-fluentcrm/37RCVqln1W7FU5Q2KQ6l1TISl6uHmyOf7Fo1xE32DLEZ8DAb3Gf_NH-kezy9lTxrzQQOEOFI9_kUx98YYnA7vDLQV1x2T4r8LlzqBU2Dm7o65XU8NNr889A83yFss2NLqVAqyY8fk7NL4mgJ1Q.png)

So that completes our Zapier integration tutorial. If you get stuck or have any questions about the tutorial, feel free to comment below!

FluentCRM offers excellent webhook connectivity so that you can easily connect your data sources and automate tasks easily. Read our [documentation for easy Webhook integration](/docs/webhook-integration)!