---
title: "Integrated Contact Overview"
slug: "additional-integrated-contact-overview"
category: "grow-your-audience"
order: 0
---

# Integrated Contact Overview

If you use e-commerce or payment plugins like **WooCommerce** or **Paymattic**, FluentCRM automatically gathers all your sales data into one place. This makes it easy to see exactly how much a customer has spent and what they have bought across different platforms.

## WooCommerce Purchase History

When a customer buys something from your WooCommerce store, the details appear here automatically.

 * **Customer Summary (Right Sidebar):** This gives you a quick calculation of the customer's value, including their First Purchase Date, Total Order Count, and Lifetime Value (total money spent).
 * **Purchased Products:** You can see a list of the actual items they bought, the price, and the date they bought them.
 * **Order Table:** The main table shows the Order ID, Date, and Status (like Processing or Completed). You can also see the Total price and the number of items. Click the External Link icon to view the full order in WooCommerce.

![Purchase History Woocommerce ](/grow-your-audience/additional-integrated-contact-overview/woocommerce-purchase-history-1.webp)

## FluentCart Purchase History

FluentCRM matches a contact to a FluentCart customer by email address. Open a contact and click the **Purchases** tab, and a contact who has bought from your FluentCart store shows their orders under **FluentCart Purchase History**.

* **Order table:** Lists each order with its **Date**, **Status**, and **Total**. The order number (for example, #79) sits above the date. You can sort by **Date** or **Total**. Click **View** to preview the order without leaving the contact (see below).
* **Order Summary:** Shows **Total Orders**, **Total Spent**, **First Order**, and **Last Order**.
* **Purchased Products:** Lists each product the contact bought with its variation, price, and purchase date. The dates beside a product are links, and each opens that order in FluentCart.
* **Commerce Info (Additional Information sidebar):** Shows the contact's **Lifetime Value**, **Paid Purchases**, **First Paid Order**, and **Last Paid Order**, plus their **Recent Purchases**.

Every date on this screen follows the **Date & Time Format** you chose in [General Settings](/global-general-settings#date-time-format). With the default, dates read like "3 days ago". Switch to **WordPress Default** and they show as full dates, in the same format your WordPress site uses. FluentCart's own date setting doesn't affect this screen.

If the contact has no matching FluentCart customer, the tab shows a short note that there are no purchases to display.

![Screenshot of the FluentCart Purchase History table with a View button on each order](/grow-your-audience/additional-integrated-contact-overview/fluentcart-purchase-history-view.webp)

### Preview a FluentCart order

You don't need to open FluentCart to check what a contact bought. Click **View** on any order and a read-only preview opens beside the contact profile. It shows:

* **Order date**, **Order status**, and **Payment status** at the top.
* **Order items**, with each product's image, variation, unit price, quantity, and line total.
* **Payment summary**, with the subtotal, shipping, tax, amount paid, and order total.

To work on the order itself, click **View in FluentCart** at the bottom of the preview.

![Screenshot of the order preview drawer showing order items and the payment summary](/grow-your-audience/additional-integrated-contact-overview/fluentcart-order-preview.webp)

>[!Note]
> The preview only opens for users who can view orders in FluentCart, and only for orders that belong to the contact you're viewing.

## Paymattic Purchase History

If you use Paymattic to accept payments or donations through forms, that history will also show up in this tab.

The Paymattic table includes:

 * **ID:** The specific entry number for the payment form.
 * **Form Title:** The name of the form used (for example, "Gym Membership Form").
 * **Payment Total:** The exact amount of money paid through that form.
 * **Payment Status:** Tells you if the payment is **paid, pending, or failed**.
 * **Payment Method:** Shows how they paid, such as via **Stripe, PayPal, or Offline**.
 * **Submitted At:** The exact date and time the payment was made.
 * **Action:** Click the **View icon** to see the complete payment details and customer information inside the Paymattic dashboard.

![Paymattic Purchase History](/grow-your-audience/additional-integrated-contact-overview/paymattic-purchase-history-2.webp)

To know about Payment Details of the Paymattic Form, click **[here](https://paymattic.com/docs/how-to-view-single-submission-data-and-manage-payments-in-paymattic/)**.