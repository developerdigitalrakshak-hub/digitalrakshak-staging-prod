import { Fingerprint, Scale } from "lucide-react"

export default function BusinessVerticals() {
  return (
    <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-100">
      <div className="container mx-auto px-4 max-w-[80%]">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest bg-white border border-slate-200 px-3.5 py-1 rounded-full shadow-sm">
            Core Verticals
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mt-5">
            Specialized Solutions for Global Scale
          </h2>
        </div>

        {/* 2 Column Verticals layout */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Vertical 1 */}
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Fingerprint className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <span>ID-Stack Verification Service</span>
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our automated identity infrastructure. We provide high-throughput verification APIs that handle instant customer onboarding (KYC), corporate entity validation (KYB), and credential authentication at scale, ensuring you catch fraud right at the front door.
              </p>
            </div>
          </div>

          {/* Vertical 2 */}
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <span>Governance, Risk, and Compliance Services (GRCS)</span>
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Your shield against regulatory penalties and audit failures. We build compliance-first frameworks directly into your operations, making it easy to protect user data, stay aligned with evolving data privacy laws, and maintain strict risk oversight.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
