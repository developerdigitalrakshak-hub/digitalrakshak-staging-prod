'use client'

import React from 'react'
import Image from 'next/image'
import {
  ShieldAlert,
  Zap,
  BadgePercent,
  TrendingDown,
  Layers,
  Sparkles,
  CheckCircle2,
  FileCheck,
  Building2
} from 'lucide-react'

export default function KeyBenefits() {
  const benefits = [
    {
      num: '01',
      title: 'Zero Manual Errors & Rework',
      desc: 'Eliminate human typos and mismatched PAN-GST associations with 100% automated field population.',
      icon: CheckCircle2,
      color: 'text-emerald-400'
    },
    {
      num: '02',
      title: 'Fraud & Shell Company Shield',
      desc: 'Detect counterfeit GST certificates, suspended statuses, and high-risk circular traders instantly.',
      icon: ShieldAlert,
      color: 'text-rose-400'
    },
    {
      num: '03',
      title: 'Accelerated Vendor Onboarding',
      desc: 'Cut counterparty verification cycle times from days to under 30 seconds for higher conversion.',
      icon: Zap,
      color: 'text-amber-400'
    },
    {
      num: '04',
      title: 'Maximize Input Tax Credit (ITC)',
      desc: 'Avoid hefty tax losses by auditing vendor GSTR-1 and GSTR-3B filing discipline before releasing payouts.',
      icon: BadgePercent,
      color: 'text-cyan-400'
    },
    {
      num: '05',
      title: 'Drastic Operational Cost Savings',
      desc: 'Reduce compliance verification operational overhead by over 75% compared to manual auditing teams.',
      icon: TrendingDown,
      color: 'text-purple-400'
    },
    {
      num: '06',
      title: 'Enterprise Scalability & Multi-GSP Failover',
      desc: 'Seamlessly scale from 10 to 1,000,000+ monthly API requests with automatic multi-node failover.',
      icon: Layers,
      color: 'text-indigo-400'
    }
  ]

  return (
    <section className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-purple-950/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>BUSINESS IMPACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Key Benefits For Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400">
              Enterprise Bottom Line
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-4 leading-relaxed">
            Built for CFOs, compliance heads, procurement officers, and engineering teams who demand precision and speed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: 6 Rich Feature Items */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {benefits.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.num}
                  className="bg-[#0b1222]/90 border border-white/10 hover:border-purple-500/40 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <span className="text-xs font-mono font-bold text-gray-500 group-hover:text-purple-400">
                        {item.num}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Column: Dashboard Mockup Preview with Glowing Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl p-3 bg-gradient-to-b from-purple-500/30 via-indigo-500/10 to-transparent border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl">
              
              <div className="relative rounded-2xl overflow-hidden bg-[#0a0f1d] border border-white/10 aspect-[4/3]">
                <Image
                  src="/images/dashboard-mockup.jpg"
                  alt="Enterprise GSTIN Verification Dashboard"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating Live Badge 1 */}
              <div className="absolute -top-4 -left-4 bg-[#0d1428]/95 border border-purple-500/40 rounded-2xl p-3.5 shadow-2xl backdrop-blur-xl flex items-center gap-3 z-20">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">GSTR-3B Reconciled</div>
                  <div className="text-[10px] text-emerald-400 font-medium">100% Tax Compliant</div>
                </div>
              </div>

              {/* Floating Live Badge 2 */}
              <div className="absolute -bottom-4 -right-4 bg-[#0d1428]/95 border border-cyan-500/40 rounded-2xl p-3.5 shadow-2xl backdrop-blur-xl flex items-center gap-3 z-20">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Direct GSP Stream</div>
                  <div className="text-[10px] text-cyan-300 font-mono">Latency: 114ms</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
