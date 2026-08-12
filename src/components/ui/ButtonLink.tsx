import { Link } from "react-router-dom"

export function ButtonLink({
  href,
  label,
  variant = "primary",
}: {
  href: string
  label: string
  variant?: "primary" | "secondary" | "ghost"
}) {
  const isExternal =
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")

  let className = "group relative inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-300 active:scale-95 cursor-pointer "

  if (variant === "primary") {
    className +=
      "bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 text-white shadow-[0_0_20px_rgba(249,115,22,0.35)] hover:shadow-[0_0_30px_rgba(249,115,22,0.55)] hover:scale-[1.03] border border-orange-300/30"
  } else if (variant === "secondary") {
    className +=
      "border border-white/20 bg-white/[0.08] text-white hover:bg-white/[0.15] hover:border-white/40 shadow-sm backdrop-blur-md"
  } else {
    className +=
      "border border-slate-300 bg-white text-[var(--ink)] hover:bg-slate-50 hover:border-slate-400 shadow-sm"
  }

  const content = (
    <>
      <span>{label}</span>
      <svg
        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
    </>
  )

  if (isExternal) {
    return (
      <a
        className={className}
        href={href}
        rel="noreferrer"
        target={href.startsWith("http") ? "_blank" : undefined}
      >
        {content}
      </a>
    )
  }

  return (
    <Link className={className} to={href}>
      {content}
    </Link>
  )
}
