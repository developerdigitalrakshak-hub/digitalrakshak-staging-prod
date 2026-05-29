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
  Clock
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function GeoFencingBGVPage() {

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 md:px-12 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-transparent" style={{ maskImage: 'linear-gradient(to bottom, transparent, black)' }}></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-full text-sm font-semibold mb-6">
            <MapPin className="w-5 h-5" />
            Location Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Geo-Fencing BGV
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
            Real-time, location-intelligent verification for the modern, distributed workforce.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg h-14 px-8 rounded-full shadow-xl hover:shadow-primary/25 transition-all">
              Request a Live Demo
            </Button>
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold px-8 h-14 rounded-full text-lg transition-all">
              Explore Our Integration APIs
            </Button>
          </div>
        </div>
      </section>

      {/* Overview & Why it Matters */}
      <section className="px-6 py-20 md:px-12 bg-background">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Why Geo-Fencing BGV Matters</h2>
            <p className="text-lg text-muted-foreground mb-6">
              In a world of remote work, gig economies, and decentralized operations, traditional address verification is no longer enough. Standard physical address checks only prove where a candidate claims to live on paper—not where they are actually logging in from or operating today.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              digitalrakshak's Geo-Fencing BGV Service introduces location intelligence into your background verification workflow. Effortlessly verify address claims, enforce work-from-home compliance boundaries, and validate the real-time presence of your on-field or remote workforce.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Identity and address fraud have evolved. Candidates regularly use VPNs to mask their location, outsource their remote jobs, or log in from restricted geographical zones.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Implementing geo-fenced verification protects your operational integrity:
            </p>
            <ul className="space-y-4 mb-4">
              {[
                "Eradicate Remote Work Proxy Fraud: Stop candidates who pass the interview process but hand over their daily work and laptop access to an unauthorized third party in a different location.",
                "Enforce Strict Compliance Boundaries: Ensure employees processing sensitive customer data are actually working from their authorized, secure home addresses not from public cafes, transit hubs, or unapproved states.",
                "Automate Field Force Auditing: Instantly verify that field agents, delivery partners, and area managers are physically present at designated client locations or operational sites without relying on manual check-ins."
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
              { title: "Eradicate Proxy Fraud", desc: "Stop candidates who pass interviews but hand over daily work to unauthorized third parties.", icon: AlertTriangle, color: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/20" },
              { title: "Enforce Compliance", desc: "Ensure employees work from authorized secure addresses, not public cafes or unapproved states.", icon: ShieldCheck, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
              { title: "Automate Field Auditing", desc: "Instantly verify field agents are physically present at designated client locations.", icon: Users, color: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/20" },
              { title: "Block VPN & Spoofing", desc: "Detect and block VPNs, mock location apps, and GPS spoofing emulators.", icon: Wifi, color: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/20" },
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
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">We combine mobile location intelligence with secure, privacy-compliant tracking parameters to provide instant validation.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Define the Geo-Fence Boundary", desc: "The employer sets up authorized geographical boundaries (e.g., a specific radius around an approved residential address or a corporate client office) via the digitalrakshak portal.", icon: Map, color: "blue" },
              { step: "2", title: "Secure, Consent-Based Ping", desc: "The candidate or employee receives a secure mobile prompt or app notification requesting permission to verify their location coordinates.", icon: Smartphone, color: "green" },
              { step: "3", title: "Anti-Spoofing Location Check", desc: "Our advanced technology pings the active GPS data while automatically analyzing and blocking active VPNs, mock location apps, or GPS spoofing emulators.", icon: ShieldCheck, color: "purple" },
              { step: "4", title: "Instant Compliance Status", desc: "The system instantly reports whether the candidate is 'Inside' or 'Outside' the designated perimeter, logging a tamper-proof timestamp directly into your BGV dashboard.", icon: BarChart3, color: "orange" }
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
                  <th className="px-6 py-4 text-lg font-semibold text-center">Traditional Physical Address BGV</th>
                  <th className="px-6 py-4 text-lg font-semibold text-center">DigitalRakshak Geo-Fencing BGV</th>
                 </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { feature: "Turnaround Time", traditional: "7 to 10 business days (Requires manual visits)", digital: "Instant, real-time validation", digitalHighlight: true },
                  { feature: "Spoof Protection", traditional: "Easily fooled by fake rental agreements", digital: "Blocks VPNs, emulators, and mock GPS apps", digitalHighlight: true },
                  { feature: "Dynamic Tracking", traditional: "Static, one-time historical proof", digital: "Dynamic tracking for on-field or shift-based needs", digitalHighlight: true },
                  { feature: "Cost Efficiency", traditional: "High operational costs per courier/visit", digital: "Fraction of the cost via fully automated digital APIs", digitalHighlight: true }
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

      {/* Compliance & Privacy Section */}
      <section className="px-6 py-20 md:px-12 bg-blue-500/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full text-sm font-semibold mb-6">
            <Lock className="w-4 h-4 text-blue-600" />
            Built for Compliance and Privacy
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Respecting User Boundaries, Always</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            digitalrakshak respects user boundaries. Our geo-fencing checks are built on absolute, explicit user consent and operate strictly during mandated working hours, fully aligning with corporate data privacy standards.
          </p>
          <div className="mt-8">
            <p className="text-lg font-semibold text-foreground">
              Secure your borderless workforce today.
            </p>
            <p className="text-muted-foreground mt-2">
              Stop guessing where your distributed team is logging in from. Protect your data, clients, and assets with automated location verification.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-24 md:px-12 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Location Intelligence & Remote Compliance FAQs</h2>
            <p className="text-xl text-muted-foreground">Everything you need to know about geo-fencing verification</p>
          </div>
          <Accordion type="single" collapsible className="w-full mb-24 bg-card shadow-sm border rounded-2xl p-4 md:p-8">
            {[
              {
                q: "How does digitalrakshak prevent candidates from using VPNs or mock location apps to cheat the check?",
                a: "Our system is built with robust anti-spoofing technology. The digitalrakshak API does not just look at raw latitude and longitude coordinates; it actively analyzes the network routing and device environment. It automatically detects and flags active VPN connections, proxy servers, residential proxies, and Android/iOS mock location emulators, preventing candidates from faking their location."
              },
              {
                q: "Does this service track employees 24/7? How is candidate privacy protected?",
                a: "Absolutely not. digitalrakshak strictly respects user privacy and complies with data protection frameworks. The geo-fencing location check is entirely event-driven or shift-bound. Location data is only requested and processed during designated parameters—such as at the exact moment of a background check submission, or exclusively during active shift login hours. Continuous 24/7 tracking is never performed."
              },
              {
                q: "How does candidate consent work for geo-fenced verification?",
                a: "Transparency is core to our process. We never pull location data silently. Candidates must explicitly grant location permissions on their device through a secure browser prompt or dedicated mobile integration web-link. If a candidate denies consent, the system logs it, and the HR/recruiting team is immediately notified to handle the compliance step manually."
              },
              {
                q: "What types of remote hiring fraud does this service actively stop?",
                a: "This service specifically eliminates two major remote work risks:\n\nProxy Hiring Fraud: Where a highly qualified candidate clears the interview, but an entirely different person logs in from a different location to do the day-to-day job.\n\nGeographical Moonlighting / Compliance Violations: Where employees process sensitive corporate or client data outside of their contractually agreed-upon secure home address (e.g., working from an unauthorized offshore country, a public cafe, or an unapproved state with different tax/regulatory laws)."
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
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Ready to Secure Your Borderless Workforce?</h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Stop guessing where your distributed team is logging in from. Protect your data, clients, and assets with automated location verification.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-10 h-14 rounded-full text-lg shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-1">
                  Request a Live Demo
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold px-10 h-14 rounded-full text-lg transition-all">
                  Explore Our Integration APIs
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}