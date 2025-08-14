import React from 'react'
import Link from 'next/link'
import { ArrowRight, Users, TrendingUp, Award, Globe, Zap, Building2, Lightbulb } from 'lucide-react'

const milestones = [
  {
    year: '2025',
    title: 'Company Founded',
    description: 'Our AI automation agency was established in Toronto, Ontario, with a vision to democratize intelligent automation for businesses of all sizes.',
    icon: Building2,
  },
  {
    year: '2025',
    title: 'First Client Success',
    description: 'Secured our first major client, a Toronto-based technology startup, automating their customer onboarding process and reducing processing time by 85%.',
    icon: Award,
  },
  {
    year: '2025',
    title: 'Team Expansion',
    description: 'Grew from a founding team of 3 to 15 automation specialists, data scientists, and industry experts.',
    icon: Users,
  },
  {
    year: '2025',
    title: 'Market Recognition',
    description: 'Recognized as one of Canada\'s fastest-growing AI automation companies, serving clients across North America.',
    icon: TrendingUp,
  },
]

const values = [
  {
    title: 'Innovation First',
    description: 'We believe in pushing the boundaries of what\'s possible with AI automation technology.',
    icon: Lightbulb,
  },
  {
    title: 'Client Success',
    description: 'Every solution we build is designed to deliver measurable, transformative results for our clients.',
    icon: Award,
  },
  {
    title: 'Global Impact',
    description: 'We\'re committed to making AI automation accessible to businesses worldwide, regardless of size or industry.',
    icon: Globe,
  },
  {
    title: 'Continuous Learning',
    description: 'Our team stays at the forefront of AI and automation technology to deliver cutting-edge solutions.',
    icon: Zap,
  },
]

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl">
              About Our AI Automation Agency —{' '}
              <span className="gradient-text">Driving Business Efficiency</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              From a vision in Toronto to transforming businesses worldwide, discover how our AI automation agency 
              is revolutionizing the future of intelligent automation.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl mb-8">
                Meet Our Founder
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg leading-8 text-gray-600 dark:text-gray-400 mb-6">
                  <strong className="text-gray-900 dark:text-gray-100">Pawan Mahal</strong> is the visionary founder and CEO of our AI automation agency, 
                  bringing over a decade of experience in business operations and technology to the world of intelligent automation.
                </p>
                <p className="text-lg leading-8 text-gray-600 dark:text-gray-400 mb-6">
                  Born and raised in Toronto, Ontario, Pawan developed a deep understanding of business operations during his 
                  extensive career in the technology and business services industry. Working with major Canadian companies and technology firms, 
                  he witnessed firsthand the inefficiencies that plagued traditional business processes and the transformative 
                  potential of AI automation technology.
                </p>
                <p className="text-lg leading-8 text-gray-600 dark:text-gray-400 mb-6">
                  After years of analyzing market trends and identifying the growing need for accessible, intelligent automation 
                  solutions, Pawan founded our AI automation agency in 2025. His vision was clear: to democratize AI automation technology 
                  and make it accessible to businesses of all sizes, not just Fortune 500 companies with massive IT budgets.
                </p>
                <p className="text-lg leading-8 text-gray-600 dark:text-gray-400">
                  With his unique blend of business expertise and technological insight, Pawan has guided our AI automation agency 
                  from a small startup in Toronto to a rapidly growing company serving clients across North America. His 
                  commitment to innovation, client success, and building a team of world-class automation specialists has 
                  been the driving force behind the company's remarkable growth and success.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 p-8 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl font-bold mb-4">Pawan</div>
                  <div className="text-2xl font-semibold mb-2">Mahal</div>
                  <div className="text-lg opacity-90">Founder & CEO</div>
                  <div className="text-sm opacity-75 mt-2">AI Automation Agency</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-800/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Our Journey</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
              From Toronto to the World
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Our AI automation agency's story is one of innovation, determination, and a relentless focus on transforming 
              how businesses operate through intelligent automation.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-500 to-primary-700"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.title} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="card p-6">
                      <div className="flex items-center gap-x-3 mb-4">
                        <milestone.icon className="h-8 w-8 text-primary-600" />
                        <div>
                          <div className="text-sm font-semibold text-primary-600">{milestone.year}</div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                            {milestone.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-800"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Our Mission</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
              Democratizing Intelligent AI Automation
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              We believe that every business, regardless of size or industry, deserves access to the transformative 
              power of intelligent AI automation. Our mission is to make this technology accessible, affordable, and 
              easy to implement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="flex justify-center mb-4">
                  <value.icon className="h-12 w-12 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-800/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
              Ready to Transform Your Business with AI Automation?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-400">
              Join the hundreds of companies that have already revolutionized their operations with our AI automation agency. 
              Let's build the future of intelligent automation together.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/solutions" className="btn-primary text-lg px-8 py-4">
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 