import express from "express"
import nodemailer from "nodemailer"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()
const distDir = path.join(__dirname, "dist")

app.use(express.json({ limit: "1mb" }))

app.get("/api/health", (_req, res) => {
  res.json({ ok: true })
})

app.post("/api/contact", async (req, res) => {
  const smtpHost = process.env.SMTP_HOST
  const smtpPort = Number(process.env.SMTP_PORT || "587")
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS
  const smtpFrom = process.env.SMTP_FROM || smtpUser
  const contactToEmail = process.env.CONTACT_TO_EMAIL || "info@refactorq.ai"

  if (!smtpHost || !smtpUser || !smtpPass || !smtpFrom) {
    res.status(503).json({ ok: false, error: "SMTP configuration is missing." })
    return
  }

  const { name, email, company, interest, message } = req.body ?? {}

  if (!name || !email || !message) {
    res.status(400).json({ ok: false, error: "Name, email, and message are required." })
    return
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  })

  const text = [
    "New RefactorQ enquiry",
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "Not provided"}`,
    `Interest: ${interest || "Not provided"}`,
    "",
    message,
  ].join("\n")

  const html = `
    <h2>New RefactorQ enquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Company:</strong> ${escapeHtml(company || "Not provided")}</p>
    <p><strong>Interest:</strong> ${escapeHtml(interest || "Not provided")}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
  `

  try {
    await transporter.sendMail({
      to: contactToEmail,
      from: smtpFrom,
      replyTo: email,
      subject: `RefactorQ enquiry: ${interest || "General enquiry"}`,
      text,
      html,
    })

    res.status(200).json({ ok: true })
  } catch (error) {
    console.error("Failed to send contact email", error)
    res.status(500).json({ ok: false, error: "Failed to send email." })
  }
})

app.use(express.static(distDir))

app.get(/.*/, (_req, res) => {
  res.sendFile(path.join(distDir, "index.html"))
})

const port = Number(process.env.APP_PORT || process.env.PORT || "3000")
app.listen(port, () => {
  console.log(`RefactorQ app server listening on port ${port}`)
})

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;")
}
