import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, ArrowRight } from 'lucide-react'
import InteriorHeader from '@/components/InteriorHeader'
import { metadataCloudMigration } from '@/lib/portfolio-metadata'
import PortfolioSchema from '@/components/PortfolioSchema'

export const metadata = metadataCloudMigration

export default function CloudMigrationCaseStudy() {
  return (
    <>
      <PortfolioSchema projectName="Cloud Migration" projectSlug="cloud-migration" />
      <InteriorHeader
        title="Cloud Migration Project"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Portfolio', href: '/portfolio' },
          { label: 'Cloud Migration Project' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Project Image */}
        <section className="mb-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
            <Image
              src="/images/portfolio/portfolio-preview-02.webp"
              alt="Cloud Migration Project"
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
              A growing technology company was operating on-premises servers that were becoming 
              increasingly expensive to maintain and difficult to scale. Server failures caused 
              downtime, manual backups were unreliable, and scaling required physical hardware 
              procurement that took weeks.
            </p>
            <p>
              The company needed to migrate to the cloud to improve reliability, enable automatic 
              scaling, reduce costs, and eliminate the burden of hardware management. However, 
              they couldn't afford downtime during the migration, as their applications served 
              customers 24/7.
            </p>
            <p>
              Key challenges included migrating multiple applications with complex dependencies, 
              maintaining data integrity, ensuring zero downtime during migration, and training 
              staff on new cloud infrastructure management.
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
              We executed a phased cloud migration strategy using modern cloud infrastructure, 
              ensuring zero downtime through careful planning and gradual cutover. Each application 
              was migrated individually with thorough testing before going live.
            </p>
            <p>
              Key components include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Infrastructure assessment and migration planning</li>
              <li>Cloud architecture design for scalability and reliability</li>
              <li>Automated deployment pipelines for consistent environments</li>
              <li>Database migration with minimal downtime using replication</li>
              <li>Load balancing and auto-scaling configurations</li>
              <li>Automated backup and disaster recovery solutions</li>
              <li>Security hardening and compliance measures</li>
              <li>Monitoring and alerting systems for proactive issue detection</li>
              <li>Documentation and training for internal teams</li>
              <li>Gradual cutover with rollback capabilities for each application</li>
            </ul>
            <p>
              We used a blue-green deployment strategy where new cloud infrastructure ran in parallel 
              with existing systems, allowing for seamless switching after verification. Each phase 
              was carefully tested to ensure no disruption to customer services.
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
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <p className="text-gray-700">Uptime achieved</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">40%</div>
              <p className="text-gray-700">Cost reduction</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">0</div>
              <p className="text-gray-700">Downtime hours</p>
            </div>
          </div>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              The cloud migration was completed successfully with zero downtime, thanks to careful 
              planning and phased execution. All applications were migrated without any service 
              interruption, and customers experienced no disruption during the transition.
            </p>
            <p>
              Infrastructure costs decreased by 40% through optimized cloud resource usage and 
              elimination of hardware maintenance expenses. Auto-scaling capabilities now handle 
              traffic spikes automatically, eliminating the need for over-provisioned servers.
            </p>
            <p>
              System reliability improved significantly, achieving 99.9% uptime through redundant 
              infrastructure and automated failover. Automated backups and disaster recovery solutions 
              provide peace of mind, with data replicated across multiple geographic regions. The 
              company can now scale infrastructure up or down in minutes rather than weeks.
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
            Let's discuss how we can help migrate your infrastructure to the cloud.
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

