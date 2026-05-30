const techCategories = [
  {
    label: 'Frontend',
    techs: ['React.js', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS'],
  },
  {
    label: 'Backend',
    techs: ['Node.js', 'Python', 'Go', 'Java', 'PHP Laravel', 'Ruby on Rails'],
  },
  {
    label: 'Database',
    techs: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch', 'DynamoDB'],
  },
  {
    label: 'Cloud & DevOps',
    techs: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
  },
]

export default function TechStackSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
            <span className="text-blue-600 text-xs font-semibold uppercase tracking-wider">Technologies</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4">
            Types of Web Application Services We Build
          </h2>
          <p className="text-gray-500 text-lg">
            We work with the latest technologies to build future-proof web applications that perform at scale.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((cat) => (
            <div key={cat.label} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="font-display font-bold text-base text-gray-900 mb-4 pb-3 border-b border-gray-200">
                {cat.label}
              </h3>
              <ul className="space-y-2.5">
                {cat.techs.map((tech) => (
                  <li key={tech} className="flex items-center gap-2.5 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 lg:p-12 text-center">
          <h3 className="font-display font-bold text-2xl lg:text-3xl text-white mb-3">
            Which Type of Web App Do You Need?
          </h3>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Tell us about your project and our experts will recommend the best tech stack for your goals.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors"
          >
            Discuss Your Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
