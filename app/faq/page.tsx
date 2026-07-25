import FAQSection from '@/components/FAQSection'
import FAQSchema from '@/components/FAQSchema'
import InteriorPageLayout from '@/components/InteriorPageLayout'

export const metadata = {
  title: 'Frequently Asked Questions',
  description: 'Common questions about our services, pricing, and processes.',
  alternates: { canonical: 'https://www.blueteamafrica.com/faq' },
}

export default function FAQPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <FAQSchema />
      
      <InteriorPageLayout
        title="Frequently Asked Questions"
        subtitle="Common questions about our services, pricing, and processes"
      >
        {/* FAQ Section - Shows All FAQs */}
        <FAQSection showAll={true} showCTA={true} title="" description="" />
      </InteriorPageLayout>
    </>
  )
}

