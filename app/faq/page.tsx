import FAQSection from '@/components/FAQSection'
import FAQSchema from '@/components/FAQSchema'

export const metadata = {
  title: 'Frequently Asked Questions',
  description: 'Common questions about our services, pricing, and processes.',
}

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      {/* JSON-LD Schema */}
      <FAQSchema />

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Common questions about our services, pricing, and processes
          </p>
        </div>
      </section>

      {/* FAQ Section - Shows All FAQs */}
      <FAQSection showAll={true} showCTA={true} title="" description="" />
    </div>
  )
}

