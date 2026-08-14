export function StatBand({
  stats,
}: {
  stats: Array<{ value: string; label: string }>
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {stats.map((stat) => (
        <div
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 text-center backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-indigo-500/40 hover:bg-white/[0.08] hover:-translate-y-1"
          key={stat.label}
        >
          <div className="absolute -top-12 -left-12 h-24 w-24 rounded-full bg-indigo-500/10 blur-xl group-hover:bg-indigo-500/20 transition-all pointer-events-none" />
          <p className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-indigo-400 bg-clip-text text-transparent group-hover:from-indigo-400 group-hover:to-indigo-300 transition-all">
            {stat.value}
          </p>
          <p className="mt-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-300">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  )
}
