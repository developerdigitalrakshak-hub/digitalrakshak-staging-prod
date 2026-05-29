const industries = [
  { name: 'Healthcare', icon: '🏥' },
  { name: 'Fintech', icon: '💳' },
  { name: 'E-Commerce', icon: '🛒' },
  { name: 'Education', icon: '🎓' },
  { name: 'Logistics', icon: '🚚' },
  { name: 'Real Estate', icon: '🏠' },
  { name: 'Manufacturing', icon: '🏭' },
  { name: 'Media & Entertainment', icon: '🎬' },
  { name: 'Travel & Hospitality', icon: '✈️' },
  { name: 'Legal', icon: '⚖️' },
]

const models = [
  {
    title: 'Fixed Price',
    desc: 'Best for well-defined projects with clear scope and deliverables. Predictable cost, no surprises.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Time & Material',
    desc: 'Ideal for evolving projects where requirements may change. Pay only for actual work done.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Dedicated Team',
    desc: 'A full-time extension of your team. Perfect for long-term partnerships and ongoing development.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]

export default function IndustriesSection() {
  return (
    <>
      {/* Industries */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
              <span className="text-blue-600 text-xs font-semibold uppercase tracking-wider">Industries</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-gray-500 text-lg">
              Domain-specific expertise that lets us build solutions precisely tailored to your industry's unique needs.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="group bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-200 rounded-2xl p-5 text-center transition-all cursor-pointer"
              >
                <div className="text-3xl mb-2">{ind.icon}</div>
                <div className="text-sm font-medium text-gray-700 group-hover:text-blue-700">{ind.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
              <span className="text-blue-600 text-xs font-semibold uppercase tracking-wider">Engagement</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4">
              How You Can Engage With DigitalRakshak
            </h2>
            <p className="text-gray-500 text-lg">
              Flexible engagement models designed to match your project type, timeline, and budget.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {models.map((m, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 border transition-all ${
                  i === 1
                    ? 'bg-blue-600 border-blue-600 text-white shadow-2xl shadow-blue-200 scale-105'
                    : 'bg-white border-gray-100 hover:border-blue-200 hover:shadow-lg'
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${i === 1 ? 'bg-white/20' : 'bg-blue-50 text-blue-600'}`}>
                  <span className={i === 1 ? 'text-white' : 'text-blue-600'}>{m.icon}</span>
                </div>
                <h3 className={`font-display font-bold text-xl mb-3 ${i === 1 ? 'text-white' : 'text-gray-900'}`}>
                  {m.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-6 ${i === 1 ? 'text-blue-100' : 'text-gray-500'}`}>
                  {m.desc}
                </p>
                <a
                  href="#"
                  className={`inline-flex items-center gap-2 text-sm font-semibold ${
                    i === 1 ? 'text-white' : 'text-blue-600'
                  }`}
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
