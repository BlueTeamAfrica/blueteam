import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, ArrowRight } from 'lucide-react'
import InteriorHeader from '@/components/InteriorHeader'
import SectionWrapper from '@/components/SectionWrapper'
import ServiceSidebar from '@/components/ServiceSidebar'

import type { Metadata } from 'next'
import { metadataWebDesign } from '@/lib/service-metadata'
import ServiceSchema from '@/components/ServiceSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import FAQSection from '@/components/FAQSection'
import type { FAQ } from '@/lib/faqs'
import { getTranslations } from 'next-intl/server'

const webDesignFAQs: FAQ[] = [
  {
    question: 'What types of websites do you design?',
    answer: 'We design corporate and marketing websites, NGO and humanitarian organization sites, landing pages, portfolio sites, and content-heavy informational sites. For businesses that need e-commerce functionality, that is handled through our dedicated e-commerce service, which integrates directly with web design.',
  },
  {
    question: 'How much does a website design project cost?',
    answer: 'Pricing depends on the number of pages, design complexity, and whether custom features like animations or e-commerce are needed. We provide a detailed, no-obligation quote after a short discovery call — reach out via WhatsApp or our contact form for pricing specific to your project.',
  },
  {
    question: 'Is the website SEO-ready from day one?',
    answer: 'Yes. SEO fundamentals are built into every project: semantic HTML structure, meta titles and descriptions, canonical URLs, structured data (JSON-LD), performance-optimized images, and mobile-responsive layouts. We also configure your sitemap and robots.txt correctly on delivery.',
  },
  {
    question: 'How is your web design different from a website builder like Wix or Squarespace?',
    answer: 'Builder platforms lock you into their infrastructure and impose limits on performance, custom code, and ownership. We build on frameworks like Next.js, giving you a fully custom codebase you own, faster load times, and the flexibility to scale. We also handle hosting separately so you are not tied to one vendor.',
  },
  {
    question: 'Do you design websites for NGOs operating in East Africa?',
    answer: 'We have significant experience with NGOs across Sudan, Uganda, Kenya, and Rwanda, including humanitarian organizations with multilingual needs, donor-facing reporting pages, and strict data-handling requirements. We understand what these organizations need and can work within NGO budget realities.',
  },
  {
    question: 'What happens after launch — do you offer maintenance?',
    answer: 'We offer maintenance and support plans that cover security updates, content changes, performance monitoring, and technical fixes. For organizations that want ongoing hosting alongside maintenance, we bundle both through our hosting and maintenance services.',
  },
]

function WebDesignFAQSchema() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: webDesignFAQs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const lp = locale === 'en' ? '' : `/${locale}`
  const canonical = `https://www.blueteamafrica.com${lp}/services/web-design`
  return {
    ...metadataWebDesign,
    alternates: { canonical },
  }
}

export default async function WebDesignPage() {
  const t = await getTranslations('WebDesignPage')

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.blueteamafrica.com/' },
        { name: 'Services', url: 'https://www.blueteamafrica.com/services' },
        { name: 'Professional Web Design Services', url: 'https://www.blueteamafrica.com/services/web-design' },
      ]} />
      <WebDesignFAQSchema />
      <ServiceSchema serviceName="Web Design" serviceSlug="web-design" />
      <InteriorHeader
        title={t('title')}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Web Design' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="hidden lg:block lg:w-1/4 flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              <ServiceSidebar />
            </div>
          </aside>

          <div className="lg:w-3/4 flex-grow">
            {/* Hero Image */}
            <section className="mb-12">
              <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/services/web-design/services-webdesign-web-design-hero-01.webp"
                  alt="Professional Web Design Services"
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>
            </section>

            {/* Intro Text Section */}
            <SectionWrapper bgColor="white">
              <div className="max-w-3xl mx-auto px-6">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  {t('intro')}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  For businesses in Rwanda looking for local web design expertise, visit our{' '}
                  <Link href="/web-design-rwanda" className="text-primary hover:text-primary-dark hover:underline">
                    professional web design services in Rwanda
                  </Link>{' '}
                  page.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Not sure which type of website your organization needs? Read our guide on{' '}
                  <Link href="/blog/how-to-choose-the-right-website-for-your-ngo" className="text-primary hover:text-primary-dark hover:underline">
                    how to choose the right website for your NGO
                  </Link>{' '}
                  — it covers the questions to ask before you brief an agency.
                </p>
              </div>
            </SectionWrapper>

            {/* 3 Value Pillars */}
            <SectionWrapper bgColor="light">
              <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('responsiveDesign')}</h3>
                    <p className="text-gray-600">
                      {t('responsiveDesignBody')}
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('fastPerformance')}</h3>
                    <p className="text-gray-600">
                      {t('fastPerformanceBody')}
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('seoReady')}</h3>
                    <p className="text-gray-600">
                      {t('seoReadyBody')}
                    </p>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* Types of Websites We Build */}
            <SectionWrapper bgColor="white">
              <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">
                  {t('customDesign')}
                </h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('customDesignBody')}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      The primary digital presence for a business — structured to communicate what you do,
                      who you serve, and why a prospect should contact you. We build sites that move visitors
                      toward a clear next action: a quote request, a call, or a form submission. These range
                      from focused 5-page service sites to 30+ page enterprise presences with multiple
                      departments and audiences.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('secureHosting')}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We have built digital platforms for NGOs operating across Sudan, Uganda, Kenya, and
                      Rwanda — organizations with specific requirements: donor-facing impact pages,
                      multilingual content, grant reporting transparency, and strict data-handling standards.
                      An NGO site often needs to speak to three audiences simultaneously: field partners,
                      institutional donors, and the public. We design for that complexity rather than
                      flattening it.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('secureHostingBody')}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      A single-purpose page built around one conversion goal — a service inquiry, a campaign
                      sign-up, an event registration. We design landing pages that strip out distraction and
                      guide the visitor toward the one action that matters, with clear hierarchy, social proof,
                      and a fast path to contact.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('cmsIntegration')}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      For agencies, consultancies, and professional services firms that lead with their track
                      record. We structure these to let the work speak — clean presentation, fast image
                      loading, and a project narrative that builds trust before a prospect ever fills in a form.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('cmsIntegrationBody')}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Organizations that need to publish depth — program guides, resource libraries, policy
                      documents, training materials. We build these with a content architecture that scales:
                      structured navigation, search-friendly page structure, and layouts that make long-form
                      content readable on any screen.
                    </p>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* Technology Stack */}
            <SectionWrapper bgColor="light">
              <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                  {t('servicesTitle')}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  We build on <strong>Next.js</strong> and <strong>React</strong>, deployed on globally
                  distributed infrastructure. That choice is deliberate, and it has direct consequences for
                  how your site performs and who owns it.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Load Speed That Matters in the Field</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Next.js renders pages server-side and pre-generates static content where possible,
                      meaning your homepage loads as fast as a file retrieval rather than a computation on
                      request. On East African mobile connections where latency is real, this difference is
                      measurable. We pair this with image optimization, lazy loading, and CDN delivery.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">SEO Built Into the Structure</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Search engines read HTML, not JavaScript. Builder platforms and many WordPress setups
                      serve JavaScript-rendered pages that crawlers struggle with. Our builds are
                      server-rendered by default: the content search engines need is in the initial response,
                      every time — not dependent on a crawler executing scripts.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">No Vendor Lock-In</h3>
                    <p className="text-gray-700 leading-relaxed">
                      When your site is built on Wix, Squarespace, or a managed WordPress service, you are
                      renting space in someone else&apos;s system. You cannot export the code, cannot move the
                      infrastructure, and cannot change the economics. We hand over a full codebase — in a
                      standard open-source framework — that you own outright and can host anywhere.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Maintainable After Handover</h3>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Tailwind CSS</strong> handles styling with a utility-first approach that makes
                      the site consistent and fast to iterate on without fighting a theme system. The
                      component-based architecture means every repeating element is built once and reused —
                      so changes propagate correctly and the codebase stays clean as it grows.
                    </p>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* Delivery Process */}
            <SectionWrapper bgColor="white">
              <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">
                  {t('corporateSites')}
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('corporateSitesBody')}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We start by understanding your organization, your users, and your goals — not with a
                      generic brief template, but with targeted questions about what success looks like and
                      what currently is not working. We audit any existing site, review comparator sites in
                      your sector, and establish the information architecture before touching design.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('ngoWebsites')}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Wireframes come before visuals. We establish layout, hierarchy, and content flow in
                      low-fidelity first so that feedback is about structure and decisions — not colour
                      choices. Once wireframes are signed off, we apply your visual identity to produce
                      high-fidelity mockups for each key page type.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('ngoWebsitesBody')}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We build in Next.js/React with a component-based approach: every repeating element is
                      built once and reused, so changes propagate consistently and the codebase stays
                      maintainable. SEO metadata, structured data (JSON-LD), sitemap, and canonical URLs are
                      configured as part of the build — not added at the end.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('ecommerceSites')}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Before delivery: cross-browser testing (Chrome, Firefox, Safari, Edge), mobile testing
                      at multiple screen sizes including low-end Android devices common in East Africa,
                      Lighthouse performance audits targeting 90+ scores, and accessibility checks. We also
                      test on a throttled connection to simulate variable-bandwidth conditions — not just
                      fast broadband.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('ecommerceSitesBody')}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We manage DNS cutover, SSL provisioning, and the go-live checklist. Handover includes
                      a documented site structure, credentials inventory, and a short recorded walkthrough so
                      your team understands what they have. If a CMS is in scope, we include content editing
                      training. The full codebase is delivered to your repository.
                    </p>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* Industries We Serve */}
            <SectionWrapper bgColor="light">
              <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">
                  {t('portfolioSites')}
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('portfolioSitesBody')}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      NGOs operating in Sudan, Uganda, Kenya, and Rwanda represent a significant part of our
                      client base. We understand the reporting cadences, donor communication requirements,
                      and the need to present complex program work clearly to non-specialist audiences.
                      We have built platforms for humanitarian organizations managing field operations,
                      grant portfolios, and multi-partner programs.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('rwandaTitle')}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Early-stage companies that need a professional presence fast, without paying enterprise
                      prices or inheriting technical debt. We scope tightly for launch, build for future
                      expansion, and hand over something maintainable — not a template site that will need
                      rebuilding in 18 months.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('rwandaBody')}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Law firms, consulting practices, accountancies, healthcare providers. Organizations
                      where trust is the product and the website is the first signal of credibility. We
                      design for authority and clarity — not flash — and structure content so a first-time
                      visitor understands the practice and its expertise within seconds.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('industriesTitle')}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Schools, universities, and vocational training providers that need to communicate
                      programs clearly to multiple audiences — students, parents, donors, and partners. We
                      build sites that handle content volume without becoming confusing, and that work on
                      devices and connections typical of the regions they serve.
                    </p>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* See Our Work */}
            <SectionWrapper bgColor="white">
              <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">
                  See Our Work
                </h2>
                <div className="space-y-6 mb-8">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      <Link href="/portfolio/ngo-portal" className="text-primary hover:text-primary-dark hover:underline">
                        NGO Management Portal →
                      </Link>
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      An offline-first web portal built for a regional NGO operating across East Africa.
                      The platform manages beneficiary data, program tracking, and donor reporting — with
                      role-based access for field staff and headquarters, and automatic data sync when
                      connectivity is restored. A representative example of web delivery for humanitarian
                      organizations that need more than a public-facing site.
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      <Link href="/portfolio/ecommerce-shop" className="text-primary hover:text-primary-dark hover:underline">
                        E-commerce Platform →
                      </Link>
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      A mobile-first e-commerce platform for a retail business expanding across East Africa.
                      Built with MTN, Airtel, and M-Pesa mobile money integration, real-time inventory
                      management, and performance optimization for variable connection speeds. Within six
                      months of launch: 5× increase in online sales, 80% of customers choosing mobile money
                      as their payment method.
                    </p>
                  </div>
                </div>
                <Link href="/portfolio" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold hover:underline">
                  {t('ngos')}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </SectionWrapper>

            {/* Related Services */}
            <SectionWrapper bgColor="highlight">
              <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">Related Services</h2>
                <div className="flex flex-wrap gap-4">
                  <Link href="/services/hosting" className="text-primary hover:text-primary-dark font-medium">
                    Cloud &amp; Web Hosting →
                  </Link>
                  <Link href="/services/ecommerce" className="text-primary hover:text-primary-dark font-medium">
                    E-commerce Development →
                  </Link>
                  <Link href="/services/branding" className="text-primary hover:text-primary-dark font-medium">
                    Branding &amp; Logo Design →
                  </Link>
                </div>
              </div>
            </SectionWrapper>

            {/* FAQ Section */}
            <SectionWrapper bgColor="white">
              <FAQSection customFAQs={webDesignFAQs} />
            </SectionWrapper>

            {/* CTA Strip */}
            <section className="py-12 bg-primary text-white">
              <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-2xl font-heading font-bold mb-4">{t('government')}</h2>
                <p className="text-primary-100 mb-6">{t('education')}</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://wa.me/254119402737"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                  >
                    <MessageCircle size={20} />
                    Chat on WhatsApp
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                  >
                    Get a Quote
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Our Services - Mobile Only (Bottom) */}
      <div className="block lg:hidden max-w-7xl mx-auto px-6 pb-12">
        <ServiceSidebar />
      </div>
    </>
  )
}
