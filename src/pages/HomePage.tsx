import { Link } from "react-router-dom"

import { BOOKING_URL } from "../config/site"

import { services } from "../data/services"
import { products } from "../data/products"
import { caseStudies } from "../data/caseStudies"
import { blogPosts } from "../data/blogPosts"
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
import { BlogCard } from "../components/ui/BlogCard"
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

      <section>
        <LogoStrip />
      </section>

      <section className="bg-[#0a111a] border-y border-white/5 py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-indigo-500/5 blur-[140px] pointer-events-none" />
        <div className="page-shell relative z-10">
          <SectionHeader
            dark
            body="We focus on practical transformation priorities: delivery speed, cloud and platform efficiency, quality confidence, and secure operations. AI is used where it creates measurable leverage, not as a layer on top of every workflow."
            eyebrow="Positioning"
            title="A practical consulting model for modern delivery and operations."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                num: "01",
                title: "Business-first prioritisation",
                body: "Every engagement starts with where improvement is measurable, then maps technology changes to those outcomes.",
                tags: ["Measurable ROI", "Outcome Mapping", "Business Value", "Impact First"],
                icon: (
                  <svg className="h-5 w-5 stroke-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                ),
                badgeBg: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.15)]",
              },
              {
                num: "02",
                title: "Execution discipline",
                body: "Consulting recommendations are paired with implementation support so operating models can hold up in day-to-day delivery.",
                tags: ["Implementation", "Operating Models", "Delivery Support", "Execution"],
                icon: (
                  <svg className="h-5 w-5 stroke-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                  </svg>
                ),
                badgeBg: "bg-indigo-50/10 text-indigo-400 border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.15)]",
              },
              {
                num: "03",
                title: "Balanced AI adoption",
                body: "AI and automation are introduced where they improve responsiveness, scale, and cost profile without increasing operational risk.",
                tags: ["Pragmatic AI", "Automation", "Low Operational Risk", "Scalability"],
                icon: (
                  <svg className="h-5 w-5 stroke-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                  </svg>
                ),
                badgeBg: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.15)]",
              },
            ].map((item) => (
              <Reveal key={item.title}>
                <article className="group relative flex h-full flex-col justify-between rounded-[28px] bg-[#0e1622] p-8 border border-white/10 shadow-xl transition-all duration-300 hover:border-[#5B5FEF] hover:shadow-[0_0_25px_rgba(91,95,239,0.35)] hover:-translate-y-1.5">
                  <div>
                    {/* Top Row: Left Icon Badge & Right Hover Arrow */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border transition-transform duration-300 group-hover:scale-105 ${item.badgeBg}`}>
                        {item.icon}
                      </div>

                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-slate-300 group-hover:bg-[#5B5FEF] group-hover:text-white transition-all duration-300">
                        <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold tracking-tight text-white leading-snug mb-3 transition-colors duration-200 group-hover:text-[#5B5FEF]">
                      {item.title}
                    </h3>

                    {/* Body Copy */}
                    <p className="mt-2 text-sm leading-relaxed text-slate-300 font-normal mb-5">
                      {item.body}
                    </p>

                    {/* 3-4 Keyword Chips */}
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full px-2.5 py-1 text-[11px] font-semibold bg-white/5 text-slate-300 border border-white/10 group-hover:border-[#5B5FEF]/30 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50/70 border-y border-slate-200/80 py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-indigo-500/5 blur-[140px] pointer-events-none" />
        <div className="page-shell relative z-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              body="Seven consolidated service lines. Each one has a defined operating scope, business outcome, and clear path into related capabilities."
              eyebrow="Services"
              title="A cleaner services model built for how modern IT consulting is actually bought."
            />
            <ButtonLink href="/services" label="Explore all services" variant="primary" />
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-14 rounded-2xl border border-slate-200 bg-white p-8 md:p-10 shadow-xs">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <span className="eyebrow !text-indigo-600">Next step</span>
                <h3 className="mt-2 text-2xl font-bold text-slate-900">
                  Not sure where AI should sit in your roadmap?
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
                  We can start with a focused discovery workshop that maps where
                  AI, automation, or platform engineering will create measurable
                  leverage first.
                </p>
              </div>
              <ButtonLink href="/contact" label="Book discovery workshop" variant="primary" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0a111a] border-y border-white/5 py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-indigo-500/5 blur-[140px] pointer-events-none" />
        <div className="page-shell relative z-10">
          <SectionHeader
            dark
            body="Products sit alongside services as proof that the team can package operational knowledge into repeatable systems."
            eyebrow="Products"
            title="Three product lines that make the AI-first story tangible."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {products.map((product) => (
              <Reveal key={product.slug}>
                <ProductCard dark product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50/70 border-y border-slate-200/80 py-20 lg:py-24">
        <div className="page-shell">
          <SectionHeader
            body="A disciplined consulting process adapted from the current site and tightened for AI-era delivery work."
            eyebrow="How we work"
            title="Clear operating stages from discovery to adoption."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {[
              {
                number: "01",
                title: "Discover",
                body: "Assess systems, teams, workflow friction, and where measurable impact is available.",
                icon: (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                  </svg>
                ),
                active: false,
              },
              {
                number: "02",
                title: "Design",
                body: "Shape the operating model, architecture, and control points before implementation starts.",
                icon: (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
                  </svg>
                ),
                active: false,
              },
              {
                number: "03",
                title: "Engineer",
                body: "Build, tune, integrate, and validate with delivery teams rather than from a distance.",
                icon: (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zM3.6 9h16.8M3.6 15h16.8M12 3a14.25 14.25 0 00-3.75 9 14.25 14.25 0 003.75 9 14.25 14.25 0 003.75-9A14.25 14.25 0 0012 3z" />
                  </svg>
                ),
                active: true,
              },
              {
                number: "04",
                title: "Sustain",
                body: "Track outcomes, transfer knowledge, and keep improving after launch instead of walking away.",
                icon: (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.019-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.5 4.5 0 003.882 3.882m-3.882-3.882l-2.435-2.435m3.882 3.882a15.09 15.09 0 002.448 2.448m-2.448-2.448l2.435 2.435" />
                  </svg>
                ),
                active: false,
              },
            ].map((step, idx, arr) => (
              <div className="group relative flex flex-col" key={step.title}>
                {/* Top Timeline Row with Connector Line (Exact Screenshot Style) */}
                <div className="flex items-center w-full">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border transition-all duration-300 ${
                      step.active
                        ? "bg-slate-900 text-white border-slate-900 shadow-md group-hover:bg-indigo-500 group-hover:border-indigo-500"
                        : "bg-white text-slate-700 border-slate-200/90 shadow-2xs group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900"
                    }`}
                  >
                    {step.icon}
                  </div>
                  {idx < arr.length - 1 && (
                    <div className="hidden lg:block h-[1px] flex-1 bg-slate-200/90 ml-4 group-hover:bg-slate-300 transition-colors" />
                  )}
                </div>

                {/* Title & Description Below */}
                <h3 className="mt-6 text-lg font-bold tracking-tight text-slate-900 leading-snug transition-colors duration-200 group-hover:text-indigo-600">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs lg:text-sm leading-relaxed text-slate-600 font-normal">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell py-20 lg:py-24">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            body="Aviation remains a standalone industry navigation item, but it is now tied into the broader AI-first and engineering-led story rather than isolated as a side practice."
            eyebrow="Aviation Consulting"
            title="Industry-specific consulting for aviation systems, operations, and digital transformation."
          />
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <ButtonLink href="/aviation" label="Explore aviation" variant="primary" />
            <ButtonLink
              href="/case-studies/it-systems-operational-process-assessment"
              label="See case study"
              variant="ghost"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {aviationFocusAreas.map((area, index) => (
            <AviationFocusCard area={area} index={index} key={area.title} />
          ))}
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

          <Reveal className="mt-12 overflow-hidden rounded-none border border-slate-200 bg-white shadow-xs">
            <div className="grid gap-0 lg:grid-cols-2">
              <MediaPlaceholder
                className="h-full min-h-64"
                label={`Photo — ${spotlightCaseStudy.client}`}
                slug={spotlightCaseStudy.slug}
                ratio="4/3"
              />
              <div className="flex flex-col justify-center p-8 md:p-10">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-indigo-600 border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-1 w-fit mb-3">
                  {spotlightCaseStudy.category}
                </span>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl leading-tight">
                  {spotlightCaseStudy.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 font-normal">
                  {spotlightCaseStudy.summary}
                </p>
                <p className="mt-6 text-lg font-bold text-indigo-600 font-mono">
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

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {supportingCaseStudies.map((caseStudy) => (
              <Reveal key={caseStudy.slug}>
                <Link
                  className="group relative flex h-full flex-col overflow-hidden rounded-none border border-slate-200 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:shadow-md"
                  to={`/case-studies/${caseStudy.slug}`}
                >
                  <div className="absolute top-0 left-0 h-[3px] w-0 bg-indigo-500 transition-all duration-300 group-hover:w-full" />
                  <MediaPlaceholder label={`Photo — ${caseStudy.client}`} slug={caseStudy.slug} />
                  <div className="flex flex-1 flex-col p-7">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-indigo-600 border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-1 w-fit mb-3">
                      {caseStudy.category}
                    </span>
                    <h3 className="text-xl font-bold tracking-tight text-slate-900 leading-snug transition-colors duration-200 group-hover:text-indigo-600">
                      {caseStudy.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 font-normal">
                      {caseStudy.summary}
                    </p>
                    <p className="mt-4 font-mono text-sm font-bold text-indigo-600">
                      {caseStudy.metric}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50/70 border-y border-slate-200/80 py-20 lg:py-24">
        <div className="page-shell">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              body="Practical engineering perspectives, AI adoption guides, and operational walkthroughs from the RefactorQ delivery team."
              eyebrow="Latest Insights"
              title="Grounded technical leadership & engineering blogs."
            />
            <ArrowLink href="/blogs" label="View all blogs" />
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <Reveal key={post.slug}>
                <BlogCard post={post} />
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
