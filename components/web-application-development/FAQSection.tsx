'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'How much does web application development cost?',
    a: 'The cost varies based on complexity, features, and technology stack. Simple apps typically range from $15K–$50K, while enterprise solutions can be $100K+. We provide detailed estimates after discovery.',
  },
  {
    q: 'How long does it take to build a web application?',
    a: 'A basic web app takes 2–4 months. Mid-complexity apps take 4–8 months, and enterprise applications can take 8–18 months. Timeline depends on scope, integrations, and your feedback cycles.',
  },
  {
    q: 'Do you sign an NDA before the project starts?',
    a: 'Yes, absolutely. We sign a comprehensive NDA before any project discussion, protecting your ideas, business logic, and proprietary information throughout and after the project.',
  },
  {
    q: 'Who owns the code and intellectual property?',
    a: 'You do. Once the project is complete and payment is made, all source code, assets, and IP transfer fully to you. We retain no rights over your product.',
  },
  {
    q: 'What post-launch support do you provide?',
    a: 'We offer flexible maintenance plans including 24/7 monitoring, bug fixes, security patches, performance optimization, and feature enhancements. Plans start at a monthly retainer.',
  },
  {
    q: 'Can you work with an existing codebase?',
    a: 'Yes. We have a team specialized in legacy modernization and code audits. We can assess your existing codebase and recommend the best path forward — refactor, rewrite, or extend.',
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
              <span className="text-blue-600 text-xs font-semibold uppercase tracking-wider">FAQs</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-lg mb-8">
              Have more questions? Our team is ready to discuss your specific project requirements.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
            >
              Talk to an Expert
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right: Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`border rounded-2xl overflow-hidden transition-all ${
                  open === i ? 'border-blue-200 shadow-md shadow-blue-50' : 'border-gray-100'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className={`font-display font-semibold text-base ${open === i ? 'text-blue-600' : 'text-gray-900'}`}>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                    open === i ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500'
                  }`}>
                    <svg className={`w-4 h-4 transition-transform ${open === i ? 'rotate-45' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </button>
                {open === i && (
                  <div className="px-5 pb-5">
                    <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
