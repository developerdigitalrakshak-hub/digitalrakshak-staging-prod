import { Briefcase, MapPin, Calendar, Mail } from 'lucide-react'

const openings = [
  { title: "Backend Developers (Go / Python)", department: "Engineering", type: "Full-Time", location: "Bengaluru (Hybrid)" },
  { title: "QA & Automation Engineers", department: "Engineering", type: "Full-Time", location: "Bengaluru (Hybrid)" },
  { title: "DevOps & Security Engineers", department: "Infrastructure", type: "Full-Time", location: "Bengaluru (Hybrid)" },
  { title: "Product Managers (Identity & API Platforms)", department: "Product", type: "Full-Time", location: "Bengaluru (Hybrid)" },
  { title: "Compliance & Legal Analysts", department: "Legal", type: "Full-Time", location: "Mumbai / Bengaluru" },
  { title: "Sales & Enterprise Growth Leads", department: "Growth", type: "Full-Time", location: "Mumbai (Hybrid)" },
  { title: "Customer Success Managers", department: "Operations", type: "Full-Time", location: "Bengaluru" },
]

export default function OpeningsSection() {
  return (
    <section id="openings" className="py-20 lg:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
            <span className="text-blue-600 text-xs font-semibold uppercase tracking-wider font-sans">Apply Today</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4">
            Current Openings
          </h2>
          <p className="text-gray-500 text-lg">
            Find your next career leap at Digital Rakshak.
          </p>
        </div>

        {/* Roles list */}
        <div className="space-y-4 mb-16">
          {openings.map((role, idx) => (
            <div 
              key={idx}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-slate-50 hover:bg-slate-100/70 border border-slate-100 rounded-2xl transition-all duration-200 group"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-blue-600 tracking-wider uppercase font-mono bg-blue-50 border border-blue-100/50 px-2.5 py-0.5 rounded-full">
                  {role.department}
                </span>
                <h3 className="text-slate-900 font-extrabold text-base sm:text-lg">
                  {role.title}
                </h3>
                
                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5" />
                    {role.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {role.location}
                  </span>
                </div>
              </div>

              <div className="mt-4 sm:mt-0 flex-shrink-0">
                <a
                  href={`mailto:talent@digitalrakshak.com?subject=Application: ${encodeURIComponent(role.title)}`}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-600 text-slate-800 hover:text-white font-bold text-sm px-6 py-3 rounded-xl border border-slate-200 hover:border-blue-600 transition-all active:scale-95 shadow-sm"
                >
                  Apply Now
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stack CTA */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-800 rounded-[2rem] p-8 md:p-12 text-center text-white relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-dot opacity-20" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h3 className="font-display font-bold text-2xl">Don't see your exact stack?</h3>
            <p className="text-blue-100 text-sm md:text-base leading-relaxed">
              If you are passionate about security, identity tech, or building great APIs, drop us a line anyway at{' '}
              <a 
                href="mailto:talent@digitalrakshak.com" 
                className="font-bold underline hover:text-white transition-colors"
              >
                talent@digitalrakshak.com
              </a>
            </p>
            
            <div className="pt-2">
              <a
                href="mailto:talent@digitalrakshak.com?subject=General Inquiry / Open Stack Application"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 font-bold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-colors shadow-lg active:scale-95"
              >
                Get In Touch
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
