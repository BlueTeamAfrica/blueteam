import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, ArrowRight } from 'lucide-react'
import InteriorHeader from '@/components/InteriorHeader'
import { metadataMobileApp } from '@/lib/portfolio-metadata'
import PortfolioSchema from '@/components/PortfolioSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata = metadataMobileApp

export default function MobileAppCaseStudy() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.blueteamafrica.com/' },
        { name: 'Portfolio', url: 'https://www.blueteamafrica.com/portfolio' },
        { name: 'Healthcare Mobile App', url: 'https://www.blueteamafrica.com/portfolio/mobile-app' },
      ]} />
      <PortfolioSchema projectName="Mobile App" projectSlug="mobile-app" />
      <InteriorHeader
        title="Healthcare Mobile App"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Portfolio', href: '/portfolio' },
          { label: 'Healthcare Mobile App' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Project Image */}
        <section className="mb-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
            <Image
              src="/images/portfolio/portfolio-preview-05.webp"
              alt="Healthcare Mobile App"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
            The Problem
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              A healthcare clinic chain was struggling with paper-based patient records and manual 
              appointment scheduling. Patient information was scattered across different locations, 
              making it difficult to access medical history when patients visited different clinics. 
              Appointment booking required phone calls during business hours, limiting patient access.
            </p>
            <p>
              The clinic needed a digital solution that would centralize patient records, enable 
              online appointment booking, and improve communication between patients and healthcare 
              providers. The solution had to be accessible on mobile devices, since most patients 
              use smartphones as their primary device.
            </p>
            <p>
              Key requirements included secure patient data management compliant with healthcare 
              regulations, real-time appointment availability, SMS reminders, and offline capability 
              for areas with unreliable internet connectivity.
            </p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
            Our Solution
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              We developed a native mobile application for both iOS and Android that serves patients 
              and a companion web application for clinic staff. The solution includes secure patient 
              record management, online appointment scheduling, and communication features.
            </p>
            <p>
              Key features include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Secure patient profile management with encrypted data storage</li>
              <li>Real-time appointment booking with availability calendar</li>
              <li>Digital medical records accessible to authorized healthcare providers</li>
              <li>Automated SMS reminders for upcoming appointments</li>
              <li>In-app messaging between patients and clinic staff</li>
              <li>Prescription history and medication tracking</li>
              <li>Offline mode for viewing records without internet</li>
              <li>Multi-clinic support for patients visiting different locations</li>
              <li>Admin dashboard for clinic management and analytics</li>
              <li>HIPAA-compliant security measures for patient data protection</li>
            </ul>
            <p>
              The app was designed with user experience in mind, making it easy for patients of all 
              ages and technical skill levels to book appointments and access their health information. 
              The clinic staff portal streamlines operations and reduces administrative burden.
            </p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
            Results
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">70%</div>
              <p className="text-gray-700">Reduction in no-shows</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">50%</div>
              <p className="text-gray-700">Less admin time on scheduling</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">90%</div>
              <p className="text-gray-700">Patient satisfaction rate</p>
            </div>
          </div>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              The mobile app has significantly improved clinic operations and patient experience. 
              Appointment no-shows decreased by 70% thanks to automated SMS reminders and easy 
              rescheduling through the app. Patients appreciate the convenience of booking appointments 
              at any time, without needing to call during business hours.
            </p>
            <p>
              Clinic staff saved 50% of their time previously spent on phone-based appointment scheduling, 
              allowing them to focus on patient care. The centralized patient records system ensures 
              healthcare providers have complete medical history available, regardless of which clinic 
              location the patient visits.
            </p>
            <p>
              Patient satisfaction reached 90%, with users praising the app's ease of use and the 
              convenience of accessing medical records and appointment history from their phones. 
              The digital transformation has positioned the clinic chain as a modern, patient-focused 
              healthcare provider.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-heading font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-300 mb-6">
            Let's discuss how we can help develop a mobile app for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/254119402737"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
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
    </>
  )
}

