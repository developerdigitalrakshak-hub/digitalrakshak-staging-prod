import { CheckSquare, Combine, Globe } from "lucide-react"

export default function WhyTrustUs() {
  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4 max-w-[80%]">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest bg-slate-50 border border-slate-200 px-3.5 py-1 rounded-full shadow-sm">
            Enterprise Value
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mt-5">
            Why Enterprises Trust Digital Rakshak
          </h2>
        </div>

        {/* 3 Column Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Reason 1 */}
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <CheckSquare className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Single-Source Accountability</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Stop chasing multiple vendors. We handle the tech, the security, and the compliance tracking under one roof.
            </p>
          </div>

          {/* Reason 2 */}
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Combine className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Unified Domain Architecture</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our systems are built to talk to each other seamlessly, removing data silos and reducing operational friction.
            </p>
          </div>

          {/* Reason 3 */}
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Built for Global Expansion</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Whether you are verifying local talent or moving capital and operations across borders, our platform adapts to local and international frameworks alike.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
