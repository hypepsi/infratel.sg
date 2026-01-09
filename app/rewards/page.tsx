import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Gift, Star, Trophy, ShoppingBag, Coffee, Plane } from 'lucide-react'

export default function RewardsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-infratel-red to-red-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Gift className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Infratel Rewards
            </h1>
            <p className="text-xl text-white/90">
              Earn points with every dollar spent. Redeem for exclusive rewards, discounts, and experiences.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              How It Works
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-infratel-red/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-infratel-red">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Earn Points
                </h3>
                <p className="text-gray-600">
                  Get 1 point for every $1 spent on your monthly bill and in-store purchases.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-infratel-red/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-infratel-red">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Collect Rewards
                </h3>
                <p className="text-gray-600">
                  Points never expire. Save up for bigger rewards or spend them right away.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-infratel-red/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-infratel-red">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Redeem
                </h3>
                <p className="text-gray-600">
                  Choose from hundreds of rewards – vouchers, gadgets, bill rebates, and more.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-infratel-red to-red-600 text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">
                Bonus Points for New Members!
              </h3>
              <p className="text-lg mb-4">
                Sign up today and get 500 welcome points instantly
              </p>
              <button className="px-8 py-3 bg-white text-infratel-red font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Join Rewards Program
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Reward Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Popular Rewards
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <ShoppingBag className="w-10 h-10 text-infratel-red mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Shopping Vouchers
                </h3>
                <p className="text-gray-600 mb-4">
                  Redeem points for vouchers at your favorite retailers.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• $10 Grab voucher - 1000 points</li>
                  <li>• $20 NTUC FairPrice - 1800 points</li>
                  <li>• $50 Lazada voucher - 4500 points</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <Coffee className="w-10 h-10 text-infratel-red mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  F&B Treats
                </h3>
                <p className="text-gray-600 mb-4">
                  Enjoy meals and beverages at partner outlets.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Starbucks $5 - 500 points</li>
                  <li>• McDonald's $10 - 900 points</li>
                  <li>• Din Tai Fung $50 - 4500 points</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <Plane className="w-10 h-10 text-infratel-red mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Travel Perks
                </h3>
                <p className="text-gray-600 mb-4">
                  Convert points to airline miles and hotel stays.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• 1000 KrisFlyer miles - 2000 points</li>
                  <li>• Hotel staycation - 5000 points</li>
                  <li>• Airport lounge access - 3000 points</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Membership Tiers
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                  Silver
                </h3>
                <p className="text-center text-gray-600 mb-6">
                  $0 - $500 annual spend
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-infratel-red rounded-full mr-3 mt-2"></div>
                    <span className="text-sm text-gray-700">1 point per $1 spent</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-infratel-red rounded-full mr-3 mt-2"></div>
                    <span className="text-sm text-gray-700">Birthday bonus points</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-infratel-red rounded-full mr-3 mt-2"></div>
                    <span className="text-sm text-gray-700">Exclusive member deals</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-8 shadow-xl ring-2 ring-infratel-red">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                  Gold
                </h3>
                <p className="text-center text-gray-600 mb-6">
                  $501 - $1500 annual spend
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-infratel-red rounded-full mr-3 mt-2"></div>
                    <span className="text-sm text-gray-700">1.5 points per $1 spent</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-infratel-red rounded-full mr-3 mt-2"></div>
                    <span className="text-sm text-gray-700">Double birthday points</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-infratel-red rounded-full mr-3 mt-2"></div>
                    <span className="text-sm text-gray-700">Priority customer service</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-infratel-red rounded-full mr-3 mt-2"></div>
                    <span className="text-sm text-gray-700">Quarterly bonus rewards</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                  Platinum
                </h3>
                <p className="text-center text-gray-600 mb-6">
                  $1501+ annual spend
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-infratel-red rounded-full mr-3 mt-2"></div>
                    <span className="text-sm text-gray-700">2 points per $1 spent</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-infratel-red rounded-full mr-3 mt-2"></div>
                    <span className="text-sm text-gray-700">Triple birthday points</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-infratel-red rounded-full mr-3 mt-2"></div>
                    <span className="text-sm text-gray-700">VIP support hotline</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-infratel-red rounded-full mr-3 mt-2"></div>
                    <span className="text-sm text-gray-700">Exclusive platinum events</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-infratel-red rounded-full mr-3 mt-2"></div>
                    <span className="text-sm text-gray-700">Annual gift hamper</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Start Earning Rewards Today
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join Infratel Rewards and turn your everyday spending into amazing rewards.
            </p>
            <button className="px-8 py-4 bg-infratel-red text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
              Sign Up Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
