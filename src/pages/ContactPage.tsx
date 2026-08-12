import { useState } from "react"
import type { FormEvent } from "react"

import { BOOKING_URL, CONTACT_EMAIL } from "../config/site"

import { usePageMeta } from "../lib/meta"

import { ButtonLink } from "../components/ui/ButtonLink"
import { MediaPlaceholder } from "../components/ui/MediaPlaceholder"
import { PageIntro } from "../components/ui/PageIntro"

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const [submitting, setSubmitting] = useState(false)

  const [error, setError] = useState("")

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    interest: "AI consulting",
    message: "",
  })

  usePageMeta(
    "Contact",
    "Book a consultation or request a product demo with RefactorQ.AI.",
  )

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setSubmitting(true)

    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",

        headers: { "Content-Type": "application/json" },

        body: JSON.stringify(form),
      })

      if (!response.ok) {
        throw new Error("Failed to send enquiry")
      }

      setSubmitted(true)

      setForm({
        name: "",
        email: "",
        company: "",
        interest: "AI consulting",
        message: "",
      })
    } catch (submissionError) {
      setError(
        "We could not send your enquiry right now. You can still book directly or email us.",
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <PageIntro
        body="Whether the first conversation is about AI opportunity mapping, delivery bottlenecks, cloud cost control, or a product demo, the goal is the same: get specific quickly."
        eyebrow="Contact"
        title="Book a consultation or request a product demo."
      />
      <section className="page-shell py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="card">
            {submitted ? (
              <div>
                <span className="eyebrow">Submitted</span>
                <h2 className="card-title mt-4">
                  Thanks. We will follow up shortly.
                </h2>
                <p className="card-copy">
                  Your enquiry has been passed to the RefactorQ team email
                  workflow.
                </p>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="field-group">
                    <span>Name</span>
                    <input
                      className="field"
                      name="name"
                      onChange={(event) =>
                        setForm({ ...form, name: event.target.value })
                      }
                      required
                      type="text"
                      value={form.name}
                    />
                  </label>
                  <label className="field-group">
                    <span>Email</span>
                    <input
                      className="field"
                      name="email"
                      onChange={(event) =>
                        setForm({ ...form, email: event.target.value })
                      }
                      required
                      type="email"
                      value={form.email}
                    />
                  </label>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="field-group">
                    <span>Company</span>
                    <input
                      className="field"
                      name="company"
                      onChange={(event) =>
                        setForm({ ...form, company: event.target.value })
                      }
                      type="text"
                      value={form.company}
                    />
                  </label>
                  <label className="field-group">
                    <span>Interest</span>
                    <select
                      className="field"
                      name="interest"
                      onChange={(event) =>
                        setForm({ ...form, interest: event.target.value })
                      }
                      value={form.interest}
                    >
                      <option>AI consulting</option>
                      <option>Service enquiry</option>
                      <option>Product demo</option>
                      <option>Aviation</option>
                    </select>
                  </label>
                </div>
                <label className="field-group">
                  <span>Message</span>
                  <textarea
                    className="field min-h-40"
                    name="message"
                    onChange={(event) =>
                      setForm({ ...form, message: event.target.value })
                    }
                    placeholder="Tell us where you need leverage, clarity, or execution support."
                    value={form.message}
                  />
                </label>
                {error ? (
                  <p className="text-sm leading-7 text-red-600">{error}</p>
                ) : null}
                <button className="button button-primary" type="submit">
                  {submitting ? "Sending..." : "Send enquiry"}
                </button>
              </form>
            )}
          </div>

          <div className="feature-card">
            <MediaPlaceholder
              label="Photo — Dublin or Pune office"
              ratio="16/10"
            />
            <span className="eyebrow mt-6 inline-block">Direct contact</span>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              Talk to the team
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
              <p>{CONTACT_EMAIL}</p>
              <p>Ireland office: 405 Central Park, Dublin, Ireland</p>
              <p>India office: Marvel Fuego, Magarpatta Road, Hadapsar, Pune</p>
              <p>Average response time: 2 minutes</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href={BOOKING_URL} label="Book meeting" />
              <ButtonLink
                href={`mailto:${CONTACT_EMAIL}`}
                label="Email directly"
                variant="secondary"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
