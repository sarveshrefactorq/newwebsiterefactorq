import type { ReactNode } from "react"

export function PageIntro({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string
  title: ReactNode
  body: ReactNode
}) {
  return (
    <section className="page-hero relative overflow-hidden bg-gradient-to-b from-[#0b1320] via-[#0f1d30] to-[#0c1827] py-14 lg:py-20 border-b border-white/[0.08]">
      {/* Ambient Background Glow Mesh */}
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-orange-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-32 h-80 w-80 rounded-full bg-sky-500/10 blur-[120px] pointer-events-none" />

      <div className="page-shell relative z-10">
        <div className="page-intro-inner space-y-4">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="hero-title max-w-4xl text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="hero-copy max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
            {body}
          </p>
        </div>
      </div>
    </section>
  )
}