'use client'

import { useRef } from 'react'
import { Card } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { 
  BrainCircuit,
  CheckCircle, 
  ShieldCheck, 
  Zap, 
  FileText, 
  Target, 
  Briefcase, 
  Gamepad2, 
  ShoppingCart, 
  Users, 
  TrendingUp, 
  Globe, 
  Building2, 
  UserCheck, 
  AlertTriangle,
  Search,
  ArrowRight,
  Clock,
  Fingerprint,
  Database,
  Lock,
  MailCheck,
  Workflow,
  BarChart3,
  Scale,
  Eye,
  FingerprintIcon
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function UANVerificationPage() {

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 md:px-12 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-transparent" style={{ maskImage: 'linear-gradient(to bottom, transparent, black)' }}></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-full text-sm font-semibold mb-6">
            <FingerprintIcon className="w-5 h-5" />
            Instant Employment Verification
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            UAN Verification Services
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
            Seamless, instant, and tamper-proof employment history verification. 
            Verify candidate employment directly from the source with DigitalRakshak.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg h-14 px-8 rounded-full shadow-xl hover:shadow-primary/25 transition-all">
            Book a Free Demo
          </Button>
        </div>
      </section>

      {/* Overview & Why it Matters */}
      <section className="px-6 py-20 md:px-12 bg-background">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Why UAN Verification Matters</h2>
            <p className="text-lg text-muted-foreground mb-6">
              In the digital-first hiring world, a candidate's resume only tells half the story. Fabricated employment dates, ghost companies, and inflated job titles are common hiring risks.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              A Universal Account Number (UAN) is tied directly to an individual's official employment registry. Verifying it ensures you see the ground truth of their career timeline.
            </p>
            <ul className="space-y-4 mb-4">
              {[
                "Catch Dual Employment: Instantly flag candidates secretly working two full-time jobs simultaneously",
                "Validate Exact Timelines: Match joining and leaving dates against resume claims",
                "Identify Fake Companies: Verify if previous employers actually exist and were contributing"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground font-medium text-lg">
                  <CheckCircle className="text-blue-500 w-6 h-6 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-lg text-muted-foreground border-l-4 border-blue-500 pl-4 py-1 italic bg-blue-500/10 rounded-r-lg mt-8">
              With DigitalRakshak's UAN Verification Service, you can instantly cross-verify a candidate's official employment and provident fund history directly from the source.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Prevent Hiring Fraud", desc: "Eliminate fake experience letters and inflated job titles from candidates.", icon: AlertTriangle, color: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/20" },
              { title: "Detect Moonlighting", desc: "Instantly identify candidates working multiple full-time jobs simultaneously.", icon: Eye, color: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/20" },
              { title: "Ensure Compliance", desc: "Stay compliant with data privacy regulations using secure consent flows.", icon: ShieldCheck, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
              { title: "Save Time & Cost", desc: "Reduce manual verification from days to seconds with automation.", icon: Zap, color: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/20" },
            ].map((benefit, i) => (
              <Card key={i} className={`p-6 border ${benefit.border} hover:shadow-lg transition-all duration-300 group`}>
                <div className={`w-12 h-12 rounded-xl ${benefit.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section - Process Steps */}
      <section className="px-6 py-24 md:px-12 bg-blue-500/10 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">How UAN Verification Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">We've stripped away the bureaucracy. Our automated system handles the heavy lifting in seconds.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Input Details", desc: "HR enters candidate's basic information and UAN into the secure dashboard or via API.", icon: FileText, color: "blue" },
              { step: "2", title: "Secure Consent", desc: "Candidate receives a secure link to authorize the check, ensuring full compliance.", icon: MailCheck, color: "green" },
              { step: "3", title: "Database Match", desc: "System safely pings the central registry to pull encrypted, verified employment data.", icon: Database, color: "purple" },
              { step: "4", title: "Get Report", desc: "Instant verification report with past employers, service periods, and establishment IDs.", icon: BarChart3, color: "orange" }
            ].map((item, i) => (
              <Card key={i} className="relative overflow-hidden p-6 border border-border/50 hover:shadow-xl transition-all duration-500 group bg-background/50 backdrop-blur-sm text-center">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-600"></div>
                <div className={`w-14 h-14 rounded-2xl bg-${item.color}-500/10 flex items-center justify-center mb-4 mx-auto group-hover:-translate-y-1 transition-transform`}>
                  <item.icon className={`w-7 h-7 text-${item.color}-500`} />
                </div>
                {/* <div className="flex items-center justify-center mb-3">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold flex items-center justify-center text-sm">
                    {item.step}
                  </span>
                </div> */}
                <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* DigitalRakshak Advantage - Comparison Table */}
      <section className="px-6 py-20 md:px-12 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">DigitalRakshak's Advantage</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">See how we compare to traditional background verification methods</p>
          </div>
          
          <div className="overflow-x-auto rounded-2xl border border-border shadow-lg">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <th className="px-6 py-4 text-lg font-semibold">Feature</th>
                  <th className="px-6 py-4 text-lg font-semibold text-center">Traditional BGV Methods</th>
                  <th className="px-6 py-4 text-lg font-semibold text-center">DigitalRakshak UAN Service</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { feature: "Turnaround Time", traditional: "5 to 7 business days", digital: "Near-Instant / Seconds", digitalHighlight: true },
                  { feature: "Data Accuracy", traditional: "Subject to fake reference bias", digital: "100% Tamper-proof government source data", digitalHighlight: true },
                  { feature: "Candidate Experience", traditional: "Chasing ex-bosses for emails", digital: "1-click secure authorization", digitalHighlight: true },
                  { feature: "Risk Mitigation", traditional: "High chance of missing moonlighting", digital: "Complete view of overlapping employment", digitalHighlight: true },
                //   { feature: "Cost per Verification", traditional: "High operational costs", digital: "Cost-effective automated solution", digitalHighlight: false },
                //   { feature: "Scalability", traditional: "Limited by manual processes", digital: "Handle thousands of verifications seamlessly", digitalHighlight: false }
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                    <td className="px-6 py-4 font-semibold text-foreground">{row.feature}</td>
                    <td className="px-6 py-4 text-muted-foreground text-center">{row.traditional}</td>
                    <td className={`px-6 py-4 text-center font-medium ${row.digitalHighlight ? 'text-green-600' : 'text-foreground'}`}>
                      {row.digitalHighlight && <CheckCircle className="w-4 h-4 inline-block mr-1 text-green-500" />}
                      {row.digital}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Capabilities & Security Section */}
      <section className="px-6 py-20 md:px-12 bg-blue-500/10 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Enterprise-Grade Security & Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">DigitalRakshak uses bank-level encryption and is fully compliant with data privacy mandates</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative overflow-hidden p-8 border border-border/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group bg-background/50 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform">
                <Lock className="w-7 h-7 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">256-Bit Encryption</h3>
              <p className="text-muted-foreground">Your candidate data is always safe, encrypted, and accessible only to authorized stakeholders.</p>
            </Card>

            <Card className="relative overflow-hidden p-8 border border-border/50 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 group bg-background/50 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
              <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform">
                <Scale className="w-7 h-7 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Fully Compliant</h3>
              <p className="text-muted-foreground">Adheres to national data localization and privacy mandates. No credentials are ever stored.</p>
            </Card>

            <Card className="relative overflow-hidden p-8 border border-border/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 group bg-background/50 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600"></div>
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform">
                <Fingerprint className="w-7 h-7 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Secure Consent Flow</h3>
              <p className="text-muted-foreground">Verification is only initiated after explicit digital consent via our secure verification link.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* What UAN Does NOT Reveal - Important Clarification */}
      <section className="px-6 py-20 md:px-12 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full text-sm font-semibold mb-6">
            <ShieldCheck className="w-4 h-4 text-green-600" />
            Privacy First Approach
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">What UAN Verification Does NOT Reveal</h2>
          <Card className="p-8 border-green-500/20 bg-green-500/5 shadow-lg">
            <p className="text-lg text-muted-foreground mb-4">
              The UAN verification process only pulls data related to your employment timeline. 
              It does NOT give employers access to:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              {[
                "Salary slips or take-home pay",
                "Personal bank account details",
                "Current employer notifications"
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-center gap-2 text-foreground font-medium">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6 pt-4 border-t border-green-500/20">
              Your current employer will NOT receive any alerts or notifications when this verification runs.
            </p>
          </Card>
        </div>
      </section>

      {/* Use Cases */}
      <section className="px-6 py-24 md:px-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Who Benefits from UAN Verification?</h2>
            <p className="text-slate-300 text-xl max-w-2xl mx-auto">Trusted by HR teams and recruiters across industries</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { industry: "Corporate HR Teams", icon: Users, uses: ["Bulk hiring verification", "Background checks for new hires", "Internal audit compliance"] },
              { industry: "Recruitment Agencies", icon: Briefcase, uses: ["Candidate credential validation", "Faster client placements", "Reduced liability risks"] },
              { industry: "Gig & Contract Platforms", icon: Workflow, uses: ["Contractor verification", "Moonlighting detection", "Trusted workforce building"] }
            ].map((useCase, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <useCase.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-6 text-white">{useCase.industry}</h3>
                <ul className="space-y-3">
                  {useCase.uses.map((use, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-slate-300 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 flex-shrink-0" />
                      {use}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 text-center max-w-4xl mx-auto">
             <p className="text-slate-200 text-lg">
               Stop relying on easily forged PDF experience letters. Protect your company from bad hires today.
             </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-24 md:px-12 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Everything about candidate privacy and our UAN verification process</p>
          </div>
          <Accordion type="single" collapsible className="w-full mb-24 bg-card shadow-sm border rounded-2xl p-4 md:p-8">
            {[
              {
                q: "Is my UAN data safe with DigitalRakshak?",
                a: "Absolutely. Safety is our top priority. DigitalRakshak utilizes enterprise-grade 256-bit encryption to protect all candidate information. We never store your credentials, and your data is processed through highly secure, encrypted channels."
              },
              {
                q: "Does DigitalRakshak check my UAN without my permission?",
                a: "No. We strictly adhere to data privacy laws. A UAN verification check is only initiated after you provide explicit digital consent via our secure verification link."
              },
              {
                q: "Can DigitalRakshak see my salary or bank account details through my UAN?",
                a: "No. The UAN verification process only pulls data related to your employment timeline, such as company names, establishment IDs, and your dates of joining and leaving. It does not give employers access to your salary slips, take-home pay, or personal bank accounts."
              },
              {
                q: "Will my current employer be notified when this check runs?",
                a: "No. The verification process is a quiet, automated database cross-match. Your current employer will not receive any alerts, notifications, or inquiries regarding your background check."
              },
              {
                q: "How long does the verification take?",
                a: "Most UAN verifications complete in near real-time - typically within seconds to a few minutes."
              },
              {
                q: "Can I integrate UAN verification with my existing ATS?",
                a: "Yes, we provide easy-to-use REST APIs for seamless integration with your existing Applicant Tracking Systems and HR workflows."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b-border/60 last:border-0 px-2 py-1">
                <AccordionTrigger className="text-left font-semibold text-lg py-5 hover:text-blue-600 transition-colors text-foreground">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6 pt-2">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA Section */}
          <Card className="p-10 md:p-14 text-center bg-blue-600/10 border-blue-600/20 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Ready to Upgrade Your Hiring Workflow?</h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Stop relying on easily forged PDF experience letters. Protect your company from bad hires with instant, tamper-proof UAN verification.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-10 h-14 rounded-full text-lg shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-1">
                  Book a Free Demo
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold px-10 h-14 rounded-full text-lg transition-all">
                  Speak to an Expert
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}