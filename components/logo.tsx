import React from 'react'

interface LogoProps {
  className?: string
  showText?: boolean
}

export function Logo({ className = "h-8 w-8", showText = true }: LogoProps) {
  return (
    <div className="flex items-center space-x-2">
      {/* BA Monogram with Lightning Bolt */}
      <svg 
        viewBox="0 0 40 40" 
        className={className}
        fill="currentColor"
        style={{ minWidth: '32px', minHeight: '32px' }}
      >
        {/* Lightning bolt as the horizontal bar of B */}
        <path d="M10 18h6l-1.5 3h2.5l-3 6h-1.5l3-4.5h-2.5l1.5-3h-3.5V18z" fill="currentColor"/>
        
        {/* B letter - vertical stem */}
        <rect x="8" y="8" width="3" height="24" fill="currentColor"/>
        
        {/* B letter - top curve */}
        <path d="M11 8h6c1.5 0 2.5 1 2.5 2.5S18.5 13 17 13H11V8z" fill="currentColor"/>
        
        {/* B letter - bottom curve */}
        <path d="M11 27h6c1.5 0 2.5 1 2.5 2.5S18.5 32 17 32H11V27z" fill="currentColor"/>
        
        {/* A letter - left diagonal */}
        <path d="M22 8h3l-6 24h-3L22 8z" fill="currentColor"/>
        
        {/* A letter - right diagonal */}
        <path d="M25 8h3l-6 24h-3L25 8z" fill="currentColor"/>
        
        {/* A letter - horizontal bar */}
        <rect x="21" y="20" width="6" height="3" fill="currentColor"/>
      </svg>
      
      {showText && (
        <div className="flex flex-col">
          <span className="text-xl font-bold gradient-text">BRAVOS</span>
          <span className="text-xs font-medium text-gray-600 dark:text-gray-400 -mt-1">AUTOMATION</span>
        </div>
      )}
    </div>
  )
} 