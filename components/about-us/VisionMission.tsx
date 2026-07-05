import { Eye, Target } from "lucide-react"

export default function VisionMission() {
  return (
    <section className="py-20 lg:py-24 relative overflow-hidden bg-slate-50 border-b border-slate-100">
      <div className="container mx-auto px-4 relative z-10 max-w-[80%]">
        
        {/* Title */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest bg-white border border-slate-200 px-3.5 py-1 rounded-full shadow-sm">
            Focus & Direction
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mt-5">
            Vision & Mission
          </h2>
        </div>

        {/* Side-by-side split grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Vision card */}
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To be India’s most trusted digital verification ecosystem, empowering secure hiring, academic integrity, and financial services across the digital economy.
              </p>
            </div>
          </div>

          {/* Mission card */}
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To deliver real-time, compliant, and scalable digital identity and academic verifications for citizens and businesses using secure, global APIs.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
