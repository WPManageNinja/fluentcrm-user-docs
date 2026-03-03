---
title: "REST API"
slug: "global-rest-api-settings"
category: "global-settings"
order: 0
---

# REST API
## Adding New REST API Key

A REST API (also known as RESTful API) is an application programming interface (API or web API) that conforms to the constraints of REST architectural style and allows for interaction with RESTful web services. FluentCRM provides REST API to manage various kinds of tasks and access FluentCRM data as well. In this tutorial, we will learn about Fluent CRM REST API Management.

Go to **FluentCRM Dashboard** ➜ **REST API** ➜ **Add New Key**

![crm rest api add new key](/global-settings/global-rest-api-settings/crm_REST_API_add_new_key.png)

If this is a fresh installation of FluentCRM or you did not add any managers yet you will see a popup saying create a manager similar to below screenshot:

![crm rest api add new key add manager](/global-settings/global-rest-api-settings/crm_REST_API_add_new_key_add_manager.png)

To Add New Manager please visit this documentation: [**Add a New Manager**](/docs/global-managers-settings)

Now When you are done adding a FluentCRM Manager and note the email address and then Add a New Key by providing the name of the key and then associating the FluentCRM Manager to it.

![crm add rest api key](/global-settings/global-rest-api-settings/crm_add_REST_API_key.png)

After clicking on the **Create** Button you will be provided with an **API Username** and an **API Password** like the below screenshot:

![crm rest api created](/global-settings/global-rest-api-settings/crm_REST_API_created.png)

Please keep note of this which will be needed to use the REST API as credentials.

## Testing API

Now we will be testing this REST API access and a few methods below.

We will use a free tool Postman for this testing. Firstly, we need to add authorization and the type is **Basic Auth** for the authorization where we will be providing the **Username** and **Password** generated while creating the REST API key.

![crm rest api test postman](/global-settings/global-rest-api-settings/crm_REST_API_test_PostMan.png)

Now are ready to go ahead and test our FluentCRM REST API. The **API Base URL:** **https://yourdomain.com/wp-json/fluent-crm/v2**

Now we will be listing all the contacts of the FluentCRM by the HTTP Request: **GET https://yourdomain.com/wp-json/fluent-crm/v2/subscribers**

Now Clicking on Send or requesting the data will send JSON formatted response data like the below screenshot. You will see a status code of 200 OK for a successful request.

![crm rest api get result](/global-settings/global-rest-api-settings/crm_REST_API_GET_Result.png)

Now we will be adding a contact into the FluentCRM by the HTTP Request: **https://yourdomain.com/wp-json/fluent-crm/v2/subscribers?first\_name=Ibrahim&last\_name=Sharif&email=ibrahim@gmail.com&status=subscribed** which provides a few parameters regarding the information of the contact.

This also sends a JSON formatted response giving a message saying that "**Successfully added the subscriber.**"

![crm rest api post result](/global-settings/global-rest-api-settings/crm_REST_API_POST_result.png)

To learn more and deep about FluentCRM REST API please visit: [https://rest-api.fluentcrm.com/](https://rest-api.fluentcrm.com/)