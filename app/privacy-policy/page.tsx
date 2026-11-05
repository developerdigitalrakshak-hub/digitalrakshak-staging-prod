import React from 'react';
import {
  Shield,
  Eye,
  Database,
  Users,
  Mail,
  FileText,
  Lock,
  UserCheck,
  Share2,
  AlertTriangle,
  Clock,
  UserX,
  Scale,
  Phone,
  MapPin,
  Globe,
  Server,
  CreditCard,
  FileSearch,
  Briefcase,
  LogIn,
  BarChart,
  CalendarDays,
  Gavel,
  Bell,
  ExternalLink
} from 'lucide-react';
import Image from 'next/image';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#02050f] text-white selection:bg-[#B0DAFF] selection:text-[#081a2e]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-[#08122c] via-[#050a18] to-[#02050f] border-b border-white/[0.08] text-white overflow-hidden py-8 md:py-16">
        {/* Ambient glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-blue-600/15 via-purple-600/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
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
                <span>Official Privacy Document</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-black mb-4 bg-gradient-to-r from-white via-white to-blue-200 bg-clip-text text-transparent tracking-tight">
                Privacy Policy
              </h1>
              <p className="text-base md:text-lg text-white/70 max-w-4xl leading-relaxed">
                Your trust is our priority. Learn how we collect, use, and protect your personal information.
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
              <span>Official Privacy Document</span>
            </div>

            <h1 className="text-2xl font-black tracking-tight leading-tight mt-2 text-white">
              Privacy Policy
            </h1>

            <p className="text-xs text-white/70 leading-normal max-w-xl mt-1.5">
              Your trust is our priority. Learn how we collect, use, and protect your personal information.
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
                <div className="p-1.5 rounded-lg bg-blue-500/20 text-[#76bbf8] flex-shrink-0">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[8px] font-medium text-slate-400 uppercase tracking-wider leading-none">Version</p>
                  <p className="text-[11px] font-semibold text-white mt-1 truncate leading-none">1.0</p>
                </div>
              </div>

              {/* Card 3: Jurisdiction */}
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-sm">
                <div className="p-1.5 rounded-lg bg-blue-500/20 text-[#76bbf8] flex-shrink-0">
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
          {/* 1. INTRODUCTION */}
          <section id="introduction" className="mb-12 scroll-mt-28">
            <div className="bg-[#070e22]/90 rounded-2xl p-6 md:p-8 border border-blue-500/25 backdrop-blur-md shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-blue-500/20 border border-blue-400/30 rounded-xl text-[#76bbf8]">
                  <FileText className="w-5 h-5" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">1. Introduction</h2>
              </div>
              <p className="text-white/80 leading-relaxed mb-4">
                DigitalRakshak InfoTech Pvt. Ltd. (hereinafter <span className="font-semibold text-[#76bbf8]">"DigitalRakshak"</span>) owns and manages the website{' '}
                <span className="font-mono text-sm bg-white/10 border border-white/15 px-2.5 py-0.5 rounded text-[#76bbf8]">www.DigitalRakshak.Com</span> (hereinafter <span className="font-semibold text-[#76bbf8]">"Website or Platform"</span>) to enable its users to digitally store, access, and manage their employee's / product user's information and also, to facilitate its users in handling verification requests or reference checks for purposes like employment, tenancy, matrimonial, loan sanction or other legitimate purposes.
              </p>
              <p className="text-white/80 leading-relaxed">
                This Privacy Policy will describe the following:
              </p>
              <ul className="mt-3 space-y-2 text-white/80">
                {['What information we collect', 'How information is used', 'With whom it is shared', 'How information can be corrected', 'How it is secured', 'Who to contact with concerns or questions'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 bg-[#76bbf8] rounded-full shrink-0 shadow-[0_0_8px_rgba(118,187,248,0.8)]"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 2. GENERAL */}
          <section id="general" className="mb-12 scroll-mt-28">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-white/5 border border-white/10 rounded-xl text-slate-300">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">2. General</h2>
            </div>
            <div className="space-y-4 text-white/80 leading-relaxed">
              <p>This Privacy Policy applies to all current and former users accessing or using Our Website, whether for the purposes of our Services or otherwise engaging with us through email or other means (collectively, <span className="font-semibold text-white">"You"</span> or <span className="font-semibold text-white">"Your"</span>).</p>
              <div className="bg-amber-500/10 border-l-4 border-amber-400 border-y border-r border-amber-500/20 p-5 rounded-r-2xl text-amber-100/90 shadow-sm">
                <p>By accessing or using Our Website or by otherwise giving Us Your information, You confirm that You have the capacity to enter into a legally binding contract and have read, understood, and agreed to the practices and policies outlined in this Privacy Policy.</p>
              </div>
              <p>You hereby consent to Our collection, use, sharing, and disclosure of Your employee/contractor/user information as described in this Privacy Policy.</p>
              <p>We may modify, add or delete from this Privacy Policy from time to time, and Your continued access to, or use of the Website will be deemed to be an acceptance of the said changes. If You do not agree with this Privacy Policy at any time, in part or as a whole, do not access/use the Website or services provided through the Website, or provide Us with any of Your information.</p>
              <p className="italic text-slate-400">If You are accessing or using the Website from any location outside India, You will be solely liable for compliance with any local laws, as may be applicable.</p>
            </div>
          </section>

          {/* 3. INFORMATION WE MAY COLLECT */}
          <section id="information-collect" className="mb-12 scroll-mt-28">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-emerald-500/15 border border-emerald-400/30 rounded-xl text-emerald-400">
                <Database className="w-5 h-5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">3. Information We May Collect From You</h2>
            </div>
            <div className="grid gap-4">
              {[
                { icon: UserCheck, title: "Information Request", desc: "When requesting materials, we may collect name, job title, address, email, phone, IP, company name, country, ID copy, credit check, and professional interests." },
                { icon: LogIn, title: "Client App Login", desc: "Login information such as account, username, and password for platform access." },
                { icon: FileSearch, title: "BGV / Verification Services", desc: "Full name, employee ID, title, joining/last working date, DOB, compensation, email, phone, ID proofs (Passport, Aadhaar, PAN, DL), references, and credit checks." },
                { icon: Briefcase, title: "Job Applicants", desc: "Name, email, country of residence, address, phone number, and resume information." },
                { icon: CreditCard, title: "Billing Information", desc: "Billing address, PAN, Goods & Service Tax Identification Number." },
                { icon: Mail, title: "Blog, Insights, Newsletters", desc: "Email address for subscriptions." },
                { icon: BarChart, title: "Indirect Information", desc: "Domain name, browser type, device, date/time, pages visited, referring URL, and other analytics data." }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#070d1e]/80 rounded-xl border border-white/10 p-5 shadow-sm hover:border-white/20 hover:bg-white/[0.04] transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-500/15 border border-blue-400/20 rounded-lg text-[#76bbf8]">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 mt-4 italic">DigitalRakshak may employ third-party companies to facilitate these services with limited access to personal information.</p>
          </section>

          {/* 4. PURPOSES */}
          <section id="purposes" className="mb-12 scroll-mt-28">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-purple-500/15 border border-purple-400/30 rounded-xl text-purple-300">
                <Eye className="w-5 h-5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">4. Purposes For Which Your Personal Information Is Collected And Used</h2>
            </div>
            <div className="space-y-4">
              {[
                { icon: Server, title: "For Providing Our Services", desc: "Processing information on behalf of controller clients to verify accuracy and authenticity including location data validation." },
                { icon: Bell, title: "For Marketing Purposes", desc: "Newsletters, event invitations, alerts, blog posts. Opt-out available via link or contacting support." },
                { icon: Scale, title: "For Compliance With Legal Obligations", desc: "Legal and regulatory compliance, fraud detection, and defense of legal rights." },
                { icon: Database, title: "For Conducting Searches", desc: "Cross-referencing personal information with public/private databases as contractually necessary." },
                { icon: Users, title: "For Administering The Relationship", desc: "Due diligence, payment processing, accounting, auditing, billing, and support services." }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#070d1e]/80 border-l-4 border-purple-500 border-y border-r border-white/10 rounded-r-xl p-5 hover:border-white/20 transition-all">
                  <h3 className="font-bold text-white flex items-center gap-2">
                    <item.icon className="w-4 h-4 text-purple-400" /> {item.title}
                  </h3>
                  <p className="text-white/70 text-sm mt-1 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 5. DISCLOSURE */}
          <section id="disclosure" className="mb-12 scroll-mt-28">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-orange-500/15 border border-orange-400/30 rounded-xl text-orange-400">
                <Share2 className="w-5 h-5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">5. Disclosure Of Your Personal Information</h2>
            </div>
            <div className="bg-[#070d1e]/80 rounded-2xl border border-white/10 p-6 md:p-8 shadow-sm">
              <p className="mb-4 text-white/80">We may share your information with:</p>
              <ul className="space-y-2 text-white/80 list-disc pl-5">
                <li>Authorized "readers" or requestors using our platform for verification</li>
                <li>Professional advisers (lawyers, bankers, auditors, insurers)</li>
                <li>Regulators and authorities requiring reporting</li>
                <li>Entities involved in mergers, acquisitions, or asset sales</li>
                <li>Third-party companies: verification assistance, analytics (Google Analytics), cloud hosting (Hostinger, Google, Microsoft Azure, AWS)</li>
              </ul>
              <p className="mt-4 text-sm text-slate-400 leading-relaxed">We share subject to confidentiality and security measures, only for specified purposes. Disclosure may occur if legally required or to protect rights, property, or public safety.</p>
            </div>
          </section>

          {/* 6. CHANGES TO YOUR INFORMATION */}
          <section id="changes" className="mb-12 scroll-mt-28">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-teal-500/15 border border-teal-400/30 rounded-xl text-teal-400">
                <UserCheck className="w-5 h-5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">6. Changes To Your Information</h2>
            </div>
            <div className="bg-[#070d1e]/80 rounded-2xl p-6 border border-teal-500/30">
              <p className="text-white/80">You may review, correct, update, or change your information by emailing <span className="font-mono text-sm bg-white/10 border border-white/15 px-2.5 py-1 rounded text-[#76bbf8]">support@DigitalRakshak.Com</span></p>
              <p className="mt-3 text-slate-400">We reserve the right to verify your identity. Access may be denied if it violates another person's rights or applicable law.</p>
            </div>
          </section>

          {/* 7. SECURITY PRACTICES */}
          <section id="security" className="mb-12 scroll-mt-28">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-red-500/15 border border-red-400/30 rounded-xl text-red-400">
                <Lock className="w-5 h-5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">7. Our Security Practices</h2>
            </div>
            <div className="bg-red-500/10 border-l-4 border-red-500 border-y border-r border-red-500/20 rounded-r-2xl p-6 text-red-100/90 leading-relaxed shadow-sm">
              <p>DigitalRakshak has appropriate security procedures, certified to protect information from unauthorized loss, misuse, alteration, or destruction. Access is limited to those with a need to know. However, security cannot be absolutely guaranteed.</p>
            </div>
          </section>

          {/* 8. DATA RETENTION */}
          <section id="retention" className="mb-12 scroll-mt-28">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-indigo-500/15 border border-indigo-400/30 rounded-xl text-indigo-400">
                <Clock className="w-5 h-5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">8. Data Retention</h2>
            </div>
            <div className="bg-[#070d1e]/80 rounded-2xl border border-white/10 p-6">
              <p className="text-white/80 leading-relaxed">DigitalRakshak retains personal information as needed to provide services, respond to inquiries, consider employment applications, partner with you, or as required by contractual, statutory, or legal obligations.</p>
            </div>
          </section>

          {/* 9. CONSENT WITHDRAWAL */}
          <section id="consent" className="mb-12 scroll-mt-28">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-pink-500/15 border border-pink-400/30 rounded-xl text-pink-400">
                <UserX className="w-5 h-5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">9. Consent Withdrawal</h2>
            </div>
            <div className="bg-pink-500/10 border-l-4 border-pink-500 border-y border-r border-pink-500/20 rounded-r-2xl p-6 text-pink-100/90 leading-relaxed shadow-sm">
              <p>Individuals may request removal of their personal data by emailing <span className="font-mono text-[#76bbf8]">contact@DigitalRakshak.Com</span> or <span className="font-mono text-[#76bbf8]">support@DigitalRakshak.Com</span> with the subject label: <span className="font-bold text-white">"My Data, My Privacy"</span>.</p>
            </div>
          </section>

          {/* 10. THIRD-PARTY LINKS */}
          <section id="thirdparty" className="mb-12 scroll-mt-28">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-cyan-500/15 border border-cyan-400/30 rounded-xl text-cyan-400">
                <ExternalLink className="w-5 h-5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">10. Third-Party Links</h2>
            </div>
            <div className="bg-[#070d1e]/80 rounded-2xl border border-white/10 p-6">
              <p className="text-white/80 leading-relaxed">Our Website may contain links to third-party websites and services. We have no control over such services and are not responsible for any collection or disclosure of your information. We recommend reviewing their privacy policies.</p>
            </div>
          </section>

          {/* 11. APPLICABLE LAWS */}
          <section id="laws" className="mb-12 scroll-mt-28">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-blue-500/15 border border-blue-400/30 rounded-xl text-[#76bbf8]">
                <Scale className="w-5 h-5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">11. Applicable Laws</h2>
            </div>
            <div className="bg-gradient-to-br from-[#0c1630] to-[#060b18] text-white rounded-2xl p-6 md:p-8 border border-blue-500/30 shadow-xl">
              <p className="mb-3 text-white/90 font-medium">This Privacy Policy complies with:</p>
              <ul className="list-disc pl-5 space-y-2 text-slate-300">
                <li>Section 43A of the Information Technology Act, 2000</li>
                <li>Rule 3(1)(a) of the IT (Intermediary Guidelines) Rules, 2021</li>
                <li>Rule 4 of the IT (Reasonable Security Practices) Rules, 2011</li>
              </ul>
              <p className="mt-4 text-sm text-slate-400">In case of changes in law, we may seek additional consents.</p>
            </div>
          </section>

          {/* 12. GRIEVANCE OFFICER */}
          <section id="grievance" className="mb-12 scroll-mt-28">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-lime-500/15 border border-lime-400/30 rounded-xl text-lime-400">
                <Phone className="w-5 h-5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">12. Grievance Officer And Contact Information</h2>
            </div>
            <div className="bg-[#070d1e]/90 rounded-2xl shadow-xl p-6 md:p-8 border border-white/15">
              <p className="font-bold text-lg text-white">Mr. Sujeet Verma</p>
              <div className="mt-3 text-white/80 space-y-2.5">
                <p className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#76bbf8] mt-1 shrink-0" />
                  <span>DigitalRakshak InfoTech Pvt. Ltd.<br />1st Floor, Plot No. 1195/1, Sector 2A, Sector 2, Kasturba Vidyalaya, Gandhinagar, Gujarat - 382007</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#76bbf8] shrink-0" />
                  <a href="mailto:support@DigitalRakshak.com" className="hover:text-[#76bbf8] transition-colors">support@DigitalRakshak.com</a>
                </p>
              </div>
            </div>
          </section>

          {/* 13. DISCLAIMER */}
          <section id="disclaimer" className="mb-12 scroll-mt-28">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-rose-500/15 border border-rose-400/30 rounded-xl text-rose-400">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">13. Disclaimer</h2>
            </div>
            <div className="bg-rose-500/10 border-l-4 border-rose-500 border-y border-r border-rose-500/20 rounded-r-2xl p-6 text-rose-100/90 leading-relaxed shadow-sm">
              <p>This Privacy Policy forms an integral part of the Terms of Use appearing on the Website <span className="font-mono text-sm bg-white/10 px-2 py-0.5 rounded text-[#76bbf8]">www.DigitalRakshak.Com</span> and must be read together at all times.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
