import { Link, useParams } from "react-router-dom"

import { caseStudies } from "../data/caseStudies"
import { findCaseStudy } from "../lib/finders"
import { usePageMeta } from "../lib/meta"

import { MediaPlaceholder } from "../components/ui/MediaPlaceholder"
import { Reveal } from "../components/ui/Reveal"
import { NotFoundPage } from "./NotFoundPage"

/* ─────────────────────────────────────────────────────────────
   Bespoke Modern UI Icons
   ───────────────────────────────────────────────────────────── */

function ChallengeIcon() {
  return (
    <svg
      className="h-5 w-5 stroke-rose-600 transition-transform duration-300 group-hover:scale-110"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.75}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 8.25V5.25A1.5 1.5 0 015.25 3.75h3m7.5 0h3a1.5 1.5 0 011.5 1.5v3m0 7.5v3a1.5 1.5 0 01-1.5 1.5h-3m-7.5 0h-3a1.5 1.5 0 01-1.5-1.5v-3"
      />
      <circle cx="12" cy="12" r="3.75" strokeWidth={2} />
      <path strokeLinecap="round" d="M12 6.5v1.5m0 8v1.5M6.5 12h1.5m8 0h1.5" />
    </svg>
  )
}

function ApproachIcon() {
  return (
    <svg
      className="h-5 w-5 stroke-indigo-600 transition-transform duration-300 group-hover:scale-110"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.75}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
      />
      <circle cx="12" cy="12.75" r="1.5" fill="currentColor" fillOpacity={0.25} />
    </svg>
  )
}

function OutcomeIcon({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg
        className="h-4 w-4 stroke-emerald-600 group-hover:stroke-indigo-600 transition-colors"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18L9 11.25l4.5 4.5 8.25-8.25M21 7.5h-5.25m5.25 0V12.75"
        />
      </svg>
    )
  }
  if (index === 1) {
    return (
      <svg
        className="h-4 w-4 stroke-emerald-600 group-hover:stroke-indigo-600 transition-colors"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    )
  }
  return (
    <svg
      className="h-4 w-4 stroke-emerald-600 group-hover:stroke-indigo-600 transition-colors"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"
      />
    </svg>
  )
}

function OrganizationIcon() {
  return (
    <svg
      className="h-4 w-4 stroke-indigo-400"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.75}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
      />
    </svg>
  )
}

export function CaseStudyDetailPage() {
  const { slug } = useParams()

  const caseStudy = findCaseStudy(slug)

  if (!caseStudy) {
    return <NotFoundPage />
  }

  usePageMeta(caseStudy.title, caseStudy.summary)

  // Find related case studies
  const relatedCaseStudies = caseStudies
    .filter((c) => c.slug !== caseStudy.slug)
    .slice(0, 2)

  return (
    <>
      {/* ─── HERO INTRO HEADER ─── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0B1320] via-[#0E1B2E] to-[#0B1320] pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-white/[0.08] text-white">
        {/* Ambient Glow */}
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-500/15 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 -right-32 h-96 w-96 rounded-full bg-indigo-500/15 blur-[120px] pointer-events-none" />

        <div className="page-shell relative z-10">
          {/* Top Breadcrumb & Metadata Navigation Bar */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-5">
            {/* Breadcrumb path */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono font-medium">
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-1.5 text-indigo-400 hover:text-white transition-colors group"
              >
                <svg
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
                <span>Case Studies</span>
              </Link>
              <span className="text-slate-600">/</span>
              <span className="text-slate-300 font-semibold">{caseStudy.category}</span>
            </nav>

            {/* Verified Delivery Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Verified Case Study
            </div>
          </div>

          {/* Main Title & Story Summary */}
          <div className="max-w-4xl">
            {/* Sub-Eyebrow */}
            <div className="flex items-center gap-2.5 mb-3">
              <span className="h-[2px] w-6 rounded-full bg-indigo-500" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-indigo-400">
                Engagement Story
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {caseStudy.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed font-normal max-w-3xl">
              {caseStudy.summary}
            </p>

            {/* Quick Facts Strip */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="font-mono uppercase tracking-wider text-slate-500">Client:</span>
                <span className="font-semibold text-slate-200">{caseStudy.client}</span>
              </div>
              <div className="hidden sm:block h-3 w-px bg-white/10" />
              <div className="flex items-center gap-2">
                <span className="font-mono uppercase tracking-wider text-slate-500">Domain:</span>
                <span className="font-semibold text-indigo-300">{caseStudy.category}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURE PHOTO / BANNER ─── */}
      <section className="page-shell -mt-6 sm:-mt-8 relative z-20">
        <div className="overflow-hidden rounded-[24px] sm:rounded-[32px] border border-slate-200/80 bg-slate-900 shadow-2xl shadow-slate-900/10">
          <MediaPlaceholder
            label={`Case Study · ${caseStudy.client}`}
            slug={caseStudy.slug}
            ratio="21/8"
            className="w-full h-auto max-h-[460px] object-cover"
          />
        </div>
      </section>

      {/* ─── CORE SECTION: CHALLENGE, APPROACH & OUTCOMES (REFERENCE DESIGN) ─── */}
      <section className="page-shell py-12 sm:py-16 lg:py-24">
        <div className="grid gap-8 lg:gap-10 lg:grid-cols-[360px_1fr] xl:grid-cols-[400px_1fr] items-stretch">
          {/* LEFT: CLIENT CONTEXT DARK HERO CARD */}
          <Reveal className="h-full">
            <div className="relative h-full flex flex-col justify-between overflow-hidden rounded-[24px] sm:rounded-[32px] bg-[#0B1322] border border-slate-800/90 p-6 sm:p-8 lg:p-10 text-white shadow-2xl shadow-slate-950/20">
              {/* Background ambient lighting */}
              <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-indigo-500/15 blur-[80px] pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-indigo-600/10 blur-[80px] pointer-events-none" />

              <div className="relative z-10">
                {/* Eyebrow with blue line and organization icon */}
                <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
                  <span className="h-[2px] w-5 rounded-full bg-indigo-500" />
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-indigo-400 flex items-center gap-2">
                    <OrganizationIcon />
                    Client Context
                  </span>
                </div>

                {/* Client Name / Title */}
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                  {caseStudy.client}
                </h2>

                {/* Highlight Metric / Description */}
                <div className="mt-4 pl-3.5 border-l-2 border-indigo-500/60 py-0.5">
                  <p className="text-sm sm:text-[15px] leading-relaxed text-slate-300 font-normal">
                    {caseStudy.metric}
                  </p>
                </div>

                {/* Tags / Pill Chips */}
                <div className="mt-6 sm:mt-8 flex flex-wrap gap-2">
                  {caseStudy.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 px-3 sm:px-3.5 py-1 sm:py-1.5 font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-200 transition-colors"
                    >
                      <span className="h-1 w-1 rounded-full bg-indigo-400" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Original Case Study Link */}
              {caseStudy.url ? (
                <div className="relative z-10 mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-white/10">
                  <a
                    className="group inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-white hover:text-indigo-300 underline decoration-white/30 underline-offset-8 hover:decoration-white transition-all"
                    href={caseStudy.url}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span>View original case study</span>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                      <svg
                        className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              ) : (
                <div className="relative z-10 mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-white/10">
                  <span className="font-mono text-xs text-slate-400">
                    RefactorQ Enterprise Delivery
                  </span>
                </div>
              )}
            </div>
          </Reveal>

          {/* RIGHT: ENGAGEMENT BREAKDOWN (CHALLENGE, APPROACH & OUTCOMES) */}
          <div className="flex flex-col justify-between gap-6 sm:gap-8">
            {/* Section Header */}
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="h-[2px] w-5 rounded-full bg-indigo-600" />
                <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
                  Engagement Breakdown
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold tracking-tight text-slate-900 leading-tight">
                Challenge, approach, and outcomes.
              </h2>
            </div>

            {/* TOP ROW: CHALLENGE & APPROACH */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Challenge Card */}
              <Reveal>
                <article className="group h-full flex flex-col justify-start rounded-[22px] sm:rounded-[28px] bg-white p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_36px_rgba(244,63,94,0.08)] hover:border-rose-200 transition-all duration-300">
                  <div className="flex items-center gap-3.5 mb-4">
                    {/* Modern Engineered Challenge Icon Container */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500/10 via-amber-500/10 to-orange-500/10 border border-rose-200/80 text-rose-600 shadow-xs group-hover:scale-105 group-hover:border-rose-400 group-hover:shadow-[0_4px_16px_rgba(244,63,94,0.2)] transition-all duration-300">
                      <ChallengeIcon />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-rose-500 block">
                        Problem Statement
                      </span>
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                        Challenge
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm sm:text-[15px] leading-relaxed text-slate-600 font-normal">
                    {caseStudy.challenge}
                  </p>
                </article>
              </Reveal>

              {/* Approach Card */}
              <Reveal>
                <article className="group h-full flex flex-col justify-start rounded-[22px] sm:rounded-[28px] bg-white p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_36px_rgba(99,102,241,0.1)] hover:border-indigo-200 transition-all duration-300">
                  <div className="flex items-center gap-3.5 mb-4">
                    {/* Modern Engineered Approach Icon Container */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/15 via-blue-500/10 to-violet-500/15 border border-indigo-200/80 text-indigo-600 shadow-xs group-hover:scale-105 group-hover:border-indigo-400 group-hover:shadow-[0_4px_16px_rgba(99,102,241,0.25)] transition-all duration-300">
                      <ApproachIcon />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-indigo-500 block">
                        Solution Architecture
                      </span>
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                        Approach
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm sm:text-[15px] leading-relaxed text-slate-600 font-normal">
                    {caseStudy.approach}
                  </p>
                </article>
              </Reveal>
            </div>

            {/* BOTTOM ROW: OUTCOMES (CARDS) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
              {caseStudy.outcomes.map((outcome, idx) => (
                <Reveal key={outcome}>
                  <article className="group h-full flex flex-col justify-between rounded-[22px] sm:rounded-[28px] bg-white p-5 sm:p-7 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_36px_rgba(99,102,241,0.12)] hover:border-indigo-300 hover:-translate-y-1.5 transition-all duration-300">
                    <div className="flex items-center justify-between mb-3.5">
                      {/* Modern Outcome Icon Badge */}
                      <div className="flex h-8.5 w-8.5 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/15 via-teal-500/10 to-cyan-500/15 border border-emerald-200/80 text-emerald-600 shadow-2xs group-hover:scale-110 group-hover:border-indigo-400 group-hover:bg-gradient-to-br group-hover:from-indigo-500/15 group-hover:to-blue-500/15 group-hover:text-indigo-600 transition-all duration-300">
                        <OutcomeIcon index={idx} />
                      </div>
                      <span className="font-mono text-xs font-extrabold text-slate-400 group-hover:text-indigo-600 transition-colors">
                        0{idx + 1}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed group-hover:text-slate-950 transition-colors">
                      {outcome}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── RELATED CASE STUDIES SHOWCASE (ELEVATED FINAL SECTION) ─── */}
      <section className="bg-gradient-to-b from-slate-50/80 to-slate-100/60 border-t border-slate-200/80 pt-16 sm:pt-20 pb-36 sm:pb-44 relative overflow-hidden">
        {/* Subtle Ambient Background Light */}
        <div className="absolute top-0 right-1/4 h-80 w-80 rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

        <div className="page-shell relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="h-[2px] w-5 rounded-full bg-indigo-600" />
                <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
                  Related Proof Points
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Explore More Case Studies
              </h2>
            </div>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-indigo-600 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 shadow-xs transition-all group"
            >
              <span>View all {caseStudies.length} case studies</span>
              <svg
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {relatedCaseStudies.map((item) => (
              <Reveal key={item.slug}>
                <Link
                  to={`/case-studies/${item.slug}`}
                  className="group relative flex flex-col justify-between h-full overflow-hidden rounded-[28px] sm:rounded-[32px] bg-white border border-slate-200/90 p-7 sm:p-9 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_18px_44px_rgba(99,102,241,0.12)] hover:border-indigo-300 hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div>
                    {/* Top Meta Bar */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <span className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50/80 border border-indigo-100 px-3.5 py-1 rounded-full">
                        {item.category}
                      </span>
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 border border-slate-200/80 text-slate-400 group-hover:bg-indigo-600 group-hover:border-indigo-600 group-hover:text-white transition-all duration-300 shadow-2xs">
                        <svg
                          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 leading-snug group-hover:text-indigo-600 transition-colors mb-3">
                      {item.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-sm sm:text-[15px] text-slate-600 line-clamp-2 leading-relaxed font-normal mb-5">
                      {item.summary}
                    </p>
                  </div>

                  {/* Bottom Metric & Action Bar */}
                  <div className="mt-4 pt-5 border-t border-slate-100/90 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                      <span className="text-xs font-semibold text-slate-500">
                        Client: <strong className="text-slate-800 font-bold">{item.client}</strong>
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 font-mono text-xs font-bold uppercase tracking-wider text-indigo-600 group-hover:text-indigo-700 transition-colors">
                      Read full study →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
