import type { Product } from "../types"

export const products: Product[] = [
  {
    slug: "leadgen",

    name: "LeadGen",

    tagline:
      "Find better leads, qualify faster, and create a predictable flow of qualified opportunities.",

    summary:
      "LeadGen combines AI lead discovery, enrichment, campaign list building, and CRM workflow mapping so sales teams can move from fragmented research to a cleaner outbound engine.",

    problem:
      "Sales and growth teams lose time across scattered databases, manual research, duplicate cleanup, and inconsistent CRM updates. LeadGen consolidates prospect discovery, qualification, and CRM-ready exports into one flow.",

    capabilities: [
      "AI lead discovery across the live web",

      "Data enrichment with company and contact intelligence",

      "Campaign list creation with qualification signals",

      "CRM-ready sync into HubSpot, Salesforce, Zoho, Pipedrive, webhooks, or APIs",
    ],

    audience: [
      "B2B sales teams",
      "Marketing teams",
      "IT consulting firms",
      "Startups",
      "Recruitment and staffing firms",
    ],

    detail:
      "The public LeadGen landing page positions the product as an end-to-end prospect discovery and qualification engine. It is strongest where teams need better outbound pipeline creation, cleaner CRM discipline, and less manual prospect research.",

    cta: "Request a demo",

    highlights: [
      "AI lead discovery",

      "Smart enrichment",

      "CRM-ready exports",

      "Real-time validation",
    ],

    workflow: [
      "Set your target market by industry, geography, company size, and qualification criteria.",

      "Discover and enrich leads with verified business and contact signals.",

      "Generate outreach-ready lists without duplicate-heavy manual cleanup.",

      "Sync qualified prospects into the active CRM workflow and track performance.",
    ],

    outcomes: [
      "Less time spent researching and cleaning spreadsheets",

      "Higher-quality prospect targeting and outreach context",

      "A steadier flow of qualified B2B opportunities",

      "Cleaner CRM mapping for live sales teams",
    ],

    integrations: [
      "HubSpot",
      "Salesforce",
      "Zoho",
      "Pipedrive",
      "Microsoft Dynamics",
      "Webhook",
      "API Integration",
    ],
  },

  {
    slug: "cloudguardian",

    name: "CloudGuardian.ai",

    tagline:
      "AI cloud security and DPDPA readiness in one managed assessment platform.",

    summary:
      "CloudGuardian.ai helps organisations assess cloud risk, benchmark compliance, prioritise remediation, and extend readiness checks to India DPDPA controls.",

    problem:
      "Security and compliance teams often need clearer posture visibility without heavy manual audit effort. CloudGuardian is designed to make cloud risk, benchmark coverage, and remediation planning easier to act on.",

    capabilities: [
      "Automated multi-cloud assessment",

      "Prioritised reporting with impact and remediation order",

      "Compliance benchmarking across CIS, NIST, PCI DSS, GDPR, SOC, and internal controls",

      "DPDPA readiness assessment with privacy-focused control visibility",
    ],

    audience: [
      "Security teams",
      "Compliance owners",
      "SMBs and mid-market teams",
      "AWS, Azure, GCP, and Alibaba Cloud operators",
    ],

    detail:
      "The flyer positions CloudGuardian.ai as a managed, AI-powered cloud security assessment platform with compliance and privacy readiness depth. It is designed to move teams from periodic reviews to continuous, evidence-ready posture management.",

    cta: "Request a demo",

    highlights: [
      "20+ compliance benchmarks",

      "AI recommendations",

      "Multi-cloud coverage",

      "DPDPA readiness",
    ],

    workflow: [
      "Connect cloud accounts and configurations.",

      "Assess security baseline and risks across posture checks.",

      "Use AI analysis to surface context, likely causes, and remediation logic.",

      "Benchmark findings, assign actions, and generate audit-ready evidence packs.",
    ],

    outcomes: [
      "Single view of cloud gaps and business-level risk",

      "Faster audit readiness with evidence-ready reporting",

      "AI-guided remediation for faster follow-through",

      "Low-configuration managed delivery for teams with limited security bandwidth",
    ],

    integrations: ["AWS", "Azure", "GCP", "Alibaba Cloud"],
  },

  {
    slug: "voice-agent",

    name: "voice-agent",

    tagline:
      "End-to-end voice agent platform for lead management across chatbot, inbound, outbound, CRM, and executive insight flows.",

    summary:
      "voice-agent connects digital campaign demand with AI-led qualification, multilingual voice engagement, CRM discipline, and sales visibility in one modular platform.",

    problem:
      "Campaign clicks and early lead intent often decay because chat, voice, callback, scheduling, and CRM updates are disconnected. voice-agent is designed to qualify quickly, route consistently, and keep the data trail intact.",

    capabilities: [
      "Conversational bot plus inbound and outbound voice engagement",

      "Multilingual qualification and callback workflows",

      "CRM sync with transcript, intent, status, and next-step capture",

      "Executive dashboards and orchestration controls for retries, routing, and escalation",
    ],

    audience: [
      "Sales teams",
      "Campaign-led growth teams",
      "Customer engagement operations",
      "Businesses using Zoho, Salesforce, or custom CRMs",
    ],

    detail:
      "The flyer positions voice-agent as a lead-management platform rather than a narrow call bot. The strongest use case is campaign lead capture into automated qualification, multilingual voice follow-up, CRM updates, and executive reporting without replacing the existing sales stack.",

    cta: "Request a demo",

    highlights: [
      "Digital campaign to CRM",

      "Chat plus voice journey",

      "Multilingual engagement",

      "Sales-ready lead data",
    ],

    workflow: [
      "Campaign clicks land on a controlled landing page experience.",

      "A conversational bot captures intent and offers the next best action.",

      "The prospect chooses call now, callback, or scheduled consultation.",

      "Voice-agent routes the lead into a structured CRM record with transcript and next step.",
    ],

    outcomes: [
      "Instant lead response after campaign click or form intent",

      "Higher conversion potential through faster qualification",

      "24x7 multilingual coverage without linear headcount growth",

      "Structured CRM discipline with transcript and disposition visibility",
    ],

    integrations: [
      "Zoho CRM",
      "Salesforce",
      "Custom CRM",
      "Calendar",
      "Zoom",
      "BI Dashboard",
    ],
  },
]
