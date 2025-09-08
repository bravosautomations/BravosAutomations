import React from 'react'
import Link from 'next/link'

export default function InvestorRelationsPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero / Title */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl">
              Regulation A+ Capital Raise Support
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              We specialize in Reg A+ raises using proven investor relations strategies and AI technology, bringing
              $500M+ of campaign experience to help issuers inform better, capture more investors, and raise more capital.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Conversion-focused investor relations paired with practical AI systems to reduce friction and drive commitments.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            <div className="card p-8 rounded-2xl shadow-sm bg-white dark:bg-gray-800">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Investor Relations (Done Right)</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
                <li>Inbound communications management</li>
                <li>Investor updates and FAQs</li>
                <li>Sentiment reports and insights</li>
                <li>Alignment with marketing and media</li>
              </ul>
            </div>

            <div className="card p-8 rounded-2xl shadow-sm bg-white dark:bg-gray-800">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">AI Chatbots for Capital Raises</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
                <li>Trained on your offering circular and key documents</li>
                <li>Answers investor questions on your website</li>
                <li>Feeds insights to marketing and IR teams</li>
                <li>Guides qualified investors to “Invest Now”</li>
                <li>Integrates with CRM, email, and dashboards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Investor Relations Engine */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
              AI Investor Relations Engine
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Embedded on your website and trained on your company documents, our AI IR Engine acts as a 24/7 specialist
              that informs prospective investors, captures insights, and reduces friction across the funnel.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 text-gray-700 dark:text-gray-300">
              <li className="rounded-lg bg-white dark:bg-gray-800 p-4 shadow-sm">Immediate, compliant answers to common questions</li>
              <li className="rounded-lg bg-white dark:bg-gray-800 p-4 shadow-sm">Captures investor insights for messaging</li>
              <li className="rounded-lg bg-white dark:bg-gray-800 p-4 shadow-sm">Reduces friction from curiosity to commitment</li>
              <li className="rounded-lg bg-white dark:bg-gray-800 p-4 shadow-sm">Boosts conversions with guided next steps</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
              Why Work With Us?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              With experience supporting $500M+ in capital raises, we bring a deep understanding of investor behavior,
              campaign strategy, and the operational realities of Regulation A+ offerings.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              We help issuers communicate more clearly, capture more qualified investors, and ultimately raise more capital.
              Our approach blends disciplined investor relations with practical AI to deliver results you can measure.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-primary-700 transition-colors">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}


