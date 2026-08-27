import { useState, useEffect, useRef } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"

import { BOOKING_URL, navItems } from "../../config/site"
import { services } from "../../data/services"
import { products } from "../../data/products"
import logoBlue from "../../imports/RefactorQ-Logo-Blue_2.svg"

/* ─────────────────────────────────────────────────────────────
   Standard High-Precision Micro-Icons for Flyout Menus
   ───────────────────────────────────────────────────────────── */

function FlyoutIcon({ slug }: { slug: string }) {
  const iconClass = "h-4.5 w-4.5 stroke-current transition-colors duration-200"

  switch (slug) {
    case "ai-ml-engineering":
    case "leadgen":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
        </svg>
      )
    case "agentic-ai-automation":
    case "voice-agent":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5m6 0V3m-3 0v1.5m-3 18V21m6 0v-1.5m-3 0V21m-6-15h16.5M3 12h18M3 18h18M6.75 6.75h10.5a.75.75 0 01.75.75v9a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75v-9a.75.75 0 01.75-.75z" />
        </svg>
      )
    case "cloud-devops-sre-engineering":
    case "cloudguardian":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 00.435-7.475 4.5 4.5 0 00-7.801-4.225A4.5 4.5 0 002.25 15z" />
        </svg>
      )
    case "performance-engineering":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    case "quality-engineering-test-automation":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    case "cybersecurity-cloud-resilience":
    case "security-engineering":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.959 11.959 0 0112 2.714z" />
        </svg>
      )
    case "cloud-finops":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    default:
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      )
  }
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeFlyout, setActiveFlyout] = useState<"services" | "products" | null>(null)

  const flyoutTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const location = useLocation()

  // Close menus on route change
  useEffect(() => {
    setMenuOpen(false)
    setActiveFlyout(null)
  }, [location.pathname])

  // Track scroll position for elevation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleFlyoutEnter = (menu: "services" | "products") => {
    if (flyoutTimeoutRef.current) clearTimeout(flyoutTimeoutRef.current)
    setActiveFlyout(menu)
  }

  const handleFlyoutLeave = () => {
    flyoutTimeoutRef.current = setTimeout(() => {
      setActiveFlyout(null)
    }, 150)
  }

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 text-slate-900 shadow-[0_8px_30px_rgba(99,102,241,0.06)] border-b border-slate-200/80 backdrop-blur-xl"
            : "bg-white/90 text-slate-900 border-b border-slate-200/60 backdrop-blur-xl"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10 h-20">
          {/* Logo */}
          <Link
            className="group flex items-center gap-3 transition-opacity hover:opacity-90 focus:outline-none shrink-0 mr-4"
            to="/"
          >
            <img
              alt="RefactorQ"
              className="h-9 w-auto transition-transform duration-300 group-hover:scale-[1.02]"
              src={logoBlue}
            />
          </Link>

          {/* Centered Desktop Navigation Bar with Balanced Spacing & Stripe-Grade Flyouts */}
          <nav className="hidden lg:flex lg:items-center lg:gap-1.5 xl:gap-2.5">
            {/* Services with Flyout */}
            <div
              className="relative"
              onMouseEnter={() => handleFlyoutEnter("services")}
              onMouseLeave={handleFlyoutLeave}
            >
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold tracking-tight transition-all duration-200 cursor-pointer ${
                    isActive || activeFlyout === "services"
                      ? "text-indigo-600 bg-indigo-50/90 font-bold"
                      : "text-slate-700 hover:text-indigo-600 hover:bg-slate-50"
                  }`
                }
              >
                <span>Services</span>
                <svg
                  className={`h-3.5 w-3.5 text-slate-400 transition-transform duration-200 ${
                    activeFlyout === "services" ? "rotate-180 text-indigo-600" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </NavLink>

              {/* Mega-Dropdown Flyout Menu for Services */}
              {activeFlyout === "services" && (
                <div
                  className="absolute left-0 top-full pt-3 w-[720px] -ml-20 animate-in fade-in slide-in-from-top-2 duration-200"
                  onMouseEnter={() => handleFlyoutEnter("services")}
                  onMouseLeave={handleFlyoutLeave}
                >
                  <div className="overflow-hidden rounded-[28px] bg-white border border-slate-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.12)] p-6 grid grid-cols-12 gap-6 backdrop-blur-xl">
                    {/* Left & Center Columns: 7 Services */}
                    <div className="col-span-8 grid grid-cols-2 gap-2">
                      <div className="col-span-2 pb-2 mb-1 border-b border-slate-100 flex items-center justify-between">
                        <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          Consulting Practices (7 Core Lines)
                        </span>
                        <Link
                          to="/services"
                          className="font-mono text-xs font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
                        >
                          View All →
                        </Link>
                      </div>

                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          className="group/item flex items-start gap-3 p-2.5 rounded-2xl hover:bg-slate-100/70 border border-transparent hover:border-slate-200/80 transition-all duration-200"
                        >
                          {/* Modern Black Hover Icon Container */}
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100/90 border border-slate-200/90 text-slate-700 group-hover/item:bg-black group-hover/item:border-black group-hover/item:text-white transition-all duration-200 shadow-2xs">
                            <FlyoutIcon slug={s.slug} />
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-xs font-bold text-slate-900 group-hover/item:text-black transition-colors truncate">
                              {s.shortTitle || s.title}
                            </h4>
                            <p className="text-[11px] text-slate-500 group-hover/item:text-slate-700 line-clamp-1 leading-snug font-normal mt-0.5">
                              {s.tagline || s.summary}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Right Column: Custom Architecture Card */}
                    <div className="col-span-4 rounded-2xl bg-gradient-to-br from-[#0B1322] to-[#0E1B2E] p-5 text-white flex flex-col justify-between border border-slate-800 relative overflow-hidden">
                      <div className="absolute -top-12 -right-12 h-28 w-28 rounded-full bg-indigo-500/20 blur-2xl pointer-events-none" />

                      <div className="relative z-10">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-indigo-400 block mb-1">
                          Direct Engagement
                        </span>
                        <h4 className="text-sm font-extrabold text-white leading-snug mb-2">
                          Engineering Architecture Review
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed font-normal">
                          Scope a focused discussion around your systems, bottlenecks, and ROI.
                        </p>
                      </div>

                      <a
                        href={BOOKING_URL}
                        className="relative z-10 mt-4 inline-flex items-center justify-center gap-1.5 rounded-full bg-indigo-600 hover:bg-indigo-500 px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-wider text-white transition-all shadow-xs"
                      >
                        <span>Schedule Call</span>
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Products with Flyout */}
            <div
              className="relative"
              onMouseEnter={() => handleFlyoutEnter("products")}
              onMouseLeave={handleFlyoutLeave}
            >
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold tracking-tight transition-all duration-200 cursor-pointer ${
                    isActive || activeFlyout === "products"
                      ? "text-indigo-600 bg-indigo-50/90 font-bold"
                      : "text-slate-700 hover:text-indigo-600 hover:bg-slate-50"
                  }`
                }
              >
                <span>Products</span>
                <svg
                  className={`h-3.5 w-3.5 text-slate-400 transition-transform duration-200 ${
                    activeFlyout === "products" ? "rotate-180 text-indigo-600" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </NavLink>

              {/* Flyout Menu for Products */}
              {activeFlyout === "products" && (
                <div
                  className="absolute left-0 top-full pt-3 w-[520px] -ml-20 animate-in fade-in slide-in-from-top-2 duration-200"
                  onMouseEnter={() => handleFlyoutEnter("products")}
                  onMouseLeave={handleFlyoutLeave}
                >
                  <div className="overflow-hidden rounded-[28px] bg-white border border-slate-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.12)] p-5 backdrop-blur-xl space-y-2">
                    <div className="pb-2 border-b border-slate-100 flex items-center justify-between">
                      <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        RefactorQ AI SaaS Platforms
                      </span>
                      <Link
                        to="/products"
                        className="font-mono text-xs font-bold text-indigo-600 hover:text-indigo-700"
                      >
                        All Platforms →
                      </Link>
                    </div>

                    {products.map((p) => (
                      <Link
                        key={p.slug}
                        to={`/products/${p.slug}`}
                        className="group/p flex items-start gap-3.5 p-3 rounded-2xl hover:bg-slate-100/70 border border-transparent hover:border-slate-200/80 transition-all duration-200"
                      >
                        {/* Modern Black Hover Icon Container */}
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-100/90 border border-slate-200/90 text-slate-700 group-hover/p:bg-black group-hover/p:border-black group-hover/p:text-white transition-all duration-200 shadow-2xs">
                          <FlyoutIcon slug={p.slug} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm font-bold text-slate-900 group-hover/p:text-black transition-colors">
                              {p.name}
                            </h4>
                            <span className="rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200/60 px-2 py-0.2 font-mono text-[9px] font-bold">
                              Live
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 group-hover/p:text-slate-700 leading-snug font-normal mt-0.5 line-clamp-1">
                            {p.tagline || p.summary}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Other Direct Links */}
            {navItems
              .filter((item) => item.to !== "/services" && item.to !== "/products")
              .map((item) => (
                <NavLink
                  key={item.to}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full text-sm font-semibold tracking-tight transition-all duration-200 whitespace-nowrap ${
                      isActive
                        ? "!text-indigo-600 bg-indigo-50/90 font-bold"
                        : "!text-slate-700 hover:!text-indigo-600 hover:bg-slate-50"
                    }`
                  }
                  to={item.to}
                >
                  {item.label}
                </NavLink>
              ))}
          </nav>

          {/* Desktop Right Action: Primary Consultation Button */}
          <div className="hidden lg:flex lg:items-center shrink-0 ml-4">
            <a
              className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 hover:bg-indigo-500 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-indigo-600/25 hover:shadow-lg hover:shadow-indigo-600/40 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
              href={BOOKING_URL}
            >
              <span>Book Consultation</span>
              <svg className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          {/* Mobile Actions: Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              aria-expanded={menuOpen}
              aria-label="Toggle navigation"
              className="flex h-10 w-10 items-center justify-center rounded-2xl text-slate-900 hover:bg-slate-100 focus:outline-none"
              onClick={() => setMenuOpen((current) => !current)}
              type="button"
            >
              {menuOpen ? (
                <svg className="h-6 w-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ─── FULLSCREEN MOBILE NAVIGATION DRAWER ─── */}
      {menuOpen && (
        <div className="fixed inset-0 top-20 z-40 flex flex-col bg-white px-6 py-6 transition-all lg:hidden overflow-y-auto">
          <nav className="flex flex-col gap-2 border-b border-slate-100 pb-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                className={({ isActive }) =>
                  `flex items-center justify-between p-3.5 rounded-2xl text-sm font-bold tracking-tight transition-colors ${
                    isActive
                      ? "text-indigo-600 bg-indigo-50/80"
                      : "text-slate-800 hover:bg-slate-50"
                  }`
                }
                onClick={() => setMenuOpen(false)}
                to={item.to}
              >
                <span>{item.label}</span>
                <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </NavLink>
            ))}
          </nav>

          {/* Direct CTA in Mobile Drawer */}
          <div className="mt-6">
            <a
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-indigo-600 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-indigo-600/25 transition-all"
              href={BOOKING_URL}
            >
              <span>Book a Consultation</span>
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </>
  )
}