import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Healthcare Mobile App - Case Study',
  description: 'Case study: Native mobile application for patient records and appointment scheduling.',
}

export default function MobileAppCaseStudy() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Healthcare Mobile App
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Native mobile application for patient records and appointment scheduling
          </p>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
            <Image
              src="/images/portfolio/_legacy/u.webp"
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
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-heading font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-primary-100 mb-6">
            Let's discuss how we can help develop a mobile app for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/256765508131"
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
  )
}

