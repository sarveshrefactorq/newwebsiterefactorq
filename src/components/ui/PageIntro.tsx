import type { ReactNode } from "react"

export function PageIntro({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string
  title: ReactNode
  body: ReactNode
}) {
  return (
    <section
      className="relative overflow-hidden border-b border-slate-200/60 pt-14 pb-16 lg:pt-20 lg:pb-20"
      style={{ background: "#FAFBFD" }}
    >
      {/* Faint blueprint grid, concentrated top-right — echoes the homepage hero */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(125% 105% at 100% 0%, #000 32%, transparent 76%)",
          WebkitMaskImage:
            "radial-gradient(125% 105% at 100% 0%, #000 32%, transparent 76%)",
        }}
      />

      {/* Ambient indigo glows */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full blur-[110px]"
          style={{
            top: "-18%",
            right: "4%",
            width: "420px",
            height: "420px",
            background: "radial-gradient(circle, rgba(79,70,229,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute rounded-full blur-[100px]"
          style={{
            bottom: "-12%",
            left: "0%",
            width: "360px",
            height: "360px",
            background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="page-shell relative z-10">
        <div className="max-w-3xl space-y-4">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight tracking-tight text-[#0F172A]">
            {title}
          </h1>
          <p className="max-w-2xl text-sm sm:text-base leading-relaxed font-normal text-slate-600">
            {body}
          </p>
        </div>
      </div>
    </section>
  )
}
