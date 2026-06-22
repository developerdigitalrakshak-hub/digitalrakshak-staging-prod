import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export default function OverviewSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-blue-50 blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-purple-50 blur-3xl opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-medium text-sm shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Next-Gen AI Solutions
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Transforming Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Intelligent Automation</span>
            </h2>
            
            <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
              <p>
                At DigitalRakshak, we harness the power of Artificial Intelligence to revolutionize your business operations. Our AI services are designed to bring unprecedented automation, deep actionable insights, and enhanced security to your digital ecosystem.
              </p>
              
              <ul className="space-y-3 pt-2">
                {['Predictive Machine Learning Models', 'Natural Language Processing (NLP)', 'Intelligent Threat Detection'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="relative group perspective">
            {/* Image Glow/Shadow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-30 transition duration-700 pointer-events-none" />
            
            <div className="relative transform transition duration-700 group-hover:-translate-y-2 group-hover:scale-[1.02]">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="AI Services Overview"
                width={600}
                height={600}
                className="rounded-[2rem] shadow-2xl object-cover border border-white/50 bg-white"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 transform transition-transform group-hover:scale-105">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">10x</div>
                  <div className="text-sm text-gray-500 font-medium">Faster Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
