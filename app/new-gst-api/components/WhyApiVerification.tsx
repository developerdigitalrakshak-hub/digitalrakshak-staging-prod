'use client'

import React from 'react'
import {
  TrendingUp,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Clock,
  BarChart2,
  Lock,
  ArrowRight
} from 'lucide-react'

export default function WhyApiVerification() {
  return (
    <section className="py-24 bg-[#050914] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Why API Based Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
              <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
              <span>THE API ADVANTAGE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Why API-Based GST Verification <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400">
                Outperforms Manual Lookups
              </span>
            </h2>

            <p className="text-gray-300 text-base leading-relaxed">
              Manual portal checks are slow, error-prone, and cannot scale with enterprise growth. Our GST Verification API replaces hours of manual portal navigation with instant, automated data enrichment.
            </p>

            {/* Value checklist */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-purple-900/60 border border-purple-500/40 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">100% Elimination of Manual Errors</h4>
                  <p className="text-xs text-gray-400 mt-0.5">No copy-paste errors or missed status flags across thousands of vendor invoices.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-cyan-900/60 border border-cyan-500/40 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Direct Government GSP Integration</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Authoritative data queried directly from GSTN servers with cryptographic assurance.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-900/60 border border-emerald-500/40 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Massive Throughput &amp; Bulk Validation</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Process 100,000+ GSTIN queries simultaneously with intelligent batch endpoints.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 2x2 Analytics Metrics Grid matching Figma */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            {/* Metric 1: Uptime with Sparkline */}
            <div className="bg-gradient-to-b from-[#0b1222]/95 to-[#070b14]/95 border border-white/10 rounded-2xl p-6 shadow-xl relative overflow-hidden group hover:border-purple-500/40 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-gray-400">AVAILABILITY</span>
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/30">99.99%</span>
              </div>
              <div className="text-3xl font-extrabold text-white font-mono mb-1">99.99%</div>
              <div className="text-xs text-gray-400 mb-4">Guaranteed Enterprise SLA Uptime</div>

              {/* Sparkline line graph */}
              <div className="h-14 w-full flex items-end gap-1.5 pt-2">
                {[40, 55, 45, 60, 50, 70, 65, 80, 75, 90, 85, 95, 100].map((val, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-purple-600/40 to-cyan-400 rounded-t-sm transition-all duration-300 group-hover:from-purple-600 group-hover:to-cyan-300"
                    style={{ height: `${val}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Metric 2: Average Latency with Trend */}
            <div className="bg-gradient-to-b from-[#0b1222]/95 to-[#070b14]/95 border border-white/10 rounded-2xl p-6 shadow-xl relative overflow-hidden group hover:border-cyan-500/40 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-gray-400">SPEED (P95)</span>
                <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-500/30">&lt;120ms</span>
              </div>
              <div className="text-3xl font-extrabold text-white font-mono mb-1">118 ms</div>
              <div className="text-xs text-gray-400 mb-4">Average API Latency Roundtrip</div>

              {/* Speed Bars */}
              <div className="h-14 w-full flex items-end gap-1.5 pt-2">
                {[80, 70, 75, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20].map((val, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-cyan-600/40 to-emerald-400 rounded-t-sm transition-all duration-300 group-hover:from-cyan-600 group-hover:to-emerald-300"
                    style={{ height: `${val}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Metric 3: Circular Progress Accuracy */}
            <div className="bg-gradient-to-b from-[#0b1222]/95 to-[#070b14]/95 border border-white/10 rounded-2xl p-6 shadow-xl flex items-center justify-between group hover:border-purple-500/40 transition-all">
              <div>
                <div className="text-xs font-semibold text-gray-400 mb-1">DATA ACCURACY</div>
                <div className="text-2xl font-extrabold text-white font-mono">99.8%</div>
                <div className="text-[11px] text-gray-400 mt-1">Direct GSTN GSP Verification</div>
              </div>
              <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-gray-800"
                    strokeWidth="3.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-purple-500"
                    strokeDasharray="99.8, 100"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <span className="absolute text-[11px] font-bold font-mono text-purple-300">99.8%</span>
              </div>
            </div>

            {/* Metric 4: Circular Progress Onboarding Speed */}
            <div className="bg-gradient-to-b from-[#0b1222]/95 to-[#070b14]/95 border border-white/10 rounded-2xl p-6 shadow-xl flex items-center justify-between group hover:border-indigo-500/40 transition-all">
              <div>
                <div className="text-xs font-semibold text-gray-400 mb-1">ONBOARDING VELOCITY</div>
                <div className="text-2xl font-extrabold text-white font-mono">4.8x</div>
                <div className="text-[11px] text-gray-400 mt-1">Faster Counterparty Activation</div>
              </div>
              <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-gray-800"
                    strokeWidth="3.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-cyan-400"
                    strokeDasharray="85, 100"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <span className="absolute text-[11px] font-bold font-mono text-cyan-300">4.8x</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
