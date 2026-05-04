---
title: "Bounce Handling with Amazon SES"
slug: "bounce-handler-with-amazon-ses"
category: "bounce-handlers"
order: 0
---

# Bounce Handling with Amazon SES
Using Amazon SES, you can track the invalid email and mark them as Bounced. Amazon will track the delivery status of the email and if it failed to reach the recipient's mail server, it will be marked as Bounced in your audience status so that you can exclude them in the future campaign.

\***Tutorial**: [How to Configure Amazon SES with FluentCRM](https://fluentcrm.com/set-up-amazon-ses-with-fluentcrm/)

### Create a topic in Amazon SNS

1\. Go to [Amazon SNS console](https://console.aws.amazon.com/sns/home).

![Amazon SNS console home screen](/bounce-handlers/bounce-handler-with-amazon-ses/1-go-to-SNS.jpg)

2\. Choose Create topic.

![Create topic button in SNS](/bounce-handlers/bounce-handler-with-amazon-ses/2-goto-topics.jpg)

3\. Select the Type **Standard**, enter a name for the Topic, and click the **Create topic** button.

![Standard topic type and name field in SNS](/bounce-handlers/bounce-handler-with-amazon-ses/Amaon-Simple-Notification-Service-create-topic-1-1024x441.png)

4\. From the Topic details of the topic that you created, navigate to Subscriptions, and then choose Create subscription.

![Create subscription option in SNS topic details](/bounce-handlers/bounce-handler-with-amazon-ses/4-create-subscription-1024x646.jpg)

5\. The topic will be pre-selected. In the **Protocol** field, select http or https (based on your server's SSL status).

![Protocol selection screen for SNS subscription](/bounce-handlers/bounce-handler-with-amazon-ses/5-subscription-screen-1024x661.jpg)

In the **Endpoint** field, enter your FluentCRM bounce handler URL. You can find this URL in **FluentCRM → Settings → Email Service Settings**.

![FluentCRM bounce handler URL location in settings](/bounce-handlers/bounce-handler-with-amazon-ses/6.5-Bounce-Handler-URL-1024x391.png)

After entering the URL, check **Enable raw message delivery** and click the **Create subscription** button. You should see a success screen like the one below:

![SNS subscription confirmed success screen](/bounce-handlers/bounce-handler-with-amazon-ses/6-success-1024x402.jpg)

### Configure Amazon SES to send bounce information to FluentCRM

1\. Go to [Amazon SES console](https://console.aws.amazon.com/ses/home) home, In the navigation pane, choose **Verified Identities**, and click on **Create Identity**.

![aws verified identities](/bounce-handlers/bounce-handler-with-amazon-ses/AWS-verified-identities-1024x496.png)

2\. Create two identities, one for **Domain** and another for **Email Address**. You have to verify the domain and email address in order to set up the notification.

![aws create identity](/bounce-handlers/bounce-handler-with-amazon-ses/AWS-Create-Identity-1024x543.png)

3\. From the verified Identities list select the domain or email that you have just verified, In the navigation pane, choose **Notifications**, and click on the Edit button from the Feedback notifications section.

![aws notification](/bounce-handlers/bounce-handler-with-amazon-ses/AWS-Notification-1024x584.png)

4\. Under SNS Topic Configuration, for **Bounces**, select the SNS topic that you created. Do the same for **Complaints**.

![aws configure bounce](/bounce-handlers/bounce-handler-with-amazon-ses/AWS-configure-bounce-1024x584.png)

Now click the **Save changes** button. That's it!

You have to repeat the above two steps of adding the SNS topic for both the verified domain and email address separately.

### Viewing Bounced Contacts

If you want to view bounced contacts, go to FluentCRM **Contacts**. Then click **Filter By Statuses** and enable the **Bounced** checkbox.

![view bounced contacts in fluentcrm](/bounce-handlers/bounce-handler-with-amazon-ses/Screenshot-2023-08-12-at-3.31.52-PM-1024x529.png)