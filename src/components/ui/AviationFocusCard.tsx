import { Link } from "react-router-dom"
import { Reveal } from "./Reveal"

interface FocusArea {
  title: string
  text: string
  tags?: string[]
}

function getHeroColorTheme(index: number) {
  switch (index % 4) {
    case 0:
      return "bg-[#e0e7ff] border border-indigo-200/60" // Soft Sky Blue
    case 1:
      return "bg-[#e0e7ff] border border-indigo-200/60" // Soft Warm Peach
    case 2:
      return "bg-[#e0e7ff] border border-indigo-200/60" // Soft Lavender
    case 3:
    default:
      return "bg-[#e0e7ff] border border-indigo-200/60" // Soft Mint Green
  }
}

function getDefaultTags(index: number): string[] {
  switch (index % 3) {
    case 0:
      return ["AI Workflows", "Maintenance", "Scheduling", "Human Review"]
    case 1:
      return ["Peak Load", "Zero Downtime", "Disruption Guard", "Low Latency"]
    case 2:
    default:
      return ["Cloud Security", "Posture Review", "Compliance", "Regulated Ops"]
  }
}

function AviationIcon({ index }: { index: number }) {
  const iconClass = "h-5 w-5 stroke-current transition-transform duration-300 group-hover:scale-110"
  switch (index % 3) {
    case 0:
      // Flight / Airplane icon
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
      )
    case 1:
      // Operations / Cpu Engine icon
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5m6 0V3m-3 0v1.5m-3 18V21m6 0v-1.5m-3 0V21m-6-15h16.5M3 12h18M3 18h18M6.75 6.75h10.5a.75.75 0 01.75.75v9a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75v-9a.75.75 0 01.75-.75z" />
        </svg>
      )
    case 2:
    default:
      // Security Shield icon
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.959 11.959 0 0112 2.714z" />
        </svg>
      )
  }
}

export function AviationFocusCard({
  area,
  index,
}: {
  area: FocusArea
  index: number
}) {
  const tags = (area.tags || getDefaultTags(index)).slice(0, 4)

  return (
    <Reveal>
      <Link
        to="/aviation"
        className="group relative flex flex-col justify-between rounded-[28px] bg-white p-6 sm:p-7 border border-slate-200/80 shadow-xs transition-all duration-300 hover:border-[#5B5FEF] hover:shadow-[0_0_25px_rgba(91,95,239,0.35)] hover:-translate-y-1.5 h-full overflow-hidden"
      >
        <div>
          {/* Top Header: Left Aviation Icon Container & Right Action Hover Arrow */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-200/60 transition-transform duration-300 group-hover:scale-105">
              <AviationIcon index={index} />
            </div>

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 group-hover:bg-[#5B5FEF] group-hover:text-white transition-all duration-300">
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold tracking-tight text-slate-900 leading-snug mb-2.5 transition-colors duration-200 group-hover:text-[#5B5FEF]">
            {area.title}
          </h3>

          {/* Body Text */}
          <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-normal mb-5">
            {area.text}
          </p>

          {/* 3-4 Keyword Chips */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full px-2.5 py-1 text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200/80 group-hover:border-[#5B5FEF]/30 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom White Action Bar: Explore + Action Arrow Button */}
        <div className="flex items-center justify-between px-4 py-2.5 rounded-xl sm:rounded-2xl bg-slate-100/90 text-slate-700 font-medium text-xs sm:text-sm group-hover:bg-[#5B5FEF] group-hover:text-white transition-all duration-300">
          <span className="font-bold">Explore practice</span>
          <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </Link>
    </Reveal>
  )
}

