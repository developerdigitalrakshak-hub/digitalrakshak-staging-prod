import React from 'react';
import {
  FileText,
  Shield,
  CreditCard,
  AlertTriangle,
  Mail,
  Lock,
  Users,
  XCircle,
  CalendarDays,
  Clock,
  Gavel,
  Server,
  LogIn,
  Handshake,
  Layers
} from 'lucide-react';
import Image from 'next/image';

const TermsAndConditionsPage = () => {
  return (
    <div className="min-h-screen bg-[#02050f] text-white selection:bg-[#B0DAFF] selection:text-[#081a2e]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-[#08122c] via-[#050a18] to-[#02050f] border-b border-white/[0.08] text-white overflow-hidden py-8 md:py-16">
        {/* Ambient glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-blue-600/15 via-purple-600/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-10 right-[10%] w-[320px] h-[320px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
        
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
                <span>Official Agreement Document</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-black mb-4 bg-gradient-to-r from-white via-white to-blue-200 bg-clip-text text-transparent tracking-tight">
                Terms &amp; Conditions
              </h1>
              <p className="text-base md:text-lg text-white/70 max-w-4xl leading-relaxed">
                Please read these terms carefully before using our services. By accessing our platform, you agree to be bound by these terms.
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
              <span>Official Agreement Document</span>
            </div>

            <h1 className="text-2xl font-black tracking-tight leading-tight mt-2 text-white">
              Terms &amp; Conditions
            </h1>

            <p className="text-xs text-white/70 leading-normal max-w-xl mt-1.5">
              Please read these terms carefully before using our services. By accessing our platform, you agree to be bound by these terms.
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
          {/* 1. SCOPE */}
          <section id="scope" className="mb-12 scroll-mt-28">
            <div className="bg-[#070e22]/90 rounded-2xl p-6 md:p-8 border border-blue-500/25 backdrop-blur-md shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-blue-500/20 border border-blue-400/30 rounded-xl text-[#76bbf8]">
                  <FileText className="w-5 h-5" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">1. Scope</h2>
              </div>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>These Terms of Use entered into by and between DigitalRakshak InfoTech Pvt. Ltd., a company incorporated under the Companies Act, 2013 and having its registered office at 1st Floor, Plot No. 1195/1, Sector 2A, Sector 2, Kasturba Vidyalaya, Gandhinagar, Gujarat - 382007 ( "we","us","our" or "DigitalRakshak" ) and you ( "you" or "your" ) governs your use of the website www.DigitalRakshak.com and other DigitalRakshak owned or controlled websites or platform (collectively, "Platform(s)" ) together with all information, content, products, materials and services made available to you through the same by us and/or third parties (which together with the DigitalRakshak Platforms shall be collectively referred to as the "Services").</p>
                <p>By using or otherwise accessing the Services, or any component thereof, in any manner whatsoever, you agree to be bound by and comply with these Terms of Use. If you do not agree to these Terms of Use, do not access or use the Services in any manner.</p>
                <div className="bg-amber-500/10 border-l-4 border-amber-400 border-y border-r border-amber-500/20 p-5 rounded-r-2xl text-amber-100/90 shadow-sm">
                  <p>When we refer to the "use" of the Services in this Agreement, we mean any actual or attempted access or use of the Services, including, without limitation, any transmission, exchange of information, or communication associated with the Services. These Terms of Use, together with any other policies, rules, and provisions which are described, linked, or otherwise referred to and form a part of this Agreement, including, without limitation our Privacy Policy, constitute the entire agreement between you and us, superseding any and all prior or inconsistent understandings, representations or agreements regarding the Services.</p>
                </div>
                <p>We may add, delete or modify any of our Services at any time at our sole discretion. We may similarly change these Terms of Use at any time and we will notify you of any changes. Changes will take effect once we notify you ("effective date"). If any change is not acceptable to you, you must stop using the Services. Your use of the Services after the effective date shall constitute your acceptance of such changes. If any new products or services become available, they will be considered a part of the Services and your use of them will be governed by these Terms of Use unless we notify you that different terms and conditions apply.</p>
              </div>
            </div>
          </section>

          {/* 2. OUR SERVICES */}
          <section id="services" className="mb-12 scroll-mt-28">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-emerald-500/15 border border-emerald-400/30 rounded-xl text-emerald-400">
                <Server className="w-5 h-5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">2. Our Services</h2>
            </div>
            <div className="bg-[#070d1e]/80 rounded-2xl p-6 border border-emerald-500/25">
              <p className="text-white/80 leading-relaxed">We offer API E-Marketplace, identity and background verifications (BGV) like identity verification, address verification, criminal record check, prior employment verification, highest education verification, professional reference checks, credit history checks, etc. for purposes like employment, tenancy, matrimonial, loan sanction etc.</p>
            </div>
          </section>

          {/* 3. ACCESS TO AND USE OF THE SERVICES */}
          <section id="access" className="mb-12 scroll-mt-28">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-orange-500/15 border border-orange-400/30 rounded-xl text-orange-400">
                <LogIn className="w-5 h-5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">3. Access to and Use of the Services</h2>
            </div>
            <div className="space-y-5">
              <div className="bg-[#070d1e]/80 rounded-2xl p-6 border border-orange-500/25">
                <p className="font-semibold text-white mb-3">You should not use, nor allow others to use, your IDs, the Services, directly or indirectly, to:</p>
                <ul className="space-y-2 text-white/80 list-disc pl-5">
                  <li>attempt to or actually disrupt, impair or interfere with, alter or modify the Services or any information, data, or materials posted and/or displayed by us or anyone else;</li>
                  <li>use the information in the database to sell or promote any products or services;</li>
                  <li>collect or attempt to collect any information from others including, without limitation, personally identifiable information, without such party's prior consent;</li>
                  <li>upload, distribute, transmit, communicate, link to, publish or access any data, information or material through, using or otherwise in connection with the Services, that violates any law or regulation or the rights of others. You agree to comply with all local, state, statutes, rules, and regulations, as well as any international treaties, which are applicable to your use of the Services.</li>
                </ul>
              </div>
              <div className="bg-red-500/10 border-l-4 border-red-500 border-y border-r border-red-500/20 rounded-r-2xl p-6 text-red-100/90 leading-relaxed shadow-sm">
                <p className="font-semibold text-white mb-3">You are prohibited from violating or attempting to violate the security of the Services, including, without limitation:</p>
                <ul className="space-y-2 text-red-100/80 list-disc pl-5">
                  <li>accessing data not intended for you or logging onto a processor, communications or access device or account which you are not authorized to access;</li>
                  <li>attempting to probe, scan or test the vulnerability of the Services or to breach security or authentication measures, regardless of your motives or intent;</li>
                  <li>attempting to interfere with or disrupt the Services or services to any user, processor, host or network, including, without limitation, by submitting a virus, worm or Trojan horse; or</li>
                  <li>sending unsolicited e-mail or other information, including promotions or advertising. Violations of system or network security or these Terms of Use may result in civil or criminal liability. We have the right to investigate occurrences that may involve such violations and may involve, provide information to and cooperate with, law enforcement authorities in prosecuting users who are involved in such violations.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 4. OUR REPRESENTATION AND WARRANTIES */}
          <section id="representations" className="mb-12 scroll-mt-28">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-blue-500/15 border border-blue-400/30 rounded-xl text-[#76bbf8]">
                <Shield className="w-5 h-5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">4. Our Representation and Warranties</h2>
            </div>
            <div className="bg-[#070d1e]/80 rounded-2xl p-6 border border-blue-500/25 space-y-4">
              <p className="text-white/80 leading-relaxed">We use appropriate security measures to protect against the loss, misuse, and alteration of data used by our system. We will never share individual personal information with anyone without prior intimation or unless ordered by a court of law. Information submitted by you is stored, processed, and disseminated by us only in accordance with our Privacy Policy and in compliance with applicable laws.</p>
              <div className="bg-white/[0.04] rounded-xl p-4 border border-white/10">
                <p className="text-white/80 leading-relaxed">We take reasonable care while collating and transcribing information and documents of the Candidate collected from various sources. However, we do not represent and warrant that our Services will be accurate, complete or defect free nor do we make representations or warranties with respect to the fitness of its Services for a particular purpose.</p>
              </div>
            </div>
          </section>

          {/* 5. YOUR UNDERTAKINGS */}
          <section id="undertakings" className="mb-12 scroll-mt-28">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-purple-500/15 border border-purple-400/30 rounded-xl text-purple-300">
                <Users className="w-5 h-5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">5. Your Undertakings</h2>
            </div>
            <div className="space-y-3.5">
              {[
                "You represent, warrant, and covenant to us that you have the right, authority, and capacity to use the DigitalRakshak Platforms and agree to and abide by these Terms of Use.",
                "You also represent and warrant to us that you will use www.DigitalRakshak.com and other DigitalRakshak Platforms in a manner consistent with any and all applicable laws and regulations.",
                "You represent, warrant, and covenant to us that any and all Information and any other information or data you provide to us, is and will be true, accurate, and complete when given to us, that in providing such information to us you will not knowingly omit or misrepresent any material facts or information.",
                "You warrant and covenant that you shall remain responsible for any and all information, material establishing proof of identity, address and educational qualification, professional references posted or transmitted by you to the Platforms, whether, in the kind or nature of the text, messages, e-mails, drawings, profiles, opinions, notes, images, videos, audio files, etc., (“Information”) and we will not be held responsible for the completeness, accuracy or legality of the Information.",
                "You understand and acknowledge that we may review, edit, refuse to post, or delete any Information that, in the sole judgment of DigitalRakshak, violates these Terms of Use or any other applicable laws."
              ].map((text, idx) => (
                <div key={idx} className="bg-[#070d1e]/80 rounded-xl p-5 border border-white/10 hover:border-purple-400/30 hover:bg-white/[0.04] transition-all">
                  <p className="text-white/80 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 6. PROPRIETARY RIGHTS */}
          <section id="proprietary" className="mb-12 scroll-mt-28">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-teal-500/15 border border-teal-400/30 rounded-xl text-teal-400">
                <Lock className="w-5 h-5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">6. Proprietary Rights</h2>
            </div>
            <div className="bg-[#070d1e]/80 rounded-2xl p-6 border border-teal-500/25">
              <p className="text-white/80 leading-relaxed">The Platforms and the content thereof are the sole and exclusive property of DigitalRakshak InfoTech Pvt. Ltd. and/or its licensors. You agree not to reproduce, duplicate, copy, sell, resell or exploit, for any commercial purpose, any portion of the Website or the Content. Use of the Platforms or the content thereof in any way not expressly permitted by this Agreement is prohibited.</p>
            </div>
          </section>

          {/* 7. FEES AND PAYMENTS */}
          <section id="fees" className="mb-12 scroll-mt-28">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-cyan-500/15 border border-cyan-400/30 rounded-xl text-cyan-400">
                <CreditCard className="w-5 h-5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">7. Fees and Payments</h2>
            </div>
            <div className="bg-[#070d1e]/80 rounded-2xl p-6 border border-cyan-500/25 space-y-3">
              <p className="text-white/80 leading-relaxed">Our Service Fees vary depending upon the type of API and Service opted by you. We will bill you immediately upon issuance of our report for requested Candidate or cumulatively on a monthly basis for all the services performed by Us for You in the preceding month.</p>
              <p className="font-semibold text-white">Our Service fees shall be non-refundable.</p>
              <p className="text-white/80 leading-relaxed">Our Service Fee is exclusive of all applicable taxes.</p>
              <p className="text-white/80 leading-relaxed">Your payment shall fall due within seven (7) days of invoice date, unless otherwise agreed.</p>
              <p className="text-white/80 leading-relaxed">Payment of our Service Fees can be made using credit card / debit card / UPI / Internet Banking/ or through any other RBI approved digital mode of payment.</p>
            </div>
          </section>

          {/* 8. INDEMNIFICATION */}
          <section id="indemnification" className="mb-12 scroll-mt-28">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-pink-500/15 border border-pink-400/30 rounded-xl text-pink-400">
                <Handshake className="w-5 h-5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">8. Indemnification</h2>
            </div>
            <div className="bg-pink-500/10 border-l-4 border-pink-500 border-y border-r border-pink-500/20 rounded-r-2xl p-6 text-pink-100/90 leading-relaxed shadow-sm">
              <p>You agree to defend, indemnify and hold us harmless against any losses, expenses, costs or damages (including our reasonable attorneys' fees, expert fees' and other reasonable costs of litigation) arising from, incurred as a result of, or in any manner related to any claim or action based upon (a) your breach of these terms of use, (b) your use of the Services, and/or (c) violation of any applicable provision of law. We may, if necessary, participate in the defense of any such claim or action and any negotiations for its settlement or compromise. No settlement which may adversely affect our rights or obligations shall be made without our prior written approval. We reserve the right, at our own expense and on notice to you, to assume exclusive defense and control of any such claim or action, and then your corresponding indemnification obligation will end.</p>
            </div>
          </section>

          {/* 9. DISCLAIMER */}
          <section id="disclaimer" className="mb-12 scroll-mt-28">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-rose-500/15 border border-rose-400/30 rounded-xl text-rose-400">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">9. Disclaimer</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-[#070d1e]/80 rounded-2xl p-6 border border-white/10">
                <p className="text-white/80 leading-relaxed">We are a mere facilitator who contact various external agencies or other resources (online or offline) to collect, process, verify and compile information and documents on behalf and on the basis of the information and documents provided by our clients or users. We are neither the author nor the creator of any information forming part of our reports. Our Services are delivered on a best effort basis, and are subject to limitations posed by technology, Government and public/private infrastructure, regulations and/or availability of information, access policies and rules defined by third parties.</p>
              </div>
              <div className="bg-[#070d1e]/80 rounded-2xl p-6 border border-white/10">
                <p className="text-white/80 leading-relaxed">Our reports should be treated only as a guide with respect to verifications and background checks, and not be considered as final pronouncement on the Candidate or Individual. We reserve our right to amend reports issued in case additional information or documentation becomes available, which may alter the results presented in its report.</p>
              </div>
              <div className="bg-[#070d1e]/80 rounded-2xl p-6 border border-white/10">
                <p className="text-white/80 leading-relaxed">THE MATERIALS IN THIS SITE ARE PROVIDED "AS IS" AND WITHOUT WARRANTIES OF ANY KIND EITHER EXPRESS OR IMPLIED. DigitalRakshak DOES NOT WARRANT OR MAKE ANY REPRESENTATIONS REGARDING THE USE OR THE RESULTS OF THE USE OF THE CONTENT OR OTHER MATERIALS IN THIS SITE IN TERMS OF THEIR CORRECTNESS, ACCURACY, RELIABILITY, OR OTHERWISE.</p>
              </div>
              <div className="bg-[#070d1e]/80 rounded-2xl p-6 border border-white/10">
                <p className="text-white/80 leading-relaxed">The fact that a document is available on this site does not mean that the information contained in such document has not been modified or superseded by events or by a subsequent document or filing.</p>
              </div>
              <div className="bg-gradient-to-br from-[#2a0b12] to-[#120508] border border-red-500/40 text-red-100 rounded-2xl p-6 md:p-8 shadow-2xl">
                <p className="text-xs sm:text-sm leading-relaxed font-mono">UNDER NO CIRCUMSTANCES, INCLUDING, BUT NOT LIMITED TO, NEGLIGENCE, SHALL DigitalRakshak BE LIABLE FOR ANY SPECIAL OR CONSEQUENTIAL DAMAGES THAT RESULT FROM THE USE OF, OR THE INABILITY TO USE, SITE OR ANY DOWNLOADED MATERIALS, EVEN IF DigitalRakshak OR ITS REPRESENTATIVE HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. IN NO EVENT SHALL DigitalRakshak'S TOTAL LIABILITY TO YOU FROM ALL DAMAGES, LOSSES, AND CAUSES OF ACTION (WHETHER IN CONTRACT OR OTHERWISE) EXCEED THE AMOUNT YOU PAID TO DigitalRakshak, IF ANY, FOR PAYMENTS DONE THROUGH THIS PLATFORM OR INR 10,000/- (RUPEES TEN THOUSAND ONLY), WHICHEVER IS LOWER. IN CASE THE APPLICABLE LAW DOES NOT PERMIT THE EXCLUSION OF IMPLIED WARRANTIES, OR THE ABOVE LIMITATIONS OF LIABILITY THEN THE ABOVE EXCLUSIONS MAY NOT APPLY TO YOU.</p>
              </div>
            </div>
          </section>

          {/* 10. TERMINATION */}
          <section id="termination" className="mb-12 scroll-mt-28">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-slate-500/15 border border-slate-400/30 rounded-xl text-slate-300">
                <XCircle className="w-5 h-5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">10. Termination</h2>
            </div>
            <div className="bg-[#070d1e]/80 rounded-2xl p-6 border border-white/10">
              <p className="text-white/80 leading-relaxed">We reserve our right to suspend, restrict or deny access to anyone who we believe has violated any of these Terms of Use and/or any applicable laws. You may terminate these Terms of Use by providing us with written notice of your termination and ceasing to use or access the Services. Termination is your sole right and exclusive remedy if you are not satisfied with the Services. Upon the effective date of any such termination, your right to access and use the Services shall immediately cease.</p>
            </div>
          </section>

          {/* 11. DISPUTES */}
          <section id="disputes" className="mb-12 scroll-mt-28">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-yellow-500/15 border border-yellow-400/30 rounded-xl text-yellow-300">
                <Gavel className="w-5 h-5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">11. Disputes</h2>
            </div>
            <div className="bg-[#070d1e]/80 rounded-2xl p-6 border border-yellow-500/25">
              <p className="text-white/80 leading-relaxed">These Terms of Use shall be governed by and interpreted and construed in accordance with the laws of India. The place of jurisdiction for the settlement of disputes shall be in Gandhinagar - Gujarat.</p>
            </div>
          </section>

          {/* 12. MISCELLANEOUS */}
          <section id="miscellaneous" className="mb-12 scroll-mt-28">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-white/5 border border-white/10 rounded-xl text-slate-300">
                <Layers className="w-5 h-5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">12. Miscellaneous</h2>
            </div>
            <div className="bg-[#070d1e]/80 rounded-2xl p-6 border border-white/10">
              <p className="text-white/80 leading-relaxed">These Terms of Use may not be modified by anyone except in writing signed by an authorized officer of DigitalRakshak. No failure or delay in enforcing any provision, exercising any option, or requiring performance, shall be construed to be a waiver of that or any other right in connection with this Agreement. You may not assign your rights under these Terms of Use without our prior written permission and any attempt by you to do so shall be void. If any term of these Terms of Use is held invalid, illegal, or unenforceable, the remaining portions shall not be affected. Any provision of these Terms of Use which by its nature must survive the termination of these Terms of Use to give effect to its meaning shall survive such termination.</p>
            </div>
          </section>

          {/* 13. CONTACT / AGREEMENT */}
          <section id="contact" className="mb-12 scroll-mt-28">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-emerald-500/15 border border-emerald-400/30 rounded-xl text-emerald-400">
                <Mail className="w-5 h-5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">13. Contact / Agreement</h2>
            </div>
            <div className="bg-[#070d1e]/80 rounded-2xl p-6 border border-emerald-500/25">
              <p className="text-white/80 leading-relaxed">If you have any questions, concerns, or suggestions regarding this Terms of Use Agreement, please contact us by emailing on <a href="mailto:support@DigitalRakshak.Com" className="font-mono font-semibold text-[#76bbf8] hover:underline">support@DigitalRakshak.Com</a></p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
