import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Users, Award, Globe, TrendingUp, Heart, Zap } from 'lucide-react'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-infratel-red to-red-600 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              About Infratel
            </h1>
            <p className="text-xl text-white/90">
              A Singapore-based mobile network operator focused on delivering reliable 5G connectivity with transparent pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Story
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Founded in 2025, Infratel Communications was established with a clear mission: to provide Singaporeans with transparent, affordable mobile connectivity without the complexity of traditional telco contracts.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                As a Mobile Virtual Network Operator (MVNO), we leverage existing network infrastructure to deliver 5G connectivity while focusing on what matters most – exceptional customer service and straightforward pricing with no hidden fees.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Our team is dedicated to simplifying mobile services. Whether you're a local resident or a business, we offer flexible plans designed to meet your connectivity needs. We believe great service shouldn't come with surprises on your bill.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Our Values
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-infratel-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-infratel-red" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Customer First
                </h3>
                <p className="text-gray-600">
                  Every decision we make starts with our customers. Your needs drive our innovation.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-infratel-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-infratel-red" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Innovation
                </h3>
                <p className="text-gray-600">
                  We embrace new technology to deliver the best possible service and stay ahead of the curve.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-infratel-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-infratel-red" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Transparency
                </h3>
                <p className="text-gray-600">
                  No hidden fees, no confusing terms. We believe in honest, straightforward communication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Our Achievements
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                <Users className="w-12 h-12 text-infratel-red mx-auto mb-4" />
                <p className="text-4xl font-bold text-gray-900 mb-2">24/7</p>
                <p className="text-gray-600">Customer Support</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                <Award className="w-12 h-12 text-infratel-red mx-auto mb-4" />
                <p className="text-4xl font-bold text-gray-900 mb-2">5G</p>
                <p className="text-gray-600">Standalone Network</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                <TrendingUp className="w-12 h-12 text-infratel-red mx-auto mb-4" />
                <p className="text-4xl font-bold text-gray-900 mb-2">$0</p>
                <p className="text-gray-600">Hidden Fees</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                <Zap className="w-12 h-12 text-infratel-red mx-auto mb-4" />
                <p className="text-4xl font-bold text-gray-900 mb-2">1Gbps</p>
                <p className="text-gray-600">Max Speed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Our Commitment to You
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">📱</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  No Contracts
                </h3>
                <p className="text-sm text-gray-600">Stay because you want to, not because you have to. Cancel anytime.</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">💰</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Transparent Pricing
                </h3>
                <p className="text-sm text-gray-600">What you see is what you pay. All prices include GST.</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Real Support
                </h3>
                <p className="text-sm text-gray-600">Talk to real people who care about solving your problems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Get in Touch
            </h2>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h3>
                  <div className="space-y-4 text-gray-600">
                    <p className="flex items-center">
                      <span className="w-8 h-8 bg-infratel-red/10 rounded-full flex items-center justify-center mr-3">📞</span>
                      <a href="tel:+6589891397" className="hover:text-infratel-red transition-colors">+65 8989 1397</a>
                    </p>
                    <p className="flex items-center">
                      <span className="w-8 h-8 bg-infratel-red/10 rounded-full flex items-center justify-center mr-3">✉️</span>
                      <a href="mailto:info@infratel.sg" className="hover:text-infratel-red transition-colors">info@infratel.sg</a>
                    </p>
                    <p className="flex items-center">
                      <span className="w-8 h-8 bg-infratel-red/10 rounded-full flex items-center justify-center mr-3">💬</span>
                      <a href="https://wa.me/6589891397" className="hover:text-infratel-red transition-colors">WhatsApp Us</a>
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Office Address</h3>
                  <div className="text-gray-600">
                    <p className="font-medium">Infratel Communications Pte. Ltd.</p>
                    <p>60 Paya Lebar Road, #11-53</p>
                    <p>Paya Lebar Square</p>
                    <p>Singapore 409051</p>
                    <p className="mt-4 text-sm">
                      <span className="font-medium">Hours:</span> Mon-Fri 9am - 6pm
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Company Information
            </h2>
            
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="text-white/90 space-y-2">
                <p className="text-xl font-bold">Infratel Communications Pte. Ltd.</p>
                <p>UEN: 202532622H</p>
                <p className="pt-4">60 Paya Lebar Road, #11-53</p>
                <p>Paya Lebar Square</p>
                <p>Singapore 409051</p>
                <div className="pt-6 flex flex-col sm:flex-row justify-center gap-4">
                  <a href="tel:+6589891397" className="inline-flex items-center justify-center px-6 py-3 bg-infratel-red text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
                    📞 +65 8989 1397
                  </a>
                  <a href="mailto:info@infratel.sg" className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                    ✉️ info@infratel.sg
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join the Infratel Team
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're always looking for passionate individuals to help us build Singapore's future of connectivity.
            </p>
            <button className="px-8 py-4 bg-infratel-red text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
              View Open Positions
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
