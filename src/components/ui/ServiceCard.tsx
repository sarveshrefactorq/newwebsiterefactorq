import { Link } from "react-router-dom"
import type { Service } from "../../types"

/* ─────────────────────────────────────────────────────────────
   Bespoke, High-Precision Vector Icons for Each Service Line
   ───────────────────────────────────────────────────────────── */

function ServiceIcon({ slug }: { slug: string }) {
  const iconClass =
    "h-6 w-6 transition-transform duration-300 group-hover:scale-110 drop-shadow-sm"

  switch (slug) {
    case "ai-ml-engineering":
      // Neural Spark & Precision Intelligence Core
      return (
        <svg
          className={`${iconClass} stroke-indigo-600`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"
          />
        </svg>
      )

    case "agentic-ai-automation":
      // Microchip Core & Autonomous Agent Mesh
      return (
        <svg
          className={`${iconClass} stroke-blue-600`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 3v1.5m6 0V3m-3 0v1.5m-3 18V21m6 0v-1.5m-3 0V21m-6-15h16.5M3 12h18M3 18h18M6.75 6.75h10.5a.75.75 0 01.75.75v9a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75v-9a.75.75 0 01.75-.75z"
          />
          <circle cx="12" cy="12" r="2" fill="currentColor" fillOpacity={0.2} />
        </svg>
      )

    case "cloud-devops-sre-engineering":
      // Distributed Cloud Topology & Resilient Mesh
      return (
        <svg
          className={`${iconClass} stroke-sky-600`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 00.435-7.475 4.5 4.5 0 00-7.801-4.225A4.5 4.5 0 002.25 15z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.25v6m-2.25-2.25L12 17.25l2.25-2.25" />
        </svg>
      )

    case "performance-engineering":
      // Precision Telemetry & Velocity Speedometer Gauge
      return (
        <svg
          className={`${iconClass} stroke-amber-600`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
          <path strokeLinecap="round" d="M12 3v1.5m8.485 2.515l-1.06 1.06M21 12h-1.5M4.575 7.075l1.06 1.06M3 12h1.5" />
        </svg>
      )

    case "quality-engineering-test-automation":
      // Verified Zero-Defect Quality Shield & Test Matrix
      return (
        <svg
          className={`${iconClass} stroke-emerald-600`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
          <circle cx="12" cy="12" r="4.5" strokeDasharray="2 2" />
        </svg>
      )

    case "cybersecurity-cloud-resilience":
    case "security-engineering":
      // Hardened Security Vault & Defense Matrix
      return (
        <svg
          className={`${iconClass} stroke-purple-600`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.959 11.959 0 0112 2.714z"
          />
        </svg>
      )

    case "cloud-finops":
      // Cloud FinOps Unit-Cost Analytics & ROI Curve
      return (
        <svg
          className={`${iconClass} stroke-teal-600`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      )

    default:
      return (
        <svg
          className={`${iconClass} stroke-indigo-600`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
          />
        </svg>
      )
  }
}

function getIconBackgroundTheme(slug: string) {
  switch (slug) {
    case "ai-ml-engineering":
      return "bg-gradient-to-br from-indigo-500/15 via-blue-500/10 to-indigo-500/20 border-indigo-200/80 text-indigo-600 shadow-[0_4px_16px_rgba(99,102,241,0.12)]"
    case "agentic-ai-automation":
      return "bg-gradient-to-br from-blue-500/15 via-cyan-500/10 to-blue-500/20 border-blue-200/80 text-blue-600 shadow-[0_4px_16px_rgba(37,99,235,0.12)]"
    case "cloud-devops-sre-engineering":
      return "bg-gradient-to-br from-sky-500/15 via-indigo-500/10 to-sky-500/20 border-sky-200/80 text-sky-600 shadow-[0_4px_16px_rgba(2,132,199,0.12)]"
    case "performance-engineering":
      return "bg-gradient-to-br from-amber-500/15 via-orange-500/10 to-amber-500/20 border-amber-200/80 text-amber-600 shadow-[0_4px_16px_rgba(217,119,6,0.12)]"
    case "quality-engineering-test-automation":
      return "bg-gradient-to-br from-emerald-500/15 via-teal-500/10 to-emerald-500/20 border-emerald-200/80 text-emerald-600 shadow-[0_4px_16px_rgba(16,185,129,0.12)]"
    case "cybersecurity-cloud-resilience":
    case "security-engineering":
      return "bg-gradient-to-br from-purple-500/15 via-violet-500/10 to-purple-500/20 border-purple-200/80 text-purple-600 shadow-[0_4px_16px_rgba(147,51,234,0.12)]"
    case "cloud-finops":
      return "bg-gradient-to-br from-teal-500/15 via-emerald-500/10 to-teal-500/20 border-teal-200/80 text-teal-600 shadow-[0_4px_16px_rgba(13,148,136,0.12)]"
    default:
      return "bg-gradient-to-br from-indigo-500/15 via-blue-500/10 to-indigo-500/20 border-indigo-200/80 text-indigo-600 shadow-[0_4px_16px_rgba(99,102,241,0.12)]"
  }
}

export function ServiceCard({
  service,
  index,
  dark,
}: {
  service: Service
  index?: number
  dark?: boolean
}) {
  const iconBg = getIconBackgroundTheme(service.slug)

  return (
    <Link
      to={`/services/${service.slug}`}
      className={`group relative flex flex-col justify-between rounded-[28px] sm:rounded-[32px] p-7 sm:p-8 border shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_48px_rgba(99,102,241,0.14)] hover:border-indigo-400/80 h-full overflow-hidden ${
        dark
          ? "bg-[#0E1624] border-white/10 text-white"
          : "bg-white border-slate-200/90 text-slate-900"
      }`}
    >
      {/* Top Ambient Glow Gradient on Hover */}
      <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

      <div>
        {/* Top Row: Left Bespoke Icon Container & Right Action Arrow / Index */}
        <div className="flex items-center justify-between gap-3 mb-6">
          <div
            className={`flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl border transition-all duration-300 group-hover:scale-105 ${iconBg}`}
          >
            <ServiceIcon slug={service.slug} />
          </div>

          <div className="flex items-center gap-2">
            {index !== undefined && (
              <span className="font-mono text-xs font-bold text-slate-300 group-hover:text-indigo-500 transition-colors">
                0{index + 1}
              </span>
            )}
            <div className="flex h-8.5 w-8.5 items-center justify-center rounded-full bg-slate-50 border border-slate-200/80 text-slate-400 group-hover:bg-indigo-600 group-hover:border-indigo-600 group-hover:text-white transition-all duration-300 shadow-2xs">
              <svg
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
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
        </div>

        {/* Title */}
        <h3
          className={`text-xl font-extrabold tracking-tight leading-snug mb-2.5 transition-colors duration-300 ${
            dark ? "text-white group-hover:text-indigo-400" : "text-slate-900 group-hover:text-indigo-600"
          }`}
        >
          {service.title}
        </h3>

        {/* Summary Description */}
        <p
          className={`text-sm leading-relaxed font-normal mb-6 line-clamp-2 ${
            dark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {service.summary}
        </p>
      </div>

      {/* Action Footer CTA Bar */}
      <div
        className={`w-full py-2.5 px-4 rounded-xl sm:rounded-2xl font-bold text-xs uppercase tracking-wider text-center transition-all duration-300 flex items-center justify-between ${
          dark
            ? "bg-white/5 text-slate-300 group-hover:bg-indigo-600 group-hover:text-white"
            : "bg-slate-50 text-slate-700 group-hover:bg-indigo-600 group-hover:text-white border border-slate-200/60 group-hover:border-indigo-600"
        }`}
      >
        <span>Explore practice</span>
        <svg
          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
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
