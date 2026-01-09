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
              Singapore's fastest-growing mobile network operator, committed to delivering reliable connectivity for all Singaporeans.
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
                Founded in 2020, Infratel was born from a simple vision: to make high-quality mobile connectivity accessible and affordable for every Singaporean. As a homegrown telco, we understand the unique needs of our community.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                In just a few years, we've grown from a startup to one of Singapore's most trusted mobile operators, serving over 500,000 customers across the island. Our success is built on three pillars: transparency, innovation, and customer-first service.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Today, we operate Singapore's fastest 5G Standalone network, covering 99% of the island with speeds that rival the world's best. But we're not stopping there – we're constantly investing in infrastructure and technology to ensure every Singaporean stays connected.
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
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <Users className="w-12 h-12 text-infratel-red mx-auto mb-4" />
                <p className="text-4xl font-bold text-gray-900 mb-2">500K+</p>
                <p className="text-gray-600">Happy Customers</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <Award className="w-12 h-12 text-infratel-red mx-auto mb-4" />
                <p className="text-4xl font-bold text-gray-900 mb-2">#1</p>
                <p className="text-gray-600">Customer Satisfaction</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <TrendingUp className="w-12 h-12 text-infratel-red mx-auto mb-4" />
                <p className="text-4xl font-bold text-gray-900 mb-2">99%</p>
                <p className="text-gray-600">Network Coverage</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <Zap className="w-12 h-12 text-infratel-red mx-auto mb-4" />
                <p className="text-4xl font-bold text-gray-900 mb-2">500+</p>
                <p className="text-gray-600">5G Base Stations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Awards & Recognition
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-8 text-center">
                <div className="text-5xl mb-4">🏆</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Best Mobile Network 2025
                </h3>
                <p className="text-sm text-gray-600">Singapore Telecommunications Award</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 text-center">
                <div className="text-5xl mb-4">⭐</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Top Customer Service 2024
                </h3>
                <p className="text-sm text-gray-600">Consumer Choice Awards</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 text-center">
                <div className="text-5xl mb-4">🌟</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Innovation Excellence 2024
                </h3>
                <p className="text-sm text-gray-600">IMDA Digital Excellence Awards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Leadership Team
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-infratel-red to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                  TL
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">
                  Tan Li Wei
                </h3>
                <p className="text-infratel-red font-medium mb-2">Chief Executive Officer</p>
                <p className="text-sm text-gray-600">
                  Former Singtel executive with 15 years in telecommunications.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                  KS
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">
                  Kumar Selvam
                </h3>
                <p className="text-infratel-red font-medium mb-2">Chief Technology Officer</p>
                <p className="text-sm text-gray-600">
                  Network architect who built Singapore's first 5G SA network.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                  MN
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">
                  Michelle Ng
                </h3>
                <p className="text-infratel-red font-medium mb-2">Chief Customer Officer</p>
                <p className="text-sm text-gray-600">
                  Customer experience specialist passionate about service excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Committed to Our Community
            </h2>
            <p className="text-xl text-white/90 mb-8">
              As a Singaporean company, we believe in giving back to the community that supports us.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <p className="text-4xl font-bold mb-2">$2M+</p>
                <p className="text-white/80">Donated to local charities</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">10K+</p>
                <p className="text-white/80">Students supported</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">50+</p>
                <p className="text-white/80">Community programs</p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20">
              <h3 className="text-xl font-semibold mb-4">Company Details</h3>
              <div className="text-white/80">
                <p><strong>Infratel Communications Pte. Ltd.</strong></p>
                <p>UEN: 202532622H</p>
                <p>60 Paya Lebar Road, #11-53</p>
                <p>Paya Lebar Square, Singapore 409051</p>
                <p className="mt-4">Incorporated: 28 July 2025</p>
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
