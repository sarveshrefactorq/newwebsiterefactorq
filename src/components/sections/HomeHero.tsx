import { useEffect, useRef, useState } from "react"

import { heroSlides } from "../../data/home"
import { useReducedMotionPreference } from "../../lib/useReducedMotionPreference"

/* ─────────────────────────────────────────────────────────
   "The Refactor" hero visual — the animation IS the value
   proposition. Each slide morphs a system from tangled to
   clean, then stays ALIVE: it keeps re-optimizing itself,
   data keeps flowing, and a status chip makes the meaning
   legible ("Refactoring → Optimized").
     0 · scattered nodes → clean flow + streaming packets
     1 · jagged latency  → live telemetry monitor line
     2 · loose parts     → floating live modules
   `t` = optimize progress (morphs in, then pulses forever),
   `clock` = perpetual time driving ambient life.
   ───────────────────────────────────────────────────────── */

const SLATE = [148, 163, 184]
const INDIGO = [99, 102, 241]
const mix = (a: number[], b: number[], t: number) =>
  `rgb(${Math.round(a[0] + (b[0] - a[0]) * t)},${Math.round(
    a[1] + (b[1] - a[1]) * t,
  )},${Math.round(a[2] + (b[2] - a[2]) * t)})`
const L = (a: number, b: number, t: number) => a + (b - a) * t
const fract = (x: number) => x - Math.floor(x)

const easeT = (x: number) =>
  x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2

// Optimize progress: quick morph in, then a gentle "re-refactor"
// pulse forever (partial unravel → re-heal) so the system reads
// as continuously optimizing itself.
const MORPH = 1500
const R_CYCLE = 4200
const R_PULSE = 1600
const R_DIP = 0.35
const tFor = (e: number) => {
  if (e < MORPH) return easeT(e / MORPH)
  const c = (e - MORPH) % R_CYCLE
  if (c < R_PULSE) return 1 - Math.sin((c / R_PULSE) * Math.PI) * R_DIP
  return 1
}

// Concept A — flow graph
const A_ORDER = [
  [70, 130], [70, 250], [215, 90], [215, 190], [215, 300], [350, 140], [350, 250],
]
const A_CHAOS = [
  [130, 300], [300, 64], [52, 150], [386, 320], [176, 110], [330, 196], [96, 244],
]
const A_LINKS = [
  [0, 2], [0, 3], [1, 3], [1, 4], [2, 5], [3, 5], [3, 6], [4, 6],
]

// Concept B — latency waveform
const B_N = 22
const B_XS: number[] = []
const B_CHAOS: number[] = []
const B_BASE: number[] = []
for (let i = 0; i < B_N; i++) {
  B_XS.push(40 + i * (400 / (B_N - 1)))
  B_CHAOS.push(190 + (Math.sin(i * 12.9) * 43 + Math.cos(i * 7.3) * 30))
  B_BASE.push(160 - 38 * (i / (B_N - 1)))
}

// Concept C — modules
const C_COLS = [150, 240, 330]
const C_ROWS = [130, 214, 298]
const C_ORDER = [
  [C_COLS[0], C_ROWS[0]], [C_COLS[1], C_ROWS[0]], [C_COLS[2], C_ROWS[0]],
  [C_COLS[0], C_ROWS[1]], [C_COLS[1], C_ROWS[1]], [C_COLS[2], C_ROWS[1]],
]
const C_CHAOS = [
  [70, 60], [400, 40], [60, 330], [420, 330], [240, 20], [240, 360],
]
const C_ROT = [-24, 30, 18, -32, 14, -18]

function RefactorVisual({
  index,
  reducedMotion,
}: {
  index: number
  reducedMotion: boolean
}) {
  const [t, setT] = useState(1)
  const [clock, setClock] = useState(0)
  const rafRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    let start: number | null = null
    const loop = (now: number) => {
      if (start === null) start = now
      // Reduced-motion still stays gently alive (flowing packets /
      // breathing) but skips the big re-refactor unravel + entry-morph
      // replay by pinning optimize progress to 1.
      setT(reducedMotion ? 1 : tFor(now - start))
      setClock(now / 1000)
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [index, reducedMotion])

  const settled = t > 0.9

  // Live node positions for concept A (settled + gentle drift)
  const aNodes = A_ORDER.map((_, i) => ({
    x: L(A_CHAOS[i][0], A_ORDER[i][0], t) + Math.sin(clock * 0.7 + i * 1.3) * 2 * t,
    y: L(A_CHAOS[i][1], A_ORDER[i][1], t) + Math.cos(clock * 0.6 + i) * 2 * t,
    r: L(6, 8, t) + Math.sin(clock * 2.2 + i) * 0.7 * t,
  }))

  return (
    <div className="relative w-full flex items-center justify-center">
      {/* Status chip — makes the visualization instantly legible */}
      <div
        className="absolute top-0 right-1 z-10 inline-flex items-center gap-1.5 rounded-full border border-indigo-100 bg-white/80 backdrop-blur-sm px-2.5 py-1 shadow-xs transition-opacity duration-300"
        aria-hidden="true"
      >
        <span
          className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
            settled ? "bg-indigo-500" : "bg-slate-400 animate-pulse"
          }`}
        />
        <span className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-indigo-600">
          {settled ? "Optimized" : "Refactoring"}
        </span>
      </div>

      <svg
        viewBox="0 0 480 380"
        fill="none"
        className="w-full h-auto max-w-[440px]"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="rfx-halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.18" />
            <stop offset="60%" stopColor="#818cf8" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="rfx-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Ambient halo (slow breath) */}
        <circle cx="240" cy="200" r={185 + Math.sin(clock * 0.8) * 6} fill="url(#rfx-halo)" />

        {/* ── Concept A: tangled nodes → clean flow + streaming packets ── */}
        {index === 0 && (
          <>
            {A_LINKS.map(([a, b], i) => (
              <line
                key={`al-${i}`}
                x1={aNodes[a].x}
                y1={aNodes[a].y}
                x2={aNodes[b].x}
                y2={aNodes[b].y}
                stroke={mix(SLATE, INDIGO, t)}
                strokeWidth={1.4}
                opacity={L(0.22, 0.55, t)}
              />
            ))}
            {/* Data packets with trails travelling each link */}
            {A_LINKS.map(([a, b], i) => {
              const base = clock * 0.32 + i * 0.17
              return (
                <g key={`ap-${i}`} opacity={t}>
                  {[0, 1, 2].map((k) => {
                    const f = fract(base - k * 0.06)
                    return (
                      <circle
                        key={k}
                        cx={L(aNodes[a].x, aNodes[b].x, f)}
                        cy={L(aNodes[a].y, aNodes[b].y, f)}
                        r={2.8 - k * 0.7}
                        fill="#4f46e5"
                        opacity={1 - k * 0.32}
                      />
                    )
                  })}
                </g>
              )
            })}
            <rect x={412} y={130} width={22} height={180} rx={6} fill="#eef2ff" opacity={L(0, 0.85, t)} />
            <rect
              x={412}
              y={310 - t * t * (168 + Math.sin(clock * 1.6) * 12)}
              width={22}
              height={t * t * (168 + Math.sin(clock * 1.6) * 12)}
              rx={6}
              fill="#4f46e5"
              opacity={t}
            />
            {aNodes.map((n, i) => (
              <g key={`an-${i}`}>
                <circle cx={n.x} cy={n.y} r={n.r} fill={mix(SLATE, INDIGO, t)} />
                <circle cx={n.x - n.r * 0.28} cy={n.y - n.r * 0.3} r={n.r * 0.34} fill="#ffffff" opacity={0.5 * t} />
              </g>
            ))}
          </>
        )}

        {/* ── Concept B: jagged latency → live streaming monitor line ── */}
        {index === 1 &&
          (() => {
            const y = (i: number) =>
              L(B_CHAOS[i], B_BASE[i] + Math.sin(i * 0.55 - clock * 2.4) * 7 * t, t)
            let d = ""
            for (let i = 0; i < B_N; i++) d += `${i ? "L" : "M"}${B_XS[i]} ${y(i)} `
            const area = `M40 340 ${d.replace("M", "L")}L440 340 Z`
            const sf = fract(clock * 0.14) * (B_N - 1)
            const si = Math.floor(sf)
            const sx = L(B_XS[si], B_XS[Math.min(si + 1, B_N - 1)], sf - si)
            const sy = L(y(si), y(Math.min(si + 1, B_N - 1)), sf - si)
            return (
              <>
                <path d={area} fill="url(#rfx-area)" opacity={L(0, 0.16, t)} />
                <path
                  d={d}
                  fill="none"
                  stroke={mix(SLATE, INDIGO, t)}
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx={B_XS[0]} cy={y(0)} r={5} fill="#94a3b8" />
                <g opacity={t}>
                  <circle cx={sx} cy={sy} r={7} fill="#818cf8" opacity={0.3} />
                  <circle cx={sx} cy={sy} r={3.5} fill="#4f46e5" />
                </g>
                <circle cx={B_XS[B_N - 1]} cy={y(B_N - 1)} r={6} fill="#4f46e5" opacity={t} />
              </>
            )
          })()}

        {/* ── Concept C: scattered parts → floating live modules ── */}
        {index === 2 &&
          C_ORDER.map((o, i) => {
            const x = L(C_CHAOS[i][0], o[0], t)
            const y = L(C_CHAOS[i][1], o[1], t) + Math.sin(clock * 1.6 + i * 1.1) * 3 * t
            const rr = L(C_ROT[i], 0, t) + Math.sin(clock * 0.9 + i) * 1.4 * t
            const bar = 24 + Math.abs(Math.sin(clock * 2.5 + i)) * 12 * t
            return (
              <g
                key={`cm-${i}`}
                transform={`translate(${x},${y}) rotate(${rr})`}
                opacity={L(0.15, 1, t)}
              >
                <rect x={-34} y={-30} width={68} height={60} rx={11} fill="#eef2ff" stroke="#4f46e5" strokeWidth={1.5} />
                <rect x={-22} y={-16} width={bar} height={5} rx={2.5} fill="#818cf8" />
                <rect x={-22} y={-4} width={44} height={5} rx={2.5} fill="#c7d2fe" />
                <circle cx={16} cy={-14} r={4} fill="#4f46e5" opacity={0.55 + 0.45 * Math.abs(Math.sin(clock * 3 + i))} />
              </g>
            )
          })}
      </svg>
    </div>
  )
}

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
  const reducedMotion = useReducedMotionPreference()
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [transitioning, setTransitioning] = useState(false)
  const parallaxRef = useRef<HTMLDivElement>(null)

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

  // 3D cursor tilt for a tactile, premium feel
  const handleParallax = (event: React.MouseEvent<HTMLDivElement>) => {
    const el = parallaxRef.current
    if (!el || reducedMotion) return
    const rect = el.getBoundingClientRect()
    const dx = (event.clientX - (rect.left + rect.width / 2)) / rect.width
    const dy = (event.clientY - (rect.top + rect.height / 2)) / rect.height
    el.style.transform = `perspective(1000px) rotateX(${-dy * 7}deg) rotateY(${dx * 9}deg) translate(${dx * 8}px, ${dy * 8}px)`
  }

  const resetParallax = () => {
    if (parallaxRef.current)
      parallaxRef.current.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) translate(0, 0)"
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
      <div className="page-shell relative z-10 pt-6 pb-12 lg:pt-8 lg:pb-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-10 xl:gap-16">

          {/* ─── LEFT: Headline + CTAs ─── */}
          <div className="flex-1 lg:max-w-[54%]">


            {/* Text Container to prevent jumping */}
            <div className="min-h-[260px] sm:min-h-[220px] lg:min-h-[260px] xl:min-h-[260px] flex flex-col justify-start">
              {/* Headline */}
              <h1
                className={`text-3xl sm:text-[2.25rem] lg:text-4xl xl:text-[2.5rem] font-bold tracking-tight text-[#0F172A] leading-tight transition-all duration-500 ${
                  transitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                }`}
              >
                {activeSlide.title}
              </h1>

              {/* Body */}
              <p
                className={`mt-4 text-base sm:text-lg leading-[1.6] text-slate-500 max-w-[540px] transition-all duration-500 delay-75 ${
                  transitioning ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
                }`}
              >
                {activeSlide.text}
              </p>
            </div>

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

          {/* ─── RIGHT: "Refactor" visual (3D tilt + per-slide live morph) ─── */}
          <div
            className="hidden lg:flex flex-1 items-center justify-center"
            onMouseMove={handleParallax}
            onMouseLeave={resetParallax}
          >
            <div
              ref={parallaxRef}
              className="w-full flex items-center justify-center"
              style={{ transition: "transform 0.3s ease-out", willChange: "transform" }}
            >
              <div
                className={`w-full flex items-center justify-center transition-all duration-500 ${
                  transitioning ? "opacity-50 scale-[0.98]" : "opacity-100 scale-100"
                }`}
              >
                <RefactorVisual index={activeIndex} reducedMotion={reducedMotion} />
              </div>
            </div>
          </div>
        </div>

        {/* ─── BOTTOM: Stat cards ─── */}
        <div className="mt-10 lg:mt-12 grid gap-4 sm:grid-cols-3">
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
              className="group relative flex items-center gap-5 overflow-hidden rounded-2xl border border-slate-200/60 bg-white/80 backdrop-blur-md px-6 py-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:bg-white hover:shadow-[0_12px_32px_rgba(99,102,241,0.08)]"
            >
              {/* Animated background glow on hover */}
              <div className="absolute -left-10 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[20px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
              
              {/* Stat Value */}
              <div className="relative flex shrink-0 items-center justify-center">
                <span className="text-[2rem] lg:text-[2.25rem] font-extrabold tracking-tighter text-slate-800 transition-colors duration-300 group-hover:text-indigo-600 tabular-nums">
                  <CountUp target={stat.num} suffix={stat.suffix} />
                </span>
              </div>
              
              {/* Stat Text */}
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
      </div>
    </section>
  )
}
