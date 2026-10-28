'use client'

import { Card } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useRouter } from 'next/navigation'
import {
  Landmark,
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
  Clock,
  CheckCircle2,
  Check,
  TrendingUp,
  CreditCard,
  Building,
  RefreshCw,
  SlidersHorizontal
} from 'lucide-react'

export default function HybridBankAccountVerificationPage() {
  const router = useRouter()

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 md:px-12 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-background to-transparent pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, transparent, black)' }}></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-semibold mb-6 shadow-md">
            <Landmark className="w-4 h-4" />
            Intelligent Multi-Mode Bank Account Verification
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight text-balance">
            Hybrid Bank Account Verification API
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto leading-relaxed">
            Combine Penny Drop, Penny-Less, and instant UPI failover verification into a single intelligent API engine for 100% verification success rate and zero payout bounces.
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
              Multi-Mode Verification & Zero Payout Bounces
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground leading-tight">
              Why Hybrid Bank Account Verification is Essential
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Traditional ₹1 Penny Drop verification can fail when destination bank servers experience downtime or slow IMPS processing times. Relying on a single verification method leads to failed payouts, onboarding delays, and user drop-off.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              DigitalRakshak&apos;s Hybrid Bank Account Verification API automatically routes queries across Penny Drop, Penny-Less, and UPI failover modes in real time, ensuring a 100% verification success rate and instant beneficiary name matching.
            </p>

            <ul className="space-y-4 mb-6">
              {[
                "Multi-Mode Verification Failover: Automatically switches between Penny Drop, Penny-Less, and UPI modes during bank outages.",
                "Beneficiary Name Audit: Extract and match official account holder legal name directly from NPCI & bank networks.",
                "Zero Payout Failure Rate: Eliminate failed transfers and bank account credit bounces.",
                "Direct NPCI & Bank Network Sync: Real-time query to 150,000+ bank branches across India."
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
                title: "Smart Multi-Mode Failover",
                desc: "Intelligent fallback engine routes across Penny Drop & Penny-Less modes automatically.",
                icon: RefreshCw,
                color: "text-blue-500",
                bg: "bg-blue-500/10",
                border: "border-blue-500/20"
              },
              {
                title: "Beneficiary Name Match",
                desc: "Fuzzy name matching algorithms verify account legal title against onboarding records.",
                icon: ShieldCheck,
                color: "text-green-500",
                bg: "bg-green-500/10",
                border: "border-green-500/20"
              },
              {
                title: "Zero Payout Bounces",
                desc: "Prevent credit bounce fees and failed transaction charges before disbursing funds.",
                icon: CreditCard,
                color: "text-purple-500",
                bg: "bg-purple-500/10",
                border: "border-purple-500/20"
              },
              {
                title: "Sub-Second Response",
                desc: "Retrieve verified bank account details in <300ms for instant onboarding & payouts.",
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
              Comprehensive Hybrid Bank Output Parameters
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our API returns verified beneficiary account identifiers and hybrid failover engine metrics.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Column 1: Account & Beneficiary Identifiers */}
            <Card className="p-8 border border-blue-500/20 shadow-xl bg-background/80 backdrop-blur-md rounded-3xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/60">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600">
                  <Landmark className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Account & Beneficiary Identifiers</h3>
                  <p className="text-sm text-muted-foreground">Verified bank account metadata</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Beneficiary Legal Name", detail: "Official account holder name returned by bank", code: "beneficiary_name" },
                  { label: "Account Number", detail: "Bank account number verified", code: "account_number" },
                  { label: "11-Character IFSC Code", detail: "Bank branch IFSC identifier", code: "ifsc_code" },
                  { label: "Account Active Status", detail: "Real-time account status: Active", code: "account_status" },
                  { label: "Bank Name & Branch", detail: "Destination bank legal title & branch location", code: "bank_branch" },
                  { label: "Account Type", detail: "Savings / Current / NRE / NRO Account", code: "account_type" },
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

            {/* Column 2: Hybrid Engine & Failover Parameters */}
            <Card className="p-8 border border-purple-500/20 shadow-xl bg-background/80 backdrop-blur-md rounded-3xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/60">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-600">
                  <SlidersHorizontal className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Hybrid Engine & Failover Status</h3>
                  <p className="text-sm text-muted-foreground">Routing mode & match metrics</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Verification Mode Used", detail: "Penny Drop / Penny-Less / UPI Failover", code: "verification_mode" },
                  { label: "Name Match Score", detail: "Fuzzy match score percentage (0-100%)", code: "name_match_score" },
                  { label: "UPI VPA Linkage", detail: "Virtual Payment Address linked with account", code: "upi_vpa" },
                  { label: "Transfer Modes Supported", detail: "IMPS, NEFT, RTGS, UPI active flags", code: "transfer_modes" },
                  { label: "NPCI Reference Number", detail: "12-digit transaction reference ID", code: "rrn_ref" },
                  { label: "Failover Trigger Flag", detail: "Flag indicating fallback mode execution", code: "failover_active" },
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">How Hybrid Verification Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Four simple, automated steps to verify any Indian bank account with 100% uptime reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Input Account & IFSC",
                desc: "Pass the bank account number and 11-character IFSC code via REST API.",
                icon: FileText
              },
              {
                step: "02",
                title: "Smart Hybrid Routing",
                desc: "API automatically selects optimal verification mode (Penny Drop / Penny-Less).",
                icon: RefreshCw
              },
              {
                step: "03",
                title: "Beneficiary Audit",
                desc: "System audits beneficiary legal name, account active status, and bank branch.",
                icon: Search
              },
              {
                step: "04",
                title: "Receive JSON Output",
                desc: "Get clean, structured JSON payload in <300ms to proceed with instant payouts.",
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
              Built for Payouts, Payroll & Lending
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Empowering fintech platforms, HR payroll operations, e-commerce, and NBFC loan disbursals.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Fintech & Instant Payout Platforms",
                desc: "Validate customer and vendor bank accounts before initiating instant money transfers, eliminating failed payouts and transaction reversal fees.",
                icon: CreditCard,
                metrics: "100% Payout Success",
                tag: "Instant Payouts",
                points: ["Vendor bank account validation", "Beneficiary name match", "Multi-mode failover execution"]
              },
              {
                title: "HR & Payroll Operations",
                desc: "Verify new employee bank account details prior to monthly salary dispatches to ensure seamless salary credits and zero bounced paychecks.",
                icon: Users,
                metrics: "Zero Salary Bounces",
                tag: "Payroll Automation",
                points: ["Employee bank account audit", "Salary credit pre-validation", "Name alignment check"]
              },
              {
                title: "E-Commerce Marketplaces & Refunds",
                desc: "Validate buyer bank accounts for customer refund processing and seller payout disbursements with zero transaction delays.",
                icon: Briefcase,
                metrics: "Instant Refund Validation",
                tag: "E-Commerce Refunds",
                points: ["Customer refund account audit", "Seller payout validation", "Zero payout failure"]
              },
              {
                title: "Loan & NBFC Disbursals",
                desc: "Confirm borrower bank account ownership and active status before disbursing loan amounts to prevent fraud and account mismatch.",
                icon: Landmark,
                metrics: "Sub-Second Loan Disbursal",
                tag: "NBFC Lending",
                points: ["Borrower bank account verification", "Active status confirmation", "Instant loan credit"]
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
              Everything you need to know about integrating the Hybrid Bank Account Verification API.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                q: "What is the Hybrid Bank Account Verification API?",
                a: "The Hybrid Bank Account Verification API combines Penny Drop, Penny-Less, and UPI failover verification into a single intelligent routing engine, guaranteeing 100% verification uptime even during bank server outages."
              },
              {
                q: "How does the smart failover mechanism work?",
                a: "If destination bank IMPS servers experience downtime or high response latency during a Penny Drop request, our API automatically switches to Penny-Less or UPI verification modes to complete the audit instantly."
              },
              {
                q: "What beneficiary details are returned?",
                a: "The API returns beneficiary legal name, account active status, 11-character IFSC code, bank branch location, account type, and fuzzy name match confidence score."
              },
              {
                q: "What is the response latency and SLA?",
                a: "DigitalRakshak guarantees sub-300ms API response latency with 99.99% uptime SLA backed by enterprise redundant infrastructure."
              },
              {
                q: "What parameters are returned in the Hybrid Bank API output?",
                a: "The response includes beneficiary legal name, account number, IFSC code, verification mode executed (Penny Drop / Penny-Less), account status (Active), name match score, and NPCI reference number."
              },
              {
                q: "How do I integrate the Hybrid Bank Account Verification API?",
                a: "Register on DigitalRakshak, obtain your production/sandbox API keys, and connect our clean REST API endpoints into your payout or onboarding application within minutes."
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
            Ready to Automate Hybrid Bank Account Verification?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Get instant API sandbox keys and start verifying bank accounts with 100% failover reliability in sub-seconds.
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
