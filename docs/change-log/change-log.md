---
title: "Changelog"
slug: "change-log"
category: "change-log"
order: 0
---

# Changelog

\= 3.0.0-rc.2.1 (Date: April 23, 2026) =

-   Hotfix: Frontend Portal rendering fix for standalone slug pages
-   Hotfix: AI Writing connection test for selected providers
-   Improvement: Pro license activation flow polish
-   Other minor stability fixes

\= 3.0.0-rc.2 (Date: April 23, 2026) =

-   New: Frontend Portal introduced (Pro) – `[fluent_crm]` shortcode and standalone page modes for a logged-in user-facing portal
-   New: Bulk-action floating bar for Contacts list with refreshed selection UI
-   Improvement: Contact list pagination supports up to 600 contacts per page
-   Improvement: Refined Email Patterns library, Patterns can be inserted/saved directly from the Gutenberg block editor
-   Improvement: AI Writing flow polish (provider switching, error states)
-   Improvement: Email sending speed and reliability
-   Fixed: Various v3 RC issues reported during the beta cycle

\= 3.0.0-rc.1 (Date: April 2026) =

-   New: Reports rewritten with new charts, widgets, and improved campaign insights
-   New: UTM details now visible inside campaign details after sending
-   New: Twilio incoming webhook support for inbound SMS handling
-   Improvement: Dashboard widgets for Active Automations, Recommendations, Recent Campaigns, and Sales filter
-   Improvement: Compliance settings page made first-class with `anonymize_ip`, `email_open_tracking`, `email_click_tracking`, `personal_data_export`, and `one_click_unsubscribe` toggles
-   Improvement: System Admin Tools area split into Cron Job Monitor, Data Cleanup, and CRM Database Reset routes

\= 3.0.0-beta.10 (Date: April 2026) =

-   New: UTM visibility added to campaign details / link stats post-send
-   Improvement: Email Patterns import/export
-   Improvement: Frontend Portal profile dropdown with branding controls (Pro)
-   Fixed: Edge cases in Dynamic Segments rendering

\= 3.0.0-beta.8 (Date: April 2026) =

-   Improvement: Reports area polish – chart labels, monthly grouping, currency formatting
-   Improvement: AI Writing settings page (`/settings/ai_settings`) with provider selection (OpenAI, Claude, Gemini)
-   Improvement: Drag-and-drop reorder for Custom Contact Fields builder
-   Fixed: Dark Mode persistence per user

\= 3.0.0-beta.5 (Date: March 2026) =

-   New: toSend email service integration and bounce webhook (`fluent-crm/v2/public/bounce_handler/tosend/...`)
-   New: Dynamic Segments menu item under Contacts (Pro segment types)
-   Improvement: Global Search powered by `OptionsController::search()` with scopes for subscribers, campaigns, automations, companies, and notes
-   Improvement: Admin bar global search entry

\= 3.0.0-beta.3 (Date: March 2026) =

-   New: SMS Smartcodes available across SMS campaigns and automations
-   New: Twilio incoming SMS handling via dedicated webhook
-   New: Dedicated SMS Settings tab (`/settings/sms_settings`) and SMS section in admin menu (Pro)
-   Improvement: Amazon End User Messaging (SNS) provider polish

\= 3.0.0-beta.1 (Date: February 2026) =

-   New: FluentCRM 3.0 rebuilt on Vue 3 + Element Plus
-   New: Gutenberg-native email builder with device preview, media button, and reusable Email Patterns
-   New: SMS Marketing module (Twilio + Amazon End User Messaging) with campaigns and automation actions
-   New: AI Writing assistant for email content (Smart Headings, Smart Buttons, Magic Image, content rewrite)
-   New: FluentCart abandoned cart recovery (core) with dedicated driver and trigger
-   New: FluentCart Order, Subscription, and Abandon Cart triggers in core
-   New: Email Patterns library with a dedicated **Emails → Patterns** page
-   New: Dedicated Email Preference page for subscribers
-   New: Dark Mode with persistent per-user preference
-   New: RTL support – `admin_rtl.css` auto-loads for right-to-left languages
-   New: Global Search across subscribers, campaigns, automations, companies, and notes
-   New: Contacts → Segments (Dynamic Segments) menu item
-   New: Drag-and-drop builder for Custom Contact Fields
-   New: Reorganized Settings, Addons, and System Admin Tools areas
-   Improvement: "Funnels" relabeled to **Automations** in user-facing copy
-   Improvement: Improved Docs/Help page in admin
-   Improvement: Bulk import flow with progress feedback
-   Improvement: Email sending speed and queue reliability
-   Compatibility: WordPress 6.7+, PHP 7.4+
-   Note: This is the first major release in the 3.0 line. Please back up your site before upgrading.

\= 2.9.87 (Date: November 24, 2025) =

-   Hotfix: Automation Custom Email Sending Issue Fixed

\= 2.9.86 (Date: November 21, 2025) =

-   Hotfix: Automation Issue Fixed

\= 2.9.85 (Date: November 20, 2025) =

-   Optimize Code based on Plugin Check (PCP) Recommendations
-   Automation Flow and Related Database Queries Optimizations
-   WooCommerce Block-Based Checkout Checkbox Support
-   Improved Data Santization & Validation - Plugin Check (PCP)
-   Language Translation Improvements
-   Other Performance Improvements & Bug Fixes

\= 2.9.84 (Date: October 27, 2025) =

-   New: Paid Membership Pro Purchase History
-   New: New Condition for FluentCart Integration
-   Fixed: Open Rate, Click Rate wise Sorting Issue
-   Fixed: Woo Active Subscription Segment Issue
-   Fixed: Woo Subscriber ReSync Issue
-   Fixed: Issue with table prefixes in the LifterLMS importer
-   Fixed: Duplicate email open tracking and database lock problems
-   Fixed: Paymattic subscription amount shown in Purchase History
-   Fixed: “Resend Unopened Emails' not working in campaigns

\= 2.9.80 (Date: October 14, 2025) =

-   New: Fluent Cart Order & Subscription Triggers
-   New: Fluent Cart Purchase History in Contact Profile
-   New: Fluent Cart Import Customers
-   New: Export/Import List
-   New: Tag or List wise contact growth report
-   Improvement: ‘Prefix’ Column Added To Subscribers Table
-   Improvement: Enhanced ‘Add Existing Company’ In Contact Company Search With Initial Suggestions
-   Improvement: Contact’s Current Status Column Added In Individual Report Section Inside Funnel Report
-   Improvement: Group name of contact’s custom fields is now editable
-   Improvement: Include recipient name in mailer send data
-   Improvement: Open Rate And Click Rate Columns In Email Campaigns Table Are Now Sortable
-   Fixed: Currency Issue Fix In Funnel Report Chart
-   Fixed: Individual Email Display Issue For Custom Email Address In Funnel Report
-   Fixed: Monthly Subscriber Growth Chart Issue Solve To Disambiguate Months By Year
-   Fixed: Custom Reply To Name, Reply To Email Issue Solved In Email Header For Custom Email Within A Contact’s Profile Section
-   Fixed: ‘includes all of’ condition issue in automation condition
-   Fixed: Ab Cart price format issue in email

\= 2.9.65 (Date: Aug 7, 2025) =

-   New: Tag export and import functionality
-   New: Custom fields in email preference forms
-   New: One-click reset of filters for contacts
-   Improvement: Enhanced contact filtering with First Name and Last Name options
-   Improvement: Comprehensive contact import from CSV now includes tags and lists
-   Improvement: Contact status added as an automation condition
-   Improvement: Bulk actions now support selecting all companies
-   Improvement: Pagination support added for improved list navigation
-   Improvement: Email template preview functionality
-   Improvement: Background processing for large contact database exports
-   Improvement: Enhanced Voxel theme integration detection
-   Improvement: Action hooks for dynamic coupon metadata management
-   Improvement: WordPress user meta multiple checkbox values handled in SmartCodes
-   Fixed: Resend functionality issues in failed email delivery
-   Fixed: Form template null error during creation
-   Fixed: Multiple custom tab display issues in company profiles
-   Fixed: Lifetime purchase value incorrect issue (for woo partial payment addon)
-   Fixed: Vertical stretching issue with product images in the woo order table
-   Fixed: Bulk deletion issue in automation funnels
-   Fixed: Email campaign import issues for visual builder
-   Other improvements and bug fixes

\= 2.9.60 (Date: May 15, 2025) =

-   New: Introduced built-in templates feature
-   New: List-wise double opt-in email settings
-   New: Voxel New Order Placed Trigger
-   New: Option to send custom emails as transactional email
-   New: Custom menu tab functionality added on the company profile page
-   New: Dynamic segments based on active WooCommerce subscriptions
-   New: Added Contact Unsubscribe hook for enhanced customization
-   New: Bulk add/update contacts REST API endpoint
-   New: Added Tax Calculation in the Abandoned Cart Items Table
-   Fixed: Sorting Issue in Purchase History tab in Contact Profile
-   Fixed: Custom Field multi-line text Issue
-   Fixed: CSV export issue with the contacts filter
-   Fixed: Links tracking issue in Link Stats in Campaign details
-   Other Improvements & Bug Fixes

\= 2.9.50 (Date: April 17, 2025) =

-   New: Shortcode support for multiple email campaign archives
-   New: Shortcodes are now searchable
-   New: Voxel Integration ( Product purchase history in contact )
-   New: IPv6 compatibility Added
-   Improvement: WordPress version 6.8 compatible
-   Improvement: Toggle for column visibility in the automation funnels table
-   Improvement: Unsaved changes warning in block editor
-   Improvement: More translation strings added
-   Improvement: Search functionality for System Logs
-   Fixed: Global footer displaying incorrectly in email previews
-   Fixed: Custom field values couldn't be cleared once set
-   Fixed: Custom email footer settings import issue
-   Fixed: Encoding issue in Custom Field Text
-   Fixed: Label search functionality errors
-   Fixed: Fatal error during funnel import process
-   Fixed: AB Cart Tag and list not removing after order completion

\= 2.9.48 (Date: March 20, 2025) =

-   New: Re-apply Option for Completed Sequence
-   New: Tags and Lists are now searchable in Dynamic Selection
-   New: Selectable Custom Fields now Editable & Sortable
-   New: Smartcodes for WooCommerce Subscription Triggers
-   Improvement: Added Copy email and phone from contact lists
-   Improvement: Tags and lists display in ascending order
-   Improvement: LearnPress course finished hook Updated
-   Improvement: LatestPostBlock now displays all custom post types
-   Improvement: Added currency to Shipping and Tax Total
-   Improvement: Introduced Filter to manage new bounced email
-   Improvement: Tags and subscriber lists now sorted in ascending order
-   Improvement: Added operator type selection for taxonomy filters in LatestPost Block
-   Fixed: Padding, Margin, and Line-Height issues inside Column block
-   Fixed: Dynamic coupon amount issue with existing template
-   Fixed: Excerpt length of LatestPostBlock issue
-   Fixed: UpdateContactProperty Action float subtraction issue Other Improvements & Bug Fixes

\= 2.9.45 (Date: February 24, 2025) =

-   New: Subscription Cancelled Trigger (Fluent Forms)
-   New: Subscription Payment Received Trigger (Fluent Forms)
-   New: FluentForm Subscriptions Widget in Contact Profile
-   New: Update Custom Fields Using Bulk Actions
-   New: Filter option for failed emails
-   New: Show non-recurring memberships in MemberPress Widget
-   New: Woo Subscription Cancelled trigger
-   New: Option to sort custom fields
-   New: Wishlist Membership Widget in Contact Profile
-   Improvement: The slug retains one character even after the title is cleared
-   Improvement: Display which user sent the campaign
-   Improvement: All tables with adjustable column widths
-   Improvement: Redesigned the Addons section with improved UI/UX
-   Improvement: Added tooltip for Skipped AB cart status
-   Improvement: Added a button to copy the bounce handler URL
-   Fixed: Custom numeric field filter issue
-   Fixed: WooCommerce Coupon Discount amount not working
-   Other Improvements & Bug Fixes

\= 2.9.40 (Date: January 22, 2025) =

-   New: Quick Search in Automation Actions, Benchmarks, Goals
-   New: MemberPress Subscriptions Widget
-   New: Export/Import Email Campaign
-   New: Export/Import Email Campaign Contacts
-   New: Brevo (ex Sendinblue) Bounce Handler
-   New: Support for Polish Characters in slug (Tags/Lists)
-   Improvement: Contact filtering options: Never Clicked/Opened
-   Improvement: Quick preview added in email templates
-   Improvement: Post Image Type for Latest Post block
-   Improvement: Current date in Update Contact Property action in Automation
-   Improvement: WooCommerce Product Image Styling (order\_items\_table)
-   Improvement: Back Button for Campaign Archives
-   Improvement: Restart section added in ‘Remove From List’ Trigger
-   Improvement: Added ‘Check All’ option contact exporter
-   Improvement: More Filters in email campaign archive
-   Improvement: Added ‘Select All’ tag/list option while importing contacts
-   Improvement: UI Improvements (Automation Label Color)
-   Improvement: Smoother One-click Unsubscribe
-   Improvement: Coupon systems support for multi-vendor/extensions along with woocommerce
-   Improvement: Added Gravatar & Fallback Compliance for Contact Avatar
-   Fixed: Spammed/Complained Status Issue in Bounce Handler
-   Fixed: Theme colors not displaying in Emails
-   Fixed: Pagination for recurring campaign emails
-   Fixed: Sync WooCommerce order (trashed order issue)

\= 2.9.31 (Date: December 27, 2024) =

-   New: Added Email Preview in Campaigns
-   Improvement: AB Cart item table responsive
-   Improvement: Replaced Google fonts with Bunny
-   Fixed: AB Cart Recovered Revenue issue
-   Fixed: Campaigns revenue report issue
-   Fixed: Latest Post Block random sort issue
-   Fixed: Table alignment issue in blocks
-   Fixed: Number values in the ‘Text’ custom field misinterpreted as date issue.
-   Fixed: Variable button size not working in block editor
-   Fixed: MailChimp Migration import limitations
-   Fixed: Theme & default color issue in editor
-   Improvement: user delete option sync between compliance settings and general settings

\= 2.9.30 (Date: December 09, 2024) =

-   New: Labels in Automations & Campaign
-   New: WordPress date format support in Custom Field
-   New: Test Outgoing Webhook functionality
-   Improvement: UI enhancements for Lists & Tags popover
-   Improvement: Corrected date handling
-   Improvement: Auto-Mapping CSV Fields with Custom Fields
-   Improvement: Better SQL Queries
-   Improvement: Users now searchable in manager settings
-   Fixed: Default link color issue while editing the email template
-   Fixed: Default values not working for Smartcode (manage\_subscription\_html, unsubscribe\_html)
-   Fixed: Ordering in Dashboard Chart
-   Fixed: Campaign Revenue Report issues
-   Fixed: URL decode issue in A/B Testing for Campaigns
-   Fixed: Some Deprecation Warnings
-   Other Improvements & Bug Fixes

\= 2.9.25 (Date: Oct 16, 2024) =

-   New: Export/Import Recurring Campaign
-   New: Smart Code support in Custom Email Address field
-   New: Cutomer Profile button for EDD
-   New: Added internal description to the funnels page
-   Improvement: Product Image  & Currency Added in Ab Cart Details/Email
-   Improvement: Multiline Custom Field
-   Improvement: UX in Latest Post Block
-   Improvement: Added tax row in Abandoned Cart
-   Improvement: Abandoned Cart Details Reponsiveness
-   Improvement: Sorting Option in Purchase History in Contact for Woo/EDD
-   Improvement: Changing product now possible from block sidebar
-   Fixed: URL encoding Issue
-   Fixed: Automation Wait Delay Issue
-   Fixed: Dashboard Chat Dates Order
-   Fixed: Email Editor Lettecase
-   Fixed: Company Custom Field CSV Import Issue
-   Fixed: Company Custom Field Issue while creating
-   Fixed: Smart Code wp.url Issue
-   Fixed: Ab Cart Smart Code Issue
-   Fixed: Memberpress Contact Import Issue
-   Other Improvements & Bug Fixes

\= 2.9.23 (Date: Aug 19, 2024) =

-   New: Woocommerce Product Filter by Variation
-   New: Custom Field to Wait Time (Automation)
-   New: Keyboard Shortcut
-   New: Company Details Smart Codes
-   Fixed: Dynamic Segment Contact Count
-   Fixed: Email editor button outline issue
-   Fixed: Revenue Report not displayed in the campaign panel
-   Other Improvements & Bug Fixes

\= 2.9.20 (Date: Aug 12, 2024) =

-   New: Abandoned Cart (WooCommerce)
-   New: Built-in Automation Templates (10+)
-   New: FluentSMTP logs to the Emails Section of Profile
-   New: Email Filter to the Emails Section of Profile
-   Fixed: Email Editor Issue
-   Fixed: ActiveCampaign Import Contacts Issue
-   Fixed: Event Tracking Fetch Issue
-   Fixed: Sending Double Opt-in Email
-   Fixed: Webhook Issue
-   Fixed: Automation Twice Run Issue
-   Improvement: UI of the Custom Fields
-   Other Improvements & Bug Fixes

\= 2.9.0 (Date: May 29, 2024) =

-   New: Dynamic Coupon Creation (WooCommerce)
-   New: Company Module Custom Field Creation
-   New: Company Module Filtering Improvement
-   New: Advance Contact Segmentation based on Industry & Type
-   New: Create Tags & List on the Fly within Contact Details
-   New: Global Automation Activities Within Automation Panel
-   Performance: Merged API Requests, Better CSV import
-   Correction: WP user merge code for multiple password reset links
-   Fix: Fixed Issues with Thrive Suites Plugins
-   Fix: Fixed CSV uploads for different PHP versions

\= 2.8.45 (Date: March 01, 2024) =

-   New: WooCommerce Subscription Expiration Trigger
-   New: WP User Role Based Segmentation for Advanced Filters
-   New: BuddyBoss / BuddyPress Tags for Invites and Group Membership
-   Performance: Improved Email Sending Database Queries
-   Fix: WooCommerce Address Field Syncing Issue Fixed
-   Fix: LearnDash Course SmartCode Issue Fixed
-   Elementor Form Integration Improvement
-   Security Improvement: Company Logo Auto Fetching File-Type Check Added

\= 2.8.44 (Date: Feb 06, 2024) =

-   Improved Action Scheduler for Email Sending
-   Added Campaign Email Shareable Link
-   New Smart Codes - WP User
-   Improved Contact Profile API
-   Bug Fixes and Improvements
-   Improved Data Clean-Up Tool
-   Improved Security on Auto Login for Smart Links

\= 2.8.43 (Date: Jan 30, 2024) =

-   Auto Login Option with Smart Links
-   Add All Post Type for Recurring Campaigns Conditions
-   Improved WooCommerce Orders History and Sync
-   Email Campaign Analytics Improvement
-   Fixed Template Import issue

\= 2.8.42 (Date: Jan 28, 2024) =

-   Support For WooCommerce HPOS Integration
-   Fixed Customer's Order History Issues
-   Improve Litespeed Cache Compatibility

\= 2.8.40 (Date: Jan 26, 2024) =

-   Multi Threader Email - Send Emails faster
-   Custom Contacts Fields Grouping
-   Event Tracking for contacts
-   Latest Post Block improvement
-   One-click List-Unsubscription Header
-   System Logs for debugging
-   New Goal/Benchmark Added for SureCart (pro)
-   New Automation Trigger: Paid Membership Pro - Membership Cancelled (pro)
-   Scheduled Jobs improvement
-   Added Postal Server support for Email Bounce Handling
-   Webview for Email Campaign improvements and privacy improvements
-   Other Improvements & Bug Fixes

\= 2.8.34 (DATE: Nov 14, 2023) =

-   Added One Click Unsubscribe option in compliance features
-   Image upload compatibility with WordPress 6.4 fixed
-   Contact import with company name supported now
-   Active Campaign import improvement (Thanks to WPFusion)

\= 2.8.33 (DATE: Nov 03, 2023) =

-   Fixed Spacing & FontSize Issue
-   Improvement & Bug Fixes on Both Global & Custom Footer
-   Fixed Syntax Issue in Recurring Email History
-   Fixed Email Open Performance Issue
-   Other Improvements & Bug Fixes

\= 2.8.32 (DATE: Oct 26, 2023) =

-   WooCommerce HPOS Compatibility Added
-   Conditional Checks for LearnDash groups and items issue fixed
-   Fixed Restart issue in UserLogin Trigger
-   Permission UX Improvement with the addition of Import Permission
-   Color Improvement in Automation
-   UI Improvement of Latest Post Block in Email Builder

\= 2.8.31 (DATE: SEP 10, 2023) =

-   Webhook issue fixed
-   Replace google fonts with bunnycdn font
-   Enable/Disable AI integration for visual builder (in Experimenta Settings)

\= **2.8.30 (DATE: September 05, 2023)** =

-   Improvement on Company module
-   New trigger: Company added to contact Trigger
-   New Trigger: Company Removed Trigger
-   Company-specific Automation Actions
-   Custom email preference management page
-   New Trigger: Contact Created
-   Navigation and UI improvements
-   Duplicate segment or export contacts
-   Other improvements including translatable strings, permissions in CRM managers
-   Other Bug Fixes

\= **2.8.20 (DATE: July 18, 2023)** =

-   New: Ability to delete contact profile picture
-   New: Company attach/detach
-   Improved: Campaign Email Scheduling and sending speed increased
-   Improved: UI Improvement
-   Improved: Confirmation prompt for email campaigns
-   Improved: Double Opt-in Email pre-header
-   Improved: Integration Improvements
-   Fixed: Bug fixes & improvements

\= **2.8.02 (DATE: June 12, 2023)** =

-   Use Secure Hash instead of MD5 for the subscription preference page (Resolved: CVE-2023-1430). Thanks to Karl Emil Nikka for reporting the issue.

**\= **2.8.01 (Date: April 17, 2023)** =**

-   Fixed: Contact Filter Issue
-   Fixed: Server Time UTC issue on the admin Footer
-   Fixed: It’s a quick-fix update so no other features are added

**\= **2.8.0 (Date: April 14, 2023)** =**

-   New: Added Company module
-   New: FluentCRM Navigation Experience
-   New: WooCommerce Subscription Triggers (Pro)
-   Improved: More detailed contact overview
-   Improved: Massive UI enhancements
-   Improved: Ability to check email preview for specific contacts
-   Improvements and bug fixes

**\= **2.7.40 (Date: March 01, 2023)** =**

-   Improved: List & Tag selection UI improved
-   Improved: Campaign Email Activity Improvements
-   Fixed: Email Conditional Sections issues fixed
-   Fixed: Redirecting issues for Non-Unicode characters
-   Fixed: import issue for Restrict Content Pro

**\= **2.7.1 (Date: February 06, 2023**) =**

-   New: Added New Smartcode for latest post title and Custom Date Format
-   New: Added Inline Doc Link for Smartcodes
-   Improved: Elastic Email bounce handler added

**\= **2.7.0 (Date: January 23, 2023**) =**

-   New: New developer documentation
-   New: Use SmartCode on the Activity notes from the automation
-   Improved: Improvements in Contact Filtering
-   Improved: Refactored plugin and performance improvements
-   Fixed: Enhancements and bug fixes
-   Fixed: Theme color is not showing in the Gutenberg editor
-   Fixed: Image alignment issue in the block editor
-   Fixed: Email template saving issue
-   Fixed: The unsubscribe link is not working in the double opt-in confirmation page issue
-   Fixed: The multiline custom field is not working in the email body issue

**\= 2.6.52 (Date: November 24, 2022) =**

-   Conditional Sections on Visual Builder
-   Email Preview issue on Campaign Review Screens
-   Added Tag Based Redirect after Double Optin (Check Settings -> Double Optin)
-   Date Time Filters issue fixed for custom Fields
-   Template Import / Export
-   Save as Template from Campaign Screen

**\= 2.6.51 (Date: November 17, 2022) =**

-   Email Audit for invalid Links for Email Editor
-   Brand New Drag & Drop Email Builder
-   Integration improvements (Woo, Buddypress)
-   In-Page Documentation for top-level feature pages
-   UI & UX improvement across the full application
-   Better Mobile optimized screens
-   User registration automation trigger issues are solved.

**\= 2.6.0 (Date: October 20, 2022) =**  

-   Faster email editor
-   Improved Email Sequences
-   Improvement in Automation Goals
-   Select and modify email template blocks in bulk
-   Experimental features for Faster Contact Navigations, Date Formats
-   UI & UX Improvements
-   Bug fixes and minor improvements
-   Experimental Feature: Email Archives in the frontend **(Pro)**
-   Email campaign, sequence, automation activity conditions on Contact Advanced Filters **(Pro)**
-   New WooCommerce/EDD/LearnDash/LifterLMS conditions **(Pro)**
-   **New Trigger:** Birthday Automation **(Pro)**
-   **New Action:** Remove WordPress User Role
-   **New Trigger:** Leave from a Course(LearnDash)

**\= 2.5.95 (Date: August 19, 2022)** =

-   Improved - Advanced wait action in Automation
-   Improved - Added restart automation to all (almost) triggers
-   Improved - Sequence filtering for automation
-   Improved - View revenue for specific emails
-   Improved - Create Fluent Support tickets from Automation
-   Improved - Split test automation scenarios **(Pro)**
-   Added - Revenue metrics in email sequences
-   Added - More conditions in Advanced Filtering **(Pro)**
-   Added - Enable/Disable auto sync for integrated tools
-   Added - Email preference management short-code
-   Added - Detailed CRM reporting **(Pro)**
-   Added - Pre-populate Fluent Forms data from FluentCRM
-   Bug fixes & improvements

**\= 2.5.93 (Date: July 07, 2022 ) =**

-   Improved scheduled campaigns
-   Huge Performance Improvement
-   Fixed Country Name Filters
-   Improved Contact Imports
-   WP User Sync Issue fixed
-   Contact Exclude from campaign fixed
-   WP Ultimo conflict issue resolved

**\= 2.5.9 (Date: May 27, 2022 ) =**

-   WooCommerce Subscriptions integration
-   EDD Software Licensing integration
-   MemberPress Contact Importer
-   Export contacts by advanced filters
-   Export/Import Email Sequences
-   New bulk action: send double opt-in
-   Manual actions: delete contact, add a contact to automation & email sequences
-   Fetch profile picture from Fluent Forms entry
-   Smartcode/Merge tags Transformer
-   Improvements and bug fixes

**\= 2.5.7 (Date: March 07, 2022 ) =**

-   Added Merge tags for WooCommerce, Affiliate WP, LearnDash and LifterLMS
-   Fixed issue with LearnDash events
-   Added option to add contacts to an Automation
-   Added option to add contacts to an Email Sequence
-   Fixed campaign sending issue for some server
-   The Double Optin issue has been fixed
-   Integration Improvements
-   UI Improvements

**\= 2.5.6 (Date: February 28, 2022 ) =**

-   Added Auto Migration from ActiveCampaign, MailerLite, MailChimp, Drip, ConvertKit
-   Fixed CSV Import Issue for duplicate emails
-   Email Builder Issues fixed for the latest version of WP
-   Improved Contact Filtering
-   Integration Improvements
-   Improved UI

**\= 2.5.5 (Date: February 07, 2022 ) =**

-   Bulk Actions Improvements for Contacts
-   Add Name Prefix filter to Advanced Filter
-   WooCommerce Data Sync and Automations issues Fixed
-   EDD Advanced Filter and Automation Triggers Fixed
-   Email sequence issues fixed
-   Webhook issues fixed
-   UI & UX improvements

**\= 2.5.4 (Date: February 06, 2022 ) =**

-   (HOT FIX) Fix Multiple Automation Trigger for Woo and EDD

**\= 2.5.3 (Date: February 01, 2022 ) =**

-   Compatibility with WordPress 5.9
-   Improved Email Builder
-   CSV import duplicate data issue fixed
-   Automation Improvement
-   Tagging Improvement
-   Fixed Advanced Filters for Woo, EDD, LearnDash, and LifterLMS
-   Fixed JSON issue for HTTP Action
-   UI&UX improvement in several screens across the app

**\= 2.5.1 (Date: January 28, 2022) =**

-   Micro-target contacts!
-   Send targeted email campaigns
-   Create better dynamic segments
-   Run automation with advanced conditional logic!
-   Synchronize WooCommerce, EDD, LifterLMS, and LearnDash data!
-   Import EDD & WooCommerce contacts by product purchases!
-   View customer summary at a glance!
-   Advanced reporting (for WooCommerce, EDD, LifterLMS, and LearnDash)
-   Enroll/Remove students and Add/Remove memberships, automatically!
-   Automate emails for trial products
-   New Goal: Email Sequence Completed
-   Beaver Builder subscription form integration
-   Bug fixes & improvements

**\= 2.3.1 (Date: October 25, 2021) =**

-   BuddyBoss/BuddyPress Integration
-   ThriveCart Integration (Addon)
-   LearnPress Integration
-   Dynamically Import Existing users from LMS/Membership/BuddyBoss
-   Email Editor Improvement
-   Persistent Contact Page
-   Dynamic Segment Improvement and Bulk Operations
-   Automation Funnel Improvement
-   Integration improvements
-   ... and so many new features and improvements

**\= 2.2.0 (Date: July 20, 2021) =**

-   Whole New Dashboard Design
-   Added Lots of WooCommerce Integrations
-   More integration added with LifterLMS, LearnDash, and TutorLMS
-   Outgoing Webhook in Automation
-   WooCommerce Conditional Block and new action and triggers added
-   User Registration Action Block added to Automation
-   Custom fields improvements
-   Added Plain Text Email Template
-   Added Fluent Forms force subscribe feature
-   User role-based tagging feature added
-   Added Redirection Option after Double-Optin
-   Email Builder Blocks Improvements
-   Add Option to remove contacts on WP User delete
-   Showing in details purchase history from WooCommerce on Contact Screen
-   Webhook bounce handler with all major Email Service providers

**\= 2.0.4 (Date: June 03, 2021) =**

-   This is a minor update (no new feature, sorry!)
-   Webhook issue fixed for some providers
-   ENd Funnel Issues Fixed
-   Fix CRON Issues for some specific server
-   UI Color issue fixed
-   Fluent Forms conditional issues fixed

**\= 2.0.3 (Date: May 07, 2021) =**

-   Add Selected Days to Sending Emails for Email Sequences
-   Fix CRON Jobs issues
-   Image alignment issue for Emails fixed

**\= 2.0.2 (Date: May 03, 2021) =**

-   Condition Content Block for Oxygen Builder
-   Restart Automation
-   Color Codes for Automation Blocks
-   NEW: WooCommerce Product Refund Trigger
-   New: Notes and Activities Action Block
-   Email Sending Speed Improvement
-   Build-in Documentation Page
-   Lots of Improvements and Fixed

**\= 2.0.1 (Date: March 31, 2021) =**

-   CSV Issue Fixed
-   New: Added Contact Property Update from Automation
-   New: WooCommerce Subscription Box on Checkout Page
-   Automation UI improvement

**\= 2.0.0 (Date: March 30, 2021) =**

-   Multi-Path Conditional Automation Funnel
-   New Automation Triggers and Blocks
-   CRM Access Roles
-   SmartLinks Improvements
-   More Analytics Data
-   Share an Automation
-   Better RTL Support and Fully Translatable
-   Automation Funnels Improvement
-   RTL issues resolved
-   Email Builder Improvements
-   CSV Import issues fixed
-   Email sending speed improvement
-   Contact Data syncing with WordPress Users
-   Overall UI and REST API improvements

**\= 1.1.93 (Date: February 05, 2021) =**

-   PHP 8.0 Compatible
-   Setup wizard fixed

**\= 1.1.92 (Date: January 25, 2021) =**

-   Added Post/Page Block for Dynamic content based on tag or login state
-   Added feature to delete old logs
-   Added all emails activity page
-   Fix issue on dynamic smart tags on the email subject
-   UI improvement
-   Added FluentSMTP Support

**\= 1.1.91 (Date: November 27, 2020) =**

-   List Action issue resolved
-   Prepare For WordPress 5.6
-   Editor Improvement
-   Custom HTML parser for Email Campaign Fix

**\= 1.1.90 (Date: November 23, 2020) =**

-   Email Builder Improvement
-   Inline Contact Tagging with Fluent Forms
-   Better Email and Automation Reporting from Contact Profile
-   Rename Campaign from any campaign screen
-   Better Automation Visibility
-   Automation Trigger-related bug fixed

**\= 1.1.80 (Date: November 19, 2020) =**

-   Short URL redirect issue resolved
-   Tag Automation Trigger fixed
-   Automation Action Fixes

**\= 1.1.7 (Date: November 14, 2020)**

-   Contact Search Improvement
-   Automation Improvement
-   User Data endpoint improvements
-   Bounce Handler Improvement
-   Internal Improvements

**\= 1.1.5 (Date: October 29, 2020) =**

-   Email Builder improvement
-   Email Campaign Duplication
-   Automation Funnel Improvement
-   Added global reply configuration
-   Improved Amazon SES Bounce Handler

**\= 1.1.4 (Date: October 25, 2020) =**

-   Funnel Reporting improvement
-   Fix issue for double opt-in + Automation trigger
-   UI Improvements
-   Show CRM Profile Link in Edit user screen

**\= 1.1.3 (Date: October 23, 2020) =**

-   The funnel Benchmark issue has been fixed
-   Added RTL support
-   The bulk Email Sending Memory issue has been fixed
-   Added Duplicate Automation Feature
-   Added More Hooks for 3rd Party Developers
-   Improvement on Big Lists for email sending
-   Oxygen Builder Compatibility issues fixed

**\= 1.1.2 (Date: October 16, 2020) =**

-   Funnel automation fix with Fluent Forms
-   Segmentation Selection fix
-   Fix custom fields mapping
-   Double Opt-in Fixed and controlled
-   Added search on Emails
-   Added More API endpoints
-   Overall performance improvement

**\= 1.1.1 (Date: October 09, 2020) =**

-   Massive Optimization for large lists like 300K
-   Fixed API namespace fixed
-   WPFusion & MailOptin Issue fixed
-   Unsubscribe Page improvement
-   Step save on email campaign

**\= 1.0.8 (Date: October 07, 2020) =**

-   Fixed unsubscription issue
-   Custom filed mapper has been added with Fluent Forms
-   Funnel renamed to Automations
-   Fix language text-domain
-   Internal Improvements

**\= 1.0.6 (Date: October 02, 2020) =**

-   Fix Double Optin Issues
-   Improved Tools Page

**\= 1.0.3 (**Date**: October 01, 2020) =**

-   Fix Tag creation title
-   Fix form creation wizard
-   Fix Setup wizard

**\= 1.0.1 (**Date**: October 01, 2020) =**

-   Few Typo Fix
-   List issue fix in the funnel

**\= 1.0.0 (**Date**: September 29, 2020) =**

-   Initial Launch
-   1482 git commits so far
-   1982 cup of coffee (Just kidding, We lost count)
-   Work of 1 year + 5 developers
-   Let’s make WordPress great!