'use client'

import { Card } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useRouter } from 'next/navigation'
import {
  FileText,
  ShieldCheck,
  CheckCircle,
  Zap,
  Search,
  ArrowRight,
  AlertTriangle,
  Database,
  BarChart3,
  Globe,
  Briefcase,
  Users,
  Landmark,
  Clock,
  CreditCard,
  Building2,
  CheckCircle2,
  Check,
  DollarSign,
  TrendingUp,
  Scale,
  Building
} from 'lucide-react'

export default function ITRVerificationPage() {
  const router = useRouter()

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 md:px-12 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-background to-transparent pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, transparent, black)' }}></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-semibold mb-6 shadow-md">
            <FileText className="w-4 h-4" />
            Automated Income & Tax Return Verification
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight text-balance">
            Income Tax Return (ITR) Verification API
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto leading-relaxed">
            Instantly verify ITR filings, Gross Total Income, taxable income, filing status, acknowledgment numbers, tax paid history, and PAN-linked financial compliance via official ITD portals.
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
                { stat: "PAN-India", label: "Tax Registry", badge: "All AY Filings", icon: Landmark, color: "from-amber-500 to-rose-500" },
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
              Financial Risk & Income Verification
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground leading-tight">
              Why ITR Verification is Vital for Credit & Underwriting
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              In loan underwriting, wealth management, executive hiring, and high-value transactions, confirming actual reported income and tax compliance is critical to mitigating credit default and financial fraud.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              DigitalRakshak&apos;s Income Tax Return (ITR) Verification API connects directly to Income Tax Department (ITD) e-filing portals in real time, validating ITR acknowledgment numbers, Assessment Years (AY), Gross Total Income, and e-Verification status.
            </p>

            <ul className="space-y-4 mb-6">
              {[
                "Verify Reported Gross & Taxable Income: Confirm actual annual gross income and taxable income reported to ITD.",
                "Detect Fraudulent ITR Acknowledgments: Expose fake ITR-V acknowledgment receipts and forged income proofs.",
                "Track Assessment Year (AY) History: Check filing dates, assessment years (AY 2024-25, 2023-24), and return status.",
                "Direct Income Tax Department Sync: Real-time query to official ITD e-filing portal registries."
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
                title: "Expose Fake ITR Receipts",
                desc: "Validate ITR-V acknowledgment numbers to detect manipulated income certificates.",
                icon: AlertTriangle,
                color: "text-red-500",
                bg: "bg-red-500/10",
                border: "border-red-500/20"
              },
              {
                title: "Verify Gross Income",
                desc: "Check actual reported Gross Total Income and Net Taxable Income directly from tax records.",
                icon: TrendingUp,
                color: "text-blue-500",
                bg: "bg-blue-500/10",
                border: "border-blue-500/20"
              },
              {
                title: "Assessment Year Audit",
                desc: "Audit multiple Assessment Years (AY) filing history, filing section, and e-Verification status.",
                icon: FileText,
                color: "text-green-500",
                bg: "bg-green-500/10",
                border: "border-green-500/20"
              },
              {
                title: "Sub-Second Response",
                desc: "Retrieve verified tax return details in <300ms for instant credit underwriting & BGV.",
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
              Comprehensive ITR Output Parameters
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our API returns verified taxpayer identifiers and complete tax return financial parameters.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Column 1: Taxpayer & Filing Identifiers */}
            <Card className="p-8 border border-blue-500/20 shadow-xl bg-background/80 backdrop-blur-md rounded-3xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/60">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Taxpayer & Filing Identifiers</h3>
                  <p className="text-sm text-muted-foreground">Official ITD filing metadata</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Taxpayer Full Name", detail: "Official name linked with PAN", code: "taxpayer_name" },
                  { label: "PAN Number", detail: "10-character Permanent Account Number", code: "pan_number" },
                  { label: "ITR Form Type", detail: "ITR-1, ITR-2, ITR-3, ITR-4 (Sugam)", code: "itr_form_type" },
                  { label: "Acknowledgment Number", detail: "15-digit ITR-V Acknowledgment ID", code: "ack_number" },
                  { label: "Assessment & Financial Year", detail: "AY 2024-25 / FY 2023-24", code: "assessment_year" },
                  { label: "Filing Date & e-Verification", detail: "Return processed & e-Verified status", code: "filing_status" },
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

            {/* Column 2: Financial & Tax Parameters */}
            <Card className="p-8 border border-purple-500/20 shadow-xl bg-background/80 backdrop-blur-md rounded-3xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/60">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-600">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Financial & Tax Parameters</h3>
                  <p className="text-sm text-muted-foreground">Reported income & tax details</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Gross Total Income", detail: "Total annual gross income reported", code: "gross_income" },
                  { label: "Total Deductions (Sec 80)", detail: "Investments & deductions under Chapter VI-A", code: "total_deductions" },
                  { label: "Net Taxable Income", detail: "Final taxable income post deductions", code: "taxable_income" },
                  { label: "Total Tax Payable & Paid", detail: "Self-assessment, Advance Tax & TDS paid", code: "tax_paid" },
                  { label: "Tax Refund / Due Status", detail: "Verified refund processed or demand due", code: "refund_status" },
                  { label: "Filing Section Category", detail: "Section 139(1) Original / 139(4) Belated", code: "filing_section" },
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">How ITR Verification Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Four simple, automated steps to verify any Indian Income Tax Return in sub-seconds.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Input PAN / Ack No.",
                desc: "Pass the PAN number or 15-digit ITR Acknowledgment Number via REST API.",
                icon: FileText
              },
              {
                step: "02",
                title: "Query ITD Portal",
                desc: "Our gateway queries official Income Tax Department e-filing portal databases.",
                icon: Database
              },
              {
                step: "03",
                title: "Income & Return Audit",
                desc: "System audits Gross Total Income, taxable income, and e-Verification status.",
                icon: Search
              },
              {
                step: "04",
                title: "Receive JSON Output",
                desc: "Get clean, structured JSON payload in <300ms to complete credit underwriting.",
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
              Built for Credit, Wealth & HR Workflows
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Empowering banks, NBFC lenders, wealth management platforms, and corporate HR teams.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Banks & NBFC Credit Underwriting",
                desc: "Automate borrower reported income verification for personal loans, home loans, and MSME business credit underwriting to prevent loan default risks.",
                icon: Landmark,
                metrics: "Zero Fake Income Fraud",
                tag: "Credit Underwriting",
                points: ["Borrower gross income validation", "ITR-V acknowledgment check", "Multi-year AY income audit"]
              },
              {
                title: "Fintech & Wealth Management",
                desc: "Verify accredited investor financial status, annual income tier, and tax compliance during digital onboarding for high-ticket investment products.",
                icon: TrendingUp,
                metrics: "100% Tax Compliant KYC",
                tag: "Investor Onboarding",
                points: ["Accredited investor verification", "Annual income tier audit", "Tax compliance check"]
              },
              {
                title: "HR & Executive Background Checks (BGV)",
                desc: "Verify previous reported compensation and income history for senior executive hiring to detect resume inflation and fake salary certificates.",
                icon: Users,
                metrics: "Authentic Salary Audit",
                tag: "Executive BGV",
                points: ["Executive salary cross-check", "Fake compensation detection", "Form 16 & ITR alignment"]
              },
              {
                title: "Real Estate & High-Value Transactions",
                desc: "Verify buyer income capability and tax compliance for high-value real estate purchases, commercial leasing, and luxury asset sales.",
                icon: Building,
                metrics: "Sub-Second Income Proof",
                tag: "High-Ticket Sales",
                points: ["Buyer income capability check", "AML financial compliance", "Tax return authenticity"]
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
              Everything you need to know about integrating the ITR Verification API.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                q: "What is the Income Tax Return (ITR) Verification API?",
                a: "The ITR Verification API allows financial institutions and platforms to validate Income Tax Return filings in real time, retrieving Gross Total Income, taxable income, acknowledgment numbers, assessment years, and e-Verification status directly from ITD e-filing portals."
              },
              {
                q: "How does ITR verification prevent loan default fraud?",
                a: "By cross-checking reported income directly with official Income Tax Department registries, our API exposes fake ITR-V acknowledgment receipts and inflated salary proofs before loan approval."
              },
              {
                q: "Can multiple Assessment Years (AY) be verified?",
                a: "Yes! Our API supports verifying filing history across multiple Assessment Years (e.g. AY 2024-25, AY 2023-24, AY 2022-23)."
              },
              {
                q: "What is the response latency and SLA?",
                a: "DigitalRakshak guarantees sub-300ms API response latency with 99.99% uptime SLA backed by enterprise redundant infrastructure."
              },
              {
                q: "What parameters are returned in the ITR API output?",
                a: "The response includes taxpayer legal name, PAN number, ITR form type, acknowledgment number, assessment year, filing date, gross total income, total deductions (Sec 80), net taxable income, tax paid, and e-Verification status."
              },
              {
                q: "How do I integrate the ITR Verification API?",
                a: "Register on DigitalRakshak, obtain your production/sandbox API keys, and connect our clean REST API endpoints into your credit underwriting application within minutes."
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
            Ready to Automate ITR Verification & Credit Underwriting?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Get instant API sandbox keys and start verifying Income Tax Returns in sub-seconds.
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
