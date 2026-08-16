'use client'

import { Card } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useRouter } from 'next/navigation'
import {
  Scan,
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
  FileCheck,
  Image as ImageIcon,
  Type,
  Camera,
  ShieldAlert,
  CreditCard
} from 'lucide-react'

export default function DocumentForgeryDetectionPage() {
  const router = useRouter()

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 md:px-12 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-background to-transparent pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, transparent, black)' }}></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-semibold mb-6 shadow-md">
            <Scan className="w-4 h-4" />
            AI-Powered Document Tampering & Forgery Detection
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight text-balance">
            Document Forgery Detection API
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto leading-relaxed">
            Detect manipulated images, photoshopped KYC documents, font tampering, copy-paste artifacts, EXIF metadata anomalies, and digital forgery across Aadhaar, PAN, Voter ID, Passport, and bank statements in real time.
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
              { label: "Accuracy", value: "99.8%", desc: "Computer vision AI engine" },
              { label: "Uptime SLA", value: "99.99%", desc: "Bank-grade infrastructure" },
              { label: "Forensics", value: "Multi-Layer", desc: "Pixel, font & EXIF audit" },
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
              Computer Vision & Document Forensics
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground leading-tight">
              Why Automated Document Forgery Check is Essential
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Fraudsters frequently use Photoshop, online image editors, and font-replacement tools to fabricate bank statements, alter salary slips, and edit government-issued identity documents during digital onboarding and credit applications.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              DigitalRakshak&apos;s Document Forgery Detection API leverages advanced computer vision, deep neural networks, font forensic analysis, and EXIF metadata extraction to expose local image tampering, text overlays, and copy-paste element cloning instantly.
            </p>

            <ul className="space-y-4 mb-6">
              {[
                "Detect Image Manipulation & Photoshop: Spot pixel-level edits, localized blur, color mismatches, and compression anomalies.",
                "Font & Typography Forensic Audit: Detect non-standard fonts, text baseline shifts, character size inconsistencies, and text overlays.",
                "Copy-Paste & Element Cloning: Identify cloned signatures, duplicated stamps, cut-and-paste fields, and digital artifacts.",
                "EXIF Metadata & Camera Inspection: Analyze EXIF metadata, editing software signatures (Photoshop, Canva, Paint), and creation dates."
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
                title: "Photoshop & Pixel Edit Check",
                desc: "Expose localized image editing, pixel compression artifacts, and color mismatches.",
                icon: ImageIcon,
                color: "text-red-500",
                bg: "bg-red-500/10",
                border: "border-red-500/20"
              },
              {
                title: "Font & Typography Audit",
                desc: "Detect substituted fonts, baseline alignment shifts, and overlaid text fields.",
                icon: Type,
                color: "text-blue-500",
                bg: "bg-blue-500/10",
                border: "border-blue-500/20"
              },
              {
                title: "EXIF & Software Signatures",
                desc: "Audit camera EXIF data and flag images created or modified using editing software.",
                icon: Camera,
                color: "text-purple-500",
                bg: "bg-purple-500/10",
                border: "border-purple-500/20"
              },
              {
                title: "Sub-Second Response",
                desc: "Retrieve complete document forensic analysis in <300ms for instant onboarding security.",
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
              Authoritative Forensic Data Extraction
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Verified Forgery Output Parameters
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our API returns comprehensive computer vision forensic metrics and tampered region coordinates.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Document Classification Type",
                desc: "Aadhaar, PAN, Voter ID, Passport, Bank Statement, or Salary Slip.",
                icon: FileText,
                color: "text-blue-500"
              },
              {
                title: "Overall Forgery Score",
                desc: "Calculated authenticity indicator: Authentic (Clear) or Tampered (High Risk).",
                icon: ShieldAlert,
                color: "text-red-500"
              },
              {
                title: "Image Manipulation Alert",
                desc: "Flag for localized pixel editing, splicing, and compression anomalies.",
                icon: ImageIcon,
                color: "text-purple-500"
              },
              {
                title: "Font Alignment Anomaly",
                desc: "Detailed baseline shift, substituted font, and character spacing metrics.",
                icon: Type,
                color: "text-amber-500"
              },
              {
                title: "Copy-Paste Cloning Flag",
                desc: "Detection of duplicated signatures, stamps, and cloned text blocks.",
                icon: Layers,
                color: "text-indigo-500"
              },
              {
                title: "EXIF Software Signature",
                desc: "Extraction of creation software (Photoshop, Canva) and camera metadata.",
                icon: Camera,
                color: "text-rose-500"
              },
              {
                title: "Tampered Region Coordinates",
                desc: "Bounding box coordinates highlighting exact tampered document areas.",
                icon: Scan,
                color: "text-teal-500"
              },
              {
                title: "Authenticity Risk Score",
                desc: "Final confidence score for decisioning in loan & KYC pipelines.",
                icon: BadgeCheck,
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">How Forgery Detection Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Four simple, automated steps to audit any document image for digital tampering in sub-seconds.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Upload Document File",
                desc: "Upload document image (JPEG/PNG) or PDF via REST API endpoint or dashboard.",
                icon: FileText
              },
              {
                step: "02",
                title: "AI Computer Vision Scan",
                desc: "Deep neural networks scan image pixels, text alignment, and EXIF metadata.",
                icon: Scan
              },
              {
                step: "03",
                title: "Forensic Analysis",
                desc: "System audits font baseline consistency, copy-paste cloning, and software signatures.",
                icon: Search
              },
              {
                step: "04",
                title: "Receive JSON Output",
                desc: "Get clean JSON payload in <300ms with forgery scores & tampered bounding boxes.",
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
              Built for Digital Lending, Insurance & Onboarding
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Empowering banks, fintech lenders, insurance providers, and legal due diligence platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Banks & NBFC Digital Lending",
                desc: "Prevent loan fraud by detecting modified bank statements, fabricated salary slips, and edited ITR acknowledgments during automated digital loan underwriting.",
                icon: CreditCard,
                features: ["Bank statement tampering audit", "Salary slip forgery check", "Loan fraud prevention"]
              },
              {
                title: "Insurance Claims Processing",
                desc: "Detect forged medical bills, altered hospital discharge summaries, and edited vehicle repair estimates to prevent fraudulent insurance claim payouts.",
                icon: ShieldCheck,
                features: ["Medical bill forgery audit", "Repair estimate validation", "Claim fraud prevention"]
              },
              {
                title: "KYC & Digital Onboarding",
                desc: "Detect photoshopped identity proofs (Aadhaar, PAN, Voter ID, Passport) to stop synthetic identity fraud and account takeover attempts during onboarding.",
                icon: Users,
                features: ["Photoshopped KYC detection", "Synthetic ID prevention", "Identity proof audit"]
              },
              {
                title: "Real Estate & Legal Document Audit",
                desc: "Verify property agreements, NOC certificates, and commercial contracts for font tampering, cut-and-paste text fields, and digital signature cloning.",
                icon: Briefcase,
                features: ["Property deed audit", "Contract forgery detection", "Digital signature check"]
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
              How DigitalRakshak Document Forgery API compares to manual human inspection and basic OCR tools.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border bg-background shadow-lg">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="p-4 font-bold text-foreground">Feature / Parameter</th>
                  <th className="p-4 font-bold text-blue-600 bg-blue-500/10">DigitalRakshak API</th>
                  <th className="p-4 font-bold text-muted-foreground">Manual Human Inspection</th>
                  <th className="p-4 font-bold text-muted-foreground">Basic OCR Scanners</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                {[
                  { feature: "Response Latency", us: "< 300ms", manual: "10 - 30 Minutes", scraper: "2 - 5 Seconds" },
                  { feature: "Photoshop & Pixel Audit", us: "Automated Deep Learning", manual: "Misses Subtle Edits", scraper: "Not Supported" },
                  { feature: "Font Baseline Forensic", us: "Sub-pixel Alignment Check", manual: "Human Eyeball Only", scraper: "Text Extraction Only" },
                  { feature: "EXIF & Software Metadata", us: "Full Camera & Software Audit", manual: "Requires Expert Tools", scraper: "Ignored" },
                  { feature: "Bulk Processing Capacity", us: "Up to 50,000 / min", manual: "Slow / High Cost", scraper: "Limited Rate" },
                  { feature: "Data Security & Privacy", us: "ISO 27001 / Encrypted", manual: "Manual Data Risk", scraper: "Unsecured" },
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
              Everything you need to know about integrating the Document Forgery Detection API.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                q: "What is the Document Forgery Detection API?",
                a: "The Document Forgery Detection API uses computer vision, deep learning models, font forensic analysis, and EXIF metadata inspection to detect photoshopped images, modified bank statements, substituted text, and cloned elements across identity documents, financial statements, and bills in real time."
              },
              {
                q: "Which document types are supported for forgery checks?",
                a: "Our API supports Aadhaar cards, PAN cards, Voter ID cards, Passports, Driving Licenses, bank statements, salary slips, utility bills, and insurance claims."
              },
              {
                q: "How does the API detect Photoshop and image editing?",
                a: "The API analyzes pixel compression anomalies, localized blur patterns, color channel inconsistencies, and metadata signatures left by editing software like Photoshop, Canva, or MS Paint."
              },
              {
                q: "What is the response latency and SLA?",
                a: "DigitalRakshak guarantees sub-300ms API response latency with 99.99% uptime SLA backed by enterprise redundant infrastructure."
              },
              {
                q: "What parameters are returned in the Forgery API output?",
                a: "The response includes overall forgery score (Authentic/Tampered), image manipulation alert, font baseline anomaly metrics, copy-paste cloning flag, EXIF software signatures, and tampered region bounding box coordinates."
              },
              {
                q: "How do I integrate the Document Forgery Detection API?",
                a: "Register on DigitalRakshak, obtain your production/sandbox API keys, and connect our clean REST API endpoints into your KYC or digital lending application within minutes."
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
            Ready to Automate Document Forgery Check & Stop Fraud?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Get instant API sandbox keys and start verifying document authenticity in sub-seconds.
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
