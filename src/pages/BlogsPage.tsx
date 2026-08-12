import { blogPosts } from "../data/blogPosts"
import { usePageMeta } from "../lib/meta"

import { BlogCard } from "../components/ui/BlogCard"
import { PageIntro } from "../components/ui/PageIntro"
import { Reveal } from "../components/ui/Reveal"

export function BlogsPage() {
  usePageMeta(
    "Blogs",
    "A curated RefactorQ.AI blog listing across AI, cloud, quality, performance, product, and security topics.",
  )

  return (
    <>
      <PageIntro
        body="This section curates public RefactorQ content and adds topic summaries so visitors can browse by relevance before opening the full article."
        eyebrow="Blogs"
        title="Insights across AI, cloud, quality, product, and security engineering."
      />
      <section className="page-shell py-14 lg:py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Reveal key={post.slug}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
