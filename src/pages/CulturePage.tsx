import { cultureImages, leadership, teamHighlights } from "../data/team"

import { usePageMeta } from "../lib/meta"

import { PageIntro } from "../components/ui/PageIntro"
import { SectionHeader } from "../components/ui/SectionHeader"

export function CulturePage() {
  usePageMeta(
    "Culture",

    "Meet the RefactorQ.AI team, leadership, and culture through public team and culture references from the current live site.",
  )

  return (
    <>
      <PageIntro
        body="The culture story is reframed around how the team works: engineering accountability, fast learning, AI adoption inside the company, and a collaborative delivery model across Dublin and Pune."
        eyebrow="Culture"
        title="A culture built around shipping responsibly, learning quickly, and staying close to the work."
      />

      <section className="page-shell py-20">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["60+ years", "Combined leadership experience"],

            ["25+", "Team members"],

            ["2021", "Established"],
          ].map(([value, label]) => (
            <article className="card" key={label}>
              <p className="text-3xl font-semibold text-[var(--ink)]">
                {value}
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
                {label}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-surface">
        <div className="page-shell py-20">
          <SectionHeader
            body="The current site talks about collaboration and creativity. The stronger version is more specific: small-team accountability, practical learning, direct access to leadership, and willingness to adopt AI tools internally before prescribing them to clients."
            eyebrow="How the team works"
            title="The operating culture is people-centric, but it is not soft-edged."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              [
                "Engineer-led ownership",
                "The people making recommendations stay close enough to implementation to feel the trade-offs.",
              ],

              [
                "AI adoption with discipline",
                "Internal experimentation matters, but so do review loops, practical controls, and measurable usefulness.",
              ],

              [
                "Cross-office delivery",
                "Dublin and Pune operate as one delivery system rather than a sales office and a remote execution arm.",
              ],

              [
                "Learning as an operating habit",
                "Teams are expected to sharpen craft, challenge assumptions, and improve the working system continuously.",
              ],
            ].map(([title, body]) => (
              <article className="card" key={title}>
                <h3 className="card-title">{title}</h3>
                <p className="card-copy">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell py-20">
        <SectionHeader
          eyebrow="Leadership"
          title="Leadership and mentors from the current public team page."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {leadership.map((member) => (
            <article className="team-card" key={member.name}>
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
          ))}
        </div>
      </section>

      <section className="section-dark">
        <div className="page-shell py-20">
          <SectionHeader
            eyebrow="Culture gallery"
            title="Current culture imagery reused from refactorq.com while the new brand system is rolled out."
          />
          <div className="culture-grid mt-10">
            {cultureImages.map((image, index) => (
              <img
                alt={`RefactorQ culture ${index + 1}`}
                className="culture-image"
                key={image}
                src={image}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell py-20">
        <SectionHeader
          eyebrow="Team snapshot"
          title="A few examples from the wider team listed on the current public site."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {teamHighlights.map((member) => (
            <article className="team-card" key={member.name}>
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
          ))}
        </div>
      </section>
    </>
  )
}
