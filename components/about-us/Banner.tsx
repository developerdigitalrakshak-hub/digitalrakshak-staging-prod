import Link from 'next/link'
import { Shield, Server, Lock, Cpu, Globe } from 'lucide-react'

export default function Banner() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24 border-b border-gray-100">
      {/* Subtle light background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="relative z-10 max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-semibold text-xs uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              Digital Rakshak Platform
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-gray-900 leading-[1.1] tracking-tight">
              Building the Infrastructure <br />for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Trusted Digital Business</span>
            </h1>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
              Digital Rakshak builds the backend infrastructure that powers secure hiring, verification, and compliance. We combine real-time verification tech, compliance automation, and secure software development to give businesses a single, accountable partner for high-stakes operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Partner With Us
              </Link>
              <Link
                href="#stack"
                className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-8 py-4 rounded-xl transition-all shadow-sm hover:-translate-y-0.5 border border-slate-200"
              >
                Explore Our Stack
              </Link>
            </div>
          </div>

          {/* Right Content: Styled Infrastructure Stack Visual (No bg image) */}
          <div className="relative">
            {/* Soft decorative blur border */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur-xl opacity-10 pointer-events-none" />
            
            {/* Visual Container */}
            <div className="relative bg-slate-50/50 backdrop-blur-sm rounded-3xl border border-slate-100 p-8 max-w-lg mx-auto lg:ml-auto space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-slate-900 font-bold text-sm">Trust & Security Infrastructure</h3>
                  <p className="text-slate-500 text-xs">Architecting digital verification nodes</p>
                </div>
                <span className="bg-emerald-100 text-emerald-700 text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                  ISO Verified
                </span>
              </div>

              {/* Node graph simulator */}
              <div className="relative h-44 bg-white rounded-2xl border border-slate-100 p-4 overflow-hidden flex items-center justify-center shadow-inner">
                {/* Central Hub */}
                <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center relative z-20 shadow-md">
                  <Shield className="w-8 h-8" />
                  <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
                  </span>
                </div>

                {/* Sub nodes */}
                <div className="absolute top-4 left-8 w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center border border-slate-200 z-10 hover:border-blue-300 transition-colors cursor-pointer">
                  <Server className="w-5 h-5 text-blue-500" />
                </div>
                <div className="absolute bottom-4 left-10 w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center border border-slate-200 z-10 hover:border-blue-300 transition-colors cursor-pointer">
                  <Lock className="w-5 h-5 text-indigo-500" />
                </div>
                <div className="absolute top-6 right-10 w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center border border-slate-200 z-10 hover:border-blue-300 transition-colors cursor-pointer">
                  <Cpu className="w-5 h-5 text-purple-500" />
                </div>
                <div className="absolute bottom-6 right-8 w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center border border-slate-200 z-10 hover:border-blue-300 transition-colors cursor-pointer">
                  <Globe className="w-5 h-5 text-cyan-500" />
                </div>

                {/* Connection lines using simple SVG overlay */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
                  <line x1="160" y1="88" x2="68" y2="44" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="4" />
                  <line x1="160" y1="88" x2="78" y2="136" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="4" />
                  <line x1="160" y1="88" x2="252" y2="52" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="4" />
                  <line x1="160" y1="88" x2="256" y2="124" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="4" />
                </svg>
              </div>

              {/* Bottom taglines */}
              <div className="flex justify-between text-[11px] text-slate-400 font-semibold tracking-wider uppercase">
                <span>⚡ Real-time API</span>
                <span>🔒 Zero-Trust</span>
                <span>⚖️ Compliant By Default</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
