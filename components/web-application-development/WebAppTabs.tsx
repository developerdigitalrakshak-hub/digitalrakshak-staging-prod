'use client'

import { useState } from 'react'
import { Check, ArrowRight } from 'lucide-react'

const tabs = [
  {
    id: 'saas',
    label: 'SaaS',
    title: 'Multi-Tenant SaaS Web App',
    description:
      'DigitalRakshak builds SaaS platforms with multi-tenancy, billing, and tenant isolation, ready to scale to 100,000 users without re-architecting.',
    points: [
      {
        title: 'Isolated Multi-Tenant Architecture',
        desc: "Secure, compliance-ready shared or siloed tenancy models ensuring every customer's data stays completely separate and protected.",
      },
      {
        title: 'Billing & Subscription Engine',
        desc: 'Full-featured Stripe or Braintree integration with plan management, trial logic, invoicing, and real-time webhook handling baked into the app layer.',
      },
      {
        title: 'Elastic, Load-Ready Infrastructure',
        desc: 'Auto-scaling compute, async job queues, Redis caching, and CDN-backed delivery that maintains performance across every tenant as you grow.',
      },
    ],
    bestFor: [
      'Startups building a subscription software product',
      'Enterprises spinning out internal tools as commercial SaaS',
      'ISVs modernizing desktop software to cloud delivery',
      'B2B platforms serving multiple customers',
    ],
    stack: [
      'React',
      'Angular',
      'Node.js',
      '.NET Core',
      'PostgreSQL',
      'Redis',
      'AWS',
      'Azure',
      'Stripe',
      'Braintree',
      'Kubernetes',
    ],
  },

  {
    id: 'enterprise',
    label: 'Enterprise',
    title: 'Enterprise Web Application',
    description:
      'Enterprise-grade systems with secure workflows, integrations, and scalable architecture for large organizations.',
    points: [
      {
        title: 'Role-Based Access',
        desc: 'Advanced user permission and department-wise access control.',
      },
      {
        title: 'ERP & CRM Integration',
        desc: 'Integrate SAP, Salesforce, Oracle, and internal systems.',
      },
      {
        title: 'High Availability',
        desc: 'Distributed cloud architecture with failover systems.',
      },
    ],
    bestFor: [
      'Large enterprises',
      'Government organizations',
      'Manufacturing systems',
      'Internal operations',
    ],
    stack: ['React', 'Next.js', 'Node.js', 'MongoDB', 'AWS'],
  },

  {
    id: 'ecommerce',
    label: 'eCommerce',
    title: 'eCommerce Web Platform',
    description:
      'Modern eCommerce applications optimized for conversion, scalability, and customer experience.',
    points: [
      {
        title: 'Shopping Experience',
        desc: 'Fast and engaging UI optimized for sales conversion.',
      },
      {
        title: 'Payment Gateway',
        desc: 'Stripe, Razorpay, PayPal, and subscription integration.',
      },
      {
        title: 'Order Management',
        desc: 'Inventory, shipping, taxes, and reporting systems.',
      },
    ],
    bestFor: [
      'Online stores',
      'Marketplace businesses',
      'Retail brands',
      'Subscription commerce',
    ],
    stack: ['Next.js', 'Shopify', 'Node.js', 'Stripe', 'PostgreSQL'],
  },
]

export default function WebAppTabs() {
  const [activeTab, setActiveTab] = useState('saas')

  const activeContent = tabs.find((tab) => tab.id === activeTab)

  return (
    <section className="bg-[#f7f7f7] py-20">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-[48px] font-bold text-[#1B1B1B] leading-tight">
            Types of Web Application Development
          </h2>

          <p className="text-[20px] text-[#555] mt-5 max-w-5xl mx-auto leading-9">
            Our web app development services cover eight distinct application
            types, each with its own architecture, technology choices, and
            delivery approach. Select yours to see exactly how we build it.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg border text-[18px] font-medium transition-all duration-300
                ${
                  activeTab === tab.id
                    ? 'border-[#7B61FF] text-[#7B61FF] bg-white'
                    : 'border-[#ddd] text-[#333] bg-white hover:border-[#7B61FF]'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-[1.6fr_1fr] border border-[#e6e6e6] rounded-md overflow-hidden bg-white">
          {/* Left */}
          <div className="p-5 lg:p-7">
            <h3 className="text-[30px] font-bold text-[#1B1B1B] mb-3">
              {activeContent?.title}
            </h3>

            <p className="text-[18px] leading-9 text-[#555] mb-10">
              {activeContent?.description}
            </p>

            <div className="space-y-5">
              {activeContent?.points.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <div className="pt-2">
                    <Check className="text-[#00B894] w-5 h-5" />
                  </div>

                  <div>
                    <h4 className="text-[24px] font-semibold text-[#1B1B1B] mb-3">
                      {item.title}
                    </h4>

                    <p className="text-[16px] leading-9 text-[#555]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-12 bg-[#2563EB] hover:bg-[#1E4ED8] text-white px-8 py-5 rounded-md text-[18px] font-semibold flex items-center gap-3 transition">
              Discuss Your SaaS Project
              <ArrowRight size={22} />
            </button>
          </div>

          {/* Right */}
          <div className="bg-[#EEF5FF] p-8 lg:p-10 flex flex-col gap-8">
            {/* Best For */}
            <div className="bg-white rounded-lg p-8">
              <h4 className="text-[30px] font-semibold mb-6 text-[#1B1B1B]">
                Best for
              </h4>

              <div className="space-y-5">
                {activeContent?.bestFor.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 text-[18px] text-[#444] leading-8"
                  >
                    <span className="text-[#2563EB] text-2xl">→</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stack */}
            <div className="bg-white rounded-lg p-8">
              <h4 className="text-[30px] font-semibold mb-6 text-[#1B1B1B]">
                Common Stack
              </h4>

              <div className="flex flex-wrap gap-4">
                {activeContent?.stack.map((item, index) => (
                  <span
                    key={index}
                    className="px-5 py-2 rounded-full bg-[#EEF4FF] text-[#2563EB] text-[16px] font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}