---
title: "Cron Job: FluentCRM Cron with EasyCron"
slug: "fluentcrm-cron-with-easycron"
category: "fluentcrm-essentials"
order: 0
---

# Cron Job: FluentCRM Cron with EasyCron

We have seen in [Cron Job: FluentCRM Cron with Cron-job.org](/fluentcrm-cron-with-cronjob-org) that an alternative method can be configured to run cron jobs remotely in case we do not have access to the Shell, or features inside the server to configure the cronjob for WordPress. In this article, we will explore another online service to call our WordPress Website's cron script remotely.

As a reminder, a few warnings for such remote cron invocation are listed again below:

## EasyCron Dashboard

To get started with EasyCorn, go to [Online Cron Service | Webcron - EasyCron.com](https://www.easycron.com/)

![crm easycron home](/fluentcrm-essentials/fluentcrm-cron-with-easycron/crm-easycron-home.webp)

Once you are done with finishing the user registration and verification and then go to the EasyCron Dashboard as shown below:

![crm easycron dash](/fluentcrm-essentials/fluentcrm-cron-with-easycron/crm-easycron-dash.webp)

## Create EasyCron Cron Job

Once you click on the **\+ Cron Job** button from the left side of the Dashboard, you will see a window containing a few options like the below:

### URL & Time

The first section or tab contains the essential settings of the Cron Job.

![crm easycron new](/fluentcrm-essentials/fluentcrm-cron-with-easycron/crm-easycron-new.webp)

-   **URL to Call:** The URL to the webpage of the WordPress Cron Script including any additional parameters. Please replace with your own domain or subdomain where in our case it is:

```
https://testwp.ibrahim.com/wp-cron.php?doing_wp_cron
```

-   **When to Execute:** This should be every minute or per minute. It is required by FluentCRM's Every Minute Email Sending Schedule.
-   **Timezone:** Carefully look for the Timezon in your WordPress General Settings and set it according to that. For Every Minute Execution, you may skip this.

Once you are done with the details, click on the **Create Cron Job** to finally create the cron job.

### Identifier

Now head over to the Identifier tab and set a Cron Job Name that is optional but helps set a name to the cron job for future easy understanding. You can also provide an additional Description.

![crm easycron identifier](/fluentcrm-essentials/fluentcrm-cron-with-easycron/crm-easycron-identifier.webp)

### Cron Jobs List

When the cron job is created you will see the cron job listed in the dashboard where a lot of information is available for the Cron Job. Please make sure to confirm it is in Active Status.

![crm easycron list](/fluentcrm-essentials/fluentcrm-cron-with-easycron/crm-easycron-list.webp)

## Cron Job Logs & Prediction

We should also check back sometime later if the cron is still running successfully or not from the Cron Job Logs & Prediction. For a successful cron succession the dashboard will be similar to the below screenshot.

![crm easycron logs](/fluentcrm-essentials/fluentcrm-cron-with-easycron/crm-easycron-logs.webp)

Once again, Running FluentCRM requires a proper and timely running Cron Job. These types of remote cron jobs may not always work or have problems for higher processing websites.