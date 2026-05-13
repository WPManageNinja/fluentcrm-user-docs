# Voice & Tone

## The One-Sentence Description

**FluentCRM docs read like a friendly senior colleague walking you through the product — confident enough to be brief, warm enough to make you feel capable, precise enough that you never get stuck.**

## Voice Pillars (priority order)

1. **Clear before clever** — never sacrifice precision for personality.
2. **Active over passive** — "FluentCRM sends the email" not "the email will be sent".
3. **Second person** — always "you", never "the user" or "users".
4. **Confident, not boastful** — show capability through clarity, not adjectives.
5. **Conversational, not casual** — contractions yes, slang no.
6. **Concrete over abstract** — show real examples, not hypothetical placeholders.

## Voice Spectrum

```
ACADEMIC ←——————— FLUENTCRM ———————→ MARKETING COPY
formal       conversational-precise        promotional
```

You are NOT writing:
- A research paper (too formal)
- A press release (too promotional)
- A cookbook recipe (too terse)

You ARE writing:
- The kind of email a senior teammate sends on Slack when you ask "how do I do X?"

## Tone Rules — DO

### Use contractions
- "you'll", "you're", "you've", "you'd"
- "don't", "won't", "can't", "isn't"
- "it's", "we'll", "let's"

### Use rhetorical questions sparingly
At the start of a section to engage the reader:
- *"Ready to build? Starting a new automated workflow is incredibly easy."*
- *"Prefer to build your own custom workflow? Click the **Start From Scratch** button."*

Max once per major section.

### Use plain-language analogies
When introducing technical concepts:
- *"Triggers ('When this happens...'): The starting line."*
- *"Conditionals ('Check if...'): These are the crossroads of your funnel."*
- *"Goals / Benchmarks ('Jump ahead if...'): These are smart shortcuts."*

### Use em dashes for clarification
- *"Patterns are full Gutenberg blocks — once inserted, you can edit any text, swap images, or change colours."*
- *"FluentCRM is opinionated about deliverability — it will not let you send to bounced contacts."*

### Use parenthetical examples
- *"a personalized greeting (for example, **Good morning** with your name)"*
- *"the categories on the left (CRM, WooCommerce, WordPress, etc.)"*

### Use specific names, not placeholders
- ❌ *"Select a list"*
- ✓ *"Select a list (for example, 'Newsletter Subscribers')"*

### Front-load value
First sentence of every doc and section answers **"why does this matter?"**:
- ❌ *"This article will guide you through the process of using Email Patterns."*
- ✓ *"Email Patterns let you save reusable design blocks — header, hero, footer — so you don't rebuild them for every campaign."*

## Tone Rules — DON'T

### Banned phrases

| Forbidden | Why | Use instead |
|-----------|-----|-------------|
| "This article will guide you through..." | filler opener | Just start with the value |
| "Hopefully now you understand..." | weak closer | "If you have questions, [contact support]" |
| "Don't hesitate to..." | weak closer | "[Contact support](url) if you have questions." |
| "follow the article accordingly" | meaningless filler | delete entirely |
| "the detailed information about" | wordy | "details about" / cut |
| "the detailed explanation is given below" | passive + filler | "Here is each [thing]:" |
| "is given below" | passive | name what's coming |
| "as below screenshots" | broken grammar | "as shown below" / "in the screenshots" |
| "in detail" / "in details" | filler | delete |
| "kindly" | overly formal | delete |
| "It is necessary to..." | passive + stiff | "You need to..." |
| "you may need to" | hedging | "you might want to" or "you can" |
| "Now, you will need to..." | wordy | "Now," + verb |
| "very", "really", "incredibly" | weak intensifiers | delete or replace with specific descriptor |
| "various", "several" | vague | name them or use specific count |
| "quite", "fairly", "rather" | hedging | delete |

### Don't be promotional
This is a manual, not a sales page. Never write:
- *"the powerful Email Patterns feature"* → just "Email Patterns"
- *"FluentCRM's industry-leading deliverability"*
- *"the amazing automation builder"*

Show value through clarity, don't tell the reader it's good.

### Don't over-encourage
One *"Ready to build?"* per page is energy. Three is annoying.
Avoid: "Awesome!" "Great!" "Easy!" / excessive exclamation points / "You're all set!" closing on every page.

## Sentence Rhythm

Vary sentence length. Mix short with medium. **Avoid long compound sentences with multiple clauses.**

Bad rhythm (one long sentence):
> *"To learn how you can use this WooCommerce Subscription Triggers feature in your FluentCRM, follow the steps with screenshots below by going to the Automation section from the FluentCRM Navbar and clicking on the + New Automation button to start the process."*

Good rhythm (broken into clear steps):
> *"WooCommerce Subscription Triggers let you automate flows for renewals, cancellations, and failed payments.*
> *Open **FluentCRM → Automations** and click **+ New Automation** to start."*

## Reading-Level Target

- Aim for **grade 8–10** reading level
- Average sentence length: **15–20 words**
- Maximum sentence length: **30 words** (split anything longer)
- Use shorter words: "use" not "utilize", "help" not "assist", "show" not "display"

---

## Sentence-Level Style (Phrasing Patterns)

### Opener for a settings/feature page
```
[Feature Name] [does X] — [why the user cares].
```
- *"Email Patterns let you save reusable design blocks so you don't rebuild common sections every time you write a campaign."*
- *"Conditional actions branch your automation into different paths based on contact data."*

### Opener for a how-to page
```
[Brief result statement]. [Why or context, optional]. [Where to start].
```
- *"This guide walks you through importing your contacts from a CSV file."*
- *"Smart Codes pull dynamic data into your emails — a contact's first name, a custom field, or a smart link — so every email feels personal."*

### Step instruction (preferred form)
```
1. Go to **FluentCRM → [Location]**.
2. Click **[Button Name]**.
3. [Result/what happens next].
```

### Option list with bold labels
```
- **[Option Name]:** [What it does in one short sentence.]
- **[Option Name]:** [What it does.]
```

### Cross-reference (in-context, never "click here")
- ✓ *"Read the [Email Sequence guide](/email-sequence) to learn how sequences work."*
- ✓ *"For the full list of triggers, see the [automation triggers reference](/fluentcrm-automation-triggers)."*
- ✗ *"Click [here](/email-sequence) to learn more."*
- ✗ *"To learn more, [click here](/email-sequence)."*

### Closing the action loop
- *"Click **Save Settings** to apply your changes."*
- *"Click **Save Pattern** in the top-right corner."*

### "What happens next" sentence
After describing a button click, tell the user what they'll see:
- *"Click **+ Create Automation**. A modal opens with template categories on the left."*
- *"Click **Save**. The page reloads and your changes appear in the table."*

## Verb Choice

| Action | Use | Don't use |
|--------|-----|-----------|
| Click a button | **click** | press, tap, hit |
| Choose from a list | **select** | choose, pick |
| Type into a field | **enter** / **type** | input, fill in |
| Go to a screen | **go to** / **navigate to** / **open** | head over to, visit |
| Toggle on/off | **enable** / **disable** | turn on, switch on |
| Find a file/option | **find** / **locate** | look up, search for (for UI) |
| Make changes stick | **save** / **apply** | submit, commit |

## Pronoun & Reference Style

- **"Contacts"** — for people in your list (not "subscribers" unless status matters, not "users" unless WordPress users are meant)
- **"FluentCRM"** — never "the plugin", "the system", "the application"
- **"Your site" / "your WordPress site"** — when context isn't clear

---

## Tone Examples (Side-by-Side)

### Example 1: Doc Opener
❌ *"This article will provide detailed information about all Primary Conditional Actions of FluentCRM Automation."*
✓ *"Conditional actions branch your automation into different paths based on contact data. Use them to send the right message to the right segment at the right time."*

### Example 2: Section Intro
❌ *"The detailed explanation of all the CRM Triggers is given below –"*
✓ *"Here is each CRM trigger and when it fires:"*

### Example 3: Step Instruction
❌ *"Once you select your desired trigger, click the Continue button, and put a title under the Internal Label field for this automation funnel so that you can easily find it later."*
✓ *"Select a trigger and click **Continue**. Give your automation a name in the **Internal Label** field — this helps you find it later in the dashboard."*

### Example 4: Passive Construction
❌ *"Once you are done, click the Save Settings button to save all your changes."*
✓ *"Click **Save Settings** when you're done."*

### Example 5: Filler Phrasing
❌ *"To learn how you can use this WooCommerce Subscription Triggers feature in your FluentCRM, follow the steps with screenshots below –"*
✓ *"Here's how to set up subscription triggers:"*

### Example 6: Promotional Tone
❌ *"FluentCRM provides a powerful and amazing automation builder that lets you create incredible workflows."*
✓ *"FluentCRM's automation builder lets you build workflows visually."*

### Example 7: Vague Reference
❌ *"To learn more, [click here](/email-sequence)."*
✓ *"Read the [Email Sequence guide](/email-sequence) for the full setup."*

### Example 8: Closing
❌ *"Hopefully, now you clearly understand FluentCRM Advanced all reports. Don't hesitate to get in touch with us if you have any queries."*
✓ *"If you have questions, [contact support](https://wpmanageninja.com/support-tickets/)."*

### Example 9: Empty Alt Text
❌ `![](/automation-funnels/primary-automation-actions/action-1.webp)`
✓ `![Apply Tag action settings panel with tag selector dropdown open](/automation-funnels/primary-automation-actions/action-1.webp)`

### Example 10: Pro Notice
❌ *"> **Remember**, to use all the **Conditionals**, you need to have FluentCRM Pro Plugin installed and activated in your WordPress Site."*
✓ *"> **Note:** This feature requires **FluentCRM Pro**. [See what's included →](/how-to-install-upgrade-and-activate-license)"*

### Example 11: List of Options
❌
```
Here, you will find two settings options. These are
- Enable Company Module for Contacts: Enable this to unlock the Company Module
- Try to get company logo automatically: Enable this to fetch the company logo
```

✓
```
You'll see two settings:

- **Enable Company Module for Contacts:** Unlocks the Company Module inside the Contacts dropdown.
- **Try to get company logo automatically from the given website URL:** Fetches the company logo from the website URL when you create a new company record.
```

### Example 12: Generic Section Headers
❌ *"## All the Things"*
✓ *"## Available Triggers"*

### Example 13: Wordy Description
❌ *"This option allows you to be able to specify the various different settings that can be configured for the email."*
✓ *"This option configures the email settings."*

### Example 14: Mid-Sentence Capital
❌ *"As an Email Marketing Application, It is necessary to..."*
✓ *"FluentCRM is an email marketing application, so it needs your business details for emails."*

### Example 15: Redundant Phrasing
❌ *"a logo of the business company"*
✓ *"a company logo"*
