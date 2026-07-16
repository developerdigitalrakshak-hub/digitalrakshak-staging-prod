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
  Store,
  Building,
  Clock,
  Database,
  MailCheck,
  BarChart3,
  Scale,
  Eye,
  FingerprintIcon,
  Landmark,
  MapPin
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ShopEstablishmentVerificationPage() {

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 md:px-12 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-transparent" style={{ maskImage: 'linear-gradient(to bottom, transparent, black)' }}></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-full text-sm font-semibold mb-6">
            <Store className="w-5 h-5" />
            Commercial Business Validation
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Shop & Establishment Verification
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
            Instantly validate commercial business legitimacy and eradicate fake employer fraud.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg h-14 px-8 rounded-full shadow-xl hover:shadow-primary/25 transition-all">
              Contact US
            </Button>
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold px-8 h-14 rounded-full text-lg transition-all">
              Talk to an API Integration Specialist
            </Button>
          </div>
        </div>
      </section>

      {/* Overview & Why it Matters */}
      <section className="px-6 py-20 md:px-12 bg-background">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Why Shop & Establishment Verification Matters</h2>
            <p className="text-lg text-muted-foreground mb-6">
              In the background verification landscape, checking a candidate's employment history is only useful if the companies they listed actually exist. With the rise of fake experience letter generators and "ghost companies," fraudulent entities are becoming harder to spot.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              DigitalRakshak's Shop & Establishment Verification Service automatically cross-references corporate, commercial, and local municipal registries. Ensure every past employer listed on a resume is a legally recognized, compliant business entity before finalizing your hire.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Many unorganized businesses, retail chains, small-to-medium enterprises (SMEs), and local agencies operate under state-level Shop & Establishment licenses rather than central corporate registries (like the MCA).
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Verifying this license ensures complete operational transparency:
            </p>
            <ul className="space-y-4 mb-4">
              {[
                "Expose 'Ghost' Employers: Unmask shell companies or completely fabricated businesses set up solely to provide fake experience certificates.",
                "Confirm Legal Existence: Verify that the commercial establishment was active, officially registered, and authorized to operate during the candidate's reported tenure.",
                "Audit Small & Medium Enterprises: Seamlessly verify background timelines from local offices, dealerships, logistics hubs, and retail firms that don't appear on standard corporate lists."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground font-medium text-lg">
                  <CheckCircle className="text-blue-500 w-6 h-6 flex-shrink-0 mt-0.5" />
                  {item}
                 </li>
              ))}
            </ul>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Expose Ghost Employers", desc: "Unmask shell companies or fabricated businesses set up solely to provide fake experience certificates.", icon: AlertTriangle, color: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/20" },
              { title: "Confirm Legal Existence", desc: "Verify that the commercial establishment was active, officially registered, and authorized to operate.", icon: ShieldCheck, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
              { title: "Audit Small & Medium Enterprises", desc: "Seamlessly verify background timelines from local offices, dealerships, and retail firms.", icon: Building2, color: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/20" },
              { title: "Detect Fake Experience Letters", desc: "Identify fraudulent PDF certificates that cannot easily fabricate state government registration.", icon: FileText, color: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/20" },
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Our automated infrastructure eliminates traditional, slow municipal office paperwork.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Submit Business Details", desc: "Upload the previous employer's name, registered address, or Shop & Establishment License Number directly into the digitalrakshak portal.", icon: FileText, color: "blue" },
              { step: "2", title: "Automated Registry Ping", desc: "Our system queries real-time state labor department databases, municipal corporation records, and local commercial registries.", icon: Database, color: "green" },
              { step: "3", title: "Data Cross-Referencing", desc: "We match the registration status, active business dates, trade type, and official ownership details against the data provided by the candidate.", icon: Search, color: "purple" },
              { step: "4", title: "Instant Integrity Score", desc: "Receive a localized report confirming whether the entity is valid, closed, or flagged as suspicious, integrated cleanly into your master BGV report.", icon: BarChart3, color: "orange" }
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">The DigitalRakshak's Advantage</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">See how we compare to traditional verification methods</p>
          </div>
          
          <div className="overflow-x-auto rounded-2xl border border-border shadow-lg">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <th className="px-6 py-4 text-lg font-semibold">Feature</th>
                  <th className="px-6 py-4 text-lg font-semibold text-center">Manual/Traditional Checks</th>
                  <th className="px-6 py-4 text-lg font-semibold text-center">DigitalRakshak Verification</th>
                 </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { feature: "Search Reach", traditional: "Limited to major metropolitan hubs", digital: "PAN-India state & municipal coverage", digitalHighlight: true },
                  { feature: "Data Integrity", traditional: "Relying on unverified physical visits", digital: "Direct-from-source government registry records", digitalHighlight: true },
                  { feature: "Verification Speed", traditional: "3 to 5 business days", digital: "Real-time API response", digitalHighlight: true },
                  { feature: "Risk Detection", traditional: "Frequently misses localized fraud", digital: "Flags unregistered and active dummy businesses", digitalHighlight: true }
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

      {/* Additional Information Section */}
      <section className="px-6 py-20 md:px-12 bg-blue-500/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full text-sm font-semibold mb-6">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            Close Your Compliance Gaps Today
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Don't let unverified businesses compromise your organization's integrity.</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ensure every line item on that resume is real.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-24 md:px-12 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Everything you need to know about Shop & Establishment verification</p>
          </div>
          <Accordion type="single" collapsible className="w-full mb-24 bg-card shadow-sm border rounded-2xl p-4 md:p-8">
            {[
              {
                q: "What exactly is a Shop & Establishment verification check?",
                a: "It is a business legitimacy check. It queries the official databases of state labor departments and municipal corporations to verify that a candidate's previous employer is (or was) a legally registered commercial entity. This ensures the company listed on the resume is authentic and legally allowed to operate."
              },
              {
                q: "Why is this check necessary if we already run standard corporate registry checks?",
                a: "Standard corporate registries (like the MCA) only cover registered Private Limited, Public, or LLP companies. However, a massive portion of the workforce is employed by smaller businesses—like retail chains, local agencies, logistics providers, and proprietary firms. These businesses operate under state-level Shop & Establishment Licenses. Without this check, you leave a massive blind spot for unverified employment history."
              },
              {
                q: "How does this service detect fake experience letters or 'ghost companies'?",
                a: "Fraudulent entities often create professional-looking PDF experience certificates and set up fake websites or phone numbers to pass reference checks. However, they cannot easily fabricate a state government business registration. digitalrakshak cross-references the employer's details directly with real-time municipal records to confirm if the business license is valid, active, or completely non-existent."
              },
              {
                q: "Can this check be run if the candidate's previous employer has closed down?",
                a: "Yes. Municipal and state labor registries maintain historical logs of business registrations. Even if a business has legally shut down or dissolved, our system can verify its historical registration status and active dates to confirm that it was a legitimate operating business during the candidate's reported tenure."
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
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Ready to Eliminate Fake Employer Fraud?</h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Ensure every past employer on a resume is a legally recognized, compliant business entity before finalizing your hire.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-10 h-14 rounded-full text-lg shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-1">
                  Contact US
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold px-10 h-14 rounded-full text-lg transition-all">
                  Talk to an API Integration Specialist
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}