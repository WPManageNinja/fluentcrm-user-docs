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
  // Serve docs/category/slug.md at /docs/slug (hide category from URL)
  rewrites: {
    'docs/:category/:slug.md': 'docs/:slug.md',
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
      { text: 'User Docs', link: '/docs/dashboard-introduction' },
      { text: 'Dev Docs', link: 'https://developers.fluentcrm.com/', target: '_blank', rel: 'noopener noreferrer' },
      { text: 'Changelog', link: '/docs/change-log' },
      { text: 'Website', link: 'https://fluentcrm.com', target: '_blank', rel: 'noopener noreferrer' },
    ],
    sidebar: {
      '/docs/': [
        // 1. Getting Started
        {
          text: 'Getting Started',
          collapsed: false,
          items: [
            { text: 'Install, Upgrade and Activate License', link: '/docs/how-to-install-upgrade-and-activate-license' },
            { text: 'Transfer License from One Domain to Another', link: '/docs/transfer-license-from-one-domain-to-another' },
            { text: 'Introduction to FluentCRM Dashboard', link: '/docs/dashboard-introduction' },
            { text: 'Migrating into FluentCRM', link: '/docs/migrating-into-fluentcrm' },
            { text: 'Migrate FluentCRM to a New Site', link: '/docs/migrate-fluentcrm-to-a-new-site' },
          ],
        },
        // 2. Setup & Delivery
        {
          text: 'Setup & Delivery',
          collapsed: true,
          items: [
            {
              text: 'Settings',
              collapsed: true,
              items: [
                { text: 'FluentCRM Global Settings', link: '/docs/fluentcrm-global-settings' },
                { text: 'General Settings', link: '/docs/global-general-settings' },
                { text: 'Business Settings', link: '/docs/global-business-settings' },
                { text: 'Email Settings', link: '/docs/global-email-settings' },
                { text: 'Compliance', link: '/docs/global-compliance-settings' },
                { text: 'Double Opt-in Settings', link: '/docs/global-double-opt-in-settings' },
                { text: 'Custom Contact Fields', link: '/docs/global-custom-contact-fields' },
                { text: 'Managers', link: '/docs/global-managers-settings' },
                { text: 'Advanced Features Settings', link: '/docs/advanced-features-settings' },
                { text: 'Integration Settings', link: '/docs/global-integration-settings' },
                { text: 'Incoming Webhooks', link: '/docs/global-incoming-webhooks' },
                { text: 'REST API', link: '/docs/global-rest-api-settings' },
                { text: 'Smart Links', link: '/docs/global-smartlinks-settings' },
                { text: 'SMTP & Bounce Handlers', link: '/docs/smtp-bounce-handlers-settings' },
                { text: 'FluentCRM Tools', link: '/docs/fluentcrm-tools-settings' },
                { text: 'Abandoned Cart Settings', link: '/docs/abandoned-cart-settings' },
              ],
            },
            {
              text: 'Email Delivery & Cron',
              collapsed: true,
              items: [
                { text: 'Sending Emails and Email Deliverability', link: '/docs/sending-emails-and-email-deliverability' },
                { text: 'Cron Job Basics and Checklist', link: '/docs/fluentcrm-cron-job-basics-and-checklist' },
                { text: 'Cron with Cloudways', link: '/docs/fluentcrm-cron-with-cloudways' },
                { text: 'Cron with Cron-Job.org', link: '/docs/fluentcrm-cron-with-cronjob-org' },
                { text: 'Cron with EasyCron', link: '/docs/fluentcrm-cron-with-easycron' },
                { text: 'Replace WordPress Cron with Real Cron', link: '/docs/replace-wordpress-cron-with-a-real-cron-job' },
                { text: 'Troubleshoot Guidelines on WordPress Error', link: '/docs/troubleshoot-guidelines-on-wordpress-error' },
              ],
            },
            {
              text: 'Bounce Handling',
              collapsed: true,
              items: [
                { text: 'Bounce Handling with Amazon SES', link: '/docs/bounce-handler-with-amazon-ses' },
                { text: 'Bounce Handling with Brevo', link: '/docs/bounce-handling-with-brevo' },
                { text: 'Bounce Handling with Elastic Email', link: '/docs/bounce-handling-with-elastic-email' },
                { text: 'Bounce Handling with Mailgun', link: '/docs/bounce-handling-with-mailgun' },
                { text: 'Bounce Handling with Pepipost', link: '/docs/bounce-handling-with-pepipost' },
                { text: 'Bounce Handling with Postal Server', link: '/docs/bounce-handling-with-postal-server' },
                { text: 'Bounce Handling with Postmark', link: '/docs/bounce-handling-with-postmark' },
                { text: 'Bounce Handling with SendGrid', link: '/docs/bounce-handling-with-sendgrid' },
                { text: 'Bounce Handling with SMTP2GO', link: '/docs/bounce-handling-with-smtp2go' },
                { text: 'Bounce Handling with SparkPost', link: '/docs/bounce-handling-with-sparkpost' },
              ],
            },
          ],
        },
        // 3. Audience
        {
          text: 'Audience',
          collapsed: true,
          items: [
            { text: 'Contacts Dashboard', link: '/docs/contacts-dashboard' },
            { text: 'Contact Overview', link: '/docs/contact-overview' },
            { text: 'Manage Contacts', link: '/docs/manage-contacts' },
            { text: 'Contact Statuses', link: '/docs/contact-statuses' },
            { text: 'Integrated Contact Overview', link: '/docs/additional-integrated-contact-overview' },
            { text: 'Import Contacts into FluentCRM', link: '/docs/import-contacts-into-fluentcrm' },
            { text: 'Export Contacts from FluentCRM', link: '/docs/export-contacts-from-fluentcrm' },
            { text: 'Import from Other Integrations', link: '/docs/import-contacts-to-fluentcrm-from-other-integrations' },
            { text: 'Segment Your Audience (Lists & Tags)', link: '/docs/segment-your-audience' },
            { text: 'Advanced Filter', link: '/docs/advanced-filter' },
            { text: 'Company Module', link: '/docs/company-module' },
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
                { text: 'Overview of Emails from FluentCRM', link: '/docs/overview-of-emails-from-fluentcrm' },
                { text: 'Setting Up Campaign', link: '/docs/setting-up-campaign' },
                { text: 'Compose Email in FluentCRM', link: '/docs/compose-email-in-fluentcrm' },
                { text: 'FluentCRM Visual Builder', link: '/docs/fluentcrm-visual-builder' },
                { text: 'Email Templates', link: '/docs/email-templates' },
                { text: 'Content Blocks in Email Editor', link: '/docs/content-blocks-in-fluentcrm-email-editor' },
                { text: 'Conditional Sections in Email Editor', link: '/docs/conditional-sections-in-fluentcrm-email-editor' },
                { text: 'SmartCodes in Email Editor', link: '/docs/smartcodes-in-fluentcrm-email-editor' },
                { text: 'Labels for Email Campaigns', link: '/docs/labels-for-email-campaigns' },
                { text: 'Campaign Summary Actions', link: '/docs/campaign-summary-actions' },
                { text: 'Email Sequence', link: '/docs/email-sequence' },
                { text: 'Recurring Campaign', link: '/docs/recurring-campaign' },
              ],
            },
            {
              text: 'Forms',
              collapsed: true,
              items: [
                { text: 'Opt-in Forms – Fluent Forms Basic Configuration', link: '/docs/opt-in-forms-fluent-forms-basic-configuration' },
                { text: 'Fluent Forms Advanced Configuration', link: '/docs/opt-in-forms-advanced-configuration' },
                { text: 'Capturing Leads Remotely from Fluent Forms', link: '/docs/capturing-leads-through-fluent-forms-webhook' },
              ],
            },
          ],
        },
        // 5. SMS Module
        {
          text: 'SMS Module',
          collapsed: true,
          items: [
            { text: 'Configure SMS Module', link: '/docs/configure-sms-module' },
          ],
        },
        // 6. Automations & Events
        {
          text: 'Automations & Events',
          collapsed: true,
          items: [
            {
              text: 'Automation Basics',
              collapsed: true,
              items: [
                { text: 'Introduction to FluentCRM Automation', link: '/docs/introduction-to-fluentcrm-automation' },
                { text: 'Automation Editor', link: '/docs/automation-editor' },
                { text: 'How to Import / Export Automations', link: '/docs/how-to-import-export-automation-funnels-with-fluentcrm' },
              ],
            },
            {
              text: 'Triggers & Conditions',
              collapsed: true,
              items: [
                { text: 'FluentCRM Automation Triggers', link: '/docs/fluentcrm-automation-triggers' },
                { text: 'Conditional Automation Actions', link: '/docs/conditional-automation-actions' },
                { text: 'FluentCRM Ecommerce Triggers', link: '/docs/fluentcrm-ecommerce-triggers' },
                { text: 'Ecommerce Conditionals', link: '/docs/ecommerce-conditionals' },
                { text: 'WooCommerce Subscription Triggers', link: '/docs/woocommerce-subscription-triggers' },
                { text: 'FluentCRM LMS Triggers', link: '/docs/fluentcrm-lms-triggers' },
                { text: 'LMS Conditionals', link: '/docs/lms-conditionals' },
                { text: 'FluentCRM Membership Triggers', link: '/docs/fluentcrm-membership-triggers' },
                { text: 'Membership Conditionals', link: '/docs/membership-conditionals' },
              ],
            },
            {
              text: 'Actions & Goals',
              collapsed: true,
              items: [
                { text: 'Primary Automation Actions', link: '/docs/primary-automation-actions' },
                { text: 'Automation Email Actions', link: '/docs/automation-email-actions' },
                { text: 'WooCommerce Automation Actions', link: '/docs/woocommerce-automation-actions' },
                { text: 'LMS Automation Actions', link: '/docs/lms-automation-actions' },
                { text: 'WordPress Automation Actions', link: '/docs/wordpress-automation-actions' },
                { text: 'Miscellaneous Automation Actions', link: '/docs/miscellaneous-automation-actions' },
                { text: 'Goals or Benchmark Actions', link: '/docs/goals-or-benchmark-actions' },
                { text: 'Labels for Automations', link: '/docs/labels-for-automations' },
                { text: 'Automation Reports', link: '/docs/automation-reports' },
                { text: 'Abandon Cart Automation', link: '/docs/abandon-cart-automation' },
              ],
            },
            {
              text: 'Event Tracking',
              collapsed: true,
              items: [
                { text: 'Event Tracking Record', link: '/docs/event-tracking-record' },
                { text: 'Event Tracking Automation', link: '/docs/event-tracking-automation' },
                { text: 'Event Tracking with Action Hooks', link: '/docs/event-tracking-with-action-hooks' },
                { text: 'Event Tracking with REST API', link: '/docs/event-tracking-with-rest-api' },
              ],
            },
          ],
        },
        // 7. Integrations
        {
          text: 'Integrations',
          collapsed: true,
          items: [
            {
              text: 'Forms & Ecommerce',
              collapsed: true,
              items: [
                { text: 'WP Fluent Forms Integration', link: '/docs/wp-fluent-forms-integration-with-fluentcrm' },
                { text: 'WooCommerce Automation', link: '/docs/woocommerce-automation-with-fluentcrm' },
                { text: 'FluentCart Integration', link: '/docs/fluentcart-integration-with-fluentcrm' },
                { text: 'SureCart Automation', link: '/docs/surecart-automation-with-fluentcrm' },
                { text: 'Easy Digital Downloads Integration', link: '/docs/easy-digital-downloads-integration-with-fluentcrm' },
              ],
            },
            {
              text: 'LMS Integrations',
              collapsed: true,
              items: [
                { text: 'LearnDash Integration', link: '/docs/learndash-integration-with-fluentcrm' },
                { text: 'LifterLMS Integration', link: '/docs/lifterlms-integration-with-fluentcrm' },
                { text: 'LearnPress Integration', link: '/docs/learpress-integration-with-fluentcrm' },
                { text: 'Tutor LMS Integration', link: '/docs/tutorlms-integration-with-fluentcrm' },
              ],
            },
            {
              text: 'Membership Integrations',
              collapsed: true,
              items: [
                { text: 'MemberPress Integration', link: '/docs/memberpress-integration-with-fluentcrm' },
                { text: 'Paid Memberships Pro Integration', link: '/docs/paid-memberships-pro-integration-with-fluentcrm' },
                { text: 'Restrict Content Pro Integration', link: '/docs/restrict-content-pro-integration-with-fluentcrm' },
              ],
            },
            {
              text: 'Community & Growth',
              collapsed: true,
              items: [
                { text: 'BuddyBoss Integration', link: '/docs/buddyboss-integration-with-fluentcrm' },
                { text: 'Fluent Community Integration', link: '/docs/fluentcommunity-integration-with-fluentcrm' },
                { text: 'Fluent Affiliate Integration', link: '/docs/fluentaffiliate-integration-with-fluentcrm' },
                { text: 'Fluent Booking Integration', link: '/docs/fluent-booking-integration-with-fluentcrm' },
              ],
            },
            {
              text: 'Builders & Automation Tools',
              collapsed: true,
              items: [
                { text: 'Elementor Integration', link: '/docs/elementor-integration-with-fluentcrm' },
                { text: 'Oxygen Builder Integration', link: '/docs/oxygen-builder-integration-with-fluentcrm' },
                { text: 'Webhook Integration', link: '/docs/webhook-integration' },
                { text: 'Zapier Integration', link: '/docs/zapier-integration-with-fluentcrm' },
              ],
            },
          ],
        },
        // 8. Reports & Analytics
        {
          text: 'Reports & Analytics',
          collapsed: true,
          items: [
            { text: 'CRM Advanced Reports', link: '/docs/crm-advanced-reports' },
            { text: 'Abandoned Cart Report', link: '/docs/abandoned-cart-report' },
            { text: 'WooCommerce Advanced Reports', link: '/docs/woocommerce-advanced-reports' },
            { text: 'EDD Advanced Reports', link: '/docs/edd-advanced-reports' },
            { text: 'LearnDash Advanced Reports', link: '/docs/learndash-advanced-reports' },
            { text: 'LifterLMS Advanced Reports', link: '/docs/lifterlms-advanced-reports' },
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
                { text: 'FluentCRM Contacts Status', link: '/docs/fluentcrm-contacts-status' },
                { text: 'Merge Codes / Smart Codes Usage', link: '/docs/merge-codes-smart-codes-usage' },
                { text: 'Auto-fill Fluent Forms Fields with FluentCRM Data', link: '/docs/auto-fill-fluent-forms-fields-with-fluentcrm-data' },
                { text: 'Cloudflare or Security Plugin Compatibility', link: '/docs/cloudflare-or-security-plugin-compatibility' },
              ],
            },
            {
              text: 'Developer APIs & Hooks',
              collapsed: true,
              items: [
                { text: 'Action Hooks', link: '/docs/action-hooks' },
                { text: 'Contact PHP API', link: '/docs/contact-php-api' },
                { text: 'Lists and Tags PHP API', link: '/docs/lists-and-tags-php-api' },
              ],
            },
            {
              text: 'Custom Automations',
              collapsed: true,
              items: [
                { text: 'Custom Automation Trigger', link: '/docs/custom-automation-trigger' },
                { text: 'Custom Automation Condition', link: '/docs/custom-automation-condition' },
                { text: 'Custom Automation Action', link: '/docs/custom-automation-action' },
                { text: 'Custom Automation Benchmark/Goal', link: '/docs/custom-automation-benchmark-goal' },
              ],
            },
            {
              text: 'Developer Tools',
              collapsed: true,
              items: [
                { text: 'Form Field Code Structure', link: '/docs/form-field-code-structure' },
                { text: 'Useful Code Snippets', link: '/docs/useful-code-snippets' },
                { text: 'WP-CLI Commands', link: '/docs/wp-cli-commands' },
              ],
            },
          ],
        },
        // 10. Migration & Updates
        {
          text: 'Migration & Updates',
          collapsed: true,
          items: [
            {
              text: 'Migration Guides',
              collapsed: true,
              items: [
                { text: 'Migrating from ActiveCampaign', link: '/docs/migrating-into-fluentcrm-from-activecampaign' },
                { text: 'Migrating from ConvertKit', link: '/docs/migrating-into-fluentcrm-from-convertkit' },
                { text: 'Migrating from Drip', link: '/docs/migrating-into-fluentcrm-from-drip' },
                { text: 'Migrating from Mailchimp', link: '/docs/migrating-into-fluentcrm-from-mailchimp' },
                { text: 'Migrating from MailerLite', link: '/docs/migrating-into-fluentcrm-from-mailerlite' },
              ],
            },
          ],
        },
        // 11. Help & Updates
        {
          text: 'Help & Updates',
          collapsed: true,
          items: [
            { text: 'Frequently Asked Questions', link: '/docs/frequently-asked-questions' },
            { text: 'Changelog', link: '/docs/change-log' },
          ],
        },
      ],
    },
    search: {
      provider: 'local',
    },
    footer: {
      message: 'FluentCRM – Marketing Automation for WordPress',
      copyright: '© WPManageNinja. Need help? Get support at wpmanageninja.com',
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
