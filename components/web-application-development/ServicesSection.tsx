const services = [
  {
    title: 'Custom Web Application Development',
    desc: 'Fully tailored web apps built from scratch to match your exact business requirements and workflows.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'Enterprise Web Application Development',
    desc: 'Robust, scalable enterprise solutions with complex integrations, high availability, and compliance.',
    tags: ['Microservices', 'Kubernetes', 'AWS'],
  },
  {
    title: 'Progressive Web Apps (PWA)',
    desc: 'App-like experiences on the web — offline capability, push notifications, and native-feel UX.',
    tags: ['Service Workers', 'IndexedDB', 'Web Push'],
  },
  {
    title: 'SaaS Application Development',
    desc: 'Multi-tenant SaaS platforms with subscription management, analytics, and seamless onboarding.',
    tags: ['Multi-tenant', 'Stripe', 'OAuth 2.0'],
  },
  {
    title: 'API Development & Integration',
    desc: 'RESTful and GraphQL APIs, third-party integrations, and unified data layers for your ecosystem.',
    tags: ['REST', 'GraphQL', 'Webhooks'],
  },
  {
    title: 'Web Application Migration',
    desc: 'Modernize legacy systems with zero downtime migration strategies and phased rollouts.',
    tags: ['Legacy Modernization', 'Docker', 'CI/CD'],
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
            <span className="text-blue-600 text-xs font-semibold uppercase tracking-wider">Our Services</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4">
            Web App Development Services We Offer
          </h2>
          <p className="text-gray-500 text-lg">
            From ideation to deployment, our comprehensive services cover every aspect of web application development.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="group relative bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-xl hover:shadow-blue-50 hover:border-blue-100 transition-all duration-300 overflow-hidden"
            >
              {/* Number */}
              <div className="absolute top-5 right-6 font-display font-bold text-6xl text-gray-50 select-none group-hover:text-blue-50 transition-colors">
                {String(i + 1).padStart(2, '0')}
              </div>

              <div className="relative">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center mb-5">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-lg text-gray-900 mb-2 leading-snug">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span key={tag} className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
