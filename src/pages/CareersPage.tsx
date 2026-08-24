import { CAREERS_EMAIL } from "../config/site"

import { jobs } from "../data/team"

import { usePageMeta } from "../lib/meta"

import { MediaPlaceholder } from "../components/ui/MediaPlaceholder"
import { PageIntro } from "../components/ui/PageIntro"

export function CareersPage() {
  usePageMeta(
    "Careers",

    "Explore current RefactorQ.AI careers themes, open roles, and the engineering culture behind the company.",
  )

  return (
    <>
      <PageIntro
        body="The careers page carries forward the public hiring themes from the existing site and reframes them with a more premium, engineering-led employer narrative."
        eyebrow="Careers"
        title="Join a team that values engineering craft, fast learning, and direct ownership."
      />

      <section className="page-shell pt-4">
        <MediaPlaceholder
          label="Photo — team at the Dublin or Pune office"
          ratio="21/7"
        />
      </section>

      <section className="page-shell py-24">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {jobs.map((job) => (
            <article className="card relative overflow-hidden group hover:-translate-y-1 transition-all duration-300" key={job.title}>
              {/* Premium Job Badge */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-indigo-100 bg-indigo-50/60 px-3.5 py-1.5 shadow-sm transition-colors group-hover:bg-indigo-50 group-hover:border-indigo-200">
                {job.team === "Engineering" && (
                  <svg className="h-3.5 w-3.5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                  </svg>
                )}
                {job.team === "Security" && (
                  <svg className="h-3.5 w-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.959 11.959 0 0112 2.714z" />
                  </svg>
                )}
                {job.team === "Testing" && (
                  <svg className="h-3.5 w-3.5 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-indigo-900">
                  {job.team}
                </span>
              </div>
              
              <h2 className="card-title mt-6">{job.title}</h2>
              <p className="mt-5 text-[12px] font-semibold uppercase tracking-widest text-slate-500">
                {job.location}
              </p>
              <p className="card-copy mt-5 text-[14px] leading-relaxed text-slate-600">{job.summary}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_30px_80px_rgba(10,18,40,0.08)]">
          <h2 className="text-2xl font-semibold text-[var(--ink)]">
            How to apply
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)]">
            Current public hiring calls-to-action on the live site point
            applicants to LinkedIn. This page keeps that behaviour while giving
            careers a more intentional place in the new site structure.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="button button-primary"
              href="https://in.linkedin.com/company/refactorq"
              rel="noreferrer"
              target="_blank"
            >
              Apply on LinkedIn
            </a>
            <a
              className="button button-secondary"
              href={`mailto:${CAREERS_EMAIL}`}
            >
              Email careers team
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
