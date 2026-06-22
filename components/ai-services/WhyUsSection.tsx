const metrics = [
  { value: '8,200+', label: 'Projects Delivered', icon: '📦' },
  { value: '150+', label: 'Expert Developers', icon: '👩‍💻' },
  { value: '98%', label: 'Client Satisfaction', icon: '⭐' },
  { value: '4.9', label: 'Average Rating', icon: '🏆' },
]

const reasons = [
  {
    title: 'Proven Technical Expertise',
    desc: 'Our team holds certifications across AWS, Google Cloud, and major frameworks — ensuring best-in-class delivery.',
  },
  {
    title: 'Full Transparency',
    desc: 'Real-time project dashboards, weekly reports, and open communication channels keep you fully informed.',
  },
  {
    title: 'Cost-Effective Solutions',
    desc: 'Competitive pricing without compromising on quality. Fixed-price or T&M models tailored to your budget.',
  },
  {
    title: 'Ownership & IP Rights',
    desc: 'All source code, IP, and assets are exclusively yours from day one. No lock-in, ever.',
  },
]

export default function WhyUsSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#0d1b2e] via-[#0f2550] to-[#0a1628] relative overflow-hidden">
      {/* BG effects */}
      <div className="absolute inset-0 bg-dot opacity-20" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-blue-300 text-xs font-semibold uppercase tracking-wider">Our Track Record</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Security Built Into Every Layer
          </h2>
          <p className="text-gray-300 text-lg">
            13+ years of delivering enterprise-grade web applications with an unblemished security record.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors"
            >
              <div className="text-3xl mb-2">{m.icon}</div>
              <div className="font-display font-bold text-3xl text-white mb-1">{m.value}</div>
              <div className="text-gray-400 text-sm">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Reasons */}
        <div className="grid sm:grid-cols-2 gap-6">
          {reasons.map((r, i) => (
            <div key={i} className="flex gap-4">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-display font-bold text-white mb-1">{r.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
