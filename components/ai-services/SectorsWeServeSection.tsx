import { Briefcase, HeartPulse, ShoppingCart, Landmark, Plane, GraduationCap } from "lucide-react"

const sectors = [
  { name: "Healthcare", icon: HeartPulse, gradient: "from-blue-400 to-blue-600" },
  { name: "Finance", icon: Landmark, gradient: "from-indigo-400 to-indigo-600" },
  { name: "E-Commerce", icon: ShoppingCart, gradient: "from-purple-400 to-purple-600" },
  { name: "Cybersecurity", icon: Briefcase, gradient: "from-fuchsia-400 to-fuchsia-600" },
  { name: "Education", icon: GraduationCap, gradient: "from-blue-500 to-indigo-500" },
  { name: "Logistics", icon: Plane, gradient: "from-indigo-500 to-purple-500" },
]

export default function SectorsWeServeSection() {
  return (
    <section className="py-24 bg-[#f4f7fc] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Empower</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Delivering intelligent, scalable, and secure AI solutions across a diverse range of critical sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
          {sectors.map((sector, idx) => {
            const Icon = sector.icon;
            return (
              <div 
                key={idx} 
                className="group flex flex-col items-center justify-center p-8 bg-white/80 backdrop-blur-sm rounded-[1.5rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-white hover:border-blue-100 hover:-translate-y-1"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${sector.gradient} rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-blue-500/20 transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-sm md:text-base font-bold text-gray-800 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-colors">
                  {sector.name}
                </h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
