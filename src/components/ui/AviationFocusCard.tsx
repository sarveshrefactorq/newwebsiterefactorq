import { Reveal } from "./Reveal"

interface FocusArea {
  title: string
  text: string
}

function FocusIcon({ index }: { index: number }) {
  switch (index) {
    case 0:
      // Agentic operations for aviation (Flight Radar / AI Spark Icon)
      return (
        <svg className="h-5.5 w-5.5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
      )
    case 1:
      // Performance and reliability under peak load (Turbine Gauge / Speed Pulse Icon)
      return (
        <svg className="h-5.5 w-5.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.019-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.5 4.5 0 003.882 3.882m-3.882-3.882l-2.435-2.435m3.882 3.882a15.09 15.09 0 002.448 2.448m-2.448-2.448l2.435 2.435" />
        </svg>
      )
    case 2:
    default:
      // Cloud security and compliance readiness (Shield Lock Icon)
      return (
        <svg className="h-5.5 w-5.5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
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
  const padIndex = String(index + 1).padStart(2, "0")

  return (
    <Reveal>
      <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 p-7 backdrop-blur-md shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-500/40 hover:shadow-[0_22px_50px_rgba(249,115,22,0.14)]">
        {/* Top Edge Ambient Highlight Line */}
        <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div>
          {/* Card Header: Dark Obsidian Icon Tile + Index Badge */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-[#0c1827] via-[#11233b] to-[#0c1827] shadow-md shadow-black/20 transition-all duration-300 group-hover:scale-110 group-hover:border-orange-500/40 group-hover:shadow-lg group-hover:shadow-orange-500/20">
              <FocusIcon index={index} />
            </div>
            <span className="inline-block rounded-md border border-orange-500/25 bg-orange-500/[0.08] px-2.5 py-0.5 font-mono text-xs font-bold text-orange-600 shadow-2xs">
              {padIndex}
            </span>
          </div>

          {/* Title */}
          <h3 className="mt-5 text-xl font-bold tracking-tight text-[var(--ink)] transition-colors duration-200 group-hover:text-orange-600">
            {area.title}
          </h3>

          {/* Body Copy */}
          <p className="mt-3 text-sm leading-relaxed text-slate-600 font-normal">
            {area.text}
          </p>
        </div>
      </article>
    </Reveal>
  )
}
