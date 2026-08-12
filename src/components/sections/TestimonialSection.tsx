import { testimonials } from "../../data/testimonials"

import { Reveal } from "../ui/Reveal"

export function TestimonialSection() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {testimonials.map((testimonial) => (
        <Reveal
          className="quote-card"
          key={testimonial.name + testimonial.role}
        >
          <span className="quote-mark">&ldquo;</span>
          <p className="quote-body">{testimonial.quote}</p>
          <div className="quote-attribution">
            <span className="quote-avatar">{testimonial.initials}</span>
            <div>
              <p className="quote-name">{testimonial.name}</p>
              <p className="quote-role">{testimonial.role}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
