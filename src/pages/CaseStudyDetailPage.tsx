import { useParams } from "react-router-dom"

import { findCaseStudy } from "../lib/finders"
import { usePageMeta } from "../lib/meta"

import { MediaPlaceholder } from "../components/ui/MediaPlaceholder"
import { PageIntro } from "../components/ui/PageIntro"
import { SectionHeader } from "../components/ui/SectionHeader"

import { NotFoundPage } from "./NotFoundPage"

export function CaseStudyDetailPage() {
  const { slug } = useParams()

  const caseStudy = findCaseStudy(slug)

  if (!caseStudy) {
    return <NotFoundPage />
  }

  usePageMeta(caseStudy.title, caseStudy.summary)

  return (
    <>
      <PageIntro
        body={caseStudy.summary}
        eyebrow={caseStudy.category}
        title={caseStudy.title}
      />

      <section className="page-shell pt-4">
        <MediaPlaceholder label={`Photo — ${caseStudy.client}`} ratio="21/7" />
      </section>

      <section className="page-shell py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="feature-card">
            <span className="eyebrow">Client context</span>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              {caseStudy.client}
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              {caseStudy.metric}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {caseStudy.tags.map((tag) => (
                <span className="tag tag-dark" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            {caseStudy.url ? (
              <a
                className="mt-6 inline-block text-sm font-semibold text-white underline decoration-white/40 underline-offset-4"
                href={caseStudy.url}
                rel="noreferrer"
                target="_blank"
              >
                View original case study
              </a>
            ) : null}
          </div>
          <div>
            <SectionHeader
              eyebrow="Engagement breakdown"
              title="Challenge, approach, and outcomes."
            />
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <article className="card">
                <h3 className="card-title">Challenge</h3>
                <p className="card-copy">{caseStudy.challenge}</p>
              </article>
              <article className="card">
                <h3 className="card-title">Approach</h3>
                <p className="card-copy">{caseStudy.approach}</p>
              </article>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {caseStudy.outcomes.map((outcome) => (
                <article className="card" key={outcome}>
                  <p className="card-copy">{outcome}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
