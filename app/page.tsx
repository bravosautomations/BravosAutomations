import React from 'react'
import Link from 'next/link'
import { 
  Brain, 
  Shield, 
  TrendingUp, 
  Clock, 
  Users, 
  CheckCircle,
  ArrowRight,
  Play,
  Star
} from 'lucide-react'

const features = [
  {
    name: 'AI-Powered Automation',
    description: 'Leverage advanced machine learning to automate complex business processes with unprecedented accuracy.',
    icon: Brain,
  },
  {
    name: 'Enterprise Security',
    description: 'Bank-grade security with SOC 2 compliance, end-to-end encryption, and role-based access controls.',
    icon: Shield,
  },
  {
    name: 'Real-time Analytics',
    description: 'Monitor performance, track KPIs, and gain insights with comprehensive dashboards and reporting.',
    icon: TrendingUp,
  },
  {
    name: '24/7 Operation',
    description: 'Run your automation workflows around the clock without human intervention or downtime.',
    icon: Clock,
  },
  {
    name: 'Team Collaboration',
    description: 'Enable your entire team to build, deploy, and manage automation workflows together.',
    icon: Users,
  },
  {
    name: 'Easy Integration',
    description: 'Connect with 500+ applications and APIs with our simple drag-and-drop interface.',
    icon: CheckCircle,
  },
]

const stats = [
  { name: 'Companies Automated', value: '1,000+' },
  { name: 'Processes Streamlined', value: '10,000+' },
  { name: 'Time Saved', value: '250K+ hours' },
  { name: 'Customer Satisfaction', value: '99.9%' },
]

const testimonials = [
  {
    content: "Bravos Automation revolutionized our customer service operations. Response times dropped from 24 hours to under 2 hours, and customer satisfaction scores increased by 40%.",
    author: "David Kim",
    role: "Director of Operations, GlobalRetail",
    rating: 5,
  },
  {
    content: "The intelligent automation platform exceeded our expectations. We automated 200+ processes in just 3 months, saving our team over 15,000 hours annually.",
    author: "Lisa Thompson",
    role: "VP of Technology, FinServ Solutions",
    rating: 5,
  },
  {
    content: "Bravos helped us scale our operations without hiring additional staff. The ROI was immediate - we saw a 300% increase in processing capacity within the first quarter.",
    author: "Marcus Johnson",
    role: "CEO, ScaleUp Ventures",
    rating: 5,
  },
]

export default function HomePage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl">
                Transform Your Business with{' '}
                <span className="gradient-text">Intelligent Automation</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
                Streamline workflows, reduce costs, and boost productivity with AI-powered automation solutions. 
                From simple tasks to complex processes, Bravos makes automation accessible to everyone.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href="/solutions" className="btn-primary text-lg px-8 py-4">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Explore Solutions
                </Link>
                <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-600 to-purple-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.name}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt className="text-base leading-7 text-gray-600 dark:text-gray-400">{stat.name}</dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Powerful Features</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
              Everything you need to automate your business
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              From simple task automation to complex workflow orchestration, Bravos provides the tools and intelligence 
              to transform how your business operates.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature, index) => (
                <div
                  key={feature.name}
                  className="flex flex-col"
                >
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
                    <feature.icon className="h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-800/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-primary-600">Testimonials</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
              Loved by businesses worldwide
            </p>
          </div>
          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.author}
                  className="card"
                >
                  <div className="flex items-center gap-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-gray-900 dark:text-gray-100">
                    <p>"{testimonial.content}"</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-gray-100">{testimonial.author}</div>
                      <div className="text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                    </div>
                  </figcaption>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
              Ready to transform your business?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-400">
              Join thousands of companies that have already automated their workflows with Bravos. 
              See the difference intelligent automation can make for your business.
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