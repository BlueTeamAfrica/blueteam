import nodemailer from 'nodemailer'

const NOTIFY_TO = 'contact@blueteamafrica.com'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_PORT === '465',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function notifyNewLead(lead: {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  timestamp: string
  locale?: string
  leadId?: string
}, { notSaved = false }: { notSaved?: boolean } = {}) {
  const subjectLabel = lead.subject.replace(/-/g, ' ')
  // A lead Firestore couldn't store exists only in this email: say so in the subject
  const prefix = notSaved ? '[NOT SAVED — Firestore failed] ' : ''

  await transporter.sendMail({
    from: `"Blue Team Africa" <${process.env.SMTP_USER}>`,
    to: NOTIFY_TO,
    replyTo: lead.email,
    subject: `${prefix}New lead: ${lead.name} — ${subjectLabel}`,
    text: [
      `New contact form submission on blueteamafrica.com`,
      ``,
      `Name:     ${lead.name}`,
      `Email:    ${lead.email}`,
      `Phone:    ${lead.phone}`,
      `Subject:  ${subjectLabel}`,
      `Locale:   ${lead.locale ?? 'unknown'}`,
      ``,
      `Message:`,
      lead.message,
      ``,
      `Submitted: ${lead.timestamp}`,
      lead.leadId ? `Firestore ID: ${lead.leadId}` : 'NOT SAVED: Firestore write failed; this email is the only copy',
    ].filter(line => line !== undefined).join('\n'),
  })
}
