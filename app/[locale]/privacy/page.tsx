import type { Metadata } from 'next'
import { buildAlternates } from '@/lib/metadata-helpers'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return {
    title: 'Privacy Policy',
    description: 'Privacy Policy for Blue Team Ltd. - Learn how we collect, use, and protect your personal information.',
    alternates: buildAlternates('/privacy', locale),
  }
}

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-4xl font-bold text-blue-800 mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-10">
        Effective date: November 29, 2025
      </p>

      <p>
        Blue Team Ltd. operates the website{" "}
        <a href="https://www.blueteamafrica.com" className="text-blue-600 underline">
          https://www.blueteamafrica.com
        </a>. This Privacy Policy explains how we collect, use, and protect
        personal information when you visit our website or use our services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
      <p><strong>Information you provide:</strong> When you contact us, request a quote,
      send a message, or interact with forms on our website.</p>

      <p className="mt-4"><strong>Automatically collected:</strong> IP address, browser type,
      device information, pages visited, and analytics data collected through cookies.</p>

      <p className="mt-4"><strong>Third-party sources:</strong> Service providers such as
      analytics, hosting, and CRM tools.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">2. How We Use Your Information</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>To operate and improve our website and services.</li>
        <li>To respond to inquiries and provide quotes.</li>
        <li>To analyze usage through analytics tools.</li>
        <li>To send updates or marketing messages (where legally permitted).</li>
        <li>To comply with legal obligations.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">3. Cookies</h2>
      <p>
        We use cookies to improve functionality and understand visitor usage.
        See our <a href="/cookies" className="text-blue-600 underline">Cookies Policy</a>.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">4. Sharing Information</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>Trusted service providers (hosting, analytics, cloud services).</li>
        <li>When required by law or legal process.</li>
        <li>To prevent fraud or protect our rights.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">5. Your Rights</h2>
      <p>You may request access, correction, or deletion of your personal data by contacting us.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">6. Data Retention</h2>
      <p>We retain information only as long as necessary for operations and compliance.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">7. Contact Us</h2>
      <p>If you have questions about this Privacy Policy, contact:</p>
      <p className="mt-3">
        <strong>Blue Team Ltd.</strong><br />
        Email: contact@blueteamafrica.com<br />
        Phone: +250 798 973 375 / +254 119 402 737
      </p>
    </div>
  )
}
