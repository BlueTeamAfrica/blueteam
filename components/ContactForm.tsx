'use client'

import { useState, FormEvent, useRef } from 'react'
import { Send, Loader2, CheckCircle2, AlertTriangle, XCircle } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import { Ltr } from '@/components/Ltr'

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  // Honeypot: off-screen and aria-hidden, so only bots (or autofill) fill it. The name has no
  // word autofill matches on (company, website, url, name, email, phone, address)
  bt_hp_x7: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
}

// Phone number formatting helper
const formatPhoneNumber = (value: string): string => {
  // Keep a leading + if the visitor typed one (international format)
  const plus = value.trimStart().startsWith('+') ? '+' : ''
  // Remove all non-digit characters
  const digits = value.replace(/\D/g, '')

  // Format based on length
  if (digits.length <= 3) return plus + digits
  if (digits.length <= 6) return `${plus}${digits.slice(0, 3)} ${digits.slice(3)}`
  if (digits.length <= 9) return `${plus}${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`
  return `${plus}${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6, 9)} ${digits.slice(9, 12)}`
}

// Input sanitization helper
// Preserves spaces and normal characters, only removes HTML tags and control characters
const sanitizeInput = (input: string): string => {
  if (!input || typeof input !== 'string') return ''
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove HTML tags
    .replace(/[\x00-\x09\x0B-\x0C\x0E-\x1F\x7F]/g, '') // Remove control characters but keep space, tab, newline, carriage return
}

export default function ContactForm() {
  const t = useTranslations('ContactPage')
  const locale = useLocale()

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    bt_hp_x7: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  // unconfirmed: the API answered but the lead was neither stored nor emailed
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'unconfirmed' | 'error'>('idle')
  const statusMessageRef = useRef<HTMLDivElement>(null)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Name validation
    const nameTrimmed = formData.name.trim()
    if (!nameTrimmed) {
      newErrors.name = t('validation.nameRequired')
    } else if (nameTrimmed.length < 2) {
      newErrors.name = t('validation.nameTooShort')
    } else if (nameTrimmed.length > 100) {
      newErrors.name = t('validation.nameTooLong')
    }

    // Email validation
    const emailTrimmed = formData.email.trim()
    if (!emailTrimmed) {
      newErrors.email = t('validation.emailRequired')
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrimmed)) {
      newErrors.email = t('validation.emailInvalid')
    } else if (emailTrimmed.length > 255) {
      newErrors.email = t('validation.emailTooLong')
    }

    // Phone validation
    const phoneDigits = formData.phone.replace(/\D/g, '')
    if (!formData.phone.trim()) {
      newErrors.phone = t('validation.phoneRequired')
    } else if (phoneDigits.length < 9) {
      newErrors.phone = t('validation.phoneTooShort')
    } else if (phoneDigits.length > 15) {
      newErrors.phone = t('validation.phoneTooLong')
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = t('validation.subjectRequired')
    }

    // Message validation
    const messageTrimmed = formData.message.trim()
    if (!messageTrimmed) {
      newErrors.message = t('validation.messageRequired')
    } else if (messageTrimmed.length < 10) {
      newErrors.message = t('validation.messageTooShort')
    } else if (messageTrimmed.length > 2000) {
      newErrors.message = t('validation.messageTooLong')
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Sanitize data before submitting
      const sanitizedData = {
        name: sanitizeInput(formData.name),
        email: sanitizeInput(formData.email),
        phone: sanitizeInput(formData.phone),
        subject: sanitizeInput(formData.subject),
        message: sanitizeInput(formData.message),
        bt_hp_x7: formData.bt_hp_x7,
        locale,
      }

      // Submit to API endpoint
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sanitizedData),
      })

      if (response.ok) {
        const data = await response.json()
        // Success only when the lead reached us: stored in Firestore, or at least emailed
        const delivered = data.storage === 'firebase' || data.notified === true
        if (!delivered) {
          // Neither worked: keep what the visitor typed and ask them to reach us directly.
          // This state stays until they submit again
          setSubmitStatus('unconfirmed')
          setErrors({})
          statusMessageRef.current?.focus()
          return
        }
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          bt_hp_x7: '',
        })
        setErrors({})
        // Focus on status message for screen readers
        if (statusMessageRef.current) {
          statusMessageRef.current.focus()
        }
        // GA4 form_submit only on a real success (stored or emailed). A filled honeypot is
        // stored as suspected spam, so it isn't counted as a conversion
        if (!sanitizedData.bt_hp_x7 && typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'form_submit', {
            form_name: 'contact',
            form_subject: sanitizedData.subject,
          })
        }
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        // Try to get error details from response
        let errorMessage = t('form.errorBody')
        try {
          const errorData = await response.json()
          if (errorData.error) {
            errorMessage = errorData.error
          }
          if (errorData.details && Array.isArray(errorData.details)) {
            // If validation errors, show them
            console.error('Validation errors:', errorData.details)
          }
        } catch (parseError) {
          // If response is not JSON, use default message
          console.error('Error parsing error response:', parseError)
        }

        setSubmitStatus('error')
        // Focus on status message for screen readers
        if (statusMessageRef.current) {
          statusMessageRef.current.focus()
        }
        console.error('Form submission failed:', response.status, errorMessage)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      // Focus on status message for screen readers
      if (statusMessageRef.current) {
        statusMessageRef.current.focus()
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    let processedValue = value

    // Format phone number as user types (only for phone field)
    if (name === 'phone') {
      processedValue = formatPhoneNumber(value)
    }
    // Don't sanitize other fields on change - allow normal typing including spaces
    // Sanitization will happen on submit

    setFormData((prev) => ({ ...prev, [name]: processedValue }))
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  // Field styles: 50px inputs, 12px radius; #B23A24 text and border for a field in error
  const label = 'mb-2 block text-[15px] font-semibold text-navy'
  const required = <span className="text-[#B23A24]" aria-label={t('form.required')}>*</span>
  const field = (invalid: boolean) =>
    `w-full rounded-[12px] border bg-white px-4 text-[16px] text-navy placeholder:text-[#4A5868] placeholder:opacity-70 transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
      invalid ? 'border-[#B23A24] focus:border-[#B23A24]' : 'border-[#D5DEE7] focus:border-primary'
    }`
  const fieldError = 'mt-1.5 text-[14px] text-[#B23A24]'

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className={label}>
          {t('form.fullName')} {required}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          autoComplete="name"
          aria-required="true"
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
          maxLength={100}
          className={`${field(!!errors.name)} h-[50px]`}
          placeholder={t('form.fullNamePlaceholder')}
        />
        {errors.name && (
          <p id="name-error" className={fieldError} role="alert">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className={label}>
          {t('form.emailAddress')} {required}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
          aria-required="true"
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
          maxLength={255}
          dir="ltr"
          className={`${field(!!errors.email)} h-[50px] text-left rtl:text-right`}
          placeholder={t('form.emailPlaceholder')}
        />
        {errors.email && (
          <p id="email-error" className={fieldError} role="alert">
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="phone" className={label}>
          {t('form.phoneNumber')} {required}
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          autoComplete="tel"
          aria-required="true"
          aria-invalid={errors.phone ? 'true' : 'false'}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
          maxLength={20}
          className={`${field(!!errors.phone)} h-[50px]`}
          placeholder={t('form.phonePlaceholder')}
        />
        {errors.phone && (
          <p id="phone-error" className={fieldError} role="alert">
            {errors.phone}
          </p>
        )}
      </div>

      {/* Subject Field */}
      <div>
        <label htmlFor="subject" className={label}>
          {t('form.subject')} {required}
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={errors.subject ? 'true' : 'false'}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
          className={`${field(!!errors.subject)} h-[50px]`}
        >
          <option value="">{t('form.subjectPlaceholder')}</option>
          <option value="web-design">{t('form.subjectWebDesign')}</option>
          <option value="website-development">{t('form.subjectWebDev')}</option>
          <option value="cybersecurity">{t('form.subjectCyber')}</option>
          <option value="erp-solutions">{t('form.subjectERP')}</option>
          <option value="crm-systems">{t('form.subjectCRM')}</option>
          <option value="mobile-apps">{t('form.subjectMobile')}</option>
          <option value="hosting">{t('form.subjectHosting')}</option>
          <option value="ngo-support">{t('form.subjectNGO')}</option>
          <option value="other">{t('form.subjectOther')}</option>
        </select>
        {errors.subject && (
          <p id="subject-error" className={fieldError} role="alert">
            {errors.subject}
          </p>
        )}
      </div>

      {/* Message Field: both columns */}
      <div className="sm:col-span-2">
        <label htmlFor="message" className={label}>
          {t('form.message')} {required}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          aria-required="true"
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
          maxLength={2000}
          className={`${field(!!errors.message)} resize-none py-3`}
          placeholder={t('form.messagePlaceholder')}
        />
        <div className="mt-1.5 flex items-center justify-between">
          {errors.message ? (
            <p id="message-error" className="text-[14px] text-[#B23A24]" role="alert">
              {errors.message}
            </p>
          ) : (
            <span className="text-[14px] text-[#4A5868]">
              {t('form.charCount', { count: formData.message.length })}
            </span>
          )}
        </div>
      </div>

      {/* Honeypot: off-screen (not display:none, which some bots skip), out of the tab order
          and hidden from assistive tech. Kept on the inline-start side so it never adds
          scrollable overflow in either direction. Name, id and label avoid every word browser
          autofill matches on, and the data-* flags tell password managers to skip it */}
      <div aria-hidden="true" className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden rtl:left-auto rtl:-right-[9999px]">
        <label htmlFor="bt_hp_x7">Leave blank</label>
        <input
          type="text"
          id="bt_hp_x7"
          name="bt_hp_x7"
          value={formData.bt_hp_x7}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
          data-lpignore="true"
          data-1p-ignore=""
          data-bwignore="true"
          data-form-type="other"
        />
      </div>

      {/* Button row: start-aligned (full width on phones), then the result in its place below */}
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-[12px] bg-primary-strong px-7 font-heading text-[17px] font-bold text-white transition-colors sm:w-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
            isSubmitting ? 'cursor-not-allowed opacity-70' : 'hover:bg-primary-strong-hover'
          }`}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
              {t('form.submitting')}
            </>
          ) : submitStatus === 'success' ? (
            <>
              <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
              {t('form.successTitle')}
            </>
          ) : (
            <>
              <Send className="h-5 w-5 rtl:-scale-x-100" aria-hidden="true" />
              {t('form.submitButton')}
            </>
          )}
        </button>

        {/* Success/Error Messages */}
        <div
          ref={statusMessageRef}
          tabIndex={-1}
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
        >
          {submitStatus === 'success' && t('form.srSuccess')}
          {submitStatus === 'unconfirmed' && t('form.unconfirmedTitle')}
          {submitStatus === 'error' && t('form.srError')}
        </div>

        {submitStatus === 'success' && (
          <StatusBox tone="success" icon={<CheckCircle2 className="h-5 w-5" aria-hidden="true" />} title={t('form.successTitle')}>
            {t('form.successBody')}
          </StatusBox>
        )}

        {submitStatus === 'unconfirmed' && (
          <StatusBox tone="unconfirmed" icon={<AlertTriangle className="h-5 w-5" aria-hidden="true" />} title={t('form.unconfirmedTitle')}>
            {t.rich('form.unconfirmedBody', {
              email: (chunks) => <Ltr>{chunks}</Ltr>,
              // A phone number never breaks across lines
              phone: (chunks) => <span className="whitespace-nowrap"><Ltr>{chunks}</Ltr></span>,
            })}
          </StatusBox>
        )}

        {submitStatus === 'error' && (
          <StatusBox tone="error" icon={<XCircle className="h-5 w-5" aria-hidden="true" />} title={t('form.srError')}>
            {t('form.errorBody')}
          </StatusBox>
        )}
      </div>
    </form>
  )
}

// The three results, in the page's state colours: an icon tile, a bold title, the body
const TONES = {
  success: { box: 'border-[#9ED3B0] bg-[#E9F6EE] text-[#1F6B3A]', tile: 'bg-white text-[#1F6B3A]' },
  unconfirmed: { box: 'border-[#E8B98C] bg-[#FBEFE4] text-[#7A4510]', tile: 'bg-white text-[#7A4510]' },
  error: { box: 'border-[#E7A99C] bg-[#FCEDEA] text-[#8E2A17]', tile: 'bg-white text-[#8E2A17]' },
} as const

function StatusBox({ tone, icon, title, children }: { tone: keyof typeof TONES; icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div role="status" className={`mt-5 flex gap-3 rounded-[16px] border p-4 text-[15px] leading-relaxed ${TONES[tone].box}`}>
      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] ${TONES[tone].tile}`} aria-hidden="true">{icon}</span>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="mt-0.5">{children}</p>
      </div>
    </div>
  )
}
