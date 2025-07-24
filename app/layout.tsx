import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bravos Automation - Intelligent Process Automation',
  description: 'Transform your business with AI-powered automation solutions. Streamline workflows, reduce costs, and boost productivity with Bravos Automation.',
  keywords: 'automation, AI, process automation, workflow automation, business automation, RPA',
  authors: [{ name: 'Bravos Automation' }],
  creator: 'Bravos Automation',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bravosautomation.io',
    title: 'Bravos Automation - Intelligent Process Automation',
    description: 'Transform your business with AI-powered automation solutions.',
    siteName: 'Bravos Automation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bravos Automation - Intelligent Process Automation',
    description: 'Transform your business with AI-powered automation solutions.',
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