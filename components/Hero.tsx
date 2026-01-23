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
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-infratel-red/10 text-infratel-red text-sm font-medium mb-4 sm:mb-6 animate-slide-up">
              <span className="w-2 h-2 bg-infratel-red rounded-full mr-2 animate-pulse"></span>
              5G Standalone Available Now
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-infratel-gray leading-tight mb-4 sm:mb-6 animate-slide-up delay-100">
              Next-Generation{' '}
              <span className="text-infratel-red text-shimmer">5G Standalone</span> Network in Singapore
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed animate-slide-up delay-200">
              Experience ultra-fast speeds and seamless connectivity across the
              island. No hidden fees. No contracts.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 animate-slide-up delay-300">
              <Link
                href="/plans"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-infratel-red text-white font-medium rounded-md hover:bg-infratel-red-dark transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 btn-gradient-hover"
              >
                View Mobile Plans
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
              </Link>
              <Link
                href="/coverage"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-infratel-gray font-medium rounded-md border-2 border-gray-200 hover:border-infratel-red hover:text-infratel-red transition-all transform hover:-translate-y-1"
              >
                <MapPin className="mr-2" size={20} />
                Check Coverage
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600 animate-slide-up delay-400">
              <div className="flex items-center hover:text-green-600 transition-colors duration-300">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 flex-shrink-0 animate-pulse-ring"
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
              <div className="flex items-center hover:text-green-600 transition-colors duration-300">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 flex-shrink-0 animate-pulse-ring"
                  style={{ animationDelay: '0.5s' }}
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
              <div className="flex items-center hover:text-green-600 transition-colors duration-300">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 flex-shrink-0 animate-pulse-ring"
                  style={{ animationDelay: '1s' }}
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

          {/* Right Visual - Hero Image */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] hidden sm:block animate-slide-in-right delay-200">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/hero-5g-singapore.png"
                alt="5G Network in Singapore - Woman using smartphone with Marina Bay Sands skyline"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
