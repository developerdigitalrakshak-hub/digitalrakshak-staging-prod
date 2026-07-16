import Image from "next/image"
import { CheckCircle2, ShieldCheck, GraduationCap, Code } from "lucide-react"

export default function OverviewSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-blue-50 blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-purple-50 blur-3xl opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-medium text-sm shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Interactive Learning
            </div>

            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">DigitalRakshak Academy?</span>
            </h2>

            <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
              <p>
                Digital trust isn't just a legal checkmark anymore. Whether you are running a fintech, an online marketplace, or a logistics platform, knowing how to verify your users safely is a core business requirement.
              </p>
              <p>
                We built the Academy to take the guesswork out of compliance. Instead of dense legal text, we provide startups, developers, and compliance teams with straightforward guides on how verification tech works, what regulators expect from you, and how to build secure onboarding flows without killing your user experience.
              </p>

              <ul className="grid sm:grid-cols-2 gap-4 pt-4">
                {[
                  { text: 'Plain-English Laws', desc: 'No dense legalese. Clean, simple guides.', icon: ShieldCheck },
                  { text: 'Developer SDKs', desc: 'Step-by-step API integration guides.', icon: Code },
                  { text: 'Best Practices', desc: 'Blueprints designed by practitioners.', icon: GraduationCap },
                  { text: 'Auditable Checklists', desc: 'Interactive, ready-to-use playbooks.', icon: CheckCircle2 },
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

          <div className="relative group perspective">
            {/* Image Glow/Shadow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-30 transition duration-700 pointer-events-none" />

            <div className="relative transform transition duration-700 group-hover:-translate-y-2 group-hover:scale-[1.02] bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2rem] p-8 shadow-2xl border border-white/10 text-white min-h-[420px] flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-blue-400" />
                  </div>
                  <span className="text-xs text-gray-400 font-mono">DR-ACADEMY-01</span>
                </div>

                <h3 className="text-2xl font-bold font-display mb-4">Building Digital Trust Frameworks</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Understand how to deploy e-KYC, face match, and multi-factor validation flows seamlessly. Build systems that satisfy regulators while providing your real users with zero-friction signups.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-gray-500 border-t border-white/5 pt-4">
                  <span>CURRICULUM MODULE</span>
                  <span>EST. TIME: 45 MINS</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-2 flex-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-full w-3/4 rounded-full" />
                  </div>
                  <span className="text-xs text-blue-400 font-semibold">75%</span>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 transform transition-transform group-hover:scale-105">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">Verified</div>
                  <div className="text-sm text-gray-500 font-medium">Compliance Badges</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
