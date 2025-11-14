import { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/SEO'

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions About Web Design & Development',
  description: 'Frequently asked questions about web design, website design, web development, hosting, and our services in Uganda, Kenya, and Rwanda. Get answers to common questions.',
  keywords: ['web design FAQ', 'website design FAQ', 'web development FAQ', 'hosting FAQ', 'Uganda', 'Kenya', 'Rwanda'],
  openGraph: {
    title: 'FAQ - Frequently Asked Questions | Blue Team Africa',
    description: 'Get answers to common questions about our web design and development services.',
  },
}

interface FAQ {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: 'What web design services do you offer?',
    answer: 'We offer comprehensive web design and website design services including custom website design, responsive web design, SEO-optimized web design, e-commerce website design, website redesign, and user experience (UX) design. Our web design services are available for businesses in Uganda, Kenya, and Rwanda.',
  },
  {
    question: 'How much does web design cost?',
    answer: 'Web design costs vary depending on the scope and complexity of your project. Factors include the number of pages, custom features, e-commerce functionality, and design requirements. Contact us for a free quote tailored to your specific web design needs. We provide transparent pricing for all our website design services.',
  },
  {
    question: 'How long does it take to design a website?',
    answer: 'The timeline for web design projects typically ranges from 2-8 weeks, depending on the complexity. A simple website design may take 2-3 weeks, while a complex e-commerce website design can take 6-8 weeks. We work closely with you throughout the web design process to ensure timely delivery.',
  },
  {
    question: 'Do you provide web hosting services?',
    answer: 'Yes, we offer reliable web hosting services for businesses in Uganda, Kenya, and Rwanda. Our hosting services include shared hosting, VPS hosting, dedicated servers, cloud hosting, and WordPress-optimized hosting. We also provide email hosting and SSL certificate management.',
  },
  {
    question: 'What is the difference between web design and web development?',
    answer: 'Web design focuses on the visual appearance, user interface, and user experience of a website. Website design involves creating layouts, choosing colors, typography, and ensuring the site looks good and is easy to use. Web development involves building the technical functionality, writing code, creating databases, and making the website work. We offer both web design and web development services.',
  },
  {
    question: 'Do you offer SEO-optimized web design?',
    answer: 'Yes, we specialize in SEO website design. Our web design services include SEO optimization from the ground up, ensuring your website is built with search engine best practices in mind. This includes proper heading structure, meta tags, fast loading times, mobile responsiveness, and clean code - all essential for SEO website design success.',
  },
  {
    question: 'Can you redesign my existing website?',
    answer: 'Absolutely! We offer website redesign services to help modernize your existing website. Whether you need a complete website redesign or optimization of your current web design, we can help improve your site\'s appearance, functionality, and performance. Our website redesign services are available across Uganda, Kenya, and Rwanda.',
  },
  {
    question: 'Do you work with businesses in Uganda, Kenya, and Rwanda?',
    answer: 'Yes, we serve businesses across Uganda, Kenya, and Rwanda. As Sudanese tech experts based in East Africa, we understand the local markets and provide web design, web development, hosting, and other technology services tailored to businesses in these countries.',
  },
  {
    question: 'What technologies do you use for web development?',
    answer: 'We use modern web development technologies including React, Next.js, Node.js, Python, and various databases. Our web development services focus on creating fast, scalable, and secure web applications. We stay current with the latest web development trends and best practices.',
  },
  {
    question: 'Do you provide ongoing website maintenance?',
    answer: 'Yes, we offer website maintenance and support services. This includes regular updates, security patches, content updates, performance monitoring, and technical support. We can create a maintenance plan tailored to your website\'s needs.',
  },
  {
    question: 'What makes your web design company different?',
    answer: 'As a web design company founded by Sudanese tech experts, we bring international expertise combined with local market understanding. We focus on creating web design solutions that are both globally competitive and locally relevant. Our website design services emphasize quality, SEO optimization, and results-driven design.',
  },
  {
    question: 'Do you offer mobile-responsive web design?',
    answer: 'Yes, all our web design services include mobile-responsive design. We ensure that every website we design works perfectly on desktops, tablets, and mobile devices. Mobile-responsive web design is essential for SEO and user experience, and it\'s a standard part of all our website design projects.',
  },
  {
    question: 'Can you help with e-commerce website design?',
    answer: 'Yes, we specialize in e-commerce website design. We create online stores with shopping cart functionality, payment gateway integration, product management, and inventory systems. Our e-commerce web design services help businesses in Uganda, Kenya, and Rwanda sell products online effectively.',
  },
  {
    question: 'What is your web design process?',
    answer: 'Our web design process includes: 1) Initial consultation to understand your needs, 2) Planning and wireframing, 3) Design mockups and approval, 4) Development and coding, 5) Testing and optimization, 6) Launch and deployment, 7) Ongoing support. We keep you involved throughout the entire web design process.',
  },
  {
    question: 'Do you provide app development services?',
    answer: 'Yes, we offer app development services including iOS app development, Android app development, cross-platform app development, and web app development. Our app development services help businesses create mobile and web applications for their customers.',
  },
]

// Generate FAQ schema for SEO
function generateFAQSchema(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export default function FAQPage() {
  const faqSchema = generateFAQSchema(faqs)

  return (
    <>
      <JsonLd schema={faqSchema} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-700 mb-12">
            Find answers to common questions about our web design, website design, web development, 
            and hosting services in Uganda, Kenya, and Rwanda.
          </p>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition"
              >
                <h2 className="text-2xl font-semibold mb-3 text-gray-900">
                  {faq.question}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-gray-700 mb-6">
              Can't find the answer you're looking for? Contact us and we'll be happy to help 
              with any questions about our web design, website design, or other services.
            </p>
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

