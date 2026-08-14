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

  let className = "group relative inline-flex items-center justify-center gap-2 rounded-none px-6 py-3.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 active:scale-95 cursor-pointer "

  if (variant === "primary") {
    className +=
      "bg-indigo-500 text-white hover:bg-indigo-600 border border-indigo-500 shadow-sm"
  } else if (variant === "secondary") {
    className +=
      "border border-white/30 bg-white/10 !text-white hover:bg-white/20 shadow-sm"
  } else {
    className +=
      "border border-slate-300 bg-white !text-slate-900 hover:bg-slate-900 hover:!text-white shadow-sm"
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
