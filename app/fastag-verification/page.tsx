'use client'

import { Card } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useRouter } from 'next/navigation'
import {
  CreditCard,
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
  Truck,
  Calendar,
  MapPin,
  UserCheck,
  Tag,
  Landmark,
  Activity
} from 'lucide-react'

export default function FASTagVerificationPage() {
  const router = useRouter()

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 md:px-12 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-background to-transparent pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, transparent, black)' }}></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-semibold mb-6 shadow-md">
            <CreditCard className="w-4 h-4" />
            Automated Toll & FASTag Intelligence
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight text-balance">
            FASTag Verification API
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto leading-relaxed">
            Instantly verify vehicle FASTag registration, Tag ID, active account status, issuing bank, vehicle VRN match, and blacklist/hotlist status via NPCI & NETC gateways.
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
              { label: "Data Source", value: "100% NPCI Sync", desc: "Direct NETC gateway query" },
              { label: "Uptime SLA", value: "99.99%", desc: "Bank-grade infrastructure" },
              { label: "Coverage", value: "All Banks", desc: "HDFC, ICICI, SBI, Paytm & 30+ Banks" },
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
              Fleet Logistics & Toll Audit Intelligence
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground leading-tight">
              Why FASTag Verification is Essential
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              In logistics fleet operations, vehicle financing, smart parking systems, and secondhand automobile sales, verifying FASTag account active status, issuing bank, and blacklist flags is vital for seamless toll operations and fraud prevention.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              DigitalRakshak&apos;s FASTag Verification API connects directly to National Payments Corporation of India (NPCI) and National Electronic Toll Collection (NETC) gateways in real time, validating Tag IDs, vehicle registration number (VRN) matches, and account status.
            </p>

            <ul className="space-y-4 mb-6">
              {[
                "Verify Tag Active & Blacklist Status: Check if a FASTag is active, low balance, blacklisted, or hotlisted.",
                "Vehicle VRN & Tag ID Match: Cross-check Vehicle Registration Number against Tag ID to detect tag swapping.",
                "Issuing Bank Identification: Identify FASTag issuing bank (HDFC, ICICI, SBI, Axis, Paytm, etc.).",
                "Fleet Toll Expense Audit: Audit commercial fleet toll tags to streamline toll reimbursement and prevent fraud."
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
                title: "Tag Active & Blacklist Audit",
                desc: "Check real-time FASTag account status: Active, Low Balance, Blacklisted, or Hotlisted.",
                icon: AlertTriangle,
                color: "text-red-500",
                bg: "bg-red-500/10",
                border: "border-red-500/20"
              },
              {
                title: "VRN & Tag ID Match",
                desc: "Ensure Vehicle Registration Number matches Tag ID to prevent tag swapping & toll fraud.",
                icon: ShieldCheck,
                color: "text-blue-500",
                bg: "bg-blue-500/10",
                border: "border-blue-500/20"
              },
              {
                title: "Issuing Bank Lookup",
                desc: "Identify FASTag issuing bank (HDFC, ICICI, SBI, Paytm, etc.) and tag serial number.",
                icon: Landmark,
                color: "text-green-500",
                bg: "bg-green-500/10",
                border: "border-green-500/20"
              },
              {
                title: "Sub-Second Response",
                desc: "Retrieve verified FASTag account status in <300ms for instant barrier clearance & fleet audit.",
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
              Authoritative NPCI NETC Data Extraction
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Verified FASTag Output Parameters
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our API returns verified FASTag parameters directly from central NPCI NETC toll gateways.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Vehicle Reg Number (VRN)",
                desc: "Vehicle Registration Number matched against NPCI NETC registry.",
                icon: Tag,
                color: "text-blue-500"
              },
              {
                title: "FASTag ID & Serial",
                desc: "Official FASTag identification code and tag serial number.",
                icon: BadgeCheck,
                color: "text-green-500"
              },
              {
                title: "Active / Blacklisted Status",
                desc: "Real-time account status: Active, Low Balance, Blacklisted, or Hotlisted.",
                icon: Activity,
                color: "text-purple-500"
              },
              {
                title: "Issuing Bank Name",
                desc: "Bank name issuing the FASTag (HDFC, ICICI, SBI, Paytm, etc.).",
                icon: Landmark,
                color: "text-amber-500"
              },
              {
                title: "NPCI Registration Date",
                desc: "Official FASTag registration date under NETC framework.",
                icon: Calendar,
                color: "text-indigo-500"
              },
              {
                title: "Vehicle Class Category",
                desc: "Commercial (VC4/VC7) or Non-Commercial vehicle class category.",
                icon: Truck,
                color: "text-rose-500"
              },
              {
                title: "Low Balance Flag",
                desc: "Real-time flag indicating low wallet balance or hotlist alert.",
                icon: AlertTriangle,
                color: "text-teal-500"
              },
              {
                title: "Account Mobile Identifier",
                desc: "Registered user mobile number mask linked with FASTag account.",
                icon: UserCheck,
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">How FASTag Verification Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Four simple, automated steps to verify any Indian vehicle FASTag in sub-seconds.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Input VRN or Tag ID",
                desc: "Pass the vehicle registration number or FASTag ID via REST API or dashboard.",
                icon: FileText
              },
              {
                step: "02",
                title: "Query NPCI Gateway",
                desc: "Our gateway queries central NPCI NETC toll databases in real time.",
                icon: Database
              },
              {
                step: "03",
                title: "Tag Status & Bank Audit",
                desc: "System audits Tag ID, active/blacklist status, issuing bank, and vehicle class.",
                icon: Search
              },
              {
                step: "04",
                title: "Receive JSON Output",
                desc: "Get clean, structured JSON payload in <300ms to complete fleet or toll verification.",
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
              Built for Logistics, Toll & Finance Verticals
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Empowering fleet operators, auto lenders, used car platforms, and smart parking operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Logistics & Fleet Management",
                desc: "Automate fleet toll tag auditing, verify vehicle FASTag status, streamline toll reimbursement, and prevent fraudulent toll claims.",
                icon: Truck,
                features: ["Fleet toll auditing", "Reimbursement verification", "Tag status tracking"]
              },
              {
                title: "Auto Finance & Lenders",
                desc: "Verify vehicle FASTag activity, account status, and repossession tracking for pre-owned commercial vehicle financing.",
                icon: Landmark,
                features: ["Vehicle activity audit", "Pre-owned loan verification", "Repossession tracking"]
              },
              {
                title: "Used Car Marketplaces",
                desc: "Audit vehicle FASTag ownership history, verify registered VRN match, and ensure clean toll record before vehicle listing.",
                icon: CreditCard,
                features: ["FASTag ownership check", "VRN match audit", "Clean toll history"]
              },
              {
                title: "Smart Parking & Toll Operations",
                desc: "Automate barrier clearance and smart parking toll deduction by verifying FASTag account active status in real time.",
                icon: MapPin,
                features: ["Automated barrier clearance", "Smart parking deduction", "Sub-second status check"]
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
              How DigitalRakshak FASTag Verification API compares to manual portal searches and basic web scrapers.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border bg-background shadow-lg">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="p-4 font-bold text-foreground">Feature / Parameter</th>
                  <th className="p-4 font-bold text-blue-600 bg-blue-500/10">DigitalRakshak API</th>
                  <th className="p-4 font-bold text-muted-foreground">Manual NPCI Search</th>
                  <th className="p-4 font-bold text-muted-foreground">Basic Web Scrapers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                {[
                  { feature: "Response Latency", us: "< 300ms", manual: "5 - 15 Minutes", scraper: "5 - 10 Seconds" },
                  { feature: "Live NPCI NETC Sync", us: "Direct Real-time Sync", manual: "Manual Captcha", scraper: "Cached / Fragile" },
                  { feature: "Full Data Output", us: "Tag ID, Bank & Blacklist", manual: "Limited View", scraper: "Unreliable" },
                  { feature: "Bulk Processing", us: "Up to 50,000 / min", manual: "One by One", scraper: "Blocked Easily" },
                  { feature: "Enterprise SLA Uptime", us: "99.99% Guaranteed", manual: "N/A", scraper: "Frequent Downtime" },
                  { feature: "Data Encryption & Security", us: "ISO 27001 / AES-256", manual: "No Audit Trail", scraper: "Unsecured" },
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
              Everything you need to know about integrating the FASTag Verification API.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                q: "What is the FASTag Verification API?",
                a: "The FASTag Verification API allows enterprises and platforms to validate vehicle FASTag status in real time, retrieving Tag ID, active/blacklisted status, issuing bank name, vehicle registration number (VRN) match, and commercial vehicle class directly from central NPCI NETC gateways."
              },
              {
                q: "What banks are supported for FASTag verification?",
                a: "Our API supports all 30+ FASTag issuing banks across India including HDFC Bank, ICICI Bank, State Bank of India (SBI), Axis Bank, Paytm Payments Bank, and IDFC First Bank."
              },
              {
                q: "How does FASTag verification detect toll fraud?",
                a: "By cross-checking the Vehicle Registration Number (VRN) against the registered Tag ID, our API exposes vehicle swapping or fake FASTag tag usage instantly."
              },
              {
                q: "What is the response latency and SLA?",
                a: "DigitalRakshak guarantees sub-300ms API response latency with 99.99% uptime SLA backed by enterprise redundant infrastructure."
              },
              {
                q: "What parameters are returned in the FASTag API output?",
                a: "The response includes Vehicle Registration Number (VRN), FASTag ID, tag serial number, active/blacklisted status flag, issuing bank name, NPCI registration date, vehicle class category, and low balance alert indicator."
              },
              {
                q: "How do I integrate the FASTag API?",
                a: "Register on DigitalRakshak, obtain your production/sandbox API keys, and connect our clean REST API endpoints into your fleet or toll application within minutes."
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
            Ready to Automate FASTag Verification & Fleet Toll Intelligence?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Get instant API sandbox keys and start verifying FASTags in sub-seconds.
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
