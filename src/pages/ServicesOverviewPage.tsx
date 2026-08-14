import { services } from "../data/services"
import { usePageMeta } from "../lib/meta"
import { PageIntro } from "../components/ui/PageIntro"
import { ServiceCard } from "../components/ui/ServiceCard"

export function ServicesOverviewPage() {
  usePageMeta(
    "Services",

    "Explore RefactorQ.AI services across AI and ML engineering, agentic AI, cloud and SRE, performance, quality, security, and cloud FinOps.",
  )

  return (
    <>
      <PageIntro
        body="A tighter, industry-standard services model. Seven core offers with dedicated detail pages, practical scope, related capabilities, and clear calls to action."
        eyebrow="Services"
        title="Consulting built around the decisions teams are actually making right now."
      />
      <section className="page-shell py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
    </>
  )
}
