import { Link } from "react-router-dom"

import { blogPosts } from "../data/blogPosts"
import { usePageMeta } from "../lib/meta"

import { BlogCard } from "../components/ui/BlogCard"
import { Reveal } from "../components/ui/Reveal"

/* ─────────────────────────────────────────────────────────────
   Bespoke Micro-Icons for Blog Hero
   ───────────────────────────────────────────────────────────── */

function BookOpenIcon() {
  return (
    <svg
      className="h-4 w-4 stroke-indigo-400"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25"
      />
    </svg>
  )
}

export function BlogsPage() {
  usePageMeta(
    "Blogs & Technical Insights",
    "A curated RefactorQ.AI blog listing across AI, cloud, quality, performance, product, and security topics.",
  )

  // Featured Spotlight Post (Top publication)
  const spotlightPost = blogPosts[0]

  return (
    <>
      {/* ─── BESPOKE EDITORIAL SPLIT HERO (STRIPE / SUBSTACK GRADE) ─── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#070D18] via-[#0B1528] to-[#080E1A] pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-white/[0.08] text-white">
        {/* Subtle Tech Blueprint Grid Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-80" />

        {/* Ambient Purple Glow Orbs */}
        <div className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-indigo-500/15 blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 -right-32 h-[420px] w-[420px] rounded-full bg-indigo-600/15 blur-[140px] pointer-events-none" />

        <div className="page-shell relative z-10">
          <div className="grid gap-10 lg:grid-cols-12 items-center">
            {/* Left: Editorial Hero Content */}
            <div className="lg:col-span-7">
              <h1 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-extrabold tracking-tight text-white leading-[1.15]">
                Insights across{" "}
                <span className="bg-gradient-to-r from-indigo-300 via-indigo-200 to-white bg-clip-text text-transparent">
                  AI, cloud, quality,
                </span>{" "}
                product, and security engineering.
              </h1>

              <p className="mt-5 text-sm sm:text-base lg:text-[17px] text-slate-300 leading-relaxed font-normal max-w-2xl">
                Practical engineering patterns, real production post-mortems, and architectural benchmarks published directly by RefactorQ practitioners.
              </p>

              {/* Research Quality Signals */}
              <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-6 text-xs text-slate-300 font-mono">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                  <span>Peer-Reviewed Patterns</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>Real Production Benchmarks</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-300" />
                  <span>Zero-Fluff Technical Depth</span>
                </div>
              </div>
            </div>

            {/* Right: Featured Spotlight Publication Card */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="group relative overflow-hidden rounded-[28px] sm:rounded-[32px] bg-[#0E182A]/90 border border-slate-700/70 p-6 sm:p-8 backdrop-blur-xl shadow-2xl hover:border-indigo-400/80 transition-all duration-300">
                  <div className="absolute -top-16 -right-16 h-44 w-44 rounded-full bg-indigo-500/20 blur-[60px] pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.08]">
                      <div className="flex items-center gap-2">
                        <BookOpenIcon />
                        <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-indigo-400">
                          Featured Publication
                        </span>
                      </div>
                      <span className="font-mono text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                        {spotlightPost.category}
                      </span>
                    </div>

                    {/* Spotlight Title */}
                    <h3 className="text-lg sm:text-xl font-extrabold text-white group-hover:text-indigo-300 transition-colors leading-snug mb-3">
                      <Link to={`/blogs/${spotlightPost.slug}`}>
                        {spotlightPost.title}
                      </Link>
                    </h3>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-5 line-clamp-2">
                      {spotlightPost.summary}
                    </p>

                    {/* Key Takeaways Checklist */}
                    <div className="space-y-1.5 mb-6 pt-3 border-t border-white/[0.06]">
                      {spotlightPost.takeaways?.slice(0, 2).map((takeaway) => (
                        <div key={takeaway} className="flex items-start gap-2 text-xs text-slate-300">
                          <span className="text-indigo-400 font-bold">✓</span>
                          <span className="line-clamp-1">{takeaway}</span>
                        </div>
                      ))}
                    </div>

                    {/* Author & Action Link */}
                    <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <div className="h-7 w-7 rounded-full bg-indigo-600 flex items-center justify-center font-mono font-bold text-white text-[11px] shadow-sm">
                          {spotlightPost.author.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <div>
                          <span className="block text-xs font-bold text-slate-200">
                            {spotlightPost.author}
                          </span>
                          <span className="block text-[10px] font-mono text-slate-400">
                            RefactorQ Engineering
                          </span>
                        </div>
                      </div>

                      <Link
                        to={`/blogs/${spotlightPost.slug}`}
                        className="inline-flex items-center gap-1.5 rounded-full bg-indigo-600 hover:bg-indigo-500 px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-white transition-all shadow-xs"
                      >
                        <span>Read Paper</span>
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MAIN CONTENT: PUBLICATIONS GRID ─── */}
      <section className="page-shell py-14 sm:py-18 lg:py-24">
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
