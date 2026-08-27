import { useState, useMemo } from "react"
import { services } from "../data/services"
import { usePageMeta } from "../lib/meta"
import { PageIntro } from "../components/ui/PageIntro"
import { ServiceCard } from "../components/ui/ServiceCard"
import { Reveal } from "../components/ui/Reveal"

const CATEGORIES = [
  { id: "all", label: "All Practices" },
  { id: "ai", label: "AI & Automation" },
  { id: "cloud", label: "Cloud & DevOps / SRE" },
  { id: "performance", label: "Performance & Quality" },
  { id: "security", label: "Security & FinOps" },
]

export function ServicesOverviewPage() {
  usePageMeta(
    "Services",
    "Explore RefactorQ.AI services across AI and ML engineering, agentic AI, cloud and SRE, performance, quality, security, and cloud FinOps.",
  )

  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      // Category filter
      let matchesCategory = true
      if (activeCategory === "ai") {
        matchesCategory =
          service.slug.includes("ai") || service.slug.includes("automation")
      } else if (activeCategory === "cloud") {
        matchesCategory =
          service.slug.includes("cloud") || service.slug.includes("devops")
      } else if (activeCategory === "performance") {
        matchesCategory =
          service.slug.includes("performance") || service.slug.includes("quality")
      } else if (activeCategory === "security") {
        matchesCategory =
          service.slug.includes("security") ||
          service.slug.includes("resilience") ||
          service.slug.includes("finops")
      }

      // Search filter
      const matchesSearch =
        searchQuery.trim() === "" ||
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (service.tools &&
          service.tools.some((t) =>
            t.toLowerCase().includes(searchQuery.toLowerCase()),
          ))

      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  return (
    <>
      <PageIntro
        body="A consolidated engineering & consulting model. Seven core practice areas with dedicated expertise, production-grade scope, and measurable delivery outcomes."
        eyebrow="Consulting Services"
        title="Engineering practices built around real operational leverage."
      />

      <section className="page-shell py-14 lg:py-20">
        {/* Filter & Search Toolbar */}
        <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-slate-200/80">
          {/* Practice Category Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-indigo-600 text-white shadow-sm shadow-indigo-600/25"
                    : "bg-white border border-slate-200/90 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                }`}
                type="button"
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search tools, skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full bg-white border border-slate-200/90 pl-10 pr-4 py-2 text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-slate-400 hover:text-slate-600"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service, index) => (
            <Reveal key={service.slug}>
              <ServiceCard service={service} index={index} />
            </Reveal>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="py-20 text-center bg-white rounded-3xl border border-slate-200/80 p-10">
            <p className="text-lg font-bold text-slate-800">
              No services found matching your criteria.
            </p>
            <button
              onClick={() => {
                setActiveCategory("all")
                setSearchQuery("")
              }}
              className="mt-4 rounded-full bg-indigo-600 text-white px-5 py-2 text-xs font-bold uppercase tracking-wider"
              type="button"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>
    </>
  )
}
