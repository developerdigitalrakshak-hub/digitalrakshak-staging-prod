import { Shield, Monitor, Settings } from "lucide-react"

export default function EcosystemStack() {
  return (
    <section id="stack" className="py-20 lg:py-24 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4 max-w-[80%]">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest bg-slate-50 border border-slate-200 px-3.5 py-1 rounded-full shadow-sm">
            Ecosystem Architecture
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mt-5 mb-4">
            Our Integrated Ecosystem Stack
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed max-w-xl mx-auto">
            Instead of juggling a messy mix of point solutions, software vendors, and legal consultants, Digital Rakshak unifies your operations across three core, integrated layers:
          </p>
        </div>

        {/* 3 Column Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Trust Layer */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col justify-between hover:border-blue-200 hover:shadow-md transition-all duration-200">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span>Trust Layer</span>
                </h3>
                <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                  Core verification tools to protect your business from fraud.
                </p>
              </div>
              <ul className="space-y-2 pt-2 border-t border-slate-200/60 text-slate-600 text-sm">
                {['e-KYC & Identity Matching', 'Background Verification (BGV)', 'Financial Risk Intelligence'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technology Layer */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col justify-between hover:border-indigo-200 hover:shadow-md transition-all duration-200">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                <Monitor className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span>Technology Layer</span>
                </h3>
                <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                  Secure software and AI automation built for strict data environments.
                </p>
              </div>
              <ul className="space-y-2 pt-2 border-t border-slate-200/60 text-slate-600 text-sm">
                {['AI-Driven Business Solutions', 'Enterprise Cybersecurity', 'Custom Software Development'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-indigo-500 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Operations Layer */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col justify-between hover:border-purple-200 hover:shadow-md transition-all duration-200">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                <Settings className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span>Operations Layer</span>
                </h3>
                <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                  Human capital and cross-border regulatory enablement.
                </p>
              </div>
              <ul className="space-y-2 pt-2 border-t border-slate-200/60 text-slate-600 text-sm">
                {['HR Excellence & Workforce Suite', 'Regulatory Advisory & Compliance', 'Global Trade Enablement'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-purple-500 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
