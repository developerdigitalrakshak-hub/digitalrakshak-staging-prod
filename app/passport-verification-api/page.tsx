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
    Building2,
    Landmark,
    Layers,
    Send,
    Terminal,
    Code2,
    Lock,
    Cpu,
    ExternalLink,
    Plane,
    Users,
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
        q: "Q1. What is a Passport Verification API?",
        a: "A Passport Verification API enables businesses to submit passport and applicant-related information through an API request and retrieve available passport-related information through a structured response. It helps integrate passport verification capabilities into digital KYC and customer onboarding workflows.",
    },
    {
        q: "Q2. What information is required to use the Passport Verification API?",
        a: "The documented API request requires the applicant's name, passport number, passport file number, date of birth, date of issue, consent parameter and client reference information through the clientData object.",
    },
    {
        q: "Q3. What information does the Passport Verification API return?",
        a: "The supplied API documentation shows response attributes including file number, given name, surname, application type and application received date. Additional response attributes should be confirmed through the complete API documentation.",
    },
    {
        q: "Q4. What is the request method for the Passport Verification API?",
        a: "The documented Passport Verification endpoint uses the HTTP POST method and accepts a JSON request body.",
    },
    {
        q: "Q5. Is consent required for Passport Verification API?",
        a: "Yes. The supplied API documentation marks the consent parameter as required in the request body. Businesses should follow applicable consent requirements and service-provider terms when initiating requests.",
    },
    {
        q: "Q6. What is the purpose of the clientData parameter?",
        a: "The clientData parameter is an object in the API request that contains a caseId field. Businesses can use this reference to associate API requests with their internal application or customer records.",
    },
    {
        q: "Q7. Can Passport Verification API be integrated with existing business applications?",
        a: "Yes. The API can be integrated into existing applications through its documented endpoint, authentication headers and JSON request structure.",
    },
    {
        q: "Q8. Can the API retrieve passport application information?",
        a: "The supplied API response includes passport application-related attributes such as file number, given name, surname, application type and application received date.",
    },
    {
        q: "Q9. Who can use DigitalRakshak's Passport Verification API?",
        a: "Banks, NBFCs, fintech companies, financial institutions, insurance businesses, digital onboarding platforms and enterprises can explore the API for relevant passport-related KYC and verification requirements.",
    },
    {
        q: "Q10. How can I get access to DigitalRakshak's Passport Verification API?",
        a: "Businesses can contact DigitalRakshak to explore API access, obtain the required credentials and understand the integration requirements.",
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
                                <ScanLine className="w-4 h-4 text-[#76bbf8]" />
                                KYC Verification API
                            </span>
                            <h1 className="text-white text-[clamp(28px,7vw,56px)] font-black leading-[1.1] tracking-tight">
                                Passport Verification API
                            </h1>
                            <p className="text-white text-[15px] sm:text-[18px] lg:text-[22px] font-medium mt-3 sm:mt-4">
                                Simplify Passport Information Verification Through API Integration.
                            </p>
                        </div>

                        <div className="mt-5 sm:mt-8 lg:mt-10">
                            <div className="text-white/90 text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-relaxed max-w-[540px] space-y-3">
                                <p>
                                    Integrate passport verification capabilities into your business applications with DigitalRakshak's Passport Verification API.
                                </p>
                                <p>
                                    Submit applicant and passport-related information through a structured API request, provide the required consent details and retrieve available passport application information through the API response.
                                </p>
                                <p>
                                    Connect passport verification capabilities with your existing KYC, customer onboarding and identity verification workflows.
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
                                <span className="flex items-center gap-1.5"><Globe className="w-4 h-4 text-[#76bbf8]" /> Passport Information</span>
                                <span className="text-white/30 hidden sm:inline">•</span>
                                <span className="flex items-center gap-1.5"><BadgeCheck className="w-4 h-4 text-[#76bbf8]" /> Applicant Details</span>
                                <span className="text-white/30 hidden sm:inline">•</span>
                                <span className="flex items-center gap-1.5"><FileText className="w-4 h-4 text-[#76bbf8]" /> Application Information</span>
                                <span className="text-white/30 hidden sm:inline">•</span>
                                <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-[#76bbf8]" /> API-Based Integration</span>
                            </div>
                        </div>
                    </div>

                    {/* Right – high-tech console screenshots */}
                    <div className="lg:col-span-7 relative flex justify-center lg:justify-end items-center w-full mt-4 lg:mt-0">
                        <div className="flex items-center gap-3 sm:gap-6 md:gap-8 w-full max-w-[650px] lg:max-w-none mx-auto">
                            {/* Main card - left */}
                            <div className="flex-[326] rounded-[16px] sm:rounded-[22px] lg:rounded-[26px] overflow-hidden shadow-2xl border border-white/10 aspect-[326/354] bg-[#f2f4f7] relative group">
                                <img
                                    alt="Passport Verification Dashboard"
                                    className="w-full h-full object-cover object-center"
                                    src={imgFrame19}
                                />
                                <div className="absolute bottom-3 left-3 right-3 bg-[#0a1228]/90 backdrop-blur-md border border-blue-400/30 rounded-xl p-3 flex items-center justify-between text-xs text-white">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                                        <span className="font-semibold text-white/95">Passport Verification Active</span>
                                    </div>
                                    <span className="text-[#76bbf8] font-mono text-[11px] bg-blue-500/20 px-2 py-0.5 rounded-full">
                                        Instant Registry Response
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
        <div className="relative w-full max-w-[260px] mt-6 mx-auto flex-shrink-0 flex flex-col justify-start transition-transform duration-300 hover:-translate-y-1.5 group">
            {/* Top glowing circular badge */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 w-12 h-12 rounded-full bg-[#0088FF]/50 border-2 border-[#38bdf8]/70 shadow-[0_0_22px_rgba(0,136,255,0.65)] backdrop-blur-md flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_28px_rgba(0,136,255,0.9)]">
                <img
                    alt=""
                    src={icon}
                    className="w-6 h-6 object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                />
            </div>

            {/* Card Body */}
            <div className="w-full min-h-[230px] rounded-[18px] bg-[#5173C2]/45 border border-[#6b8cd8]/35 backdrop-blur-md px-4 pt-9 pb-5 text-center sm:text-left flex flex-col justify-start h-full shadow-[0_10px_25px_rgba(0,0,0,0.35)]">
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

/* ── 3. WHAT CAN YOU DO WITH PASSPORT VERIFICATION API? ── */
function WhatCanYouDoSection() {
    const cards = [
        {
            title: "1. Submit Passport Details",
            desc: "Provide the applicant's name and passport number through the API request to initiate the verification process.",
            icon: imgSvgRepoIconCarrier,
        },
        {
            title: "2. Submit Passport File Information",
            desc: "Include the passport file number as part of the required request parameters.",
            icon: imgSvgRepoIconCarrier,
        },
        {
            title: "3. Provide Applicant Details",
            desc: "Submit the applicant's date of birth and date of issue to support the documented passport verification request.",
            icon: imgSvgRepoIconCarrier,
        },
        {
            title: "4. Process Consent Information",
            desc: "Include the required consent parameter as part of the API request before initiating the process.",
            icon: imgSvgRepoIconCarrier,
        },
        {
            title: "5. Retrieve Passport Application Information",
            desc: "Access available passport-related information through the API response, including file number, applicant name and application type.",
            icon: imgSvgRepoIconCarrier,
        },
        {
            title: "6. Maintain Request References",
            desc: "Include a client-side case reference through the clientData object to associate the API request with your internal business workflow.",
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
                    What Can You Do With Passport Verification API?
                </span>
                <h2 className="text-white text-[clamp(24px,4vw,42px)] font-bold text-center tracking-tight mb-3">
                    Access Passport-Related Information Through One API
                </h2>
                <p className="text-white/70 text-[15px] sm:text-[17px] text-center max-w-[700px] mx-auto mb-14 sm:mb-20">
                    Cover different verification and passport data requirements across your business processes.
                </p>

                {/* Cards grid layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
                    {cards.map((c, i) => (
                        <FeatureCard key={i} icon={c.icon} title={c.title} desc={c.desc} />
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ── 4. VERIFICATION CARDS SECTION ── */
function VerificationCardsSection() {
    return (
        <section className="relative py-8 sm:py-12 px-[5%] lg:px-[6%]">
            <div className="relative z-10 max-w-[1240px] mx-auto">
                <h2 className="text-white text-[24px] sm:text-[32px] lg:text-[36px] font-bold text-center tracking-tight mb-3">
                    Structured Verification &amp; Application Information
                </h2>
                <p className="text-white/70 text-[14px] sm:text-[16px] text-center max-w-[650px] mx-auto mb-10 sm:mb-14">
                    Submit applicant details with consent to retrieve official application records and track case references.
                </p>

                {/* Outer Blue Border Box */}
                <div className="relative bg-[#040d24]/70 border-2 border-[#1677ff] rounded-[22px] p-6 sm:p-9 lg:p-12 shadow-[0_0_35px_rgba(22,119,255,0.35)] backdrop-blur-md">
                    <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 divide-y md:divide-y-0 md:divide-x divide-white/15">
                        {/* Required Request Inputs */}
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
                                    Input Parameters Required
                                </h3>
                            </div>
                            <p className="text-white/70 text-[13.5px] font-normal leading-relaxed mb-4 sm:mb-5">
                                Provide the required applicant, passport, and authorization parameters via HTTP POST:
                            </p>
                            <ol className="text-white/90 text-[14px] sm:text-[15px] font-medium leading-[26px] list-decimal list-inside space-y-1.5 pl-1">
                                {[
                                    "Applicant full legal name",
                                    "Passport number (passportNo)",
                                    "Passport file number (fileNo)",
                                    "Applicant date of birth (dob)",
                                    "Date of passport issue (doi)",
                                    "Mandatory consent parameter",
                                    "Client reference object (clientData.caseId)",
                                ].map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ol>
                        </div>

                        {/* Available Response Details */}
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
                                    Available Output Attributes
                                </h3>
                            </div>
                            <p className="text-white/70 text-[13.5px] font-normal leading-relaxed mb-4 sm:mb-5">
                                Access structured passport application details directly through the API response:
                            </p>
                            <ol className="text-white/90 text-[14px] sm:text-[15px] font-medium leading-[26px] list-decimal list-inside space-y-1.5 pl-1">
                                {[
                                    "Passport application file number",
                                    "Applicant given name & surname",
                                    "Application type (Normal / Tatkaal)",
                                    "Application received date",
                                    "Verification status confirmation",
                                    "Client case reference association",
                                    "Request tracking & audit timestamps",
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

/* ── 5. CONNECT PASSPORT VERIFICATION API WITH YOUR EXISTING SYSTEMS ── */
function ConnectAPISection() {
    const workflows = [
        {
            title: "Passenger & Travel Onboarding",
            desc: "Use passport verification as part of traveler validation and international flight booking workflows before issuing tickets or boarding passes.",
        },
        {
            title: "Fintech & NRI Account Opening",
            desc: "Integrate passport-related identity checks into cross-border remittances, foreign account creation, and wealth management.",
        },
        {
            title: "Hospitality & Visa Processing",
            desc: "Automate C-Form filing for foreign hotel guests and streamline student or work visa compliance workflows.",
        },
    ];

    const integrationOptions = [
        "1. Banking and financial applications",
        "2. Fintech and lending platforms",
        "3. NBFC customer onboarding systems",
        "4. Insurance onboarding applications",
        "5. KYC and identity verification platforms",
        "6. Digital customer onboarding applications",
        "7. CRM and enterprise applications",
    ];

    return (
        <section className="relative pt-8 sm:pt-10 lg:pt-12 pb-7 sm:pb-9 px-[5%] lg:px-[6%] overflow-hidden">
            <div className="relative z-10 max-w-[1240px] mx-auto">
                <span className="block text-center text-[#76bbf8] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2">
                    System Integration
                </span>
                <h2 className="text-white text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-center tracking-tight mb-12 sm:mb-16">
                    Bring Passport Verification Into Your Business Applications
                </h2>

                {/* 2-Column Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 items-start justify-items-center">
                    {/* LEFT COLUMN: Blue Box + Integrate with */}
                    <div className="w-full max-w-[543px] flex flex-col">
                        <div className="w-full min-h-[190px] h-auto bg-gradient-to-b from-[#b2daff] to-[#92c8fc] border-2 border-[#54b4ff] rounded-[20px] p-6 sm:p-8 flex items-center shadow-[0_0_35px_rgba(84,180,255,0.45),0_0_12px_rgba(84,180,255,0.3)]">
                            <p className="text-[#081a2e] text-[15px] sm:text-[16px] lg:text-[17px] font-normal leading-[1.65]">
                                Integrate passport verification capabilities into your existing technology infrastructure through DigitalRakshak's API. Incorporate passport-related information into relevant KYC, customer onboarding and identity verification workflows.
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
                            The API service provides secure HTTP POST endpoints, structured JSON responses, and client-side case references.
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

/* ── 6. HOW IT WORKS ── */
function HowItWorksSection() {
    const [activeStep, setActiveStep] = useState<number | null>(1);

    const stepsData = [
        {
            id: 1,
            title: "Step 1. Submit Applicant Information",
            desc: "Provide the applicant's name, passport number, passport file number, date of birth and date of issue through the API request.",
            content: (
                <div className="space-y-2 text-[#4b5563] text-[13.5px] sm:text-[14.5px] leading-relaxed pt-2">
                    <p>Provide the applicant's name, passport number, passport file number, date of birth and date of issue through the API request.</p>
                    <div className="space-y-1.5 pl-3 text-[#374151] font-medium">
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span>Required parameters: name, passportNo, fileNo, dob, doi</span>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            id: 2,
            title: "Step 2. Provide Required Consent",
            desc: "Include the required consent parameter in the request body to initiate the verification process.",
            content: (
                <div className="space-y-2 text-[#4b5563] text-[13.5px] sm:text-[14.5px] leading-relaxed pt-2">
                    <p>Include the required consent parameter in the request body to initiate the verification process in compliance with applicable standards.</p>
                </div>
            ),
        },
        {
            id: 3,
            title: "Step 3. Authenticate Your API Request",
            desc: "Include the required Authorization token, API key and Content-Type headers.",
            content: (
                <div className="space-y-2 text-[#4b5563] text-[13.5px] sm:text-[14.5px] leading-relaxed pt-2">
                    <p>Include the required Authorization token, API key and Content-Type headers in your request headers.</p>
                    <div className="space-y-1.5 pl-3 text-[#374151] font-medium">
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span>Authorization: Bearer Token</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span>API Credential: API Key header</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span>Content-Type: application/json</span>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            id: 4,
            title: "Step 4. Initiate Passport Verification",
            desc: "Send the POST request to the DigitalRakshak Passport Verification API endpoint with the required applicant and passport information.",
            content: (
                <div className="space-y-2 text-[#4b5563] text-[13.5px] sm:text-[14.5px] leading-relaxed pt-2">
                    <p>Send the POST request to the DigitalRakshak Passport Verification API endpoint with the required applicant and passport information along with clientData.</p>
                </div>
            ),
        },
        {
            id: 5,
            title: "Step 5. Retrieve Available Passport Information",
            desc: "Receive the API response containing available passport application details, including file number, given name, surname and application type.",
            content: (
                <div className="space-y-2 text-[#4b5563] text-[13.5px] sm:text-[14.5px] leading-relaxed pt-2">
                    <p>Receive the API response containing available passport application details, including file number, given name, surname and application type.</p>
                </div>
            ),
        },
        {
            id: 6,
            title: "Step 6. Integrate Into Your KYC Workflow",
            desc: "Use the returned information within your existing customer onboarding, identity verification and business applications.",
            content: (
                <div className="space-y-2 text-[#4b5563] text-[13.5px] sm:text-[14.5px] leading-relaxed pt-2">
                    <p>Use the returned information within your existing customer onboarding, identity verification and business applications to streamline compliance checks.</p>
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
                        How DigitalRakshak's Passport Verification API Works
                    </h2>
                    <p className="text-white/70 text-[14px] sm:text-[16px] max-w-[650px] mx-auto mt-2">
                        Seamless integration flow from submitting applicant parameters to retrieving verified passport records.
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
                                    STEP {activeStep ?? 1} OF 6
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
                                        <span>Action: PASSPORT_VERIFY</span>
                                        <span className="text-emerald-400 font-mono">Status: Connected</span>
                                    </div>
                                </div>

                                <div className="p-3.5 bg-black/40 rounded-xl border border-white/10 text-xs font-mono text-blue-200 space-y-1">
                                    <p className="text-white/40">// Request Spec</p>
                                    <p><span className="text-[#ff7b72]">&quot;method&quot;</span>: <span className="text-[#a5d6ff]">&quot;POST&quot;</span>,</p>
                                    <p><span className="text-[#ff7b72]">&quot;auth&quot;</span>: <span className="text-[#a5d6ff]">&quot;Bearer Token&quot;</span>,</p>
                                    <p><span className="text-[#ff7b72]">&quot;passportNo&quot;</span>: <span className="text-[#a5d6ff]">&quot;Z5892341&quot;</span>,</p>
                                    <p><span className="text-[#ff7b72]">&quot;consent&quot;</span>: <span className="text-[#7ee787]">&quot;Y&quot;</span></p>
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

/* ── 7. KEY BENEFITS FOR YOUR BUSINESS ── */
function KeyBenefitsSection() {
    const benefits = [
        {
            title: "1. API-Based Passport Verification",
            desc: "Initiate passport-related verification requests directly through a structured API request.",
        },
        {
            title: "2. Structured Information Retrieval",
            desc: "Retrieve available passport application details in a structured API response.",
        },
        {
            title: "3. Integrated Consent Parameter",
            desc: "Include the required consent information as part of the documented API request structure.",
        },
        {
            title: "4. Simplified System Integration",
            desc: "Connect passport verification capabilities with your existing business applications and digital onboarding platforms.",
        },
        {
            title: "5. Developer-Friendly API",
            desc: "Use a defined endpoint, authentication headers and request parameters to integrate passport verification into your applications.",
        },
        {
            title: "6. Request Reference Management",
            desc: "Use the client-side case ID to associate API requests with your internal customer or application records.",
        },
    ];

    return (
        <section id="why-choose-us" className="relative py-12 sm:py-16 px-[5%] lg:px-[6%]">
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
                            Key Benefits For Your Business
                        </span>
                        <h2 className="text-white text-[clamp(24px,3vw,40px)] font-bold leading-tight mt-1 mb-6">
                            Simplify Passport Information Verification Through API Integration
                        </h2>
                        <p className="text-white text-[15px] sm:text-[16px] lg:text-[18px] font-normal leading-relaxed mb-6">
                            Manual passport checks and physical document handling are slow and error-prone. DigitalRakshak provides scalable, API-first passport verification capabilities:
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
                                alt="Passport Verification Dashboard"
                                className="w-full h-auto rounded-[18px] object-cover block"
                                src={imgFrame20}
                            />
                        </div>

                        {/* Right column: 2 stacked cards */}
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
                                DigitalRakshak works across verification, compliance, and enterprise document integrity.
                            </p>
                            <p className="text-white/70 text-[14px] leading-relaxed">
                                The goal is simple: help businesses automate identity checks and passport verification in a way that works seamlessly with their existing platforms and workflows.
                            </p>
                        </div>

                        <div className="lg:col-span-7 bg-[#050b1a]/60 border border-white/10 rounded-[20px] p-6 sm:p-7">
                            <p className="text-white/90 text-[14px] sm:text-[15px] font-semibold mb-4 text-[#B0DAFF]">
                                For Passport Verification, we bring together:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    "API-Based Passport Verification",
                                    "Structured Information Retrieval",
                                    "Integrated Consent Parameter",
                                    "Simplified System Integration",
                                    "Developer-Friendly REST API",
                                    "Request Reference (caseId) Management",
                                    "Sandbox Environment & Complete Schemas",
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

/* ── 8. USE CASES ── */
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
                    id="cardGlowLinearBasePassport"
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
                    id="cardGlowRadLeftPassport"
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
                    id="cardGlowRadRightPassport"
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

            <rect width="100%" height="100%" fill="url(#cardGlowLinearBasePassport)" />
            <rect width="100%" height="100%" fill="url(#cardGlowRadLeftPassport)" />
            <rect width="100%" height="100%" fill="url(#cardGlowRadRightPassport)" />
        </svg>
    );
}

function IndustryUseCasesSection() {
    const useCases = [
        {
            title: "Banking & Financial Services",
            desc: "Incorporate passport-related information into relevant customer KYC and identity verification workflows.",
            icon: Landmark,
        },
        {
            title: "Fintech & Lending Platforms",
            desc: "Use passport-related verification capabilities as part of digital customer onboarding processes.",
            icon: Briefcase,
        },
        {
            title: "NBFCs & Financial Institutions",
            desc: "Integrate passport information checks into existing customer identification and KYC applications.",
            icon: Building2,
        },
        {
            title: "Insurance Companies",
            desc: "Incorporate passport-related information into relevant customer onboarding and identity verification workflows.",
            icon: ShieldCheck,
        },
        {
            title: "Digital Onboarding Platforms",
            desc: "Connect passport verification capabilities with existing digital identity collection and onboarding processes.",
            icon: Zap,
        },
        {
            title: "Enterprise KYC Systems",
            desc: "Integrate passport-related information retrieval into enterprise verification and customer management applications.",
            icon: Layers,
        },
    ];

    return (
        <section id="use-cases" className="relative py-12 sm:py-16 px-[5%] lg:px-[6%] overflow-hidden bg-black">
            {/* Background ambient lighting */}
            <div className="absolute right-[5%] top-[10%] w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute left-[5%] bottom-[10%] w-[500px] h-[500px] bg-indigo-900/15 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-[1320px] mx-auto relative z-10">
                <span className="block text-center text-[#76bbf8] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2">
                    Industry Applications
                </span>
                <h2 className="text-white text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-center tracking-tight mb-3">
                    Where Can Businesses Use Passport Verification API?
                </h2>
                <p className="text-white/70 text-[15px] sm:text-[17px] text-center max-w-[650px] mx-auto mb-12 sm:mb-16">
                    See how different sectors utilize our API-based passport verification to accelerate onboarding workflows.
                </p>

                {/* 6 Cards Responsive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 justify-items-center">
                    {useCases.map((benefit, idx) => (
                        <div
                            key={idx}
                            className="relative w-full max-w-[406px] min-h-[260px] sm:min-h-[280px] rounded-[18px] border-[2px] border-[#DFC6FF] p-6 sm:p-8 flex flex-col justify-start overflow-hidden group hover:scale-[1.015] hover:shadow-[0_0_35px_rgba(223,198,255,0.3)] transition-all duration-300"
                        >
                            <BenefitCardGlow />

                            {/* Icon and Title */}
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

                {/* Summary Banner */}
                <div className="mt-12 bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 text-center max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-4 shadow-2xl">
                    <span className="font-semibold text-base sm:text-lg text-slate-200">Key Benefits summary:</span>
                    <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-300">
                        <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> API-based passport verification</span>
                        <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Structured information retrieval</span>
                        <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Integrated consent parameter</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ── 9. API INTEGRATION REQUIREMENTS ── */
function ApiRequirementsSection() {
    const requirements = [
        { name: "API Method", value: "POST" },
        { name: "Authentication", value: "Bearer Token" },
        { name: "API Credential", value: "API Key" },
        { name: "Content Type", value: "application/json" },
        { name: "Required Inputs", value: "name, passportNo, fileNo, dob, doi, consent, clientData" },
        { name: "Client Reference", value: "caseId" },
        { name: "Request Format", value: "JSON" },
        { name: "Environment Shown", value: "Sandbox" },
    ];

    const integrationSteps = [
        "1. Obtain DigitalRakshak API access credentials.",
        "2. Collect the required applicant and passport information.",
        "3. Configure the Authorization token and API key.",
        "4. Include the required consent parameter.",
        "5. Provide the client-side case reference within clientData.",
        "6. Send the POST request to the Passport Verification API endpoint.",
        "7. Retrieve and process the available passport information within your application.",
    ];

    return (
        <section id="integration-requirements" className="relative py-12 sm:py-16 px-[5%] lg:px-[6%]">
            <div className="max-w-[1240px] mx-auto">
                <div className="text-center mb-10 sm:mb-14">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3">
                        <Code2 className="w-4 h-4 text-[#76bbf8]" />
                        Technical Specifications
                    </span>
                    <h2 className="text-white text-[28px] sm:text-[34px] lg:text-[42px] font-bold tracking-tight">
                        Get Started With DigitalRakshak Passport Verification API
                    </h2>
                    <p className="text-white/70 text-[15px] sm:text-[17px] max-w-[700px] mx-auto mt-2">
                        Integrate passport verification capabilities into your applications using the documented API request structure.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {/* Requirements Table */}
                    <div className="lg:col-span-7 bg-[#070e22]/90 border border-blue-500/30 rounded-[24px] p-6 sm:p-8 backdrop-blur-md shadow-2xl">
                        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                            <h3 className="text-white font-bold text-lg sm:text-xl flex items-center gap-2">
                                <Terminal className="w-5 h-5 text-[#76bbf8]" />
                                Integration Requirements
                            </h3>
                            <span className="text-xs font-mono text-[#76bbf8] bg-blue-500/20 px-3 py-1 rounded-full">
                                REST API v1
                            </span>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm text-white/90">
                                <thead>
                                    <tr className="border-b border-white/10 text-white/60 text-xs uppercase tracking-wider font-semibold">
                                        <th className="py-3 px-4">Requirement</th>
                                        <th className="py-3 px-4">Details</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5 font-mono text-[13px] sm:text-[14px]">
                                    {requirements.map((req, idx) => (
                                        <tr key={idx} className="hover:bg-white/5 transition-colors">
                                            <td className="py-3.5 px-4 font-sans font-medium text-white/80">
                                                {req.name}
                                            </td>
                                            <td className="py-3.5 px-4 text-[#76bbf8] font-bold">
                                                {req.value}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Integration Process */}
                        <div className="mt-8 pt-6 border-t border-white/10">
                            <h4 className="text-white font-bold text-[16px] sm:text-[17px] mb-3">
                                Integration Process
                            </h4>
                            <div className="space-y-2 text-white/85 text-[13.5px] sm:text-[14px] leading-relaxed">
                                {integrationSteps.map((step, idx) => (
                                    <div key={idx} className="flex items-start gap-2.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#76bbf8] shrink-0 mt-2" />
                                        <span>{step}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 mt-8 pt-4 border-t border-white/10">
                            <a
                                href="#contact"
                                className="bg-[#B0DAFF] hover:bg-[#76bbf8] text-[#0a1e36] font-semibold text-sm px-6 py-2.5 rounded-[14px] transition-all flex items-center gap-2"
                            >
                                <span>Get API Access</span>
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <a
                                href="#contact"
                                className="bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-6 py-2.5 rounded-[14px] border border-white/15 transition-all flex items-center gap-2"
                            >
                                <span>View API Documentation</span>
                                <ExternalLink className="w-4 h-4 text-white/70" />
                            </a>
                        </div>
                    </div>

                    {/* Quick JSON Request / Response Preview */}
                    <div className="lg:col-span-5 bg-[#030712] border border-white/10 rounded-[24px] p-6 shadow-2xl font-mono text-xs text-blue-200 space-y-4">
                        <div>
                            <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-white/60 text-[11px] font-sans">
                                <span>Sample Request Payload</span>
                                <span className="text-emerald-400">POST /v1/passport/verify</span>
                            </div>
                            <pre className="text-[#a5d6ff] leading-relaxed overflow-x-auto p-2 bg-black/60 rounded-xl">
{`{
  "name": "ANANYA VERMA",
  "passportNo": "Z5892341",
  "fileNo": "BOMP01234567",
  "dob": "1994-08-16",
  "doi": "2022-05-20",
  "consent": "Y",
  "clientData": {
    "caseId": "CASE-1082"
  }
}`}
                            </pre>
                        </div>

                        <div>
                            <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-white/60 text-[11px] font-sans">
                                <span>Passport Application Response</span>
                                <span className="text-[#76bbf8]">200 OK</span>
                            </div>
                            <pre className="text-emerald-300 leading-relaxed overflow-x-auto p-2 bg-black/60 rounded-xl">
{`{
  "status": "SUCCESS",
  "fileNumber": "BOMP01234567",
  "givenName": "ANANYA",
  "surname": "VERMA",
  "applicationType": "NORMAL",
  "appReceivedDate": "2022-05-10",
  "clientData": {
    "caseId": "CASE-1082"
  }
}`}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ── 10. FREQUENTLY ASKED QUESTIONS ── */
function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faqs" className="relative py-12 sm:py-16 px-[5%] lg:px-[6%]">
            <div className="max-w-[1400px] mx-auto">
                <span className="text-[#76bbf8] text-xs sm:text-sm font-semibold uppercase tracking-wider block mb-2">
                    Got Questions?
                </span>
                <h2 className="text-white text-[clamp(28px,3vw,42px)] font-bold mb-2 tracking-tight">
                    Passport Verification API – Frequently Asked Questions
                </h2>
                <p className="text-white/70 text-[15px] sm:text-[17px] mb-10">
                    Everything you need to know about our Passport Verification API capabilities, fields, and integration.
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
        "Passport Verification API",
        "MRZ 2 & 3-Line OCR API",
        "Passport Application Verification API",
        "Travel KYC Suite",
        "Official Registry Lookup API",
        "Global Identity Verification Suite",
    ];

    const [selectedApis, setSelectedApis] = useState<string[]>([
        "Passport Verification API",
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
                                Transform Your Passport Verification
                            </h2>
                            <p className="text-white/80 text-[14px] sm:text-[16px] font-normal leading-relaxed mt-2 mb-6">
                                Stop relying on slow and error-prone manual document checks. Integrate DigitalRakshak's Passport Verification API to bring speed, intelligence, and automation to your identity verification.
                            </p>

                            {submitted ? (
                                <div className="bg-emerald-950/60 border border-emerald-500/30 rounded-[20px] p-6 text-center my-6">
                                    <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                                    <h4 className="text-white font-bold text-lg mb-1">Request Received!</h4>
                                    <p className="text-white/80 text-sm">
                                        Our passport enterprise API specialist will reach out to you shortly.
                                    </p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {/* Select Requirement - API List */}
                                    <div className="relative">
                                        <label className="block text-white/90 text-[13.5px] font-medium mb-1.5">
                                            Select Requirement - Passport API List:
                                        </label>
                                        <button
                                            type="button"
                                            onClick={() => setDropdownOpen(!dropdownOpen)}
                                            className="w-full flex items-center justify-between bg-[#151c30] text-white text-[14px] sm:text-[15px] rounded-[16px] px-4 py-3 border border-white/15 hover:border-blue-400/50 transition-colors text-left"
                                        >
                                            <span className="truncate pr-2">
                                                {isAllSelected
                                                    ? "All APIs (Complete Passport Suite)"
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

                    {/* Right Column: High-tech Passport API Simulator */}
                    <div className="lg:col-span-6 bg-gradient-to-br from-[#0c1428] via-[#091024] to-[#040817] p-7 sm:p-10 lg:p-12 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-center">
                        <div className="rounded-[20px] bg-[#020510] border border-blue-500/25 p-5 sm:p-6 shadow-2xl relative overflow-hidden font-mono text-[12px] sm:text-[13px]">
                            {/* Terminal top header */}
                            <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/10 font-sans">
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                                    <span className="text-white/60 text-xs ml-2 font-mono">POST /v1/passport/verify</span>
                                </div>
                                <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold">
                                    200 OK • Sandbox
                                </span>
                            </div>

                            {/* Payload simulator reflecting document fields */}
                            <div className="space-y-1 text-blue-200">
                                <p className="text-white/50">{"// Passport Verification Response"}</p>
                                <p><span className="text-[#ff7b72]">&quot;status&quot;</span>: <span className="text-[#a5d6ff]">&quot;SUCCESS&quot;</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;fileNumber&quot;</span>: <span className="text-[#a5d6ff]">&quot;BOMP01234567&quot;</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;givenName&quot;</span>: <span className="text-[#a5d6ff]">&quot;ANANYA&quot;</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;surname&quot;</span>: <span className="text-[#a5d6ff]">&quot;VERMA&quot;</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;applicationType&quot;</span>: <span className="text-[#a5d6ff]">&quot;NORMAL&quot;</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;appReceivedDate&quot;</span>: <span className="text-[#a5d6ff]">&quot;2022-05-10&quot;</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;clientData&quot;</span>: &#123;</p>
                                <div className="pl-4">
                                    <p><span className="text-[#ff7b72]">&quot;caseId&quot;</span>: <span className="text-[#7ee787]">&quot;CASE-1082&quot;</span></p>
                                </div>
                                <p>&#125;</p>
                            </div>

                            {/* Bottom badge */}
                            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between font-sans text-xs text-white/60">
                                <span>DigitalRakshak Verification Engine</span>
                                <span className="text-[#76bbf8] flex items-center gap-1">
                                    <ShieldCheck className="w-3.5 h-3.5" /> High Trust Verified
                                </span>
                            </div>
                        </div>

                        <p className="text-white/60 text-xs text-center mt-4">
                            Applicant details verification • File number tracking • Client case association
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function PassportVerificationApiPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Passport Verification API for Businesses",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "All",
        "provider": {
            "@type": "Organization",
            "name": "DigitalRakshak",
            "url": "https://digitalrakshak.com",
        },
        "description":
            "Integrate DigitalRakshak's Passport Verification API to submit applicant details and retrieve available passport application information for KYC workflows.",
        "keywords": [
            "Passport Verification API",
            "Passport Verification API India",
            "Passport Verification Services",
            "Passport Data Verification API",
            "Passport Details Verification API",
            "Digital Passport Verification",
            "Passport KYC API",
            "Online Passport Verification API",
            "Passport Application Verification API",
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

            {/* WHAT CAN YOU DO WITH PASSPORT VERIFICATION API? */}
            <WhatCanYouDoSection />

            {/* VERIFICATION DETAILS SECTION */}
            <VerificationCardsSection />

            {/* 5. CONNECT PASSPORT VERIFICATION API WITH YOUR EXISTING SYSTEMS */}
            <ConnectAPISection />

            {/* 6. HOW IT WORKS */}
            <HowItWorksSection />

            {/* 7. KEY BENEFITS FOR YOUR BUSINESS */}
            <KeyBenefitsSection />

            {/* 8. USE CASES */}
            <IndustryUseCasesSection />

            {/* 9. API INTEGRATION REQUIREMENTS */}
            <ApiRequirementsSection />

            {/* 10. FREQUENTLY ASKED QUESTIONS */}
            <FAQSection />

            {/* CTA & INTERACTIVE SIMULATOR */}
            <CTASection />
        </div>
    );
}
