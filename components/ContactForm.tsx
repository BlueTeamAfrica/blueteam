'use client'

import { FormEvent, useState } from 'react'

export default function ContactForm() {
  const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || ''
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!formspreeEndpoint) {
      setErrorMessage('Form endpoint missing. Please set NEXT_PUBLIC_FORMSPREE_ENDPOINT.')
      setStatus('error')
      return
    }

    setIsSubmitting(true)
    setStatus('idle')
    setErrorMessage(null)

    const formData = new FormData(event.currentTarget)
    formData.append('from_site', 'Blue Team Africa Contact Form')

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }

      setStatus('success')
      event.currentTarget.reset()
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
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
        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
          Location
        </label>
        <select
          id="location"
          name="location"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select a location</option>
          <option value="uganda">Uganda</option>
          <option value="kenya">Kenya</option>
          <option value="rwanda">Rwanda</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
          Service Interest
        </label>
        <select
          id="service"
          name="service"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select a service</option>
          <option value="web-design">Web Design</option>
          <option value="web-development">Web Development</option>
          <option value="hosting">Hosting</option>
          <option value="app-development">App Development</option>
          <option value="saas">SaaS Solutions</option>
          <option value="cloud">Cloud Services</option>
          <option value="other">Other</option>
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

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      <div aria-live="polite" className="text-sm">
        {status === 'success' && (
          <p className="text-green-600 font-semibold">Thank you! Your message has been sent.</p>
        )}
        {status === 'error' && (
          <p className="text-red-600 font-semibold">{errorMessage || 'Something went wrong. Please try again.'}</p>
        )}
      </div>

      {!formspreeEndpoint && (
        <p className="text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded-lg p-3">
          Reminder: Set NEXT_PUBLIC_FORMSPREE_ENDPOINT to your Formspree form URL (e.g. https://formspree.io/f/xxxx) to enable submissions.
        </p>
      )}
    </form>
  )
}

