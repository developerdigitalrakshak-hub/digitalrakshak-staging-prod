"use client";

import { useState } from "react";
import {
    ShieldCheck,
    Mail,
    Smartphone,
    Key,
    AlertTriangle,
    MessageSquare,
    Zap,
    BarChart,
    Globe,
    Briefcase,
    Gamepad2,
    ShoppingCart,
    Users,
    ArrowRight,
    CheckCircle2,
    Check,
    ChevronDown,
    Building2,
    Calendar,
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
const imgSvgRepoIconCarrier1 = `${assetPathPrefix}/5f232.svg`;
const imgSvgRepoIconCarrier2 = `${assetPathPrefix}/36cf0.svg`;
const imgSvgRepoIconCarrier3 = `${assetPathPrefix}/bb7aa.svg`;
const imgEllipse3 = `${assetPathPrefix}/40e16.svg`;
const imgSvgRepoIconCarrier4 = `${assetPathPrefix}/a3822.svg`;
const imgVector = `${assetPathPrefix}/61a9d.svg`;
const imgSvgRepoIconCarrier5 = `${assetPathPrefix}/1591d.svg`;
const imgGroup27 = `${assetPathPrefix}/b80a2.svg`;
const imgLine1 = `${assetPathPrefix}/b4b48.svg`;
const imgEllipse22 = `${assetPathPrefix}/e2585.svg`;
const imgSvgRepoIconCarrier6 = `${assetPathPrefix}/52ecf.svg`;
const imgFrame70 = `${assetPathPrefix}/193cf.svg`;
const imgEllipse23 = `${assetPathPrefix}/0bed7.svg`;
const imgVector1 = `${assetPathPrefix}/b4086.svg`;
const imgVector2 = `${assetPathPrefix}/50101.svg`;

const faqItems = [
    {
        q: "1. How many countries do you support for mobile verification?",
        a: "We provide global coverage, allowing you to verify mobile numbers in over 200 countries and territories.",
    },
    {
        q: "2. What is the delivery speed for OTPs?",
        a: "Our infrastructure is optimized for speed, ensuring that OTPs are delivered via SMS or email in real-time, usually within seconds.",
    },
    {
        q: "3. Can I customize the OTP length and expiration?",
        a: "Yes, you can configure the length of the OTP (e.g., 4 or 6 digits) and set custom expiration times to meet your security requirements.",
    },
    {
        q: "4. Does your system detect burner or disposable emails?",
        a: "Absolutely. Our Email Verification tool includes a comprehensive database to detect and block temporary or disposable email addresses.",
    },
];

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

            {/* Center Hero content - fits on screen */}
            <div className="relative z-10 flex-1 flex items-center py-4 lg:py-8">
                <div className="w-full max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-8 xl:gap-12 items-center">
                    {/* Left content */}
                    <div className="lg:col-span-5 flex flex-col justify-between text-left">
                        <div>
                            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3">
                                <ShieldCheck className="w-4 h-4 text-[#76bbf8]" />
                                Secure Onboarding & Fraud Prevention
                            </span>
                            <h1 className="text-white text-[clamp(28px,7vw,56px)] font-black leading-[1.1] tracking-tight">
                                Email & Mobile<br />Verification
                            </h1>
                            <p className="text-white text-[15px] sm:text-[18px] lg:text-[22px] font-medium mt-3 sm:mt-4">
                                Real-Time User Validation to empower your business with trust, instant fraud reduction, and improved communication reliability.
                            </p>
                        </div>

                        <div className="mt-5 sm:mt-8 lg:mt-10">
                            <p className="text-white/90 text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-relaxed max-w-[540px]">
                                In today's digital ecosystem, your first layer of trust begins with confirming contact details are valid, owned by the user, and reachable.
                            </p>
                            <div className="flex gap-3 sm:gap-4 mt-5 sm:mt-6 items-center flex-wrap">
                                <a
                                    href="#contact"
                                    className="bg-[#B0DAFF] hover:bg-[#76bbf8] text-[#0a1e36] font-semibold text-[14px] sm:text-[15px] px-6 sm:px-8 py-2.5 sm:py-3 rounded-[18px] shadow-[2px_2px_11.4px_0px_#00000040,_5px_-2px_8.7px_0px_#0084FF6B_inset] transition-all flex items-center gap-2"
                                >
                                    <span>Get Started Securely</span>
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                                <a
                                    href="#contact"
                                    className="bg-white hover:bg-gray-100 text-[#0a1e36] font-semibold text-[14px] sm:text-[15px] px-6 sm:px-8 py-2.5 sm:py-3 rounded-[18px] shadow-[2px_2px_11.4px_0px_#00000040,_5px_-2px_8.7px_0px_#0084FF6B_inset] transition-all"
                                >
                                    Book a Meeting
                                </a>
                            </div>

                            {/* Tag capabilities */}
                            <div className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8 pt-4 border-t border-white/10 flex-wrap text-white/80 text-[12.5px] sm:text-[13.5px]">
                                <span className="flex items-center gap-1.5"><Mail className="w-4 h-4 text-[#76bbf8]" /> Email Deliverability</span>
                                <span className="text-white/30 hidden sm:inline">•</span>
                                <span className="flex items-center gap-1.5"><Smartphone className="w-4 h-4 text-[#76bbf8]" /> Mobile Carrier Check</span>
                                <span className="text-white/30 hidden sm:inline">•</span>
                                <span className="flex items-center gap-1.5"><Key className="w-4 h-4 text-[#76bbf8]" /> Multi-Channel OTP</span>
                                <span className="text-white/30 hidden sm:inline">•</span>
                                <span className="flex items-center gap-1.5"><Globe className="w-4 h-4 text-[#76bbf8]" /> 200+ Countries</span>
                            </div>
                        </div>
                    </div>

                    {/* Right – verification dashboard visuals */}
                    <div className="lg:col-span-7 relative flex justify-center lg:justify-end items-center w-full mt-4 lg:mt-0">
                        <div className="flex items-center gap-3 sm:gap-6 md:gap-8 w-full max-w-[650px] lg:max-w-none mx-auto">
                            {/* Main card - left */}
                            <div className="flex-[326] rounded-[16px] sm:rounded-[22px] lg:rounded-[26px] overflow-hidden shadow-2xl border border-white/10 aspect-[326/354] bg-[#091122] relative group">
                                <img
                                    alt="Verification Intelligence Dashboard"
                                    className="w-full h-full object-cover object-center"
                                    src={imgFrame19}
                                />
                                <div className="absolute bottom-3 left-3 right-3 bg-[#0a1228]/90 backdrop-blur-md border border-blue-400/30 rounded-xl p-3 flex items-center justify-between text-xs text-white">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                                        <span className="font-semibold text-white/95">Real-Time Validation Active</span>
                                    </div>
                                    <span className="text-[#76bbf8] font-mono text-[11px] bg-blue-500/20 px-2 py-0.5 rounded-full">
                                        Sub-second OTP
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

// Properly aligned FeatureCard with centered circular badge and matching Figma palette
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
        <div className="relative w-full max-w-[235px] mt-6 mx-auto flex-shrink-0 flex flex-col justify-start transition-transform duration-300 hover:-translate-y-1.5 group">
            {/* Top glowing circular badge - perfectly centered */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 w-12 h-12 rounded-full bg-[#0088FF]/50 border-2 border-[#38bdf8]/70 shadow-[0_0_22px_rgba(0,136,255,0.65)] backdrop-blur-md flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_28px_rgba(0,136,255,0.9)]">
                <img
                    alt=""
                    src={icon}
                    className="w-6 h-6 object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                />
            </div>

            {/* Card Body with exact Figma styling */}
            <div className="w-full min-h-[220px] rounded-[18px] bg-[#5173C2]/45 border border-[#6b8cd8]/35 backdrop-blur-md px-4 pt-9 pb-5 text-center sm:text-left flex flex-col justify-start h-full shadow-[0_10px_25px_rgba(0,0,0,0.35)]">
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

function WhatCanYouDoSection() {
    const cards = [
        {
            title: "1. Validate Deliverability",
            desc: "Perform syntax checks, domain validation, MX record lookup, and SMTP checks to avoid bounce-backs.",
            icon: imgSvgRepoIconCarrier,
        },
        {
            title: "2. Verify Mobile Numbers",
            desc: "Confirm active status and carrier details across global telecom networks in 200+ countries.",
            icon: imgSvgRepoIconCarrier,
        },
        {
            title: "3. Block Disposable Emails",
            desc: "Detect and filter out temporary, disposable, and burner email addresses to prevent bot sign-ups.",
            icon: imgSvgRepoIconCarrier,
        },
        {
            title: "4. Multi-Channel OTPs",
            desc: "Deliver high-speed OTP authentication across SMS, Email, and Voice with customizable expiration.",
            icon: imgSvgRepoIconCarrier,
        },
        {
            title: "5. Detect Virtual/VoIP Numbers",
            desc: "Flag VoIP, virtual, and spoofed phone numbers before activating accounts to minimize fraud risks.",
            icon: imgSvgRepoIconCarrier,
        },
    ];

    return (
        <section id="features" className="relative pt-10 sm:pt-14 pb-8 sm:pb-12 px-[5%] lg:px-[6%]">
            <div className="absolute left-[-10%] top-[-10%] w-full max-w-[848px] pointer-events-none select-none opacity-70 mix-blend-screen">
                <img
                    alt=""
                    className="w-full h-full object-contain"
                    src={imgEllipse19}
                />
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto">
                <h2 className="text-white text-[clamp(24px,4vw,42px)] font-bold text-center tracking-tight mb-3">
                    What Can You Do with Email & Mobile Verification
                </h2>
                <p className="text-white/70 text-[15px] sm:text-[17px] text-center max-w-[700px] mx-auto mb-14 sm:mb-20">
                    Comprehensive real-time checks designed to secure your platform across email, mobile, and OTP services.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10 sm:gap-y-16 justify-items-center">
                    {cards.map((c, i) => (
                        <FeatureCard key={i} icon={c.icon} title={c.title} desc={c.desc} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function OverviewCardsSection() {
    return (
        <section className="relative py-8 sm:py-12 px-[5%] lg:px-[6%]">
            <div className="relative z-10 max-w-[1240px] mx-auto">
                <h2 className="text-white text-[24px] sm:text-[32px] lg:text-[36px] font-bold text-center tracking-tight mb-3">
                    What is Email & Mobile Verification? | Core Validation
                </h2>
                <p className="text-white/70 text-[14px] sm:text-[16px] text-center max-w-[650px] mx-auto mb-10 sm:mb-14">
                    Confirm that contact details are valid, owned by the user, and reachable for communication.
                </p>

                {/* Outer Blue Border Box */}
                <div className="relative bg-[#040d24]/70 border-2 border-[#1677ff] rounded-[22px] p-6 sm:p-9 lg:p-12 shadow-[0_0_35px_rgba(22,119,255,0.35)] backdrop-blur-md">
                    <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 divide-y md:divide-y-0 md:divide-x divide-white/15">
                        {/* What is Email & Mobile Verification */}
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
                                    What is Email & Mobile Verification?
                                </h3>
                            </div>
                            <p className="text-white/80 text-[13.5px] font-normal leading-relaxed mb-3">
                                In today's digital ecosystem, your first layer of trust begins with something simple—verifying contact details. Whether it's onboarding a new user, processing a transaction, or preventing fake registrations, accurate verification plays a critical role.
                            </p>
                            <p className="text-white/90 text-[13.5px] font-semibold mb-3 text-[#76bbf8]">
                                It is the process of confirming that a user's contact details are:
                            </p>
                            <ol className="text-white/90 text-[14px] sm:text-[15px] font-medium leading-[26px] list-decimal list-inside space-y-1.5 pl-1">
                                {[
                                    "Valid and active",
                                    "Owned by the user",
                                    "Reachable for communication",
                                ].map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ol>
                            <div className="mt-5 p-3.5 bg-blue-500/10 border-l-4 border-[#76bbf8] rounded-r-xl">
                                <p className="text-white/90 text-[12.5px] sm:text-[13.5px] italic leading-relaxed">
                                    This is typically done through OTP authentication, validation checks, and intelligent filtering mechanisms to ensure every user entering your platform is genuine.
                                </p>
                            </div>
                        </div>

                        {/* Why it Matters (Core Value Drivers) */}
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
                                    Why It Matters
                                </h3>
                            </div>
                            <p className="text-white/70 text-[13.5px] font-normal leading-relaxed mb-4 sm:mb-5">
                                Add an extra layer of authentication, improve deliverability, and build a trustworthy community.
                            </p>
                            <ol className="text-white/90 text-[14px] sm:text-[15px] font-medium leading-[26px] list-decimal list-inside space-y-2 pl-1">
                                {[
                                    "Prevent Fake Registrations — Stop bots, duplicate accounts, and fake users from entering your system.",
                                    "Strengthen Security — Add an extra layer of authentication during login, transactions, and recovery.",
                                    "Improve Communication — Ensure that your notifications, invoices, and updates always reach the right person.",
                                    "Boost User Trust — A verified user base builds a safer environment for everyone in your community.",
                                    "Cost Efficiency — Minimize wasted SMS credits and eliminate email server bounce penalties.",
                                ].map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ol>
                            <div className="mt-5 p-3.5 bg-emerald-500/10 border-l-4 border-emerald-400 rounded-r-xl">
                                <p className="text-emerald-200 text-[12.5px] sm:text-[13.5px] font-medium leading-relaxed">
                                    Optimized global infrastructure supporting 200+ countries with carrier intelligence and sub-second OTP latency.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ConnectAPISection() {
    const workflows = [
        {
            title: "User Registration & Onboarding",
            desc: "Validate email validity and phone authenticity in real-time before activating accounts, ensuring zero fake user signups.",
        },
        {
            title: "High-Value Transaction Authentication",
            desc: "Trigger instant multi-channel OTPs (SMS, Email, Voice) during withdrawals, fund transfers, or sensitive business actions.",
        },
        {
            title: "Account Recovery & Password Resets",
            desc: "Ensure password reset links and security credentials reach verified, owned, and reachable contact channels without risk.",
        },
    ];

    return (
        <section className="relative pt-8 sm:pt-10 lg:pt-12 pb-7 sm:pb-9 px-[5%] lg:px-[6%] overflow-hidden">
            <div className="relative z-10 max-w-[1240px] mx-auto">
                <h2 className="text-white text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-center tracking-tight mb-12 sm:mb-16">
                    Connect Email & Mobile Verification API With Your Existing System
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 items-start justify-items-center">
                    {/* LEFT COLUMN: Blue Box + Integrate with */}
                    <div className="w-full max-w-[543px] flex flex-col">
                        <div className="w-full min-h-[190px] h-auto bg-gradient-to-b from-[#b2daff] to-[#92c8fc] border-2 border-[#54b4ff] rounded-[20px] p-6 sm:p-8 flex items-center shadow-[0_0_35px_rgba(84,180,255,0.45),0_0_12px_rgba(84,180,255,0.3)]">
                            <p className="text-[#081a2e] text-[15px] sm:text-[16px] lg:text-[17px] font-normal leading-[1.65]">
                                Contact verification does not need to be managed separately. API integration brings automated email, mobile, and OTP authentication straight into your onboarding and registration workflows.
                            </p>
                        </div>

                        <h4 className="text-white font-bold text-[18px] sm:text-[20px] mt-8 mb-4">
                            Integrate with:
                        </h4>

                        <div className="space-y-3 text-white/90 text-[14px] sm:text-[15px] font-medium pl-1">
                            <div>1. Customer & user onboarding platforms</div>
                            <div>2. Mobile apps (iOS & Android) and web applications</div>
                            <div>3. E-commerce checkout & registration portals</div>
                            <div>4. Internal compliance workflows & login security</div>
                            <div>5. Financial & transaction authentication workflows</div>
                            <div>6. Enterprise technology platforms & CRM systems</div>
                        </div>

                        <p className="text-white/80 text-[13.5px] sm:text-[14.5px] leading-relaxed mt-6 pl-1">
                            The API service provides real-time webhooks, carrier intel, and pass-through verification responses.
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
                <div className="mt-6 sm:mt-8 flex justify-center">
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

function CapabilitiesSection() {
    return (
        <section id="capabilities" className="relative py-12 sm:py-16 px-[5%] lg:px-[6%] bg-[#02050f]/60">
            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="text-center mb-12 sm:mb-16">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3">
                        Enterprise Verification Engine
                    </span>
                    <h2 className="text-white text-[clamp(28px,4vw,44px)] font-bold mb-3 tracking-tight">
                        Our Verification Capabilities
                    </h2>
                    <p className="text-white/70 text-[15px] sm:text-[18px] max-w-2xl mx-auto">
                        Comprehensive real-time checks designed to secure your platform across email, mobile, and OTP services.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 justify-center">
                    {/* Email Verification */}
                    <div className="relative overflow-hidden rounded-[24px] p-8 border border-blue-500/30 bg-[#070e22]/90 backdrop-blur-md shadow-2xl hover:border-blue-400/60 transition-all duration-300 hover:-translate-y-1">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                        <div className="w-14 h-14 rounded-2xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center mb-6">
                            <Mail className="w-7 h-7 text-[#76bbf8]" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-white">Email Verification</h3>
                        <p className="text-white/75 text-sm sm:text-[14.5px] mb-6 min-h-[48px] leading-relaxed">
                            Validate email addresses in real-time to ensure deliverability and avoid bounce-backs.
                        </p>
                        <h4 className="font-semibold mb-4 text-xs text-[#76bbf8] uppercase tracking-wider">
                            Key Features
                        </h4>
                        <ul className="space-y-3">
                            {[
                                "Syntax check (Validating format)",
                                "Domain validation",
                                "Disposable email detection",
                                "SMTP check (Verifying mailbox)",
                            ].map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-white/90 font-medium">
                                    <CheckCircle2 className="w-4 h-4 text-[#76bbf8] mt-0.5 flex-shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Mobile Verification */}
                    <div className="relative overflow-hidden rounded-[24px] p-8 border border-emerald-500/30 bg-[#070e22]/90 backdrop-blur-md shadow-2xl hover:border-emerald-400/60 transition-all duration-300 hover:-translate-y-1">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
                        <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center mb-6">
                            <Smartphone className="w-7 h-7 text-emerald-400" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-white">Mobile Verification</h3>
                        <p className="text-white/75 text-sm sm:text-[14.5px] mb-6 min-h-[48px] leading-relaxed">
                            Validate phone numbers across global networks to ensure authenticity and reduce SMS costs.
                        </p>
                        <h4 className="font-semibold mb-4 text-xs text-emerald-400 uppercase tracking-wider">
                            Key Features
                        </h4>
                        <ul className="space-y-3">
                            {[
                                "Global coverage (200+ countries)",
                                "Real-time OTP delivery",
                                "Carrier detection",
                                "Fraud detection (virtual/VoIP)",
                            ].map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-white/90 font-medium">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* OTP Services */}
                    <div className="relative overflow-hidden rounded-[24px] p-8 border border-purple-500/30 bg-[#070e22]/90 backdrop-blur-md shadow-2xl hover:border-purple-400/60 transition-all duration-300 hover:-translate-y-1">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600"></div>
                        <div className="w-14 h-14 rounded-2xl bg-purple-500/15 border border-purple-400/30 flex items-center justify-center mb-6">
                            <Key className="w-7 h-7 text-purple-400" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-white">OTP Services</h3>
                        <p className="text-white/75 text-sm sm:text-[14.5px] mb-6 min-h-[48px] leading-relaxed">
                            Secure your onboarding and high-value transactions with our robust OTP solution.
                        </p>
                        <h4 className="font-semibold mb-4 text-xs text-purple-400 uppercase tracking-wider">
                            Key Features
                        </h4>
                        <ul className="space-y-3">
                            {[
                                "Multi-channel: SMS, Email, Voice",
                                "Custom expiration times",
                                "Scalable high-speed delivery",
                                "Detailed logs and reports",
                            ].map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-white/90 font-medium">
                                    <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

function HowItWorksSection() {
    const [activeStep, setActiveStep] = useState<number | null>(1);

    const stepsData = [
        {
            id: 1,
            title: "1. User Entry",
            desc: "User enters their email or mobile number on your platform.",
            content: (
                <div className="space-y-2 text-[#4b5563] text-[13.5px] sm:text-[14.5px] leading-relaxed pt-2">
                    <p>User inputs their contact information through your signup form, login page, or API endpoint.</p>
                </div>
            ),
        },
        {
            id: 2,
            title: "2. Validation Trigger",
            desc: "Our system triggers a validation check or sends a unique OTP instantly.",
            content: (
                <div className="space-y-2 text-[#4b5563] text-[13.5px] sm:text-[14.5px] leading-relaxed pt-2">
                    <p>Our verification engine executes syntax & carrier analysis or triggers an encrypted OTP across requested channels.</p>
                </div>
            ),
        },
        {
            id: 3,
            title: "3. OTP Received",
            desc: "User receives the OTP and enters it on your site or mobile application.",
            content: (
                <div className="space-y-2 text-[#4b5563] text-[13.5px] sm:text-[14.5px] leading-relaxed pt-2">
                    <p>High-speed global routing guarantees sub-second delivery to the user's mobile device or inbox.</p>
                </div>
            ),
        },
        {
            id: 4,
            title: "4. Code Verification",
            desc: "Our system mathematically verifies the code and sends a status response to your server.",
            content: (
                <div className="space-y-2 text-[#4b5563] text-[13.5px] sm:text-[14.5px] leading-relaxed pt-2">
                    <p>Tamper-proof mathematical verification confirms the code against active session tokens with zero delay.</p>
                </div>
            ),
        },
        {
            id: 5,
            title: "5. Successfully Verified",
            desc: "The user is successfully verified and can proceed without friction.",
            content: (
                <div className="space-y-2 text-[#4b5563] text-[13.5px] sm:text-[14.5px] leading-relaxed pt-2">
                    <p>The user proceeds through registration, payment, or account activation with verified trust credentials.</p>
                </div>
            ),
        },
    ];

    return (
        <section id="how-it-works" className="relative py-10 sm:py-14 px-[5%] lg:px-[6%] overflow-hidden bg-black">
            <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-[#1e3a8a]/20 rounded-full blur-[140px] pointer-events-none" />

            <div className="relative z-10 max-w-[1240px] mx-auto">
                <div className="text-center mb-12 sm:mb-16">
                    <span className="inline-block mb-3 px-3.5 py-1 bg-blue-500/10 border border-blue-400/30 text-[#76bbf8] text-xs font-bold uppercase tracking-widest rounded-full">
                        Process
                    </span>
                    <h2 className="text-white text-[28px] sm:text-[34px] lg:text-[40px] font-bold tracking-tight">
                        How It Works
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
                    {/* Left Column: Visual Card */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-start">
                        <div className="w-full max-w-[420px] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-blue-500/20 relative bg-[#0b101d] p-6">
                            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <span className="text-[11px] font-mono text-[#76bbf8] bg-blue-500/20 px-2.5 py-0.5 rounded-full">
                                    STEP: {activeStep ?? 1} / 5
                                </span>
                            </div>

                            <div className="space-y-4">
                                <div className="rounded-xl bg-[#0e172e] border border-blue-400/25 p-4 relative overflow-hidden">
                                    <div className="flex items-center gap-3 mb-2">
                                        <ShieldCheck className="w-5 h-5 text-[#76bbf8]" />
                                        <h4 className="text-white font-bold text-sm">
                                            {stepsData.find((s) => s.id === (activeStep ?? 1))?.title}
                                        </h4>
                                    </div>
                                    <p className="text-white/80 text-xs leading-relaxed">
                                        {stepsData.find((s) => s.id === (activeStep ?? 1))?.desc}
                                    </p>
                                    <div className="mt-3 flex items-center justify-between text-[11px] text-white/50 pt-2 border-t border-white/10">
                                        <span>Status: Real-Time Active</span>
                                        <span className="text-emerald-400 font-mono">Delivered • 99.9%</span>
                                    </div>
                                </div>

                                <div className="p-3.5 bg-black/40 rounded-xl border border-white/10 text-xs font-mono text-blue-200 space-y-1">
                                    <p className="text-white/40">// Contact Validation Pipeline</p>
                                    <p><span className="text-[#ff7b72]">&quot;channel&quot;</span>: <span className="text-[#a5d6ff]">&quot;SMS_OTP&quot;</span>,</p>
                                    <p><span className="text-[#ff7b72]">&quot;carrier&quot;</span>: <span className="text-[#a5d6ff]">&quot;Active Carrier&quot;</span>,</p>
                                    <p><span className="text-[#ff7b72]">&quot;disposable&quot;</span>: <span className="text-[#79c0ff]">false</span>,</p>
                                    <p><span className="text-[#ff7b72]">&quot;deliveryLatencyMs&quot;</span>: <span className="text-[#7ee787]">95</span></p>
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

function WhyChooseSection() {
    return (
        <section id="why-choose-us" className="relative py-10 sm:py-14 px-[5%] lg:px-[6%]">
            <div className="absolute left-0 w-full max-w-[848px] pointer-events-none select-none opacity-65 mix-blend-screen z-50">
                <img
                    alt=""
                    className="w-full h-full object-contain"
                    src={imgEllipse21}
                />
            </div>
            <div className="max-w-[1400px] mx-auto space-y-16 lg:space-y-20">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    <div className="lg:col-span-5">
                        <span className="text-[#76bbf8] text-xs font-semibold uppercase tracking-wider">
                            Advantages
                        </span>
                        <h2 className="text-white text-[clamp(24px,3vw,40px)] font-bold leading-tight mt-1 mb-6">
                            Why Choose DigitalRakshak?
                        </h2>
                        <ul className="text-white/90 text-[14px] sm:text-[16px] font-normal leading-relaxed space-y-3.5 pl-1">
                            {[
                                { title: "API-First & Developer-Friendly", desc: "Integrate our verification tools into your workflow in minutes with clear documentation and SDKs." },
                                { title: "Real-Time Processing", desc: "Instant validation and OTP delivery for seamless onboarding without dropping users." },
                                { title: "Secure & Scalable", desc: "Built to handle high volumes with enterprise-grade security and reliability." },
                                { title: "High Deliverability", desc: "Optimized global infrastructure ensures maximum email and SMS success rates." },
                                { title: "Actionable Insights", desc: "Get detailed logs, reports, and real-time analytics for better decision-making." },
                            ].map((item) => (
                                <li key={item.title} className="flex items-start gap-2.5">
                                    <span className="w-2 h-2 rounded-full bg-[#76bbf8] shrink-0 mt-2" />
                                    <span>
                                        <strong className="text-white">{item.title}:</strong> {item.desc}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-7 flex items-center gap-4 sm:gap-5 w-full">
                        <div className="flex-[581] rounded-[18px] overflow-hidden shadow-2xl border border-white/10">
                            <img
                                alt="Verification Dashboard"
                                className="w-full h-auto rounded-[18px] object-cover block"
                                src={imgFrame20}
                            />
                        </div>

                        <div className="flex-[288] flex flex-col justify-between self-stretch gap-3 sm:gap-4">
                            <div className="rounded-[18px] overflow-hidden shadow-2xl border border-white/10">
                                <img
                                    alt="Verification Analytics"
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
                                DigitalRakshak empowers businesses with scalable verification, compliance, and enterprise communication integrity.
                            </p>
                            <p className="text-white/70 text-[14px] leading-relaxed">
                                Protect your digital ecosystem, eliminate bot registrations, and ensure reliable communication across every touchpoint.
                            </p>
                        </div>

                        <div className="lg:col-span-7 bg-[#050b1a]/60 border border-white/10 rounded-[20px] p-6 sm:p-7">
                            <p className="text-white/90 text-[14px] sm:text-[15px] font-semibold mb-4 text-[#B0DAFF]">
                                For Email & Mobile Verification, we bring together:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    "Global 200+ Countries Mobile Reach",
                                    "Real-Time SMTP & Mailbox Validation",
                                    "Multi-Channel OTP (SMS, Email, Voice)",
                                    "Disposable & Burner Email Blocking",
                                    "Carrier & Virtual/VoIP Detection",
                                    "Sub-second Delivery Latency (<2s)",
                                    "Detailed Analytics & Webhook Logs",
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
                    id="cardGlowLinearBaseEmail"
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
                    id="cardGlowRadLeftEmail"
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
                    id="cardGlowRadRightEmail"
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

            <rect width="100%" height="100%" fill="url(#cardGlowLinearBaseEmail)" />
            <rect width="100%" height="100%" fill="url(#cardGlowRadLeftEmail)" />
            <rect width="100%" height="100%" fill="url(#cardGlowRadRightEmail)" />
        </svg>
    );
}

function IndustryUseCasesSection() {
    const useCases = [
        {
            title: "Fintech & Payments",
            desc: "User onboarding (KYC initiation), transaction authentication, and fraud prevention.",
            icon: Briefcase,
        },
        {
            title: "Gaming & iGaming",
            desc: "Player registration, account verification, and bonus abuse prevention.",
            icon: Gamepad2,
        },
        {
            title: "E-commerce & Marketplaces",
            desc: "Customer sign-up validation, seller onboarding, and order confirmation.",
            icon: ShoppingCart,
        },
        {
            title: "HR & Staffing Platforms",
            desc: "Candidate registration, employee onboarding, and contact validation.",
            icon: Users,
        },
        {
            title: "Prevent Fake Accounts",
            desc: "Reduce duplicate accounts, block disposable emails, and improve database quality.",
            icon: Zap,
        },
        {
            title: "Smooth Onboarding",
            desc: "Instant OTP delivery and real-time validation to ensure seamless user conversion.",
            icon: Globe,
        },
    ];

    return (
        <section id="use-cases" className="relative py-10 sm:py-14 px-[5%] lg:px-[6%] overflow-hidden bg-black">
            <div className="absolute right-[5%] top-[10%] w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute left-[5%] bottom-[10%] w-[500px] h-[500px] bg-indigo-900/15 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-[1320px] mx-auto relative z-10">
                <h2 className="text-white text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-center tracking-tight mb-3">
                    Use Cases Across Industries
                </h2>
                <p className="text-white/70 text-[15px] sm:text-[17px] text-center max-w-[650px] mx-auto mb-12 sm:mb-16">
                    See how different sectors utilize our verification services to build robust and trustworthy platforms.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 justify-items-center">
                    {useCases.map((benefit, idx) => (
                        <div
                            key={idx}
                            className="relative w-full max-w-[406px] min-h-[280px] sm:min-h-[300px] rounded-[18px] border-[2px] border-[#DFC6FF] p-6 sm:p-8 flex flex-col justify-start overflow-hidden group hover:scale-[1.015] hover:shadow-[0_0_35px_rgba(223,198,255,0.3)] transition-all duration-300"
                        >
                            <BenefitCardGlow />

                            <div className="relative z-10 flex items-center gap-3.5 mb-5 sm:mb-6">
                                <div className="w-[46px] h-[46px] sm:w-[50px] sm:h-[50px] rounded-full bg-[#1b2234]/90 border border-white/20 flex items-center justify-center shrink-0 shadow-inner group-hover:border-white/40 transition-colors">
                                    <benefit.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white stroke-[1.8]" />
                                </div>
                                <h3 className="text-white font-bold text-[20px] sm:text-[23px] leading-[1.25] tracking-tight">
                                    {benefit.title}
                                </h3>
                            </div>

                            <p className="relative z-10 text-white/85 text-[14.5px] sm:text-[16px] leading-[1.6] font-normal">
                                {benefit.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Key Benefits Summary Banner */}
                <div className="mt-12 bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 text-center max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-4 shadow-2xl">
                    <span className="font-semibold text-base sm:text-lg text-slate-200">Key Benefits summary:</span>
                    <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-300">
                        <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Reduce duplicate accounts</span>
                        <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Improve database quality</span>
                        <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Smooth onboarding</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faqs" className="relative py-9 sm:py-12 px-[5%] lg:px-[6%]">
            <div className="max-w-[1400px] mx-auto">
                <h2 className="text-white text-[clamp(28px,3vw,42px)] font-bold mb-2 tracking-tight">
                    Frequently Asked Questions
                </h2>
                <p className="text-white/70 text-[15px] sm:text-[17px] mb-10">
                    Everything you need to know about our verification solution
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

function CTASection() {
    const apiOptions = [
        "Email Verification API",
        "Mobile Number Verification API",
        "Multi-Channel OTP API (SMS, Email, Voice)",
        "Disposable Email Detection API",
        "Carrier & VoIP Fraud Check API",
        "Full Contact Verification Suite",
    ];

    const [selectedApis, setSelectedApis] = useState<string[]>([
        "Email Verification API",
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
        <section id="contact" className="relative py-8 sm:py-12 px-[5%] lg:px-[6%]">
            <div className="max-w-[1400px] mx-auto">
                <div className="bg-[#0e1424] border border-white/15 rounded-[28px] sm:rounded-[36px] lg:rounded-[40px] overflow-hidden grid lg:grid-cols-12 shadow-[0_0_50px_rgba(22,119,255,0.2)]">
                    {/* Left Form: API requirement selector and CTAs */}
                    <div className="lg:col-span-6 p-7 sm:p-10 lg:p-12 flex flex-col justify-between">
                        <div>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-3">
                                Get Started
                            </span>
                            <h2 className="text-white text-[28px] sm:text-[34px] lg:text-[40px] font-bold leading-tight">
                                Get Started with Secure Verification
                            </h2>
                            <p className="text-white/80 text-[14px] sm:text-[16px] font-normal leading-relaxed mt-2 mb-6">
                                Don't let fake accounts and fraud undermine your growth. Secure your platform with real-time Email & Mobile Verification from DigitalRakshak and build a user base you can trust.
                            </p>

                            {submitted ? (
                                <div className="bg-emerald-950/60 border border-emerald-500/30 rounded-[20px] p-6 text-center my-6">
                                    <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                                    <h4 className="text-white font-bold text-lg mb-1">Request Received!</h4>
                                    <p className="text-white/80 text-sm">
                                        Our verification API specialist will reach out to you shortly.
                                    </p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {/* Select Requirement - API List */}
                                    <div className="relative">
                                        <label className="block text-white/90 text-[13.5px] font-medium mb-1.5">
                                            Select Requirement - Verification API List:
                                        </label>
                                        <button
                                            type="button"
                                            onClick={() => setDropdownOpen(!dropdownOpen)}
                                            className="w-full flex items-center justify-between bg-[#151c30] text-white text-[14px] sm:text-[15px] rounded-[16px] px-4 py-3 border border-white/15 hover:border-blue-400/50 transition-colors text-left"
                                        >
                                            <span className="truncate pr-2">
                                                {isAllSelected
                                                    ? "All APIs (Complete Verification Suite)"
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

                                        {dropdownOpen && (
                                            <div className="absolute top-[calc(100%+6px)] left-0 right-0 z-50 bg-[#12192d] border border-blue-400/30 rounded-[18px] p-3 shadow-2xl space-y-1 backdrop-blur-xl">
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
                                            <span>Demo</span>
                                            <span className="text-[11px] font-normal text-[#0a1e36]/80 mt-0.5">
                                                Fit into your workflow
                                            </span>
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => handleSubmit("meeting")}
                                            className="bg-white/10 hover:bg-white/20 text-white font-bold text-[14px] sm:text-[15px] py-3.5 px-5 rounded-[16px] border border-white/20 transition-all flex flex-col items-center justify-center text-center"
                                        >
                                            <span>Book a Meeting</span>
                                            <span className="text-[11px] font-normal text-white/70 mt-0.5">
                                                Discuss integration
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Column: High-tech Verification API Console Simulator */}
                    <div className="lg:col-span-6 bg-gradient-to-br from-[#0c1428] via-[#091024] to-[#040817] p-7 sm:p-10 lg:p-12 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-center">
                        <div className="rounded-[20px] bg-[#020510] border border-blue-500/25 p-5 sm:p-6 shadow-2xl relative overflow-hidden font-mono text-[12.5px] sm:text-[13.5px]">
                            {/* Terminal top header */}
                            <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/10 font-sans">
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                                    <span className="text-white/60 text-xs ml-2 font-mono">POST /v1/verify/contact</span>
                                </div>
                                <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold">
                                    200 OK • 95ms
                                </span>
                            </div>

                            {/* Payload simulator */}
                            <div className="space-y-1.5 text-blue-200">
                                <p className="text-white/50">{"// Real-Time Contact Validation Response"}</p>
                                <p><span className="text-[#ff7b72]">&quot;status&quot;</span>: <span className="text-[#a5d6ff]">&quot;SUCCESS&quot;</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;email&quot;</span>: <span className="text-[#a5d6ff]">&quot;user@company.com&quot;</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;emailDeliverable&quot;</span>: <span className="text-[#79c0ff]">true</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;disposableEmail&quot;</span>: <span className="text-[#79c0ff]">false</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;smtpCheck&quot;</span>: <span className="text-[#7ee787]">&quot;MAILBOX_EXISTS&quot;</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;phone&quot;</span>: <span className="text-[#a5d6ff]">&quot;+91 98765 43210&quot;</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;carrier&quot;</span>: <span className="text-[#a5d6ff]">&quot;Jio Infocomm&quot;</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;lineType&quot;</span>: <span className="text-[#a5d6ff]">&quot;MOBILE&quot;</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;otpDelivered&quot;</span>: <span className="text-[#79c0ff]">true</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;fraudScore&quot;</span>: <span className="text-[#7ee787]">0.02</span></p>
                            </div>

                            {/* Bottom badge */}
                            <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between font-sans text-xs text-white/60">
                                <span>DigitalRakshak Contact Trust Engine</span>
                                <span className="text-[#76bbf8] flex items-center gap-1">
                                    <ShieldCheck className="w-3.5 h-3.5" /> High Trust Verified
                                </span>
                            </div>
                        </div>

                        <p className="text-white/60 text-xs text-center mt-4">
                            Real-time validation • Sub-second multi-channel OTP • Carrier intelligence
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function EmailMobileVerification() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Email & Mobile Verification API for Enterprises",
        "applicationCategory": "SecurityApplication",
        "operatingSystem": "All",
        "provider": {
            "@type": "Organization",
            "name": "DigitalRakshak",
            "url": "https://digitalrakshak.com",
        },
        "description":
            "Real-time email and mobile verification API. Stop fraud, block disposable emails, verify global phone numbers across 200+ countries, and deliver instant OTPs.",
        "keywords": [
            "Email Verification API",
            "Mobile Verification API",
            "OTP Services",
            "Phone Number Validation",
            "Disposable Email Detection",
            "SMS OTP API",
            "Carrier Detection",
        ],
    };

    return (
        <div className="align-center bg-black min-h-screen w-full font-[Inter] overflow-x-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <HeroSection />
            <WhatCanYouDoSection />
            <OverviewCardsSection />
            <ConnectAPISection />
            <CapabilitiesSection />
            <HowItWorksSection />
            <WhyChooseSection />
            <IndustryUseCasesSection />
            <FAQSection />
            <CTASection />
        </div>
    );
}
