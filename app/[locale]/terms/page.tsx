import type { Metadata } from 'next'
import { buildAlternates } from '@/lib/metadata-helpers'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return {
    title: 'Terms of Service',
    description: 'Terms of Service for Blue Team Ltd. - Learn about the terms and conditions for using our website and services.',
    alternates: buildAlternates('/terms', locale),
  }
}

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-4xl font-bold text-blue-800 mb-6">Terms of Service</h1>
      <p className="text-sm text-gray-500 mb-10">
        Effective date: November 29, 2025
      </p>

      <p>
        These Terms of Service govern your use of the Blue Team Ltd. website and
        any services offered by us.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">1. Accepting These Terms</h2>
      <p>
        By accessing or using our website or services, you agree to these Terms.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">2. Services</h2>
      <p>
        We provide digital and technical services including web development,
        cloud setups, SEO, digital solutions, consulting, and support. Details
        for client projects are defined in project-specific contracts.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">3. Quotes & Payments</h2>
      <p>
        Quotes provided through our website, email, WhatsApp, or phone are estimates.
        Payment terms, scope, and deliverables are defined in written agreements.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">4. Intellectual Property</h2>
      <p>
        Unless stated otherwise, Blue Team Ltd. retains rights to its code,
        templates, tools, and internal processes. Final deliverables become
        yours after full payment, according to your project contract.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">5. Liability</h2>
      <p>
        Our services are provided "as-is". We are not responsible for indirect,
        incidental, or consequential damages. Maximum liability is limited to
        the amount paid for the project in the last 12 months.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">6. Termination</h2>
      <p>
        Either party may terminate service agreements as stated in the agreement.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">7. Changes to These Terms</h2>
      <p>
        We may update these Terms. Continued use means you accept the updated version.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">8. Contact Us</h2>
      <p>
        <strong>Blue Team Ltd.</strong><br />
        Email: contact@blueteamafrica.com<br />
        Phone: +250 798 973 375 / +254 119 402 737
      </p>
    </div>
  )
}
