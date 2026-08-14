import { useState } from "react"
import { Link } from "react-router-dom"
import type { BlogPost } from "../../types"

const UNIQUE_BLOG_IMAGES: Record<string, string> = {
  // Azure OpenAI & Google Search Recommendation System (AI Neural Network Nodes - Grafana Style)
  "recommendation-system-azure-openai-google-search-integration":
    "/images/blogs/ai-recommendation-grafana.png",

  // Cloud Cost Optimization & FinOps (Grafana Style FinOps Dashboard)
  "best-practices-to-optimize-cloud":
    "/images/blogs/cloud-cost-grafana.png",

  // Performance Engineering & Server Speed (Grafana Style Telemetry Metrics)
  "what-is-performance-engineering":
    "/images/blogs/performance-engineering-grafana.png",

  // Product Management & Roadmap Strategy
  "basics-of-product-management":
    "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",

  // Runtime Threat Mapping for AWS EKS (Grafana Style Cyber Matrix)
  "runtime-threat-mapping-for-eks":
    "/images/blogs/eks-threat-mapping-grafana.png",

  // AWS Security Assessments & Secrets Vault
  "aws-security-assessments":
    "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&q=80",

  // Upgrading AWS EKS Clusters
  "guide-to-upgrading-your-eks":
    "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80",

  // Setup Jenkins Job for Automation Testing
  "setup-jenkins-to-automate":
    "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80",

  // Quality Delivered with Insight & Speed
  "quality-delivered-with-insight-speed":
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",

  // Playwright & Robot Framework Test Automation
  "playwright-and-robot-framework":
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",

  // Engineering Solutions to Cut IT Costs
  "solutions-to-reduce-it-cost":
    "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",

  // CloudGuardian AI Remediation
  "ai-powered-recommendation-with-cloud-guardian":
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",

  // Digital Transformation & Business Strategy
  "digital-transformation-isnt-about-technology-its-about-building-a-better-business":
    "https://images.unsplash.com/photo-1542744801-43245f175232?auto=format&fit=crop&w=800&q=80",
}

function getBlogImage(slug: string): string {
  return (
    UNIQUE_BLOG_IMAGES[slug] ||
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
  )
}

function BlogHeaderVisual({ post }: { post: BlogPost }) {
  const [imageError, setImageError] = useState(false)
  const imageUrl = getBlogImage(post.slug)

  if (imageError || !imageUrl) {
    return (
      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-[28px] bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 flex items-center justify-center p-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:16px_16px]" />
        <div className="relative z-10 text-center flex flex-col items-center">
          <span className="h-10 w-10 rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center mb-2">
            <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25" />
            </svg>
          </span>
          <span className="text-[11px] font-bold text-white tracking-widest uppercase font-mono opacity-90">{post.category}</span>
        </div>
        <span className="absolute top-3.5 left-3.5 z-10 font-mono text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/90 text-slate-900 border border-black/5 shadow-sm backdrop-blur-xs">
          {post.category}
        </span>
      </div>
    )
  }

  return (
    <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-[28px] bg-slate-100">
      <img
        src={imageUrl}
        alt=""
        onError={() => setImageError(true)}
        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-slate-950/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity pointer-events-none" />
      
      {/* Category Tag Overlay */}
      <span className="absolute top-3.5 left-3.5 z-10 font-mono text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/90 text-slate-900 border border-black/5 shadow-sm backdrop-blur-xs">
        {post.category}
      </span>
    </div>
  )
}

export function BlogCard({ post }: { post: BlogPost }) {
  const chips = [
    post.category,
    ...(post.takeaways || []).slice(0, 3),
  ].slice(0, 4)

  return (
    <Link
      to={`/blogs/${post.slug}`}
      className="group relative flex flex-col justify-between overflow-hidden rounded-[28px] bg-white border border-slate-200/80 shadow-xs transition-all duration-300 hover:border-[#5B5FEF] hover:shadow-[0_0_25px_rgba(91,95,239,0.35)] hover:-translate-y-1.5 h-full block"
    >
      <div>
        <BlogHeaderVisual post={post} />

        {/* Card Body */}
        <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
          <div>
            {/* Professional Author & Audience Row */}
            <div className="flex items-center justify-between mb-3 font-medium text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-50 text-[11px] font-bold text-indigo-600 border border-indigo-200/60 shrink-0">
                  {post.author.charAt(0)}
                </span>
                <span className="font-semibold text-slate-800 shrink-0">{post.author}</span>
              </div>

              {/* Hover Arrow Icon */}
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-600 group-hover:bg-[#5B5FEF] group-hover:text-white transition-all duration-300">
                <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold tracking-tight text-slate-900 leading-snug mb-3 transition-colors duration-200 group-hover:text-[#5B5FEF]">
              {post.title}
            </h3>

            {/* Summary */}
            <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-normal mb-4 line-clamp-3">
              {post.summary}
            </p>

            {/* 3-4 Keyword Chips */}
            <div className="flex flex-wrap gap-2 mb-4">
              {chips.map((chip, idx) => (
                <span
                  key={idx}
                  className="rounded-full px-2.5 py-1 text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200/80 group-hover:border-[#5B5FEF]/30 transition-colors"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Read Link */}
      <div className="px-6 sm:px-7 pb-6 pt-3 flex items-center justify-between border-t border-slate-100 text-xs font-bold uppercase tracking-wider text-slate-700 group-hover:text-[#5B5FEF] transition-colors">
        <span>Read article</span>
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-700 group-hover:bg-[#5B5FEF] group-hover:text-white transition-all duration-300">
          <svg
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </div>
    </Link>
  )
}
