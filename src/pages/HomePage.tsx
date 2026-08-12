import { Link } from "react-router-dom"

import { BOOKING_URL } from "../config/site"

import { services } from "../data/services"
import { products } from "../data/products"
import { caseStudies } from "../data/caseStudies"
import { aviationFocusAreas } from "../data/home"
import { companyStats } from "../data/clients"

import { usePageMeta } from "../lib/meta"

import { HomeHero } from "../components/sections/HomeHero"
import { TestimonialSection } from "../components/sections/TestimonialSection"
import { ArrowLink } from "../components/ui/ArrowLink"
import { ButtonLink } from "../components/ui/ButtonLink"
import { LogoStrip } from "../components/ui/LogoStrip"
import { MediaPlaceholder } from "../components/ui/MediaPlaceholder"
import { Reveal } from "../components/ui/Reveal"
import { SectionHeader } from "../components/ui/SectionHeader"
import { ServiceCard } from "../components/ui/ServiceCard"
import { ProductCard } from "../components/ui/ProductCard"
import { AviationFocusCard } from "../components/ui/AviationFocusCard"
import { StatBand } from "../components/ui/StatBand"

export function HomePage() {
  usePageMeta(
    "Consulting for measurable technology outcomes",

    "RefactorQ.AI helps organisations improve delivery, operations, and customer experience with practical AI, cloud, quality, security, and engineering expertise.",
  )

  const spotlightCaseStudy = caseStudies[0]

  const supportingCaseStudies = caseStudies.slice(1, 3)

  return (
    <>
      <HomeHero />

      <section className="page-shell py-14">
        <LogoStrip />
      </section>

      <section className="page-shell py-12 lg:py-16">
        <SectionHeader
          body="We focus on practical transformation priorities: delivery speed, cloud and platform efficiency, quality confidence, and secure operations. AI is used where it creates measurable leverage, not as a layer on top of every workflow."
          eyebrow="Positioning"
          title="A practical consulting model for modern delivery and operations."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            [
              "01",
              "Business-first prioritisation",

              "Every engagement starts with where improvement is measurable, then maps technology changes to those outcomes.",
            ],

            [
              "02",
              "Execution discipline",

              "Consulting recommendations are paired with implementation support so operating models can hold up in day-to-day delivery.",
            ],

            [
              "03",
              "Balanced AI adoption",

              "AI and automation are introduced where they improve responsiveness, scale, and cost profile without increasing operational risk.",
            ],
          ].map(([num, title, body]) => (
            <Reveal key={title}>
              <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 p-6.5 backdrop-blur-md shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-md">
                <div>
                  <span className="inline-block rounded-md border border-orange-500/25 bg-orange-500/[0.08] px-2.5 py-0.5 font-mono text-xs font-bold text-orange-600">
                    {num}
                  </span>
                  <h3 className="mt-4 text-lg font-bold tracking-tight text-[var(--ink)] transition-colors duration-200 group-hover:text-orange-600">
                    {title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600 font-normal">
                    {body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-surface">
        <div className="page-shell py-24">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              body="Seven consolidated service lines. Each one has a defined operating scope, business outcome, and clear path into related capabilities."
              eyebrow="Services"
              title="A cleaner services model built for how modern IT consulting is actually bought."
            />
            <ButtonLink href="/services" label="Explore all services" />
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-12 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_30px_80px_rgba(10,18,40,0.08)] md:p-10">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <span className="eyebrow">Next step</span>
                <h3 className="text-2xl font-semibold text-[var(--ink)]">
                  Not sure where AI should sit in your roadmap?
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)]">
                  We can start with a focused discovery workshop that maps where
                  AI, automation, or platform engineering will create measurable
                  leverage first.
                </p>
              </div>
              <ButtonLink href={BOOKING_URL} label="Book a consultation" />
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell py-24">
        <SectionHeader
          body="Products sit alongside services as proof that the team can package operational knowledge into repeatable systems."
          eyebrow="Products"
          title="Three product lines that make the AI-first story tangible."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {products.map((product) => (
            <Reveal key={product.slug}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-dark">
        <div className="page-shell py-24">
          <SectionHeader
            body="A disciplined consulting process adapted from the current site and tightened for AI-era delivery work."
            eyebrow="How we work"
            title="Clear operating stages from discovery to adoption."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              [
                "01",
                "Discover",
                "Assess systems, teams, workflow friction, and where measurable impact is available.",
              ],

              [
                "02",
                "Design",
                "Shape the operating model, architecture, and control points before implementation starts.",
              ],

              [
                "03",
                "Engineer",
                "Build, tune, integrate, and validate with delivery teams rather than from a distance.",
              ],

              [
                "04",
                "Sustain",
                "Track outcomes, transfer knowledge, and keep improving after launch instead of walking away.",
              ],
            ].map(([number, title, body]) => (
              <article className="dark-card" key={title}>
                <span className="stat-label">{number}</span>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell py-24">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionHeader
            body="Aviation remains a standalone industry navigation item, but it is now tied into the broader AI-first and engineering-led story rather than isolated as a side practice."
            eyebrow="Aviation Consulting"
            title="Industry-specific consulting for aviation systems, operations, and digital transformation."
          />
          <div className="grid gap-5">
            {aviationFocusAreas.map((area, index) => (
              <AviationFocusCard area={area} index={index} key={area.title} />
            ))}
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/aviation" label="Explore aviation" />
              <ButtonLink
                href="/case-studies/it-systems-operational-process-assessment"
                label="See aviation-relevant case study"
                variant="secondary"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-surface">
        <div className="page-shell py-24">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              body="Selections grounded in the live site's current case studies across performance, cloud, AI, security, and digital transformation."
              eyebrow="Case studies"
              title="Proof points that carry the repositioning beyond messaging."
            />
            <ArrowLink href="/case-studies" label="View all case studies" />
          </div>

          <Reveal className="mt-12 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(10,18,40,0.08)]">
            <div className="grid gap-0 lg:grid-cols-2">
              <MediaPlaceholder
                className="h-full min-h-64"
                label={`Photo — ${spotlightCaseStudy.client}`}
                ratio="4/3"
              />
              <div className="flex flex-col justify-center p-8 md:p-10">
                <span className="tag w-fit">{spotlightCaseStudy.category}</span>
                <h3 className="mt-4 text-2xl font-semibold leading-tight text-[var(--ink)] md:text-3xl">
                  {spotlightCaseStudy.title}
                </h3>
                <p className="card-copy">{spotlightCaseStudy.summary}</p>
                <p className="mt-6 text-lg font-semibold text-[var(--primary)]">
                  {spotlightCaseStudy.metric}
                </p>
                <div className="mt-6">
                  <ArrowLink
                    href={`/case-studies/${spotlightCaseStudy.slug}`}
                    label="Read the full case study"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {supportingCaseStudies.map((caseStudy) => (
              <Reveal key={caseStudy.slug}>
                <Link
                  className="card card-link media-card flex h-full flex-col"
                  to={`/case-studies/${caseStudy.slug}`}
                >
                  <MediaPlaceholder label={`Photo — ${caseStudy.client}`} />
                  <div className="media-card-body flex flex-1 flex-col">
                    <span className="tag w-fit">{caseStudy.category}</span>
                    <h3 className="card-title mt-4">{caseStudy.title}</h3>
                    <p className="card-copy">{caseStudy.summary}</p>
                    <p className="mt-4 text-sm font-semibold text-[var(--primary)]">
                      {caseStudy.metric}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell py-24">
        <SectionHeader
          eyebrow="What clients say"
          title="Feedback grounded in delivery, not just advisory sentiment."
        />
        <div className="mt-12">
          <TestimonialSection />
        </div>
        <p className="mt-6 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
          Placeholder quotes — swap in verified client testimonials.
        </p>
      </section>

      <section className="section-dark">
        <div className="page-shell py-20">
          <StatBand stats={companyStats} />
        </div>
      </section>
    </>
  )
}
