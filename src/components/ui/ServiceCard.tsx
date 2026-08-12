import { Link } from "react-router-dom"
import type { Service } from "../../types"

// High-precision vector SVG icons for service lines
function ServiceIcon({ slug }: { slug: string }) {
  switch (slug) {
    case "ai-ml-engineering":
      return (
        <svg className="h-5.5 w-5.5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 2.625a3.375 3.375 0 00-3.75-3.375m-3.75 3.375a3.375 3.375 0 013.75-3.375m0 0V4.5m0 0a3.375 3.375 0 00-3.375 3.375m3.375-3.375a3.375 3.375 0 013.375 3.375M5.25 12A3.75 3.75 0 019 8.25m-3.75 3.75A3.75 3.75 0 009 15.75m9.75-3.75A3.75 3.75 0 0015 8.25m3.75 3.75A3.75 3.75 0 0115 15.75" />
        </svg>
      )
    case "agentic-ai-automation":
      return (
        <svg className="h-5.5 w-5.5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5m6 0V3m-3 0v1.5m-3 18V21m6 0v-1.5m-3 0V21m-6-15h16.5M3 12h18M3 18h18M6.75 6.75h10.5a.75.75 0 01.75.75v9a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75v-9a.75.75 0 01.75-.75z" />
        </svg>
      )
    case "cloud-devops-sre-engineering":
      return (
        <svg className="h-5.5 w-5.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 00.435-7.475 4.5 4.5 0 00-7.801-4.225A4.5 4.5 0 002.25 15z" />
        </svg>
      )
    case "quality-engineering-test-automation":
      return (
        <svg className="h-5.5 w-5.5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    case "cybersecurity-cloud-resilience":
    case "security-engineering":
      return (
        <svg className="h-5.5 w-5.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.959 11.959 0 0112 2.714z" />
        </svg>
      )
    case "custom-software-engineering":
      return (
        <svg className="h-5.5 w-5.5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      )
    default:
      return (
        <svg className="h-5.5 w-5.5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      )
  }
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 p-7 backdrop-blur-md shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-500/40 hover:shadow-[0_22px_50px_rgba(249,115,22,0.14)]"
      to={`/services/${service.slug}`}
    >
      {/* Top Edge Ambient Highlight Line */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div>
        {/* Card Header: Dark Obsidian Icon Tile + Monospace Badge */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-[#0c1827] via-[#11233b] to-[#0c1827] shadow-md shadow-black/20 transition-all duration-300 group-hover:scale-110 group-hover:border-orange-500/40 group-hover:shadow-lg group-hover:shadow-orange-500/20">
            <ServiceIcon slug={service.slug} />
          </div>
          <span className="rounded-full border border-orange-500/25 bg-orange-500/[0.08] px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-orange-600 shadow-2xs">
            {service.shortTitle}
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-5 text-xl font-bold tracking-tight text-[var(--ink)] transition-colors duration-200 group-hover:text-orange-600">
          {service.title}
        </h3>

        {/* Summary */}
        <p className="mt-3 text-sm leading-relaxed text-slate-600 font-normal">
          {service.summary}
        </p>
      </div>

      {/* Action Footer */}
      <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-bold uppercase tracking-wider text-orange-600">
        <span>Read service page</span>
        <svg
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </div>
    </Link>
  )
}
