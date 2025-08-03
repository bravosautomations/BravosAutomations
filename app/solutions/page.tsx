import React from 'react'
import Link from 'next/link'
import { 
  Building2, 
  ShoppingCart, 
  GraduationCap, 
  Heart, 
  Truck, 
  CreditCard,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const solutions = [
  {
    name: 'Enterprise Automation',
    description: 'Scale automation across your entire organization with enterprise-grade security and governance.',
    icon: Building2,
    features: ['Multi-department workflows', 'Role-based access control', 'Audit trails', 'Compliance reporting'],
    href: '/solutions/enterprise'
  },
  {
    name: 'E-commerce Automation',
    description: 'Streamline your online business with automated order processing, inventory management, and customer service.',
    icon: ShoppingCart,
    features: ['Order fulfillment', 'Inventory tracking', 'Customer support', 'Marketing automation'],
    href: '/solutions/ecommerce'
  },
  {
    name: 'Education Automation',
    description: 'Transform educational institutions with automated administrative tasks and student management.',
    icon: GraduationCap,
    features: ['Student registration', 'Grade management', 'Attendance tracking', 'Communication workflows'],
    href: '/solutions/education'
  },
  {
    name: 'Healthcare Automation',
    description: 'Improve patient care and operational efficiency with HIPAA-compliant automation solutions.',
    icon: Heart,
    features: ['Patient scheduling', 'Medical records', 'Billing automation', 'Compliance monitoring'],
    href: '/solutions/healthcare'
  },
  {
    name: 'Logistics Automation',
    description: 'Optimize supply chain operations with intelligent routing, tracking, and delivery automation.',
    icon: Truck,
    features: ['Route optimization', 'Package tracking', 'Delivery scheduling', 'Inventory management'],
    href: '/solutions/logistics'
  },
  {
    name: 'Financial Services',
    description: 'Automate financial processes with secure, compliant solutions for banking and fintech.',
    icon: CreditCard,
    features: ['Transaction processing', 'Risk assessment', 'Compliance reporting', 'Customer onboarding'],
    href: '/solutions/financial'
  }
]

export default function SolutionsPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl">
              Automation Solutions for{' '}
              <span className="gradient-text">Financial Advisors</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Specialized automation solutions designed specifically for financial advisors and professionals 
              to streamline operations, enhance client service, and scale your practice efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Practice Solutions</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
              Tailored automation for your practice
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <div key={solution.name} className="card hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-x-3 mb-4">
                  <solution.icon className="h-8 w-8 text-primary-600" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {solution.name}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {solution.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href={solution.href}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:hover:text-primary-400 font-medium"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
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
              Need a custom solution?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-400">
              We work with financial advisors across all practice types. Contact our team to discuss how 
              Bravos Automations can transform your specific workflow challenges.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="mailto:pawan@bravosautomations.io" className="btn-primary text-lg px-8 py-4">
                Contact Sales
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/solutions" className="btn-secondary text-lg px-8 py-4">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 