import { useParams } from "react-router-dom"

import { blogPosts } from "../data/blogPosts"

import { usePageMeta } from "../lib/meta"

import { PageIntro } from "../components/ui/PageIntro"
import { SectionHeader } from "../components/ui/SectionHeader"

import { NotFoundPage } from "./NotFoundPage"

export function BlogDetailPage() {
  const { slug } = useParams()

  const post = blogPosts.find((entry) => entry.slug === slug)

  if (!post) {
    return <NotFoundPage />
  }

  usePageMeta(post.title, post.summary)

  return (
    <>
      <PageIntro
        body={post.summary}
        eyebrow={post.category}
        title={post.title}
      />
      <section className="page-shell py-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="card">
            <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
              Author
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-[var(--ink)]">
              {post.author}
            </h2>
            <p className="mt-6 text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
              Best for
            </p>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              {post.audience}
            </p>
            <a
              className="button button-primary mt-8"
              href={post.url}
              rel="noreferrer"
              target="_blank"
            >
              Read full article on refactorq.com
            </a>
          </article>
          <div>
            <SectionHeader
              eyebrow="Key takeaways"
              title="Why this article matters for delivery teams."
            />
            <div className="mt-8 grid gap-4">
              {post.takeaways.map((takeaway) => (
                <article className="card" key={takeaway}>
                  <p className="card-copy">{takeaway}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
