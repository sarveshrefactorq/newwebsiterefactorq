import { Link } from "react-router-dom"

import { BOOKING_URL, CAREERS_EMAIL, CONTACT_EMAIL } from "../../config/site"
import { services } from "../../data/services"

import logoBlue from "../../imports/RefactorQ-Logo-Blue_2.svg"

function FooterHeading({ children }: { children: string }) {
  return (
    <h3 className="mb-5 font-sans text-xs font-bold tracking-widest text-slate-900 uppercase">
      {children}
    </h3>
  )
}

function MailIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 text-indigo-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M3 6.5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-11Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m3.5 6 8.5 6.5L20.5 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function BriefcaseIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 text-indigo-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="3" y="7.5" width="18" height="12" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 7.5V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.5M3 12.5h18" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 text-indigo-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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
    <footer className="relative bg-white text-slate-700 pt-24 pb-12 border-t border-slate-200/80">
      <div className="page-shell">
        {/* Floating CTA Banner Overlapping Top Border (Compact Professional Light Style) */}
        <div className="-mt-32 mb-12 relative z-20 overflow-hidden rounded-[24px] bg-indigo-50 p-6 sm:p-8 md:p-10 text-slate-900 shadow-lg shadow-slate-200/50 border border-indigo-100 text-center">
          <div className="mx-auto max-w-2xl flex flex-col items-center justify-center">
            {/* Eyebrow Tag */}
            <div className="mb-3 inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-indigo-500/10 text-[11px] font-semibold tracking-wider text-indigo-600 border border-indigo-500/20">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse" />
              Let&apos;s begin the journey together
            </div>
            
            {/* Centered Main Title (No Underline) */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-snug tracking-tight text-slate-900 mb-2">
              AI-first consulting backed by{" "}
              <span className="text-indigo-600">
                real engineering depth.
              </span>
            </h2>
            
            {/* Image 2 Dotted Accent */}
            <div className="my-1.5 flex items-center justify-center gap-1.5 opacity-50">
              <span className="h-0.5 w-1 bg-slate-400 rounded-full" />
              <span className="h-0.5 w-1 bg-slate-400 rounded-full" />
              <span className="h-0.5 w-1 bg-slate-400 rounded-full" />
              <span className="h-0.5 w-2.5 bg-indigo-500 rounded-full" />
              <span className="h-0.5 w-1 bg-slate-400 rounded-full" />
              <span className="h-0.5 w-1 bg-slate-400 rounded-full" />
              <span className="h-0.5 w-1 bg-slate-400 rounded-full" />
            </div>

            {/* Subtitle / Description */}
            <p className="text-xs sm:text-sm leading-relaxed text-slate-600 mb-6 font-normal max-w-xl">
              Tell us where delivery slows down, where scale gets expensive, or where AI can create operational lift. We will bring a point of view and a plan.
            </p>

            {/* Primary Action */}
            <a
              href={BOOKING_URL}
              className="inline-flex items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow-indigo-600/25 transition-all duration-200 active:scale-95 cursor-pointer whitespace-nowrap"
            >
              Book a consultation →
            </a>
          </div>
        </div>

        {/* Main Footer 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
          {/* Column 1: Logo & Brand Info */}
          <div className="flex flex-col justify-between">
            <div>
              <img alt="RefactorQ" className="mb-5 h-8 w-auto" src={logoBlue} />
              <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-normal mb-5 max-w-xs">
                RefactorQ.AI combines AI delivery, model-aware engineering, and proven platform expertise across performance, cloud, security, and quality.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="rounded-full border border-slate-200 bg-slate-100/80 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-slate-700">
                  Dublin
                </span>
                <span className="rounded-full border border-slate-200 bg-slate-100/80 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-slate-700">
                  Pune
                </span>
                <span className="rounded-full border border-slate-200 bg-slate-100/80 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-slate-700">
                  Est. 2021
                </span>
              </div>
            </div>

            {/* Social Icons Row */}
            <div className="flex items-center gap-2.5">
              <a
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 border border-slate-200 hover:bg-indigo-500 hover:text-white hover:border-indigo-500 transition-all duration-200 shadow-2xs"
                href="https://linkedin.com"
                rel="noreferrer"
                target="_blank"
              >
                <LinkedInIcon />
              </a>
              <a
                aria-label="X (Twitter)"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 border border-slate-200 hover:bg-indigo-500 hover:text-white hover:border-indigo-500 transition-all duration-200 shadow-2xs"
                href="https://x.com"
                rel="noreferrer"
                target="_blank"
              >
                <XIcon />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <FooterHeading>Services</FooterHeading>
            <div className="flex flex-col gap-3">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  className="text-xs sm:text-sm text-slate-600 hover:text-indigo-600 font-medium transition-colors"
                  to={`/services/${service.slug}`}
                >
                  {service.shortTitle}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Company */}
          <div>
            <FooterHeading>Company</FooterHeading>
            <div className="flex flex-col gap-3">
              <Link className="text-xs sm:text-sm text-slate-600 hover:text-indigo-600 font-medium transition-colors" to="/products">
                Products
              </Link>
              <Link className="text-xs sm:text-sm text-slate-600 hover:text-indigo-600 font-medium transition-colors" to="/aviation">
                Aviation consulting
              </Link>
              <Link className="text-xs sm:text-sm text-slate-600 hover:text-indigo-600 font-medium transition-colors" to="/culture">
                Culture
              </Link>
              <Link className="text-xs sm:text-sm text-slate-600 hover:text-indigo-600 font-medium transition-colors" to="/careers">
                Careers
              </Link>
              <Link className="text-xs sm:text-sm text-slate-600 hover:text-indigo-600 font-medium transition-colors" to="/blogs">
                Blogs
              </Link>
            </div>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <FooterHeading>Contact Us</FooterHeading>
            <div className="flex flex-col gap-3.5">
              <a
                className="flex items-center gap-3 text-xs sm:text-sm text-slate-600 hover:text-indigo-600 font-medium transition-colors group"
                href={`mailto:${CONTACT_EMAIL}`}
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100 group-hover:bg-indigo-500 group-hover:text-white transition-colors shrink-0 shadow-2xs">
                  <MailIcon />
                </span>
                <span className="truncate">{CONTACT_EMAIL}</span>
              </a>
              <a
                className="flex items-center gap-3 text-xs sm:text-sm text-slate-600 hover:text-indigo-600 font-medium transition-colors group"
                href={`mailto:${CAREERS_EMAIL}`}
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100 group-hover:bg-indigo-500 group-hover:text-white transition-colors shrink-0 shadow-2xs">
                  <BriefcaseIcon />
                </span>
                <span className="truncate">{CAREERS_EMAIL}</span>
              </a>
              <a
                className="flex items-center gap-3 text-xs sm:text-sm text-slate-600 hover:text-indigo-600 font-medium transition-colors group"
                href="tel:+353894049974"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100 group-hover:bg-indigo-500 group-hover:text-white transition-colors shrink-0 shadow-2xs">
                  <PhoneIcon />
                </span>
                <span>Ireland: +353 89 404 9974</span>
              </a>
              <a
                className="flex items-center gap-3 text-xs sm:text-sm text-slate-600 hover:text-indigo-600 font-medium transition-colors group"
                href="tel:+917666235138"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100 group-hover:bg-indigo-500 group-hover:text-white transition-colors shrink-0 shadow-2xs">
                  <PhoneIcon />
                </span>
                <span>India: +91 76662 35138</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200/80 pt-8 text-xs font-medium text-slate-500">
          <span>© 2026 RefactorQ Consulting LLP. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a className="hover:text-indigo-600 transition-colors" href="https://linkedin.com" rel="noreferrer" target="_blank">
              LinkedIn
            </a>
            <a className="hover:text-indigo-600 transition-colors" href="https://x.com" rel="noreferrer" target="_blank">
              X (Twitter)
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}