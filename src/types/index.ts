export type Service = {
  slug: string

  title: string

  shortTitle: string

  tagline: string

  summary: string

  includes: string[]

  approach: string[]

  tools: string[]

  faq: Array<{ question: string; answer: string }>

  caseStudySlug: string

  cta: string

  related: string[]
}

export type Product = {
  slug: string

  name: string

  tagline: string

  summary: string

  problem: string

  capabilities: string[]

  audience: string[]

  detail: string

  cta: string

  highlights: string[]

  workflow?: string[]

  outcomes?: string[]

  integrations?: string[]
}

export type CaseStudy = {
  slug: string

  title: string

  category: string

  client: string

  summary: string

  challenge: string

  approach: string

  outcomes: string[]

  tags: string[]

  metric: string

  url?: string
}

export type BlogPost = {
  slug: string

  title: string

  category: string

  author: string

  summary: string

  audience: string

  takeaways: string[]

  url: string
}

export type JobOpening = {
  title: string

  team: string

  location: string

  summary: string
}

export type TeamMember = {
  name: string

  role: string

  image: string
}

export type Testimonial = {
  quote: string

  name: string

  role: string

  initials: string
}
