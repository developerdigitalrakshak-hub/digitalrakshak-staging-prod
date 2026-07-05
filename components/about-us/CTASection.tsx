import Link from 'next/link'

const industries = [
  "Fintech & Banking",
  "Insurance",
  "E-commerce & Marketplaces",
  "HR Tech & Staffing Agencies",
  "Healthcare & Logistics",
  "Government Organizations"
]

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-900/30 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
        
        {/* Call to Action */}
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
            Ready to de-risk your operations?
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Let's talk about anchoring your identity, security, and compliance pipelines on a platform built for enterprise scale.
          </p>

          <div className="pt-4 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg active:scale-95"
            >
              Contact Our Experts
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="pt-12 border-t border-white/10 space-y-6">
          <h3 className="text-white font-bold text-sm tracking-wider uppercase">
            Industries We Serve
          </h3>
          <p className="text-blue-100 text-sm max-w-2xl mx-auto">
            We support fast-growing startups, traditional financial institutions, and enterprise teams across:
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {industries.map((industry, idx) => (
              <span 
                key={idx} 
                className="bg-white/10 text-white border border-white/15 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
