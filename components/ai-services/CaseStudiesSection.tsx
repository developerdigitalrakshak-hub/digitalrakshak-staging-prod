const cases = [
  {
    category: 'Healthcare',
    title: 'Telemedicine Platform for 50K+ Patients',
    desc: 'Built a HIPAA-compliant telemedicine app with video consultations, e-prescriptions, and EHR integration.',
    metrics: [
      { val: '300%', label: 'User Growth' },
      { val: '40%', label: 'Cost Reduction' },
    ],
    color: 'from-emerald-500 to-teal-600',
  },
  {
    category: 'Fintech',
    title: 'Real-Time Payment Processing Dashboard',
    desc: 'Developed a PCI-DSS compliant payment analytics platform processing $2M+ in daily transactions.',
    metrics: [
      { val: '99.99%', label: 'Uptime' },
      { val: '$2M+', label: 'Daily TXN' },
    ],
    color: 'from-blue-500 to-indigo-600',
  },
  {
    category: 'E-Commerce',
    title: 'Multi-Vendor Marketplace for 10K Sellers',
    desc: 'Created a scalable marketplace with AI-powered recommendations, real-time inventory, and multi-currency support.',
    metrics: [
      { val: '5x', label: 'Revenue Lift' },
      { val: '10K+', label: 'Active Sellers' },
    ],
    color: 'from-violet-500 to-purple-600',
  },
]

export default function CaseStudiesSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
              <span className="text-blue-600 text-xs font-semibold uppercase tracking-wider">Portfolio</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900">
              Case Studies That Drive Success
            </h2>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all whitespace-nowrap">
            View All Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <div key={i} className="group rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-blue-50 transition-all duration-300">
              {/* Image header */}
              <div className={`bg-gradient-to-br ${c.color} h-44 relative overflow-hidden flex items-center justify-center`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 text-center px-6">
                  <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {c.category}
                  </span>
                </div>
                {/* Decorative circles */}
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full" />
                <div className="absolute -left-5 -top-5 w-24 h-24 bg-white/10 rounded-full" />
              </div>

              <div className="p-6 bg-white">
                <h3 className="font-display font-bold text-lg text-gray-900 mb-2 leading-snug">
                  {c.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{c.desc}</p>

                <div className="flex gap-6 mb-5">
                  {c.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="font-display font-bold text-xl text-blue-600">{m.val}</div>
                      <div className="text-gray-500 text-xs">{m.label}</div>
                    </div>
                  ))}
                </div>

                <a href="#" className="inline-flex items-center gap-1.5 text-sm text-blue-600 font-semibold hover:gap-2.5 transition-all">
                  Read Case Study
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
