// app/consumer-grievance-redressal-policy/page.tsx
import React from 'react';
import {
  Shield,
  FileText,
  Mail,
  Scale,
  Globe,
  Clock,
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
  Cloud,
  Headphones,
  Clock8,
  CalendarDays,
  TrendingUp,
  GraduationCap,
  FolderCheck,
  Send,
  Inbox,
  FileWarning,
  UserCog,
  ChartBar,
  MailCheck,
  HomeIcon,
  Briefcase,
  HeartHandshake
} from 'lucide-react';

const ConsumerGrievanceRedressalPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-7">
          <div className="flex items-center gap-3 mb-2">
            <Headphones className="w-10 h-10 text-blue-300" />
            <span className="text-blue-200 font-semibold tracking-wide">Consumer Rights & Redressal</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Consumer Grievance Redressal Policy
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl leading-relaxed">
            Your voice matters. We are committed to resolving your grievances with transparency, efficiency, and care.
          </p>
          <div className="mt-6 text-sm text-blue-200 flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" /> Effective: Immediately</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Last Updated: 15th June 2026</span>
            <span className="flex items-center gap-1"><Mail className="w-4 h-4" /> Grievance Email: grievance@DigitalRakshak.com</span>
          </div>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-[10%] py-12">
        {/* Table of Contents - Sticky Sidebar on Desktop */}
        {/* <div className="hidden lg:block fixed left-8 top-1/3 w-64 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2"><BookOpen className="w-4 h-4" /> Contents</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#introduction" className="text-gray-600 hover:text-blue-600 transition-colors">Introduction</a></li>
            <li><a href="#objectives" className="text-gray-600 hover:text-blue-600 transition-colors">Objectives</a></li>
            <li><a href="#scope" className="text-gray-600 hover:text-blue-600 transition-colors">Scope</a></li>
            <li><a href="#classification" className="text-gray-600 hover:text-blue-600 transition-colors">Classification of Interactions</a></li>
            <li><a href="#governance" className="text-gray-600 hover:text-blue-600 transition-colors">Governance, Monitoring, and Reporting</a></li>
            <li><a href="#retention" className="text-gray-600 hover:text-blue-600 transition-colors">Data Retention</a></li>
            <li><a href="#channels" className="text-gray-600 hover:text-blue-600 transition-colors">Channels for Raising Queries and Complaints</a></li>
            <li><a href="#disclaimer" className="text-gray-600 hover:text-blue-600 transition-colors">Disclaimer</a></li>
          </ul>
        </div> */}

        <div>
          {/* Introduction */}
          <section id="introduction" className="mb-12 scroll-mt-20">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8 border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-600 rounded-xl">
                  <Info className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Introduction</h2>
              </div>
              <div className="prose prose-blue max-w-none text-gray-700">
                <p>The objective of this Policy is to provide guidelines for processing and resolving the grievance as raised by the consumers. The Policy applies to all consumers("Consumers") who access DigitalRakshak InfoTech Private Limited ("DigitalRakshak") services either directly or indirectly, and to all DigitalRakshak employees who handle consumer-facing interactions.</p>
              </div>
            </div>
          </section>

          {/* Objectives */}
          <section id="objectives" className="mb-12 scroll-mt-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-emerald-600 rounded-xl">
                <Target className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Objectives</h2>
            </div>
            <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
              <p className="mb-4 font-semibold">The primary objectives of this Policy are to:</p>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Implement a structured escalation mechanism where required.",
                  "Provide a consumer-friendly grievance redressal mechanism that is accessible, transparent, and effective.",
                  "Ensure that all grievances, whether classified as queries, requests, or complaints, are resolved within the timelines prescribed under applicable law.",
                  "Monitor grievances periodically, conduct root cause analysis, and introduce improvements in service delivery to Consumers.",
                  "Enhance Consumer education on the nature and use of information and the rights available to Consumers under applicable law."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Scope */}
          <section id="scope" className="mb-12 scroll-mt-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-600 rounded-xl">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Scope</h2>
            </div>
            <div className="space-y-5">
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                <p className="text-gray-800">This Policy covers all queries, requests, and complaints directly received by DigitalRakshak from Consumers.</p>
              </div>
              <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                <p className="font-semibold mb-3">The Policy does not cover queries, requests, or complaints that:</p>
                <ul className="space-y-2 text-gray-700 list-disc pl-5">
                  <li>Relate to disputes already pending before courts, consumer fora, or arbitration tribunals.</li>
                  <li>Are raised by unauthorised third parties such as credit repair agencies or "credit clinics" on behalf of Consumers.</li>
                  <li>Are raised by Consumers directly with the credit institutions or credit information company.</li>
                  <li>Relate to disputes pertaining to services of the credit institutions or credit information company.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Classification of Interactions */}
          <section id="classification" className="mb-12 scroll-mt-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-teal-600 rounded-xl">
                <FolderCheck className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Classification of Interactions</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Query", desc: "A Consumer request for information or clarification.", icon: MessageCircle, color: "blue" },
                { title: "Complaint", desc: "An expression of dissatisfaction requiring corrective action.", icon: AlertCircle, color: "orange" },
                { title: "Request", desc: "An affirmative consumer demand for a specific service relating to its information.", icon: Send, color: "green" },
                { title: "Dispute", desc: "A specific type of complaint relating to the accuracy of information contained in an output report or its summary.", icon: Gavel, color: "red" }
              ].map((item, idx) => (
                <div key={idx} className={`bg-${item.color}-50 rounded-xl p-5 border border-${item.color}-100`}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 bg-${item.color}-600 rounded-lg`}>
                      <item.icon className={`w-4 h-4 text-white`} />
                    </div>
                    <h3 className="font-bold text-gray-800">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Governance, Monitoring, and Reporting */}
          <section id="governance" className="mb-12 scroll-mt-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-indigo-600 rounded-xl">
                <ChartBar className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Governance, Monitoring, and Reporting</h2>
            </div>
            <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100">
              <p>DigitalRakshak will ensure periodic training sessions are conducted for employees handling Consumer grievances.</p>
            </div>
          </section>

          {/* Data Retention */}
          <section id="retention" className="mb-12 scroll-mt-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-cyan-600 rounded-xl">
                <Database className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Data Retention</h2>
            </div>
            <div className="bg-cyan-50 rounded-xl p-6 border border-cyan-100">
              <p>DigitalRakshak will maintain all complaint, query or request records securely and confidentially for the period required under applicable law.</p>
            </div>
          </section>

          {/* Channels for Raising Queries and Complaints */}
          <section id="channels" className="mb-12 scroll-mt-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-pink-600 rounded-xl">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Channels for Raising Queries and Complaints</h2>
            </div>
            <div className="space-y-5">
              <div className="bg-pink-50 rounded-xl p-6 border border-pink-100">
                <p className="mb-4">DigitalRakshak provides the following channels through which Consumers can raise queries, requests, or complaints. These are designed to be easily accessible and consumer-friendly.</p>
                
                <div className="space-y-4 mt-4">
                  <div className="bg-white rounded-lg p-4 border border-pink-200">
                    <div className="flex items-center gap-3 mb-2">
                      <Mail className="w-5 h-5 text-pink-600" />
                      <span className="font-semibold text-gray-800">Email:</span>
                    </div>
                    <p className="text-gray-700">Complaints may be addressed to <span className="font-mono font-semibold text-pink-700">grievance@DigitalRakshak.com</span></p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-pink-200">
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin className="w-5 h-5 text-pink-600" />
                      <span className="font-semibold text-gray-800">Correspondence:</span>
                    </div>
                    <p className="text-gray-700">Written complaints may be sent to 1st Floor, Plot No. 1195/1, Sector 2A, Sector 2, Kasturba Vidyalaya, Gandhinagar, Gujarat - 382007.</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-pink-200">
                    <div className="flex items-center gap-3 mb-2">
                      <UserCog className="w-5 h-5 text-pink-600" />
                      <span className="font-semibold text-gray-800">Escalation Contacts:</span>
                    </div>
                    <p className="text-gray-700">Consumers may escalate complaints to the Data Protection Officer at DigitalRakshak, at <span className="font-mono font-semibold text-pink-700">dpo@DigitalRakshak.com</span></p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-pink-200">
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="w-5 h-5 text-pink-600" />
                      <span className="font-semibold text-gray-800">Resolution Timelines:</span>
                    </div>
                    <p className="text-gray-700">DigitalRakshak will endeavour on a best effort basis to resolve the dispute within 30 calendar days from the receipt of the written grievance.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <section id="disclaimer" className="mb-12 scroll-mt-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-amber-600 rounded-xl">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Disclaimer</h2>
            </div>
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
              <p>For any queries, requests, or complaints pertaining to a credit institution or credit information companies, Consumers can reach out to the respective credit institution or credit information company.</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default ConsumerGrievanceRedressalPage;