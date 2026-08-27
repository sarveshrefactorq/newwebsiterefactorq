import { useState, useMemo } from "react"
import { Link } from "react-router-dom"

import { blogPosts } from "../data/blogPosts"
import { caseStudies } from "../data/caseStudies"
import { usePageMeta } from "../lib/meta"

import { ArrowLink } from "../components/ui/ArrowLink"
import { MediaPlaceholder } from "../components/ui/MediaPlaceholder"
import { Reveal } from "../components/ui/Reveal"
import { BlogCard } from "../components/ui/BlogCard"

/* ─────────────────────────────────────────────────────────────
   Bespoke Modern UI Icons for Case Studies
   ───────────────────────────────────────────────────────────── */

function VerifiedOutcomeIcon() {
  return (
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/15 via-teal-500/10 to-emerald-500/20 border border-emerald-200/80 text-emerald-600 shadow-xs transition-transform duration-300 group-hover:scale-110">
      <svg
        className="h-5 w-5 stroke-emerald-600"
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
    </div>
  )
}

function SearchIcon() {
  return (
    <svg
      className="h-4.5 w-4.5 text-slate-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  )
}

function FilterIcon() {
  return (
    <svg
      className="h-4 w-4 text-indigo-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
      />
    </svg>
  )
}

export function CaseStudiesPage() {
  usePageMeta(
    "Case Studies",
    "Explore case studies from RefactorQ.AI across performance, quality, AI automation, cloud, security, and transformation.",
  )

  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)
  const [isDesktopTopicOpen, setIsDesktopTopicOpen] = useState(true)

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts = new Map<string, number>()
    caseStudies.forEach((cs) => {
      counts.set(cs.category, (counts.get(cs.category) || 0) + 1)
    })
    return counts
  }, [])

  const categories = Array.from(categoryCounts.keys()).sort()

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    )
  }

  // Filtered case studies
  const filteredCaseStudies = useMemo(() => {
    return caseStudies.filter((cs) => {
      const matchesCategory =
        selectedCategories.length === 0 || selectedCategories.includes(cs.category)
      const matchesSearch =
        searchQuery.trim() === "" ||
        cs.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cs.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cs.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cs.category.toLowerCase().includes(searchQuery.toLowerCase())

      return matchesCategory && matchesSearch
    })
  }, [searchQuery, selectedCategories])

  return (
    <>
      {/* ─── BESPOKE EXECUTIVE HERO SECTION ─── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#070D18] via-[#0B1528] to-[#080E1A] pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-white/[0.08] text-white">
        {/* Subtle Tech Blueprint Grid Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-80" />

        {/* Ambient Glow Orbs */}
        <div className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-indigo-500/15 blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 -right-32 h-[420px] w-[420px] rounded-full bg-cyan-500/12 blur-[140px] pointer-events-none" />

        <div className="page-shell relative z-10">
          {/* Top Breadcrumb & Status Pill */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-4">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                Verified Client Impact & Proven Architecture
              </span>
            </div>
            <div className="font-mono text-[11px] font-bold text-slate-400">
              <span className="text-white">{caseStudies.length}</span> Active Case Studies Documented
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-12 items-center">
            {/* Left: Editorial Hero Content */}
            <div className="lg:col-span-7">
              <h1 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-extrabold tracking-tight text-white leading-[1.15]">
                Delivery outcomes across{" "}
                <span className="bg-gradient-to-r from-indigo-300 via-sky-200 to-white bg-clip-text text-transparent">
                  engineering, AI, cloud,
                </span>{" "}
                and transformation programs.
              </h1>

              <p className="mt-5 text-sm sm:text-base lg:text-[17px] text-slate-300 leading-relaxed font-normal max-w-2xl">
                Explore our archive of technical engagements. Each case study documents real operational bottlenecks, architectural decisions, and verified business ROI across enterprise production systems.
              </p>

              {/* Key Engagement Signals */}
              <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-6 text-xs text-slate-300 font-mono">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                  <span>100% Production Telemetry</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>Real Enterprise Metrics</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>Zero-Fluff Methodology</span>
                </div>
              </div>
            </div>

            {/* Right: Executive Impact Telemetry Card */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="relative overflow-hidden rounded-[28px] sm:rounded-[32px] bg-[#0E182A]/90 border border-slate-700/70 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
                  <div className="absolute -top-16 -right-16 h-44 w-44 rounded-full bg-indigo-500/20 blur-[60px] pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.08]">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-300">
                          Live Delivery Telemetry
                        </span>
                      </div>
                      <span className="font-mono text-[11px] font-bold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 rounded-full">
                        Production Proven
                      </span>
                    </div>

                    {/* 4 Proof Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-4">
                        <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                          16+
                        </div>
                        <div className="text-xs text-slate-400 font-medium mt-1">
                          Verified Engagements
                        </div>
                      </div>

                      <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-4">
                        <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">
                          40%–70%
                        </div>
                        <div className="text-xs text-slate-400 font-medium mt-1">
                          Avg. Latency Reduction
                        </div>
                      </div>

                      <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-4">
                        <div className="text-2xl sm:text-3xl font-extrabold text-indigo-300 font-mono">
                          2.25L+
                        </div>
                        <div className="text-xs text-slate-400 font-medium mt-1">
                          Daily Scale Handled
                        </div>
                      </div>

                      <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-4">
                        <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                          100%
                        </div>
                        <div className="text-xs text-slate-400 font-medium mt-1">
                          Engineering-Led Delivery
                        </div>
                      </div>
                    </div>

                    {/* Verified Guarantee Strip */}
                    <div className="flex items-center gap-2.5 text-xs text-slate-300 rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-3">
                      <svg className="h-4 w-4 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                      </svg>
                      <span>Grounded in publicly verifiable RefactorQ production outcomes.</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MAIN CONTENT: RESPONSIVE TOOLBAR + SIDEBAR + CASE STUDY CARDS ─── */}
      <section className="page-shell py-10 lg:py-20">
        {/* ─── MOBILE & TABLET COMPACT FILTER TOOLBAR (<lg) ─── */}
        <div className="block lg:hidden mb-8 space-y-4">
          {/* Search + Filter Toggle Row */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 flex items-center rounded-2xl bg-white border border-slate-200/90 shadow-2xs focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/20 transition-all">
              <div className="pl-3.5 pr-2 flex items-center pointer-events-none">
                <SearchIcon />
              </div>
              <input
                type="text"
                className="w-full bg-transparent py-2.5 pr-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none font-medium"
                placeholder="Search case studies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="mr-3 text-xs font-bold text-slate-400 hover:text-slate-600 bg-slate-100 rounded-full h-5 w-5 flex items-center justify-center transition-colors"
                >
                  ×
                </button>
              )}
            </div>

            {/* Filter Drawer Toggle Button */}
            <button
              type="button"
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer border ${
                selectedCategories.length > 0 || isMobileFilterOpen
                  ? "bg-indigo-600 border-indigo-600 text-white shadow-sm shadow-indigo-600/25"
                  : "bg-white border-slate-200/90 text-slate-700 hover:bg-slate-50"
              }`}
            >
              <FilterIcon />
              <span>Filters</span>
              {selectedCategories.length > 0 && (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-indigo-600 text-[10px] font-extrabold">
                  {selectedCategories.length}
                </span>
              )}
            </button>
          </div>

          {/* Horizontal Fast-Swipe Category Strip for Mobile/Tablet */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            <button
              type="button"
              onClick={() => setSelectedCategories([])}
              className={`shrink-0 rounded-full px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                selectedCategories.length === 0
                  ? "bg-indigo-600 text-white shadow-xs"
                  : "bg-white border border-slate-200/90 text-slate-700 hover:bg-slate-50"
              }`}
            >
              All ({caseStudies.length})
            </button>
            {categories.map((category) => {
              const isSelected = selectedCategories.includes(category)
              const count = categoryCounts.get(category) || 0
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => toggleCategory(category)}
                  className={`shrink-0 rounded-full px-3.5 py-1.5 font-mono text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-indigo-600 text-white shadow-xs font-bold"
                      : "bg-white border border-slate-200/90 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span>{category}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"}`}>
                    {count}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Expandable Full Mobile Filter Dropdown */}
          {isMobileFilterOpen && (
            <div className="rounded-2xl bg-white border border-slate-200/90 p-5 shadow-lg space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-800">
                  Select Practices
                </span>
                {selectedCategories.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setSelectedCategories([])}
                    className="text-xs font-mono font-bold text-indigo-600 hover:text-indigo-800"
                  >
                    Reset All
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-60 overflow-y-auto">
                {categories.map((category) => {
                  const count = categoryCounts.get(category) || 0
                  const isChecked = selectedCategories.includes(category)
                  return (
                    <label
                      key={category}
                      className="flex items-center justify-between gap-3 p-2 rounded-xl hover:bg-slate-50 cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleCategory(category)}
                          className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <span className={`text-xs truncate ${isChecked ? "font-bold text-indigo-950" : "text-slate-700"}`}>
                          {category}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">({count})</span>
                    </label>
                  )
                })}
              </div>
            </div>
          )}
        </div>

        {/* ─── DESKTOP SIDEBAR + CASE STUDIES LIST ─── */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
          {/* ─── DESKTOP STICKY SIDEBAR (lg: ONLY) ─── */}
          <aside className="hidden lg:block w-[300px] xl:w-[320px] shrink-0 sticky top-24">
            {/* Search Box */}
            <div className="mb-6">
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
                Search Case Studies
              </label>
              <div className="relative flex items-center w-full rounded-2xl bg-white border border-slate-200/90 shadow-2xs focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/20 transition-all">
                <div className="pl-4 pr-2 flex items-center pointer-events-none">
                  <SearchIcon />
                </div>
                <input
                  type="text"
                  className="w-full bg-transparent py-3 pr-4 text-sm text-slate-900 placeholder-slate-400 focus:outline-none font-medium"
                  placeholder="Type keywords, client..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="mr-3 text-xs font-bold text-slate-400 hover:text-slate-600 bg-slate-100 rounded-full h-5 w-5 flex items-center justify-center transition-colors"
                    aria-label="Clear search"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>

            {/* Filter Section Card */}
            <div className="rounded-[24px] bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden">
              <div className="px-6 py-4.5 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FilterIcon />
                  <h3 className="text-base font-extrabold text-slate-900 tracking-tight">
                    Filter by Topic
                  </h3>
                </div>
                {selectedCategories.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setSelectedCategories([])}
                    className="text-xs font-mono font-bold text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer"
                  >
                    Reset ({selectedCategories.length})
                  </button>
                )}
              </div>

              {/* Accordion Item */}
              <div>
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-6 py-3.5 text-left hover:bg-slate-50/80 transition-colors cursor-pointer"
                  onClick={() => setIsDesktopTopicOpen(!isDesktopTopicOpen)}
                >
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600">
                    Practices ({categories.length})
                  </span>
                  <svg
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                      isDesktopTopicOpen ? "rotate-180 text-indigo-600" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isDesktopTopicOpen && (
                  <div className="px-6 pb-6 pt-1 max-h-[420px] overflow-y-auto space-y-2.5 custom-scrollbar">
                    {categories.map((category) => {
                      const count = categoryCounts.get(category) || 0
                      const isChecked = selectedCategories.includes(category)

                      return (
                        <label
                          key={category}
                          className="flex items-center justify-between gap-3 cursor-pointer group rounded-xl p-2 -mx-2 hover:bg-indigo-50/40 transition-colors"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="relative flex items-center justify-center shrink-0">
                              <input
                                type="checkbox"
                                className="peer sr-only"
                                checked={isChecked}
                                onChange={() => toggleCategory(category)}
                              />
                              <div
                                className={`w-4.5 h-4.5 rounded-md border transition-all flex items-center justify-center ${
                                  isChecked
                                    ? "bg-indigo-600 border-indigo-600 text-white shadow-2xs"
                                    : "border-slate-300 bg-white group-hover:border-indigo-400"
                                }`}
                              >
                                {isChecked && (
                                  <svg
                                    className="w-3 h-3 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={3}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M4.5 12.75l6 6 9-13.5"
                                    />
                                  </svg>
                                )}
                              </div>
                            </div>
                            <span
                              className={`text-sm leading-snug transition-colors truncate ${
                                isChecked
                                  ? "font-bold text-indigo-950"
                                  : "text-slate-700 group-hover:text-slate-900 font-medium"
                              }`}
                            >
                              {category}
                            </span>
                          </div>
                          <span
                            className={`text-xs font-mono px-2 py-0.5 rounded-full ${
                              isChecked
                                ? "bg-indigo-100 text-indigo-700 font-bold"
                                : "bg-slate-100 text-slate-500 font-semibold group-hover:bg-indigo-50 group-hover:text-indigo-600"
                            }`}
                          >
                            {count}
                          </span>
                        </label>
                      )
                    })}
                  </div>
                )}
              </div>
            </div>
          </aside>

          {/* ─── CASE STUDIES LIST ─── */}
          <main className="flex-1 min-w-0 w-full">
            {/* Header info / count */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
              <p className="text-xs sm:text-sm font-semibold text-slate-500">
                Showing{" "}
                <strong className="text-slate-900 font-bold">
                  {filteredCaseStudies.length}
                </strong>{" "}
                {filteredCaseStudies.length === 1 ? "case study" : "case studies"}
              </p>
              {(selectedCategories.length > 0 || searchQuery) && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategories([])
                    setSearchQuery("")
                  }}
                  className="text-xs font-mono font-bold text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer"
                >
                  Clear all filters
                </button>
              )}
            </div>

            {filteredCaseStudies.length === 0 ? (
              <div className="rounded-[28px] sm:rounded-[32px] bg-white border border-slate-200/90 p-8 sm:p-12 text-center shadow-xs">
                <div className="mx-auto flex h-12 sm:h-14 w-12 sm:w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 mb-4">
                  <SearchIcon />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                  No case studies found
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto mb-6">
                  We couldn&apos;t find any case studies matching your criteria. Try
                  adjusting your search query or practice filters.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategories([])
                    setSearchQuery("")
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-white hover:bg-indigo-700 transition-colors shadow-sm cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="space-y-6 sm:space-y-8">
                {filteredCaseStudies.map((study) => (
                  <Reveal key={study.slug}>
                    <article className="group relative overflow-hidden rounded-[24px] sm:rounded-[32px] bg-white border border-slate-200/90 p-5 sm:p-8 lg:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_48px_rgba(99,102,241,0.12)] hover:border-indigo-300 transition-all duration-300">
                      <div className="flex flex-col md:flex-row gap-6 sm:gap-8 lg:gap-10">
                        {/* Image Preview Container */}
                        <div className="w-full md:w-[260px] lg:w-[300px] xl:w-[320px] shrink-0 overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-100 relative bg-slate-100 h-48 sm:h-56 md:h-auto min-h-[180px]">
                          <MediaPlaceholder
                            label={`Preview · ${study.title}`}
                            slug={study.slug}
                            ratio="16/10"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                        {/* Story & Outcomes Info */}
                        <div className="flex-1 flex flex-col justify-between min-w-0">
                          <div>
                            {/* Category Badge & Live Pulse */}
                            <div className="flex flex-wrap items-center gap-2 mb-2.5">
                              <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 border border-indigo-100/90 px-3 py-1 text-[11px] sm:text-xs font-mono font-bold text-indigo-700">
                                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                                {study.category}
                              </span>
                              <span className="text-[11px] sm:text-xs text-slate-400 font-mono">
                                Client: <strong className="text-slate-700">{study.client}</strong>
                              </span>
                            </div>

                            {/* Title */}
                            <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug mb-2.5">
                              <Link to={`/case-studies/${study.slug}`} className="focus:outline-none">
                                {study.title}
                              </Link>
                            </h2>

                            {/* Summary */}
                            <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-normal mb-5 line-clamp-2 sm:line-clamp-3">
                              {study.summary}
                            </p>

                            {/* Telemetry Outcome Badge */}
                            <div className="flex items-center gap-3 rounded-2xl bg-slate-50/90 border border-slate-200/80 p-3 sm:p-4 mb-5">
                              <VerifiedOutcomeIcon />
                              <div className="min-w-0 flex-1">
                                <span className="block font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">
                                  Verified Delivery Metric
                                </span>
                                <span className="text-xs sm:text-sm font-bold text-slate-900 leading-snug truncate block">
                                  {study.metric}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Footer Action Strip */}
                          <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between gap-3">
                            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                              <span className="text-[11px] sm:text-xs">{study.outcomes.length} Verified Outcomes</span>
                            </div>

                            <Link
                              to={`/case-studies/${study.slug}`}
                              className="inline-flex items-center gap-2 rounded-full bg-slate-900 group-hover:bg-indigo-600 text-white px-4 sm:px-5 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 shadow-xs"
                            >
                              <span>Read Case Study</span>
                              <svg
                                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.5}
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            )}
          </main>
        </div>
      </section>

      {/* ─── RELATED THOUGHT LEADERSHIP SECTION ─── */}
      <section className="bg-slate-50/80 border-t border-slate-200/80 pt-16 sm:pt-20 pb-36 sm:pb-44">
        <div className="page-shell">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="h-[2px] w-5 rounded-full bg-indigo-600" />
                <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
                  Engineering Insights
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Related Technical Articles
              </h2>
            </div>
            <ArrowLink href="/blogs" label="Explore all publications" />
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <Reveal key={post.slug}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
