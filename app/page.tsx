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
