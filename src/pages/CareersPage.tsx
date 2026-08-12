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
            <article className="card" key={job.title}>
              <span className="tag">{job.team}</span>
              <h2 className="card-title mt-4">{job.title}</h2>
              <p className="mt-3 text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
                {job.location}
              </p>
              <p className="card-copy">{job.summary}</p>
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
