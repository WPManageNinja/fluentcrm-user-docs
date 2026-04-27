---
title: "AI Writing Settings"
slug: "ai-writing-settings"
category: "global-settings"
order: 0
---

# AI Writing Settings

[FluentCRM](https://fluentcrm.com/) v3 ships with a built-in **AI Writing** assistant that helps you draft, refine, and rewrite email content directly inside the Gutenberg block editor. You can connect your preferred AI provider once, and from then on you'll be able to generate **Smart Headings**, **Smart Buttons**, **Magic Images**, or rewrite any block of copy without leaving the email editor.

This article walks you through enabling AI Writing, choosing a provider, and testing the connection.

## Access AI Writing settings

Go to **FluentCRM → Settings → AI Writing** from your WordPress admin. The dedicated settings tab is where you choose a provider, paste your API key, and run the connection test.

## Supported AI providers

FluentCRM currently supports three providers out of the box:

-   **OpenAI** – ChatGPT models (GPT-4o, GPT-4.1, GPT-3.5, etc.).
-   **Anthropic Claude** – Claude 3.x and Claude Sonnet/Opus models.
-   **Google Gemini** – Gemini 1.5 Pro / Flash models.

You can switch between providers at any time. FluentCRM does **not** route any AI traffic through a third-party proxy – calls go directly from your site to the provider you select using the API key you provide.

## Connect a provider

1. From the **AI Writing** settings tab, choose a provider from the **AI Provider** dropdown.
2. Paste your **API Key** in the field that appears.
3. (Optional) Pick a **Default Model** if your provider exposes one.
4. Click the **Test Connection** button to confirm the credentials work. You should see a success message.
5. Click **Save Settings** to store your configuration.

> **Note:** API keys are stored as encrypted FluentCRM options on your own database. They are never shared with WPManageNinja or sent anywhere else.

### Where to get an API key

-   **OpenAI:** Sign in at [platform.openai.com](https://platform.openai.com/) and create a key under **API keys**.
-   **Anthropic Claude:** Sign in at [console.anthropic.com](https://console.anthropic.com/) and create a key under **API Keys**.
-   **Google Gemini:** Sign in at [aistudio.google.com](https://aistudio.google.com/) and create an API key under **Get API key**.

Make sure billing is enabled on your provider account – most providers reject calls from accounts without an active billing setup.

## Where AI Writing surfaces inside FluentCRM

Once connected, AI Writing becomes available across the email editing experience:

-   **Smart Headings** – Generate punchy headlines from a short prompt, right in the heading block.
-   **Smart Buttons** – Suggest persuasive CTA copy based on the email context.
-   **Magic Image** – Generate header or section images using your AI provider's image model.
-   **Rewrite/Improve Copy** – Highlight any paragraph and ask the AI to make it shorter, friendlier, more persuasive, or translate it.

These tools appear in the **block toolbar** of the [Visual Builder](/docs/fluentcrm-visual-builder) and the Gutenberg editor whenever you select a heading, button, image, or text block.

## Disabling AI Writing

If you'd rather hide AI Writing entirely – for example, on a client site where you don't want users to see AI buttons – set the **Enable AI Writing** toggle to **Off** on the AI Writing settings tab. The toolbar buttons will be removed from the editor for everyone on the site.

> **Tip:** Looking for the older "Disable AI?" experimental flag from v2.x? In v3 it has moved into this dedicated AI Writing settings page – the [Advanced Features Settings](/docs/advanced-features-settings) page no longer carries that toggle.

## Troubleshooting

-   **"Connection failed: invalid API key"** – Re-copy the key, watching for hidden whitespace. Make sure billing is active on the provider account.
-   **"Quota exceeded" or `429` errors** – Your provider account has hit its monthly limit; upgrade or wait for the reset window.
-   **AI buttons not appearing in the editor** – Confirm the toggle is **On**, save settings, then hard-refresh the campaign editor.

## Next steps

-   Apply your AI-generated copy in [Email Patterns](/docs/email-patterns) so you can reuse the best-performing snippets across campaigns.
-   Combine AI-generated copy with [Smart Codes](/docs/smartcodes-in-fluentcrm-email-editor) for personalisation.

If you have any questions about AI Writing, please feel free to [contact us](https://wpmanageninja.com/support-tickets/).
