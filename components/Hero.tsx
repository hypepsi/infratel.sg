import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Unified subtle grid background across entire hero */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `
          linear-gradient(to right, #9CA3AF 1px, transparent 1px),
          linear-gradient(to bottom, #9CA3AF 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-infratel-red/10 text-infratel-red text-sm font-medium mb-4 sm:mb-6">
              <span className="w-2 h-2 bg-infratel-red rounded-full mr-2 animate-pulse"></span>
              5G Standalone Available Now
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-infratel-gray leading-tight mb-4 sm:mb-6">
              Singapore's Most Reliable{' '}
              <span className="text-infratel-red">5G Standalone</span> Network
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Experience ultra-fast speeds and seamless connectivity across the
              island. No hidden fees. No contracts.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
              <Link
                href="/plans"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-infratel-red text-white font-medium rounded-md hover:bg-infratel-red-dark transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                View Mobile Plans
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                href="/coverage"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-infratel-gray font-medium rounded-md border-2 border-gray-200 hover:border-infratel-red hover:text-infratel-red transition-all"
              >
                <MapPin className="mr-2" size={20} />
                Check Coverage
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600">
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="whitespace-nowrap">No Contract Required</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="whitespace-nowrap">Free SIM Delivery</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="whitespace-nowrap">Port Your Number Free</span>
              </div>
            </div>
          </div>

          {/* Right Visual - Abstract Singapore Constellation */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] pointer-events-none hidden sm:block">
            <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 600 500">
              {/* Abstract Marina Bay Sands - Left side, more prominent */}
              
              {/* Tower 1 (left) */}
              <line x1="80" y1="380" x2="80" y2="200" stroke="#6B7280" strokeWidth="2" className="animate-breathe" />
              {/* Tower 2 (middle) */}
              <line x1="160" y1="380" x2="160" y2="170" stroke="#6B7280" strokeWidth="2" className="animate-breathe" style={{ animationDelay: '0.5s' }} />
              {/* Tower 3 (right) */}
              <line x1="240" y1="380" x2="240" y2="200" stroke="#6B7280" strokeWidth="2" className="animate-breathe" style={{ animationDelay: '1s' }} />
              
              {/* Connecting "SkyPark" - curved top structure */}
              <path
                d="M 75 200 Q 160 160 245 200"
                fill="none"
                stroke="#E60023"
                strokeWidth="2.5"
                className="animate-breathe"
                style={{ animationDelay: '1.5s' }}
              />
              
              {/* Tower nodes */}
              <circle cx="80" cy="200" r="5" fill="#E60023" opacity="0.7" className="animate-pulse" />
              <circle cx="160" cy="170" r="5" fill="#E60023" opacity="0.7" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
              <circle cx="240" cy="200" r="5" fill="#E60023" opacity="0.7" className="animate-pulse" style={{ animationDelay: '1s' }} />
              
              {/* Abstract Singapore Flyer - Right side, separated */}
              <circle
                cx="480"
                cy="150"
                r="90"
                fill="none"
                stroke="#9CA3AF"
                strokeWidth="1.5"
                className="animate-breathe"
                style={{ animationDelay: '2s' }}
              />
              <circle
                cx="480"
                cy="150"
                r="75"
                fill="none"
                stroke="#D1D5DB"
                strokeWidth="0.8"
                opacity="0.6"
                className="animate-breathe"
                style={{ animationDelay: '2.5s' }}
              />
              
              {/* Flyer center hub */}
              <circle cx="480" cy="150" r="10" fill="#E60023" opacity="0.5" className="animate-pulse" style={{ animationDelay: '2s' }} />
              
              {/* Spoke lines radiating from center - only 4 main spokes */}
              <line x1="480" y1="150" x2="480" y2="60" stroke="#D1D5DB" strokeWidth="0.8" opacity="0.4" />
              <line x1="480" y1="150" x2="570" y2="150" stroke="#D1D5DB" strokeWidth="0.8" opacity="0.4" />
              <line x1="480" y1="150" x2="420" y2="90" stroke="#D1D5DB" strokeWidth="0.8" opacity="0.4" />
              <line x1="480" y1="150" x2="540" y2="210" stroke="#D1D5DB" strokeWidth="0.8" opacity="0.4" />
              
              {/* Subtle connecting network lines between landmarks */}
              <line x1="240" y1="200" x2="390" y2="150" stroke="#D1D5DB" strokeWidth="0.5" opacity="0.2" strokeDasharray="5 5" />
              <line x1="160" y1="170" x2="390" y2="150" stroke="#D1D5DB" strokeWidth="0.5" opacity="0.2" strokeDasharray="5 5" />
              
              {/* Additional atmospheric data nodes - scattered */}
              <circle cx="350" cy="280" r="2.5" fill="#E60023" opacity="0.35" className="animate-pulse" style={{ animationDelay: '3s' }} />
              <circle cx="120" cy="320" r="2" fill="#E60023" opacity="0.3" className="animate-pulse" style={{ animationDelay: '3.5s' }} />
              <circle cx="520" cy="280" r="2.5" fill="#E60023" opacity="0.35" className="animate-pulse" style={{ animationDelay: '4s' }} />
              <circle cx="300" cy="100" r="2" fill="#E60023" opacity="0.3" className="animate-pulse" style={{ animationDelay: '4.5s' }} />
              
              {/* Subtle connecting lines to data nodes */}
              <line x1="160" y1="170" x2="300" y2="100" stroke="#E5E7EB" strokeWidth="0.5" opacity="0.15" />
              <line x1="240" y1="200" x2="350" y2="280" stroke="#E5E7EB" strokeWidth="0.5" opacity="0.15" />
              <line x1="480" y1="240" x2="520" y2="280" stroke="#E5E7EB" strokeWidth="0.5" opacity="0.15" />
              
              {/* Subtle baseline/horizon */}
              <line x1="20" y1="380" x2="600" y2="380" stroke="#E5E7EB" strokeWidth="0.5" opacity="0.25" />
            </svg>

            {/* Dual subtle glow effects for depth */}
            <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-red-100/25 to-transparent rounded-full blur-3xl animate-breathe"></div>
            <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-gradient-to-br from-blue-50/20 to-transparent rounded-full blur-3xl animate-breathe" style={{ animationDelay: '3s' }}></div>
          </div>
        </div>
      </div>
    </section>
  )
}
