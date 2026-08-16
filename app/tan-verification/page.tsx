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
  BarChart3,
  Globe,
  Briefcase,
  Users,
  Landmark,
  Clock,
  CheckCircle2,
  Check,
  TrendingUp,
  MapPin,
  FileCheck,
  Building
} from 'lucide-react'

export default function TANVerificationPage() {
  const router = useRouter()

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 md:px-12 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-background to-transparent pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, transparent, black)' }}></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-semibold mb-6 shadow-md">
            <Building2 className="w-4 h-4" />
            Automated Tax Deduction Account Number (TAN) Verification
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight text-balance">
            TAN Verification API
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto leading-relaxed">
            Instantly verify 10-character Tax Deduction Account Numbers (TAN), deductee legal entity name, TAN category (Company/Individual/Firm), jurisdiction AO code, active TAN status, and TDS compliance via official ITD registries.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-14">
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

          {/* Custom Glowing Metrics Section */}
          <div className="relative max-w-4xl mx-auto p-2 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 p-[1px] shadow-2xl">
            <div className="bg-background/80 backdrop-blur-xl rounded-[23px] p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { stat: "< 300ms", label: "Response Latency", badge: "Sub-Second", icon: Clock, color: "from-blue-500 to-cyan-500" },
                { stat: "100%", label: "ITD Portal Sync", badge: "Live Sync", icon: Database, color: "from-green-500 to-emerald-500" },
                { stat: "99.99%", label: "Uptime SLA", badge: "Bank-Grade", icon: ShieldCheck, color: "from-purple-500 to-indigo-500" },
                { stat: "PAN-India", label: "TAN Registry", badge: "All AO Codes", icon: Building2, color: "from-amber-500 to-rose-500" },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center mb-3 shadow-md group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="text-2xl md:text-3xl font-black text-foreground tracking-tight">{item.stat}</div>
                  <div className="text-xs font-semibold text-muted-foreground mt-1">{item.label}</div>
                  <span className="mt-2 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                    {item.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Benefits */}
      <section className="px-6 py-20 md:px-12 bg-background">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="outline" className="mb-4 text-blue-600 border-blue-600/30 bg-blue-500/10 px-3 py-1">
              Corporate Tax Compliance & Vendor Audit
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground leading-tight">
              Why Real-Time TAN Verification is Vital
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              In vendor onboarding, corporate procurement, B2B invoicing, and Form 16A/TDS certificate generation, verifying deductee Tax Deduction Account Numbers (TAN) ensures accurate tax deductions at source and prevents regulatory penalties.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              DigitalRakshak&apos;s TAN Verification API queries official Income Tax Department (ITD) NSDL databases in real time, validating deductee legal entity name, TAN category (Company, Firm, Individual), Assessing Officer (AO) jurisdiction code, and active status.
            </p>

            <ul className="space-y-4 mb-6">
              {[
                "Verify Deductee Legal Name & Status: Confirm registered company legal title, TAN active status, and entity category.",
                "Extract Assessing Officer (AO) Code: Retrieve AO code, AO type, range code, and AO number jurisdiction.",
                "TDS Compliance & Tax Audit: Ensure accurate tax deduction at source (TDS) filings and prevent incorrect TAN penalties.",
                "Direct Income Tax Portal Sync: Real-time query to official Income Tax Department NSDL registries."
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
                title: "Expose Invalid TAN Numbers",
                desc: "Unmask non-existent or inactive TAN numbers before issuing corporate B2B invoices.",
                icon: AlertTriangle,
                color: "text-red-500",
                bg: "bg-red-500/10",
                border: "border-red-500/20"
              },
              {
                title: "Deductee Name Match",
                desc: "Confirm legal entity name, company classification, and linked PAN number.",
                icon: Building2,
                color: "text-blue-500",
                bg: "bg-blue-500/10",
                border: "border-blue-500/20"
              },
              {
                title: "AO Code Jurisdiction",
                desc: "Extract Assessing Officer (AO) area code, range code, and tax commissioner charge.",
                icon: MapPin,
                color: "text-green-500",
                bg: "bg-green-500/10",
                border: "border-green-500/20"
              },
              {
                title: "Sub-Second Response",
                desc: "Retrieve verified TAN details in <300ms for instant ERP & procurement onboarding.",
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

      {/* Custom Data Output Browser Layout */}
      <section className="px-6 py-20 md:px-12 bg-gradient-to-b from-blue-500/5 via-background to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-3 text-purple-600 border-purple-600/30 bg-purple-500/10 px-3 py-1">
              Authoritative Data Payload Browser
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Comprehensive TAN Output Parameters
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our API returns complete deductor legal identifiers and AO jurisdiction parameters.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Column 1: Deductor & TAN Identifiers */}
            <Card className="p-8 border border-blue-500/20 shadow-xl bg-background/80 backdrop-blur-md rounded-3xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/60">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Deductor & TAN Identifiers</h3>
                  <p className="text-sm text-muted-foreground">Official ITD deductor metadata</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Deductor Legal Entity Name", detail: "Official company / firm name linked with TAN", code: "deductor_name" },
                  { label: "10-Character TAN Number", detail: "10-character Tax Deduction Account Number", code: "tan_number" },
                  { label: "TAN Active Status", detail: "Real-time registration status: Active", code: "tan_status" },
                  { label: "Entity Category", detail: "Company / Firm / Individual / Govt Deductor", code: "category" },
                  { label: "Linked PAN Number", detail: "Masked Permanent Account Number linked with TAN", code: "pan_linked" },
                  { label: "Date of TAN Allotment", detail: "Original TAN allotment date", code: "allotment_date" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3.5 rounded-2xl bg-muted/30 border border-border/40 hover:bg-muted/50 transition-colors">
                    <div>
                      <div className="text-sm font-semibold text-foreground">{item.label}</div>
                      <div className="text-xs text-muted-foreground">{item.detail}</div>
                    </div>
                    <code className="text-xs px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-600 font-mono font-bold">
                      {item.code}
                    </code>
                  </div>
                ))}
              </div>
            </Card>

            {/* Column 2: AO Jurisdiction & Address Parameters */}
            <Card className="p-8 border border-purple-500/20 shadow-xl bg-background/80 backdrop-blur-md rounded-3xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/60">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">AO Jurisdiction & Address</h3>
                  <p className="text-sm text-muted-foreground">Assessing officer & location details</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Assessing Officer (AO) Code", detail: "AO code assigned by Income Tax Dept", code: "ao_code" },
                  { label: "AO Type & Range Code", detail: "AO type classification and range code", code: "range_code" },
                  { label: "Area Code & AO Number", detail: "Area code and jurisdictional AO number", code: "ao_number" },
                  { label: "Income Tax Commissioner Charge", detail: "Jurisdictional Tax Commissioner charge", code: "commissioner_charge" },
                  { label: "Registered Office Address", detail: "Physical office address registered under TAN", code: "office_address" },
                  { label: "State & Pincode Jurisdiction", detail: "State name and pincode location", code: "state_pincode" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3.5 rounded-2xl bg-muted/30 border border-border/40 hover:bg-muted/50 transition-colors">
                    <div>
                      <div className="text-sm font-semibold text-foreground">{item.label}</div>
                      <div className="text-xs text-muted-foreground">{item.detail}</div>
                    </div>
                    <code className="text-xs px-2.5 py-1 rounded-lg bg-purple-500/10 text-purple-600 font-mono font-bold">
                      {item.code}
                    </code>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-6 py-24 md:px-12 bg-blue-500/10 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">How TAN Verification Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Four simple, automated steps to verify any Indian TAN number in sub-seconds.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Input 10-Digit TAN",
                desc: "Pass the 10-character TAN number (e.g. DELM12345F) via REST API or dashboard.",
                icon: FileText
              },
              {
                step: "02",
                title: "Query ITD Database",
                desc: "Our gateway queries official Income Tax Department NSDL registries in real time.",
                icon: Database
              },
              {
                step: "03",
                title: "Deductor & AO Audit",
                desc: "System audits deductor legal entity name, TAN status, and AO code jurisdiction.",
                icon: Search
              },
              {
                step: "04",
                title: "Receive JSON Output",
                desc: "Get clean, structured JSON payload in <300ms to complete vendor onboarding.",
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

      {/* Custom Enterprise Use Cases Layout */}
      <section className="px-6 py-20 md:px-12 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-3 text-green-600 border-green-600/30 bg-green-500/10 px-3 py-1">
              Enterprise Workflows
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Built for Procurement, ERP & Audit Workflows
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Empowering corporate procurement, accounting platforms, audit firms, and PSU suppliers.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Corporate Vendor Onboarding & Procurement",
                desc: "Automate vendor TAN verification during vendor registration to ensure accurate TDS deduction rates, correct invoicing, and seamless Form 16A generation.",
                icon: Briefcase,
                metrics: "100% TDS Compliance",
                tag: "Vendor Procurement",
                points: ["Vendor TAN status verification", "Accurate TDS rate calculation", "Form 16A pre-validation"]
              },
              {
                title: "Accounting & ERP Software Integrations",
                desc: "Pre-validate deductor TAN numbers inside ERP and billing software before issuing tax invoices or submitting TDS returns (Form 26Q / 27Q).",
                icon: FileCheck,
                metrics: "Zero Invoicing Error",
                tag: "ERP Integration",
                points: ["Automated ERP TAN lookup", "Form 26Q return accuracy", "Invalid TAN error reduction"]
              },
              {
                title: "Financial Due Diligence & M&A Audits",
                desc: "Verify corporate tax compliance, deductor entity structure, and jurisdictional Assessing Officer (AO) codes during M&A financial audits.",
                icon: Landmark,
                metrics: "100% Tax Audit Accuracy",
                tag: "Corporate Due Diligence",
                points: ["Corporate tax status audit", "AO jurisdiction verification", "Entity legal name match"]
              },
              {
                title: "Government & PSU Supplier Audits",
                desc: "Validate contractor and supplier TAN credentials for public sector unit (PSU) contracts to ensure compliance with statutory tax deduction laws.",
                icon: Building,
                metrics: "Sub-Second Contract Audit",
                tag: "PSU Compliance",
                points: ["Contractor TAN verification", "Statutory tax deduction compliance", "Official NSDL registry sync"]
              },
            ].map((useCase, idx) => (
              <Card key={idx} className="p-8 border border-border/60 hover:border-blue-500/40 hover:shadow-xl transition-all duration-300 bg-background relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-4 max-w-3xl">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                        <useCase.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600 bg-blue-500/10 px-2.5 py-1 rounded-full">
                          {useCase.tag}
                        </span>
                        <h3 className="text-2xl font-bold text-foreground mt-1">{useCase.title}</h3>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">{useCase.desc}</p>

                    <div className="flex flex-wrap gap-3 pt-2">
                      {useCase.points.map((pt, pIdx) => (
                        <span key={pIdx} className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground/80 bg-muted/60 px-3 py-1 rounded-full border border-border/40">
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                          {pt}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="md:border-l md:border-border/60 md:pl-8 flex flex-col justify-center shrink-0">
                    <span className="text-xs font-semibold text-muted-foreground">Impact SLA</span>
                    <span className="text-xl font-extrabold text-blue-600 mt-0.5">{useCase.metrics}</span>
                  </div>
                </div>
              </Card>
            ))}
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
              Everything you need to know about integrating the TAN Verification API.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                q: "What is the TAN Verification API?",
                a: "The TAN Verification API allows enterprises to validate 10-character Tax Deduction Account Numbers (TAN) in real time, retrieving deductee legal entity name, TAN status, entity category, Assessing Officer (AO) code jurisdiction, and registered office address directly from Income Tax Department NSDL registries."
              },
              {
                q: "Why is TAN verification required for vendor onboarding?",
                a: "Verifying vendor TAN numbers ensures accurate Tax Deduction at Source (TDS) calculation, prevents incorrect TAN penalties on Form 26Q returns, and enables smooth Form 16A certificate issuance."
              },
              {
                q: "What details are extracted in the AO code jurisdiction?",
                a: "The API extracts AO code, AO type, range code, area code, AO number, and jurisdictional Income Tax Commissioner charge."
              },
              {
                q: "What is the response latency and SLA?",
                a: "DigitalRakshak guarantees sub-300ms API response latency with 99.99% uptime SLA backed by enterprise redundant infrastructure."
              },
              {
                q: "What parameters are returned in the TAN API output?",
                a: "The response includes deductee legal entity name, 10-character TAN number, active status, category (Company/Individual/Firm), linked PAN number, allotment date, AO code, range code, and registered office address."
              },
              {
                q: "How do I integrate the TAN Verification API?",
                a: "Register on DigitalRakshak, obtain your production/sandbox API keys, and connect our clean REST API endpoints into your procurement or ERP software within minutes."
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
            Ready to Automate TAN Verification & Vendor Tax Audit?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Get instant API sandbox keys and start verifying TAN numbers in sub-seconds.
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
