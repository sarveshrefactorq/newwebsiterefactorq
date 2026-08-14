export function SectionHeader({
  eyebrow,
  title,
  body,
  dark = false,
}: {
  eyebrow: string
  title: string
  body?: string
  dark?: boolean
}) {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-3 mb-2">
        <span className="h-[2px] w-6 bg-indigo-500" />
        <span className={`text-[11px] font-bold uppercase tracking-[0.2em] ${dark ? "text-indigo-400" : "text-indigo-600"}`}>
          {eyebrow}
        </span>
      </div>
      <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight leading-tight ${dark ? "text-white" : "text-slate-900"}`}>
        {title}
      </h2>
      {body ? (
        <p className={`mt-3 text-sm sm:text-base leading-relaxed font-normal ${dark ? "text-neutral-300" : "text-slate-600"}`}>
          {body}
        </p>
      ) : null}
    </div>
  )
}

