import { useEffect, useState } from "react"

import { heroSlides } from "../../data/home"
import { useReducedMotionPreference } from "../../lib/useReducedMotionPreference"

/* ─────────────────────────────────────────────────────────
   Hero visual — a glowing indigo "core" orbited by rings and
   a sparse constellation. Pure SVG art (no fake screenshot),
   tuned to read well on the light hero surface.
   ───────────────────────────────────────────────────────── */
function HeroVisual() {
  // Sparse constellation nodes for the upper-left quadrant texture
  const nodes = [
    { cx: 96, cy: 70, r: 3.5, accent: false, delay: 0.2 },
    { cx: 168, cy: 118, r: 5, accent: true, delay: 0.9 },
    { cx: 70, cy: 168, r: 3, accent: false, delay: 1.4 },
    { cx: 402, cy: 128, r: 4.5, accent: true, delay: 0.5 },
    { cx: 372, cy: 66, r: 3, accent: false, delay: 1.7 },
    { cx: 410, cy: 340, r: 4, accent: false, delay: 1.1 },
    { cx: 120, cy: 372, r: 5, accent: true, delay: 0.35 },
    { cx: 300, cy: 406, r: 3, accent: false, delay: 1.9 },
  ]

  const links = [
    [0, 1], [1, 2], [3, 4], [1, 6], [3, 5], [6, 7],
  ]

  return (
    <div className="relative w-full flex items-center justify-center">
      <svg
        viewBox="0 0 480 470"
        fill="none"
        className="w-full h-auto max-w-[440px]"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="hero-halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.22" />
            <stop offset="55%" stopColor="#818cf8" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="hero-sphere" cx="34%" cy="28%" r="75%">
            <stop offset="0%" stopColor="#eef2ff" />
            <stop offset="32%" stopColor="#818cf8" />
            <stop offset="72%" stopColor="#4f46e5" />
            <stop offset="100%" stopColor="#4338ca" />
          </radialGradient>
          <radialGradient id="hero-node-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </radialGradient>
          <filter id="hero-soft" x="-70%" y="-70%" width="240%" height="240%">
            <feGaussianBlur stdDeviation="16" />
          </filter>
        </defs>

        {/* Ambient halo */}
        <circle cx="240" cy="235" r="200" fill="url(#hero-halo)" />

        {/* Constellation links + nodes */}
        {links.map(([a, b], i) => (
          <line
            key={`l-${i}`}
            x1={nodes[a].cx}
            y1={nodes[a].cy}
            x2={nodes[b].cx}
            y2={nodes[b].cy}
            stroke="#818cf8"
            strokeWidth="1"
            style={{
              opacity: 0.18,
              animation: `line-shimmer ${5 + (i % 3)}s ease-in-out ${i * 0.4}s infinite`,
            }}
          />
        ))}
        {nodes.map((n, i) => (
          <g key={`n-${i}`}>
            <circle cx={n.cx} cy={n.cy} r={n.r * 4} fill="url(#hero-node-glow)" />
            <circle
              cx={n.cx}
              cy={n.cy}
              r={n.r}
              fill={n.accent ? "#4f46e5" : "#94a3b8"}
              style={{
                animation: `${n.accent ? "constellation-pulse" : "constellation-pulse-slow"} ${3 + (i % 2)}s ease-in-out ${n.delay}s infinite`,
              }}
            />
          </g>
        ))}

        {/* Rotating orbital rings */}
        <g className="hero-orbit-1">
          <circle
            cx="240"
            cy="235"
            r="172"
            fill="none"
            stroke="#c7d2fe"
            strokeWidth="1.25"
            strokeDasharray="2 9"
            opacity="0.85"
          />
          <circle cx="240" cy="63" r="4.5" fill="#4f46e5" />
          <circle cx="412" cy="235" r="3" fill="#818cf8" />
        </g>
        <g className="hero-orbit-2">
          <circle
            cx="240"
            cy="235"
            r="132"
            fill="none"
            stroke="#a5b4fc"
            strokeWidth="1.25"
            strokeDasharray="1 12"
            opacity="0.7"
          />
          <circle cx="108" cy="235" r="3.5" fill="#6366f1" />
          <circle cx="335" cy="150" r="3" fill="#a5b4fc" />
        </g>

        {/* Soft glow behind the core */}
        <circle cx="240" cy="235" r="66" fill="#6366f1" opacity="0.45" filter="url(#hero-soft)" />

        {/* Central core sphere */}
        <circle cx="240" cy="235" r="62" fill="url(#hero-sphere)" />
        {/* Gloss highlight */}
        <ellipse cx="218" cy="210" rx="26" ry="16" fill="#ffffff" fillOpacity="0.35" transform="rotate(-28 218 210)" />
        {/* Faint inner ring for depth */}
        <circle cx="240" cy="235" r="80" fill="none" stroke="#818cf8" strokeWidth="1" opacity="0.35" />
      </svg>
    </div>
  )
}

export function HomeHero() {
  const reducedMotion = useReducedMotionPreference()
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [transitioning, setTransitioning] = useState(false)

  useEffect(() => {
    if (paused || reducedMotion) {
      return
    }

    const interval = window.setInterval(() => {
      setTransitioning(true)
      setTimeout(() => {
        setActiveIndex((current) => (current + 1) % heroSlides.length)
        setTransitioning(false)
      }, 300)
    }, 6000)

    return () => window.clearInterval(interval)
  }, [paused, reducedMotion])

  const activeSlide = heroSlides[activeIndex]

  const handleSlideChange = (index: number) => {
    if (index === activeIndex) return
    setTransitioning(true)
    setTimeout(() => {
      setActiveIndex(index)
      setTransitioning(false)
    }, 200)
  }

  return (
    <section
      aria-label="Homepage hero"
      className="relative overflow-hidden border-b border-slate-200/60"
      style={{ background: "#FAFBFD" }}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") {
          handleSlideChange((activeIndex + 1) % heroSlides.length)
        }
        if (event.key === "ArrowLeft") {
          handleSlideChange(
            (activeIndex - 1 + heroSlides.length) % heroSlides.length,
          )
        }
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      tabIndex={0}
    >
      {/* ── Faint blueprint grid (adds depth, concentrated top-right) ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(125% 105% at 100% 0%, #000 32%, transparent 76%)",
          WebkitMaskImage:
            "radial-gradient(125% 105% at 100% 0%, #000 32%, transparent 76%)",
        }}
      />

      {/* ── Ambient indigo glows ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="hero-mesh-blob-1 absolute rounded-full blur-[120px]"
          style={{
            top: "-12%",
            right: "6%",
            width: "520px",
            height: "520px",
            background: "radial-gradient(circle, rgba(79,70,229,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="hero-mesh-blob-2 absolute rounded-full blur-[110px]"
          style={{
            bottom: "0%",
            left: "2%",
            width: "420px",
            height: "420px",
            background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)",
          }}
        />
        <div
          className="hero-mesh-blob-3 absolute rounded-full blur-[140px]"
          style={{
            top: "34%",
            left: "42%",
            width: "440px",
            height: "440px",
            background: "radial-gradient(circle, rgba(129,140,248,0.05) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* ── Main content ── */}
      <div className="page-shell relative z-10 pt-12 pb-14 lg:pt-16 lg:pb-20">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-10 xl:gap-16">

          {/* ─── LEFT: Headline + CTAs ─── */}
          <div className="flex-1 lg:max-w-[54%]">

            {/* Headline */}
            <h1
              className={`text-[2.5rem] sm:text-[3rem] lg:text-[3.4rem] xl:text-[3.75rem] font-extrabold tracking-[-0.03em] text-[#0F172A] leading-[1.06] transition-all duration-500 ${
                transitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              {activeSlide.title}
            </h1>

            {/* Body */}
            <p
              className={`mt-5 text-base sm:text-lg leading-[1.7] text-slate-500 max-w-[540px] transition-all duration-500 delay-75 ${
                transitioning ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
              }`}
            >
              {activeSlide.text}
            </p>

            {/* CTA Buttons */}
            <div
              className={`mt-8 flex flex-wrap items-center gap-3 transition-all duration-500 delay-100 ${
                transitioning ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
              }`}
            >
              <a
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#4f46e5] hover:bg-[#4338ca] px-7 py-3.5 text-[13px] font-bold tracking-wide text-white shadow-lg shadow-indigo-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-600/30 active:scale-[0.97]"
                href={activeSlide.primary.href}
              >
                {activeSlide.primary.label}
                <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                className="group inline-flex items-center gap-2.5 rounded-full border border-slate-300 bg-white/80 backdrop-blur-sm hover:bg-white hover:border-slate-400 text-slate-700 px-7 py-3.5 text-[13px] font-bold tracking-wide shadow-sm transition-all duration-300"
                href={activeSlide.secondary.href}
              >
                {activeSlide.secondary.label}
                <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>

            {/* Slide selector */}
            <div className="mt-9 flex items-center gap-2">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.id}
                  className={`relative rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-10 h-1.5 bg-indigo-500"
                      : "w-5 h-1.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                  onClick={() => handleSlideChange(index)}
                  type="button"
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* ─── RIGHT: Hero visual ─── */}
          <div
            className={`hidden lg:flex flex-1 items-center justify-center transition-all duration-700 ${
              transitioning ? "opacity-60 scale-[0.98]" : "opacity-100 scale-100"
            }`}
          >
            <HeroVisual />
          </div>
        </div>

        {/* ─── BOTTOM: Stat cards ─── */}
        <div className="mt-12 lg:mt-16 grid gap-4 sm:grid-cols-3">
          {[
            {
              value: "2021",
              label: "Founded",
              detail: "Execution & reality-driven from day one",
            },
            {
              value: "25+",
              label: "Practitioners",
              detail: "Cross-functional engineering team",
            },
            {
              value: "60+",
              label: "Years combined",
              detail: "Leadership & architecture experience",
            },
          ].map((stat) => (
            <div
              key={stat.value}
              className="group flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white/70 backdrop-blur-sm px-6 py-5 transition-all duration-300 hover:border-indigo-400/50 hover:shadow-md hover:shadow-indigo-500/5"
            >
              <span className="text-3xl font-extrabold tracking-tight text-[#0F172A] font-mono leading-none group-hover:text-indigo-600 transition-colors duration-200">
                {stat.value}
              </span>
              <div className="pt-0.5">
                <p className="text-xs font-bold text-slate-900 tracking-wide uppercase">
                  {stat.label}
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5 leading-snug font-medium">
                  {stat.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
