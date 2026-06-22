import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Sparkles } from "lucide-react"

export default function ContactUsSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-gray-900">
      {/* Dynamic Background Blurs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 translate-y-1/4" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-2xl rounded-[3rem] p-1 border border-white/10 shadow-2xl">
          <div className="bg-white rounded-[2.8rem] p-10 md:p-16 lg:p-20 shadow-inner overflow-hidden relative">
            {/* Inner decorative light */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
            
            <div className="text-center mb-16 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-600 font-semibold text-sm mb-6 shadow-sm border border-purple-100">
                <Sparkles className="w-4 h-4" />
                Let's Build Something Great
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 text-gray-900 tracking-tight">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Transform</span> Your Business?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Connect with our elite team of AI experts to discuss your technical requirements and architect your next big leap.
              </p>
            </div>

            <form className="space-y-8 max-w-3xl mx-auto relative z-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    className="bg-gray-50/50 border-gray-200 h-14 rounded-2xl px-6 text-base focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500 transition-all shadow-sm" 
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-sm font-bold text-gray-700 ml-1">Work Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@company.com" 
                    className="bg-gray-50/50 border-gray-200 h-14 rounded-2xl px-6 text-base focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500 transition-all shadow-sm" 
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="company" className="text-sm font-bold text-gray-700 ml-1">Company Name</label>
                <Input 
                  id="company" 
                  placeholder="Your Company" 
                  className="bg-gray-50/50 border-gray-200 h-14 rounded-2xl px-6 text-base focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500 transition-all shadow-sm" 
                />
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="text-sm font-bold text-gray-700 ml-1">Project Details</label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your AI project requirements..." 
                  className="bg-gray-50/50 border-gray-200 min-h-[160px] rounded-2xl p-6 text-base focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500 transition-all shadow-sm resize-y" 
                />
              </div>

              <div className="pt-6 flex justify-center">
                <Button 
                  type="button" 
                  className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-bold py-7 px-12 h-auto rounded-2xl shadow-xl shadow-blue-500/25 transition-all duration-300 hover:shadow-blue-500/40 hover:-translate-y-1"
                >
                  <span className="relative z-10 flex items-center">
                    Get a Free Demo
                    <ArrowRight className="w-6 h-6 ml-3 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                  {/* Button shine effect */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
