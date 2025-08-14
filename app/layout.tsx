import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Automation Agency | Intelligent Workflow Solutions for Any Business',
  description: 'AI automation agency helping businesses streamline workflows, boost productivity, and grow revenue with intelligent automation systems.',
  keywords: 'AI automation agency, AI workflow automation, business process automation, custom AI automation solutions, intelligent automation agency, workflow automation services',
  authors: [{ name: 'AI Automation Agency' }],
  creator: 'AI Automation Agency',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ai-automation-agency.com',
    title: 'AI Automation Agency | Intelligent Workflow Solutions for Any Business',
    description: 'AI automation agency helping businesses streamline workflows, boost productivity, and grow revenue with intelligent automation systems.',
    siteName: 'AI Automation Agency',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation Agency | Intelligent Workflow Solutions for Any Business',
    description: 'AI automation agency helping businesses streamline workflows, boost productivity, and grow revenue with intelligent automation systems.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AI Automation Agency",
              "url": "https://ai-automation-agency.com",
              "description": "AI automation agency helping businesses streamline workflows, boost productivity, and grow revenue with intelligent automation systems.",
              "serviceType": "AI Automation Agency",
              "sameAs": [
                "https://twitter.com/ai_automation_agency",
                "https://linkedin.com/company/ai-automation-agency",
                "https://github.com/ai-automation-agency"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "San Francisco",
                "addressRegion": "CA",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-123-4567",
                "contactType": "customer service",
                "email": "hello@ai-automation-agency.com"
              },
              "foundingDate": "2025",
              "founder": {
                "@type": "Person",
                "name": "Pawan Mahal",
                "jobTitle": "Founder & CEO"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
} 
