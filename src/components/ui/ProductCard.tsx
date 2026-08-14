import { Link } from "react-router-dom"
import type { Product } from "../../types"

function Product3DGraphic({ slug }: { slug: string }) {
  switch (slug) {
    case "leadgen":
      // Purple / Violet Isometric Stacked Glass Plates with Bar Chart (Matches Bottom-Left Card in Reference Image)
      return (
        <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-b from-indigo-500/5 via-indigo-500/10 to-indigo-600/5 overflow-hidden">
          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
          
          {/* Glowing Backlight */}
          <div className="absolute w-32 h-32 rounded-full bg-indigo-500/20 blur-2xl pointer-events-none" />

          {/* 3D Stacked Isometric Glass Layers SVG */}
          <svg className="relative w-36 h-36 drop-shadow-xl transition-transform duration-500 group-hover:scale-110" viewBox="0 0 200 200" fill="none">
            <defs>
              <linearGradient id="purpleGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a5b4fc" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="purpleGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c7d2fe" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#818cf8" stopOpacity="0.95" />
              </linearGradient>
              <linearGradient id="purpleGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#a5b4fc" stopOpacity="1" />
              </linearGradient>
              <filter id="purpleGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Bottom Glass Layer */}
            <path d="M100 135 L150 110 L100 85 L50 110 Z" fill="url(#purpleGrad1)" opacity="0.6" />
            <path d="M50 110 L100 135 L100 143 L50 118 Z" fill="#4338ca" opacity="0.7" />
            <path d="M150 110 L100 135 L100 143 L150 118 Z" fill="#3730a3" opacity="0.8" />

            {/* Middle Glass Layer */}
            <path d="M100 115 L150 90 L100 65 L50 90 Z" fill="url(#purpleGrad2)" opacity="0.85" />
            <path d="M50 90 L100 115 L100 122 L50 97 Z" fill="#4f46e5" opacity="0.8" />
            <path d="M150 90 L100 115 L100 122 L150 97 Z" fill="#4338ca" opacity="0.9" />

            {/* Top Glass Layer with Glowing Bar Chart */}
            <g transform="translate(0, -10)">
              <path d="M100 95 L150 70 L100 45 L50 70 Z" fill="url(#purpleGrad3)" filter="url(#purpleGlow)" />
              <path d="M50 70 L100 95 L100 101 L50 76 Z" fill="#818cf8" opacity="0.9" />
              <path d="M150 70 L100 95 L100 101 L150 76 Z" fill="#6366f1" opacity="0.95" />

              {/* Glowing White Bar Chart Graphic */}
              <g transform="translate(72, 56) rotate(-26) scale(0.7)">
                <rect x="5" y="25" width="8" height="15" rx="2" fill="#3730a3" />
                <rect x="18" y="15" width="8" height="25" rx="2" fill="#4f46e5" />
                <rect x="31" y="5" width="8" height="35" rx="2" fill="#312e81" />
              </g>
            </g>
          </svg>
        </div>
      )

    case "cloudguardian":
      // Emerald / Green 3D Glass Security Shield & Matrix Binary Stream (Matches Bottom-Middle Card in Reference Image)
      return (
        <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-b from-indigo-500/5 via-indigo-500/10 to-indigo-600/5 overflow-hidden">
          {/* Subtle Faint Binary Pattern */}
          <div className="absolute inset-0 flex items-center justify-center font-mono text-[9px] text-indigo-500/20 select-none pointer-events-none leading-none overflow-hidden tracking-tighter">
            0100110101011001010110100101<br/>
            1010100110100101001101010011<br/>
            0011010100101101001010101100<br/>
            1101001010110100101010100101<br/>
          </div>

          {/* Glowing Backlight */}
          <div className="absolute w-32 h-32 rounded-full bg-indigo-500/20 blur-2xl pointer-events-none" />

          {/* 3D Isometric Glass Shield Graphic SVG */}
          <svg className="relative w-36 h-36 drop-shadow-xl transition-transform duration-500 group-hover:scale-110" viewBox="0 0 200 200" fill="none">
            <defs>
              <linearGradient id="emeraldGlass" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a5b4fc" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#6366f1" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.95" />
              </linearGradient>
              <linearGradient id="emeraldHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#c7d2fe" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* Base Isometric Shadow Plate */}
            <path d="M100 145 L155 118 L100 90 L45 118 Z" fill="#3730a3" opacity="0.3" />

            {/* Main 3D Floating Glass Plate */}
            <path d="M100 135 L155 108 L100 80 L45 108 Z" fill="url(#emeraldGlass)" />
            <path d="M45 108 L100 135 L100 142 L45 115 Z" fill="#4f46e5" />
            <path d="M155 108 L100 135 L100 142 L155 115 Z" fill="#4338ca" />

            {/* Top Gloss Highlight Edge */}
            <path d="M100 80 L155 108 L100 85 L45 108 Z" fill="url(#emeraldHighlight)" />

            {/* Shield Checkmark Icon Emblem inside Plate */}
            <g transform="translate(74, 76)">
              {/* Outer Shield Circle */}
              <circle cx="26" cy="26" r="22" fill="#ffffff" opacity="0.9" />
              <path d="M26 12 C18 12 14 16 14 24 C14 34 26 40 26 40 C26 40 38 34 38 24 C38 16 34 12 26 12 Z" fill="#4f46e5" />
              {/* Checkmark */}
              <path d="M21 24 L25 28 L32 20" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </g>
          </svg>
        </div>
      )

    case "voice-agent":
    default:
      // Electric Cyan / Blue 3D Glowing Orb & Perspective Light Beams (Matches Top-Left & Top-Right Cards in Reference Image)
      return (
        <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-b from-indigo-500/5 via-indigo-500/10 to-indigo-600/5 overflow-hidden">
          {/* Vertical Light Rays */}
          <div className="absolute inset-0 flex justify-around opacity-25 pointer-events-none">
            <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-indigo-400 to-transparent" />
            <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-indigo-400 to-transparent" />
            <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-indigo-400 to-transparent" />
          </div>

          {/* Perspective Floor Grid */}
          <div className="absolute bottom-0 inset-x-0 h-16 bg-[linear-gradient(to_right,#4f46e522_1px,transparent_1px),linear-gradient(to_bottom,#4f46e522_1px,transparent_1px)] bg-[size:14px_14px] [transform:perspective(150px)_rotateX(60deg)] origin-bottom" />

          {/* Glowing Blue Backlight */}
          <div className="absolute w-32 h-32 rounded-full bg-indigo-500/25 blur-2xl pointer-events-none" />

          {/* Glossy 3D Glowing Blue Orb/Sphere SVG */}
          <svg className="relative w-36 h-36 drop-shadow-xl transition-transform duration-500 group-hover:scale-110" viewBox="0 0 200 200" fill="none">
            <defs>
              <radialGradient id="blueOrb" cx="35%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#e0e7ff" />
                <stop offset="25%" stopColor="#818cf8" />
                <stop offset="65%" stopColor="#4f46e5" />
                <stop offset="100%" stopColor="#4338ca" />
              </radialGradient>
              <linearGradient id="orbRing" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a5b4fc" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* Concentric Halo Radar Rings */}
            <circle cx="100" cy="100" r="68" stroke="url(#orbRing)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
            <circle cx="100" cy="100" r="54" stroke="url(#orbRing)" strokeWidth="1.5" opacity="0.7" />

            {/* Glossy 3D Sphere */}
            <circle cx="100" cy="100" r="42" fill="url(#blueOrb)" />

            {/* White Curved Gloss Highlight */}
            <path d="M72 80 A 30 30 0 0 1 118 64 A 36 36 0 0 0 72 80 Z" fill="#ffffff" opacity="0.7" />

            {/* Soundwave Lightning Voice Icon inside Orb */}
            <g transform="translate(86, 85) scale(1.2)">
              <path stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" d="M12 3v18M6 8v8M18 8v8M2 11v2M22 11v2" />
            </g>
          </svg>
        </div>
      )
  }
}

function ProductIcon({ slug }: { slug: string }) {
  const iconClass = "h-5 w-5 stroke-current transition-transform duration-300 group-hover:scale-110"
  switch (slug) {
    case "leadgen":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      )
    case "cloudguardian":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.959 11.959 0 0112 2.714z" />
        </svg>
      )
    case "voice-agent":
    default:
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 003-3V4.5a3 3 0 00-6 0v8.25a3 3 0 003 3z" />
        </svg>
      )
  }
}

export function ProductCard({ product, dark }: { product: Product; dark?: boolean }) {
  const chips = (product.capabilities && product.capabilities.length >= 3 ? product.capabilities : product.highlights || []).slice(0, 4)

  return (
    <Link
      to={`/products/${product.slug}`}
      className={`group relative flex flex-col justify-between rounded-[28px] p-6 sm:p-7 shadow-xs border transition-all duration-300 hover:border-[#5B5FEF] hover:shadow-[0_0_25px_rgba(91,95,239,0.35)] hover:-translate-y-1.5 h-full overflow-hidden ${
        dark
          ? "bg-[#0e1622] border-white/10 text-white"
          : "bg-white border-slate-200/80 text-slate-900"
      }`}
    >
      <div>
        {/* Top Header: Left Product Icon & Right Hover Arrow */}
        <div className="flex items-center justify-between mb-5">
          <div className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${
            dark
              ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/30"
              : "bg-indigo-50 text-indigo-600 border-indigo-200/60"
          }`}>
            <ProductIcon slug={product.slug} />
          </div>

          <div className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${
            dark
              ? "bg-white/10 text-slate-300 group-hover:bg-[#5B5FEF] group-hover:text-white"
              : "bg-slate-100 text-slate-600 group-hover:bg-[#5B5FEF] group-hover:text-white"
          }`}>
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h3 className={`text-lg sm:text-xl font-bold leading-snug tracking-tight mb-2 transition-colors duration-200 ${
          dark ? "text-white group-hover:text-[#5B5FEF]" : "text-slate-900 group-hover:text-[#5B5FEF]"
        }`}>
          {product.name}
        </h3>

        {/* Summary Copy (Content Unchanged) */}
        <p className={`text-xs sm:text-sm leading-relaxed font-normal mb-5 ${
          dark ? "text-slate-300" : "text-slate-600"
        }`}>
          {product.summary}
        </p>

        {/* 3-4 Keyword Chips */}
        <div className="flex flex-wrap gap-2 mb-4">
          {chips.map((chip) => (
            <span
              key={chip}
              className={`rounded-full px-2.5 py-1 text-[11px] font-semibold border transition-colors ${
                dark
                  ? "bg-white/5 text-slate-300 border-white/10 group-hover:border-[#5B5FEF]/30"
                  : "bg-slate-100 text-slate-700 border-slate-200/80 group-hover:border-[#5B5FEF]/30"
              }`}
            >
              {chip}
            </span>
          ))}
        </div>
      </div>

      {/* 3D Glossy Graphic Artwork Feature Box */}
      <div className={`w-full h-40 sm:h-44 relative flex items-center justify-center rounded-2xl overflow-hidden shadow-inner my-3 ${
        dark ? "bg-[#090e17] border border-white/10" : "bg-slate-50/60 border border-slate-100/90"
      }`}>
        <Product3DGraphic slug={product.slug} />
      </div>

      {/* Category Pill Badge at Bottom + Hover Arrow Action */}
      <div className={`mt-2 py-2 px-3 rounded-xl flex items-center justify-between text-xs font-medium transition-all duration-300 ${
        dark
          ? "bg-white/5 text-slate-300 group-hover:bg-[#5B5FEF] group-hover:text-white"
          : "bg-slate-100/90 text-slate-700 group-hover:bg-[#5B5FEF] group-hover:text-white"
      }`}>
        <span>Learn product details</span>
        <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </div>
    </Link>
  )
}

