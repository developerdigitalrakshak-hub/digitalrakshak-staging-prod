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
  MapPin,
  Map,
  Satellite,
  Wifi,
  Smartphone,
  Lock,
  FingerprintIcon,
  Eye,
  BarChart3,
  Database,
  Clock,
  Navigation,
  Crosshair,
  LocateFixed,
  Compass
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ReverseGeoCodePage() {

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 md:px-12 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-transparent" style={{ maskImage: 'linear-gradient(to bottom, transparent, black)' }}></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-full text-sm font-semibold mb-6">
            <LocateFixed className="w-5 h-5" />
            Spatial Address Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Reverse Geo-Code
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
            Convert messy address strings into precise, verified physical coordinates instantly.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg h-14 px-8 rounded-full shadow-xl hover:shadow-primary/25 transition-all">
              Request an API Key
            </Button>
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold px-8 h-14 rounded-full text-lg transition-all">
              Speak with an Integration Engineer
            </Button>
          </div>
        </div>
      </section>

      {/* Overview & Why it Matters */}
      <section className="px-6 py-20 md:px-12 bg-background">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Why Reverse Geo-Code Validation Matters</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Traditional address verification is slow, expensive, and heavily prone to manual errors. Candidates frequently provide incomplete addresses, vague landmarks, or entirely fabricated residential locations to bypass geographic hiring criteria or secure local travel allowances.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              digitalrakshak's Reverse Geo-Code Check automates address validation at the source. By translating textual addresses into precise GPS coordinates (Latitude, Longitude) and cross-referencing them with global GIS (Geographic Information System) and municipal mapping databases, we instantly confirm whether a candidate's address actually exists on the map.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Relying on a candidate's typed address text introduces compliance blind spots. Reverse geo-coding standardizes and audits your address data engine in real time.
            </p>
            <ul className="space-y-4 mb-4">
              {[
                "Expose Fabricated Addresses: Flag addresses that sound legitimate on paper but correspond to a non-existent plot, an empty field, or an impossible location in real life.",
                "Standardize Incomplete Data: Automatically fix messy candidate entries (missing PIN codes, misspelled locality names, vague landmarks) into clean, standardized postal formats.",
                "Audit Travel & Fuel Reimbursements: Ensure field agents and remote employees are claiming allowances based on true, verified physical distances from your hubs—saving thousands in fraudulent expense leaks."
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
              { title: "Expose Fabricated Addresses", desc: "Flag addresses that sound legitimate but correspond to non-existent plots or impossible locations.", icon: AlertTriangle, color: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/20" },
              { title: "Standardize Incomplete Data", desc: "Automatically fix messy entries into clean, standardized postal formats.", icon: Database, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
              { title: "Audit Travel Reimbursements", desc: "Ensure field agents claim allowances based on true, verified physical distances.", icon: TrendingUp, color: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/20" },
              { title: "PIN Code Verification", desc: "Automatically flag zone mismatches when addresses fall outside specified postal boundaries.", icon: MapPin, color: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/20" },
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
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">We turn raw text inputs into verified location intelligence in milliseconds.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Address Ingestion", desc: "The candidate types their address into your onboarding form, or your HR team bulk-uploads address data into the digitalrakshak platform.", icon: FileText, color: "blue" },
              { step: "2", title: "Forward Geocoding Conversion", desc: "Our engine breaks down the text string and converts the physical address into exact, pinpoint mathematical coordinates (Lat/Long).", icon: Crosshair, color: "green" },
              { step: "3", title: "Reverse Database Match", desc: "The system reverses the process—querying official postal, municipal, and regional satellite databases to pull the legal, official address registered at those exact coordinates.", icon: Database, color: "purple" },
              { step: "4", title: "Discrepancy Reporting", desc: "Our platform compares the candidate's input with the database truth. It outputs a 'Match Accuracy Score' and immediately flags mismatched PIN codes, fictional localities, or un-mappable zones.", icon: BarChart3, color: "orange" }
            ].map((item, i) => (
              <Card key={i} className="relative overflow-hidden p-6 border border-border/50 hover:shadow-xl transition-all duration-500 group bg-background/50 backdrop-blur-sm text-center">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-600"></div>
                <div className={`w-14 h-14 rounded-2xl bg-${item.color}-500/10 flex items-center justify-center mb-4 mx-auto group-hover:-translate-y-1 transition-transform`}>
                  <item.icon className={`w-7 h-7 text-${item.color}-500`} />
                </div>
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
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">See how we compare to traditional physical address verification</p>
          </div>
          
          <div className="overflow-x-auto rounded-2xl border border-border shadow-lg">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <th className="px-6 py-4 text-lg font-semibold">Feature</th>
                  <th className="px-6 py-4 text-lg font-semibold text-center">Traditional Physical Address Checks</th>
                  <th className="px-6 py-4 text-lg font-semibold text-center">DigitalRakshak Reverse Geo-Code Check</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { feature: "Verification Speed", traditional: "5 to 7 business days per address", digital: "Instantaneous (Sub-second API response)", digitalHighlight: true },
                  { feature: "Address Standardization", traditional: "Manual entry errors left uncorrected", digital: "Automatically parses, cleans, and structures data", digitalHighlight: true },
                  { feature: "Cost Per Check", traditional: "Expensive field-agent courier charges", digital: "High-efficiency, digital utility pricing", digitalHighlight: true },
                  { feature: "Data Cleanliness", traditional: "Trapped in un-searchable physical PDFs", digital: "Outputs clean JSON data ready for your HRMS/ATS", digitalHighlight: true }
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

      {/* Smart Pre-Filter Strategy Section */}
      <section className="px-6 py-20 md:px-12 bg-blue-500/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full text-sm font-semibold mb-6">
            <Zap className="w-4 h-4 text-blue-600" />
            The Smart Pre-Filter Strategy
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Save Massive Operational Costs</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Run a digital Reverse Geo-Code check first. It ensures that if you do need to dispatch a field executive for a physical verification later, you are sending them to a 100% verified, reachable physical location.
          </p>
          <div className="mt-8">
            <p className="text-lg font-semibold text-foreground">
              Clean your address data. Streamline your BGV.
            </p>
            <p className="text-muted-foreground mt-2">
              Stop wasting time on un-mappable, unverified addresses. Switch to automated data integrity.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-24 md:px-12 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Address Data Integrity & Spatial Verification FAQs</h2>
            <p className="text-xl text-muted-foreground">Everything you need to know about reverse geo-code verification</p>
          </div>
          <Accordion type="single" collapsible className="w-full mb-24 bg-card shadow-sm border rounded-2xl p-4 md:p-8">
            {[
              {
                q: "What is the core difference between a standard text address search and a spatial Reverse Geo-Code check?",
                a: "A standard text search simply looks for keywords in an address line, which can easily be manipulated or faked. A spatial Reverse Geo-Code check converts a candidate's text address into precise mathematical coordinates (Latitude, Longitude) on a digital map. It then pulls the official, legally registered municipal data associated with those exact coordinates to see if the candidate's claims align with geographic reality."
              },
              {
                q: "Candidates often type disorganized or messy addresses with local spelling errors. How does digitalrakshak handle this?",
                a: "Our verification engine features advanced natural language processing (NLP) to parse, clean, and standardize irregular text strings. It seamlessly filters out common typos, missing commas, and informal local landmarks. The system automatically reformats the entry into a clean, structured postal template containing verified district, state, and country fields."
              },
              {
                q: "Can this check detect if a candidate has provided an inaccurate PIN code or postal zone?",
                a: "Yes, this is one of its primary use cases. Discrepancies between physical addresses and postal codes are a major indicator of address manipulation or resume padding. Our engine automatically cross-references the spatial coordinates against official postal boundaries. If a candidate lists a residential colony that geographically sits outside their specified PIN code boundary, the system automatically flags a 'Zone Mismatch' on your dashboard."
              },
              {
                q: "Does this replace physical, door-to-door background verification entirely?",
                a: "It serves as a highly efficient digital pre-filter. While certain highly regulated industries still require a physical field agent visit, running a digital Reverse Geo-Code check first ensures that the target address is geographically real and fully accessible. This eliminates wasted courier trips to non-existent locations, dropping your field verification failure rate and significantly reducing your overall cost-per-hire."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b-border/60 last:border-0 px-2 py-1">
                <AccordionTrigger className="text-left font-semibold text-lg py-5 hover:text-blue-600 transition-colors text-foreground">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6 pt-2 whitespace-pre-line">
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
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Ready to Clean Your Address Data?</h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Stop wasting time on un-mappable, unverified addresses. Switch to automated data integrity with DigitalRakshak's Reverse Geo-Code verification.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-10 h-14 rounded-full text-lg shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-1">
                  Request an API Key
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold px-10 h-14 rounded-full text-lg transition-all">
                  Speak with an Integration Engineer
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}