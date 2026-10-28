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
  UserCheck,
  Building,
  ShieldAlert,
  Award
} from 'lucide-react'

export default function ROCDirectorSearchPage() {
  const router = useRouter()

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 md:px-12 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-background to-transparent pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, transparent, black)' }}></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-semibold mb-6 shadow-md">
            <Building2 className="w-4 h-4" />
            Automated MCA & ROC Director Intelligence
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight text-balance">
            ROC Director Search API
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto leading-relaxed">
            Search by Director Identification Number (DIN), Director Name, or PAN to discover all associated company directorships, DIN validity, appointment dates, and MCA disqualification records in real time.
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
                { stat: "100%", label: "MCA Portal Sync", badge: "Live Sync", icon: Database, color: "from-green-500 to-emerald-500" },
                { stat: "99.99%", label: "Uptime SLA", badge: "Bank-Grade", icon: ShieldCheck, color: "from-purple-500 to-indigo-500" },
                { stat: "PAN-India", label: "ROC Registry", badge: "All DINs & LLPs", icon: Building2, color: "from-amber-500 to-rose-500" },
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
              Director Governance & Conflict Audit
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground leading-tight">
              Why Specific ROC Director Search is Essential
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              When evaluating corporate loan guarantors, performing M&A due diligence, or onboarding high-ticket vendors, inspecting only company CIN records is not enough. You need specific intelligence on individual company directors and their complete corporate network.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              DigitalRakshak&apos;s ROC Director Search API queries official Ministry of Corporate Affairs (MCA) Registrars of Companies (ROC) databases in real time, validating DIN status, mapping past & present directorships, appointment dates, and Section 164 disqualification records.
            </p>

            <ul className="space-y-4 mb-6">
              {[
                "Map All Associated Directorships: Discover all active and past companies/LLPs associated with a director DIN.",
                "Section 164 Disqualification Check: Flag disqualified directors, defaulted companies, and ROC compliance defaults.",
                "Audit Appointment & Resignation Dates: Track director onboarding timeline, designation, and tenure history.",
                "Direct MCA Parivahan Portal Sync: Query official Ministry of Corporate Affairs ROC registries in real time."
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
                title: "DIN Status & History",
                desc: "Verify 8-digit DIN status (Approved / Deactivated / Disqualified) and allotment details.",
                icon: UserCheck,
                color: "text-blue-500",
                bg: "bg-blue-500/10",
                border: "border-blue-500/20"
              },
              {
                title: "Complete Company Mapping",
                desc: "Discover all corporate entities, CIN numbers, and LLP partnerships linked to a director.",
                icon: Building2,
                color: "text-green-500",
                bg: "bg-green-500/10",
                border: "border-green-500/20"
              },
              {
                title: "Disqualification Check",
                desc: "Spot Section 164 debarments, default company flags, and ROC compliance violations.",
                icon: ShieldAlert,
                color: "text-red-500",
                bg: "bg-red-500/10",
                border: "border-red-500/20"
              },
              {
                title: "Sub-Second Response",
                desc: "Retrieve complete director MCA profiles in <300ms for instant corporate underwriting.",
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
              Comprehensive Director Output Parameters
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our API returns verified director legal metadata and the complete list of associated companies.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Column 1: Director & DIN Identifiers */}
            <Card className="p-8 border border-blue-500/20 shadow-xl bg-background/80 backdrop-blur-md rounded-3xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/60">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Director & DIN Identifiers</h3>
                  <p className="text-sm text-muted-foreground">Official MCA director metadata</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Director Legal Name", detail: "Full official director name registered under MCA", code: "director_name" },
                  { label: "8-Digit DIN Number", detail: "Director Identification Number (DIN)", code: "din_number" },
                  { label: "DIN Active Status", detail: "Approved / Deactivated / Disqualified status", code: "din_status" },
                  { label: "Director PAN Linkage", detail: "Masked Permanent Account Number linked", code: "pan_linked" },
                  { label: "Total Directorships Count", detail: "Count of all active and past company roles", code: "directorship_count" },
                  { label: "ROC Regional Office", detail: "Jurisdictional ROC regional office name", code: "roc_office" },
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

            {/* Column 2: Associated Company & Directorship List */}
            <Card className="p-8 border border-purple-500/20 shadow-xl bg-background/80 backdrop-blur-md rounded-3xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/60">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-600">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Associated Directorship List</h3>
                  <p className="text-sm text-muted-foreground">Companies, designations & tenure</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Company CIN / LLPIN List", detail: "Corporate Identification Numbers list", code: "cin_list" },
                  { label: "Company Legal Title", detail: "Official company / LLP legal names", code: "company_names" },
                  { label: "Director Designation", detail: "Managing / Whole-Time / Independent Director", code: "designation" },
                  { label: "Appointment & Resignation Dates", detail: "Original appointment & tenure exit dates", code: "tenure_dates" },
                  { label: "Section 164 Disqualification Flag", detail: "Disqualified director flag under Sec 164", code: "is_disqualified" },
                  { label: "Company Filing Status", detail: "Active / Strike Off / Under Liquidation", code: "company_status" },
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">How ROC Director Search Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Four simple, automated steps to audit any director DIN and associated corporate directorships.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Input DIN / Name / PAN",
                desc: "Pass 8-digit DIN Number, Director Legal Name, or PAN via REST API.",
                icon: FileText
              },
              {
                step: "02",
                title: "Query MCA Registry",
                desc: "Our gateway queries central Ministry of Corporate Affairs ROC databases in real time.",
                icon: Database
              },
              {
                step: "03",
                title: "Directorship Audit",
                desc: "System maps company CINs, designation history, and Section 164 debarments.",
                icon: Search
              },
              {
                step: "04",
                title: "Receive JSON Output",
                desc: "Get clean, structured JSON payload in <300ms listing all associated directorships.",
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
              Built for M&A, Corporate Credit & Legal Due Diligence
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Empowering M&A advisory, private equity, commercial banks, and corporate compliance teams.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Corporate M&A & Private Equity Due Diligence",
                desc: "Screen target company founders, promoters, and key directors to uncover hidden cross-directorships, shell company linkages, and potential conflicts of interest.",
                icon: Briefcase,
                metrics: "100% Conflict Audit",
                tag: "M&A Due Diligence",
                points: ["Promoter cross-directorship audit", "Shell company linkage check", "Conflict of interest discovery"]
              },
              {
                title: "Banks & NBFC Corporate Credit Underwriting",
                desc: "Verify corporate loan guarantors and promoter DIN records to ensure directors are not disqualified under Section 164 or linked to defaulted entities.",
                icon: Landmark,
                metrics: "Zero Defaulter Risk",
                tag: "Corporate Credit",
                points: ["Guarantor DIN verification", "Section 164 debarment check", "Associated company risk audit"]
              },
              {
                title: "Legal & Forensic Compliance Teams",
                desc: "Perform forensic investigations into corporate governance, tracking director appointment timelines, resignation dates, and MCA regulatory compliance.",
                icon: ShieldAlert,
                metrics: "Sub-Second MCA Forensic",
                tag: "Forensic Compliance",
                points: ["Director appointment history", "Tenure & resignation audit", "MCA compliance status"]
              },
              {
                title: "B2B Procurement & Vendor Due Diligence",
                desc: "Discover ultimate beneficial ownership (UBO) and key promoter backgrounds before executing high-value commercial supplier contracts.",
                icon: Building,
                metrics: "Instant UBO Discovery",
                tag: "Vendor Due Diligence",
                points: ["Vendor promoter identification", "Cross-entity directorship check", "Active company verification"]
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
              Everything you need to know about integrating the ROC Director Search API.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                q: "What is the ROC Director Search API?",
                a: "The ROC Director Search API allows enterprises to search by Director Identification Number (DIN), Director Name, or PAN to discover all associated company directorships, DIN active status, appointment dates, and Section 164 disqualification records directly from Ministry of Corporate Affairs (MCA) portals."
              },
              {
                q: "How is ROC Director Search different from General Company Verification?",
                a: "General Company Verification checks a specific company CIN/LLPIN profile. ROC Director Search focuses specifically on the individual director, mapping all past and current directorships across multiple corporate entities."
              },
              {
                q: "What is a Section 164 Director Disqualification?",
                a: "Under Section 164 of the Companies Act, directors of companies that fail to file annual returns or financial statements for consecutive years are disqualified from being appointed as directors. Our API flags these disqualification records automatically."
              },
              {
                q: "What is the response latency and SLA?",
                a: "DigitalRakshak guarantees sub-300ms API response latency with 99.99% uptime SLA backed by enterprise redundant infrastructure."
              },
              {
                q: "What parameters are returned in the ROC Director Search output?",
                a: "The response includes director legal name, 8-digit DIN number, DIN status (Approved/Disqualified), total directorship count, company CIN list, designations, appointment/resignation dates, and Section 164 disqualification status."
              },
              {
                q: "How do I integrate the ROC Director Search API?",
                a: "Register on DigitalRakshak, obtain your production/sandbox API keys, and connect our clean REST API endpoints into your corporate M&A or credit underwriting workflow within minutes."
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
            Ready to Automate ROC Director Search & MCA Due Diligence?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Get instant API sandbox keys and start auditing director profiles in sub-seconds.
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
