'use client'

import React, { useState } from 'react'
import {
  Search,
  Database,
  FileCheck2,
  BrainCircuit,
  Send,
  CheckCircle2,
  Layers,
  ArrowRight,
  ShieldCheck,
  Building2,
  TrendingUp,
  AlertCircle
} from 'lucide-react'

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      num: '01',
      title: 'Input GSTIN or Bulk Batch',
      description: 'Submit a single 15-digit GSTIN or upload bulk CSV payloads via our REST endpoint or web console.',
      icon: Search,
      preview: {
        title: 'GSTIN Payload Received',
        code: '27AABCU9603R1ZM',
        badge: 'Validation Passed',
        status: 'Valid 15-char Format'
      }
    },
    {
      num: '02',
      title: 'Query Real-time GSTN Gateway',
      description: 'Our multi-region GSP cluster dispatches the authenticated query directly to the official GST Network in under 80ms.',
      icon: Database,
      preview: {
        title: 'Gateway Query Dispatched',
        code: 'GSTN-GSP-NODE-04 [ACTIVE]',
        badge: 'Response 200 OK',
        status: 'Encrypted Handshake Complete'
      }
    },
    {
      num: '03',
      title: 'Parse & Normalize Taxpayer Records',
      description: 'Data fields including trade name, principal business address, state code, constitution, and filing history are normalized.',
      icon: FileCheck2,
      preview: {
        title: 'Taxpayer Records Parsed',
        code: 'INFOSYS LIMITED (Public Ltd)',
        badge: 'Active & Compliant',
        status: 'Filing: GSTR-1, 3B Regular'
      }
    },
    {
      num: '04',
      title: 'AI Risk & ITC Integrity Scoring',
      description: 'Our proprietary risk engine evaluates compliance consistency, identifies late filing patterns, and computes counterparty risk score.',
      icon: BrainCircuit,
      preview: {
        title: 'Risk Engine Evaluation',
        code: 'Risk Score: 0.02 (Very Low)',
        badge: 'ITC Claim Safe',
        status: 'Zero Blacklist Flags'
      }
    },
    {
      num: '05',
      title: 'Deliver Decision-Ready JSON Output',
      description: 'Receive clean, structured JSON payload straight into your ERP, underwriting system, or vendor management portal.',
      icon: Send,
      preview: {
        title: 'Final Payload Delivered',
        code: 'Payload dispatched to ERP webhook',
        badge: 'Integration Success',
        status: 'Latency: 114ms total'
      }
    }
  ]

  return (
    <section id="how-it-works" className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-4">
            <Layers className="w-3.5 h-3.5 text-purple-400" />
            <span>HOW IT WORKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            From GSTIN Input to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400">
              Instant Intelligence in 5 Steps
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-4 leading-relaxed">
            Understand how our low-latency infrastructure transforms raw government data into actionable risk decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Realistic Laptop Mockup with Live Preview */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-[540px]">
              
              {/* Laptop Screen Bezel */}
              <div className="bg-[#1e293b] p-3 rounded-t-2xl border-t border-x border-slate-700 shadow-2xl">
                
                {/* Camera dot */}
                <div className="w-2 h-2 bg-slate-900 rounded-full mx-auto mb-2 border border-slate-700" />

                {/* Laptop Display Screen Content */}
                <div className="bg-[#0b1120] rounded-lg p-5 border border-white/10 text-left min-h-[340px] flex flex-col justify-between shadow-inner">
                  
                  {/* Top Bar of Screen */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      <span className="text-[11px] font-mono text-gray-400 ml-1">GSTN Gateway Monitor v2.4</span>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                      LIVE STREAM
                    </span>
                  </div>

                  {/* Active Step Real-time Dashboard View */}
                  <div className="space-y-3.5 flex-1">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                      <div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Active Pipeline Stage</div>
                      <div className="text-sm font-bold text-white mt-0.5 flex items-center justify-between">
                        <span>{steps[activeStep].preview.title}</span>
                        <span className="text-[10px] text-purple-400 bg-purple-950 px-2 py-0.5 rounded border border-purple-500/30">
                          Step {steps[activeStep].num} / 05
                        </span>
                      </div>
                    </div>

                    <div className="p-4 bg-[#111c38]/70 rounded-xl border border-indigo-500/20 space-y-2">
                      <div className="text-[11px] text-indigo-300 font-mono">
                        &gt; {steps[activeStep].preview.code}
                      </div>
                      <div className="flex items-center justify-between text-xs pt-2 border-t border-white/5">
                        <span className="text-gray-400">{steps[activeStep].preview.status}</span>
                        <span className="text-emerald-400 font-semibold">{steps[activeStep].preview.badge}</span>
                      </div>
                    </div>

                    {/* Mini metrics inside laptop */}
                    <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                      <div className="p-2 bg-white/5 rounded-lg border border-white/5">
                        <div className="text-gray-400">Response</div>
                        <div className="text-emerald-400 font-bold font-mono mt-0.5">118 ms</div>
                      </div>
                      <div className="p-2 bg-white/5 rounded-lg border border-white/5">
                        <div className="text-gray-400">Confidence</div>
                        <div className="text-purple-300 font-bold font-mono mt-0.5">99.98%</div>
                      </div>
                      <div className="p-2 bg-white/5 rounded-lg border border-white/5">
                        <div className="text-gray-400">Cache State</div>
                        <div className="text-cyan-400 font-bold font-mono mt-0.5">Live GSTN</div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom progress bar on laptop screen */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
                    <span>Workflow Progress</span>
                    <div className="w-36 h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-500"
                        style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                      />
                    </div>
                    <span className="text-purple-300 font-mono font-bold">{Math.round(((activeStep + 1) / steps.length) * 100)}%</span>
                  </div>

                </div>
              </div>

              {/* Laptop Base Bottom Lip */}
              <div className="h-4 bg-gradient-to-b from-slate-700 to-slate-800 rounded-b-xl relative shadow-2xl">
                <div className="w-20 h-1.5 bg-slate-600 rounded-b-md mx-auto" />
              </div>
              <div className="w-[108%] -ml-[4%] h-2 bg-slate-900/80 rounded-b-2xl blur-sm" />

            </div>
          </div>

          {/* Right Column: 5 Interactive Steps */}
          <div className="lg:col-span-6 space-y-3">
            {steps.map((step, idx) => {
              const Icon = step.icon
              const isActive = activeStep === idx

              return (
                <div
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 flex items-start gap-4 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#181335] to-[#0f172a] border-purple-500/60 shadow-[0_0_25px_rgba(147,51,234,0.2)] translate-x-1'
                      : 'bg-[#090e1c]/80 border-white/10 hover:border-white/20 hover:bg-[#0c1326]'
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl p-0.5 shrink-0 transition-all ${
                      isActive
                        ? 'bg-gradient-to-tr from-purple-600 to-cyan-500 shadow-md scale-105'
                        : 'bg-white/10'
                    }`}
                  >
                    <div className="w-full h-full bg-[#070b14] rounded-[10px] flex items-center justify-center">
                      <Icon className={`w-5 h-5 ${isActive ? 'text-purple-300' : 'text-gray-400'}`} />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className={`text-base font-bold transition-colors ${isActive ? 'text-white' : 'text-gray-300'}`}>
                        {step.title}
                      </h4>
                      <span className={`text-xs font-mono font-bold ${isActive ? 'text-purple-400' : 'text-gray-500'}`}>
                        {step.num}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-400 mt-1 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
