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
  Building,
  Clock,
  Bell,
  ExternalLink,
  UserX,
  Scale,
  Phone,
  MapPin,
  Globe,
  Server,
  CreditCard,
  FileSearch,
  Briefcase,
  Home,
  Heart,
  DollarSign,
  FileCheck,
  User,
  LogIn,
  BarChart,
  Cookie,
  Layers,
  Zap
} from 'lucide-react';
import Image from 'next/image';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-7">
          <div className="flex items-center gap-1">
            {/* <Shield className="w-10 h-10 text-blue-300" /> */}
            <Image src="/images/logo-white.png" alt="DigitalRakshak Logo" width={100} height={100} />
            <span className="text-blue-200 font-semibold tracking-wide">Privacy & Security</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl leading-relaxed">
            Your trust is our priority. Learn how we collect, use, and protect your personal information.
          </p>
          <div className="mt-6 text-sm text-blue-200 flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Last Updated: March 2025</span>
            <span className="flex items-center gap-1"><Globe className="w-4 h-4" /> Applicable globally with Indian jurisdiction</span>
          </div>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-[10%] py-12">
        {/* Table of Contents - Sticky Sidebar on Desktop */}
        {/* <div className="hidden lg:block fixed left-8 top-1/3 w-64 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2"><Layers className="w-4 h-4" /> Contents</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#introduction" className="text-gray-600 hover:text-blue-600 transition-colors">1. Introduction</a></li>
            <li><a href="#general" className="text-gray-600 hover:text-blue-600 transition-colors">2. General</a></li>
            <li><a href="#information-collect" className="text-gray-600 hover:text-blue-600 transition-colors">3. Information Collected</a></li>
            <li><a href="#purposes" className="text-gray-600 hover:text-blue-600 transition-colors">4. Purposes of Use</a></li>
            <li><a href="#disclosure" className="text-gray-600 hover:text-blue-600 transition-colors">5. Disclosure</a></li>
            <li><a href="#changes" className="text-gray-600 hover:text-blue-600 transition-colors">6. Changes to Info</a></li>
            <li><a href="#security" className="text-gray-600 hover:text-blue-600 transition-colors">7. Security Practices</a></li>
            <li><a href="#retention" className="text-gray-600 hover:text-blue-600 transition-colors">8. Data Retention</a></li>
            <li><a href="#consent" className="text-gray-600 hover:text-blue-600 transition-colors">9. Consent Withdrawal</a></li>
            <li><a href="#thirdparty" className="text-gray-600 hover:text-blue-600 transition-colors">10. Third-Party Links</a></li>
            <li><a href="#laws" className="text-gray-600 hover:text-blue-600 transition-colors">11. Applicable Laws</a></li>
            <li><a href="#grievance" className="text-gray-600 hover:text-blue-600 transition-colors">12. Grievance Officer</a></li>
            <li><a href="#disclaimer" className="text-gray-600 hover:text-blue-600 transition-colors">13. Disclaimer</a></li>
          </ul>
        </div> */}

        <div>
          {/* 1. INTRODUCTION */}
          <section id="introduction" className="mb-12 scroll-mt-20">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8 border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-600 rounded-xl">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">1. Introduction</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                DigitalRakshak InfoTech Pvt. Ltd. (hereinafter <span className="font-semibold text-blue-700">"DigitalRakshak"</span>) owns and manages the website{' '}
                <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">www.DigitalRakshak.Com</span> (hereinafter <span className="font-semibold text-blue-700">"Website or Platform"</span>) to enable its users to digitally store, access, and manage their employee's / product user's information and also, to facilitate its users in handling verification requests or reference checks for purposes like employment, tenancy, matrimonial, loan sanction or other legitimate purposes.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This Privacy Policy will describe the following:
              </p>
              <ul className="mt-3 space-y-2 text-gray-700">
                {['What information we collect', 'How information is used', 'With whom it is shared', 'How information can be corrected', 'How it is secured', 'Who to contact with concerns or questions'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* 2. GENERAL */}
          <section id="general" className="mb-12 scroll-mt-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gray-800 rounded-xl">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">2. General</h2>
            </div>
            <div className="prose prose-gray max-w-none text-gray-700 space-y-4">
              <p>This Privacy Policy applies to all current and former users accessing or using Our Website, whether for the purposes of our Services or otherwise engaging with us through email or other means (collectively, <span className="font-semibold">"You"</span> or <span className="font-semibold">"Your"</span>).</p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-amber-800">By accessing or using Our Website or by otherwise giving Us Your information, You confirm that You have the capacity to enter into a legally binding contract and have read, understood, and agreed to the practices and policies outlined in this Privacy Policy.</p>
              </div>
              <p>You hereby consent to Our collection, use, sharing, and disclosure of Your employee/contractor/user information as described in this Privacy Policy.</p>
              <p>We may modify, add or delete from this Privacy Policy from time to time, and Your continued access to, or use of the Website will be deemed to be an acceptance of the said changes. If You do not agree with this Privacy Policy at any time, in part or as a whole, do not access/use the Website or services provided through the Website, or provide Us with any of Your information.</p>
              <p className="italic text-gray-600">If You are accessing or using the Website from any location outside India, You will be solely liable for compliance with any local laws, as may be applicable.</p>
            </div>
          </section>

          {/* 3. INFORMATION WE MAY COLLECT */}
          <section id="information-collect" className="mb-12 scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-emerald-600 rounded-xl">
                <Database className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">3. Information We May Collect From You</h2>
            </div>
            <div className="grid gap-5">
              {[
                { icon: User, title: "Information Request", desc: "When requesting materials, we may collect name, job title, address, email, phone, IP, company name, country, ID copy, credit check, and professional interests." },
                { icon: LogIn, title: "Client App Login", desc: "Login information such as account, username, and password for platform access." },
                { icon: FileSearch, title: "BGV / Verification Services", desc: "Full name, employee ID, title, joining/last working date, DOB, compensation, email, phone, ID proofs (Passport, Aadhaar, PAN, DL), references, and credit checks." },
                { icon: Briefcase, title: "Job Applicants", desc: "Name, email, country of residence, address, phone number, and resume information." },
                { icon: CreditCard, title: "Billing Information", desc: "Billing address, PAN, Goods & Service Tax Identification Number." },
                { icon: Mail, title: "Blog, Insights, Newsletters", desc: "Email address for subscriptions." },
                { icon: BarChart, title: "Indirect Information", desc: "Domain name, browser type, device, date/time, pages visited, referring URL, and other analytics data." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-1.5 bg-gray-100 rounded-lg"><item.icon className="w-4 h-4 text-gray-700" /></div>
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-4 italic">DigitalRakshak may employ third-party companies to facilitate these services with limited access to personal information.</p>
          </section>

          {/* 4. PURPOSES */}
          <section id="purposes" className="mb-12 scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-600 rounded-xl">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">4. Purposes For Which Your Personal Information Is Collected And Used</h2>
            </div>
            <div className="space-y-5">
              {[
                { icon: Server, title: "For Providing Our Services", desc: "Processing information on behalf of controller clients to verify accuracy and authenticity including location data validation." },
                { icon: Bell, title: "For Marketing Purposes", desc: "Newsletters, event invitations, alerts, blog posts. Opt-out available via link or contacting support." },
                { icon: Scale, title: "For Compliance With Legal Obligations", desc: "Legal and regulatory compliance, fraud detection, and defense of legal rights." },
                { icon: Database, title: "For Conducting Searches", desc: "Cross-referencing personal information with public/private databases as contractually necessary." },
                { icon: Users, title: "For Administering The Relationship", desc: "Due diligence, payment processing, accounting, auditing, billing, and support services." }
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-5 border-l-4 border-purple-400">
                  <h3 className="font-bold text-gray-800 flex items-center gap-2"><item.icon className="w-4 h-4 text-purple-600" /> {item.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 5. DISCLOSURE */}
          <section id="disclosure" className="mb-12 scroll-mt-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-orange-600 rounded-xl">
                <Share2 className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">5. Disclosure Of Your Personal Information</h2>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <p className="mb-4">We may share your information with:</p>
              <ul className="space-y-2 text-gray-700 list-disc pl-5">
                <li>Authorized "readers" or requestors using our platform for verification</li>
                <li>Professional advisers (lawyers, bankers, auditors, insurers)</li>
                <li>Regulators and authorities requiring reporting</li>
                <li>Entities involved in mergers, acquisitions, or asset sales</li>
                <li>Third-party companies: verification assistance, analytics (Google Analytics), cloud hosting (Hostinger, Google, Microsoft Azure, AWS)</li>
              </ul>
              <p className="mt-4 text-sm text-gray-500">We share subject to confidentiality and security measures, only for specified purposes. Disclosure may occur if legally required or to protect rights, property, or public safety.</p>
            </div>
          </section>

          {/* 6. CHANGES TO YOUR INFORMATION */}
          <section id="changes" className="mb-12 scroll-mt-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-teal-600 rounded-xl">
                <UserCheck className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">6. Changes To Your Information</h2>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <p>You may review, correct, update, or change your information by emailing <span className="font-mono text-sm bg-white px-2 py-1 rounded border">support@DigitalRakshak.Com</span></p>
              <p className="mt-3 text-gray-600">We reserve the right to verify your identity. Access may be denied if it violates another person's rights or applicable law.</p>
            </div>
          </section>

          {/* 7. SECURITY PRACTICES */}
          <section id="security" className="mb-12 scroll-mt-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-red-600 rounded-xl">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">7. Our Security Practices</h2>
            </div>
            <div className="bg-red-50 rounded-xl p-6 border border-red-100">
              <p>DigitalRakshak has appropriate security procedures, certified to protect information from unauthorized loss, misuse, alteration, or destruction. Access is limited to those with a need to know. However, security cannot be absolutely guaranteed.</p>
            </div>
          </section>

          {/* 8. DATA RETENTION */}
          <section id="retention" className="mb-12 scroll-mt-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-indigo-600 rounded-xl">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">8. Data Retention</h2>
            </div>
            <p>DigitalRakshak retains personal information as needed to provide services, respond to inquiries, consider employment applications, partner with you, or as required by contractual, statutory, or legal obligations.</p>
          </section>

          {/* 9. CONSENT WITHDRAWAL */}
          <section id="consent" className="mb-12 scroll-mt-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-pink-600 rounded-xl">
                <UserX className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">9. Consent Withdrawal</h2>
            </div>
            <div className="bg-pink-50 rounded-xl p-6 border border-pink-100">
              <p>Individuals may request removal of their personal data by emailing <span className="font-mono">contact@DigitalRakshak.Com</span> or <span className="font-mono">support@DigitalRakshak.Com</span> with the subject label: <span className="font-bold">"My Data, My Privacy"</span>.</p>
            </div>
          </section>

          {/* 10. THIRD-PARTY LINKS */}
          <section id="thirdparty" className="mb-12 scroll-mt-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-cyan-600 rounded-xl">
                <ExternalLink className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">10. Third-Party Links</h2>
            </div>
            <div className="prose prose-gray">
              <p>Our Website may contain links to third-party websites and services. We have no control over such services and are not responsible for any collection or disclosure of your information. We recommend reviewing their privacy policies.</p>
            </div>
          </section>

          {/* 11. APPLICABLE LAWS */}
          <section id="laws" className="mb-12 scroll-mt-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-slate-700 rounded-xl">
                <Scale className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">11. Applicable Laws</h2>
            </div>
            <div className="bg-gray-900 text-white rounded-xl p-6">
              <p className="mb-2">This Privacy Policy complies with:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-300">
                <li>Section 43A of the Information Technology Act, 2000</li>
                <li>Rule 3(1)(a) of the IT (Intermediary Guidelines) Rules, 2021</li>
                <li>Rule 4 of the IT (Reasonable Security Practices) Rules, 2011</li>
              </ul>
              <p className="mt-4 text-sm">In case of changes in law, we may seek additional consents.</p>
            </div>
          </section>

          {/* 12. GRIEVANCE OFFICER */}
          <section id="grievance" className="mb-12 scroll-mt-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-lime-600 rounded-xl">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">12. Grievance Officer And Contact Information</h2>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
              <p className="font-semibold">Mr. Sujeet Verma</p>
              <div className="mt-2 text-gray-700 space-y-1">
                <p className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-1" /> DigitalRakshak InfoTech Pvt. Ltd.<br />1st Floor, Plot No. 1195/1, Sector 2A, Sector 2, Kasturba Vidyalaya, Gandhinagar, Gujarat - 382007</p>
                <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> support@DigitalRakshak.com</p>
              </div>
            </div>
          </section>

          {/* 13. DISCLAIMER */}
          <section id="disclaimer" className="mb-12 scroll-mt-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-rose-600 rounded-xl">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">13. Disclaimer</h2>
            </div>
            <div className="bg-rose-50 border border-rose-200 rounded-xl p-6">
              <p>This Privacy Policy forms an integral part of the Terms of Use appearing on the Website <span className="font-mono text-sm">www.DigitalRakshak.Com</span> and must be read together at all times.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;