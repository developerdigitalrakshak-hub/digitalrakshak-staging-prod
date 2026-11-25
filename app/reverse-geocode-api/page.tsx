"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
    MapPin,
    ArrowRight,
    CheckCircle2,
    Check,
    ChevronDown,
    ShieldCheck,
    Globe,
    Zap,
    TrendingUp,
    Database,
    AlertTriangle,
    Crosshair,
    FileText,
    BarChart3,
    LocateFixed,
    Copy,
    Terminal,
    Workflow,
    Building2,
    Truck,
    Navigation,
    ShoppingBag,
    Users,
    Layers,
    Code2,
    KeyRound,
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
const imgVector2 = `${assetPathPrefix}/50101.svg`;

const faqItems = [
    {
        q: "Q1. What is a Reverse Geocode API?",
        a: "A Reverse Geocode API converts geographical coordinates, such as latitude and longitude, into readable address and location information. It helps applications retrieve corresponding geographical details through an API request.",
    },
    {
        q: "Q2. What is reverse geocoding used for?",
        a: "Reverse geocoding is used to identify readable address information from geographical coordinates. Businesses can incorporate it into logistics, transportation, delivery management and other location-based applications.",
    },
    {
        q: "Q3. What information is required to use the Reverse Geocode API?",
        a: "The API requires two input parameters: latitude and longitude. Both values must be submitted as strings in the JSON request body.",
    },
    {
        q: "Q4. What information does the Reverse Geocode API return?",
        a: "The API response includes address, latitude, longitude, confidence score, city, state, state code, country, country code and ZIP code.",
    },
    {
        q: "Q5. Can Reverse Geocode API convert GPS coordinates into an address?",
        a: "Yes. The API accepts latitude and longitude coordinates and returns corresponding address information, including available geographical details.",
    },
    {
        q: "Q6. Can the Reverse Geocode API identify city and state?",
        a: "Yes. The documented response includes city, state and state code fields, along with other geographical information.",
    },
    {
        q: "Q7. Does the Reverse Geocode API provide postal code information?",
        a: "Yes. The documented API response includes a zipcode field containing the corresponding postal code information.",
    },
    {
        q: "Q8. What is the confidence score in the API response?",
        a: "The confidence score is a numerical field included in the API response to provide additional information about the location result. Its precise scoring methodology and interpretation should be confirmed in the technical documentation.",
    },
    {
        q: "Q9. Can Reverse Geocode API be integrated with existing applications?",
        a: "Yes. The API can be integrated into existing applications through its documented endpoint, authentication headers and JSON request structure.",
    },
    {
        q: "Q10. Who can use DigitalRakshak's Reverse Geocode API?",
        a: "Logistics companies, transportation platforms, e-commerce businesses, technology companies and enterprises can explore the API for applications that require coordinate-to-address conversion.",
    },
    {
        q: "Q11. How can I get access to DigitalRakshak's Reverse Geocode API?",
        a: "Businesses can contact DigitalRakshak to explore API access, obtain the required credentials and understand the integration process.",
    },
];

/* ── SECTION 1: HERO SECTION ── */
function HeroSection() {
    const router = useRouter();

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
                                <LocateFixed className="w-4 h-4 text-[#76bbf8]" />
                                Area Tracking API
                            </span>
                            <h1 className="text-white text-[clamp(28px,7vw,56px)] font-black leading-[1.1] tracking-tight">
                                Reverse Geocode API
                            </h1>
                            <p className="text-white text-[15px] sm:text-[18px] lg:text-[22px] font-medium mt-3 sm:mt-4">
                                Convert Geographic Coordinates Into Meaningful Address Information.
                            </p>
                        </div>

                        <div className="mt-5 sm:mt-8 lg:mt-10">
                            <p className="text-white/90 text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-relaxed max-w-[540px]">
                                Turn geographical coordinates into structured address information with DigitalRakshak&apos;s Reverse Geocode API. Submit latitude and longitude values through a simple API request and retrieve corresponding address details, including city, state, country, postal code and location coordinates. Integrate location-to-address conversion into your existing applications, mapping solutions and location-based business workflows.
                            </p>
                            <div className="flex gap-3 sm:gap-4 mt-5 sm:mt-6 items-center flex-wrap">
                                <button
                                    onClick={() => router.push('/register')}
                                    className="bg-[#B0DAFF] hover:bg-[#76bbf8] text-[#0a1e36] font-semibold text-[14px] sm:text-[15px] px-6 sm:px-8 py-2.5 sm:py-3 rounded-[18px] shadow-[2px_2px_11.4px_0px_#00000040,_5px_-2px_8.7px_0px_#0084FF6B_inset] transition-all flex items-center gap-2 cursor-pointer"
                                >
                                    <span>Get API Access</span>
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => router.push('/contact')}
                                    className="bg-white hover:bg-gray-100 text-[#0a1e36] font-semibold text-[14px] sm:text-[15px] px-6 sm:px-8 py-2.5 sm:py-3 rounded-[18px] shadow-[2px_2px_11.4px_0px_#00000040,_5px_-2px_8.7px_0px_#0084FF6B_inset] transition-all cursor-pointer"
                                >
                                    Book a Meeting
                                </button>
                            </div>

                            {/* Service Highlights */}
                            <div className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8 pt-4 border-t border-white/10 flex-wrap text-white/80 text-[12.5px] sm:text-[13.5px]">
                                <span className="flex items-center gap-1.5"><LocateFixed className="w-4 h-4 text-[#76bbf8]" /> Latitude &amp; Longitude Lookup</span>
                                <span className="text-white/30 hidden sm:inline">•</span>
                                <span className="flex items-center gap-1.5"><Database className="w-4 h-4 text-[#76bbf8]" /> Address Retrieval</span>
                                <span className="text-white/30 hidden sm:inline">•</span>
                                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#76bbf8]" /> City &amp; State Identification</span>
                                <span className="text-white/30 hidden sm:inline">•</span>
                                <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-[#76bbf8]" /> Postal Code Information</span>
                            </div>
                        </div>
                    </div>

                    {/* Right – visual assets */}
                    <div className="lg:col-span-7 relative flex justify-center lg:justify-end items-center w-full mt-4 lg:mt-0">
                        <div className="flex items-center gap-3 sm:gap-6 md:gap-8 w-full max-w-[650px] lg:max-w-none mx-auto">
                            <div className="flex-[326] rounded-[16px] sm:rounded-[22px] lg:rounded-[26px] overflow-hidden shadow-2xl border border-white/10 aspect-[326/354] bg-[#f2f4f7]">
                                <img
                                    alt="Reverse Geocode Dashboard"
                                    className="w-full h-full object-cover object-center"
                                    src={imgFrame19}
                                />
                            </div>
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

/* ── SECTION 2: WHY REVERSE GEOCODING MATTERS ── */
function WhyReverseGeocodingMattersSection() {
    const points = [
        {
            title: "Exact Numerical Coordinates",
            desc: "Geographical coordinates provide the exact numerical representation of a location.",
            icon: Crosshair,
        },
        {
            title: "Readable Address Need",
            desc: "Businesses and operational teams need corresponding address details to understand and manage locations.",
            icon: FileText,
        },
        {
            title: "Bridging the Data Gap",
            desc: "Reverse geocoding bridges this gap by converting latitude and longitude into structured geographical information.",
            icon: Workflow,
        },
        {
            title: "API-Driven Process",
            desc: "DigitalRakshak's Reverse Geocode API enables businesses to submit coordinates and retrieve address details seamlessly.",
            icon: Zap,
        },
    ];

    return (
        <section className="relative py-16 sm:py-24 px-[5%] lg:px-[6%] bg-[#05070f] overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="relative z-10 max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 text-[#76bbf8] border border-blue-400/30 text-xs font-semibold uppercase tracking-wider mb-4">
                        2. Why Reverse Geocoding Matters
                    </span>
                    <h2 className="text-white text-[clamp(26px,4vw,44px)] font-bold tracking-tight mb-6 leading-tight">
                        Convert Location Coordinates Into Usable Address Information
                    </h2>
                    <p className="text-white/80 text-[15px] sm:text-[17px] leading-relaxed mb-4">
                        Geographical coordinates provide the exact numerical representation of a location, but businesses often need readable address information to make that data useful within their applications.
                    </p>
                    <p className="text-white/70 text-[14px] sm:text-[16px] leading-relaxed mb-4">
                        For example, logistics platforms may work with geographical coordinates, while their operational teams need corresponding address details to understand and manage locations.
                    </p>
                    <p className="text-white/70 text-[14px] sm:text-[16px] leading-relaxed mb-8">
                        Reverse geocoding bridges this gap by converting latitude and longitude into structured geographical information. DigitalRakshak&apos;s Reverse Geocode API enables businesses to submit location coordinates and retrieve corresponding address details through an API-driven process. This helps incorporate location-to-address conversion into existing digital applications and location-based workflows.
                    </p>
                </div>

                <div className="lg:col-span-6 grid sm:grid-cols-2 gap-5">
                    {points.map((p, i) => (
                        <div
                            key={i}
                            className="p-6 rounded-2xl bg-[#0c101d]/90 backdrop-blur-xl border border-white/10 hover:border-blue-400/50 hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-blue-500/15 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-[#76bbf8]">
                                <p.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
                            <p className="text-white/70 text-xs sm:text-sm leading-relaxed">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ── SECTION 3: WHAT CAN YOU DO WITH REVERSE GEOCODE API? ── */
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
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 w-12 h-12 rounded-full bg-[#0088FF]/50 border-2 border-[#38bdf8]/70 shadow-[0_0_22px_rgba(0,136,255,0.65)] backdrop-blur-md flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_28px_rgba(0,136,255,0.9)]">
                <img
                    alt=""
                    src={icon}
                    className="w-6 h-6 object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                />
            </div>
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

function WhatYouCanDoSection() {
    const cards = [
        {
            title: "1. Convert Coordinates Into Addresses",
            desc: "Submit latitude and longitude values to retrieve the corresponding readable address information.",
            icon: imgSvgRepoIconCarrier,
        },
        {
            title: "2. Identify City and State",
            desc: "Retrieve geographical information such as city, state and state code associated with the submitted coordinates.",
            icon: imgSvgRepoIconCarrier,
        },
        {
            title: "3. Retrieve Postal Information",
            desc: "Access the corresponding postal or ZIP code as part of the returned location information.",
            icon: imgSvgRepoIconCarrier,
        },
        {
            title: "4. Identify Country Information",
            desc: "Retrieve country and country code details associated with the geographical coordinates.",
            icon: imgSvgRepoIconCarrier,
        },
        {
            title: "5. Access Location Confidence Information",
            desc: "Retrieve the confidence score returned by the API to support the interpretation of the location result.",
            icon: imgSvgRepoIconCarrier,
        },
        {
            title: "6. Integrate Location Data Into Applications",
            desc: "Use the returned address and geographical information within your existing business applications and location-based workflows.",
            icon: imgSvgRepoIconCarrier,
        },
    ];

    return (
        <section id="api-product" className="relative pt-10 sm:pt-14 pb-8 sm:pb-12 px-[5%] lg:px-[6%]">
            <div className="absolute left-[-10%] top-[-10%] w-full max-w-[848px] pointer-events-none select-none opacity-70 mix-blend-screen">
                <img
                    alt=""
                    className="w-full h-full object-contain"
                    src={imgEllipse19}
                />
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto">
                <div className="text-center mb-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/15 text-purple-300 border border-purple-400/30 text-xs font-semibold uppercase tracking-wider mb-3">
                        3. What Can You Do With Reverse Geocode API?
                    </span>
                    <h2 className="text-white text-[clamp(24px,4vw,42px)] font-bold text-center tracking-tight mb-3">
                        Turn Geographic Coordinates Into Structured Location Details
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-5 gap-y-10 sm:gap-y-16 justify-items-center">
                    {cards.map((c, i) => (
                        <FeatureCard key={i} icon={c.icon} title={c.title} desc={c.desc} />
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ── SECTION 4: REVERSE GEOCODE API CAPABILITIES ── */
function CapabilitiesSection() {
    const [copied, setCopied] = useState(false);

    const responseParameters = [
        { param: "Address", desc: "Corresponding readable address" },
        { param: "Latitude", desc: "Latitude coordinate" },
        { param: "Longitude", desc: "Longitude coordinate" },
        { param: "Confidence Score", desc: "Location confidence score" },
        { param: "City", desc: "Associated city name" },
        { param: "State", desc: "Associated state name" },
        { param: "State Code", desc: "State identification code" },
        { param: "Country", desc: "Associated country name" },
        { param: "Country Code", desc: "Country identification code" },
        { param: "Zip Code", desc: "Corresponding postal code" },
    ];

    const sampleResponseCode = `{
  "address": "9, SANDHYA AVENUE, CHANDLODIYA, AHMEDABAD, GUJARAT",
  "latitude": "23.0889759",
  "longitude": "72.54467819999999",
  "confidenceScore": 1,
  "city": "AHMEDABAD",
  "state": "GUJARAT",
  "stateCode": "GJ",
  "country": "INDIA",
  "countryCode": "IN",
  "zipcode": "382481"
}`;

    const handleCopy = () => {
        navigator.clipboard.writeText(sampleResponseCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="relative py-16 sm:py-24 px-[5%] lg:px-[6%]">
            <div className="relative z-10 max-w-[1400px] mx-auto">
                <div className="text-center mb-12">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 text-[#76bbf8] border border-blue-400/30 text-xs font-semibold uppercase tracking-wider mb-3">
                        4. Reverse Geocode API Capabilities
                    </span>
                    <h2 className="text-white text-[clamp(26px,4vw,44px)] font-bold tracking-tight mb-4">
                        Access Structured Address Information Through One API
                    </h2>
                    <p className="text-white/70 text-[15px] sm:text-[17px] max-w-3xl mx-auto">
                        DigitalRakshak&apos;s Reverse Geocode API converts geographical coordinates into structured location information. By submitting latitude and longitude values, businesses can retrieve corresponding address details and geographical attributes through a single API request.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-start max-w-[1300px] mx-auto">
                    {/* Left: Information Available Through the API Table */}
                    <div className="lg:col-span-6 rounded-2xl bg-[#0c101d] border border-white/10 p-6 shadow-2xl overflow-hidden">
                        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                            <Database className="w-5 h-5 text-[#76bbf8]" />
                            Information Available Through the API
                        </h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-xs sm:text-sm text-left">
                                <thead>
                                    <tr className="border-b border-white/10 text-white/50">
                                        <th className="pb-3 font-semibold">Response Parameter</th>
                                        <th className="pb-3 font-semibold">Information Available</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5 text-white/80">
                                    {responseParameters.map((row, i) => (
                                        <tr key={i} className="hover:bg-white/[0.02]">
                                            <td className="py-2.5 font-mono text-[#76bbf8] font-medium">{row.param}</td>
                                            <td className="py-2.5 text-white/70">{row.desc}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Right: API Request Info, Body, Input Parameters Table & Response */}
                    <div className="lg:col-span-6 space-y-5">
                        {/* API Request Information Box */}
                        <div className="rounded-2xl bg-[#090c16] border border-white/15 p-5 shadow-2xl">
                            <div className="text-xs font-semibold text-[#76bbf8] uppercase tracking-wider mb-2">
                                API Request Information
                            </div>
                            <div className="text-xs font-mono text-white/80 space-y-1">
                                <div><span className="text-white/50">HTTP Method:</span> <span className="text-emerald-400 font-bold">POST</span></div>
                                <div className="break-all"><span className="text-white/50">Sandbox API Endpoint:</span> <span className="text-blue-300">https://uat.digitalrakshak.io/api/v1/geocoding/reverse-geocode</span></div>
                                <div className="pt-2 text-white/50">Required Request Headers:</div>
                                <div className="pl-3 text-white/70">
                                    • <span className="text-amber-300">Authorization:</span> Bearer access token<br />
                                    • <span className="text-amber-300">apikey:</span> API key
                                </div>
                            </div>

                            <div className="mt-4 pt-3 border-t border-white/10">
                                <div className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Request Body:</div>
                                <pre className="p-3 rounded-xl bg-black/60 text-xs font-mono text-emerald-300 overflow-x-auto">
                                    {`{
  "latitude": "21.153774",
  "longitude": "79.042549"
}`}
                                </pre>
                            </div>
                        </div>

                        {/* Required Input Parameters Table */}
                        <div className="rounded-2xl bg-[#0c101d] border border-white/10 p-5 shadow-xl">
                            <h4 className="text-white font-bold text-sm mb-3">Required Input Parameters:</h4>
                            <table className="w-full text-xs text-left">
                                <thead>
                                    <tr className="border-b border-white/10 text-white/50">
                                        <th className="pb-2 font-semibold">Parameter</th>
                                        <th className="pb-2 font-semibold">Data Type</th>
                                        <th className="pb-2 font-semibold">Requirement</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5 text-white/80">
                                    <tr>
                                        <td className="py-2 font-mono text-[#76bbf8]">latitude</td>
                                        <td className="py-2 text-white/70">String</td>
                                        <td className="py-2 text-emerald-400 font-semibold">Required</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 font-mono text-[#76bbf8]">longitude</td>
                                        <td className="py-2 text-white/70">String</td>
                                        <td className="py-2 text-emerald-400 font-semibold">Required</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Sample API Response Box */}
                        <div className="rounded-2xl bg-[#090c16] border border-white/15 overflow-hidden shadow-2xl">
                            <div className="flex items-center justify-between px-4 py-3 bg-[#111624] border-b border-white/10">
                                <div className="text-xs font-semibold text-white/80">Sample API Response</div>
                                <button
                                    onClick={handleCopy}
                                    className="text-xs text-white/70 hover:text-white flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 transition-all cursor-pointer"
                                >
                                    <Copy className="w-3.5 h-3.5" />
                                    {copied ? "Copied!" : "Copy JSON"}
                                </button>
                            </div>
                            <pre className="p-4 text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed">
                                {sampleResponseCode}
                            </pre>
                            <div className="p-3 bg-white/[0.02] border-t border-white/5 text-[11px] text-white/50 italic">
                                Note: The above is a representative response based on the supplied sandbox API documentation screenshot. Actual results depend on the submitted coordinates and API response.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ── SECTION 5: CONNECT REVERSE GEOCODE API WITH YOUR EXISTING SYSTEMS ── */
function ConnectSystemsSection() {
    const options = [
        {
            title: "Logistics and delivery management platforms",
            desc: "Embed coordinate-to-address lookups to streamline dispatching, package sorting, and route confirmations.",
            icon: Truck,
        },
        {
            title: "Transportation and mobility applications",
            desc: "Convert live driver and rider GPS pins into human-readable pickup and drop-off address lines.",
            icon: Navigation,
        },
        {
            title: "E-commerce and delivery platforms",
            desc: "Standardize customer shipping locations directly from map pin selections during checkout.",
            icon: ShoppingBag,
        },
        {
            title: "Location-based business applications",
            desc: "Incorporate coordinate-to-address conversion into geospatial dashboards and geo-analytics tools.",
            icon: Globe,
        },
        {
            title: "Field workforce management systems",
            desc: "Validate field technician and executive check-in locations from mobile GPS coordinates.",
            icon: Users,
        },
        {
            title: "Enterprise applications and CRM platforms",
            desc: "Enrich enterprise client records with verified city, state, country, and postal code data.",
            icon: Building2,
        },
    ];

    return (
        <section className="relative py-16 sm:py-24 px-[5%] lg:px-[6%] bg-[#05070f]">
            <div className="relative z-10 max-w-[1400px] mx-auto">
                <div className="text-center mb-14">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/30 text-xs font-semibold uppercase tracking-wider mb-3">
                        5. Connect Reverse Geocode API With Your Existing Systems
                    </span>
                    <h2 className="text-white text-[clamp(26px,4vw,44px)] font-bold tracking-tight mb-4">
                        Bring Location Intelligence Into Your Business Applications
                    </h2>
                    <p className="text-white/70 text-[15px] sm:text-[17px] max-w-2xl mx-auto">
                        Integrate coordinate-to-address conversion directly into your existing technology infrastructure with DigitalRakshak&apos;s Reverse Geocode API. Retrieve structured location information and incorporate it into applications that work with geographical coordinates.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {options.map((item, i) => (
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

/* ── SECTION 6: HOW IT WORKS ── */
function HowItWorksSection() {
    const steps = [
        {
            step: "01",
            title: "Submit Geographic Coordinates",
            desc: "Provide the latitude and longitude values of the location you want to identify.",
            icon: Crosshair,
        },
        {
            step: "02",
            title: "Authenticate Your API Request",
            desc: "Include the required Authorization token and API key in the request headers.",
            icon: KeyRound,
        },
        {
            step: "03",
            title: "Process Location Information",
            desc: "Send the POST request to the Reverse Geocode API endpoint to initiate the coordinate-to-address lookup.",
            icon: Zap,
        },
        {
            step: "04",
            title: "Retrieve Address Details",
            desc: "Receive the API response containing the available address, city, state, country, postal code and other geographical attributes.",
            icon: BarChart3,
        },
        {
            step: "05",
            title: "Integrate Into Your Application",
            desc: "Use the returned location information within your existing business applications, location-based services and operational workflows.",
            icon: Workflow,
        },
    ];

    return (
        <section className="relative py-16 sm:py-24 px-[5%] lg:px-[6%] bg-black">
            <div className="relative z-10 max-w-[1400px] mx-auto">
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 text-[#76bbf8] border border-blue-400/30 text-xs font-semibold uppercase tracking-wider mb-3">
                        6. How It Works
                    </span>
                    <h2 className="text-white text-[clamp(26px,4vw,44px)] font-bold tracking-tight mb-4">
                        How DigitalRakshak&apos;s Reverse Geocode API Works
                    </h2>
                    <p className="text-white/70 text-[15px] sm:text-[17px] max-w-2xl mx-auto">
                        Five simple, structured steps to convert coordinates into verified address details.
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

/* ── SECTION 7: KEY BENEFITS FOR YOUR BUSINESS ── */
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
                    id="cardGlowLinearBaseGeoRev"
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
                    id="cardGlowRadLeftGeoRev"
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
                    id="cardGlowRadRightGeoRev"
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

            <rect width="100%" height="100%" fill="url(#cardGlowLinearBaseGeoRev)" />
            <rect width="100%" height="100%" fill="url(#cardGlowRadLeftGeoRev)" />
            <rect width="100%" height="100%" fill="url(#cardGlowRadRightGeoRev)" />
        </svg>
    );
}

function KeyBenefitsSection() {
    const benefits = [
        {
            title: "Coordinates to Address Conversion",
            desc: "Convert latitude and longitude values into readable address information through an API request.",
            icon: Crosshair,
        },
        {
            title: "Structured Location Information",
            desc: "Retrieve address, city, state, country and postal code information in a structured response.",
            icon: Database,
        },
        {
            title: "Simplified API Integration",
            desc: "Connect location-to-address conversion capabilities with your existing technology infrastructure.",
            icon: Zap,
        },
        {
            title: "Support Location-Based Workflows",
            desc: "Use geographical address information across relevant transportation, logistics and business applications.",
            icon: TrendingUp,
        },
        {
            title: "Developer-Friendly Integration",
            desc: "Allow your development teams to incorporate reverse geocoding into applications using a defined API endpoint and request structure.",
            icon: FileText,
        },
        {
            title: "Location Confidence Information",
            desc: "Access the confidence score returned with the location result to support downstream application workflows.",
            icon: ShieldCheck,
        },
    ];

    return (
        <section className="relative py-16 sm:py-24 px-[5%] lg:px-[6%] overflow-hidden bg-[#05070f]">
            <div className="max-w-[1320px] mx-auto relative z-10">
                <div className="text-center mb-12 sm:mb-16">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 text-[#76bbf8] border border-blue-400/30 text-xs font-semibold uppercase tracking-wider mb-3">
                        7. Key Benefits for Your Business
                    </span>
                    <h2 className="text-white text-[28px] sm:text-[36px] lg:text-[42px] font-bold tracking-tight mb-4">
                        Make Geographic Data More Useful for Your Business
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 justify-items-center">
                    {benefits.map((benefit, idx) => (
                        <div
                            key={idx}
                            className="relative w-full max-w-[406px] min-h-[280px] sm:min-h-[300px] rounded-[18px] border-[2px] border-[#DFC6FF] p-6 sm:p-8 flex flex-col justify-start overflow-hidden group hover:scale-[1.015] hover:shadow-[0_0_35px_rgba(223,198,255,0.3)] transition-all duration-300"
                        >
                            <BenefitCardGlow />

                            <div className="relative z-10 flex items-center gap-3.5 mb-5 sm:mb-6">
                                <div className="w-[46px] h-[46px] sm:w-[50px] sm:h-[50px] rounded-full bg-[#1b2234]/90 border border-white/20 flex items-center justify-center shrink-0 shadow-inner group-hover:border-white/40 transition-colors">
                                    <benefit.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white stroke-[1.8]" />
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
            </div>
        </section>
    );
}

/* ── SECTION 8: USE CASES ── */
function UseCasesSection() {
    const useCases = [
        {
            title: "Logistics & Delivery Management",
            desc: "Convert geographical coordinates into readable address information to support location-related logistics and delivery workflows.",
            icon: Truck,
        },
        {
            title: "Transportation & Mobility",
            desc: "Use coordinate-to-address conversion in transportation applications that work with geographical location data.",
            icon: Navigation,
        },
        {
            title: "E-commerce & Delivery Platforms",
            desc: "Incorporate location-to-address lookup into applications handling geographical coordinates for delivery-related workflows.",
            icon: ShoppingBag,
        },
        {
            title: "Field Workforce Management",
            desc: "Convert submitted geographical coordinates into address information to support location identification within field operations.",
            icon: Users,
        },
        {
            title: "Location-Based Applications",
            desc: "Integrate reverse geocoding into applications that require readable address details from latitude and longitude values.",
            icon: Globe,
        },
        {
            title: "Enterprise Applications",
            desc: "Use structured geographical information within business applications, operational systems and location-based workflows.",
            icon: Building2,
        },
    ];

    return (
        <section className="relative py-16 sm:py-24 px-[5%] lg:px-[6%] bg-black">
            <div className="relative z-10 max-w-[1400px] mx-auto">
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/30 text-xs font-semibold uppercase tracking-wider mb-3">
                        8. Use Cases
                    </span>
                    <h2 className="text-white text-[clamp(26px,4vw,44px)] font-bold tracking-tight mb-4">
                        Where Can Businesses Use Reverse Geocode API?
                    </h2>
                    <p className="text-white/70 text-[15px] sm:text-[17px] max-w-2xl mx-auto">
                        Explore relevant business domains where coordinate-to-address conversion drives efficiency.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                            <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-[#76bbf8]">
                                <span>Enterprise Workflow</span>
                                <CheckCircle2 className="w-4 h-4" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ── SECTION 9: API INTEGRATION REQUIREMENTS ── */
function ApiRequirementsSection() {
    const router = useRouter();

    const requirements = [
        { req: "API Method", details: "POST" },
        { req: "Authentication", details: "Bearer Token" },
        { req: "API Credential", details: "API Key" },
        { req: "Content Type", details: "application/json" },
        { req: "Required Input", details: "latitude, longitude" },
        { req: "Input Data Type", details: "String" },
        { req: "Request Format", details: "JSON" },
        { req: "Environment Shown", details: "Sandbox" },
    ];

    const steps = [
        "Obtain DigitalRakshak API access credentials.",
        "Configure the required authentication headers.",
        "Provide latitude and longitude in the JSON request body.",
        "Send the POST request to the Reverse Geocode API endpoint.",
        "Retrieve the structured location response.",
        "Process the returned address information within your application.",
    ];

    return (
        <section className="relative py-16 sm:py-24 px-[5%] lg:px-[6%] bg-[#05070f]">
            <div className="relative z-10 max-w-[1400px] mx-auto">
                <div className="text-center mb-14">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 text-[#76bbf8] border border-blue-400/30 text-xs font-semibold uppercase tracking-wider mb-3">
                        9. API Integration Requirements
                    </span>
                    <h2 className="text-white text-[clamp(26px,4vw,44px)] font-bold tracking-tight mb-4">
                        Get Started With DigitalRakshak Reverse Geocode API
                    </h2>
                    <p className="text-white/70 text-[15px] sm:text-[17px] max-w-xl mx-auto">
                        Integrate coordinate-to-address conversion into your applications using the documented API request structure.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {/* Requirements Table */}
                    <div className="lg:col-span-7 overflow-x-auto rounded-2xl border border-white/15 bg-[#0a0d18] shadow-2xl [scrollbar-width:thin]">
                        <div className="p-4 bg-white/[0.03] border-b border-white/10 font-bold text-white text-base">
                            Integration Requirements
                        </div>
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-white/10 bg-white/[0.02]">
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

/* ── SECTION 10: FREQUENTLY ASKED QUESTIONS ── */
function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faqs" className="relative py-12 sm:py-16 px-[5%] lg:px-[6%] bg-black">
            <div className="max-w-[1400px] mx-auto">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 text-[#76bbf8] border border-blue-400/30 text-xs font-semibold uppercase tracking-wider mb-3">
                    10. Frequently Asked Questions
                </span>
                <h2 className="text-white text-[clamp(28px,3vw,42px)] font-bold mb-2 tracking-tight">
                    Reverse Geocode API – Frequently Asked Questions
                </h2>
                <p className="text-white/70 text-[15px] sm:text-[17px] mb-10">
                    Everything you need to know about integrating DigitalRakshak&apos;s Reverse Geocode API.
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

/* ── SECTION 11: FINAL CTA SECTION ── */
function FinalCTASection() {
    const router = useRouter();

    return (
        <section className="relative py-20 px-[5%] lg:px-[6%] bg-[#05070f] overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/20 to-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="relative z-10 max-w-[1100px] mx-auto text-center">
                <div className="p-8 sm:p-14 rounded-3xl bg-[#0d1120]/90 backdrop-blur-2xl border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/15 text-[#76bbf8] border border-blue-400/30 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4">
                        <LocateFixed className="w-4 h-4 text-[#76bbf8]" />
                        11. Final CTA Section
                    </span>
                    <h2 className="text-white text-[clamp(28px,4.5vw,50px)] font-black tracking-tight mb-5 leading-tight">
                        Convert Coordinates Into Meaningful Location Information
                    </h2>
                    <p className="text-white/80 text-[15px] sm:text-[18px] max-w-2xl mx-auto mb-4 leading-relaxed">
                        Make geographical data more useful within your business applications with DigitalRakshak&apos;s Reverse Geocode API.
                    </p>
                    <p className="text-white/70 text-[14px] sm:text-[16px] max-w-2xl mx-auto mb-8 leading-relaxed">
                        Retrieve structured address information from latitude and longitude coordinates and integrate location-to-address conversion into your existing digital workflows.
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
                            Talk to Our API Team
                        </button>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-6 text-xs text-white/60 flex-wrap">
                        <span className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Latitude &amp; Longitude Lookup
                        </span>
                        <span className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Address Retrieval
                        </span>
                        <span className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> City &amp; State Identification
                        </span>
                        <span className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Postal Code Information
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ── MAIN EXPORT: EXACT 11 SECTIONS IN ORDER OF DOCUMENT ── */
export default function ReverseGeocodeApiPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Reverse Geocode API for Businesses",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "All",
        "provider": {
            "@type": "Organization",
            "name": "DigitalRakshak",
            "url": "https://digitalrakshak.com",
        },
        "description":
            "Convert latitude and longitude into structured address details with DigitalRakshak's Reverse Geocode API. Integrate location lookup into your applications.",
        "keywords": [
            "Reverse Geocode API",
            "Reverse Geocoding API",
            "Latitude Longitude to Address API",
            "Coordinates to Address API",
            "GPS Coordinates to Address API",
            "Location Geocoding API",
            "Address Lookup API",
            "Reverse Geocoding Services",
            "Coordinate to Address Conversion",
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

            {/* 2. WHY REVERSE GEOCODING MATTERS */}
            <WhyReverseGeocodingMattersSection />

            {/* 3. WHAT CAN YOU DO WITH REVERSE GEOCODE API? */}
            <WhatYouCanDoSection />

            {/* 4. REVERSE GEOCODE API CAPABILITIES */}
            <CapabilitiesSection />

            {/* 5. CONNECT REVERSE GEOCODE API WITH YOUR EXISTING SYSTEMS */}
            <ConnectSystemsSection />

            {/* 6. HOW IT WORKS */}
            <HowItWorksSection />

            {/* 7. KEY BENEFITS FOR YOUR BUSINESS */}
            <KeyBenefitsSection />

            {/* 8. USE CASES */}
            <UseCasesSection />

            {/* 9. API INTEGRATION REQUIREMENTS */}
            <ApiRequirementsSection />

            {/* 10. FREQUENTLY ASKED QUESTIONS */}
            <FAQSection />

            {/* 11. FINAL CTA SECTION */}
            <FinalCTASection />
        </div>
    );
}
