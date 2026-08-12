import { useEffect, useState } from "react"

import { heroSlides } from "../../data/home"
import { useReducedMotionPreference } from "../../lib/useReducedMotionPreference"
import { ButtonLink } from "../ui/ButtonLink"

export function HomeHero() {
  const reducedMotion = useReducedMotionPreference()
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || reducedMotion) {
      return
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length)
    }, 6000)

    return () => window.clearInterval(interval)
  }, [paused, reducedMotion])

  const activeSlide = heroSlides[activeIndex]

  return (
    <section
      aria-label="Homepage hero"
      className="hero-section relative overflow-hidden bg-gradient-to-b from-[#0b1320] via-[#0f1d30] to-[#0c1827] py-5 lg:py-7"
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") {
          setActiveIndex((current) => (current + 1) % heroSlides.length)
        }

        if (event.key === "ArrowLeft") {
          setActiveIndex(
            (current) => (current - 1 + heroSlides.length) % heroSlides.length,
          )
        }
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      tabIndex={0}
    >
      {/* Background Radial Glow Spot & Subtle Tech Grid */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-orange-500/15 blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 -right-40 h-[500px] w-[500px] rounded-full bg-sky-500/10 blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:32px_32px] mask-radial-gradient pointer-events-none" />

      <div className="page-shell relative z-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        
        {/* Left Column: Headline & Action Controls */}
        <div className="space-y-5">
          
          {/* Dynamic Headline */}
          <h1 className="hero-title font-bold text-[#f8fafc] max-w-2xl">
            Consulting that turns{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
              AI potential
            </span>{" "}
            into operational results.
          </h1>

          {/* Body Text */}
          <p className="hero-copy max-w-xl text-[#cbd5e1] text-sm sm:text-base leading-relaxed">
            {activeSlide.text}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <a
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-[0_0_20px_rgba(249,115,22,0.35)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(249,115,22,0.5)]"
              href={activeSlide.primary.href}
            >
              <span>{activeSlide.primary.label}</span>
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>

            <a
              className="group inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md transition-all duration-200 hover:bg-white/20 hover:border-white/30"
              href={activeSlide.secondary.href}
            >
              <span>{activeSlide.secondary.label}</span>
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          {/* Slider Pagination Controls */}
          <div className="flex items-center gap-4 pt-3 border-t border-white/[0.08]">
            <div className="flex items-center gap-2">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.id}
                  aria-label={`Show slide ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-7 bg-gradient-to-r from-orange-500 to-amber-500 shadow-[0_0_10px_rgba(249,115,22,0.6)]"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  onClick={() => setActiveIndex(index)}
                  type="button"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: High-Grade Stats Panel */}
        <div className="hero-panel">
          <div className="rounded-2xl border border-white/[0.14] bg-[#0e1c2e]/90 p-5 lg:p-5.5 shadow-2xl backdrop-blur-2xl ring-1 ring-black/40 space-y-3.5">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Key Track Record
              </span>
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            </div>

            <div className="grid gap-2.5">
              {/* Stat 1 */}
              <div className="group rounded-xl border border-white/[0.08] bg-white/[0.03] p-3 lg:p-3.5 transition-all duration-200 hover:border-orange-500/30 hover:bg-white/[0.06]">
                <div className="text-base font-bold text-orange-400 group-hover:translate-x-1 transition-transform">
                  2021
                </div>
                <p className="mt-0.5 text-xs text-slate-300 leading-relaxed font-normal">
                  Founded to close the gap between advisory slides and delivery reality.
                </p>
              </div>

              {/* Stat 2 */}
              <div className="group rounded-xl border border-white/[0.08] bg-white/[0.03] p-3 lg:p-3.5 transition-all duration-200 hover:border-orange-500/30 hover:bg-white/[0.06]">
                <div className="text-base font-bold text-orange-400 group-hover:translate-x-1 transition-transform">
                  25+ Team Members
                </div>
                <p className="mt-0.5 text-xs text-slate-300 leading-relaxed font-normal">
                  Engineering, QA, cloud, security, AI, product, and operational practitioners.
                </p>
              </div>

              {/* Stat 3 */}
              <div className="group rounded-xl border border-white/[0.08] bg-white/[0.03] p-3 lg:p-3.5 transition-all duration-200 hover:border-orange-500/30 hover:bg-white/[0.06]">
                <div className="text-base font-bold text-orange-400 group-hover:translate-x-1 transition-transform">
                  60+ Years Combined Leadership
                </div>
                <p className="mt-0.5 text-xs text-slate-300 leading-relaxed font-normal">
                  Leadership grounded in delivery, architecture, and long-cycle engineering decisions.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
