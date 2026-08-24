import { Link } from "react-router-dom"
import type { Service } from "../../types"

// High-precision vector SVG icons for service lines
function ServiceIcon({ slug }: { slug: string }) {
  const iconClass = "h-7 w-7 stroke-current transition-transform duration-300 group-hover:scale-110 drop-shadow-sm"
  switch (slug) {
    case "ai-ml-engineering":
      // AI Sparkles icon
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
        </svg>
      )
    case "agentic-ai-automation":
      // Agentic Bot / Microchip Automation icon
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5m6 0V3m-3 0v1.5m-3 18V21m6 0v-1.5m-3 0V21m-6-15h16.5M3 12h18M3 18h18M6.75 6.75h10.5a.75.75 0 01.75.75v9a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75v-9a.75.75 0 01.75-.75z" />
        </svg>
      )
    case "cloud-devops-sre-engineering":
      // Cloud Infrastructure icon
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 00.435-7.475 4.5 4.5 0 00-7.801-4.225A4.5 4.5 0 002.25 15z" />
        </svg>
      )
    case "performance-engineering":
      // Performance Speedometer Gauge icon
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    case "quality-engineering-test-automation":
      // Verified Quality Check icon
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    case "cybersecurity-cloud-resilience":
    case "security-engineering":
      // Security Shield Lock icon
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.959 11.959 0 0112 2.714z" />
        </svg>
      )
    case "cloud-finops":
      // FinOps Dollar Currency Analytics icon
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    default:
      // Custom Code Brackets icon
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      )
  }
}

function getIconBoxTheme(slug: string) {
  // Use a premium soft-glass gradient theme for all icons, making them look like polished app icons.
  const baseTheme = "bg-gradient-to-br from-[#eff6ff] to-[#e0e7ff] text-[#4f46e5] border border-white/60 shadow-[inset_0_1px_4px_rgba(255,255,255,0.7),0_4px_12px_rgba(99,102,241,0.12)] ring-4 ring-indigo-50/40"
  
  switch (slug) {
    case "ai-ml-engineering":
    case "agentic-ai-automation":
    case "cloud-devops-sre-engineering":
    case "performance-engineering":
    case "quality-engineering-test-automation":
    case "cybersecurity-cloud-resilience":
    case "security-engineering":
    case "cloud-finops":
      return baseTheme
    default:
      return "bg-gradient-to-br from-slate-50 to-slate-100 text-slate-600 border border-white/60 shadow-[inset_0_1px_4px_rgba(255,255,255,0.8),0_4px_12px_rgba(15,23,42,0.06)] ring-4 ring-slate-50/60"
  }
}

export function ServiceCard({ service, dark }: { service: Service; dark?: boolean }) {
  const iconTheme = getIconBoxTheme(service.slug)
  const chips = (service.tools && service.tools.length >= 3 ? service.tools : service.includes).slice(0, 4)

  return (
    <Link
      to={`/services/${service.slug}`}
      className={`group relative flex flex-col justify-between rounded-[24px] p-6 sm:p-7 border shadow-xs transition-all duration-300 hover:border-[#5B5FEF] hover:shadow-[0_0_25px_rgba(91,95,239,0.35)] hover:-translate-y-1.5 h-full ${
        dark
          ? "bg-[#0e1622] border-white/10 text-white"
          : "bg-white border-slate-200/80 text-slate-900"
      }`}
    >
      <div className="flex flex-col items-center text-center">
        {/* Top Header: Centered Pastel Icon Container */}
        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl mb-5 transition-transform duration-300 group-hover:scale-110 ${iconTheme}`}>
          <ServiceIcon slug={service.slug} />
        </div>

        {/* Title */}
        <h3 className={`text-base sm:text-lg font-bold leading-snug tracking-tight mb-3 transition-colors duration-200 ${
          dark ? "text-white group-hover:text-[#5B5FEF]" : "text-slate-900 group-hover:text-[#5B5FEF]"
        }`}>
          {service.title}
        </h3>

        {/* Summary Copy */}
        <p className={`text-xs sm:text-sm leading-relaxed font-normal mb-6 ${
          dark ? "text-slate-300" : "text-slate-600"
        }`}>
          {service.summary}
        </p>

        {/* 3-4 Keyword Chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {chips.map((chip) => (
            <span
              key={chip}
              className={`rounded-full px-3 py-1 text-[11px] font-semibold border transition-colors ${
                dark
                  ? "bg-white/5 text-slate-300 border-white/10 group-hover:border-[#5B5FEF]/30"
                  : "bg-slate-100 text-slate-700 border-slate-200/80 group-hover:border-[#5B5FEF]/30"
              }`}
            >
              {chip}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer Arrow Link */}
      <div className={`w-full py-2.5 px-4 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm text-center transition-all duration-300 flex items-center justify-center gap-2 ${
        dark
          ? "bg-white/5 text-slate-300 group-hover:bg-[#5B5FEF] group-hover:text-white"
          : "bg-slate-100/90 text-slate-700 group-hover:bg-[#5B5FEF] group-hover:text-white"
      }`}>
        <span>Explore service</span>
        <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </div>
    </Link>
  )
}





