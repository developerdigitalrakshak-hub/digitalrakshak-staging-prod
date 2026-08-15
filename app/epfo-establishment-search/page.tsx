'use client'

import { Card } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useRouter } from 'next/navigation'
import {
  Building2,
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
  Landmark,
  Scale,
  Clock
} from 'lucide-react'

export default function EPFOEstablishmentSearchPage() {
  const router = useRouter()

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 md:px-12 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-background to-transparent pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, transparent, black)' }}></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-semibold mb-6 shadow-md">
            <Building2 className="w-4 h-4" />
            Automated EPFO & Establishment Intelligence
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight text-balance">
            EPFO Establishment Search API
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto leading-relaxed">
            Instantly verify company EPFO Establishment IDs, employer registration details, employee contribution history, active status, and PF compliance records in real-time.
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
              { label: "Data Source", value: "100% Govt Sync", desc: "Direct EPFO portal query" },
              { label: "Uptime SLA", value: "99.99%", desc: "Bank-grade infrastructure" },
              { label: "Coverage", value: "All States", desc: "PAN-India EPFO records" },
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
              Employer Verification & Labor Audit
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground leading-tight">
              Why EPFO Establishment Search is Essential
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              In background screening and corporate vendor management, confirming that a past employer or manpower vendor is a legally registered, active EPFO establishment is critical to unmasking shell companies and fake experience letters.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              DigitalRakshak&apos;s EPFO Establishment Search API queries official EPFO government databases in real time, validating establishment codes, registered addresses, active status, and monthly Electronic Challan cum Return (ECR) filings.
            </p>

            <ul className="space-y-4 mb-6">
              {[
                "Detect Ghost Employers: Expose fabricated companies set up solely to issue fake experience letters.",
                "Verify Active PF Remittances: Confirm monthly ECR filing regularities for employee contributions.",
                "Validate Establishment Code: Verify 22-digit EPFO establishment ID & LIN numbers.",
                "Audit Staffing & Vendors: Ensure third-party contractors comply with statutory PF labor laws."
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
                title: "Expose Ghost Employers",
                desc: "Unmask shell companies or inactive entities providing fabricated employment certificates.",
                icon: AlertTriangle,
                color: "text-red-500",
                bg: "bg-red-500/10",
                border: "border-red-500/20"
              },
              {
                title: "Confirm PF Active Status",
                desc: "Verify monthly Electronic Challan cum Return (ECR) filings and active PF remittance status.",
                icon: ShieldCheck,
                color: "text-blue-500",
                bg: "bg-blue-500/10",
                border: "border-blue-500/20"
              },
              {
                title: "Instant Portal Query",
                desc: "Direct query to EPFO regional offices for establishment ID, office, and LIN numbers.",
                icon: Database,
                color: "text-green-500",
                bg: "bg-green-500/10",
                border: "border-green-500/20"
              },
              {
                title: "Sub-Second Latency",
                desc: "Retrieve verified establishment records in <300ms for automated BGV workflows.",
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
              Authoritative Data Extraction
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Comprehensive EPFO Data Output
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our API returns verified employer parameters directly from official EPFO government registries.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Establishment Name & Code",
                desc: "Official registered establishment title and 22-digit EPFO code.",
                icon: Building2,
                color: "text-blue-500"
              },
              {
                title: "Active Registration Status",
                desc: "Real-time registration status: Active, Exemption Granted, or Closed.",
                icon: BadgeCheck,
                color: "text-green-500"
              },
              {
                title: "Regional Office",
                desc: "EPFO Regional & Zonal office jurisdiction governing the establishment.",
                icon: Globe,
                color: "text-purple-500"
              },
              {
                title: "Registration Date & LIN",
                desc: "Official coverage date and Labor Identification Number (LIN).",
                icon: FileText,
                color: "text-amber-500"
              },
              {
                title: "Industry Classification",
                desc: "Primary business activity and section registered under EPFO.",
                icon: Briefcase,
                color: "text-indigo-500"
              },
              {
                title: "Last ECR Filing Month",
                desc: "Recent monthly ECR wage challan filing status and date.",
                icon: Clock,
                color: "text-rose-500"
              },
              {
                title: "Active PF Employee Count",
                desc: "Total number of employees actively contributing to Provident Fund.",
                icon: Users,
                color: "text-teal-500"
              },
              {
                title: "Registered Address",
                desc: "Verified physical registered office address and pin code.",
                icon: Landmark,
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
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Clean, RESTful JSON response payload structure designed for instant integration.
            </p>
          </div>
        </div>
      </section>
      */}

      {/* How It Works Section */}
      <section className="px-6 py-24 md:px-12 bg-blue-500/10 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">How EPFO Search Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Four simple, automated steps to verify any company EPFO registration in sub-seconds.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Input Code or Name",
                desc: "Pass the establishment code or employer name via our REST API or portal dashboard.",
                icon: FileText
              },
              {
                step: "02",
                title: "Query EPFO Gateway",
                desc: "Our high-speed gateway connects directly to central EPFO portal databases.",
                icon: Database
              },
              {
                step: "03",
                title: "ECR & Registration Audit",
                desc: "System verifies establishment active status, LIN number, and recent ECR filings.",
                icon: Search
              },
              {
                step: "04",
                title: "Receive JSON Output",
                desc: "Get clean, structured JSON payload in <300ms to complete your background check.",
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
              Built for High-Growth Enterprise Verticals
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Empowering HR teams, BGV platforms, staffing agencies, and financial institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "HR & Background Screening (BGV)",
                desc: "Verify previous employer authenticity, detect fake experience certificates, and validate reported tenure against official PF records.",
                icon: Briefcase,
                features: ["Prior employer verification", "Ghost company detection", "Tenure cross-check"]
              },
              {
                title: "Staffing & Vendor Risk Audit",
                desc: "Audit third-party manpower vendors and contractors for statutory PF contribution compliance to avoid joint employer liabilities.",
                icon: Users,
                features: ["Vendor PF compliance audit", "ECR filing verification", "Contractor risk score"]
              },
              {
                title: "Corporate M&A Due Diligence",
                desc: "Inspect target company labor compliance, historical PF remittances, active employee count, and potential statutory liability risks.",
                icon: Scale,
                features: ["Labor compliance audit", "PF liability assessment", "Employee headcount validation"]
              },
              {
                title: "Lending & Commercial Banking",
                desc: "Verify business existence, operational stability, and employee payroll scale for MSME business loans and credit underwriting.",
                icon: Landmark,
                features: ["Payroll scale validation", "Business existence check", "Credit risk underwriting"]
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
              How DigitalRakshak EPFO Search API compares to manual portal queries and basic scrapers.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border bg-background shadow-lg">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="p-4 font-bold text-foreground">Feature / Parameter</th>
                  <th className="p-4 font-bold text-blue-600 bg-blue-500/10">DigitalRakshak API</th>
                  <th className="p-4 font-bold text-muted-foreground">Manual EPFO Search</th>
                  <th className="p-4 font-bold text-muted-foreground">Basic Web Scrapers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                {[
                  { feature: "Response Latency", us: "< 300ms", manual: "5 - 15 Minutes", scraper: "5 - 10 Seconds" },
                  { feature: "Live EPFO Portal Sync", us: "Direct Real-time Sync", manual: "Manual Captcha", scraper: "Cached / Fragile" },
                  { feature: "ECR Filing Status", us: "Complete ECR History", manual: "Limited View", scraper: "Unreliable" },
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
              Everything you need to know about integrating the EPFO Establishment Search API.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                q: "What is the EPFO Establishment Search API?",
                a: "The EPFO Establishment Search API allows enterprises to instantly look up company EPFO establishment codes, employer registration status, LIN numbers, regional office jurisdictions, and monthly Electronic Challan cum Return (ECR) filing records."
              },
              {
                q: "How does EPFO verification expose ghost employers?",
                a: "Fake experience certificates often list non-existent or unregistered company names. By querying the official EPFO registry, our API verifies whether the establishment is legally registered and actively filing monthly PF contributions."
              },
              {
                q: "Can we verify third-party vendor PF compliance?",
                a: "Yes! Staffing agencies and HR teams can verify whether manpower vendors are actively filing monthly ECR returns for their employees, shielding the principal employer from labor law liabilities."
              },
              {
                q: "What is the API response latency and SLA?",
                a: "DigitalRakshak guarantees sub-300ms API response latency with 99.99% uptime SLA backed by enterprise infrastructure."
              },
              {
                q: "What parameters are returned in the response?",
                a: "The response includes establishment legal name, 22-digit code, LIN number, registration date, active status, regional office, last ECR filing month/year, and active PF employee headcount."
              },
              {
                q: "How do I integrate the EPFO API?",
                a: "Register on DigitalRakshak, generate sandbox API keys, and connect our REST API endpoints directly into your HR, ATS, or compliance platform within minutes."
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
            Ready to Automate EPFO Establishment Verification & BGV Audit?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Get instant API sandbox keys and start verifying EPFO establishment records in sub-seconds.
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
