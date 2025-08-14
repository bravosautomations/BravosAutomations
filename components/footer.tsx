import React from 'react'
import Link from 'next/link'
import { Logo } from './logo'
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Mail,
  MapPin,
  Phone
} from 'lucide-react'

const navigation = {
  solutions: [
    { name: 'AI Workflow Automation', href: '/solutions' },
    { name: 'Business Process Automation', href: '/solutions' },
    { name: 'Custom AI Solutions', href: '/solutions' },
    { name: 'Enterprise Automation', href: '/solutions' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '#' },
    { name: 'Press', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'Security', href: '#' },
  ],
  social: [
    {
      name: 'Twitter',
      href: '#',
      icon: Twitter,
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: Linkedin,
    },
    {
      name: 'GitHub',
      href: '#',
      icon: Github,
    },
  ],
}

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Logo className="h-8 w-8 text-primary-600" showText={true} />
            <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
              Our AI automation agency transforms businesses worldwide with intelligent automation solutions. 
              Join thousands of companies streamlining their operations with AI-powered workflows.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                  AI Automation Solutions
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href} 
                        className="text-sm leading-6 text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href} 
                        className="text-sm leading-6 text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                  Legal
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href} 
                        className="text-sm leading-6 text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                  Contact Info
                </h3>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-300">
                    <Mail className="h-4 w-4 text-primary-600" />
                    <span>hello@ai-automation-agency.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-300">
                    <Phone className="h-4 w-4 text-primary-600" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-300">
                    <MapPin className="h-4 w-4 text-primary-600" />
                    <span>San Francisco, CA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Newsletter Section */}
        <div className="mt-16 border-t border-gray-900/10 dark:border-gray-100/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:max-w-lg">
              <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                Stay updated
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                Get the latest AI automation insights and product updates delivered to your inbox.
              </p>
            </div>
            <div className="mt-6 sm:flex sm:max-w-md md:mt-0">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white py-2 px-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
                placeholder="Enter your email"
              />
              <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md bg-primary-600 py-2 px-3 text-base font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-200"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 border-t border-gray-900/10 dark:border-gray-100/10 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <p className="text-xs leading-5 text-gray-500 dark:text-gray-400">
              Built with ❤️ using Next.js and Tailwind CSS
            </p>
          </div>
          <p className="mt-8 text-xs leading-5 text-gray-500 dark:text-gray-400 md:order-1 md:mt-0">
            &copy; 2025 AI Automation Agency, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 
