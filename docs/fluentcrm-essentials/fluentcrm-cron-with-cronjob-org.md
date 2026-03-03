---
title: "Cron Job: FluentCRM Cron with Cron-job.org"
slug: "fluentcrm-cron-with-cronjob-org"
category: "fluentcrm-essentials"
order: 0
---

# Cron Job: FluentCRM Cron with Cron-job.org
In this article, we will be exploring how to configure the cron job in other ways, in case we do not have permission, feature, or authorization to configure the cron job the recommended way as in the [Replace WordPress Cron with a Real Cron Job](/docs/replace-wordpress-cron-with-a-real-cron-job) guide with PHP Application Binary.

There are a few online services that provide remote service to call a specific script available and public on the web. The recommended setup is to invoke the cron script with PHP Binary itself. We have dedicated documentation regarding the differences between remote and local cron job configurations here: **Cron Job: Differences and Troubleshooting**. In addition, a few key points are listed below:

## Cron-Job Dashboard

To get started with [cron-job.org](http://cronjob.org) please go to their homepage: [Free cronjobs - from minutely to once a year | cron-job.org](https://cron-job.org/en/)  
Finish the user registration, and verification and go to the dashboard.

![crm cronjoborg site](/fluentcrm-essentials/fluentcrm-cron-with-cronjob-org/crm-cronjoborg-site.png)

Once you are done with the registration and get to Dashboard, Please click on the **Create Cronjob** button to create a new Remote Cron Job to call your WordPress website's Cron Script.

![crm cronjoborg creatnew](/fluentcrm-essentials/fluentcrm-cron-with-cronjob-org/crm-cronjoborg-creatnew.png)

## Create Cron Job

The creation window will show a few options and we do not have to worry about all the things. We just need to:

![crm cronjoborg create](/fluentcrm-essentials/fluentcrm-cron-with-cronjob-org/crm-cronjoborg-create.png)

-   **Set Title:** Provide a Name for the Cron Job as an Identifier.
-   **URL:** This is the main part. The URL to the Cron Invocation via the web page of the WordPress Cron Script. In our case, this is ( Please replace the base URL or domain part with your website domain or subdomain ):

```
https://testwp.ibrahim.com/wp-cron.php?doing_wp_cron
```

-   **Enable Job & Save Responses in Job History.**

When the above information is submitted click on the **Create button** to finally create the cron job.

## Cron Job List & History

Once you confirm the test result shows success, create and save the cron job and you will see the cron job listed under All Cronjobs.

### Cronjobs List

![crm cronjoborg list](/fluentcrm-essentials/fluentcrm-cron-with-cronjob-org/crm-cronjoborg-list.png)

### Cronjob History

![crm cronjoborg success history](/fluentcrm-essentials/fluentcrm-cron-with-cronjob-org/crm-cronjoborg-success-history.png)

If everything is okay with the configuration and the test runs successfully, after some time when the cron schedule passes some schedules you will see the cron job history showing success for the next schedules it ran. If the history shows any error you should investigate and troubleshoot the issue.

Once again, Running FluentCRM requires a proper and timely running Cron Job. These types of remote cron jobs may not always work or have problems for higher processing websites.