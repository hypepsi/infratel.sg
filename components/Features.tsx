import { Signal, Phone, Zap, Smartphone } from 'lucide-react'

const features = [
  {
    icon: <Signal className="w-8 h-8" />,
    title: '99% Islandwide Coverage',
    description: 'Including MRT tunnels, underground malls, and all residential areas.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: <Phone className="w-8 h-8" />,
    title: 'Keep Your Number',
    description: 'Port-in available. Transfer your existing number in 2 hours.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Free Incoming Calls',
    description: 'All incoming calls are free. Pay only for outgoing calls.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Same-Day eSIM Delivery',
    description: 'Get your eSIM within hours. No physical SIM required.',
    color: 'bg-orange-50 text-orange-600',
  },
]

export default function Features() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-infratel-gray mb-4">
            Why Choose Infratel?
          </h2>
          <p className="text-lg text-gray-600">
            Singapore's most trusted mobile network with best-in-class features.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl p-6 border border-gray-200 hover:border-infratel-red transition-all duration-300 hover:shadow-lg"
            >
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-lg ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-infratel-gray mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-infratel-red/20 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-infratel-red mb-2">2.5M+</div>
            <div className="text-sm text-gray-600">Active Subscribers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-infratel-red mb-2">500+</div>
            <div className="text-sm text-gray-600">Mbps Average Speed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-infratel-red mb-2">24/7</div>
            <div className="text-sm text-gray-600">Customer Support</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-infratel-red mb-2">4.8★</div>
            <div className="text-sm text-gray-600">Customer Rating</div>
          </div>
        </div>
      </div>
    </section>
  )
}
