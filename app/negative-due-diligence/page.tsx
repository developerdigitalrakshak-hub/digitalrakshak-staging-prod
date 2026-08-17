'use client'

import { Card } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useRouter } from 'next/navigation'
import {
  ShieldAlert,
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
  Newspaper,
  UserX,
  Clock,
  CreditCard
} from 'lucide-react'

export default function NegativeDueDiligencePage() {
  const router = useRouter()

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 md:px-12 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-background to-transparent pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, transparent, black)' }}></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-semibold mb-6 shadow-md">
            <ShieldAlert className="w-4 h-4" />
            Automated Negative Risk & Sanction Intelligence
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight text-balance">
            Negative Due Diligence & Media Check API
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto leading-relaxed">
            Instantly screen individuals and businesses against global adverse media, court litigation records, Interpol watchlists, PEP (Politically Exposed Persons) databases, RBI defaulters, and sanction registries in real time.
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
              { label: "Data Source", value: "100% Global Sync", desc: "Interpol, OFAC, UN & e-Courts" },
              { label: "Uptime SLA", value: "99.99%", desc: "Bank-grade infrastructure" },
              { label: "Coverage", value: "200+ Watchlists", desc: "Global sanctions & PEP lists" },
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
              Adverse Media & Regulatory Compliance
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground leading-tight">
              Why Negative Due Diligence is Critical
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              In corporate mergers, executive hiring, high-ticket lending, vendor onboarding, and AML/CFT compliance, unmasking hidden legal disputes, adverse news coverage, regulatory enforcement actions, and international sanctions is essential to protecting your organization.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              DigitalRakshak&apos;s Negative Due Diligence & Media Check API scans global news publications, e-Court records, Interpol red notices, UN/OFAC sanctions, PEP lists, and RBI defaulter registries in real time.
            </p>

            <ul className="space-y-4 mb-6">
              {[
                "Adverse News & Media Screening: Search global news archives and press releases for mentions of fraud, bribery, or corruption.",
                "Global Sanctions & PEP Databases: Screen against UN Sanctions, OFAC, Interpol, EU watchlists, and PEP lists.",
                "Court & Litigation Record Check: Scan e-Courts, High Courts, Supreme Court, NCLT, and District Court civil/criminal cases.",
                "Financial Defaulter & RBI Lists: Cross-check RBI Willful Defaulters, CIBIL defaulter records, and SEBI debarred entities."
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
                title: "Adverse Media Screening",
                desc: "Scan global news publications and press releases for reputational red flags & fraud mentions.",
                icon: Newspaper,
                color: "text-red-500",
                bg: "bg-red-500/10",
                border: "border-red-500/20"
              },
              {
                title: "Global Sanctions & PEP",
                desc: "Screen against OFAC, UN Sanctions, Interpol notices, and Politically Exposed Persons (PEP) lists.",
                icon: Globe,
                color: "text-blue-500",
                bg: "bg-blue-500/10",
                border: "border-blue-500/20"
              },
              {
                title: "Court Litigation Audit",
                desc: "Scan Supreme Court, High Courts, e-Courts, NCLT, and District Court civil/criminal case records.",
                icon: Scale,
                color: "text-purple-500",
                bg: "bg-purple-500/10",
                border: "border-purple-500/20"
              },
              {
                title: "Sub-Second Response",
                desc: "Retrieve comprehensive negative due diligence reports in <300ms for instant AML/KYC checks.",
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
              Authoritative Risk Data Extraction
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Comprehensive Due Diligence Output Parameters
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our API returns verified risk parameters directly from global sanctions, courts, and adverse news registries.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Subject & Entity Name",
                desc: "Full legal name and entity identification verified against global databases.",
                icon: Briefcase,
                color: "text-blue-500"
              },
              {
                title: "Overall Risk Score",
                desc: "Calculated risk score indicating Clear, Low, Medium, or High Risk status.",
                icon: ShieldAlert,
                color: "text-red-500"
              },
              {
                title: "Adverse Media Mentions",
                desc: "Summary of adverse news articles, publication sources, and press URLs.",
                icon: Newspaper,
                color: "text-purple-500"
              },
              {
                title: "Global Sanctions Match",
                desc: "Matches against UN, OFAC, EU, Interpol, and international enforcement lists.",
                icon: Globe,
                color: "text-amber-500"
              },
              {
                title: "PEP Status Flag",
                desc: "Politically Exposed Person indicator and political affiliation role.",
                icon: Users,
                color: "text-indigo-500"
              },
              {
                title: "Court Litigation Cases",
                desc: "Active and historical criminal/civil court cases across Indian & global courts.",
                icon: Scale,
                color: "text-rose-500"
              },
              {
                title: "Financial Defaulter Flag",
                desc: "Matches against RBI Willful Defaulters, CIBIL defaulters, and SEBI debarred lists.",
                icon: Landmark,
                color: "text-teal-500"
              },
              {
                title: "Regulatory Compliance Audit",
                desc: "Detailed audit trail for AML, CFT, and corporate governance compliance.",
                icon: FileText,
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">How Negative Due Diligence Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Four simple, automated steps to screen any individual or enterprise in sub-seconds.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Input Name & ID",
                desc: "Pass individual/company name and identifier (PAN, DIN, Passport) via REST API.",
                icon: FileText
              },
              {
                step: "02",
                title: "Query Global Databases",
                desc: "Our gateway queries global news archives, sanctions, PEP lists, and court portals.",
                icon: Database
              },
              {
                step: "03",
                title: "AI Match & Risk Audit",
                desc: "AI fuzzy matching evaluates name variations, court cases, and adverse media relevance.",
                icon: Search
              },
              {
                step: "04",
                title: "Receive JSON Output",
                desc: "Get clean, structured JSON payload in <300ms to complete AML/KYC due diligence.",
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
              Built for Banking, M&A & Executive Screening
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Empowering banks, private equity firms, enterprise procurement, and C-suite HR teams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Banks & NBFCs (AML/KYC)",
                desc: "Automate Anti-Money Laundering (AML) and Counter-Terrorism Financing (CFT) screening for high-risk customer account opening and transaction monitoring.",
                icon: Landmark,
                features: ["AML/CFT screening", "Sanction & PEP match", "High-risk customer audit"]
              },
              {
                title: "M&A & Private Equity Due Diligence",
                desc: "Screen target company founders, key shareholders, and executive directors against litigation records, adverse news, and regulatory debarments during deals.",
                icon: Scale,
                features: ["M&A target screening", "Founder background check", "Litigation history audit"]
              },
              {
                title: "Corporate Vendor & Supply Chain Audit",
                desc: "Audit third-party suppliers, vendors, and international trade partners for sanctions, fraud allegations, and financial default records.",
                icon: Briefcase,
                features: ["Vendor background audit", "Sanctions compliance", "Supplier risk score"]
              },
              {
                title: "HR & C-Suite Executive Screening",
                desc: "Perform deep reputational and legal background checks on executive leadership candidates before key appointments and board onboarding.",
                icon: Users,
                features: ["Executive background check", "Adverse media audit", "Reputational risk protection"]
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
              How DigitalRakshak Negative Due Diligence API compares to manual searches and basic web scrapers.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border bg-background shadow-lg">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="p-4 font-bold text-foreground">Feature / Parameter</th>
                  <th className="p-4 font-bold text-blue-600 bg-blue-500/10">DigitalRakshak API</th>
                  <th className="p-4 font-bold text-muted-foreground">Manual Search</th>
                  <th className="p-4 font-bold text-muted-foreground">Basic Web Scrapers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                {[
                  { feature: "Response Latency", us: "< 300ms", manual: "Days / Manual Audit", scraper: "5 - 10 Seconds" },
                  { feature: "Live Watchlist Sync", us: "Direct Real-time Sync", manual: "Outdated Archives", scraper: "Cached / Fragile" },
                  { feature: "Full Data Output", us: "Sanctions, Media, Courts & PEP", manual: "Fragmented Data", scraper: "Unreliable" },
                  { feature: "Bulk Processing", us: "Up to 50,000 / min", manual: "One by One", scraper: "Blocked Easily" },
                  { feature: "Enterprise SLA Uptime", us: "99.99% Guaranteed", manual: "N/A", scraper: "Frequent Downtime" },
                  { feature: "Data Security", us: "ISO 27001 / AES-256", manual: "No Audit Trail", scraper: "Unsecured" },
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
              Everything you need to know about integrating the Negative Due Diligence API.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                q: "What is the Negative Due Diligence & Media Check API?",
                a: "The Negative Due Diligence API allows enterprises to screen individuals and companies in real time against global adverse media, UN/OFAC sanctions, Interpol watchlists, PEP (Politically Exposed Persons) databases, e-Court records, and RBI defaulter registries."
              },
              {
                q: "What databases and sanctions lists are scanned?",
                a: "Our API scans over 200+ global sanctions lists (UN, OFAC, EU, HMT), Interpol red notices, Indian e-Courts (Supreme Court, High Courts, NCLT, District Courts), RBI Willful Defaulters, SEBI debarred entities, and global news publications."
              },
              {
                q: "How does AI matching reduce false positives?",
                a: "Our AI fuzzy matching algorithms evaluate name variations, aliases, DOB, father name, and contextual location data to minimize false positive matches."
              },
              {
                q: "What is the response latency and SLA?",
                a: "DigitalRakshak guarantees sub-300ms API response latency with 99.99% uptime SLA backed by enterprise redundant infrastructure."
              },
              {
                q: "What parameters are returned in the Due Diligence API output?",
                a: "The response includes subject legal name, overall risk score (Clear/Low/High), adverse media summary & URLs, global sanction matches, PEP status flag, court litigation case details, and RBI defaulter flags."
              },
              {
                q: "How do I integrate the Negative Due Diligence API?",
                a: "Register on DigitalRakshak, obtain your production/sandbox API keys, and connect our clean REST API endpoints into your AML/KYC pipeline within minutes."
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
            Ready to Automate Negative Due Diligence & Media Screening?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Get instant API sandbox keys and start screening subjects in sub-seconds.
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
