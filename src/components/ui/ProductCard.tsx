import { Link } from "react-router-dom"
import type { Product } from "../../types"

function ProductIcon({ slug }: { slug: string }) {
  switch (slug) {
    case "leadgen":
      return (
        <svg className="h-5.5 w-5.5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
        </svg>
      )
    case "cloudguardian":
      return (
        <svg className="h-5.5 w-5.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.959 11.959 0 0112 2.714z" />
        </svg>
      )
    case "voice-agent":
      return (
        <svg className="h-5.5 w-5.5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 003-3V4.5a3 3 0 00-6 0v8.25a3 3 0 003 3z" />
        </svg>
      )
    default:
      return (
        <svg className="h-5.5 w-5.5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
      )
  }
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 p-7 backdrop-blur-md shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-500/40 hover:shadow-[0_22px_50px_rgba(249,115,22,0.14)] h-full"
      to={`/products/${product.slug}`}
    >
      {/* Top Edge Ambient Highlight Line */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div>
        {/* Card Header: Dark Obsidian Icon Tile + Status Indicator */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-[#0c1827] via-[#11233b] to-[#0c1827] shadow-md shadow-black/20 transition-all duration-300 group-hover:scale-110 group-hover:border-orange-500/40 group-hover:shadow-lg group-hover:shadow-orange-500/20">
            <ProductIcon slug={product.slug} />
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-emerald-600">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Live Platform
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-5 text-xl font-bold tracking-tight text-[var(--ink)] transition-colors duration-200 group-hover:text-orange-600">
          {product.name}
        </h3>

        {/* Summary */}
        <p className="mt-3 text-sm leading-relaxed text-slate-600 font-normal">
          {product.summary}
        </p>
      </div>

      {/* Action Footer */}
      <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-bold uppercase tracking-wider text-orange-600">
        <span>Explore product page</span>
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
