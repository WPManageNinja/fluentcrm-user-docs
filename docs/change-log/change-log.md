---
title: "Changelog"
slug: "change-log"
category: "change-log"
order: 0
---

# Changelog

Stay updated with the latest improvements, new features, bug fixes, and performance enhancements in FluentCRM.

## FluentCRM v3.1.13

_Released on August 24, 2026_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Signs every release with an Ed25519 key; the plugin verifies the signature before WordPress unzips the update (Pro)
- Publishes public MD5 and SHA-256 checksums for every file at checksums.wpmanageninja.com (Pro)

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Internal Changes for Messaging Platforms Features
- Route Policies Improvements for Roles and Permissions

<p class="cl-chip cl-chip--security">🔒 Security</p>

- Fixes edge cases reported in a Patchstack security review (Pro)


## FluentCRM v3.1.10

_Released on July 27, 2026_

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Campaigns start sending immediately instead of waiting for the next cron tick
- Enables multi-threaded email sending by default

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes list and automation report counts on custom database table prefixes


## FluentCRM v3.1.9

_Released on July 27, 2026_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds sticky notes to the automation editor, kept through export, import, and duplication
- Adds FluentCRM contact widget to the FluentCart customer page
- Adds Empty / Not Empty operators for tags, lists, and companies in advanced filters
- Adds new MCP abilities for tags, lists, and contact filters, plus batch contact lookups and automation enrollment data

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Adds search, status filter, and sortable columns to Sequence Subscribers
- Adds more paragraph font presets to the email editor
- Reworks the email sending pipeline for safer parallel workers
- Weekly cleanup now clears stored email bodies for sent, cancelled, and failed emails to free up database space

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes Gmail horizontal scrollbar on the Plain Left email design
- Fixes missing Order By options in the Latest Posts block
- Fixes test email address validation and campaign title uniqueness checks

<p class="cl-chip cl-chip--security">🔒 Security</p>

- Hardens permission checks and input handling for non-admin roles across contacts, notes, imports, and webhooks


## FluentCRM v3.1.8

_Released on June 30, 2026_

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Email sending now respects the configured maximum sending cap

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes abandoned cart totals and provider-specific recovery notices
- Fixes FluentCart abandoned cart coupon fallback
- Fixes FluentCart abandoned cart built-in template smartcodes
- Fixes LearnPress course completion tags not being applied with deprecated hooks
- Fixes reflected XSS issues in admin flows


## FluentCRM v3.1.7

_Released on June 25, 2026_

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Centralizes email sending cap settings
- Syncs automation contact list table UI/UX with other tables
- Adds Created At and Updated At sorting in the funnels table

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes FluentCart checkout subscription opt-in missing in modal checkout
- Fixes FluentCart checkout opt-in selected lists showing IDs instead of names
- Fixes FluentCart purchase history order links opening the wrong admin screen
- Fixes WooCommerce single product email preview button text issue
- Fixes striped Gutenberg table style rendering issue in email
- Fixes email design preset switch resetting global email styles
- Fixes contact growth report list and tag selector search issue
- Fixes email footer disabled state reset issue when using Send Email
- Fixes raw HTML template import not updating the campaign body editor
- Fixes sequence email action menu popover issue
- Fixes missing Contact Type field in CSV import mapping
- Fixes contact profile support section table layout issue
- Fixes Gutenberg editor next button render issue in some cases


## FluentCRM v3.1.6

_Released on June 21, 2026_

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Adds support for months unit for wait times in automation

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes database index migration failed issue


## FluentCRM v3.1.5

_Released on June 15, 2026_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds FluentCart checkout subscription opt-in for assigning lists, tags, and double opt-in from checkout
- Adds global link color picker to the Gutenberg email editor
- Adds CSV export for FluentCRM system logs with date range options
- Adds company quick-create flow in contact addition

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Improves campaign email queue reliability with lock-first sender handling, safer stale email recovery, and loopback fallback
- Improves campaign recipient processing progress UI
- Improves CSP compatibility for public forms and email view-on-browser pages

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes campaign recipient processing skipping contacts during large list chunking
- Fixes RSS block rendering and feed item links in the email editor
- Fixes ##web_preview_url## and other URL SmartCode issues
- Fixes duplicate footer issue in email web preview
- Fixes email template footer disable persistence issue
- Fixes missing footer settings in the classic email editor
- Fixes missing subject and settings step in Gutenberg recurring campaign editor
- Fixes revenue re-sync issue in sent campaign reports
- Fixes WooCommerce dashboard sales stats for modern order stats and HPOS-friendly stores
- Fixes Latest Posts block links to resolve original WP RSS Aggregator feed item URLs
- Fixes Latest Posts block filtered URLs validation before rendering
- Fixes Add Media button issue in Companies Notes & Activities
- Fixes automation label contrast in Dark Mode
- Fixes automation label sync from the label dialog
- Fixes conditional blocks being selectable inside conditional child branches
- Fixes data cleanup delete flow interruption issue
- Fixes Emogrifier autoloader conflict with FluentCart


## FluentCRM v3.1.0

_Released on May 23, 2026_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds WordPress AI support for WordPress 7.x
- Adds SmartCode insert menu in Email Editor footer
- Adds Visual/Text mode switch to custom footer editor
- Adds font family selector in custom footer editor

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Makes Advanced Filter dropdowns searchable
- AI contact summaries now respect locale and language
- Improves reliability and performance in scheduled email processing
- Improves caching and Gutenberg asset loading flow
- Fixes auto AI model issue and adds Gemini 3.5 Flash

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes footer disable toggle issue in editor
- Fixes product email block spacing in preview and sent emails
- Fixes SmartCode URL rendering issues
- Fixes Campaign recipients table column layout issue
- Fixes WordPress admin menu visibility issue
- Fixes core automation trigger registration timing issue
- Fixes Gutenberg editor canvas link color preset issue
- Fixes conditional block suppressing iframe/media-only content
- Fixes invalid Gutenberg block auto-recovery issue
- Fixes Compose navigation button rendering issue during Gutenberg DOM mount
- Fixes Campaign A/B subject validation flow
- Fixes action dropdown placement and multi-select popover item spacing
- Fixes UI issues in Gutenberg editor

<p class="cl-chip cl-chip--other">📋 Other</p>

- Other improvements and bug fixes


## FluentCRM v3.0.7

_Released on May 19, 2026_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds WP Media Library support to Email Editor footer

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Improves Visual Builder template import issue

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes duplication issue in sequences
- Fixes synced pattern saving issue
- Fixes List block RTL rendering issue
- Fixes WooCommerce single product email mobile layout
- Fixes Campaign emails table contact column overflow
- Fixes RTL issues

<p class="cl-chip cl-chip--other">📋 Other</p>

- Other improvements and bug fixes


## FluentCRM v3.0.6

_Released on May 18, 2026_

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes blank page issue
- Fixes template import issue
- Fixes EDD issue
- Fixes email footer issues
- Fixes Recurring Campaign issues

<p class="cl-chip cl-chip--other">📋 Other</p>

- Other improvements and bug fixes


## FluentCRM v3.0.5

_Released on May 15, 2026_

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes Classic Template email issue


## FluentCRM v3.0.3

_Released on May 15, 2026_

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Improves database performance
- Improves SMS SmartCodes
- Improves Advanced Filter and Dynamic Segment issues

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes UI issues
- Fixes WooCommerce button styling issue
- Fixes SmartCode link issues in Gutenberg Button
- Fixes Automation Dark Mode issues

<p class="cl-chip cl-chip--other">📋 Other</p>

- Other improvements and bug fixes


## FluentCRM v3.0.2

_Released on May 14, 2026_

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes issues on some sites


## FluentCRM v3.0.0

_Released on May 14, 2026_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- FluentCRM v3 rebuilt with Vue 3 and Element Plus for a faster, cleaner experience
- Gutenberg-native email builder with device preview
- Reusable Email Patterns added to the email builder
- SMS marketing — Campaigns, Automations, and Direct Message with incoming support
- Frontend Portal introduced
- Redesigned bulk selection experience with more actions
- New dashboard and rewritten reports with charts, widgets, campaign insights, and UTM visibility
- Dark Mode support with persistent admin theme preference
- Write with AI — Generate email content and summaries with AI assistance
- AI Summaries added in Contacts
- MCP for AI Agents introduced
- Global search across CRM records
- Dedicated email preference page, improved docs page, and reorganized settings
- RTL support, drag-and-drop custom fields, and a better importer flow
- FluentCart abandoned cart recovery
- toSend email service integration with bounce handling

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Email sending optimized for better speed, reliability, and deliverability
- Bounce handling is more robust
- Abandoned cart for WooCommerce is more reliable
- Better link tracking, automation reliability, and overall framework scalability

<p class="cl-chip cl-chip--other">📋 Other</p>

- Security hardening, compatibility fixes, UI polish, and many bug fixes


## FluentCRM v2.9.87

_Released on November 24, 2025_

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes Automation Custom Email sending issue


## FluentCRM v2.9.86

_Released on November 21, 2025_

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes Automation issue


## FluentCRM v2.9.85

_Released on November 20, 2025_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds WooCommerce Block-Based Checkout checkbox support

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Optimizes code based on Plugin Check (PCP) recommendations
- Optimizes Automation flow and related database queries
- Improves data sanitization & validation – Plugin Check (PCP)
- Language translation improvements
- Other performance improvements & bug fixes


## FluentCRM v2.9.84

_Released on October 27, 2025_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds Paid Membership Pro purchase history
- Adds new condition for FluentCart Integration

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes Open Rate / Click Rate sorting issue
- Fixes Woo Active Subscription segment issue
- Fixes Woo subscriber resync issue
- Fixes table-prefix issue in the LifterLMS importer
- Fixes duplicate email open tracking and database lock problems
- Fixes Paymattic subscription amount shown in purchase history
- Fixes "Resend Unopened Emails" not working in campaigns


## FluentCRM v2.9.80

_Released on October 14, 2025_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds FluentCart Order & Subscription triggers
- Adds FluentCart purchase history in contact profile
- Adds FluentCart import customers
- Adds Export/Import list
- Adds tag- or list-wise contact growth report

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Adds "Prefix" column to subscribers table
- Enhanced "Add Existing Company" in contact-company search with initial suggestions
- Adds contact's current status column in individual report section inside funnel report
- Group name of contact's custom fields is now editable
- Includes recipient name in mailer send data
- Open Rate and Click Rate columns in Email Campaigns table are now sortable

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes currency issue in funnel report chart
- Fixes individual email display issue for custom email address in funnel report
- Fixes monthly subscriber growth chart to disambiguate months by year
- Fixes custom Reply-To Name / Reply-To Email issue in email header for custom email within a contact's profile section
- Fixes "includes all of" condition issue in automation condition
- Fixes Ab Cart price format issue in email


## FluentCRM v2.9.65

_Released on August 7, 2025_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds tag export and import functionality
- Adds custom fields in email preference forms
- Adds one-click reset of filters for contacts

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Enhanced contact filtering with First Name and Last Name options
- Comprehensive contact import from CSV now includes tags and lists
- Contact status added as an automation condition
- Bulk actions now support selecting all companies
- Pagination support added for improved list navigation
- Email template preview functionality
- Background processing for large contact database exports
- Enhanced Voxel theme integration detection
- Action hooks for dynamic coupon metadata management
- WordPress user meta multiple checkbox values handled in SmartCodes

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes resend functionality issues in failed email delivery
- Fixes form template null error during creation
- Fixes multiple custom-tab display issues in company profiles
- Fixes lifetime purchase value incorrect issue (for Woo partial payment addon)
- Fixes vertical stretching issue with product images in the Woo order table
- Fixes bulk deletion issue in automation funnels
- Fixes email campaign import issues for visual builder
- Other improvements and bug fixes


## FluentCRM v2.9.60

_Released on May 15, 2025_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds built-in templates feature
- Adds list-wise double opt-in email settings
- Adds Voxel "New Order Placed" trigger
- Adds option to send custom emails as transactional email
- Adds custom menu tab functionality on the company profile page
- Adds dynamic segments based on active WooCommerce subscriptions
- Adds Contact Unsubscribe hook for enhanced customization
- Adds bulk add/update contacts REST API endpoint
- Adds tax calculation in the Abandoned Cart items table

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes sorting issue in Purchase History tab in contact profile
- Fixes custom-field multi-line text issue
- Fixes CSV export issue with the contacts filter
- Fixes link tracking issue in Link Stats in campaign details
- Other improvements & bug fixes


## FluentCRM v2.9.50

_Released on April 17, 2025_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds shortcode support for multiple email campaign archives
- Shortcodes are now searchable
- Adds Voxel integration (product purchase history in contact)
- Adds IPv6 compatibility

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- WordPress 6.8 compatibility
- Toggle for column visibility in the automation funnels table
- Unsaved changes warning in block editor
- More translation strings added
- Search functionality for System Logs

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes global footer displaying incorrectly in email previews
- Fixes custom-field values that couldn't be cleared once set
- Fixes custom email footer settings import issue
- Fixes encoding issue in custom field text
- Fixes label search functionality errors
- Fixes fatal error during funnel import process
- Fixes AB Cart tag and list not removing after order completion


## FluentCRM v2.9.48

_Released on March 20, 2025_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds re-apply option for completed sequence
- Tags and lists are now searchable in dynamic selection
- Selectable custom fields now editable & sortable
- Adds Smartcodes for WooCommerce subscription triggers

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Copy email and phone from contact lists
- Tags and lists display in ascending order
- LearnPress course-finished hook updated
- LatestPostBlock now displays all custom post types
- Currency added to Shipping and Tax Total
- Adds filter to manage new bounced email
- Tags and subscriber lists now sorted in ascending order
- Adds operator-type selection for taxonomy filters in LatestPost block

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes padding, margin, and line-height issues inside Column block
- Fixes dynamic coupon amount issue with existing template
- Fixes excerpt-length issue in LatestPostBlock
- Fixes UpdateContactProperty action float subtraction issue
- Other improvements & bug fixes


## FluentCRM v2.9.45

_Released on February 24, 2025_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds Subscription Cancelled trigger (Fluent Forms)
- Adds Subscription Payment Received trigger (Fluent Forms)
- Adds FluentForm Subscriptions widget in contact profile
- Adds Update Custom Fields using bulk actions
- Adds filter option for failed emails
- Shows non-recurring memberships in MemberPress widget
- Adds Woo Subscription Cancelled trigger
- Adds option to sort custom fields
- Adds Wishlist Membership widget in contact profile

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Slug retains one character even after the title is cleared
- Displays which user sent the campaign
- All tables with adjustable column widths
- Redesigned the Addons section with improved UI/UX
- Adds tooltip for Skipped AB Cart status
- Adds button to copy the bounce handler URL

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes custom numeric field filter issue
- Fixes WooCommerce coupon discount amount not working
- Other improvements & bug fixes


## FluentCRM v2.9.40

_Released on January 22, 2025_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds quick search in Automation Actions, Benchmarks, Goals
- Adds MemberPress Subscriptions widget
- Adds Export/Import Email Campaign
- Adds Export/Import Email Campaign Contacts
- Adds Brevo (ex-Sendinblue) bounce handler
- Adds support for Polish characters in slugs (Tags/Lists)

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Contact filtering options: Never Clicked / Never Opened
- Quick preview added in email templates
- Post Image type for Latest Post block
- Current date in Update Contact Property action in Automation
- WooCommerce product image styling (`order_items_table`)
- Back button for campaign archives
- Restart section added in "Remove From List" trigger
- Adds "Check All" option to contact exporter
- More filters in email campaign archive
- Adds "Select All" tag/list option while importing contacts
- UI improvements (Automation label color)
- Smoother one-click unsubscribe
- Coupon systems support for multi-vendor / extensions alongside WooCommerce
- Adds Gravatar & fallback compliance for contact avatar

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes Spammed/Complained status issue in bounce handler
- Fixes theme colors not displaying in emails
- Fixes pagination for recurring campaign emails
- Fixes Sync WooCommerce order (trashed order) issue


## FluentCRM v2.9.31

_Released on December 27, 2024_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds email preview in campaigns

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Ab Cart item table responsive
- Replaces Google Fonts with Bunny
- User delete option synced between compliance settings and general settings

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes Ab Cart recovered revenue issue
- Fixes campaigns revenue report issue
- Fixes Latest Post block random sort issue
- Fixes table alignment issue in blocks
- Fixes number values in the "Text" custom field misinterpreted as date
- Fixes variable button size not working in block editor
- Fixes MailChimp migration import limitations
- Fixes theme & default color issue in editor


## FluentCRM v2.9.30

_Released on December 09, 2024_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds Labels in Automations & Campaigns
- Adds WordPress date format support in custom field
- Adds Test Outgoing Webhook functionality

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- UI enhancements for Lists & Tags popover
- Corrected date handling
- Auto-Mapping CSV Fields with custom fields
- Better SQL queries
- Users now searchable in manager settings

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes default link color issue while editing the email template
- Fixes default values not working for Smartcode (`manage_subscription_html`, `unsubscribe_html`)
- Fixes ordering in dashboard chart
- Fixes campaign revenue report issues
- Fixes URL decode issue in A/B Testing for campaigns
- Fixes some deprecation warnings
- Other improvements & bug fixes


## FluentCRM v2.9.25

_Released on October 16, 2024_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds Export/Import recurring campaign
- Adds Smart Code support in Custom Email Address field
- Adds Customer Profile button for EDD
- Adds internal description to the funnels page

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Product Image & Currency added in Ab Cart Details/Email
- Multiline custom field
- UX in Latest Post block
- Adds tax row in Abandoned Cart
- Abandoned Cart Details responsiveness
- Sorting option in Purchase History in contact for Woo/EDD
- Changing product now possible from block sidebar

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes URL encoding issue
- Fixes Automation Wait Delay issue
- Fixes Dashboard Chat dates order
- Fixes Email Editor letter case
- Fixes Company Custom Field CSV import issue
- Fixes Company Custom Field issue while creating
- Fixes Smart Code `wp.url` issue
- Fixes Ab Cart Smart Code issue
- Fixes MemberPress contact import issue
- Other improvements & bug fixes


## FluentCRM v2.9.23

_Released on August 19, 2024_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds WooCommerce Product Filter by Variation
- Adds Custom Field to Wait Time (Automation)
- Adds keyboard shortcut
- Adds Company Details Smart Codes

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes Dynamic Segment contact count
- Fixes email editor button outline issue
- Fixes Revenue Report not displayed in the campaign panel
- Other improvements & bug fixes


## FluentCRM v2.9.20

_Released on August 12, 2024_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds Abandoned Cart (WooCommerce)
- Adds 10+ built-in automation templates
- Adds FluentSMTP logs to the Emails section of profile
- Adds email filter to the Emails section of profile

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- UI of the custom fields
- Other improvements & bug fixes

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes email editor issue
- Fixes ActiveCampaign import contacts issue
- Fixes Event Tracking fetch issue
- Fixes sending double opt-in email
- Fixes webhook issue
- Fixes automation twice-run issue


## FluentCRM v2.9.0

_Released on May 29, 2024_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds Dynamic Coupon creation (WooCommerce)
- Adds Company Module custom field creation
- Improves Company Module filtering
- Adds Advanced Contact Segmentation based on Industry & Type
- Adds Create Tags & List on the fly within contact details
- Adds Global Automation Activities within Automation panel

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Performance: Merged API requests, better CSV import

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes WP user merge code for multiple password reset links
- Fixes issues with Thrive Suites plugins
- Fixes CSV uploads for different PHP versions


## FluentCRM v2.8.45

_Released on March 01, 2024_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds WooCommerce Subscription Expiration trigger
- Adds WP user-role-based segmentation for Advanced Filters
- Adds BuddyBoss / BuddyPress tags for invites and group membership

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Improves email-sending database queries
- Elementor Form integration improvement
- Security: Company logo auto-fetching file-type check added

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes WooCommerce address-field syncing issue
- Fixes LearnDash Course SmartCode issue


## FluentCRM v2.8.44

_Released on February 06, 2024_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds Campaign Email shareable link
- Adds new SmartCodes – WP User

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Improved Action Scheduler for email sending
- Improved contact profile API
- Improved data clean-up tool
- Improved security on auto-login for Smart Links
- Bug fixes and improvements


## FluentCRM v2.8.43

_Released on January 30, 2024_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds Auto-Login option with Smart Links
- Adds all post types for recurring campaign conditions

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Improved WooCommerce orders history and sync
- Improved email campaign analytics

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes template import issue


## FluentCRM v2.8.42

_Released on January 28, 2024_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds support for WooCommerce HPOS integration

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Improves LiteSpeed Cache compatibility

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes customer's order history issues


## FluentCRM v2.8.40

_Released on January 26, 2024_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds Multi Threader email – send emails faster
- Adds Custom Contacts Fields grouping
- Adds event tracking for contacts
- Adds one-click List-Unsubscription header
- Adds System Logs for debugging
- Adds new Goal/Benchmark for SureCart (Pro)
- Adds new automation trigger: Paid Membership Pro – Membership Cancelled (Pro)
- Adds Postal Server support for email bounce handling

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Latest Post block improvement
- Scheduled jobs improvement
- Webview for email campaign improvements and privacy improvements
- Other improvements & bug fixes


## FluentCRM v2.8.34

_Released on November 14, 2023_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds One Click Unsubscribe option in compliance features
- Adds contact import with company name

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- ActiveCampaign import improvement (Thanks to WPFusion)

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes image upload compatibility with WordPress 6.4


## FluentCRM v2.8.33

_Released on November 03, 2023_

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes spacing & font-size issue
- Fixes syntax issue in Recurring Email History
- Fixes email-open performance issue
- Improvements & bug fixes on both Global & Custom Footer
- Other improvements & bug fixes


## FluentCRM v2.8.32

_Released on October 26, 2023_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds WooCommerce HPOS compatibility
- Adds Import Permission to permission UX

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Color improvement in Automation
- UI improvement of Latest Post block in email builder

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes conditional checks for LearnDash groups and items issue
- Fixes restart issue in UserLogin trigger


## FluentCRM v2.8.31

_Released on September 10, 2023_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds Enable/Disable AI integration for visual builder (in Experimental Settings)

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Replaces Google Fonts with BunnyCDN font

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes webhook issue


## FluentCRM v2.8.30

_Released on September 05, 2023_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds new trigger: Company Added to Contact
- Adds new trigger: Company Removed
- Adds Company-specific Automation Actions
- Adds Custom Email Preference Management page
- Adds new trigger: Contact Created
- Adds Duplicate Segment / Export Contacts

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Improvement on Company module
- Navigation and UI improvements
- Other improvements including translatable strings, permissions in CRM Managers
- Other bug fixes


## FluentCRM v2.8.20

_Released on July 18, 2023_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds ability to delete contact profile picture
- Adds Company attach/detach

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Campaign email scheduling and sending speed increased
- UI improvements
- Confirmation prompt for email campaigns
- Double opt-in email pre-header
- Integration improvements

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes bug fixes & improvements


## FluentCRM v2.8.02

_Released on June 12, 2023_

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Use secure hash instead of MD5 for the subscription preference page (Resolved: CVE-2023-1430). Thanks to Karl Emil Nikka for reporting the issue.


## FluentCRM v2.8.01

_Released on April 17, 2023_

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes contact filter issue
- Fixes server time UTC issue on the admin footer
- Quick-fix update – no other features added


## FluentCRM v2.8.0

_Released on April 14, 2023_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds Company module
- Adds new FluentCRM navigation experience
- Adds WooCommerce Subscription triggers (Pro)

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- More detailed contact overview
- Massive UI enhancements
- Adds ability to check email preview for specific contacts
- Improvements and bug fixes


## FluentCRM v2.7.40

_Released on March 01, 2023_

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- List & Tag selection UI improved
- Campaign email activity improvements

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes email conditional sections issues
- Fixes redirecting issues for non-Unicode characters
- Fixes import issue for Restrict Content Pro


## FluentCRM v2.7.1

_Released on February 06, 2023_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds new SmartCode for latest post title and Custom Date Format
- Adds inline doc link for Smartcodes

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Adds Elastic Email bounce handler


## FluentCRM v2.7.0

_Released on January 23, 2023_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds new developer documentation
- Adds use of SmartCode on activity notes from automation

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Improvements in contact filtering
- Refactored plugin and performance improvements

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes theme color not showing in the Gutenberg editor
- Fixes image alignment issue in the block editor
- Fixes email template saving issue
- Fixes unsubscribe link not working in the double opt-in confirmation page
- Fixes multiline custom field not working in the email body
- Enhancements and bug fixes


## FluentCRM v2.6.52

_Released on November 24, 2022_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds Conditional Sections on visual builder
- Adds Tag-Based Redirect after Double Opt-in (see Settings → Double Opt-in)
- Adds Template Import / Export
- Adds Save as Template from campaign screen

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes email preview issue on campaign review screens
- Fixes Date/Time filter issue for custom fields


## FluentCRM v2.6.51

_Released on November 17, 2022_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds email audit for invalid links in email editor
- Adds brand-new drag-and-drop email builder
- Adds in-page documentation for top-level feature pages

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Integration improvements (Woo, BuddyPress)
- UI & UX improvement across the full application
- Better mobile-optimized screens

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes user registration automation trigger issues


## FluentCRM v2.6.0

_Released on October 20, 2022_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds experimental email archives in the frontend (Pro)
- Adds email campaign, sequence, and automation activity conditions on contact advanced filters (Pro)
- Adds new WooCommerce/EDD/LearnDash/LifterLMS conditions (Pro)
- Adds new trigger: Birthday Automation (Pro)
- Adds new action: Remove WordPress User Role
- Adds new trigger: Leave from a Course (LearnDash)
- Adds experimental features for faster contact navigations and date formats

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Faster email editor
- Improved email sequences
- Improvement in automation goals
- Select and modify email template blocks in bulk
- UI & UX improvements
- Bug fixes and minor improvements


## FluentCRM v2.5.95

_Released on August 19, 2022_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds revenue metrics in email sequences
- Adds more conditions in advanced filtering (Pro)
- Adds enable/disable auto sync for integrated tools
- Adds email preference management shortcode
- Adds detailed CRM reporting (Pro)
- Adds pre-populate Fluent Forms data from FluentCRM

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Advanced wait action in automation
- Adds restart automation to (almost) all triggers
- Sequence filtering for automation
- View revenue for specific emails
- Create Fluent Support tickets from automation
- Split test automation scenarios (Pro)
- Bug fixes & improvements


## FluentCRM v2.5.93

_Released on July 07, 2022_

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Improved scheduled campaigns
- Huge performance improvement
- Improved contact imports

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes country name filters
- Fixes WP user sync issue
- Fixes contact exclude from campaign
- Fixes WP Ultimo conflict issue


## FluentCRM v2.5.9

_Released on May 27, 2022_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds WooCommerce Subscriptions integration
- Adds EDD Software Licensing integration
- Adds MemberPress contact importer
- Adds export contacts by advanced filters
- Adds Export/Import email sequences
- Adds new bulk action: send double opt-in
- Adds manual actions: delete contact, add a contact to automation & email sequences
- Adds fetch profile picture from Fluent Forms entry
- Adds Smartcode/Merge Tags transformer

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Improvements and bug fixes


## FluentCRM v2.5.7

_Released on March 07, 2022_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds merge tags for WooCommerce, AffiliateWP, LearnDash, and LifterLMS
- Adds option to add contacts to an automation
- Adds option to add contacts to an email sequence

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Integration improvements
- UI improvements

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes issue with LearnDash events
- Fixes campaign sending issue for some servers
- Fixes the double opt-in issue


## FluentCRM v2.5.6

_Released on February 28, 2022_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds Auto Migration from ActiveCampaign, MailerLite, MailChimp, Drip, ConvertKit

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Improved contact filtering
- Integration improvements
- Improved UI

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes CSV import issue for duplicate emails
- Fixes email builder issues for the latest version of WP


## FluentCRM v2.5.5

_Released on February 07, 2022_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds Name Prefix filter to advanced filter

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Bulk Actions improvements for contacts
- UI & UX improvements

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes WooCommerce data sync and automations issues
- Fixes EDD advanced filter and automation triggers
- Fixes email sequence issues
- Fixes webhook issues


## FluentCRM v2.5.4

_Released on February 06, 2022_

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- (HOT FIX) Fix Multiple Automation Trigger for Woo and EDD


## FluentCRM v2.5.3

_Released on February 01, 2022_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds compatibility with WordPress 5.9

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Improved email builder
- Automation improvement
- Tagging improvement
- UI & UX improvement in several screens across the app

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes CSV import duplicate-data issue
- Fixes advanced filters for Woo, EDD, LearnDash, and LifterLMS
- Fixes JSON issue for HTTP Action


## FluentCRM v2.5.1

_Released on January 28, 2022_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds Micro-target contacts
- Adds targeted email campaigns
- Adds better dynamic segments
- Adds automation with advanced conditional logic
- Adds synchronization with WooCommerce, EDD, LifterLMS, and LearnDash data
- Adds import for EDD & WooCommerce contacts by product purchases
- Adds customer summary at a glance
- Adds advanced reporting (for WooCommerce, EDD, LifterLMS, and LearnDash)
- Adds enroll/remove students and add/remove memberships, automatically
- Adds automate emails for trial products
- Adds new goal: Email Sequence Completed
- Adds Beaver Builder subscription form integration

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Bug fixes & improvements


## FluentCRM v2.3.1

_Released on October 25, 2021_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds BuddyBoss/BuddyPress integration
- Adds ThriveCart integration (Addon)
- Adds LearnPress integration
- Adds dynamically import existing users from LMS/Membership/BuddyBoss
- Adds persistent contact page

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Email editor improvement
- Dynamic segment improvement and bulk operations
- Automation funnel improvement
- Integration improvements
- ... and so many new features and improvements


## FluentCRM v2.2.0

_Released on July 20, 2021_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Whole new dashboard design
- Adds lots of WooCommerce integrations
- More integrations added with LifterLMS, LearnDash, and TutorLMS
- Adds outgoing webhook in automation
- Adds WooCommerce conditional block and new actions and triggers
- Adds User Registration action block to automation
- Adds plain text email template
- Adds Fluent Forms Force Subscribe feature
- Adds user-role-based tagging feature
- Adds Redirection Option after Double Opt-in
- Adds option to remove contacts on WP user delete
- Adds detailed purchase history from WooCommerce on contact screen
- Adds webhook bounce handler with all major email service providers

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Custom field improvements
- Email builder block improvements


## FluentCRM v2.0.4

_Released on June 03, 2021_

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Minor update (no new feature)
- UI color issue fixed

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes webhook issue for some providers
- Fixes End Funnel issues
- Fixes CRON issues for some specific server
- Fixes Fluent Forms conditional issues


## FluentCRM v2.0.3

_Released on May 07, 2021_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds Selected Days to Sending Emails for Email Sequences

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes CRON jobs issues
- Fixes image alignment issue for emails


## FluentCRM v2.0.2

_Released on May 03, 2021_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds Conditional Content block for Oxygen Builder
- Adds Restart Automation
- Adds color codes for automation blocks
- Adds new trigger: WooCommerce Product Refund
- Adds notes and activities action block
- Adds built-in documentation page

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Email sending speed improvement
- Lots of improvements and fixes


## FluentCRM v2.0.1

_Released on March 31, 2021_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds contact property update from automation
- Adds WooCommerce Subscription box on checkout page

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Automation UI improvement

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes CSV issue


## FluentCRM v2.0.0

_Released on March 30, 2021_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds Multi-Path Conditional Automation Funnel
- Adds new automation triggers and blocks
- Adds CRM access roles
- Adds more analytics data
- Adds share an automation
- Better RTL support and fully translatable
- Adds contact data syncing with WordPress users

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- SmartLinks improvements
- Automation funnels improvement
- Email builder improvements
- Email sending speed improvement
- Overall UI and REST API improvements

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes RTL issues
- Fixes CSV import issues


## FluentCRM v1.1.93

_Released on February 05, 2021_

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- PHP 8.0 compatibility

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes setup wizard


## FluentCRM v1.1.92

_Released on January 25, 2021_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds Post/Page block for dynamic content based on tag or login state
- Adds feature to delete old logs
- Adds all emails activity page
- Adds FluentSMTP support

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- UI improvement

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes issue on dynamic smart tags on the email subject


## FluentCRM v1.1.91

_Released on November 27, 2020_

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Prepare for WordPress 5.6
- Editor improvement

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes List Action issue
- Custom HTML parser for email campaign fix


## FluentCRM v1.1.90

_Released on November 23, 2020_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds inline contact tagging with Fluent Forms
- Adds rename campaign from any campaign screen

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Email builder improvement
- Better email and automation reporting from contact profile
- Better automation visibility

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes automation trigger-related bug


## FluentCRM v1.1.80

_Released on November 19, 2020_

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes short URL redirect issue
- Fixes Tag Automation Trigger
- Fixes automation action issues


## FluentCRM v1.1.7

_Released on November 14, 2020_

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Contact search improvement
- Automation improvement
- User data endpoint improvements
- Bounce handler improvement
- Internal improvements


## FluentCRM v1.1.5

_Released on October 29, 2020_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds email campaign duplication
- Adds global reply configuration

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Email builder improvement
- Automation funnel improvement
- Improved Amazon SES bounce handler


## FluentCRM v1.1.4

_Released on October 25, 2020_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds CRM profile link in Edit User screen

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Funnel reporting improvement
- UI improvements

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes issue for double opt-in + automation trigger


## FluentCRM v1.1.3

_Released on October 23, 2020_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds RTL support
- Adds Duplicate Automation feature
- Adds more hooks for 3rd-party developers

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Improvement on big lists for email sending

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes funnel benchmark issue
- Fixes bulk email sending memory issue
- Fixes Oxygen Builder compatibility issues


## FluentCRM v1.1.2

_Released on October 16, 2020_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds search on emails
- Adds more API endpoints

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Overall performance improvement

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes funnel automation with Fluent Forms
- Fixes segmentation selection
- Fixes custom fields mapping
- Fixes double opt-in (now controlled)


## FluentCRM v1.1.1

_Released on October 09, 2020_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds step save on email campaign

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Massive optimization for large lists like 300K
- Unsubscribe page improvement

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes API namespace
- Fixes WPFusion & MailOptin issue


## FluentCRM v1.0.8

_Released on October 07, 2020_

<p class="cl-chip cl-chip--new">✨ Newly Added</p>

- Adds custom field mapper with Fluent Forms
- Funnel renamed to Automations

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Internal improvements

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes unsubscription issue
- Fixes language text-domain


## FluentCRM v1.0.6

_Released on October 02, 2020_

<p class="cl-chip cl-chip--improve">🚀 Improvements</p>

- Improved Tools page

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes Double Opt-in issues


## FluentCRM v1.0.3

_Released on October 01, 2020_

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes Tag creation title
- Fixes form creation wizard
- Fixes setup wizard


## FluentCRM v1.0.1

_Released on October 01, 2020_

<p class="cl-chip cl-chip--fix">🐞 Bug fixes</p>

- Fixes a few typos
- Fixes list issue in the funnel


## FluentCRM v1.0.0

_Released on September 29, 2020_

🎉 Initial Release

- Initial Launch
- 1482 git commits so far
- 1982 cups of coffee (just kidding, we lost count)
- Work of 1 year + 5 developers
- Let's make WordPress great!

