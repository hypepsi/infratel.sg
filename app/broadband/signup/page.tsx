'use client'

import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Home, User, MapPin, CreditCard, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react'

function SignupForm() {
  const searchParams = useSearchParams()
  const planParam = searchParams.get('plan') || 'home-1gbps'
  
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    plan: planParam,
    fullName: '',
    email: '',
    phone: '',
    nric: '',
    address: '',
    postalCode: '',
    unitNumber: '',
    preferredDate: '',
    preferredTime: 'morning',
    paymentMethod: 'credit-card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  })

  const planDetails: { [key: string]: { name: string; speed: string; price: string } } = {
    'home-500': { name: 'Home 500', speed: '500Mbps', price: '$29.90' },
    'home-1gbps': { name: 'Home 1Gbps', speed: '1Gbps', price: '$39.90' },
    'home-2gbps': { name: 'Home 2Gbps', speed: '2Gbps', price: '$49.90' },
  }

  const currentPlan = planDetails[formData.plan] || planDetails['home-1gbps']

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 4) {
      setStep(step + 1)
    } else {
      // Submit form
      window.location.href = '/broadband/signup/confirmation'
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Get Your Broadband Service
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              Complete your order in just a few steps
            </p>
          </div>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center">
              {[1, 2, 3, 4].map((s, idx) => (
                <div key={s} className="flex items-center">
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-semibold text-sm ${
                      step >= s
                        ? 'bg-infratel-red text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {s}
                  </div>
                  {idx < 3 && (
                    <div
                      className={`w-12 sm:w-24 h-1 mx-2 ${
                        step > s ? 'bg-infratel-red' : 'bg-gray-200'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-3 text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
              <span className="text-center w-20">Plan</span>
              <span className="text-center w-20">Details</span>
              <span className="text-center w-20">Installation</span>
              <span className="text-center w-20">Payment</span>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Plan Selection */}
              {step === 1 && (
                <div>
                  <div className="flex items-center mb-6">
                    <Home className="w-6 h-6 text-infratel-red mr-3" />
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Select Your Plan</h2>
                  </div>

                  <div className="space-y-4">
                    {Object.entries(planDetails).map(([key, plan]) => (
                      <label
                        key={key}
                        className={`block p-4 sm:p-6 border-2 rounded-lg cursor-pointer transition-all ${
                          formData.plan === key
                            ? 'border-infratel-red bg-red-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="plan"
                          value={key}
                          checked={formData.plan === key}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900">{plan.name}</h3>
                            <p className="text-sm sm:text-base text-gray-600">{plan.speed} Fiber Broadband</p>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl sm:text-3xl font-bold text-infratel-red">{plan.price}</p>
                            <p className="text-xs sm:text-sm text-gray-500">/month</p>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Personal Details */}
              {step === 2 && (
                <div>
                  <div className="flex items-center mb-6">
                    <User className="w-6 h-6 text-infratel-red mr-3" />
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Personal Details</h2>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name (as per NRIC) *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-infratel-red focus:border-transparent"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-infratel-red focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+65"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-infratel-red focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        NRIC/FIN *
                      </label>
                      <input
                        type="text"
                        name="nric"
                        required
                        value={formData.nric}
                        onChange={handleChange}
                        placeholder="S1234567A"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-infratel-red focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Installation Address */}
              {step === 3 && (
                <div>
                  <div className="flex items-center mb-6">
                    <MapPin className="w-6 h-6 text-infratel-red mr-3" />
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Installation Details</h2>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Postal Code *
                      </label>
                      <input
                        type="text"
                        name="postalCode"
                        required
                        value={formData.postalCode}
                        onChange={handleChange}
                        placeholder="123456"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-infratel-red focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Street Address *
                      </label>
                      <input
                        type="text"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-infratel-red focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Unit Number *
                      </label>
                      <input
                        type="text"
                        name="unitNumber"
                        required
                        value={formData.unitNumber}
                        onChange={handleChange}
                        placeholder="#12-34"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-infratel-red focus:border-transparent"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Installation Date *
                        </label>
                        <input
                          type="date"
                          name="preferredDate"
                          required
                          value={formData.preferredDate}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-infratel-red focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Time Slot *
                        </label>
                        <select
                          name="preferredTime"
                          required
                          value={formData.preferredTime}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-infratel-red focus:border-transparent"
                        >
                          <option value="morning">Morning (9AM - 12PM)</option>
                          <option value="afternoon">Afternoon (12PM - 3PM)</option>
                          <option value="evening">Evening (3PM - 6PM)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Payment */}
              {step === 4 && (
                <div>
                  <div className="flex items-center mb-6">
                    <CreditCard className="w-6 h-6 text-infratel-red mr-3" />
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Payment Information</h2>
                  </div>

                  {/* Order Summary */}
                  <div className="bg-gray-50 rounded-lg p-4 sm:p-6 mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Order Summary</h3>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">{currentPlan.name} Broadband</span>
                      <span className="font-semibold">{currentPlan.price}/month</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Installation Fee</span>
                      <span className="font-semibold line-through text-gray-400">$50.00</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-green-600">Installation Discount</span>
                      <span className="font-semibold text-green-600">-$50.00</span>
                    </div>
                    <div className="border-t border-gray-300 pt-2 mt-2">
                      <div className="flex justify-between">
                        <span className="font-bold text-gray-900">First Month Total</span>
                        <span className="font-bold text-infratel-red text-xl">{currentPlan.price}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Card Number *
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        required
                        value={formData.cardNumber}
                        onChange={handleChange}
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-infratel-red focus:border-transparent"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Expiry Date *
                        </label>
                        <input
                          type="text"
                          name="expiryDate"
                          required
                          value={formData.expiryDate}
                          onChange={handleChange}
                          placeholder="MM/YY"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-infratel-red focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          CVV *
                        </label>
                        <input
                          type="text"
                          name="cvv"
                          required
                          value={formData.cvv}
                          onChange={handleChange}
                          placeholder="123"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-infratel-red focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <ArrowLeft className="mr-2" size={20} />
                    Back
                  </button>
                )}
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center px-6 py-3 bg-infratel-red text-white font-semibold rounded-lg hover:bg-red-700 transition-colors touch-manipulation"
                >
                  {step === 4 ? (
                    <>
                      Complete Order
                      <CheckCircle className="ml-2" size={20} />
                    </>
                  ) : (
                    <>
                      Continue
                      <ArrowRight className="ml-2" size={20} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Trust Indicators */}
          <div className="mt-6 text-center text-xs sm:text-sm text-gray-600">
            <p>🔒 Your information is secure and encrypted</p>
            <p className="mt-2">Free installation · No contract · Cancel anytime</p>
          </div>
        </div>
      </div>
  )
}

export default function BroadbandSignupPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <Suspense fallback={
        <div className="container mx-auto px-4 py-20 text-center">
          <p className="text-gray-600">Loading...</p>
        </div>
      }>
        <SignupForm />
      </Suspense>
      <Footer />
    </main>
  )
}
