'use client'

import { Card } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import {
  FileSignature,
  Stamp,
  ShieldCheck,
  Zap,
  FileText,
  CheckCircle2,
  Lock,
  Clock,
  Layers,
  Users,
  Building2,
  Briefcase,
  ArrowRight,
  FileCheck,
  Scale
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function EStampAndESignPage() {
  const router = useRouter()

  const features = [
    {
      icon: Stamp,
      title: "Legally Binding E-Stamping",
      description: "Instant online stamp duty payment & procurement across all Indian states with tamper-proof digital stamp certificates."
    },
    {
      icon: FileSignature,
      title: "Aadhaar eSign & Digital Signatures",
      description: "Secure multi-party document signing via OTP or biometric authentication compliant with Section 5 of IT Act 2000."
    },
    {
      icon: Lock,
      title: "Bank-Grade Encryption & Audit Trail",
      description: "256-bit SHA encryption, precise time-stamping, and detailed audit trails ensuring non-repudiation in court."
    },
    {
      icon: Zap,
      title: "Seamless API Integration",
      description: "Embed e-Stamp and e-Sign workflows directly into your web applications, ERPs, and CRMs with developer-friendly APIs."
    },
    {
      icon: Layers,
      title: "Smart Document Templating",
      description: "Automate contract creation by merging dynamic data into pre-approved legal templates instantly."
    },
    {
      icon: Clock,
      title: "90% Faster Turnaround Time",
      description: "Eliminate paper handling, physical stamp vendor visits, and courier delays. Execute contracts in minutes."
    }
  ]

  const steps = [
    {
      step: "01",
      title: "Upload or Generate Contract",
      desc: "Upload existing PDF documents or generate dynamic contracts using custom standard templates."
    },
    {
      step: "02",
      title: "Auto-Fetch E-Stamp",
      desc: "System calculates state-specific stamp duty and attaches digital stamp certificates automatically."
    },
    {
      step: "03",
      title: "Aadhaar / Digital Signing",
      desc: "Signers receive instant secure links to authorize documents via Aadhaar OTP or DSC."
    },
    {
      step: "04",
      title: "Instant Executed Document",
      desc: "Download fully executed, legally valid stamped & signed documents with full audit trail."
    }
  ]

  const useCases = [
    {
      icon: Building2,
      title: "Fintech & Banking",
      desc: "Loan agreements, sanction letters, NACH mandates, and customer onboarding documents."
    },
    {
      icon: Briefcase,
      title: "HR & Enterprise Onboarding",
      desc: "Offer letters, employment contracts, NDA agreements, and vendor onboarding docs."
    },
    {
      icon: FileCheck,
      title: "Real Estate & Leasing",
      desc: "Rental agreements, property lease deeds, channel partner agreements, and MOUs."
    },
    {
      icon: Scale,
      title: "Legal & Procurement",
      desc: "Service level agreements (SLAs), vendor contracts, power of attorney, and affidavits."
    }
  ]

  const faqs = [
    {
      q: "Is E-Sign legally valid in India?",
      a: "Yes. E-Sign backed by Aadhaar OTP or Digital Signature Certificate (DSC) is recognized as legally valid under Section 5 of the Information Technology Act, 2000 and is admissible in court under Section 65B of the Indian Evidence Act."
    },
    {
      q: "How does Digital E-Stamping work?",
      a: "Our platform integrates directly with state stamp duty portals to generate digital stamp certificates. The stamp details are cryptographically merged into your document, fulfilling state stamp duty requirements electronically."
    },
    {
      q: "Which states support E-Stamping?",
      a: "We support digital e-stamping across major Indian states including Maharashtra, Delhi, Karnataka, Tamil Nadu, Telangana, Gujarat, Uttar Pradesh, Haryana, West Bengal, and more."
    },
    {
      q: "Can multi-party agreements be signed remotely?",
      a: "Absolutely. You can define sequential or parallel signing orders for multiple parties. Each signatory receives an encrypted link to authenticate and sign from any mobile or desktop browser."
    },
    {
      q: "How can we integrate E-Stamp & E-Sign into our software?",
      a: "DigitalRakshak provides RESTful APIs and SDKs with comprehensive documentation. Integration can be completed within hours with webhooks for real-time document status callbacks."
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 md:px-12 bg-gradient-to-br from-blue-900/10 via-background to-purple-900/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/15 via-transparent to-transparent" style={{ maskImage: 'linear-gradient(to bottom, transparent, black)' }}></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold mb-6 shadow-md">
            <Stamp className="w-4 h-4" />
            Legal, Swift & Paperless Documentation
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 text-balance tracking-tight">
            Next-Gen <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">E-Stamp & E-Sign</span> Solutions
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground mb-10 text-pretty max-w-3xl mx-auto">
            Automate contract execution with legally binding digital stamp papers and instant Aadhaar e-Signatures. Built for enterprises, startups, and financial institutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg h-14 px-8 rounded-full shadow-xl hover:shadow-primary/25 transition-all w-full sm:w-auto"
              onClick={() => router.push('/register')}
            >
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-300 dark:border-gray-700 text-lg h-14 px-8 rounded-full transition-all w-full sm:w-auto"
              onClick={() => router.push('/contact')}
            >
              Book Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Overview & Key Highlights */}
      <section className="px-6 py-16 md:py-24 bg-background border-y border-border/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose DigitalRakshak E-Stamp & E-Sign?</h2>
            <p className="text-muted-foreground text-lg">
              Streamline document lifecycles with bank-grade security, instant state stamp duty processing, and 100% legal admissibility under Indian law.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <Card key={i} className="p-6 border-border/60 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm group">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Workflow */}
      <section className="px-6 py-16 md:py-24 bg-slate-50 dark:bg-slate-900/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How E-Stamping & E-Sign Work</h2>
            <p className="text-muted-foreground text-lg">
              Execute fully compliant legal contracts in 4 simple automated steps.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, idx) => (
              <div key={idx} className="relative p-6 rounded-2xl bg-background border border-border/60 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-4xl font-black text-blue-600/30 dark:text-blue-400/30 mb-4 block font-mono">{s.step}</span>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/40 flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400">
                  <CheckCircle2 className="w-4 h-4" />
                  Instant & Automated
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="px-6 py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tailored Solutions for Every Industry</h2>
            <p className="text-muted-foreground text-lg">
              Empowering diverse verticals with fast, secure, and legally enforceable digital execution.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="p-6 rounded-2xl bg-secondary/10 border border-secondary/20 hover:bg-secondary/20 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                  <uc.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold mb-2">{uc.title}</h3>
                <p className="text-sm text-muted-foreground">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-16 md:py-24 bg-slate-50 dark:bg-slate-900/40">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything you need to know about E-Stamping & E-Sign compliance</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border/60 bg-background rounded-xl px-4">
                <AccordionTrigger className="text-left font-semibold text-base py-4 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm pb-4 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="px-6 py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Ready to Go 100% Paperless with E-Sign?
          </h2>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto">
            Transform your document execution workflows today with DigitalRakshak's E-Stamp & E-Sign infrastructure.
          </p>
          <div className="pt-4">
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-50 text-lg h-14 px-8 rounded-full shadow-2xl font-bold"
              onClick={() => router.push('/register')}
            >
              Contact US Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
