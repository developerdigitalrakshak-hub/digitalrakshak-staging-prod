"use client";

import { useState } from "react";
import {
    Globe,
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
    ShieldAlert,
    Server,
    Lock,
    Activity,
    CreditCard,
    Users,
    Briefcase,
    Search,
    MapPin,
    Network,
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
        q: "1. What is the IP Quality Check API?",
        a: "The IP Quality Check API evaluates visitor IP addresses in real time to detect proxies, VPNs, Tor nodes, bot traffic, and malicious intent before processing transactions or user registrations.",
    },
    {
        q: "2. How fast is the API response latency?",
        a: "Our global IP intelligence engine processes queries in under 50ms, ensuring zero impact on your user experience or page load speed.",
    },
    {
        q: "3. Can the API detect residential VPNs and proxies?",
        a: "Yes! Our database continuously updates residential, mobile, and datacenter proxy IP signatures to accurately flag anonymizers.",
    },
    {
        q: "4. How do I integrate the API into my platform?",
        a: "You can integrate via clean REST API endpoints or server-side middleware in Node.js, Python, PHP, Java, or Go within minutes.",
    },
    {
        q: "5. Which IP address formats and protocols are supported?",
        a: "Our API supports both IPv4 and IPv6 addresses, with automatic detection of CDN headers (Cloudflare, Fastly, AWS CloudFront) and reverse proxy configurations.",
    },
    {
        q: "6. What threat indicators and fraud scores are returned in the response?",
        a: "The API returns a dynamic 0-100 fraud score, proxy/VPN/Tor classification, bot detection flags, ISP name, ASN, connection type, geolocation data, and recommended security actions.",
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

            {/* Center Hero content - fits on screen */}
            <div className="relative z-10 flex-1 flex items-center py-4 lg:py-8">
                <div className="w-full max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-8 xl:gap-12 items-center">
                    {/* Left content */}
                    <div className="lg:col-span-5 flex flex-col justify-between text-left">
                        <div>
                            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3">
                                Enterprise IP Reputation &amp; Threat Intelligence
                            </span>
                            <h1 className="text-white text-[clamp(28px,7vw,56px)] font-black leading-[1.1] tracking-tight">
                                IP Quality Check<br />API
                            </h1>
                            <p className="text-white text-[15px] sm:text-[18px] lg:text-[22px] font-medium mt-3 sm:mt-4">
                                Real-time IP reputation scoring, VPN/Proxy/Tor detection, and bot defense.
                            </p>
                        </div>

                        <div className="mt-5 sm:mt-8 lg:mt-10">
                            <p className="text-white/90 text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-relaxed max-w-[540px]">
                                Real-time IP reputation scoring, VPN/Proxy/Tor detection, geolocation mapping, and bot risk scoring to safeguard your web applications and API endpoints.
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
                                <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-[#76bbf8]" /> &lt; 50ms Latency</span>
                                <span className="text-white/30 hidden sm:inline">•</span>
                                <span className="flex items-center gap-1.5"><Globe className="w-4 h-4 text-[#76bbf8]" /> Real-time Threat DB</span>
                                <span className="text-white/30 hidden sm:inline">•</span>
                                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#76bbf8]" /> 99.99% SLA</span>
                                <span className="text-white/30 hidden sm:inline">•</span>
                                <span className="flex items-center gap-1.5"><Server className="w-4 h-4 text-[#76bbf8]" /> VPN / Tor / Proxy</span>
                            </div>
                        </div>
                    </div>

                    {/* Right – product screenshots (identical to gst-verification-api) */}
                    <div className="lg:col-span-7 relative flex justify-center lg:justify-end items-center w-full mt-4 lg:mt-0">
                        <div className="flex items-center gap-3 sm:gap-6 md:gap-8 w-full max-w-[650px] lg:max-w-none mx-auto">
                            {/* Main card - left */}
                            <div className="flex-[326] rounded-[16px] sm:rounded-[22px] lg:rounded-[26px] overflow-hidden shadow-2xl border border-white/10 aspect-[326/354] bg-[#f2f4f7]">
                                <img
                                    alt="IP Quality Check Dashboard"
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
            title: "1. Proxy & VPN Detection",
            desc: "Identify datacenter proxies, residential VPNs, Tor exit nodes, and anonymous connections in real time.",
            icon: imgSvgRepoIconCarrier,
        },
        {
            title: "2. Bot & Abuse Risk Score",
            desc: "Calculate dynamic 0-100 fraud scores to block automated botnets, web scrapers, and malicious traffic.",
            icon: imgSvgRepoIconCarrier,
        },
        {
            title: "3. Geolocation Intelligence",
            desc: "Accurate ISO country code, state, city, ISP name, ASN, and geographic coordinate lookup.",
            icon: imgSvgRepoIconCarrier,
        },
        {
            title: "4. Account Takeover Defense",
            desc: "Detect suspicious multi-account signups, credential stuffing, and location anomalies.",
            icon: imgSvgRepoIconCarrier,
        },
        {
            title: "5. Sub-50ms Threat Audit",
            desc: "Real-time query processing in under 50ms ensuring zero latency impact on user transactions.",
            icon: imgSvgRepoIconCarrier,
        },
    ];

    return (
        <section id="api-product" className="relative pt-10 sm:pt-14 pb-8 sm:pb-12 px-[5%] lg:px-[6%]">
            {/* Ellipse 19 glow (same as gst-verification-api) */}
            <div className="absolute left-[-10%] top-[-10%] w-full max-w-[848px] pointer-events-none select-none opacity-70 mix-blend-screen">
                <img
                    alt=""
                    className="w-full h-full object-contain"
                    src={imgEllipse19}
                />
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto">
                <h2 className="text-white text-[clamp(24px,4vw,42px)] font-bold text-center tracking-tight mb-3">
                    What Can You Do with IP Quality Check
                </h2>
                <p className="text-white/70 text-[15px] sm:text-[17px] text-center max-w-[700px] mx-auto mb-14 sm:mb-20">
                    Proactively identify high-risk IP addresses before bad actors exploit your platforms, apps, and API endpoints.
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
                    Comprehensive IP Quality Output Parameters
                </h2>
                <p className="text-white/70 text-[14px] sm:text-[16px] text-center max-w-[650px] mx-auto mb-10 sm:mb-14">
                    Authoritative IP reputation indicators and threat telemetry extracted in real time.
                </p>

                {/* Outer Blue Border Box */}
                <div className="relative bg-[#040d24]/70 border-2 border-[#1677ff] rounded-[22px] p-6 sm:p-9 lg:p-12 shadow-[0_0_35px_rgba(22,119,255,0.35)] backdrop-blur-md">
                    <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 divide-y md:divide-y-0 md:divide-x divide-white/15">
                        {/* Core IP Reputation & Anonymizer Detection */}
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
                                    Core IP Reputation &amp; Anonymizer Detection
                                </h3>
                            </div>
                            <p className="text-white/70 text-[13.5px] font-normal leading-relaxed mb-4 sm:mb-5">
                                Essential network telemetry and proxy identification.
                            </p>
                            <ol className="text-white/90 text-[14px] sm:text-[15px] font-medium leading-[26px] list-decimal list-inside space-y-1.5 pl-1">
                                {[
                                    "Client IP Address & Version (IPv4 / IPv6 classification)",
                                    "Overall Fraud Risk Score (Dynamic 0 to 100 risk calculation)",
                                    "Proxy & VPN Status (Datacenter proxy, residential VPN, Tor exit node detection)",
                                    "Connection Type & Carrier (Residential, corporate, wireless, or datacenter)",
                                    "Autonomous System Number (ASN) & Organization name lookup",
                                    "Hostname, reverse DNS lookup & domain telemetry indicators",
                                ].map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ol>
                        </div>

                        {/* Geolocation & Threat Intelligence */}
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
                                    Geolocation &amp; Threat Intelligence
                                </h3>
                            </div>
                            <p className="text-white/70 text-[13.5px] font-normal leading-relaxed mb-4 sm:mb-5">
                                Deep threat intelligence and geographic mapping.
                            </p>
                            <ol className="text-white/90 text-[14px] sm:text-[15px] font-medium leading-[26px] list-decimal list-inside space-y-1.5 pl-1">
                                {[
                                    "Geolocation Mapping (Country ISO, state, city, postal code, latitude/longitude)",
                                    "Botnet & Abuse History (DDoS participation, spammer list, web scraping flags)",
                                    "Account Takeover & Credential Stuffing Risk Flag",
                                    "Timezone, currency, and local connection coordinates",
                                    "Sub-50ms ultra-low latency response for seamless inline API gateway filtering",
                                    "Comprehensive audit trail for cybersecurity, compliance, and fraud reporting",
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
            title: "Account Takeover & Signup Fraud",
            desc: "Detect suspicious multi-account signups, credential stuffing attempts, and location anomalies during user onboarding.",
        },
        {
            title: "Payment Fraud & Chargeback Prevention",
            desc: "Block transactions originating from residential VPNs, commercial datacenters, or high-risk geographic locations before payment gateway submission.",
        },
        {
            title: "Bot & Scraper Traffic Mitigation",
            desc: "Automatically challenge or block automated scrapers, credential stuffing bots, and DDoS vectors in sub-50ms.",
        },
    ];

    return (
        <section className="relative pt-8 sm:pt-10 lg:pt-12 pb-7 sm:pb-9 px-[5%] lg:px-[6%] overflow-hidden">
            <div className="relative z-10 max-w-[1240px] mx-auto">
                {/* Section Heading */}
                <h2 className="text-white text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-center tracking-tight mb-12 sm:mb-16">
                    Connect IP Quality Check API With Your Existing System
                </h2>

                {/* 2-Column Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 items-start justify-items-center">
                    {/* LEFT COLUMN: Blue Box + Integrate with */}
                    <div className="w-full max-w-[543px] flex flex-col">
                        <div className="w-full min-h-[190px] h-auto bg-gradient-to-b from-[#b2daff] to-[#92c8fc] border-2 border-[#54b4ff] rounded-[20px] p-6 sm:p-8 flex items-center shadow-[0_0_35px_rgba(84,180,255,0.45),0_0_12px_rgba(84,180,255,0.3)]">
                            <p className="text-[#081a2e] text-[15px] sm:text-[16px] lg:text-[17px] font-normal leading-[1.65]">
                                Proactively identify high-risk IP addresses before bad actors exploit your platforms. DigitalRakshak evaluates visitor IP addresses in real time to detect proxies, VPNs, Tor nodes, bot traffic, and malicious intent before processing transactions or user registrations.
                            </p>
                        </div>

                        <h4 className="text-white font-bold text-[18px] sm:text-[20px] mt-8 mb-4">
                            Integrate with:
                        </h4>

                        <div className="space-y-3 text-white/90 text-[14px] sm:text-[15px] font-medium pl-1">
                            <div>1. API gateways &amp; Cloudflare / Nginx reverse proxies</div>
                            <div>2. User registration, login &amp; authentication workflows</div>
                            <div>3. E-commerce checkout &amp; payment fraud defense engines</div>
                            <div>4. FinTech transaction monitoring &amp; anti-fraud microservices</div>
                            <div>5. Web application firewalls (WAF) &amp; rate-limiting systems</div>
                            <div>6. AdTech click-fraud prevention &amp; bot-traffic filtering</div>
                        </div>

                        <p className="text-white/80 text-[13.5px] sm:text-[14.5px] leading-relaxed mt-6 pl-1">
                            The IP Quality Check API provides webhook and real-time pass-through capabilities for inline threat mitigation.
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

/* ── 5. HOW IT WORKS (Identical interactive step-toggle to gst-verification-api) ── */
function HowItWorksSection() {
    const [activeStep, setActiveStep] = useState<number | null>(1);

    const stepsData = [
        {
            id: 1,
            title: "1. Submit Client IP",
            image: "/images/how-it-works-step.png",
            content: (
                <div className="space-y-2 text-[#4b5563] text-[13.5px] sm:text-[14.5px] leading-relaxed pt-2">
                    <p>
                        Pass the visitor&apos;s IP address automatically via REST API call or middleware request header.
                    </p>
                    <p className="font-medium text-[#1f2937]">Supported inputs include:</p>
                    <div className="space-y-1.5 pl-3 text-[#374151]">
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span>1. IPv4 and IPv6 client addresses</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span>2. X-Forwarded-For or True-Client-IP headers</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span>3. Real-time stream or batch query requests</span>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            id: 2,
            title: "2. Real-Time Threat Scan",
            image: "/images/how-it-works-step.png",
            content: (
                <div className="space-y-2 text-[#4b5563] text-[13.5px] sm:text-[14.5px] leading-relaxed pt-2">
                    <p>
                        Our system queries global IP threat databases, proxy blacklists, and ISP registries.
                    </p>
                    <p className="text-[#1f2937] font-medium">
                        Continuous synchronization with global threat telemetry feeds.
                    </p>
                </div>
            ),
        },
        {
            id: 3,
            title: "3. Anonymizer & Proxy Detection",
            image: "/images/how-it-works-step.png",
            content: (
                <div className="space-y-2 text-[#4b5563] text-[13.5px] sm:text-[14.5px] leading-relaxed pt-2">
                    <p>
                        Identify datacenter proxies, residential VPNs, mobile proxies, Tor exit nodes, and anonymous connections with machine-learning heuristics.
                    </p>
                    <div className="space-y-1.5 pl-3 text-[#374151] font-medium">
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span>1. Datacenter vs residential IP discrimination</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span>2. Active Tor directory exit node correlation</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span>3. Commercial VPN server IP fingerprinting</span>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            id: 4,
            title: "4. Geolocation & ASN Analysis",
            image: "/images/how-it-works-step.png",
            content: (
                <div className="space-y-2 text-[#4b5563] text-[13.5px] sm:text-[14.5px] leading-relaxed pt-2">
                    <p>
                        Extract verified country, region, city, ISP name, ASN, and organizational ownership data to establish geographic consistency.
                    </p>
                </div>
            ),
        },
        {
            id: 5,
            title: "5. Receive Risk Score",
            image: "/images/how-it-works-step.png",
            content: (
                <div className="space-y-2 text-[#4b5563] text-[13.5px] sm:text-[14.5px] leading-relaxed pt-2">
                    <p>
                        Get sub-50ms JSON output containing fraud score, VPN/Tor flags, and geolocation data.
                    </p>
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
                <h2 className="text-white text-[28px] sm:text-[34px] lg:text-[40px] font-bold text-center tracking-tight mb-12 sm:mb-16">
                    How IP Quality Check Works
                </h2>

                {/* 2-Column Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
                    {/* Left Column: Image Card */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-start">
                        <div className="w-full max-w-[420px] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/10 relative bg-[#0b101d]">
                            <img
                                key={activeImage}
                                src={activeImage}
                                alt="How it works illustration"
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
                {/* Top Section: Why Real-Time IP Threat Intelligence is Essential */}
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    <div className="lg:col-span-5">
                        <h2 className="text-white text-[clamp(24px,3vw,40px)] font-bold leading-tight mb-6">
                            Why Real-Time IP Threat Intelligence is Essential
                        </h2>
                        <p className="text-white text-[15px] sm:text-[16px] lg:text-[18px] font-normal leading-relaxed mb-4">
                            Proactively identify high-risk IP addresses before bad actors exploit your platforms. Real-time IP reputation scoring, VPN/Proxy/Tor detection, geolocation mapping, and bot risk scoring safeguard your web applications and API endpoints.
                        </p>
                        <p className="text-white text-[15px] sm:text-[16px] lg:text-[18px] font-normal leading-relaxed mb-4">
                            DigitalRakshak&apos;s IP Quality Check API continuously updates residential, mobile, and datacenter proxy IP signatures to accurately flag anonymizers and stop malicious traffic:
                        </p>
                        <ul className="text-white/90 text-[14px] sm:text-[16px] font-normal leading-relaxed space-y-2 pl-1">
                            {[
                                "Real-Time Proxy & VPN Detection (Datacenter, Residential, Tor)",
                                "Dynamic 0-100 Bot & Abuse Risk Score",
                                "Accurate Geolocation, ISP, and ASN Intelligence",
                                "Account Takeover & Credential Stuffing Prevention",
                                "Sub-50ms Ultra-Low Response Latency",
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
                                alt="IP Quality Check Dashboard"
                                className="w-full h-auto rounded-[18px] object-cover block"
                                src={imgFrame20}
                            />
                        </div>

                        {/* Right column: 2 stacked cards */}
                        <div className="flex-[288] flex flex-col justify-between self-stretch gap-3 sm:gap-4">
                            <div className="rounded-[18px] overflow-hidden shadow-2xl border border-white/10">
                                <img
                                    alt="Threat Intelligence Metrics"
                                    className="w-full h-auto rounded-[18px] object-cover block"
                                    src={imgFrame22}
                                />
                            </div>
                            <div className="rounded-[18px] overflow-hidden shadow-2xl border border-white/10">
                                <img
                                    alt="Geolocation Analytics"
                                    className="w-full h-auto rounded-[18px] object-cover block"
                                    src={imgFrame77}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Why DigitalRakshak? */}
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
                                Built for High-Throughput Web Platforms: DigitalRakshak provides enterprise-grade IP reputation and threat intelligence. Process thousands of incoming requests per second with sub-50ms response latency, 99.99% uptime SLA, and global threat telemetry.
                            </p>
                            <p className="text-white/70 text-[14px] leading-relaxed">
                                Don&apos;t let botnets, proxies, or malicious actors exploit your web applications and API endpoints. Protect your infrastructure with real-time IP defense.
                            </p>
                        </div>

                        <div className="lg:col-span-7 bg-[#050b1a]/60 border border-white/10 rounded-[20px] p-6 sm:p-7">
                            <p className="text-white/90 text-[14px] sm:text-[15px] font-semibold mb-4 text-[#B0DAFF]">
                                The DigitalRakshak Advantage:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    "Response Latency: < 50ms sub-50ms response for inline filtering",
                                    "Threat DB: Real-time global threat intelligence database",
                                    "Proxy Screening: Advanced datacenter, residential VPN & Tor detection",
                                    "Bot Risk Scoring: Dynamic 0-100 machine learning fraud score",
                                    "Bulk Processing Capacity: Up to 50,000 queries per minute",
                                    "Data Security & Privacy: ISO 27001 certified & bank-grade encryption",
                                    "Global Coverage: 99.99% IP coverage across IPv4 & IPv6",
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
                    id="cardGlowLinearBaseIP"
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
                    id="cardGlowRadLeftIP"
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
                    id="cardGlowRadRightIP"
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

            <rect width="100%" height="100%" fill="url(#cardGlowLinearBaseIP)" />
            <rect width="100%" height="100%" fill="url(#cardGlowRadLeftIP)" />
            <rect width="100%" height="100%" fill="url(#cardGlowRadRightIP)" />
        </svg>
    );
}

function KeyBenefitsSection() {
    const benefits = [
        {
            title: "Proxy & VPN Detection",
            desc: "Identify datacenter proxies, residential VPNs, Tor exit nodes, and anonymous connections in real time.",
            icon: Server,
        },
        {
            title: "Bot & Abuse Risk Score",
            desc: "Calculate dynamic 0-100 fraud scores to block automated botnets, web scrapers, and malicious traffic.",
            icon: ShieldAlert,
        },
        {
            title: "Geolocation Intelligence",
            desc: "Accurate ISO country code, state, city, ISP name, ASN, and geographic coordinate lookup.",
            icon: Globe,
        },
        {
            title: "Account Takeover Defense",
            desc: "Detect suspicious multi-account signups, credential stuffing, and location anomalies.",
            icon: Lock,
        },
        {
            title: "Sub-50ms Response Latency",
            desc: "Global IP intelligence engine processes queries in under 50ms, ensuring zero impact on user experience.",
            icon: Zap,
        },
        {
            title: "Enterprise Scale & Security",
            desc: "Process up to 50,000 queries per minute with 99.99% uptime SLA and bank-grade infrastructure.",
            icon: Database,
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

                {/* 6 Cards Responsive Grid with proper spacing */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 justify-items-center">
                    {benefits.map((benefit, idx) => (
                        <div
                            key={idx}
                            className="relative w-full max-w-[406px] min-h-[280px] sm:min-h-[300px] rounded-[18px] border-[2px] border-[#DFC6FF] p-6 sm:p-8 flex flex-col justify-start overflow-hidden group hover:scale-[1.015] hover:shadow-[0_0_35px_rgba(223,198,255,0.3)] transition-all duration-300"
                        >
                            {/* Exact Figma atmospheric bottom gradient */}
                            <BenefitCardGlow />

                            {/* Icon and Title beside each other */}
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
                    Quick answers about our IP Quality Check API.
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
        "IP Quality Check API",
        "Proxy & VPN Detection API",
        "Bot & Abuse Risk Scoring API",
        "IP Geolocation Intelligence API",
        "Account Takeover Protection API",
        "Complete Cybersecurity Risk Suite",
    ];

    const [selectedApis, setSelectedApis] = useState<string[]>([
        "IP Quality Check API",
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
                                Let's Connect
                            </span>
                            <h2 className="text-white text-[28px] sm:text-[34px] lg:text-[40px] font-bold leading-tight">
                                Let's Talk
                            </h2>
                            <p className="text-white/80 text-[14px] sm:text-[16px] font-normal leading-relaxed mt-2 mb-6">
                                Protect your platform with real-time IP threat intelligence. Discuss your integration requirements for proxy detection, bot defense, and fraud prevention with our API specialists.
                            </p>

                            {submitted ? (
                                <div className="bg-emerald-950/60 border border-emerald-500/30 rounded-[20px] p-6 text-center my-6">
                                    <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                                    <h4 className="text-white font-bold text-lg mb-1">Request Received!</h4>
                                    <p className="text-white/80 text-sm">
                                        Our IP security specialist will reach out to you shortly.
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
                                                    ? "All APIs (Complete Security Suite)"
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

                    {/* Right Column: High-tech IP Quality API Console Simulator */}
                    <div className="lg:col-span-6 bg-gradient-to-br from-[#0c1428] via-[#091024] to-[#040817] p-7 sm:p-10 lg:p-12 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-center">
                        <div className="rounded-[20px] bg-[#020510] border border-blue-500/25 p-5 sm:p-6 shadow-2xl relative overflow-hidden font-mono text-[12.5px] sm:text-[13.5px]">
                            {/* Terminal top header */}
                            <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/10 font-sans">
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                                    <span className="text-white/60 text-xs ml-2 font-mono">POST /v1/ip-quality/check</span>
                                </div>
                                <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold">
                                    200 OK • 32ms
                                </span>
                            </div>

                            {/* Payload simulator */}
                            <div className="space-y-1.5 text-blue-200">
                                <p className="text-white/50">{"// Real-Time IP Threat & Anonymizer Response"}</p>
                                <p><span className="text-[#ff7b72]">&quot;status&quot;</span>: <span className="text-[#a5d6ff]">&quot;COMPLETED&quot;</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;ip&quot;</span>: <span className="text-[#a5d6ff]">&quot;185.220.101.5&quot;</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;fraudScore&quot;</span>: <span className="text-[#ff7b72]">88</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;riskLevel&quot;</span>: <span className="text-[#ff7b72]">&quot;HIGH&quot;</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;anonymizer&quot;</span>: &#123; <span className="text-[#ff7b72]">&quot;isVpn&quot;</span>: <span className="text-[#ff7b72]">true</span>, <span className="text-[#ff7b72]">&quot;isTor&quot;</span>: <span className="text-[#ff7b72]">true</span>, <span className="text-[#ff7b72]">&quot;isProxy&quot;</span>: <span className="text-[#ff7b72]">true</span>, <span className="text-[#ff7b72]">&quot;isDatacenter&quot;</span>: <span className="text-[#ff7b72]">true</span> &#125;,</p>
                                <p><span className="text-[#ff7b72]">&quot;botRisk&quot;</span>: &#123; <span className="text-[#ff7b72]">&quot;isBot&quot;</span>: <span className="text-[#ff7b72]">true</span>, <span className="text-[#ff7b72]">&quot;abuseVelocity&quot;</span>: <span className="text-[#a5d6ff]">&quot;ELEVATED&quot;</span> &#125;,</p>
                                <p><span className="text-[#ff7b72]">&quot;geolocation&quot;</span>: &#123; <span className="text-[#ff7b72]">&quot;country&quot;</span>: <span className="text-[#a5d6ff]">&quot;DE&quot;</span>, <span className="text-[#ff7b72]">&quot;city&quot;</span>: <span className="text-[#a5d6ff]">&quot;Frankfurt am Main&quot;</span>, <span className="text-[#ff7b72]">&quot;timezone&quot;</span>: <span className="text-[#a5d6ff]">&quot;Europe/Berlin&quot;</span> &#125;,</p>
                                <p><span className="text-[#ff7b72]">&quot;network&quot;</span>: &#123; <span className="text-[#ff7b72]">&quot;asn&quot;</span>: <span className="text-[#79c0ff]">208294</span>, <span className="text-[#ff7b72]">&quot;isp&quot;</span>: <span className="text-[#a5d6ff]">&quot;Tor Exit Node Relay Network&quot;</span> &#125;,</p>
                                <p><span className="text-[#ff7b72]">&quot;recommendedAction&quot;</span>: <span className="text-[#ff7b72]">&quot;BLOCK_OR_CHALLENGE&quot;</span>,</p>
                                <p><span className="text-[#ff7b72]">&quot;auditTrail&quot;</span>: <span className="text-[#7ee787]">&quot;VERIFIED_THREAT_SIGNATURE&quot;</span></p>
                            </div>

                            {/* Bottom badge */}
                            <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between font-sans text-xs text-white/60">
                                <span>DigitalRakshak Threat Intelligence Engine</span>
                                <span className="text-[#76bbf8] flex items-center gap-1">
                                    <ShieldCheck className="w-3.5 h-3.5" /> High Trust Verified
                                </span>
                            </div>
                        </div>

                        <p className="text-white/60 text-xs text-center mt-4">
                            Sub-50ms latency • Datacenter, VPN &amp; Tor intelligence • 99.99% uptime
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ── MAIN EXPORT (Exact 9 Sections Matching gst-verification-api 1:1) ── */
export default function IPQualityCheckPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "IP Quality Check API",
        "applicationCategory": "SecurityApplication",
        "operatingSystem": "All",
        "provider": {
            "@type": "Organization",
            "name": "DigitalRakshak",
            "url": "https://digitalrakshak.com",
        },
        "description":
            "Real-time IP reputation scoring, VPN/Proxy/Tor detection, geolocation mapping, and bot risk scoring to safeguard your web applications and API endpoints.",
        "keywords": [
            "IP Quality Check API",
            "IP Reputation API",
            "VPN Proxy Tor Detection API",
            "Bot Fraud Detection API",
            "IP Geolocation Intelligence",
            "Fraud Prevention API",
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
