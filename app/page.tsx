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
  Star,
  Zap,
  BarChart3,
  Workflow
} from 'lucide-react'

import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bravos Automations',
  description: 'Automate your business workflows with intelligent AI systems built for scale.',
}

const features = [
  {
    name: 'AI-Powered Automations',
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
    content: "Bravos Automations revolutionized our customer service operations. Response times dropped from 24 hours to under 2 hours, and customer satisfaction scores increased by 40%.",
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900/20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-purple-600/10 dark:from-primary-400/10 dark:to-purple-400/10"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 dark:text-gray-300 ring-1 ring-gray-900/10 dark:ring-gray-100/10 hover:ring-gray-900/20 dark:hover:ring-gray-100/20 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
                Announcing our new AI-powered automation platform.{' '}
                <Link href="/solutions" className="font-semibold text-primary-600 dark:text-primary-400">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl">
              Transform Your Business with{' '}
              <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
                AI Automation
              </span>
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Bravos Automations helps businesses streamline workflows, reduce operational costs by up to 60%, 
              and scale operations using cutting-edge AI technology. Join thousands of companies already transforming their operations.
            </p>
            
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-x-2 rounded-lg bg-primary-600 px-6 py-3.5 text-lg font-semibold text-white shadow-lg hover:bg-primary-700 hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                Get Started Free
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-x-2 text-lg font-semibold leading-6 text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                View Solutions <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
          <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary-300 to-purple-300 opacity-30" 
               style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}}></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 sm:py-32 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Trusted by businesses worldwide
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Our automation platform delivers measurable results
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={stat.name} className="flex flex-col bg-gray-50 dark:bg-gray-800/50 p-8 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200">
                  <dt className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-400">{stat.name}</dt>
                  <dd className="order-first text-3xl font-bold tracking-tight text-gray-900 dark:text-white lg:text-4xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600 dark:text-primary-400">
              Powerful Features
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Everything you need to automate your business
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Our comprehensive automation platform provides all the tools and features you need to streamline operations and boost productivity.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col group">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600 group-hover:bg-primary-700 transition-colors duration-200">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                    {feature.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 sm:py-32 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              What our customers say
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Don't just take our word for it. Here's what industry leaders have to say about our platform.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card hover:shadow-xl transition-shadow duration-300 group">
                <div className="flex gap-x-1 text-primary-500 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-900 dark:text-gray-100 text-sm leading-6">
                  <p>"{testimonial.content}"</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </figcaption>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-primary-600 to-purple-700 py-24 sm:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to transform your business?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-100">
              Join thousands of companies already using Bravos Automations to streamline their operations and boost productivity.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-lg bg-white px-6 py-3 text-lg font-semibold text-primary-600 shadow-lg hover:bg-gray-50 hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link
                href="/solutions"
                className="text-lg font-semibold leading-6 text-white hover:text-primary-100 transition-colors"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl" aria-hidden="true">
          <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary-300 to-purple-300 opacity-20" 
               style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}}></div>
        </div>
      </section>
    </div>
  )
}
