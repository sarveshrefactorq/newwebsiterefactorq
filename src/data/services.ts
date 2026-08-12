import type { Service } from "../types"

export const services: Service[] = [
  {
    slug: "ai-ml-engineering",

    title: "AI & ML Engineering",

    shortTitle: "AI & ML",

    tagline: "Applied AI systems that improve real delivery, not lab demos.",

    summary:
      "From model tuning to MLOps, RefactorQ helps teams move beyond experimentation into reliable, monitored, production-grade AI delivery.",

    includes: [
      "Model tuning and evaluation strategy",

      "Prompt, retrieval, and orchestration optimisation",

      "MLOps pipelines and deployment standards",

      "Governance, observability, and cost controls",
    ],

    approach: [
      "Identify the business workflow where AI creates measurable leverage.",

      "Benchmark model quality, latency, safety, and operating cost.",

      "Tune the system architecture across models, prompts, retrieval, and tooling.",

      "Ship observability and guardrails so teams can operate the solution with confidence.",
    ],

    tools: [
      "OpenAI",
      "Azure OpenAI",
      "LangChain",
      "Vector DBs",
      "Python",
      "AWS",
    ],

    faq: [
      {
        question: "Do you only work on greenfield AI initiatives?",

        answer:
          "No. Most engagements start with an existing workflow, proof of concept, or model stack that needs stronger quality, lower latency, or better operational discipline.",
      },

      {
        question:
          "Can you support regulated or security-sensitive environments?",

        answer:
          "Yes. We design review paths, access controls, evaluation routines, and deployment patterns that fit enterprise governance requirements.",
      },

      {
        question: "How do you measure success?",

        answer:
          "We define success in business terms first, then map technical metrics such as accuracy, deflection rate, response quality, latency, and unit cost to that outcome.",
      },
    ],

    caseStudySlug: "health-tech-platform",

    cta: "Talk to an AI consultant",

    related: ["agentic-ai-automation", "cloud-devops-sre-engineering"],
  },

  {
    slug: "agentic-ai-automation",

    title: "Agentic AI & Automation",

    shortTitle: "Agentic AI",

    tagline:
      "Multi-step AI workflows that act with control, traceability, and business context.",

    summary:
      "We design agentic systems for voice, support, operations, and internal workflows, combining orchestration, escalation logic, and human review where it matters.",

    includes: [
      "Agent workflow design",

      "voice-agent orchestration",

      "Task automation and human handoff flows",

      "Monitoring, auditability, and safety controls",
    ],

    approach: [
      "Map the workflow, decision boundaries, and failure modes before introducing autonomy.",

      "Design tools, memory, escalation, and approval steps for each agent path.",

      "Pilot on high-volume tasks where throughput and response time matter.",

      "Continuously refine based on operational signals, transcripts, and user feedback.",
    ],

    tools: [
      "Voice AI",
      "Workflow Engines",
      "LLM Orchestration",
      "APIs",
      "CRM Integrations",
    ],

    faq: [
      {
        question: "Where is agentic AI useful today?",

        answer:
          "It is strongest in high-volume, repeatable, decision-based workflows such as lead qualification, verification calls, ticket triage, and internal operations support.",
      },

      {
        question: "Do your agents replace teams?",

        answer:
          "The operating model is augmentation first. We automate repetitive work, improve response speed, and keep humans in the loop for exceptions and critical decisions.",
      },

      {
        question: "Can this integrate with our current stack?",

        answer:
          "Yes. We generally integrate with existing CRMs, support platforms, workflow systems, and data stores rather than forcing a platform rewrite.",
      },
    ],

    caseStudySlug: "ai-calling-solution",

    cta: "Design an agentic workflow",

    related: ["ai-ml-engineering", "quality-engineering-test-automation"],
  },

  {
    slug: "cloud-devops-sre-engineering",

    title: "Cloud, DevOps & SRE Engineering",

    shortTitle: "Cloud, DevOps & SRE",

    tagline:
      "Reliable platforms, faster releases, and cleaner operational ownership.",

    summary:
      "We help organisations modernise infrastructure, strengthen release engineering, and adopt SRE patterns that improve both delivery speed and runtime reliability.",

    includes: [
      "Cloud architecture and migration",

      "CI/CD and infrastructure as code",

      "Kubernetes and platform engineering",

      "Monitoring, incident readiness, and reliability practices",
    ],

    approach: [
      "Assess architecture, deployment friction, and reliability gaps.",

      "Standardise environments, build pipelines, and observability foundations.",

      "Introduce SRE guardrails across service ownership, alerts, and runbooks.",

      "Measure change failure rate, recovery speed, and release throughput over time.",
    ],

    tools: [
      "AWS",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Jenkins",
      "Grafana",
    ],

    faq: [
      {
        question: "Can you work with teams already on AWS or Kubernetes?",

        answer:
          "Yes. A large part of our work is improving existing cloud estates that have grown quickly and now need better standardisation, security, or reliability.",
      },

      {
        question: "Do you only do migration projects?",

        answer:
          "No. We also support platform hardening, SRE maturity, deployment acceleration, and cost-aware infrastructure redesign.",
      },

      {
        question: "How does FinOps fit in?",

        answer:
          "FinOps is treated as part of platform discipline. Architecture decisions, rightsizing, and observability are linked directly to spend efficiency.",
      },
    ],

    caseStudySlug: "cloud-native-development",

    cta: "Book a platform review",

    related: ["cloud-finops", "security-engineering"],
  },

  {
    slug: "performance-engineering",

    title: "Performance Engineering",

    shortTitle: "Performance",

    tagline:
      "Scalability and response-time engineering for business-critical systems.",

    summary:
      "RefactorQ's performance engineers diagnose bottlenecks, improve architecture, and validate systems under realistic production pressure.",

    includes: [
      "Load, stress, and endurance testing",

      "APM instrumentation and profiling",

      "API and database optimisation",

      "Performance baselining and remediation planning",
    ],

    approach: [
      "Model user behaviour, workloads, and system constraints.",

      "Capture traces, isolate bottlenecks, and validate infrastructure assumptions.",

      "Optimise the highest-impact application, query, and architecture paths.",

      "Re-test against clear business thresholds and rollout targets.",
    ],

    tools: ["JMeter", "Gatling", "k6", "New Relic", "Datadog", "APM Tooling"],

    faq: [
      {
        question: "Is performance work only useful before launch?",

        answer:
          "No. We are frequently called in after rising cloud bills, customer latency complaints, or scaling events expose weak spots in production systems.",
      },

      {
        question: "Do you provide remediation or only reports?",

        answer:
          "We do both. Our preference is to pair assessment with implementation so the highest-value fixes actually land.",
      },

      {
        question: "What kind of outcome should we expect?",

        answer:
          "The right outcome depends on the bottleneck, but the goal is always measurable: faster response times, more stable throughput, or lower infrastructure waste.",
      },
    ],

    caseStudySlug: "performance-engineering",

    cta: "Request a performance audit",

    related: [
      "quality-engineering-test-automation",
      "cloud-devops-sre-engineering",
    ],
  },

  {
    slug: "quality-engineering-test-automation",

    title: "Quality Engineering & Test Automation",

    shortTitle: "Quality Engineering",

    tagline:
      "Quality systems that keep delivery fast without weakening release confidence.",

    summary:
      "We combine test strategy, automation design, API quality, and release discipline so quality becomes a delivery accelerator instead of a late-stage checkpoint.",

    includes: [
      "Quality strategy and operating model",

      "Web, mobile, and API automation",

      "Regression acceleration and CI quality gates",

      "Test data and environment management",
    ],

    approach: [
      "Audit the current test pyramid, release risk, and defect patterns.",

      "Prioritise automation where it removes real delivery friction.",

      "Embed quality into CI and sprint workflows.",

      "Track release confidence, defect escape rate, and execution speed.",
    ],

    tools: [
      "Playwright",
      "Cypress",
      "Postman",
      "Robot Framework",
      "Jenkins",
      "CI Pipelines",
    ],

    faq: [
      {
        question: "Do you replace manual QA entirely?",

        answer:
          "No. We use automation where it improves repeatability and speed, while keeping exploratory, risk-based, and release-focused manual testing where it adds judgment.",
      },

      {
        question: "Can you improve an existing automation suite?",

        answer:
          "Yes. Many teams already have automation, but the suite is fragile, slow, or disconnected from release flow. That is a common engagement pattern.",
      },

      {
        question: "How do you measure quality improvement?",

        answer:
          "We focus on release confidence, defect leakage, automation execution time, and the practical ability to ship change without creating new risk.",
      },
    ],

    caseStudySlug: "setting-up-qa-practices",

    cta: "Discuss test acceleration",

    related: ["performance-engineering", "agentic-ai-automation"],
  },

  {
    slug: "security-engineering",

    title: "Security Engineering",

    shortTitle: "Security",

    tagline:
      "Cloud and delivery security grounded in engineering practice, not checkbox compliance.",

    summary:
      "From AWS assessments to hardening programs and DevSecOps improvements, we help teams reduce risk while staying practical about how software is actually delivered.",

    includes: [
      "AWS and cloud security assessments",

      "Infrastructure hardening and remediation",

      "DevSecOps guardrails",

      "Compliance mapping and continuous posture monitoring",
    ],

    approach: [
      "Assess the attack surface, delivery model, and current control coverage.",

      "Prioritise the highest-risk infrastructure, identity, and pipeline gaps.",

      "Implement repeatable controls and monitoring instead of one-off fixes.",

      "Use CloudGuardian and engineering runbooks to keep posture current over time.",
    ],

    tools: [
      "CloudGuardian",
      "AWS",
      "IaC Scanning",
      "IAM Review",
      "Security Benchmarks",
    ],

    faq: [
      {
        question: "Do you focus only on compliance?",

        answer:
          "No. We treat compliance as one output. The main objective is to reduce real operational and architectural risk in the way the platform is built and run.",
      },

      {
        question: "Can you support remediation after assessment?",

        answer:
          "Yes. We can stay through remediation planning, hardening work, automation, and verification.",
      },

      {
        question: "Where does CloudGuardian fit?",

        answer:
          "CloudGuardian supports continuous security posture monitoring and AI-assisted remediation guidance as part of a broader security engineering programme.",
      },
    ],

    caseStudySlug: "cloud-security-aws-security-assessment",

    cta: "Schedule a security assessment",

    related: ["cloud-devops-sre-engineering", "cloud-finops"],
  },

  {
    slug: "cloud-finops",

    title: "Cloud FinOps",

    shortTitle: "Cloud FinOps",

    tagline:
      "Cost visibility and operating discipline for cloud estates that have scaled faster than spend controls.",

    summary:
      "We help teams build a FinOps muscle that links architecture, engineering behaviour, and commercial accountability across cloud usage.",

    includes: [
      "Cloud cost review and baseline analysis",

      "Rightsizing and waste reduction plans",

      "Unit cost and service ownership reporting",

      "Budget guardrails and optimisation workflow design",
    ],

    approach: [
      "Make spend visible by team, platform, environment, and service.",

      "Identify immediate savings along with structural cost drivers.",

      "Connect architecture and deployment choices to financial impact.",

      "Set operating cadences so optimisation continues after the initial review.",
    ],

    tools: [
      "AWS Cost Explorer",
      "FinOps Dashboards",
      "Tagging Standards",
      "Rightsizing Reports",
    ],

    faq: [
      {
        question: "Is FinOps just a one-time cloud cleanup?",

        answer:
          "Not if it is done well. We treat it as an ongoing operating model that improves engineering decisions, forecasting, and accountability.",
      },

      {
        question: "Can you help us if our reporting is weak today?",

        answer:
          "Yes. A typical first step is improving the visibility and tagging discipline needed to make cloud spend actionable.",
      },

      {
        question: "Do you work alongside platform teams?",

        answer:
          "Yes. FinOps is most effective when engineering, operations, and finance can act on the same signals.",
      },
    ],

    caseStudySlug: "streamlining-operations-for-enhanced-performance",

    cta: "Get a cloud cost review",

    related: ["cloud-devops-sre-engineering", "security-engineering"],
  },
]
