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
    Cpu,
    Workflow,
    Sliders,
    Server,
    Lock,
    KeyRound,
    Network,
    Code2,
    FolderKanban,
} from "lucide-react";

const assetPathPrefix = "/assets";
const imgVector2 = `${assetPathPrefix}/50101.svg`;

const faqItems = [
    {
        q: "1. What is an MNRL Check API?",
        a: "An MNRL Check API is an application programming interface designed to initiate checks against a Mobile Number Revocation List. It enables businesses to incorporate mobile number revocation list checking into their digital applications and verification workflows.",
    },
    {
        q: "2. What does MNRL stand for?",
        a: "MNRL stands for Mobile Number Revocation List. The MNRL Check API provides an endpoint for submitting mobile numbers for checking against this list.",
    },
    {
        q: "3. What information is required to use the MNRL Check API?",
        a: "The API request requires a mobile number provided through the phoneNumber parameter. The request must also include the required Authorization token, API key and Content-Type headers.",
    },
    {
        q: "4. What is the request method for the MNRL Check API?",
        a: "The documented MNRL Check endpoint uses the HTTP POST method and accepts a JSON request body.",
    },
    {
        q: "5. Can MNRL Check API be integrated with existing business applications?",
        a: "Yes. The API can be integrated into business applications and technology platforms through its documented endpoint and authentication requirements.",
    },
    {
        q: "6. Does MNRL Check API require OTP verification?",
        a: "The supplied API documentation does not specify whether an OTP is required. Please refer to the applicable API documentation and service requirements for confirmation.",
    },
    {
        q: "7. What information does the MNRL Check API return?",
        a: "The exact response fields and result attributes should be confirmed using the complete API response documentation. The supplied screenshot establishes the request structure but does not provide sufficient information to describe the response fields.",
    },
    {
        q: "8. Who can use the MNRL Check API?",
        a: "Businesses, fintech companies, financial institutions, enterprises and technology platforms can explore the API for relevant mobile number checking and verification requirements.",
    },
    {
        q: "9. How can I get access to DigitalRakshak's MNRL Check API?",
        a: "Businesses can contact DigitalRakshak to explore API access, obtain the required credentials and understand the integration requirements.",
    },
    {
        q: "10. Is the MNRL Check API available for testing?",
        a: "The supplied API documentation screenshot displays a sandbox testing environment. Contact DigitalRakshak to obtain the applicable sandbox access details.",
    },
];

function HeroSection() {
    const router = useRouter();
    const [selectedOperator, setSelectedOperator] = useState<"Jio" | "Airtel" | "Vi" | "BSNL">("Jio");

    return (
        <section className="relative min-h-0 lg:min-h-[100dvh] overflow-hidden px-[5%] lg:px-[6%] flex flex-col justify-between pt-24 sm:pt-28 lg:pt-24 pb-12 sm:pb-16">
            {/* Background Video with instant poster and gradient overlay */}
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
                                Mobile Verification API
                            </span>
                            <h1 className="text-white text-[clamp(28px,7vw,54px)] font-black leading-[1.1] tracking-tight">
                                Mobile Number Revocation List (MNRL) Check API
                            </h1>
                            <p className="text-white text-[15px] sm:text-[18px] lg:text-[21px] font-medium mt-3 sm:mt-4 leading-relaxed">
                                Check Mobile Numbers Through an API-Driven Verification Process.
                            </p>
                        </div>

                        <div className="mt-5 sm:mt-8">
                            <p className="text-white/90 text-[14px] sm:text-[16px] lg:text-[17px] font-normal leading-relaxed max-w-[560px]">
                                Integrate Mobile Number Revocation List (MNRL) checking into your business applications with DigitalRakshak&apos;s MNRL Check API. Submit mobile numbers through a structured API request and incorporate MNRL checking capabilities into your existing verification, customer onboarding and business workflows.
                            </p>
                            <div className="flex gap-3 sm:gap-4 mt-6 sm:mt-8 items-center flex-wrap">
                                <button
                                    onClick={() => router.push('/register')}
                                    className="bg-[#B0DAFF] hover:bg-[#76bbf8] text-[#0a1e36] font-semibold text-[14px] sm:text-[15px] px-6 sm:px-8 py-2.5 sm:py-3 rounded-[18px] shadow-[2px_2px_11.4px_0px_#00000040,_5px_-2px_8.7px_0px_#0084FF6B_inset] transition-all flex items-center gap-2 cursor-pointer"
                                >
                                    <span>Get API Access</span>
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => router.push('/contact')}
                                    className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-[14px] sm:text-[15px] px-6 sm:px-8 py-2.5 sm:py-3 rounded-[18px] backdrop-blur-md transition-all cursor-pointer"
                                >
                                    Book a Meeting
                                </button>
                            </div>

                            {/* Service Highlights */}
                            <div className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8 pt-4 border-t border-white/10 flex-wrap text-white/80 text-[12.5px] sm:text-[13.5px]">
                                <span className="flex items-center gap-1.5"><BadgeCheck className="w-4 h-4 text-[#76bbf8]" /> Mobile Number Check</span>
                                <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-[#76bbf8]" /> MNRL Lookup</span>
                                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#76bbf8]" /> API-Based Verification</span>
                                <span className="flex items-center gap-1.5"><Workflow className="w-4 h-4 text-[#76bbf8]" /> Business Integration</span>
                            </div>
                        </div>
                    </div>

                    {/* Right column: Interactive Live MNRL Simulator Mockup */}
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
                                            MNRL Check API Gateway
                                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                                        </div>
                                        <div className="text-xs text-white/60">Structured Verification Endpoint</div>
                                    </div>
                                </div>
                                <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[11px] font-semibold flex items-center gap-1">
                                    <Zap className="w-3 h-3" /> Sandbox Ready
                                </span>
                            </div>

                            {/* Operator Selector Tabs */}
                            <div className="my-4">
                                <div className="text-[11px] font-semibold text-white/60 uppercase tracking-wider mb-2">
                                    Simulate Telecom Circle &amp; Operator
                                </div>
                                <div className="grid grid-cols-4 gap-2">
                                    {(["Jio", "Airtel", "Vi", "BSNL"] as const).map((op) => (
                                        <button
                                            key={op}
                                            onClick={() => setSelectedOperator(op)}
                                            className={`py-1.5 px-2 rounded-xl text-xs font-semibold transition-all border ${selectedOperator === op
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
                                    <div className="text-xs text-white/60 font-medium">Input Parameter: phoneNumber</div>
                                    <span className="text-[11px] font-mono text-[#76bbf8] bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-400/20">
                                        Required String
                                    </span>
                                </div>
                                <div className="flex items-center justify-between text-base font-mono text-white font-bold bg-[#090c16] px-3.5 py-2.5 rounded-xl border border-white/10">
                                    <span>&quot;phoneNumber&quot;: &quot;97XXXXXXXX&quot;</span>
                                    <span className="text-xs font-sans px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center gap-1">
                                        <CheckCircle2 className="w-3.5 h-3.5" /> SUBMITTED
                                    </span>
                                </div>

                                {/* Results Grid inside Box */}
                                <div className="grid grid-cols-2 gap-2.5 pt-1 text-xs">
                                    <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                                        <div className="text-white/50 text-[10.5px]">Request Method</div>
                                        <div className="text-white font-semibold mt-0.5 flex items-center gap-1">
                                            <Terminal className="w-3.5 h-3.5 text-[#76bbf8]" /> POST
                                        </div>
                                    </div>
                                    <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                                        <div className="text-white/50 text-[10.5px]">Authentication</div>
                                        <div className="text-emerald-300 font-semibold mt-0.5 flex items-center gap-1">
                                            <KeyRound className="w-3.5 h-3.5" /> Bearer Token + API Key
                                        </div>
                                    </div>
                                    <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                                        <div className="text-white/50 text-[10.5px]">Content-Type</div>
                                        <div className="text-white font-semibold mt-0.5">application/json</div>
                                    </div>
                                    <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                                        <div className="text-white/50 text-[10.5px]">Simulation Operator</div>
                                        <div className="text-blue-300 font-semibold mt-0.5 flex items-center gap-1">
                                            <Radio className="w-3.5 h-3.5 text-blue-400" /> {selectedOperator} Network
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
                                    <span className="text-white font-semibold">Ready for Workflow Integration</span>
                                </div>
                                <span className="text-[#76bbf8] font-bold">DigitalRakshak API</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom 4 Key Metrics Bar */}
            <div className="relative z-10 w-full max-w-[1400px] mx-auto pt-6 border-t border-white/10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { label: "Mobile Number Check", value: "Direct Input", desc: "Submit numbers via structured request" },
                        { label: "MNRL Lookup", value: "Revocation List", desc: "Automate list checking seamlessly" },
                        { label: "API-Based Verification", value: "RESTful", desc: "JSON request with Bearer Auth" },
                        { label: "Business Integration", value: "Enterprise", desc: "Connect with onboarding & CRM workflows" },
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
            title: "Customer Interaction & Onboarding",
            desc: "Mobile numbers are an important part of digital customer interactions, onboarding and business verification workflows.",
            icon: Smartphone,
            color: "text-blue-400",
            bg: "bg-blue-500/15",
            border: "border-blue-500/30",
        },
        {
            title: "Revocation List Checks",
            desc: "Businesses may need to check mobile numbers against relevant revocation lists as part of their verification processes.",
            icon: ShieldCheck,
            color: "text-emerald-400",
            bg: "bg-emerald-500/15",
            border: "border-emerald-500/30",
        },
        {
            title: "Operational Simplicity",
            desc: "Without an integrated checking mechanism, incorporating such checks into existing business applications can require additional operational steps.",
            icon: AlertTriangle,
            color: "text-amber-400",
            bg: "bg-amber-500/15",
            border: "border-amber-500/30",
        },
        {
            title: "API-Based Integration",
            desc: "DigitalRakshak's MNRL Check API provides an API-based approach to initiating Mobile Number Revocation List checks in digital systems.",
            icon: Zap,
            color: "text-indigo-400",
            bg: "bg-indigo-500/15",
            border: "border-indigo-500/30",
        },
    ];

    const bulletPoints = [
        "Digital Customer Interactions: Mobile numbers are an essential component of digital user verification.",
        "Revocation List Checking: Check numbers against relevant revocation lists in real-time.",
        "Reduce Operational Overhead: Avoid manual checks and integrate directly into business applications.",
        "API-Based Initiation: Initiate Mobile Number Revocation List checks programmatically.",
    ];

    return (
        <section className="relative py-16 sm:py-24 px-[5%] lg:px-[6%] bg-[#05070f] overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="relative z-10 max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 items-center">
                {/* Left Description */}
                <div className="lg:col-span-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 text-[#76bbf8] border border-blue-400/30 text-xs font-semibold uppercase tracking-wider mb-4">
                        Why Mobile Number Revocation Checks Matter
                    </span>
                    <h2 className="text-white text-[clamp(26px,4vw,44px)] font-bold tracking-tight mb-6 leading-tight">
                        Make Mobile Number Checks Part of Your Digital Verification Process
                    </h2>
                    <p className="text-white/80 text-[15px] sm:text-[17px] leading-relaxed mb-4">
                        Mobile numbers are an important part of digital customer interactions, onboarding and business verification workflows. Businesses may need to check mobile numbers against relevant revocation lists as part of their verification processes.
                    </p>
                    <p className="text-white/70 text-[14px] sm:text-[16px] leading-relaxed mb-8">
                        Without an integrated checking mechanism, incorporating such checks into existing business applications can require additional operational steps. DigitalRakshak&apos;s MNRL Check API provides an API-based approach to initiating Mobile Number Revocation List checks, helping businesses incorporate this functionality into their digital systems.
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
                            <div className="flex gap-5">
                                <div className={`w-12 h-12 rounded-xl ${b.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                    <b.icon className={`w-6 h-6 ${b.color}`} />
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2">{b.title}</h3>
                            </div>
                            <p className="text-white/70 text-xs sm:text-sm leading-relaxed">{b.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function WhatYouCanDoSection() {
    const capabilities = [
        {
            step: "1",
            title: "Submit Mobile Numbers for Checking",
            desc: "Send a mobile number through the MNRL Check API request to initiate the checking process.",
            icon: Smartphone,
            color: "text-blue-400",
        },
        {
            step: "2",
            title: "Perform MNRL Checks Through API Integration",
            desc: "Incorporate Mobile Number Revocation List checking into your existing applications through an API-based integration.",
            icon: Network,
            color: "text-emerald-400",
        },
        {
            step: "3",
            title: "Support Digital Verification Workflows",
            desc: "Use the MNRL Check API as part of your broader mobile verification and customer onboarding processes.",
            icon: Workflow,
            color: "text-purple-400",
        },
        {
            step: "4",
            title: "Integrate With Business Applications",
            desc: "Connect the API with your existing technology infrastructure to incorporate MNRL checking into relevant business workflows.",
            icon: Building2,
            color: "text-amber-400",
        },
        {
            step: "5",
            title: "Automate API-Based Requests",
            desc: "Submit mobile number checking requests programmatically through your application instead of relying on a separate manual initiation process.",
            icon: Zap,
            color: "text-cyan-400",
        },
    ];

    return (
        <section className="relative py-16 sm:py-24 px-[5%] lg:px-[6%] bg-black">
            <div className="relative z-10 max-w-[1400px] mx-auto">
                <div className="text-center mb-14">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/15 text-purple-300 border border-purple-400/30 text-xs font-semibold uppercase tracking-wider mb-3">
                        What Can You Do With MNRL Check API?
                    </span>
                    <h2 className="text-white text-[clamp(26px,4vw,44px)] font-bold tracking-tight mb-4">
                        Mobile Number Revocation List Checking Through One API
                    </h2>
                    <p className="text-white/70 text-[15px] sm:text-[17px] max-w-2xl mx-auto">
                        Incorporate Mobile Number Revocation List checking capabilities into your existing verification, customer onboarding and business workflows.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
                    {capabilities.map((item, i) => (
                        <div
                            key={i}
                            className="p-5 sm:p-6 rounded-2xl bg-[#0c101d]/90 backdrop-blur-xl border border-white/10 hover:border-blue-400/40 hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)] transition-all duration-300 group flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <div className="p-2.5 rounded-xl bg-blue-500/15 group-hover:scale-110 transition-transform">
                                        <item.icon className={`w-5 h-5 ${item.color}`} />
                                    </div>
                                    <span className="text-xs font-mono font-bold text-white/40 group-hover:text-[#76bbf8]">
                                        0{item.step}
                                    </span>
                                </div>
                                <h3 className="text-white font-bold text-sm sm:text-base leading-snug mb-2">{item.title}</h3>
                                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                            </div>
                            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-[#76bbf8]">
                                <span>API Capability</span>
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
  "phoneNumber": "97XXXXXXXX"
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
                        MNRL Check API Capabilities
                    </span>
                    <h2 className="text-white text-[clamp(26px,4vw,44px)] font-bold tracking-tight mb-4">
                        Integrate Mobile Number Revocation List Checking Into Your Applications
                    </h2>
                    <p className="text-white/70 text-[15px] sm:text-[17px] max-w-3xl mx-auto">
                        DigitalRakshak&apos;s MNRL Check API provides an endpoint for submitting mobile numbers for Mobile Number Revocation List checking. The API is designed for developer integration through a structured request containing the required authentication headers and mobile number input.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-start max-w-[1200px] mx-auto">
                    {/* Left: Code Snippet & Request Info */}
                    <div className="lg:col-span-7 rounded-2xl bg-[#090c16] border border-white/15 overflow-hidden shadow-2xl">
                        <div className="flex items-center justify-between px-4 py-3 bg-[#111624] border-b border-white/10">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                                <span className="text-xs font-mono text-white/60 ml-2">POST /api/v1/protean-mnrl/mnrlcheck</span>
                            </div>
                            <button
                                onClick={handleCopy}
                                className="text-xs text-white/70 hover:text-white flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 transition-all cursor-pointer"
                            >
                                <Copy className="w-3.5 h-3.5" />
                                {copied ? "Copied!" : "Copy Body"}
                            </button>
                        </div>

                        <div className="p-4 sm:p-5 border-b border-white/10 bg-[#0d1222]/60">
                            <div className="text-xs font-semibold text-[#76bbf8] uppercase tracking-wider mb-2">
                                API Request Information
                            </div>
                            <div className="text-xs font-mono text-white/80 space-y-1">
                                <div><span className="text-white/50">HTTP Method:</span> <span className="text-emerald-400 font-bold">POST</span></div>
                                <div className="break-all"><span className="text-white/50">Sandbox API Endpoint:</span> <span className="text-blue-300">https://uat.digitalrakshak.io/api/v1/protean-mnrl/mnrlcheck</span></div>
                                <div className="pt-2 text-white/50">Required Request Headers:</div>
                                <div className="pl-3 text-white/70">
                                    • <span className="text-amber-300">Authorization:</span> Bearer access token<br />
                                    • <span className="text-amber-300">apikey:</span> API key<br />
                                    • <span className="text-amber-300">Content-Type:</span> application/json
                                </div>
                            </div>
                        </div>

                        <div className="p-4 sm:p-5">
                            <div className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Request Body</div>
                            <pre className="text-xs sm:text-sm font-mono text-emerald-300 overflow-x-auto [scrollbar-width:thin] leading-relaxed">
                                {codeSnippet}
                            </pre>
                            <div className="mt-3 text-xs text-white/60">
                                The mobile number is a required string parameter.
                            </div>
                        </div>
                    </div>

                    {/* Right: API Parameters Table & Technical Note */}
                    <div className="lg:col-span-5 space-y-4">
                        <div className="p-5 rounded-2xl bg-[#0c101d] border border-white/10">
                            <h3 className="text-white font-bold text-base mb-3 flex items-center gap-2">
                                <Terminal className="w-4 h-4 text-[#76bbf8]" />
                                API Parameters Specification
                            </h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-xs text-left">
                                    <thead>
                                        <tr className="border-b border-white/10 text-white/50">
                                            <th className="pb-2 font-semibold">API Parameter</th>
                                            <th className="pb-2 font-semibold">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5 text-white/80">
                                        <tr>
                                            <td className="py-2 font-mono text-[#76bbf8]">Mobile Number</td>
                                            <td className="py-2 text-white/70">Mobile number submitted for MNRL checking</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 font-mono text-[#76bbf8]">Authorization</td>
                                            <td className="py-2 text-white/70">Required authentication token</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 font-mono text-[#76bbf8]">API Key</td>
                                            <td className="py-2 text-white/70">Required API access credential</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 font-mono text-[#76bbf8]">Content-Type</td>
                                            <td className="py-2 text-white/70">Request content type (application/json)</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 font-mono text-[#76bbf8]">Request Method</td>
                                            <td className="py-2 text-white/70">POST</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 font-mono text-[#76bbf8]">API Endpoint</td>
                                            <td className="py-2 text-white/70">MNRL Check endpoint</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Technical Note Callout from Doc */}
                        <div className="p-5 rounded-2xl bg-blue-950/30 border border-blue-500/20">
                            <div className="flex items-start gap-3">
                                <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <div className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                                        Technical Note
                                    </div>
                                    <p className="text-white/70 text-xs leading-relaxed">
                                        The endpoint, request method and required request fields are based on the supplied API documentation screenshot. The response schema and exact MNRL result attributes require confirmation before publishing specific output claims.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ConnectSystemsSection() {
    const systems = [
        {
            title: "Customer Onboarding Platforms",
            desc: "Incorporate mobile number checking seamlessly into your digital registration and user onboarding funnels.",
            icon: Smartphone,
        },
        {
            title: "Banking and Financial Applications",
            desc: "Enhance verification integrity and customer interaction safety across digital banking systems.",
            icon: CreditCard,
        },
        {
            title: "Fintech and Lending Platforms",
            desc: "Validate user contact points prior to loan disbursals, credit assessments and financial workflows.",
            icon: Zap,
        },
        {
            title: "CRM and Customer Management Systems",
            desc: "Ensure enterprise customer relationship databases stay updated with validated contact records.",
            icon: Building2,
        },
        {
            title: "KYC and Verification Platforms",
            desc: "Complement broader identity and document verification pipelines with direct mobile number checks.",
            icon: ShieldCheck,
        },
        {
            title: "Enterprise Business Applications",
            desc: "Connect your core enterprise technology stack directly with DigitalRakshak's API infrastructure.",
            icon: Network,
        },
    ];

    return (
        <section className="relative py-16 sm:py-24 px-[5%] lg:px-[6%] bg-black">
            <div className="relative z-10 max-w-[1400px] mx-auto">
                <div className="text-center mb-14">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/30 text-xs font-semibold uppercase tracking-wider mb-3">
                        Connect MNRL Check API With Your Existing Systems
                    </span>
                    <h2 className="text-white text-[clamp(26px,4vw,44px)] font-bold tracking-tight mb-4">
                        Bring MNRL Checking Into Your Business Applications
                    </h2>
                    <p className="text-white/70 text-[15px] sm:text-[17px] max-w-2xl mx-auto">
                        Integrate Mobile Number Revocation List checking into your existing technology environment through DigitalRakshak&apos;s API infrastructure. Use the API as part of relevant business processes where mobile number checking is required.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {systems.map((item, i) => (
                        <div
                            key={i}
                            className="p-6 rounded-2xl bg-[#0c101d]/90 backdrop-blur-xl border border-white/10 hover:border-emerald-400/40 hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-all duration-300 group flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-400 group-hover:scale-110 transition-transform">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-white font-bold text-base sm:text-lg">{item.title}</h3>
                                </div>
                                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                            </div>
                            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-emerald-400">
                                <span>Integration Option 0{i + 1}</span>
                                <CheckCircle2 className="w-3.5 h-3.5" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function HowItWorksSection() {
    const steps = [
        {
            step: "01",
            title: "Submit Mobile Number",
            desc: "Provide the mobile number through the API request using the required phoneNumber parameter.",
            icon: Smartphone,
        },
        {
            step: "02",
            title: "Authenticate Your Request",
            desc: "Include the required Authorization token and API key in the request headers.",
            icon: KeyRound,
        },
        {
            step: "03",
            title: "Initiate MNRL Checking",
            desc: "Send the POST request to the DigitalRakshak MNRL Check API endpoint to initiate the checking process.",
            icon: Zap,
        },
        {
            step: "04",
            title: "Receive the API Response",
            desc: "Retrieve the response returned by the API and process the available information within your application.",
            icon: BarChart3,
        },
        {
            step: "05",
            title: "Integrate Into Your Workflow",
            desc: "Incorporate the returned information into your relevant customer verification and business processes.",
            icon: Workflow,
        },
    ];

    return (
        <section className="relative py-16 sm:py-24 px-[5%] lg:px-[6%] bg-[#05070f]">
            <div className="relative z-10 max-w-[1400px] mx-auto">
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 text-[#76bbf8] border border-blue-400/30 text-xs font-semibold uppercase tracking-wider mb-3">
                        How It Works
                    </span>
                    <h2 className="text-white text-[clamp(26px,4vw,44px)] font-bold tracking-tight mb-4">
                        How DigitalRakshak&apos;s MNRL Check API Works
                    </h2>
                    <p className="text-white/70 text-[15px] sm:text-[17px] max-w-2xl mx-auto">
                        Five simple, structured steps to initiate Mobile Number Revocation List checks programmatically.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
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
                                <h3 className="text-white text-base font-bold mb-2">{item.title}</h3>
                                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function KeyBenefitsSection() {
    const benefits = [
        {
            title: "API-Based MNRL Checking",
            desc: "Initiate Mobile Number Revocation List checks directly through an API request.",
            icon: Zap,
        },
        {
            title: "Simplified Integration",
            desc: "Connect mobile number checking capabilities with your existing business applications.",
            icon: Network,
        },
        {
            title: "Structured Request Processing",
            desc: "Use a defined API endpoint with specified authentication headers and request parameters.",
            icon: Code2,
        },
        {
            title: "Support Digital Verification",
            desc: "Incorporate MNRL checking into relevant customer verification and onboarding workflows.",
            icon: ShieldCheck,
        },
        {
            title: "Developer-Friendly Integration",
            desc: "Allow your technology teams to initiate MNRL checking through a structured API request.",
            icon: Terminal,
        },
        {
            title: "Centralised Business Workflows",
            desc: "Bring mobile number checking into your existing digital processes rather than managing it as a disconnected activity.",
            icon: FolderKanban,
        },
    ];

    return (
        <section className="relative py-16 sm:py-24 px-[5%] lg:px-[6%] bg-black">
            <div className="relative z-10 max-w-[1400px] mx-auto">
                <div className="text-center mb-14">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 text-[#76bbf8] border border-blue-400/30 text-xs font-semibold uppercase tracking-wider mb-3">
                        Key Benefits for Your Business
                    </span>
                    <h2 className="text-white text-[clamp(26px,4vw,44px)] font-bold tracking-tight mb-4">
                        Simplify Mobile Number Checking Through API Integration
                    </h2>
                    <p className="text-white/70 text-[15px] sm:text-[17px] max-w-xl mx-auto">
                        Incorporate Mobile Number Revocation List checking directly into your business processes.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((b, i) => (
                        <div
                            key={i}
                            className="p-6 rounded-2xl bg-[#0c101d]/90 backdrop-blur-xl border border-white/10 hover:border-blue-400/40 hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-all duration-300 group flex flex-col justify-between"
                        >
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-blue-500/15 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-[#76bbf8]">
                                    <b.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2">{b.title}</h3>
                                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">{b.desc}</p>
                            </div>
                            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-[#76bbf8]">
                                <span>Business Advantage</span>
                                <Check className="w-3.5 h-3.5" />
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
            title: "Banking & Financial Services",
            desc: "Incorporate mobile number checking into relevant financial service verification workflows.",
            icon: CreditCard,
            features: ["Financial Service Verification", "Customer Onboarding Security", "Transaction Workflows"],
        },
        {
            title: "Fintech & Lending Platforms",
            desc: "Include MNRL checking as part of relevant digital customer onboarding processes.",
            icon: Briefcase,
            features: ["Digital Onboarding", "Applicant Contact Check", "Lending Workflows"],
        },
        {
            title: "Customer Onboarding Platforms",
            desc: "Integrate mobile number checking into existing customer verification workflows.",
            icon: Smartphone,
            features: ["User Registration", "Contact Verification", "Workflow Automation"],
        },
        {
            title: "Risk & Compliance Teams",
            desc: "Explore MNRL checking as an additional component of relevant business verification processes.",
            icon: ShieldCheck,
            features: ["Business Verification", "Audit Trail Support", "Compliance Workflows"],
        },
    ];

    return (
        <section className="relative py-16 sm:py-24 px-[5%] lg:px-[6%] bg-[#05070f]">
            <div className="relative z-10 max-w-[1400px] mx-auto">
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/30 text-xs font-semibold uppercase tracking-wider mb-3">
                        Use Cases
                    </span>
                    <h2 className="text-white text-[clamp(26px,4vw,44px)] font-bold tracking-tight mb-4">
                        Where Can Businesses Use MNRL Check API?
                    </h2>
                    <p className="text-white/70 text-[15px] sm:text-[17px] max-w-2xl mx-auto">
                        Incorporate Mobile Number Revocation List checks across relevant digital touchpoints and verification processes.
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

function IntegrationRequirementsSection() {
    const router = useRouter();

    const requirements = [
        { req: "API Method", details: "POST" },
        { req: "Authentication", details: "Bearer Token" },
        { req: "API Credential", details: "API Key" },
        { req: "Content Type", details: "application/json" },
        { req: "Required Input", details: "phoneNumber" },
        { req: "Request Format", details: "JSON" },
        { req: "Environment Shown", details: "Sandbox" },
    ];

    const steps = [
        "Obtain API access credentials.",
        "Configure the required authentication headers.",
        "Submit the mobile number in the JSON request body.",
        "Send the request to the MNRL Check endpoint.",
        "Process the API response within your application.",
    ];

    return (
        <section className="relative py-16 sm:py-24 px-[5%] lg:px-[6%] bg-black">
            <div className="relative z-10 max-w-[1400px] mx-auto">
                <div className="text-center mb-14">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 text-[#76bbf8] border border-blue-400/30 text-xs font-semibold uppercase tracking-wider mb-3">
                        API Integration Requirements
                    </span>
                    <h2 className="text-white text-[clamp(26px,4vw,44px)] font-bold tracking-tight mb-4">
                        Get Started With DigitalRakshak MNRL Check API
                    </h2>
                    <p className="text-white/70 text-[15px] sm:text-[17px] max-w-xl mx-auto">
                        Integrate MNRL checking into your applications using the documented API request structure.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {/* Requirements Table */}
                    <div className="lg:col-span-7 overflow-x-auto rounded-2xl border border-white/15 bg-[#0a0d18] shadow-2xl [scrollbar-width:thin]">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-white/10 bg-white/[0.03]">
                                    <th className="p-4 sm:p-5 font-bold text-white text-sm sm:text-base">Requirement</th>
                                    <th className="p-4 sm:p-5 font-bold text-[#76bbf8] bg-blue-500/10 text-sm sm:text-base border-l border-blue-500/20">
                                        Details
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/10 text-xs sm:text-sm">
                                {requirements.map((row, i) => (
                                    <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                                        <td className="p-4 sm:p-5 font-semibold text-white">{row.req}</td>
                                        <td className="p-4 sm:p-5 font-mono text-[#76bbf8] bg-blue-500/5 border-l border-blue-500/20">
                                            {row.details}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Integration Process Card & CTAs */}
                    <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#0c101d] border border-white/10 flex flex-col justify-between">
                        <div>
                            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                                <Workflow className="w-5 h-5 text-[#76bbf8]" />
                                Integration Process
                            </h3>
                            <ol className="space-y-3.5 mb-8">
                                {steps.map((step, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-white/80 text-xs sm:text-sm leading-relaxed">
                                        <span className="w-5 h-5 rounded-full bg-blue-500/20 text-[#76bbf8] font-mono text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                                            {idx + 1}
                                        </span>
                                        <span>{step}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        <div className="pt-6 border-t border-white/10 flex flex-wrap gap-3">
                            <button
                                onClick={() => router.push('/register')}
                                className="bg-[#B0DAFF] hover:bg-[#76bbf8] text-[#0a1e36] font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                            >
                                <span>Get API Access</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                            <button
                                onClick={() => router.push('/contact')}
                                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-xl backdrop-blur-md transition-all cursor-pointer"
                            >
                                View API Documentation
                            </button>
                        </div>
                    </div>
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
                    MNRL Check API – Frequently Asked Questions
                </h2>
                <p className="text-white/70 text-[15px] sm:text-[17px] mb-10">
                    Everything you need to know about DigitalRakshak&apos;s MNRL Check API integration
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
                        Get API Access
                    </span>
                    <h2 className="text-white text-[clamp(28px,4.5vw,50px)] font-black tracking-tight mb-5 leading-tight">
                        Integrate Mobile Number Revocation List (MNRL) Checking Today
                    </h2>
                    <p className="text-white/80 text-[15px] sm:text-[18px] max-w-2xl mx-auto mb-8 leading-relaxed">
                        Submit mobile numbers through a structured API request and incorporate MNRL checking capabilities into your existing verification, customer onboarding and business workflows.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <button
                            onClick={() => router.push('/register')}
                            className="bg-[#B0DAFF] hover:bg-[#76bbf8] text-[#0a1e36] font-bold text-base px-8 py-3.5 rounded-full shadow-[2px_2px_11.4px_0px_#00000040,_5px_-2px_8.7px_0px_#0084FF6B_inset] transition-all flex items-center gap-2 cursor-pointer"
                        >
                            <span>Get API Access</span>
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => router.push('/contact')}
                            className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-base px-8 py-3.5 rounded-full backdrop-blur-md transition-all cursor-pointer"
                        >
                            Book a Meeting
                        </button>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-6 text-xs text-white/60 flex-wrap">
                        <span className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Mobile Number Check
                        </span>
                        <span className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> MNRL Lookup
                        </span>
                        <span className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> API-Based Verification
                        </span>
                        <span className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Business Integration
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function MNRLCheckApiPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "MNRL Check API for Businesses",
        "applicationCategory": "SecurityApplication",
        "operatingSystem": "All",
        "provider": {
            "@type": "Organization",
            "name": "DigitalRakshak",
            "url": "https://digitalrakshak.com",
        },
        "description":
            "Integrate DigitalRakshak's MNRL Check API to submit mobile numbers for Mobile Number Revocation List checking in your business applications.",
        "keywords": [
            "MNRL Check API",
            "Mobile Number Revocation List API",
            "Mobile Number Revocation Check",
            "MNRL Verification API",
            "Mobile Number Check API",
            "Mobile Verification API",
            "MNRL API Integration",
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
            <WhatYouCanDoSection />
            <ConnectAPISection />
            <ConnectSystemsSection />
            <HowItWorksSection />
            <KeyBenefitsSection />
            <IndustryUseCasesSection />
            <IntegrationRequirementsSection />
            <FAQSection />
            <CTASection />
        </div>
    );
}

