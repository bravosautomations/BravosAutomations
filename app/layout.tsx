import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bravos Automations – AI-Powered Workflow Automation for Financial Advisors',
  description: 'Automate your business workflows with intelligent AI systems built for scale. Specialized in automations for financial advisors and professionals.',
  keywords: 'automation, AI, financial advisors, workflow automation, business automation, RPA, CRM automation, client onboarding',
  authors: [{ name: 'Bravos Automations' }],
  creator: 'Bravos Automations',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bravosautomations.io',
    title: 'Bravos Automations – AI-Powered Workflow Automation for Financial Advisors',
    description: 'Automate your business workflows with intelligent AI systems built for scale. Specialized in automations for financial advisors and professionals.',
    siteName: 'Bravos Automations',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bravos Automations – AI-Powered Workflow Automation for Financial Advisors',
    description: 'Automate your business workflows with intelligent AI systems built for scale. Specialized in automations for financial advisors and professionals.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
