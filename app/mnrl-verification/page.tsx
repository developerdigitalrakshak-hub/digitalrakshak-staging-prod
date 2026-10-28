"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
    Smartphone,
    ShieldCheck,
    CheckCircle2,
    Check,
    Zap,
    Search,
    ArrowRight,
    AlertTriangle,
    Database,
    FileText,
    Layers,
    BarChart3,
    BadgeCheck,
    Globe,
    Briefcase,
    Radio,
    UserX,
    Clock,
    ShieldAlert,
    CreditCard,
    ChevronDown,
    Building2,
    Calendar,
    Activity,
    Signal,
    Terminal,
    Copy,
} from "lucide-react";

const assetPathPrefix = "/assets";

const imgSvgRepoIconCarrier = `${assetPathPrefix}/e8dc9.svg`;
const imgEllipse20 = `${assetPathPrefix}/Ellipse 20.png`;
const imgFrame19 = `${assetPathPrefix}/643e6.png`;
const imgFrame81 = `${assetPathPrefix}/Frame 81.png`;
const imgFrame21 = `${assetPathPrefix}/Frame 21.png`;
const imgFrame20 = `${assetPathPrefix}/Frame 20.png`;
const imgFrame22 = `${assetPathPrefix}/Frame 22.png`;
const imgFrame77 = `${assetPathPrefix}/Frame 77.png`;
const imgRectangle6 = `${assetPathPrefix}/Rectangle 6.png`;
const imgRectangle7 = `${assetPathPrefix}/Rectangle 7.png`;
const imgPhotoRectangle = `${assetPathPrefix}/2116e.png`;
const imgLogo1 = `${assetPathPrefix}/a0e33.png`;
const imgEllipse21 = `${assetPathPrefix}/Ellipse 21.png`;
const imgEllipse11 = `${assetPathPrefix}/c0179.svg`;
const imgEllipse14 = `${assetPathPrefix}/5af1e.svg`;
const imgEllipse12 = `${assetPathPrefix}/bde5f.svg`;
const imgEllipse13 = `${assetPathPrefix}/19b47.svg`;
const imgEllipse18 = `${assetPathPrefix}/6e5dd.svg`;
const imgEllipse15 = `${assetPathPrefix}/Ellipse 15.png`;
const imgEllipse19 = `${assetPathPrefix}/Ellipse 19.png`;
const imgFrame70 = `${assetPathPrefix}/193cf.svg`;
const imgVector2 = `${assetPathPrefix}/50101.svg`;

const faqItems = [
    {
        q: "1. What is the TRAI MNRL Verification API?",
        a: "The TRAI MNRL Verification API allows enterprises to query the official Telecom Regulatory Authority of India Mobile Number Revocation List in real time, detecting disconnected, deactivated, or recycled phone numbers to prevent OTP fraud and account takeover.",
    },
    {
        q: "2. What is a recycled mobile number?",
        a: "When a subscriber deactivates their SIM card, telecom operators hold the number for 90 days before reassigning it to a new customer. If old accounts remain linked to that number, new users can accidentally or maliciously access legacy OTPs.",
    },
    {
        q: "3. Which telecom operators are covered in the API?",
        a: "Our API covers all Indian telecom operators including Reliance Jio, Bharti Airtel, Vodafone Idea (Vi), and BSNL across all telecom circles.",
    },
    {
        q: "4. What is the response latency and SLA?",
        a: "DigitalRakshak guarantees sub-300ms API response latency with 99.99% uptime SLA backed by enterprise redundant infrastructure.",
    },
    {
        q: "5. What parameters are returned in the MNRL API output?",
        a: "The response includes mobile number checked, revocation status (Active/Revoked), exact deactivation date, telecom operator, circle jurisdiction, number recycle flag, and account risk score.",
    },
    {
        q: "6. How do I integrate the TRAI MNRL API?",
        a: "Register on DigitalRakshak, obtain your production/sandbox API keys, and connect our clean REST API endpoints into your login or OTP dispatch pipeline within minutes.",
    },
];

function HeroSection() {
    const router = useRouter();
    const [selectedOperator, setSelectedOperator] = useState<"Jio" | "Airtel" | "Vi" | "BSNL">("Jio");

    return (
        <section className="relative min-h-0 lg:min-h-[100dvh] overflow-hidden px-[5%] lg:px-[6%] flex flex-col justify-between pt-24 sm:pt-28 lg:pt-24 pb-12 sm:pb-16">
            {/* Background Video with instant poster and gradient overlay (same as gst-verification-api) */}
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
                <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/40 to-black/90 lg:to-transparent" />
            </div>

            {/* Center Hero content */}
            <div className="relative z-10 flex-1 flex items-center py-4 lg:py-8">
                <div className="w-full max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-8 xl:gap-12 items-center">
                    {/* Left content */}
                    <div className="lg:col-span-6 flex flex-col justify-between text-left">
                        <div>
                            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3">
                                <Smartphone className="w-4 h-4 text-[#76bbf8]" />
                                TRAI Mobile Number Revocation Intelligence
                            </span>
                            <h1 className="text-white text-[clamp(28px,7vw,54px)] font-black leading-[1.1] tracking-tight">
                                TRAI MNRL<br />Verification API
                            </h1>
                            <p className="text-white text-[15px] sm:text-[18px] lg:text-[21px] font-medium mt-3 sm:mt-4 leading-relaxed">
                                Real-Time Mobile Revocation Detection to Stop OTP Hijacking & SIM-Swap Fraud
                            </p>
                        </div>

                        <div className="mt-5 sm:mt-8">
                            <p className="text-white/90 text-[14px] sm:text-[16px] lg:text-[17px] font-normal leading-relaxed max-w-[560px]">
                                Query official TRAI Mobile Number Revocation List (MNRL) in real time to detect recycled, disconnected, or reassigned phone numbers and safeguard customer accounts before dispatching high-value OTPs.
                            </p>
                            <div className="flex gap-3 sm:gap-4 mt-6 sm:mt-8 items-center flex-wrap">
                                <button
                                    onClick={() => router.push('/register')}
                                    className="bg-[#B0DAFF] hover:bg-[#76bbf8] text-[#0a1e36] font-semibold text-[14px] sm:text-[15px] px-6 sm:px-8 py-2.5 sm:py-3 rounded-[18px] shadow-[2px_2px_11.4px_0px_#00000040,_5px_-2px_8.7px_0px_#0084FF6B_inset] transition-all flex items-center gap-2 cursor-pointer"
                                >
                                    <span>Contact US</span>
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => router.push('/contact')}
                                    className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-[14px] sm:text-[15px] px-6 sm:px-8 py-2.5 sm:py-3 rounded-[18px] backdrop-blur-md transition-all cursor-pointer"
                                >
                                    Talk to an API Specialist
                                </button>
                            </div>

                            {/* Tag capabilities */}
                            <div className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8 pt-4 border-t border-white/10 flex-wrap text-white/80 text-[12.5px] sm:text-[13.5px]">
                                <span className="flex items-center gap-1.5"><BadgeCheck className="w-4 h-4 text-[#76bbf8]" /> 100% TRAI Sync</span>
                                <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-[#76bbf8]" /> &lt; 300ms Latency</span>
                                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#76bbf8]" /> 99.99% Uptime SLA</span>
                                <span className="flex items-center gap-1.5"><Radio className="w-4 h-4 text-[#76bbf8]" /> All Telecoms (Jio, Airtel, Vi, BSNL)</span>
                            </div>
                        </div>
                    </div>

                    {/* Right column: Interactive Live Telecom MNRL Simulator Mockup */}
                    <div className="lg:col-span-6 relative flex justify-center">
                        <div className="w-full max-w-[540px] rounded-3xl bg-[#0c101d]/90 backdrop-blur-2xl border border-white/15 p-5 sm:p-6 shadow-[0_25px_60px_rgba(0,0,0,0.85),_0_0_35px_rgba(59,130,246,0.18)]">
                            {/* Card Top Header */}
                            <div className="flex items-center justify-between pb-4 border-b border-white/10">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-md">
                                        <Radio className="w-5 h-5 animate-pulse" />
                                    </div>
                                    <div>
                                        <div className="text-white text-sm font-bold flex items-center gap-1.5">
                                            TRAI MNRL Live Gateway
                                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                                        </div>
                                        <div className="text-xs text-white/60">Official Central Registry Audit</div>
                                    </div>
                                </div>
                                <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[11px] font-semibold flex items-center gap-1">
                                    <Zap className="w-3 h-3" /> &lt; 280ms
                                </span>
                            </div>

                            {/* Operator Selector Tabs */}
                            <div className="my-4">
                                <div className="text-[11px] font-semibold text-white/60 uppercase tracking-wider mb-2">
                                    Simulate Telecom Provider
                                </div>
                                <div className="grid grid-cols-4 gap-2">
                                    {(["Jio", "Airtel", "Vi", "BSNL"] as const).map((op) => (
                                        <button
                                            key={op}
                                            onClick={() => setSelectedOperator(op)}
                                            className={`py-1.5 px-2 rounded-xl text-xs font-semibold transition-all border ${
                                                selectedOperator === op
                                                    ? "bg-blue-600/30 border-blue-400 text-white shadow-[0_0_12px_rgba(59,130,246,0.4)]"
                                                    : "bg-white/[0.04] border-white/10 text-white/70 hover:bg-white/[0.08]"
                                            }`}
                                        >
                                            {op}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Live Mobile Number Audit Box */}
                            <div className="bg-[#131828] rounded-2xl p-4 border border-white/10 space-y-3">
                                <div className="flex items-center justify-between">
                                    <div className="text-xs text-white/60 font-medium">Target Phone Number</div>
                                    <span className="text-[11px] font-mono text-[#76bbf8] bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-400/20">
                                        India (+91)
                                    </span>
                                </div>
                                <div className="flex items-center justify-between text-base font-mono text-white font-bold bg-[#090c16] px-3.5 py-2.5 rounded-xl border border-white/10">
                                    <span>+91 98765 43210</span>
                                    <span className="text-xs font-sans px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center gap-1">
                                        <CheckCircle2 className="w-3.5 h-3.5" /> ACTIVE
                                    </span>
                                </div>

                                {/* Results Grid inside Box */}
                                <div className="grid grid-cols-2 gap-2.5 pt-1 text-xs">
                                    <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                                        <div className="text-white/50 text-[10.5px]">Recycle Flag</div>
                                        <div className="text-emerald-300 font-semibold mt-0.5 flex items-center gap-1">
                                            <ShieldCheck className="w-3.5 h-3.5" /> Safe (Not Recycled)
                                        </div>
                                    </div>
                                    <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                                        <div className="text-white/50 text-[10.5px]">Deactivation Date</div>
                                        <div className="text-white font-semibold mt-0.5">None (Active SIM)</div>
                                    </div>
                                    <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                                        <div className="text-white/50 text-[10.5px]">Carrier & Circle</div>
                                        <div className="text-white font-semibold mt-0.5">{selectedOperator} • Mumbai & MH</div>
                                    </div>
                                    <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                                        <div className="text-white/50 text-[10.5px]">Account Takeover Risk</div>
                                        <div className="text-blue-300 font-semibold mt-0.5 flex items-center gap-1">
                                            <Zap className="w-3.5 h-3.5 text-blue-400" /> 0% (Low Risk)
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Live Trust Verdict */}
                            <div className="mt-4 p-3 rounded-2xl bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-400/30 flex items-center justify-between text-xs">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white">
                                        <Check className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="text-white font-semibold">Safe for OTP & Password Reset</span>
                                </div>
                                <span className="text-[#76bbf8] font-bold">100% TRAI Verified</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom 4 Key Metrics Bar */}
            <div className="relative z-10 w-full max-w-[1400px] mx-auto pt-6 border-t border-white/10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { label: "Latency", value: "< 300ms", desc: "Sub-second response" },
                        { label: "Data Source", value: "100% TRAI Sync", desc: "Official MNRL registry query" },
                        { label: "Uptime SLA", value: "99.99%", desc: "Bank-grade infrastructure" },
                        { label: "Coverage", value: "All Telecoms", desc: "Jio, Airtel, Vi, BSNL" },
                    ].map((metric, i) => (
                        <div
                            key={i}
                            className="p-4 rounded-2xl bg-[#0e1220]/80 backdrop-blur-xl border border-white/10 shadow-lg text-center sm:text-left hover:border-blue-400/40 transition-all"
                        >
                            <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-blue-400 via-indigo-300 to-white bg-clip-text text-transparent">
                                {metric.value}
                            </div>
                            <div className="text-sm font-bold text-white mt-0.5">{metric.label}</div>
                            <div className="text-xs text-white/60">{metric.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function WhyItMattersSection() {
    const benefits = [
        {
            title: "Prevent Account Hijacking",
            desc: "Expose recycled mobile numbers reassigned to new users before sending confidential OTPs.",
            icon: AlertTriangle,
            color: "text-red-400",
            bg: "bg-red-500/15",
            border: "border-red-500/30",
        },
        {
            title: "Clean Stale Database",
            desc: "Scrub database lists to flag disconnected or deactivated mobile numbers automatically.",
            icon: ShieldCheck,
            color: "text-blue-400",
            bg: "bg-blue-500/15",
            border: "border-blue-500/30",
        },
        {
            title: "Operator & Circle Check",
            desc: "Verify telecom service provider (Jio, Airtel, Vi, BSNL) and state circle location.",
            icon: Radio,
            color: "text-emerald-400",
            bg: "bg-emerald-500/15",
            border: "border-emerald-500/30",
        },
        {
            title: "Sub-Second Response",
            desc: "Query TRAI MNRL revocation databases in <300ms for instant login & OTP security.",
            icon: Zap,
            color: "text-amber-400",
            bg: "bg-amber-500/15",
            border: "border-amber-500/30",
        },
    ];

    const bulletPoints = [
        "Prevent Account Takeover (ATO): Stop sending sensitive OTPs to recycled phone numbers assigned to new users.",
        "Automate Database Scrubbing: Clean stale mobile contact databases before dispatching high-priority SMS alerts.",
        "TRAI Registry Compliance: Direct query to official TRAI Mobile Number Revocation List (MNRL) files.",
        "Reduce SMS & Fraud Costs: Eliminate wasted OTP dispatch charges on disconnected or deactivated lines.",
    ];

    return (
        <section className="relative py-16 sm:py-24 px-[5%] lg:px-[6%] bg-[#05070f] overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="relative z-10 max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 items-center">
                {/* Left Description */}
                <div className="lg:col-span-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 text-[#76bbf8] border border-blue-400/30 text-xs font-semibold uppercase tracking-wider mb-4">
                        Telecom Risk & Account Takeover Prevention
                    </span>
                    <h2 className="text-white text-[clamp(26px,4vw,44px)] font-bold tracking-tight mb-6 leading-tight">
                        Why Mobile Number Revocation Check is Critical
                    </h2>
                    <p className="text-white/80 text-[15px] sm:text-[17px] leading-relaxed mb-4">
                        When a subscriber deactivates their mobile number, telecom operators recycle and reassign the phone number to a new individual after 90 days. If your system sends OTPs or sensitive alerts to recycled numbers, new subscribers can easily hijack legacy accounts.
                    </p>
                    <p className="text-white/70 text-[14px] sm:text-[16px] leading-relaxed mb-8">
                        DigitalRakshak&apos;s TRAI MNRL Verification API queries official Telecom Regulatory Authority of India (TRAI) revocation registries in real time, identifying disconnected phone numbers, deactivation timestamps, and recycling flags.
                    </p>

                    <ul className="space-y-3.5">
                        {bulletPoints.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-white/90 text-sm sm:text-base leading-relaxed">
                                <CheckCircle2 className="w-5 h-5 text-[#76bbf8] flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right 4 Cards */}
                <div className="lg:col-span-6 grid sm:grid-cols-2 gap-5">
                    {benefits.map((b, i) => (
                        <div
                            key={i}
                            className={`p-6 rounded-2xl bg-[#0c101d]/90 backdrop-blur-xl border ${b.border} hover:border-blue-400/50 hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-all duration-300 group`}
                        >
                            <div className={`w-12 h-12 rounded-xl ${b.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <b.icon className={`w-6 h-6 ${b.color}`} />
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2">{b.title}</h3>
                            <p className="text-white/70 text-xs sm:text-sm leading-relaxed">{b.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function OutputParametersSection() {
    const parameters = [
        {
            title: "Mobile Number Checked",
            desc: "10-digit mobile phone number verified against MNRL list.",
            icon: Smartphone,
            color: "text-blue-400",
        },
        {
            title: "Revocation Status",
            desc: "Real-time status: Active, Revoked, Disconnected, or Recycled.",
            icon: BadgeCheck,
            color: "text-emerald-400",
        },
        {
            title: "Deactivation Timestamp",
            desc: "Exact date and time when the mobile line was disconnected.",
            icon: Clock,
            color: "text-purple-400",
        },
        {
            title: "Telecom Provider (TSP)",
            desc: "Telecom service operator (Jio, Airtel, Vodafone Idea, BSNL).",
            icon: Radio,
            color: "text-amber-400",
        },
        {
            title: "Telecom Circle Jurisdiction",
            desc: "State or telecom circle governing the mobile number.",
            icon: Globe,
            color: "text-indigo-400",
        },
        {
            title: "Number Recycle Flag",
            desc: "Flag indicating whether the number has been reassigned to a new user.",
            icon: UserX,
            color: "text-rose-400",
        },
        {
            title: "Last Activity Timestamp",
            desc: "Most recent TRAI registry update timestamp for the mobile line.",
            icon: Layers,
            color: "text-teal-400",
        },
        {
            title: "Account Risk Score",
            desc: "Calculated risk indicator for OTP dispatch & authentication.",
            icon: ShieldAlert,
            color: "text-cyan-400",
        },
    ];

    return (
        <section className="relative py-16 sm:py-24 px-[5%] lg:px-[6%] bg-black">
            <div className="relative z-10 max-w-[1400px] mx-auto">
                <div className="text-center mb-14">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/15 text-purple-300 border border-purple-400/30 text-xs font-semibold uppercase tracking-wider mb-3">
                        Authoritative TRAI Data Extraction
                    </span>
                    <h2 className="text-white text-[clamp(26px,4vw,44px)] font-bold tracking-tight mb-4">
                        Verified MNRL Output Parameters
                    </h2>
                    <p className="text-white/70 text-[15px] sm:text-[17px] max-w-2xl mx-auto">
                        Our API returns complete mobile revocation parameters directly from TRAI central registries.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {parameters.map((param, i) => (
                        <div
                            key={i}
                            className="p-5 sm:p-6 rounded-2xl bg-[#0c101d]/90 backdrop-blur-xl border border-white/10 hover:border-blue-400/40 hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)] transition-all duration-300 group flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2.5 rounded-xl bg-blue-500/15 group-hover:scale-110 transition-transform">
                                        <param.icon className={`w-5 h-5 ${param.color}`} />
                                    </div>
                                    <h3 className="text-white font-bold text-sm sm:text-base leading-snug">{param.title}</h3>
                                </div>
                                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">{param.desc}</p>
                            </div>
                            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-[#76bbf8]">
                                <span>TRAI Standard Field</span>
                                <Check className="w-3.5 h-3.5" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ConnectAPISection() {
    const [copied, setCopied] = useState(false);

    const codeSnippet = `{
  "status": "success",
  "code": 200,
  "data": {
    "mobile_number": "9876543210",
    "country_code": "+91",
    "revocation_status": "ACTIVE",
    "is_recycled": false,
    "deactivation_timestamp": null,
    "telecom_operator": "Reliance Jio",
    "telecom_circle": "Maharashtra & Goa",
    "last_sync_timestamp": "2026-10-24T05:00:00Z",
    "account_takeover_risk": "LOW",
    "safe_for_otp": true,
    "response_latency_ms": 248
  }
}`;

    const handleCopy = () => {
        navigator.clipboard.writeText(codeSnippet);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="relative py-16 sm:py-24 px-[5%] lg:px-[6%] bg-[#05070f]">
            <div className="relative z-10 max-w-[1400px] mx-auto">
                <div className="text-center mb-12">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 text-[#76bbf8] border border-blue-400/30 text-xs font-semibold uppercase tracking-wider mb-3">
                        Developer-Friendly REST API
                    </span>
                    <h2 className="text-white text-[clamp(26px,4vw,44px)] font-bold tracking-tight mb-4">
                        Connect with TRAI MNRL API in Minutes
                    </h2>
                    <p className="text-white/70 text-[15px] sm:text-[17px] max-w-2xl mx-auto">
                        Ultra-fast REST API designed for high-throughput login, signup, and OTP authentication workflows.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-center max-w-[1200px] mx-auto">
                    {/* Left: Code Snippet */}
                    <div className="lg:col-span-7 rounded-2xl bg-[#090c16] border border-white/15 overflow-hidden shadow-2xl">
                        <div className="flex items-center justify-between px-4 py-3 bg-[#111624] border-b border-white/10">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                                <span className="text-xs font-mono text-white/60 ml-2">POST /api/v1/telecom/mnrl-verify</span>
                            </div>
                            <button
                                onClick={handleCopy}
                                className="text-xs text-white/70 hover:text-white flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 transition-all cursor-pointer"
                            >
                                <Copy className="w-3.5 h-3.5" />
                                {copied ? "Copied!" : "Copy JSON"}
                            </button>
                        </div>
                        <pre className="p-4 sm:p-5 text-xs sm:text-sm font-mono text-emerald-300 overflow-x-auto [scrollbar-width:thin] leading-relaxed">
                            {codeSnippet}
                        </pre>
                    </div>

                    {/* Right: Key Integration Specs */}
                    <div className="lg:col-span-5 space-y-4">
                        <div className="p-5 rounded-2xl bg-[#0c101d] border border-white/10">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 rounded-lg bg-blue-500/15 text-[#76bbf8]">
                                    <Zap className="w-4 h-4" />
                                </div>
                                <h3 className="text-white font-bold text-base">Sub-300ms SLA</h3>
                            </div>
                            <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                                Direct redundant connectivity to national telecom databases for instantaneous response before OTP dispatch.
                            </p>
                        </div>

                        <div className="p-5 rounded-2xl bg-[#0c101d] border border-white/10">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 rounded-lg bg-emerald-500/15 text-emerald-400">
                                    <ShieldCheck className="w-4 h-4" />
                                </div>
                                <h3 className="text-white font-bold text-base">Enterprise Security & Compliance</h3>
                            </div>
                            <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                                ISO 27001 certified architecture, encrypted with TLS 1.3 and AES-256 with full audit trail logging.
                            </p>
                        </div>

                        <div className="p-5 rounded-2xl bg-[#0c101d] border border-white/10">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 rounded-lg bg-purple-500/15 text-purple-400">
                                    <Layers className="w-4 h-4" />
                                </div>
                                <h3 className="text-white font-bold text-base">High-Volume Batch Processing</h3>
                            </div>
                            <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                                Support for asynchronous bulk validation up to 50,000 queries per minute for database scrubbing.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function HowItWorksSection() {
    const steps = [
        {
            step: "01",
            title: "Input Mobile Number",
            desc: "Pass the 10-digit mobile number via REST API or dashboard before sending OTP.",
            icon: FileText,
        },
        {
            step: "02",
            title: "Query TRAI Registry",
            desc: "Our gateway queries central TRAI Mobile Number Revocation List (MNRL) databases.",
            icon: Database,
        },
        {
            step: "03",
            title: "Disconnection Audit",
            desc: "System audits deactivation dates, operator recycling flags, and account risk.",
            icon: Search,
        },
        {
            step: "04",
            title: "Receive JSON Output",
            desc: "Get clean, structured JSON payload in <300ms to allow or block OTP dispatch.",
            icon: BarChart3,
        },
    ];

    return (
        <section className="relative py-16 sm:py-24 px-[5%] lg:px-[6%] bg-black">
            <div className="relative z-10 max-w-[1400px] mx-auto">
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 text-[#76bbf8] border border-blue-400/30 text-xs font-semibold uppercase tracking-wider mb-3">
                        Simple 4-Step Process
                    </span>
                    <h2 className="text-white text-[clamp(26px,4vw,44px)] font-bold tracking-tight mb-4">
                        How MNRL Verification Works
                    </h2>
                    <p className="text-white/70 text-[15px] sm:text-[17px] max-w-2xl mx-auto">
                        Four simple, automated steps to check any Indian mobile number against TRAI revocation records.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((item, i) => (
                        <div
                            key={i}
                            className="relative overflow-hidden p-6 rounded-2xl bg-[#0c101d]/90 backdrop-blur-xl border border-white/10 hover:border-blue-400/40 hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-all duration-300 group text-center flex flex-col justify-between"
                        >
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500" />
                            <div>
                                <div className="w-12 h-12 rounded-full bg-blue-500/20 text-[#76bbf8] font-black flex items-center justify-center mb-4 mx-auto text-base group-hover:scale-110 transition-transform">
                                    {item.step}
                                </div>
                                <h3 className="text-white text-base sm:text-lg font-bold mb-2">{item.title}</h3>
                                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function IndustryUseCasesSection() {
    const useCases = [
        {
            title: "Banks & Fintech Platforms",
            desc: "Prevent SIM-swap and recycled number account takeover (ATO) by verifying mobile revocation status prior to sending OTPs or authorizing high-value transfers.",
            icon: CreditCard,
            features: ["OTP authentication protection", "SIM swap fraud mitigation", "Account takeover prevention"],
        },
        {
            title: "E-Commerce & Marketplaces",
            desc: "Clean user contact databases to prompt legacy account holders to update their registered phone numbers before password resets or order confirmations.",
            icon: Briefcase,
            features: ["Contact registry cleaning", "Password reset security", "Account recovery audit"],
        },
        {
            title: "Credit Bureaus & Loan Apps",
            desc: "Audit mobile number tenure and active status during digital loan underwriting to ensure the applicant is the legitimate owner of the phone line.",
            icon: ShieldCheck,
            features: ["Phone line tenure audit", "Loan applicant validation", "Identity fraud reduction"],
        },
        {
            title: "Telecom & Bulk SMS Operators",
            desc: "Scrub DND and revoked mobile number lists from marketing SMS dispatch engines to eliminate wasted messaging costs and comply with TRAI regulations.",
            icon: Radio,
            features: ["SMS cost optimization", "DND & revoked line scrubbing", "TRAI regulation compliance"],
        },
    ];

    return (
        <section className="relative py-16 sm:py-24 px-[5%] lg:px-[6%] bg-[#05070f]">
            <div className="relative z-10 max-w-[1400px] mx-auto">
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/30 text-xs font-semibold uppercase tracking-wider mb-3">
                        Enterprise Applications
                    </span>
                    <h2 className="text-white text-[clamp(26px,4vw,44px)] font-bold tracking-tight mb-4">
                        Built for Security, Banking & Messaging Verticals
                    </h2>
                    <p className="text-white/70 text-[15px] sm:text-[17px] max-w-2xl mx-auto">
                        Empowering banks, fintechs, e-commerce platforms, and bulk SMS providers.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                    {useCases.map((useCase, i) => (
                        <div
                            key={i}
                            className="p-6 sm:p-8 rounded-2xl bg-[#0c101d]/90 backdrop-blur-xl border border-white/10 hover:border-blue-400/40 hover:shadow-[0_10px_35px_rgba(0,0,0,0.6)] transition-all duration-300 group flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-500/15 flex items-center justify-center text-[#76bbf8] group-hover:scale-110 transition-transform">
                                        <useCase.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white">{useCase.title}</h3>
                                </div>
                                <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6">{useCase.desc}</p>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                                {useCase.features.map((feat, idx) => (
                                    <span
                                        key={idx}
                                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/15 text-[#76bbf8] border border-blue-400/30"
                                    >
                                        <CheckCircle2 className="w-3.5 h-3.5" />
                                        {feat}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function AdvantageComparisonSection() {
    const comparisonRows = [
        { feature: "Response Latency", us: "< 300ms", manual: "Days / Manual Request", scraper: "5 - 10 Seconds" },
        { feature: "Live TRAI Registry Sync", us: "Direct Real-time Sync", manual: "Outdated Lists", scraper: "Cached / Fragile" },
        { feature: "Full Data Output", us: "Operator, Circle & Deactivation Date", manual: "Limited View", scraper: "Unreliable" },
        { feature: "Bulk Processing", us: "Up to 50,000 / min", manual: "One by One", scraper: "Blocked Easily" },
        { feature: "Enterprise SLA Uptime", us: "99.99% Guaranteed", manual: "N/A", scraper: "Frequent Downtime" },
        { feature: "Data Security", us: "ISO 27001 / AES-256", manual: "No Audit Trail", scraper: "Unsecured" },
    ];

    return (
        <section className="relative py-16 sm:py-24 px-[5%] lg:px-[6%] bg-black">
            <div className="relative z-10 max-w-[1400px] mx-auto">
                <div className="text-center mb-14">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 text-[#76bbf8] border border-blue-400/30 text-xs font-semibold uppercase tracking-wider mb-3">
                        Benchmark Analysis
                    </span>
                    <h2 className="text-white text-[clamp(26px,4vw,44px)] font-bold tracking-tight mb-4">
                        The DigitalRakshak Advantage
                    </h2>
                    <p className="text-white/70 text-[15px] sm:text-[17px] max-w-xl mx-auto">
                        How DigitalRakshak TRAI MNRL API compares to manual operator searches and basic web scrapers.
                    </p>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-white/15 bg-[#0a0d18] shadow-2xl [scrollbar-width:thin]">
                    <table className="w-full text-left border-collapse min-w-[640px]">
                        <thead>
                            <tr className="border-b border-white/10 bg-white/[0.03]">
                                <th className="p-4 sm:p-5 font-bold text-white text-sm sm:text-base">Feature / Parameter</th>
                                <th className="p-4 sm:p-5 font-bold text-[#76bbf8] bg-blue-500/10 text-sm sm:text-base border-x border-blue-500/20">
                                    DigitalRakshak API ★
                                </th>
                                <th className="p-4 sm:p-5 font-semibold text-white/60 text-sm">Manual Operator Lookup</th>
                                <th className="p-4 sm:p-5 font-semibold text-white/60 text-sm">Basic Web Scrapers</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10 text-xs sm:text-sm">
                            {comparisonRows.map((row, i) => (
                                <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                                    <td className="p-4 sm:p-5 font-semibold text-white">{row.feature}</td>
                                    <td className="p-4 sm:p-5 font-bold text-[#76bbf8] bg-blue-500/5 border-x border-blue-500/20">
                                        {row.us}
                                    </td>
                                    <td className="p-4 sm:p-5 text-white/60">{row.manual}</td>
                                    <td className="p-4 sm:p-5 text-white/60">{row.scraper}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faqs" className="relative py-12 sm:py-16 px-[5%] lg:px-[6%] bg-black">
            <div className="max-w-[1400px] mx-auto">
                <h2 className="text-white text-[clamp(28px,3vw,42px)] font-bold mb-2 tracking-tight">
                    Frequently Asked Questions
                </h2>
                <p className="text-white/70 text-[15px] sm:text-[17px] mb-10">
                    Everything you need to know about our TRAI MNRL Verification solution
                </p>

                <div className="divide-y divide-white/20">
                    {faqItems.map((item, i) => (
                        <div key={i}>
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between py-6 text-left group transition-colors hover:text-white cursor-pointer"
                            >
                                <span className="text-white text-[17px] sm:text-[20px] lg:text-[22px] font-semibold leading-snug tracking-tight pr-6">
                                    {item.q}
                                </span>
                                <div className="flex-shrink-0 size-6">
                                    <img
                                        alt=""
                                        className="w-full h-full transition-transform duration-200"
                                        src={imgVector2}
                                        style={{
                                            transform:
                                                openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                                        }}
                                    />
                                </div>
                            </button>
                            {openIndex === i && (
                                <div className="pb-6">
                                    <p className="w-full md:w-[85%] lg:w-[80%] text-[#d1d5db] text-[15px] sm:text-[16.5px] lg:text-[18px] font-normal leading-relaxed tracking-normal">
                                        {item.a}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CTASection() {
    const router = useRouter();

    return (
        <section className="relative py-20 px-[5%] lg:px-[6%] bg-black overflow-hidden">
            {/* Ambient Radial Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/20 to-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="relative z-10 max-w-[1100px] mx-auto text-center">
                <div className="p-8 sm:p-14 rounded-3xl bg-[#0d1120]/90 backdrop-blur-2xl border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/15 text-[#76bbf8] border border-blue-400/30 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4">
                        <ShieldCheck className="w-4 h-4 text-[#76bbf8]" />
                        Stop OTP Fraud & SIM-Swap Today
                    </span>
                    <h2 className="text-white text-[clamp(28px,4.5vw,50px)] font-black tracking-tight mb-5 leading-tight">
                        Ready to Automate TRAI MNRL Verification & Prevent OTP Fraud?
                    </h2>
                    <p className="text-white/80 text-[15px] sm:text-[18px] max-w-2xl mx-auto mb-8 leading-relaxed">
                        Get instant API sandbox keys and start verifying mobile revocation status in sub-seconds.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <button
                            onClick={() => router.push('/register')}
                            className="bg-[#B0DAFF] hover:bg-[#76bbf8] text-[#0a1e36] font-bold text-base px-8 py-3.5 rounded-full shadow-[2px_2px_11.4px_0px_#00000040,_5px_-2px_8.7px_0px_#0084FF6B_inset] transition-all flex items-center gap-2 cursor-pointer"
                        >
                            <span>Get Started Now</span>
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => router.push('/contact')}
                            className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-base px-8 py-3.5 rounded-full backdrop-blur-md transition-all cursor-pointer"
                        >
                            Talk to Sales
                        </button>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-6 text-xs text-white/60 flex-wrap">
                        <span className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Real-time TRAI Sync
                        </span>
                        <span className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Sub-300ms SLA
                        </span>
                        <span className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> ISO 27001 Certified
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function MNRLVerificationPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "TRAI MNRL Verification API for Enterprises",
        "applicationCategory": "SecurityApplication",
        "operatingSystem": "All",
        "provider": {
            "@type": "Organization",
            "name": "DigitalRakshak",
            "url": "https://digitalrakshak.com",
        },
        "description":
            "Query official TRAI Mobile Number Revocation List (MNRL) in real time to detect recycled, disconnected, or reassigned phone numbers and prevent OTP hijacking & SIM swap fraud.",
        "keywords": [
            "TRAI MNRL Verification API",
            "Mobile Number Revocation List",
            "Recycled Phone Number Detection",
            "SIM Swap Fraud Prevention",
            "OTP Hijacking Mitigation",
            "TRAI Database Query",
            "Account Takeover Protection",
        ],
    };

    return (
        <div className="align-center bg-black min-h-screen w-full font-[Inter] overflow-x-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <HeroSection />
            <WhyItMattersSection />
            <OutputParametersSection />
            <ConnectAPISection />
            <HowItWorksSection />
            <IndustryUseCasesSection />
            <AdvantageComparisonSection />
            <FAQSection />
            <CTASection />
        </div>
    );
}
