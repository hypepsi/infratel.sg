import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Cpu, Wifi, Shield, BarChart } from 'lucide-react'

export default function IoTPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="bg-gradient-to-br from-infratel-red to-red-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Cpu className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              IoT Solutions
            </h1>
            <p className="text-xl text-white/90">
              Connect your devices with reliable, scalable IoT connectivity.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <Wifi className="w-12 h-12 text-infratel-red mb-4" />
                <h3 className="text-2xl font-bold mb-4">NB-IoT Connectivity</h3>
                <p className="text-gray-600 mb-4">
                  Low-power, wide-area connectivity for IoT devices
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Extended battery life (10+ years)</li>
                  <li>• Deep indoor penetration</li>
                  <li>• Cost-effective data plans</li>
                  <li>• Nationwide coverage</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <Shield className="w-12 h-12 text-infratel-red mb-4" />
                <h3 className="text-2xl font-bold mb-4">Secure & Reliable</h3>
                <p className="text-gray-600 mb-4">
                  Enterprise-grade security for your IoT deployment
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• End-to-end encryption</li>
                  <li>• Private APN</li>
                  <li>• SLA guarantees</li>
                  <li>• 24/7 monitoring</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <BarChart className="w-12 h-12 text-infratel-red mb-4" />
                <h3 className="text-2xl font-bold mb-4">IoT Platform</h3>
                <p className="text-gray-600 mb-4">
                  Manage your entire IoT fleet from one dashboard
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Real-time device monitoring</li>
                  <li>• Usage analytics</li>
                  <li>• API integration</li>
                  <li>• Automated alerts</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <Cpu className="w-12 h-12 text-infratel-red mb-4" />
                <h3 className="text-2xl font-bold mb-4">Use Cases</h3>
                <p className="text-gray-600 mb-4">
                  Powering IoT across industries
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Smart cities & infrastructure</li>
                  <li>• Asset tracking & logistics</li>
                  <li>• Smart meters & utilities</li>
                  <li>• Industrial automation</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <button className="px-8 py-4 bg-infratel-red text-white font-semibold rounded-lg hover:bg-red-700">
                Request IoT Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
