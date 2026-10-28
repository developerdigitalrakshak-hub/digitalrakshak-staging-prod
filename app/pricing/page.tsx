"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Check,
    Minus,
    Sparkles,
    ShieldCheck,
    Clock,
    Database,
    Zap,
    ChevronDown,
    ArrowRight,
    CheckCircle2,
    Lock,
    Headphones,
    Scale,
    Building2,
    TrendingUp,
} from "lucide-react";

export default function PricingPage() {
    const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
    const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(0);

    const pricingPlans = [
        {
            name: "Start",
            tagline: "Sandbox & Kickstart",
            description: "For Start-up companies",
            price: "Free",
            subPrice: "1 Month Sandbox Period",
            features: [
                "Free trial in sandbox environment",
                "1 month period",
                "Integrate in less than 4 hours",
                "View & Manage verifications",
            ],
            buttonText: "Start Free Trial",
            href: "/register",
            image: "/abstract-purple-hand-holding-star.jpg",
            popular: false,
            highlightColor: "border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.15)]",
            glowBg: "from-purple-900/20 to-transparent",
        },
        {
            name: "Grow",
            tagline: "Scale & Production",
            description: "For Mid-size companies",
            price: "On Request",
            subPrice: "Custom API Volume Bundles",
            features: [
                "End-to-end ID verification suite",
                "Central Database Checks",
                "Access to AML Checks",
                "Custom workflow for business",
            ],
            buttonText: "Buy Now",
            href: "/contact",
            image: "/abstract-pink-hand-holding-box.jpg",
            popular: true,
            highlightColor: "border-2 border-[#1677ff] shadow-[0_0_45px_rgba(22,119,255,0.35)]",
            glowBg: "from-blue-600/25 via-blue-900/20 to-transparent",
        },
        {
            name: "Enterprise",
            tagline: "High Volume & Bespoke SLA",
            description: "For Enterprise-level organizations",
            price: "Custom",
            subPrice: "Tailored Enterprise Agreement",
            features: [
                "Collaborate - Lead - Solve",
                "Custom Price Structure",
                "Dedicated Support",
                "Custom Collaborative Innovation",
            ],
            buttonText: "Contact Sales",
            href: "/contact",
            image: "/abstract-blue-building-blocks.jpg",
            popular: false,
            highlightColor: "border-blue-400/30 shadow-[0_0_30px_rgba(59,130,246,0.15)]",
            glowBg: "from-cyan-900/20 to-transparent",
        },
    ];

    const comparisonFeatures = [
        {
            category: "General",
            items: [
                { name: "Free Trials", start: true, grow: true, enterprise: true },
                { name: "Dedicated Account Manager", start: false, grow: true, enterprise: true },
                { name: "Priority Support", start: false, grow: true, enterprise: true },
            ],
        },
        {
            category: "Verification Features",
            items: [
                { name: "Verified 100+ countries IDs from Govt.", start: true, grow: true, enterprise: true },
                { name: "Document Data Extraction", start: false, grow: true, enterprise: true },
                { name: "ID Card Checks", start: false, grow: true, enterprise: true },
                { name: "MRZ Validation", start: false, grow: true, enterprise: true },
                { name: "NFC reading & Validation", start: false, grow: true, enterprise: true },
                { name: "AML Checks", start: false, grow: true, enterprise: true },
            ],
        },
        {
            category: "SDK & Integration",
            items: [
                { name: "Configurable Workflow Orchestration", start: true, grow: true, enterprise: true },
                { name: "Barcode Scanning Support", start: true, grow: true, enterprise: true },
                { name: "Assisted Image Capture", start: false, grow: true, enterprise: true },
                { name: "API Access", start: true, grow: true, enterprise: true },
                { name: "Webhooks", start: true, grow: true, enterprise: true },
            ],
        },
        {
            category: "Reporting & Analytics",
            items: [
                { name: "Basic Analytics Dashboard", start: true, grow: true, enterprise: true },
                { name: "Advanced Reporting", start: false, grow: true, enterprise: true },
                { name: "Customizable Reports", start: false, grow: false, enterprise: true },
            ],
        },
    ];

    const pricingFaqs = [
        {
            q: "How does the Free Sandbox trial work?",
            a: "The Start tier offers 1 month of free sandbox environment access. You receive full developer documentation, sandbox API keys, and test endpoints to test payload structures and complete full integration in under 4 hours.",
        },
        {
            q: "How is pricing calculated for Grow and Enterprise tiers?",
            a: "Pricing is transparent and volume-based. You pay per successful verification query with tiered rate brackets that decrease as monthly volume increases. We never charge for failed network retries.",
        },
        {
            q: "Are there setup fees or hidden infrastructure costs?",
            a: "No! DigitalRakshak has zero upfront onboarding fees, zero recurring maintenance charges, and no hidden bandwidth penalties. You only pay for what you verify.",
        },
        {
            q: "Can we upgrade our plan or request higher rate limits (QPS)?",
            a: "Yes. You can scale your account instantaneously. High-concurrency enterprise QPS limits (up to 50,000 queries per minute) are provisioned directly by our engineering operations.",
        },
        {
            q: "What support channels and SLAs are included?",
            a: "Start plans include sandbox developer ticketing; Grow and Enterprise tiers include 24/7 dedicated Slack/WhatsApp channels, a designated Account Manager, and a guaranteed 99.99% uptime SLA.",
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#B0DAFF] selection:text-[#081a2e]">
            {/* ── 1. HERO SECTION ── */}
            <section className="relative overflow-hidden pt-28 sm:pt-36 pb-16 sm:pb-20 px-[5%] lg:px-[6%]">
                {/* Background Ambient Glows */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-blue-600/15 via-purple-600/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute top-20 right-[10%] w-[350px] h-[350px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="relative z-10 max-w-[1240px] mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-5">
                        <Sparkles className="w-3.5 h-3.5 text-blue-300" />
                        Transparent, Flexible Pricing
                    </div>

                    {/* Headline */}
                    <h1 className="text-white text-[clamp(32px,6vw,60px)] font-black tracking-tight leading-[1.1] mb-5">
                        Simple, Transparent Pricing
                    </h1>

                    {/* Subtitle */}
                    <p className="text-white/75 text-[16px] sm:text-[19px] lg:text-[21px] max-w-3xl mx-auto leading-relaxed mb-8">
                        Find the perfect plan to secure your business, from startups to large enterprises. No hidden fees, just powerful verification solutions.
                    </p>

                    {/* Interactive Billing Toggle */}
                    <div className="inline-flex items-center p-1 rounded-full bg-[#0d1527] border border-white/15 backdrop-blur-md shadow-xl mb-4">
                        <button
                            type="button"
                            onClick={() => setBillingCycle("monthly")}
                            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                                billingCycle === "monthly"
                                    ? "bg-blue-600 text-white shadow-md"
                                    : "text-white/70 hover:text-white"
                            }`}
                        >
                            Monthly Billing
                        </button>
                        <button
                            type="button"
                            onClick={() => setBillingCycle("annual")}
                            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                                billingCycle === "annual"
                                    ? "bg-blue-600 text-white shadow-md"
                                    : "text-white/70 hover:text-white"
                            }`}
                        >
                            <span>Annual Commitment</span>
                            <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                                Save 20%
                            </span>
                        </button>
                    </div>

                    <p className="text-white/50 text-xs sm:text-sm">
                        All plans include bank-grade 256-bit encryption and ISO 27001 certified infrastructure.
                    </p>
                </div>
            </section>

            {/* ── 2. PRICING CARDS SECTION ── */}
            <section className="relative px-[5%] lg:px-[6%] pb-20">
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-7 lg:gap-8 items-stretch">
                    {pricingPlans.map((plan, idx) => (
                        <div
                            key={idx}
                            className={`relative rounded-[26px] bg-gradient-to-b ${plan.glowBg} bg-[#070d1e] p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] backdrop-blur-md ${plan.highlightColor} group`}
                        >
                            {/* Popular Ribbon */}
                            {plan.popular && (
                                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-xs font-black px-4 py-1 rounded-full shadow-[0_0_20px_rgba(22,119,255,0.6)] uppercase tracking-wider">
                                    ★ Most Popular
                                </div>
                            )}

                            <div>
                                {/* Plan Header */}
                                <div className="flex items-center justify-between gap-4 mb-6">
                                    <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-2xl overflow-hidden border border-white/20 shadow-xl bg-black/40 p-1">
                                        <Image
                                            src={plan.image || "/placeholder.svg"}
                                            alt={`${plan.name} plan icon`}
                                            width={88}
                                            height={88}
                                            className="w-full h-full object-cover rounded-xl"
                                        />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-wider text-blue-300 bg-blue-500/10 border border-blue-400/25 px-3 py-1 rounded-full">
                                        {plan.tagline}
                                    </span>
                                </div>

                                <h3 className="text-white text-[26px] sm:text-[30px] font-bold tracking-tight mb-1">
                                    {plan.name}
                                </h3>
                                <p className="text-white/70 text-sm font-normal mb-6">
                                    {plan.description}
                                </p>

                                {/* Price block */}
                                <div className="pb-6 mb-6 border-b border-white/10">
                                    <div className="text-3xl sm:text-4xl font-black text-white tracking-tight flex items-baseline gap-2">
                                        <span>{plan.price}</span>
                                        {plan.price === "Free" && (
                                            <span className="text-sm font-medium text-white/50">/ 1st Month</span>
                                        )}
                                    </div>
                                    <p className="text-xs text-[#76bbf8] font-medium mt-1">
                                        {plan.subPrice}
                                    </p>
                                </div>

                                {/* Features List */}
                                <div className="space-y-3.5 mb-8">
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-white/50">
                                        What&apos;s Included:
                                    </h4>
                                    <ul className="space-y-3">
                                        {plan.features.map((feature, fIdx) => (
                                            <li
                                                key={fIdx}
                                                className="flex items-start gap-3 text-[14px] sm:text-[14.5px] text-white/90"
                                            >
                                                <div className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                                                    <Check className="w-3 h-3 text-emerald-400 stroke-[3]" />
                                                </div>
                                                <span className="leading-snug">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Plan Action CTA */}
                            <div>
                                <Link
                                    href={plan.href}
                                    className={`w-full py-3.5 px-6 rounded-[16px] font-bold text-[15px] flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${
                                        plan.popular
                                            ? "bg-[#B0DAFF] hover:bg-[#76bbf8] text-[#0a1e36] shadow-[0_4px_25px_rgba(22,119,255,0.4)] hover:scale-[1.01]"
                                            : "bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40"
                                    }`}
                                >
                                    <span>{plan.buttonText}</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── 3. DETAILED COMPARISON TABLE SECTION ── */}
            <section className="relative px-[5%] lg:px-[6%] py-16 sm:py-20 bg-gradient-to-b from-transparent via-[#060b18] to-transparent">
                <div className="max-w-[1240px] mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12 sm:mb-16">
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-3">
                            <Scale className="w-3.5 h-3.5" />
                            Comprehensive Breakdown
                        </span>
                        <h2 className="text-white text-[28px] sm:text-[38px] lg:text-[44px] font-bold tracking-tight">
                            Detailed Plan Comparison
                        </h2>
                        <p className="text-white/70 text-[15px] sm:text-[17px] max-w-2xl mx-auto mt-2">
                            A comprehensive breakdown of features across all our plans.
                        </p>
                    </div>

                    {/* Table Container */}
                    <div className="rounded-[24px] border border-white/15 bg-[#091124]/90 overflow-hidden shadow-2xl backdrop-blur-xl">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse text-sm">
                                <thead>
                                    <tr className="border-b border-white/15 bg-white/5">
                                        <th className="py-6 px-6 font-bold text-white text-base w-[34%]">
                                            Feature / Capability
                                        </th>
                                        <th className="py-6 px-4 text-center w-[22%]">
                                            <span className="text-lg font-bold text-white block">Start</span>
                                            <span className="text-xs text-white/50 block font-normal mt-0.5">
                                                For Start-up companies
                                            </span>
                                            <Link
                                                href="/register"
                                                className="mt-3 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs py-1.5 px-4 rounded-full transition-colors"
                                            >
                                                Start Free Trial
                                            </Link>
                                        </th>
                                        <th className="py-6 px-4 text-center w-[22%] bg-blue-500/10 border-x border-blue-500/20">
                                            <span className="text-lg font-bold text-[#76bbf8] block">Grow</span>
                                            <span className="text-xs text-white/50 block font-normal mt-0.5">
                                                For Mid-size companies
                                            </span>
                                            <Link
                                                href="/contact"
                                                className="mt-3 inline-block bg-[#B0DAFF] hover:bg-[#76bbf8] text-[#0a1e36] font-bold text-xs py-1.5 px-4 rounded-full transition-colors"
                                            >
                                                Buy Now
                                            </Link>
                                        </th>
                                        <th className="py-6 px-4 text-center w-[22%]">
                                            <span className="text-lg font-bold text-white block">Enterprise</span>
                                            <span className="text-xs text-white/50 block font-normal mt-0.5">
                                                For Enterprise-level
                                            </span>
                                            <Link
                                                href="/contact"
                                                className="mt-3 inline-block bg-white/10 hover:bg-white/20 text-white font-semibold text-xs py-1.5 px-4 rounded-full border border-white/20 transition-colors"
                                            >
                                                Contact Sales
                                            </Link>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonFeatures.map((category, categoryIndex) => (
                                        <React.Fragment key={categoryIndex}>
                                            {/* Category Banner Row */}
                                            <tr className="bg-[#101b38] border-y border-white/15">
                                                <td
                                                    colSpan={4}
                                                    className="py-3 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#76bbf8]"
                                                >
                                                    {category.category}
                                                </td>
                                            </tr>

                                            {/* Category Items */}
                                            {category.items.map((item, itemIndex) => (
                                                <tr
                                                    key={itemIndex}
                                                    className="border-b border-white/10 hover:bg-white/5 transition-colors"
                                                >
                                                    <td className="py-4 px-6 text-white/90 font-medium text-sm">
                                                        {item.name}
                                                    </td>
                                                    <td className="py-4 px-4 text-center">
                                                        {item.start ? (
                                                            <div className="w-6 h-6 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto">
                                                                <Check className="h-3.5 w-3.5 text-emerald-400 stroke-[3]" />
                                                            </div>
                                                        ) : (
                                                            <Minus className="h-4 w-4 text-white/30 mx-auto" />
                                                        )}
                                                    </td>
                                                    <td className="py-4 px-4 text-center bg-blue-500/5 border-x border-blue-500/10">
                                                        {item.grow ? (
                                                            <div className="w-6 h-6 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto">
                                                                <Check className="h-3.5 w-3.5 text-emerald-400 stroke-[3]" />
                                                            </div>
                                                        ) : (
                                                            <Minus className="h-4 w-4 text-white/30 mx-auto" />
                                                        )}
                                                    </td>
                                                    <td className="py-4 px-4 text-center">
                                                        {item.enterprise ? (
                                                            <div className="w-6 h-6 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto">
                                                                <Check className="h-3.5 w-3.5 text-emerald-400 stroke-[3]" />
                                                            </div>
                                                        ) : (
                                                            <Minus className="h-4 w-4 text-white/30 mx-auto" />
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                        </React.Fragment>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 4. TRUST & ARCHITECTURE PILLARS ── */}
            <section className="relative px-[5%] lg:px-[6%] py-12">
                <div className="max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            icon: Clock,
                            title: "< 300ms SLA Latency",
                            desc: "Sub-second verification responses across PAN, GST, Bank, RC, and DL APIs.",
                        },
                        {
                            icon: Database,
                            title: "100% Official Registries",
                            desc: "Direct synchronization with official Government e-filing & regulatory databases.",
                        },
                        {
                            icon: ShieldCheck,
                            title: "99.99% Uptime Guarantee",
                            desc: "Enterprise redundant infrastructure with 24/7 automated health monitoring.",
                        },
                        {
                            icon: Lock,
                            title: "ISO 27001 Certified",
                            desc: "Bank-grade 256-bit encryption with complete audit trail and zero data leakage.",
                        },
                    ].map((pillar, idx) => (
                        <div
                            key={idx}
                            className="bg-[#091124]/70 border border-white/10 rounded-[20px] p-6 backdrop-blur-md"
                        >
                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center text-[#76bbf8] mb-4">
                                <pillar.icon className="w-5 h-5" />
                            </div>
                            <h3 className="text-white font-bold text-base mb-1.5">{pillar.title}</h3>
                            <p className="text-white/70 text-xs sm:text-sm leading-relaxed">{pillar.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── 5. PRICING FAQS ── */}
            <section className="relative px-[5%] lg:px-[6%] py-16 sm:py-20">
                <div className="max-w-[900px] mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-white text-[28px] sm:text-[36px] font-bold tracking-tight mb-3">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-white/70 text-[15px] sm:text-[17px]">
                            Everything you need to know about billing, onboarding, and scaling.
                        </p>
                    </div>

                    <div className="divide-y divide-white/15 rounded-[22px] bg-[#070e20] border border-white/15 px-6 sm:px-8">
                        {pricingFaqs.map((faq, idx) => {
                            const isOpen = faqOpenIndex === idx;
                            return (
                                <div key={idx} className="py-5">
                                    <button
                                        type="button"
                                        onClick={() => setFaqOpenIndex(isOpen ? null : idx)}
                                        className="w-full flex items-center justify-between gap-4 text-left cursor-pointer group"
                                    >
                                        <span className="text-white font-semibold text-base sm:text-lg group-hover:text-blue-300 transition-colors">
                                            {faq.q}
                                        </span>
                                        <ChevronDown
                                            className={`w-5 h-5 text-white/60 shrink-0 transition-transform duration-200 ${
                                                isOpen ? "rotate-180 text-blue-400" : ""
                                            }`}
                                        />
                                    </button>
                                    {isOpen && (
                                        <p className="text-white/75 text-sm sm:text-base leading-relaxed pt-3 pr-6">
                                            {faq.a}
                                        </p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── 6. FINAL CTA BANNER ── */}
            <section className="relative px-[5%] lg:px-[6%] pb-24">
                <div className="max-w-[1240px] mx-auto rounded-[32px] bg-gradient-to-r from-[#0d1c3e] via-[#091530] to-[#120f2e] border border-blue-500/30 p-8 sm:p-12 lg:p-16 shadow-[0_0_50px_rgba(22,119,255,0.25)] text-center relative overflow-hidden">
                    <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-300 bg-blue-500/15 border border-blue-400/30 px-3.5 py-1.5 rounded-full inline-block">
                            Scale With DigitalRakshak
                        </span>
                        <h2 className="text-white text-[30px] sm:text-[42px] font-black tracking-tight leading-tight">
                            Ready to Automate Identity &amp; Risk Intelligence?
                        </h2>
                        <p className="text-white/80 text-[15px] sm:text-[18px] leading-relaxed">
                            Start testing in our sandbox within 4 hours, or speak to our enterprise solutions team to design your custom verification workflow.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center pt-2">
                            <Link
                                href="/register"
                                className="bg-[#B0DAFF] hover:bg-[#76bbf8] text-[#0a1e36] font-bold text-[15px] py-3.5 px-8 rounded-[16px] shadow-xl hover:scale-[1.02] transition-all flex items-center gap-2"
                            >
                                <span>Start Free Trial</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="/contact"
                                className="bg-white/10 hover:bg-white/20 text-white font-bold text-[15px] py-3.5 px-8 rounded-[16px] border border-white/20 transition-all"
                            >
                                Talk to an Enterprise Specialist
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}