// app/responsible-disclosure/page.tsx
import React from 'react';
import {
    Shield,
    Bug,
    Mail,
    Scale,
    Globe,
    Clock,
    FileText,
    Lock,
    Users,
    Eye,
    AlertTriangle,
    CheckCircle,
    XCircle,
    Info,
    Server,
    Database,
    Share2,
    UserCheck,
    Bell,
    ExternalLink,
    Home,
    Heart,
    DollarSign,
    FileCheck,
    User,
    LogIn,
    BarChart,
    Cookie,
    Layers,
    Zap,
    BookOpen,
    Handshake,
    Gavel,
    AlertCircle,
    Phone,
    MapPin,
    Target,
    Award,
    MessageCircle,
    FileSearch,
    Fingerprint,
    Wifi,
    ShieldAlert,
    ShieldCheck,
    BugOff,
    Search,
    Code,
    Terminal,
    LockKeyhole,
    Key,
    Building,
    Cloud
} from 'lucide-react';
import Image from 'next/image';

const ResponsibleDisclosurePage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-green-900 via-emerald-800 to-teal-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/20 z-0"></div>
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-green-500 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-emerald-500 rounded-full opacity-20 blur-3xl"></div>
                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-7">
                    <div className="flex items-center gap-3 mb-2">
                        {/* <Shield className="w-10 h-10 text-green-300" /> */}
                         <Image src="/images/logo-white.png" alt="DigitalRakshak Logo" width={100} height={100} />
                        <span className="text-green-200 font-semibold tracking-wide">Security & Ethics</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
                        Responsible Disclosure Policy
                    </h1>
                    <p className="text-lg md:text-xl text-green-100 max-w-3xl leading-relaxed">
                        Together we keep DigitalRakshak secure. Report vulnerabilities responsibly and help us protect our ecosystem.
                    </p>
                    <div className="mt-6 text-sm text-green-200 flex items-center gap-4 flex-wrap">
                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Version: 2.0 | Last Updated: 15th March 2025</span>
                        <span className="flex items-center gap-1"><Mail className="w-4 h-4" /> Report to: support@DigitalRakshak.com</span>
                    </div>
                </div>
            </div>

            <div className="max-w-8xl mx-auto px-[10%] py-12">
                {/* Table of Contents - Sticky Sidebar on Desktop */}
                {/* <div className="hidden lg:block fixed left-8 top-1/3 w-64 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2"><BookOpen className="w-4 h-4" /> Contents</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#purpose" className="text-gray-600 hover:text-green-600 transition-colors">1. Purpose</a></li>
            <li><a href="#versioning" className="text-gray-600 hover:text-green-600 transition-colors">2. Versioning & Contact</a></li>
            <li><a href="#safe-harbour" className="text-gray-600 hover:text-green-600 transition-colors">3. Safe-Harbour for Good-Faith Research</a></li>
            <li><a href="#disclaimer" className="text-gray-600 hover:text-green-600 transition-colors">4. Disclaimer & Conduct Expectations</a></li>
            <li><a href="#scope" className="text-gray-600 hover:text-green-600 transition-colors">5. Permitted Scope Systems</a></li>
            <li><a href="#out-of-scope" className="text-gray-600 hover:text-green-600 transition-colors">6. Out of Scope Systems</a></li>
            <li><a href="#qualifying" className="text-gray-600 hover:text-green-600 transition-colors">7. Qualifying Vulnerabilities</a></li>
            <li><a href="#reporting" className="text-gray-600 hover:text-green-600 transition-colors">8. Reporting Guidelines</a></li>
            <li><a href="#confidentiality" className="text-gray-600 hover:text-green-600 transition-colors">9. Confidentiality</a></li>
            <li><a href="#expectations" className="text-gray-600 hover:text-green-600 transition-colors">10. What You Can Expect From Us</a></li>
            <li><a href="#governing" className="text-gray-600 hover:text-green-600 transition-colors">11. Governing Law and Dispute Resolution</a></li>
          </ul>
        </div> */}

                <div>
                    {/* 1. PURPOSE */}
                    <section id="purpose" className="mb-12 scroll-mt-20">
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 md:p-8 border border-green-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-green-600 rounded-xl">
                                    <Target className="w-5 h-5 text-white" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">1. Purpose</h2>
                            </div>
                            <div className="prose prose-green max-w-none text-gray-700 space-y-4">
                                <p>At DigitalRakshak, the security of our systems and data is a top priority across all our service offerings and products. We recognise that undiscovered vulnerabilities may exist, and this is where the security-research community comes in. If you discover a vulnerability, please let us know immediately so we can fix it responsibly.</p>
                                <p>We value collaboration with the security community and believe that coordinated disclosure of vulnerabilities helps ensure the safety and privacy of our clients and their customers. This Policy sets out how to report a vulnerability and what you can expect from us.</p>
                            </div>
                        </div>
                    </section>

                    {/* 2. VERSIONING & CONTACT */}
                    <section id="versioning" className="mb-12 scroll-mt-20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-blue-600 rounded-xl">
                                <FileText className="w-5 h-5 text-white" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">2. Versioning & Contact</h2>
                        </div>
                        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                            <p>This document supersedes all prior versions and was last updated on 15th March 2025.</p>
                            <p className="mt-3 font-semibold">Submit reports to: <span className="font-mono text-blue-700">support@DigitalRakshak.com</span></p>
                        </div>
                    </section>

                    {/* 3. SAFE-HARBOUR FOR GOOD-FAITH RESEARCH */}
                    <section id="safe-harbour" className="mb-12 scroll-mt-20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-emerald-600 rounded-xl">
                                <ShieldCheck className="w-5 h-5 text-white" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">3. Safe-Harbour for Good-Faith Research</h2>
                        </div>
                        <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
                            <p className="mb-4">We will not pursue legal action or law enforcement investigations against security researchers who:</p>
                            <ul className="space-y-2 text-gray-700 list-disc pl-5">
                                <li>Follow this Policy in good faith;</li>
                                <li>Do not exploit the vulnerability beyond what is necessary to prove its existence to cause harm, data loss, data manipulation or disruption/degradation;</li>
                                <li>Do not violate any laws or breach any agreements to discover vulnerabilities;</li>
                                <li>Avoid violating the privacy of our users, disrupting/degrading our services, or destroying our data;</li>
                                <li>Promptly report the vulnerability with sufficient details for us to reproduce and validate it;</li>
                                <li>Do not access, download, or modify data residing in any other account that does not belong to them or attempt to perform any such actions;</li>
                                <li>Do not share the vulnerability information publicly or with others unless DigitalRakshak provides a written consent to do so.</li>
                            </ul>
                            <div className="mt-4 bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                                <p className="text-amber-800">While we deeply appreciate the contributions of the security research community, this Policy does not grant any form of legal immunity, nor does it authorize or permit any activity that would otherwise be illegal, lead to service disruption/degradation or breach third-party agreements/rights.</p>
                            </div>
                        </div>
                    </section>

                    {/* 4. DISCLAIMER & CONDUCT EXPECTATIONS */}
                    <section id="disclaimer" className="mb-12 scroll-mt-20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-orange-600 rounded-xl">
                                <AlertTriangle className="w-5 h-5 text-white" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">4. Disclaimer & Conduct Expectations</h2>
                        </div>
                        <div className="space-y-5">
                            <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
                                <p>Researchers must act in good faith, avoid exceeding the scope defined in this Policy, and ensure that their actions do not violate user privacy, disrupt/degrade services, or compromise system integrity. This Policy is intended to support coordinated vulnerability disclosure, not unauthorized access or abuse.</p>
                            </div>
                            <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                                <p className="font-semibold mb-3">DigitalRakshak reserves the right to take legal action if:</p>
                                <ul className="space-y-2 text-gray-700 list-disc pl-5">
                                    <li>Vulnerabilities are exploited for unlawful gain, competitive advantage, or to access restricted client information or internal systems, or</li>
                                    <li>Actions result in the disruption/degradation or impairment of DigitalRakshak's operations, or</li>
                                    <li>The researcher violates this Policy or applicable laws in the course of their investigation.</li>
                                </ul>
                                <p className="mt-3 text-red-700 font-medium">This Policy does not constitute a waiver of DigitalRakshak's legal rights or obligations in any jurisdiction.</p>
                            </div>
                        </div>
                    </section>

                    {/* 5. PERMITTED SCOPE SYSTEMS */}
                    <section id="scope" className="mb-12 scroll-mt-20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-purple-600 rounded-xl">
                                <Globe className="w-5 h-5 text-white" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">5. Permitted Scope Systems</h2>
                        </div>
                        <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                            <p className="mb-3">Only the following domains are included in the scope of the program, and researchers are recommended to limit their scope only to these:</p>
                            <div className="flex flex-wrap gap-3">
                                {['DigitalRakshak.com', 'DigitalRakshak.in', 'DigitalRakshak.ai', 'DigitalRakshak.io', 'DigitalRakshak.blog', 'DigitalRakshak.store'].map((domain, idx) => (
                                    <span key={idx} className="bg-white px-3 py-1 rounded-full text-sm font-mono text-purple-700 border border-purple-200 shadow-sm">{domain}</span>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 6. OUT OF SCOPE SYSTEMS */}
                    <section id="out-of-scope" className="mb-12 scroll-mt-20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-red-600 rounded-xl">
                                <BugOff className="w-5 h-5 text-white" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">6. Out of Scope Systems (expressly voids safe harbour)</h2>
                        </div>
                        <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                            <p className="mb-4">Any attempt to exploit the following systems/entities may result in legal action by the respective entities and the Policy's scope is not extended to the following cases:</p>
                            <div className="grid md:grid-cols-1 gap-4">
                                <ul className="space-y-2 text-gray-700 list-disc pl-5">
                                    <li>Physical attacks or access</li>
                                    <li>Spam or brute force attack</li>
                                    <li>Third-party services not operated by DigitalRakshak</li>
                                    <li>Attempts to intentionally physically damage any DigitalRakshak hardware or service</li>
                                </ul>
                                <ul className="space-y-2 text-gray-700 list-disc pl-5">
                                <p className="mb-4 font-semibold">Out of Scope Exploits:</p>
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
                                        <ul className="pl-5 mt-1">
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
                    <section id="qualifying" className="mb-12 scroll-mt-20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-teal-600 rounded-xl">
                                <Bug className="w-5 h-5 text-white" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">7. Qualifying Vulnerabilities</h2>
                        </div>
                        <div className="bg-teal-50 rounded-xl p-6 border border-teal-100">
                            <p className="mb-4 font-semibold">We are specifically interested in:</p>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    'SQL Injection', 'Privilege Escalation', 'Cross Site Scripting (XSS)', 'Remote Code Execution (RCE)',
                                    'Domain Take Over Vulnerabilities', 'Cross Site Request Forgery (CSRF)', 'Server Side Request Forgery (SSRF)',
                                    'Authentication/Authorization flaws/bypass', 'Insecure Direct Object References (IDOR)',
                                    'Misconfigurations Leading to Data Leakage'
                                ].map((vuln, idx) => (
                                    <span key={idx} className="bg-white px-3 py-1 rounded-full text-sm text-teal-700 border border-teal-200">{vuln}</span>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 8. REPORTING GUIDELINES */}
                    <section id="reporting" className="mb-12 scroll-mt-20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-cyan-600 rounded-xl">
                                <Mail className="w-5 h-5 text-white" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">8. Reporting Guidelines</h2>
                        </div>
                        <div className="bg-cyan-50 rounded-xl p-6 border border-cyan-100">
                            <p className="mb-4">For a report to be deemed as a complete report for the purposes of this Policy it needs to contain each of these parameters:</p>
                            <ul className="space-y-2 text-gray-700 list-disc pl-5 mb-4">
                                <li>Timestamp of discovery</li>
                                <li>A clear, concise description of the vulnerability</li>
                                <li>Impact assessment and all affected services</li>
                                <li>Any relevant logs, screenshots, or video recordings</li>
                                <li>Steps to reproduce the issue (Proof of Concept is preferred)</li>
                                <li>Contact information of the researcher to enable the team to reach out for further correspondence as applicable</li>
                            </ul>
                            <div className="bg-white rounded-lg p-4 border border-cyan-200">
                                <p className="font-semibold">Send your report to: <span className="font-mono text-cyan-700">support@DigitalRakshak.Com</span></p>
                            </div>
                        </div>
                    </section>

                    {/* 9. CONFIDENTIALITY */}
                    <section id="confidentiality" className="mb-12 scroll-mt-20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-pink-600 rounded-xl">
                                <Lock className="w-5 h-5 text-white" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">9. Confidentiality</h2>
                        </div>
                        <div className="bg-pink-50 rounded-xl p-6 border border-pink-100 space-y-4">
                            <p>Any logs, screenshots, sample payloads, personal data, or other information ("Investigation Data") that you obtain while conducting authorised testing under this Policy must be treated as strictly confidential. You may not disclose, publish, or share any Investigation Data with any third party without DigitalRakshak's prior written consent. Upon DigitalRakshak's written request, made at any time during or after the investigation, you must promptly and securely delete or destroy all copies of the Investigation Data in your possession or control and confirm such deletion in writing.</p>
                            <div className="bg-white/50 rounded-lg p-4 border border-pink-200">
                                <p className="font-medium">In all cases, you must securely delete or destroy every copy of the Investigation Data no later than thirty (30) days after DigitalRakshak confirms that the vulnerability has been fixed, even if no deletion request is issued.</p>
                            </div>
                        </div>
                    </section>

                    {/* 10. WHAT YOU CAN EXPECT FROM US */}
                    <section id="expectations" className="mb-12 scroll-mt-20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-indigo-600 rounded-xl">
                                <Users className="w-5 h-5 text-white" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">10. What You Can Expect From Us</h2>
                        </div>
                        <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100 space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                                <p>Acknowledgement of receiving your report within two (2) business days</p>
                            </div>
                            <p>We investigate and respond to all valid reports. However, depending on the volume of reports we receive, we prioritize evaluation based on risk and impact factors, and it may take some time before we respond.</p>
                            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                                <p className="text-amber-800">Under our Responsible Disclosure Policy we offer no monetary or non-monetary rewards. Please ensure all reports are genuine ethical disclosures.</p>
                            </div>
                            <div className="bg-green-50 rounded-lg p-5 border border-green-200 text-center">
                                <p className="text-green-800 italic">Thank you for helping us keep DigitalRakshak, and the wider ecosystem secure. We tip our hats in gratitude to every security researcher for helping us and several other organizations keep themselves safe and thus securing the entire IT ecosystem….!</p>
                            </div>
                        </div>
                    </section>

                    {/* 11. GOVERNING LAW AND DISPUTE RESOLUTION */}
                    <section id="governing" className="mb-12 scroll-mt-20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-slate-700 rounded-xl">
                                <Gavel className="w-5 h-5 text-white" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">11. Governing Law and Dispute Resolution</h2>
                        </div>
                        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 prose prose-slate max-w-none">
                            <p>This Policy, and any dispute or claim (whether in contract, tort, or otherwise) arising out of or in connection with it, shall be governed by and construed in accordance with the laws of India, without regard to its conflict-of-laws principles.</p>
                            <p className="mt-3">Any dispute shall be finally resolved by arbitration seated in Gandhinagar, Gujarat, India, in accordance with the Arbitration and Conciliation Act, 1996, as amended. The arbitration shall be conducted on an ad-hoc basis by a sole arbitrator agreed upon by the Parties. The courts located in Gandhinagar, Gujarat shall have exclusive jurisdiction for the limited purpose of (i) granting interim or conservatory relief and (ii) enforcing any arbitral award. Each Party irrevocably waives any objection to venue or forum non Conveniens with respect to such courts.</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ResponsibleDisclosurePage;