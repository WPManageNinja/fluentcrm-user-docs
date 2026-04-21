---
title: "Amazon End User Messaging SMS Integration"
description: "Connect FluentCRM with Amazon End User Messaging (formerly SNS) to send reliable SMS campaigns and automation messages using AWS credentials and region settings."
slug: "amazon-end-user-messaging"
category: "sms-module"
order: 4
---

# Amazon End User Messaging (SNS) Integration

**Amazon End User Messaging** (formerly known as Amazon SNS for SMS) is a robust, highly available messaging service from **Amazon Web Services (AWS)** that allows you to reliably send SMS notifications at scale. Integrating **FluentCRM** with this service provides a cost-effective, enterprise-grade solution for delivering SMS campaigns and automated messages to your customer base.

This article will guide you through connecting your AWS account to FluentCRM using the updated interface.

## Accessing the Amazon End User Messaging Provider

Before you begin, ensure you have enabled the **SMS Module** in your FluentCRM settings.

1.  From your WordPress dashboard, navigate to **FluentCRM Pro** > **Settings**.
2.  In the left-hand menu, click on **SMS Setting**.
3.  Ensure the **Enable SMS Module** toggle is switched to **ON**.
4.  Under the **SMS Provider** section, click the **Choose your SMS provider** dropdown menu and select **Amazon End User Messaging**.

![Access the Amazon End User Messaging](/sms-module/amazon-end-user-messaging/enable-sms-module-1.webp)

## AWS Credentials

To configure the integration, you need three key pieces of information from your AWS account: the **AWS Access Key ID**, **AWS Secret Access Key**, and the **AWS Region** where your messaging service is configured.

1.  **Log in** to your **AWS Management Console**.
2.  Navigate to the **IAM (Identity and Access Management)** service to create or retrieve your Access Keys. 
    * **Pro Tip:** It is highly recommended to use a dedicated IAM user with limited permissions specific to messaging services for better security.
3.  Copy your **AWS Access Key ID** and **AWS Secret Access Key**. These credentials authorize FluentCRM to send messages through your account.


## Configuring FluentCRM Amazon Settings

Return to the **SMS Setting** page in FluentCRM to finalize the connection:

* **AWS Access Key ID:** Paste the Access Key ID you copied from the AWS console.
* **AWS Secret Access Key:** Paste the Secret Access Key into this field.
* **AWS Region:** Use the dropdown menu to choose the **AWS Region** where your settings are configured (e.g., **US East (N. Virginia)**). This must match your AWS setup precisely.
* **Sender ID (Optional):** If you have a registered **Sender ID**, enter it here to be used as the origin identity for your messages.

Once you have entered the required credentials, click the **Save** button located at the top right of the page.


### SMS Incoming Webhook

Upon saving your settings, FluentCRM will generate a unique **SMS Incoming Webhook** URL at the bottom of the page. You can copy this URL and paste it into your AWS configuration if you need to handle incoming message status or data.

Your **Amazon End User Messaging integration** is now complete! You are ready to leverage the power of the AWS platform for high-volume SMS campaigns and automated workflows.