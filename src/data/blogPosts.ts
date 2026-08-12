import type { BlogPost } from "../types"

export const blogPosts: BlogPost[] = [
  {
    slug: "recommendation-system-azure-openai-google-search-integration",

    title: "Recommendation System: Azure OpenAI & Google Search",

    category: "AzureOpenAI",

    author: "Abhay Bhan",

    summary:
      "A practical generative AI implementation pattern for supplier recommendation workflows using Azure OpenAI and search integration.",

    audience: "AI engineering and solution teams",

    takeaways: [
      "How retrieval and search augmentation improve recommendation quality",

      "Why workflow orchestration matters as much as model selection",

      "How to connect experimentation with practical business use cases",
    ],

    url: "https://www.refactorq.com/blogs/recommendation-system-azure-openai-google-search-integration",
  },

  {
    slug: "best-practices-to-optimize-cloud",

    title: "Best Practices to optimise cloud cost",

    category: "Cloud",

    author: "Narsing Chinte",

    summary:
      "A practical guide to reducing cloud waste while keeping delivery and platform needs aligned.",

    audience: "Cloud platform and FinOps stakeholders",

    takeaways: [
      "Common sources of cloud spend leakage",

      "Ways to tie optimisation decisions to engineering ownership",

      "How to maintain savings with regular governance loops",
    ],

    url: "https://www.refactorq.com/blogs/best-practices-to-optimize-cloud",
  },

  {
    slug: "what-is-performance-engineering",

    title: "What is Performance Engineering",

    category: "Performance Engineering",

    author: "Narsing Chinte",

    summary:
      "A grounded overview of performance engineering as a discipline for reliability, scalability, and customer experience.",

    audience: "Engineering and architecture teams",

    takeaways: [
      "Performance engineering as a lifecycle discipline",

      "The role of workload modelling and realistic test conditions",

      "Why performance should be tied to business impact metrics",
    ],

    url: "https://www.refactorq.com/blogs/what-is-performance-engineering",
  },

  {
    slug: "basics-of-product-management",

    title: "Basics Of Product Management",

    category: "Product Management",

    author: "Abnish Gautam",

    summary:
      "A practical primer on product development fundamentals, stakeholder alignment, and iterative delivery decision-making.",

    audience: "Product and delivery teams",

    takeaways: [
      "Core product management loops from discovery to delivery",

      "Balancing roadmap ambition with execution constraints",

      "How product management aligns cross-functional teams",
    ],

    url: "https://www.refactorq.com/blogs/basics-of-product-management",
  },

  {
    slug: "runtime-threat-mapping-for-eks",

    title: "RunTime Threat Mapping for AWS EKS using Deepfence ThreatMapper",

    category: "Deepfence",

    author: "R Manigandan",

    summary:
      "An operational security walkthrough for runtime threat visibility across Kubernetes workloads in AWS EKS environments.",

    audience: "Cloud security and platform teams",

    takeaways: [
      "Runtime threat visibility principles for EKS",

      "How to connect DevOps and SecOps perspectives",

      "Practical mapping approaches for cloud-native workloads",
    ],

    url: "https://www.refactorq.com/blogs/runtime-threat-mapping-for-eks",
  },

  {
    slug: "aws-security-assessments",

    title: "AWS Security Assessments: Unlocking Secrets for Your Account",

    category: "AWS",

    author: "R Manigandan",

    summary:
      "Why continuous security assessment matters for AWS environments, and what teams should expect from the exercise.",

    audience: "Security and compliance stakeholders",

    takeaways: [
      "Assessment scope that matters in AWS environments",

      "Risk prioritisation principles for remediation planning",

      "How ongoing assessment differs from one-time audits",
    ],

    url: "https://www.refactorq.com/blogs/aws-security-assessments",
  },

  {
    slug: "guide-to-upgrading-your-eks",

    title: "A Comprehensive Guide to Upgrading Your AWS EKS Cluster",

    category: "AWS",

    author: "Narsing Chinte",

    summary:
      "Upgrade planning guidance for EKS clusters covering feature adoption, stability, and risk-aware rollout sequencing.",

    audience: "Platform engineering teams",

    takeaways: [
      "Upgrade sequencing and compatibility considerations",

      "Operational safeguards during Kubernetes upgrades",

      "How to reduce runtime disruption in managed cluster upgrades",
    ],

    url: "https://www.refactorq.com/blogs/guide-to-upgrading-your-eks",
  },

  {
    slug: "setup-jenkins-to-automate",

    title: "Setup Jenkins Job to Execute Automation Tests",

    category: "Automation Testing",

    author: "Krishna Pukale",

    summary:
      "A practical walkthrough for building Jenkins jobs that run automation suites reliably within CI workflows.",

    audience: "QA automation and DevOps teams",

    takeaways: [
      "CI pipeline setup basics for automated testing",

      "Execution reliability practices for repeatable runs",

      "Improving release feedback loops with automation in CI",
    ],

    url: "https://www.refactorq.com/blogs/setup-jenkins-to-automate",
  },

  {
    slug: "quality-delivered-with-insight-speed",

    title: "Quality delivered with modern insight and speed",

    category: "Quality Engineering",

    author: "Amruta Deshpande",

    summary:
      "A quality engineering perspective on shipping faster without accepting lower release confidence.",

    audience: "Quality engineering leaders",

    takeaways: [
      "How modern quality practices support delivery speed",

      "Balancing test depth with release cadence",

      "Using insight-driven quality signals for decisions",
    ],

    url: "https://www.refactorq.com/blogs/quality-delivered-with-insight-speed",
  },

  {
    slug: "playwright-and-robot-framework",

    title: "Playwright & Robot Framework : Top-Notch Automation Testing",

    category: "Automation Testing",

    author: "Amruta Deshpande",

    summary:
      "An overview of combining modern automation tooling approaches for broader test coverage and stronger reliability.",

    audience: "Automation architects and QA engineers",

    takeaways: [
      "Tooling trade-offs between frameworks",

      "How to structure maintainable automation suites",

      "Ways to improve quality signal depth through better automation design",
    ],

    url: "https://www.refactorq.com/blogs/playwright-and-robot-framework",
  },

  {
    slug: "solutions-to-reduce-it-cost",

    title: "Comprehensive Engineering Solutions to Cut Your IT Costs!",

    category: "Comprehensive Engineering",

    author: "Ram Shelge",

    summary:
      "A perspective on reducing IT cost through disciplined engineering practices rather than isolated tactical cost-cutting.",

    audience: "Technology and business leadership",

    takeaways: [
      "Cost reduction levers across quality, cloud, and security",

      "How architecture and delivery habits shape long-term spend",

      "Why operational discipline matters more than one-off optimisation",
    ],

    url: "https://www.refactorq.com/blogs/solutions-to-reduce-it-cost",
  },

  {
    slug: "ai-powered-recommendation-with-cloud-guardian",

    title: "From alert to action: AI-powered remediation with Cloud Guardian",

    category: "Intelligent Cloud Security",

    author: "Anushka Mane",

    summary:
      "How CloudGuardian uses AI-assisted recommendations to move teams from security alerts to practical next steps.",

    audience: "Security and operations leadership",

    takeaways: [
      "How AI recommendations can reduce remediation lag",

      "Why context-driven remediation guidance improves execution",

      "Where Cloud Guardian fits into continuous security posture workflows",
    ],

    url: "https://www.refactorq.com/blogs/ai-powered-recommendation-with-cloud-guardian",
  },

  {
    slug: "digital-transformation-isnt-about-technology-its-about-building-a-better-business",

    title:
      "Digital Transformation Isn't About Technology. It's About Building a Better Business",

    category: "Digital Transformation",

    author: "Pradeep Singh",

    summary:
      "A practical view on transformation focused on business improvement, operations, and team alignment rather than technology-only narratives.",

    audience: "Business and transformation stakeholders",

    takeaways: [
      "Transformation framing around business outcomes",

      "Operational alignment as a success factor",

      "The role of engineering execution in sustaining change",
    ],

    url: "https://www.refactorq.com/blogs/digital-transformation-isnt-about-technology-its-about-building-a-better-business",
  },
]
