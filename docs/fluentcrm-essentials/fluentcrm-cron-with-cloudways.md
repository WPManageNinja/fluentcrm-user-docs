---
title: "Cron Job: FluentCRM Cron With Cloudways"
slug: "fluentcrm-cron-with-cloudways"
category: "fluentcrm-essentials"
order: 0
---

# Cron Job: FluentCRM Cron With Cloudways

Cloudways provides a comprehensive range of cloud solutions including dedicated servers, cloud VPS hosting, and managed services for enterprises and online businesses.

## Find WordPress Installation Directory

We need to find the WordPress Installation directory first where the Cron Script wp-cron.php file is located and will be needed in the further steps. You can find your WordPress Installation Directory easily by going to **WordPress Dashboard ⮕ Tools ⮕ Site Health ⮕ Info Tab ⮕ Directories and Sizes Section.** More about this can be found here: [Find WordPress Installation Directory](/fluentcrm-cron-job-basics-and-checklist/#find-wordpress-installation-directory)

![crm get wordpress directory](/fluentcrm-essentials/fluentcrm-cron-with-cloudways/crm-get-wordpress-directory.webp)

## Cloudways Application Cron Job

Now we need to go to the application inside the Cloudways for which we are going to add the cron job. From the Cloudways dashboard go to the **Application tab** by clicking the Application Menu link.

![cloudways dasboard servers](/fluentcrm-essentials/fluentcrm-cron-with-cloudways/cloudways-dasboard-servers.webp)

From the Applications, click on the specific Application for which you are going to configure the cron job.

![cloudways dasboard applications](/fluentcrm-essentials/fluentcrm-cron-with-cloudways/cloudways-dasboard-applications.webp)

### Cloudways Application Overview:

Then you will be redirected to the application overview contains a lot of information and an action list. From the left side menus, click on the **Cron Job Management** menu.

![cloudways dasboard application overview](/fluentcrm-essentials/fluentcrm-cron-with-cloudways/cloudways-dasboard-application-overview.webp)

### Application Advanced Cron Job

Then you will be redirected to the Cron Job Management page, by default the Basic options will be offered. We need the Advanced option to configure the WordPress Cron Job.

![cloudways dasboard add new cron](/fluentcrm-essentials/fluentcrm-cron-with-cloudways/cloudways-dasboard-add-new-cron.webp)

### Add New Cron Job

To add a new cron job, please click on the **ADD NEW CRON JOB** button.

![cloudways cron advanced add new](/fluentcrm-essentials/fluentcrm-cron-with-cloudways/cloudways-cron-advanced-add-new.webp)

From here we will need to select the Time Interval at which period the cron script or the command will be executed.

![crm cloudways advanced cron 2](/fluentcrm-essentials/fluentcrm-cron-with-cloudways/crm-cloudways-advanced-cron-2.webp)

In a typical Email Marketing Application, the cron time interval is required per minute. Running a per-minute cron job will ensure that any job from WordPress will be executed or invoked every minute and will not be left to wait for longer than it was intended. Now select **Every Minute** from the dropdown below:

![crm cloudways advanced cron 3](/fluentcrm-essentials/fluentcrm-cron-with-cloudways/crm-cloudways-advanced-cron-3.webp)

In the command field, input **wp-cron.php** which will add this cron script for the application root directory in the following section.

![cloudways add cron every minute](/fluentcrm-essentials/fluentcrm-cron-with-cloudways/cloudways-add-cron-every-minute.webp)

In the next screen you will see a full cron command will be added as below:

![cloudways job added](/fluentcrm-essentials/fluentcrm-cron-with-cloudways/cloudways-job-added.webp)

That's all about Configuring FluentCRM WordPress Cron Job in Cloudways!