'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useRouter } from 'next/navigation'
import {
  FileCheck,
  ShieldCheck,
  CheckCircle,
  Zap,
  Building2,
  Search,
  ArrowRight,
  AlertTriangle,
  Database,
  Check,
  Copy,
  FileText,
  Layers,
  BarChart3,
  BadgeCheck,
  Globe,
  Briefcase,
  ShoppingCart,
  Truck,
  Landmark
} from 'lucide-react'

export default function GSTINVerifyPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<'single' | 'filing' | 'bulk'>('single')
  const [copied, setCopied] = useState(false)

  const samplePayloads = {
    single: `{
  "status": "success",
  "code": 200,
  "data": {
    "gstin": "07AAAAA0000A1Z5",
    "legal_name": "DIGITALRAKSHAK ENTERPRISES PRIVATE LIMITED",
    "trade_name": "DIGITALRAKSHAK TECH",
    "gstin_status": "Active",
    "taxpayer_type": "Regular",
    "constitution": "Private Limited Company",
    "registration_date": "2019-04-15",
    "principal_address": {
      "building_name": "Rakshak Tower, Floor 4",
      "street": "Cyber City, Phase II",
      "city": "Gurugram",
      "state": "Haryana",
      "pincode": "122002",
      "jurisdiction": "WARD 045, STATE GST"
    },
    "nature_of_business": ["Software Development", "IT Services", "Data Analytics"],
    "einvoice_status": "Enabled",
    "last_updated": "2026-08-15T09:30:00Z"
  }
}`,
    filing: `{
  "status": "success",
  "gstin": "07AAAAA0000A1Z5",
  "filing_compliance": {
    "overall_status": "Compliant",
    "financial_year": "2025-2026",
    "returns": [
      { "return_type": "GSTR-3B", "period": "Jul-2026", "filing_date": "2026-08-10", "status": "Filed" },
      { "return_type": "GSTR-1",  "period": "Jul-2026", "filing_date": "2026-08-08", "status": "Filed" },
      { "return_type": "GSTR-3B", "period": "Jun-2026", "filing_date": "2026-07-18", "status": "Filed" },
      { "return_type": "GSTR-1",  "period": "Jun-2026", "filing_date": "2026-07-10", "status": "Filed" }
    ],
    "itc_risk_score": "LOW",
    "defaulter_flag": false
  }
}`,
    bulk: `{
  "batch_id": "batch_gst_998124",
  "total_records": 3,
  "processed": 3,
  "results": [
    { "gstin": "07AAAAA0000A1Z5", "status": "Active", "name": "DIGITALRAKSHAK TECH", "risk": "Low" },
    { "gstin": "27BBBBB1111B2Z3", "status": "Active", "name": "GLOBAL LOGISTICS INC", "risk": "Low" },
    { "gstin": "09CCCCC2222C3Z1", "status": "Suspended", "name": "APEX VENDORS HUB", "risk": "High" }
  ]
}`
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(samplePayloads[activeTab])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 md:px-12 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-background to-transparent pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, transparent, black)' }}></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-semibold mb-6 shadow-md">
            <FileCheck className="w-4 h-4" />
            Enterprise Tax & Business Verification
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight text-balance">
            GSTIN Verification API for Enterprises
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto leading-relaxed">
            Instantly validate 15-digit GSTINs, confirm active registration status, extract taxpayer profiles, verify GSTR return compliance, and eliminate fake invoice fraud across your business ecosystem.
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
              { label: "Uptime SLA", value: "99.99%", desc: "Bank-grade infrastructure" },
              { label: "Data Source", value: "Real-time GSTN", desc: "Direct Govt tax portal sync" },
              { label: "Compliance", value: "100% Audit Ready", desc: "GSTR-1 & 3B verification" },
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
              Risk Mitigation & ITC Protection
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground leading-tight">
              Why GST Verification is Critical for Your Business
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              In modern enterprise procurement and vendor management, transacting with unverified GSTINs or non-compliant suppliers poses massive financial risks—including non-claimable Input Tax Credit (ITC), GST tax penalties, and fraudulent billing networks.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              DigitalRakshak&apos;s GSTIN Verification API queries the GSTN portal in real time, giving your platform full visibility into vendor authenticity, active operational status, and monthly GSTR return filing frequency.
            </p>

            <ul className="space-y-4 mb-6">
              {[
                "Prevent Fraudulent Invoices: Detect fake GST numbers & bogus billing entities before payout.",
                "Ensure Input Tax Credit (ITC): Confirm vendor GSTR-1 and GSTR-3B filings to guarantee ITC eligibility.",
                "Real-Time Taxpayer Profiling: Fetch legal name, trade name, state jurisdiction, and business type.",
                "Streamline Merchant Onboarding: Automate B2B partner registration in sub-seconds."
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
                title: "Prevent Fraudulent Invoices",
                desc: "Unmask fake GST numbers and fraudulent shell suppliers before issuing payments.",
                icon: AlertTriangle,
                color: "text-red-500",
                bg: "bg-red-500/10",
                border: "border-red-500/20"
              },
              {
                title: "Ensure ITC Claim Security",
                desc: "Verify vendor GSTR-3B & GSTR-1 filing status to ensure you never lose Input Tax Credit.",
                icon: ShieldCheck,
                color: "text-blue-500",
                bg: "bg-blue-500/10",
                border: "border-blue-500/20"
              },
              {
                title: "Instant Profile Extraction",
                desc: "Retrieve legal business name, registered address, and business constitution in real-time.",
                icon: Database,
                color: "text-green-500",
                bg: "bg-green-500/10",
                border: "border-green-500/20"
              },
              {
                title: "Audit Readiness & SLA",
                desc: "Maintain complete digital compliance trails for tax audits with sub-second API speeds.",
                icon: Zap,
                color: "text-amber-500",
                bg: "bg-amber-500/10",
                border: "border-amber-500/20"
              },
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

      {/* Complete Data Payload Capabilities */}
      <section className="px-6 py-20 md:px-12 bg-blue-500/5 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-3 text-purple-600 border-purple-600/30 bg-purple-500/10 px-3 py-1">
              Data Enrichment & Intelligence
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Comprehensive GST Verification Data Output
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our API returns over 25+ verified taxpayer parameters directly from official government tax registries.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Legal & Trade Name",
                desc: "Official business legal title and operational trade name match.",
                icon: Building2,
                color: "text-blue-500"
              },
              {
                title: "Active / Suspended Status",
                desc: "Real-time registration status: Active, Cancelled, or Suspended.",
                icon: BadgeCheck,
                color: "text-green-500"
              },
              {
                title: "Business Constitution",
                desc: "Private Ltd, Public Ltd, LLP, Partnership, Sole Proprietorship, or SEZ Unit.",
                icon: Layers,
                color: "text-purple-500"
              },
              {
                title: "Registered Address",
                desc: "Building, street, pincode, state, and tax jurisdiction details.",
                icon: Globe,
                color: "text-amber-500"
              },
              {
                title: "Taxpayer Category",
                desc: "Regular, Composition, SEZ Developer, Input Service Distributor (ISD).",
                icon: FileText,
                color: "text-indigo-500"
              },
              {
                title: "GSTR Filing Frequency",
                desc: "Detailed return filing history for GSTR-1 and GSTR-3B tax periods.",
                icon: BarChart3,
                color: "text-rose-500"
              },
              {
                title: "Business Activities",
                desc: "Principal goods/services registered under official HSN/SAC codes.",
                icon: Briefcase,
                color: "text-teal-500"
              },
              {
                title: "Authorized Signatories",
                desc: "Verified promoter, partner, or director identities linked to GSTIN.",
                icon: Building2,
                color: "text-cyan-500"
              },
            ].map((feature, i) => (
              <Card key={i} className="p-6 border border-border/60 hover:shadow-xl transition-all duration-300 bg-background/80 backdrop-blur-sm group">
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
              Clean, RESTful JSON response payload structure designed for instant integration in Node.js, Python, Java, Go, or PHP.
            </p>
          </div>

          <div className="bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden max-w-4xl mx-auto">
            <div className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-xs font-mono text-slate-400 ml-2">POST /api/v2/gst/verify</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('single')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === 'single' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  GST Lookup
                </button>
                <button
                  onClick={() => setActiveTab('filing')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === 'filing' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  GSTR Filing Status
                </button>
                <button
                  onClick={() => setActiveTab('bulk')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === 'bulk' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Bulk API
                </button>

                <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleCopy}
                  className="text-slate-300 hover:text-white hover:bg-slate-800 ml-2"
                >
                  {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
            </div>

            <div className="p-6 overflow-x-auto font-mono text-sm leading-relaxed text-slate-200 bg-slate-950">
              <pre>{samplePayloads[activeTab]}</pre>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* How It Works Section */}
      <section className="px-6 py-24 md:px-12 bg-blue-500/10 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">How GST Verification Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Four simple, automated steps to verify any GSTIN number in sub-seconds.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Pass GSTIN Number",
                desc: "Send the 15-digit GSTIN through our secure REST API or bulk batch upload dashboard.",
                icon: FileText,
                color: "blue"
              },
              {
                step: "02",
                title: "Real-Time Govt Query",
                desc: "Our high-speed gateway connects directly to central GSTN servers & tax registries.",
                icon: Database,
                color: "purple"
              },
              {
                step: "03",
                title: "Deep Compliance Audit",
                desc: "System cross-verifies active status, trade name, address, and past GSTR filing history.",
                icon: Search,
                color: "green"
              },
              {
                step: "04",
                title: "Receive JSON Output",
                desc: "Get clean, structured JSON payload in <300ms to proceed with instant vendor onboarding.",
                icon: BarChart3,
                color: "orange"
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
              Industry Applications
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Built for High-Growth Enterprise Verticals
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Empowering financial institutions, platforms, marketplaces, and supply chains.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Fintech & Banking",
                desc: "Automate merchant onboarding, verify commercial borrowers for GST-backed business loans, and conduct instant KYB due diligence.",
                icon: Landmark,
                features: ["GST-backed loan underwriting", "Merchant tax validation", "Risk scoring"]
              },
              {
                title: "E-Commerce & Marketplaces",
                desc: "Ensure sellers registered on your platform have active GSTINs, preventing marketplace seller fraud and tax non-compliance.",
                icon: ShoppingCart,
                features: ["Instant seller onboarding", "Tax registration audit", "Automated compliance"]
              },
              {
                title: "Supply Chain & Logistics",
                desc: "Validate vendor & transporter GST numbers, verify E-Way bills, and safeguard accounts payable against bogus tax invoices.",
                icon: Truck,
                features: ["Vendor payout protection", "E-Way bill validation", "ITC reconciliation"]
              },
              {
                title: "Enterprise ERP & Accounting B2B",
                desc: "Integrate GST verification directly into SAP, Tally, Oracle, or custom ERPs for seamless AP invoice matching and ITC audit tracking.",
                icon: Briefcase,
                features: ["Automated AP invoice matching", "GSTR-3B compliance tracking", "Bulk verification"]
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
              How DigitalRakshak GST Verification API compares to legacy manual checks and web scraping tools.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border bg-background shadow-lg">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="p-4 font-bold text-foreground">Feature / Parameter</th>
                  <th className="p-4 font-bold text-blue-600 bg-blue-500/10">DigitalRakshak API</th>
                  <th className="p-4 font-bold text-muted-foreground">Manual GST Portal Check</th>
                  <th className="p-4 font-bold text-muted-foreground">Basic Web Scrapers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                {[
                  { feature: "Response Latency", us: "< 300ms", manual: "5 - 10 Minutes", scraper: "3 - 8 Seconds" },
                  { feature: "Live GSTN Govt Sync", us: "Direct Real-time Sync", manual: "Manual Captcha", scraper: "Cached / Fragile" },
                  { feature: "GSTR Filing Status", us: "Complete GSTR-1 & 3B", manual: "Limited View", scraper: "Unreliable" },
                  { feature: "Bulk Processing", us: "Up to 50,000 / min", manual: "1 by 1 Manual", scraper: "Blocked easily" },
                  { feature: "Enterprise SLA Uptime", us: "99.99% Guaranteed", manual: "N/A", scraper: "Frequent downtime" },
                  { feature: "Data Encryption & Security", us: "AES-256 / ISO 27001", manual: "No Audit Trail", scraper: "Unsecured" },
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
              Everything you need to know about integrating the GSTIN Verification API.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                q: "What is the GSTIN Verification API?",
                a: "The GSTIN Verification API allows businesses and platforms to automatically validate 15-digit Goods and Services Tax Identification Numbers (GSTIN) against official GSTN databases in real-time, fetching taxpayer registration details, operational status, and return filing history."
              },
              {
                q: "How does GST verification prevent Input Tax Credit (ITC) loss?",
                a: "If a supplier fails to file GSTR-1 or GSTR-3B returns, their buyers cannot claim Input Tax Credit (ITC). DigitalRakshak's API fetches live GSTR filing frequency and flags non-filing vendors before invoices are processed."
              },
              {
                q: "Can we process bulk GSTIN verifications?",
                a: "Yes! DigitalRakshak provides high-throughput bulk verification endpoints allowing enterprises to verify thousands of GSTINs simultaneously for monthly GST reconciliations."
              },
              {
                q: "What details are returned in the GST API response?",
                a: "The response includes taxpayer legal name, trade name, active/suspended status, taxpayer category, business constitution, principal registered address, state tax jurisdiction, business activities, and past GSTR filing history."
              },
              {
                q: "What is the SLA and uptime of DigitalRakshak GST API?",
                a: "DigitalRakshak guarantees 99.99% uptime with sub-300ms API response latency, backed by enterprise SLA agreements and 24/7 dedicated technical support."
              },
              {
                q: "How do I integrate the GST Verification API?",
                a: "You can register on our portal, generate production or sandbox API keys, and follow our comprehensive API documentation to start making HTTP requests within minutes."
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
            Ready to Automate GST Verification & Eliminate Tax Fraud?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Get instant API sandbox keys and start verifying GSTINs in sub-seconds.
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
