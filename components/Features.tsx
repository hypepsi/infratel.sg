'use client'

import { Signal, Phone, Zap, Smartphone } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'

const features = [
  {
    icon: <Signal className="w-8 h-8" />,
    title: '99% Islandwide Coverage',
    description: 'Including MRT tunnels, underground malls, and all residential areas.',
    color: 'bg-blue-50 text-blue-600',
    hoverColor: 'group-hover:bg-blue-100',
  },
  {
    icon: <Phone className="w-8 h-8" />,
    title: 'Keep Your Number',
    description: 'Port-in available. Transfer your existing number in 2 hours.',
    color: 'bg-green-50 text-green-600',
    hoverColor: 'group-hover:bg-green-100',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Free Incoming Calls',
    description: 'All incoming calls are free. Pay only for outgoing calls.',
    color: 'bg-purple-50 text-purple-600',
    hoverColor: 'group-hover:bg-purple-100',
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Same-Day eSIM Delivery',
    description: 'Get your eSIM within hours. No physical SIM required.',
    color: 'bg-orange-50 text-orange-600',
    hoverColor: 'group-hover:bg-orange-100',
  },
]

const stats = [
  { value: 2500000, suffix: '+', label: 'Active Subscribers', format: true },
  { value: 500, suffix: '+', label: 'Mbps Average Speed', format: false },
  { value: 24, suffix: '/7', label: 'Customer Support', format: false },
  { value: 4.8, suffix: '★', label: 'Customer Rating', format: false },
]

// 数字递增动画组件
function AnimatedNumber({ value, suffix, format }: { value: number; suffix: string; format: boolean }) {
  const [displayValue, setDisplayValue] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setDisplayValue(value)
              clearInterval(timer)
            } else {
              setDisplayValue(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, hasAnimated])

  const formatNumber = (num: number) => {
    if (format && num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    }
    return num.toLocaleString()
  }

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-bold gradient-text-animate mb-2">
      {formatNumber(displayValue)}{suffix}
    </div>
  )
}

export default function Features() {
  return (
    <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 right-10 w-40 h-40 bg-infratel-red/5 rounded-full blur-3xl animate-breathe"></div>
        <div className="absolute bottom-10 left-10 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl animate-breathe" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 animate-slide-up">
          <span className="inline-block px-4 py-1 bg-infratel-red/10 text-infratel-red rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-infratel-gray mb-4">
            Why Choose <span className="gradient-text-animate">Infratel</span>?
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
              className="group relative bg-white rounded-xl p-6 border border-gray-200 hover:border-infratel-red transition-all duration-500 hover:shadow-2xl card-3d animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-infratel-red/0 via-infratel-red/5 to-infratel-red/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon */}
              <div
                className={`relative inline-flex items-center justify-center w-16 h-16 rounded-lg ${feature.color} ${feature.hoverColor} mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
              >
                {feature.icon}
                {/* Icon glow */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: '0 0 20px rgba(230, 0, 35, 0.3)' }}></div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-infratel-gray mb-2 group-hover:text-infratel-red transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{feature.description}</p>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-infratel-red/30 transition-all duration-500"></div>
              
              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-xl">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-infratel-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section with Animated Numbers */}
        <div className="mt-20 relative">
          {/* Stats background */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-3xl"></div>
          
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto py-12 px-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative inline-block">
                  {/* Pulse ring behind number */}
                  <div className="absolute inset-0 bg-infratel-red/10 rounded-full scale-0 group-hover:scale-150 transition-transform duration-700 blur-xl"></div>
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} format={stat.format} />
                </div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
