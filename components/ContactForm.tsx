'use client'

import { useState, FormEvent, useRef } from 'react'
import { Send, Loader2, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
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
  // Remove all non-digit characters
  const digits = value.replace(/\D/g, '')

  // Format based on length
  if (digits.length <= 3) return digits
  if (digits.length <= 6) return `${digits.slice(0, 3)} ${digits.slice(3)}`
  if (digits.length <= 9) return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`
  return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6, 9)} ${digits.slice(9, 12)}`
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

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
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
      newErrors.name = 'Name must be less than 100 characters'
    }

    // Email validation
    const emailTrimmed = formData.email.trim()
    if (!emailTrimmed) {
      newErrors.email = t('validation.emailRequired')
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrimmed)) {
      newErrors.email = t('validation.emailInvalid')
    } else if (emailTrimmed.length > 255) {
      newErrors.email = 'Email must be less than 255 characters'
    }

    // Phone validation
    const phoneDigits = formData.phone.replace(/\D/g, '')
    if (!formData.phone.trim()) {
      newErrors.phone = t('validation.phoneRequired')
    } else if (phoneDigits.length < 9) {
      newErrors.phone = 'Phone number must be at least 9 digits'
    } else if (phoneDigits.length > 15) {
      newErrors.phone = 'Phone number must be less than 15 digits'
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
      newErrors.message = 'Message must be less than 2000 characters'
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
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        })
        setErrors({})
        // Focus on status message for screen readers
        if (statusMessageRef.current) {
          statusMessageRef.current.focus()
        }
        // Fire GA4 form_submit only when the lead actually reached Firestore.
        // storage: 'degraded' means the write failed silently — don't count as a conversion.
        if (data.storage !== 'degraded' && typeof window !== 'undefined' && window.gtag) {
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

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
          {t('form.fullName')} <span className="text-red-500" aria-label="required">*</span>
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
          className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition ${
            errors.name ? 'border-red-500' : 'border-gray-300 focus:border-primary'
          }`}
          placeholder={t('form.fullNamePlaceholder')}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-500" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
          {t('form.emailAddress')} <span className="text-red-500" aria-label="required">*</span>
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
          className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition ${
            errors.email ? 'border-red-500' : 'border-gray-300 focus:border-primary'
          }`}
          placeholder={t('form.emailPlaceholder')}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-500" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
          {t('form.phoneNumber')} <span className="text-red-500" aria-label="required">*</span>
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
          className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition ${
            errors.phone ? 'border-red-500' : 'border-gray-300 focus:border-primary'
          }`}
          placeholder={t('form.phonePlaceholder')}
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1 text-sm text-red-500" role="alert">
            {errors.phone}
          </p>
        )}
      </div>

      {/* Subject Field */}
      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
          {t('form.subject')} <span className="text-red-500" aria-label="required">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={errors.subject ? 'true' : 'false'}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
          className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition ${
            errors.subject ? 'border-red-500' : 'border-gray-300 focus:border-primary'
          }`}
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
          <p id="subject-error" className="mt-1 text-sm text-red-500" role="alert">
            {errors.subject}
          </p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
          {t('form.message')} <span className="text-red-500" aria-label="required">*</span>
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
          className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition resize-none ${
            errors.message ? 'border-red-500' : 'border-gray-300 focus:border-primary'
          }`}
          placeholder={t('form.messagePlaceholder')}
        />
        <div className="mt-1 flex justify-between items-center">
          {errors.message ? (
            <p id="message-error" className="text-sm text-red-500" role="alert">
              {errors.message}
            </p>
          ) : (
            <span className="text-sm text-gray-500">
              {formData.message.length}/2000 characters
            </span>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition shadow-lg hover:shadow-xl ${
          isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-dark'
        }`}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            {t('form.submitting')}
          </>
        ) : submitStatus === 'success' ? (
          <>
            <CheckCircle2 className="w-5 h-5" />
            {t('form.successTitle')}
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            {t('form.submitButton')}
          </>
        )}
      </motion.button>

      {/* Success/Error Messages */}
      <div
        ref={statusMessageRef}
        tabIndex={-1}
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {submitStatus === 'success' && 'Form submitted successfully'}
        {submitStatus === 'error' && 'Form submission failed'}
      </div>

      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          role="alert"
          aria-live="polite"
          className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm"
        >
          {t('form.successBody')}
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          role="alert"
          aria-live="assertive"
          className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm"
        >
          {t('form.errorBody')}
        </motion.div>
      )}
    </motion.form>
  )
}
