// app/consumer-grievance-redressal-policy/page.tsx
import React from 'react';
import {
  Shield,
  Mail,
  Globe,
  Clock,
  AlertTriangle,
  CheckCircle,
  Info,
  Database,
  CalendarDays,
  Target,
  MessageCircle,
  AlertCircle,
  Send,
  Gavel,
  ChartBar,
  MapPin,
  UserCog,
  FolderCheck
} from 'lucide-react';
import Image from 'next/image';

const ConsumerGrievanceRedressalPage = () => {
  return (
    <div className="min-h-screen bg-[#02050f] text-white selection:bg-[#B0DAFF] selection:text-[#081a2e]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-[#08122c] via-[#050a18] to-[#02050f] border-b border-white/[0.08] text-white overflow-hidden py-8 md:py-16">
        {/* Ambient glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-blue-600/15 via-indigo-600/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-10 right-[10%] w-[320px] h-[320px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="relative z-10 max-w-8xl mx-auto px-6 sm:px-8 md:px-[10%]">
          
          {/* 1. DESKTOP LAYOUT */}
          <div className="hidden md:flex items-stretch gap-8">
            {/* Logo — 20%, right-aligned */}
            <div className="w-[20%] flex items-center justify-end pr-6">
              <Image src="/images/logo-white.png" alt="DigitalRakshak Logo" width={180} height={180} className="drop-shadow-[0_0_20px_rgba(56,189,248,0.2)]" />
            </div>

            {/* Right content — 80% */}
            <div className="w-[80%] flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 font-semibold text-xs uppercase tracking-wider shadow-sm w-fit mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#76bbf8] animate-pulse" />
                <span>Official Redressal Document</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-black mb-4 bg-gradient-to-r from-white via-white to-blue-200 bg-clip-text text-transparent tracking-tight">
                Consumer Grievance Redressal Policy
              </h1>
              <p className="text-base md:text-lg text-white/70 max-w-4xl leading-relaxed">
                Your voice matters. We are committed to resolving your grievances with transparency, efficiency, and care.
              </p>
              <div className="mt-6 text-xs sm:text-sm text-slate-300 flex items-center gap-3 lg:gap-5 flex-wrap">
                <span className="flex items-center gap-1.5 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-lg backdrop-blur-md">
                  <CalendarDays className="w-4 h-4 text-[#76bbf8]" /> Effective: Immediately
                </span>
                <span className="flex items-center gap-1.5 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-lg backdrop-blur-md">
                  <Clock className="w-4 h-4 text-[#76bbf8]" /> Version: 1.0 | Last Updated: 15th June 2026
                </span>
                <span className="flex items-center gap-1.5 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-lg backdrop-blur-md">
                  <Gavel className="w-4 h-4 text-[#76bbf8]" /> Jurisdiction: Gandhinagar, Gujarat, India
                </span>
                <a href="mailto:grievance@DigitalRakshak.com" className="flex items-center gap-1.5 bg-blue-500/10 border border-blue-400/30 hover:bg-blue-500/20 px-3 py-1.5 rounded-lg backdrop-blur-md text-blue-300 transition-colors">
                  <Mail className="w-4 h-4 text-[#76bbf8]" /> Grievance Email: grievance@DigitalRakshak.com
                </a>
              </div>
            </div>
          </div>

          {/* 2. MOBILE LAYOUT */}
          <div className="md:hidden flex flex-col items-start">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 backdrop-blur-md text-[10px] font-semibold tracking-wide text-blue-300">
              <Shield className="w-3 h-3 text-[#76bbf8]" />
              <span>Official Redressal Document</span>
            </div>

            <h1 className="text-2xl font-black tracking-tight leading-tight mt-2 text-white">
              Consumer Grievance Redressal Policy
            </h1>

            <p className="text-xs text-white/70 leading-normal max-w-xl mt-1.5">
              Your voice matters. We are committed to resolving your grievances with transparency, efficiency, and care.
            </p>

            <div className="w-full grid grid-cols-1 xs:grid-cols-2 gap-2 mt-4">
              
              {/* Card 1: Effective */}
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-sm">
                <div className="p-1.5 rounded-lg bg-blue-500/20 text-[#76bbf8] flex-shrink-0">
                  <CalendarDays className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[8px] font-medium text-slate-400 uppercase tracking-wider leading-none">Effective</p>
                  <p className="text-[11px] font-semibold text-white mt-1 truncate leading-none">Immediately</p>
                </div>
              </div>

              {/* Card 2: Version */}
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-sm">
                <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-300 flex-shrink-0">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[8px] font-medium text-slate-400 uppercase tracking-wider leading-none">Version</p>
                  <p className="text-[11px] font-semibold text-white mt-1 truncate leading-none">1.0</p>
                </div>
              </div>

              {/* Card 3: Jurisdiction */}
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-sm">
                <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 flex-shrink-0">
                  <Gavel className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[8px] font-medium text-slate-400 uppercase tracking-wider leading-none">Jurisdiction</p>
                  <p className="text-[11px] font-semibold text-white mt-1 truncate leading-none">Gandhinagar, IN</p>
                </div>
              </div>

              {/* Card 4: Grievance Email */}
              <a
                href="mailto:grievance@DigitalRakshak.com"
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-blue-500/10 border border-blue-400/30 hover:bg-blue-500/20 transition-colors backdrop-blur-md shadow-sm cursor-pointer min-w-0"
              >
                <div className="p-1.5 rounded-lg bg-blue-500/20 text-[#76bbf8] flex-shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0 font-normal">
                  <p className="text-[8px] font-medium text-blue-300 uppercase tracking-wider leading-none">Grievance Email</p>
                  <p className="text-[11px] font-semibold text-white mt-1 truncate leading-none" title="grievance@DigitalRakshak.com">grievance@DigitalRakshak.com</p>
                </div>
              </a>

            </div>
          </div>

        </div>
      </div>

      <div className="max-w-8xl mx-auto px-[10%] py-12">
        <div>
          {/* Introduction */}
          <section id="introduction" className="mb-12 scroll-mt-28">
            <div className="bg-[#070e22]/90 rounded-2xl p-6 md:p-8 border border-blue-500/25 backdrop-blur-md shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-blue-500/20 border border-blue-400/30 rounded-xl text-[#76bbf8]">
                  <Info className="w-5 h-5" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Introduction</h2>
              </div>
              <div className="text-white/80 leading-relaxed">
                <p>The objective of this Policy is to provide guidelines for processing and resolving the grievance as raised by the consumers. The Policy applies to all consumers("Consumers") who access DigitalRakshak InfoTech Private Limited ("DigitalRakshak") services either directly or indirectly, and to all DigitalRakshak employees who handle consumer-facing interactions.</p>
              </div>
            </div>
          </section>

          {/* Objectives */}
          <section id="objectives" className="mb-12 scroll-mt-28">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-emerald-500/15 border border-emerald-400/30 rounded-xl text-emerald-400">
                <Target className="w-5 h-5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Objectives</h2>
            </div>
            <div className="bg-[#070d1e]/80 rounded-2xl p-6 md:p-8 border border-emerald-500/25">
              <p className="mb-4 font-semibold text-white">The primary objectives of this Policy are to:</p>
              <ul className="space-y-3 text-white/80">
                {[
                  "Implement a structured escalation mechanism where required.",
                  "Provide a consumer-friendly grievance redressal mechanism that is accessible, transparent, and effective.",
                  "Ensure that all grievances, whether classified as queries, requests, or complaints, are resolved within the timelines prescribed under applicable law.",
                  "Monitor grievances periodically, conduct root cause analysis, and introduce improvements in service delivery to Consumers.",
                  "Enhance Consumer education on the nature and use of information and the rights available to Consumers under applicable law."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Scope */}
          <section id="scope" className="mb-12 scroll-mt-28">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-purple-500/15 border border-purple-400/30 rounded-xl text-purple-300">
                <Globe className="w-5 h-5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Scope</h2>
            </div>
            <div className="space-y-5">
              <div className="bg-[#070d1e]/80 rounded-2xl p-6 border border-purple-500/25">
                <p className="text-white/80 leading-relaxed">This Policy covers all queries, requests, and complaints directly received by DigitalRakshak from Consumers.</p>
              </div>
              <div className="bg-red-500/10 border-l-4 border-red-500 border-y border-r border-red-500/20 rounded-r-2xl p-6 text-red-100/90 leading-relaxed shadow-sm">
                <p className="font-semibold text-white mb-3">The Policy does not cover queries, requests, or complaints that:</p>
                <ul className="space-y-2 text-red-100/80 list-disc pl-5">
                  <li>Relate to disputes already pending before courts, consumer fora, or arbitration tribunals.</li>
                  <li>Are raised by unauthorised third parties such as credit repair agencies or "credit clinics" on behalf of Consumers.</li>
                  <li>Are raised by Consumers directly with the credit institutions or credit information company.</li>
                  <li>Relate to disputes pertaining to services of the credit institutions or credit information company.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Classification of Interactions */}
          <section id="classification" className="mb-12 scroll-mt-28">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-teal-500/15 border border-teal-400/30 rounded-xl text-teal-400">
                <FolderCheck className="w-5 h-5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Classification of Interactions</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Query", desc: "A Consumer request for information or clarification.", icon: MessageCircle, color: "blue", border: "border-blue-500/30", iconColor: "text-[#76bbf8]", bg: "bg-blue-500/15" },
                { title: "Complaint", desc: "An expression of dissatisfaction requiring corrective action.", icon: AlertCircle, color: "orange", border: "border-orange-500/30", iconColor: "text-orange-400", bg: "bg-orange-500/15" },
                { title: "Request", desc: "An affirmative consumer demand for a specific service relating to its information.", icon: Send, color: "green", border: "border-emerald-500/30", iconColor: "text-emerald-400", bg: "bg-emerald-500/15" },
                { title: "Dispute", desc: "A specific type of complaint relating to the accuracy of information contained in an output report or its summary.", icon: Gavel, color: "red", border: "border-red-500/30", iconColor: "text-red-400", bg: "bg-red-500/15" }
              ].map((item, idx) => (
                <div key={idx} className={`bg-[#070d1e]/80 rounded-2xl p-5 border ${item.border} hover:border-white/20 transition-all`}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 ${item.bg} rounded-xl ${item.iconColor}`}>
                      <item.icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Governance, Monitoring, and Reporting */}
          <section id="governance" className="mb-12 scroll-mt-28">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-indigo-500/15 border border-indigo-400/30 rounded-xl text-indigo-400">
                <ChartBar className="w-5 h-5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Governance, Monitoring, and Reporting</h2>
            </div>
            <div className="bg-[#070d1e]/80 rounded-2xl p-6 border border-indigo-500/25">
              <p className="text-white/80 leading-relaxed">DigitalRakshak will ensure periodic training sessions are conducted for employees handling Consumer grievances.</p>
            </div>
          </section>

          {/* Data Retention */}
          <section id="retention" className="mb-12 scroll-mt-28">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-cyan-500/15 border border-cyan-400/30 rounded-xl text-cyan-400">
                <Database className="w-5 h-5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Data Retention</h2>
            </div>
            <div className="bg-[#070d1e]/80 rounded-2xl p-6 border border-cyan-500/25">
              <p className="text-white/80 leading-relaxed">DigitalRakshak will maintain all complaint, query or request records securely and confidentially for the period required under applicable law.</p>
            </div>
          </section>

          {/* Channels for Raising Queries and Complaints */}
          <section id="channels" className="mb-12 scroll-mt-28">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-pink-500/15 border border-pink-400/30 rounded-xl text-pink-400">
                <Mail className="w-5 h-5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Channels for Raising Queries and Complaints</h2>
            </div>
            <div className="space-y-5">
              <div className="bg-[#070d1e]/80 rounded-2xl p-6 md:p-8 border border-pink-500/25">
                <p className="mb-5 text-white/80 leading-relaxed">DigitalRakshak provides the following channels through which Consumers can raise queries, requests, or complaints. These are designed to be easily accessible and consumer-friendly.</p>

                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/[0.03] rounded-xl p-5 border border-white/10 hover:border-pink-400/30 transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-pink-500/15 rounded-lg text-pink-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <span className="font-semibold text-white">Email:</span>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed">Complaints may be addressed to <a href="mailto:grievance@DigitalRakshak.com" className="font-mono font-semibold text-[#76bbf8] hover:underline">grievance@DigitalRakshak.com</a></p>
                  </div>

                  <div className="bg-white/[0.03] rounded-xl p-5 border border-white/10 hover:border-pink-400/30 transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-pink-500/15 rounded-lg text-pink-400">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <span className="font-semibold text-white">Correspondence:</span>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed">Written complaints may be sent to 1st Floor, Plot No. 1195/1, Sector 2A, Sector 2, Kasturba Vidyalaya, Gandhinagar, Gujarat - 382007.</p>
                  </div>

                  <div className="bg-white/[0.03] rounded-xl p-5 border border-white/10 hover:border-pink-400/30 transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-pink-500/15 rounded-lg text-pink-400">
                        <UserCog className="w-4 h-4" />
                      </div>
                      <span className="font-semibold text-white">Escalation Contacts:</span>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed">Consumers may escalate complaints to the Data Protection Officer at DigitalRakshak, at <a href="mailto:dpo@DigitalRakshak.com" className="font-mono font-semibold text-[#76bbf8] hover:underline">dpo@DigitalRakshak.com</a></p>
                  </div>

                  <div className="bg-white/[0.03] rounded-xl p-5 border border-white/10 hover:border-pink-400/30 transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-pink-500/15 rounded-lg text-pink-400">
                        <Clock className="w-4 h-4" />
                      </div>
                      <span className="font-semibold text-white">Resolution Timelines:</span>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed">DigitalRakshak will endeavour on a best effort basis to resolve the dispute within 30 calendar days from the receipt of the written grievance.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <section id="disclaimer" className="mb-12 scroll-mt-28">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-amber-500/15 border border-amber-400/30 rounded-xl text-amber-400">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Disclaimer</h2>
            </div>
            <div className="bg-amber-500/10 border-l-4 border-amber-400 border-y border-r border-amber-500/20 rounded-r-2xl p-6 text-amber-100/90 leading-relaxed shadow-sm">
              <p>For any queries, requests, or complaints pertaining to a credit institution or credit information companies, Consumers can reach out to the respective credit institution or credit information company.</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default ConsumerGrievanceRedressalPage;
