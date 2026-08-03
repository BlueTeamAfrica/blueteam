import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookies Policy',
  description: 'Cookies Policy for Blue Team Ltd. - Learn how we use cookies and similar technologies on our website.',
}

export default function CookiesPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-4xl font-bold text-blue-800 mb-6">Cookies Policy</h1>
      <p className="text-sm text-gray-500 mb-10">
        Effective date: November 29, 2025
      </p>

      <p>
        This Cookies Policy explains how Blue Team Ltd. uses cookies and similar
        technologies to improve your experience on our website.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">1. What Are Cookies?</h2>
      <p>
        Cookies are small files stored on your device that help websites function,
        remember preferences, and understand usage patterns.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">2. Types of Cookies We Use</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Necessary Cookies:</strong> Required for the website to function.</li>
        <li><strong>Analytics Cookies:</strong> Help us understand how visitors use the site.</li>
        <li><strong>Functional Cookies:</strong> Save user preferences.</li>
        <li><strong>Marketing Cookies:</strong> Used by third parties for tracking and ads.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">3. Third-Party Cookies</h2>
      <p>
        Third-party services such as analytics, cloud hosting, and embedded content
        may set their own cookies.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">4. Managing Cookies</h2>
      <p>
        You can manage or delete cookies in your browser settings. Blocking required
        cookies may impact functionality.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">5. Updates</h2>
      <p>We may update this Cookies Policy from time to time.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">6. Contact Us</h2>
      <p>
        <strong>Blue Team Ltd.</strong><br />
        Email: contact@blueteamafrica.com<br />
        Phone: +250 798 973 375 / +254 119 402 737
      </p>
    </div>
  )
}
