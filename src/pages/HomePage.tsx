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

      {/* ─── STRATEGIC POSITIONING / 3 CORE PILLARS ─── */}
      <section className="bg-gradient-to-b from-[#080E1A] via-[#0A1220] to-[#080E1A] border-y border-white/[0.08] py-20 lg:py-28 relative overflow-hidden text-white">
        {/* Tech Blueprint Grid & Ambient Purple Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-80" />
        <div className="absolute -top-32 left-1/4 h-[450px] w-[450px] rounded-full bg-indigo-500/10 blur-[150px] pointer-events-none" />
        <div className="absolute -bottom-32 right-1/4 h-[450px] w-[450px] rounded-full bg-indigo-600/10 blur-[150px] pointer-events-none" />

        <div className="page-shell relative z-10">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="h-[2px] w-5 rounded-full bg-indigo-500" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-indigo-400">
                The RefactorQ Delivery Paradigm
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-white leading-[1.15]">
              A practical consulting model for{" "}
              <span className="bg-gradient-to-r from-indigo-300 via-indigo-200 to-white bg-clip-text text-transparent">
                modern delivery and operations.
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              We focus on practical transformation priorities: delivery speed, cloud and platform efficiency, quality confidence, and secure operations. AI is used where it creates measurable leverage, not as a layer on top of every workflow.
            </p>
          </div>

          {/* 3 Architecture Pillar Cards with Bespoke Micro-Visuals */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* ─── PILLAR 01: BUSINESS-FIRST PRIORITISATION ─── */}
            <Reveal>
              <article className="group h-full flex flex-col justify-between rounded-[32px] bg-gradient-to-b from-[#0E1728] to-[#0A111C] border border-slate-800/90 p-7 sm:p-8 shadow-2xl relative overflow-hidden hover:border-indigo-500/80 hover:shadow-[0_20px_50px_rgba(99,102,241,0.18)] hover:-translate-y-1.5 transition-all duration-300">
                <div className="absolute -top-16 -right-16 h-36 w-36 rounded-full bg-indigo-500/15 blur-2xl pointer-events-none group-hover:bg-indigo-500/25 transition-all" />

                <div className="relative z-10">
                  {/* Top Meta Header */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 font-mono text-xs font-bold">
                        01
                      </span>
                      <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Value Mapping
                      </span>
                    </div>
                    <span className="font-mono text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                      ROI First
                    </span>
                  </div>

                  {/* Title & Body */}
                  <h3 className="text-xl font-extrabold text-white group-hover:text-indigo-300 transition-colors leading-snug mb-3">
                    Business-first prioritisation
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-300 font-normal mb-6">
                    Every engagement starts with where improvement is measurable, then maps technology changes directly to commercial outcomes.
                  </p>

                  {/* Bespoke Visual: Measurable Flow Diagram */}
                  <div className="rounded-2xl bg-[#060B14] border border-slate-800/80 p-4 mb-6 space-y-2.5">
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-slate-400">Bottleneck Profiling</span>
                      <span className="text-indigo-400 font-bold">→ 40% Waste Cut</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-400" />
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1">
                      <span>Target SLA Defined</span>
                      <span className="text-emerald-400 font-bold">✓ Outcome Grounded</span>
                    </div>
                  </div>

                  {/* Tag Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {["Measurable ROI", "Outcome Mapping", "Impact First"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-white/[0.04] border border-white/[0.08] px-2.5 py-1 text-[11px] font-mono text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>

            {/* ─── PILLAR 02: EXECUTION DISCIPLINE ─── */}
            <Reveal>
              <article className="group h-full flex flex-col justify-between rounded-[32px] bg-gradient-to-b from-[#0E1728] to-[#0A111C] border border-slate-800/90 p-7 sm:p-8 shadow-2xl relative overflow-hidden hover:border-indigo-500/80 hover:shadow-[0_20px_50px_rgba(99,102,241,0.18)] hover:-translate-y-1.5 transition-all duration-300">
                <div className="absolute -top-16 -right-16 h-36 w-36 rounded-full bg-indigo-500/15 blur-2xl pointer-events-none group-hover:bg-indigo-500/25 transition-all" />

                <div className="relative z-10">
                  {/* Top Meta Header */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 font-mono text-xs font-bold">
                        02
                      </span>
                      <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Squad Delivery
                      </span>
                    </div>
                    <span className="font-mono text-[10px] font-bold text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 rounded-full">
                      Embedded Hands-On
                    </span>
                  </div>

                  {/* Title & Body */}
                  <h3 className="text-xl font-extrabold text-white group-hover:text-indigo-300 transition-colors leading-snug mb-3">
                    Execution discipline
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-300 font-normal mb-6">
                    Consulting recommendations are paired with embedded implementation support so operating models hold up in production.
                  </p>

                  {/* Bespoke Visual: Embedded Handshake Timeline */}
                  <div className="rounded-2xl bg-[#060B14] border border-slate-800/80 p-4 mb-6 space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-300">
                      <span className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Embedded Squad Deployment
                      </span>
                      <span className="text-emerald-400 font-bold">Active</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1.5 pt-1 text-[10px] font-mono text-center">
                      <div className="p-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-slate-300">
                        Review
                      </div>
                      <div className="p-1.5 rounded-lg bg-indigo-600/30 border border-indigo-500/40 text-indigo-200 font-bold">
                        Engineer
                      </div>
                      <div className="p-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-slate-300">
                        Sustain
                      </div>
                    </div>
                  </div>

                  {/* Tag Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {["Embedded Teams", "Operating Models", "Zero Downtime"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-white/[0.04] border border-white/[0.08] px-2.5 py-1 text-[11px] font-mono text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>

            {/* ─── PILLAR 03: BALANCED AI ADOPTION ─── */}
            <Reveal>
              <article className="group h-full flex flex-col justify-between rounded-[32px] bg-gradient-to-b from-[#0E1728] to-[#0A111C] border border-slate-800/90 p-7 sm:p-8 shadow-2xl relative overflow-hidden hover:border-indigo-500/80 hover:shadow-[0_20px_50px_rgba(99,102,241,0.18)] hover:-translate-y-1.5 transition-all duration-300">
                <div className="absolute -top-16 -right-16 h-36 w-36 rounded-full bg-indigo-500/15 blur-2xl pointer-events-none group-hover:bg-indigo-500/25 transition-all" />

                <div className="relative z-10">
                  {/* Top Meta Header */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 font-mono text-xs font-bold">
                        03
                      </span>
                      <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Pragmatic AI
                      </span>
                    </div>
                    <span className="font-mono text-[10px] font-bold text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 rounded-full">
                      Zero Fluff
                    </span>
                  </div>

                  {/* Title & Body */}
                  <h3 className="text-xl font-extrabold text-white group-hover:text-indigo-300 transition-colors leading-snug mb-3">
                    Balanced AI adoption
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-300 font-normal mb-6">
                    AI and automation are introduced where they improve responsiveness, scale, and cost profile without increasing operational risk.
                  </p>

                  {/* Bespoke Visual: AI Verification Guardrail */}
                  <div className="rounded-2xl bg-[#060B14] border border-slate-800/80 p-4 mb-6 space-y-2.5">
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-slate-400">AI Model Precision Score</span>
                      <span className="text-emerald-400 font-bold">99.4% Verified</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full w-[94%] rounded-full bg-gradient-to-r from-indigo-500 via-emerald-400 to-emerald-300" />
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1">
                      <span>Hallucination Guardrails</span>
                      <span className="text-indigo-400 font-bold">● Active Filtering</span>
                    </div>
                  </div>

                  {/* Tag Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {["Pragmatic AI", "Low Operational Risk", "Scalability"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-white/[0.04] border border-white/[0.08] px-2.5 py-1 text-[11px] font-mono text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
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

      {/* ─── CASE STUDIES / PROOF POINTS SECTION ─── */}
      <section className="bg-gradient-to-b from-slate-50/90 via-white to-slate-50/70 border-y border-slate-200/80 py-20 lg:py-28 relative overflow-hidden">
        {/* Subtle Ambient Background Light */}
        <div className="absolute top-0 right-1/4 h-80 w-80 rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

        <div className="page-shell relative z-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-12">
            <div>
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="h-[2px] w-5 rounded-full bg-indigo-600" />
                <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
                  Verified Case Studies
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Proof points that carry the repositioning beyond messaging.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl font-normal leading-relaxed">
                Selections grounded in real client engagements across performance, cloud infrastructure, AI automation, security, and digital transformation.
              </p>
            </div>
            <ArrowLink href="/case-studies" label="Explore all case studies" />
          </div>

          {/* Master Spotlight Case Study Card */}
          <Reveal>
            <div className="group relative overflow-hidden rounded-[28px] sm:rounded-[36px] bg-white border border-slate-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_48px_rgba(99,102,241,0.12)] hover:border-indigo-300 transition-all duration-300 mb-8">
              <div className="grid gap-0 lg:grid-cols-12 items-stretch">
                {/* Left Side: Media Preview */}
                <div className="lg:col-span-6 relative bg-slate-900 overflow-hidden min-h-[280px] sm:min-h-[360px] lg:min-h-full">
                  <MediaPlaceholder
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    label={`Preview · ${spotlightCaseStudy.client}`}
                    slug={spotlightCaseStudy.slug}
                    ratio="16/11"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 px-3.5 py-1 text-[11px] font-mono font-bold text-white shadow-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Featured Production Spotlight
                    </span>
                  </div>
                </div>

                {/* Right Side: Narrative, Metrics & Outcomes */}
                <div className="lg:col-span-6 p-7 sm:p-10 lg:p-12 flex flex-col justify-between">
                  <div>
                    {/* Category & Client Header */}
                    <div className="flex flex-wrap items-center gap-2.5 mb-3.5">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 border border-indigo-100 px-3 py-1 text-xs font-mono font-bold text-indigo-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                        {spotlightCaseStudy.category}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        Client: <strong className="text-slate-700">{spotlightCaseStudy.client}</strong>
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug mb-3">
                      <Link to={`/case-studies/${spotlightCaseStudy.slug}`}>
                        {spotlightCaseStudy.title}
                      </Link>
                    </h3>

                    {/* Summary */}
                    <p className="text-sm leading-relaxed text-slate-600 font-normal mb-5">
                      {spotlightCaseStudy.summary}
                    </p>

                    {/* Verified Telemetry Outcome Banner */}
                    <div className="rounded-2xl bg-gradient-to-r from-indigo-50/80 to-slate-50 border border-indigo-100/90 p-4 flex items-center gap-3.5 mb-6">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-xs font-bold">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <span className="block font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                          Verified Delivery Metric
                        </span>
                        <span className="text-sm font-extrabold text-slate-900 block truncate">
                          {spotlightCaseStudy.metric}
                        </span>
                      </div>
                    </div>

                    {/* Key Outcomes Checklist */}
                    <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                      {spotlightCaseStudy.outcomes.slice(0, 3).map((outcome) => (
                        <div key={outcome} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <span className="text-indigo-600 font-bold mt-0.5">✓</span>
                          <span>{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold text-slate-400">
                      3 Verified Milestones Delivered
                    </span>
                    <Link
                      to={`/case-studies/${spotlightCaseStudy.slug}`}
                      className="inline-flex items-center gap-2 rounded-full bg-slate-900 group-hover:bg-indigo-600 text-white px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 shadow-xs"
                    >
                      <span>Read Case Study</span>
                      <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Secondary Supporting Case Studies Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {supportingCaseStudies.map((caseStudy) => (
              <Reveal key={caseStudy.slug}>
                <article className="group relative flex flex-col justify-between overflow-hidden rounded-[28px] sm:rounded-[32px] bg-white border border-slate-200/90 p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_48px_rgba(99,102,241,0.12)] hover:border-indigo-300 hover:-translate-y-1.5 transition-all duration-300 h-full">
                  <div>
                    {/* Media Header */}
                    <div className="relative overflow-hidden rounded-2xl bg-slate-100 mb-6 aspect-[16/10]">
                      <MediaPlaceholder
                        label={`Photo — ${caseStudy.client}`}
                        slug={caseStudy.slug}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-sm px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-indigo-700 border border-slate-200 shadow-2xs">
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                        {caseStudy.category}
                      </span>
                    </div>

                    {/* Client Name */}
                    <span className="block font-mono text-xs text-slate-400 mb-1">
                      Client: <strong className="text-slate-700">{caseStudy.client}</strong>
                    </span>

                    {/* Title */}
                    <h3 className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug mb-3">
                      <Link to={`/case-studies/${caseStudy.slug}`}>
                        {caseStudy.title}
                      </Link>
                    </h3>

                    {/* Summary */}
                    <p className="text-sm leading-relaxed text-slate-600 font-normal mb-5 line-clamp-3">
                      {caseStudy.summary}
                    </p>

                    {/* Telemetry Metric Chip */}
                    <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-3 flex items-center gap-2.5 mb-6">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                      <span className="text-xs font-bold text-slate-800 truncate">
                        {caseStudy.metric}
                      </span>
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold text-slate-400">
                      {caseStudy.outcomes.length} Verified Outcomes
                    </span>
                    <Link
                      to={`/case-studies/${caseStudy.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 hover:text-indigo-800 group-hover:translate-x-0.5 transition-all"
                    >
                      <span>Read Story</span>
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </article>
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

      {/* ─── TESTIMONIALS / VERIFIED CLIENT ENDORSEMENTS ─── */}
      <section className="page-shell py-20 lg:py-28">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="h-[2px] w-5 rounded-full bg-indigo-600" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
              Verified Client Reviews
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Feedback grounded in delivery, not just advisory sentiment.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Direct commentary from technology leaders and operations directors whose platforms scaled through our engineering squads.
          </p>
        </div>

        <TestimonialSection />

        {/* Verified Delivery Trust Strip */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>100% On-Time Delivery Milestone Track Record</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            <span>Enterprise Security & SLA Guaranteed</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>Zero Unplanned Production Outages</span>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="page-shell py-20">
          <StatBand stats={companyStats} />
        </div>
      </section>
    </>
  )
}
