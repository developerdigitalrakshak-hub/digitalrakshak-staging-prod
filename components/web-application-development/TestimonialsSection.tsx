const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CTO, HealthFirst',
    company: 'HealthFirst Inc.',
    text: 'DigitalRakshak delivered our telemedicine platform on time and under budget. Their technical expertise and proactive communication made the entire process seamless. Highly recommended.',
    rating: 5,
    initial: 'S',
    color: 'bg-emerald-500',
  },
  {
    name: 'James Thornton',
    role: 'Founder, PayStream',
    company: 'PayStream Technologies',
    text: 'The team built our real-time payment dashboard with exceptional attention to security and performance. We processed $2M+ in daily transactions with zero downtime from day one.',
    rating: 5,
    initial: 'J',
    color: 'bg-blue-500',
  },
  {
    name: 'Priya Sharma',
    role: 'Product Lead, ShopNow',
    company: 'ShopNow Platform',
    text: 'Our marketplace had a 5x revenue increase after DigitalRakshak revamped the platform architecture. The AI recommendation engine alone boosted average order value by 32%.',
    rating: 5,
    initial: 'P',
    color: 'bg-violet-500',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
            <span className="text-blue-600 text-xs font-semibold uppercase tracking-wider">Testimonials</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4">
            What Clients Say About Our Work
          </h2>
          <p className="text-gray-500 text-lg">
            Real feedback from businesses we've helped build and scale their digital products.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-xl hover:shadow-blue-50 hover:border-blue-100 transition-all"
            >
              <StarRating count={t.rating} />
              <p className="text-gray-600 text-sm leading-relaxed mt-4 mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white font-display font-bold`}>
                  {t.initial}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust logos */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm mb-6">Trusted by teams at</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {['Forbes', 'TechCrunch', 'Clutch', 'GoodFirms', 'Glassdoor'].map((logo) => (
              <span key={logo} className="text-gray-300 font-display font-bold text-lg">{logo}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
