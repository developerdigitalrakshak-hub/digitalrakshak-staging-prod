import { Terminal, GraduationCap, MessagesSquare, Zap } from 'lucide-react'

const culturePoints = [
  {
    icon: <Terminal className="w-6 h-6" />,
    title: 'Real Engineering Challenges',
    desc: 'You’ll work on high-scale APIs, machine learning for document processing, and zero-trust security architecture.',
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: 'Room to Grow',
    desc: 'We invest heavily in our team with continuous learning budgets and mentorship from industry veterans.',
  },
  {
    icon: <MessagesSquare className="w-6 h-6" />,
    title: 'No Bureaucracy',
    desc: 'We value ownership, clear feedback, and fixing problems over corporate politics.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'High Impact',
    desc: 'The tools you build will secure data and smooth out workflows for millions of users and businesses.',
  },
]

export default function WorkCulture() {
  return (
    <section className="py-20 lg:py-28 bg-[#eef0f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-300 rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <span className="text-slate-600 text-xs font-semibold uppercase tracking-wider">Our Environment</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4 text-balance">
            What It's Like to Work Here
          </h2>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed text-balance">
            We value excellence, fast execution, and a supportive atmosphere that rewards curiosity.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {culturePoints.map((point, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white rounded-xl flex items-center justify-center mb-6 transition-all duration-300">
                {point.icon}
              </div>
              <h3 className="font-display font-bold text-lg text-gray-900 mb-3">{point.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
