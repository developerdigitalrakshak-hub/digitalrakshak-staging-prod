import { HeartHandshake, Eye, Shield, Users } from "lucide-react"

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
              Our Core Purpose
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Mission</span>
            </h2>
            
            <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
              <p>
                At Digital Rakshak, we are tackling a massive, messy problem: the lack of trust in the digital economy. Businesses lose time and money every day to identity fraud, fragmented data sources, and confusing regulatory laws.
              </p>
              <p>
                We are fixing this by building a clean, reliable, and secure infrastructure layer for verification and compliance. We help companies onboard users instantly, verify identities with data-backed confidence, and keep their business fully compliant by default.
              </p>
            </div>
          </div>
          
          {/* Right side visual: Our mission impacts metrics cards */}
          <div className="relative group perspective">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-30 transition duration-700 pointer-events-none" />
            
            <div className="relative transform transition duration-700 group-hover:-translate-y-2 group-hover:scale-[1.02] bg-slate-900 rounded-[2rem] p-8 shadow-2xl border border-white/10 text-white min-h-[380px] flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-semibold text-blue-400 font-mono">MISSION IMPACTS</span>
                  <span className="bg-emerald-500/20 text-emerald-400 text-[10px] px-2.5 py-0.5 rounded-full font-semibold">ESTABLISHED</span>
                </div>
                
                <h3 className="text-xl font-bold font-display mb-2">Building Trusted Infrastructures</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                  Our systems are engineered from the ground up to solve identity fragmentation and remove the legal uncertainty out of standard onboarding routines.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-6">
                {[
                  { icon: <Shield className="w-5 h-5 text-blue-400" />, label: "Security First" },
                  { icon: <HeartHandshake className="w-5 h-5 text-emerald-400" />, label: "Client Trust" },
                  { icon: <Eye className="w-5 h-5 text-indigo-400" />, label: "Transparent APIs" },
                  { icon: <Users className="w-5 h-5 text-purple-400" />, label: "Identity Scale" },
                ].map((stat, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                      {stat.icon}
                    </div>
                    <span className="text-gray-300 font-bold text-xs">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
