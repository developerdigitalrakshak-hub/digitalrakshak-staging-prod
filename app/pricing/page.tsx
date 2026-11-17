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
    Code2,
    UserCheck,
    Fingerprint,
} from "lucide-react";

type ProductTab = "api" | "bgv" | "trust";

interface Plan {
    name: string;
    tagline: string;
    description: string;
    price: string;
    billingPeriod?: string;
    billedAnnuallyNote?: string;
    subPrice: string;
    features: string[];
    buttonText: string;
    href: string;
    image: string;
    popular: boolean;
    highlightColor: string;
    glowBg: string;
}

interface CategoryComparison {
    category: string;
    items: {
        name: string;
        start: boolean;
        grow: boolean;
        enterprise: boolean;
    }[];
}

interface ProductData {
    id: ProductTab;
    label: string;
    shortBadge: string;
    icon: React.ComponentType<{ className?: string }>;
    tagline: string;
    description: string;
    monthlyPlans: Plan[];
    annualPlans: Plan[];
    comparisonFeatures: CategoryComparison[];
}

export default function PricingPage() {
    const [activeTab, setActiveTab] = useState<ProductTab>("api");
    const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
    const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(0);

    const productsData: Record<ProductTab, ProductData> = {
        api: {
            id: "api",
            label: "API Verification",
            shortBadge: "REST APIs & Registry",
            icon: Code2,
            tagline: "Instant Government Registry & Identity APIs",
            description: "Ultra-fast REST APIs for PAN, Aadhaar OCR, GST, Bank Penny Drop, Driving License, RC & MCA databases.",
            monthlyPlans: [
                {
                    name: "Start",
                    tagline: "Sandbox & Starter",
                    description: "Ideal for testing, developers & early MVP product launch",
                    price: "Free",
                    billingPeriod: "/ 1st Month",
                    billedAnnuallyNote: "No credit card required for sandbox",
                    subPrice: "Up to 500 test API calls / month",
                    features: [
                        "500 free monthly sandbox API calls",
                        "Core PAN Card & Aadhaar OCR APIs",
                        "Basic Driving License & Voter ID verification",
                        "Developer sandbox keys & instant Postman collection",
                        "Real-time webhook events & API dashboard",
                        "Standard API response speed (~600ms latency)",
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
                    tagline: "Production Scale",
                    description: "For fast-scaling fintechs, marketplaces & NBFCs",
                    price: "₹14,999",
                    billingPeriod: "/ month",
                    billedAnnuallyNote: "Flexible monthly billing • Cancel anytime",
                    subPrice: "Includes 5,000 verifications (₹2.50/extra call)",
                    features: [
                        "5,000 live verification queries included / mo",
                        "Full Suite: PAN, GSTIN, Bank Penny Drop & RC",
                        "Bank account validation with live IFSC master sync",
                        "Automated document data extraction & MRZ parser",
                        "Central Govt database direct sync (live e-filing)",
                        "Monthly rollover of unused API credits",
                        "Priority developer support (4h SLA resolution)",
                    ],
                    buttonText: "Get Started Monthly",
                    href: "/contact",
                    image: "/abstract-pink-hand-holding-box.jpg",
                    popular: true,
                    highlightColor: "border-2 border-[#1677ff] shadow-[0_0_45px_rgba(22,119,255,0.35)]",
                    glowBg: "from-blue-600/25 via-blue-900/20 to-transparent",
                },
                {
                    name: "Enterprise",
                    tagline: "High QPS & Resiliency",
                    description: "For high-volume banking, insurance & enterprise systems",
                    price: "₹49,999",
                    billingPeriod: "/ month",
                    billedAnnuallyNote: "Billed monthly • Scale capacity anytime",
                    subPrice: "Includes 25,000 verifications (₹1.80/extra call)",
                    features: [
                        "25,000 live API verification calls included",
                        "Full registry suite: MCA Company, EPFO & Court checks",
                        "Custom workflow orchestration & multi-agent routing",
                        "Rate limit up to 10,000 queries per minute (QPM)",
                        "Dedicated Slack & WhatsApp technical war-room",
                        "Guaranteed 99.95% API uptime SLA commitment",
                        "Sub-300ms ultra-low latency response guarantee",
                    ],
                    buttonText: "Contact Sales",
                    href: "/contact",
                    image: "/abstract-blue-building-blocks.jpg",
                    popular: false,
                    highlightColor: "border-blue-400/30 shadow-[0_0_30px_rgba(59,130,246,0.15)]",
                    glowBg: "from-cyan-900/20 to-transparent",
                },
            ],
            annualPlans: [
                {
                    name: "Start",
                    tagline: "Annual Developer Saver",
                    description: "Annual commitment for emerging startups building on DigitalRakshak",
                    price: "₹3,999",
                    billingPeriod: "/ month",
                    billedAnnuallyNote: "Billed ₹47,988 annually (Save 20%)",
                    subPrice: "12,000 annual pooled API calls",
                    features: [
                        "12,000 annual pooled API calls (zero monthly expiry)",
                        "Full annual credit rollover to avoid usage loss",
                        "Complete PAN, Aadhaar, Voter & DL verification APIs",
                        "Free assisted onboarding & integration session",
                        "Dual staging and production access environments",
                        "Priority developer queue with fast response times",
                    ],
                    buttonText: "Start Annual Plan",
                    href: "/register",
                    image: "/abstract-purple-hand-holding-star.jpg",
                    popular: false,
                    highlightColor: "border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.15)]",
                    glowBg: "from-purple-900/20 to-transparent",
                },
                {
                    name: "Grow",
                    tagline: "Best Value for Scale",
                    description: "Highest savings for mid-size institutions with sustained API traffic",
                    price: "₹11,999",
                    billingPeriod: "/ month",
                    billedAnnuallyNote: "Billed ₹1,43,988 annually (Save ₹36,000/yr)",
                    subPrice: "Includes 75,000 verifications/yr (₹1.60/extra call)",
                    features: [
                        "75,000 annual pooled verifications (full year flexibility)",
                        "Discounted overage rate: ₹1.60 per extra query",
                        "Full suite + MCA company search & GST filing history",
                        "Automated retry fallback routing across govt gateways",
                        "Dedicated Technical Account Manager (TAM)",
                        "Free annual security & regulatory compliance audit",
                        "Guaranteed 99.99% uptime with 1-hour priority support SLA",
                    ],
                    buttonText: "Claim Annual Savings",
                    href: "/contact",
                    image: "/abstract-pink-hand-holding-box.jpg",
                    popular: true,
                    highlightColor: "border-2 border-[#1677ff] shadow-[0_0_45px_rgba(22,119,255,0.35)]",
                    glowBg: "from-blue-600/25 via-blue-900/20 to-transparent",
                },
                {
                    name: "Enterprise",
                    tagline: "Wholesale Enterprise SLA",
                    description: "Bespoke annual infrastructure for banks & top financial institutions",
                    price: "Custom",
                    billingPeriod: "Annual Contract",
                    billedAnnuallyNote: "Tailored multi-year volume agreement",
                    subPrice: "Starting at 500,000+ API checks / year",
                    features: [
                        "500,000+ custom annual verification volume tier",
                        "Lowest guaranteed tier-1 wholesale pricing per API hit",
                        "Dedicated private API cluster & dedicated egress IP pool",
                        "On-premise / hybrid cloud compliance deployment option",
                        "Custom bespoke integrations & localized compliance workflows",
                        "24/7 dedicated War Room, phone & VIP Slack channel",
                        "Formal 99.999% SLA with regulatory penalty backing",
                    ],
                    buttonText: "Contact Enterprise Sales",
                    href: "/contact",
                    image: "/abstract-blue-building-blocks.jpg",
                    popular: false,
                    highlightColor: "border-blue-400/30 shadow-[0_0_30px_rgba(59,130,246,0.15)]",
                    glowBg: "from-cyan-900/20 to-transparent",
                },
            ],
            comparisonFeatures: [
                {
                    category: "API & Data Integrity",
                    items: [
                        { name: "PAN, Aadhaar & Voter OCR APIs", start: true, grow: true, enterprise: true },
                        { name: "Bank Account Penny Drop Validation", start: false, grow: true, enterprise: true },
                        { name: "GSTIN Status & Filing History", start: false, grow: true, enterprise: true },
                        { name: "Vehicle RC & Driving License Checks", start: true, grow: true, enterprise: true },
                        { name: "MCA Director & Company Registry", start: false, grow: true, enterprise: true },
                        { name: "Direct Govt Database Synchronization", start: true, grow: true, enterprise: true },
                    ],
                },
                {
                    category: "Integration & Architecture",
                    items: [
                        { name: "Real-time Webhook Events", start: true, grow: true, enterprise: true },
                        { name: "Postman Collections & Official SDKs", start: true, grow: true, enterprise: true },
                        { name: "Automated Gateway Fallback Routing", start: false, grow: true, enterprise: true },
                        { name: "Dedicated Private API Cluster", start: false, grow: false, enterprise: true },
                        { name: "Sub-300ms SLA Latency", start: false, grow: true, enterprise: true },
                    ],
                },
                {
                    category: "Support & SLA",
                    items: [
                        { name: "Sandbox Testing Environment", start: true, grow: true, enterprise: true },
                        { name: "Dedicated Technical Account Manager (TAM)", start: false, grow: true, enterprise: true },
                        { name: "24/7 Dedicated Slack War Room", start: false, grow: false, enterprise: true },
                        { name: "99.99% Uptime Financial Guarantee", start: false, grow: true, enterprise: true },
                    ],
                },
            ],
        },
        bgv: {
            id: "bgv",
            label: "BGV (Workforce & Entity)",
            shortBadge: "Background Verification",
            icon: UserCheck,
            tagline: "Comprehensive Employee, Vendor & Workforce Screening",
            description: "Automated candidate BGV, criminal court records, dual-employment check, education validation & address verification.",
            monthlyPlans: [
                {
                    name: "Start",
                    tagline: "Essential BGV",
                    description: "For startups & boutique agencies hiring up to 25 people monthly",
                    price: "₹7,999",
                    billingPeriod: "/ month",
                    billedAnnuallyNote: "Monthly billing • No setup lock-in",
                    subPrice: "Includes 25 full candidate checks (₹280/extra)",
                    features: [
                        "25 candidate background checks / month",
                        "Identity validation (PAN + Aadhaar + Voter ID)",
                        "District & High Court criminal litigation search",
                        "Self-service candidate document upload portal",
                        "Instant digital PDF verification report",
                        "Turnaround Time (TAT): 24 to 48 hours",
                    ],
                    buttonText: "Start Essential BGV",
                    href: "/register",
                    image: "/abstract-purple-hand-holding-star.jpg",
                    popular: false,
                    highlightColor: "border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.15)]",
                    glowBg: "from-purple-900/20 to-transparent",
                },
                {
                    name: "Grow",
                    tagline: "Corporate BGV",
                    description: "Comprehensive screening for fast-hiring mid-market companies",
                    price: "₹24,999",
                    billingPeriod: "/ month",
                    billedAnnuallyNote: "Flexible monthly billing • Scale with hiring",
                    subPrice: "Includes 100 candidate checks (₹220/extra)",
                    features: [
                        "100 comprehensive candidate checks / month",
                        "Dual employment & EPFO service history verification",
                        "Highest degree & university accreditation check",
                        "Civil litigation & Police station record check",
                        "HRMS integration (Keka, Darwinbox, Zoho People)",
                        "Dedicated BGV case manager & 12h turnaround",
                    ],
                    buttonText: "Get Corporate BGV",
                    href: "/contact",
                    image: "/abstract-pink-hand-holding-box.jpg",
                    popular: true,
                    highlightColor: "border-2 border-[#1677ff] shadow-[0_0_45px_rgba(22,119,255,0.35)]",
                    glowBg: "from-blue-600/25 via-blue-900/20 to-transparent",
                },
                {
                    name: "Enterprise",
                    tagline: "Enterprise Workforce",
                    description: "High-volume corporate, BFSI, gig-worker & contractor screening",
                    price: "₹69,999",
                    billingPeriod: "/ month",
                    billedAnnuallyNote: "Monthly high-capacity plan",
                    subPrice: "Includes 350+ candidate checks (₹180/extra)",
                    features: [
                        "350+ executive & workforce checks / month",
                        "Physical address verification via GPS geo-tagging",
                        "Global sanctions, Interpol & regulatory watchlist screening",
                        "Credit bureau score (CIBIL/Equifax) validation",
                        "Custom white-labeled candidate experience & branding",
                        "Guaranteed turnaround: Under 8 hours",
                    ],
                    buttonText: "Contact BGV Specialist",
                    href: "/contact",
                    image: "/abstract-blue-building-blocks.jpg",
                    popular: false,
                    highlightColor: "border-blue-400/30 shadow-[0_0_30px_rgba(59,130,246,0.15)]",
                    glowBg: "from-cyan-900/20 to-transparent",
                },
            ],
            annualPlans: [
                {
                    name: "Start",
                    tagline: "Annual Essential BGV",
                    description: "Cost-effective annual recruitment package for steady hiring teams",
                    price: "₹6,399",
                    billingPeriod: "/ month",
                    billedAnnuallyNote: "Billed ₹76,788 annually (Save 20%)",
                    subPrice: "350 annual candidate verifications",
                    features: [
                        "350 annual pooled candidate checks (use anytime in 12 mos)",
                        "Identity + Court criminal record check suite",
                        "Automated candidate email & WhatsApp reminder nudges",
                        "Exportable audit-ready PDF compliance reports",
                        "Standard 24h turnaround time",
                        "Staging portal for HR team onboarding",
                    ],
                    buttonText: "Start Annual BGV",
                    href: "/register",
                    image: "/abstract-purple-hand-holding-star.jpg",
                    popular: false,
                    highlightColor: "border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.15)]",
                    glowBg: "from-purple-900/20 to-transparent",
                },
                {
                    name: "Grow",
                    tagline: "Annual Corporate (Most Popular)",
                    description: "Maximum savings for enterprises hiring 100+ candidates every month",
                    price: "₹19,999",
                    billingPeriod: "/ month",
                    billedAnnuallyNote: "Billed ₹2,39,988 annually (Save ₹60,000/yr)",
                    subPrice: "1,500 annual candidate checks (₹190/extra)",
                    features: [
                        "1,500 annual pooled comprehensive BGV checks",
                        "Dual employment + education + criminal court checks",
                        "Full HRMS API sync (Darwinbox, Workday, Keka)",
                        "Dedicated verification operations team lead",
                        "Free quarterly hiring compliance & fake degree audit",
                        "Fast-track 6-hour express turnaround guarantee",
                    ],
                    buttonText: "Claim Annual BGV Savings",
                    href: "/contact",
                    image: "/abstract-pink-hand-holding-box.jpg",
                    popular: true,
                    highlightColor: "border-2 border-[#1677ff] shadow-[0_0_45px_rgba(22,119,255,0.35)]",
                    glowBg: "from-blue-600/25 via-blue-900/20 to-transparent",
                },
                {
                    name: "Enterprise",
                    tagline: "Strategic Workforce BGV",
                    description: "End-to-end background verification partner for 5,000+ checks/year",
                    price: "Custom",
                    billingPeriod: "Annual Contract",
                    billedAnnuallyNote: "Bespoke annual corporate SLA",
                    subPrice: "Volume starting at 5,000+ candidates / year",
                    features: [
                        "5,000+ candidate checks with customized check matrices",
                        "Pan-India physical field verification network",
                        "Direct ATS & SAP SuccessFactors deep integration",
                        "Dedicated on-site or dedicated operations pod",
                        "Zero-liability compliance warranty & legal assistance",
                        "Complete ISO 27001 & SOC 2 Type II audit readiness",
                    ],
                    buttonText: "Talk to BGV Leadership",
                    href: "/contact",
                    image: "/abstract-blue-building-blocks.jpg",
                    popular: false,
                    highlightColor: "border-blue-400/30 shadow-[0_0_30px_rgba(59,130,246,0.15)]",
                    glowBg: "from-cyan-900/20 to-transparent",
                },
            ],
            comparisonFeatures: [
                {
                    category: "Candidate Verification Checks",
                    items: [
                        { name: "Govt ID & Address Verification", start: true, grow: true, enterprise: true },
                        { name: "Civil & Criminal Court Litigation Search", start: true, grow: true, enterprise: true },
                        { name: "Dual Employment & Moonlighting Check", start: false, grow: true, enterprise: true },
                        { name: "University & Degree Authenticity Check", start: false, grow: true, enterprise: true },
                        { name: "Physical On-Ground Address Verification", start: false, grow: false, enterprise: true },
                        { name: "Global Sanctions & Regulatory Watchlists", start: false, grow: true, enterprise: true },
                    ],
                },
                {
                    category: "Workflow & HRMS Integration",
                    items: [
                        { name: "Candidate Self-Serve Upload Portal", start: true, grow: true, enterprise: true },
                        { name: "Automated WhatsApp & Email Reminders", start: true, grow: true, enterprise: true },
                        { name: "HRMS Sync (Keka, Darwinbox, Zoho)", start: false, grow: true, enterprise: true },
                        { name: "Enterprise ATS & SAP SuccessFactors Sync", start: false, grow: false, enterprise: true },
                        { name: "White-labeled Branded Candidate Portal", start: false, grow: false, enterprise: true },
                    ],
                },
                {
                    category: "Turnaround Time & Operations",
                    items: [
                        { name: "Standard TAT: 24 to 48 Hours", start: true, grow: true, enterprise: true },
                        { name: "Express TAT: Under 6 to 12 Hours", start: false, grow: true, enterprise: true },
                        { name: "Dedicated BGV Operations Account Manager", start: false, grow: true, enterprise: true },
                        { name: "Quarterly Hiring Compliance Audit", start: false, grow: true, enterprise: true },
                    ],
                },
            ],
        },
        trust: {
            id: "trust",
            label: "Digital Trust & Fraud",
            shortBadge: "AI Risk & Biometrics",
            icon: Fingerprint,
            tagline: "Autonomous Fraud Defense, AML & Biometric Risk Engine",
            description: "Passive 3D Liveness, Deepfake prevention, biometric face match, device risk intelligence & AML sanction screening.",
            monthlyPlans: [
                {
                    name: "Start",
                    tagline: "Trust Lite",
                    description: "Biometric face match & fraud prevention for online onboarding",
                    price: "₹9,999",
                    billingPeriod: "/ month",
                    billedAnnuallyNote: "Monthly billing • Cancel anytime",
                    subPrice: "Includes 1,500 trust & fraud checks",
                    features: [
                        "1,500 biometric & fraud assessments / month",
                        "AI Face Match (Selfie vs Govt Photo ID comparison)",
                        "Passive Liveness detection (anti-spoofing)",
                        "Basic synthetic fraud & duplicate face detector",
                        "Real-time fraud alert webhook triggers",
                        "Sub-500ms response speed for fast signups",
                    ],
                    buttonText: "Start Trust Lite",
                    href: "/register",
                    image: "/abstract-purple-hand-holding-star.jpg",
                    popular: false,
                    highlightColor: "border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.15)]",
                    glowBg: "from-purple-900/20 to-transparent",
                },
                {
                    name: "Grow",
                    tagline: "Trust Shield",
                    description: "Advanced AML, device fingerprinting & behavioral risk engine",
                    price: "₹29,999",
                    billingPeriod: "/ month",
                    billedAnnuallyNote: "Flexible monthly risk tier",
                    subPrice: "Includes 7,500 risk checks (₹3.50/extra)",
                    features: [
                        "7,500 comprehensive trust & risk checks / month",
                        "Active + Passive 3D liveness (iBeta Level 2 certified)",
                        "Global AML, PEP sanction & court adverse media scan",
                        "Device fingerprinting, SIM swap & IP proxy detection",
                        "Configurable fraud rule engine & custom threshold scoring",
                        "Priority risk analyst review & 99.95% uptime SLA",
                    ],
                    buttonText: "Deploy Trust Shield",
                    href: "/contact",
                    image: "/abstract-pink-hand-holding-box.jpg",
                    popular: true,
                    highlightColor: "border-2 border-[#1677ff] shadow-[0_0_45px_rgba(22,119,255,0.35)]",
                    glowBg: "from-blue-600/25 via-blue-900/20 to-transparent",
                },
                {
                    name: "Enterprise",
                    tagline: "Zero-Trust Guard",
                    description: "For neo-banks, crypto, gaming & high-stakes transactions",
                    price: "₹79,999",
                    billingPeriod: "/ month",
                    billedAnnuallyNote: "Monthly high-assurance risk tier",
                    subPrice: "Includes 30,000 trust checks (₹2.40/extra)",
                    features: [
                        "30,000 high-assurance risk evaluations / month",
                        "Deepfake & generative AI video attack shield",
                        "Behavioral biometrics & mule account network detector",
                        "Real-time transaction risk scoring & AML alert console",
                        "Dedicated fraud scientist & custom ML model training",
                        "Ultra-low latency (< 180ms) for high-speed onboarding",
                    ],
                    buttonText: "Contact Risk Architects",
                    href: "/contact",
                    image: "/abstract-blue-building-blocks.jpg",
                    popular: false,
                    highlightColor: "border-blue-400/30 shadow-[0_0_30px_rgba(59,130,246,0.15)]",
                    glowBg: "from-cyan-900/20 to-transparent",
                },
            ],
            annualPlans: [
                {
                    name: "Start",
                    tagline: "Annual Trust Lite",
                    description: "Protect digital onboarding with annual pooled biometric credits",
                    price: "₹7,999",
                    billingPeriod: "/ month",
                    billedAnnuallyNote: "Billed ₹95,988 annually (Save 20%)",
                    subPrice: "20,000 annual pooled fraud checks",
                    features: [
                        "20,000 annual pooled biometric checks (zero expiry)",
                        "AI Face match with photo tamper protection",
                        "Certified passive liveness anti-spoofing engine",
                        "Real-time fraud incident analytics dashboard",
                        "Standard webhook integration & developer support",
                        "Complete data privacy & zero biometric storage",
                    ],
                    buttonText: "Start Annual Trust",
                    href: "/register",
                    image: "/abstract-purple-hand-holding-star.jpg",
                    popular: false,
                    highlightColor: "border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.15)]",
                    glowBg: "from-purple-900/20 to-transparent",
                },
                {
                    name: "Grow",
                    tagline: "Annual Trust Shield (Most Popular)",
                    description: "Comprehensive risk coverage with maximum annual cost advantage",
                    price: "₹23,999",
                    billingPeriod: "/ month",
                    billedAnnuallyNote: "Billed ₹2,87,988 annually (Save ₹72,000/yr)",
                    subPrice: "100,000 annual pooled risk checks",
                    features: [
                        "100,000 annual pooled risk evaluations (₹2.20/extra check)",
                        "Full AML, PEP sanctions + device fraud intelligence",
                        "Deepfake biometric detector & document forgery scanner",
                        "Dedicated Risk Architect & customized rule engine",
                        "Free semi-annual fraud penetration report",
                        "99.99% uptime SLA with sub-250ms latency guarantee",
                    ],
                    buttonText: "Claim Trust Savings",
                    href: "/contact",
                    image: "/abstract-pink-hand-holding-box.jpg",
                    popular: true,
                    highlightColor: "border-2 border-[#1677ff] shadow-[0_0_45px_rgba(22,119,255,0.35)]",
                    glowBg: "from-blue-600/25 via-blue-900/20 to-transparent",
                },
                {
                    name: "Enterprise",
                    tagline: "Sovereign Trust Enterprise",
                    description: "Tailored enterprise fraud platform for banking & large fintech ecosystems",
                    price: "Custom",
                    billingPeriod: "Annual Contract",
                    billedAnnuallyNote: "Bespoke annual risk partnership",
                    subPrice: "500,000+ checks / year for banking scale",
                    features: [
                        "500,000+ custom fraud & trust evaluations",
                        "Proprietary custom-trained ML models on your risk data",
                        "On-premise / isolated VPC biometric data deployment",
                        "Real-time syndicate fraud ring visual graph mapping",
                        "24/7 dedicated SOC & incident mitigation team",
                        "Regulatory compliance certification support (RBI, SEBI)",
                    ],
                    buttonText: "Talk to Chief Risk Officer",
                    href: "/contact",
                    image: "/abstract-blue-building-blocks.jpg",
                    popular: false,
                    highlightColor: "border-blue-400/30 shadow-[0_0_30px_rgba(59,130,246,0.15)]",
                    glowBg: "from-cyan-900/20 to-transparent",
                },
            ],
            comparisonFeatures: [
                {
                    category: "Biometrics & Spoof Defense",
                    items: [
                        { name: "1:1 AI Face Match (Selfie vs ID)", start: true, grow: true, enterprise: true },
                        { name: "iBeta Level 2 Passive 3D Liveness", start: true, grow: true, enterprise: true },
                        { name: "Generative AI & Deepfake Video Detection", start: false, grow: true, enterprise: true },
                        { name: "Printed Photo & Screen Replay Spoof Protection", start: true, grow: true, enterprise: true },
                        { name: "Biometric Duplicate & Identity Tamper Scan", start: false, grow: true, enterprise: true },
                    ],
                },
                {
                    category: "AML & Entity Intelligence",
                    items: [
                        { name: "Global Sanctions & Blacklist Screening", start: false, grow: true, enterprise: true },
                        { name: "Politically Exposed Persons (PEP) Check", start: false, grow: true, enterprise: true },
                        { name: "Adverse Media & Court Case Intelligence", start: false, grow: true, enterprise: true },
                        { name: "Real-time Syndicate Mule Account Graph Mapping", start: false, grow: false, enterprise: true },
                    ],
                },
                {
                    category: "Device Risk & Network Trust",
                    items: [
                        { name: "Device Fingerprinting & Root/Jailbreak Check", start: false, grow: true, enterprise: true },
                        { name: "SIM Swap & Virtual Number Detection", start: false, grow: true, enterprise: true },
                        { name: "Tor / VPN / High-risk IP Proxy Flagging", start: false, grow: true, enterprise: true },
                        { name: "Sub-180ms Ultra-low Latency Risk Engine", start: false, grow: false, enterprise: true },
                    ],
                },
            ],
        },
    };

    const currentProduct = productsData[activeTab];
    const pricingPlans = billingCycle === "monthly" ? currentProduct.monthlyPlans : currentProduct.annualPlans;
    const comparisonFeatures = currentProduct.comparisonFeatures;

    const pricingFaqs = [
        {
            q: "Can we combine API, BGV, and Digital Trust in a single custom bundle?",
            a: "Yes! While you can subscribe to API, BGV, or Digital Trust individually, our Enterprise team can create a unified cross-product bundle with shared wallet credits and consolidated invoicing.",
        },
        {
            q: "How does the Free Sandbox trial work?",
            a: "The Start tier offers 1 month of free sandbox environment access. You receive full developer documentation, sandbox API keys, and test endpoints to test payload structures and complete full integration in under 4 hours.",
        },
        {
            q: "How is billing calculated for monthly vs annual plans?",
            a: "Monthly plans give you pay-as-you-go flexibility with monthly rollover. Annual plans provide a 20% direct discount and pool all verification credits for the entire 12-month period with zero monthly loss.",
        },
        {
            q: "Are there setup fees or hidden infrastructure costs?",
            a: "No! DigitalRakshak has zero upfront onboarding fees, zero recurring maintenance charges, and no hidden bandwidth penalties. You only pay for what you verify.",
        },
        {
            q: "What support channels and SLAs are included?",
            a: "Start plans include developer ticketing; Grow and Enterprise tiers include 24/7 dedicated Slack/WhatsApp channels, a designated Account Manager, and guaranteed uptime SLAs up to 99.999%.",
        },
    ];

    const tabList: { id: ProductTab; label: string; badge: string; icon: React.ComponentType<{ className?: string }> }[] = [
        { id: "api", label: "API", badge: "Govt ID & REST APIs", icon: Code2 },
        { id: "bgv", label: "BGV", badge: "Background Checks", icon: UserCheck },
        { id: "trust", label: "Digital Trust", badge: "Fraud & Biometrics", icon: Fingerprint },
    ];

    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#B0DAFF] selection:text-[#081a2e]">
            {/* ── 1. HERO SECTION ── */}
            <section className="relative overflow-hidden pt-28 sm:pt-36 pb-14 sm:pb-16 px-[5%] lg:px-[6%]">
                {/* Background Ambient Glows */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-b from-blue-600/15 via-purple-600/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute top-20 right-[10%] w-[350px] h-[350px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="relative z-10 max-w-[1240px] mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-5">
                        <Sparkles className="w-3.5 h-3.5 text-blue-300" />
                        Transparent, Flexible Pricing
                    </div>

                    {/* Headline */}
                    <h1 className="text-white text-[clamp(32px,6vw,60px)] font-black tracking-tight leading-[1.1] mb-4">
                        Simple, Transparent Pricing
                    </h1>

                    {/* Subtitle */}
                    <p className="text-white/75 text-[16px] sm:text-[18px] max-w-2xl mx-auto leading-relaxed mb-8">
                        Select your product suite below to explore customized plans, specifications, and volume tiers.
                    </p>

                    {/* ── PRODUCT CATEGORY TABS (API, BGV, DIGITAL TRUST) ── */}
                    <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl sm:rounded-full bg-[#0a1227] border border-white/20 backdrop-blur-xl shadow-2xl mb-5">
                        {tabList.map((tab) => {
                            const Icon = tab.icon;
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    type="button"
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2.5 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${isActive
                                        ? "bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white shadow-[0_4px_20px_rgba(37,99,235,0.45)] border border-blue-300/40 scale-[1.02]"
                                        : "text-white/70 hover:text-white hover:bg-white/5"
                                        }`}
                                >
                                    <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-blue-400"}`} />
                                    <span>{tab.label}</span>
                                    <span
                                        className={`hidden sm:inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${isActive
                                            ? "bg-white/20 text-white"
                                            : "bg-white/5 text-white/50"
                                            }`}
                                    >
                                        {tab.badge}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Active Tab Explanation Banner */}
                    <div className="max-w-2xl mx-auto mb-7 px-4 py-2 rounded-xl bg-blue-500/5 border border-blue-500/15 text-xs sm:text-sm text-blue-200/90 flex items-center justify-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{currentProduct.description}</span>
                    </div>

                    {/* Interactive Billing Toggle */}
                    <div className="inline-flex items-center p-1 rounded-full bg-[#0d1527] border border-white/15 backdrop-blur-md shadow-xl mb-3">
                        <button
                            type="button"
                            onClick={() => setBillingCycle("monthly")}
                            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${billingCycle === "monthly"
                                ? "bg-blue-600 text-white shadow-md"
                                : "text-white/70 hover:text-white"
                                }`}
                        >
                            Monthly Billing
                        </button>
                        <button
                            type="button"
                            onClick={() => setBillingCycle("annual")}
                            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${billingCycle === "annual"
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

                    <p className="text-white/50 text-xs">
                        All {currentProduct.label} tiers include bank-grade 256-bit encryption &amp; ISO 27001 certified infrastructure.
                    </p>
                </div>
            </section>

            {/* ── 2. PRICING CARDS SECTION ── */}
            <section className="relative px-[5%] lg:px-[6%] pb-20">
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-7 lg:gap-8 items-stretch">
                    {pricingPlans.map((plan) => (
                        <div
                            key={`${activeTab}-${billingCycle}-${plan.name}`}
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
                                <p className="text-white/70 text-sm font-normal mb-6 min-h-[40px]">
                                    {plan.description}
                                </p>

                                {/* Price block */}
                                <div className="pb-6 mb-6 border-b border-white/10">
                                    <div className="text-3xl sm:text-4xl font-black text-white tracking-tight flex items-baseline gap-2">
                                        <span>{plan.price}</span>
                                        {plan.billingPeriod && (
                                            <span className="text-sm font-medium text-white/50">
                                                {plan.billingPeriod}
                                            </span>
                                        )}
                                    </div>
                                    {plan.billedAnnuallyNote && (
                                        <p className="text-[11px] text-emerald-400 font-semibold mt-1">
                                            {plan.billedAnnuallyNote}
                                        </p>
                                    )}
                                    <p className="text-xs text-[#76bbf8] font-medium mt-1">
                                        {plan.subPrice}
                                    </p>
                                </div>

                                {/* Features List */}
                                <div className="space-y-3.5 mb-8">
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-white/50">
                                            What&apos;s Included:
                                        </h4>
                                        <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 text-blue-300 border border-white/10">
                                            {currentProduct.label} • {billingCycle === "monthly" ? "Monthly" : "Annual"}
                                        </span>
                                    </div>
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
                                    className={`w-full py-3.5 px-6 rounded-[16px] font-bold text-[15px] flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${plan.popular
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

            {/* ── 3. DETAILED COMPARISON TABLE SECTION (DYNAMIC PER TAB) ── */}
            <section className="relative px-[5%] lg:px-[6%] py-16 sm:py-20 bg-gradient-to-b from-transparent via-[#060b18] to-transparent">
                <div className="max-w-[1240px] mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12 sm:mb-16">
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-3">
                            <Scale className="w-3.5 h-3.5" />
                            {currentProduct.label} Feature Breakdown
                        </span>
                        <h2 className="text-white text-[28px] sm:text-[38px] lg:text-[44px] font-bold tracking-tight">
                            Detailed {currentProduct.label} Specifications
                        </h2>
                        <p className="text-white/70 text-[15px] sm:text-[17px] max-w-2xl mx-auto mt-2">
                            Compare all technical capabilities, volume allowances, and SLAs across Start, Grow, and Enterprise.
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
                                                For Start-up teams
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
                            Everything you need to know about billing, onboarding, and scaling across API, BGV, and Digital Trust.
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
                                            className={`w-5 h-5 text-white/60 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-blue-400" : ""
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
