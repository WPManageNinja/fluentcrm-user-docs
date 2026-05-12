---
title: "SMTP/Email & Bounce Handlers"
slug: "smtp-bounce-handlers-settings"
category: "global-settings"
order: 0
---

# Email Service (SMTP & Bounce Handlers)

FluentCRM uses the wp\_mail() function to broadcast all the emails that are PHP-based mailers. There are various ways to deliver emails from WordPress. The SMTP Protocol, API-based 3rd party delivery providers, and direct PHP-based sending require SMTP Port 25 to be opened from the WordPress hosting server. Below is a screenshot of when no SMTP plugins are used on the website.

![crm smtp initial](/global-settings/smtp-bounce-handlers-settings/crm_smtp_initial.webp)

SMTP Plugins like **FluentSMTP** improves your WordPress mail by intercepting the wp\_mail and then connecting with your email service providers to ensure deliverability. It allows sending emails directly via SMTP. API-based providers like Google Workplace, Office365, Sendgrid, AWS SES, etc. When you install the FluentSMTP plugin on your website and configure email delivery connections you will see them listed in the FluentCRM SMTP Dashboard like the below screenshot.

## FluentSMTP Settings

![crm smtp](/global-settings/smtp-bounce-handlers-settings/crm_smtp.webp)

## Bounce Handlers

Bounce handlers allow you to manage bounced contacts without manual intervention. Generally, all your bounced emails are only reported within the service platform you're using however, the ideal way to deal with bounced emails is to sync them with FluentCRM. This is why we recommend setting up bounce handlers.

To configure Bounce Handlers for available services please check each relevant documentation:

1.  [Amazon SES](/bounce-handler-with-amazon-ses)
2.  [Mailgun](/bounce-handling-with-mailgun)
3.  [SendGrid](/bounce-handling-with-sendgrid)
4.  [Pepipost](/bounce-handling-with-pepipost)
5.  [PostMark](/bounce-handling-with-postmark)
6.  [Sparkpost](/bounce-handling-with-sparkpost)
7.  [SendGrid](/bounce-handling-with-sendgrid)
8.  [Elastic Email](/bounce-handling-with-elastic-email)
9.  [Postal Server](/bounce-handling-with-postal-server)
10.  [SMTP2Go](/bounce-handling-with-smtp2go)
11.  [Brevo (ex Sendinblue)](/bounce-handling-with-brevo)

>[!Note]
>We are constantly working to expand this list. If your provider isn't listed, keep an eye out for future updates.

For now, we only have these services integrated with our bounce handling system. More will be added in the future.