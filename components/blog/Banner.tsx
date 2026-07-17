import Link from 'next/link'
import { BookOpen, Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react'

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
              DigitalRakshak Blog
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-gray-900 leading-[1.1] tracking-tight">
              Insights on Verification, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Compliance</span> & Trust
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              Real-world commentary on data privacy laws, identity tech, fraud trends, and engineering trust, straight from the DigitalRakshak team.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="#write-about"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Read the Latest Articles
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Content: Styled Featured Article Preview Card (No bg image) */}
          <div className="relative">
            {/* Soft decorative blur border */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur-xl opacity-10 pointer-events-none" />

            {/* Visual Container */}
            <div className="relative bg-slate-50/50 backdrop-blur-sm rounded-3xl border border-slate-100 p-8 max-w-lg mx-auto lg:ml-auto">
              <div className="flex justify-between items-center pb-4 border-b border-slate-100 mb-6">
                <span className="flex items-center gap-1.5 text-xs text-blue-600 font-semibold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  Featured Post
                </span>
                <span className="bg-slate-200/60 text-slate-700 text-[10px] px-2 py-0.5 rounded font-mono">
                  HOT-OFF-THE-PRESS
                </span>
              </div>

              {/* Simulated Article Layout */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-indigo-600 tracking-widest uppercase">Tech & Architecture</span>
                  <h3 className="text-slate-900 font-extrabold text-lg sm:text-xl leading-snug hover:text-blue-600 transition-colors cursor-pointer">
                    How to Build a Latency-Free Identity Verification Pipeline
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    Optimizing Aadhaar API handshakes, setting up resilient webhooks, and reducing onboarding drop-offs to sub-second runtimes.
                  </p>
                </div>

                {/* Metadata row */}
                <div className="flex flex-wrap items-center gap-4 text-slate-400 text-xs pt-2 border-t border-slate-100">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    July 4, 2026
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    5 min read
                  </span>
                  <span className="text-slate-500 font-medium ml-auto">
                    By DR Engineering
                  </span>
                </div>

                {/* Button link */}
                <div className="pt-2">
                  <Link href="#write-about" className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 group">
                    Read Full Article
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
