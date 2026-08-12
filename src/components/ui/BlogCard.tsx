import { Link } from "react-router-dom"
import type { BlogPost } from "../../types"

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 p-7 backdrop-blur-md shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-500/40 hover:shadow-[0_22px_50px_rgba(249,115,22,0.14)] h-full block"
      to={`/blogs/${post.slug}`}
    >
      {/* Top Edge Ambient Highlight Line */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div>
        {/* Category Pill Tag */}
        <div className="flex items-center justify-between">
          <span className="inline-block rounded-full border border-orange-500/25 bg-orange-500/[0.08] px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-orange-600 shadow-2xs">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-4 text-xl font-bold tracking-tight text-[var(--ink)] transition-colors duration-200 group-hover:text-orange-600">
          {post.title}
        </h3>

        {/* Summary */}
        <p className="mt-3 text-sm leading-relaxed text-slate-600 font-normal">
          {post.summary}
        </p>
      </div>

      {/* Action Footer */}
      <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-bold uppercase tracking-wider text-orange-600">
        <span>Read article</span>
        <svg
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </div>
    </Link>
  )
}
