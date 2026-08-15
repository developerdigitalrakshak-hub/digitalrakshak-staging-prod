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
  MapPin,
  Clock,
  CreditCard,
  Building2,
  CheckCircle2,
  PhoneCall,
  Check,
  Building,
  DollarSign
} from 'lucide-react'

export default function IFSCCheckPage() {
  const router = useRouter()

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 md:px-12 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-background to-transparent pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, transparent, black)' }}></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-semibold mb-6 shadow-md">
            <Landmark className="w-4 h-4" />
            Automated Bank Branch & IFSC Verification
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight text-balance">
            IFSC Code Verification API
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto leading-relaxed">
            Instantly validate 11-character Indian Financial System Code (IFSC) details, extract bank name, branch, MICR code, branch address, contact number, RTGS/NEFT/IMPS/UPI transfer capability, and RBI status in sub-seconds.
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

          {/* NEW Custom Metrics Section Design */}
          <div className="relative max-w-4xl mx-auto p-2 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 p-[1px] shadow-2xl">
            <div className="bg-background/80 backdrop-blur-xl rounded-[23px] p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { stat: "< 300ms", label: "Response Latency", badge: "Sub-Second", icon: Clock, color: "from-blue-500 to-cyan-500" },
                { stat: "100%", label: "RBI Master Sync", badge: "Live Sync", icon: Database, color: "from-green-500 to-emerald-500" },
                { stat: "99.99%", label: "Uptime SLA", badge: "Bank-Grade", icon: ShieldCheck, color: "from-purple-500 to-indigo-500" },
                { stat: "150,000+", label: "Branches Covered", badge: "PAN-India", icon: Building2, color: "from-amber-500 to-rose-500" },
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
              Bank Branch Routing & Payout Intelligence
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground leading-tight">
              Why Real-Time IFSC Verification is Vital
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              In digital payments, vendor payouts, payroll processing, and loan disbursals, an invalid or misrouted IFSC code causes failed transactions, bank bounce fees, and delayed settlements.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              DigitalRakshak&apos;s IFSC Verification API cross-checks 11-character IFSC codes directly against the updated Reserve Bank of India (RBI) bank directory, validating active status, branch location, MICR code, and supported transfer modes (IMPS, NEFT, RTGS, UPI).
            </p>

            <ul className="space-y-4 mb-6">
              {[
                "Prevent Payout Bounces: Eliminate failed transactions by validating IFSC code active status beforehand.",
                "Verify Transfer Capabilities: Check whether a branch supports instant IMPS, RTGS, NEFT, or UPI.",
                "Branch Address & MICR Data: Instantly extract full branch address, district, state, and MICR code.",
                "Direct RBI Directory Sync: Query updated Reserve Bank of India master bank branch lists."
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
                title: "Prevent Payout Bounces",
                desc: "Validate IFSC code format and active status before triggering IMPS, NEFT, or vendor payouts.",
                icon: AlertTriangle,
                color: "text-red-500",
                bg: "bg-red-500/10",
                border: "border-red-500/20"
              },
              {
                title: "Payment Mode Audit",
                desc: "Check real-time branch capability for NEFT, IMPS, RTGS, and UPI transfer modes.",
                icon: CreditCard,
                color: "text-blue-500",
                bg: "bg-blue-500/10",
                border: "border-blue-500/20"
              },
              {
                title: "Branch & MICR Details",
                desc: "Instantly retrieve branch name, city, district, state, address, and MICR code.",
                icon: MapPin,
                color: "text-green-500",
                bg: "bg-green-500/10",
                border: "border-green-500/20"
              },
              {
                title: "Sub-Second Response",
                desc: "Query 150,000+ RBI bank branches in <300ms for instant checkout & payout validation.",
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

      {/* NEW Custom Data Returned Grid Layout */}
      <section className="px-6 py-20 md:px-12 bg-gradient-to-b from-blue-500/5 via-background to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-3 text-purple-600 border-purple-600/30 bg-purple-500/10 px-3 py-1">
              Authoritative Data Payload Browser
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Comprehensive IFSC Data Output
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our API returns complete bank branch identifiers and instant transfer capability flags.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Column 1: Bank & Branch Identifiers */}
            <Card className="p-8 border border-blue-500/20 shadow-xl bg-background/80 backdrop-blur-md rounded-3xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/60">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Bank & Branch Identifiers</h3>
                  <p className="text-sm text-muted-foreground">Official RBI registered branch metadata</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Bank Legal Name", detail: "State Bank of India / HDFC / ICICI", code: "bank_name" },
                  { label: "11-Character IFSC Code", detail: "SBIN0001234 (Format validated)", code: "ifsc" },
                  { label: "Branch Name & City", detail: "Connaught Place, New Delhi", code: "branch" },
                  { label: "Complete Registered Address", detail: "Plot 12, Main Ring Road, ND-110001", code: "address" },
                  { label: "9-Digit MICR Code", detail: "110002001 (Cheque Clearing)", code: "micr" },
                  { label: "RBI Branch ID & District", detail: "Delhi Central District RBO", code: "rbi_code" },
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

            {/* Column 2: Instant Payment Modes & Transfer Capabilities */}
            <Card className="p-8 border border-purple-500/20 shadow-xl bg-background/80 backdrop-blur-md rounded-3xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/60">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-600">
                  <CreditCard className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Payment Modes & Transfer Status</h3>
                  <p className="text-sm text-muted-foreground">Supported transaction channels</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  { mode: "NEFT Enabled", desc: "National Electronic Funds Transfer", active: true },
                  { mode: "IMPS Enabled", desc: "Immediate Payment Service (24x7)", active: true },
                  { mode: "RTGS Enabled", desc: "Real Time Gross Settlement", active: true },
                  { mode: "UPI Supported", desc: "Unified Payments Interface", active: true },
                ].map((channel, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-green-500/5 border border-green-500/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-foreground text-sm">{channel.mode}</span>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-green-600 bg-green-500/10 px-2 py-0.5 rounded-full">
                        <Check className="w-3 h-3" /> Active
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">{channel.desc}</p>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <PhoneCall className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="text-sm font-bold text-foreground">Branch Contact Number</div>
                    <div className="text-xs text-muted-foreground">Direct bank branch helpdesk phone</div>
                  </div>
                </div>
                <code className="text-xs font-mono font-bold text-blue-600 bg-background px-2.5 py-1 rounded-lg">
                  phone_number
                </code>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-6 py-24 md:px-12 bg-blue-500/10 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">How IFSC Verification Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Four simple, automated steps to verify any Indian bank IFSC code in sub-seconds.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Input 11-Digit IFSC",
                desc: "Pass the 11-character IFSC code (e.g. SBIN0001234) via REST API or dashboard.",
                icon: FileText
              },
              {
                step: "02",
                title: "Query RBI Directory",
                desc: "Our high-speed gateway queries official Reserve Bank of India master registries.",
                icon: Database
              },
              {
                step: "03",
                title: "Audit Payment Modes",
                desc: "System audits branch location, MICR code, and NEFT/IMPS/RTGS/UPI readiness.",
                icon: Search
              },
              {
                step: "04",
                title: "Receive JSON Output",
                desc: "Get clean, structured JSON payload in <300ms to proceed with instant payout validation.",
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

      {/* NEW Custom Enterprise Use Cases Layout */}
      <section className="px-6 py-20 md:px-12 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-3 text-green-600 border-green-600/30 bg-green-500/10 px-3 py-1">
              Enterprise Workflows
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Built for High-Scale Financial Workflows
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Empowering fintechs, payroll platforms, e-commerce marketplaces, and NBFC lenders.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Fintech & Instant Payout Platforms",
                desc: "Pre-validate vendor and merchant bank IFSC details before triggering automated IMPS or NEFT payouts to eliminate payment bounces and gateway retry costs.",
                icon: CreditCard,
                metrics: "Zero Payout Bounces",
                tag: "Payout Automation",
                points: ["Vendor bank account pre-validation", "Instant IMPS readiness check", "Reduced payment retry costs"]
              },
              {
                title: "Payroll & HR Management Systems",
                desc: "Validate employee salary account IFSC codes during onboarding to guarantee smooth monthly salary disbursements without transaction failures.",
                icon: Users,
                metrics: "100% On-Time Salary",
                tag: "Payroll Intelligence",
                points: ["Employee bank account onboarding", "MICR & IFSC cross-check", "Disbursement success audit"]
              },
              {
                title: "E-Commerce & Merchant Onboarding",
                desc: "Verify seller bank account details and branch locations for seller payout registrations, supplier invoices, and instant customer refund processing.",
                icon: Briefcase,
                metrics: "Instant Merchant Settlement",
                tag: "Marketplace Payouts",
                points: ["Seller bank account verification", "Instant customer refunds", "Branch address confirmation"]
              },
              {
                title: "Loan & NBFC Disbursals",
                desc: "Verify borrower bank branch details and high-value RTGS/NEFT transfer support for instant loan disbursals and direct-to-bank credit transfers.",
                icon: Landmark,
                metrics: "Sub-Second Disbursal",
                tag: "Credit Underwriting",
                points: ["Borrower bank branch verification", "RTGS high-value disbursal check", "Zero loan transfer failure"]
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
              Everything you need to know about integrating the IFSC Code Verification API.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                q: "What is the IFSC Code Verification API?",
                a: "The IFSC Code Verification API allows enterprises and platforms to validate 11-character Indian Financial System Codes (IFSC) in real time, retrieving official bank name, branch location, MICR code, registered address, and transfer mode capabilities (NEFT/IMPS/RTGS/UPI) directly from updated RBI master lists."
              },
              {
                q: "How does IFSC verification prevent bank payout bounces?",
                a: "By validating the IFSC code format, branch active status, and supported payment transfer modes before initiating payouts, our API ensures transactions are sent only to valid, active bank branches."
              },
              {
                q: "Are all Indian bank branches covered?",
                a: "Yes! Our API database covers over 150,000+ public, private, regional rural (RRB), and cooperative bank branches across India."
              },
              {
                q: "What is the response latency and SLA?",
                a: "DigitalRakshak guarantees sub-300ms API response latency with 99.99% uptime SLA backed by enterprise redundant infrastructure."
              },
              {
                q: "What parameters are returned in the IFSC API output?",
                a: "The response includes bank name, 11-character IFSC code, branch name, complete address, city, district, state, MICR code, RBI branch code, NEFT/IMPS/RTGS/UPI status, and branch phone contact."
              },
              {
                q: "How do I integrate the IFSC API?",
                a: "Register on DigitalRakshak, obtain your production/sandbox API keys, and connect our clean REST API endpoints into your payout platform within minutes."
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
            Ready to Automate IFSC Verification & Zero-Bounce Payouts?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Get instant API sandbox keys and start verifying bank IFSC codes in sub-seconds.
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
