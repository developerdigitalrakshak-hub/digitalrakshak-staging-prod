'use client'

import { Card } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useRouter } from 'next/navigation'
import {
  Car,
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
  Building,
  Key,
  ShieldAlert
} from 'lucide-react'

export default function VehicleReverseRCPage() {
  const router = useRouter()

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 md:px-12 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-background to-transparent pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, transparent, black)' }}></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-semibold mb-6 shadow-md">
            <Car className="w-4 h-4" />
            Automated Vehicle & Asset Discovery Intelligence
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight text-balance">
            Vehicle Reverse RC Verification API
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto leading-relaxed">
            Search by Owner Name, Mobile Number, Chassis Number, or Engine Number to discover all linked vehicles, RC registration records, and owner asset details via MoRTH Vahan gateway.
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
                { stat: "100%", label: "MoRTH Vahan Sync", badge: "Live Sync", icon: Database, color: "from-green-500 to-emerald-500" },
                { stat: "99.99%", label: "Uptime SLA", badge: "Bank-Grade", icon: ShieldCheck, color: "from-purple-500 to-indigo-500" },
                { stat: "PAN-India", label: "RTO Coverage", badge: "All States", icon: Car, color: "from-amber-500 to-rose-500" },
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
              Reverse Asset Discovery & Legal Audit
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground leading-tight">
              Why Reverse Vehicle RC Lookup is Essential
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              When assessing borrower creditworthiness, recovering assets from loan defaulters, or conducting corporate due diligence, searching by registration plate alone is insufficient. You need to discover all vehicles owned by an individual or business entity.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              DigitalRakshak&apos;s Vehicle Reverse RC Verification API queries central Ministry of Road Transport and Highways (MoRTH) Vahan databases, using Owner Name, Mobile Number, Chassis Number, or Engine Number to reveal all registered vehicles in sub-seconds.
            </p>

            <ul className="space-y-4 mb-6">
              {[
                "Search by Owner Name or Mobile: Discover all vehicles registered under a specific person or company.",
                "Chassis & Engine Reverse Lookup: Find Vehicle Registration Numbers (VRN) using chassis or engine numbers.",
                "Multi-Vehicle Asset Mapping: Map complete private, commercial, and fleet holdings of loan applicants.",
                "Direct MoRTH Vahan Portal Sync: Real-time query to official government Parivahan RTO registries."
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
                title: "Reverse Owner Search",
                desc: "Find all registered vehicles linked to an owner's legal name or phone number.",
                icon: Search,
                color: "text-blue-500",
                bg: "bg-blue-500/10",
                border: "border-blue-500/20"
              },
              {
                title: "Chassis & Engine Lookup",
                desc: "Discover vehicle registration numbers (VRN) from chassis or engine number inputs.",
                icon: Car,
                color: "text-green-500",
                bg: "bg-green-500/10",
                border: "border-green-500/20"
              },
              {
                title: "Asset & Repossession Audit",
                desc: "Locate hidden vehicle assets owned by loan defaulters for recovery and repossession.",
                icon: Landmark,
                color: "text-purple-500",
                bg: "bg-purple-500/10",
                border: "border-purple-500/20"
              },
              {
                title: "Sub-Second Response",
                desc: "Retrieve verified reverse RC search output in <300ms for instant underwriting.",
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
              Comprehensive Reverse RC Output Parameters
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our API returns verified owner identifiers and the full list of discovered vehicle registration records.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Column 1: Search & Owner Identifiers */}
            <Card className="p-8 border border-blue-500/20 shadow-xl bg-background/80 backdrop-blur-md rounded-3xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/60">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600">
                  <Search className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Search & Owner Identifiers</h3>
                  <p className="text-sm text-muted-foreground">Input parameter & owner match</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Matched Owner Legal Name", detail: "Full registered owner or company name", code: "owner_name" },
                  { label: "Search Input Parameter", detail: "Mobile / Name / Chassis / Engine input", code: "search_query" },
                  { label: "Total Vehicles Registered", detail: "Count of all vehicles linked to owner", code: "vehicle_count" },
                  { label: "Primary RTO Jurisdiction", detail: "Registered RTO office name and code", code: "rto_code" },
                  { label: "State & Location", detail: "State jurisdiction and location", code: "state_name" },
                  { label: "Search Match Confidence", detail: "Confidence score for owner match", code: "match_score" },
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

            {/* Column 2: Discovered Vehicle RC Records */}
            <Card className="p-8 border border-purple-500/20 shadow-xl bg-background/80 backdrop-blur-md rounded-3xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/60">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-600">
                  <Car className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Discovered Vehicle RC List</h3>
                  <p className="text-sm text-muted-foreground">Linked vehicle details & status</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Vehicle Reg Number (VRN)", detail: "Registration plate numbers list", code: "reg_no_list" },
                  { label: "Vehicle Maker & Model", detail: "Manufacturer, model, and variant", code: "maker_model" },
                  { label: "Vehicle Class & Fuel Type", detail: "Motor Car, LMV, Goods / Petrol/EV", code: "vehicle_class" },
                  { label: "Registration Date & Expiry", detail: "Original registration date & RC validity", code: "rc_expiry" },
                  { label: "Insurance & PUCC Status", detail: "Policy status, expiry date & PUCC valid", code: "insurance_status" },
                  { label: "Chassis & Engine Masked", detail: "Full or masked chassis & engine numbers", code: "chassis_engine" },
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">How Reverse RC Verification Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Four simple, automated steps to discover all vehicles owned by an individual or business.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Input Search Parameter",
                desc: "Pass Owner Name, Mobile Number, Chassis Number, or Engine Number via REST API.",
                icon: FileText
              },
              {
                step: "02",
                title: "Query Vahan Registry",
                desc: "Our gateway queries central MoRTH Parivahan Vahan databases across all state RTOs.",
                icon: Database
              },
              {
                step: "03",
                title: "Asset Match Audit",
                desc: "System audits and compiles all matching vehicle registration records and RC profiles.",
                icon: Search
              },
              {
                step: "04",
                title: "Receive JSON Output",
                desc: "Get clean, structured JSON payload in <300ms listing all discovered vehicle assets.",
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
              Built for Asset Recovery, Insurance & Lending
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Empowering banks, auto lenders, insurance underwriters, and fleet operators.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Banks & NBFC Asset Recovery",
                desc: "Discover hidden vehicle assets owned by loan defaulters using owner name or phone number for loan recovery, hypothecation audit, and repossession action.",
                icon: Landmark,
                metrics: "100% Asset Discovery",
                tag: "Asset Repossession",
                points: ["Defaulter vehicle asset mapping", "Reverse owner lookup", "Hypothecation status check"]
              },
              {
                title: "Auto Insurance & Underwriting",
                desc: "Verify multi-vehicle ownership, commercial vs private registration history, and active insurance coverage before issuing motor insurance policies.",
                icon: ShieldCheck,
                metrics: "Multi-Vehicle Risk Audit",
                tag: "Insurance Underwriting",
                points: ["Owner fleet insurance check", "Policy risk assessment", "Commercial class verification"]
              },
              {
                title: "Fleet Operators & Logistics Management",
                desc: "Audit commercial vehicle holdings, track fleet expansion, and confirm vehicle registration compliance for logistics contractors and transport providers.",
                icon: Briefcase,
                metrics: "Instant Fleet Inventory",
                tag: "Fleet Management",
                points: ["Commercial fleet discovery", "Logistics vendor verification", "Chassis/engine match"]
              },
              {
                title: "Used Vehicle Marketplaces & Auction Houses",
                desc: "Verify previous ownership count, track all vehicles previously registered under a seller, and prevent stolen vehicle sales during trade-in auctions.",
                icon: Car,
                metrics: "Sub-Second Trade Verification",
                tag: "Used Car Marketplaces",
                points: ["Seller vehicle history audit", "Multiple RC ownership check", "Stolen vehicle risk prevention"]
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
              Everything you need to know about integrating the Vehicle Reverse RC API.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                q: "What is the Vehicle Reverse RC Verification API?",
                a: "The Vehicle Reverse RC Verification API allows lenders, insurance companies, and enterprises to search by Owner Name, Mobile Number, Chassis Number, or Engine Number to discover all linked vehicle registration numbers (VRN) and RC records directly from MoRTH Vahan portals."
              },
              {
                q: "What input parameters can be used for reverse RC search?",
                a: "You can query using Owner Legal Name, Registered Mobile Number, Chassis Number, or Engine Number."
              },
              {
                q: "How does reverse RC search help in loan recovery and asset repossession?",
                a: "By searching a loan defaulter's name or mobile number, lenders can discover all vehicles owned by the individual, enabling legal asset recovery and repossession."
              },
              {
                q: "What is the response latency and SLA?",
                a: "DigitalRakshak guarantees sub-300ms API response latency with 99.99% uptime SLA backed by enterprise redundant infrastructure."
              },
              {
                q: "What parameters are returned in the Reverse RC output?",
                a: "The response includes matched owner name, total vehicle count, list of vehicle registration numbers (VRN), maker & model, vehicle class, registration date & expiry, and insurance status."
              },
              {
                q: "How do I integrate the Vehicle Reverse RC API?",
                a: "Register on DigitalRakshak, obtain your production/sandbox API keys, and connect our clean REST API endpoints into your underwriting or asset recovery platform within minutes."
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
            Ready to Automate Reverse RC Vehicle Discovery?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Get instant API sandbox keys and start discovering vehicle assets in sub-seconds.
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
