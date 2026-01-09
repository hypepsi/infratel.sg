import { ArrowRight, MapPin } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Unified subtle grid background across entire hero */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `
          linear-gradient(to right, #9CA3AF 1px, transparent 1px),
          linear-gradient(to bottom, #9CA3AF 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-infratel-red/10 text-infratel-red text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-infratel-red rounded-full mr-2 animate-pulse"></span>
              5G Standalone Available Now
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-infratel-gray leading-tight mb-6">
              Singapore's Most Reliable{' '}
              <span className="text-infratel-red">5G Standalone</span> Network
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Experience ultra-fast speeds and seamless connectivity across the
              island. No hidden fees. No contracts.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="/plans"
                className="inline-flex items-center justify-center px-8 py-4 bg-infratel-red text-white font-medium rounded-md hover:bg-infratel-red-dark transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                View Mobile Plans
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="/coverage"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-infratel-gray font-medium rounded-md border-2 border-gray-200 hover:border-infratel-red hover:text-infratel-red transition-all"
              >
                <MapPin className="mr-2" size={20} />
                Check Coverage
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                No Contract Required
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Free SIM Delivery
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Port Your Number Free
              </div>
            </div>
          </div>

          {/* Right Visual - Abstract Singapore Constellation */}
          <div className="relative h-[500px] pointer-events-none">
            <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 500 500">
              {/* Abstract Marina Bay Sands - Three towers with connecting top */}
              
              {/* Tower 1 (left) */}
              <line x1="150" y1="350" x2="150" y2="180" stroke="#6B7280" strokeWidth="1.5" className="animate-breathe" />
              {/* Tower 2 (middle) */}
              <line x1="220" y1="350" x2="220" y2="160" stroke="#6B7280" strokeWidth="1.5" className="animate-breathe" style={{ animationDelay: '0.5s' }} />
              {/* Tower 3 (right) */}
              <line x1="290" y1="350" x2="290" y2="180" stroke="#6B7280" strokeWidth="1.5" className="animate-breathe" style={{ animationDelay: '1s' }} />
              
              {/* Connecting "SkyPark" - curved top structure */}
              <path
                d="M 145 180 Q 220 150 295 180"
                fill="none"
                stroke="#E60023"
                strokeWidth="2"
                className="animate-breathe"
                style={{ animationDelay: '1.5s' }}
              />
              
              {/* Tower nodes */}
              <circle cx="150" cy="180" r="4" fill="#E60023" opacity="0.6" className="animate-pulse" />
              <circle cx="220" cy="160" r="4" fill="#E60023" opacity="0.6" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
              <circle cx="290" cy="180" r="4" fill="#E60023" opacity="0.6" className="animate-pulse" style={{ animationDelay: '1s' }} />
              
              {/* Abstract Singapore Flyer (observation wheel) */}
              <circle
                cx="380"
                cy="280"
                r="80"
                fill="none"
                stroke="#9CA3AF"
                strokeWidth="1"
                className="animate-breathe"
                style={{ animationDelay: '2s' }}
              />
              <circle
                cx="380"
                cy="280"
                r="70"
                fill="none"
                stroke="#D1D5DB"
                strokeWidth="0.5"
                opacity="0.6"
                className="animate-breathe"
                style={{ animationDelay: '2.5s' }}
              />
              
              {/* Flyer center hub */}
              <circle cx="380" cy="280" r="8" fill="#E60023" opacity="0.4" className="animate-pulse" style={{ animationDelay: '2s' }} />
              
              {/* Spoke lines radiating from center */}
              <line x1="380" y1="280" x2="380" y2="200" stroke="#D1D5DB" strokeWidth="0.5" opacity="0.4" />
              <line x1="380" y1="280" x2="460" y2="280" stroke="#D1D5DB" strokeWidth="0.5" opacity="0.4" />
              <line x1="380" y1="280" x2="330" y2="230" stroke="#D1D5DB" strokeWidth="0.5" opacity="0.4" />
              <line x1="380" y1="280" x2="430" y2="330" stroke="#D1D5DB" strokeWidth="0.5" opacity="0.4" />
              
              {/* Network connections between landmarks */}
              <line x1="220" y1="160" x2="380" y2="280" stroke="#9CA3AF" strokeWidth="0.5" opacity="0.3" strokeDasharray="4 4" />
              <line x1="290" y1="180" x2="380" y2="280" stroke="#9CA3AF" strokeWidth="0.5" opacity="0.3" strokeDasharray="4 4" />
              
              {/* Additional data nodes scattered */}
              <circle cx="320" cy="240" r="2" fill="#E60023" opacity="0.3" className="animate-pulse" style={{ animationDelay: '3s' }} />
              <circle cx="180" cy="280" r="2.5" fill="#E60023" opacity="0.35" className="animate-pulse" style={{ animationDelay: '3.5s' }} />
              <circle cx="440" cy="220" r="2" fill="#E60023" opacity="0.3" className="animate-pulse" style={{ animationDelay: '4s' }} />
              
              {/* Connecting lines to data nodes */}
              <line x1="220" y1="160" x2="320" y2="240" stroke="#D1D5DB" strokeWidth="0.5" opacity="0.2" />
              <line x1="150" y1="180" x2="180" y2="280" stroke="#D1D5DB" strokeWidth="0.5" opacity="0.2" />
              <line x1="380" y1="200" x2="440" y2="220" stroke="#D1D5DB" strokeWidth="0.5" opacity="0.2" />
              
              {/* Subtle baseline/ground */}
              <line x1="100" y1="350" x2="500" y2="350" stroke="#E5E7EB" strokeWidth="0.5" opacity="0.3" />
            </svg>

            {/* Subtle glow effect */}
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-red-100/30 to-transparent rounded-full blur-3xl animate-breathe"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
