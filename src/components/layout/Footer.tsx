import { Link } from "react-router-dom"

import { BOOKING_URL, CAREERS_EMAIL, CONTACT_EMAIL } from "../../config/site"

import { services } from "../../data/services"

import logoWhite from "../../imports/RefactorQ-Logo-White_1.svg"

function FooterHeading({ children }: { children: string }) {
  return (
    <div className="mb-5 inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#38bdf8]">
      <span className="h-0.5 w-3 rounded-full bg-[#38bdf8]" />
      <h3>{children}</h3>
    </div>
  )
}

function MailIcon() {
  return (
    <svg className="h-3.5 w-3.5 shrink-0 text-slate-400" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
      <path d="M3 6.5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-11Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m3.5 6 8.5 6.5L20.5 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function BriefcaseIcon() {
  return (
    <svg className="h-3.5 w-3.5 shrink-0 text-slate-400" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
      <rect x="3" y="7.5" width="18" height="12" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 7.5V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.5M3 12.5h18" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg className="h-3.5 w-3.5 shrink-0 text-slate-400" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
      <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2 4 1.5v3a2 2 0 0 1-2 2C10.5 19 5 13.5 4.5 6.5a2 2 0 0 1 2-3Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8.25h4V23h-4V8.25ZM8.5 8.25h3.84v2.02h.05c.53-1 1.84-2.06 3.79-2.06 4.06 0 4.81 2.67 4.81 6.14V23h-4v-6.9c0-1.64-.03-3.76-2.29-3.76-2.29 0-2.64 1.79-2.64 3.64V23h-4V8.25Z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.9 2H22l-7.6 8.7L23.3 22h-7.1l-5.6-6.9L4.1 22H1l8.1-9.3L.9 2H8l5 6.3L18.9 2Zm-1.2 18.2h1.7L6.4 3.7H4.6l13.1 16.5Z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070d18] text-white">
      <div className="page-shell py-16">
        {/* High-Impact Bottom CTA Banner Card */}
        <div className="mb-16 flex flex-wrap items-center justify-between gap-8 rounded-[24px] border border-white/10 bg-gradient-to-r from-[#0c1827] via-[#10233b] to-[#0c1827] p-10 lg:p-12 relative overflow-hidden shadow-2xl">
          {/* Subtle Ambient Lighting Glow */}
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-orange-500/10 blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-sky-500/10 blur-[100px] pointer-events-none" />

          <div className="max-w-xl relative z-10">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-1 w-2.5 rounded-full bg-orange-500" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-orange-400">
                Let&apos;s begin the journey together
              </span>
            </div>
            <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
              AI-first consulting backed by{" "}
              <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
                real engineering depth.
              </span>
            </h2>
            <p className="mt-3.5 text-sm leading-relaxed text-slate-300">
              Tell us where delivery slows down, where scale gets expensive, or
              where AI can create operational lift. We will bring a point of
              view and a plan.
            </p>
          </div>
          <div className="flex min-w-[220px] flex-col gap-3.5 relative z-10">
            <a
              className="rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-7 py-3.5 text-center text-sm font-bold text-slate-950 shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(249,115,22,0.5)]"
              href={BOOKING_URL}
            >
              Book a consultation →
            </a>
            <a
              className="rounded-xl border border-white/20 bg-white/10 px-7 py-3.5 text-center text-sm font-semibold text-white backdrop-blur-md transition-all duration-200 hover:bg-white/20 hover:border-white/30"
              href={BOOKING_URL}
            >
              Request a demo
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-12 pb-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:gap-x-12 lg:pb-12">
          <div className="col-span-2 lg:col-span-1">
            <img alt="RefactorQ" className="mb-4 h-9 w-auto" src={logoWhite} />
            <p className="max-w-[260px] text-[13.5px] leading-[1.75] text-slate-300">
              RefactorQ.AI combines AI delivery, model-aware engineering, and
              proven platform expertise across performance, cloud, security,
              and quality.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-md border border-white/[0.1] bg-white/[0.05] px-2.5 py-1.5 font-mono text-[11px] font-medium text-slate-300">
                Dublin
              </span>
              <span className="rounded-md border border-white/[0.1] bg-white/[0.05] px-2.5 py-1.5 font-mono text-[11px] font-medium text-slate-300">
                Pune
              </span>
              <span className="rounded-md border border-white/[0.1] bg-white/[0.05] px-2.5 py-1.5 font-mono text-[11px] font-medium text-slate-300">
                Est. 2021
              </span>
            </div>
          </div>

          <div>
            <FooterHeading>Services</FooterHeading>
            <div className="flex flex-col gap-3.5">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  className="text-[13.5px] text-slate-300 transition-colors hover:text-white"
                  to={`/services/${service.slug}`}
                >
                  {service.shortTitle}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <FooterHeading>Company</FooterHeading>
            <div className="flex flex-col gap-3.5">
              <Link
                className="text-[13.5px] text-slate-300 transition-colors hover:text-white"
                to="/products"
              >
                Products
              </Link>
              <Link
                className="text-[13.5px] text-slate-300 transition-colors hover:text-white"
                to="/aviation"
              >
                Aviation consulting
              </Link>
              <Link
                className="text-[13.5px] text-slate-300 transition-colors hover:text-white"
                to="/culture"
              >
                Culture
              </Link>
              <Link
                className="text-[13.5px] text-slate-300 transition-colors hover:text-white"
                to="/careers"
              >
                Careers
              </Link>
              <Link
                className="text-[13.5px] text-slate-300 transition-colors hover:text-white"
                to="/blogs"
              >
                Blogs
              </Link>
            </div>
          </div>

          <div>
            <FooterHeading>Contact</FooterHeading>
            <div className="flex flex-col gap-3.5">
              <a
                className="flex items-center gap-2 text-[13.5px] text-slate-300 transition-colors hover:text-white"
                href={`mailto:${CONTACT_EMAIL}`}
              >
                <MailIcon />
                {CONTACT_EMAIL}
              </a>
              <a
                className="flex items-center gap-2 text-[13.5px] text-slate-300 transition-colors hover:text-white"
                href={`mailto:${CAREERS_EMAIL}`}
              >
                <BriefcaseIcon />
                {CAREERS_EMAIL}
              </a>
              <a
                className="flex items-center gap-2 text-[13.5px] text-slate-300 transition-colors hover:text-white"
                href="tel:+353894049974"
              >
                <PhoneIcon />
                Ireland: +353 89 404 9974
              </a>
              <a
                className="flex items-center gap-2 text-[13.5px] text-slate-300 transition-colors hover:text-white"
                href="tel:+917666235138"
              >
                <PhoneIcon />
                India: +91 76662 35138
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xs text-slate-400">
            © 2026 RefactorQ Consulting LLP
          </span>
          <div className="flex items-center gap-5">
            <Link
              className="text-xs text-slate-400 transition-colors hover:text-white"
              to="/privacy"
            >
              Privacy
            </Link>
            <Link
              className="text-xs text-slate-400 transition-colors hover:text-white"
              to="/terms"
            >
              Terms
            </Link>
            <span className="h-3.5 w-px bg-white/10" />
            <a
              aria-label="LinkedIn"
              className="text-slate-400 transition-colors hover:text-white"
              href="https://linkedin.com"
              rel="noreferrer"
              target="_blank"
            >
              <LinkedInIcon />
            </a>
            <a
              aria-label="X (Twitter)"
              className="text-slate-400 transition-colors hover:text-white"
              href="https://x.com"
              rel="noreferrer"
              target="_blank"
            >
              <XIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}