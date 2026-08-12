import { Link, useParams } from "react-router-dom"

import { findCaseStudy, findService } from "../lib/finders"
import { usePageMeta } from "../lib/meta"

import { ButtonLink } from "../components/ui/ButtonLink"
import { MediaPlaceholder } from "../components/ui/MediaPlaceholder"
import { PageIntro } from "../components/ui/PageIntro"
import { SectionHeader } from "../components/ui/SectionHeader"

import { NotFoundPage } from "./NotFoundPage"

export function ServiceDetailPage() {
  const { slug } = useParams()

  const service = findService(slug)

  if (!service) {
    return <NotFoundPage />
  }

  const caseStudy = findCaseStudy(service.caseStudySlug)

  usePageMeta(service.title, service.summary)

  return (
    <>
      <PageIntro
        body={service.summary}
        eyebrow="Service detail"
        title={service.title}
      />

      <section className="page-shell pt-4">
        <MediaPlaceholder
          label={`Photo — ${service.shortTitle} engagement`}
          ratio="21/7"
        />
      </section>

      <section className="page-shell py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeader eyebrow="Overview" title={service.tagline} />
            <p className="section-copy mt-6">{service.summary}</p>
          </div>
          <div className="feature-card">
            <span className="eyebrow">Call to action</span>
            <h3 className="card-title mt-4 text-white">{service.cta}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              We can scope a focused discussion around your current systems,
              delivery flow, and where the highest-value improvement sits.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/contact" label={service.cta} />
              <ButtonLink
                href="/case-studies"
                label="View relevant case studies"
                variant="secondary"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-surface">
        <div className="page-shell py-20">
          <SectionHeader
            eyebrow="What's included"
            title="The core workstreams inside this service line."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {service.includes.map((item) => (
              <article className="card" key={item}>
                <h3 className="card-title">{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell py-20">
        <SectionHeader
          eyebrow="Approach"
          title="A delivery sequence designed to move from assessment to measurable outcome."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {service.approach.map((step, index) => (
            <article className="feature-card" key={step}>
              <span className="stat-label">0{index + 1}</span>
              <p className="mt-4 text-sm leading-7 text-slate-300">{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-dark">
        <div className="page-shell py-20">
          <SectionHeader
            eyebrow="Tools and platforms"
            title="Typical technologies involved in this service."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {service.tools.map((tool) => (
              <span className="tag tag-dark" key={tool}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {caseStudy ? (
        <section className="page-shell py-20">
          <SectionHeader
            eyebrow="Case study"
            title={caseStudy.title}
            body={caseStudy.summary}
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="feature-card">
              <span className="eyebrow">Outcome signal</span>
              <p className="mt-4 text-2xl font-semibold text-white">
                {caseStudy.metric}
              </p>
              <div className="mt-6">
                <ButtonLink
                  href={`/case-studies/${caseStudy.slug}`}
                  label="Open case study"
                  variant="secondary"
                />
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {caseStudy.outcomes.map((outcome) => (
                <article className="card" key={outcome}>
                  <p className="card-copy">{outcome}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-surface">
        <div className="page-shell py-20">
          <SectionHeader
            eyebrow="FAQ"
            title="Questions teams often ask before starting."
          />
          <div className="mt-10 space-y-4">
            {service.faq.map((item) => (
              <details className="faq-item" key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell py-20">
        <SectionHeader
          eyebrow="Related services"
          title="Cross-links into adjacent capabilities."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {service.related.map((relatedSlug) => {
            const relatedService = findService(relatedSlug)

            if (!relatedService) {
              return null
            }

            return (
              <Link
                className="card card-link"
                key={relatedService.slug}
                to={`/services/${relatedService.slug}`}
              >
                <span className="tag">Related</span>
                <h3 className="card-title mt-4">{relatedService.title}</h3>
                <p className="card-copy">{relatedService.summary}</p>
              </Link>
            )
          })}
        </div>
      </section>
    </>
  )
}
