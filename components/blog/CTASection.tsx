export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-900/30 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-5">
          Get Actionable Trust Blueprints In Your Inbox
        </h2>
        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
          Join 5,000+ developers, HR leads, and compliance officers who receive our practical guides and regulatory breakdowns.
        </p>

        {/* Input Email Form */}
        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your work email"
            required
            className="flex-grow bg-white text-gray-900 placeholder-gray-400 px-5 py-4 rounded-xl border border-transparent focus:outline-none focus:ring-2 focus:ring-white text-base shadow-inner"
          />
          <button
            type="submit"
            className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-md active:scale-95 whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 pt-12 border-t border-white/10">
          {[
            { icon: '✉️', text: 'Bi-weekly Newsletter' },
            { icon: '🛡️', text: 'No Spam Ever' },
            { icon: '🔓', text: 'Unsubscribe Anytime' },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-blue-100 text-sm">
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
