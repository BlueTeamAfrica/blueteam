import FAQSection from '@/components/FAQSection'
import FAQSchema from '@/components/FAQSchema'
import InteriorPageLayout from '@/components/InteriorPageLayout'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const base = 'https://www.blueteamafrica.com'
  const lp = locale === 'en' ? '' : `/${locale}`
  return {
    title: 'Frequently Asked Questions',
    description: 'Common questions about our services, pricing, and processes.',
    alternates: { canonical: `${base}${lp}/faq` },
  }
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

