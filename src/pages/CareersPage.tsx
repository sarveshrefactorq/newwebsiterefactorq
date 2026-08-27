import { CAREERS_EMAIL } from "../config/site"
import { jobs } from "../data/team"
import { usePageMeta } from "../lib/meta"
import { Reveal } from "../components/ui/Reveal"

/* ─────────────────────────────────────────────────────────────
   Bespoke Department Icons for Careers
   ───────────────────────────────────────────────────────────── */

function RoleIcon({ team }: { team: string }) {
  const iconClass = "h-5 w-5 stroke-current transition-colors duration-200"

  switch (team.toLowerCase()) {
    case "engineering":
    case "ai":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      )
    case "security":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.959 11.959 0 0112 2.714z" />
        </svg>
      )
    case "testing":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          <circle cx="12" cy="12" r="4" strokeDasharray="2 2" />
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

function getRoleSkills(title: string): string[] {
  if (title.toLowerCase().includes("performance")) {
    return ["Load Testing", "Workload Modelling", "Bottleneck Analysis", "JMeter / k6"]
  }
  if (title.toLowerCase().includes("security")) {
    return ["Threat Modelling", "Cloud Posture Audits", "Remediation", "AWS Security"]
  }
  return ["Test Automation", "CI/CD Quality Gates", "Playwright / Cypress", "API Testing"]
}

export function CareersPage() {
  usePageMeta(
    "Careers",
    "Explore current RefactorQ.AI careers themes, open roles, and the engineering culture behind the company.",
  )

  const hasOpenRoles = jobs.length > 0

  return (
    <>
      {/* ─── HERO INTRO HEADER ─── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#070D18] via-[#0B1528] to-[#080E1A] pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-white/[0.08] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-80" />
        <div className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-indigo-500/15 blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 -right-32 h-[420px] w-[420px] rounded-full bg-indigo-500/15 blur-[140px] pointer-events-none" />

        <div className="page-shell relative z-10">

          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-extrabold tracking-tight text-white leading-[1.15]">
              Join a team that values{" "}
              <span className="bg-gradient-to-r from-indigo-300 via-indigo-200 to-white bg-clip-text text-transparent">
                engineering craft, fast learning,
              </span>{" "}
              and direct ownership.
            </h1>

            <p className="mt-5 text-sm sm:text-base lg:text-[17px] text-slate-300 leading-relaxed font-normal max-w-3xl">
              We build production-grade AI systems, high-velocity DevOps pipelines, and deep performance engineering for forward-thinking global enterprises. We work in small, highly autonomous squads with zero corporate red tape.
            </p>

            {/* Culture Signals */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-6 text-xs text-slate-300 font-mono">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                <span>Direct Production Ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Modern Toolchain & AI Stack</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-300" />
                <span>Fast 2-Round Hiring Process</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── OPEN ROLES OR EVERGREEN TALENT NETWORK ─── */}
      <section className="page-shell py-16 sm:py-20 lg:py-24">
        {hasOpenRoles ? (
          <>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="h-[2px] w-5 rounded-full bg-indigo-600" />
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
                    Open Positions
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Featured Opportunities
                </h2>
              </div>
              <p className="text-sm text-slate-500 max-w-md">
                All roles are based in Pune, India, with direct exposure to enterprise client architectures and modern technology stacks.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {jobs.map((job) => {
                const skills = getRoleSkills(job.title)
                return (
                  <Reveal key={job.title}>
                    <article className="group relative flex flex-col justify-between rounded-[28px] sm:rounded-[32px] bg-white border border-slate-200/90 p-7 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_48px_rgba(99,102,241,0.12)] hover:border-indigo-300 hover:-translate-y-1.5 transition-all duration-300 h-full overflow-hidden">
                      <div>
                        {/* Top Header: Icon & Metadata Tag */}
                        <div className="flex items-center justify-between gap-3 mb-6">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:border-indigo-600 group-hover:text-white transition-all duration-300 shadow-2xs">
                            <RoleIcon team={job.team} />
                          </div>

                          <div className="flex items-center gap-1.5 rounded-full bg-slate-50 border border-slate-200/80 px-3 py-1 text-[11px] font-mono font-semibold text-slate-600">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            <span>Full-Time</span>
                          </div>
                        </div>

                        {/* Department Tag & Job Title */}
                        <div className="mb-2">
                          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full inline-block mb-2">
                            {job.team} Practice
                          </span>
                          <h3 className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                            {job.title}
                          </h3>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono mb-4">
                          <svg className="h-3.5 w-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          </svg>
                          <span>{job.location}</span>
                        </div>

                        {/* Summary */}
                        <p className="text-sm leading-relaxed text-slate-600 font-normal mb-6">
                          {job.summary}
                        </p>

                        {/* Skill Chips */}
                        <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-slate-100">
                          {skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-md bg-slate-50 text-slate-700 border border-slate-200/80 px-2.5 py-1 text-[11px] font-mono font-medium group-hover:bg-indigo-50/50 group-hover:text-indigo-900 group-hover:border-indigo-200 transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Card Action Footer */}
                      <a
                        href="https://in.linkedin.com/company/refactorq"
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-center transition-all duration-300 flex items-center justify-between bg-slate-50 text-slate-700 group-hover:bg-indigo-600 group-hover:text-white border border-slate-200/60 group-hover:border-indigo-600"
                      >
                        <span>Apply on LinkedIn</span>
                        <svg
                          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </a>
                    </article>
                  </Reveal>
                )
              })}
            </div>
          </>
        ) : (
          /* ─── EVERGREEN STATE: WHEN NO ROLES ARE CURRENTLY ACTIVE ─── */
          <Reveal>
            <div className="rounded-[32px] sm:rounded-[40px] bg-white border border-slate-200/90 p-8 sm:p-12 lg:p-16 shadow-[0_4px_30px_rgba(0,0,0,0.03)] mb-12">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 border border-indigo-100/90 px-3.5 py-1 text-xs font-mono font-bold text-indigo-700 mb-4">
                  <span className="h-2 w-2 rounded-full bg-indigo-600 animate-pulse" />
                  <span>Always Open For Exceptional Engineering Talent</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Don&apos;t see a specific vacancy? We frequently create roles for standout practitioners.
                </h2>

                <p className="mt-4 text-base text-slate-600 leading-relaxed font-normal">
                  Even when specific openings aren&apos;t listed, we actively hire passionate engineers, architects, and technical leaders across our key practice areas. If you have deep craft in any of the disciplines below, we want to hear from you.
                </p>

                {/* 4 Practice Discipline Cards */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-indigo-200 transition-colors">
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                      AI / ML & Agentic Systems
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      LLM fine-tuning, RAG architectures, autonomous agent workflows, and ML inference optimization.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-indigo-200 transition-colors">
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                      Cloud, DevOps & SRE
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Kubernetes, Terraform, multi-cloud architectures, CI/CD automation, and zero-downtime reliability.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-indigo-200 transition-colors">
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                      Performance & Load Engineering
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      High-throughput stress testing, workload profiling, latency reduction, and capacity diagnostics.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-indigo-200 transition-colors">
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                      Cybersecurity & Cloud Defense
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Threat modeling, DevSecOps pipelines, DPDPA compliance, and cloud posture hardening.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4">
                  <a
                    href={`mailto:${CAREERS_EMAIL}?subject=General Engineering Application - RefactorQ`}
                    className="inline-flex items-center gap-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white px-7 py-3 text-xs font-bold uppercase tracking-wider shadow-md shadow-indigo-600/25 transition-all"
                  >
                    <span>Send Resume / Portfolio</span>
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                  <a
                    href="https://in.linkedin.com/company/refactorq"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 hover:border-slate-400 bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-700 transition-colors"
                  >
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {/* ─── HOW TO APPLY EXECUTIVE APPLICATION GATEWAY ─── */}
        <div className="mt-16 sm:mt-20">
          <Reveal>
            <div className="relative overflow-hidden rounded-[32px] sm:rounded-[40px] bg-[#0B1322] border border-slate-800 p-8 sm:p-12 lg:p-14 text-white shadow-2xl">
              <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-indigo-500/15 blur-[100px] pointer-events-none" />

              <div className="relative z-10 max-w-3xl">
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-indigo-400">
                    Application Process
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  How to Apply & Interview with Us
                </h2>

                <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  We believe in a streamlined, candidate-first interview process. You can apply directly through our official LinkedIn portal or email your resume and portfolio directly to our engineering leadership team.
                </p>

                {/* 3 Step Hiring Flow */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
                  <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                    <span className="font-mono text-xs font-bold text-indigo-400 block mb-1">01 · Application</span>
                    <p className="text-xs text-slate-300">Submit resume via LinkedIn or direct email.</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                    <span className="font-mono text-xs font-bold text-indigo-400 block mb-1">02 · Technical Fit</span>
                    <p className="text-xs text-slate-300">Practical architecture discussion with lead engineers.</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                    <span className="font-mono text-xs font-bold text-emerald-400 block mb-1">03 · Fast Offer</span>
                    <p className="text-xs text-slate-300">Transparent feedback & rapid offer turnaround.</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    className="inline-flex items-center gap-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white px-7 py-3 text-xs font-bold uppercase tracking-wider shadow-lg shadow-indigo-600/30 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
                    href="https://in.linkedin.com/company/refactorq"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span>Apply on LinkedIn</span>
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                  <a
                    className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-white/5 hover:bg-white/10 hover:border-slate-600 text-slate-200 px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-300"
                    href={`mailto:${CAREERS_EMAIL}`}
                  >
                    <span>Email Careers Team</span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
