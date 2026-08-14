import { useState, useEffect } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"

import { BOOKING_URL, navItems } from "../../config/site"
import logoBlue from "../../imports/RefactorQ-Logo-Blue_2.svg"

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const location = useLocation()

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
    setSearchOpen(false)
  }, [location.pathname])

  // Track scroll position for header header elevation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 text-slate-900 shadow-md border-b border-slate-200/80 backdrop-blur-md"
            : "bg-white/90 text-slate-900 border-b border-slate-200/60 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10 h-20">
          {/* Logo */}
          <Link
            className="group flex items-center gap-3 transition-opacity hover:opacity-90 focus:outline-none shrink-0"
            to="/"
          >
            <img
              alt="RefactorQ"
              className="h-9 w-auto transition-transform duration-300 group-hover:scale-[1.02]"
              src={logoBlue}
            />
          </Link>

          {/* Centered Navigation Bar */}
          <nav className="hidden lg:flex lg:items-center lg:gap-7">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                className={({ isActive }) =>
                  `relative py-2 text-sm font-semibold tracking-tight transition-colors duration-200 ${
                    isActive
                      ? "!text-slate-950 font-bold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-indigo-500"
                      : "!text-slate-700 hover:!text-slate-950 hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:h-[2px] hover:after:w-full hover:after:bg-indigo-500"
                  }`
                }
                to={item.to}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right Utilities (Search & Capsule CTA) */}
          <div className="hidden lg:flex lg:items-center lg:gap-4 shrink-0">
            {/* Search Icon trigger */}
            <button
              aria-label="Search site"
              className="flex h-9 w-9 items-center justify-center rounded-full text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950"
              onClick={() => setSearchOpen(!searchOpen)}
              type="button"
            >
              <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>

            {/* Image-Style Capsule CTA Button */}
            <a
              className="group relative inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-xs font-bold uppercase tracking-wider !text-white transition-all duration-300 hover:bg-indigo-500 shadow-sm active:scale-95"
              href={BOOKING_URL}
            >
              <span>Book Consultation</span>
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              aria-label="Search site"
              className="flex h-9 w-9 items-center justify-center rounded-full text-slate-700"
              onClick={() => setSearchOpen(!searchOpen)}
              type="button"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>

            {/* Mobile Hamburger / Close Button */}
            <button
              aria-expanded={menuOpen}
              aria-label="Toggle navigation"
              className="flex h-10 w-10 items-center justify-center text-slate-900 focus:outline-none"
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

        {/* Quick Search Overlay Dropdown */}
        {searchOpen && (
          <div className="border-t border-slate-200 bg-white px-6 py-4 transition-all">
            <div className="mx-auto flex max-w-3xl items-center gap-3 rounded-md border border-slate-300 bg-slate-50 px-4 py-2.5 shadow-inner">
              <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <input
                autoFocus
                className="w-full bg-transparent text-sm text-slate-900 placeholder-slate-400 focus:outline-none"
                placeholder="Search services, products, case studies..."
                type="text"
              />
              <button
                className="text-xs font-semibold text-slate-500 hover:text-slate-900"
                onClick={() => setSearchOpen(false)}
                type="button"
              >
                ESC
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Fullscreen Mobile Navigation Panel */}
      {menuOpen && (
        <div className="fixed inset-0 top-20 z-40 flex flex-col bg-white px-8 py-8 transition-all lg:hidden">
          <nav className="flex flex-col gap-4 border-b border-slate-200 pb-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                className={({ isActive }) =>
                  `text-base font-bold tracking-tight transition-colors ${
                    isActive
                      ? "!text-slate-950 font-bold"
                      : "!text-slate-600 hover:!text-slate-950"
                  }`
                }
                onClick={() => setMenuOpen(false)}
                to={item.to}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-8 flex flex-col gap-4">
            <a
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-950 bg-slate-950 py-3.5 text-xs font-bold uppercase tracking-wider !text-white transition-colors hover:bg-indigo-500 hover:border-indigo-500"
              href={BOOKING_URL}
            >
              Book a consultation
            </a>
          </div>
        </div>
      )}
    </>
  )
}