'use client'

import { FormEvent, useState } from 'react'
import { Metadata } from 'next'
import { JsonLd } from '@/components/SEO'
import { generateOrganizationSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch with Blue Team Africa',
  description: 'Contact Blue Team Africa for web design, development, and technology services in Uganda, Kenya, and Rwanda. Get a free quote for your project.',
  keywords: ['contact Blue Team Africa', 'web design contact', 'Uganda', 'Kenya', 'Rwanda'],
  openGraph: {
    title: 'Contact Us - Get in Touch | Blue Team Africa',
    description: 'Contact Blue Team Africa for professional web design and development services.',
  },
}

export default function ContactPage() {
  const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || ''
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const organizationSchema = generateOrganizationSchema(
    'Blue Team Africa',
    'Contact Blue Team Africa for web design, development, and technology services.',
    'https://blueteamafrica.com',
    undefined,
    []
  )

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
    <>
      <JsonLd schema={organizationSchema} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
              <p className="text-gray-700 mb-6">
                Ready to start your project? Contact Blue Team Africa today to discuss your 
                web design, development, or technology needs. We serve businesses across 
                Uganda, Kenya, and Rwanda.
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-gray-600">info@blueteamafrica.com</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Service Areas</h3>
                  <p className="text-gray-600">Uganda, Kenya, Rwanda</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Response Time</h3>
                  <p className="text-gray-600">We typically respond within 24 hours</p>
                </div>
              </div>
            </div>

            <div>
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
            </div>
          </div>

          <div className="mt-12 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Why Contact Us?</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Free consultation and project assessment</li>
              <li>Customized quotes tailored to your needs</li>
              <li>Expert advice on web design and development</li>
              <li>Fast response time and dedicated support</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

