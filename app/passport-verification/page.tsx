'use client'

import { Card } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { CheckCircle, ShieldCheck, AlertTriangle, FileText, Zap, Globe, BarChart, Plane, Lock, Users, Key, Briefcase } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function PassportVerificationPage() {
  const router = useRouter()

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 md:px-12 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-transparent" style={{ maskImage: 'linear-gradient(to bottom, transparent, black)' }}></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-full text-sm font-semibold mb-6">
            <ShieldCheck className="w-5 h-5" />
            Secure Onboarding & Travel KYC
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Passport Verification
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
            Real-Time Passport ID Validation & MRZ OCR extraction to verify nationality, date of birth, passport number, and travel document authenticity instantly.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg h-14 px-8 rounded-full shadow-xl hover:shadow-primary/25 transition-all"
            onClick={() => {
              router.push(`/register`)
            }}
          >
            Get Started Securely
          </Button>
        </div>
      </section>

      {/* Overview & Why it Matters */}
      <section className="px-6 py-20 md:px-12 bg-background">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">What is Passport Verification?</h2>
            <p className="text-lg text-muted-foreground mb-4">
              In cross-border transactions, travel onboarding, and international identity checks, a passport is the gold standard of identity. Verifying passports in real-time ensures seamless compliance and prevents identity spoofing.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              It is the process of confirming that a passport document is:
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Valid and officially issued",
                "Accurate in MRZ and OCR details",
                "Authentic and un-tampered"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground font-medium text-lg">
                  <CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-lg text-muted-foreground border-l-4 border-blue-600 pl-4 py-1 italic bg-blue-600/5 rounded-r-lg">
              This is performed through government database queries, MRZ checksum validation, and intelligent OCR processing to ensure every passport entering your workflow is genuine.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Prevent Fake Identities", desc: "Block forged, manipulated, or stolen passport documents instantly.", icon: AlertTriangle, color: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/20" },
              { title: "Strengthen Travel KYC", desc: "Ensure compliance for international users, flights, and NRI banking.", icon: ShieldCheck, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
              { title: "Automate Document Extraction", desc: "Instantly extract MRZ data, name, DOB, and expiry date without manual entry.", icon: FileText, color: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/20" },
              { title: "Boost User Trust", desc: "Offer frictionless onboarding for legitimate global users and travelers.", icon: CheckCircle, color: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/20" }
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

      {/* Capabilities Section */}
      <section className="px-6 py-20 md:px-12 bg-secondary/30 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Our Verification Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Comprehensive real-time checks designed to secure your platform across passport validation, MRZ OCR, and forgery detection.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Passport Number Validation */}
            <Card className="relative overflow-hidden p-8 border border-border/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group bg-background/50 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform">
                <FileText className="w-7 h-7 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Passport Validation</h3>
              <p className="text-muted-foreground mb-6 min-h-[48px]">Validate passport numbers in real-time against central passport databases.</p>
              <h4 className="font-semibold mb-4 text-xs text-foreground/70 uppercase tracking-wider">Key Features</h4>
              <ul className="space-y-3">
                {[
                  "Official government registry lookup",
                  "Passport active status check",
                  "Expiration & validity audit",
                  "Issuing authority verification"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 font-medium">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>

            {/* MRZ Code & OCR */}
            <Card className="relative overflow-hidden p-8 border border-border/50 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 group bg-background/50 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
              <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform">
                <Globe className="w-7 h-7 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">MRZ Code & OCR</h3>
              <p className="text-muted-foreground mb-6 min-h-[48px]">Extract and verify Machine Readable Zone data automatically from passport images.</p>
              <h4 className="font-semibold mb-4 text-xs text-foreground/70 uppercase tracking-wider">Key Features</h4>
              <ul className="space-y-3">
                {[
                  "2-line & 3-line MRZ parsing",
                  "Name, DOB, & Gender extraction",
                  "Country code & nationality check",
                  "MRZ checksum calculation"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 font-medium">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Forgery Detection */}
            <Card className="relative overflow-hidden p-8 border border-border/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 group bg-background/50 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600"></div>
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform">
                <Lock className="w-7 h-7 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Forgery Detection</h3>
              <p className="text-muted-foreground mb-6 min-h-[48px]">Detect digital tampering, font mismatches, and photo manipulation on passports.</p>
              <h4 className="font-semibold mb-4 text-xs text-foreground/70 uppercase tracking-wider">Key Features</h4>
              <ul className="space-y-3">
                {[
                  "Document image anti-spoofing",
                  "Photo & font consistency check",
                  "Digital watermark validation",
                  "Tamper detection score"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 font-medium">
                    <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works & Why Choose Us */}
      <section className="px-6 py-24 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <div className="inline-block mb-4 px-3 py-1 bg-blue-500/10 text-secondary-foreground text-xs font-bold uppercase tracking-widest rounded-full">Process</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-foreground">How It Works</h2>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[1.4rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 md:before:left-[1.4rem] md:before:right-auto md:before:w-0.5 before:w-0.5 before:h-full before:bg-gradient-to-b before:from-primary/50 before:via-border before:to-transparent">
              {[
                { step: "1", title: "Document Upload", desc: "User uploads a passport image scan or passes the passport number." },
                { step: "2", title: "MRZ & OCR Scan", desc: "Our system reads MRZ lines, passport holder name, DOB, and document numbers." },
                { step: "3", title: "Database Query", desc: "Details are cross-referenced against official passport registries." },
                { step: "4", title: "Forgery Audit", desc: "System audits image authenticity, font consistency, and validity period." },
                { step: "5", title: "Successfully Verified", desc: "Passport status is verified and clean JSON response is delivered." }
              ].map((item, i) => (
                <div key={i} className="relative flex items-start gap-6 group pl-2">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-background bg-gradient-to-r from-blue-600 to-purple-600 text-primary-foreground font-bold shadow-lg z-10 shrink-0 group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                  <div className="pt-2">
                    <h4 className="text-xl font-bold mb-2 text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="inline-block mb-4 px-3 py-1 bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-widest rounded-full">Advantages</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-foreground">Why Choose DigitalRakshak?</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "API-First & Developer-Friendly", desc: "Integrate passport verification into your apps in minutes with clean documentation and REST APIs.", icon: Zap },
                { title: "Real-Time Processing", desc: "Sub-second verification latency for seamless onboarding without dropping users.", icon: BarChart },
                { title: "High Accuracy OCR", desc: "AI-driven OCR engine accurately parses 2-line & 3-line MRZ codes.", icon: ShieldCheck },
                { title: "Global Coverage", desc: "Support for international passports and travel document standards worldwide.", icon: Globe },
                { title: "Actionable Insights", desc: "Get detailed logs, fraud scores, and real-time verification reports.", icon: BarChart }
              ].map((reason, i) => (
                <Card key={i} className="p-6 border-border/50 bg-secondary/10 hover:bg-secondary/20 transition-colors duration-300">
                  <reason.icon className="w-8 h-8 text-blue-600 mb-4" />
                  <h4 className="font-bold mb-2 text-foreground text-lg">{reason.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{reason.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="px-6 py-24 md:px-12 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 from-primary/20 via-slate-950 to-slate-950"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Use Cases Across Industries</h2>
            <p className="text-slate-300 text-xl max-w-2xl mx-auto">See how different sectors utilize our passport verification API to build secure, trusted platforms.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { industry: "Aviation & Travel Platforms", icon: Plane, uses: ["Passenger identity check", "Flight check-in validation", "International travel KYC"] },
              { industry: "Fintech & NRI Banking", icon: Briefcase, uses: ["NRI account opening", "Cross-border transfers", "High-value KYC initiation"] },
              { industry: "Immigration & Visas", icon: Globe, uses: ["Student visa check", "Work permit validation", "Embassy document audit"] },
              { industry: "Hospitality & Rentals", icon: Users, uses: ["Foreign guest check-in", "Luxury rental verification", "Statutory C-Form filing"] }
            ].map((useCase, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <useCase.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-6 text-white">{useCase.industry}</h3>
                <ul className="space-y-3">
                  {useCase.uses.map((use, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-slate-300 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 flex-shrink-0 shadow-[0_0_8px_rgba(var(--primary),0.8)]" />
                      {use}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 text-center max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-4 shadow-2xl">
            <span className="font-semibold text-lg text-slate-200">Key Benefits summary:</span>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-300">
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Reduce passport fraud</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Instant MRZ data extraction</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Smooth international onboarding</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & CTA */}
      <section className="px-6 py-24 md:px-12 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Everything you need to know about our Passport Verification solution</p>
          </div>
          <Accordion type="single" collapsible className="w-full mb-24 bg-card shadow-sm border rounded-2xl p-4 md:p-8">
            {[
              {
                q: "What details are extracted during Passport Verification?",
                a: "Our API extracts full legal name, date of birth, gender, nationality, passport number, issue date, expiry date, issuing authority, and MRZ code checksums."
              },
              {
                q: "Is 2-line and 3-line MRZ reading supported?",
                a: "Yes, our OCR engine automatically parses both 2-line (TD3) and 3-line (TD1/TD2) Machine Readable Zone codes on passports and travel identity cards."
              },
              {
                q: "How fast is the verification response time?",
                a: "Verification and OCR data extraction are completed in sub-seconds, typically under 300ms."
              },
              {
                q: "Can the API detect expired or fake passports?",
                a: "Yes, our system checks official database records, verifies expiration dates, and audits document image tampering for forgery detection."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b-border/60 last:border-0 px-2 py-1">
                <AccordionTrigger className="text-left font-semibold text-lg py-5 hover:text-blue-600 transition-colors text-foreground">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6 pt-2">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Card className="p-10 md:p-14 text-center bg-blue-600/10 border-blue-600/20 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Get Started with Passport Verification</h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Don't let fake identity documents undermine your international growth. Secure your platform with real-time Passport Verification from DigitalRakshak.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-10 h-14 rounded-full text-lg shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-1"
                onClick={() => {
                  router.push(`/register`)
                }}
              >
                Contact Us Today
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
