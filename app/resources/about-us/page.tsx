"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  Server,
  Lock,
  Cpu,
  Globe,
  Eye,
  Target,
  Monitor,
  Settings,
  Fingerprint,
  Scale,
  CheckSquare,
  Combine,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Users,
  Activity,
  Award,
} from "lucide-react";

export default function AboutUsPage() {
  const industries = [
    "Fintech & Banking",
    "Insurance",
    "E-commerce & Marketplaces",
    "HR Tech & Staffing Agencies",
    "Healthcare & Logistics",
    "Government Organizations",
  ];

  return (
    <div className="relative min-h-screen bg-[#02050f] text-white pt-24 sm:pt-28 pb-16 overflow-hidden">
      {/* ── AMBIENT BACKGROUND GLOWS ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none -z-10">
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute top-32 right-1/4 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[130px]" />
      </div>

      {/* ── 1. HERO BANNER ── */}
      <section className="relative px-[5%] lg:px-[6%] py-12 lg:py-20 border-b border-white/[0.08]">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 font-semibold text-xs uppercase tracking-wider shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#76bbf8] animate-pulse" />
                <span>DigitalRakshak Platform</span>
              </div>

              <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white leading-[1.12] tracking-tight">
                Building the Infrastructure <br />
                for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#76bbf8] via-blue-400 to-indigo-300">
                  Trusted Digital Business
                </span>
              </h1>

              <p className="text-white/75 text-base sm:text-lg leading-relaxed max-w-2xl">
                DigitalRakshak builds the backend infrastructure that powers secure hiring, verification, and compliance. We combine real-time verification tech, compliance automation, and secure software development to give businesses a single, accountable partner for high-stakes operations.
              </p>

              <div className="flex flex-wrap gap-4 pt-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#B0DAFF] hover:bg-[#76bbf8] text-[#0a1e36] font-bold text-sm sm:text-base px-8 py-3.5 rounded-[16px] shadow-[0_0_25px_rgba(118,187,248,0.35)] hover:scale-[1.02] transition-all"
                >
                  <span>Partner With Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#stack"
                  className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-[16px] border border-white/15 transition-all"
                >
                  <span>Explore Our Stack</span>
                </Link>
              </div>

              {/* SLA & Highlights strip */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-white/10 max-w-lg">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white">&lt;300ms</div>
                  <div className="text-xs text-white/50">API SLA Latency</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white">99.99%</div>
                  <div className="text-xs text-white/50">System Uptime</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white">100%</div>
                  <div className="text-xs text-white/50">Official Registries</div>
                </div>
              </div>
            </div>

            {/* Right Interactive Architecture Visual */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-[32px] blur-2xl pointer-events-none" />

              <div className="relative bg-[#070e20]/80 backdrop-blur-2xl rounded-[28px] border border-white/15 p-6 sm:p-8 space-y-6 shadow-2xl">
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <div>
                    <h3 className="text-white font-bold text-sm">Trust &amp; Security Infrastructure</h3>
                    <p className="text-white/50 text-xs">Architecting digital verification nodes</p>
                  </div>
                  <span className="bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                    ISO Verified
                  </span>
                </div>

                {/* Simulated Network Hub Canvas */}
                <div className="relative h-56 bg-[#040817] rounded-2xl border border-white/10 p-4 overflow-hidden flex items-center justify-center">
                  {/* Subtle Grid backdrop */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:20px_20px]" />

                  {/* SVG Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
                    <line x1="50%" y1="50%" x2="20%" y2="25%" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4" opacity="0.4" />
                    <line x1="50%" y1="50%" x2="20%" y2="75%" stroke="#818cf8" strokeWidth="1.5" strokeDasharray="4" opacity="0.4" />
                    <line x1="50%" y1="50%" x2="80%" y2="25%" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4" opacity="0.4" />
                    <line x1="50%" y1="50%" x2="80%" y2="75%" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4" opacity="0.4" />
                  </svg>

                  {/* Central Node */}
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center shadow-[0_0_35px_rgba(59,130,246,0.6)] border border-blue-300/40">
                    <Shield className="w-8 h-8 text-white" />
                    <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border border-[#02050f]"></span>
                    </span>
                  </div>

                  {/* Orbiting Satellites */}
                  <div
                    title="Real-time Server Node"
                    className="absolute top-5 left-6 w-11 h-11 rounded-xl bg-[#091326] border border-blue-400/30 text-blue-300 flex items-center justify-center hover:scale-110 transition-transform shadow-lg cursor-pointer"
                  >
                    <Server className="w-5 h-5" />
                  </div>
                  <div
                    title="Zero-Trust Encryption"
                    className="absolute bottom-5 left-6 w-11 h-11 rounded-xl bg-[#091326] border border-indigo-400/30 text-indigo-300 flex items-center justify-center hover:scale-110 transition-transform shadow-lg cursor-pointer"
                  >
                    <Lock className="w-5 h-5" />
                  </div>
                  <div
                    title="AI Compute Engine"
                    className="absolute top-5 right-6 w-11 h-11 rounded-xl bg-[#091326] border border-purple-400/30 text-purple-300 flex items-center justify-center hover:scale-110 transition-transform shadow-lg cursor-pointer"
                  >
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div
                    title="Global Registry Network"
                    className="absolute bottom-5 right-6 w-11 h-11 rounded-xl bg-[#091326] border border-cyan-400/30 text-cyan-300 flex items-center justify-center hover:scale-110 transition-transform shadow-lg cursor-pointer"
                  >
                    <Globe className="w-5 h-5" />
                  </div>
                </div>

                {/* Bottom Badges */}
                <div className="flex justify-between items-center text-[11px] text-white/60 font-semibold tracking-wider uppercase pt-2">
                  <span className="flex items-center gap-1 text-blue-300">
                    <Activity className="w-3.5 h-3.5" /> Real-time API
                  </span>
                  <span className="flex items-center gap-1 text-indigo-300">
                    <Lock className="w-3.5 h-3.5" /> Zero-Trust
                  </span>
                  <span className="flex items-center gap-1 text-emerald-300">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Compliant
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. WHO WE ARE (CORE IDENTITY) ── */}
      <section className="relative px-[5%] lg:px-[6%] py-16 sm:py-24 border-b border-white/[0.08]">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Text */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 font-semibold text-xs tracking-wider uppercase shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#76bbf8]" />
                <span>Our Core Identity</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                Who We Are
              </h2>

              <div className="space-y-5 text-white/75 leading-relaxed text-base sm:text-lg">
                <p>
                  Originally established as a specialized due diligence and HR verification firm, DigitalRakshak has scaled into a comprehensive infrastructure partner for organizations navigating India’s moving regulatory compliance framework.
                </p>
                <p>
                  Today, we help businesses verify identities, secure sensitive data, and manage global operations under a single, compliance-forward platform. By bridging the gap between public data registries and daily business workflows, we eliminate trust fragmentation so your teams can scale with confidence.
                </p>
              </div>

              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className="bg-[#070e20] border border-white/10 rounded-2xl p-4">
                  <div className="text-2xl font-bold text-white mb-1">Single Partner</div>
                  <p className="text-xs text-white/60">Unified API stack replacing fragmented vendors.</p>
                </div>
                <div className="bg-[#070e20] border border-white/10 rounded-2xl p-4">
                  <div className="text-2xl font-bold text-white mb-1">Zero Trust</div>
                  <p className="text-xs text-white/60">Strict 256-bit AES encryption with complete auditability.</p>
                </div>
              </div>
            </div>

            {/* Right Team / Operation Visual */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-[32px] blur-2xl opacity-40 group-hover:opacity-60 transition duration-700 pointer-events-none" />

              <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-[#070e20] shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&q=80"
                  alt="DigitalRakshak Leadership and Team"
                  width={800}
                  height={530}
                  className="object-cover w-full h-[360px] sm:h-[440px] opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02050f] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#050b1c]/80 backdrop-blur-md border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-[#76bbf8]">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">Engineering Trust at Scale</h4>
                      <p className="text-white/60 text-xs">Cross-functional team of security engineers and compliance legal analysts.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. VISION & MISSION ── */}
      <section className="relative px-[5%] lg:px-[6%] py-16 sm:py-24 border-b border-white/[0.08]">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span className="text-xs font-semibold text-blue-300 uppercase tracking-widest bg-blue-500/10 border border-blue-400/30 px-3.5 py-1.5 rounded-full shadow-sm">
              Focus &amp; Direction
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4">
              Vision &amp; Mission
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Vision Card */}
            <div className="bg-[#070e20]/80 rounded-[24px] p-8 sm:p-10 border border-white/10 shadow-xl hover:border-blue-400/40 hover:shadow-[0_0_35px_rgba(59,130,246,0.15)] transition-all flex flex-col justify-between">
              <div className="space-y-5">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/15 border border-blue-400/30 text-[#76bbf8] flex items-center justify-center shadow-inner">
                  <Eye className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                <p className="text-white/70 text-base leading-relaxed">
                  To be India’s most trusted digital verification ecosystem, empowering secure hiring, academic integrity, and financial services across the digital economy.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-[#070e20]/80 rounded-[24px] p-8 sm:p-10 border border-white/10 shadow-xl hover:border-indigo-400/40 hover:shadow-[0_0_35px_rgba(99,102,241,0.15)] transition-all flex flex-col justify-between">
              <div className="space-y-5">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/15 border border-indigo-400/30 text-indigo-300 flex items-center justify-center shadow-inner">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                <p className="text-white/70 text-base leading-relaxed">
                  To deliver real-time, compliant, and scalable digital identity and academic verifications for citizens and businesses using secure, global APIs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. INTEGRATED ECOSYSTEM STACK ── */}
      <section id="stack" className="relative px-[5%] lg:px-[6%] py-16 sm:py-24 border-b border-white/[0.08]">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold text-blue-300 uppercase tracking-widest bg-blue-500/10 border border-blue-400/30 px-3.5 py-1.5 rounded-full shadow-sm">
              Ecosystem Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 mb-4">
              Our Integrated Ecosystem Stack
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Instead of juggling a messy mix of point solutions, software vendors, and legal consultants, DigitalRakshak unifies your operations across three core, integrated layers:
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Trust Layer */}
            <div className="bg-[#070e20]/80 rounded-[24px] p-8 border border-white/10 shadow-lg flex flex-col justify-between hover:border-blue-400/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all">
              <div className="space-y-5">
                <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-400/30 text-[#76bbf8] flex items-center justify-center">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Trust Layer</h3>
                  <p className="text-white/60 text-xs sm:text-sm mt-1.5 leading-relaxed">
                    Core verification tools to protect your business from fraud.
                  </p>
                </div>
                <ul className="space-y-3 pt-3 border-t border-white/10 text-white/80 text-sm">
                  {["e-KYC & Identity Matching", "Background Verification (BGV)", "Financial Risk Intelligence"].map(
                    (item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#76bbf8]" />
                        <span>{item}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            {/* Technology Layer */}
            <div className="bg-[#070e20]/80 rounded-[24px] p-8 border border-white/10 shadow-lg flex flex-col justify-between hover:border-indigo-400/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] transition-all">
              <div className="space-y-5">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/15 border border-indigo-400/30 text-indigo-300 flex items-center justify-center">
                  <Monitor className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Technology Layer</h3>
                  <p className="text-white/60 text-xs sm:text-sm mt-1.5 leading-relaxed">
                    Secure software and AI automation built for strict data environments.
                  </p>
                </div>
                <ul className="space-y-3 pt-3 border-t border-white/10 text-white/80 text-sm">
                  {["AI-Driven Business Solutions", "Enterprise Cybersecurity", "Custom Software Development"].map(
                    (item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                        <span>{item}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            {/* Operations Layer */}
            <div className="bg-[#070e20]/80 rounded-[24px] p-8 border border-white/10 shadow-lg flex flex-col justify-between hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all">
              <div className="space-y-5">
                <div className="w-12 h-12 rounded-xl bg-purple-500/15 border border-purple-400/30 text-purple-300 flex items-center justify-center">
                  <Settings className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Operations Layer</h3>
                  <p className="text-white/60 text-xs sm:text-sm mt-1.5 leading-relaxed">
                    Human capital and cross-border regulatory enablement.
                  </p>
                </div>
                <ul className="space-y-3 pt-3 border-t border-white/10 text-white/80 text-sm">
                  {["HR Excellence & Workforce Suite", "Regulatory Advisory & Compliance", "Global Trade Enablement"].map(
                    (item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                        <span>{item}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. CORE VERTICALS ── */}
      <section className="relative px-[5%] lg:px-[6%] py-16 sm:py-24 border-b border-white/[0.08]">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold text-blue-300 uppercase tracking-widest bg-blue-500/10 border border-blue-400/30 px-3.5 py-1.5 rounded-full shadow-sm">
              Core Verticals
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4">
              Specialized Solutions for Global Scale
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Vertical 1 */}
            <div className="bg-[#070e20]/80 rounded-[24px] p-8 sm:p-10 border border-white/10 shadow-xl hover:border-blue-400/40 transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/15 border border-blue-400/30 text-[#76bbf8] flex items-center justify-center">
                  <Fingerprint className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white">ID-Stack Verification Service</h3>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  Our automated identity infrastructure. We provide high-throughput verification APIs that handle instant customer onboarding (KYC), corporate entity validation (KYB), and credential authentication at scale, ensuring you catch fraud right at the front door.
                </p>
              </div>
            </div>

            {/* Vertical 2 */}
            <div className="bg-[#070e20]/80 rounded-[24px] p-8 sm:p-10 border border-white/10 shadow-xl hover:border-indigo-400/40 transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/15 border border-indigo-400/30 text-indigo-300 flex items-center justify-center">
                  <Scale className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Governance, Risk, and Compliance Services (GRCS)
                </h3>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  Your shield against regulatory penalties and audit failures. We build compliance-first frameworks directly into your operations, making it easy to protect user data, stay aligned with evolving data privacy laws, and maintain strict risk oversight.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. WHY ENTERPRISES TRUST DIGITALRAKSHAK ── */}
      <section className="relative px-[5%] lg:px-[6%] py-16 sm:py-24 border-b border-white/[0.08]">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold text-blue-300 uppercase tracking-widest bg-blue-500/10 border border-blue-400/30 px-3.5 py-1.5 rounded-full shadow-sm">
              Enterprise Value
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4">
              Why Enterprises Trust DigitalRakshak
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Reason 1 */}
            <div className="bg-[#070e20]/70 rounded-[22px] p-8 border border-white/10 space-y-4 hover:border-blue-400/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-400/30 text-[#76bbf8] flex items-center justify-center">
                <CheckSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Single-Source Accountability</h3>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                Stop chasing multiple vendors. We handle the tech, the security, and the compliance tracking under one roof.
              </p>
            </div>

            {/* Reason 2 */}
            <div className="bg-[#070e20]/70 rounded-[22px] p-8 border border-white/10 space-y-4 hover:border-indigo-400/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/15 border border-indigo-400/30 text-indigo-300 flex items-center justify-center">
                <Combine className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Unified Domain Architecture</h3>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                Our systems are built to talk to each other seamlessly, removing data silos and reducing operational friction.
              </p>
            </div>

            {/* Reason 3 */}
            <div className="bg-[#070e20]/70 rounded-[22px] p-8 border border-white/10 space-y-4 hover:border-purple-400/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-500/15 border border-purple-400/30 text-purple-300 flex items-center justify-center">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Built for Global Expansion</h3>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                Whether you are verifying local talent or moving capital and operations across borders, our platform adapts to local and international frameworks alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. FINAL CTA & INDUSTRIES WE SERVE ── */}
      <section className="relative px-[5%] lg:px-[6%] py-16 sm:py-24">
        <div className="max-w-[1240px] mx-auto rounded-[32px] bg-gradient-to-r from-[#0d1c3e] via-[#091530] to-[#120f2e] border border-blue-500/30 p-8 sm:p-12 lg:p-16 shadow-[0_0_50px_rgba(22,119,255,0.25)] text-center relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-white font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight">
              Ready to de-risk your operations?
            </h2>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              Let&apos;s talk about anchoring your identity, security, and compliance pipelines on a platform built for enterprise scale.
            </p>

            <div className="pt-2 flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#B0DAFF] hover:bg-[#76bbf8] text-[#0a1e36] font-bold text-base px-9 py-4 rounded-[16px] shadow-xl hover:scale-[1.02] transition-all"
              >
                <span>Contact Our Experts</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Industries chips */}
            <div className="pt-10 border-t border-white/10 space-y-5">
              <h3 className="text-white font-bold text-xs uppercase tracking-widest text-blue-300">
                Industries We Serve
              </h3>
              <p className="text-white/60 text-xs sm:text-sm max-w-xl mx-auto">
                We support fast-growing startups, traditional financial institutions, and enterprise teams across:
              </p>
              <div className="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto">
                {industries.map((ind, idx) => (
                  <span
                    key={idx}
                    className="bg-white/10 text-white/90 border border-white/15 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-sm"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
