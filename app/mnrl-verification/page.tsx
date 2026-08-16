'use client'

import { Card } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useRouter } from 'next/navigation'
import {
  Smartphone,
  ShieldCheck,
  CheckCircle,
  Zap,
  Search,
  ArrowRight,
  AlertTriangle,
  Database,
  FileText,
  Layers,
  BarChart3,
  BadgeCheck,
  Globe,
  Briefcase,
  Users,
  Radio,
  PhoneCall,
  UserX,
  Clock,
  ShieldAlert,
  CreditCard
} from 'lucide-react'

export default function MNRLVerificationPage() {
  const router = useRouter()

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 md:px-12 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-background to-transparent pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, transparent, black)' }}></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-semibold mb-6 shadow-md">
            <Smartphone className="w-4 h-4" />
            TRAI Mobile Number Revocation Intelligence
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight text-balance">
            TRAI MNRL Verification API
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto leading-relaxed">
            Query official TRAI Mobile Number Revocation List (MNRL) in real time to detect recycled, disconnected, or reassigned phone numbers and prevent OTP hijacking & SIM swap fraud.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg h-14 px-8 rounded-full shadow-xl hover:shadow-primary/25 transition-all"
              onClick={() => router.push('/register')}
            >
              Contact US
            </Button>
            <Button
              size="lg"
              className="border-2 border-blue-600 bg-transparent text-blue-600 hover:bg-blue-600 hover:text-white font-bold px-8 h-14 rounded-full text-lg transition-all"
              onClick={() => router.push('/contact')}
            >
              Talk to an API Specialist
            </Button>
          </div>

          {/* Key Metrics / Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-border/40">
            {[
              { label: "Latency", value: "< 300ms", desc: "Sub-second response" },
              { label: "Data Source", value: "100% TRAI Sync", desc: "Official MNRL registry query" },
              { label: "Uptime SLA", value: "99.99%", desc: "Bank-grade infrastructure" },
              { label: "Coverage", value: "All Telecoms", desc: "Jio, Airtel, Vi, BSNL" },
            ].map((metric, i) => (
              <div key={i} className="p-4 rounded-2xl bg-background/60 backdrop-blur-md border border-border/50 shadow-sm">
                <div className="text-2xl md:text-3xl font-extrabold text-blue-600">{metric.value}</div>
                <div className="text-sm font-semibold text-foreground">{metric.label}</div>
                <div className="text-xs text-muted-foreground">{metric.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview & Why It Matters */}
      <section className="px-6 py-20 md:px-12 bg-background">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="outline" className="mb-4 text-blue-600 border-blue-600/30 bg-blue-500/10 px-3 py-1">
              Telecom Risk & Account Takeover Prevention
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground leading-tight">
              Why Mobile Number Revocation Check is Critical
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              When a subscriber deactivates their mobile number, telecom operators recycle and reassign the phone number to a new individual after 90 days. If your system sends OTPs or sensitive alerts to recycled numbers, new subscribers can easily hijack legacy accounts.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              DigitalRakshak&apos;s TRAI MNRL Verification API queries official Telecom Regulatory Authority of India (TRAI) revocation registries in real time, identifying disconnected phone numbers, deactivation timestamps, and recycling flags.
            </p>

            <ul className="space-y-4 mb-6">
              {[
                "Prevent Account Takeover (ATO): Stop sending sensitive OTPs to recycled phone numbers assigned to new users.",
                "Automate Database Scrubbing: Clean stale mobile contact databases before dispatching high-priority SMS alerts.",
                "TRAI Registry Compliance: Direct query to official TRAI Mobile Number Revocation List (MNRL) files.",
                "Reduce SMS & Fraud Costs: Eliminate wasted OTP dispatch charges on disconnected or deactivated lines."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground font-medium text-base">
                  <CheckCircle className="text-blue-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Prevent Account Hijacking",
                desc: "Expose recycled mobile numbers reassigned to new users before sending confidential OTPs.",
                icon: AlertTriangle,
                color: "text-red-500",
                bg: "bg-red-500/10",
                border: "border-red-500/20"
              },
              {
                title: "Clean Stale Database",
                desc: "Scrub database lists to flag disconnected or deactivated mobile numbers automatically.",
                icon: ShieldCheck,
                color: "text-blue-500",
                bg: "bg-blue-500/10",
                border: "border-blue-500/20"
              },
              {
                title: "Operator & Circle Check",
                desc: "Verify telecom service provider (Jio, Airtel, Vi, BSNL) and state circle location.",
                icon: Radio,
                color: "text-green-500",
                bg: "bg-green-500/10",
                border: "border-green-500/20"
              },
              {
                title: "Sub-Second Response",
                desc: "Query TRAI MNRL revocation databases in <300ms for instant login & OTP security.",
                icon: Zap,
                color: "text-amber-500",
                bg: "bg-amber-500/10",
                border: "border-amber-500/20"
              },
            ].map((benefit, i) => (
              <Card key={i} className={`p-6 border ${benefit.border} hover:shadow-lg transition-all duration-300 group bg-background`}>
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

      {/* Complete Data Payload Capabilities */}
      <section className="px-6 py-20 md:px-12 bg-blue-500/5 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-3 text-purple-600 border-purple-600/30 bg-purple-500/10 px-3 py-1">
              Authoritative TRAI Data Extraction
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Verified MNRL Output Parameters
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our API returns complete mobile revocation parameters directly from TRAI central registries.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Mobile Number Checked",
                desc: "10-digit mobile phone number verified against MNRL list.",
                icon: Smartphone,
                color: "text-blue-500"
              },
              {
                title: "Revocation Status",
                desc: "Real-time status: Active, Revoked, Disconnected, or Recycled.",
                icon: BadgeCheck,
                color: "text-green-500"
              },
              {
                title: "Deactivation Timestamp",
                desc: "Exact date and time when the mobile line was disconnected.",
                icon: Clock,
                color: "text-purple-500"
              },
              {
                title: "Telecom Provider (TSP)",
                desc: "Telecom service operator (Jio, Airtel, Vodafone Idea, BSNL).",
                icon: Radio,
                color: "text-amber-500"
              },
              {
                title: "Telecom Circle Jurisdiction",
                desc: "State or telecom circle governing the mobile number.",
                icon: Globe,
                color: "text-indigo-500"
              },
              {
                title: "Number Recycle Flag",
                desc: "Flag indicating whether the number has been reassigned to a new user.",
                icon: UserX,
                color: "text-rose-500"
              },
              {
                title: "Last Activity Timestamp",
                desc: "Most recent TRAI registry update timestamp for the mobile line.",
                icon: Layers,
                color: "text-teal-500"
              },
              {
                title: "Account Risk Score",
                desc: "Calculated risk indicator for OTP dispatch & authentication.",
                icon: ShieldAlert,
                color: "text-cyan-500"
              },
            ].map((feature, i) => (
              <Card key={i} className="p-6 border border-border/60 hover:shadow-xl transition-all duration-300 bg-background group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-lg bg-blue-500/10 group-hover:scale-110 transition-transform">
                    <feature.icon className={`w-5 h-5 ${feature.color}`} />
                  </div>
                  <h3 className="font-bold text-base text-foreground">{feature.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live API Response Sandbox (Commented Out) */}
      {/*
      <section id="api-playground" className="px-6 py-20 md:px-12 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-3 text-blue-600 border-blue-600/30 bg-blue-500/10 px-3 py-1">
              Developer Friendly Integration
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Interactive API Payload Preview
            </h2>
          </div>
        </div>
      </section>
      */}

      {/* How It Works Section */}
      <section className="px-6 py-24 md:px-12 bg-blue-500/10 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">How MNRL Verification Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Four simple, automated steps to check any Indian mobile number against TRAI revocation records.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Input Mobile Number",
                desc: "Pass the 10-digit mobile number via REST API or dashboard before sending OTP.",
                icon: FileText
              },
              {
                step: "02",
                title: "Query TRAI Registry",
                desc: "Our gateway queries central TRAI Mobile Number Revocation List (MNRL) databases.",
                icon: Database
              },
              {
                step: "03",
                title: "Disconnection Audit",
                desc: "System audits deactivation dates, operator recycling flags, and account risk.",
                icon: Search
              },
              {
                step: "04",
                title: "Receive JSON Output",
                desc: "Get clean, structured JSON payload in <300ms to allow or block OTP dispatch.",
                icon: BarChart3
              }
            ].map((item, i) => (
              <Card key={i} className="relative overflow-hidden p-6 border border-border/50 hover:shadow-xl transition-all duration-500 group bg-background/50 backdrop-blur-sm text-center">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                <div className="w-12 h-12 rounded-full bg-blue-600/10 text-blue-600 font-extrabold flex items-center justify-center mb-4 mx-auto text-lg group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases / Industry Applications */}
      <section className="px-6 py-20 md:px-12 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-3 text-green-600 border-green-600/30 bg-green-500/10 px-3 py-1">
              Enterprise Applications
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Built for Security, Banking & Messaging Verticals
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Empowering banks, fintechs, e-commerce platforms, and bulk SMS providers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Banks & Fintech Platforms",
                desc: "Prevent SIM-swap and recycled number account takeover (ATO) by verifying mobile revocation status prior to sending OTPs or authorizing high-value transfers.",
                icon: CreditCard,
                features: ["OTP authentication protection", "SIM swap fraud mitigation", "Account takeover prevention"]
              },
              {
                title: "E-Commerce & Marketplaces",
                desc: "Clean user contact databases to prompt legacy account holders to update their registered phone numbers before password resets or order confirmations.",
                icon: Briefcase,
                features: ["Contact registry cleaning", "Password reset security", "Account recovery audit"]
              },
              {
                title: "Credit Bureaus & Loan Apps",
                desc: "Audit mobile number tenure and active status during digital loan underwriting to ensure the applicant is the legitimate owner of the phone line.",
                icon: ShieldCheck,
                features: ["Phone line tenure audit", "Loan applicant validation", "Identity fraud reduction"]
              },
              {
                title: "Telecom & Bulk SMS Operators",
                desc: "Scrub DND and revoked mobile number lists from marketing SMS dispatch engines to eliminate wasted messaging costs and comply with TRAI regulations.",
                icon: Radio,
                features: ["SMS cost optimization", "DND & revoked line scrubbing", "TRAI regulation compliance"]
              },
            ].map((useCase, i) => (
              <Card key={i} className="p-8 border border-border/60 hover:shadow-xl transition-all duration-300 bg-background group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <useCase.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{useCase.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{useCase.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {useCase.features.map((feat, idx) => (
                    <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 border border-blue-500/20">
                      <CheckCircle className="w-3.5 h-3.5" />
                      {feat}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Comparison / Advantage */}
      <section className="px-6 py-20 md:px-12 bg-blue-500/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              The DigitalRakshak Advantage
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              How DigitalRakshak TRAI MNRL API compares to manual operator searches and basic web scrapers.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border bg-background shadow-lg">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="p-4 font-bold text-foreground">Feature / Parameter</th>
                  <th className="p-4 font-bold text-blue-600 bg-blue-500/10">DigitalRakshak API</th>
                  <th className="p-4 font-bold text-muted-foreground">Manual Operator Lookup</th>
                  <th className="p-4 font-bold text-muted-foreground">Basic Web Scrapers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                {[
                  { feature: "Response Latency", us: "< 300ms", manual: "Days / Manual Request", scraper: "5 - 10 Seconds" },
                  { feature: "Live TRAI Registry Sync", us: "Direct Real-time Sync", manual: "Outdated Lists", scraper: "Cached / Fragile" },
                  { feature: "Full Data Output", us: "Operator, Circle & Deactivation Date", manual: "Limited View", scraper: "Unreliable" },
                  { feature: "Bulk Processing", us: "Up to 50,000 / min", manual: "One by One", scraper: "Blocked Easily" },
                  { feature: "Enterprise SLA Uptime", us: "99.99% Guaranteed", manual: "N/A", scraper: "Frequent Downtime" },
                  { feature: "Data Security", us: "ISO 27001 / AES-256", manual: "No Audit Trail", scraper: "Unsecured" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-muted/30 transition-colors">
                    <td className="p-4 font-semibold text-foreground">{row.feature}</td>
                    <td className="p-4 font-bold text-blue-600 bg-blue-500/5">{row.us}</td>
                    <td className="p-4 text-muted-foreground">{row.manual}</td>
                    <td className="p-4 text-muted-foreground">{row.scraper}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="px-6 py-20 md:px-12 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about integrating the TRAI MNRL Verification API.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                q: "What is the TRAI MNRL Verification API?",
                a: "The TRAI MNRL Verification API allows enterprises to query the official Telecom Regulatory Authority of India Mobile Number Revocation List in real time, detecting disconnected, deactivated, or recycled phone numbers to prevent OTP fraud and account takeover."
              },
              {
                q: "What is a recycled mobile number?",
                a: "When a subscriber deactivates their SIM card, telecom operators hold the number for 90 days before reassigning it to a new customer. If old accounts remain linked to that number, new users can accidentally or maliciously access legacy OTPs."
              },
              {
                q: "Which telecom operators are covered in the API?",
                a: "Our API covers all Indian telecom operators including Reliance Jio, Bharti Airtel, Vodafone Idea (Vi), and BSNL across all telecom circles."
              },
              {
                q: "What is the response latency and SLA?",
                a: "DigitalRakshak guarantees sub-300ms API response latency with 99.99% uptime SLA backed by enterprise redundant infrastructure."
              },
              {
                q: "What parameters are returned in the MNRL API output?",
                a: "The response includes mobile number checked, revocation status (Active/Revoked), exact deactivation date, telecom operator, circle jurisdiction, number recycle flag, and account risk score."
              },
              {
                q: "How do I integrate the TRAI MNRL API?",
                a: "Register on DigitalRakshak, obtain your production/sandbox API keys, and connect our clean REST API endpoints into your login or OTP dispatch pipeline within minutes."
              }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-border/60 rounded-xl px-4 bg-background">
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-blue-600 transition-colors py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 md:px-12 bg-gradient-to-br from-blue-600 to-purple-700 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-balance">
            Ready to Automate TRAI MNRL Verification & Prevent OTP Fraud?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Get instant API sandbox keys and start verifying mobile revocation status in sub-seconds.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-slate-100 font-extrabold text-lg h-14 px-8 rounded-full shadow-2xl transition-all"
              onClick={() => router.push('/register')}
            >
              Get Started Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-blue-700 font-bold px-8 h-14 rounded-full text-lg transition-all"
              onClick={() => router.push('/contact')}
            >
              Talk to Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
