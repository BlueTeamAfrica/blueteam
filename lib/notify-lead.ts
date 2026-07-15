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
  leadId?: string
}) {
  const subjectLabel = lead.subject.replace(/-/g, ' ')

  await transporter.sendMail({
    from: `"Blue Team Africa" <${process.env.SMTP_USER}>`,
    to: NOTIFY_TO,
    replyTo: lead.email,
    subject: `New lead: ${lead.name} — ${subjectLabel}`,
    text: [
      `New contact form submission on blueteamafrica.com`,
      ``,
      `Name:     ${lead.name}`,
      `Email:    ${lead.email}`,
      `Phone:    ${lead.phone}`,
      `Subject:  ${subjectLabel}`,
      ``,
      `Message:`,
      lead.message,
      ``,
      `Submitted: ${lead.timestamp}`,
      lead.leadId ? `Firestore ID: ${lead.leadId}` : '',
    ].filter(line => line !== undefined).join('\n'),
  })
}
