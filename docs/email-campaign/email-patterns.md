---
title: "Email Patterns"
slug: "email-patterns"
category: "email-campaign"
order: 0
---

# Email Patterns

[FluentCRM](https://fluentcrm.com/) ships with a dedicated **Patterns** library so you can save, reuse, and share blocks of email design across every campaign you run. Patterns are built right inside the Gutenberg-native email builder, which means anything you can design in a campaign – a hero header, a featured-product row, a footer, a testimonial section – can be saved once and dropped into any future email with a single click.

This article walks you through where Patterns live, how to create your own, and how to insert them into a campaign.

## Where to find Patterns

Go to **FluentCRM → Emails → Patterns** from the WordPress admin sidebar. You will see a list of every pattern saved in your CRM, along with the title, last updated date, and the user who created it.

> **Note:** Email Patterns are part of the FluentCRM core (free) plugin. Anyone with the **fcrm_manage_email_templates** capability can create or edit patterns.

## Creating a new pattern

Click the **+ New Pattern** button at the top right of the Patterns page. Give your pattern a clear internal **Title** so you can find it later, then design the block using the same Gutenberg blocks you use in campaigns – paragraphs, columns, buttons, images, social icons, smart codes, and more.

When you are happy with the layout, click **Save Pattern**. The pattern is now available across every email campaign, recurring campaign, email sequence, and automation email action in FluentCRM.

## Saving a pattern from inside a campaign

You can also turn any block – or any group of blocks – inside a campaign into a reusable Pattern without leaving the editor.

1. Open or create an email campaign and switch to the **Block Editor**.
2. Select the block (or group/columns) you want to reuse.
3. Click the **three-dot menu** on the block toolbar and choose **Create pattern / Save as Pattern**.
4. Give it a name and confirm.

The block is now stored in your **Patterns** library and stays in sync if you update the original definition.

## Inserting a pattern into an email

While composing or editing a campaign in the Gutenberg editor:

1. Click the **+** (block inserter) at the top-left of the editor.
2. Switch to the **Patterns** tab.
3. Choose **FluentCRM Patterns** from the category dropdown.
4. Click any pattern to drop it into the email, then customise it as needed.

> **Tip:** Patterns are full Gutenberg blocks – once inserted, you can edit any text, swap images, or change colours just like a regular block. Edits to an inserted pattern do **not** modify the original pattern in your library.

## Updating or deleting a pattern

Open **Emails → Patterns** and hover over the pattern you want to manage. You can:

-   **Edit:** Open the pattern in the block editor to update layout, copy, or styling.
-   **Duplicate:** Create a copy as a starting point for a variation.
-   **Delete:** Permanently remove the pattern (existing campaigns that already used it are unaffected – the design is copied at insertion time).

## When to use Patterns vs. Templates

Both Patterns and [Email Templates](/docs/email-templates) help you reuse design, but they solve slightly different problems.

| Use a **Pattern** when… | Use a **Template** when… |
|---|---|
| You want to reuse a single section (header, hero, footer, CTA row) | You want to reuse the entire email layout |
| You want to mix and match multiple blocks per campaign | You always start the same campaign type from the same skeleton |
| You're refining a brand-consistent block library over time | You're producing many transactional or repeatable emails |

## Next steps

-   Pair Patterns with [Smart Codes](/docs/smartcodes-in-fluentcrm-email-editor) to add personalisation tokens.
-   Combine Patterns with [Conditional Sections](/docs/conditional-sections-in-fluentcrm-email-editor) for audience-specific content.
-   Speed up writing inside Patterns with [AI Writing](/docs/ai-writing-settings).

If you have any questions about Email Patterns, please feel free to [contact us](https://wpmanageninja.com/support-tickets/).
