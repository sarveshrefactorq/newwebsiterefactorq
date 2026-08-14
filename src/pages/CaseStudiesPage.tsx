import { useState, useMemo } from "react"
import { Link } from "react-router-dom"

import { blogPosts } from "../data/blogPosts"
import { caseStudies } from "../data/caseStudies"

import { usePageMeta } from "../lib/meta"

import { ArrowLink } from "../components/ui/ArrowLink"
import { MediaPlaceholder } from "../components/ui/MediaPlaceholder"
import { PageIntro } from "../components/ui/PageIntro"
import { Reveal } from "../components/ui/Reveal"
import { SectionHeader } from "../components/ui/SectionHeader"
import { BlogCard } from "../components/ui/BlogCard"

export function CaseStudiesPage() {
  usePageMeta(
    "Case Studies",
    "Explore case studies from RefactorQ.AI across performance, quality, AI automation, cloud, security, and transformation.",
  )

  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Results")

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set(caseStudies.map((cs) => cs.category))
    return ["All Results", ...Array.from(set)]
  }, [])

  // Filtered case studies
  const filteredCaseStudies = useMemo(() => {
    return caseStudies.filter((cs) => {
      const matchesCategory =
        selectedCategory === "All Results" || cs.category === selectedCategory
      const matchesSearch =
        searchQuery.trim() === "" ||
        cs.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cs.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cs.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cs.category.toLowerCase().includes(searchQuery.toLowerCase())

      return matchesCategory && matchesSearch
    })
  }, [searchQuery, selectedCategory])

  return (
    <>
      <PageIntro
        body="These case studies are grounded in publicly available RefactorQ work and restructured to show challenge, approach, and measurable outcomes clearly."
        eyebrow="Case Studies"
        title="Delivery outcomes across engineering, AI, cloud, and transformation programs."
      />

      <section className="page-shell py-14 lg:py-20">
        {/* Bain Style Search & Red/Orange Underline Input */}
        <div className="mb-12 border-b-2 border-indigo-500 pb-4">
          <div className="flex items-center gap-4">
            <svg
              className="h-6 w-6 text-indigo-500 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              className="w-full bg-transparent text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 placeholder-slate-400 focus:outline-none"
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search case studies..."
              type="text"
              value={searchQuery}
            />
            {searchQuery && (
              <button
                className="text-xs font-bold text-slate-400 hover:text-slate-900 uppercase"
                onClick={() => setSearchQuery("")}
                type="button"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Bain Results Counter & Filter Navigation Row */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-6 border-b border-slate-200 pb-6">
          <div className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
            Showing 1 - {filteredCaseStudies.length} of {caseStudies.length} results
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? "bg-indigo-500 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
                onClick={() => setSelectedCategory(cat)}
                type="button"
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-500">
            <span>Sort by:</span>
            <span className="font-bold text-slate-900">Most Relevant</span>
          </div>
        </div>

        {/* Bain Style Horizontal Editorial Row List */}
        <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
          {filteredCaseStudies.length > 0 ? (
            filteredCaseStudies.map((caseStudy) => (
              <Reveal key={caseStudy.slug}>
                <Link
                  className="group flex flex-col-reverse justify-between gap-8 py-10 transition-all md:flex-row md:items-center hover:bg-slate-50/50 px-2"
                  to={`/case-studies/${caseStudy.slug}`}
                >
                  {/* Left Column: Client Tag, Title, Summary, Impact Metric */}
                  <div className="flex flex-1 flex-col items-start space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-indigo-600 border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-0.5">
                        Client Results
                      </span>
                      <span className="text-xs font-bold text-slate-400">•</span>
                      <span className="text-xs font-semibold text-slate-500">
                        {caseStudy.category}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-slate-900 leading-tight transition-colors duration-200 group-hover:text-indigo-600">
                      {caseStudy.title}
                    </h2>

                    <p className="max-w-3xl text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
                      {caseStudy.summary}
                    </p>

                    {/* Impact Metric */}
                    <div className="pt-2">
                      <span className="inline-flex items-center gap-2 font-mono text-xs font-bold text-indigo-600 border border-indigo-500/20 bg-indigo-500/5 px-3 py-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                        {caseStudy.metric}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Bain Style Thumbnail Placeholder */}
                  <div className="w-full md:w-72 h-44 shrink-0 rounded-none overflow-hidden border border-slate-200 bg-slate-100 shadow-xs transition-transform duration-300 group-hover:scale-[1.02]">
                    <MediaPlaceholder
                      className="h-full w-full object-cover"
                      label={`Photo — ${caseStudy.client}`}
                      slug={caseStudy.slug}
                    />
                  </div>
                </Link>
              </Reveal>
            ))
          ) : (
            <div className="py-16 text-center text-slate-500">
              <p className="text-lg font-semibold">No case studies found matching your criteria.</p>
              <button
                className="mt-4 rounded-none bg-indigo-500 text-white px-5 py-2 text-xs font-bold uppercase tracking-wider"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("All Results")
                }}
                type="button"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* From the Blog Section */}
      <section className="section-surface border-t border-slate-200">
        <div className="page-shell py-20 lg:py-24">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              body="Longer-form writing on the same delivery, AI, cloud, and security themes covered in the case studies above."
              eyebrow="From the blog"
              title="Related reading from the RefactorQ team."
            />
            <ArrowLink href="/blogs" label="View all articles" />
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
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

