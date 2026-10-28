"use client";

import { useState } from "react";
import {
    Landmark,
    Building2,
    ArrowRight,
    CheckCircle2,
    Check,
    ChevronDown,
    ShieldCheck,
    Zap,
    Database,
    AlertTriangle,
    FileText,
    BarChart3,
    Briefcase,
    Users,
    Clock,
    Lock,
    CreditCard,
    RefreshCw,
    SlidersHorizontal,
    Search,
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
        q: "What is the Hybrid Bank Account Verification API?",
        a: "The Hybrid Bank Account Verification API combines Penny Drop, Penny-Less, and UPI failover verification into a single intelligent routing engine, guaranteeing 100% verification uptime even during bank server outages.",
    },
    {
        q: "How does the smart failover mechanism work?",
        a: "If destination bank IMPS servers experience downtime or high response latency during a Penny Drop request, our API automatically switches to Penny-Less or UPI verification modes to complete the audit instantly.",
    },
    {
        q: "What beneficiary details are returned?",
        a: "The API returns beneficiary legal name, account active status, 11-character IFSC code, bank branch location, account type, and fuzzy name match confidence score.",
    },
    {
        q: "What is the response latency and SLA?",
        a: "DigitalRakshak guarantees sub-300ms API response latency with 99.99% uptime SLA backed by enterprise redundant infrastructure.",
    },
    {
        q: "What parameters are returned in the Hybrid Bank API output?",
        a: "The response includes beneficiary legal name, account number, IFSC code, verification mode executed (Penny Drop / Penny-Less), account status (Active), name match score, and NPCI reference number.",
    },
    {
        q: "How do I integrate the Hybrid Bank Account Verification API?",
        a: "Register on DigitalRakshak, obtain your production/sandbox API keys, and connect our clean REST API endpoints into your payout or onboarding application within minutes.",
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
                                <Landmark className="w-3.5 h-3.5 text-blue-300" />
                                Intelligent Multi-Mode Bank Account Verification
                            </span>
                            <h1 className="text-white text-[clamp(28px,7vw,54px)] font-black leading-[1.1] tracking-tight">
                                Hybrid Bank Account<br />Verification API
                            </h1>
                            <p className="text-white text-[15px] sm:text-[18px] lg:text-[22px] font-medium mt-3 sm:mt-4">
                                Combine Penny Drop, Penny-Less, and instant UPI failover verification into a single intelligent API engine for 100% verification success rate and zero payout bounces.
                            </p>
                        </div>

                        <div className="mt-5 sm:mt-8 lg:mt-10">
                            <p className="text-white/90 text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-relaxed max-w-[540px]">
                                Traditional ₹1 Penny Drop verification can fail when destination bank servers experience downtime or slow IMPS processing times. Relying on a single verification method leads to failed payouts, onboarding delays, and user drop-off.
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
                                <span className="flex items-center gap-1.5"><CreditCard className="w-4 h-4 text-[#76bbf8]" /> 100% Payout Success</span>
                                <span className="text-white/30 hidden sm:inline">•</span>
                                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#76bbf8]" /> 99.99% SLA</span>
                                <span className="text-white/30 hidden sm:inline">•</span>
                                <span className="flex items-center gap-1.5"><Building2 className="w-4 h-4 text-[#76bbf8]" /> 150,000+ Bank Branches</span>
                            </div>
                        </div>
                    </div>

                    {/* Right – product screenshots (identical to gst-verification-api) */}
                    <div className="lg:col-span-7 relative flex justify-center lg:justify-end items-center w-full mt-4 lg:mt-0">
                        <div className="flex items-center gap-3 sm:gap-6 md:gap-8 w-full max-w-[650px] lg:max-w-none mx-auto">
                            {/* Main card - left */}
                            <div className="flex-[326] rounded-[16px] sm:rounded-[22px] lg:rounded-[26px] overflow-hidden shadow-2xl border border-white/10 aspect-[326/354] bg-[#f2f4f7]">
                                <img
                                    alt="Hybrid Bank Account Verification Dashboard"
                                    className="w-full h-full object-cover object-center"
                                    src={imgFrame19}
                                />
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

/* ── 2. FEATURE CARD (Identical to gst-verification-api) ── */
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

            {/* Card Body with exact styling */}
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
            title: "1. Smart Multi-Mode Failover",
            desc: "Intelligent fallback engine routes across Penny Drop & Penny-Less modes automatically.",
            icon: imgSvgRepoIconCarrier,
        },
        {
            title: "2. Beneficiary Name Match",
            desc: "Fuzzy name matching algorithms verify account legal title against onboarding records.",
            icon: imgSvgRepoIconCarrier,
        },
        {
            title: "3. Zero Payout Bounces",
            desc: "Prevent credit bounce fees and failed transaction charges before disbursing funds.",
            icon: imgSvgRepoIconCarrier,
        },
        {
            title: "4. Multi-Mode Failover Engine",
            desc: "Automatically switches between Penny Drop, Penny-Less, and UPI modes during bank outages.",
            icon: imgSvgRepoIconCarrier,
        },
        {
            title: "5. Sub-Second Response",
            desc: "Retrieve verified bank account details in <300ms for instant onboarding & payouts.",
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
                    What Can You Do with Hybrid Bank Account Verification
                </h2>
                <p className="text-white/70 text-[15px] sm:text-[17px] text-center max-w-[700px] mx-auto mb-14 sm:mb-20">
                    Combine Penny Drop, Penny-Less, and UPI routing for 100% verification uptime and zero payout bounces.
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

/* ── 3. VERIFICATION CARDS SECTION (Big blue border box identical to gst-verification-api) ── */
function VerificationCardsSection() {
    return (
        <section className="relative py-8 sm:py-12 px-[5%] lg:px-[6%]">
            <div className="relative z-10 max-w-[1240px] mx-auto">
                <h2 className="text-white text-[24px] sm:text-[32px] lg:text-[36px] font-bold text-center tracking-tight mb-3">
                    Comprehensive Hybrid Bank Output Parameters
                </h2>
                <p className="text-white/70 text-[14px] sm:text-[16px] text-center max-w-[650px] mx-auto mb-10 sm:mb-14">
                    Our API returns verified beneficiary account identifiers and hybrid failover engine metrics.
                </p>

                {/* Outer Blue Border Box */}
                <div className="relative bg-[#040d24]/70 border-2 border-[#1677ff] rounded-[22px] p-6 sm:p-9 lg:p-12 shadow-[0_0_35px_rgba(22,119,255,0.35)] backdrop-blur-md">
                    <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 divide-y md:divide-y-0 md:divide-x divide-white/15">
                        {/* Column 1: Account & Beneficiary Identifiers */}
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
                                    Account &amp; Beneficiary Identifiers
                                </h3>
                            </div>
                            <p className="text-white/70 text-[13.5px] font-normal leading-relaxed mb-4 sm:mb-5">
                                Verified bank account metadata.
                            </p>
                            <ol className="text-white/90 text-[14px] sm:text-[15px] font-medium leading-[26px] list-decimal list-inside space-y-1.5 pl-1">
                                {[
                                    "Beneficiary Legal Name (Official account holder name returned by bank) [beneficiary_name]",
                                    "Account Number (Bank account number verified) [account_number]",
                                    "11-Character IFSC Code (Bank branch IFSC identifier) [ifsc_code]",
                                    "Account Active Status (Real-time account status: Active) [account_status]",
                                    "Bank Name & Branch (Destination bank legal title & branch location) [bank_branch]",
                                    "Account Type (Savings / Current / NRE / NRO Account) [account_type]",
                                ].map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ol>
                        </div>

                        {/* Column 2: Hybrid Engine & Failover Status */}
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
                                    Hybrid Engine &amp; Failover Status
                                </h3>
                            </div>
                            <p className="text-white/70 text-[13.5px] font-normal leading-relaxed mb-4 sm:mb-5">
                                Routing mode &amp; match metrics.
                            </p>
                            <ol className="text-white/90 text-[14px] sm:text-[15px] font-medium leading-[26px] list-decimal list-inside space-y-1.5 pl-1">
                                {[
                                    "Verification Mode Used (Penny Drop / Penny-Less / UPI Failover) [verification_mode]",
                                    "Name Match Score (Fuzzy match score percentage (0-100%)) [name_match_score]",
                                    "UPI VPA Linkage (Virtual Payment Address linked with account) [upi_vpa]",
                                    "Transfer Modes Supported (IMPS, NEFT, RTGS, UPI active flags) [transfer_modes]",
                                    "NPCI Reference Number (12-digit transaction reference ID) [rrn_ref]",
                                    "Failover Trigger Flag (Flag indicating fallback mode execution) [failover_active]",
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

/* ── 4. CONNECT API SECTION (Identical dual-column layout to gst-verification-api) ── */
function ConnectAPISection() {
    const workflows = [
        {
            title: "Fintech & Instant Payout Platforms",
            desc: "Validate customer and vendor bank accounts before initiating instant money transfers, eliminating failed payouts and transaction reversal fees.",
            metrics: "100% Payout Success",
            tag: "Instant Payouts",
            features: ["Vendor bank account validation", "Beneficiary name match", "Multi-mode failover execution"],
        },
        {
            title: "HR & Payroll Operations",
            desc: "Verify new employee bank account details prior to monthly salary dispatches to ensure seamless salary credits and zero bounced paychecks.",
            metrics: "Zero Salary Bounces",
            tag: "Payroll Automation",
            features: ["Employee bank account audit", "Salary credit pre-validation", "Name alignment check"],
        },
        {
            title: "E-Commerce Marketplaces & Refunds",
            desc: "Validate buyer bank accounts for customer refund processing and seller payout disbursements with zero transaction delays.",
            metrics: "Instant Refund Validation",
            tag: "E-Commerce Refunds",
            features: ["Customer refund account audit", "Seller payout validation", "Zero payout failure"],
        },
        {
            title: "Loan & NBFC Disbursals",
            desc: "Confirm borrower bank account ownership and active status before disbursing loan amounts to prevent fraud and account mismatch.",
            metrics: "Sub-Second Loan Disbursal",
            tag: "NBFC Lending",
            features: ["Borrower bank account verification", "Active status confirmation", "Instant loan credit"],
        },
    ];

    return (
        <section className="relative pt-8 sm:pt-10 lg:pt-12 pb-7 sm:pb-9 px-[5%] lg:px-[6%] overflow-hidden">
            <div className="relative z-10 max-w-[1240px] mx-auto">
                {/* Section Heading */}
                <h2 className="text-white text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-center tracking-tight mb-12 sm:mb-16">
                    Connect Hybrid Bank Account Verification API With Your Existing System
                </h2>

                {/* 2-Column Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 items-start justify-items-center">
                    {/* LEFT COLUMN: Blue Box + Integrate with */}
                    <div className="w-full max-w-[543px] flex flex-col">
                        <div className="w-full min-h-[190px] h-auto bg-gradient-to-b from-[#b2daff] to-[#92c8fc] border-2 border-[#54b4ff] rounded-[20px] p-6 sm:p-8 flex items-center shadow-[0_0_35px_rgba(84,180,255,0.45),0_0_12px_rgba(84,180,255,0.3)]">
                            <p className="text-[#081a2e] text-[15px] sm:text-[16px] lg:text-[17px] font-normal leading-[1.65]">
                                Traditional ₹1 Penny Drop verification can fail when destination bank servers experience downtime or slow IMPS processing times. Relying on a single verification method leads to failed payouts, onboarding delays, and user drop-off. DigitalRakshak&apos;s Hybrid Bank Account Verification API automatically routes queries across Penny Drop, Penny-Less, and UPI failover modes in real time, ensuring a 100% verification success rate and instant beneficiary name matching.
                            </p>
                        </div>

                        <h4 className="text-white font-bold text-[18px] sm:text-[20px] mt-8 mb-4">
                            Integrate with:
                        </h4>

                        <div className="space-y-3 text-white/90 text-[14px] sm:text-[15px] font-medium pl-1">
                            <div>1. Fintech, digital lending &amp; instant payout disbursal engines</div>
                            <div>2. Payroll &amp; HR management platforms for salary pre-validation</div>
                            <div>3. E-commerce marketplaces for customer refunds &amp; vendor payouts</div>
                            <div>4. NBFC loan origination &amp; automated disbursal workflows</div>
                            <div>5. Corporate treasury, ERP &amp; automated accounting systems</div>
                            <div>6. Gig economy &amp; gaming platforms for round-the-clock instant withdrawals</div>
                        </div>

                        <p className="text-white/80 text-[13.5px] sm:text-[14.5px] leading-relaxed mt-6 pl-1">
                            The Hybrid Bank Account Verification API provides webhook and real-time pass-through capabilities for automated multi-mode payout pre-validation.
                        </p>
                    </div>

                    {/* RIGHT COLUMN: Practical Business Workflows */}
                    <div className="w-full max-w-[543px] flex flex-col">
                        <h3 className="text-white font-bold text-[22px] sm:text-[24px] mb-6">
                            Built for Payouts, Payroll &amp; Lending
                        </h3>

                        <div className="space-y-5 sm:space-y-6">
                            {workflows.map((wf) => (
                                <div
                                    key={wf.title}
                                    className="bg-gradient-to-r from-[#ebd6ff] via-[#e2c4ff] to-[#d8b0ff] border-2 border-[#d896ff] rounded-[20px] p-6 sm:px-8 sm:py-6 shadow-[0_0_30px_rgba(216,145,255,0.45),0_0_10px_rgba(216,145,255,0.3)] transition-transform duration-200 hover:scale-[1.01]"
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-extrabold uppercase tracking-wider text-[#6b21a8] bg-white/70 px-2.5 py-0.5 rounded-full">
                                            {wf.tag}
                                        </span>
                                        <span className="text-xs font-bold text-[#6b21a8] bg-white/70 px-2.5 py-0.5 rounded-full">
                                            {wf.metrics}
                                        </span>
                                    </div>
                                    <h4 className="text-[#090e24] font-bold text-[18px] sm:text-[19px] mb-2">
                                        {wf.title}
                                    </h4>
                                    <p className="text-[#1a2038] text-[13px] sm:text-[14px] leading-relaxed font-normal mb-3">
                                        {wf.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {wf.features.map((feat, idx) => (
                                            <span key={idx} className="inline-flex items-center gap-1 text-[11.5px] font-semibold text-[#090e24] bg-white/60 px-2.5 py-0.5 rounded-md">
                                                <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                                                {feat}
                                            </span>
                                        ))}
                                    </div>
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

/* ── 5. HOW IT WORKS (Identical interactive step-toggle to gst-verification-api) ── */
function HowItWorksSection() {
    const [activeStep, setActiveStep] = useState<number | null>(1);

    const stepsData = [
        {
            id: 1,
            title: "1. Input Account & IFSC",
            image: "/images/how-it-works-step.png",
            content: (
                <div className="space-y-2 text-[#4b5563] text-[13.5px] sm:text-[14.5px] leading-relaxed pt-2">
                    <p>
                        Pass the bank account number and 11-character IFSC code via REST API.
                    </p>
                    <p className="font-medium text-[#1f2937]">Input parameters supported:</p>
                    <div className="space-y-1.5 pl-3 text-[#374151]">
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span>1. Beneficiary Bank Account Number &amp; 11-char IFSC code</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span>2. Optional candidate legal name for fuzzy AI matching</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span>3. Automated REST endpoint or bulk batch disbursement files</span>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            id: 2,
            title: "2. Smart Hybrid Routing",
            image: "/images/how-it-works-step.png",
            content: (
                <div className="space-y-2 text-[#4b5563] text-[13.5px] sm:text-[14.5px] leading-relaxed pt-2">
                    <p>
                        API automatically selects optimal verification mode (Penny Drop / Penny-Less).
                    </p>
                    <div className="space-y-1.5 pl-3 text-[#374151] font-medium">
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span>1. Real-time bank health monitoring &amp; IMPS latency analysis</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span>2. Automatic fallback to Penny-Less or UPI if bank IMPS is congested</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span>3. Zero manual intervention or fallback logic needed on your end</span>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            id: 3,
            title: "3. Beneficiary Audit",
            image: "/images/how-it-works-step.png",
            content: (
                <div className="space-y-2 text-[#4b5563] text-[13.5px] sm:text-[14.5px] leading-relaxed pt-2">
                    <p>
                        System audits beneficiary legal name, account active status, and bank branch.
                    </p>
                    <div className="space-y-1.5 pl-3 text-[#374151] font-medium">
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span>1. Official account holder legal title returned by destination bank</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span>2. Account active status verification (Active / Inactive)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span>3. Bank name, branch location, and clearing network flags</span>
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
                        Get clean, structured JSON payload in &lt;300ms to proceed with instant payouts.
                    </p>
                    <div className="space-y-1.5 pl-3 text-[#374151] font-medium">
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span>1. Structured JSON with name match percentage (0-100%)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span>2. NPCI transaction reference number (RRN) for audit logs</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span>3. Instant failover execution flag and routing mode metadata</span>
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
                    How Hybrid Verification Works
                </h2>
                <p className="text-white/70 text-[15px] sm:text-[17px] text-center max-w-[650px] mx-auto mb-12 sm:mb-16">
                    Four simple, automated steps to verify any Indian bank account with 100% uptime reliability.
                </p>

                {/* 2-Column Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
                    {/* Left Column: Image Card */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-start">
                        <div className="w-full max-w-[420px] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/10 relative bg-[#0b101d]">
                            <img
                                key={activeImage}
                                src={activeImage}
                                alt="How Hybrid Verification Works illustration"
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

/* ── 6. WHY API SECTION (Identical visual design to gst-verification-api) ── */
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
                {/* Top Section: Why Hybrid Bank Account Verification is Essential */}
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    <div className="lg:col-span-5">
                        <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2 block">
                            Multi-Mode Verification &amp; Zero Payout Bounces
                        </span>
                        <h2 className="text-white text-[clamp(24px,3vw,40px)] font-bold leading-tight mb-6">
                            Why Hybrid Bank Account Verification is Essential
                        </h2>
                        <p className="text-white text-[15px] sm:text-[16px] lg:text-[18px] font-normal leading-relaxed mb-4">
                            Traditional ₹1 Penny Drop verification can fail when destination bank servers experience downtime or slow IMPS processing times. Relying on a single verification method leads to failed payouts, onboarding delays, and user drop-off.
                        </p>
                        <p className="text-white text-[15px] sm:text-[16px] lg:text-[18px] font-normal leading-relaxed mb-4">
                            DigitalRakshak&apos;s Hybrid Bank Account Verification API automatically routes queries across Penny Drop, Penny-Less, and UPI failover modes in real time, ensuring a 100% verification success rate and instant beneficiary name matching.
                        </p>
                        <ul className="text-white/90 text-[14px] sm:text-[16px] font-normal leading-relaxed space-y-2 pl-1">
                            {[
                                "Multi-Mode Verification Failover: Automatically switches between Penny Drop, Penny-Less, and UPI modes during bank outages.",
                                "Beneficiary Name Audit: Extract and match official account holder legal name directly from NPCI & bank networks.",
                                "Zero Payout Failure Rate: Eliminate failed transfers and bank account credit bounces.",
                                "Direct NPCI & Bank Network Sync: Real-time query to 150,000+ bank branches across India.",
                                "Sub-300ms Ultra-Low Latency for Instant In-App User Onboarding",
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
                                alt="Hybrid Bank Verification Dashboard"
                                className="w-full h-auto rounded-[18px] object-cover block"
                                src={imgFrame20}
                            />
                        </div>

                        {/* Right column: 2 stacked cards */}
                        <div className="flex-[288] flex flex-col justify-between self-stretch gap-3 sm:gap-4">
                            <div className="rounded-[18px] overflow-hidden shadow-2xl border border-white/10">
                                <img
                                    alt="Multi-Mode Failover Analytics"
                                    className="w-full h-auto rounded-[18px] object-cover block"
                                    src={imgFrame22}
                                />
                            </div>
                            <div className="rounded-[18px] overflow-hidden shadow-2xl border border-white/10">
                                <img
                                    alt="Payment Rail Success Metrics"
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
                                The DigitalRakshak Hybrid Advantage
                            </h3>
                            <p className="text-white/70 text-[14px] sm:text-[16px] max-w-xl mx-auto">
                                How DigitalRakshak Hybrid Multi-Mode Bank API compares to single Penny Drop gateways and manual methods.
                            </p>
                        </div>

                        <div className="overflow-x-auto rounded-[20px] border border-white/10 bg-[#050b1a]/70 backdrop-blur-md">
                            <table className="w-full text-left border-collapse text-sm">
                                <thead>
                                    <tr className="border-b border-white/10 bg-white/5">
                                        <th className="p-4 sm:p-5 font-bold text-white">Feature / Parameter</th>
                                        <th className="p-4 sm:p-5 font-bold text-[#76bbf8] bg-blue-500/10">DigitalRakshak Hybrid Engine</th>
                                        <th className="p-4 sm:p-5 font-bold text-white/60">Single-Mode Penny Drop</th>
                                        <th className="p-4 sm:p-5 font-bold text-white/60">Manual Bank Verification</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/10">
                                    {[
                                        { feature: "Verification Latency", us: "< 300ms", single: "5 - 15 Seconds", manual: "12 - 24 Hours" },
                                        { feature: "Outage Resilience", us: "100% Multi-Mode Failover", single: "Frequent IMPS Downtime Bounces", manual: "Manual Delays & Freezes" },
                                        { feature: "Name Match Accuracy", us: "Direct NPCI Legal Title Match", single: "Standard Name Lookup", manual: "Human Typo Errors" },
                                        { feature: "Payout Bounce Rate", us: "0% Bounces Guaranteed", single: "2 - 5% Bounce Rate", manual: "High Reversal Risks" },
                                        { feature: "Bank Branch Coverage", us: "150,000+ Branches Across India", single: "Limited to Selected Banks", manual: "Manual Account Statements" },
                                        { feature: "Enterprise SLA & Security", us: "99.99% SLA / ISO 27001", single: "99.0% SLA", manual: "Unsecured Manual Data" },
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-white/5 transition-colors">
                                            <td className="p-4 sm:p-5 font-semibold text-white">{row.feature}</td>
                                            <td className="p-4 sm:p-5 font-bold text-[#76bbf8] bg-blue-500/5">{row.us}</td>
                                            <td className="p-4 sm:p-5 text-white/60">{row.single}</td>
                                            <td className="p-4 sm:p-5 text-white/60">{row.manual}</td>
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

/* ── 7. KEY BENEFITS SECTION (6 cards with BenefitCardGlow identical to gst-verification-api) ── */
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
                    id="cardGlowLinearBaseHybrid"
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
                    id="cardGlowRadLeftHybrid"
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
                    id="cardGlowRadRightHybrid"
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

            <rect width="100%" height="100%" fill="url(#cardGlowLinearBaseHybrid)" />
            <rect width="100%" height="100%" fill="url(#cardGlowRadLeftHybrid)" />
            <rect width="100%" height="100%" fill="url(#cardGlowRadRightHybrid)" />
        </svg>
    );
}

function KeyBenefitsSection() {
    const benefits = [
        {
            title: "Smart Multi-Mode Failover",
            desc: "Intelligent fallback engine routes across Penny Drop & Penny-Less modes automatically.",
            icon: RefreshCw,
        },
        {
            title: "Beneficiary Name Match",
            desc: "Fuzzy name matching algorithms verify account legal title against onboarding records.",
            icon: ShieldCheck,
        },
        {
            title: "Zero Payout Bounces",
            desc: "Prevent credit bounce fees and failed transaction charges before disbursing funds.",
            icon: CreditCard,
        },
        {
            title: "Direct NPCI & Bank Sync",
            desc: "Real-time query to 150,000+ bank branches across India with direct network sync.",
            icon: Landmark,
        },
        {
            title: "Sub-Second Response",
            desc: "Retrieve verified bank account details in <300ms for instant onboarding & payouts.",
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
                            {/* Exact atmospheric bottom gradient */}
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

/* ── 8. FAQ SECTION (Identical accordion to gst-verification-api) ── */
function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faqs" className="relative py-12 sm:py-16 px-[5%] lg:px-[6%] bg-black">
            <div className="max-w-[1400px] mx-auto">
                <h2 className="text-white text-[clamp(28px,3vw,42px)] font-bold mb-2 tracking-tight">
                    Frequently Asked Questions
                </h2>
                <p className="text-white/70 text-[15px] sm:text-[17px] mb-10">
                    Everything you need to know about integrating the Hybrid Bank Account Verification API.
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

/* ── 9. CTA SECTION (Interactive enterprise 2-column form identical to gst-verification-api) ── */
function CTASection() {
    const apiOptions = [
        "Hybrid Bank Account Verification API",
        "Penny Drop Verification API",
        "Penny-Less Bank Verification API",
        "UPI Failover Routing API",
        "Beneficiary Name Match Engine API",
        "Complete Payout & Banking Suite",
    ];

    const [selectedApis, setSelectedApis] = useState<string[]>([
        "Hybrid Bank Account Verification API",
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
                                Ready to Automate Hybrid Bank Account Verification?
                            </h2>
                            <p className="text-white/80 text-[14px] sm:text-[16px] font-normal leading-relaxed mt-2 mb-6">
                                Get instant API sandbox keys and start verifying bank accounts with 100% failover reliability in sub-seconds.
                            </p>

                            {submitted ? (
                                <div className="bg-emerald-950/60 border border-emerald-500/30 rounded-[20px] p-6 text-center my-6">
                                    <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                                    <h4 className="text-white font-bold text-lg mb-1">Request Received!</h4>
                                    <p className="text-white/80 text-sm">
                                        Our banking API specialist will reach out to you shortly.
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
                                                    ? "All APIs (Complete Banking Suite)"
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

                    {/* Right Column: High-tech Bank API Console Simulator */}
                    <div className="lg:col-span-6 bg-gradient-to-br from-[#0c1428] via-[#091024] to-[#040817] p-7 sm:p-10 lg:p-12 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-center">
                        <div className="rounded-[20px] bg-[#020510] border border-blue-500/25 p-5 sm:p-6 shadow-2xl relative overflow-hidden font-mono text-[12.5px] sm:text-[13.5px]">
                            {/* Terminal top header */}
                            <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/10 font-sans">
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                                    <span className="text-white/60 text-xs ml-2 font-mono">POST /v1/bank/hybrid-verify</span>
                                </div>
                                <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold">
                                    200 OK • 165ms
                                </span>
                            </div>

                            {/* Payload simulator */}
                            <div className="space-y-1.5 text-blue-200">
                                <p className="text-white/50">{"// Official Hybrid Multi-Mode Bank Verification Response"}</p>
                                <p><span className="text-[#ff7b72]">&quot;status&quot;</span>: <span className="text-[#a5d6ff]">&quot;COMPLETED&quot;</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;accountNumber&quot;</span>: <span className="text-[#a5d6ff]">&quot;918234567890&quot;</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;ifsc&quot;</span>: <span className="text-[#a5d6ff]">&quot;SBIN0001234&quot;</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;verificationMode&quot;</span>: <span className="text-[#a5d6ff]">&quot;HYBRID_PENNY_LESS_FAILOVER&quot;</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;failoverActive&quot;</span>: <span className="text-[#79c0ff]">true</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;accountStatus&quot;</span>: <span className="text-[#7ee787]">&quot;ACTIVE&quot;</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;beneficiaryName&quot;</span>: <span className="text-[#a5d6ff]">&quot;RAHUL SHARMA&quot;</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;nameMatchScore&quot;</span>: <span className="text-[#79c0ff]">99</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;nameMatchResult&quot;</span>: <span className="text-[#7ee787]">&quot;EXACT_MATCH&quot;</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;bankName&quot;</span>: <span className="text-[#a5d6ff]">&quot;STATE BANK OF INDIA&quot;</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;branch&quot;</span>: <span className="text-[#a5d6ff]">&quot;CYBER CITY GURUGRAM&quot;</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;upiVpa&quot;</span>: <span className="text-[#a5d6ff]">&quot;rahul.sharma@okaxis&quot;</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;transferModes&quot;</span>: [<span className="text-[#a5d6ff]">&quot;IMPS&quot;</span>, <span className="text-[#a5d6ff]">&quot;NEFT&quot;</span>, <span className="text-[#a5d6ff]">&quot;RTGS&quot;</span>, <span className="text-[#a5d6ff]">&quot;UPI&quot;</span>],</p>
                                <p><span className="text-[#ff7b72]">&quot;rrnRef&quot;</span>: <span className="text-[#a5d6ff]">&quot;422319087612&quot;</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;auditTrail&quot;</span>: <span className="text-[#7ee787]">&quot;NPCI_HYBRID_ENGINE_VERIFIED&quot;</span></p>
                            </div>

                            {/* Bottom badge */}
                            <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between font-sans text-xs text-white/60">
                                <span>DigitalRakshak Hybrid Routing Engine</span>
                                <span className="text-[#76bbf8] flex items-center gap-1">
                                    <ShieldCheck className="w-3.5 h-3.5" /> High Trust Verified
                                </span>
                            </div>
                        </div>

                        <p className="text-white/60 text-xs text-center mt-4">
                            150,000+ Bank Branches • Real-time NPCI failover • Sub-300ms SLA
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ── MAIN EXPORT (Exact 9 Sections Matching gst-verification-api 1:1) ── */
export default function HybridBankAccountVerificationPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Hybrid Bank Account Verification API",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "All",
        "provider": {
            "@type": "Organization",
            "name": "DigitalRakshak",
            "url": "https://digitalrakshak.com",
        },
        "description":
            "Combine Penny Drop, Penny-Less, and instant UPI failover verification into a single intelligent API engine for 100% verification success rate and zero payout bounces.",
        "keywords": [
            "Hybrid Bank Account Verification API",
            "Multi Mode Bank Verification",
            "Penny Drop Failover API",
            "Penny Less Bank Verification",
            "Beneficiary Name Match API",
            "Bank Account Validation API",
            "NPCI IMPS Bank Verification",
            "Zero Payout Bounces API",
            "DigitalRakshak Bank API",
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
