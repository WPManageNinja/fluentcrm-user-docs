import { defineConfig } from 'vitepress'

// Treat standalone YouTube links as embedded videos in docs
const YOUTUBE_URL_RE =
  /^\s*(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)(?:[?&][^\s]*)?\s*$/

function extractYouTubeId(line: string): string | null {
  const m = line.match(YOUTUBE_URL_RE)
  return m ? m[1]! : null
}

function youtubeBlockRule(state: any, startLine: number, endLine: number, silent: boolean) {
  const pos = state.bMarks[startLine] + state.tShift[startLine]
  const max = state.eMarks[startLine]

  const line = state.src.slice(pos, max)
  const videoId = extractYouTubeId(line)
  if (!videoId) return false

  if (silent) return true

  const token = state.push('youtube_embed', 'div', 0)
  token.block = true
  token.content = videoId
  token.map = [startLine, startLine + 1]

  state.line = startLine + 1
  return true
}

export default defineConfig({
  title: 'FluentCRM Documentation',
  description: 'Marketing Automation for WordPress – FluentCRM user guides and documentation',
  head: [
    ['link', { rel: 'icon', href: '/brand/s-logo-1.png' }],
  ],
  ignoreDeadLinks: true,
  cleanUrls: true,
  // Serve docs/category/slug.md at /slug (hide both category and /docs/ prefix from URL)
  rewrites: {
    'docs/:category/:slug.md': ':slug.md',
  },
  markdown: {
    config: (md) => {
      // Convert a bare YouTube URL line into an embedded player
      md.block.ruler.before('paragraph', 'youtube_embed', youtubeBlockRule)
      md.renderer.rules.youtube_embed = (tokens: any[], idx: number) => {
        const videoId = tokens[idx].content
        const embedUrl = `https://www.youtube.com/embed/${videoId}`
        return `<figure class="vp-doc-video-wrapper"><div class="vp-doc-video-inner"><iframe src="${embedUrl}" title="YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div></figure>\n`
      }
    },
  },
  vite: {
    plugins: [],
    publicDir: 'docs/public',
    build: {
      chunkSizeWarningLimit: 1000,
    },
  },
  themeConfig: {
    logo: { src: '/brand/fluentCRM-logo-color.svg', alt: 'FluentCRM' },
    siteTitle: false,
    nav: [
      { text: 'User Docs', link: '/dashboard-introduction' },
      { text: 'Dev Docs', link: 'https://developers.fluentcrm.com/', target: '_blank', rel: 'noopener noreferrer' },
      { text: 'Changelog', link: '/change-log' },
      { text: 'Website', link: 'https://fluentcrm.com', target: '_blank', rel: 'noopener noreferrer' },
    ],
    sidebar: {
      '/': [
        // 1. Getting Started
        {
          text: 'Getting Started',
          collapsed: false,
          items: [
            { text: 'Install & Activate License', link: '/how-to-install-upgrade-and-activate-license' },
            { text: 'Onboarding Wizard', link: '/fluentcrm-onboarding-wizard' },
            { text: 'Transfer Your License', link: '/transfer-license-from-one-domain-to-another' },
            { text: 'Dashboard Overview', link: '/dashboard-introduction' },
            { text: 'FluentCRM Glossary', link: '/fluentcrm-glossary' },
            { text: 'Migration Overview', link: '/migrating-into-fluentcrm' },
            { text: 'Move to a New Site', link: '/migrate-fluentcrm-to-a-new-site' },
          ],
        },
        // 2. Configuration & Delivery
        {
          text: 'Configuration & Delivery',
          collapsed: true,
          items: [
            {
              text: 'Settings',
              collapsed: true,
              items: [
                { text: 'Global Settings Overview', link: '/fluentcrm-global-settings' },
                { text: 'Business Setup', link: '/global-business-settings' },
                { text: 'Global Email Settings', link: '/global-email-settings' },
                { text: 'Email Service', link: '/smtp-bounce-handlers-settings' },
                { text: 'General Settings', link: '/global-general-settings' },
                { text: 'Custom Fields', link: '/global-custom-contact-fields' },
                { text: 'Smart Link', link: '/global-smartlinks-settings' },
                { text: 'Double Opt-in Settings', link: '/global-double-opt-in-settings' },
                { text: 'Integrations', link: '/global-integration-settings' },
                { text: 'Abandoned Cart Settings', link: '/abandoned-cart-settings' },
                { text: 'AI Writing', link: '/ai-writing-settings' },
                { text: 'MCP for AI Agents', link: '/mcp-for-ai-agents' },
                { text: 'Compliance Settings', link: '/global-compliance-settings' },
                { text: 'Incoming Webhooks', link: '/global-incoming-webhooks' },
                { text: 'CRM Managers', link: '/global-managers-settings' },
                { text: 'System Admin Tools', link: '/fluentcrm-tools-settings' },
              ],
            },
            {
              text: 'Email Delivery & Cron',
              collapsed: true,
              items: [
                { text: 'Sending Emails and Email Deliverability', link: '/sending-emails-and-email-deliverability' },
                { text: 'Cron Job Basics and Checklist', link: '/fluentcrm-cron-job-basics-and-checklist' },
                { text: 'Cron with Cloudways', link: '/fluentcrm-cron-with-cloudways' },
                { text: 'Cron with Cron-Job.org', link: '/fluentcrm-cron-with-cronjob-org' },
                { text: 'Cron with EasyCron', link: '/fluentcrm-cron-with-easycron' },
                { text: 'Replace WordPress Cron with Real Cron', link: '/replace-wordpress-cron-with-a-real-cron-job' },
                { text: 'Troubleshoot Guidelines on WordPress Error', link: '/troubleshoot-guidelines-on-wordpress-error' },
              ],
            },
            {
              text: 'Bounce Handling',
              collapsed: true,
              items: [
                { text: 'Bounce Handling Overview', link: '/bounce-handling-overview' },
                { text: 'Bounce Handling with Amazon SES', link: '/bounce-handler-with-amazon-ses' },
                { text: 'Bounce Handling with Brevo', link: '/bounce-handling-with-brevo' },
                { text: 'Bounce Handling with Elastic Email', link: '/bounce-handling-with-elastic-email' },
                { text: 'Bounce Handling with Mailgun', link: '/bounce-handling-with-mailgun' },
                { text: 'Bounce Handling with Pepipost', link: '/bounce-handling-with-pepipost' },
                { text: 'Bounce Handling with Postal Server', link: '/bounce-handling-with-postal-server' },
                { text: 'Bounce Handling with Postmark', link: '/bounce-handling-with-postmark' },
                { text: 'Bounce Handling with SendGrid', link: '/bounce-handling-with-sendgrid' },
                { text: 'Bounce Handling with SMTP2GO', link: '/bounce-handling-with-smtp2go' },
                { text: 'Bounce Handling with SparkPost', link: '/bounce-handling-with-sparkpost' },
                { text: 'Bounce Handling with toSend', link: '/bounce-handling-with-tosend' },
              ],
            },
          ],
        },
        // 3. Audience
        {
          text: 'Audience',
          collapsed: true,
          items: [
            { text: 'Contacts Dashboard', link: '/contacts-dashboard' },
            { text: 'Contact Overview', link: '/contact-overview' },
            { text: 'Manage Contacts', link: '/manage-contacts' },
            { text: 'Contact Statuses', link: '/contact-statuses' },
            { text: 'Integrated Contact Overview', link: '/additional-integrated-contact-overview' },
            { text: 'Import Contacts into FluentCRM', link: '/import-contacts-into-fluentcrm' },
            { text: 'Export Contacts from FluentCRM', link: '/export-contacts-from-fluentcrm' },
            { text: 'Import from Other Integrations', link: '/import-contacts-to-fluentcrm-from-other-integrations' },
            { text: 'Segment Your Audience (Lists & Tags)', link: '/segment-your-audience' },
            { text: 'Advanced Filter', link: '/advanced-filter' },
            { text: 'Company Module', link: '/company-module' },
          ],
        },
        // 4. Campaigns & Forms
        {
          text: 'Campaigns & Forms',
          collapsed: true,
          items: [
            {
              text: 'Email Campaigns',
              collapsed: true,
              items: [
                { text: 'Overview of Emails from FluentCRM', link: '/overview-of-emails-from-fluentcrm' },
                { text: 'Setting Up Campaign', link: '/setting-up-campaign' },
                { text: 'Compose Email in FluentCRM', link: '/compose-email-in-fluentcrm' },
                { text: 'FluentCRM Visual Builder', link: '/fluentcrm-visual-builder' },
                { text: 'Email Templates', link: '/email-templates' },
                { text: 'Email Patterns', link: '/email-patterns' },
                { text: 'Content Blocks in Email Editor', link: '/content-blocks-in-fluentcrm-email-editor' },
                { text: 'Conditional Sections in Email Editor', link: '/conditional-sections-in-fluentcrm-email-editor' },
                { text: 'SmartCodes in Email Editor', link: '/smartcodes-in-fluentcrm-email-editor' },
                { text: 'Labels for Email Campaigns', link: '/labels-for-email-campaigns' },
                { text: 'Campaign Summary Actions', link: '/campaign-summary-actions' },
                { text: 'Email Sequence', link: '/email-sequence' },
                { text: 'Recurring Campaign', link: '/recurring-campaign' },
              ],
            },
            {
              text: 'Forms',
              collapsed: true,
              items: [
                { text: 'Opt-in Forms – Fluent Forms Basic Configuration', link: '/opt-in-forms-fluent-forms-basic-configuration' },
                { text: 'Fluent Forms Advanced Configuration', link: '/opt-in-forms-advanced-configuration' },
                { text: 'Capturing Leads Remotely from Fluent Forms', link: '/capturing-leads-through-fluent-forms-webhook' },
              ],
            },
          ],
        },
        // 5. SMS Module
        {
          text: 'SMS Module',
          collapsed: true,
          items: [
            { text: 'Configure SMS Module', link: '/configure-sms-module' },
            { text: 'Twilio SMS Integration', link: '/twilio-integration' },
            { text: 'SMS Automation', link: '/sms-automation' },
            { text: 'Amazon End User Messaging (SMS)', link: '/amazon-end-user-messaging' },
            { text: 'SMS Report', link: '/sms-campaign-report' },
          ],
        },
        // 6. Automations
        {
          text: 'Automations',
          collapsed: true,
          items: [
            { text: 'Introduction to FluentCRM Automation', link: '/introduction-to-fluentcrm-automation' },
            { text: 'Automation Editor', link: '/automation-editor' },
            { text: 'Import / Export Automations', link: '/how-to-import-export-automation-funnels-with-fluentcrm' },
            {
              text: 'Triggers & Conditions',
              collapsed: true,
              items: [
                { text: 'FluentCRM Automation Triggers', link: '/fluentcrm-automation-triggers' },
                { text: 'Conditional Automation Actions', link: '/conditional-automation-actions' },
                { text: 'FluentCRM Ecommerce Triggers', link: '/fluentcrm-ecommerce-triggers' },
                { text: 'Ecommerce Conditionals', link: '/ecommerce-conditionals' },
                { text: 'WooCommerce Subscription Triggers', link: '/woocommerce-subscription-triggers' },
                { text: 'FluentCRM LMS Triggers', link: '/fluentcrm-lms-triggers' },
                { text: 'LMS Conditionals', link: '/lms-conditionals' },
                { text: 'FluentCRM Membership Triggers', link: '/fluentcrm-membership-triggers' },
                { text: 'Membership Conditionals', link: '/membership-conditionals' },
              ],
            },
            {
              text: 'Actions & Goals',
              collapsed: true,
              items: [
                { text: 'Primary Automation Actions', link: '/primary-automation-actions' },
                { text: 'Automation Email Actions', link: '/automation-email-actions' },
                { text: 'WooCommerce Automation Actions', link: '/woocommerce-automation-actions' },
                { text: 'LMS Automation Actions', link: '/lms-automation-actions' },
                { text: 'WordPress Automation Actions', link: '/wordpress-automation-actions' },
                { text: 'Miscellaneous Automation Actions', link: '/miscellaneous-automation-actions' },
                { text: 'Goals or Benchmark Actions', link: '/goals-or-benchmark-actions' },
                { text: 'Labels for Automations', link: '/labels-for-automations' },
                { text: 'Automation Reports', link: '/automation-reports' },
                { text: 'Abandon Cart Automation (WooCommerce)', link: '/abandon-cart-automation' },
                { text: 'FluentCart Abandon Cart Automation', link: '/fluentcart-abandon-cart-automation' },
              ],
            },
            {
              text: 'Event Tracking',
              collapsed: true,
              items: [
                { text: 'Event Tracking Record', link: '/event-tracking-record' },
                { text: 'Event Tracking Automation', link: '/event-tracking-automation' },
                { text: 'Event Tracking with Action Hooks', link: '/event-tracking-with-action-hooks' },
              ],
            },
          ],
        },
        // 7. Integrations
        {
          text: 'Integrations',
          collapsed: true,
          items: [
            { text: 'Integrations Overview', link: '/fluentcrm-integrations' },
            {
              text: 'Forms & Ecommerce',
              collapsed: true,
              items: [
                { text: 'WP Fluent Forms Integration', link: '/wp-fluent-forms-integration-with-fluentcrm' },
                { text: 'WooCommerce Automation', link: '/woocommerce-automation-with-fluentcrm' },
                { text: 'FluentCart Integration', link: '/fluentcart-integration-with-fluentcrm' },
                { text: 'SureCart Automation', link: '/surecart-automation-with-fluentcrm' },
                { text: 'Easy Digital Downloads Integration', link: '/easy-digital-downloads-integration-with-fluentcrm' },
              ],
            },
            {
              text: 'LMS Integrations',
              collapsed: true,
              items: [
                { text: 'LearnDash Integration', link: '/learndash-integration-with-fluentcrm' },
                { text: 'LifterLMS Integration', link: '/lifterlms-integration-with-fluentcrm' },
                { text: 'LearnPress Integration', link: '/learpress-integration-with-fluentcrm' },
                { text: 'Tutor LMS Integration', link: '/tutorlms-integration-with-fluentcrm' },
              ],
            },
            {
              text: 'Membership Integrations',
              collapsed: true,
              items: [
                { text: 'MemberPress Integration', link: '/memberpress-integration-with-fluentcrm' },
                { text: 'Paid Memberships Pro Integration', link: '/paid-memberships-pro-integration-with-fluentcrm' },
                { text: 'Restrict Content Pro Integration', link: '/restrict-content-pro-integration-with-fluentcrm' },
              ],
            },
            {
              text: 'Community & Growth',
              collapsed: true,
              items: [
                { text: 'BuddyBoss Integration', link: '/buddyboss-integration-with-fluentcrm' },
                { text: 'Fluent Community Integration', link: '/fluentcommunity-integration-with-fluentcrm' },
                { text: 'Fluent Affiliate Integration', link: '/fluentaffiliate-integration-with-fluentcrm' },
                { text: 'AffiliateWP Integration', link: '/affiliatewp-integration-with-fluentcrm' },
                { text: 'Fluent Booking Integration', link: '/fluent-booking-integration-with-fluentcrm' },
                { text: 'FluentBoards Integration', link: '/fluentboards-integration-with-fluentcrm' },
                { text: 'FluentSupport Integration', link: '/fluentsupport-integration-with-fluentcrm' },
              ],
            },
            {
              text: 'Builders & Automation Tools',
              collapsed: true,
              items: [
                { text: 'Elementor Integration', link: '/elementor-integration-with-fluentcrm' },
                { text: 'Oxygen Builder Integration', link: '/oxygen-builder-integration-with-fluentcrm' },
                { text: 'Webhook Integration', link: '/webhook-integration' },
                { text: 'Zapier Integration', link: '/zapier-integration-with-fluentcrm' },
              ],
            },
          ],
        },
        // 8. Reports & Analytics
        {
          text: 'Reports & Analytics',
          collapsed: true,
          items: [
            { text: 'Reports Overview', link: '/advanced-reports-overview' },
            { text: 'CRM Contact Report', link: '/crm-contact-report' },
            { text: 'Emails Report', link: '/emails-report' },
            { text: 'Abandoned Cart Report', link: '/abandoned-cart-report' },
            { text: 'WooCommerce Advanced Reports', link: '/woocommerce-advanced-reports' },
            { text: 'EDD Advanced Reports', link: '/edd-advanced-reports' },
            { text: 'LearnDash Advanced Reports', link: '/learndash-advanced-reports' },
            { text: 'LifterLMS Advanced Reports', link: '/lifterlms-advanced-reports' },
          ],
        },
        // 9. Advanced & Developer
        {
          text: 'Advanced & Developer',
          collapsed: true,
          items: [
            {
              text: 'Advanced Usage',
              collapsed: true,
              items: [
                { text: 'FluentCRM Contacts Status', link: '/fluentcrm-contacts-status' },
                { text: 'Merge Codes / Smart Codes Usage', link: '/merge-codes-smart-codes-usage' },
                { text: 'Auto-fill Fluent Forms Fields with FluentCRM Data', link: '/auto-fill-fluent-forms-fields-with-fluentcrm-data' },
                { text: 'Cloudflare or Security Plugin Compatibility', link: '/cloudflare-or-security-plugin-compatibility' },
                { text: 'Global Search', link: '/global-search' },
                { text: 'Dark Mode', link: '/dark-mode' },
                { text: 'RTL Support', link: '/rtl-support' },
              ],
            },
            {
              text: 'Developer APIs & Hooks',
              collapsed: true,
              items: [
                { text: 'Action Hooks', link: '/action-hooks' },
                { text: 'Contact PHP API', link: '/contact-php-api' },
                { text: 'Lists and Tags PHP API', link: '/lists-and-tags-php-api' },
              ],
            },
            {
              text: 'Custom Automations',
              collapsed: true,
              items: [
                { text: 'Custom Automation Trigger', link: '/custom-automation-trigger' },
                { text: 'Custom Automation Condition', link: '/custom-automation-condition' },
                { text: 'Custom Automation Action', link: '/custom-automation-action' },
                { text: 'Custom Automation Benchmark/Goal', link: '/custom-automation-benchmark-goal' },
              ],
            },
            {
              text: 'Developer Tools',
              collapsed: true,
              items: [
                { text: 'Form Field Code Structure', link: '/form-field-code-structure' },
                { text: 'Useful Code Snippets', link: '/useful-code-snippets' },
                { text: 'WP-CLI Commands', link: '/wp-cli-commands' },
              ],
            },
          ],
        },
        // 10. Migrate to FluentCRM
        {
          text: 'Migrate to FluentCRM',
          collapsed: true,
          items: [
            { text: 'Migration Overview', link: '/migrate-to-fluentcrm' },
            { text: 'Migrating from ActiveCampaign', link: '/migrating-into-fluentcrm-from-activecampaign' },
            { text: 'Migrating from ConvertKit', link: '/migrating-into-fluentcrm-from-convertkit' },
            { text: 'Migrating from Drip', link: '/migrating-into-fluentcrm-from-drip' },
            { text: 'Migrating from Mailchimp', link: '/migrating-into-fluentcrm-from-mailchimp' },
            { text: 'Migrating from MailerLite', link: '/migrating-into-fluentcrm-from-mailerlite' },
          ],
        },
        // 11. Help & Support
        {
          text: 'Help & Support',
          collapsed: true,
          items: [
            { text: 'Frequently Asked Questions', link: '/frequently-asked-questions' },
            { text: 'How to Get Support', link: '/how-to-get-support' },
            { text: 'Changelog', link: '/change-log' },
          ],
        },
      ],
    },
    search: {
      provider: 'local',
    },
    footer: {
      message: 'FluentCRM – Marketing Automation for WordPress',
      copyright:
        '© WPManageNinja. Need help? Get support at <a href="https://wpmanageninja.com/account/support-tickets/" target="_blank" rel="noopener noreferrer">wpmanageninja.com</a>',
    },
    outline: {
      level: [2, 4],
      label: 'On this page',
    },
    docFooter: {
      prev: 'Previous',
      next: 'Next',
    },
  },
})
