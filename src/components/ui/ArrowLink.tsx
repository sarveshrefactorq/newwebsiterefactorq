import { Link } from "react-router-dom"

export function ArrowLink({ href, label }: { href: string; label: string }) {
  const isExternal =
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")

  const content = (
    <>
      {label}
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14" />
        <path d="M13 6l6 6-6 6" />
      </svg>
    </>
  )

  if (isExternal) {
    return (
      <a
        className="link-arrow"
        href={href}
        rel="noreferrer"
        target={href.startsWith("http") ? "_blank" : undefined}
      >
        {content}
      </a>
    )
  }

  return (
    <Link className="link-arrow" to={href}>
      {content}
    </Link>
  )
}
