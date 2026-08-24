import { companyStats } from "../data/clients"
import { leadership } from "../data/team"

import { usePageMeta } from "../lib/meta"

import { ArrowLink } from "../components/ui/ArrowLink"
import { LogoStrip } from "../components/ui/LogoStrip"
import { PageIntro } from "../components/ui/PageIntro"
import { Reveal } from "../components/ui/Reveal"
import { SectionHeader } from "../components/ui/SectionHeader"
import { StatBand } from "../components/ui/StatBand"

export function AboutPage() {
  usePageMeta(
    "About",

    "Company overview for RefactorQ.AI covering mission, geography, delivery philosophy, and leadership context.",
  )

  return (
    <>
      <PageIntro
        body="RefactorQ was established in 2021 and operates across Dublin and Pune. The company is repositioning around AI-first consulting while retaining the engineering disciplines that built its reputation."
        eyebrow="About"
        title="An engineering-led consulting company moving deliberately into an AI-first future."
      />

      <section className="page-shell py-16">
        <LogoStrip label="Work trusted across industries and operating models" />
      </section>

      <section className="page-shell py-10">
        <div className="grid gap-10 lg:grid-cols-2 xl:gap-14">
          <Reveal>
            <article className="dark-card relative h-full overflow-hidden group hover:-translate-y-1.5 transition-all duration-300">
              {/* Subtle background glow effect */}
              <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-indigo-500/20 blur-[50px] pointer-events-none group-hover:bg-indigo-500/30 transition-colors duration-500" />
              
              <div className="relative z-10">
                <span className="inline-flex items-center rounded-full bg-indigo-500/20 border border-indigo-400/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-indigo-300">
                  Mission
                </span>
                <h2 className="card-title mt-6 text-2xl !text-white leading-[1.3]">
                  Practical execution over transformation language.
                </h2>
                <p className="card-copy mt-4 text-[15px] leading-[1.8] !text-slate-300">
                  Bring together AI systems thinking and practical engineering
                  execution so clients can modernise operations, improve delivery,
                  and build more capable products without buying into empty
                  transformation language.
                </p>
              </div>
            </article>
          </Reveal>
          <Reveal>
            <article className="dark-card relative h-full overflow-hidden group hover:-translate-y-1.5 transition-all duration-300">
              {/* Subtle background glow effect */}
              <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-emerald-500/10 blur-[50px] pointer-events-none group-hover:bg-emerald-500/20 transition-colors duration-500" />
              
              <div className="relative z-10">
                <span className="inline-flex items-center rounded-full bg-emerald-500/20 border border-emerald-400/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-300">
                  Footprint
                </span>
                <h2 className="card-title mt-6 text-2xl !text-white leading-[1.3]">
                  A two-office delivery system, not a sales-and-outsource split.
                </h2>
                <p className="card-copy mt-4 text-[15px] leading-[1.8] !text-slate-300">
                  Dublin supports European market presence and leadership
                  visibility. Pune anchors engineering, quality, product, cloud,
                  and operational delivery. Both function as one delivery system.
                </p>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section-dark">
        <div className="page-shell py-20">
          <StatBand stats={companyStats} />
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-50/50">
        <div className="page-shell py-24 relative z-10">
          <SectionHeader
            body="The existing site emphasises quick response, delivery rigour, and hands-on capability. This version turns those ideas into a more premium and specific narrative."
            eyebrow="Why choose RefactorQ"
            title="Practical advantages, not generic consulting claims."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Reveal>
              <article className="card h-full relative group hover:-translate-y-2 transition-all duration-300">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 group-hover:scale-110 group-hover:bg-indigo-100 group-hover:border-indigo-200 transition-all shadow-sm">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <h3 className="card-title text-xl text-slate-900">Performance-driven delivery</h3>
                <p className="card-copy mt-4 text-slate-600 leading-relaxed text-sm">
                  We focus on throughput, latency, release confidence, and operating leverage rather than abstract transformation language.
                </p>
              </article>
            </Reveal>

            <Reveal>
              <article className="card h-full relative group hover:-translate-y-2 transition-all duration-300">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 group-hover:scale-110 group-hover:bg-emerald-100 group-hover:border-emerald-200 transition-all shadow-sm">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="card-title text-xl text-slate-900">Fast response, accountability</h3>
                <p className="card-copy mt-4 text-slate-600 leading-relaxed text-sm">
                  Leadership visibility and responsive execution are part of the operating model, not a sales promise.
                </p>
              </article>
            </Reveal>

            <Reveal>
              <article className="card h-full relative group hover:-translate-y-2 transition-all duration-300">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50 border border-rose-100 text-rose-600 group-hover:scale-110 group-hover:bg-rose-100 group-hover:border-rose-200 transition-all shadow-sm">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                  </svg>
                </div>
                <h3 className="card-title text-xl text-slate-900">Professional range without sprawl</h3>
                <p className="card-copy mt-4 text-slate-600 leading-relaxed text-sm">
                  The offering is broad enough to solve the adjacent problem, but consolidated enough to stay coherent for buyers.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="page-shell py-24">
        <SectionHeader
          eyebrow="Leadership"
          title="The people setting direction and staying close to delivery."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {leadership.map((member) => (
            <Reveal key={member.name}>
              <article className="team-card text-center relative group hover:-translate-y-1.5 transition-all duration-300">
                {/* Profile Picture Container */}
                <div className="mx-auto mb-6 h-44 w-44 overflow-hidden rounded-full bg-gradient-to-b from-indigo-50 to-indigo-100/50 border-[6px] border-white shadow-[0_8px_24px_rgba(10,18,40,0.08)] group-hover:shadow-[0_12px_28px_rgba(99,102,241,0.15)] group-hover:border-indigo-50/50 transition-all duration-300">
                  <img
                    alt={member.name}
                    className="h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    src={member.image}
                  />
                </div>
                {/* Team Member Info */}
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">{member.name}</h3>
                <p className="mt-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-600">
                  {member.role}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-surface">
        <div className="page-shell py-24">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              body="Leadership profiles are one part of the story. The culture page covers how the wider team works day to day, plus photos from both offices."
              eyebrow="Culture"
              title="See how the team works, not just who leads it."
            />
            <ArrowLink href="/culture" label="Explore our culture" />
          </div>
        </div>
      </section>
    </>
  )
}
