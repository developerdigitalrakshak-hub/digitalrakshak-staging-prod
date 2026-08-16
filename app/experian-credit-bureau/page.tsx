'use client'

import { Card } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useRouter } from 'next/navigation'
import {
  BarChart3,
  ShieldCheck,
  CheckCircle,
  Zap,
  Search,
  ArrowRight,
  AlertTriangle,
  Database,
  FileText,
  Layers,
  CheckCircle2,
  Check,
  TrendingUp,
  CreditCard,
  Building,
  Landmark,
  ShieldAlert,
  PieChart
} from 'lucide-react'

export default function ExperianCreditBureauPage() {
  const router = useRouter()

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 md:px-12 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-background to-transparent pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, transparent, black)' }}></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-semibold mb-6 shadow-md">
            <BarChart3 className="w-4 h-4" />
            Bureau Credit Score & Risk Intelligence
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight text-balance">
            Experian Credit Bureau API
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto leading-relaxed">
            Instantly pull official Experian credit scores, commercial credit risk ranks, active loan accounts, repayment history, DPD delinquencies, and credit utilization for individuals and commercial entities.
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
              Creditworthiness & Risk Assessment
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground leading-tight">
              Why Experian Credit Bureau Pull is Essential
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Evaluating credit risk requires real-time access to official bureau trade lines, Days Past Due (DPD) payment track records, active credit card balances, and commercial credit ranks (CMR) to prevent bad debt and loan default.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              DigitalRakshak&apos;s Experian Credit Bureau API provides direct, secure access to Experian bureau databases, delivering complete credit reports and risk scores for digital lending, BNPL credit, and commercial B2B credit approval.
            </p>

            <ul className="space-y-4 mb-6">
              {[
                "Experian Credit Score & Rank: Retrieve consumer credit score (300-900) and commercial credit risk ranks.",
                "Active Trade Lines & Loan Breakdown: Access detailed active, closed, secured, and unsecured loan accounts.",
                "DPD Delinquency Tracking: Detect 30/60/90+ DPD overdue flags, write-offs, and willful defaulter records.",
                "Direct Experian Bureau Sync: Bank-grade integration with official Experian credit bureau registries."
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
                title: "Experian Credit Score",
                desc: "Pull official Experian credit score (300-900) and commercial risk classification.",
                icon: BarChart3,
                color: "text-blue-500",
                bg: "bg-blue-500/10",
                border: "border-blue-500/20"
              },
              {
                title: "Trade Line & Loan History",
                desc: "Expose all active loans, credit cards, sanctioned limits, and outstanding balances.",
                icon: CreditCard,
                color: "text-green-500",
                bg: "bg-green-500/10",
                border: "border-green-500/20"
              },
              {
                title: "DPD Delinquency Audit",
                desc: "Spot 30/60/90+ Days Past Due payment delays, write-offs, and suit-filed records.",
                icon: ShieldAlert,
                color: "text-red-500",
                bg: "bg-red-500/10",
                border: "border-red-500/20"
              },
              {
                title: "Sub-Second Response",
                desc: "Retrieve complete Experian credit bureau payloads in <300ms for instant loan approval.",
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
              Authoritative Bureau Output Parameters
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Comprehensive Experian Output Parameters
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our API returns verified borrower identifiers and complete Experian credit report parameters.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Column 1: Borrower & Entity Identifiers */}
            <Card className="p-8 border border-blue-500/20 shadow-xl bg-background/80 backdrop-blur-md rounded-3xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/60">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Borrower & Entity Identifiers</h3>
                  <p className="text-sm text-muted-foreground">Official bureau subject metadata</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Borrower Legal Name", detail: "Full legal name registered with bureau", code: "borrower_name" },
                  { label: "PAN / Business Reg Number", detail: "PAN or Corporate CIN/GSTIN number", code: "pan_cin_number" },
                  { label: "Mobile & Address Match", detail: "Verified contact phone and physical address", code: "contact_address" },
                  { label: "Gender & Date of Birth", detail: "Demographic identification metadata", code: "gender_dob" },
                  { label: "Bureau Inquiry Reference", detail: "Unique bureau inquiry reference ID", code: "inquiry_ref_id" },
                  { label: "Report Generation Timestamp", detail: "Real-time bureau query timestamp", code: "report_timestamp" },
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

            {/* Column 2: Experian Credit Report Parameters */}
            <Card className="p-8 border border-purple-500/20 shadow-xl bg-background/80 backdrop-blur-md rounded-3xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/60">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-600">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Experian Credit Parameters</h3>
                  <p className="text-sm text-muted-foreground">Credit score, trade lines & DPD</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Experian Credit Score", detail: "Consumer score (300-900) or CMR risk rank", code: "experian_score" },
                  { label: "Active Loan Accounts Count", detail: "Total active trade lines & credit accounts", code: "active_accounts" },
                  { label: "Total Outstanding Balance", detail: "Aggregate current loan & credit card balance", code: "total_balance" },
                  { label: "DPD Delinquency History", detail: "30/60/90+ Days Past Due payment history", code: "dpd_history" },
                  { label: "Credit Utilization Ratio", detail: "Percentage of credit card limits utilized", code: "utilization_ratio" },
                  { label: "Overdue & Write-Off Flag", detail: "Overdue amount or NPA/write-off indicator", code: "overdue_flag" },
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

      {/* Enterprise Use Cases, FAQs & CTA Section */}
      <section className="px-6 py-20 md:px-12 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-3 text-green-600 border-green-600/30 bg-green-500/10 px-3 py-1">
              Enterprise Applications
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Built for Lending, Credit Cards & B2B Risk
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Empowering banks, digital fintech lenders, credit card issuers, and commercial B2B platforms.
            </p>
          </div>

          <div className="space-y-6 mb-20">
            {[
              {
                title: "Banks & Digital Lending Platforms",
                desc: "Automate borrower credit scoring and loan underwriting decisions for instant personal, home, auto, and MSME business loan approvals.",
                icon: Landmark,
                metrics: "Instant Credit Underwriting",
                tag: "Digital Lending",
                points: ["Instant Experian score pull", "Active trade line analysis", "DPD delinquency check"]
              },
              {
                title: "BNPL & Credit Card Issuance",
                desc: "Evaluate applicant credit limits and repayment risk in sub-seconds to issue Buy-Now-Pay-Later lines and instant credit cards.",
                icon: CreditCard,
                metrics: "Sub-Second Approval",
                tag: "BNPL & Cards",
                points: ["Credit utilization assessment", "Overdue history check", "Instant credit limit calculation"]
              },
              {
                title: "B2B Commercial Credit & Vendor Risk",
                desc: "Evaluate commercial credit ranks (CMR) and corporate repayment records before offering credit terms or high-value trade credit lines to B2B partners.",
                icon: Building,
                metrics: "Commercial Risk Audit",
                tag: "B2B Trade Credit",
                points: ["Experian CMR rank pull", "Commercial default audit", "Trade credit risk assessment"]
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

          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about integrating the Experian Credit Bureau API.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                {
                  q: "What is the Experian Credit Bureau API?",
                  a: "The Experian Credit Bureau API allows authorized financial institutions and credit providers to pull official Experian credit scores, commercial risk ranks (CMR), active trade lines, repayment track records, and DPD delinquencies in real time."
                },
                {
                  q: "How is Credit Bureau pulling different from bank verification or ITR?",
                  a: "Bank verification validates account ownership & IFSC details, while ITR retrieves tax filings. Experian Credit Bureau API evaluates overall creditworthiness, active loan debt, repayment history, and DPD delinquency across all financial institutions."
                },
                {
                  q: "Are both individual and commercial credit reports supported?",
                  a: "Yes! Our API supports pulling individual consumer credit reports (300-900 score) as well as commercial business credit reports and CMR ranks."
                },
                {
                  q: "What is the response latency and SLA?",
                  a: "DigitalRakshak guarantees sub-300ms API response latency with 99.99% uptime SLA backed by enterprise redundant infrastructure."
                },
                {
                  q: "What parameters are returned in the Experian API output?",
                  a: "The response includes borrower legal name, PAN, Experian credit score / CMR rank, active loan count, outstanding balance, DPD history, credit utilization ratio, and overdue flags."
                },
                {
                  q: "How do I integrate the Experian Credit Bureau API?",
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 md:px-12 bg-gradient-to-br from-blue-600 to-purple-700 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-balance">
            Ready to Automate Experian Credit Score Pull & Credit Underwriting?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Get instant API sandbox keys and start pulling Experian credit reports in sub-seconds.
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
