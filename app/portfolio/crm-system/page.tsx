import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, ArrowRight } from 'lucide-react'
import InteriorHeader from '@/components/InteriorHeader'

export const metadata = {
  title: 'Sales CRM Platform - Case Study',
  description: 'Case study: Customer relationship management system with automated workflows and analytics.',
}

export default function CRMSystemCaseStudy() {
  return (
    <>
      <InteriorHeader
        title="Sales CRM Platform"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Portfolio', href: '/portfolio' },
          { label: 'Sales CRM Platform' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Project Image */}
        <section className="mb-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
            <Image
              src="/images/portfolio/portfolio-preview-01.webp"
              alt="Sales CRM Platform"
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
              A B2B sales company was managing customer relationships through spreadsheets, email, 
              and memory. Sales representatives had no centralized system to track leads, follow-ups, 
              or deal progress. Important customer information was scattered, leading to missed 
              opportunities and inconsistent customer experiences.
            </p>
            <p>
              The sales team couldn't effectively prioritize leads or track which prospects needed 
              follow-up. Management had no visibility into the sales pipeline or team performance. 
              Customer communication history was lost in email threads, making it difficult to 
              provide personalized service.
            </p>
            <p>
              The company needed a CRM system that would centralize customer data, automate follow-up 
              reminders, provide sales pipeline visibility, and generate reports for management. 
              The solution needed to be mobile-friendly for sales reps in the field.
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
              We built a comprehensive CRM platform tailored to their sales process, with features 
              for lead management, opportunity tracking, automated workflows, and powerful analytics. 
              The system integrates with their email and calendar for seamless workflow.
            </p>
            <p>
              Key features include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Centralized contact and company database with full history</li>
              <li>Sales pipeline management with customizable stages</li>
              <li>Automated email follow-up reminders and task assignments</li>
              <li>Deal tracking with probability and value forecasting</li>
              <li>Activity logging for calls, meetings, and emails</li>
              <li>Mobile-responsive design for field sales teams</li>
              <li>Sales reports and dashboards for management insights</li>
              <li>Email integration for tracking communications</li>
              <li>Document management for proposals and contracts</li>
              <li>Team collaboration features for sharing leads and notes</li>
            </ul>
            <p>
              The CRM was designed with their specific sales process in mind, ensuring it fits 
              naturally into their workflow rather than forcing them to adapt to rigid software. 
              Training was provided to ensure all team members could effectively use the system.
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
              <div className="text-3xl font-bold text-primary mb-2">45%</div>
              <p className="text-gray-700">Increase in conversion rate</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">35%</div>
              <p className="text-gray-700">Faster sales cycle</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">60%</div>
              <p className="text-gray-700">Better lead follow-up rate</p>
            </div>
          </div>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              The CRM implementation has transformed the sales process. The conversion rate from 
              lead to customer increased by 45% as sales reps were able to follow up more consistently 
              and at the right times. Automated reminders ensured no leads fell through the cracks.
            </p>
            <p>
              The sales cycle shortened by 35% because representatives could prioritize high-value 
              opportunities and track deal progress more effectively. Management now has real-time 
              visibility into the pipeline, enabling better forecasting and resource allocation.
            </p>
            <p>
              Lead follow-up rate improved by 60%, with the automated reminder system ensuring 
              timely communication with prospects. The centralized customer database has improved 
              service quality, as representatives have complete context for every interaction.
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
            Let's discuss how we can help improve your sales process with a CRM solution.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/256765508131"
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

