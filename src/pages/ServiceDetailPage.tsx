import { useState } from "react"
import { Link, useParams } from "react-router-dom"

import { findCaseStudy, findService } from "../lib/finders"
import { usePageMeta } from "../lib/meta"
import { BOOKING_URL } from "../config/site"

import { MediaPlaceholder } from "../components/ui/MediaPlaceholder"
import { Reveal } from "../components/ui/Reveal"
import { ServiceCard } from "../components/ui/ServiceCard"
import { NotFoundPage } from "./NotFoundPage"

/* ─────────────────────────────────────────────────────────────
   Bespoke UI Icons for Service Workstreams & Features
   ───────────────────────────────────────────────────────────── */

function WorkstreamIcon({ index }: { index: number }) {
  const iconClass = "h-5 w-5 stroke-current transition-colors duration-300"

  switch (index % 4) {
    case 0:
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 00.435-7.475 4.5 4.5 0 00-7.801-4.225A4.5 4.5 0 002.25 15z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.25v6m-2.25-2.25L12 17.25l2.25-2.25" />
        </svg>
      )
    case 1:
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      )
    case 2:
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
          <circle cx="12" cy="12.75" r="1.5" fill="currentColor" fillOpacity={0.25} />
        </svg>
      )
    default:
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      )
  }
}

function FaqAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: { question: string; answer: string }
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div
      className={`rounded-[24px] border transition-all duration-300 overflow-hidden ${
        isOpen
          ? "bg-white border-indigo-200/90 shadow-[0_8px_24px_rgba(99,102,241,0.08)]"
          : "bg-white/80 border-slate-200/80 hover:border-slate-300 hover:bg-white"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 sm:p-7 text-left cursor-pointer gap-4"
        aria-expanded={isOpen}
      >
        <span className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
          {item.question}
        </span>
        <div
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
            isOpen
              ? "bg-indigo-600 border-indigo-600 text-white rotate-180"
              : "bg-slate-100 border-slate-200 text-slate-500"
          }`}
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {isOpen && (
        <div className="px-6 sm:px-7 pb-6 sm:pb-7 text-sm sm:text-[15px] leading-relaxed text-slate-600 border-t border-slate-100 pt-4 font-normal">
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  )
}

export function ServiceDetailPage() {
  const { slug } = useParams()

  const service = findService(slug)

  if (!service) {
    return <NotFoundPage />
  }

  const caseStudy = findCaseStudy(service.caseStudySlug)

  usePageMeta(service.title, service.summary)

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  return (
    <>
      {/* ─── HERO INTRO HEADER ─── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0B1320] via-[#0E1B2E] to-[#0B1320] pt-10 pb-16 lg:pt-14 lg:pb-22 border-b border-white/[0.08] text-white">
        {/* Ambient Glow mesh */}
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-500/15 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 -right-32 h-96 w-96 rounded-full bg-indigo-500/15 blur-[120px] pointer-events-none" />

        <div className="page-shell relative z-10">
          {/* Breadcrumb Navigation Bar */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-5">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono font-medium">
              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 text-indigo-400 hover:text-white transition-colors group"
              >
                <svg
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                <span>Services</span>
              </Link>
              <span className="text-slate-600">/</span>
              <span className="text-slate-300 font-semibold">{service.shortTitle}</span>
            </nav>

            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-300">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Practice Area
            </div>
          </div>

          {/* Main Title & Executive Value Proposition */}
          <div className="max-w-4xl">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="h-[2px] w-6 rounded-full bg-indigo-500" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-indigo-400">
                Core Engineering Practice
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {service.title}
            </h1>

            {service.tagline && (
              <p className="mt-3 text-base sm:text-lg font-semibold text-indigo-300 font-mono">
                {service.tagline}
              </p>
            )}

            <p className="mt-4 text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed font-normal max-w-3xl">
              {service.summary}
            </p>

            {/* Quick Facts Strip & Actions */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-6">
              <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="font-mono uppercase tracking-wider text-slate-500">Includes:</span>
                  <span className="font-semibold text-slate-200">
                    {service.includes.length} core workstreams
                  </span>
                </div>
                <div className="hidden sm:block h-3 w-px bg-white/10" />
                <div className="flex items-center gap-2">
                  <span className="font-mono uppercase tracking-wider text-slate-500">Core Stack:</span>
                  <span className="font-semibold text-indigo-300">
                    {service.tools.slice(0, 3).join(", ")}
                    {service.tools.length > 3 ? ` + ${service.tools.length - 3} more` : ""}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={BOOKING_URL}
                  className="inline-flex items-center gap-2 rounded-full bg-indigo-600 hover:bg-indigo-500 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-indigo-600/25 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
                >
                  <span>{service.cta}</span>
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURE PHOTO BANNER ─── */}
      <section className="page-shell -mt-6 sm:-mt-8 relative z-20">
        <div className="overflow-hidden rounded-[28px] sm:rounded-[36px] border border-slate-200/80 bg-slate-900 shadow-2xl shadow-slate-900/10">
          <MediaPlaceholder
            label={`Practice · ${service.shortTitle}`}
            slug={service.slug}
            ratio="21/8"
            className="w-full h-auto max-h-[460px] object-cover"
          />
        </div>
      </section>

      {/* ─── OVERVIEW & DIRECT CONSULTATION SPLIT ─── */}
      <section className="page-shell py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-stretch">
          {/* Strategic Context (Dynamic from service data) */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="h-[2px] w-5 rounded-full bg-indigo-600" />
                <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
                  Strategic Objective
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                {service.tagline}
              </h2>
              <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
                {service.summary}
              </p>
            </div>

            {/* Core Capability Highlights (100% dynamically mapped from service.includes) */}
            <div className="mt-8 space-y-3 border-t border-slate-200/80 pt-6">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Core Deliverables in this Scope:
              </span>
              {service.includes.map((inc, i) => (
                <div key={inc} className="flex items-start gap-3 rounded-2xl bg-white p-3.5 border border-slate-200/70 shadow-2xs">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 font-mono text-xs font-bold mt-0.5">
                    0{i + 1}
                  </div>
                  <span className="text-sm font-semibold text-slate-800 leading-snug">{inc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Consultation Action Card (Dynamic from service data) */}
          <Reveal className="h-full">
            <div className="relative h-full flex flex-col justify-between overflow-hidden rounded-[28px] sm:rounded-[32px] bg-[#0B1322] border border-slate-800 p-8 sm:p-10 text-white shadow-2xl">
              <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-indigo-500/15 blur-[80px] pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-indigo-600/10 blur-[80px] pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="h-[2px] w-5 rounded-full bg-indigo-500" />
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-indigo-400">
                    Direct Engineering Support
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                  {service.cta}
                </h3>

                <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-slate-300 font-normal">
                  We scope a focused discussion around your current systems, delivery friction, and where the highest-value operational lift sits.
                </p>

                {/* Scope Highlights dynamically drawn from approach */}
                <div className="mt-6 space-y-2.5">
                  {service.approach.slice(0, 3).map((step) => (
                    <div key={step} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <svg className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="leading-relaxed">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
                <a
                  href={BOOKING_URL}
                  className="inline-flex items-center gap-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 text-xs font-bold uppercase tracking-wider shadow-lg shadow-indigo-600/25 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
                >
                  <span>{service.cta}</span>
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>

                {service.caseStudySlug && (
                  <Link
                    to={`/case-studies/${service.caseStudySlug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-white/5 hover:bg-white/10 hover:border-slate-600 text-slate-200 px-5 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-300"
                  >
                    View Case Study
                  </Link>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── CORE WORKSTREAMS (WHAT'S INCLUDED - DYNAMIC) ─── */}
      <section className="bg-slate-50/80 border-y border-slate-200/80 py-16 sm:py-20 lg:py-24">
        <div className="page-shell">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="h-[2px] w-5 rounded-full bg-indigo-600" />
                <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
                  Deliverables & Scope
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Core Workstreams in this Practice
              </h2>
            </div>
            <p className="text-sm text-slate-500 max-w-md">
              Each workstream is structured with defined operating scope, architectural boundaries, and verifiable acceptance criteria.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.includes.map((item, index) => (
              <Reveal key={item}>
                <article className="group h-full flex flex-col justify-between rounded-[28px] bg-white p-7 sm:p-8 border border-slate-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_18px_44px_rgba(99,102,241,0.12)] hover:border-indigo-300 hover:-translate-y-1.5 transition-all duration-300">
                  <div>
                    {/* Top Icon and Index Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50/90 border border-indigo-100/90 text-indigo-600 group-hover:scale-105 group-hover:bg-indigo-600 group-hover:border-indigo-600 group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(99,102,241,0.3)] transition-all duration-300 shadow-2xs">
                        <WorkstreamIcon index={index} />
                      </div>
                      <span className="font-mono text-xs font-extrabold text-slate-300 group-hover:text-indigo-500 transition-colors">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold tracking-tight text-slate-900 leading-snug group-hover:text-indigo-600 transition-colors mb-3">
                      {item}
                    </h3>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>Production Grade Scope</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── APPROACH / METHODOLOGY SEQUENCE (DYNAMIC) ─── */}
      <section className="page-shell py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="h-[2px] w-5 rounded-full bg-indigo-600" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
                Delivery Sequence
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              From Assessment to Operational Result
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-md">
            Our step-by-step execution methodology ensures measurable progress at every phase of delivery.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {service.approach.map((step, index) => (
            <Reveal key={step}>
              <div className="group relative flex flex-col justify-between h-full rounded-[28px] bg-white border border-slate-200/90 p-7 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(99,102,241,0.1)] hover:border-indigo-300 hover:-translate-y-1 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 border border-indigo-100 font-mono text-sm font-extrabold text-indigo-600 shadow-2xs">
                      0{index + 1}
                    </span>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      Phase 0{index + 1}
                    </span>
                  </div>

                  <p className="text-sm sm:text-[15px] leading-relaxed text-slate-700 font-medium">
                    {step}
                  </p>
                </div>

                <div className="mt-6 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    Execution Phase
                  </span>
                  <svg className="h-3.5 w-3.5 text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── TOOLS & PLATFORMS ECOSYSTEM (DYNAMIC) ─── */}
      <section className="bg-[#0A111C] border-y border-white/5 py-16 sm:py-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 h-80 w-80 rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />

        <div className="page-shell relative z-10">
          <div className="flex items-center gap-2.5 mb-2">
            <span className="h-[2px] w-5 rounded-full bg-indigo-400" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-indigo-400">
              Technology Stack
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
            Supported Tooling & Ecosystem
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mb-8 font-normal">
            We work directly inside your existing infrastructure, toolchain, and pipelines rather than forcing proprietary lock-in.
          </p>

          <div className="flex flex-wrap gap-2.5">
            {service.tools.map((tool) => (
              <span
                key={tool}
                className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-slate-200 transition-colors"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED CASE STUDY PROOF POINT (DYNAMIC & BALANCED) ─── */}
      {caseStudy && (
        <section className="page-shell py-16 sm:py-20 lg:py-24">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="h-[2px] w-5 rounded-full bg-indigo-600" />
                <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
                  Verified Proof Point
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Real Delivery Impact in Practice
              </h2>
            </div>
            <Link
              to={`/case-studies/${caseStudy.slug}`}
              className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-indigo-600 hover:text-indigo-700 transition-colors group"
            >
              <span>Explore full case study</span>
              <svg className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          {/* Master Spotlight Showcase Card */}
          <div className="overflow-hidden rounded-[28px] sm:rounded-[36px] bg-white border border-slate-200/90 shadow-[0_4px_30px_rgba(0,0,0,0.04)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Left Column (5 cols): Dark Hero Feature Card */}
              <div className="lg:col-span-5 relative flex flex-col justify-between overflow-hidden bg-[#0B1322] p-8 sm:p-10 text-white border-b lg:border-b-0 lg:border-r border-slate-800">
                <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-indigo-500/15 blur-[80px] pointer-events-none" />

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/15 border border-indigo-500/30 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 mb-5">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
                    {caseStudy.category}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug mb-3">
                    {caseStudy.title}
                  </h3>

                  <p className="text-sm sm:text-[15px] text-slate-300 leading-relaxed font-normal mb-6">
                    {caseStudy.summary}
                  </p>

                  {/* Primary Outcome Metric Box */}
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500/15 via-teal-500/10 to-emerald-500/15 border border-emerald-500/25">
                    <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-1">
                      Key Delivered Metric
                    </span>
                    <span className="text-sm font-bold text-white leading-snug">
                      {caseStudy.metric}
                    </span>
                  </div>
                </div>

                <div className="relative z-10 mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400">
                    Client: <strong className="text-slate-200 font-bold">{caseStudy.client}</strong>
                  </span>
                  <Link
                    to={`/case-studies/${caseStudy.slug}`}
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-indigo-400 hover:text-white transition-colors"
                  >
                    Read story →
                  </Link>
                </div>
              </div>

              {/* Right Column (7 cols): Challenge, Approach & 3 Measurable Outcomes */}
              <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between bg-slate-50/50">
                <div>
                  <div className="flex items-center gap-2 mb-5">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400">
                      Measurable Outcomes & Results
                    </span>
                  </div>

                  {/* 3 Outcome Cards - Dense, balanced, no empty whitespace */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    {caseStudy.outcomes.map((outcome, idx) => (
                      <div
                        key={outcome}
                        className="group flex flex-col justify-start rounded-2xl bg-white p-5 border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-indigo-300 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                          </div>
                          <span className="font-mono text-[11px] font-bold text-slate-400">0{idx + 1}</span>
                        </div>
                        <p className="text-xs sm:text-sm font-bold text-slate-800 leading-snug group-hover:text-indigo-950 transition-colors">
                          {outcome}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Challenge & Approach Summary Strip */}
                  <div className="space-y-3 pt-4 border-t border-slate-200/70">
                    <div className="flex items-start gap-3 text-xs sm:text-sm">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-rose-600 bg-rose-50 border border-rose-200/60 px-2 py-0.5 rounded-md shrink-0 mt-0.5">
                        Challenge
                      </span>
                      <p className="text-slate-600 leading-relaxed line-clamp-2">{caseStudy.challenge}</p>
                    </div>
                    <div className="flex items-start gap-3 text-xs sm:text-sm">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-200/60 px-2 py-0.5 rounded-md shrink-0 mt-0.5">
                        Approach
                      </span>
                      <p className="text-slate-600 leading-relaxed line-clamp-2">{caseStudy.approach}</p>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Strip */}
                <div className="mt-6 pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs text-slate-500 font-medium">
                    RefactorQ Enterprise Delivery Case Study
                  </span>
                  <Link
                    to={`/case-studies/${caseStudy.slug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-slate-900 hover:bg-indigo-600 text-white px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all shadow-xs"
                  >
                    <span>View Full Case Study</span>
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── FREQUENTLY ASKED QUESTIONS (100% DYNAMIC) ─── */}
      <section className="bg-slate-50/80 border-t border-slate-200/80 py-16 sm:py-20 lg:py-24">
        <div className="page-shell max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="h-[2px] w-5 rounded-full bg-indigo-600" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
                Common Questions
              </span>
              <span className="h-[2px] w-5 rounded-full bg-indigo-600" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-sm text-slate-500 font-normal">
              Clear answers on how we engage, integrate with internal teams, and guarantee delivery outcomes.
            </p>
          </div>

          <div className="space-y-4">
            {service.faq.map((item, index) => (
              <FaqAccordionItem
                key={item.question}
                item={item}
                isOpen={openFaqIndex === index}
                onToggle={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── RELATED SERVICES & PRACTICES (100% DYNAMIC) ─── */}
      <section className="bg-white border-t border-slate-200/80 pt-16 sm:pt-20 pb-36 sm:pb-44">
        <div className="page-shell">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="h-[2px] w-5 rounded-full bg-indigo-600" />
                <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
                  Adjacent Capabilities
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Related Engineering Practices
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              Explore all practices →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {service.related.map((relatedSlug) => {
              const relatedService = findService(relatedSlug)
              if (!relatedService) return null

              return (
                <Reveal key={relatedService.slug}>
                  <ServiceCard service={relatedService} />
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
