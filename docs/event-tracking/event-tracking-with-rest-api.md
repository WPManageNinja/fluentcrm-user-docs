---
title: "Event Tracking With Rest API"
slug: "event-tracking-with-rest-api"
category: "event-tracking"
order: 0
---

# Event Tracking With Rest API
To create Event Tracking with REST API, go to the FluentCRM Settings then Click on the **REST API** from the left sidebar. Now click on the **Add New Key** button.

![rest api 01](/event-tracking/event-tracking-with-rest-api/Rest-Api-01-scaled.webp)

A popup will appear for the Add New REST API Key name. Now move into the **Name of this Key** and **Associate FluentCRM Manager**. Click the **Create** button.

To know how to create a Manager please visit this [Documentation](/docs/global-managers-settings).

![02](/event-tracking/event-tracking-with-rest-api/02-2.webp)

Now another popup will appear to create your REST API. Simply Copy the **API Username** and **API Password** for later use.

![03](/event-tracking/event-tracking-with-rest-api/03-1.webp)

Now go to the API platform to Create your API. Here I am using Postman login to your [account](https://www.postman.com/postman-account/).

Now enter this URL:https://your-domain.com/wp-json/fluent-crm/v2/subscribers/track-event

Here only enter your domain name instead of that URL (your-domain.com) after that select **Post** in the screenshot below.

![04](/event-tracking/event-tracking-with-rest-api/04-1-scaled.webp)

Now click on the **Authorization** section and choose the **Basic Auth.**

Here paste the API **Username** and **Password** that were copied before.

![05](/event-tracking/event-tracking-with-rest-api/05-1-scaled.webp)

After that select the **Body** section and enter the **Event key**, **Title**, and event targeted **Email Address,** etc. Then click on the **Send** button.

Now you’ll see a message saying your **Event has been tracked** in JSON format.

![06](/event-tracking/event-tracking-with-rest-api/06-1.webp)

Now to see your tracked event status go to your FluentCRM email Address Contact and find it.

![07](/event-tracking/event-tracking-with-rest-api/07-1.webp)
