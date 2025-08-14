import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bravos Automations | Intelligent Workflow Solutions for Any Business',
  description: 'Bravos Automations helping businesses streamline workflows, boost productivity, and grow revenue with intelligent automation systems.',
  keywords: 'Bravos Automations, AI workflow automation, business process automation, custom AI automation solutions, intelligent automation company, workflow automation services',
  authors: [{ name: 'Bravos Automations' }],
  creator: 'Bravos Automations',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bravosautomations.io',
    title: 'Bravos Automations | Intelligent Workflow Solutions for Any Business',
    description: 'Bravos Automations helping businesses streamline workflows, boost productivity, and grow revenue with intelligent automation systems.',
    siteName: 'Bravos Automations',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bravos Automations | Intelligent Workflow Solutions for Any Business',
    description: 'Bravos Automations helping businesses streamline workflows, boost productivity, and grow revenue with intelligent automation systems.',
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
              "name": "Bravos Automations",
              "url": "https://bravosautomations.io",
              "description": "Bravos Automations helping businesses streamline workflows, boost productivity, and grow revenue with intelligent automation systems.",
              "serviceType": "AI Automation Company",
              "sameAs": [
                "https://twitter.com/bravosautomations",
                "https://linkedin.com/company/bravosautomations",
                "https://github.com/bravosautomations"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Toronto",
                "addressRegion": "Ontario",
                "addressCountry": "CA"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "(226) 505-2213",
                "contactType": "customer service",
                "email": "pawan@bravosautomations.io"
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
