---
title: "MCP for AI Agents"
slug: "mcp-for-ai-agents"
category: "global-settings"
order: 0
---

# MCP for AI Agents

FluentCRM Pro ships with a built-in **MCP (Model Context Protocol) server** that lets AI agents like Claude Desktop, Claude Code, Cursor, and OpenAI Codex read and write your CRM data directly — all authenticated through your WordPress credentials, with no third-party proxy involved.

Once enabled, any MCP-compatible AI client can look up contacts, create tags, trigger automations, and perform other CRM tasks as part of a conversation or automated workflow.

>[!Note]
> This feature requires **FluentCRM Pro**. [See what's included →](/how-to-install-upgrade-and-activate-license)

## Access MCP for AI Agents settings

Go to **FluentCRM → Settings → MCP for AI Agents** from your WordPress admin. This is where you enable the feature, install the required adapter, grab your endpoint URL, and generate connection snippets for your preferred AI client.

## Step 1 — Install the WordPress MCP Adapter

FluentCRM's MCP tools rely on the **WordPress MCP Adapter** plugin to expose the endpoint. If the adapter isn't installed yet, the Status section shows an **Adapter Required** notice and an **Install MCP Adapter** button.

![MCP for AI Agents — Adapter Required state](/global-settings/mcp-ai-agent/fluentcrm-mcp-agent-1.webp)

Click **Install MCP Adapter** and WordPress will install and activate the plugin automatically. The page refreshes to the connected state once the adapter is active.

>[!Tip]
> You can also install the adapter manually from **Plugins → Add New**. Search for **WordPress MCP** and install the plugin by WPManageNinja.

## Step 2 — Enable MCP for AI Agents

Turn on the **Enable MCP for AI Agents** toggle. When active, FluentCRM exposes its capabilities through the WordPress MCP Adapter so AI agents can read and write your CRM data with your authorization.

## Step 3 — Check the Status panel

Once the adapter is installed and the toggle is on, the **Status** panel confirms the connection and shows three key details:

![MCP for AI Agents — Connected state with Status and Connect a client panels](/global-settings/mcp-ai-agent/fluentcrm-mcp-agent-2.webp)

| Field | What it shows |
|---|---|
| **Adapter version** | The currently installed WordPress MCP Adapter version (e.g. `0.5.0`). Click **Open Plugins page** to update it. |
| **Endpoint URL** | The MCP endpoint your AI client connects to — typically `https://your-site.com/wp-json/fluent-crm/mcp`. Click **Copy** to copy it. |
| **Tools available** | Total number of MCP tools exposed (e.g. `25`). FluentCRM Pro adds additional tools on top of the base set. |

## Step 4 — Connect a client

The **Connect a client** panel generates a ready-to-paste connection snippet for your chosen AI client. Authentication uses a **WordPress Application Password** — a feature built into WordPress 5.6+ with no extra plugin required.

### Generate an Application Password

1. Click **Open profile → Application Passwords** (shown in the Connect a client panel) to go directly to your user profile.
2. Under **Application Passwords**, type a label (e.g. `Claude Desktop`) and click **Add New Application Password**.
3. Copy the generated password — it only appears once.
4. Return to **MCP for AI Agents** settings, enter your **WordPress username** and paste the **Application Password** into the two fields in the Connect a client panel.

FluentCRM automatically encodes your credentials and fills in the connection snippet.

### Pick your AI client and copy the snippet

Select the tab matching your AI client — **Claude Code**, **OpenAI Codex**, **Cursor**, **Claude Desktop**, or **Other** — then click **Copy snippet** to copy the pre-filled command.

**Example snippet for Claude Code:**

```bash
claude mcp add \
  --transport http \
  fluent-crm https://your-site.com/wp-json/fluent-crm/mcp \
  --header "Authorization: Basic <encoded-credentials>"
```

Paste this command into your terminal and run it. Claude Code registers the MCP server and confirms success:

![Claude Code terminal showing successful MCP server registration](/global-settings/mcp-ai-agent/fluentcrm-mcp-agent-3.webp)

Restart your AI client — FluentCRM's MCP tools appear under its MCP servers list in the next session.

>[!Note]
> The generated snippet already includes your encoded credentials. Keep it private and treat it the same way you would a password. If you need to revoke access, go to your WordPress profile and delete the Application Password.

## What AI agents can do with FluentCRM

Once connected, MCP-compatible agents can perform CRM actions as part of natural-language conversations or automated workflows, including:

- Look up, create, and update contacts
- Apply or remove tags and lists
- Enroll contacts into automations
- Query campaign and automation reports
- And more — the full set of available tools is listed in the **Tools available** count in the Status panel

## Troubleshooting

- **"Adapter Required" badge still showing after install** — Hard-refresh the settings page. If it persists, go to **Plugins** and confirm the WordPress MCP Adapter is both installed and **Active**.
- **Tools available shows 0** — Make sure the **Enable MCP for AI Agents** toggle is on and click **Save**.
- **"Unauthorized" error in the AI client** — Re-generate your Application Password. Make sure you copied it immediately after creation and that there are no extra spaces in the credentials fields.
- **FluentCRM tools not appearing in the AI client** — Restart the client fully after running the connect command. Some clients (like Claude Code) require a complete restart, not just a reload.
