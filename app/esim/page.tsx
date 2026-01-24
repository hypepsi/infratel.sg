import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Smartphone, Download, QrCode, CheckCircle } from 'lucide-react'

export default function eSIMPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="bg-gradient-to-br from-infratel-red to-red-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Smartphone className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              eSIM - Instant Activation
            </h1>
            <p className="text-xl text-white/90">
              Get connected in minutes with our digital SIM. No physical card needed.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              How eSIM Works
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              {/* Left - Image */}
              <div className="flex justify-center">
                <img 
                  src="/images/esim-scan-v2.png" 
                  alt="Scan QR code to activate Infratel eSIM"
                  className="max-w-[320px] w-full h-auto rounded-xl shadow-lg"
                />
              </div>
              
              {/* Right - Steps */}
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-infratel-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Download className="w-7 h-7 text-infratel-red" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">1. Choose Plan</h3>
                    <p className="text-gray-600">Select your preferred mobile plan online and complete checkout.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-infratel-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <QrCode className="w-7 h-7 text-infratel-red" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">2. Scan QR Code</h3>
                    <p className="text-gray-600">Receive your unique QR code via email instantly after purchase.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-infratel-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-7 h-7 text-infratel-red" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">3. Get Connected</h3>
                    <p className="text-gray-600">Scan the code with your phone camera and activate in seconds.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Compatible Devices</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">iPhone</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• iPhone 15 Series</li>
                    <li>• iPhone 14 Series</li>
                    <li>• iPhone 13 Series</li>
                    <li>• iPhone 12 Series</li>
                    <li>• iPhone 11 Series</li>
                    <li>• iPhone XS / XR and newer</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Android</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Samsung Galaxy S24/S23/S22</li>
                    <li>• Google Pixel 8/7/6</li>
                    <li>• Samsung Galaxy Z Fold/Flip</li>
                    <li>• Oppo Find X5/X6</li>
                    <li>• And many more...</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
