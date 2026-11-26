"use client";

import { useState } from "react";
import {
    ScanLine,
    BadgeCheck,
    FileText,
    Globe,
    ShieldCheck,
    ArrowRight,
    CheckCircle2,
    Check,
    ChevronDown,
    Zap,
    Briefcase,
    Building2,
    Landmark,
    Layers,
    Terminal,
    Code2,
    ExternalLink,
    Smartphone,
    KeyRound,
    UserCheck,
    Lock,
    Send,
} from "lucide-react";

const assetPathPrefix = "/assets";

const imgSvgRepoIconCarrier = `${assetPathPrefix}/e8dc9.svg`;
const imgFrame19 = `${assetPathPrefix}/643e6.png`;
const imgFrame20 = `${assetPathPrefix}/Frame 20.png`;
const imgFrame22 = `${assetPathPrefix}/Frame 22.png`;
const imgFrame77 = `${assetPathPrefix}/Frame 77.png`;
const imgRectangle6 = `${assetPathPrefix}/Rectangle 6.png`;
const imgRectangle7 = `${assetPathPrefix}/Rectangle 7.png`;
const imgEllipse21 = `${assetPathPrefix}/Ellipse 21.png`;
const imgEllipse19 = `${assetPathPrefix}/Ellipse 19.png`;
const imgEllipse22 = `${assetPathPrefix}/e2585.svg`;
const imgSvgRepoIconCarrier6 = `${assetPathPrefix}/52ecf.svg`;
const imgVector2 = `${assetPathPrefix}/50101.svg`;

const faqItems = [
    {
        q: "1. What is a Mobile Verification with OTP API?",
        a: "A Mobile Verification with OTP API enables businesses to generate one-time passwords for mobile number verification and integrate OTP-based authentication into their applications.",
    },
    {
        q: "2. How does the Mobile OTP Generation API work?",
        a: "The API accepts a mobile number and country code, processes the OTP generation request and returns a unique reference ID.",
    },
    {
        q: "3. What information is required to generate an OTP?",
        a: "The API request requires the country code and mobile number, along with the necessary authentication headers.",
    },
    {
        q: "4. What is a reference ID in OTP verification?",
        a: "A reference ID is a unique identifier returned in the API response. It helps identify the generated OTP request within the verification workflow.",
    },
    {
        q: "5. Can the Mobile OTP API be integrated with existing applications?",
        a: "Yes. Businesses can integrate OTP generation capabilities into customer onboarding platforms, financial applications, CRM systems and other business applications.",
    },
    {
        q: "6. Who can use Mobile Verification with OTP Services?",
        a: "Enterprises, fintech companies, financial institutions, e-commerce businesses and digital platforms can explore this API for their mobile verification and authentication requirements.",
    },
    {
        q: "7. Does the API support international mobile numbers?",
        a: "The API request accepts a country code along with the mobile number. Availability and country coverage depend on the supported service configuration.",
    },
];

/* ── 1. HERO SECTION ── */
function HeroSection() {
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
                    <div className="lg:col-span-5 flex flex-col justify-between text-left">
                        <div>
                            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3">
                                <Smartphone className="w-4 h-4 text-[#76bbf8]" />
                                Mobile Verification with OTP API
                            </span>
                            <h1 className="text-white text-[clamp(28px,7vw,56px)] font-black leading-[1.1] tracking-tight">
                                Mobile Verification with OTP
                            </h1>
                            <p className="text-white text-[15px] sm:text-[18px] lg:text-[22px] font-medium mt-3 sm:mt-4">
                                Generate OTPs. Verify Mobile Numbers.
                            </p>
                        </div>

                        <div className="mt-5 sm:mt-8 lg:mt-10">
                            <div className="text-white/90 text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-relaxed max-w-[540px] space-y-3">
                                <p>
                                    Simplify mobile number verification with DigitalRakshak's OTP Verification API.
                                </p>
                                <p>
                                    Generate OTPs for mobile number verification, authenticate genuine phone possession in real time, and integrate OTP-based authentication into your digital onboarding workflows.
                                </p>
                            </div>
                            <div className="flex gap-3 sm:gap-4 mt-5 sm:mt-6 items-center flex-wrap">
                                <a
                                    href="#contact"
                                    className="bg-[#B0DAFF] hover:bg-[#76bbf8] text-[#0a1e36] font-semibold text-[14px] sm:text-[15px] px-6 sm:px-8 py-2.5 sm:py-3 rounded-[18px] shadow-[2px_2px_11.4px_0px_#00000040,_5px_-2px_8.7px_0px_#0084FF6B_inset] transition-all flex items-center gap-2"
                                >
                                    <span>Get API Access</span>
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                                <a
                                    href="#contact"
                                    className="bg-white hover:bg-gray-100 text-[#0a1e36] font-semibold text-[14px] sm:text-[15px] px-6 sm:px-8 py-2.5 sm:py-3 rounded-[18px] shadow-[2px_2px_11.4px_0px_#00000040,_5px_-2px_8.7px_0px_#0084FF6B_inset] transition-all"
                                >
                                    Book a Meeting
                                </a>
                            </div>

                            {/* Service Highlights */}
                            <div className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8 pt-4 border-t border-white/10 flex-wrap text-white/80 text-[12.5px] sm:text-[13.5px]">
                                <span className="flex items-center gap-1.5"><KeyRound className="w-4 h-4 text-[#76bbf8]" /> OTP Generation</span>
                                <span className="text-white/30 hidden sm:inline">•</span>
                                <span className="flex items-center gap-1.5"><Smartphone className="w-4 h-4 text-[#76bbf8]" /> Mobile Number Verification</span>
                                <span className="text-white/30 hidden sm:inline">•</span>
                                <span className="flex items-center gap-1.5"><ScanLine className="w-4 h-4 text-[#76bbf8]" /> API Integration</span>
                                <span className="text-white/30 hidden sm:inline">•</span>
                                <span className="flex items-center gap-1.5"><UserCheck className="w-4 h-4 text-[#76bbf8]" /> User Authentication</span>
                            </div>
                        </div>
                    </div>

                    {/* Right – high-tech console screenshots */}
                    <div className="lg:col-span-7 relative flex justify-center lg:justify-end items-center w-full mt-4 lg:mt-0">
                        <div className="flex items-center gap-3 sm:gap-6 md:gap-8 w-full max-w-[650px] lg:max-w-none mx-auto">
                            {/* Main card - left */}
                            <div className="flex-[326] rounded-[16px] sm:rounded-[22px] lg:rounded-[26px] overflow-hidden shadow-2xl border border-white/10 aspect-[326/354] bg-[#f2f4f7] relative group">
                                <img
                                    alt="Mobile OTP Verification Dashboard"
                                    className="w-full h-full object-cover object-center"
                                    src={imgFrame19}
                                />
                                <div className="absolute bottom-3 left-3 right-3 bg-[#0a1228]/90 backdrop-blur-md border border-blue-400/30 rounded-xl p-3 flex items-center justify-between text-xs text-white">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                                        <span className="font-semibold text-white/95">Live OTP Generation Active</span>
                                    </div>
                                    <span className="text-[#76bbf8] font-mono text-[11px] bg-blue-500/20 px-2 py-0.5 rounded-full">
                                        Sub-Second Delivery
                                    </span>
                                </div>
                            </div>

                            {/* Right stacked cards */}
                            <div className="flex-[175] flex flex-col justify-between self-stretch gap-2.5 sm:gap-4">
                                <div className="rounded-[12px] sm:rounded-[18px] lg:rounded-[22px] overflow-hidden shadow-2xl border border-white/10 aspect-square">
                                    <img
                                        alt="Feature preview 1"
                                        className="w-full h-full object-cover"
                                        src={imgRectangle6}
                                    />
                                </div>
                                <div className="rounded-[12px] sm:rounded-[18px] lg:rounded-[22px] overflow-hidden shadow-2xl border border-white/10 aspect-square">
                                    <img
                                        alt="Feature preview 2"
                                        className="w-full h-full object-cover"
                                        src={imgRectangle7}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ── 2. FEATURE CARD ── */
function FeatureCard({
    icon,
    title,
    desc,
}: {
    icon: string;
    title: string;
    desc: string;
}) {
    return (
        <div className="relative w-full max-w-[280px] mt-6 mx-auto flex-shrink-0 flex flex-col justify-start transition-transform duration-300 hover:-translate-y-1.5 group">
            {/* Top glowing circular badge */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 w-12 h-12 rounded-full bg-[#0088FF]/50 border-2 border-[#38bdf8]/70 shadow-[0_0_22px_rgba(0,136,255,0.65)] backdrop-blur-md flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_28px_rgba(0,136,255,0.9)]">
                <img
                    alt=""
                    src={icon}
                    className="w-6 h-6 object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                />
            </div>

            {/* Card Body */}
            <div className="w-full min-h-[220px] rounded-[18px] bg-[#5173C2]/45 border border-[#6b8cd8]/35 backdrop-blur-md px-5 pt-9 pb-5 text-center sm:text-left flex flex-col justify-start h-full shadow-[0_10px_25px_rgba(0,0,0,0.35)]">
                <p className="text-white text-[16px] sm:text-[17px] font-semibold leading-[22px] sm:leading-[24px] mb-2.5">
                    {title}
                </p>
                <p className="text-white/90 text-[13px] sm:text-[13.5px] font-normal leading-[19px] sm:leading-[21px]">
                    {desc}
                </p>
            </div>
        </div>
    );
}

/* ── 3. WHAT CAN YOU DO? ── */
function WhatCanYouDoSection() {
    const cards = [
        {
            title: "1. Generate OTP Requests",
            desc: "Initiate OTP generation for a submitted mobile number through an API request.",
            icon: imgSvgRepoIconCarrier,
        },
        {
            title: "2. Support Mobile Number Verification",
            desc: "Use OTP-based verification to support mobile number authentication workflows.",
            icon: imgSvgRepoIconCarrier,
        },
        {
            title: "3. Verify International Mobile Numbers",
            desc: "Submit mobile numbers along with the appropriate country code to initiate OTP requests.",
            icon: imgSvgRepoIconCarrier,
        },
        {
            title: "4. Track OTP Requests",
            desc: "Receive a unique reference ID for identifying and tracking the generated OTP request.",
            icon: imgSvgRepoIconCarrier,
        },
    ];

    return (
        <section id="what-can-you-do" className="relative pt-10 sm:pt-14 pb-12 sm:pb-16 px-[5%] lg:px-[6%]">
            {/* Ellipse 19 glow */}
            <div className="absolute left-[-10%] top-[-10%] w-full max-w-[848px] pointer-events-none select-none opacity-70 mix-blend-screen">
                <img
                    alt=""
                    className="w-full h-full object-contain"
                    src={imgEllipse19}
                />
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto">
                <span className="block text-center text-[#76bbf8] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2">
                    Capabilities
                </span>
                <h2 className="text-white text-[clamp(24px,4vw,42px)] font-bold text-center tracking-tight mb-3">
                    What Can You Do?
                </h2>
                <p className="text-white/70 text-[15px] sm:text-[17px] text-center max-w-[700px] mx-auto mb-14 sm:mb-20">
                    Cover different mobile authentication and verification requirements across your business processes.
                </p>

                {/* Cards grid layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                    {cards.map((c, i) => (
                        <FeatureCard key={i} icon={c.icon} title={c.title} desc={c.desc} />
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ── 4. STRUCTURED VERIFICATION CARDS SECTION ── */
function VerificationCardsSection() {
    return (
        <section className="relative py-8 sm:py-12 px-[5%] lg:px-[6%]">
            <div className="relative z-10 max-w-[1240px] mx-auto">
                <h2 className="text-white text-[24px] sm:text-[32px] lg:text-[36px] font-bold text-center tracking-tight mb-3">
                    Structured Request Inputs &amp; Response Details
                </h2>
                <p className="text-white/70 text-[14px] sm:text-[16px] text-center max-w-[650px] mx-auto mb-10 sm:mb-14">
                    Submit phone parameters via secured REST API and track verification with unique reference IDs.
                </p>

                {/* Outer Blue Border Box */}
                <div className="relative bg-[#040d24]/70 border-2 border-[#1677ff] rounded-[22px] p-6 sm:p-9 lg:p-12 shadow-[0_0_35px_rgba(22,119,255,0.35)] backdrop-blur-md">
                    <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 divide-y md:divide-y-0 md:divide-x divide-white/15">
                        {/* Request Inputs */}
                        <div className="md:pr-8 lg:pr-12 pb-6 md:pb-0">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="relative flex items-center justify-center size-7 flex-shrink-0">
                                    <img
                                        alt=""
                                        className="w-[200%] h-[200%] max-w-none"
                                        src={imgEllipse22}
                                    />
                                    <div className="absolute top-[1px] left-[-1px] z-10 overflow-hidden size-5">
                                        <img
                                            alt=""
                                            className="w-full h-full"
                                            src={imgSvgRepoIconCarrier6}
                                        />
                                    </div>
                                </div>
                                <h3 className="text-white text-[20px] sm:text-[23px] font-semibold leading-tight">
                                    Required Request Inputs
                                </h3>
                            </div>
                            <p className="text-white/70 text-[13.5px] font-normal leading-relaxed mb-4 sm:mb-5">
                                Provide the required mobile parameter and authentication headers via HTTP POST:
                            </p>
                            <ol className="text-white/90 text-[14px] sm:text-[15px] font-medium leading-[26px] list-decimal list-inside space-y-1.5 pl-1">
                                {[
                                    "Country Code (e.g., +91)",
                                    "Mobile Number (10-digit format)",
                                    "Authorization Bearer Token",
                                    "API Key Credential header",
                                    "Content-Type: application/json",
                                    "Client reference tracking object (optional)",
                                ].map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ol>
                        </div>

                        {/* Generated Response Details */}
                        <div className="pt-6 md:pt-0 md:pl-8 lg:pl-12">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="relative flex items-center justify-center size-7 flex-shrink-0">
                                    <img
                                        alt=""
                                        className="w-[200%] h-[200%] max-w-none"
                                        src={imgEllipse22}
                                    />
                                    <div className="absolute top-[1px] left-[-1px] z-10 overflow-hidden size-5">
                                        <img
                                            alt=""
                                            className="w-full h-full"
                                            src={imgSvgRepoIconCarrier6}
                                        />
                                    </div>
                                </div>
                                <h3 className="text-white text-[20px] sm:text-[23px] font-semibold leading-tight">
                                    Generated Response Details
                                </h3>
                            </div>
                            <p className="text-white/70 text-[13.5px] font-normal leading-relaxed mb-4 sm:mb-5">
                                Receive structured request tracking and status attributes directly through the response:
                            </p>
                            <ol className="text-white/90 text-[14px] sm:text-[15px] font-medium leading-[26px] list-decimal list-inside space-y-1.5 pl-1">
                                {[
                                    "Unique reference ID for tracking",
                                    "OTP dispatch status (SUCCESS / QUEUED)",
                                    "OTP validity window & expiry duration",
                                    "Retry and resend interval countdown",
                                    "Request creation timestamp",
                                    "Workflow reference association",
                                ].map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ── 5. HOW MOBILE OTP VERIFICATION WORKS ── */
function HowItWorksSection() {
    const [activeStep, setActiveStep] = useState<number | null>(1);

    const stepsData = [
        {
            id: 1,
            title: "1. Submit Mobile Number",
            desc: "Provide the mobile number and country code through the API request.",
            content: (
                <div className="space-y-2 text-[#4b5563] text-[13.5px] sm:text-[14.5px] leading-relaxed pt-2">
                    <p>Provide the mobile number and country code through the API request payload.</p>
                    <div className="space-y-1.5 pl-3 text-[#374151] font-medium">
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span>Accepts countryCode and mobileNumber fields in JSON format</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span>Validates phone number length and network routing rules</span>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            id: 2,
            title: "2. Generate OTP",
            desc: "The API processes the request and returns a reference ID for the generated OTP request.",
            content: (
                <div className="space-y-2 text-[#4b5563] text-[13.5px] sm:text-[14.5px] leading-relaxed pt-2">
                    <p>The API processes the request and returns a unique reference ID for the generated OTP request, dispatching the secure one-time passcode via high-speed telecom routes.</p>
                </div>
            ),
        },
        {
            id: 3,
            title: "3. Complete OTP Verification",
            desc: "The user enters the OTP through the applicable verification workflow to complete mobile number authentication.",
            content: (
                <div className="space-y-2 text-[#4b5563] text-[13.5px] sm:text-[14.5px] leading-relaxed pt-2">
                    <p>The user enters the OTP through the applicable verification workflow to complete mobile number authentication and verify ownership in real time.</p>
                </div>
            ),
        },
    ];

    return (
        <section id="how-it-works" className="relative py-12 sm:py-16 px-[5%] lg:px-[6%] overflow-hidden bg-black">
            {/* Ambient soft glow at bottom right */}
            <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-[#1e3a8a]/20 rounded-full blur-[140px] pointer-events-none" />

            <div className="relative z-10 max-w-[1240px] mx-auto">
                <div className="text-center mb-12 sm:mb-16">
                    <span className="inline-block mb-3 px-3.5 py-1 bg-blue-500/10 border border-blue-400/30 text-[#76bbf8] text-xs font-bold uppercase tracking-widest rounded-full">
                        Step-by-Step Flow
                    </span>
                    <h2 className="text-white text-[28px] sm:text-[34px] lg:text-[40px] font-bold tracking-tight">
                        How Mobile OTP Verification Works
                    </h2>
                    <p className="text-white/70 text-[14px] sm:text-[16px] max-w-[650px] mx-auto mt-2">
                        Mobile verification follows an OTP-based process that allows users to verify their mobile numbers through a one-time password.
                    </p>
                </div>

                {/* 2-Column Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
                    {/* Left Column: Console Card */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-start">
                        <div className="w-full max-w-[420px] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-blue-500/20 relative bg-[#0b101d] p-6">
                            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <span className="text-[11px] font-mono text-[#76bbf8] bg-blue-500/20 px-2.5 py-0.5 rounded-full">
                                    STEP {activeStep ?? 1} OF 3
                                </span>
                            </div>

                            <div className="space-y-4">
                                <div className="rounded-xl bg-[#0e172e] border border-blue-400/25 p-4 relative overflow-hidden">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Smartphone className="w-5 h-5 text-[#76bbf8]" />
                                        <h4 className="text-white font-bold text-sm">
                                            {stepsData.find((s) => s.id === (activeStep ?? 1))?.title}
                                        </h4>
                                    </div>
                                    <p className="text-white/80 text-xs leading-relaxed">
                                        {stepsData.find((s) => s.id === (activeStep ?? 1))?.desc}
                                    </p>
                                    <div className="mt-3 flex items-center justify-between text-[11px] text-white/50 pt-2 border-t border-white/10">
                                        <span>Action: OTP_GENERATION</span>
                                        <span className="text-emerald-400 font-mono">Status: Dispatched</span>
                                    </div>
                                </div>

                                <div className="p-3.5 bg-black/40 rounded-xl border border-white/10 text-xs font-mono text-blue-200 space-y-1">
                                    <p className="text-white/40">// Request Spec</p>
                                    <p><span className="text-[#ff7b72]">&quot;method&quot;</span>: <span className="text-[#a5d6ff]">&quot;POST&quot;</span>,</p>
                                    <p><span className="text-[#ff7b72]">&quot;countryCode&quot;</span>: <span className="text-[#a5d6ff]">&quot;+91&quot;</span>,</p>
                                    <p><span className="text-[#ff7b72]">&quot;mobileNumber&quot;</span>: <span className="text-[#a5d6ff]">&quot;9876543210&quot;</span>,</p>
                                    <p><span className="text-[#ff7b72]">&quot;referenceId&quot;</span>: <span className="text-[#7ee787]">&quot;ref_otp_982348a&quot;</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Accordion Points */}
                    <div className="lg:col-span-7 flex flex-col space-y-4 sm:space-y-4.5">
                        {stepsData.map((step) => {
                            const isActive = activeStep === step.id;

                            return (
                                <div
                                    key={step.id}
                                    onClick={() => setActiveStep(isActive ? null : step.id)}
                                    className={`cursor-pointer transition-all duration-300 ease-out select-none ${isActive
                                        ? "bg-white rounded-[22px] sm:rounded-[24px] p-6 sm:p-7 sm:px-8 border-2 border-[#5cb3ff] shadow-[0_6px_0_0_#38bdf8,0_16px_32px_rgba(56,189,248,0.28)]"
                                        : "bg-white rounded-full py-4 px-6 sm:px-8 hover:bg-slate-100 shadow-[0_4px_12px_rgba(0,0,0,0.2)] hover:scale-[1.008] transition-all"
                                        }`}
                                >
                                    {/* Header Row */}
                                    <div className="flex items-center gap-3">
                                        <span
                                            className={`rounded-full shrink-0 transition-all duration-300 ${isActive
                                                ? "w-3 h-3 bg-[#38bdf8] shadow-[0_0_10px_#38bdf8]"
                                                : "w-2.5 h-2.5 bg-[#cbd5e1]"
                                                }`}
                                        />
                                        <h3 className="text-[#111827] text-[16px] sm:text-[18px] font-bold tracking-tight">
                                            {step.title}
                                        </h3>
                                    </div>

                                    {/* Expandable Content */}
                                    <div
                                        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${isActive
                                            ? "grid-rows-[1fr] opacity-100 mt-2"
                                            : "grid-rows-[0fr] opacity-0 mt-0"
                                            }`}
                                    >
                                        <div className="overflow-hidden">{step.content}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ── 6. CONNECT MOBILE VERIFICATION API WITH YOUR EXISTING SYSTEM ── */
function ConnectAPISection() {
    const workflows = [
        {
            title: "Fast User Sign-Up & Registration",
            desc: "Deliver instant OTPs during account creation to verify genuine phone possession and minimize drop-offs.",
        },
        {
            title: "Transaction & Payment Authorisation",
            desc: "Integrate real-time OTP generation for high-value financial actions, fund transfers, and critical checkouts.",
        },
        {
            title: "Account Recovery & Profile Verification",
            desc: "Authenticate password resets, phone number changes, and two-factor challenge workflows seamlessly.",
        },
    ];

    const integrationOptions = [
        "1. Customer onboarding platforms",
        "2. Banking and financial applications",
        "3. Fintech and lending platforms",
        "4. E-commerce platforms",
        "5. CRM systems",
        "6. Enterprise applications",
    ];

    return (
        <section className="relative pt-8 sm:pt-10 lg:pt-12 pb-7 sm:pb-9 px-[5%] lg:px-[6%] overflow-hidden">
            <div className="relative z-10 max-w-[1240px] mx-auto">
                <span className="block text-center text-[#76bbf8] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2">
                    System Integration
                </span>
                <h2 className="text-white text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-center tracking-tight mb-12 sm:mb-16">
                    Connect Mobile Verification API With Your Existing System
                </h2>

                {/* 2-Column Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 items-start justify-items-center">
                    {/* LEFT COLUMN: Blue Box + Integrate with */}
                    <div className="w-full max-w-[543px] flex flex-col">
                        <div className="w-full min-h-[190px] h-auto bg-gradient-to-b from-[#b2daff] to-[#92c8fc] border-2 border-[#54b4ff] rounded-[20px] p-6 sm:p-8 flex items-center shadow-[0_0_35px_rgba(84,180,255,0.45),0_0_12px_rgba(84,180,255,0.3)]">
                            <p className="text-[#081a2e] text-[15px] sm:text-[16px] lg:text-[17px] font-normal leading-[1.65]">
                                Integrate OTP generation capabilities into your existing business applications and customer-facing platforms. Connect mobile verification directly into authentication pipelines and user onboarding flows.
                            </p>
                        </div>

                        <h4 className="text-white font-bold text-[18px] sm:text-[20px] mt-8 mb-4">
                            Integration Options:
                        </h4>

                        <div className="space-y-3 text-white/90 text-[14px] sm:text-[15px] font-medium pl-1">
                            {integrationOptions.map((opt, idx) => (
                                <div key={idx} className="flex items-center gap-2.5">
                                    <span className="w-2 h-2 rounded-full bg-[#76bbf8] shrink-0" />
                                    <span>{opt}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-white/80 text-[13.5px] sm:text-[14.5px] leading-relaxed mt-6 pl-1">
                            The API service provides REST endpoints with structured JSON responses, customizable expiration parameters, and reference-based tracking IDs.
                        </p>
                    </div>

                    {/* RIGHT COLUMN: Practical Business Workflows */}
                    <div className="w-full max-w-[543px] flex flex-col">
                        <h3 className="text-white font-bold text-[22px] sm:text-[24px] mb-6">
                            Practical Business Workflows
                        </h3>

                        <div className="space-y-5 sm:space-y-6">
                            {workflows.map((wf) => (
                                <div
                                    key={wf.title}
                                    className="bg-gradient-to-r from-[#ebd6ff] via-[#e2c4ff] to-[#d8b0ff] border-2 border-[#d896ff] rounded-[20px] p-6 sm:px-8 sm:py-6 shadow-[0_0_30px_rgba(216,145,255,0.45),0_0_10px_rgba(216,145,255,0.3)] transition-transform duration-200 hover:scale-[1.01]"
                                >
                                    <h4 className="text-[#090e24] font-bold text-[18px] sm:text-[19px] mb-2">
                                        {wf.title}
                                    </h4>
                                    <p className="text-[#1a2038] text-[13px] sm:text-[14px] leading-relaxed font-normal">
                                        {wf.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Centered Book a Demo CTA */}
                <div className="mt-8 sm:mt-10 flex justify-center">
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center bg-[#b0daff] hover:bg-[#8ec7fc] text-[#081a2e] font-semibold text-[15px] sm:text-[16px] py-3.5 px-12 rounded-[18px] shadow-[0_4px_20px_rgba(0,0,0,0.35)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                    >
                        Book a Demo
                    </a>
                </div>
            </div>
        </section>
    );
}

/* ── 7. KEY BENEFITS FOR YOUR BUSINESS ── */
function KeyBenefitsSection() {
    const benefits = [
        {
            title: "1. OTP-Based Authentication",
            desc: "Support mobile number verification through a one-time password process.",
        },
        {
            title: "2. Simplify Customer Onboarding",
            desc: "Incorporate mobile verification into digital registration and onboarding workflows.",
        },
        {
            title: "3. API-Based Integration",
            desc: "Connect OTP generation capabilities with your existing business applications.",
        },
        {
            title: "4. Reference-Based Tracking",
            desc: "Receive a unique reference ID for identifying OTP generation requests.",
        },
        {
            title: "5. Support Multiple Country Codes",
            desc: "Submit mobile numbers with the appropriate country code for OTP generation.",
        },
        {
            title: "6. Automate Verification Workflows",
            desc: "Reduce manual intervention by integrating OTP generation into your business processes.",
        },
    ];

    return (
        <section id="key-benefits" className="relative py-12 sm:py-16 px-[5%] lg:px-[6%]">
            {/* Ellipse 21 glow */}
            <div className="absolute left-0 w-full max-w-[848px] pointer-events-none select-none opacity-65 mix-blend-screen z-50">
                <img
                    alt=""
                    className="w-full h-full object-contain"
                    src={imgEllipse21}
                />
            </div>
            <div className="max-w-[1400px] mx-auto space-y-16 lg:space-y-20">
                {/* Top Section */}
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    <div className="lg:col-span-5">
                        <span className="text-[#76bbf8] text-xs font-semibold uppercase tracking-wider">
                            Enterprise Advantage
                        </span>
                        <h2 className="text-white text-[clamp(24px,3vw,40px)] font-bold leading-tight mt-1 mb-6">
                            Key Benefits for Your Business
                        </h2>
                        <p className="text-white text-[15px] sm:text-[16px] lg:text-[18px] font-normal leading-relaxed mb-6">
                            Simplify customer onboarding and secure digital registration with API-based OTP verification:
                        </p>
                        <ul className="text-white/90 text-[14px] sm:text-[16px] font-normal leading-relaxed space-y-3.5 pl-1">
                            {benefits.map((item) => (
                                <li key={item.title} className="flex items-start gap-2.5">
                                    <span className="w-2 h-2 rounded-full bg-[#76bbf8] shrink-0 mt-2" />
                                    <span>
                                        <strong className="text-white">{item.title}:</strong> {item.desc}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right side: 3 images layout */}
                    <div className="lg:col-span-7 flex items-center gap-4 sm:gap-5 w-full">
                        {/* Big card - left */}
                        <div className="flex-[581] rounded-[18px] overflow-hidden shadow-2xl border border-white/10">
                            <img
                                alt="Mobile Verification Dashboard"
                                className="w-full h-auto rounded-[18px] object-cover block"
                                src={imgFrame20}
                            />
                        </div>

                        {/* Right column: 2 stacked cards */}
                        <div className="flex-[288] flex flex-col justify-between self-stretch gap-3 sm:gap-4">
                            <div className="rounded-[18px] overflow-hidden shadow-2xl border border-white/10">
                                <img
                                    alt="OTP Analytics"
                                    className="w-full h-auto rounded-[18px] object-cover block"
                                    src={imgFrame22}
                                />
                            </div>
                            <div className="rounded-[18px] overflow-hidden shadow-2xl border border-white/10">
                                <img
                                    alt="Verification Metrics"
                                    className="w-full h-auto rounded-[18px] object-cover block"
                                    src={imgFrame77}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Enterprise Assurance */}
                <div className="relative rounded-[24px] sm:rounded-[28px] bg-gradient-to-r from-[#0a1226]/90 via-[#0d1733]/90 to-[#120f2e]/90 border border-blue-500/20 p-8 sm:p-10 lg:p-12 shadow-[0_0_40px_rgba(22,119,255,0.15)]">
                    <div className="max-w-[1100px] mx-auto grid lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-5">
                            <span className="text-[#76bbf8] text-xs font-semibold uppercase tracking-wider">
                                Enterprise Assurance
                            </span>
                            <h3 className="text-white text-[24px] sm:text-[30px] lg:text-[34px] font-bold leading-tight mt-1 mb-4">
                                Why DigitalRakshak?
                            </h3>
                            <p className="text-white/85 text-[15px] sm:text-[16px] leading-relaxed mb-4">
                                DigitalRakshak works across verification, channel security, and enterprise authentication.
                            </p>
                            <p className="text-white/70 text-[14px] leading-relaxed">
                                The goal is simple: help businesses automate mobile number verification in a way that works seamlessly with their existing platforms and workflows.
                            </p>
                        </div>

                        <div className="lg:col-span-7 bg-[#050b1a]/60 border border-white/10 rounded-[20px] p-6 sm:p-7">
                            <p className="text-white/90 text-[14px] sm:text-[15px] font-semibold mb-4 text-[#B0DAFF]">
                                For Mobile Verification with OTP, we bring together:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    "OTP-Based Authentication",
                                    "Fast Real-Time OTP Generation",
                                    "Unique Reference ID Tracking",
                                    "Multiple Country Code Support",
                                    "Automated Verification Workflows",
                                    "Sub-Second Response Latency",
                                    "Enterprise REST API Integration",
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-2.5 text-white/90 text-[13.5px] sm:text-[14.5px]">
                                        <CheckCircle2 className="w-4 h-4 text-[#76bbf8] shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ── 8. WHY API-BASED MOBILE OTP VERIFICATION? ── */
function BenefitCardGlow() {
    return (
        <svg
            className="absolute inset-0 w-full h-full pointer-events-none rounded-[16px]"
            viewBox="0 0 406 446"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient
                    id="cardGlowLinearBaseOtp"
                    x1="0"
                    y1="446"
                    x2="0"
                    y2="0"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0%" stopColor="#ffdfff" stopOpacity="0.95" />
                    <stop offset="12%" stopColor="#fdd7ff" stopOpacity="0.9" />
                    <stop offset="28%" stopColor="#e9b3fa" stopOpacity="0.75" />
                    <stop offset="45%" stopColor="#a860cb" stopOpacity="0.45" />
                    <stop offset="62%" stopColor="#542579" stopOpacity="0.15" />
                    <stop offset="80%" stopColor="#13151a" stopOpacity="0" />
                </linearGradient>

                <radialGradient
                    id="cardGlowRadLeftOtp"
                    cx="0%"
                    cy="100%"
                    r="65%"
                    fx="0%"
                    fy="100%"
                >
                    <stop offset="0%" stopColor="#b884d5" stopOpacity="1" />
                    <stop offset="20%" stopColor="#9d50bf" stopOpacity="0.9" />
                    <stop offset="45%" stopColor="#732e94" stopOpacity="0.7" />
                    <stop offset="70%" stopColor="#3d1856" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#13151a" stopOpacity="0" />
                </radialGradient>

                <radialGradient
                    id="cardGlowRadRightOtp"
                    cx="95%"
                    cy="100%"
                    r="85%"
                    fx="95%"
                    fy="100%"
                >
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                    <stop offset="20%" stopColor="#ffdfff" stopOpacity="1" />
                    <stop offset="40%" stopColor="#f8c6fe" stopOpacity="0.95" />
                    <stop offset="60%" stopColor="#d382f6" stopOpacity="0.7" />
                    <stop offset="80%" stopColor="#7f33a8" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#13151a" stopOpacity="0" />
                </radialGradient>
            </defs>

            <rect width="100%" height="100%" fill="#0d111a" />
            <rect width="100%" height="100%" fill="#BACFFF" fillOpacity="0.10" />

            <rect width="100%" height="100%" fill="url(#cardGlowLinearBaseOtp)" />
            <rect width="100%" height="100%" fill="url(#cardGlowRadLeftOtp)" />
            <rect width="100%" height="100%" fill="url(#cardGlowRadRightOtp)" />
        </svg>
    );
}

function WhyApiSection() {
    const useAreas = [
        {
            title: "Customer Registration",
            desc: "Incorporate mobile verification into registration forms to prevent invalid or duplicate phone entries.",
            icon: Smartphone,
        },
        {
            title: "User Authentication",
            desc: "Authenticate returning users with secure one-time passwords for step-up verification.",
            icon: KeyRound,
        },
        {
            title: "Digital Onboarding",
            desc: "Ensure frictionless customer onboarding with high-speed, automated OTP dispatch.",
            icon: Zap,
        },
        {
            title: "Account Creation",
            desc: "Verify phone numbers instantly during account setup across mobile and web platforms.",
            icon: UserCheck,
        },
        {
            title: "Financial Service Applications",
            desc: "Secure banking, payment, and lending platforms with robust multi-factor OTP checks.",
            icon: Landmark,
        },
        {
            title: "Mobile Number Verification Workflows",
            desc: "Streamline internal compliance, lead verification, and communication database hygiene.",
            icon: Layers,
        },
    ];

    return (
        <section id="why-api" className="relative py-12 sm:py-16 px-[5%] lg:px-[6%] overflow-hidden bg-black">
            {/* Background ambient lighting */}
            <div className="absolute right-[5%] top-[10%] w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute left-[5%] bottom-[10%] w-[500px] h-[500px] bg-indigo-900/15 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-[1320px] mx-auto relative z-10">
                <span className="block text-center text-[#76bbf8] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2">
                    Why API-Based Mobile OTP Verification?
                </span>
                <h2 className="text-white text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-center tracking-tight mb-3">
                    Structured Mobile Verification Across Key Business Workflows
                </h2>
                <div className="text-white/70 text-[15px] sm:text-[17px] text-center max-w-[750px] mx-auto mb-12 sm:mb-16 space-y-2">
                    <p>
                        Manual mobile verification can create additional steps in customer onboarding and registration processes.
                    </p>
                    <p>
                        An OTP Verification API allows businesses to integrate OTP generation into their existing applications and provide users with a structured mobile verification process.
                    </p>
                </div>

                {/* 6 Cards Responsive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 justify-items-center">
                    {useAreas.map((area, idx) => (
                        <div
                            key={idx}
                            className="relative w-full max-w-[406px] min-h-[260px] sm:min-h-[280px] rounded-[18px] border-[2px] border-[#DFC6FF] p-6 sm:p-8 flex flex-col justify-start overflow-hidden group hover:scale-[1.015] hover:shadow-[0_0_35px_rgba(223,198,255,0.3)] transition-all duration-300"
                        >
                            <BenefitCardGlow />

                            {/* Icon and Title */}
                            <div className="relative z-10 flex items-center gap-3.5 mb-5 sm:mb-6">
                                <div className="w-[46px] h-[46px] sm:w-[50px] sm:h-[50px] rounded-full bg-[#1b2234]/90 border border-white/20 flex items-center justify-center shrink-0 shadow-inner group-hover:border-white/40 transition-colors">
                                    <area.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white stroke-[1.8]" />
                                </div>
                                <h3 className="text-white font-bold text-[20px] sm:text-[23px] leading-[1.25] tracking-tight">
                                    {area.title}
                                </h3>
                            </div>

                            {/* Card Description */}
                            <p className="relative z-10 text-white/85 text-[14.5px] sm:text-[16px] leading-[1.6] font-normal">
                                {area.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Summary Banner */}
                <div className="mt-12 bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 text-center max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-4 shadow-2xl">
                    <span className="font-semibold text-base sm:text-lg text-slate-200">Key Benefits summary:</span>
                    <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-300">
                        <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> OTP-Based Authentication</span>
                        <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Reference-Based Tracking</span>
                        <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Simplified Customer Onboarding</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ── 9. FREQUENTLY ASKED QUESTIONS ── */
function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faqs" className="relative py-12 sm:py-16 px-[5%] lg:px-[6%]">
            <div className="max-w-[1400px] mx-auto">
                <span className="text-[#76bbf8] text-xs sm:text-sm font-semibold uppercase tracking-wider block mb-2">
                    Got Questions?
                </span>
                <h2 className="text-white text-[clamp(28px,3vw,42px)] font-bold mb-2 tracking-tight">
                    FAQs
                </h2>
                <p className="text-white/70 text-[15px] sm:text-[17px] mb-10">
                    Everything you need to know about our Mobile Verification with OTP API capabilities, parameters, and integration.
                </p>

                <div className="divide-y divide-white/20">
                    {faqItems.map((item, i) => (
                        <div key={i}>
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between py-6 text-left group transition-colors hover:text-white"
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

/* ── CTA SECTION ── */
function CTASection() {
    const apiOptions = [
        "Mobile Verification with OTP API",
        "Mobile Silent Verification API",
        "MNRL Check API",
        "Email Verification API",
        "Complete Channel Authentication Suite",
    ];

    const [selectedApis, setSelectedApis] = useState<string[]>([
        "Mobile Verification with OTP API",
    ]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const isAllSelected = selectedApis.length === apiOptions.length;

    const toggleSelectAll = () => {
        if (isAllSelected) {
            setSelectedApis([]);
        } else {
            setSelectedApis([...apiOptions]);
        }
    };

    const toggleOption = (opt: string) => {
        if (selectedApis.includes(opt)) {
            setSelectedApis(selectedApis.filter((o) => o !== opt));
        } else {
            setSelectedApis([...selectedApis, opt]);
        }
    };

    const handleSubmit = (actionType: "demo" | "meeting") => {
        if (!email) {
            alert("Please enter your work email.");
            return;
        }
        setSubmitted(true);
    };

    return (
        <section id="contact" className="relative py-10 sm:py-14 px-[5%] lg:px-[6%]">
            <div className="max-w-[1400px] mx-auto">
                <div className="bg-[#0e1424] border border-white/15 rounded-[28px] sm:rounded-[36px] lg:rounded-[40px] overflow-hidden grid lg:grid-cols-12 shadow-[0_0_50px_rgba(22,119,255,0.2)]">
                    {/* Left Form: API requirement selector and CTAs */}
                    <div className="lg:col-span-6 p-7 sm:p-10 lg:p-12 flex flex-col justify-between">
                        <div>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-3">
                                Get API Access
                            </span>
                            <h2 className="text-white text-[28px] sm:text-[34px] lg:text-[40px] font-bold leading-tight">
                                Transform Your Mobile Verification
                            </h2>
                            <p className="text-white/80 text-[14px] sm:text-[16px] font-normal leading-relaxed mt-2 mb-6">
                                Stop relying on slow or unverified phone entries. Integrate DigitalRakshak's Mobile Verification with OTP API to bring speed, reference tracking, and security to your user onboarding.
                            </p>

                            {submitted ? (
                                <div className="bg-emerald-950/60 border border-emerald-500/30 rounded-[20px] p-6 text-center my-6">
                                    <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                                    <h4 className="text-white font-bold text-lg mb-1">Request Received!</h4>
                                    <p className="text-white/80 text-sm">
                                        Our mobile authentication enterprise specialist will reach out to you shortly.
                                    </p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {/* Select Requirement - API List */}
                                    <div className="relative">
                                        <label className="block text-white/90 text-[13.5px] font-medium mb-1.5">
                                            Select Requirement - API List:
                                        </label>
                                        <button
                                            type="button"
                                            onClick={() => setDropdownOpen(!dropdownOpen)}
                                            className="w-full flex items-center justify-between bg-[#151c30] text-white text-[14px] sm:text-[15px] rounded-[16px] px-4 py-3 border border-white/15 hover:border-blue-400/50 transition-colors text-left"
                                        >
                                            <span className="truncate pr-2">
                                                {isAllSelected
                                                    ? "All APIs (Complete Suite)"
                                                    : selectedApis.length === 0
                                                        ? "Select APIs..."
                                                        : selectedApis.length === 1
                                                            ? selectedApis[0]
                                                            : `${selectedApis.length} APIs selected`}
                                            </span>
                                            <ChevronDown
                                                className={`w-4 h-4 text-white/70 shrink-0 transition-transform ${dropdownOpen ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </button>

                                        {/* Dropdown popup with Single / Multi / All selector */}
                                        {dropdownOpen && (
                                            <div className="absolute top-[calc(100%+6px)] left-0 right-0 z-50 bg-[#12192d] border border-blue-400/30 rounded-[18px] p-3 shadow-2xl space-y-1 backdrop-blur-xl">
                                                {/* Select All Toggle */}
                                                <div
                                                    onClick={toggleSelectAll}
                                                    className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-white/10 cursor-pointer border-b border-white/10 pb-2 text-[13.5px] font-semibold text-[#76bbf8]"
                                                >
                                                    <div
                                                        className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${isAllSelected
                                                            ? "bg-[#76bbf8] border-[#76bbf8]"
                                                            : "border-white/40"
                                                            }`}
                                                    >
                                                        {isAllSelected && <Check className="w-3 h-3 text-[#0a1e36] stroke-[3]" />}
                                                    </div>
                                                    <span>Select All Options</span>
                                                </div>

                                                {/* Options List */}
                                                <div className="max-h-56 overflow-y-auto space-y-1 pt-1">
                                                    {apiOptions.map((opt) => {
                                                        const selected = selectedApis.includes(opt);
                                                        return (
                                                            <div
                                                                key={opt}
                                                                onClick={() => toggleOption(opt)}
                                                                className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-white/10 cursor-pointer text-[13.5px] text-white/90"
                                                            >
                                                                <div
                                                                    className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${selected
                                                                        ? "bg-[#76bbf8] border-[#76bbf8]"
                                                                        : "border-white/30"
                                                                        }`}
                                                                >
                                                                    {selected && <Check className="w-3 h-3 text-[#0a1e36] stroke-[3]" />}
                                                                </div>
                                                                <span>{opt}</span>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Work Email */}
                                    <div>
                                        <label className="block text-white/90 text-[13.5px] font-medium mb-1.5">
                                            Work Email
                                        </label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="name@company.com"
                                            className="bg-[#151c30] text-white placeholder-white/40 text-[14px] sm:text-[15px] rounded-[16px] px-4 py-3 border border-white/15 outline-none focus:border-blue-400 w-full transition-colors"
                                        />
                                    </div>

                                    {/* Company Name */}
                                    <div>
                                        <label className="block text-white/90 text-[13.5px] font-medium mb-1.5">
                                            Company Name
                                        </label>
                                        <input
                                            type="text"
                                            value={company}
                                            onChange={(e) => setCompany(e.target.value)}
                                            placeholder="Your organization"
                                            className="bg-[#151c30] text-white placeholder-white/40 text-[14px] sm:text-[15px] rounded-[16px] px-4 py-3 border border-white/15 outline-none focus:border-blue-400 w-full transition-colors"
                                        />
                                    </div>

                                    {/* CTAs */}
                                    <div className="pt-2 grid sm:grid-cols-2 gap-3.5">
                                        <button
                                            type="button"
                                            onClick={() => handleSubmit("demo")}
                                            className="bg-[#B0DAFF] hover:bg-[#76bbf8] text-[#0a1e36] font-bold text-[14px] sm:text-[15px] py-3.5 px-5 rounded-[16px] shadow-lg transition-all flex flex-col items-center justify-center text-center"
                                        >
                                            <span>Get API Access</span>
                                            <span className="text-[11px] font-normal text-[#0a1e36]/80 mt-0.5">
                                                Instant Sandbox Setup
                                            </span>
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => handleSubmit("meeting")}
                                            className="bg-white/10 hover:bg-white/20 text-white font-bold text-[14px] sm:text-[15px] py-3.5 px-5 rounded-[16px] border border-white/20 transition-all flex flex-col items-center justify-center text-center"
                                        >
                                            <span>Book a Meeting</span>
                                            <span className="text-[11px] font-normal text-white/70 mt-0.5">
                                                Discuss Enterprise Needs
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Column: High-tech OTP API Simulator */}
                    <div className="lg:col-span-6 bg-gradient-to-br from-[#0c1428] via-[#091024] to-[#040817] p-7 sm:p-10 lg:p-12 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-center">
                        <div className="rounded-[20px] bg-[#020510] border border-blue-500/25 p-5 sm:p-6 shadow-2xl relative overflow-hidden font-mono text-[12px] sm:text-[13px]">
                            {/* Terminal top header */}
                            <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/10 font-sans">
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                                    <span className="text-white/60 text-xs ml-2 font-mono">POST /v1/mobile/generate-otp</span>
                                </div>
                                <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold">
                                    200 OK • Sandbox
                                </span>
                            </div>

                            {/* Payload simulator reflecting document fields */}
                            <div className="space-y-1 text-blue-200">
                                <p className="text-white/50">{"// OTP Generation Response"}</p>
                                <p><span className="text-[#ff7b72]">&quot;status&quot;</span>: <span className="text-[#a5d6ff]">&quot;SUCCESS&quot;</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;referenceId&quot;</span>: <span className="text-[#7ee787]">&quot;ref_otp_982348a&quot;</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;countryCode&quot;</span>: <span className="text-[#a5d6ff]">&quot;+91&quot;</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;mobileNumber&quot;</span>: <span className="text-[#a5d6ff]">&quot;98XXXX3210&quot;</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;message&quot;</span>: <span className="text-[#a5d6ff]">&quot;OTP generated successfully&quot;</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;expiresIn&quot;</span>: <span className="text-[#79c0ff]">300</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;deliveryChannel&quot;</span>: <span className="text-[#a5d6ff]">&quot;SMS_HIGH_PRIORITY&quot;</span></p>
                            </div>

                            {/* Bottom badge */}
                            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between font-sans text-xs text-white/60">
                                <span>DigitalRakshak Authentication Engine</span>
                                <span className="text-[#76bbf8] flex items-center gap-1">
                                    <ShieldCheck className="w-3.5 h-3.5" /> High Trust Verified
                                </span>
                            </div>
                        </div>

                        <p className="text-white/60 text-xs text-center mt-4">
                            OTP generation • Unique reference ID tracking • High delivery SLA
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function MobileVerificationOtpPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Mobile Verification with OTP API for Enterprises",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "All",
        "provider": {
            "@type": "Organization",
            "name": "DigitalRakshak",
            "url": "https://digitalrakshak.com",
        },
        "description":
            "Generate OTPs for mobile number verification with DigitalRakshak's Mobile Verification API. Integrate OTP-based authentication into your business workflows.",
        "keywords": [
            "Mobile Verification with OTP API",
            "Mobile Number Verification API",
            "OTP Verification API",
            "Mobile OTP Authentication API",
            "Phone Number Verification API",
            "OTP Generation API",
            "Mobile Number Authentication",
            "OTP-Based Mobile Verification",
        ],
    };

    return (
        <div className="align-center bg-black min-h-screen w-full font-[Inter] overflow-x-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* 1. HERO SECTION */}
            <HeroSection />

            {/* WHAT CAN YOU DO? */}
            <WhatCanYouDoSection />

            {/* STRUCTURED PARAMETERS SECTION */}
            <VerificationCardsSection />

            {/* HOW MOBILE OTP VERIFICATION WORKS */}
            <HowItWorksSection />

            {/* CONNECT MOBILE VERIFICATION API WITH YOUR EXISTING SYSTEM */}
            <ConnectAPISection />

            {/* KEY BENEFITS FOR YOUR BUSINESS */}
            <KeyBenefitsSection />

            {/* WHY API-BASED MOBILE OTP VERIFICATION? */}
            <WhyApiSection />

            {/* FAQS */}
            <FAQSection />

            {/* CTA & INTERACTIVE SIMULATOR */}
            <CTASection />
        </div>
    );
}
