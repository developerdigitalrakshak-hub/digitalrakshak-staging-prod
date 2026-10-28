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
  CheckCircle2,
  Check,
  TrendingUp,
  CreditCard,
  Building,
  Download,
  FileSpreadsheet
} from 'lucide-react'

export default function ITRFetchPage() {
  const router = useRouter()

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 md:px-12 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-background to-transparent pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, transparent, black)' }}></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-semibold mb-6 shadow-md">
            <FileText className="w-4 h-4" />
            Automated Tax Return Data Retrieval Engine
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight text-balance">
            ITR Fetch API
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto leading-relaxed">
            Instantly retrieve full Income Tax Return financial data, gross income breakdown, taxable income, deductions, tax paid history, and Form 26AS/AIS summaries directly from ITD e-filing portals.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
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
        </div>
      </section>

      {/* Overview & Benefits */}
      <section className="px-6 py-20 md:px-12 bg-background">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="outline" className="mb-4 text-blue-600 border-blue-600/30 bg-blue-500/10 px-3 py-1">
              Financial Data Retrieval & Income Profiling
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground leading-tight">
              Why Automated ITR Fetching is Essential
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Unlike simple ITR verification (which only validates filing status), ITR Fetch retrieves full financial schedules, income heads (salary, house property, business, capital gains), Chapter VI-A deductions, and Form 26AS/AIS tax credits.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              DigitalRakshak&apos;s ITR Fetch API connects directly to Income Tax Department (ITD) e-filing portals, delivering structured XML/JSON tax return payloads for automated credit underwriting, wealth management, and executive background screening.
            </p>

            <ul className="space-y-4 mb-6">
              {[
                "Complete Income Computation Extraction: Retrieve gross total income, net taxable income, and head-wise income breakdown.",
                "Form 26AS & AIS Summary Retrieval: Access tax deduction credits, advance tax payments, and high-value transaction summaries.",
                "XML / JSON Tax Return Payload: Receive fully parsed, structured tax return data ready for automated underwriting rules.",
                "Direct ITD Portal Sync: Real-time query to official Income Tax Department e-filing databases."
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
                title: "Full Financial Schedules",
                desc: "Extract head-wise income: salary, business profits, capital gains, and house property.",
                icon: FileSpreadsheet,
                color: "text-blue-500",
                bg: "bg-blue-500/10",
                border: "border-blue-500/20"
              },
              {
                title: "Form 26AS & AIS Summary",
                desc: "Retrieve verified TDS credit summaries, advance tax paid, and TCS records.",
                icon: Download,
                color: "text-green-500",
                bg: "bg-green-500/10",
                border: "border-green-500/20"
              },
              {
                title: "Deduction Audit (Sec 80)",
                desc: "Audit Chapter VI-A investments (80C, 80D, 80G) reported in tax returns.",
                icon: TrendingUp,
                color: "text-purple-500",
                bg: "bg-purple-500/10",
                border: "border-purple-500/20"
              },
              {
                title: "Sub-Second Data Fetch",
                desc: "Retrieve complete tax return payloads in <300ms for instant underwriting.",
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
              Comprehensive ITR Fetch Parameters
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our API returns verified filing metadata and complete tax return financial parameters.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Column 1: Taxpayer & Filing Metadata */}
            <Card className="p-8 border border-blue-500/20 shadow-xl bg-background/80 backdrop-blur-md rounded-3xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/60">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Taxpayer & Filing Metadata</h3>
                  <p className="text-sm text-muted-foreground">Official ITD return identifiers</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Taxpayer Legal Name", detail: "Full legal name registered with ITD", code: "taxpayer_name" },
                  { label: "PAN Number", detail: "10-character Permanent Account Number", code: "pan_number" },
                  { label: "Assessment & Financial Year", detail: "AY 2024-25 / FY 2023-24", code: "assessment_year" },
                  { label: "ITR Form Category", detail: "ITR-1, ITR-2, ITR-3, or ITR-4 (Sugam)", code: "itr_form_type" },
                  { label: "15-Digit Acknowledgment ID", detail: "Official ITR-V Acknowledgment Number", code: "ack_number" },
                  { label: "Filing Section & Status", detail: "Section 139(1) / Processed & e-Verified", code: "filing_status" },
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

            {/* Column 2: Retrieved Income & Tax Financial Data */}
            <Card className="p-8 border border-purple-500/20 shadow-xl bg-background/80 backdrop-blur-md rounded-3xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/60">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-600">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Income & Tax Financial Data</h3>
                  <p className="text-sm text-muted-foreground">Extracted computation schedules</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Gross Total Income", detail: "Total annual gross income extracted", code: "gross_total_income" },
                  { label: "Head-Wise Income Breakdown", detail: "Salary, Business, House Property, Capital Gains", code: "income_heads" },
                  { label: "Chapter VI-A Deductions", detail: "Total deductions under Sec 80C, 80D, 80G", code: "deductions_sec80" },
                  { label: "Net Taxable Income", detail: "Final taxable income post deductions", code: "net_taxable_income" },
                  { label: "Total Tax Paid & TDS Credit", detail: "TDS, TCS, Advance Tax & Self-Assessment Tax", code: "tax_paid_tds" },
                  { label: "Refund / Demand Status", detail: "Verified refund processed or tax demand due", code: "refund_status" },
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

      {/* Custom Enterprise Use Cases Layout */}
      <section className="px-6 py-20 md:px-12 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-3 text-green-600 border-green-600/30 bg-green-500/10 px-3 py-1">
              Enterprise Workflows
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Built for Underwriting, Wealth & BGV
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Empowering banks, NBFC lenders, wealth advisory platforms, and corporate HR teams.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Banks & NBFC Credit Underwriting",
                desc: "Automate deep income analysis and capacity-to-pay calculations for personal, home, and MSME business loan underwriting using structured ITR payloads.",
                icon: Landmark,
                metrics: "Automated Income Audit",
                tag: "Credit Underwriting",
                points: ["Head-wise income analysis", "Multi-year AY comparison", "Deductions & tax credit check"]
              },
              {
                title: "Wealth Management & Investment Advisory",
                desc: "Retrieve verified investor income brackets and tax computation schedules to offer personalized portfolio management and accredited investor classification.",
                icon: TrendingUp,
                metrics: "100% Tax Compliant Investor",
                tag: "Wealth Management",
                points: ["Accredited investor audit", "Annual income tier extraction", "Capital gains income check"]
              },
              {
                title: "High-Value Real Estate & Legal Compliance",
                desc: "Verify buyer income capacity and tax return authenticity for high-ticket property acquisitions and commercial real estate leasing.",
                icon: Building,
                metrics: "Sub-Second Income Proof",
                tag: "High-Ticket Real Estate",
                points: ["Buyer income capability audit", "Tax paid history verification", "AML compliance check"]
              },
              {
                title: "HR & Executive Background Screening (BGV)",
                desc: "Retrieve reported compensation and income tax schedules for executive hiring candidates to cross-check salary certificates and eliminate resume inflation.",
                icon: Users,
                metrics: "Authentic Salary Extraction",
                tag: "Executive BGV",
                points: ["Salary schedule extraction", "Form 26AS & ITR alignment", "Compensation verification"]
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
              Everything you need to know about integrating the ITR Fetch API.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                q: "What is the ITR Fetch API?",
                a: "The ITR Fetch API allows financial platforms, lenders, and enterprises to retrieve complete Income Tax Return financial computation schedules, gross income breakdown, Chapter VI-A deductions, and Form 26AS/AIS tax credit summaries directly from ITD e-filing portals."
              },
              {
                q: "How is ITR Fetch different from ITR Verification?",
                a: "ITR Verification validates whether an ITR filing / acknowledgment is genuine and filed. ITR Fetch extracts the full financial data payload, including head-wise income breakdown, deductions, and tax paid details for deep financial underwriting."
              },
              {
                q: "Can multiple Assessment Years (AY) be fetched?",
                a: "Yes! You can fetch complete tax return financial payloads for multiple Assessment Years (e.g. AY 2024-25, AY 2023-24, AY 2022-23)."
              },
              {
                q: "What is the response latency and SLA?",
                a: "DigitalRakshak guarantees sub-300ms API response latency with 99.99% uptime SLA backed by enterprise redundant infrastructure."
              },
              {
                q: "What parameters are returned in the ITR Fetch output?",
                a: "The response includes taxpayer legal name, PAN, assessment year, ITR form type, gross total income, head-wise income breakdown (salary/business/capital gains), Chapter VI-A deductions, net taxable income, tax paid, TDS credit summary, and refund/demand status."
              },
              {
                q: "How do I integrate the ITR Fetch API?",
                a: "Register on DigitalRakshak, obtain your production/sandbox API keys, and connect our clean REST API endpoints into your credit underwriting or wealth advisory system within minutes."
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
            Ready to Automate Tax Return Data Fetching & Underwriting?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Get instant API sandbox keys and start fetching complete ITR financial payloads in sub-seconds.
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
