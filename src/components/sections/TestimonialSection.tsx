import { testimonials } from "../../data/testimonials"
import { Reveal } from "../ui/Reveal"

/* ─────────────────────────────────────────────────────────────
   Engagement domain metadata for each testimonial
   ───────────────────────────────────────────────────────────── */
const TESTIMONIAL_METADATA = [
  { domain: "Healthcare SaaS Platform" },
  { domain: "Pan-India Support Ops" },
  { domain: "Enterprise EdTech Provider" },
]

export function TestimonialSection() {
  return (
    <div className="grid gap-6 md:grid-cols-2 items-stretch">
      {testimonials.map((testimonial, idx) => {
        const meta = TESTIMONIAL_METADATA[idx] || {
          domain: "Enterprise Technology",
        }

        return (
          <Reveal
            key={testimonial.name + testimonial.role}
            className="h-full"
          >
            <article className="group h-full flex flex-col justify-between rounded-[28px] sm:rounded-[32px] bg-white border border-slate-200/90 p-7 sm:p-9 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_48px_rgba(99,102,241,0.1)] hover:border-indigo-300 hover:-translate-y-1.5 transition-all duration-300">
              <div>
                {/* Top Row: Domain Tag */}
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-100">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 border border-indigo-100/90 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-indigo-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                    {meta.domain}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-[15px] leading-relaxed text-slate-700 font-normal mb-8 relative">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>

              {/* Author & Verification Footer */}
              <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-gradient-to-br from-indigo-600 to-indigo-700 text-white font-mono text-xs font-bold flex items-center justify-center shadow-xs">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug">
                      {testimonial.name}
                    </h4>
                    <p className="text-[11px] font-mono text-slate-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        )
      })}
    </div>
  )
}
