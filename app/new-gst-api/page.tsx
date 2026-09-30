"use client";
import { useState } from "react";
import { BadgeCheck } from "lucide-react";
import GstNavbar from "./components/GstNavbar";

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
    q: "What is a GSTIN Verification API?",
    a: "A GSTIN Verification API enables businesses to integrate relevant GST-related verification capabilities into their applications and business workflows instead of relying only on manual processes.",
  },
  {
    q: "Who can use GST Verification Services?",
    a: "GST Verification Services are available for businesses, enterprises, Application Service Providers (ASPs), and GST Suvidha Providers (GSPs) who need to integrate GST capabilities into their systems.",
  },
  {
    q: "Can the GST Verification API be integrated with ERP or invoicing systems?",
    a: "Yes. The API is designed to integrate with ERP systems, invoicing platforms, business applications, internal compliance workflows and financial workflows.",
  },
  {
    q: "Which GST services require taxpayer consent?",
    a: "Consent-based services such as accessing GSTR filings, returns and related financial data require OTP-based taxpayer or borrower consent, as applicable.",
  },
  {
    q: "Can GST Verification Services support vendor or merchant onboarding?",
    a: "Yes. GST verification can be embedded into vendor and merchant onboarding workflows to automate business validation as part of the onboarding process.",
  },
];

function HeroSection() {
  return (
    <section className="relative min-h-0 lg:min-h-[100dvh] overflow-hidden px-[5%] lg:px-[6%] flex flex-col justify-between pt-24 sm:pt-28 lg:pt-24 pb-12 sm:pb-16">
      {/* Background Video with instant poster and gradient overlay (replaces 50MB GIF for 0ms lag) */}
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
              <h1 className="text-white text-[clamp(28px,7vw,56px)] font-black leading-[1.1] tracking-tight">
                GST Verification<br />Services (GVS)
              </h1>
              <p className="text-white text-[15px] sm:text-[18px] lg:text-[22px] font-medium mt-3 sm:mt-4">
                Verify GST Details. Integrate GST Workflows.
              </p>
            </div>

            <div className="mt-5 sm:mt-8 lg:mt-10">
              <p className="text-white/90 text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-relaxed max-w-[540px]">
                Access GSTIN and available GST information through portal or
                API-based workflows, with support for GSTR, GST filing, e-Invoicing
                and e-Way Bills.
              </p>
              <div className="flex gap-3 sm:gap-4 mt-5 sm:mt-6 items-center flex-wrap">
                <button className="bg-[#B0DAFF] hover:bg-[#76bbf8] text-[#0a1e36] font-semibold text-[14px] sm:text-[15px] px-6 sm:px-8 py-2.5 sm:py-3 rounded-[18px] shadow-[2px_2px_11.4px_0px_#00000040,_5px_-2px_8.7px_0px_#0084FF6B_inset] transition-all">
                  Demo
                </button>
                <button className="bg-white hover:bg-gray-100 text-[#0a1e36] font-semibold text-[14px] sm:text-[15px] px-6 sm:px-8 py-2.5 sm:py-3 rounded-[18px] shadow-[2px_2px_11.4px_0px_#00000040,_5px_-2px_8.7px_0px_#0084FF6B_inset] transition-all">
                  Get API Access
                </button>
              </div>
            </div>
          </div>

          {/* Right – product screenshots */}
          <div className="lg:col-span-7 relative flex justify-center lg:justify-end items-center w-full mt-4 lg:mt-0">
            <div className="flex items-center gap-3 sm:gap-6 md:gap-8 w-full max-w-[650px] lg:max-w-none mx-auto">
              {/* Main card - left */}
              <div className="flex-[326] rounded-[16px] sm:rounded-[22px] lg:rounded-[26px] overflow-hidden shadow-2xl border border-white/10 aspect-[326/354] bg-[#f2f4f7]">
                <img
                  alt="GVS Dashboard"
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

// Card that uses imgFrame70 as its own shape (blue circle + card body baked in)
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
    <div className="relative w-full max-w-[227px] h-[349px] mx-auto flex-shrink-0 flex flex-col justify-start">
      {/* imgFrame70 SVG = blue-circle header + rounded-rect card body */}
      <div className="absolute inset-0 w-full h-[349px] pointer-events-none">
        <img
          alt=""
          src={imgFrame70}
          className="w-full h-full block object-fill"
        />
      </div>
      {/* Icon sits on the glowing circle */}
      <div
        className="absolute overflow-hidden z-10"
        style={{
          top: 17,
          left: "50%",
          transform: "translateX(-50%)",
          width: 40,
          height: 40,
        }}
      >
        <div className="absolute inset-[8%]">
          <img alt="" className="w-full h-full" src={icon} />
        </div>
      </div>
      {/* Text content inside the card body */}
      <div className="relative z-10 px-4 pt-[88px] pb-6 text-center sm:text-left flex flex-col justify-start">
        <p className="text-white text-[16px] sm:text-[18px] font-semibold leading-[22px] sm:leading-[24px] mb-2">
          {title}
        </p>
        <p className="text-white/90 text-[13px] sm:text-[14px] font-normal leading-[19px] sm:leading-[21px]">
          {desc}
        </p>
      </div>
    </div>
  );
}

function WhatCanYouDoSection() {
  const cards = [
    {
      title: "1. Verify GSTIN Details",
      desc: "Check GSTIN, business name, address, constitution, registration date and taxpayer type.",
      icon: imgSvgRepoIconCarrier,
    },
    {
      title: "Check GST Filing Status",
      desc: "View available GST return filing status, filing dates and month-wise filing details.",
      icon: imgSvgRepoIconCarrier,
    },
    {
      title: "Access GSTR Information",
      desc: "Access available GST invoice and summary information based on service & authorisation requirements.",
      icon: imgSvgRepoIconCarrier,
    },
    {
      title: "Integrate e-Invoicing",
      desc: "Support relevant e-Invoicing workflows through API integration.",
      icon: imgSvgRepoIconCarrier,
    },
    {
      title: "Manage E- Way Bills",
      desc: "Integrate relevant E-Way Bill workflows into business or invoicing processes.",
      icon: imgSvgRepoIconCarrier,
    },
  ];

  return (
    <section id="api-product" className="relative py-16 sm:py-20 px-[5%] lg:px-[6%]">
      {/* Ellipse 19 glow */}
      <div className="absolute left-[-10%] top-[-10%] w-full max-w-[848px] pointer-events-none select-none opacity-70 mix-blend-screen">
        <img
          alt=""
          className="w-full h-full object-contain"
          src={imgEllipse19}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto">
        <h2 className="text-white text-[clamp(22px,4vw,40px)] font-bold text-center mb-12 sm:mb-20">
          What Can You Do with GST Verification Service
        </h2>
        {/* Cards grid layout - no card overlapping */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10 sm:gap-y-16 justify-items-center">
          {cards.map((c, i) => (
            <FeatureCard key={i} icon={c.icon} title={c.title} desc={c.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VerificationCardsSection() {
  return (
    <section className="relative py-12 sm:py-16 px-[5%] lg:px-[6%]">
      <div className="relative z-10 max-w-[1240px] mx-auto">
        <h2 className="text-white text-[22px] sm:text-[30px] lg:text-[34px] font-bold text-center tracking-tight mb-8 sm:mb-12">
          General | Consent Based Verification
        </h2>

        {/* Outer Blue Border Box matching screenshot */}
        <div className="relative bg-[#040d24]/70 border-2 border-[#1677ff] rounded-[20px] p-5 sm:p-8 lg:p-10 shadow-[0_0_35px_rgba(22,119,255,0.35)] backdrop-blur-md">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 divide-y md:divide-y-0 md:divide-x divide-white/15">
            {/* General Verification */}
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
                <h3 className="text-white text-[19px] sm:text-[22px] font-semibold leading-tight">
                  General Verification
                </h3>
              </div>
              <p className="text-white/70 text-[13px] font-normal leading-relaxed mb-4 sm:mb-5">
                Taxpayer or borrower consent is not required for these services.
              </p>
              <ol className="text-white/90 text-[13.5px] sm:text-[15px] font-medium leading-[24px] sm:leading-[26px] list-decimal list-inside space-y-1 sm:space-y-1.5 pl-1">
                {[
                  "GSTIN",
                  "Taxpayer name",
                  "Address",
                  "Business constitution",
                  "Date of registration",
                  "Taxpayer type",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>

            {/* Consent Verification */}
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
                <h3 className="text-white text-[19px] sm:text-[22px] font-semibold leading-tight">
                  Consent Verification
                </h3>
              </div>
              <p className="text-white/70 text-[13px] font-normal leading-relaxed mb-4 sm:mb-5">
                These services require borrower/taxpayer consent and/or OTP, as applicable
              </p>
              <ol className="text-white/90 text-[13.5px] sm:text-[15px] font-medium leading-[24px] sm:leading-[26px] list-decimal list-inside space-y-1 sm:space-y-1.5 pl-1">
                {[
                  "GSTR-1 invoices",
                  "GSTR-1 monthly summary",
                  "Half-yearly GSTR-1 summary",
                  "GSTR-2A invoices",
                  "Half-yearly GSTR-2A summary",
                  "GSTR-3B monthly summary",
                  "Dealer GST compliance reports",
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

function ConnectAPISection() {
  const workflows = [
    {
      title: "Accounts Payable",
      desc: "Use GST verification as part of vendor validation and internal financial workflows before processing relevant vendor transactions.",
    },
    {
      title: "Merchant Onboarding",
      desc: "Integrate GST-related business verification into merchant or business onboarding workflows.",
    },
    {
      title: "SME Lending",
      desc: "Use relevant GST-related information as part of broader business verification and lending workflows, where applicable.",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 px-[5%] lg:px-[6%] overflow-hidden">
      <div className="relative z-10 max-w-[1240px] mx-auto">
        {/* Section Heading */}
        <h2 className="text-white text-[24px] sm:text-[30px] lg:text-[34px] font-bold text-center tracking-tight mb-12 sm:mb-16">
          Connect GST Verification API With Your Existing System
        </h2>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 items-start justify-items-center">
          {/* LEFT COLUMN: Blue Box (543x241) + Integrate with + Book a Demo */}
          <div className="w-full max-w-[543px] flex flex-col">
            {/* Top Blue Glowing Box (exact 543 x 241 px from Figma screenshot) */}
            <div className="w-full min-h-[200px] h-auto sm:h-[241px] bg-gradient-to-b from-[#b2daff] to-[#92c8fc] border-2 border-[#54b4ff] rounded-[20px] p-6 sm:p-9 flex items-center shadow-[0_0_35px_rgba(84,180,255,0.45),0_0_12px_rgba(84,180,255,0.3)]">
              <p className="text-[#081a2e] text-[15px] sm:text-[16px] lg:text-[17px] font-normal leading-[1.65] tracking-normal">
                GST-related processes do not always need to be managed separately. API integration options for relevant businesses, corporates and Application Service Providers.
              </p>
            </div>

            {/* Integrate with: Heading */}
            <h4 className="text-white font-bold text-[18px] sm:text-[19px] mt-8 mb-4">
              Integrate with:
            </h4>

            {/* Numbered List */}
            <div className="space-y-3 text-white/90 text-[14px] sm:text-[15px] font-medium pl-1">
              <div>1. ERP systems</div>
              <div>2. Invoicing systems</div>
              <div>3. Business applications</div>
              <div>4. Internal compliance workflows</div>
              <div>5. Financial workflows</div>
              <div>6. Enterprise technology platforms</div>
            </div>

            {/* Sub-text */}
            <p className="text-white/80 text-[13px] sm:text-[14px] leading-relaxed mt-6 mb-7 pl-1">
              The GSP service also provides pass-through API capabilities for applicable GST-related processes.
            </p>

            {/* Book a Demo Button */}
            <a
              href="#contact"
              className="w-full max-w-[440px] text-center bg-[#b0daff] hover:bg-[#8ec7fc] text-[#081a2e] font-semibold text-[15px] py-3.5 px-8 rounded-[18px] shadow-[0_4px_16px_rgba(0,0,0,0.3)] transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
            >
              Book a Demo
            </a>
          </div>

          {/* RIGHT COLUMN: Practical Business Workflows + 3 Lavender Glowing Cards */}
          <div className="w-full max-w-[543px] flex flex-col">
            {/* Column Heading */}
            <h3 className="text-white font-bold text-[22px] sm:text-[24px] mb-6">
              Practical Business Workflows
            </h3>

            {/* 3 Glowing Lavender/Lilac Cards */}
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
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState<number | null>(1);

  const stepsData = [
    {
      id: 1,
      title: "Tell Us What You Need:",
      image: "/images/how-it-works-step.png",
      content: (
        <div className="space-y-2 text-[#4b5563] text-[13px] sm:text-[14px] leading-relaxed pt-2">
          <p>Let us understand your business requirements.</p>
          <p>For example, you may need:</p>
          <div className="space-y-1 pl-4 text-[#374151] font-medium">
            <div>a. GSTIN verification</div>
            <div>b. GST filing information</div>
            <div>c. API integration</div>
            <div>d. GSTR-related workflows</div>
            <div>e. e-Invoicing</div>
            <div>f. e-Way Bills</div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Choose the Right Access Option",
      image: "/images/how-it-works-step.png",
      content: (
        <div className="space-y-2 text-[#4b5563] text-[13px] sm:text-[14px] leading-relaxed pt-2">
          <p>Select from flexible API integration options tailored to your volume:</p>
          <div className="space-y-1 pl-4 text-[#374151] font-medium">
            <div>a. Real-time REST API for instant validation</div>
            <div>b. Bulk / batch verification engine for high volume</div>
            <div>c. Webhooks for automated filing status notifications</div>
            <div>d. Dedicated sandbox testing environment</div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Integrate With Your Workflow",
      image: "/images/how-it-works-step.png",
      content: (
        <div className="space-y-2 text-[#4b5563] text-[13px] sm:text-[14px] leading-relaxed pt-2">
          <p>Connect seamlessly with your existing infrastructure:</p>
          <div className="space-y-1 pl-4 text-[#374151] font-medium">
            <div>a. ERP systems (SAP, Oracle, Tally, Zoho)</div>
            <div>b. Merchant and vendor onboarding pipelines</div>
            <div>c. Invoicing and financial management platforms</div>
            <div>d. Ready-made SDKs in Node, Python, Java & PHP</div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "Complete Consent Requirement",
      image: "/images/how-it-works-step.png",
      content: (
        <div className="space-y-2 text-[#4b5563] text-[13px] sm:text-[14px] leading-relaxed pt-2">
          <p>Maintain complete statutory compliance with ease:</p>
          <div className="space-y-1 pl-4 text-[#374151] font-medium">
            <div>a. Borrower and taxpayer consent authentication</div>
            <div>b. Automated OTP generation and verification</div>
            <div>c. End-to-end encrypted audit trails</div>
            <div>d. ISO 27001 & SOC-2 compliant data protection</div>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      title: "Use the Service for Your Business Process",
      image: "/images/how-it-works-step.png",
      content: (
        <div className="space-y-2 text-[#4b5563] text-[13px] sm:text-[14px] leading-relaxed pt-2">
          <p>Unlock fast, secure and reliable operational automation:</p>
          <div className="space-y-1 pl-4 text-[#374151] font-medium">
            <div>a. Instant vendor authentication before payouts</div>
            <div>b. Protect Input Tax Credit (ITC) with filing history checks</div>
            <div>c. Accelerated merchant and customer onboarding</div>
            <div>d. Continuous compliance monitoring and alerts</div>
          </div>
        </div>
      ),
    },
  ];

  const activeImage =
    stepsData.find((s) => s.id === activeStep)?.image ||
    "/images/how-it-works-step.png";

  return (
    <section className="relative py-16 sm:py-24 px-[5%] lg:px-[6%] overflow-hidden bg-black">
      {/* Ambient soft glow at bottom right matching design */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-[#1e3a8a]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-[1240px] mx-auto">
        {/* Section Heading */}
        <h2 className="text-white text-[28px] sm:text-[34px] lg:text-[40px] font-bold text-center tracking-tight mb-12 sm:mb-16">
          How it works
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

function WhyAPISection() {
  return (
    <section className="relative py-12 sm:py-16 px-[5%] lg:px-[6%]">
      {/* Ellipse 21 glow */}
      <div className="absolute left-0 w-full max-w-[848px] pointer-events-none select-none opacity-65 mix-blend-screen">
        <img
          alt=""
          className="w-full h-full object-contain"
          src={imgEllipse21}
        />
      </div>
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-5">
          <h2 className="text-white text-[clamp(24px,3vw,40px)] font-bold leading-tight mb-6">
            Why API Based GST Verification?
          </h2>
          <p className="text-white text-[15px] sm:text-[16px] lg:text-[18px] font-normal leading-relaxed mb-4">
            Government GST portals are useful for individual searches and
            GST-related processes. Businesses managing recurring verification,
            onboarding or technology-driven workflows may require these
            capabilities to work within their existing systems.
          </p>
          <p className="text-white text-[15px] sm:text-[16px] lg:text-[18px] font-normal leading-relaxed mb-4">
            API integration helps businesses explore a more connected workflow
            by bringing relevant GST verification capabilities closer to:
          </p>
          <ul className="text-white text-[15px] sm:text-[16px] lg:text-[18px] font-normal leading-relaxed list-disc list-inside space-y-1">
            {[
              "Vendor onboarding",
              "Merchant onboarding",
              "ERP systems",
              "Invoicing platforms",
              "Internal compliance processes",
              "Financial and business workflows",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Right side: 3 images layout */}
        <div className="lg:col-span-7 flex items-center gap-4 sm:gap-5 w-full">
          {/* Big card - left */}
          <div className="flex-[581] rounded-[18px] overflow-hidden shadow-2xl">
            <img
              alt="Why API Dashboard"
              className="w-full h-auto rounded-[18px] object-cover block"
              src={imgFrame20}
            />
          </div>

          {/* Right column: 2 stacked cards */}
          <div className="flex-[288] flex flex-col justify-between self-stretch gap-3 sm:gap-4">
            <div className="rounded-[18px] overflow-hidden shadow-2xl">
              <img
                alt="Why API Analytics"
                className="w-full h-auto rounded-[18px] object-cover block"
                src={imgFrame22}
              />
            </div>
            <div className="rounded-[18px] overflow-hidden shadow-2xl">
              <img
                alt="Why API Metrics"
                className="w-full h-auto rounded-[18px] object-cover block"
                src={imgFrame77}
              />
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
        {/* Linear vertical base: smooth fade into dark */}
        <linearGradient
          id="cardGlowLinearBase"
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

        {/* Radial deep purple left: stays lower and richer */}
        <radialGradient
          id="cardGlowRadLeft"
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

        {/* Radial luminous white-pink right: rises smoothly */}
        <radialGradient
          id="cardGlowRadRight"
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

      {/* Dark card base */}
      <rect width="100%" height="100%" fill="#0d111a" />
      {/* 10% #BACFFF ambient tint from Figma */}
      <rect width="100%" height="100%" fill="#BACFFF" fillOpacity="0.10" />

      {/* Atmospheric bottom gradients */}
      <rect width="100%" height="100%" fill="url(#cardGlowLinearBase)" />
      <rect width="100%" height="100%" fill="url(#cardGlowRadLeft)" />
      <rect width="100%" height="100%" fill="url(#cardGlowRadRight)" />
    </svg>
  );
}

function KeyBenefitsSection() {
  const benefits = [
    {
      title: "Simplify GST Verification",
      desc: "Verify GSTIN and available taxpayer information through an API-driven workflow.",
    },
    {
      title: "API or Portal Access",
      desc: "Choose API integration or a ready-to-use portal based on your business needs.",
    },
    {
      title: "Support GST Compliance Workflows",
      desc: "Explore workflows for GSTR filing, e-Invoicing and E-Way Bills.",
    },
    {
      title: "Consent Based Verification",
      desc: "Support verification processes that require OTP or user consent.",
    },
    {
      title: "Built for Business Workflows",
      desc: "Integrate GST verification into onboarding, compliance and other business processes.",
    },
    {
      title: "Support Bulk Operations",
      desc: "Handle larger verification requirements with bulk data upload capabilities.",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 px-[5%] lg:px-[6%] overflow-hidden bg-black">
      {/* Background ambient lighting */}
      <div className="absolute right-[5%] top-[10%] w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute left-[5%] bottom-[10%] w-[500px] h-[500px] bg-indigo-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto relative z-10">
        {/* Section Heading */}
        <h2 className="text-white text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-center tracking-tight mb-12 sm:mb-16">
          Key Benefits For Your Business
        </h2>

        {/* 6 Cards Responsive Grid (exact 406px x 446px Figma specs) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="relative w-full max-w-[406px] min-h-[420px] sm:min-h-[446px] rounded-[18px] border-[2px] border-[#DFC6FF] p-6 sm:p-10 flex flex-col justify-start overflow-hidden group hover:scale-[1.015] hover:shadow-[0_0_35px_rgba(223,198,255,0.3)] transition-all duration-300"
            >
              {/* Exact Figma atmospheric bottom gradient */}
              <BenefitCardGlow />

              {/* Scalloped Badge Icon Circle */}
              <div className="relative z-10 w-[50px] h-[50px] sm:w-[54px] sm:h-[54px] rounded-full bg-[#1b2234]/85 border border-white/15 flex items-center justify-center mb-6 sm:mb-8 shrink-0 shadow-inner group-hover:border-white/30 transition-colors">
                <BadgeCheck className="w-8 h-8 sm:w-10 sm:h-10 text-white stroke-[1.8]" />
              </div>

              {/* Card Title */}
              <h3 className="relative z-10 text-white font-bold text-[22px] sm:text-[27px] leading-[1.25] tracking-tight mb-3 sm:mb-4">
                {benefit.title}
              </h3>

              {/* Card Description */}
              <p className="relative z-10 text-white/85 text-[14.5px] sm:text-[16.5px] leading-[1.6] font-normal">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-16 sm:py-20 px-[5%] lg:px-[6%]">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-white text-[clamp(28px,3vw,40px)] font-bold mb-8 tracking-tight">
          FAQs
        </h2>

        <div className="divide-y divide-white/30">
          {faqItems.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left group"
              >
                <span className="text-white text-[18px] sm:text-[20px] lg:text-[24px] font-normal leading-snug tracking-tight pr-6">
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
                <div className="pb-5">
                  <p className="w-full md:w-[85%] lg:w-[80%] text-[#c3c3c3] text-[15px] sm:text-[17px] lg:text-[20px] font-normal leading-relaxed tracking-tight">
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
  return (
    <section id="contact" className="relative py-12 sm:py-16 px-[5%] lg:px-[6%]">
      <div className="max-w-[1400px] mx-auto">
        <div className="bg-white rounded-[28px] sm:rounded-[36px] lg:rounded-[48px] overflow-hidden grid md:grid-cols-2">
          {/* Left form */}
          <div className="p-6 sm:p-8 lg:p-12 flex flex-col gap-6 justify-center">
            <h2 className="text-[#2d2e2e] text-[28px] sm:text-[34px] lg:text-[40px] font-semibold leading-tight">
              Let's Talk
            </h2>
            <p className="text-[#2d2e2e] text-[15px] sm:text-[17px] lg:text-[20px] font-light leading-relaxed">
              Whether you need GSTIN verification, GST filing information or API
              integration for GST-related workflows, we can discuss your
              business requirements.
            </p>
            <input
              type="email"
              placeholder="Enter your work email"
              className="bg-[#f6f6f6] text-[#7a7979] text-[15px] sm:text-[16px] lg:text-[18px] font-normal rounded-[18px] px-4 py-3.5 sm:py-4 outline-none w-full max-w-md"
            />
            <input
              type="text"
              placeholder="Enter your company name"
              className="bg-[#f6f6f6] text-[#7a7979] text-[15px] sm:text-[16px] lg:text-[18px] font-normal rounded-[18px] px-4 py-3.5 sm:py-4 outline-none w-full max-w-md"
            />
            <button className="bg-[#7a7979] text-white text-[18px] sm:text-[20px] lg:text-[24px] font-normal rounded-[18px] px-8 py-3.5 sm:py-4 w-full max-w-md hover:bg-[#666] transition-colors">
              Get Started
            </button>
          </div>
          {/* Right image */}
          <div className="hidden md:block">
            <img
              alt="Get your professional website today"
              className="w-full h-full object-cover"
              src={imgPhotoRectangle}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-black via-[#000b58] to-[#59259b] overflow-hidden py-12 sm:py-16 px-[5%] lg:px-[6%]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 lg:gap-10">
        {/* Brand - gets 5 columns on desktop so tag text never overlaps Links column */}
        <div className="md:col-span-6 lg:col-span-5 flex flex-col items-start gap-2 drop-shadow-[17px_3px_119px_rgba(255,255,255,0.74)]">
          <p className="text-white text-[28px] sm:text-[36px] lg:text-[44px] font-bold leading-tight">
            DigitalRakshak<sup className="text-xs top-[-2em] font-light">TM</sup>
          </p>
          <p className="text-white text-[14px] sm:text-[16px] lg:text-[18px] font-medium tracking-wide">
            SECURE | SWIFT | COMPLIANT
          </p>
          <div className="relative h-28 sm:h-36 w-44 sm:w-52 mt-2 overflow-hidden">
            <img
              alt=""
              className="absolute h-[186%] left-[-10%] max-w-none top-[-39%] w-[122%]"
              src={imgLogo1}
            />
          </div>
          {/* Social icons */}
          <div className="flex gap-4 mt-4">
            {[
              { icon: imgSvgRepoIconCarrier4, size: 22 },
              { icon: imgVector, size: 22 },
              { icon: imgSvgRepoIconCarrier5, size: 22 },
            ].map((s, i) => (
              <div key={i} className="relative size-10 cursor-pointer flex-shrink-0">
                <img
                  alt=""
                  className="absolute inset-0 w-full h-full"
                  src={imgEllipse3}
                />
                <div
                  className="absolute overflow-hidden"
                  style={{
                    left: '20%',
                    top: '20%',
                    width: s.size ?? 22,
                    height: s.size ?? 22,
                  }}
                >
                  <img alt="" className="w-full h-full" src={s.icon} />
                </div>
              </div>
            ))}
            <div className="relative size-10 cursor-pointer flex-shrink-0">
              <img
                alt=""
                className="absolute inset-0 w-full h-full"
                src={imgGroup27}
              />
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="md:col-span-2 lg:col-span-2">
          <p className="text-white text-[18px] sm:text-[20px] font-bold mb-4">Links</p>
          {["About", "Product", "Resources", "Pricing", "Contact"].map((l) => (
            <a
              key={l}
              href="#"
              className="block text-white text-[15px] sm:text-[16px] font-normal mb-2 hover:opacity-70 transition-opacity"
            >
              {l}
            </a>
          ))}
        </div>

        {/* Help */}
        <div className="md:col-span-2 lg:col-span-2">
          <p className="text-white text-[18px] sm:text-[20px] font-bold mb-4">Help</p>
          {["Help Center", "Support"].map((l) => (
            <a
              key={l}
              href="#"
              className="block text-white text-[15px] sm:text-[16px] font-normal mb-2 hover:opacity-70 transition-opacity"
            >
              {l}
            </a>
          ))}
        </div>

        {/* Legal */}
        <div className="md:col-span-2 lg:col-span-3">
          <p className="text-white text-[18px] sm:text-[20px] font-bold mb-4">Legal</p>
          {["Privacy Policy", "Terms of Service"].map((l) => (
            <a
              key={l}
              href="#"
              className="block text-white text-[15px] sm:text-[16px] font-normal mb-2 hover:opacity-70 transition-opacity"
            >
              {l}
            </a>
          ))}
        </div>
      </div>

      {/* Divider + copyright */}
      <div className="max-w-[1400px] mx-auto mt-12">
        <div className="border-t border-white/30 mb-6" />
        <p className="text-white text-[15px] sm:text-[17px] lg:text-[18px] font-normal text-center">
          © 2026 Digital Rakshak. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="align-center bg-black min-h-screen w-full font-[Inter] overflow-x-hidden">
      <GstNavbar />
      <HeroSection />
      <WhatCanYouDoSection />
      <VerificationCardsSection />
      <ConnectAPISection />
      <HowItWorksSection />
      <WhyAPISection />
      <KeyBenefitsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
