'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
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
  Scale,
  Check,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Search,
  BookOpen,
  BadgeCheck,
  Shield,
  Send,
  Calendar,
  Award
} from 'lucide-react'

const assetPathPrefix = '/assets'
const imgFrame19 = `${assetPathPrefix}/643e6.png`
const imgRectangle6 = `${assetPathPrefix}/Rectangle 6.png`
const imgRectangle7 = `${assetPathPrefix}/Rectangle 7.png`
const imgEllipse19 = `${assetPathPrefix}/Ellipse 19.png`

export default function EStampAndESignPage() {
  const router = useRouter()
  const [isTableExpanded, setIsTableExpanded] = useState(false)
  const [articleSearch, setArticleSearch] = useState('')
  const [articleCategory, setArticleCategory] = useState('All')
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  // CTA Form States
  const ctaOptions = [
    'Aadhaar eSign & Biometric API',
    'Multi-State Digital E-Stamping',
    'Digital Onboarding Platform',
    'Smart Contract Templating API',
    'Full Audit Trail & Evidence Pack'
  ]
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Aadhaar eSign & Biometric API',
    'Multi-State Digital E-Stamping'
  ])
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const isAllSelected = selectedServices.length === ctaOptions.length

  const toggleSelectAll = () => {
    if (isAllSelected) {
      setSelectedServices([])
    } else {
      setSelectedServices([...ctaOptions])
    }
  }

  const toggleOption = (opt: string) => {
    if (selectedServices.includes(opt)) {
      setSelectedServices(selectedServices.filter((o) => o !== opt))
    } else {
      setSelectedServices([...selectedServices, opt])
    }
  }

  const handleCtaSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      alert('Please enter your work email.')
      return
    }
    setSubmitted(true)
  }

  const documentTypes = [
    'Rent / Lease Agreement',
    'Affidavit',
    'NOC',
    'Undertaking',
    'Loan Agreement',
    'MOU',
    'Partnership Deed',
    'Gift Deed',
    'Power of Attorney',
    'Declaration'
  ]

  const articleCodes = [
    {
      art: 'Art. 3',
      docType: 'Affidavit',
      useCase: 'Statutory declarations, court submissions',
      basis: 'Fixed amount'
    },
    {
      art: 'Art. 5',
      docType: 'Agreement / MoU',
      useCase: 'Loan agreements, vendor contracts, service agreements',
      basis: 'Fixed / ad valorem (state-specific)'
    },
    {
      art: 'Art. 15',
      docType: 'Bond',
      useCase: 'Performance bonds, surety bonds, employment bonds',
      basis: '% of bond value'
    },
    {
      art: 'Art. 23',
      docType: 'Conveyance (Sale Deed)',
      useCase: 'Property purchase, transfer of immovable assets',
      basis: '% of market / consideration value'
    },
    {
      art: 'Art. 35',
      docType: 'Lease Deed',
      useCase: 'Residential & commercial rentals, long-term leases',
      basis: '% of annual rent / premium'
    },
    {
      art: 'Art. 40',
      docType: 'Mortgage Deed',
      useCase: 'Home loans, LAP, secured lending',
      basis: '% of loan / mortgage amount'
    },
    {
      art: 'Art. 48',
      docType: 'Power of Attorney',
      useCase: 'General & specific PoA for property, legal matters',
      basis: 'Fixed (general) / ad valorem (with consideration)'
    }
  ]

  const features = [
    {
      icon: Stamp,
      title: 'Legally Binding E-Stamping',
      description: 'Instant online stamp duty payment & procurement across all Indian states with tamper-proof digital stamp certificates.'
    },
    {
      icon: FileSignature,
      title: 'Aadhaar eSign & Digital Signatures',
      description: 'Secure multi-party document signing via OTP or biometric authentication compliant with Section 5 of IT Act 2000.'
    },
    {
      icon: Lock,
      title: 'Bank-Grade Encryption & Audit Trail',
      description: '256-bit SHA encryption, precise time-stamping, and detailed audit trails ensuring non-repudiation in court.'
    },
    {
      icon: Zap,
      title: 'Seamless API Integration',
      description: 'Embed e-Stamp and e-Sign workflows directly into your web applications, ERPs, and CRMs with developer-friendly APIs.'
    },
    {
      icon: Layers,
      title: 'Smart Document Templating',
      description: 'Automate contract creation by merging dynamic data into pre-approved legal templates instantly.'
    },
    {
      icon: Clock,
      title: '90% Faster Turnaround Time',
      description: 'Eliminate paper handling, physical stamp vendor visits, and courier delays. Execute contracts in minutes.'
    }
  ]

  const steps = [
    {
      step: '01',
      title: 'Upload or Generate Contract',
      desc: 'Upload existing PDF documents or generate dynamic contracts using custom standard templates.'
    },
    {
      step: '02',
      title: 'Auto-Fetch E-Stamp',
      desc: 'System calculates state-specific stamp duty and attaches digital stamp certificates automatically.'
    },
    {
      step: '03',
      title: 'Aadhaar / Digital Signing',
      desc: 'Signers receive instant secure links to authorize documents via Aadhaar OTP or DSC.'
    },
    {
      step: '04',
      title: 'Instant Executed Document',
      desc: 'Download fully executed, legally valid stamped & signed documents with full audit trail.'
    }
  ]

  const useCases = [
    {
      icon: Building2,
      title: 'Fintech & Banking',
      desc: 'Loan agreements, sanction letters, NACH mandates, and customer onboarding documents.'
    },
    {
      icon: Briefcase,
      title: 'HR & Enterprise Onboarding',
      desc: 'Offer letters, employment contracts, NDA agreements, and vendor onboarding docs.'
    },
    {
      icon: FileCheck,
      title: 'Real Estate & Leasing',
      desc: 'Rental agreements, property lease deeds, channel partner agreements, and MOUs.'
    },
    {
      icon: Scale,
      title: 'Legal & Procurement',
      desc: 'Service level agreements (SLAs), vendor contracts, power of attorney, and affidavits.'
    }
  ]

  const faqs = [
    {
      q: 'Is E-Sign legally valid in India?',
      a: 'Yes. E-Sign backed by Aadhaar OTP or Digital Signature Certificate (DSC) is recognized as legally valid under Section 5 of the Information Technology Act, 2000 and is admissible in court under Section 65B of the Indian Evidence Act.'
    },
    {
      q: 'How does Digital E-Stamping work?',
      a: 'Our platform integrates directly with state stamp duty portals to generate digital stamp certificates. The stamp details are cryptographically merged into your document, fulfilling state stamp duty requirements electronically.'
    },
    {
      q: 'Which states support E-Stamping?',
      a: 'We support digital e-stamping across major Indian states including Maharashtra, Delhi, Karnataka, Tamil Nadu, Telangana, Gujarat, Uttar Pradesh, Haryana, West Bengal, and more.'
    },
    {
      q: 'Can multi-party agreements be signed remotely?',
      a: 'Absolutely. You can define sequential or parallel signing orders for multiple parties. Each signatory receives an encrypted link to authenticate and sign from any mobile or desktop browser.'
    },
    {
      q: 'How can we integrate E-Stamp & E-Sign into our software?',
      a: 'DigitalRakshak provides RESTful APIs and SDKs with comprehensive documentation. Integration can be completed within hours with webhooks for real-time document status callbacks.'
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-[#02050f] text-white selection:bg-[#76bbf8] selection:text-[#02050f]">

      {/* ── 1. HERO SECTION (Identical visual design to API theme) ── */}
      <section className="relative min-h-0 lg:min-h-[100dvh] overflow-hidden px-[5%] lg:px-[6%] flex flex-col justify-between pt-24 sm:pt-28 lg:pt-24 pb-12 sm:pb-16">
        {/* Background Video with instant poster and gradient overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/bg-frame-poster.jpg"
            className="w-full h-full object-cover object-bottom"
          >
            <source src="/bg-frame.webm" type="video/webm" />
            <source src="/bg-frame.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/40 to-[#02050f] lg:to-transparent" />
        </div>

        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-[#0088ff]/15 via-purple-600/10 to-transparent blur-[120px] pointer-events-none" />

        {/* Center Hero content */}
        <div className="relative z-10 flex-1 flex items-center py-4 lg:py-8">
          <div className="w-full max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-8 xl:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col justify-between text-left">
              <div>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-[#76bbf8] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                  <Stamp className="w-3.5 h-3.5 text-[#76bbf8]" />
                  Legal, Swift &amp; Paperless Documentation
                </span>
                <h1 className="text-white text-[clamp(28px,6.5vw,54px)] font-black leading-[1.1] tracking-tight">
                  Next-Gen{' '}
                  <span className="bg-gradient-to-r from-[#76bbf8] via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    E-Stamp &amp; E-Sign
                  </span>{' '}
                  Solutions
                </h1>
                <p className="text-white text-[15px] sm:text-[18px] lg:text-[21px] font-medium mt-3 sm:mt-4 leading-snug">
                  Automate contract execution with legally binding digital stamp papers and instant Aadhaar e-Signatures. Built for enterprises, startups, and financial institutions.
                </p>
              </div>

              <div className="mt-5 sm:mt-7 lg:mt-9">
                <p className="text-white/80 text-[14px] sm:text-[15.5px] font-normal leading-relaxed max-w-[560px]">
                  Eliminate physical stamp paper procurement, vendor queues, and courier delays. Procure digital non-judicial stamp papers and execute contracts with biometric &amp; Aadhaar OTP authentication in minutes.
                </p>

                <div className="flex gap-3 sm:gap-4 mt-5 sm:mt-6 items-center flex-wrap">
                  <a
                    href="#contact"
                    className="bg-[#B0DAFF] hover:bg-[#76bbf8] text-[#0a1e36] font-semibold text-[14px] sm:text-[15px] px-7 sm:px-8 py-3 rounded-[18px] shadow-[2px_2px_11.4px_0px_#00000040,_5px_-2px_8.7px_0px_#0084FF6B_inset] transition-all flex items-center gap-2 group"
                  >
                    <span>Get Started Free</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="#contact"
                    className="bg-white hover:bg-gray-100 text-[#0a1e36] font-semibold text-[14px] sm:text-[15px] px-7 sm:px-8 py-3 rounded-[18px] shadow-[2px_2px_11.4px_0px_#00000040,_5px_-2px_8.7px_0px_#0084FF6B_inset] transition-all"
                  >
                    Book Demo
                  </a>
                </div>

                {/* Capabilities bar */}
                <div className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8 pt-4 border-t border-white/10 flex-wrap text-white/80 text-[12.5px] sm:text-[13.5px]">
                  <span className="flex items-center gap-1.5">
                    <BadgeCheck className="w-4 h-4 text-[#76bbf8]" /> Multi-State E-Stamping
                  </span>
                  <span className="text-white/30 hidden sm:inline">•</span>
                  <span className="flex items-center gap-1.5">
                    <FileSignature className="w-4 h-4 text-[#76bbf8]" /> Aadhaar &amp; DSC eSign
                  </span>
                  <span className="text-white/30 hidden sm:inline">•</span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#76bbf8]" /> Section 5 IT Act Valid
                  </span>
                </div>
              </div>
            </div>

            {/* Right – product screenshots */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end items-center w-full mt-4 lg:mt-0">
              <div className="flex items-center gap-3 sm:gap-6 md:gap-8 w-full max-w-[620px] lg:max-w-none mx-auto">
                {/* Main card - left */}
                <div className="flex-[326] rounded-[18px] sm:rounded-[24px] lg:rounded-[28px] overflow-hidden shadow-2xl border border-white/15 aspect-[326/354] bg-[#0c101d] relative group">
                  <img
                    alt="E-Stamp & E-Sign Platform Preview"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    src={imgFrame19}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#02050f]/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-semibold text-white">Digital Stamp Verified</span>
                    </div>
                    <span className="text-[11px] text-gray-300 font-mono">100% Admissible</span>
                  </div>
                </div>

                {/* Right stacked preview cards */}
                <div className="flex-[175] flex flex-col justify-between self-stretch gap-2.5 sm:gap-4">
                  <div className="rounded-[14px] sm:rounded-[20px] lg:rounded-[24px] overflow-hidden shadow-2xl border border-white/15 aspect-square bg-[#0c101d] relative group">
                    <img
                      alt="Aadhaar eSign Workflow"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={imgRectangle6}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  </div>
                  <div className="rounded-[14px] sm:rounded-[20px] lg:rounded-[24px] overflow-hidden shadow-2xl border border-white/15 aspect-square bg-[#0c101d] relative group">
                    <img
                      alt="Audit Trail Certificate"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={imgRectangle7}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. OVERVIEW & KEY HIGHLIGHTS (6 FEATURES) ── */}
      <section className="relative px-[5%] lg:px-[6%] py-16 sm:py-24 bg-[#050814] border-y border-white/10 overflow-hidden">
        {/* Ambient Lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-[#76bbf8] text-xs font-semibold uppercase tracking-wider mb-3">
              Core Capabilities
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Why Choose DigitalRakshak E-Stamp &amp; E-Sign?
            </h2>
            <p className="text-gray-300 text-base md:text-lg mt-4 leading-relaxed">
              Streamline document lifecycles with bank-grade security, instant state stamp duty processing, and 100% legal admissibility under Indian law.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="p-7 rounded-[26px] bg-[#0c101d]/90 border border-white/10 hover:border-[#76bbf8]/50 shadow-[0_15px_35px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1.5 group backdrop-blur-xl relative overflow-hidden flex flex-col justify-between"
              >
                {/* Subtle hover gradient sheen */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-[#76bbf8]/20 transition-all pointer-events-none" />

                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#0088FF]/20 border border-[#38bdf8]/40 text-[#76bbf8] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_22px_rgba(0,136,255,0.4)] transition-all">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#76bbf8] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. DOCUMENT TYPES SUPPORTED SECTION (Blue frame container) ── */}
      <section className="relative px-[5%] lg:px-[6%] py-16 sm:py-24 bg-[#02050f] overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[300px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="bg-[#0b0f1d]/95 backdrop-blur-2xl border border-white/15 rounded-[28px] sm:rounded-[36px] p-8 md:p-14 shadow-[0_0_50px_rgba(22,119,255,0.2)] relative overflow-hidden">
            {/* Ambient Corner Accents */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-8">
              {/* Category Pill Tag */}
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-500/15 border border-blue-400/30 text-[#76bbf8] rounded-full text-xs font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-[#76bbf8] animate-pulse" />
                  Document Types
                </div>
              </div>

              {/* Title */}
              <div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight max-w-3xl">
                  What you can print on{' '}
                  <span className="bg-gradient-to-r from-[#76bbf8] via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    e-Stamp Paper
                  </span>
                </h2>
                <div className="w-16 h-1 bg-[#76bbf8] rounded-full mt-4" />
              </div>

              {/* Document Pills Grid */}
              <div className="flex flex-wrap gap-3 md:gap-4 pt-2">
                {documentTypes.map((doc, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-[#13192b]/80 border border-white/10 shadow-sm hover:border-[#76bbf8]/60 hover:bg-[#1a233d] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group cursor-default"
                  >
                    <Check className="w-4 h-4 text-[#76bbf8] group-hover:scale-110 transition-transform stroke-[2.5]" />
                    <span className="text-sm md:text-base font-semibold text-white">
                      {doc}
                    </span>
                  </div>
                ))}
              </div>

              {/* AI & Verification Note */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-3 text-sm text-gray-300">
                <div className="p-2 rounded-lg bg-blue-500/20 text-[#76bbf8] border border-blue-400/30 shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <p className="leading-relaxed">
                  <span className="font-semibold text-white">Don&apos;t see yours?</span> Just upload it — the AI handles most Document types, and our team flags anything that needs a second look.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. STAMP DUTY REFERENCE - COMMON ARTICLE CODES ── */}
      <section className="relative px-[5%] lg:px-[6%] py-16 sm:py-24 bg-[#050814] border-y border-white/10 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-blue-500/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto space-y-10 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-amber-500/15 via-purple-500/15 to-blue-500/15 border border-amber-500/30 text-amber-300 rounded-full text-xs font-extrabold uppercase tracking-wider shadow-sm">
              <BookOpen className="w-3.5 h-3.5" />
              Stamp Duty Reference
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Common Article Codes —{' '}
              <span className="bg-gradient-to-r from-amber-400 via-purple-400 to-[#76bbf8] bg-clip-text text-transparent">
                Schedule I, Indian Stamp Act 1899
              </span>
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              The Indian Stamp Act defines ~65 article codes in Schedule I. Rates vary by state — explore the table below for the most frequently stamped document types.
            </p>
          </div>

          {/* Glowing Animated Toggle Button */}
          <div className="flex flex-col items-center justify-center pt-2 gap-3">
            <div className="relative group cursor-pointer">
              {/* Outer Pulsing Glow Aura */}
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-amber-500 via-purple-600 to-blue-600 opacity-65 blur-md group-hover:opacity-100 transition duration-500 animate-pulse-halo" />

              {/* Animated Gradient Border Frame */}
              <div className="relative p-[2px] rounded-full bg-gradient-to-r from-amber-500 via-purple-500 to-blue-600 shadow-xl">
                <button
                  type="button"
                  onClick={() => setIsTableExpanded(!isTableExpanded)}
                  className="relative overflow-hidden bg-[#0c101d] hover:bg-[#121629] text-white rounded-full px-8 h-14 shadow-inner flex items-center gap-3.5 font-bold transition-all duration-300 transform active:scale-95 group-hover:scale-[1.01]"
                >
                  {/* Shimmer Light Sheen */}
                  <span className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                  {/* Pulsing Live Beacon Indicator */}
                  <span className="relative flex h-3 w-3 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]"></span>
                  </span>

                  {/* Button Label & Icons */}
                  <span className="relative flex items-center gap-2.5 text-base md:text-lg tracking-tight">
                    {isTableExpanded ? (
                      <>
                        <span className="bg-gradient-to-r from-amber-300 via-purple-300 to-blue-300 bg-clip-text text-transparent font-black">
                          Hide Common Article Codes Table
                        </span>
                        <div className="p-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
                          <ChevronUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                        </div>
                      </>
                    ) : (
                      <>
                        <span className="bg-gradient-to-r from-amber-300 via-purple-300 to-blue-300 bg-clip-text text-transparent font-black">
                          View Common Article Codes Table
                        </span>
                        <span className="ml-1 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-black bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          Schedule I
                        </span>
                        <div className="p-1 rounded-full bg-blue-500/20 text-[#76bbf8] border border-blue-500/30">
                          <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                        </div>
                      </>
                    )}
                  </span>
                </button>
              </div>
            </div>

            <p className="text-xs text-gray-400 font-medium flex items-center gap-1.5 animate-pulse">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Click to toggle interactive article code schedule &amp; search
            </p>
          </div>

          {/* Collapsible Table Section */}
          <div
            className={`grid transition-[grid-template-rows,opacity,margin-top] duration-500 ease-in-out ${
              isTableExpanded
                ? 'grid-rows-[1fr] opacity-100 mt-8'
                : 'grid-rows-[0fr] opacity-0 mt-0 pointer-events-none'
            }`}
          >
            <div className="overflow-hidden space-y-6">
              {/* Controls Bar */}
              <div className="p-4 rounded-2xl bg-[#0e1424] border border-white/15 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Search Box */}
                <div className="relative w-full sm:w-80">
                  <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search Article or Document..."
                    value={articleSearch}
                    onChange={(e) => setArticleSearch(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 text-xs md:text-sm bg-[#151c30] text-white placeholder-gray-400 rounded-xl border border-white/15 focus:outline-none focus:border-[#76bbf8] focus:ring-1 focus:ring-[#76bbf8] transition-all"
                  />
                </div>

                {/* Category Filter Pills */}
                <div className="flex flex-wrap items-center justify-center gap-1.5 w-full sm:w-auto">
                  {['All', 'Agreements', 'Property & Lease', 'Affidavits & PoA'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setArticleCategory(cat)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                        articleCategory === cat
                          ? 'bg-gradient-to-r from-amber-500 via-purple-600 to-blue-600 text-white shadow-lg scale-105'
                          : 'bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Table Container */}
              <div className="relative rounded-2xl md:rounded-3xl border border-white/15 bg-[#0e1424]/90 shadow-2xl overflow-hidden backdrop-blur-xl">
                {/* Top Animated Gradient Accent Bar */}
                <div className="h-1.5 bg-gradient-to-r from-amber-500 via-purple-600 to-blue-600" />

                {/* Mobile scroll hint */}
                <div className="sm:hidden px-4 py-2 bg-white/5 border-b border-white/10 text-[11px] text-gray-400 text-center font-medium flex items-center justify-center gap-1.5">
                  <span>Scroll horizontally to view full table</span>
                  <span className="animate-pulse">→</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[700px]">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-950/80 via-purple-950/80 to-indigo-950/80 text-white text-xs md:text-sm uppercase tracking-wider font-semibold border-b border-white/15">
                        <th className="py-4 px-6 w-36">Article No.</th>
                        <th className="py-4 px-6 w-56">Document Type</th>
                        <th className="py-4 px-6">Common Use Case</th>
                        <th className="py-4 px-6 w-64">Typical Basis</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10 text-sm">
                      {articleCodes
                        .filter((item) => {
                          const matchesSearch =
                            item.art.toLowerCase().includes(articleSearch.toLowerCase()) ||
                            item.docType.toLowerCase().includes(articleSearch.toLowerCase()) ||
                            item.useCase.toLowerCase().includes(articleSearch.toLowerCase()) ||
                            item.basis.toLowerCase().includes(articleSearch.toLowerCase())
                          if (articleCategory === 'All') return matchesSearch
                          if (articleCategory === 'Affidavits & PoA')
                            return matchesSearch && (item.art === 'Art. 3' || item.art === 'Art. 48')
                          if (articleCategory === 'Agreements')
                            return matchesSearch && (item.art === 'Art. 5' || item.art === 'Art. 15')
                          if (articleCategory === 'Property & Lease')
                            return (
                              matchesSearch &&
                              (item.art === 'Art. 23' || item.art === 'Art. 35' || item.art === 'Art. 40')
                            )
                          return matchesSearch
                        })
                        .map((item, idx) => (
                          <tr
                            key={idx}
                            className="hover:bg-white/[0.04] transition-all duration-200 group relative"
                          >
                            <td className="py-4 px-6 font-bold">
                              <span className="inline-block px-3 py-1 rounded-xl bg-amber-500/10 text-amber-300 text-xs md:text-sm font-black border border-amber-500/20 group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-purple-600 group-hover:text-white group-hover:border-transparent transition-all duration-300 group-hover:shadow-md">
                                {item.art}
                              </span>
                            </td>
                            <td className="py-4 px-6 font-bold text-white group-hover:text-[#76bbf8] transition-colors">
                              {item.docType}
                            </td>
                            <td className="py-4 px-6 text-gray-300 leading-relaxed">
                              {item.useCase}
                            </td>
                            <td className="py-4 px-6 font-medium text-gray-200">
                              {item.basis}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Footer Note */}
              <p className="text-xs md:text-sm text-gray-400 text-center max-w-4xl mx-auto leading-relaxed">
                <span className="font-semibold text-white">Note:</span> Article codes and rates are amended periodically by state legislatures. Always verify the current rate with your state&apos;s stamp duty authority before executing documents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. HOW IT WORKS WORKFLOW ── */}
      <section className="relative px-[5%] lg:px-[6%] py-16 sm:py-24 bg-[#02050f] overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-[#76bbf8] text-xs font-semibold uppercase tracking-wider mb-3">
              Execution Lifecycle
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              How E-Stamping &amp; E-Sign Work
            </h2>
            <p className="text-gray-300 text-base md:text-lg mt-4 leading-relaxed">
              Execute fully compliant legal contracts in 4 simple automated steps.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, idx) => (
              <div
                key={idx}
                className="relative p-7 rounded-[26px] bg-[#0c101d]/90 border border-white/10 hover:border-[#76bbf8]/50 shadow-xl flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5"
              >
                <div>
                  <span className="text-4xl font-black bg-gradient-to-r from-[#76bbf8] to-purple-400 bg-clip-text text-transparent mb-4 block font-mono">
                    {s.step}
                  </span>
                  <h3 className="text-lg font-bold mb-2 text-white group-hover:text-[#76bbf8] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-[#76bbf8]">
                  <CheckCircle2 className="w-4 h-4 text-[#76bbf8]" />
                  Instant &amp; Automated
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. USE CASES / INDUSTRY SOLUTIONS ── */}
      <section className="relative px-[5%] lg:px-[6%] py-16 sm:py-24 bg-[#050814] border-y border-white/10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-[#76bbf8] text-xs font-semibold uppercase tracking-wider mb-3">
              Enterprise Adaptability
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Tailored Solutions for Every Industry
            </h2>
            <p className="text-gray-300 text-base md:text-lg mt-4 leading-relaxed">
              Empowering diverse verticals with fast, secure, and legally enforceable digital execution.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((uc, i) => (
              <div
                key={i}
                className="p-7 rounded-[26px] bg-[#0c101d]/90 border border-white/10 hover:border-purple-500/50 hover:bg-[#121629] transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 text-[#76bbf8] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <uc.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white group-hover:text-purple-300 transition-colors">
                    {uc.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {uc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FREQUENTLY ASKED QUESTIONS ── */}
      <section className="relative px-[5%] lg:px-[6%] py-16 sm:py-24 bg-[#02050f] overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-[#76bbf8] text-xs font-semibold uppercase tracking-wider mb-3">
              FAQ &amp; Knowledge Base
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-300 text-base md:text-lg mt-4">
              Everything you need to know about E-Stamping &amp; E-Sign compliance
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-[#0c101d]/90 backdrop-blur-xl overflow-hidden transition-all duration-200 hover:border-white/20"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 sm:p-6 text-left font-semibold text-base sm:text-lg text-white flex items-center justify-between gap-4 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <div
                      className={`w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#76bbf8] bg-blue-500/10 border-blue-400/30' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-gray-300 text-sm sm:text-base leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 8. BOTTOM CTA SECTION (Interactive enterprise form matching API theme) ── */}
      <section id="contact" className="relative py-12 sm:py-16 px-[5%] lg:px-[6%] bg-[#02050f]">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#0e1424] border border-white/15 rounded-[28px] sm:rounded-[36px] lg:rounded-[40px] overflow-hidden grid lg:grid-cols-12 shadow-[0_0_50px_rgba(22,119,255,0.2)]">
            {/* Left Form: Service requirement selector and CTAs */}
            <div className="lg:col-span-6 p-7 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-[#76bbf8] text-xs font-semibold tracking-wider uppercase mb-3">
                  Enterprise Onboarding
                </span>
                <h2 className="text-white text-[28px] sm:text-[34px] lg:text-[42px] font-bold leading-tight">
                  Ready to Go 100% Paperless?
                </h2>
                <p className="text-white/80 text-[14px] sm:text-[16px] font-normal leading-relaxed mt-2 mb-6">
                  Transform your document execution workflows today with DigitalRakshak&apos;s E-Stamp &amp; E-Sign infrastructure.
                </p>

                {submitted ? (
                  <div className="bg-emerald-950/60 border border-emerald-500/30 rounded-[20px] p-6 text-center my-6">
                    <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                    <h4 className="text-white font-bold text-lg mb-1">Request Received!</h4>
                    <p className="text-white/80 text-sm">
                      Our Digital Trust legal and integration specialists will connect with you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleCtaSubmit} className="space-y-4">
                    {/* Select Requirement */}
                    <div className="relative">
                      <label className="block text-white/90 text-[13.5px] font-medium mb-1.5">
                        Select Solutions / API Requirements:
                      </label>
                      <button
                        type="button"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="w-full flex items-center justify-between bg-[#151c30] text-white text-[14px] sm:text-[15px] rounded-[16px] px-4 py-3 border border-white/15 hover:border-blue-400/50 transition-colors text-left"
                      >
                        <span className="truncate pr-2">
                          {isAllSelected
                            ? 'All Solutions (Complete Digital Trust Suite)'
                            : selectedServices.length === 0
                            ? 'Select Solutions...'
                            : selectedServices.length === 1
                            ? selectedServices[0]
                            : `${selectedServices.length} Solutions Selected`}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-white/70 shrink-0 transition-transform ${
                            dropdownOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {dropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-[#12182b] border border-white/15 rounded-[18px] p-2.5 z-30 shadow-2xl space-y-1">
                          <button
                            type="button"
                            onClick={toggleSelectAll}
                            className="w-full flex items-center gap-2.5 px-3 py-2 rounded-[10px] text-xs font-semibold text-[#76bbf8] hover:bg-white/5 text-left border-b border-white/10 mb-1"
                          >
                            <span
                              className={`w-4 h-4 rounded border flex items-center justify-center ${
                                isAllSelected
                                  ? 'bg-blue-600 border-blue-500 text-white'
                                  : 'border-white/30'
                              }`}
                            >
                              {isAllSelected && <Check className="w-3 h-3 stroke-[3]" />}
                            </span>
                            Select All Solutions
                          </button>
                          {ctaOptions.map((opt) => {
                            const isChecked = selectedServices.includes(opt)
                            return (
                              <button
                                key={opt}
                                type="button"
                                onClick={() => toggleOption(opt)}
                                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-[10px] text-xs text-white/90 hover:bg-white/5 text-left"
                              >
                                <span
                                  className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                                    isChecked
                                      ? 'bg-blue-600 border-blue-500 text-white'
                                      : 'border-white/30'
                                  }`}
                                >
                                  {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                                </span>
                                <span className="truncate">{opt}</span>
                              </button>
                            )
                          })}
                        </div>
                      )}
                    </div>

                    {/* Email Input */}
                    <div>
                      <label className="block text-white/90 text-[13.5px] font-medium mb-1.5">
                        Work Email:
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-[#151c30] text-white text-[14px] sm:text-[15px] rounded-[16px] px-4 py-3 border border-white/15 focus:outline-none focus:border-[#76bbf8] focus:ring-1 focus:ring-[#76bbf8] placeholder-white/30"
                      />
                    </div>

                    {/* Company Input */}
                    <div>
                      <label className="block text-white/90 text-[13.5px] font-medium mb-1.5">
                        Company / Organization:
                      </label>
                      <input
                        type="text"
                        placeholder="Your Company Name"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full bg-[#151c30] text-white text-[14px] sm:text-[15px] rounded-[16px] px-4 py-3 border border-white/15 focus:outline-none focus:border-[#76bbf8] focus:ring-1 focus:ring-[#76bbf8] placeholder-white/30"
                      />
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <button
                        type="submit"
                        className="flex-1 bg-[#B0DAFF] hover:bg-[#76bbf8] text-[#0a1e36] font-semibold text-[14.5px] py-3.5 px-6 rounded-[16px] shadow-[2px_2px_11.4px_0px_#00000040,_5px_-2px_8.7px_0px_#0084FF6B_inset] transition-all flex items-center justify-center gap-2 group"
                      >
                        <span>Contact US Now</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                      <button
                        type="button"
                        onClick={() => router.push('/register')}
                        className="sm:w-auto bg-white hover:bg-gray-100 text-[#0a1e36] font-semibold text-[14.5px] py-3.5 px-6 rounded-[16px] shadow-[2px_2px_11.4px_0px_#00000040,_5px_-2px_8.7px_0px_#0084FF6B_inset] transition-all flex items-center justify-center gap-2"
                      >
                        <Calendar className="w-4 h-4 text-blue-600" />
                        <span>Book Demo</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-white/60 text-xs">
                <span>⚡ Sub-second execution speeds</span>
                <span>🔒 256-Bit SHA Encryption</span>
              </div>
            </div>

            {/* Right Information / Value Highlights */}
            <div className="lg:col-span-6 bg-gradient-to-br from-[#121930] via-[#101526] to-[#0c101d] p-7 sm:p-10 lg:p-12 border-t lg:border-t-0 lg:border-l border-white/15 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-[#76bbf8] text-xs font-semibold uppercase tracking-wider mb-4">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#76bbf8]" />
                  Enterprise Grade Assurance
                </div>
                <h3 className="text-white text-[22px] sm:text-[26px] font-bold leading-snug mb-4">
                  Legally Binding, State-Compliant &amp; Seamlessly Integrated
                </h3>
                <p className="text-white/80 text-[14px] sm:text-[15px] leading-relaxed mb-6">
                  DigitalRakshak enables digital legal workflows for leading BFSI, Real Estate, and Tech organizations across India.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
                    <div className="p-2 rounded-xl bg-blue-500/20 text-[#76bbf8] shrink-0">
                      <Scale className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-semibold">
                        Section 65B Admissible Evidence
                      </h4>
                      <p className="text-white/70 text-xs mt-0.5 leading-relaxed">
                        Comprehensive cryptographic audit trails, IP timestamps, and biometric hashes recognized in court.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
                    <div className="p-2 rounded-xl bg-purple-500/20 text-purple-300 shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-semibold">
                        90% Cycle Time Reduction
                      </h4>
                      <p className="text-white/70 text-xs mt-0.5 leading-relaxed">
                        Convert multi-day physical signing and stamping loops into instant remote execution in under 2 minutes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
                    <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-300 shrink-0">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-semibold">
                        Ready-to-Use APIs &amp; Webhooks
                      </h4>
                      <p className="text-white/70 text-xs mt-0.5 leading-relaxed">
                        Direct REST API endpoints with status callbacks for seamless integration into your existing systems.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/70">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#76bbf8]" />
                  Dedicated Technical Support
                </span>
                <span className="font-mono text-[#76bbf8]">99.9% API Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
