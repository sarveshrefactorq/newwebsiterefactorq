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
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [isTopicOpen, setIsTopicOpen] = useState(true)

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
        : [...prev, category]
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
      <PageIntro
        body="These case studies are grounded in publicly available RefactorQ work and restructured to show challenge, approach, and measurable outcomes clearly."
        eyebrow="Case Studies"
        title="Delivery outcomes across engineering, AI, cloud, and transformation programs."
      />

      <section className="page-shell py-14 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Sidebar Filter System */}
          <aside className="w-full lg:w-[320px] shrink-0">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Search all case studies</h2>
            
            {/* Search Input */}
            <div className="flex w-full mb-10 border border-slate-300 focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 transition-all">
              <input
                type="text"
                className="w-full bg-white px-4 py-3 text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:outline-none"
                placeholder="Type to search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                className="bg-[#1a3644] hover:bg-[#11242e] text-white px-5 flex items-center justify-center transition-colors"
                aria-label="Search"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </button>
            </div>

            {/* Filter Section */}
            <div className="bg-slate-50/80 border border-slate-100 rounded-lg overflow-hidden">
              <div className="px-6 py-5 border-b border-slate-200">
                <h3 className="text-xl font-bold text-slate-900">Filter by</h3>
              </div>
              
              {/* Accordion Item */}
              <div>
                <button 
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-slate-100/50 transition-colors"
                  onClick={() => setIsTopicOpen(!isTopicOpen)}
                >
                  <span className="text-lg font-bold text-[#1a3644]">Topic</span>
                  <svg 
                    className={`w-5 h-5 text-rose-800 transition-transform duration-200 ${isTopicOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isTopicOpen && (
                  <div className="px-6 pb-6 pt-2 max-h-[400px] overflow-y-auto space-y-3 custom-scrollbar">
                    {categories.map((category) => {
                      const count = categoryCounts.get(category) || 0;
                      const isChecked = selectedCategories.includes(category);
                      
                      return (
                        <label 
                          key={category} 
                          className="flex items-start gap-3 cursor-pointer group"
                        >
                          <div className="relative flex items-center justify-center shrink-0 mt-0.5">
                            <input
                              type="checkbox"
                              className="peer sr-only"
                              checked={isChecked}
                              onChange={() => toggleCategory(category)}
                            />
                            <div className="w-5 h-5 border border-slate-400 bg-white group-hover:border-indigo-500 peer-focus-visible:ring-2 peer-focus-visible:ring-indigo-500 peer-focus-visible:ring-offset-2 transition-colors flex items-center justify-center">
                              {isChecked && (
                                <svg className="w-3.5 h-3.5 text-[#1a3644]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                              )}
                            </div>
                          </div>
                          <span className="text-[15px] text-slate-700 group-hover:text-slate-900 leading-snug">
                            {category} ({count})
                          </span>
                        </label>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1 min-w-0">
            {/* Results Header */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 pb-4">
              <div className="text-sm font-semibold tracking-wider text-slate-500 uppercase">
                Showing 1 - {filteredCaseStudies.length} of {caseStudies.length} results
              </div>

              <div className="hidden sm:flex items-center gap-2 text-sm text-slate-600">
                <span>Sort by:</span>
                <span className="font-bold text-slate-900 cursor-pointer hover:text-indigo-600">Most Relevant</span>
              </div>
            </div>

            {/* Results List */}
            <div className="flex flex-col gap-6">
              {filteredCaseStudies.length > 0 ? (
                filteredCaseStudies.map((caseStudy) => (
                  <Reveal key={caseStudy.slug}>
                    <Link
                      className="group flex flex-col-reverse justify-between gap-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-slate-300 md:flex-row md:items-center"
                      to={`/case-studies/${caseStudy.slug}`}
                    >
                      {/* Left Column: Category, Title, Summary, Impact Metric */}
                      <div className="flex flex-1 flex-col items-start space-y-4">
                        <div className="flex items-center gap-2">
                          <span className="bg-black text-white px-2.5 py-1 text-xs sm:text-sm font-bold">
                            {caseStudy.category}
                          </span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black leading-tight underline decoration-2 underline-offset-4 transition-colors duration-200 hover:text-slate-700">
                          {caseStudy.title}
                        </h2>

                        <p className="max-w-2xl text-[15px] sm:text-base leading-relaxed text-slate-800">
                          {caseStudy.summary}
                        </p>

                        {/* Impact Metric Block */}
                        <div className="pt-2 w-full max-w-xl">
                          <div className="flex items-start gap-3 rounded-xl bg-emerald-50 border border-emerald-100 p-3.5 transition-colors group-hover:bg-emerald-100/50">
                            <svg className="h-5 w-5 shrink-0 text-emerald-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                              <span className="block text-[11px] font-bold uppercase tracking-wider text-emerald-700 mb-0.5">
                                Key Outcome
                              </span>
                              <span className="block text-sm font-semibold text-emerald-900">
                                {caseStudy.metric}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right Column: Thumbnail */}
                      <div className="w-full md:w-72 h-48 shrink-0 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 transition-transform duration-500 group-hover:scale-[1.02]">
                        <MediaPlaceholder
                          className="h-full w-full object-cover"
                          label=""
                          slug={caseStudy.slug}
                        />
                      </div>
                    </Link>
                  </Reveal>
                ))
              ) : (
                <div className="py-20 text-center text-slate-500">
                  <p className="text-lg font-semibold">No case studies found matching your criteria.</p>
                  <button
                    className="mt-6 border border-slate-300 hover:border-indigo-500 text-slate-700 hover:text-indigo-600 px-6 py-2.5 text-sm font-bold uppercase tracking-wider transition-colors"
                    onClick={() => {
                      setSearchQuery("")
                      setSelectedCategories([])
                    }}
                    type="button"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>
          </div>
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

