import { useState } from "react"
import { Link, NavLink } from "react-router-dom"

import { BOOKING_URL, navItems } from "../../config/site"
import logoWhite from "../../imports/RefactorQ-Logo-White_1.svg"

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#0a0f1c]/90 backdrop-blur-xl">
      <div className="page-shell mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link
          className="flex items-center gap-3 transition-opacity hover:opacity-90"
          onClick={() => setMenuOpen(false)}
          to="/"
        >
          <img alt="RefactorQ" className="h-[32px] w-auto md:h-[36px]" src={logoWhite} />
        </Link>

        {/* Mobile Menu Icon */}
        <button
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 !text-white transition-colors hover:bg-white/10 lg:hidden"
          onClick={() => setMenuOpen((current) => !current)}
          type="button"
        >
          <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
            {menuOpen ? (
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 13.41 12z" />
            ) : (
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            )}
          </svg>
        </button>

        {/* Desktop Links & CTA */}
        <div className="hidden lg:flex lg:items-center lg:gap-6">
          
          {/* Nav */}
          <nav className="flex items-center gap-0.5">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                className={({ isActive }) =>
                  `px-3.5 py-2 text-[13.5px] font-medium transition-colors rounded-lg ${
                    isActive
                      ? "!text-orange-500"
                      : "!text-slate-400 hover:!text-white"
                  }`
                }
                to={item.to}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Outlined CTA */}
          <a
            className="inline-flex items-center justify-center rounded-lg border border-orange-500/50 bg-orange-500/[0.06] px-5 py-2.5 text-[13.5px] font-medium !text-white transition-all duration-200 hover:bg-orange-500/[0.12] hover:border-orange-500/80 active:scale-95"
            href={BOOKING_URL}
          >
            Book a consultation
          </a>
        </div>

        {/* Mobile Navigation Drawer */}
        {menuOpen && (
          <div className="absolute left-0 top-full flex w-full flex-col gap-4 border-b border-white/[0.08] bg-[#0a0f1c] p-6 shadow-2xl lg:hidden">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? "!text-orange-500"
                        : "!text-slate-400 hover:!text-white"
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                  to={item.to}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <a
              className="mt-2 block w-full rounded-lg border border-orange-500/50 bg-orange-500/[0.06] py-3 text-center text-sm font-medium !text-white"
              href={BOOKING_URL}
            >
              Book a consultation
            </a>
          </div>
        )}
      </div>
    </header>
  )
}