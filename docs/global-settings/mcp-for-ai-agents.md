---
title: "MCP for AI Agents"
slug: "mcp-for-ai-agents"
category: "global-settings"
order: 0
---

# MCP for AI Agents

FluentCRM ships with a built-in **MCP (Model Context Protocol)** server that connects your CRM to AI clients like **Claude Desktop, Claude Code, Cursor, and OpenAI Codex**. Once it's set up, your AI assistant can read your contacts, send a test campaign, enroll people into automations, or look up reports as part of an ordinary conversation. No third-party proxy, no extra service to host, no API keys to manage outside WordPress.

You can think of MCP as a bridge between your AI client and FluentCRM. Instead of you opening the admin and clicking around, the AI calls the same actions you would, but through a secure, authenticated endpoint. You stay in control: every action is authorized by a WordPress Application Password you generate yourself, and you can revoke that access at any time.

>[!Note]
> The MCP feature is available on both free and Pro versions of FluentCRM. **FluentCRM Pro** adds a one-click installer for the companion plugin and exposes **some extra MCP tools** from FluentCampaign Pro. [See what Pro includes →](/how-to-install-upgrade-and-activate-license)

## Open the MCP settings

From your WordPress admin, go to **FluentCRM → Settings → AI Configuration → MCP for AI Agents**. Everything you need lives on this one page: the adapter install, the on/off toggle, the endpoint URL, and the connection snippet for your preferred AI client.

## Step 1: Enable MCP for AI Agents

With the adapter active, switch on the **Enable MCP for AI Agents** toggle at the top of the page. When enabled, FluentCRM exposes its abilities through the adapter so AI agents can read and write your CRM data with your authorization.

![MCP for AI Agents page with the enable toggle highlighted in the sidebar](/global-settings/mcp-ai-agent/crm-mcp-1.webp)

If you ever want to pause access for every connected AI client at once, just flip this toggle off. The endpoint stops responding to MCP requests immediately, no other changes needed.

## Step 2: Install FluentHub

FluentCRM exposes its MCP tools through a small companion plugin called **FluentHub**. Until it's installed and active, the page shows an **Adapter Required** badge in the top-right and the Status panel offers an install option.

![MCP for AI Agents page showing the Adapter Required state with the Install FluentHub button](/global-settings/mcp-ai-agent/crm-mcp-2.webp)

**FluentCRM Pro users**: Click **Install FluentHub**. WordPress installs and activates the plugin in the background, then the page refreshes into the connected state.

>[!Note]
> **Using the free version of FluentCRM?** You won't see the one-click **Install FluentHub** button. Download FluentHub yourself from [https://static.wpmanageninja.com/fluent-toolkit.zip](https://static.wpmanageninja.com/fluent-toolkit.zip), then upload the ZIP via **Plugins → Add New → Upload Plugin** and activate it. After activation, return to **MCP for AI Agents** and the page will flip into the connected state.

>[!Tip]
> Prefer to handle it yourself on Pro too? You can always download the ZIP from [https://static.wpmanageninja.com/fluent-toolkit.zip](https://static.wpmanageninja.com/fluent-toolkit.zip) instead of using the one-click button.

## Step 3: Confirm the Status panel

Once the toggle is on, the **Status** panel shows three details you'll want to keep handy:

| Field | What it shows |
| --- | --- |
| **Adapter** | The installed FluentHub version (for example, `FluentHub 2.0.2`) along with a green **Connected** badge. |
| **Endpoint URL** | The address your AI client connects to, usually `https://your-site.com/wp-json/fluent-crm/mcp`. Click the copy icon to grab it in one click. |
| **Tools available** | Total number of MCP tools exposed (typically `25`, including 4 FluentCampaign Pro tools when Pro is active). |

A green **Connected** badge in the top-right of the page is your confirmation that the adapter is talking to FluentCRM correctly. If the count next to **Tools available** is `0`, the toggle in Step 2 likely isn't on yet.

## Step 4: Generate a WordPress Application Password

AI clients sign in using a **WordPress Application Password**. This is a feature built directly into WordPress 5.6 and later, so you don't need any extra plugin to use it. Each application gets its own password, which means you can revoke a single AI client without affecting your main login or any of your other tools.

The **Connect a client** panel links straight to the right screen, so you don't have to go looking for it:

![Connect a client panel with an arrow pointing to the Open profile Application Passwords link](/global-settings/mcp-ai-agent/crm-mcp-3.webp)

To create one:

1. In WordPress admin, go to **Users → Profile** and scroll down to the **Application Passwords** section.
2. Enter a name that identifies the connection (for example, `mcp`, `Claude Desktop`, or `Cursor`). This name shows up in the table afterward so you can tell connections apart.
3. Click **Add Application Password**.
4. WordPress generates a one-time password formatted like `xxxx xxxx xxxx xxxx xxxx xxxx`. Click **Copy** and save it somewhere safe. **This password is shown only once and cannot be retrieved later.**

![WordPress profile page showing the New Application Password field with mcp typed in](/global-settings/mcp-ai-agent/crm-mcp-4.webp)

![WordPress profile page showing the newly generated application password with the Copy button](/global-settings/mcp-ai-agent/crm-mcp-5.webp)

>[!Warning]
> If you lose the password before saving it, just revoke it from the same Application Passwords table and generate a fresh one. There's no way to view an old one again.

## Step 5: Connect your AI client

Back on **MCP for AI Agents**, scroll to the **Connect a client** panel. FluentCRM will encode your credentials and pre-fill a ready-to-paste snippet for the AI client you pick.

1. In the **Username** field, type the WordPress username you generated the password for.
2. Paste the **Application Password** (with or without spaces, both work) into the password field.
3. Pick the tab matching your AI client: **Claude Code**, **OpenAI Codex**, **Cursor**, **Other**, or **Claude Desktop**.
4. Click **Copy snippet**.

![Connect a client panel with username and application password filled in, showing the copy-snippet command for Claude Code](/global-settings/mcp-ai-agent/crm-mcp-6.webp)

>[!Warning]
> The generated snippet already contains your encoded credentials. Treat it like a password: never paste it into a public repository, a shared chat, or a screenshot.

### The easiest way: let your AI agent set it up

If editing config files isn't your thing, skip it. Open **Claude Code**, **Claude Desktop**, or **Cursor** in any folder on your computer and ask the AI to do the setup for you. It knows where its own config file lives, it can create the file if it doesn't exist, and it can install anything that's missing along the way.

Copy your snippet from FluentCRM, then paste a prompt like this:

> *"Set up this MCP server for me. First check whether Node.js and npx are installed and install them if they aren't. Then add this configuration to your MCP config file, and tell me if I need to restart anything afterward:"*
>
> *(paste your snippet here)*

The agent handles the file paths, the JSON formatting, and the restart instructions. You just confirm when it asks.

>[!Warning]
> Your snippet contains your login credentials. Only do this in an AI client running on your own computer, and never in a shared or public workspace.

### Before you start: Node.js and npx

Some clients need **Node.js** (which includes `npx`) on your computer:

| Client | Needs Node.js/npx? |
| --- | --- |
| **Claude Code** | Yes — the client itself installs through npm. |
| **Claude Desktop** | Yes — it reaches your site through a small `npx` helper. |
| **OpenAI Codex** | Yes, if your snippet starts with `npx`. |
| **Cursor** | No — it connects to the URL directly. |

To check whether you already have it, open Terminal (macOS) or Command Prompt (Windows) and run:

```bash
node -v
```

If you see a version number like `v20.11.0`, you're set. If you get "command not found", download the **LTS** installer from [nodejs.org](https://nodejs.org), run it, and close and reopen your terminal.

>[!Tip]
> Not comfortable in a terminal? Ask your AI agent to check and install it for you, as described above.

### Connecting Cursor

Here's the full Cursor flow as a worked example. The same idea applies to other clients, only the snippet format changes.

**1. Open Cursor's MCP settings.** In Cursor, open the command palette and search for **Cursor Settings**, then go to **Tools & MCPs** in the left sidebar. Under **Installed MCP Servers**, click **New MCP Server**.

![Cursor Settings showing the Tools & MCPs panel with New MCP Server highlighted](/global-settings/mcp-ai-agent/crm-mcp-7.webp)

**2. Paste the snippet into `mcp.json`.** Cursor opens an editor for the `mcp.json` config file. Copy the snippet from the **Cursor** tab in FluentCRM's Connect a client panel and paste it in. It looks like this:

```json
{
  "mcpServers": {
    "fluent-crm": {
      "url": "https://your-site.com/wp-json/fluent-crm/mcp",
      "type": "http",
      "headers": {
        "Authorization": "Basic <encoded-credentials>"
      }
    }
  }
}
```

![mcp.json file in Cursor showing the fluent-crm MCP server configuration](/global-settings/mcp-ai-agent/crm-mcp-8.webp)

**3. Save and reload.** Save `mcp.json` and reload Cursor. Open **Tools & MCPs** again, and you'll see **fluent-crm** in your Installed MCP Servers list with all available tools listed underneath:

![Cursor Tools & MCPs panel showing fluent-crm connected with the full list of available MCP tools](/global-settings/mcp-ai-agent/crm-mcp-10.webp)

That's it. Cursor's AI can now talk to your FluentCRM.

### Connecting Claude Code

Claude Code is the terminal version of Claude, so its snippet is a command you run rather than a file you edit. This is the quickest setup of the lot.

**1. Install Claude Code** if you don't have it yet. Open your terminal and run:

```bash
npm install -g @anthropic-ai/claude-code
```

**2. Copy the snippet** from the **Claude Code** tab in FluentCRM. It looks like this:

```bash
claude mcp add \
  --transport http \
  fluent-crm https://your-site.com/wp-json/fluent-crm/mcp \
  --header "Authorization: Basic <encoded-credentials>"
```

![Calude Code Snippet FluentCRM in a table](/global-settings/mcp-ai-agent/crm-mcp-11.webp)

**3. Paste it into your terminal and press Enter.** You can run it from any folder. Claude Code confirms the server was added.

**4. Start Claude Code** by running `claude`, then type `/mcp` to see your connected servers. **fluent-crm** appears in the list with all its tools.

![Claude Code MCP Connected](/global-settings/mcp-ai-agent/crm-mcp-12.webp)

>[!Tip]
> Claude Code stores this per project folder by default. To use FluentCRM from any folder on your computer, add `--scope user` to the end of the command.

### Connecting Claude Desktop

Claude Desktop reads its MCP servers from a configuration file. You don't have to hunt for that file, because Claude Desktop will open it for you.

**1. Open the config file from inside Claude Desktop.** Go to **Settings → Developer → Edit Config**. Claude Desktop creates the file if it doesn't exist yet and shows you where it lives:

- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

**2. Open the file in a plain text editor.** TextEdit on macOS or Notepad on Windows both work fine.

**3. Paste the snippet.** Copy it from the **Claude Desktop** tab in FluentCRM. It looks like this:

```json
{
  "mcpServers": {
    "fluent-crm": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://your-site.com/wp-json/fluent-crm/mcp",
        "--header",
        "Authorization: Basic <encoded-credentials>"
      ]
    }
  }
}
```

Where exactly you paste it depends on what's already in the file:

- **The file is empty, or contains just `{}`** — delete whatever is there and paste the whole snippet in. Done.
- **The file already has other MCP servers** — don't paste the whole thing, or you'll wipe them out. Instead, copy only the `"fluent-crm": { ... }` part and add it inside the existing `"mcpServers"` block, with a comma after the entry above it:

```json
{
  "mcpServers": {
    "some-existing-server": {
      "command": "npx",
      "args": ["-y", "some-package"]
    },
    "fluent-crm": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://your-site.com/wp-json/fluent-crm/mcp",
        "--header",
        "Authorization: Basic <encoded-credentials>"
      ]
    }
  }
}
```

**4. Save the file and fully quit Claude Desktop**, then open it again. Closing the window isn't enough: quit it from the menu bar (macOS) or the system tray (Windows).

**5. Check the connection.** Look for the tools or connectors icon in the message box. **fluent-crm** appears there with its tools listed.

>[!Warning]
> This file must stay valid JSON. A missing comma or an extra one stops Claude Desktop from loading any of your servers. If Claude Desktop starts without your tools, a punctuation slip in this file is the usual reason — paste the file into your AI agent and ask it to check the syntax.

### Connecting OpenAI Codex

Codex keeps its MCP servers in a configuration file at `~/.codex/config.toml`, written in TOML rather than JSON.

**1. Copy the snippet** from the **OpenAI Codex** tab in FluentCRM.

**2. Open `~/.codex/config.toml`.** If the file or the `.codex` folder doesn't exist, create it. On macOS, press <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>G</kbd> in Finder and type `~/.codex` to get there.

**3. Paste the snippet at the end of the file.** TOML blocks stack one after another, so you can add it below whatever is already there without touching the rest. It looks roughly like this:

```toml
[mcp_servers.fluent-crm]
command = "npx"
args = [
  "-y",
  "mcp-remote",
  "https://your-site.com/wp-json/fluent-crm/mcp",
  "--header",
  "Authorization: Basic <encoded-credentials>"
]
```

**4. Save the file and restart Codex.** Your FluentCRM tools are available in the next session.

>[!Note]
> Always use the snippet FluentCRM generates rather than the example above. Codex has changed its MCP configuration format between versions, and the plugin generates the format that matches the current release.

### Other MCP clients

The **Other** tab gives you a generic configuration block you can adapt for any MCP-compliant client. Point the client at your **Endpoint URL**, pass the `Authorization: Basic` header exactly as generated, and you're connected.

In every case the workflow is the same: fill in the username and password fields, pick the right tab, copy the snippet, and paste it where your AI client expects an MCP server config.

## Step 6: Verify it's working

Open your AI client and ask it something only FluentCRM would know. For example:

> *"Get me the last 5 contacts from CRM."*

The agent calls your endpoint, fetches the data, and replies with the actual contacts (name, email, status, type, source, and more):

![Cursor chat showing the AI returning the last five contacts from FluentCRM in a table](/global-settings/mcp-ai-agent/crm-mcp-9.webp)

If you see real contacts in the reply, your connection is live and authenticated. From here, you can ask the AI to perform any of the actions in the next section.

## What your AI agent can actually do

Once connected, your AI client gets access to **25 FluentCRM tools** (including 4 FluentCampaign Pro tools when Pro is active). You don't call these by name. The AI picks the right tool based on what you ask in plain language. Here's a friendly overview of what's available, grouped by area.

## Contacts

Tools that look up, create, edit, or remove people in your CRM.

- **List contacts** (`fluent-crm-list-contacts`) — Search and filter contacts by name, status, tag, list, or any other field.
- **Get contact** (`fluent-crm-get-contact`) — Pull a single contact's full profile, including custom fields and notes.
- **Upsert contact** (`fluent-crm-upsert-contact`) — Create a new contact, or update an existing one if the email already exists.
- **Bulk upsert contacts** (`fluent-crm-bulk-upsert-contacts`) — Add or update many contacts in one call (handy for imports).
- **Delete contact** (`fluent-crm-delete-contact`) — Permanently remove a contact from your CRM.
- **Add contact note** (`fluent-crm-add-contact-note`) — Attach a note to a contact's timeline.
- **Delete contact note** (`fluent-crm-delete-contact-note`) — Remove a note you no longer need.

**Example prompts:**

- *"Show me all subscribed contacts tagged 'VIP Customer' who joined last month."*
- *"Add a note on Sarah Lee saying she requested a refund on May 1st."*
- *"Update `john@example.com`, set their first name to John and tag them as 'Webinar Attendee'."*

## Lists, tags, and segments

Tools for organizing your audience.

- **Manage tag** (`fluent-crm-manage-tag`) — Create, rename, or delete tags.
- **Manage list** (`fluent-crm-manage-list`) — Create, rename, or delete lists.
- **Apply segments to contacts** (`fluent-crm-apply-segments-to-contacts`) — Add or remove lists and tags for one or many contacts at once.
- **Estimate dynamic segment** (`fluent-crm-estimate-dynamic-segment`) — Preview how many contacts match a dynamic-segment rule before you save it.

**Example prompts:**

- *"How many contacts would match a dynamic segment of subscribed customers who haven't opened an email in 90 days?"*
- *"Remove the 'Trial' tag from everyone who has the 'Paid Customer' tag."*

## Campaigns

Tools for one-off email broadcasts.

- **List campaigns** (`fluent-crm-list-campaigns`) — Browse all campaigns with their status and send dates.
- **Get campaign** (`fluent-crm-get-campaign`) — View one campaign's content, schedule, and stats (sent, opened, clicked).
- **Upsert campaign** (`fluent-crm-upsert-campaign`) — Draft a new campaign or update an existing draft.
- **Change campaign status** (`fluent-crm-change-campaign-status`) — Schedule, send, pause, or archive a campaign.
- **Send test email** (`fluent-crm-send-test-email`) — Send a test version of a campaign to yourself or a teammate.
- **Send email to contact** (`fluent-crm-send-email-to-contact`) — Send a one-off transactional email to a single contact.

**Example prompts:**

- *"Show me the open and click rates for my last 3 campaigns."*
- *"Draft a new campaign called 'June Newsletter' for the Newsletter list and save it as a draft."*

## Automations (funnels)

Tools for your automation funnels and the people enrolled in them.

- **List automations** (`fluent-crm-list-automations`) — Browse every automation funnel and its current status.
- **Get automation** (`fluent-crm-get-automation`) — Inspect a specific automation's trigger, steps, and stats.
- **List funnel subscribers** (`fluent-crm-list-funnel-subscribers`) — See who's currently enrolled in a specific automation.
- **Update contact automation status** (`fluent-crm-update-contact-automation-status`) — Pause, resume, or remove a contact from an automation.

**Example prompts:**

- *"Which contacts are currently in the 'New Customer Welcome' automation?"*
- *"Remove `jane@example.com` from the 'Abandoned Cart Recovery' automation."*

## Email sequences

Tools for your drip-style sequences.

- **List sequences** (`fluent-crm-list-sequences`) — Browse all email sequences.
- **Get sequence** (`fluent-crm-get-sequence`) — View a sequence's emails, timing, and stats.
- **Manage sequence subscribers** (`fluent-crm-manage-sequence-subscribers`) — Enroll or remove contacts from a sequence.

**Example prompts:**

- *"Enroll every contact tagged 'Free Trial' into the 'Onboarding Sequence'."*

## Workspace context

A single tool that gives the AI a snapshot of your CRM, used when it needs orientation.

- **Get CRM context** (`fluent-crm-get-crm-context`) — Returns totals (contacts, campaigns, automations), recent activity, and key metadata. The AI calls this automatically when it needs context about your workspace.

## Security & revoking access

Application Passwords are scoped to a single connection, so revoking one only disconnects that AI client. Your main WordPress login and any other connected apps stay untouched.

- **Revoke an MCP connection**: Go to **Users → Profile → Application Passwords**, find the row by name, and click **Revoke**.
- **Disable MCP entirely**: Turn off the **Enable MCP for AI Agents** toggle on the settings page. The endpoint stops responding to MCP requests immediately.
- **Rotate credentials**: Revoke the old password, generate a fresh one, then re-copy the snippet from the Connect a client panel and paste it back into your AI client.

>[!Tip]
> Give each AI client its own Application Password (one for Cursor, one for Claude Desktop, and so on). That way you can revoke a single client without breaking the others.

## Troubleshooting

- **"Adapter Required" badge still showing after install.** Hard-refresh the settings page. If it persists, go to **Plugins** and confirm **FluentHub** is both installed and **Active**.
- **Tools available shows 0.** Make sure the **Enable MCP for AI Agents** toggle is on. The count refreshes the moment the adapter reconnects.
- **"Unauthorized" error in the AI client.** The username or Application Password is wrong. Re-generate the password (copy it immediately) and paste it back into the Connect a client panel, then re-copy the snippet into your AI client.
- **FluentCRM tools not appearing in the AI client.** Restart the client fully after running the connect command or saving the config file. Closing the window usually isn't enough — quit Claude Desktop from the menu bar or system tray and reopen it.
- **Claude Desktop or Codex shows a "server failed to start" error.** Node.js is probably missing. Run `node -v` in your terminal; if you get "command not found", install the LTS release from [nodejs.org](https://nodejs.org) and restart the client.
- **Claude Desktop loses all its MCP servers after an edit.** `claude_desktop_config.json` has a JSON syntax error, usually a missing or extra comma. Paste the file into your AI agent and ask it to fix the syntax.
- **Connection works locally but not in production.** Confirm the **Endpoint URL** in Status uses the same scheme (`http` or `https`) and domain your AI client is configured with. WordPress Application Passwords also require a reachable REST API at `/wp-json/`.
