import { ShieldCheck, Cpu, Lock, Zap } from "lucide-react"

export default function DifferentiateSection() {
  const cards = [
    {
      title: "Security-First AI",
      desc: "We integrate robust cybersecurity protocols into every AI model, ensuring your data and operations remain protected.",
      icon: ShieldCheck,
      bgColor: "bg-blue-600",
      shadowColor: "shadow-blue-500/20",
    },
    {
      title: "Custom Models",
      desc: "No off-the-shelf compromises. We build tailored machine learning models that specifically address your unique business challenges.",
      icon: Cpu,
      bgColor: "bg-purple-600",
      shadowColor: "shadow-purple-500/20",
    },
    {
      title: "Data Privacy",
      desc: "Strict adherence to data protection regulations. Your proprietary data never leaves your secure environment.",
      icon: Lock,
      bgColor: "bg-green-500",
      shadowColor: "shadow-green-500/20",
    },
    {
      title: "Rapid Deployment",
      desc: "Our agile methodology ensures fast time-to-market, allowing you to see ROI on your AI investments sooner.",
      icon: Zap,
      bgColor: "bg-red-500",
      shadowColor: "shadow-red-500/20",
    },
  ];

  return (
    <section className="py-24 relative bg-slate-50/50">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-purple-100/50 border border-purple-200 text-purple-700 font-semibold text-sm tracking-wide uppercase shadow-sm">
            Our Differentiators
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">AI Services?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our approach to artificial intelligence is unique—focusing on uncompromising security, precision engineering, and tangible business outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={idx} 
                className={`group flex flex-col items-center text-center p-10 bg-white rounded-[2rem] shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${card.shadowColor}`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${card.bgColor} shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{card.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium">
                  {card.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
