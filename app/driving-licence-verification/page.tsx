"use client";

import { useState } from "react";
import {
    Car,
    Building2,
    ArrowRight,
    CheckCircle2,
    Check,
    ChevronDown,
    ShieldCheck,
    Zap,
    Database,
    AlertTriangle,
    BadgeCheck,
    Globe,
    Briefcase,
    Users,
    Truck,
    Calendar,
    MapPin,
    UserCheck,
    Clock,
    Lock,
    Search,
    BarChart3,
    FileText,
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
        q: "What is the Driving License (DL) Verification API?",
        a: "The DL Verification API allows enterprises and platforms to validate Driving License numbers and Date of Birth in real time, retrieving driver full name, license active status, authorized vehicle classes, expiry dates, and RTO office details from official MoRTH Sarathi databases.",
    },
    {
        q: "What vehicle classes are extracted in the API output?",
        a: "The API extracts all endorsed vehicle categories including MCWG (Motorcycle with Gear), LMV (Light Motor Vehicle), HMV (Heavy Motor Vehicle), and TRANS (Transport) badges.",
    },
    {
        q: "How does DL verification prevent driver fraud?",
        a: "By querying official MoRTH Sarathi RTO databases, our API cross-verifies whether the DL number exists, is active, non-expired, and matches the driver's legal name and Date of Birth.",
    },
    {
        q: "What is the response latency and SLA?",
        a: "DigitalRakshak guarantees sub-300ms API response latency with 99.99% uptime SLA backed by bank-grade redundant infrastructure.",
    },
    {
        q: "What parameters are returned in the DL API output?",
        a: "The response includes DL holder legal name, DL number, active status, DOB, authorized vehicle categories, issue date, non-transport/transport expiry dates, RTO name & state, commercial badge details, and registered address.",
    },
    {
        q: "How do I integrate the Driving License API?",
        a: "Register on DigitalRakshak, obtain your production/sandbox API keys, and connect our clean REST API endpoints into your application within minutes.",
    },
];

/* ── 1. HERO SECTION (Identical visual design to gst-verification-api) ── */
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
                                <Car className="w-3.5 h-3.5 text-blue-300" />
                                Automated Vehicle &amp; Transport Verification
                            </span>
                            <h1 className="text-white text-[clamp(28px,7vw,54px)] font-black leading-[1.1] tracking-tight">
                                Driving License<br />Verification API
                            </h1>
                            <p className="text-white text-[15px] sm:text-[18px] lg:text-[22px] font-medium mt-3 sm:mt-4">
                                Real-time Driving License validation, authorized vehicle class extraction, issue &amp; expiry dates, RTO jurisdiction, and DL holder DOB/Address check via Sarathi/Parivahan databases.
                            </p>
                        </div>

                        <div className="mt-5 sm:mt-8 lg:mt-10">
                            <p className="text-white/90 text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-relaxed max-w-[540px]">
                                In logistics, mobility, fleet management, and delivery platforms, ensuring that driver partners possess genuine, valid, and active Driving Licenses is critical to preventing accidents, regulatory penalties, and liability claims. DigitalRakshak&apos;s Driving License Verification API queries official Ministry of Road Transport and Highways (MoRTH) Sarathi RTO databases in real time, validating DL status, authorized vehicle classes (LMV, HMV, MCWG), and badge validity.
                            </p>
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

                            {/* Tag capabilities */}
                            <div className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8 pt-4 border-t border-white/10 flex-wrap text-white/80 text-[12.5px] sm:text-[13.5px]">
                                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#76bbf8]" /> &lt; 300ms Latency</span>
                                <span className="text-white/30 hidden sm:inline">•</span>
                                <span className="flex items-center gap-1.5"><Database className="w-4 h-4 text-[#76bbf8]" /> 100% Sarathi Sync</span>
                                <span className="text-white/30 hidden sm:inline">•</span>
                                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#76bbf8]" /> 99.99% Uptime SLA</span>
                                <span className="text-white/30 hidden sm:inline">•</span>
                                <span className="flex items-center gap-1.5"><Globe className="w-4 h-4 text-[#76bbf8]" /> PAN-India RTO Coverage</span>
                            </div>
                        </div>
                    </div>

                    {/* Right – product screenshots */}
                    <div className="lg:col-span-7 relative flex justify-center lg:justify-end items-center w-full mt-4 lg:mt-0">
                        <div className="flex items-center gap-3 sm:gap-6 md:gap-8 w-full max-w-[650px] lg:max-w-none mx-auto">
                            {/* Main card - left */}
                            <div className="flex-[326] rounded-[16px] sm:rounded-[22px] lg:rounded-[26px] overflow-hidden shadow-2xl border border-white/10 aspect-[326/354] bg-[#f2f4f7]">
                                <img
                                    alt="DL Verification Dashboard"
                                    className="w-full h-full object-cover object-center"
                                    src={imgFrame19}
                                />
                            </div>

                            {/* Right stacked cards */}
                            <div className="flex-[175] flex flex-col justify-between self-stretch gap-2.5 sm:gap-4">
                                <div className="rounded-[12px] sm:rounded-[18px] lg:rounded-[22px] overflow-hidden shadow-2xl border border-white/10 aspect-square">
                                    <img
                                        alt="Vehicle Class Preview"
                                        className="w-full h-full object-cover"
                                        src={imgRectangle6}
                                    />
                                </div>
                                <div className="rounded-[12px] sm:rounded-[18px] lg:rounded-[22px] overflow-hidden shadow-2xl border border-white/10 aspect-square">
                                    <img
                                        alt="Transport Badge Preview"
                                        className="w-full h-full object-cover"
                                        src={imgRectangle7}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar indicator */}
            <div className="relative z-10 w-full flex justify-center pt-2">
                <div className="w-16 h-1 bg-white/20 rounded-full" />
            </div>
        </section>
    );
}

/* ── 2. WHAT CAN YOU DO SECTION ── */
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
            {/* Top glowing circular badge */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 w-12 h-12 rounded-full bg-[#0088FF]/50 border-2 border-[#38bdf8]/70 shadow-[0_0_22px_rgba(0,136,255,0.65)] backdrop-blur-md flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_28px_rgba(0,136,255,0.9)]">
                <img
                    alt=""
                    src={icon}
                    className="w-6 h-6 object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                />
            </div>

            {/* Card Body */}
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
            title: "1. Prevent Fake DLs",
            desc: "Unmask fabricated license numbers and forged physical DL cards before driver onboarding.",
            icon: imgSvgRepoIconCarrier,
        },
        {
            title: "2. Vehicle Class Check",
            desc: "Verify authorized vehicle categories (MCWG, LMV, HMV, Transport) for legal compliance.",
            icon: imgSvgRepoIconCarrier,
        },
        {
            title: "3. Expiry & Badge Audit",
            desc: "Ensure driver license is active, non-expired, and endorsed with commercial transport badge.",
            icon: imgSvgRepoIconCarrier,
        },
        {
            title: "4. Direct Sarathi RTO Sync",
            desc: "Retrieve authentic driver details directly from official MoRTH servers.",
            icon: imgSvgRepoIconCarrier,
        },
        {
            title: "5. Sub-Second Response",
            desc: "Retrieve verified DL details in <300ms for automated driver onboarding workflows.",
            icon: imgSvgRepoIconCarrier,
        },
    ];

    return (
        <section id="api-product" className="relative pt-10 sm:pt-14 pb-8 sm:pb-12 px-[5%] lg:px-[6%]">
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
                    What Can You Do with DL Verification API
                </h2>
                <p className="text-white/70 text-[15px] sm:text-[17px] text-center max-w-[700px] mx-auto mb-14 sm:mb-20">
                    Prevent fake licenses, audit vehicle class endorsements, verify expiry dates, and automate driver onboarding.
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

/* ── 3. VERIFICATION CARDS SECTION (Big blue border box) ── */
function VerificationCardsSection() {
    return (
        <section className="relative py-8 sm:py-12 px-[5%] lg:px-[6%]">
            <div className="relative z-10 max-w-[1240px] mx-auto">
                <h2 className="text-white text-[24px] sm:text-[32px] lg:text-[36px] font-bold text-center tracking-tight mb-3">
                    Verified Driving License Output Parameters
                </h2>
                <p className="text-white/70 text-[14px] sm:text-[16px] text-center max-w-[650px] mx-auto mb-10 sm:mb-14">
                    Our API returns over 20+ verified driver parameters directly from official MoRTH Sarathi RTO registries.
                </p>

                {/* Outer Blue Border Box */}
                <div className="relative bg-[#040d24]/70 border-2 border-[#1677ff] rounded-[22px] p-6 sm:p-9 lg:p-12 shadow-[0_0_35px_rgba(22,119,255,0.35)] backdrop-blur-md">
                    <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 divide-y md:divide-y-0 md:divide-x divide-white/15">
                        {/* Column 1: Driver Identity & Demographic Parameters */}
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
                                    Driver Identity &amp; Demographics
                                </h3>
                            </div>
                            <p className="text-white/70 text-[13.5px] font-normal leading-relaxed mb-4 sm:mb-5">
                                Official Sarathi driver metadata.
                            </p>
                            <ol className="text-white/90 text-[14px] sm:text-[15px] font-medium leading-[26px] list-decimal list-inside space-y-1.5 pl-1">
                                {[
                                    "DL Holder Full Name & DOB (Official driver legal name and date of birth match) [holder_name_dob]",
                                    "DL Active Status (Real-time license status: Active, Expired, or Suspended) [dl_status]",
                                    "Father / Husband Name (Relative name registered on Driving License) [father_husband_name]",
                                    "Permanent & Present Address (Verified residential address registered on RTO records) [registered_address]",
                                    "Issue & Expiry Dates (Original issue date and non-transport/transport validity dates) [issue_validity_dates]",
                                    "RTO Name & State Jurisdiction (Issuing RTO office name, code, and state) [rto_jurisdiction]",
                                ].map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ol>
                        </div>

                        {/* Column 2: Vehicle Endorsements & Transport Badges */}
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
                                    Vehicle Endorsements &amp; Badges
                                </h3>
                            </div>
                            <p className="text-white/70 text-[13.5px] font-normal leading-relaxed mb-4 sm:mb-5">
                                Driving categories &amp; badges.
                            </p>
                            <ol className="text-white/90 text-[14px] sm:text-[15px] font-medium leading-[26px] list-decimal list-inside space-y-1.5 pl-1">
                                {[
                                    "Vehicle Class Endorsements (Allowed vehicle categories: MCWG, LMV, HMV, TRANS) [vehicle_classes]",
                                    "Transport Badge Details (Commercial driver badge number, issue date, and validity) [transport_badge]",
                                    "Commercial Endorsement Flag (Commercial transport driving authorization) [commercial_flag]",
                                    "DL Number Verification (15/16 digit standardized Parivahan DL format) [dl_number_verified]",
                                    "Blood Group & Medical Record (Driver medical & emergency contact metadata) [blood_group]",
                                    "Inquiry Timestamp & Audit Hash (Cryptographic audit trail for transport compliance) [inquiry_timestamp]",
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

/* ── 4. CONNECT API SECTION (Redesigned Modern Dark Glass Theme) ── */
function ConnectAPISection() {
    const integrations = [
        {
            title: "Cab Aggregators & Mobility",
            desc: "Automated driver partner onboarding & transport badge validation.",
            icon: Car,
        },
        {
            title: "Logistics & Freight Fleets",
            desc: "HMV heavy vehicle driver verification & cargo risk reduction.",
            icon: Truck,
        },
        {
            title: "Hyperlocal & Food Delivery",
            desc: "Two-wheeler rider onboarding & MCWG license compliance.",
            icon: UserCheck,
        },
        {
            title: "Vehicle Rental & Self-Drive",
            desc: "Customer DL KYC validation & self-drive eligibility checks.",
            icon: Briefcase,
        },
        {
            title: "Corporate Fleet & Transit",
            desc: "Corporate chauffeur screening & periodic license validity audits.",
            icon: Users,
        },
        {
            title: "Motor Insurance & Underwriting",
            desc: "Accident claim driver verification & policy underwriting.",
            icon: ShieldCheck,
        },
    ];

    const workflows = [
        {
            title: "Cab Aggregators & Mobility",
            desc: "Automate driver partner onboarding for Uber, Ola, and commercial taxi fleets by verifying DL validity and commercial transport badges.",
            metrics: "Instant Driver Onboarding",
            tag: "Ride Hailing",
            icon: Car,
            features: ["Driver partner onboarding", "Transport badge audit", "DL expiry monitoring"],
        },
        {
            title: "Logistics & Freight Platforms",
            desc: "Verify truck and heavy commercial vehicle (HMV) drivers to ensure statutory transport compliance and reduce cargo risks.",
            metrics: "Statutory Transport Compliance",
            tag: "Freight & Trucking",
            icon: Truck,
            features: ["HMV driver verification", "Cargo risk reduction", "Fleet safety audit"],
        },
        {
            title: "Food & Hyperlocal Delivery",
            desc: "Verify delivery partner Driving Licenses for Zomato, Swiggy, Zepto, Dunzo to ensure valid 2-wheeler/LMV driving authorization.",
            metrics: "Sub-Second Rider Clearance",
            tag: "Quick-Commerce",
            icon: UserCheck,
            features: ["Delivery rider onboarding", "MCWG license check", "Identity fraud prevention"],
        },
        {
            title: "Vehicle Rental & Self-Drive",
            desc: "Verify customer Driving Licenses before handing over self-drive cars or bikes to ensure valid driving eligibility.",
            metrics: "Zero Liability Risk",
            tag: "Car & Bike Rentals",
            icon: Briefcase,
            features: ["Rent-a-car DL validation", "Self-drive eligibility", "Instant KYC audit"],
        },
    ];

    return (
        <section className="relative pt-12 sm:pt-16 pb-12 sm:pb-16 px-[5%] lg:px-[6%] overflow-hidden">
            {/* Ambient background glow */}
            <div className="absolute left-1/2 -translate-x-1/2 top-10 w-[700px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="relative z-10 max-w-[1300px] mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-3">
                        <Car className="w-3.5 h-3.5" />
                        Enterprise Integration &amp; Workflows
                    </span>
                    <h2 className="text-white text-[28px] sm:text-[36px] lg:text-[42px] font-bold tracking-tight">
                        Connect DL Verification API With Your Existing System
                    </h2>
                    <p className="text-white/70 text-[15px] sm:text-[17px] max-w-2xl mx-auto mt-3">
                        Seamlessly integrate real-time Driving License validation across cab aggregators, freight logistics, delivery platforms, and car rental fleets.
                    </p>
                </div>

                {/* Part 1: Strategic Overview Banner */}
                <div className="bg-gradient-to-r from-[#0a142c]/95 via-[#0c1836]/90 to-[#0a1226]/95 border border-blue-500/30 rounded-[24px] p-6 sm:p-9 lg:p-10 shadow-[0_0_40px_rgba(22,119,255,0.18)] backdrop-blur-md mb-12">
                    <div className="grid lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-8 space-y-4">
                            <h3 className="text-white text-[20px] sm:text-[23px] font-bold">
                                Automated Transport Compliance &amp; Driver Risk Audit for Mobility Platforms
                            </h3>
                            <p className="text-white/85 text-[14.5px] sm:text-[16px] leading-[1.7] font-normal">
                                In logistics, mobility, fleet management, and delivery platforms, ensuring that driver partners possess genuine, valid, and active Driving Licenses is critical to preventing accidents, regulatory penalties, and liability claims. DigitalRakshak&apos;s Driving License Verification API queries official Ministry of Road Transport and Highways (MoRTH) Sarathi RTO databases in real time, validating DL status, authorized vehicle classes (LMV, HMV, MCWG), and badge validity.
                            </p>
                            <p className="text-blue-300 text-[13.5px] sm:text-[14.5px] font-medium pt-1 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                                The DL Verification API provides webhook and real-time pass-through capabilities for automated driver verification and instant fleet onboarding.
                            </p>
                        </div>

                        {/* Integration Metrics Callout */}
                        <div className="lg:col-span-4 bg-[#050b1a]/80 border border-blue-400/20 rounded-[20px] p-6 space-y-4">
                            <span className="text-xs font-semibold text-white/60 uppercase tracking-wider block">
                                Integration Capabilities
                            </span>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between text-sm pb-2.5 border-b border-white/10">
                                    <span className="text-white/80">API Protocol</span>
                                    <span className="text-[#76bbf8] font-mono font-bold">REST / JSON Payload</span>
                                </div>
                                <div className="flex items-center justify-between text-sm pb-2.5 border-b border-white/10">
                                    <span className="text-white/80">Query Latency</span>
                                    <span className="text-emerald-400 font-bold">&lt; 300ms Sub-Second</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-white/80">Data Source</span>
                                    <span className="text-white font-semibold">100% MoRTH Sarathi Sync</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Part 2: Integrate With - 6 Grid Cards */}
                <div className="mb-14">
                    <h3 className="text-white text-[20px] sm:text-[23px] font-bold mb-6 flex items-center gap-2.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#76bbf8]" />
                        Integrate Across Your Core Systems:
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {integrations.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-[#080f22]/85 border border-white/10 hover:border-blue-500/40 rounded-[20px] p-5 sm:p-6 transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(22,119,255,0.15)] group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#76bbf8] shrink-0 group-hover:scale-110 transition-transform">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-md">
                                                0{idx + 1}
                                            </span>
                                            <h4 className="text-white font-bold text-[16px] sm:text-[17px] leading-tight">
                                                {item.title}
                                            </h4>
                                        </div>
                                        <p className="text-white/70 text-[13px] leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Part 3: Built for Mobility & Logistics Verticals (2x2 Balanced Grid) */}
                <div className="mb-12">
                    <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
                        <div>
                            <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider block mb-1">
                                High-Impact Use Cases
                            </span>
                            <h3 className="text-white text-[22px] sm:text-[26px] font-bold">
                                Built for Mobility &amp; Logistics Verticals
                            </h3>
                        </div>
                        <span className="text-xs font-semibold text-white/60 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
                            4 Production-Ready Workflows
                        </span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7">
                        {workflows.map((wf, idx) => (
                            <div
                                key={idx}
                                className="bg-gradient-to-b from-[#0a1226]/90 to-[#060c1a]/95 border border-blue-500/25 hover:border-blue-400/50 rounded-[22px] p-6 sm:p-8 shadow-[0_0_30px_rgba(22,119,255,0.12)] hover:shadow-[0_0_40px_rgba(56,189,248,0.22)] transition-all duration-300 flex flex-col justify-between group"
                            >
                                <div>
                                    {/* Header Row: Tag & Impact SLA */}
                                    <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                                        <span className="text-xs font-bold uppercase tracking-wider text-blue-300 bg-blue-500/15 border border-blue-400/30 px-3 py-1 rounded-full">
                                            {wf.tag}
                                        </span>
                                        <span className="text-xs font-extrabold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                            {wf.metrics}
                                        </span>
                                    </div>

                                    {/* Title with Icon */}
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-110 transition-transform">
                                            <wf.icon className="w-5 h-5" />
                                        </div>
                                        <h4 className="text-white font-bold text-[18px] sm:text-[20px] leading-snug">
                                            {wf.title}
                                        </h4>
                                    </div>

                                    {/* Description */}
                                    <p className="text-white/75 text-[13.5px] sm:text-[14.5px] leading-relaxed mb-5">
                                        {wf.desc}
                                    </p>
                                </div>

                                {/* Features / Capability Pills */}
                                <div className="flex flex-wrap gap-2 pt-3 border-t border-white/10">
                                    {wf.features.map((feat, fIdx) => (
                                        <span
                                            key={fIdx}
                                            className="inline-flex items-center gap-1.5 text-[12px] font-medium text-white/90 bg-[#121c33] border border-white/10 px-3 py-1 rounded-lg"
                                        >
                                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                            {feat}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Centered Book a Demo CTA */}
                <div className="flex justify-center">
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

/* ── 5. HOW IT WORKS (Interactive step-toggle) ── */
function HowItWorksSection() {
    const [activeStep, setActiveStep] = useState<number | null>(1);

    const stepsData = [
        {
            id: 1,
            title: "1. Input DL & DOB",
            image: "/images/how-it-works-step.png",
            content: (
                <div className="space-y-2 text-[#4b5563] text-[13.5px] sm:text-[14.5px] leading-relaxed pt-2">
                    <p>
                        Pass the DL number &amp; Date of Birth via our REST API or portal dashboard.
                    </p>
                    <p className="font-medium text-[#1f2937]">Input parameters supported:</p>
                    <div className="space-y-1.5 pl-3 text-[#374151]">
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span>1. Standardized 15/16 character DL number &amp; DOB</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span>2. Automatic format sanitization &amp; state code parsing</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span>3. Real-time REST API call or bulk batch processing</span>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            id: 2,
            title: "2. Query Sarathi RTO",
            image: "/images/how-it-works-step.png",
            content: (
                <div className="space-y-2 text-[#4b5563] text-[13.5px] sm:text-[14.5px] leading-relaxed pt-2">
                    <p>
                        Our gateway connects directly to central Sarathi RTO portal databases.
                    </p>
                    <div className="space-y-1.5 pl-3 text-[#374151] font-medium">
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span>1. Direct connectivity to MoRTH central registries</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span>2. Real-time bypass of CAPTCHA and portal lag</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span>3. Nationwide coverage across 1,400+ RTO offices</span>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            id: 3,
            title: "3. Vehicle Class & Expiry Audit",
            image: "/images/how-it-works-step.png",
            content: (
                <div className="space-y-2 text-[#4b5563] text-[13.5px] sm:text-[14.5px] leading-relaxed pt-2">
                    <p>
                        System audits authorized vehicle classes, expiry dates, and badge details.
                    </p>
                    <div className="space-y-1.5 pl-3 text-[#374151] font-medium">
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span>1. Extract MCWG, LMV, HMV, and TRANS endorsements</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span>2. Non-transport and commercial transport validity check</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span>3. Driver photograph and signature metadata retrieval</span>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            id: 4,
            title: "4. Receive JSON Output",
            image: "/images/how-it-works-step.png",
            content: (
                <div className="space-y-2 text-[#4b5563] text-[13.5px] sm:text-[14.5px] leading-relaxed pt-2">
                    <p>
                        Get clean, structured JSON payload in &lt;300ms to complete driver onboarding.
                    </p>
                    <div className="space-y-1.5 pl-3 text-[#374151] font-medium">
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span>1. Complete parsed JSON schema ready for onboarding engines</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span>2. Tamper-evident digital audit trail for compliance records</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span>3. Instant algorithmic approval for driver onboarding</span>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    const activeImage =
        stepsData.find((s) => s.id === activeStep)?.image ||
        "/images/how-it-works-step.png";

    return (
        <section className="relative py-5 sm:py-7 px-[5%] lg:px-[6%] overflow-hidden bg-black">
            {/* Ambient soft glow at bottom right */}
            <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-[#1e3a8a]/20 rounded-full blur-[140px] pointer-events-none" />

            <div className="relative z-10 max-w-[1240px] mx-auto">
                <h2 className="text-white text-[28px] sm:text-[34px] lg:text-[40px] font-bold text-center tracking-tight mb-3">
                    How DL Verification Works
                </h2>
                <p className="text-white/70 text-[15px] sm:text-[17px] text-center max-w-[650px] mx-auto mb-12 sm:mb-16">
                    Four simple, automated steps to verify any Indian Driving License in sub-seconds.
                </p>

                {/* 2-Column Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
                    {/* Left Column: Image Card */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-start">
                        <div className="w-full max-w-[420px] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/10 relative bg-[#0b101d]">
                            <img
                                key={activeImage}
                                src={activeImage}
                                alt="How DL Verification Works illustration"
                                className="w-full h-auto object-cover block transition-all duration-500 ease-out"
                            />
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

/* ── 6. WHY API SECTION ── */
function WhyAPISection() {
    return (
        <section className="relative py-10 sm:py-14 px-[5%] lg:px-[6%]">
            {/* Ellipse 21 glow */}
            <div className="absolute left-0 w-full max-w-[848px] pointer-events-none select-none opacity-65 mix-blend-screen z-50">
                <img
                    alt=""
                    className="w-full h-full object-contain"
                    src={imgEllipse21}
                />
            </div>
            <div className="max-w-[1400px] mx-auto space-y-16 lg:space-y-20">
                {/* Top Section: Why Driving License Verification is Essential */}
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    <div className="lg:col-span-5">
                        <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2 block">
                            Transport Compliance &amp; Driver Risk Audit
                        </span>
                        <h2 className="text-white text-[clamp(24px,3vw,40px)] font-bold leading-tight mb-6">
                            Why Driving License Verification is Essential
                        </h2>
                        <p className="text-white text-[15px] sm:text-[16px] lg:text-[18px] font-normal leading-relaxed mb-4">
                            In logistics, mobility, fleet management, and delivery platforms, ensuring that driver partners possess genuine, valid, and active Driving Licenses is critical to preventing accidents, regulatory penalties, and liability claims.
                        </p>
                        <p className="text-white text-[15px] sm:text-[16px] lg:text-[18px] font-normal leading-relaxed mb-4">
                            DigitalRakshak&apos;s Driving License Verification API queries official Ministry of Road Transport and Highways (MoRTH) Sarathi RTO databases in real time, validating DL status, authorized vehicle classes (LMV, HMV, MCWG), and badge validity.
                        </p>
                        <ul className="text-white/90 text-[14px] sm:text-[16px] font-normal leading-relaxed space-y-2 pl-1">
                            {[
                                "Prevent Fake DLs: Unmask forged license numbers and fake physical DL cards instantly.",
                                "Vehicle Class Endorsements: Verify whether the driver is authorized for LMV, HMV, or 2-Wheelers.",
                                "Expiry & Badge Audit: Check validity dates, renewal history, and commercial badge status.",
                                "Direct Sarathi RTO Sync: Retrieve authentic driver details directly from MoRTH servers.",
                                "Sub-300ms Ultra-Low Latency for Instant Onboarding Workflows",
                                "ISO 27001 Certified & Bank-Grade Security",
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-2.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#76bbf8] shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right side: 3 images layout */}
                    <div className="lg:col-span-7 flex items-center gap-4 sm:gap-5 w-full">
                        {/* Big card - left */}
                        <div className="flex-[581] rounded-[18px] overflow-hidden shadow-2xl border border-white/10">
                            <img
                                alt="DL Verification Dashboard"
                                className="w-full h-auto rounded-[18px] object-cover block"
                                src={imgFrame20}
                            />
                        </div>

                        {/* Right column: 2 stacked cards */}
                        <div className="flex-[288] flex flex-col justify-between self-stretch gap-3 sm:gap-4">
                            <div className="rounded-[18px] overflow-hidden shadow-2xl border border-white/10">
                                <img
                                    alt="Vehicle Class Endorsements"
                                    className="w-full h-auto rounded-[18px] object-cover block"
                                    src={imgFrame22}
                                />
                            </div>
                            <div className="rounded-[18px] overflow-hidden shadow-2xl border border-white/10">
                                <img
                                    alt="Transport Badge Verification"
                                    className="w-full h-auto rounded-[18px] object-cover block"
                                    src={imgFrame77}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Platform Comparison Table */}
                <div className="relative rounded-[24px] sm:rounded-[28px] bg-gradient-to-r from-[#0a1226]/90 via-[#0d1733]/90 to-[#120f2e]/90 border border-blue-500/20 p-6 sm:p-9 lg:p-12 shadow-[0_0_40px_rgba(22,119,255,0.15)]">
                    <div className="max-w-[1200px] mx-auto">
                        <div className="text-center mb-8">
                            <span className="text-[#76bbf8] text-xs font-semibold uppercase tracking-wider">
                                Platform Comparison
                            </span>
                            <h3 className="text-white text-[24px] sm:text-[30px] lg:text-[34px] font-bold leading-tight mt-1 mb-2">
                                The DigitalRakshak Advantage
                            </h3>
                            <p className="text-white/70 text-[14px] sm:text-[16px] max-w-xl mx-auto">
                                How DigitalRakshak DL Verification API compares to manual Parivahan searches and basic web scrapers.
                            </p>
                        </div>

                        <div className="overflow-x-auto rounded-[20px] border border-white/10 bg-[#050b1a]/70 backdrop-blur-md">
                            <table className="w-full text-left border-collapse text-sm">
                                <thead>
                                    <tr className="border-b border-white/10 bg-white/5">
                                        <th className="p-4 sm:p-5 font-bold text-white">Feature / Parameter</th>
                                        <th className="p-4 sm:p-5 font-bold text-[#76bbf8] bg-blue-500/10">DigitalRakshak API</th>
                                        <th className="p-4 sm:p-5 font-bold text-white/60">Manual Parivahan Search</th>
                                        <th className="p-4 sm:p-5 font-bold text-white/60">Basic Web Scrapers</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/10">
                                    {[
                                        { feature: "Response Latency", us: "< 300ms Sub-Second", manual: "5 - 15 Minutes", scraper: "5 - 10 Seconds" },
                                        { feature: "Live Sarathi RTO Sync", us: "Direct Real-time Sync", manual: "Manual Captcha", scraper: "Cached / Fragile" },
                                        { feature: "Vehicle Class Data Output", us: "Complete Class & Badges", manual: "Limited View", scraper: "Unreliable" },
                                        { feature: "Bulk Processing", us: "Up to 50,000 / min", manual: "One by One", scraper: "Blocked Easily" },
                                        { feature: "Enterprise SLA Uptime", us: "99.99% Guaranteed", manual: "N/A", scraper: "Frequent Downtime" },
                                        { feature: "Data Encryption & Security", us: "ISO 27001 / AES-256", manual: "No Audit Trail", scraper: "Unsecured" },
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-white/5 transition-colors">
                                            <td className="p-4 sm:p-5 font-semibold text-white">{row.feature}</td>
                                            <td className="p-4 sm:p-5 font-bold text-[#76bbf8] bg-blue-500/5">{row.us}</td>
                                            <td className="p-4 sm:p-5 text-white/60">{row.manual}</td>
                                            <td className="p-4 sm:p-5 text-white/60">{row.scraper}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ── 7. KEY BENEFITS SECTION ── */
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
                    id="cardGlowLinearBaseDL"
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
                    id="cardGlowRadLeftDL"
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
                    id="cardGlowRadRightDL"
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

            <rect width="100%" height="100%" fill="url(#cardGlowLinearBaseDL)" />
            <rect width="100%" height="100%" fill="url(#cardGlowRadLeftDL)" />
            <rect width="100%" height="100%" fill="url(#cardGlowRadRightDL)" />
        </svg>
    );
}

function KeyBenefitsSection() {
    const benefits = [
        {
            title: "Prevent Fake DLs",
            desc: "Unmask fabricated license numbers and forged physical DL cards before driver onboarding.",
            icon: AlertTriangle,
        },
        {
            title: "Vehicle Class Check",
            desc: "Verify authorized vehicle categories (MCWG, LMV, HMV, Transport) for legal compliance.",
            icon: Car,
        },
        {
            title: "Expiry & Badge Audit",
            desc: "Ensure driver license is active, non-expired, and endorsed with commercial transport badge.",
            icon: Clock,
        },
        {
            title: "Direct Sarathi RTO Sync",
            desc: "Retrieve authentic driver details directly from official MoRTH servers.",
            icon: Database,
        },
        {
            title: "Sub-Second Response",
            desc: "Retrieve verified DL details in <300ms for automated driver onboarding workflows.",
            icon: Zap,
        },
        {
            title: "Enterprise Grade Security",
            desc: "SOC2 & ISO 27001 compliant end-to-end encryption with dedicated SLA guarantees.",
            icon: Lock,
        },
    ];

    return (
        <section className="relative py-10 sm:py-14 px-[5%] lg:px-[6%] overflow-hidden bg-black">
            {/* Background ambient lighting */}
            <div className="absolute right-[5%] top-[10%] w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute left-[5%] bottom-[10%] w-[500px] h-[500px] bg-indigo-900/15 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-[1320px] mx-auto relative z-10">
                {/* Section Heading */}
                <h2 className="text-white text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-center tracking-tight mb-12 sm:mb-16">
                    Key Benefits For Your Business
                </h2>

                {/* 6 Cards Responsive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 justify-items-center">
                    {benefits.map((benefit, idx) => (
                        <div
                            key={idx}
                            className="relative w-full max-w-[406px] min-h-[280px] sm:min-h-[300px] rounded-[18px] border-[2px] border-[#DFC6FF] p-6 sm:p-8 flex flex-col justify-start overflow-hidden group hover:scale-[1.015] hover:shadow-[0_0_35px_rgba(223,198,255,0.3)] transition-all duration-300"
                        >
                            {/* Atmospheric bottom gradient */}
                            <BenefitCardGlow />

                            {/* Icon and Title */}
                            <div className="relative z-10 flex items-center gap-3.5 mb-5 sm:mb-6">
                                <div className="w-[46px] h-[46px] sm:w-[50px] sm:h-[50px] rounded-full bg-[#1b2234]/90 border border-white/20 flex items-center justify-center shrink-0 shadow-inner group-hover:border-white/40 transition-colors">
                                    <benefit.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white stroke-[1.8]" />
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
            </div>
        </section>
    );
}

/* ── 8. FAQ SECTION ── */
function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faqs" className="relative py-12 sm:py-16 px-[5%] lg:px-[6%] bg-black">
            <div className="max-w-[1400px] mx-auto">
                <h2 className="text-white text-[clamp(28px,3vw,42px)] font-bold mb-2 tracking-tight">
                    Frequently Asked Questions
                </h2>
                <p className="text-white/70 text-[15px] sm:text-[17px] mb-10">
                    Everything you need to know about integrating the Driving License Verification API.
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
                                    <p className="w-full md:w-[85%] lg:w-[80%] text-[#d1d5db] text-[15px] sm:text-[16.5px] lg:text-[18px] font-normal leading-relaxed tracking-normal whitespace-pre-line">
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

/* ── 9. CTA SECTION ── */
function CTASection() {
    const apiOptions = [
        "Driving License Verification API",
        "Vehicle Class Endorsement Check API",
        "Commercial Transport Badge Audit API",
        "Driver DOB & Name Match API",
        "Bulk Driver Onboarding & KYC API",
        "Complete Mobility & Transport Suite",
    ];

    const [selectedApis, setSelectedApis] = useState<string[]>([
        "Driving License Verification API",
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
                                Let&apos;s Connect
                            </span>
                            <h2 className="text-white text-[28px] sm:text-[34px] lg:text-[40px] font-bold leading-tight">
                                Ready to Automate Driving License Verification &amp; Driver Risk Audit?
                            </h2>
                            <p className="text-white/80 text-[14px] sm:text-[16px] font-normal leading-relaxed mt-2 mb-6">
                                Get instant API sandbox keys and start verifying Driving Licenses in sub-seconds.
                            </p>

                            {submitted ? (
                                <div className="bg-emerald-950/60 border border-emerald-500/30 rounded-[20px] p-6 text-center my-6">
                                    <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                                    <h4 className="text-white font-bold text-lg mb-1">Request Received!</h4>
                                    <p className="text-white/80 text-sm">
                                        Our transport API specialist will reach out to you shortly.
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
                                                    ? "All APIs (Complete Mobility & Transport Suite)"
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
                                            className="bg-[#B0DAFF] hover:bg-[#76bbf8] text-[#0a1e36] font-bold text-[14px] sm:text-[15px] py-3.5 px-5 rounded-[16px] shadow-lg transition-all flex flex-col items-center justify-center text-center cursor-pointer"
                                        >
                                            <span>Demo</span>
                                            <span className="text-[11px] font-normal text-[#0a1e36]/80 mt-0.5">
                                                Fit into your workflow
                                            </span>
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => handleSubmit("meeting")}
                                            className="bg-white/10 hover:bg-white/20 text-white font-bold text-[14px] sm:text-[15px] py-3.5 px-5 rounded-[16px] border border-white/20 transition-all flex flex-col items-center justify-center text-center cursor-pointer"
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

                    {/* Right Column: High-tech DL Verification API Console Simulator */}
                    <div className="lg:col-span-6 bg-gradient-to-br from-[#0c1428] via-[#091024] to-[#040817] p-7 sm:p-10 lg:p-12 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-center">
                        <div className="rounded-[20px] bg-[#020510] border border-blue-500/25 p-5 sm:p-6 shadow-2xl relative overflow-hidden font-mono text-[12.5px] sm:text-[13.5px]">
                            {/* Terminal top header */}
                            <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/10 font-sans">
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                                    <span className="text-white/60 text-xs ml-2 font-mono">POST /v1/transport/dl-verification</span>
                                </div>
                                <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold">
                                    200 OK • 165ms
                                </span>
                            </div>

                            {/* Payload simulator */}
                            <div className="space-y-1.5 text-blue-200">
                                <p className="text-white/50">{"// Official MoRTH Sarathi DL Query Response"}</p>
                                <p><span className="text-[#ff7b72]">&quot;status&quot;</span>: <span className="text-[#a5d6ff]">&quot;VALID&quot;</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;dlNumber&quot;</span>: <span className="text-[#a5d6ff]">&quot;MH0220190012345&quot;</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;dlStatus&quot;</span>: <span className="text-emerald-400 font-bold">&quot;ACTIVE&quot;</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;driverDetails&quot;</span>: &#123;</p>
                                <div className="pl-4 space-y-1 text-slate-300">
                                    <p><span className="text-[#ff7b72]">&quot;holderName&quot;</span>: <span className="text-[#a5d6ff]">&quot;VIKRAMADITYA SINGH&quot;</span>,</p>
                                    <p><span className="text-[#ff7b72]">&quot;dob&quot;</span>: <span className="text-[#a5d6ff]">&quot;1992-05-14&quot;</span>,</p>
                                    <p><span className="text-[#ff7b72]">&quot;fatherName&quot;</span>: <span className="text-[#a5d6ff]">&quot;RAJENDRA SINGH&quot;</span>,</p>
                                    <p><span className="text-[#ff7b72]">&quot;bloodGroup&quot;</span>: <span className="text-[#a5d6ff]">&quot;B+&quot;</span>,</p>
                                    <p><span className="text-[#ff7b72]">&quot;vehicleClasses&quot;</span>: [<span className="text-[#a5d6ff]">&quot;MCWG&quot;</span>, <span className="text-[#a5d6ff]">&quot;LMV&quot;</span>, <span className="text-[#a5d6ff]">&quot;TRANS&quot;</span>],</p>
                                    <p><span className="text-[#ff7b72]">&quot;badgeNumber&quot;</span>: <span className="text-[#a5d6ff]">&quot;MH-02-BDG-8812&quot;</span>,</p>
                                    <p><span className="text-[#ff7b72]">&quot;issueDate&quot;</span>: <span className="text-[#a5d6ff]">&quot;2019-03-22&quot;</span>,</p>
                                    <p><span className="text-[#ff7b72]">&quot;transportValidity&quot;</span>: <span className="text-emerald-400">&quot;2029-03-21&quot;</span>,</p>
                                    <p><span className="text-[#ff7b72]">&quot;rtoName&quot;</span>: <span className="text-[#a5d6ff]">&quot;MUMBAI WEST (ANDHERI)&quot;</span>,</p>
                                    <p><span className="text-[#ff7b72]">&quot;state&quot;</span>: <span className="text-[#a5d6ff]">&quot;MAHARASHTRA&quot;</span></p>
                                </div>
                                <p>&#125;,</p>
                                <p><span className="text-[#ff7b72]">&quot;complianceVerdict&quot;</span>: <span className="text-emerald-400">&quot;APPROVED_VERIFIED&quot;</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ── MAIN COMPONENT EXPORT ── */
export default function DrivingLicenceVerificationPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#B0DAFF] selection:text-[#081a2e]">
            <HeroSection />
            <WhatCanYouDoSection />
            <VerificationCardsSection />
            <ConnectAPISection />
            <HowItWorksSection />
            <WhyAPISection />
            <KeyBenefitsSection />
            <FAQSection />
            <CTASection />
        </div>
    );
}
