import Link from 'next/link'
import { Terminal, Cpu, ShieldAlert, Award, Star } from 'lucide-react'

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
              Careers at Digital Rakshak
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-gray-900 leading-[1.1] tracking-tight">
              Build the Future <br />of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Digital Trust</span>
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              Join a team building the secure, scalable verification infrastructure that helps modern businesses across India operate with confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="#openings"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                View Open Positions
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Content: Tech stack and culture perks (No bg image) */}
          <div className="relative">
            {/* Soft decorative blur border */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur-xl opacity-10 pointer-events-none" />
            
            {/* Visual Container */}
            <div className="relative bg-slate-50/50 backdrop-blur-sm rounded-3xl border border-slate-100 p-8 max-w-lg mx-auto lg:ml-auto space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-slate-900 font-bold text-sm">Engineering Culture</h3>
                  <p className="text-slate-500 text-xs">How we design, code, and deploy trust</p>
                </div>
                <span className="bg-blue-100 text-blue-700 text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                  Go & Python
                </span>
              </div>

              {/* Grid of highlights */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Terminal className="w-4 h-4 text-blue-600" />, label: "Go/Python Stack" },
                  { icon: <Cpu className="w-4 h-4 text-emerald-600" />, label: "High-scale APIs" },
                  { icon: <ShieldAlert className="w-4 h-4 text-indigo-600" />, label: "Zero-Trust Sec" },
                  { icon: <Award className="w-4 h-4 text-yellow-600" />, label: "Learning Budget" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-slate-700 font-bold text-xs">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Banner badge */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-4 flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-slate-900 font-bold text-xs mb-0.5">High Impact Team</h4>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    Build products that verify millions of identities daily, setting digital trust standards across financial platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
