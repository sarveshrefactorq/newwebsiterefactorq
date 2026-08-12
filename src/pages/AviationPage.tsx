import { Link } from "react-router-dom"

import { aviationFocusAreas } from "../data/home"

import { findService } from "../lib/finders"
import { usePageMeta } from "../lib/meta"

import { AviationFocusCard } from "../components/ui/AviationFocusCard"
import { PageIntro } from "../components/ui/PageIntro"
import { SectionHeader } from "../components/ui/SectionHeader"
import { ServiceCard } from "../components/ui/ServiceCard"

export function AviationPage() {
  usePageMeta(
    "Aviation Consulting",
    "Aviation-focused consulting from RefactorQ.AI spanning agentic operations, performance, cloud security, and transformation work.",
  )

  return (
    <>
      <PageIntro
        body="Aviation remains a standalone navigation item, but the positioning is tightened around practical digital transformation, AI, platform reliability, and regulated operations."
        eyebrow="Aviation Consulting"
        title="Aviation consulting for systems that need precision, resilience, and operational clarity."
      />
      <section className="page-shell py-14 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {aviationFocusAreas.map((area, index) => (
            <AviationFocusCard area={area} index={index} key={area.title} />
          ))}
        </div>
      </section>
      <section className="section-surface">
        <div className="page-shell py-20">
          <SectionHeader
            body="The most relevant cross-links from the main services model for aviation buyers."
            eyebrow="Related services"
            title="Aviation does not sit apart from the main capability engine."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              "agentic-ai-automation",
              "cloud-devops-sre-engineering",
              "performance-engineering",
              "security-engineering",
            ].map((slug) => {
              const service = findService(slug)

              if (!service) {
                return null
              }

              return <ServiceCard key={service.slug} service={service} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}
