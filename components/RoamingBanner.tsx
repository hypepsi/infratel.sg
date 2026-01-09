import { Plane, ArrowRight } from 'lucide-react'

export default function RoamingBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-infratel-red to-infratel-red-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-white">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                <Plane className="w-8 h-8" />
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Going to JB this weekend?
              </h2>
              
              <p className="text-lg text-white/90 mb-6">
                Roam like home from just{' '}
                <span className="text-2xl font-bold">$5/day</span> with our
                DataTravel Pass.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Unlimited data in 50+ countries</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>No bill shock - pay as you go</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Activate via app instantly</span>
                </li>
              </ul>

              <a
                href="/roaming"
                className="inline-flex items-center px-8 py-4 bg-white text-infratel-red font-medium rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
              >
                Explore Roaming Options
                <ArrowRight className="ml-2" size={20} />
              </a>
            </div>

            {/* Right Image/Visual */}
            <div className="relative lg:block hidden">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&h=400&fit=crop"
                  alt="Travel destination"
                  className="w-full h-[350px] object-cover"
                />
                {/* Popular Destinations Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white text-sm font-medium mb-2">
                    Popular Destinations
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Malaysia', 'Thailand', 'Indonesia', 'Japan', 'Australia'].map(
                      (country) => (
                        <span
                          key={country}
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs"
                        >
                          {country}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
