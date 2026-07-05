import Link from 'next/link'
import { ShieldCheck, FileText, UserCheck, ShieldAlert, Check } from 'lucide-react'

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
              Academy
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-gray-900 leading-[1.1] tracking-tight">
              Learn Identity <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Verification</span>,<br /> Compliance & Trust
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              Build practical expertise in KYC, workforce screening, fraud prevention, and changing compliance laws with blueprints and guides designed by industry practitioners.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="#categories"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Explore Learning Resources
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Content: Unique Digital Trust Flow visual (No bg image) */}
          <div className="relative">
            {/* Soft decorative blur border */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur-xl opacity-10 pointer-events-none" />

            {/* Visual Container */}
            <div className="relative bg-slate-50/50 backdrop-blur-sm rounded-3xl border border-slate-100 p-8 space-y-6 max-w-lg mx-auto lg:ml-auto">
              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-slate-900 font-bold text-sm">Interactive Verification Flow</h3>
                  <p className="text-slate-500 text-xs">Simulating identity checks in real-time</p>
                </div>
                <span className="bg-green-100 text-green-700 text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                  Secure
                </span>
              </div>

              {/* Steps timeline */}
              <div className="space-y-4 relative">
                {/* Connector Line */}
                <div className="absolute left-[21px] top-3 bottom-3 w-0.5 bg-slate-200" />

                {[
                  {
                    icon: <FileText className="w-4 h-4 text-blue-600" />,
                    title: "Aadhaar & PAN Parsing",
                    desc: "Secure OCR extracts user details, matching signatures and checksums.",
                    status: "completed",
                  },
                  {
                    icon: <UserCheck className="w-4 h-4 text-emerald-600" />,
                    title: "Biometric Liveness Match",
                    desc: "Face matching validates live presence, rejecting spoofing attempts.",
                    status: "completed",
                  },
                  {
                    icon: <ShieldAlert className="w-4 h-4 text-indigo-600" />,
                    title: "AML & Risk Intelligence",
                    desc: "System conducts PEP database lookup and transaction risk checks.",
                    status: "active",
                  },
                  {
                    icon: <ShieldCheck className="w-4 h-4 text-slate-400" />,
                    title: "DPDP 2023 Audit Logs",
                    desc: "Cryptographic proof of digital consent is saved securely.",
                    status: "pending",
                  },
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-4 relative z-10 items-start">
                    {/* Circle icon wrapper */}
                    <div className={`w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 transition-all shadow-sm ${step.status === 'completed'
                      ? 'bg-emerald-50 border-2 border-emerald-500 text-emerald-500'
                      : step.status === 'active'
                        ? 'bg-blue-50 border-2 border-blue-500 text-blue-500 animate-pulse'
                        : 'bg-slate-100 border border-slate-200 text-slate-400'
                      }`}>
                      {step.status === 'completed' ? (
                        <Check className="w-5 h-5 text-emerald-600" strokeWidth={3} />
                      ) : (
                        step.icon
                      )}
                    </div>

                    {/* Step details */}
                    <div className="flex-1 bg-white p-3.5 rounded-xl border border-slate-100 shadow-sm">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-slate-800 font-bold text-xs">{step.title}</h4>
                        {step.status === 'active' && (
                          <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider animate-pulse">
                            Processing
                          </span>
                        )}
                      </div>
                      <p className="text-slate-500 text-[11px] leading-relaxed">{step.desc}</p>
                    </div>
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
