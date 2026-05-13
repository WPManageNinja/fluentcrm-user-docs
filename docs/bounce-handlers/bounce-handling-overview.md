---
title: "Bounce Handling Overview"
slug: "bounce-handling-overview"
category: "bounce-handlers"
order: 0
---

# Bounce Handling

When you send an email and it cannot be delivered, the sending server sends back a failure notification called a **bounce**. FluentCRM can receive these bounce notifications and automatically update the contact's status — so you stop sending to addresses that don't work and protect your sender reputation.

## Why Bounce Handling Matters

Without bounce handling, FluentCRM has no way to know that an email failed after it left your server. Continuing to send to bad addresses increases your bounce rate, which can cause email providers to flag your domain as a spam source. Setting up bounce handling keeps your list clean automatically.

## How It Works

1. You configure your email sending service (e.g., Amazon SES, Mailgun, SendGrid) to forward bounce notifications to a webhook URL provided by FluentCRM.
2. When a bounce occurs, the sending service calls that URL.
3. FluentCRM receives the notification and marks the contact as **Bounced**, removing them from future sends.

The webhook URL is found in FluentCRM under **Settings → Email Service (SMTP & Bounce Handlers)**.

## Choose Your Provider

Find the guide for the email service you use to send campaigns:

| Provider | Guide |
|----------|-------|
| Amazon SES | [Bounce Handling with Amazon SES](/bounce-handler-with-amazon-ses) |
| Brevo | [Bounce Handling with Brevo](/bounce-handling-with-brevo) |
| Elastic Email | [Bounce Handling with Elastic Email](/bounce-handling-with-elastic-email) |
| Mailgun | [Bounce Handling with Mailgun](/bounce-handling-with-mailgun) |
| Pepipost | [Bounce Handling with Pepipost](/bounce-handling-with-pepipost) |
| Postal Server | [Bounce Handling with Postal Server](/bounce-handling-with-postal-server) |
| Postmark | [Bounce Handling with Postmark](/bounce-handling-with-postmark) |
| SendGrid | [Bounce Handling with SendGrid](/bounce-handling-with-sendgrid) |
| SMTP2GO | [Bounce Handling with SMTP2GO](/bounce-handling-with-smtp2go) |
| SparkPost | [Bounce Handling with SparkPost](/bounce-handling-with-sparkpost) |
| toSend | [Bounce Handling with toSend](/bounce-handling-with-tosend) |

>[!Tip]
> If your sending service is not listed above but supports webhooks, you can use the **Incoming Webhooks** feature under **Settings → Incoming Webhooks** to receive bounce events from any provider that supports HTTP callbacks.
