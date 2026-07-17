import Image from "next/image"

export default function CoreIdentity() {
  return (
    <section className="py-20 lg:py-24 relative overflow-hidden bg-white border-b border-slate-100">
      <div className="container mx-auto px-4 relative z-10 max-w-[80%]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Text */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-semibold text-xs tracking-wider uppercase shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Our Core Identity
            </div>

            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Who We Are
            </h2>

            <div className="space-y-5 text-gray-600 leading-relaxed text-sm sm:text-base">
              <p>
                Originally established as a specialized due diligence and HR verification firm, DigitalRakshak has scaled into a comprehensive infrastructure partner for organizations navigating India’s moving regulatory compliance framework.
              </p>
              <p>
                Today, we help businesses verify identities, secure sensitive data, and manage global operations under a single, compliance-forward platform. By bridging the gap between public data registries and daily business workflows, we eliminate trust fragmentation so your teams can scale with confidence.
              </p>
            </div>
          </div>

          {/* Right Team Photo */}
          <div className="relative group">
            {/* Soft backdrop blur/glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-[2rem] blur-2xl opacity-10 group-hover:opacity-15 transition duration-700 pointer-events-none" />

            <div className="relative overflow-hidden rounded-2xl shadow-xl border border-slate-200/60 bg-white">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="DigitalRakshak Leadership and Team"
                width={800}
                height={530}
                className="object-cover transition-transform duration-700 group-hover:scale-102"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
