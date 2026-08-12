import { usePageMeta } from "../lib/meta"

import { ButtonLink } from "../components/ui/ButtonLink"

export function NotFoundPage() {
  usePageMeta(
    "Page not found",
    "The requested RefactorQ.AI page could not be found.",
  )

  return (
    <section className="page-shell py-32">
      <div className="card max-w-2xl">
        <span className="eyebrow">404</span>
        <h1 className="section-title">This page does not exist.</h1>
        <p className="section-copy">
          Use the main navigation to return to the homepage or explore services,
          products, case studies, and contact options.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href="/" label="Go home" />
          <ButtonLink
            href="/services"
            label="Browse services"
            variant="secondary"
          />
        </div>
      </div>
    </section>
  )
}
