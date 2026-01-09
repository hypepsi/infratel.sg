'use client'

import { useState, Suspense } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CheckCircle, ArrowRight, Shield, Truck, Zap } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

function SignupForm() {
  const searchParams = useSearchParams()
  const planParam = searchParams.get('plan')
  
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    plan: planParam || '5g-pro',
    fullName: '',
    nric: '',
    dateOfBirth: '',
    email: '',
    mobile: '',
    address: '',
    postalCode: '',
    deliveryOption: 'standard',
    portNumber: false,
    currentNumber: '',
    currentProvider: '',
    paymentMethod: 'card',
  })

  const plans = {
    'sim-only-lite': { name: 'SIM Only Lite', price: 18.00 },
    '5g-pro': { name: '5G Pro', price: 28.50 },
    'elite-travel': { name: 'Elite Travel', price: 45.00 },
  }

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleNext = () => {
    setStep(prev => Math.min(prev + 1, 4))
  }

  const handleBack = () => {
    setStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    // 这里会跳转到确认页面
    window.location.href = '/signup/confirmation'
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Progress Steps */}
            <div className="mb-12">
              <div className="flex items-center justify-between">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="flex items-center flex-1">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                      step >= num ? 'bg-infratel-red text-white' : 'bg-gray-300 text-gray-600'
                    }`}>
                      {step > num ? <CheckCircle className="w-6 h-6" /> : num}
                    </div>
                    {num < 4 && (
                      <div className={`flex-1 h-1 mx-2 ${
                        step > num ? 'bg-infratel-red' : 'bg-gray-300'
                      }`}></div>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2 text-sm">
                <span className={step >= 1 ? 'text-infratel-red font-semibold' : 'text-gray-600'}>Plan</span>
                <span className={step >= 2 ? 'text-infratel-red font-semibold' : 'text-gray-600'}>Personal Info</span>
                <span className={step >= 3 ? 'text-infratel-red font-semibold' : 'text-gray-600'}>Delivery</span>
                <span className={step >= 4 ? 'text-infratel-red font-semibold' : 'text-gray-600'}>Payment</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
              {/* Step 1: Plan Selection */}
              {step === 1 && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Choose Your Plan</h2>
                  
                  <div className="space-y-4">
                    {Object.entries(plans).map(([key, plan]) => (
                      <label
                        key={key}
                        className={`flex items-center p-6 border-2 rounded-lg cursor-pointer transition-all ${
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
                          className="w-5 h-5 text-infratel-red"
                        />
                        <div className="ml-4 flex-1">
                          <p className="font-bold text-lg">{plan.name}</p>
                          <p className="text-gray-600">Starting from ${plan.price.toFixed(2)}/month</p>
                        </div>
                        {formData.plan === key && (
                          <CheckCircle className="w-6 h-6 text-infratel-red" />
                        )}
                      </label>
                    ))}
                  </div>

                  <div className="mt-8 flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                    <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-blue-900">
                      <p className="font-semibold mb-1">No Contract Required</p>
                      <p>Cancel anytime with just 30 days notice. No penalties or hidden fees.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Personal Information */}
              {step === 2 && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Personal Information</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name (as per NRIC) *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-infratel-red"
                        placeholder="John Tan Wei Ming"
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          NRIC/FIN *
                        </label>
                        <input
                          type="text"
                          name="nric"
                          value={formData.nric}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-infratel-red"
                          placeholder="S1234567A"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Date of Birth *
                        </label>
                        <input
                          type="date"
                          name="dateOfBirth"
                          value={formData.dateOfBirth}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-infratel-red"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-infratel-red"
                        placeholder="john@example.com"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-infratel-red"
                        placeholder="+65 9123 4567"
                        required
                      />
                    </div>

                    <div className="pt-4">
                      <label className="flex items-start space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="portNumber"
                          checked={formData.portNumber}
                          onChange={handleChange}
                          className="w-5 h-5 text-infratel-red mt-0.5"
                        />
                        <div>
                          <p className="font-medium text-gray-900">I want to port my existing number</p>
                          <p className="text-sm text-gray-600">Transfer your current mobile number to Infratel (2-4 hours)</p>
                        </div>
                      </label>

                      {formData.portNumber && (
                        <div className="mt-4 pl-8 space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Current Mobile Number *
                            </label>
                            <input
                              type="tel"
                              name="currentNumber"
                              value={formData.currentNumber}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-infratel-red"
                              placeholder="+65 8765 4321"
                              required={formData.portNumber}
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Current Provider *
                            </label>
                            <select
                              name="currentProvider"
                              value={formData.currentProvider}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-infratel-red"
                              required={formData.portNumber}
                            >
                              <option value="">Select provider</option>
                              <option value="singtel">Singtel</option>
                              <option value="starhub">StarHub</option>
                              <option value="m1">M1</option>
                              <option value="circles-life">Circles.Life</option>
                              <option value="gomo">Gomo</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Delivery */}
              {step === 3 && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Delivery Details</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Delivery Address *
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-infratel-red"
                        placeholder="Block 123 Orchard Road #12-34"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Postal Code *
                      </label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-infratel-red"
                        placeholder="238859"
                        maxLength={6}
                        required
                      />
                    </div>

                    <div className="mt-6">
                      <label className="block text-sm font-medium text-gray-700 mb-4">
                        Delivery Option
                      </label>
                      
                      <div className="space-y-3">
                        <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer ${
                          formData.deliveryOption === 'standard' ? 'border-infratel-red bg-red-50' : 'border-gray-200'
                        }`}>
                          <input
                            type="radio"
                            name="deliveryOption"
                            value="standard"
                            checked={formData.deliveryOption === 'standard'}
                            onChange={handleChange}
                            className="w-5 h-5 text-infratel-red"
                          />
                          <div className="ml-4 flex-1">
                            <div className="flex items-center">
                              <Truck className="w-5 h-5 text-gray-600 mr-2" />
                              <p className="font-semibold">Standard Delivery</p>
                              <span className="ml-auto text-green-600 font-semibold">FREE</span>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">Receive in 2-3 business days</p>
                          </div>
                        </label>

                        <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer ${
                          formData.deliveryOption === 'express' ? 'border-infratel-red bg-red-50' : 'border-gray-200'
                        }`}>
                          <input
                            type="radio"
                            name="deliveryOption"
                            value="express"
                            checked={formData.deliveryOption === 'express'}
                            onChange={handleChange}
                            className="w-5 h-5 text-infratel-red"
                          />
                          <div className="ml-4 flex-1">
                            <div className="flex items-center">
                              <Zap className="w-5 h-5 text-infratel-red mr-2" />
                              <p className="font-semibold">Express Delivery</p>
                              <span className="ml-auto font-semibold">$5.00</span>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">Next business day delivery</p>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Payment */}
              {step === 4 && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Payment Method</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-4">
                        Select Payment Method
                      </label>
                      
                      <div className="space-y-3">
                        <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer ${
                          formData.paymentMethod === 'card' ? 'border-infratel-red bg-red-50' : 'border-gray-200'
                        }`}>
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="card"
                            checked={formData.paymentMethod === 'card'}
                            onChange={handleChange}
                            className="w-5 h-5 text-infratel-red"
                          />
                          <div className="ml-4">
                            <p className="font-semibold">Credit/Debit Card</p>
                            <p className="text-sm text-gray-600">Visa, Mastercard, Amex accepted</p>
                          </div>
                        </label>

                        <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer ${
                          formData.paymentMethod === 'paynow' ? 'border-infratel-red bg-red-50' : 'border-gray-200'
                        }`}>
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="paynow"
                            checked={formData.paymentMethod === 'paynow'}
                            onChange={handleChange}
                            className="w-5 h-5 text-infratel-red"
                          />
                          <div className="ml-4">
                            <p className="font-semibold">PayNow</p>
                            <p className="text-sm text-gray-600">Instant bank transfer</p>
                          </div>
                        </label>

                        <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer ${
                          formData.paymentMethod === 'giro' ? 'border-infratel-red bg-red-50' : 'border-gray-200'
                        }`}>
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="giro"
                            checked={formData.paymentMethod === 'giro'}
                            onChange={handleChange}
                            className="w-5 h-5 text-infratel-red"
                          />
                          <div className="ml-4">
                            <p className="font-semibold">GIRO</p>
                            <p className="text-sm text-gray-600">Automatic deduction from bank account</p>
                          </div>
                        </label>
                      </div>
                    </div>

                    {/* Order Summary */}
                    <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">{plans[formData.plan as keyof typeof plans].name}</span>
                          <span className="font-semibold">${plans[formData.plan as keyof typeof plans].price.toFixed(2)}/mo</span>
                        </div>
                        {formData.deliveryOption === 'express' && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">Express Delivery</span>
                            <span className="font-semibold">$5.00</span>
                          </div>
                        )}
                        <div className="border-t pt-2 mt-2 flex justify-between">
                          <span className="font-bold">Total (First Month)</span>
                          <span className="font-bold text-infratel-red text-xl">
                            ${(plans[formData.plan as keyof typeof plans].price + (formData.deliveryOption === 'express' ? 5 : 0)).toFixed(2)}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-4">All prices inclusive of GST</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="mt-8 flex justify-between">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                )}
                
                {step < 4 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="ml-auto px-8 py-3 bg-infratel-red text-white font-semibold rounded-lg hover:bg-red-700 transition-colors flex items-center"
                  >
                    Continue
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="ml-auto px-8 py-3 bg-infratel-red text-white font-semibold rounded-lg hover:bg-red-700 transition-colors flex items-center"
                  >
                    Complete Order
                    <CheckCircle className="ml-2 w-5 h-5" />
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default function SignupPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <p className="text-gray-600">Loading...</p>
        </div>
        <Footer />
      </main>
    }>
      <SignupForm />
    </Suspense>
  )
}
