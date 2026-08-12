import { Link } from "react-router-dom"

import { blogPosts } from "../data/blogPosts"
import { caseStudies } from "../data/caseStudies"

import { usePageMeta } from "../lib/meta"

import { ArrowLink } from "../components/ui/ArrowLink"
import { MediaPlaceholder } from "../components/ui/MediaPlaceholder"
import { PageIntro } from "../components/ui/PageIntro"
import { Reveal } from "../components/ui/Reveal"
import { SectionHeader } from "../components/ui/SectionHeader"
import { BlogCard } from "../components/ui/BlogCard"

export function CaseStudiesPage() {
  usePageMeta(
    "Case Studies",

    "Explore case studies from RefactorQ.AI across performance, quality, AI automation, cloud, security, and transformation.",
  )

  return (
    <>
      <PageIntro
        body="These case studies are grounded in publicly available RefactorQ work and restructured to show challenge, approach, and measurable outcomes more clearly."
        eyebrow="Case Studies"
        title="Delivery outcomes across engineering, AI, cloud, and transformation programs."
      />
      <section className="page-shell py-24">
        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <Reveal key={caseStudy.slug}>
              <Link
                className="card card-link media-card flex h-full flex-col"
                to={`/case-studies/${caseStudy.slug}`}
              >
                <MediaPlaceholder label={`Photo — ${caseStudy.client}`} />
                <div className="media-card-body flex flex-1 flex-col">
                  <span className="tag w-fit">{caseStudy.category}</span>
                  <h2 className="card-title mt-4">{caseStudy.title}</h2>
                  <p className="card-copy">{caseStudy.summary}</p>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                    {caseStudy.challenge}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {caseStudy.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-surface">
        <div className="page-shell py-24">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              body="Longer-form writing on the same delivery, AI, cloud, and security themes covered in the case studies above."
              eyebrow="From the blog"
              title="Related reading from the RefactorQ team."
            />
            <ArrowLink href="/blogs" label="View all articles" />
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <Reveal key={post.slug}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
