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
    BrainCircuit,
    Target,
    Zap,
    TrendingUp,
    Briefcase,
    Gamepad2,
    ShoppingCart,
    Users,
    Layers,
    Send,
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
        q: "1. Which documents are supported?",
        a: "We support Aadhaar, PAN, Passports, Driving Licenses, and many other government-issued identity documents natively.",
    },
    {
        q: "2. How accurate is the OCR?",
        a: "Our AI models are trained on large datasets to ensure exceptionally high accuracy even with varied document qualities and difficult layouts.",
    },
    {
        q: "3. Can it extract data in real-time?",
        a: "Yes, our OCR solution is specifically designed for real-time processing, providing instant extraction results for smooth onboarding workflows.",
    },
    {
        q: "4. Is data secure?",
        a: "Absolutely. We strictly prioritize data security and utilize high-level encryption to ensure all processed document information is handled safely and securely.",
    },
];

function HeroSection() {
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

            {/* Center Hero content - fits on screen */}
            <div className="relative z-10 flex-1 flex items-center py-4 lg:py-8">
                <div className="w-full max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-8 xl:gap-12 items-center">
                    {/* Left content */}
                    <div className="lg:col-span-5 flex flex-col justify-between text-left">
                        <div>
                            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3">
                                <ScanLine className="w-4 h-4 text-[#76bbf8]" />
                                Automate Data Extraction
                            </span>
                            <h1 className="text-white text-[clamp(28px,7vw,56px)] font-black leading-[1.1] tracking-tight">
                                KYC OCR<br />(Document Intelligence)
                            </h1>
                            <p className="text-white text-[15px] sm:text-[18px] lg:text-[22px] font-medium mt-3 sm:mt-4">
                                Automate Data Extraction from KYC Documents with Speed, Accuracy & Intelligence.
                            </p>
                        </div>

                        <div className="mt-5 sm:mt-8 lg:mt-10">
                            <p className="text-white/90 text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-relaxed max-w-[540px]">
                                Eliminate manual data entry bottlenecks and ensure reliability. Instantly scan identity documents and convert unstructured images or PDFs into structured, machine-readable data.
                            </p>
                            <div className="flex gap-3 sm:gap-4 mt-5 sm:mt-6 items-center flex-wrap">
                                <a
                                    href="#contact"
                                    className="bg-[#B0DAFF] hover:bg-[#76bbf8] text-[#0a1e36] font-semibold text-[14px] sm:text-[15px] px-6 sm:px-8 py-2.5 sm:py-3 rounded-[18px] shadow-[2px_2px_11.4px_0px_#00000040,_5px_-2px_8.7px_0px_#0084FF6B_inset] transition-all flex items-center gap-2"
                                >
                                    <span>Get OCR API Access</span>
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
                                <span className="flex items-center gap-1.5"><BadgeCheck className="w-4 h-4 text-[#76bbf8]" /> Aadhaar Card</span>
                                <span className="text-white/30 hidden sm:inline">•</span>
                                <span className="flex items-center gap-1.5"><FileText className="w-4 h-4 text-[#76bbf8]" /> PAN Card</span>
                                <span className="text-white/30 hidden sm:inline">•</span>
                                <span className="flex items-center gap-1.5"><Globe className="w-4 h-4 text-[#76bbf8]" /> Passport</span>
                                <span className="text-white/30 hidden sm:inline">•</span>
                                <span className="flex items-center gap-1.5"><ScanLine className="w-4 h-4 text-[#76bbf8]" /> Driving License</span>
                            </div>
                        </div>
                    </div>

                    {/* Right – high-tech OCR preview screenshots & visual */}
                    <div className="lg:col-span-7 relative flex justify-center lg:justify-end items-center w-full mt-4 lg:mt-0">
                        <div className="flex items-center gap-3 sm:gap-6 md:gap-8 w-full max-w-[650px] lg:max-w-none mx-auto">
                            {/* Main card - left */}
                            <div className="flex-[326] rounded-[16px] sm:rounded-[22px] lg:rounded-[26px] overflow-hidden shadow-2xl border border-white/10 aspect-[326/354] bg-[#091122] relative group">
                                <img
                                    alt="KYC OCR Intelligence Console"
                                    className="w-full h-full object-cover object-center"
                                    src={imgFrame19}
                                />
                                {/* Overlay badge showing real-time OCR extraction */}
                                <div className="absolute bottom-3 left-3 right-3 bg-[#0a1228]/90 backdrop-blur-md border border-blue-400/30 rounded-xl p-3 flex items-center justify-between text-xs text-white">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                                        <span className="font-semibold text-white/95">Live OCR Scanner Active</span>
                                    </div>
                                    <span className="text-[#76bbf8] font-mono text-[11px] bg-blue-500/20 px-2 py-0.5 rounded-full">
                                        99.8% Accuracy
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
            title: "1. Extract Identity Details",
            desc: "Instantly extract full name, date of birth, gender, and personal identity data with high AI precision.",
            icon: imgSvgRepoIconCarrier,
        },
        {
            title: "2. Document Numbers",
            desc: "Capture PAN, Aadhaar, Passport, DL numbers and government identifiers accurately without manual entry.",
            icon: imgSvgRepoIconCarrier,
        },
        {
            title: "3. Address Extraction",
            desc: "Parse complete residential address lines, pin codes, and state details effortlessly.",
            icon: imgSvgRepoIconCarrier,
        },
        {
            title: "4. Structured Output",
            desc: "Convert unstructured images or PDFs directly into machine-readable JSON and API formats.",
            icon: imgSvgRepoIconCarrier,
        },
        {
            title: "5. Real-Time Processing",
            desc: "Eliminate manual data entry bottlenecks with sub-second real-time automated processing.",
            icon: imgSvgRepoIconCarrier,
        },
    ];

    return (
        <section id="what-is-ocr" className="relative pt-10 sm:pt-14 pb-8 sm:pb-12 px-[5%] lg:px-[6%]">
            {/* Ellipse 19 glow */}
            <div className="absolute left-[-10%] top-[-10%] w-full max-w-[848px] pointer-events-none select-none opacity-70 mix-blend-screen">
                <img
                    alt=""
                    className="w-full h-full object-contain"
                    src={imgEllipse19}
                />
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto">
                <h2 className="text-white text-[clamp(24px,4vw,42px)] font-bold text-center tracking-tight mb-3">
                    What Can You Do with KYC OCR
                </h2>
                <p className="text-white/70 text-[15px] sm:text-[17px] text-center max-w-[700px] mx-auto mb-14 sm:mb-20">
                    Cover different verification and data extraction requirements across your business processes.
                </p>

                {/* Cards grid layout */}
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
                    What is KYC OCR? | Core Intelligence
                </h2>
                <p className="text-white/70 text-[14px] sm:text-[16px] text-center max-w-[650px] mx-auto mb-10 sm:mb-14">
                    Convert unstructured identity documents (images or PDFs) into structured, machine-readable data.
                </p>

                {/* Outer Blue Border Box */}
                <div className="relative bg-[#040d24]/70 border-2 border-[#1677ff] rounded-[22px] p-6 sm:p-9 lg:p-12 shadow-[0_0_35px_rgba(22,119,255,0.35)] backdrop-blur-md">
                    <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 divide-y md:divide-y-0 md:divide-x divide-white/15">
                        {/* What is KYC OCR */}
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
                                    What is KYC OCR?
                                </h3>
                            </div>
                            <p className="text-white/80 text-[13.5px] font-normal leading-relaxed mb-3">
                                KYC OCR (Know Your Customer – Optical Character Recognition) is a technology that scans identity documents and converts unstructured text (images or PDFs) into structured, machine-readable data.
                            </p>
                            <p className="text-white/90 text-[13.5px] font-semibold mb-3 text-[#76bbf8]">
                                Instead of manually entering details, businesses can automatically extract:
                            </p>
                            <ol className="text-white/90 text-[14px] sm:text-[15px] font-medium leading-[26px] list-decimal list-inside space-y-1.5 pl-1">
                                {[
                                    "Name",
                                    "Date of Birth",
                                    "Document Number (PAN, Aadhaar, etc.)",
                                    "Address",
                                    "Other key identity fields",
                                ].map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ol>
                            <div className="mt-5 p-3.5 bg-blue-500/10 border-l-4 border-[#76bbf8] rounded-r-xl">
                                <p className="text-white/90 text-[12.5px] sm:text-[13.5px] italic leading-relaxed">
                                    This enables instant, error-free data capture during onboarding and verification, completely replacing slow and error-prone manual tasks.
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
                                Eliminate manual data entry bottlenecks and ensure reliability across all document operations.
                            </p>
                            <ol className="text-white/90 text-[14px] sm:text-[15px] font-medium leading-[26px] list-decimal list-inside space-y-2 pl-1">
                                {[
                                    "Accelerate Onboarding — Reduce document processing time from minutes to seconds.",
                                    "Eliminate Manual Errors — Avoid costly mistakes caused by manual data entry workflows.",
                                    "Reduce Operational Costs — Minimize dependency on large manual verification teams.",
                                    "Improve Data Accuracy — Ensure consistent and reliable data extraction across all files.",
                                    "Instant Integration — Connect seamlessly via REST APIs or enterprise portal workflows.",
                                ].map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ol>
                            <div className="mt-5 p-3.5 bg-emerald-500/10 border-l-4 border-emerald-400 rounded-r-xl">
                                <p className="text-emerald-200 text-[12.5px] sm:text-[13.5px] font-medium leading-relaxed">
                                    Enterprise-grade throughput capable of processing thousands of document verifications simultaneously with high accuracy.
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
            title: "Accounts Payable & Vendor Verification",
            desc: "Use OCR extraction as part of vendor validation and internal financial workflows before processing relevant invoices and transactions.",
        },
        {
            title: "Merchant & Customer Onboarding",
            desc: "Integrate KYC OCR into merchant, seller or customer onboarding to eliminate registration drop-offs and speed up compliance checks.",
        },
        {
            title: "SME Lending & Underwriting",
            desc: "Extract applicant data from identity proofs to support automated credit assessments and risk validation workflows.",
        },
    ];

    return (
        <section className="relative pt-8 sm:pt-10 lg:pt-12 pb-7 sm:pb-9 px-[5%] lg:px-[6%] overflow-hidden">
            <div className="relative z-10 max-w-[1240px] mx-auto">
                {/* Section Heading */}
                <h2 className="text-white text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-center tracking-tight mb-12 sm:mb-16">
                    Connect KYC OCR API With Your Existing System
                </h2>

                {/* 2-Column Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 items-start justify-items-center">
                    {/* LEFT COLUMN: Blue Box + Integrate with */}
                    <div className="w-full max-w-[543px] flex flex-col">
                        <div className="w-full min-h-[190px] h-auto bg-gradient-to-b from-[#b2daff] to-[#92c8fc] border-2 border-[#54b4ff] rounded-[20px] p-6 sm:p-8 flex items-center shadow-[0_0_35px_rgba(84,180,255,0.45),0_0_12px_rgba(84,180,255,0.3)]">
                            <p className="text-[#081a2e] text-[15px] sm:text-[16px] lg:text-[17px] font-normal leading-[1.65]">
                                KYC-related processes do not always need to be managed separately. API integration brings automated document intelligence straight into your existing business and verification platforms.
                            </p>
                        </div>

                        <h4 className="text-white font-bold text-[18px] sm:text-[20px] mt-8 mb-4">
                            Integrate with:
                        </h4>

                        <div className="space-y-3 text-white/90 text-[14px] sm:text-[15px] font-medium pl-1">
                            <div>1. Customer & user onboarding platforms</div>
                            <div>2. Mobile and web applications</div>
                            <div>3. ERP & CRM systems</div>
                            <div>4. Internal compliance workflows</div>
                            <div>5. Financial & lending workflows</div>
                            <div>6. Enterprise technology platforms</div>
                        </div>

                        <p className="text-white/80 text-[13.5px] sm:text-[14.5px] leading-relaxed mt-6 pl-1">
                            The OCR service provides pass-through and webhook capabilities for instant JSON delivery across document types.
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
                        Enterprise AI Engine
                    </span>
                    <h2 className="text-white text-[clamp(28px,4vw,44px)] font-bold mb-3 tracking-tight">
                        Our KYC OCR Capabilities
                    </h2>
                    <p className="text-white/70 text-[15px] sm:text-[18px] max-w-2xl mx-auto">
                        DigitalRakshak's OCR engine is built with advanced AI models to handle a wide range of identity documents with high precision.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 justify-center">
                    {/* Multi-Document Support */}
                    <div className="relative overflow-hidden rounded-[24px] p-8 border border-blue-500/30 bg-[#070e22]/90 backdrop-blur-md shadow-2xl hover:border-blue-400/60 transition-all duration-300 hover:-translate-y-1">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                        <div className="w-14 h-14 rounded-2xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center mb-6">
                            <FileText className="w-7 h-7 text-[#76bbf8]" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-white">Multi-Document Support</h3>
                        <p className="text-white/75 text-sm sm:text-[14.5px] mb-6 min-h-[48px] leading-relaxed">
                            Extract data comprehensively from various identity documents.
                        </p>
                        <h4 className="font-semibold mb-4 text-xs text-[#76bbf8] uppercase tracking-wider">
                            Examples
                        </h4>
                        <ul className="space-y-3">
                            {[
                                "Aadhaar Card",
                                "PAN Card",
                                "Passport",
                                "Driving License",
                                "Other government-issued IDs",
                            ].map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-white/90 font-medium">
                                    <CheckCircle2 className="w-4 h-4 text-[#76bbf8] mt-0.5 flex-shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Intelligent Data Extraction */}
                    <div className="relative overflow-hidden rounded-[24px] p-8 border border-emerald-500/30 bg-[#070e22]/90 backdrop-blur-md shadow-2xl hover:border-emerald-400/60 transition-all duration-300 hover:-translate-y-1">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
                        <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center mb-6">
                            <BrainCircuit className="w-7 h-7 text-emerald-400" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-white">Intelligent Extraction</h3>
                        <p className="text-white/75 text-sm sm:text-[14.5px] mb-6 min-h-[48px] leading-relaxed">
                            Automatically identify and extract relevant fields from unstructured documents.
                        </p>
                        <h4 className="font-semibold mb-4 text-xs text-emerald-400 uppercase tracking-wider">
                            Features
                        </h4>
                        <ul className="space-y-3">
                            {[
                                "Name, DOB, ID number",
                                "Address & demographic details",
                                "Structured output (JSON/API format)",
                                "Instant processing",
                            ].map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-white/90 font-medium">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* AI-Powered Accuracy */}
                    <div className="relative overflow-hidden rounded-[24px] p-8 border border-purple-500/30 bg-[#070e22]/90 backdrop-blur-md shadow-2xl hover:border-purple-400/60 transition-all duration-300 hover:-translate-y-1">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600"></div>
                        <div className="w-14 h-14 rounded-2xl bg-purple-500/15 border border-purple-400/30 flex items-center justify-center mb-6">
                            <Target className="w-7 h-7 text-purple-400" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-white">AI-Powered Accuracy</h3>
                        <p className="text-white/75 text-sm sm:text-[14.5px] mb-6 min-h-[48px] leading-relaxed">
                            Leverage machine learning models trained on real-world document formats.
                        </p>
                        <h4 className="font-semibold mb-4 text-xs text-purple-400 uppercase tracking-wider">
                            Benefits
                        </h4>
                        <ul className="space-y-3">
                            {[
                                "High accuracy with low-quality images",
                                "Handles different layouts and formats",
                                "Auto-cropping & alignment (Pre-Processing)",
                                "Noise reduction & clarity enhancement",
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
            title: "1. Upload",
            desc: "User uploads a document (image or PDF) through your platform or API.",
            content: (
                <div className="space-y-2 text-[#4b5563] text-[13.5px] sm:text-[14.5px] leading-relaxed pt-2">
                    <p>User uploads a document (image or PDF) through your platform or REST API.</p>
                    <p className="font-medium text-[#1f2937]">Supports:</p>
                    <div className="space-y-1.5 pl-3 text-[#374151]">
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span>PNG, JPEG, WebP & PDF document uploads</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span>Direct file upload or base64 payload submission</span>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            id: 2,
            title: "2. Pre-Processing",
            desc: "System processes and enhances the image for maximum readability.",
            content: (
                <div className="space-y-2 text-[#4b5563] text-[13.5px] sm:text-[14.5px] leading-relaxed pt-2">
                    <p>System processes and enhances the image for maximum readability:</p>
                    <div className="space-y-1.5 pl-3 text-[#374151] font-medium">
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span>Auto-cropping and boundary detection</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span>Perspective correction and de-skewing</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span>Noise reduction and contrast enhancement</span>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            id: 3,
            title: "3. Extraction",
            desc: "OCR engine intuitively extracts text and key identity fields.",
            content: (
                <div className="space-y-2 text-[#4b5563] text-[13.5px] sm:text-[14.5px] leading-relaxed pt-2">
                    <p>OCR engine intuitively extracts text, characters, and key identity fields using advanced vision-language models with high accuracy.</p>
                </div>
            ),
        },
        {
            id: 4,
            title: "4. Structuring",
            desc: "Extracted data is instantly structured into a usable format (JSON/API).",
            content: (
                <div className="space-y-2 text-[#4b5563] text-[13.5px] sm:text-[14.5px] leading-relaxed pt-2">
                    <p>Extracted data is instantly structured into a validated format (JSON/API) with field-level confidence ratings and tamper checks.</p>
                </div>
            ),
        },
        {
            id: 5,
            title: "5. Delivery",
            desc: "Output is sent instantly and seamlessly to your system.",
            content: (
                <div className="space-y-2 text-[#4b5563] text-[13.5px] sm:text-[14.5px] leading-relaxed pt-2">
                    <p>Output is delivered in real-time straight to your backend, database, or onboarding user interface with sub-second response times.</p>
                </div>
            ),
        },
    ];

    return (
        <section id="how-it-works" className="relative py-10 sm:py-14 px-[5%] lg:px-[6%] overflow-hidden bg-black">
            {/* Ambient soft glow at bottom right */}
            <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-[#1e3a8a]/20 rounded-full blur-[140px] pointer-events-none" />

            <div className="relative z-10 max-w-[1240px] mx-auto">
                <div className="text-center mb-12 sm:mb-16">
                    <span className="inline-block mb-3 px-3.5 py-1 bg-blue-500/10 border border-blue-400/30 text-[#76bbf8] text-xs font-bold uppercase tracking-widest rounded-full">
                        Step-by-Step Flow
                    </span>
                    <h2 className="text-white text-[28px] sm:text-[34px] lg:text-[40px] font-bold tracking-tight">
                        How KYC OCR Works
                    </h2>
                </div>

                {/* 2-Column Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
                    {/* Left Column: High-tech Visual Card */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-start">
                        <div className="w-full max-w-[420px] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-blue-500/20 relative bg-[#0b101d] p-6">
                            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <span className="text-[11px] font-mono text-[#76bbf8] bg-blue-500/20 px-2.5 py-0.5 rounded-full">
                                    ACTIVE STEP: {activeStep ?? 1}
                                </span>
                            </div>

                            <div className="space-y-4">
                                <div className="rounded-xl bg-[#0e172e] border border-blue-400/25 p-4 relative overflow-hidden">
                                    <div className="flex items-center gap-3 mb-2">
                                        <ScanLine className="w-5 h-5 text-[#76bbf8]" />
                                        <h4 className="text-white font-bold text-sm">
                                            {stepsData.find((s) => s.id === (activeStep ?? 1))?.title}
                                        </h4>
                                    </div>
                                    <p className="text-white/80 text-xs leading-relaxed">
                                        {stepsData.find((s) => s.id === (activeStep ?? 1))?.desc}
                                    </p>
                                    <div className="mt-3 flex items-center justify-between text-[11px] text-white/50 pt-2 border-t border-white/10">
                                        <span>Status: Processing</span>
                                        <span className="text-emerald-400 font-mono">Verified • 99.8%</span>
                                    </div>
                                </div>

                                <div className="p-3.5 bg-black/40 rounded-xl border border-white/10 text-xs font-mono text-blue-200 space-y-1">
                                    <p className="text-white/40">// Real-time OCR Pipeline</p>
                                    <p><span className="text-[#ff7b72]">&quot;input&quot;</span>: <span className="text-[#a5d6ff]">&quot;document_image&quot;</span>,</p>
                                    <p><span className="text-[#ff7b72]">&quot;preProcessed&quot;</span>: <span className="text-[#79c0ff]">true</span>,</p>
                                    <p><span className="text-[#ff7b72]">&quot;extractedFields&quot;</span>: <span className="text-[#79c0ff]">5</span>,</p>
                                    <p><span className="text-[#ff7b72]">&quot;latencyMs&quot;</span>: <span className="text-[#7ee787]">135</span></p>
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

                                    {/* Expandable Content with smooth grid transition */}
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
            {/* Ellipse 21 glow */}
            <div className="absolute left-0 w-full max-w-[848px] pointer-events-none select-none opacity-65 mix-blend-screen z-50">
                <img
                    alt=""
                    className="w-full h-full object-contain"
                    src={imgEllipse21}
                />
            </div>
            <div className="max-w-[1400px] mx-auto space-y-16 lg:space-y-20">
                {/* Top Section: Why Choose DigitalRakshak? */}
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    <div className="lg:col-span-5">
                        <span className="text-[#76bbf8] text-xs font-semibold uppercase tracking-wider">
                            Enterprise Advantage
                        </span>
                        <h2 className="text-white text-[clamp(24px,3vw,40px)] font-bold leading-tight mt-1 mb-6">
                            Why Choose DigitalRakshak?
                        </h2>
                        <p className="text-white text-[15px] sm:text-[16px] lg:text-[18px] font-normal leading-relaxed mb-6">
                            Stop relying on slow and error-prone manual processes. DigitalRakshak provides scalable, enterprise-ready OCR APIs built for modern verification workflows:
                        </p>
                        <ul className="text-white/90 text-[14px] sm:text-[16px] font-normal leading-relaxed space-y-3.5 pl-1">
                            {[
                                { title: "Built for Scale", desc: "Handle thousands of document verifications simultaneously without performance issues." },
                                { title: "High Accuracy & Reliability", desc: "Optimized models ensure maximum data extraction accuracy across document types." },
                                { title: "Secure Data Handling", desc: "Enterprise-grade security and data encryption ensure data is closely protected." },
                                { title: "Faster Time-to-Market", desc: "Seamless API Integration allows you to launch automated workflows rapidly." },
                                { title: "Complete Ecosystem", desc: "Seamlessly combine OCR with Aadhaar, PAN, and biometric verification easily." },
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

                    {/* Right side: 3 images layout */}
                    <div className="lg:col-span-7 flex items-center gap-4 sm:gap-5 w-full">
                        {/* Big card - left */}
                        <div className="flex-[581] rounded-[18px] overflow-hidden shadow-2xl border border-white/10">
                            <img
                                alt="Why OCR Dashboard"
                                className="w-full h-auto rounded-[18px] object-cover block"
                                src={imgFrame20}
                            />
                        </div>

                        {/* Right column: 2 stacked cards */}
                        <div className="flex-[288] flex flex-col justify-between self-stretch gap-3 sm:gap-4">
                            <div className="rounded-[18px] overflow-hidden shadow-2xl border border-white/10">
                                <img
                                    alt="Why OCR Analytics"
                                    className="w-full h-auto rounded-[18px] object-cover block"
                                    src={imgFrame22}
                                />
                            </div>
                            <div className="rounded-[18px] overflow-hidden shadow-2xl border border-white/10">
                                <img
                                    alt="Why OCR Metrics"
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
                                DigitalRakshak works across verification, compliance and technology-enabled business services.
                            </p>
                            <p className="text-white/70 text-[14px] leading-relaxed">
                                The goal is simple: help businesses automate document extraction and identity verification in a way that works seamlessly with their existing platforms and workflows.
                            </p>
                        </div>

                        <div className="lg:col-span-7 bg-[#050b1a]/60 border border-white/10 rounded-[20px] p-6 sm:p-7">
                            <p className="text-white/90 text-[14px] sm:text-[15px] font-semibold mb-4 text-[#B0DAFF]">
                                For KYC OCR requirements, we bring together:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    "Multi-Document OCR Engine",
                                    "Aadhaar, PAN & Passport Support",
                                    "Sub-second JSON Delivery",
                                    "Auto-Cropping & Noise Reduction",
                                    "High Accuracy Machine Learning",
                                    "Bank & Fintech Grade Security",
                                    "Complete Verification Ecosystem",
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
                    id="cardGlowLinearBaseKyc"
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
                    id="cardGlowRadLeftKyc"
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
                    id="cardGlowRadRightKyc"
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

            <rect width="100%" height="100%" fill="url(#cardGlowLinearBaseKyc)" />
            <rect width="100%" height="100%" fill="url(#cardGlowRadLeftKyc)" />
            <rect width="100%" height="100%" fill="url(#cardGlowRadRightKyc)" />
        </svg>
    );
}

function IndustryUseCasesSection() {
    const useCases = [
        {
            title: "Fintech & NBFCs",
            desc: "Customer onboarding, loan application processing, and automated KYC verification workflows.",
            icon: Briefcase,
        },
        {
            title: "Gaming & iGaming",
            desc: "Player identity verification, age verification support, and fraud mitigation.",
            icon: Gamepad2,
        },
        {
            title: "E-commerce & Marketplaces",
            desc: "Seller & Vendor onboarding, vendor document verification, and compliance checks.",
            icon: ShoppingCart,
        },
        {
            title: "HR & Staffing Platforms",
            desc: "Employee document processing, identity verification, and fast background processing.",
            icon: Users,
        },
        {
            title: "Accelerate Onboarding",
            desc: "Reduce document processing time from minutes to seconds with sub-second real-time processing.",
            icon: Zap,
        },
        {
            title: "Complete Ecosystem",
            desc: "Seamlessly combine OCR with Aadhaar, PAN, and biometric verification easily.",
            icon: Globe,
        },
    ];

    return (
        <section id="use-cases" className="relative py-10 sm:py-14 px-[5%] lg:px-[6%] overflow-hidden bg-black">
            {/* Background ambient lighting */}
            <div className="absolute right-[5%] top-[10%] w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute left-[5%] bottom-[10%] w-[500px] h-[500px] bg-indigo-900/15 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-[1320px] mx-auto relative z-10">
                {/* Section Heading */}
                <h2 className="text-white text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-center tracking-tight mb-3">
                    Industry Use Cases & Key Benefits
                </h2>
                <p className="text-white/70 text-[15px] sm:text-[17px] text-center max-w-[650px] mx-auto mb-12 sm:mb-16">
                    See how different sectors utilize our OCR services to automate onboarding workflows.
                </p>

                {/* 6 Cards Responsive Grid with proper spacing */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 justify-items-center">
                    {useCases.map((benefit, idx) => (
                        <div
                            key={idx}
                            className="relative w-full max-w-[406px] min-h-[280px] sm:min-h-[300px] rounded-[18px] border-[2px] border-[#DFC6FF] p-6 sm:p-8 flex flex-col justify-start overflow-hidden group hover:scale-[1.015] hover:shadow-[0_0_35px_rgba(223,198,255,0.3)] transition-all duration-300"
                        >
                            <BenefitCardGlow />

                            {/* Icon and Title shifted beside each other */}
                            <div className="relative z-10 flex items-center gap-3.5 mb-5 sm:mb-6">
                                <div className="w-[46px] h-[46px] sm:w-[50px] sm:h-[50px] rounded-full bg-[#1b2234]/90 border border-white/20 flex items-center justify-center shrink-0 shadow-inner group-hover:border-white/40 transition-colors">
                                    <benefit.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white stroke-[1.8]" />
                                </div>
                                <h3 className="text-white font-bold text-[20px] sm:text-[23px] leading-[1.25] tracking-tight">
                                    {benefit.title}
                                </h3>
                            </div>

                            {/* Card Description */}
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
                        <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Automate document extraction</span>
                        <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Reduce manual time</span>
                        <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Enable real-time onboarding</span>
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
                    Everything you need to know about our OCR capabilities
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
        "Aadhaar Card OCR API",
        "PAN Card OCR API",
        "Passport OCR API (MRZ & Visual)",
        "Driving License OCR API",
        "Voter ID OCR API",
        "Complete KYC Document Suite",
    ];

    const [selectedApis, setSelectedApis] = useState<string[]>([
        "Aadhaar Card OCR API",
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
                                Transform Your KYC Process
                            </span>
                            <h2 className="text-white text-[28px] sm:text-[34px] lg:text-[40px] font-bold leading-tight">
                                Transform Your KYC Process using OCR
                            </h2>
                            <p className="text-white/80 text-[14px] sm:text-[16px] font-normal leading-relaxed mt-2 mb-6">
                                Stop relying on slow and error-prone manual processes. Integrate DigitalRakshak's KYC OCR solution to bring speed, intelligence, and automation to your identity verification.
                            </p>

                            {submitted ? (
                                <div className="bg-emerald-950/60 border border-emerald-500/30 rounded-[20px] p-6 text-center my-6">
                                    <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                                    <h4 className="text-white font-bold text-lg mb-1">Request Received!</h4>
                                    <p className="text-white/80 text-sm">
                                        Our enterprise KYC OCR specialist will reach out to you shortly.
                                    </p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {/* Select Requirement - API List */}
                                    <div className="relative">
                                        <label className="block text-white/90 text-[13.5px] font-medium mb-1.5">
                                            Select Requirement - OCR API List:
                                        </label>
                                        <button
                                            type="button"
                                            onClick={() => setDropdownOpen(!dropdownOpen)}
                                            className="w-full flex items-center justify-between bg-[#151c30] text-white text-[14px] sm:text-[15px] rounded-[16px] px-4 py-3 border border-white/15 hover:border-blue-400/50 transition-colors text-left"
                                        >
                                            <span className="truncate pr-2">
                                                {isAllSelected
                                                    ? "All APIs (Complete OCR Suite)"
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

                    {/* Right Column: High-tech KYC OCR API Console Simulator */}
                    <div className="lg:col-span-6 bg-gradient-to-br from-[#0c1428] via-[#091024] to-[#040817] p-7 sm:p-10 lg:p-12 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-center">
                        <div className="rounded-[20px] bg-[#020510] border border-blue-500/25 p-5 sm:p-6 shadow-2xl relative overflow-hidden font-mono text-[12.5px] sm:text-[13.5px]">
                            {/* Terminal top header */}
                            <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/10 font-sans">
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                                    <span className="text-white/60 text-xs ml-2 font-mono">POST /v1/kyc/ocr-extract</span>
                                </div>
                                <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold">
                                    200 OK • 135ms
                                </span>
                            </div>

                            {/* Payload simulator */}
                            <div className="space-y-1.5 text-blue-200">
                                <p className="text-white/50">{"// OCR Extraction Response"}</p>
                                <p><span className="text-[#ff7b72]">&quot;status&quot;</span>: <span className="text-[#a5d6ff]">&quot;SUCCESS&quot;</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;documentType&quot;</span>: <span className="text-[#a5d6ff]">&quot;AADHAAR_CARD&quot;</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;documentNumber&quot;</span>: <span className="text-[#a5d6ff]">&quot;XXXX XXXX 8921&quot;</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;name&quot;</span>: <span className="text-[#a5d6ff]">&quot;RAHUL SHARMA&quot;</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;dob&quot;</span>: <span className="text-[#a5d6ff]">&quot;14/08/1992&quot;</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;gender&quot;</span>: <span className="text-[#a5d6ff]">&quot;MALE&quot;</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;address&quot;</span>: <span className="text-[#a5d6ff]">&quot;B-402, SHANTI APTS, MUMBAI, MH - 400001&quot;</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;confidenceScore&quot;</span>: <span className="text-[#7ee787]">0.998</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;tamperCheck&quot;</span>: <span className="text-[#79c0ff]">&quot;PASSED&quot;</span></p>
                            </div>

                            {/* Bottom badge */}
                            <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between font-sans text-xs text-white/60">
                                <span>DigitalRakshak Vision-OCR Engine</span>
                                <span className="text-[#76bbf8] flex items-center gap-1">
                                    <ShieldCheck className="w-3.5 h-3.5" /> High Trust Verified
                                </span>
                            </div>
                        </div>

                        <p className="text-white/60 text-xs text-center mt-4">
                            Real-time document intelligence • High-accuracy extraction • JSON & Webhook output
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function KycOcrPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "KYC OCR (Document Intelligence) API for Enterprises",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "All",
        "provider": {
            "@type": "Organization",
            "name": "DigitalRakshak",
            "url": "https://digitalrakshak.com",
        },
        "description":
            "Automate data extraction from KYC documents with speed, accuracy & intelligence using DigitalRakshak's AI-powered KYC OCR API.",
        "keywords": [
            "KYC OCR",
            "KYC OCR API",
            "Document Intelligence",
            "Aadhaar OCR",
            "PAN Card OCR",
            "Passport OCR",
            "Driving License OCR",
            "Identity Verification API",
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
