import { Check, Star, Globe } from 'lucide-react'

interface PricingPlan {
  name: string
  price: string
  tag: string
  tagColor: string
  features: string[]
  highlighted?: boolean
  icon: React.ReactNode
}

const plans: PricingPlan[] = [
  {
    name: 'SIM Only Lite',
    price: '$18.00',
    tag: 'For Students/Seniors',
    tagColor: 'bg-blue-100 text-blue-700',
    icon: <Check className="w-6 h-6" />,
    features: [
      '100GB Local Data',
      '500 Mins Talktime',
      '100 SMS',
      'Free Incoming Calls',
      'No Contract',
      'eSIM Ready',
    ],
  },
  {
    name: '5G Pro',
    price: '$28.50',
    tag: 'Best Seller',
    tagColor: 'bg-infratel-red text-white',
    highlighted: true,
    icon: <Star className="w-6 h-6" />,
    features: [
      '200GB 5G Data',
      '1000 Mins Talktime',
      'Unlimited SMS',
      'Free 10GB Roaming (Malaysia & Thailand)',
      'Free Incoming Calls',
      'Same-Day eSIM',
    ],
  },
  {
    name: 'Elite Travel',
    price: '$45.00',
    tag: 'For Frequent Travelers',
    tagColor: 'bg-purple-100 text-purple-700',
    icon: <Globe className="w-6 h-6" />,
    features: [
      '300GB 5G Data',
      'Unlimited Talktime',
      'Unlimited SMS',
      '20GB Global Roaming',
      'Priority Customer Support',
      'Complimentary Airport Lounge Access',
    ],
  },
]

export default function PricingGrid() {
  return (
    <section id="plans" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-infratel-gray mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-lg text-gray-600">
            No hidden fees. All prices inclusive of GST. Cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl ${
                plan.highlighted
                  ? 'ring-2 ring-infratel-red scale-105 lg:scale-110'
                  : 'hover:scale-105'
              }`}
            >
              {/* Best Seller Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full bg-infratel-red text-white text-sm font-semibold shadow-lg">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-3 rounded-lg ${
                      plan.highlighted
                        ? 'bg-infratel-red text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {plan.icon}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${plan.tagColor}`}>
                    {plan.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-infratel-gray mb-2">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-infratel-red">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-2">/mth</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">w/GST</p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href={`/signup?plan=${plan.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`block w-full text-center px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 ${
                    plan.highlighted
                      ? 'bg-infratel-red text-white hover:bg-infratel-red-dark shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Get Started →
                </a>

                <p className="text-xs text-center text-gray-500 mt-4">
                  Free delivery · Activate instantly
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Need a custom plan for your business?
          </p>
          <a
            href="/business"
            className="inline-flex items-center text-infratel-red font-medium hover:underline"
          >
            Contact our Business Team
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
