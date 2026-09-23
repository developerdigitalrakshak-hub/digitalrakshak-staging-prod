'use client'

import React, { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight
} from 'lucide-react'

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    volume: '10,000 - 50,000 / month',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        volume: '10,000 - 50,000 / month',
        message: ''
      })
    }, 4000)
  }

  return (
    <section id="contact" className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Form Card */}
          <div className="lg:col-span-7 bg-white text-gray-900 rounded-3xl p-8 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.9)] relative">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>INSTANT SANDBOX ACCESS</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight mb-2">
              Ready to Automate Your GST Verification?
            </h3>
            <p className="text-gray-600 text-sm mb-8 leading-relaxed">
              Fill out the form below and our API solutions engineering team will provision your sandbox credentials within 15 minutes.
            </p>

            {submitted ? (
              <div className="p-8 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-xl font-bold text-emerald-900">Request Received!</h4>
                <p className="text-sm text-emerald-700">
                  Our developer relations team is generating your sandbox credentials. Check your inbox shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Rahul Sharma"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rahul@enterprise.com"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all text-gray-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Reliance Industries"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all text-gray-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Estimated Monthly API Calls
                  </label>
                  <select
                    value={formData.volume}
                    onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all text-gray-900 font-medium"
                  >
                    <option>&lt; 5,000 / month</option>
                    <option>5,000 - 25,000 / month</option>
                    <option>25,000 - 100,000 / month</option>
                    <option>100,000+ / month (Enterprise High-Scale)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Specific Requirements or Questions
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your use case (e.g., ERP integration, vendor onboarding, fraud detection)..."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all text-gray-900"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 text-base font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:opacity-95 rounded-xl shadow-[0_10px_25px_rgba(124,58,237,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <span>Request Sandbox &amp; Schedule Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact info & Trust pillars */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div>
              <h4 className="text-2xl font-extrabold text-white tracking-tight mb-3">
                Talk Directly With Our Solutions Engineers
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Whether you need assistance with rate limits, custom SLA terms, or enterprise on-prem deployment, our team is available 24/7.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#0b1222] border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Email Us</div>
                  <div className="text-sm font-bold text-white">support@digitalrakshak.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#0b1222] border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Enterprise Hotline</div>
                  <div className="text-sm font-bold text-white">+91 (080) 4567 8900</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#0b1222] border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-cyan-600/20 text-cyan-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Headquarters</div>
                  <div className="text-sm font-bold text-white">Cyber City, Gurugram, India</div>
                </div>
              </div>
            </div>

            {/* Security Pillars */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>SOC-2 Type II</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>24/7 Dedicated Support</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                <span>99.99% SLA Uptime</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
