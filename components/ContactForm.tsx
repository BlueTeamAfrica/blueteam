'use client'

import { FormEvent, useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'next/navigation'

export default function ContactForm() {
  const searchParams = useSearchParams()
  const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || ''
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)
  
  // Get solution_interest and package from URL params
  const solutionInterest = searchParams?.get('solution_interest') || ''
  const packageType = searchParams?.get('package') || ''

  // Get UTM parameters from URL
  const getUTMParams = () => {
    if (typeof window === 'undefined') return {}
    const params = new URLSearchParams(window.location.search)
    return {
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setIsSubmitting(true)
    setStatus('idle')
    setErrorMessage(null)

    const formData = new FormData(event.currentTarget)
    const utmParams = getUTMParams()
    
    // Prepare data for both Formspree and Firebase
    const formDataObj: Record<string, string> = {
      name: formData.get('name') as string,
      company: (formData.get('company') as string) || '',
      email: formData.get('email') as string,
      phone: (formData.get('phone') as string) || '',
      country: formData.get('country') as string,
      solution_interest: (formData.get('solution_interest') as string) || solutionInterest || '',
      approx_annual_revenue: (formData.get('approx_annual_revenue') as string) || '',
      employees: (formData.get('employees') as string) || '',
      message: formData.get('message') as string,
      preferred_time: (formData.get('preferred_time') as string) || '',
      package: packageType || '',
      from_site: 'Blue Team Africa Contact Form',
      ...utmParams,
    }

    try {
      // Send to both Formspree (for email) and Firebase (for database)
      const promises: Promise<any>[] = []

      // 1. Send to Formspree (if configured) - for email notifications
      if (formspreeEndpoint) {
        const formspreeData = new FormData()
        Object.entries(formDataObj).forEach(([key, value]) => {
          if (value) formspreeData.append(key, value)
        })

        promises.push(
          fetch(formspreeEndpoint, {
            method: 'POST',
            headers: { Accept: 'application/json' },
            body: formspreeData,
          }).catch((error) => {
            console.warn('Formspree submission failed:', error)
            // Don't fail the whole form if Formspree fails
            return { ok: false }
          })
        )
      }

      // 2. Send to Firebase (if configured) - for lead storage
      if (process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
        promises.push(
          fetch('/api/leads', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formDataObj),
          }).catch((error) => {
            console.warn('Firebase submission failed:', error)
            // Don't fail the whole form if Firebase fails
            return { ok: false }
          })
        )
      }

      // Wait for all submissions (at least one should succeed)
      const results = await Promise.allSettled(promises)
      
      // Check if at least one succeeded
      const hasSuccess = results.some((result) => {
        if (result.status === 'fulfilled') {
          const response = result.value
          return response && (response.ok || response.status === 200)
        }
        return false
      })

      if (hasSuccess || promises.length === 0) {
        setStatus('success')
        // Reset form using ref or currentTarget (whichever is available)
        if (formRef.current) {
          formRef.current.reset()
        } else if (event.currentTarget) {
          event.currentTarget.reset()
        }
      } else {
        throw new Error('Failed to submit form. Please try again or contact us directly.')
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
          Country *
        </label>
        <select
          id="country"
          name="country"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select a country</option>
          <option value="uganda">Uganda</option>
          <option value="kenya">Kenya</option>
          <option value="rwanda">Rwanda</option>
          <option value="sudan">Sudan</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="solution_interest" className="block text-sm font-medium text-gray-700 mb-2">
          Solution Interest
        </label>
        <select
          id="solution_interest"
          name="solution_interest"
          defaultValue={solutionInterest}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select a solution</option>
          <option value="T1">T1 - Foundational (Websites & Hosting)</option>
          <option value="T2">T2 - Growth (eCommerce & CRM)</option>
          <option value="T3">T3 - Enterprise (ERP & Cloud)</option>
          <option value="other">Other / Not Sure</option>
        </select>
      </div>

      <div>
        <label htmlFor="approx_annual_revenue" className="block text-sm font-medium text-gray-700 mb-2">
          Approximate Annual Revenue
        </label>
        <select
          id="approx_annual_revenue"
          name="approx_annual_revenue"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select a range</option>
          <option value="under-50k">Under $50,000</option>
          <option value="50k-100k">$50,000 - $100,000</option>
          <option value="100k-500k">$100,000 - $500,000</option>
          <option value="500k-1m">$500,000 - $1M</option>
          <option value="1m-5m">$1M - $5M</option>
          <option value="over-5m">Over $5M</option>
        </select>
      </div>

      <div>
        <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-2">
          Number of Employees
        </label>
        <select
          id="employees"
          name="employees"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select a range</option>
          <option value="1-5">1-5</option>
          <option value="6-20">6-20</option>
          <option value="21-50">21-50</option>
          <option value="51-200">51-200</option>
          <option value="201-500">201-500</option>
          <option value="over-500">Over 500</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        ></textarea>
      </div>

      <div>
        <label htmlFor="preferred_time" className="block text-sm font-medium text-gray-700 mb-2">
          Preferred Contact Time
        </label>
        <select
          id="preferred_time"
          name="preferred_time"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select a time</option>
          <option value="morning">Morning (9 AM - 12 PM)</option>
          <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
          <option value="evening">Evening (5 PM - 8 PM)</option>
          <option value="flexible">Flexible</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Request Audit / Send Inquiry'}
      </button>

      <div aria-live="polite" className="text-sm">
        {status === 'success' && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-green-800 font-semibold mb-2">Thank you! We've received your request.</p>
            <p className="text-green-700 text-sm">
              Expect an email with a short checklist and a link to schedule your 30-minute audit within 24 hours.
            </p>
          </div>
        )}
        {status === 'error' && (
          <p className="text-red-600 font-semibold">{errorMessage || 'Something went wrong. Please try again.'}</p>
        )}
      </div>

      {!formspreeEndpoint && !process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID && (
        <p className="text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded-lg p-3">
          <strong>Setup Required:</strong> Configure either Formspree (for email) or Firebase (for database storage) to enable form submissions.
        </p>
      )}
    </form>
  )
}
