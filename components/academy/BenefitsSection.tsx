import { Rocket, Building2, Users, ShieldCheck, Code2 } from 'lucide-react'

const targets = [
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'Startups',
    desc: 'Build your onboarding right the first time without taking on technical or legal debt.',
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: 'Enterprises',
    desc: 'Modernize legacy workflows and automate manual verification bottlenecks.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'HR Teams',
    desc: 'Clean up employee screening and protect your workplace from insider risk.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Compliance Officers',
    desc: 'Stay ahead of audits and moving regulatory goalposts.',
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: 'Product Teams & Developers',
    desc: 'Build onboarding flows that are secure but keep friction low for real users.',
  },
]

export default function BenefitsSection() {
  return (
    <section id="who-is-this-for" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
            <span className="text-blue-600 text-xs font-semibold uppercase tracking-wider">Target Audience</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4">
            Who Is This For?
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            We provide startups, enterprises, HR teams, compliance officers, and developer groups with the precise blueprint they need.
          </p>
        </div>

        {/* Grid - centering cards if they are 5 in total */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {targets.map((t, i) => (
            <div
              key={i}
              className={`group bg-white rounded-2xl p-7 border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300 ${
                i === 4 ? 'sm:col-span-2 lg:col-span-1 mx-auto w-full' : ''
              }`}
            >
              <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white rounded-xl flex items-center justify-center mb-5 transition-all duration-300">
                {t.icon}
              </div>
              <h3 className="font-display font-bold text-lg text-gray-900 mb-2">{t.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
