export function MediaPlaceholder({
  label,
  ratio = "16/10",
  className = "",
}: {
  label: string
  ratio?: string
  className?: string
}) {
  return (
    <div
      aria-hidden="true"
      className={`media-placeholder ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <span className="media-placeholder-icon">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          viewBox="0 0 24 24"
        >
          <rect height="16" rx="2" width="18" x="3" y="4" />
          <circle cx="8.5" cy="9.5" r="1.5" />
          <path d="M21 15l-5-5L5 20" />
        </svg>
      </span>
      <span className="media-placeholder-label">{label}</span>
    </div>
  )
}
