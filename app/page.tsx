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
  Star
} from 'lucide-react'

import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bravos Automations',
  description: 'Automate your business workflows with intelligent AI systems built for scale.',
}

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
    <div className="bg-white dark:bg-gray-900 min-h-screen py-24 px-6 text-center">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-6xl">
        Transform Your Business with <span className="text-primary-600">AI Automation</span>
      </h1>
      <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Bravos helps financial professionals streamline workflows, save time, and scale operations using AI.
      </p>

      <div className="mt-10">
        <Link
          href="/contact"
          className="inline-flex items-center bg-primary-600 text-white px-6 py-3 text-lg rounded-lg font-semibold hover:bg-primary-700"
        >
          Get Started <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  )
}
