const steps = [
  {
    num: '01',
    title: 'Discovery & Planning',
    desc: 'We analyze your requirements, define goals, map user journeys, and create a detailed technical roadmap.',
    color: 'blue',
  },
  {
    num: '02',
    title: 'UI/UX Design',
    desc: 'Wireframes, prototypes, and polished UI designs created with your brand identity and user experience in mind.',
    color: 'indigo',
  },
  {
    num: '03',
    title: 'Development',
    desc: 'Agile sprints with clean, maintainable code. Regular demos keep you in the loop throughout development.',
    color: 'violet',
  },
  {
    num: '04',
    title: 'Testing & QA',
    desc: 'Comprehensive automated and manual testing — performance, security, cross-browser, and accessibility.',
    color: 'purple',
  },
  {
    num: '05',
    title: 'Deployment',
    desc: 'Smooth launch on your preferred cloud infrastructure with CI/CD pipelines and zero-downtime deployment.',
    color: 'blue',
  },
  {
    num: '06',
    title: 'Maintenance & Growth',
    desc: 'Ongoing monitoring, updates, feature additions, and optimization to keep your app ahead of the curve.',
    color: 'indigo',
  },
]

const colorMap: Record<string, string> = {
  blue: 'bg-blue-600 shadow-blue-200',
  indigo: 'bg-indigo-600 shadow-indigo-200',
  violet: 'bg-violet-600 shadow-violet-200',
  purple: 'bg-purple-600 shadow-purple-200',
}

export default function ProcessSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
            <span className="text-blue-600 text-xs font-semibold uppercase tracking-wider">Our Process</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4">
            Web Application Development Process
          </h2>
          <p className="text-gray-500 text-lg">
            A structured, transparent approach that ensures quality at every stage while keeping delivery on schedule.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              <div className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50 transition-all h-full">
                <div className={`w-12 h-12 ${colorMap[step.color]} shadow-lg rounded-2xl flex items-center justify-center mb-5`}>
                  <span className="text-white font-display font-bold text-sm">{step.num}</span>
                </div>
                <h3 className="font-display font-bold text-lg text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
