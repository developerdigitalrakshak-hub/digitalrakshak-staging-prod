import { PenTool, CheckCircle, TrendingUp, Cpu } from "lucide-react"

export default function OverviewSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-blue-50 blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-purple-50 blur-3xl opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-[80%] mx-auto">
          
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-medium text-sm shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Developer & Compliance Resource
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Why Follow Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Blog?</span>
            </h2>
            
            <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
              <p>
                We don't do fluff or high-level summaries. Our articles are written by engineers and compliance experts who work on these problems every day. 
              </p>
              <p>
                You’ll get actionable technical blueprints, direct breakdowns of new laws, and honest insights into where the identity and security industries are heading.
              </p>
              
              <ul className="grid sm:grid-cols-2 gap-4 pt-4">
                {[
                  { text: 'Practitioner Written', desc: 'Authored by active trust engineers.', icon: PenTool },
                  { text: 'Technical Blueprints', desc: 'Production-ready code architecture.', icon: Cpu },
                  { text: 'Direct Breakdowns', desc: 'Regulations simplified instantly.', icon: CheckCircle },
                  { text: 'Real Industry Trends', desc: 'Actual data and insights from staging.', icon: TrendingUp },
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-700 bg-gray-50/50 p-4 rounded-xl border border-gray-100">
                    <item.icon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block text-sm text-gray-900">{item.text}</span>
                      <span className="text-xs text-gray-500">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Right side visual: Reading engagement stats card (No bg image) */}
          <div className="relative group perspective">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-30 transition duration-700 pointer-events-none" />
            
            <div className="relative transform transition duration-700 group-hover:-translate-y-2 group-hover:scale-[1.02] bg-slate-900 rounded-[2rem] p-8 shadow-2xl border border-white/10 text-white min-h-[380px] flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-semibold text-blue-400 font-mono">READER METRICS</span>
                  <span className="bg-emerald-500/20 text-emerald-400 text-[10px] px-2 py-0.5 rounded-full font-semibold">LIVE UPDATES</span>
                </div>
                
                <h3 className="text-xl font-bold font-display mb-2">Our Writing Standard</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                  Each article undergoes thorough technical review by our engineering and legal teams to guarantee accuracy, code safety, and compliant system architecture patterns.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-6">
                {[
                  { label: "Engineering Content", val: "65%" },
                  { label: "Compliance Guides", val: "35%" },
                ].map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-[11px] text-gray-400 font-medium">
                      <span>{stat.label}</span>
                      <span className="text-blue-400">{stat.val}</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-full rounded-full" style={{ width: stat.val }} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 transform transition-transform group-hover:scale-105">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <span className="text-lg">📈</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">5,000+ Readers</div>
                  <div className="text-[10px] text-gray-400 font-medium">Active Subscribers</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
