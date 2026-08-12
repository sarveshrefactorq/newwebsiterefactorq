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

      <section className="page-shell py-8">
        <div className="grid gap-5 lg:grid-cols-2">
          <Reveal>
            <article className="card h-full">
              <span className="eyebrow">Mission</span>
              <h2 className="card-title mt-4">
                Practical execution over transformation language.
              </h2>
              <p className="card-copy">
                Bring together AI systems thinking and practical engineering
                execution so clients can modernise operations, improve delivery,
                and build more capable products without buying into empty
                transformation language.
              </p>
            </article>
          </Reveal>
          <Reveal>
            <article className="card h-full">
              <span className="eyebrow">Footprint</span>
              <h2 className="card-title mt-4">
                A two-office delivery system, not a sales-and-outsource split.
              </h2>
              <p className="card-copy">
                Dublin supports European market presence and leadership
                visibility. Pune anchors engineering, quality, product, cloud,
                and operational delivery. Both function as one delivery system.
              </p>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section-dark">
        <div className="page-shell py-20">
          <StatBand stats={companyStats} />
        </div>
      </section>

      <section className="page-shell py-24">
        <SectionHeader
          body="The existing site emphasises quick response, delivery rigour, and hands-on capability. This version turns those ideas into a more premium and specific narrative."
          eyebrow="Why choose RefactorQ"
          title="Practical advantages, not generic consulting claims."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            [
              "Performance-driven delivery",
              "We focus on throughput, latency, release confidence, and operating leverage rather than abstract transformation language.",
            ],
            [
              "Fast response, small-firm accountability",
              "Leadership visibility and responsive execution are part of the operating model, not a sales promise.",
            ],
            [
              "Professional range without platform sprawl",
              "The offering is broad enough to solve the adjacent problem, but consolidated enough to stay coherent for buyers.",
            ],
          ].map(([title, body]) => (
            <Reveal key={title}>
              <article className="card h-full">
                <h3 className="card-title">{title}</h3>
                <p className="card-copy">{body}</p>
              </article>
            </Reveal>
          ))}
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
              <article className="team-card">
                <img
                  alt={member.name}
                  className="team-image"
                  src={member.image}
                />
                <h3 className="card-title mt-5">{member.name}</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
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
