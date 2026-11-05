// app/responsible-disclosure/page.tsx
import React from 'react';
import {
    Shield,
    Bug,
    Mail,
    Globe,
    Clock,
    FileText,
    Lock,
    Users,
    AlertTriangle,
    CheckCircle,
    Target,
    Gavel,
    ShieldCheck,
    BugOff,
    CalendarDays
} from 'lucide-react';
import Image from 'next/image';

const ResponsibleDisclosurePage = () => {
    return (
        <div className="min-h-screen bg-[#02050f] text-white selection:bg-[#B0DAFF] selection:text-[#081a2e]">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-b from-[#08122c] via-[#050a18] to-[#02050f] border-b border-white/[0.08] text-white overflow-hidden py-8 md:py-16">
                {/* Ambient glows */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-emerald-600/15 via-blue-600/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute top-10 right-[10%] w-[320px] h-[320px] bg-teal-600/10 rounded-full blur-[120px] pointer-events-none" />
                
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
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 font-semibold text-xs uppercase tracking-wider shadow-sm w-fit mb-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                <span>Official Policy Document</span>
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-black mb-4 bg-gradient-to-r from-white via-white to-emerald-200 bg-clip-text text-transparent tracking-tight">
                               Responsible Disclosure Policy
                            </h1>
                            <p className="text-base md:text-lg text-white/70 max-w-4xl leading-relaxed">
                                Together we keep DigitalRakshak secure. Report vulnerabilities responsibly and help us protect our ecosystem.
                            </p>
                            <div className="mt-6 text-xs sm:text-sm text-slate-300 flex items-center gap-3 lg:gap-5 flex-wrap">
                                <span className="flex items-center gap-1.5 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-lg backdrop-blur-md">
                                    <CalendarDays className="w-4 h-4 text-emerald-400" /> Effective: Immediately
                                </span>
                                <span className="flex items-center gap-1.5 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-lg backdrop-blur-md">
                                    <Clock className="w-4 h-4 text-emerald-400" /> Version: 1.0 | Last Updated: 15th June 2026
                                </span>
                                <span className="flex items-center gap-1.5 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-lg backdrop-blur-md">
                                    <Gavel className="w-4 h-4 text-emerald-400" /> Jurisdiction: Gandhinagar, Gujarat, India
                                </span>
                                <a href="mailto:grievance@DigitalRakshak.com" className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-400/30 hover:bg-emerald-500/20 px-3 py-1.5 rounded-lg backdrop-blur-md text-emerald-300 transition-colors">
                                    <Mail className="w-4 h-4 text-emerald-400" /> Grievance Email: grievance@DigitalRakshak.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* 2. MOBILE LAYOUT */}
                    <div className="md:hidden flex flex-col items-start">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 backdrop-blur-md text-[10px] font-semibold tracking-wide text-emerald-300">
                            <Shield className="w-3 h-3 text-emerald-400" />
                            <span>Official Policy Document</span>
                        </div>

                        <h1 className="text-2xl font-black tracking-tight leading-tight mt-2 text-white">
                            Responsible Disclosure Policy
                        </h1>

                        <p className="text-xs text-white/70 leading-normal max-w-xl mt-1.5">
                            Together we keep DigitalRakshak secure. Report vulnerabilities responsibly and help us protect our ecosystem.
                        </p>

                        <div className="w-full grid grid-cols-1 xs:grid-cols-2 gap-2 mt-4">
                            
                            {/* Card 1: Effective */}
                            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-sm">
                                <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 flex-shrink-0">
                                    <CalendarDays className="w-3.5 h-3.5" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[8px] font-medium text-slate-400 uppercase tracking-wider leading-none">Effective</p>
                                    <p className="text-[11px] font-semibold text-white mt-1 truncate leading-none">Immediately</p>
                                </div>
                            </div>

                            {/* Card 2: Version */}
                            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-sm">
                                <div className="p-1.5 rounded-lg bg-teal-500/20 text-teal-400 flex-shrink-0">
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
                                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-400/30 hover:bg-emerald-500/20 transition-colors backdrop-blur-md shadow-sm cursor-pointer min-w-0"
                            >
                                <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 flex-shrink-0">
                                    <Mail className="w-3.5 h-3.5" />
                                </div>
                                <div className="min-w-0 font-normal">
                                    <p className="text-[8px] font-medium text-emerald-300 uppercase tracking-wider leading-none">Grievance Email</p>
                                    <p className="text-[11px] font-semibold text-white mt-1 truncate leading-none" title="grievance@DigitalRakshak.com">grievance@DigitalRakshak.com</p>
                                </div>
                            </a>

                        </div>
                    </div>

                </div>
            </div>

            <div className="max-w-8xl mx-auto px-[10%] py-12">
                <div>
                    {/* 1. PURPOSE */}
                    <section id="purpose" className="mb-12 scroll-mt-28">
                        <div className="bg-[#070e22]/90 rounded-2xl p-6 md:p-8 border border-emerald-500/25 backdrop-blur-md shadow-xl">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2.5 bg-emerald-500/20 border border-emerald-400/30 rounded-xl text-emerald-400">
                                    <Target className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">1. Purpose</h2>
                            </div>
                            <div className="space-y-4 text-white/80 leading-relaxed">
                                <p>At DigitalRakshak, the security of our systems and data is a top priority across all our service offerings and products. We recognise that undiscovered vulnerabilities may exist, and this is where the security-research community comes in. If you discover a vulnerability, please let us know immediately so we can fix it responsibly.</p>
                                <p>We value collaboration with the security community and believe that coordinated disclosure of vulnerabilities helps ensure the safety and privacy of our clients and their customers. This Policy sets out how to report a vulnerability and what you can expect from us.</p>
                            </div>
                        </div>
                    </section>

                    {/* 2. VERSIONING & CONTACT */}
                    <section id="versioning" className="mb-12 scroll-mt-28">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2.5 bg-blue-500/15 border border-blue-400/30 rounded-xl text-[#76bbf8]">
                                <FileText className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">2. Versioning &amp; Contact</h2>
                        </div>
                        <div className="bg-[#070d1e]/80 rounded-2xl p-6 border border-blue-500/25 space-y-3">
                            <p className="text-white/80 leading-relaxed">This document supersedes all prior versions and was last updated on 15th March 2025.</p>
                            <p className="font-semibold text-white">Submit reports to: <a href="mailto:support@DigitalRakshak.com" className="font-mono text-[#76bbf8] hover:underline">support@DigitalRakshak.com</a></p>
                        </div>
                    </section>

                    {/* 3. SAFE-HARBOUR FOR GOOD-FAITH RESEARCH */}
                    <section id="safe-harbour" className="mb-12 scroll-mt-28">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2.5 bg-emerald-500/15 border border-emerald-400/30 rounded-xl text-emerald-400">
                                <ShieldCheck className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">3. Safe-Harbour for Good-Faith Research</h2>
                        </div>
                        <div className="bg-[#070d1e]/80 rounded-2xl p-6 md:p-8 border border-emerald-500/25">
                            <p className="mb-4 text-white/80 leading-relaxed">We will not pursue legal action or law enforcement investigations against security researchers who:</p>
                            <ul className="space-y-2 text-white/80 list-disc pl-5">
                                <li>Follow this Policy in good faith;</li>
                                <li>Do not exploit the vulnerability beyond what is necessary to prove its existence to cause harm, data loss, data manipulation or disruption/degradation;</li>
                                <li>Do not violate any laws or breach any agreements to discover vulnerabilities;</li>
                                <li>Avoid violating the privacy of our users, disrupting/degrading our services, or destroying our data;</li>
                                <li>Promptly report the vulnerability with sufficient details for us to reproduce and validate it;</li>
                                <li>Do not access, download, or modify data residing in any other account that does not belong to them or attempt to perform any such actions;</li>
                                <li>Do not share the vulnerability information publicly or with others unless DigitalRakshak provides a written consent to do so.</li>
                            </ul>
                            <div className="mt-5 bg-amber-500/10 border-l-4 border-amber-400 border-y border-r border-amber-500/20 p-5 rounded-r-2xl text-amber-100/90 shadow-sm">
                                <p>While we deeply appreciate the contributions of the security research community, this Policy does not grant any form of legal immunity, nor does it authorize or permit any activity that would otherwise be illegal, lead to service disruption/degradation or breach third-party agreements/rights.</p>
                            </div>
                        </div>
                    </section>

                    {/* 4. DISCLAIMER & CONDUCT EXPECTATIONS */}
                    <section id="disclaimer" className="mb-12 scroll-mt-28">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2.5 bg-orange-500/15 border border-orange-400/30 rounded-xl text-orange-400">
                                <AlertTriangle className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">4. Disclaimer &amp; Conduct Expectations</h2>
                        </div>
                        <div className="space-y-5">
                            <div className="bg-[#070d1e]/80 rounded-2xl p-6 border border-orange-500/25">
                                <p className="text-white/80 leading-relaxed">Researchers must act in good faith, avoid exceeding the scope defined in this Policy, and ensure that their actions do not violate user privacy, disrupt/degrade services, or compromise system integrity. This Policy is intended to support coordinated vulnerability disclosure, not unauthorized access or abuse.</p>
                            </div>
                            <div className="bg-red-500/10 border-l-4 border-red-500 border-y border-r border-red-500/20 rounded-r-2xl p-6 text-red-100/90 leading-relaxed shadow-sm">
                                <p className="font-semibold text-white mb-3">DigitalRakshak reserves the right to take legal action if:</p>
                                <ul className="space-y-2 text-red-100/80 list-disc pl-5">
                                    <li>Vulnerabilities are exploited for unlawful gain, competitive advantage, or to access restricted client information or internal systems, or</li>
                                    <li>Actions result in the disruption/degradation or impairment of DigitalRakshak's operations, or</li>
                                    <li>The researcher violates this Policy or applicable laws in the course of their investigation.</li>
                                </ul>
                                <p className="mt-3 text-red-300 font-medium">This Policy does not constitute a waiver of DigitalRakshak's legal rights or obligations in any jurisdiction.</p>
                            </div>
                        </div>
                    </section>

                    {/* 5. PERMITTED SCOPE SYSTEMS */}
                    <section id="scope" className="mb-12 scroll-mt-28">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2.5 bg-purple-500/15 border border-purple-400/30 rounded-xl text-purple-300">
                                <Globe className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">5. Permitted Scope Systems</h2>
                        </div>
                        <div className="bg-[#070d1e]/80 rounded-2xl p-6 border border-purple-500/25">
                            <p className="mb-4 text-white/80 leading-relaxed">Only the following domains are included in the scope of the program, and researchers are recommended to limit their scope only to these:</p>
                            <div className="flex flex-wrap gap-3">
                                {['DigitalRakshak.com', 'DigitalRakshak.in', 'DigitalRakshak.ai', 'DigitalRakshak.io', 'DigitalRakshak.blog', 'DigitalRakshak.store'].map((domain, idx) => (
                                    <span key={idx} className="bg-white/5 px-3.5 py-1.5 rounded-xl text-sm font-mono text-[#76bbf8] border border-white/10 shadow-sm">{domain}</span>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 6. OUT OF SCOPE SYSTEMS */}
                    <section id="out-of-scope" className="mb-12 scroll-mt-28">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2.5 bg-red-500/15 border border-red-400/30 rounded-xl text-red-400">
                                <BugOff className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">6. Out of Scope Systems (expressly voids safe harbour)</h2>
                        </div>
                        <div className="bg-[#070d1e]/80 rounded-2xl p-6 md:p-8 border border-red-500/30">
                            <p className="mb-4 text-white/80 leading-relaxed">Any attempt to exploit the following systems/entities may result in legal action by the respective entities and the Policy's scope is not extended to the following cases:</p>
                            <div className="grid md:grid-cols-1 gap-4">
                                <ul className="space-y-2 text-white/80 list-disc pl-5">
                                    <li>Physical attacks or access</li>
                                    <li>Spam or brute force attack</li>
                                    <li>Third-party services not operated by DigitalRakshak</li>
                                    <li>Attempts to intentionally physically damage any DigitalRakshak hardware or service</li>
                                </ul>
                                <ul className="space-y-2 text-white/80 list-disc pl-5">
                                    <p className="mb-4 font-semibold text-white">Out of Scope Exploits:</p>
                                    <li>Rate limiting</li>
                                    <li>RTL ambiguity</li>
                                    <li>Content injection</li>
                                    <li>Content spoofing</li>
                                    <li>Reporting viruses</li>
                                    <li>IDN homograph attacks</li>
                                    <li>User email enumeration</li>
                                    <li>EXIF data not stripped on images</li>
                                    <li>Formula injection or CSV injection</li>
                                    <li>Full path disclosure on any property</li>
                                    <li>Bugs that do not pose a security risk</li>
                                    <li>Email issues related to SPF/DKIM/DMARC</li>
                                    <li>Open ports without Proof of Concept of exploit</li>
                                    <li>HTTP TRACE or OPTIONS method enabled</li>
                                    <li>Login/Logout Cross Site Request Forgery (CSRF)</li>
                                    <li>Subdomain takeover without supporting evidence</li>
                                    <li>Application denial of service by locking user accounts</li>
                                    <li>Information disclosure not associated with a vulnerability</li>
                                    <li>Hyperlink injection in emails, HTML injection, or self-XSS</li>
                                    <li>Denial of Service (DoS) or Distributed Denial of Service (DDoS) attacks</li>
                                    <li>X-Frame-Options related, missing cookie flags on non-sensitive cookies</li>
                                    <li>Vulnerabilities found through automated testing or scanner-generated reports</li>
                                    <li>Use of known-vulnerable libraries without proof of exploitation such as OpenSSL</li>
                                    <li>Clickjacking/tapjacking and/or issues only exploitable through clickjacking/tapjacking</li>
                                    <li>Publicly released CVEs or Zero Day Vulnerability Exploits performed within 90 days of their disclosure</li>
                                    <li>Vulnerability requiring a rooted or jailbroken device and/or outdated OS version or SSL pinning issues</li>
                                    <li>Missing security headers that do not lead to a vulnerability (unless you can provide a Proof of Concept)</li>
                                    <li>Social Engineering (including phishing, smishing, vishing, and all other variants) with any DigitalRakshak staff, contractors, clients or third parties</li>
                                    <li>Vulnerabilities that leverage illicit Man-in-the-Middle (MITM) attack or require physical access to a target's device</li>
                                    <li>SSL issues such as BEAST, BREACH, renegotiation attack, forward secrecy not enabled, weak/insecure cipher suites, or any such lack of leading practices</li>
                                    <li>Uploading, transmitting, linking to, sending, storing, or otherwise distributing any malicious code or software (malware)</li>
                                    <li>Cross Site Request Forgery actions that do not require authentication (or a session) to exploit reports related to the following security headers:
                                        <ul className="pl-5 mt-1 space-y-1">
                                            <li>HTTP Strict Transport Security (HSTS)</li>
                                            <li>XSS Mitigation Headers (X-Content-Type and X-XSS-Protection)</li>
                                            <li>X-Content-Type-Options</li>
                                            <li>Content Security Policy (CSP) settings (excluding nosniff in an exploitable scenario)</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* 7. QUALIFYING VULNERABILITIES */}
                    <section id="qualifying" className="mb-12 scroll-mt-28">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2.5 bg-teal-500/15 border border-teal-400/30 rounded-xl text-teal-400">
                                <Bug className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">7. Qualifying Vulnerabilities</h2>
                        </div>
                        <div className="bg-[#070d1e]/80 rounded-2xl p-6 border border-teal-500/25">
                            <p className="mb-4 font-semibold text-white">We are specifically interested in:</p>
                            <div className="flex flex-wrap gap-2.5">
                                {[
                                    'SQL Injection', 'Privilege Escalation', 'Cross Site Scripting (XSS)', 'Remote Code Execution (RCE)',
                                    'Domain Take Over Vulnerabilities', 'Cross Site Request Forgery (CSRF)', 'Server Side Request Forgery (SSRF)',
                                    'Authentication/Authorization flaws/bypass', 'Insecure Direct Object References (IDOR)',
                                    'Misconfigurations Leading to Data Leakage'
                                ].map((vuln, idx) => (
                                    <span key={idx} className="bg-white/5 px-3 py-1.5 rounded-xl text-sm text-[#76bbf8] border border-white/10 hover:border-[#76bbf8]/40 transition-colors">{vuln}</span>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 8. REPORTING GUIDELINES */}
                    <section id="reporting" className="mb-12 scroll-mt-28">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2.5 bg-cyan-500/15 border border-cyan-400/30 rounded-xl text-cyan-400">
                                <Mail className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">8. Reporting Guidelines</h2>
                        </div>
                        <div className="bg-[#070d1e]/80 rounded-2xl p-6 border border-cyan-500/25">
                            <p className="mb-4 text-white/80 leading-relaxed">For a report to be deemed as a complete report for the purposes of this Policy it needs to contain each of these parameters:</p>
                            <ul className="space-y-2 text-white/80 list-disc pl-5 mb-5">
                                <li>Timestamp of discovery</li>
                                <li>A clear, concise description of the vulnerability</li>
                                <li>Impact assessment and all affected services</li>
                                <li>Any relevant logs, screenshots, or video recordings</li>
                                <li>Steps to reproduce the issue (Proof of Concept is preferred)</li>
                                <li>Contact information of the researcher to enable the team to reach out for further correspondence as applicable</li>
                            </ul>
                            <div className="bg-white/[0.04] rounded-xl p-4 border border-white/10">
                                <p className="font-semibold text-white">Send your report to: <a href="mailto:support@DigitalRakshak.Com" className="font-mono text-[#76bbf8] hover:underline">support@DigitalRakshak.Com</a></p>
                            </div>
                        </div>
                    </section>

                    {/* 9. CONFIDENTIALITY */}
                    <section id="confidentiality" className="mb-12 scroll-mt-28">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2.5 bg-pink-500/15 border border-pink-400/30 rounded-xl text-pink-400">
                                <Lock className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">9. Confidentiality</h2>
                        </div>
                        <div className="bg-pink-500/10 border-l-4 border-pink-500 border-y border-r border-pink-500/20 rounded-r-2xl p-6 text-pink-100/90 leading-relaxed shadow-sm space-y-4">
                            <p>Any logs, screenshots, sample payloads, personal data, or other information ("Investigation Data") that you obtain while conducting authorised testing under this Policy must be treated as strictly confidential. You may not disclose, publish, or share any Investigation Data with any third party without DigitalRakshak's prior written consent. Upon DigitalRakshak's written request, made at any time during or after the investigation, you must promptly and securely delete or destroy all copies of the Investigation Data in your possession or control and confirm such deletion in writing.</p>
                            <div className="bg-white/[0.04] rounded-xl p-4 border border-white/10">
                                <p className="font-medium text-white/90">In all cases, you must securely delete or destroy every copy of the Investigation Data no later than thirty (30) days after DigitalRakshak confirms that the vulnerability has been fixed, even if no deletion request is issued.</p>
                            </div>
                        </div>
                    </section>

                    {/* 10. WHAT YOU CAN EXPECT FROM US */}
                    <section id="expectations" className="mb-12 scroll-mt-28">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2.5 bg-indigo-500/15 border border-indigo-400/30 rounded-xl text-indigo-400">
                                <Users className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">10. What You Can Expect From Us</h2>
                        </div>
                        <div className="bg-[#070d1e]/80 rounded-2xl p-6 md:p-8 border border-indigo-500/25 space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                                <p className="text-white/80 leading-relaxed">Acknowledgement of receiving your report within two (2) business days</p>
                            </div>
                            <p className="text-white/80 leading-relaxed">We investigate and respond to all valid reports. However, depending on the volume of reports we receive, we prioritize evaluation based on risk and impact factors, and it may take some time before we respond.</p>
                            <div className="bg-amber-500/10 border-l-4 border-amber-400 border-y border-r border-amber-500/20 p-5 rounded-r-2xl text-amber-100/90 shadow-sm">
                                <p>Under our Responsible Disclosure Policy we offer no monetary or non-monetary rewards. Please ensure all reports are genuine ethical disclosures.</p>
                            </div>
                            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-5 text-center">
                                <p className="text-emerald-300 italic leading-relaxed">Thank you for helping us keep DigitalRakshak, and the wider ecosystem secure. We tip our hats in gratitude to every security researcher for helping us and several other organizations keep themselves safe and thus securing the entire IT ecosystem….!</p>
                            </div>
                        </div>
                    </section>

                    {/* 11. GOVERNING LAW AND DISPUTE RESOLUTION */}
                    <section id="governing" className="mb-12 scroll-mt-28">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2.5 bg-slate-500/15 border border-slate-400/30 rounded-xl text-slate-300">
                                <Gavel className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">11. Governing Law and Dispute Resolution</h2>
                        </div>
                        <div className="bg-[#070d1e]/80 rounded-2xl p-6 border border-white/10 space-y-3">
                            <p className="text-white/80 leading-relaxed">This Policy, and any dispute or claim (whether in contract, tort, or otherwise) arising out of or in connection with it, shall be governed by and construed in accordance with the laws of India, without regard to its conflict-of-laws principles.</p>
                            <p className="text-white/80 leading-relaxed">Any dispute shall be finally resolved by arbitration seated in Gandhinagar, Gujarat, India, in accordance with the Arbitration and Conciliation Act, 1996, as amended. The arbitration shall be conducted on an ad-hoc basis by a sole arbitrator agreed upon by the Parties. The courts located in Gandhinagar, Gujarat shall have exclusive jurisdiction for the limited purpose of (i) granting interim or conservatory relief and (ii) enforcing any arbitral award. Each Party irrevocably waives any objection to venue or forum non Conveniens with respect to such courts.</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ResponsibleDisclosurePage;
