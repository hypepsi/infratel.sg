import { Plane, ArrowRight, MapPin } from 'lucide-react'

export default function RoamingBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-infratel-red to-infratel-red-dark relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating circles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-20 w-48 h-48 bg-white/5 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/5 rounded-full animate-float-gentle"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
        
        {/* Animated plane trail */}
        <div className="absolute top-20 right-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-white animate-slide-in-left">
              <div className="relative inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6 group hover:bg-white/30 transition-all duration-300">
                <Plane className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
                {/* Pulse rings */}
                <div className="absolute inset-0 rounded-full border border-white/30 animate-ping"></div>
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
                className="group inline-flex items-center px-8 py-4 bg-white text-infratel-red font-medium rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-2xl hover:scale-105 transform duration-300 glow-red-hover"
              >
                Explore Roaming Options
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </a>
            </div>

            {/* Right Image/Visual */}
            <div className="relative lg:block hidden animate-slide-in-right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group hover:shadow-3xl transition-shadow duration-500">
                <img
                  src="/images/roaming-travel.png"
                  alt="Woman using phone while traveling at beach"
                  className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Shine overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Popular Destinations Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div className="flex items-center mb-2">
                    <MapPin className="w-4 h-4 mr-1 animate-bounce-gentle" />
                    <p className="text-white text-sm font-medium">
                      Popular Destinations
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Malaysia', 'Thailand', 'Indonesia', 'Japan', 'Australia'].map(
                      (country, index) => (
                        <span
                          key={country}
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs hover:bg-white/40 transition-all duration-300 cursor-pointer hover:scale-110"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          {country}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-3 animate-float-gentle">
                <div className="text-center">
                  <span className="text-2xl font-bold text-infratel-red">$5</span>
                  <p className="text-xs text-gray-600">/day</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
