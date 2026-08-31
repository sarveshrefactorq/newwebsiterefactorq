import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

import { heroSlides } from "../../data/home"

/* ─────────────────────────────────────────────────────────
   Full-bleed, dark "statement" banner — big centered
   typography, ambient violet glows, and a pill-shaped
   search-style prompt bar, in the vein of large consulting
   sites like Globant. Stats live in a light band right
   beneath it so the page still opens with proof points.
   ───────────────────────────────────────────────────────── */

/* Count-up number that animates 0 → target when scrolled into view. */
function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [val, setVal] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || started.current) return
          started.current = true
          const DUR = 1400
          const ease = (x: number) => 1 - Math.pow(1 - x, 3)
          let start: number | null = null
          const step = (now: number) => {
            if (start === null) start = now
            const p = Math.min((now - start) / DUR, 1)
            setVal(Math.round(ease(p) * target))
            if (p < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
          io.disconnect()
        })
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  )
}

export function HomeHero() {
  const navigate = useNavigate()
  const [query, setQuery] = useState("")

  const activeSlide = heroSlides[0]

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const trimmed = query.trim()
    navigate(trimmed ? `/contact?message=${encodeURIComponent(trimmed)}` : "/contact")
  }

  return (
    <>
      {/* ── Dark full-bleed banner ── */}
      <section
        aria-label="Homepage hero"
        className="relative isolate flex min-h-[86vh] flex-col justify-center overflow-hidden"
        style={{ background: "#05060D" }}
      >
        {/* Faint grid, brightest top-center, fading outward */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(90% 70% at 50% 0%, #000 30%, transparent 78%)",
            WebkitMaskImage: "radial-gradient(90% 70% at 50% 0%, #000 30%, transparent 78%)",
          }}
        />

        {/* Ambient violet glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div
            className="hero-mesh-blob-1 absolute rounded-full blur-[130px]"
            style={{
              top: "-18%",
              left: "8%",
              width: "560px",
              height: "560px",
              background: "radial-gradient(circle, rgba(99,102,241,0.32) 0%, transparent 70%)",
            }}
          />
          <div
            className="hero-mesh-blob-2 absolute rounded-full blur-[120px]"
            style={{
              top: "-10%",
              right: "4%",
              width: "460px",
              height: "460px",
              background: "radial-gradient(circle, rgba(129,140,248,0.24) 0%, transparent 70%)",
            }}
          />
          <div
            className="hero-mesh-blob-3 absolute rounded-full blur-[150px]"
            style={{
              bottom: "-22%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "760px",
              height: "420px",
              background: "radial-gradient(circle, rgba(79,70,229,0.18) 0%, transparent 72%)",
            }}
          />
        </div>

        {/* ── Main content ── */}
        <div className="page-shell relative z-10 flex flex-col items-center py-20 text-center sm:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-indigo-300 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
            {activeSlide.eyebrow}
          </span>

          <h1 className="mt-7 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-[4.25rem]">
            {activeSlide.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-[1.7] text-slate-400 sm:text-lg">
            {activeSlide.text}
          </p>

          {/* CTA buttons */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#4f46e5] hover:bg-[#4338ca] px-7 py-3.5 text-[13px] font-bold tracking-wide text-white shadow-lg shadow-indigo-950/40 transition-all duration-300 hover:-translate-y-0.5"
              href={activeSlide.primary.href}
            >
              <span>{activeSlide.primary.label}</span>
              <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              className="group inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.04] hover:bg-white/10 hover:border-white/30 px-7 py-3.5 text-[13px] font-bold tracking-wide text-white backdrop-blur-sm transition-all duration-300"
              href={activeSlide.secondary.href}
            >
              <span>{activeSlide.secondary.label}</span>
              <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          {/* Search-style prompt bar */}
          <form
            onSubmit={handleSubmit}
            className="mt-10 flex w-full max-w-xl items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] p-1.5 pl-6 shadow-2xl shadow-black/40 backdrop-blur-md transition-colors duration-300 focus-within:border-indigo-400/50 focus-within:bg-white/[0.08]"
          >
            <svg className="h-4 w-4 shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="11" cy="11" r="7" strokeLinecap="round" strokeLinejoin="round" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Tell us what you're trying to solve…"
              className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Start the conversation"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#4f46e5] text-white transition-all duration-300 hover:bg-[#4338ca] hover:scale-105"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </form>
        </div>

        {/* Scroll cue */}
        <div
          className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-slate-500"
          aria-hidden="true"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Scroll</span>
          <svg className="h-4 w-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── Stat band ── */}
      <section className="relative border-b border-slate-200/60 bg-white" aria-label="Company highlights">
        <div className="page-shell grid gap-4 py-10 sm:grid-cols-3 lg:py-12">
          {[
            {
              num: 2021,
              suffix: "",
              label: "Founded",
              detail: "Execution & reality-driven from day one",
            },
            {
              num: 25,
              suffix: "+",
              label: "Practitioners",
              detail: "Cross-functional engineering team",
            },
            {
              num: 60,
              suffix: "+",
              label: "Years combined",
              detail: "Leadership & architecture experience",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="group relative flex items-center gap-5 overflow-hidden rounded-2xl border border-slate-200/60 bg-white px-6 py-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_12px_32px_rgba(99,102,241,0.08)]"
            >
              <div className="absolute -left-10 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[20px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

              <div className="relative flex shrink-0 items-center justify-center">
                <span className="text-[2rem] lg:text-[2.25rem] font-extrabold tracking-tighter text-slate-800 transition-colors duration-300 group-hover:text-indigo-600 tabular-nums">
                  <CountUp target={stat.num} suffix={stat.suffix} />
                </span>
              </div>

              <div className="relative flex flex-col justify-center border-l border-slate-200/80 pl-5 transition-colors duration-300 group-hover:border-indigo-200">
                <p className="text-xs font-bold tracking-[0.1em] text-slate-900 uppercase">
                  {stat.label}
                </p>
                <p className="mt-1 text-[13px] font-medium leading-relaxed text-slate-500">
                  {stat.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
