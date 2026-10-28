'use client'

import { useState } from 'react'
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
  CreditCard,
  RefreshCw,
  Lock,
  Users
} from 'lucide-react'

export default function BankAccountVerificationPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<'penny' | 'reverse' | 'ifsc'>('penny')
  const [copied, setCopied] = useState(false)

  const samplePayloads = {
    penny: `{
  "status": "success",
  "code": 200,
  "data": {
    "account_number": "918234567890",
    "ifsc": "SBIN0001234",
    "account_status": "Active",
    "beneficiary_name": "RAHUL SHARMA",
    "name_match_score": 98,
    "name_match_result": "EXACT_MATCH",
    "bank_name": "STATE BANK OF INDIA",
    "branch": "CYBER CITY GURUGRAM",
    "city": "GURUGRAM",
    "state": "HARYANA",
    "micr_code": "110002034",
    "supported_modes": ["IMPS", "NEFT", "RTGS", "UPI"],
    "rrn": "422319087612",
    "verified_at": "2026-08-15T10:30:00Z"
  }
}`,
    reverse: `{
  "status": "success",
  "verification_mode": "REVERSE_PENNY_DROP",
  "data": {
    "vpa": "rahulsharma@upi",
    "account_number": "xxxxxx7890",
    "ifsc": "HDFC0000240",
    "beneficiary_name": "RAHUL SHARMA",
    "bank_name": "HDFC BANK",
    "utr": "422319991204",
    "amount_received": 1.00,
    "status": "Verified"
  }
}`,
    ifsc: `{
  "status": "success",
  "ifsc": "HDFC0000240",
  "data": {
    "bank": "HDFC BANK",
    "branch": "MG ROAD CANNAUGHT PLACE",
    "address": "G-3, GROUND FLOOR, HDFC HOUSE, NEW DELHI",
    "city": "NEW DELHI",
    "state": "DELHI",
    "pincode": "110001",
    "contact": "011-41512000",
    "imps_supported": true,
    "neft_supported": true,
    "rtgs_supported": true,
    "upi_supported": true,
    "micr": "110240002"
  }
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
            <Landmark className="w-4 h-4" />
            Enterprise Financial & Payout Verification
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight text-balance">
            Bank Account Verification API
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto leading-relaxed">
            Instantly validate bank account numbers, IFSC codes, beneficiary names, and active bank account status in sub-seconds before processing payouts or merchant onboarding.
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
              { label: "Bank Network", value: "200+ Banks", desc: "All Indian banks supported" },
              { label: "Uptime SLA", value: "99.99%", desc: "Bank-grade infrastructure" },
              { label: "Accuracy", value: "100% Penny Drop", desc: "NPCI & Direct IMPS sync" },
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
              Financial Risk Reduction
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground leading-tight">
              Why Bank Account Verification is Vital for Payouts & KYB
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Executing high-volume payouts, merchant settlements, employee salary credits, or loan disbursements without pre-verifying beneficiary bank account details leads to costly payment bounces, wrong account credits, and fraud risks.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              DigitalRakshak&apos;s Bank Account Verification API executes real-time penny drop transfers across NPCI & IMPS networks, retrieving official beneficiary names directly from destination banks to guarantee 100% account legitimacy.
            </p>

            <ul className="space-y-4 mb-6">
              {[
                "Prevent Payment Failures: Validate account status before triggering IMPS/NEFT payouts.",
                "Eliminate Impersonation Fraud: Ensure beneficiary name matches customer KYC identity.",
                "Fuzzy Name Matching Score: AI-powered algorithms calculate exact or partial match percentage.",
                "Penny Drop & Reverse Penny Drop: Support both direct IMPS and UPI-based verification modes."
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
                title: "Prevent Payment Bounces",
                desc: "Pre-validate bank accounts before releasing high-volume vendor or user payouts.",
                icon: AlertTriangle,
                color: "text-red-500",
                bg: "bg-red-500/10",
                border: "border-red-500/20"
              },
              {
                title: "Eliminate Fraudulent Accounts",
                desc: "Unmask third-party account details and prevent money laundering & fraud.",
                icon: ShieldCheck,
                color: "text-blue-500",
                bg: "bg-blue-500/10",
                border: "border-blue-500/20"
              },
              {
                title: "Instant Name Match",
                desc: "Verify beneficiary name retrieved from NPCI against PAN/Aadhaar identity.",
                icon: Database,
                color: "text-green-500",
                bg: "bg-green-500/10",
                border: "border-green-500/20"
              },
              {
                title: "Sub-Second Latency",
                desc: "Execute penny drop verification in <300ms for seamless in-app user onboarding.",
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

      {/* Verification Modes Section */}
      <section className="px-6 py-20 md:px-12 bg-blue-500/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-3 text-purple-600 border-purple-600/30 bg-purple-500/10 px-3 py-1">
              Flexible Verification Methods
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Penny Drop vs Reverse Penny Drop
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the verification flow that best aligns with your enterprise user experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border border-blue-500/20 bg-background hover:shadow-xl transition-all relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                <CreditCard className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">1. Penny Drop Verification</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The enterprise passes the user&apos;s Account Number and IFSC Code. Our API deposits ₹1 via IMPS into the beneficiary account and instantly returns the official bank account holder name and account active status.
              </p>
              <ul className="space-y-3 text-sm text-foreground font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  Ideal for payout pre-validation & vendor onboarding
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  Zero friction for the end user
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  Instant name match against PAN / Aadhaar records
                </li>
              </ul>
            </Card>

            <Card className="p-8 border border-purple-500/20 bg-background hover:shadow-xl transition-all relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6">
                <RefreshCw className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">2. Reverse Penny Drop (UPI/QR)</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The user pays ₹1 using any UPI App (GPay, PhonePe, Paytm). The incoming transaction payload provides 100% verified bank account details, VPA, and bank account holder name without any manual typing errors.
              </p>
              <ul className="space-y-3 text-sm text-foreground font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-500" />
                  Eliminates typos in account numbers & IFSC codes
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-500" />
                  Zero cost for merchant (₹1 is collected)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-500" />
                  Supports dynamic QR code generation
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Complete Data Payload Capabilities */}
      <section className="px-6 py-20 md:px-12 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-3 text-blue-600 border-blue-600/30 bg-blue-500/10 px-3 py-1">
              Data Enrichment & Intelligence
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Verified Data Output Parameters
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our API returns complete, authoritative bank account parameters directly from destination banks.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Beneficiary Full Name",
                desc: "Official name registered in bank account records.",
                icon: Building2,
                color: "text-blue-500"
              },
              {
                title: "Account Active Status",
                desc: "Active, Frozen, Dormant, or Invalid account indicator.",
                icon: BadgeCheck,
                color: "text-green-500"
              },
              {
                title: "Fuzzy Name Match Score",
                desc: "AI confidence score (0-100%) matching KYC name vs bank name.",
                icon: BarChart3,
                color: "text-purple-500"
              },
              {
                title: "IFSC & Branch Details",
                desc: "Verified branch name, address, city, state, and pincode.",
                icon: Globe,
                color: "text-amber-500"
              },
              {
                title: "Bank Name & MICR",
                desc: "Official bank entity name and 9-digit MICR code.",
                icon: Landmark,
                color: "text-indigo-500"
              },
              {
                title: "Supported Modes",
                desc: "Real-time flags for IMPS, NEFT, RTGS, and UPI support.",
                icon: Zap,
                color: "text-rose-500"
              },
              {
                title: "Transaction RRN",
                desc: "Official Bank Reference Number (RRN) for audit logs.",
                icon: FileText,
                color: "text-teal-500"
              },
              {
                title: "Account Category",
                desc: "Savings, Current, Overdraft, or NRE/NRO account type.",
                icon: Layers,
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
              Clean, RESTful JSON response payload structure designed for instant integration in Node.js, Python, Java, Go, or PHP.
            </p>
          </div>

          <div className="bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden max-w-4xl mx-auto">
            <div className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-xs font-mono text-slate-400 ml-2">POST /api/v2/bank/verify</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('penny')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all \${
                    activeTab === 'penny' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Penny Drop
                </button>
                <button
                  onClick={() => setActiveTab('reverse')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all \${
                    activeTab === 'reverse' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Reverse Penny Drop
                </button>
                <button
                  onClick={() => setActiveTab('ifsc')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all \${
                    activeTab === 'ifsc' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  IFSC Lookup
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">How Bank Verification Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Four simple, automated steps to verify any Indian bank account in sub-seconds.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Submit Account & IFSC",
                desc: "Pass the account number & IFSC code via our REST API or dashboard batch upload.",
                icon: FileText,
                color: "blue"
              },
              {
                step: "02",
                title: "Trigger Penny Drop",
                desc: "Our gateway dispatches a instant micro ₹1 deposit query via direct IMPS bank rails.",
                icon: Database,
                color: "purple"
              },
              {
                step: "03",
                title: "Fetch Account Name",
                desc: "Target bank responds with active account status and official account holder name.",
                icon: Search,
                color: "green"
              },
              {
                step: "04",
                title: "Name Match & Output",
                desc: "Receive structured JSON with fuzzy name match percentage and reference RRN.",
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
              Built for High-Growth Financial Platforms
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Empowering lenders, payroll software, marketplaces, and gaming platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Fintech & Digital Lending",
                desc: "Pre-verify borrower bank account ownership before disbursing personal, business, or BNPL loans to prevent loan fraud.",
                icon: Landmark,
                features: ["Disbursement account match", "Loan fraud prevention", "Instant bank validation"]
              },
              {
                title: "Payroll & HR Excellence",
                desc: "Automate salary bank account verification during employee onboarding to eliminate wrong account credits and failed salary runs.",
                icon: Briefcase,
                features: ["Salary account validation", "Zero payout bounce", "Instant employee onboarding"]
              },
              {
                title: "E-Commerce & Marketplaces",
                desc: "Validate merchant settlement bank accounts and customer refund accounts to ensure compliance and smooth cash flow.",
                icon: ShoppingCart,
                features: ["Merchant payout verification", "Refund routing audit", "Vendor KYB compliance"]
              },
              {
                title: "Gig Economy & Gaming",
                desc: "Instant withdrawal bank account validation for delivery partners, drivers, and online gaming players for instant payouts.",
                icon: Truck,
                features: ["Instant withdrawal verification", "Fraud account prevention", "Automated settlements"]
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
              How DigitalRakshak Bank Account Verification API compares to manual statement checks and legacy scrapers.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border bg-background shadow-lg">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="p-4 font-bold text-foreground">Feature / Parameter</th>
                  <th className="p-4 font-bold text-blue-600 bg-blue-500/10">DigitalRakshak API</th>
                  <th className="p-4 font-bold text-muted-foreground">Manual Bank Statement</th>
                  <th className="p-4 font-bold text-muted-foreground">Legacy Web Scrapers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                {[
                  { feature: "Verification Latency", us: "< 300ms", manual: "12 - 24 Hours", scraper: "5 - 15 Seconds" },
                  { feature: "Bank Network Support", us: "200+ Indian Banks", manual: "Limited Banks", scraper: "Fragile Connections" },
                  { feature: "Name Match Accuracy", us: "Direct Bank NPCI Match", manual: "Human Eye Error", scraper: "Unreliable Parsing" },
                  { feature: "Bulk Processing", us: "Up to 50,000 / min", manual: "Manual PDF Reading", scraper: "Rate-limited" },
                  { feature: "Enterprise SLA Uptime", us: "99.99% Guaranteed", manual: "N/A", scraper: "Frequent Downtime" },
                  { feature: "Security & Compliance", us: "ISO 27001 / AES-256", manual: "Data Leak Risk", scraper: "Unsecured" },
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
              Everything you need to know about integrating the Bank Account Verification API.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                q: "What is Bank Account Verification API?",
                a: "The Bank Account Verification API allows enterprises and platforms to instantly validate bank account numbers, IFSC codes, beneficiary names, and account active status in real-time before initiating payouts or onboarding customers."
              },
              {
                q: "How does Penny Drop verification work?",
                a: "During Penny Drop verification, our API deposits a micro-amount (₹1) into the target bank account via IMPS/NPCI. Destination bank networks return the official registered account holder name and account status."
              },
              {
                q: "What is Reverse Penny Drop verification?",
                a: "Reverse Penny Drop asks the end user to pay ₹1 using any UPI app (GPay, PhonePe, Paytm). The incoming UPI payment payload provides 100% verified bank account details and holder name without manual data entry."
              },
              {
                q: "Which banks are supported?",
                a: "DigitalRakshak supports 200+ major public, private, regional rural, and cooperative banks across India supporting IMPS, NEFT, RTGS, and UPI networks."
              },
              {
                q: "What is the response time and uptime SLA?",
                a: "DigitalRakshak guarantees sub-300ms API response latency with 99.99% uptime SLA backed by bank-grade redundant infrastructure."
              },
              {
                q: "How do I integrate the Bank Account Verification API?",
                a: "Register on DigitalRakshak, obtain your production/sandbox API keys, and follow our clean REST API documentation to start verifying bank accounts within minutes."
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
            Ready to Automate Bank Account Verification & Eliminate Payout Failures?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Get instant API sandbox keys and start verifying bank accounts in sub-seconds.
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
