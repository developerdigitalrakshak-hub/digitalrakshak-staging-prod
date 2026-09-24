'use client'

import React, { useState } from 'react'
import {
  HelpCircle,
  ChevronDown,
  Plus,
  Minus,
  Sparkles
} from 'lucide-react'

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      q: 'What is the difference between Public GSTIN Verification and Consent-Based Verification?',
      a: 'Public GSTIN verification validates real-time active registration status, legal/trade business names, state code, and constitution without requiring customer OTPs. Consent-based verification uses OTP authorization to pull confidential tax compliance records, 24+ months of GSTR-1 and GSTR-3B filings, turnover brackets, and ITC reconciliation data for deep financial auditing.'
    },
    {
      q: 'How fast is the API response time and what is the uptime SLA?',
      a: 'Our API delivers sub-150ms roundtrip response times (average ~118ms) backed by a 99.99% enterprise uptime SLA. We maintain redundant connections across multiple GST Suvidha Provider (GSP) nodes with automatic failover to prevent downtime during peak government portal traffic.'
    },
    {
      q: 'Can our finance team verify GSTIN records in bulk?',
      a: 'Yes! We offer high-throughput bulk verification via both our asynchronous batch API endpoints and our web-based business console. You can upload CSV or Excel files containing 100,000+ GSTINs and receive real-time webhook alerts or download consolidated audit reports.'
    },
    {
      q: 'Is DigitalRakshak compliant with data privacy and security standards?',
      a: 'Yes, completely. DigitalRakshak is ISO 27001 and SOC-2 Type II certified. All API communications are secured with bank-grade 256-bit TLS encryption. No sensitive payload data is stored unnecessarily, ensuring complete compliance with the Digital Personal Data Protection Act (DPDPA).'
    },
    {
      q: 'Which ERPs and software frameworks are supported?',
      a: 'We provide RESTful JSON APIs compatible with any tech stack. We offer official SDKs for Node.js, Python, Java, Go, PHP, and cURL, along with pre-configured webhooks and connectors for SAP ERP, Oracle NetSuite, Tally Prime, Zoho Books, and Salesforce.'
    },
    {
      q: 'How do I start sandbox testing and generate API keys?',
      a: 'You can request instant sandbox credentials using the form below. Sandbox access provides full feature parity with mock test GSTIN profiles allowing your engineering team to complete integration and end-to-end testing in under 15 minutes.'
    }
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-[#050914] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-indigo-950/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-indigo-400" />
            <span>GOT QUESTIONS?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Frequently Asked <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400">
              Questions
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-4 leading-relaxed">
            Everything you need to know about our GST verification services, API architecture, and compliance.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#0d1428] border-purple-500/50 shadow-[0_5px_25px_rgba(147,51,234,0.15)]'
                    : 'bg-[#090e1c]/80 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className={`text-base sm:text-lg font-bold transition-colors ${isOpen ? 'text-white' : 'text-gray-200'}`}>
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-purple-600 text-white rotate-180' : 'bg-white/5 text-gray-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 border-t border-white/5 text-sm sm:text-base text-gray-300 leading-relaxed animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
