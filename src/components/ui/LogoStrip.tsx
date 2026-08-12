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
    <div>
      {label ? (
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)] md:text-left">
          {label}
        </p>
      ) : null}
      <div className="logo-strip-mask">
        <div
          className="logo-strip-track"
          style={reducedMotion ? { animation: "none" } : undefined}
        >
          {loopedClients.map((client, index) => (
            <span
              aria-hidden={index >= clientNames.length}
              className="logo-chip"
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
