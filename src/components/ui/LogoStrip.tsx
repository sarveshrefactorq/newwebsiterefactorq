import { clientNames } from "../../data/clients"

import { useReducedMotionPreference } from "../../lib/useReducedMotionPreference"

export function LogoStrip({
  label = "Trusted by teams across industries",
}: {
  label?: string
}) {
  const reducedMotion = useReducedMotionPreference()

  const loopedClients = [...clientNames, ...clientNames]

  return (
    <div className="border-b border-slate-200/80 bg-slate-50/50 py-5 px-4">
      {label ? (
        <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-500 md:text-left">
          {label}
        </p>
      ) : null}
      <div className="logo-strip-mask">
        <div
          className="logo-strip-track flex items-center gap-10"
          style={reducedMotion ? { animation: "none" } : undefined}
        >
          {loopedClients.map((client, index) => (
            <span
              aria-hidden={index >= clientNames.length}
              className="text-sm font-bold tracking-wider text-slate-400 hover:text-slate-900 transition-colors uppercase whitespace-nowrap"
              key={`${client}-${index}`}
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

