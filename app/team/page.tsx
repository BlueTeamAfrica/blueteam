import Link from 'next/link'
import { MessageCircle, ArrowRight } from 'lucide-react'
import InteriorPageLayout from '@/components/InteriorPageLayout'
import SectionWrapper from '@/components/SectionWrapper'

export const metadata = {
  title: 'Our Team',
  description: 'Meet the talented team behind Blue Team Africa - dedicated professionals building technology solutions for East Africa.',
}

export default function TeamPage() {
  const teamRoles = [
    {
      role: 'Technical Director',
      description: 'Leads our technology strategy and architecture decisions, ensuring we deliver scalable and innovative solutions.',
    },
    {
      role: 'Senior Full-Stack Developer',
      description: 'Builds robust web applications and APIs, specializing in modern frameworks and cloud technologies.',
    },
    {
      role: 'UX/UI Designer',
      description: 'Creates intuitive and beautiful user experiences, translating user needs into elegant digital interfaces.',
    },
    {
      role: 'Mobile App Developer',
      description: 'Develops native and cross-platform mobile applications for iOS and Android devices.',
    },
    {
      role: 'DevOps Engineer',
      description: 'Manages our cloud infrastructure, ensuring reliable hosting and seamless deployment pipelines.',
    },
    {
      role: 'Project Manager',
      description: 'Coordinates projects from inception to delivery, ensuring smooth communication and timely execution.',
    },
    {
      role: 'Quality Assurance Specialist',
      description: 'Ensures our solutions meet the highest standards through thorough testing and quality checks.',
    },
    {
      role: 'Business Analyst',
      description: 'Works closely with clients to understand requirements and translate business needs into technical solutions.',
    },
  ]

  return (
    <InteriorPageLayout
      title="Our Team"
      subtitle="Dedicated professionals building technology solutions for East Africa"
    >
      {/* Team Introduction */}
      <SectionWrapper bgColor="white">
        <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
          Our team brings together diverse expertise in software development, design, infrastructure, 
          and project management. We're united by a shared commitment to delivering quality solutions 
          that serve our clients and communities across East Africa.
        </p>
      </SectionWrapper>

      {/* Team Roles Grid */}
      <SectionWrapper bgColor="light">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamRoles.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {member.role}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Team Values */}
      <SectionWrapper bgColor="white">
        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
          What Unites Us
        </h2>
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Collaboration</h3>
            <p>We work together seamlessly, combining our individual strengths to deliver exceptional results for our clients.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Continuous Learning</h3>
            <p>We stay current with the latest technologies and best practices, constantly improving our skills and methodologies.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Client Focus</h3>
            <p>Our clients' success is our success. We go above and beyond to understand their needs and deliver solutions that truly serve them.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Regional Understanding</h3>
            <p>Having built our business in East Africa, we understand local contexts, challenges, and opportunities better than most.</p>
          </div>
        </div>
      </SectionWrapper>

      {/* Join Us */}
      <SectionWrapper bgColor="light">
        <div className="text-center">
          <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
            Join Our Team
          </h2>
          <p className="text-gray-700 mb-6">
            We're always looking for talented individuals who share our passion for technology and service. 
            If you're interested in joining us, reach out to learn about current opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium"
          >
            Get in Touch →
          </Link>
        </div>
      </SectionWrapper>

      {/* Related Pages */}
      <SectionWrapper bgColor="white">
        <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">Learn More</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/about" className="text-primary hover:text-primary-dark font-medium">
            Our Story →
          </Link>
          <Link href="/mission" className="text-primary hover:text-primary-dark font-medium">
            Our Mission & Values →
          </Link>
          <Link href="/process" className="text-primary hover:text-primary-dark font-medium">
            Our Process →
          </Link>
        </div>
      </SectionWrapper>

      {/* CTA Strip */}
      <SectionWrapper className="bg-primary text-white">
        <div className="text-center">
          <h2 className="text-2xl font-heading font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-primary-100 mb-6">Let's discuss how we can help your organization.</p>
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
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </InteriorPageLayout>
  )
}
