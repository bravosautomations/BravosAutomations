import React from 'react'

interface LogoProps {
  className?: string
  showText?: boolean
}

export function Logo({ className = "h-8 w-8", showText = true }: LogoProps) {
  return (
    <div className="flex items-center space-x-3 group">
      {/* BA Monogram with Lightning Bolt */}
      <div className="relative">
        <svg 
          viewBox="0 0 40 40" 
          className={`${className} transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
          fill="currentColor"
          style={{ minWidth: '32px', minHeight: '32px' }}
        >
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
              <stop offset="50%" stopColor="currentColor" stopOpacity="0.8" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
            </linearGradient>
          </defs>
          
          {/* Lightning bolt as the horizontal bar of B with enhanced design */}
          <path 
            d="M10 18h6l-1.5 3h2.5l-3 6h-1.5l3-4.5h-2.5l1.5-3h-3.5V18z" 
            fill="url(#logoGradient)"
            className="drop-shadow-sm"
          />
          
          {/* B letter - vertical stem with shadow */}
          <rect 
            x="8" y="8" width="3" height="24" 
            fill="url(#logoGradient)"
            className="drop-shadow-sm"
          />
          
          {/* B letter - top curve with enhanced styling */}
          <path 
            d="M11 8h6c1.5 0 2.5 1 2.5 2.5S18.5 13 17 13H11V8z" 
            fill="url(#logoGradient)"
            className="drop-shadow-sm"
          />
          
          {/* B letter - bottom curve with enhanced styling */}
          <path 
            d="M11 27h6c1.5 0 2.5 1 2.5 2.5S18.5 32 17 32H11V27z" 
            fill="url(#logoGradient)"
            className="drop-shadow-sm"
          />
          
          {/* A letter - left diagonal with shadow */}
          <path 
            d="M22 8h3l-6 24h-3L22 8z" 
            fill="url(#logoGradient)"
            className="drop-shadow-sm"
          />
          
          {/* A letter - right diagonal with shadow */}
          <path 
            d="M25 8h3l-6 24h-3L25 8z" 
            fill="url(#logoGradient)"
            className="drop-shadow-sm"
          />
          
          {/* A letter - horizontal bar with enhanced design */}
          <rect 
            x="21" y="20" width="6" height="3" 
            fill="url(#logoGradient)"
            className="drop-shadow-sm"
          />
        </svg>
        
        {/* Subtle glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-primary-600 rounded-lg blur-lg -z-10"></div>
      </div>
      
      {showText && (
        <div className="flex flex-col transition-all duration-300 group-hover:translate-x-1">
          <span className="text-xl font-bold bg-gradient-to-r from-primary-600 via-purple-600 to-primary-600 bg-clip-text text-transparent animate-gradient bg-size-200">
            BRAVOS AUTOMATIONS
          </span>
          <span className="text-xs font-medium text-gray-600 dark:text-gray-400 -mt-1 tracking-wider">
            INTELLIGENT WORKFLOW SOLUTIONS
          </span>
        </div>
      )}
    </div>
  )
} 
