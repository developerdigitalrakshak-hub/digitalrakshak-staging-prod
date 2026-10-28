"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Briefcase,
  MapPin,
  Mail,
  Terminal,
  Cpu,
  ShieldAlert,
  Award,
  Star,
  HeartHandshake,
  Eye,
  Shield,
  Users,
  GraduationCap,
  MessagesSquare,
  Zap,
  ArrowRight,
  ChevronDown,
  Sparkles,
} from "lucide-react";

export default function CareersPage() {
  const [selectedDept, setSelectedDept] = useState<string>("All");

  const openings = [
    {
      title: "Backend Developers (Go / Python)",
      department: "Engineering",
      type: "Full-Time",
      location: "Bengaluru (Hybrid)",
      desc: "Architect low-latency distributed APIs, high-throughput database connection pools, and real-time verification pipelines.",
    },
    {
      title: "QA & Automation Engineers",
      department: "Engineering",
      type: "Full-Time",
      location: "Bengaluru (Hybrid)",
      desc: "Design end-to-end regression suites, mock third-party regulatory sandboxes, and ensure 99.99% system reliability.",
    },
    {
      title: "DevOps & Security Engineers",
      department: "Infrastructure",
      type: "Full-Time",
      location: "Bengaluru (Hybrid)",
      desc: "Maintain multi-region Kubernetes clusters, manage zero-trust IAM policies, and enforce automated vulnerability monitoring.",
    },
    {
      title: "Product Managers (Identity & API Platforms)",
      department: "Product",
      type: "Full-Time",
      location: "Bengaluru (Hybrid)",
      desc: "Lead the roadmap for Aadhaar, PAN, GST, and banking verification APIs, aligning developer experience with compliance.",
    },
    {
      title: "Compliance & Legal Analysts",
      department: "Legal",
      type: "Full-Time",
      location: "Mumbai / Bengaluru",
      desc: "Analyze DPDP Act compliance, monitor RBI & SEBI regulatory shifts, and provide authoritative guidance for partner workflows.",
    },
    {
      title: "Sales & Enterprise Growth Leads",
      department: "Growth",
      type: "Full-Time",
      location: "Mumbai (Hybrid)",
      desc: "Partner with tier-1 fintechs, banks, and enterprise HR platforms to scale identity verification and risk intelligence.",
    },
    {
      title: "Customer Success Managers",
      department: "Operations",
      type: "Full-Time",
      location: "Bengaluru",
      desc: "Own enterprise account onboarding, monitor production API health SLAs, and ensure seamless developer integrations.",
    },
  ];

  const departments = ["All", "Engineering", "Infrastructure", "Product", "Legal", "Growth", "Operations"];

  const filteredOpenings =
    selectedDept === "All"
      ? openings
      : openings.filter((role) => role.department === selectedDept);

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
                <span>Careers at DigitalRakshak</span>
              </div>

              <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white leading-[1.12] tracking-tight">
                Build the Future <br />
                of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#76bbf8] via-blue-400 to-indigo-300">
                  Digital Trust
                </span>
              </h1>

              <p className="text-white/75 text-base sm:text-lg leading-relaxed max-w-2xl">
                Join a team building the secure, scalable verification infrastructure that helps modern businesses across India operate with confidence.
              </p>

              <div className="flex flex-wrap gap-4 pt-3">
                <a
                  href="#openings"
                  className="inline-flex items-center justify-center gap-2 bg-[#B0DAFF] hover:bg-[#76bbf8] text-[#0a1e36] font-bold text-sm sm:text-base px-8 py-3.5 rounded-[16px] shadow-[0_0_25px_rgba(118,187,248,0.35)] hover:scale-[1.02] transition-all"
                >
                  <span>View Open Positions</span>
                  <ChevronDown className="w-4 h-4" />
                </a>
              </div>

              {/* High impact badges */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-white/10 max-w-lg">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white">50M+</div>
                  <div className="text-xs text-white/50">Verifications Run</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white">Zero Trust</div>
                  <div className="text-xs text-white/50">Core Architecture</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white">Continuous</div>
                  <div className="text-xs text-white/50">Learning Budget</div>
                </div>
              </div>
            </div>

            {/* Right Engineering Culture Card */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-[32px] blur-2xl pointer-events-none" />

              <div className="relative bg-[#070e20]/80 backdrop-blur-2xl rounded-[28px] border border-white/15 p-6 sm:p-8 space-y-6 shadow-2xl">
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <div>
                    <h3 className="text-white font-bold text-sm">Engineering Culture</h3>
                    <p className="text-white/50 text-xs">How we design, code, and deploy trust</p>
                  </div>
                  <span className="bg-blue-500/15 border border-blue-400/30 text-blue-300 text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider font-mono">
                    Go &amp; Python
                  </span>
                </div>

                {/* Grid of Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {[
                    { icon: Terminal, label: "Go/Python Stack", color: "text-[#76bbf8] bg-blue-500/15 border-blue-400/30" },
                    { icon: Cpu, label: "High-scale APIs", color: "text-emerald-400 bg-emerald-500/15 border-emerald-400/30" },
                    { icon: ShieldAlert, label: "Zero-Trust Sec", color: "text-indigo-400 bg-indigo-500/15 border-indigo-400/30" },
                    { icon: Award, label: "Learning Budget", color: "text-amber-400 bg-amber-500/15 border-amber-400/30" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 bg-[#091326] p-3.5 rounded-xl border border-white/10"
                    >
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 border ${item.color}`}>
                        <item.icon className="w-4 h-4" />
                      </div>
                      <span className="text-white font-bold text-xs sm:text-sm tracking-tight">{item.label}</span>
                    </div>
                  ))}
                </div>

                {/* Banner Badge */}
                <div className="bg-gradient-to-r from-blue-500/15 to-indigo-500/15 border border-blue-400/20 rounded-2xl p-4 flex items-start gap-3">
                  <Star className="w-5 h-5 text-[#76bbf8] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-bold text-xs mb-1">High Impact Team</h4>
                    <p className="text-white/70 text-xs leading-relaxed">
                      Build products that verify millions of identities daily, setting digital trust standards across financial platforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. OUR MISSION / CORE PURPOSE ── */}
      <section className="relative px-[5%] lg:px-[6%] py-16 sm:py-24 border-b border-white/[0.08]">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 font-medium text-xs shadow-sm uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#76bbf8] animate-pulse" />
                <span>Our Core Purpose</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#76bbf8] to-purple-400">
                  Mission
                </span>
              </h2>

              <div className="space-y-5 text-white/75 text-base sm:text-lg leading-relaxed">
                <p>
                  At DigitalRakshak, we are tackling a massive, messy problem: the lack of trust in the digital economy. Businesses lose time and money every day to identity fraud, fragmented data sources, and confusing regulatory laws.
                </p>
                <p>
                  We are fixing this by building a clean, reliable, and secure infrastructure layer for verification and compliance. We help companies onboard users instantly, verify identities with data-backed confidence, and keep their business fully compliant by default.
                </p>
              </div>
            </div>

            {/* Right Mission Impacts Card */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-[32px] blur-2xl opacity-40 group-hover:opacity-60 transition duration-700 pointer-events-none" />

              <div className="relative bg-[#070e20]/90 rounded-[28px] p-7 sm:p-9 shadow-2xl border border-white/15 text-white flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-semibold text-blue-400 font-mono tracking-wider">
                      MISSION IMPACTS
                    </span>
                    <span className="bg-emerald-500/15 border border-emerald-400/30 text-emerald-400 text-[10px] px-2.5 py-0.5 rounded-full font-semibold uppercase tracking-wider">
                      ESTABLISHED
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold mb-3">Building Trusted Infrastructures</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    Our systems are engineered from the ground up to solve identity fragmentation and remove the legal uncertainty out of standard onboarding routines.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 border-t border-white/10 pt-6">
                  {[
                    { icon: Shield, label: "Security First", color: "text-[#76bbf8]" },
                    { icon: HeartHandshake, label: "Client Trust", color: "text-emerald-400" },
                    { icon: Eye, label: "Transparent APIs", color: "text-indigo-400" },
                    { icon: Users, label: "Identity Scale", color: "text-purple-400" },
                  ].map((stat, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                        <stat.icon className={`w-4 h-4 ${stat.color}`} />
                      </div>
                      <span className="text-white font-bold text-xs sm:text-sm whitespace-nowrap">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. WORK CULTURE ── */}
      <section className="relative px-[5%] lg:px-[6%] py-16 sm:py-24 border-b border-white/[0.08]">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold text-blue-300 uppercase tracking-widest bg-blue-500/10 border border-blue-400/30 px-3.5 py-1.5 rounded-full shadow-sm">
              Our Environment
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 mb-4">
              What It&apos;s Like to Work Here
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
              We value excellence, fast execution, and a supportive atmosphere that rewards curiosity.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Terminal,
                title: "Real Engineering Challenges",
                desc: "You’ll work on high-scale APIs, machine learning for document processing, and zero-trust security architecture.",
                border: "hover:border-blue-400/50",
                glow: "text-[#76bbf8]",
              },
              {
                icon: GraduationCap,
                title: "Room to Grow",
                desc: "We invest heavily in our team with continuous learning budgets and mentorship from industry veterans.",
                border: "hover:border-indigo-400/50",
                glow: "text-indigo-400",
              },
              {
                icon: MessagesSquare,
                title: "No Bureaucracy",
                desc: "We value ownership, clear feedback, and fixing problems over corporate politics.",
                border: "hover:border-purple-400/50",
                glow: "text-purple-400",
              },
              {
                icon: Zap,
                title: "High Impact",
                desc: "The tools you build will secure data and smooth out workflows for millions of users and businesses.",
                border: "hover:border-emerald-400/50",
                glow: "text-emerald-400",
              },
            ].map((point, idx) => (
              <div
                key={idx}
                className={`group bg-[#070e20]/80 rounded-[24px] p-7 sm:p-8 border border-white/10 shadow-lg ${point.border} hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all`}
              >
                <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 ${point.glow} group-hover:scale-110 transition-transform`}>
                  <point.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl text-white mb-2">{point.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. CURRENT OPENINGS ── */}
      <section id="openings" className="relative px-[5%] lg:px-[6%] py-16 sm:py-24 border-b border-white/[0.08]">
        <div className="max-w-[1100px] mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-semibold text-blue-300 uppercase tracking-widest bg-blue-500/10 border border-blue-400/30 px-3.5 py-1.5 rounded-full shadow-sm">
              Apply Today
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 mb-3">
              Current Openings
            </h2>
            <p className="text-white/70 text-base sm:text-lg">
              Find your next career leap at DigitalRakshak.
            </p>
          </div>

          {/* Department Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  selectedDept === dept
                    ? "bg-[#B0DAFF] text-[#0a1e36] shadow-md shadow-blue-500/20"
                    : "bg-[#070e20] text-white/70 hover:text-white border border-white/10 hover:border-white/20"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Roles List */}
          <div className="space-y-4 mb-16">
            {filteredOpenings.map((role, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-6 sm:p-7 bg-[#070e20]/80 hover:bg-[#0c142b] border border-white/10 hover:border-blue-400/40 rounded-[22px] transition-all group gap-5"
              >
                <div className="space-y-2.5 max-w-2xl">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] font-bold text-[#76bbf8] tracking-wider uppercase font-mono bg-blue-500/15 border border-blue-400/30 px-2.5 py-0.5 rounded-full">
                      {role.department}
                    </span>
                    <span className="text-[11px] text-white/50">•</span>
                    <span className="text-[11px] text-white/60 flex items-center gap-1">
                      <Briefcase className="w-3 h-3 text-[#76bbf8]" /> {role.type}
                    </span>
                    <span className="text-[11px] text-white/50">•</span>
                    <span className="text-[11px] text-white/60 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#76bbf8]" /> {role.location}
                    </span>
                  </div>

                  <h3 className="text-white font-bold text-lg sm:text-xl group-hover:text-blue-300 transition-colors">
                    {role.title}
                  </h3>

                  <p className="text-white/65 text-xs sm:text-sm leading-relaxed">
                    {role.desc}
                  </p>
                </div>

                <div className="flex-shrink-0">
                  <a
                    href={`mailto:career@digitalrakshak.com?subject=Application: ${encodeURIComponent(role.title)}`}
                    className="inline-flex items-center justify-center gap-2 bg-[#B0DAFF] hover:bg-[#76bbf8] text-[#0a1e36] font-bold text-sm px-6 py-3 rounded-[14px] transition-all shadow-md active:scale-95 whitespace-nowrap"
                  >
                    <span>Apply Now</span>
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* ── 5. DON'T SEE YOUR STACK BANNER ── */}
          <div className="rounded-[28px] bg-gradient-to-r from-[#0d1c3e] via-[#091530] to-[#120f2e] border border-blue-500/30 p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h3 className="font-extrabold text-2xl sm:text-3xl text-white">
                Don&apos;t see your exact stack?
              </h3>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                If you are passionate about security, identity tech, or building great APIs, drop us a line anyway at{" "}
                <a
                  href="mailto:career@digitalrakshak.com"
                  className="font-bold text-[#76bbf8] underline hover:text-white transition-colors"
                >
                  career@digitalrakshak.com
                </a>
              </p>

              <div className="pt-2">
                <a
                  href="mailto:career@digitalrakshak.com?subject=General Inquiry / Open Stack Application"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-3.5 rounded-[14px] border border-white/20 transition-all active:scale-95"
                >
                  <span>Get In Touch</span>
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
