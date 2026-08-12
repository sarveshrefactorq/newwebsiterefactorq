import { BOOKING_URL } from "../config/site"

export const heroSlides = [
  {
    id: "ai-first",

    eyebrow: "RefactorQ.AI",

    title: "Consulting that turns AI potential into operational results.",

    text: "We help organisations apply AI where it improves response time, delivery throughput, and customer experience, while keeping engineering quality and control intact.",

    primary: { label: "Book a consultation", href: BOOKING_URL },

    secondary: { label: "Explore services", href: "/services" },
  },

  {
    id: "engineering-credibility",

    eyebrow: "Engineering depth",

    title:
      "Performance, cloud, quality, and security depth that supports long-term change.",

    text: "Advisory and implementation teams work together so architecture decisions, automation, and operations improvements survive beyond launch.",

    primary: { label: "Explore our services", href: "/services" },

    secondary: { label: "See case studies", href: "/case-studies" },
  },

  {
    id: "products",

    eyebrow: "Products",

    title:
      "Products that reflect how we build and operate intelligent systems.",

    text: "LeadGen, CloudGuardian, and voice-agent show how RefactorQ turns delivery expertise into products that solve operational problems at scale.",

    primary: { label: "See our products", href: "/products" },

    secondary: { label: "Request a demo", href: "/contact" },
  },
]

export const aviationFocusAreas = [
  {
    title: "Agentic operations for aviation",

    text: "AI-assisted workflows for maintenance, scheduling, and operational decision support with human review where it matters.",
  },

  {
    title: "Performance and reliability under peak load",

    text: "Engineering for systems that cannot degrade during operational spikes, disruption scenarios, or safety-critical workflows.",
  },

  {
    title: "Cloud security and compliance readiness",

    text: "Aviation-aware cloud security, posture reviews, and delivery controls aligned with regulated operating environments.",
  },
]
