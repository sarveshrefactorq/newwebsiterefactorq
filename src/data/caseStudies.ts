import type { CaseStudy } from "../types"

export const caseStudies: CaseStudy[] = [
  {
    slug: "performance-engineering",

    title: "Performance Engineering",

    category: "Performance Engineering",

    client: "Product development company",

    summary:
      "A customer with nearly 150 underperforming APIs needed better responsiveness and lower infrastructure waste without disrupting feature delivery.",

    challenge:
      "API response performance and infrastructure cost were both trending in the wrong direction as customer load and platform complexity increased.",

    approach:
      "RefactorQ profiled critical paths, tuned API and infrastructure behaviour, and built a focused remediation plan tied to measurable load outcomes.",

    outcomes: [
      "Application optimisation roadmap tied to measured bottlenecks",

      "Cost reduction through focused performance remediation",

      "Higher confidence in throughput under peak demand",
    ],

    tags: ["Application optimisation", "Cost reduction", "Scalability"],

    metric: "Measured infrastructure savings after API remediation",

    url: "https://www.refactorq.com/case-studies/performance-engineering",
  },

  {
    slug: "performance-testing",

    title: "Performance Testing",

    category: "Performance Engineering",

    client: "Global business process and technology services provider",

    summary:
      "A large enterprise services environment required robust workload modelling and observability to prevent performance regressions under heavy load.",

    challenge:
      "The customer needed reliable performance validation before release, but lacked a repeatable process for architecture understanding and stress behaviour analysis.",

    approach:
      "RefactorQ combined architecture review, APM integration, and realistic workload modelling to build a stronger testing baseline.",

    outcomes: [
      "Improved architecture understanding for performance bottlenecks",

      "APM-backed validation for real runtime behaviour",

      "Workload modelling that better represented production pressure",
    ],

    tags: ["Architecture", "APM integration", "Workload modelling"],

    metric: "Higher release confidence under production-like load",

    url: "https://www.refactorq.com/case-studies/performance-testing",
  },

  {
    slug: "setting-up-qa-practices",

    title: "Setting up QA Practices",

    category: "Quality Engineering",

    client: "E-learning provider",

    summary:
      "The client needed a stronger quality baseline across mobile and web applications, with better planning, automation coverage, and API validation.",

    challenge:
      "Quality activities were inconsistent across teams, and release confidence depended too heavily on ad hoc testing effort.",

    approach:
      "RefactorQ introduced a structured QA operating model with agile test planning, automation, and API quality coverage.",

    outcomes: [
      "Structured QA operating model",

      "Automation and API testing foundation",

      "Improved release confidence across product changes",
    ],

    tags: ["Agile testing", "Automation", "API testing"],

    metric: "A repeatable QA operating model embedded into delivery",

    url: "https://www.refactorq.com/case-studies/setting-up-qa-practices",
  },

  {
    slug: "product-development",

    title: "Product Development",

    category: "Product Engineering",

    client: "Data platform company",

    summary:
      "The customer needed a unified product platform spanning multiple data systems and workflows with faster delivery cycles.",

    challenge:
      "Product complexity and integration effort made it difficult to sustain roadmap speed while preserving quality.",

    approach:
      "RefactorQ used agile product delivery patterns and platform integration design to accelerate MVP and scale phases.",

    outcomes: [
      "MVP delivery with clearer iteration cycles",

      "Improved data platform integration flow",

      "Delivery cadence aligned to business priorities",
    ],

    tags: ["Agile process", "MVP", "Data platform"],

    metric: "Faster product delivery with integration discipline",

    url: "https://www.refactorq.com/case-studies/product-development",
  },

  {
    slug: "cloud-native-development",

    title: "Cloud Native Development",

    category: "Cloud, DevOps & SRE Engineering",

    client: "Healthcare SaaS company",

    summary:
      "A healthcare product company wanted to standardise deployments, modernise operations, and improve its ability to scale globally with a cloud-native delivery model.",

    challenge:
      "The customer needed a resilient cloud-native operating model that could support healthcare product growth without brittle deployment patterns.",

    approach:
      "RefactorQ delivered Kubernetes migration support, deployment standardisation, and operational coaching for sustained reliability.",

    outcomes: [
      "Kubernetes migration and deployment standardisation",

      "Operational coaching for platform maturity",

      "Improved release repeatability and platform resilience",
    ],

    tags: ["Kubernetes", "Platform engineering", "Operational coaching"],

    metric: "Standardised cloud-native delivery across core products",

    url: "https://www.refactorq.com/case-studies/cloud-native-development",
  },

  {
    slug: "migration-to-aws-cloud",

    title: "Migration to AWS Cloud",

    category: "Cloud, DevOps & SRE Engineering",

    client: "IT consulting company",

    summary:
      "A migration program covering web and mobile product workloads required architecture redesign and secure cloud deployment practices.",

    challenge:
      "The customer needed to move business-critical workloads to AWS while preserving delivery continuity and compliance posture.",

    approach:
      "RefactorQ designed cloud architecture and automation practices for migration, deployment, and security baseline enforcement.",

    outcomes: [
      "Cloud infrastructure architecture clarity",

      "Automation and repeatable deployment setup",

      "Improved security and compliance alignment",
    ],

    tags: ["Migration", "Automation", "Cloud architecture"],

    metric: "Lower migration risk with stronger deployment standards",

    url: "https://www.refactorq.com/case-studies/migration-to-aws-cloud",
  },

  {
    slug: "migration-from-onprem-to-aws",

    title: "Migration from On-Prem to AWS",

    category: "Cloud, DevOps & SRE Engineering",

    client: "Global legal products organisation",

    summary:
      "A complex on-prem to AWS modernisation initiative included API stack containerisation and deployment pipeline upgrades.",

    challenge:
      "Legacy infrastructure constrained scale and release cadence, while migration risk needed tight control.",

    approach:
      "RefactorQ delivered migration planning, API containerisation, and deployment automation to modernise the stack.",

    outcomes: [
      "Cloud migration execution with reduced disruption",

      "API containerisation and stack modernisation",

      "Delivery speed improvements through automation",
    ],

    tags: ["Cloud migration", "Containerisation", "Automation"],

    metric: "Modernised stack with improved delivery control",

    url: "https://www.refactorq.com/case-studies/migration-from-onprem-to-aws",
  },

  {
    slug: "cloud-security-aws-security-assessment",

    title: "Cloud Security Assessment",

    category: "Security Engineering",

    client: "Enterprise organisation on AWS",

    summary:
      "The customer needed a broad security review of critical AWS-hosted services, along with actionable remediation priorities and compliance visibility.",

    challenge:
      "Security gaps, misconfiguration risk, and compliance obligations required clearer visibility and better prioritisation.",

    approach:
      "RefactorQ performed AWS security assessment, risk analysis, and remediation sequencing to strengthen cloud posture.",

    outcomes: [
      "AWS security assessment and risk analysis",

      "Compliance management recommendations",

      "Remediation prioritisation tied to operational risk",
    ],

    tags: ["AWS security", "Risk analysis", "Compliance"],

    metric: "Actionable remediation roadmap for cloud security posture",

    url: "https://www.refactorq.com/case-studies/cloud-security-aws-security-assessment",
  },

  {
    slug: "cloud-guardian-aws-security-assessment",

    title: "Cloud Guardian",

    category: "Security Engineering",

    client: "Growing digital platform",

    summary:
      "The customer wanted stronger cloud security and infrastructure discipline with continuous posture visibility.",

    challenge:
      "Security hardening and compliance management needed to happen without introducing delivery bottlenecks.",

    approach:
      "RefactorQ used a Cloud Guardian-led operating model for posture checks, hardening, and ongoing compliance visibility.",

    outcomes: [
      "Infrastructure automation and hardening",

      "Security monitoring with better remediation visibility",

      "Compliance management support for cloud teams",
    ],

    tags: ["Cloud guardian", "Security hardening", "Compliance"],

    metric: "Continuous security posture management model",

    url: "https://www.refactorq.com/case-studies/cloud-guardian-aws-security-assessment",
  },

  {
    slug: "ai-calling-solution",

    title: "AI Calling Solution",

    category: "Agentic AI & Automation",

    client: "Pan-India support operation",

    summary:
      "A customer verification process depended on a large manual calling operation. As volumes grew, the process became slower, more expensive, and harder to scale.",

    challenge:
      "Manual verification calls could not keep up with outbound demand and created a high operational bottleneck.",

    approach:
      "RefactorQ implemented voice automation, AI-agent orchestration, and workflow controls to move verification into a scalable process.",

    outcomes: [
      "Voice automation for repetitive outbound calls",

      "AI agents orchestrated across workflow steps",

      "Reduced dependence on manual throughput",
    ],

    tags: ["Voice automation", "AI agents", "Workflow orchestration"],

    metric: "High-volume verification moved to an automated voice workflow",

    url: "https://www.refactorq.com/case-studies/ai-calling-solution",
  },

  {
    slug: "health-tech-platform",

    title: "Health-Tech Platform",

    category: "AI & ML Engineering",

    client: "Wellness and health-tech platform",

    summary:
      "The client wanted a unified platform to digitise coaching and wellness workflows while introducing automation and AI-led support capabilities.",

    challenge:
      "Service operations were spread across disconnected tools and required a unified digital operating model.",

    approach:
      "RefactorQ built a health-tech platform with CRM, automation, and AI-assisted operational support features.",

    outcomes: [
      "Unified business workflow design",

      "AI-powered CRM and automation features",

      "Improved service operations and client management",
    ],

    tags: ["AI-powered CRM", "Business automation", "Platform delivery"],

    metric: "A unified digital workflow for wellness operations",

    url: "https://www.refactorq.com/case-studies/health-tech-platform",
  },

  {
    slug: "streamlining-operations-for-enhanced-performance",

    title: "Operational streamlining for a consumer goods business",

    category: "Cloud FinOps",

    client: "FMCG company",

    summary:
      "The client needed better scalability, disaster recovery posture, monitoring, and cost management across a growing operational estate.",

    challenge:
      "Operational complexity increased outage risk and cost pressure across key business systems.",

    approach:
      "RefactorQ improved availability planning, monitoring practices, and cost controls to stabilise day-to-day operations.",

    outcomes: [
      "Cost reduction strategies grounded in operations data",

      "Monitoring and alerting improvements",

      "Scalability and availability planning for growth",
    ],

    tags: ["Monitoring", "Cost reduction", "Availability"],

    metric: "A clearer operating model for cost-aware platform growth",

    url: "https://www.refactorq.com/case-studies/streamlining-operations-for-Enhanced-performance",
  },

  {
    slug: "it-systems-operational-process-assessment",

    title: "IT Systems & Operational Process Assessment",

    category: "Digital Transformation",

    client: "Large Gulf-based catering organisation",

    summary:
      "A business producing more than 2.25 lakh meals per day engaged RefactorQ to assess systems, process bottlenecks, and digital transformation priorities.",

    challenge:
      "Scale of operations exposed process bottlenecks and legacy system friction across business-critical workflows.",

    approach:
      "RefactorQ conducted systems and process assessment, then created a digital roadmap tied to measurable operational gains.",

    outcomes: [
      "Systems and process assessment across operations",

      "Digital transformation roadmap",

      "Improvement opportunities tied to measurable operating gains",
    ],

    tags: [
      "Process optimisation",
      "Systems assessment",
      "Transformation roadmap",
    ],

    metric:
      "A transformation roadmap grounded in large-scale operational reality",

    url: "https://www.refactorq.com/case-studies/it-systems-operational-process-assessment",
  },

  {
    slug: "engineering-assessment-devops-transformation",

    title: "Engineering Assessment & DevOps Transformation",

    category: "Cloud, DevOps & SRE Engineering",

    client: "Product and engineering leadership team",

    summary:
      "The engagement focused on engineering visibility, delivery bottlenecks, and DevOps transformation opportunities.",

    challenge:
      "Leaders needed clear visibility into engineering maturity and an actionable plan for delivery process improvement.",

    approach:
      "RefactorQ combined value stream mapping, APM implementation, and DevOps transformation planning.",

    outcomes: [
      "Engineering process visibility across workflows",

      "APM-backed operational insights",

      "DevOps transformation roadmap",
    ],

    tags: ["Value stream mapping", "APM", "DevOps"],

    metric: "Improved visibility into delivery and operations flow",

    url: "https://www.refactorq.com/case-studies/engineering-assessment-devops-transformation",
  },

  {
    slug: "distribution-management-platform",

    title: "Distribution Management Platform",

    category: "Product Engineering",

    client: "Distribution-heavy enterprise business",

    summary:
      "A centralized platform was needed to improve order, inventory, and dealer operations visibility.",

    challenge:
      "Legacy dealer and distribution workflows made it difficult to maintain operational transparency and planning accuracy.",

    approach:
      "RefactorQ built a centralized platform covering dealer, inventory, and order management processes.",

    outcomes: [
      "Improved order and inventory visibility",

      "Centralized dealer operations management",

      "More predictable downstream workflow execution",
    ],

    tags: ["Dealer management", "Order management", "Inventory"],

    metric: "Centralized distribution workflow and visibility",

    url: "https://www.refactorq.com/case-studies/distribution-management-platform",
  },

  {
    slug: "e-commerce-platform-retail",

    title: "E-Commerce Platform",

    category: "Product Engineering",

    client: "Retail commerce business",

    summary:
      "The customer required a scalable digital commerce platform with cleaner fulfillment and customer experience flows.",

    challenge:
      "Existing commerce operations lacked integrated order and inventory controls for scalable online growth.",

    approach:
      "RefactorQ delivered platform architecture and workflow design for marketplace, order, and inventory operations.",

    outcomes: [
      "Scalable online marketplace foundation",

      "Improved order and fulfillment process control",

      "Better inventory and customer flow visibility",
    ],

    tags: ["E-commerce", "Order management", "Inventory"],

    metric: "Scalable commerce operating model",

    url: "https://www.refactorq.com/case-studies/e-commerce-platform-retail",
  },
]
