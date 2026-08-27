import { useState } from "react"
import { Link, useParams } from "react-router-dom"

import { BOOKING_URL } from "../config/site"
import { products } from "../data/products"
import { findProduct } from "../lib/finders"
import { usePageMeta } from "../lib/meta"
import { Reveal } from "../components/ui/Reveal"
import { NotFoundPage } from "./NotFoundPage"

/* ─────────────────────────────────────────────────────────────
   Bespoke Vector Icons for Product Capabilities
   ───────────────────────────────────────────────────────────── */

function CapabilityIcon({ index }: { index: number }) {
  const iconClass = "h-5 w-5 stroke-current transition-colors duration-300"

  switch (index % 4) {
    case 0:
      // AI Discovery / Radar Engine
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
        </svg>
      )
    case 1:
      // Multi-Signal Smart Enrichment
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
        </svg>
      )
    case 2:
      // List Qualification & Filter Matrix
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
        </svg>
      )
    default:
      // Real-time CRM Sync & Webhook Gateway
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
      )
  }
}

/* ─────────────────────────────────────────────────────────────
   Interactive Live Product Console Mockups
   ───────────────────────────────────────────────────────────── */

function LeadGenConsoleMockup() {
  const [activeTab, setActiveTab] = useState<"discovery" | "enrichment" | "crm">("discovery")

  return (
    <div className="rounded-[24px] sm:rounded-[28px] bg-[#0E1726] border border-slate-700/80 shadow-2xl overflow-hidden text-left">
      {/* Top Window Bar */}
      <div className="flex items-center justify-between px-5 py-3.5 bg-[#0B1320] border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-rose-500/80" />
          <div className="h-3 w-3 rounded-full bg-amber-500/80" />
          <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-[11px] font-bold text-slate-400">
            LeadGen · Live Prospecting Engine
          </span>
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-0.5 text-[10px] font-mono font-bold text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          AI Signals Live
        </div>
      </div>

      {/* Internal Navigation Tabs */}
      <div className="flex items-center gap-2 px-5 pt-3 border-b border-slate-800/80 bg-[#0E1726]">
        {[
          { id: "discovery", label: "Prospect Discovery" },
          { id: "enrichment", label: "Smart Enrichment (12 Signals)" },
          { id: "crm", label: "CRM Sync Queue" },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id as any)}
            className={`pb-2.5 px-3 font-mono text-xs font-bold transition-colors cursor-pointer border-b-2 ${
              activeTab === tab.id
                ? "border-indigo-500 text-indigo-300"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Search & Filter Bar */}
      <div className="p-4 sm:p-5 border-b border-slate-800/60 bg-[#0C1422] flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-700/80 rounded-xl px-3 py-1.5 flex-1 min-w-[200px]">
          <svg className="h-3.5 w-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="font-mono text-slate-300 text-[11px]">
            ICP Filter: &ldquo;VP Engineering&rdquo;, &ldquo;Cloud & SRE&rdquo;, Series B+, US/EMEA
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-lg bg-indigo-500/20 text-indigo-300 px-2.5 py-1 font-mono text-[10px] font-bold border border-indigo-500/30">
            342 Verified Matches
          </span>
        </div>
      </div>

      {/* Live Data Records Table */}
      <div className="p-4 sm:p-5 space-y-2.5">
        {[
          {
            name: "Sarah Chen",
            role: "VP Engineering",
            company: "ScaleAI Platform",
            status: "98% ICP Match",
            signals: ["Verified Work Email", "AWS & K8s Tech Stack", "Budget Decision Maker"],
            verified: true,
          },
          {
            name: "David Miller",
            role: "Head of Infrastructure & SRE",
            company: "Fintech Cloud Systems",
            status: "95% ICP Match",
            signals: ["Recent Funding Event", "Hiring 12+ Engineers", "HubSpot Auto-Mapped"],
            verified: true,
          },
          {
            name: "Elena Rostova",
            role: "Chief Technology Officer",
            company: "HealthTech Solutions",
            status: "92% ICP Match",
            signals: ["SOC2 Compliance Initiative", "Direct Phone Verified", "Outreach Ready"],
            verified: true,
          },
        ].map((lead) => (
          <div
            key={lead.name}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-indigo-500/40 p-3.5 sm:p-4 transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center font-mono font-bold text-white text-xs shadow-sm">
                {lead.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-100 text-sm">{lead.name}</span>
                  <span className="h-1 w-1 rounded-full bg-slate-500" />
                  <span className="text-xs text-slate-400 font-medium">{lead.role}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                  <span className="text-indigo-400 font-semibold">{lead.company}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-1.5">
              {lead.signals.map((sig) => (
                <span
                  key={sig}
                  className="rounded-md bg-white/[0.05] border border-white/10 px-2 py-0.5 font-mono text-[10px] font-medium text-slate-300"
                >
                  {sig}
                </span>
              ))}
              <span className="rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 px-2 py-0.5 font-mono text-[10px] font-bold">
                {lead.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Dispatch Footer */}
      <div className="px-5 py-3 bg-[#0B1320] border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-slate-400">
          <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="font-mono text-[11px]">Direct 2-Way Sync with HubSpot, Salesforce & Webhooks</span>
        </div>
        <a
          href={BOOKING_URL}
          className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-indigo-400 hover:text-white transition-colors"
        >
          <span>Test Live On Your Target ICP</span>
          <span>→</span>
        </a>
      </div>
    </div>
  )
}

function GenericProductConsoleMockup({ product }: { product: any }) {
  return (
    <div className="rounded-[24px] sm:rounded-[28px] bg-[#0E1726] border border-slate-700/80 shadow-2xl overflow-hidden text-left">
      <div className="flex items-center justify-between px-5 py-3.5 bg-[#0B1320] border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-rose-500/80" />
          <div className="h-3 w-3 rounded-full bg-amber-500/80" />
          <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-[11px] font-bold text-slate-400">
            {product.name} · Operating Dashboard
          </span>
        </div>
        <span className="rounded-full bg-indigo-500/10 border border-indigo-500/25 px-2.5 py-0.5 text-[10px] font-mono font-bold text-indigo-300">
          Active Platform
        </span>
      </div>

      <div className="p-6 sm:p-8 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <h4 className="font-bold text-white text-base">{product.name} Workflow Pipeline</h4>
            <p className="text-xs text-slate-400 mt-1">{product.tagline}</p>
          </div>
          <span className="rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 px-3 py-1 text-xs font-mono font-bold">
            100% Automated
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {product.capabilities.slice(0, 4).map((cap: string, i: number) => (
            <div key={cap} className="rounded-xl bg-white/[0.03] border border-white/[0.08] p-4 flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-400 font-mono text-xs font-bold">
                0{i + 1}
              </div>
              <span className="text-xs font-medium text-slate-200 leading-relaxed">{cap}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ProductDetailPage() {
  const { slug } = useParams()

  const product = findProduct(slug)

  if (!product) {
    return <NotFoundPage />
  }

  usePageMeta(product.name, product.summary)

  const isLeadGen = product.slug === "leadgen"
  const otherProducts = products.filter((p) => p.slug !== product.slug)

  return (
    <>
      {/* ─── HERO INTRO & INTERACTIVE CONSOLE SHOWCASE ─── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0B1320] via-[#0E1B2E] to-[#0B1320] pt-10 pb-16 lg:pt-14 lg:pb-24 border-b border-white/[0.08] text-white">
        {/* Ambient Glow */}
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-500/15 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 -right-32 h-96 w-96 rounded-full bg-blue-500/15 blur-[120px] pointer-events-none" />

        <div className="page-shell relative z-10">
          {/* Breadcrumb Navigation Bar */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-5">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono font-medium">
              <Link
                to="/products"
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
                <span>Products</span>
              </Link>
              <span className="text-slate-600">/</span>
              <span className="text-slate-300 font-semibold">{product.name}</span>
            </nav>

            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-300">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
              SaaS Engine & Platform
            </div>
          </div>

          {/* ─── SPLIT HERO GRID: NARRATIVE (5 COLS) + LIVE CONSOLE (7 COLS) ─── */}
          <div className="grid gap-10 lg:grid-cols-12 xl:gap-14 items-center">
            {/* Left Column: Value Narrative & CTAs */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="h-[2px] w-5 rounded-full bg-indigo-500" />
                <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-indigo-400">
                  {isLeadGen ? "Outbound Intelligence & Growth Engine" : `${product.name} Architecture`}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-extrabold tracking-tight text-white leading-[1.12]">
                {product.name}
              </h1>

              {product.tagline && (
                <p className="mt-3 text-base sm:text-lg font-semibold text-indigo-300 leading-snug">
                  {product.tagline}
                </p>
              )}

              <p className="mt-4 text-sm sm:text-[15px] text-slate-300 leading-relaxed font-normal">
                {product.summary}
              </p>

              {/* Highlights Tag Bar */}
              <div className="mt-6 flex flex-wrap items-center gap-2">
                {product.highlights.map((h) => (
                  <span
                    key={h}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] border border-white/10 px-3 py-1 text-[11px] sm:text-xs font-mono font-semibold text-slate-200"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {h}
                  </span>
                ))}
              </div>

              {/* Primary Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <a
                  href={BOOKING_URL}
                  className="inline-flex items-center gap-2 rounded-full bg-indigo-600 hover:bg-indigo-500 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-indigo-600/30 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                >
                  <span>{product.cta}</span>
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-white/5 hover:bg-white/10 hover:border-slate-600 text-slate-200 px-5 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-300"
                >
                  See Related Consulting
                </Link>
              </div>
            </div>

            {/* Right Column: Interactive Live Product Preview Console */}
            <div className="lg:col-span-7">
              <Reveal>
                {isLeadGen ? (
                  <LeadGenConsoleMockup />
                ) : (
                  <GenericProductConsoleMockup product={product} />
                )}
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE CORE PROBLEM VS. SOLUTION ARCHITECTURE ─── */}
      <section className="page-shell py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] items-stretch">
          {/* Problem Card */}
          <div className="rounded-[28px] sm:rounded-[32px] bg-slate-50 border border-slate-200/80 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="h-[2px] w-5 rounded-full bg-rose-500" />
                <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-rose-600">
                  The Problem It Solves
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Fragmented Prospect Research & Wasted Sales Cycles
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {product.problem}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/80 space-y-2.5">
              {[
                "Scattered databases and stale spreadsheet contacts",
                "High bounce rates and unverified decision makers",
                "Friction-heavy manual sync into sales CRM workflows",
              ].map((point) => (
                <div key={point} className="flex items-center gap-2.5 text-xs text-rose-700 font-medium">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600 font-bold text-[10px]">
                    ✕
                  </span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solution & Detail Card */}
          <div className="rounded-[28px] sm:rounded-[32px] bg-[#0B1322] border border-slate-800 p-8 sm:p-10 text-white flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-indigo-500/15 blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="h-[2px] w-5 rounded-full bg-emerald-400" />
                <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">
                  The RefactorQ Solution
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                A Unified, Automated Pipeline Engine
              </h2>
              <p className="mt-4 text-sm sm:text-[15px] text-slate-300 leading-relaxed font-normal">
                {product.detail}
              </p>
            </div>

            <div className="relative z-10 mt-8 pt-6 border-t border-white/10 space-y-2.5">
              {[
                "AI discovery across live web intelligence signals",
                "12+ data enrichment fields including verified direct contacts",
                "Native 2-way sync into HubSpot, Salesforce, Zoho & Webhooks",
              ].map((point) => (
                <div key={point} className="flex items-center gap-2.5 text-xs text-emerald-300 font-medium">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-[10px]">
                    ✓
                  </span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CORE CAPABILITIES (4 CARDS GRID) ─── */}
      <section className="bg-slate-50/80 border-y border-slate-200/80 py-16 sm:py-20 lg:py-24">
        <div className="page-shell">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="h-[2px] w-5 rounded-full bg-indigo-600" />
                <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
                  Key Capabilities
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Built For End-to-End Execution
              </h2>
            </div>
            <p className="text-sm text-slate-500 max-w-md">
              Every capability is engineered to remove manual overhead and deliver production-ready sales intelligence.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {product.capabilities.map((cap, index) => (
              <Reveal key={cap}>
                <article className="group h-full flex flex-col justify-between rounded-[28px] bg-white p-7 sm:p-8 border border-slate-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_18px_44px_rgba(99,102,241,0.12)] hover:border-indigo-300 hover:-translate-y-1.5 transition-all duration-300">
                  <div>
                    {/* Top Icon & Index */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50/90 border border-indigo-100/90 text-indigo-600 group-hover:scale-105 group-hover:bg-indigo-600 group-hover:border-indigo-600 group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(99,102,241,0.3)] transition-all duration-300 shadow-2xs">
                        <CapabilityIcon index={index} />
                      </div>
                      <span className="font-mono text-xs font-extrabold text-slate-300 group-hover:text-indigo-500 transition-colors">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold tracking-tight text-slate-900 leading-snug group-hover:text-indigo-600 transition-colors mb-2">
                      {cap}
                    </h3>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>Real-Time Engine</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WORKFLOW SEQUENCE (HOW IT MOVES WORK) ─── */}
      {product.workflow && (
        <section className="page-shell py-16 sm:py-20 lg:py-24">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="h-[2px] w-5 rounded-full bg-indigo-600" />
                <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
                  Operating Workflow
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                From ICP Definition to Active Opportunity
              </h2>
            </div>
            <p className="text-sm text-slate-500 max-w-md">
              A 4-step sequence engineered to create predictable pipeline flow without manual spreadsheet cleanup.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {product.workflow.map((step, index) => (
              <Reveal key={step}>
                <div className="group relative flex flex-col justify-between h-full rounded-[28px] bg-white border border-slate-200/90 p-7 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(99,102,241,0.1)] hover:border-indigo-300 hover:-translate-y-1 transition-all duration-300">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 border border-indigo-100 font-mono text-sm font-extrabold text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all duration-300 shadow-2xs">
                        0{index + 1}
                      </span>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        Step 0{index + 1}
                      </span>
                    </div>

                    <p className="text-sm sm:text-[15px] leading-relaxed text-slate-700 font-medium">
                      {step}
                    </p>
                  </div>

                  <div className="mt-6 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      Automated Step
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
      )}

      {/* ─── MEASURABLE BUSINESS OUTCOMES ─── */}
      {product.outcomes && (
        <section className="bg-[#0A111C] border-y border-white/5 py-16 sm:py-20 lg:py-24 text-white relative overflow-hidden">
          <div className="absolute top-0 right-1/4 h-80 w-80 rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />

          <div className="page-shell relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="h-[2px] w-5 rounded-full bg-emerald-400" />
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">
                    Business Impact
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                  What a Rollout Actually Delivers
                </h2>
              </div>
              <p className="text-sm text-slate-400 max-w-md font-normal">
                Concrete operational improvements your revenue, growth, and sales teams will feel from Day 1.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {product.outcomes.map((outcome, idx) => (
                <Reveal key={outcome}>
                  <div className="group h-full flex flex-col justify-between rounded-[28px] bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-emerald-500/40 p-7 sm:p-8 transition-all duration-300">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 group-hover:scale-105 transition-transform">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </div>
                        <span className="font-mono text-xs font-bold text-slate-500">0{idx + 1}</span>
                      </div>

                      <p className="text-sm sm:text-base font-semibold text-slate-100 leading-relaxed">
                        {outcome}
                      </p>
                    </div>

                    <div className="mt-6 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                      <span>✓ Verified ROI</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── WHO IT'S FOR & INTEGRATION ECOSYSTEM ─── */}
      <section className="page-shell py-16 sm:py-20 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-2 items-stretch">
          {/* Target Audience Card */}
          <Reveal>
            <div className="group h-full rounded-[28px] sm:rounded-[32px] bg-white border border-slate-200/90 p-8 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(99,102,241,0.08)] hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-2.5">
                  <span className="h-[2px] w-5 rounded-full bg-indigo-600" />
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
                    Target Teams
                  </span>
                </div>
                <h3 className="text-2xl sm:text-[1.65rem] font-extrabold text-slate-900 tracking-tight mb-3">
                  Who Is This Product For?
                </h3>
                <p className="text-sm text-slate-600 mb-8 leading-relaxed font-normal">
                  Teams that need high-volume prospect discovery without adding manual SDR headcount or cleaning spreadsheets.
                </p>

                {/* Structured Audience Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {product.audience.map((aud) => (
                    <div
                      key={aud}
                      className="flex items-center gap-2.5 rounded-2xl bg-indigo-50/40 hover:bg-indigo-50 border border-indigo-100/80 p-3 transition-colors duration-200"
                    >
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-white font-mono text-[10px] font-bold shadow-2xs">
                        ✓
                      </div>
                      <span className="text-xs font-bold text-slate-900 leading-snug">
                        {aud}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>Tailored for outbound & growth squads</span>
                <span className="text-indigo-600 font-bold">100% Configurable</span>
              </div>
            </div>
          </Reveal>

          {/* Integrations Card */}
          {product.integrations && (
            <Reveal>
              <div className="group h-full rounded-[28px] sm:rounded-[32px] bg-white border border-slate-200/90 p-8 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(99,102,241,0.08)] hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <span className="h-[2px] w-5 rounded-full bg-indigo-600" />
                    <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
                      Native Ecosystem
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-[1.65rem] font-extrabold text-slate-900 tracking-tight mb-3">
                    Seamless CRM & Tool Integrations
                  </h3>
                  <p className="text-sm text-slate-600 mb-8 leading-relaxed font-normal">
                    Plug directly into your active CRM workflow with zero disruption and 1-click schema mapping.
                  </p>

                  {/* Structured Integration Ecosystem Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {product.integrations.map((tool) => (
                      <div
                        key={tool}
                        className="flex items-center justify-between gap-2 rounded-2xl bg-slate-50/80 hover:bg-indigo-50/60 border border-slate-200/80 hover:border-indigo-200 p-3 transition-all duration-200"
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                          <span className="text-xs font-bold text-slate-900 truncate">
                            {tool}
                          </span>
                        </div>
                        <span className="rounded-md bg-white border border-slate-200/80 px-2 py-0.5 font-mono text-[9px] font-bold text-slate-500 shrink-0">
                          2-Way Sync
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>Zero code schema mapping</span>
                  <span className="text-emerald-600 font-bold">● Live Connector</span>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* ─── REQUEST DEMO CTA STRIP ─── */}
      <section className="page-shell pb-20">
        <div className="relative overflow-hidden rounded-[32px] sm:rounded-[40px] bg-gradient-to-br from-[#0B1322] via-[#0E1B2E] to-[#0B1322] p-8 sm:p-14 text-white border border-slate-800 shadow-2xl">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/15 border border-indigo-500/30 px-3.5 py-1 rounded-full inline-block mb-4">
              Schedule A Live Demonstration
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Ready to automate your {product.name} pipeline?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Book a tailored walkthrough with our technical architects to test {product.name} against your specific ICP and CRM setup.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={BOOKING_URL}
                className="inline-flex items-center gap-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white px-7 py-3.5 text-xs font-bold uppercase tracking-wider shadow-lg shadow-indigo-600/30 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
              >
                <span>{product.cta}</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>

              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-white/5 hover:bg-white/10 hover:border-slate-600 text-slate-200 px-6 py-3.5 text-xs font-bold uppercase tracking-wider transition-all duration-300"
              >
                Explore All Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── OTHER PRODUCTS SHOWCASE ─── */}
      {otherProducts.length > 0 && (
        <section className="bg-white border-t border-slate-200/80 pt-16 sm:pt-20 pb-36 sm:pb-44">
          <div className="page-shell">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="h-[2px] w-5 rounded-full bg-indigo-600" />
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
                    SaaS Ecosystem
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Other RefactorQ AI Products
                </h2>
              </div>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-indigo-600 hover:text-indigo-700 transition-colors"
              >
                View all products →
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {otherProducts.map((p) => (
                <Reveal key={p.slug}>
                  <Link
                    to={`/products/${p.slug}`}
                    className="group flex flex-col justify-between rounded-[28px] bg-white border border-slate-200/90 p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_18px_44px_rgba(99,102,241,0.12)] hover:border-indigo-300 hover:-translate-y-1.5 transition-all duration-300 h-full"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full">
                          AI Platform
                        </span>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 border border-slate-200 text-slate-400 group-hover:bg-indigo-600 group-hover:border-indigo-600 group-hover:text-white transition-all duration-300 shadow-2xs">
                          <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </div>
                      </div>

                      <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2">
                        {p.name}
                      </h3>
                      <p className="text-xs font-semibold text-indigo-600/90 font-mono mb-3">
                        {p.tagline}
                      </p>
                      <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal line-clamp-3">
                        {p.summary}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                      {p.highlights.slice(0, 3).map((h) => (
                        <span key={h} className="rounded-md bg-slate-50 text-slate-600 border border-slate-200/80 px-2.5 py-1 text-[11px] font-mono font-medium">
                          {h}
                        </span>
                      ))}
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
