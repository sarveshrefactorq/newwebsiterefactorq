import { useParams } from "react-router-dom"

import { BOOKING_URL } from "../config/site"

import { findProduct } from "../lib/finders"
import { usePageMeta } from "../lib/meta"

import { ButtonLink } from "../components/ui/ButtonLink"
import { MediaPlaceholder } from "../components/ui/MediaPlaceholder"
import { PageIntro } from "../components/ui/PageIntro"
import { SectionHeader } from "../components/ui/SectionHeader"

import { NotFoundPage } from "./NotFoundPage"

export function ProductDetailPage() {
  const { slug } = useParams()

  const product = findProduct(slug)

  if (!product) {
    return <NotFoundPage />
  }

  usePageMeta(product.name, product.summary)

  return (
    <>
      <PageIntro
        body={product.summary}
        eyebrow="Product detail"
        title={product.name}
      />
      <section className="page-shell py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="What it solves"
              title={product.tagline}
              body={product.problem}
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {product.capabilities.map((item) => (
                <article className="card" key={item}>
                  <h3 className="card-title">{item}</h3>
                </article>
              ))}
            </div>
          </div>
          <div className="feature-card">
            <span className="eyebrow">Request a demo</span>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              {product.name}
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              {product.detail}
            </p>
            <div className="mt-6">
              <MediaPlaceholder
                label={`Screenshot — ${product.name} product walkthrough`}
                ratio="16/10"
              />
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href={BOOKING_URL} label={product.cta} />
              <ButtonLink
                href="/services"
                label="See related consulting"
                variant="secondary"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-surface">
        <div className="page-shell py-20">
          <SectionHeader
            eyebrow="Core highlights"
            title="The operating signals this product is built around."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {product.highlights.map((item) => (
              <span className="tag" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {product.workflow ? (
        <section className="page-shell py-20">
          <SectionHeader
            eyebrow="Workflow"
            title="How the product moves work from intent to action."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {product.workflow.map((item, index) => (
              <article className="card" key={item}>
                <p className="stat-label">0{index + 1}</p>
                <p className="card-copy mt-4">{item}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {product.outcomes ? (
        <section className="section-dark">
          <div className="page-shell py-20">
            <SectionHeader
              eyebrow="Business outcomes"
              title="What a focused pilot or rollout is meant to improve."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {product.outcomes.map((item) => (
                <article className="dark-card" key={item}>
                  <p className="text-sm leading-7 text-slate-300">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-surface">
        <div className="page-shell py-20">
          <SectionHeader
            eyebrow="Who it's for"
            title="Teams that need this product because the workflow is already painful."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {product.audience.map((item) => (
              <span className="tag" key={item}>
                {item}
              </span>
            ))}
          </div>
          {product.integrations ? (
            <>
              <SectionHeader
                eyebrow="Integrations"
                title="Systems this product is designed to work with."
              />
              <div className="mt-8 flex flex-wrap gap-3">
                {product.integrations.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </>
          ) : null}
        </div>
      </section>
    </>
  )
}
