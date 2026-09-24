"use client";
import { useState } from "react";

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

function NavBar() {
  return (
    <header className="relative z-50 flex items-center justify-between w-full py-4 lg:py-6">
      {/* Logo with white glow */}
      <div className="w-[150px] sm:w-[170px] lg:w-[200px] flex-shrink-0 drop-shadow-[0_0_40px_rgba(255,255,255,0.8)]">
        <img
          alt="DigitalRakshak"
          src={imgLogo1}
          className="w-full h-auto object-contain block"
        />
      </div>

      {/* Nav pill - dark glass pill */}
      <nav className="hidden md:flex items-center gap-3 lg:gap-6 xl:gap-7 bg-white/[0.26] backdrop-blur-xl px-5 py-2.5 lg:px-8 lg:py-3.5 rounded-[30px] border border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
        {[
          "API Product",
          "BGV",
          "E-stamping",
          "Pricing",
          "Resources",
          "Contact",
        ].map((item) => (
          <a
            key={item}
            href="#"
            className="text-white/85 hover:text-white font-normal text-[15px] lg:text-[17px] xl:text-[20px] transition-colors whitespace-nowrap tracking-[0.01em]"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Book Demo - same dark pill as nav */}
      <div className="bg-white/[0.26] backdrop-blur-xl px-5 py-2.5 lg:px-8 lg:py-3.5 rounded-[30px] border border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.6)] hover:bg-[#1c2028]/90 transition-all cursor-pointer">
        <a
          href="#contact"
          className="text-white font-normal text-[15px] lg:text-[17px] xl:text-[20px] whitespace-nowrap tracking-[0.01em]"
        >
          Book Demo
        </a>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden px-[5%] lg:px-[6%] flex flex-col justify-between py-4 sm:py-6">
      {/* Background GIF with vertical glowing blue pillars */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/bg-frame.gif"
          alt="Hero Background Animation"
          className="w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/35 to-transparent" />
      </div>

      {/* Header at top */}
      <NavBar />

      {/* Center Hero content - fits on screen */}
      <div className="relative z-10 flex-1 flex items-center py-6 lg:py-10">
        <div className="w-full max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-8 xl:gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left">
            <div>
              <h1 className="text-white text-[clamp(32px,3.8vw,56px)] font-black leading-[1.08] tracking-tight">
                GST Verification<br />Services (GVS)
              </h1>
              <p className="text-white text-[16px] sm:text-[18px] lg:text-[22px] font-medium mt-3 sm:mt-4">
                Verify GST Details. Integrate GST Workflows.
              </p>
            </div>

            <div className="mt-6 sm:mt-8 lg:mt-12">
              <p className="text-white/90 text-[15px] sm:text-[16px] lg:text-[18px] font-normal leading-relaxed max-w-[540px]">
                Access GSTIN and available GST information through portal or
                API-based workflows, with support for GSTR, GST filing, e-Invoicing
                and e-Way Bills.
              </p>
              <div className="flex gap-4 mt-5 sm:mt-6 items-center flex-wrap">
                <button className="bg-[#B0DAFF] hover:bg-[#76bbf8] text-[#0a1e36] font-semibold text-[15px] px-8 py-2.5 rounded-[18px] shadow-[2px_2px_11.4px_0px_#00000040,_5px_-2px_8.7px_0px_#0084FF6B_inset] transition-all">
                  Demo
                </button>
                <button className="bg-white hover:bg-gray-100 text-[#0a1e36] font-semibold text-[15px] px-8 py-2.5 rounded-[18px] shadow-[2px_2px_11.4px_0px_#00000040,_5px_-2px_8.7px_0px_#0084FF6B_inset] transition-all">
                  Get API Access
                </button>
              </div>
            </div>
          </div>

          {/* Right – product screenshots */}
          <div className="lg:col-span-7 relative flex justify-center lg:justify-end items-center w-full">
            <div className="flex items-center gap-4 sm:gap-8 md:gap-12 w-full max-w-[650px] lg:max-w-none mx-auto">
              {/* Main card - left */}
              <div className="flex-[326] rounded-[18px] sm:rounded-[22px] lg:rounded-[26px] overflow-hidden shadow-2xl border border-white/10 aspect-[326/354] bg-[#f2f4f7]">
                <img
                  alt="GVS Dashboard"
                  className="w-full h-full object-cover object-center"
                  src={imgFrame19}
                />
              </div>

              {/* Right stacked cards */}
              <div className="flex-[175] flex flex-col justify-between self-stretch gap-3 sm:gap-4">
                <div className="rounded-[14px] sm:rounded-[18px] lg:rounded-[22px] overflow-hidden shadow-2xl border border-white/10 aspect-square">
                  <img
                    alt="Feature preview 1"
                    className="w-full h-full object-cover"
                    src={imgRectangle6}
                  />
                </div>
                <div className="rounded-[14px] sm:rounded-[18px] lg:rounded-[22px] overflow-hidden shadow-2xl border border-white/10 aspect-square">
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
    <div className="relative w-full max-w-[227px] mx-auto flex-shrink-0" style={{ paddingTop: 44 }}>
      {/* imgFrame70 SVG = blue-circle header + rounded-rect card body */}
      <div
        className="absolute inset-x-0"
        style={{ top: -44, height: 349 }}
      >
        <img
          alt=""
          src={imgFrame70}
          className="w-full h-[349px] block object-fill"
        />
      </div>
      {/* Icon sits on the glowing circle */}
      <div
        className="absolute overflow-hidden"
        style={{
          top: -27,
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
      {/* Text content */}
      <div className="relative px-4 pt-3 pb-5">
        <p className="text-white text-[17px] sm:text-[18px] font-semibold leading-[22px] sm:leading-[24px] mb-2">
          {title}
        </p>
        <p className="text-white text-[13px] sm:text-[14px] font-normal leading-[19px] sm:leading-[21px] opacity-90">
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
    <section className="relative py-16 sm:py-20 px-[5%] lg:px-[6%]">
      {/* Ellipse 19 glow */}
      <div className="absolute left-[-10%] top-[-10%] w-full max-w-[848px] pointer-events-none select-none opacity-70 mix-blend-screen">
        <img
          alt=""
          className="w-full h-full object-contain"
          src={imgEllipse19}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto">
        <h2 className="text-white text-[clamp(24px,3vw,40px)] font-bold text-center mb-16 sm:mb-20">
          What Can You Do with GST Verification Service
        </h2>
        {/* Cards grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-16 justify-items-center">
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
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-white text-[clamp(24px,3vw,40px)] font-bold text-center mb-10 sm:mb-12">
          General | Consent Based Verification
        </h2>
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
          {/* General Verification */}
          <div className="relative bg-[rgba(81,115,194,0.46)] rounded-[18px] p-6 sm:p-8">
            <div className="relative flex items-center gap-3 mb-4">
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
            </div>
            <h3 className="text-white text-[22px] sm:text-[24px] lg:text-[28px] font-semibold leading-tight mb-2">
              General Verification
            </h3>
            <p className="text-white text-[13px] sm:text-[14px] font-light leading-relaxed mb-4 opacity-80">
              Taxpayer or borrower consent is not required for these services.
            </p>
            <ol className="text-white text-[15px] sm:text-[16px] lg:text-[18px] font-medium leading-[26px] sm:leading-[28px] list-decimal list-inside space-y-1">
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
          <div className="relative bg-[rgba(81,115,194,0.46)] rounded-[18px] p-6 sm:p-8">
            <div className="relative flex items-center gap-3 mb-4">
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
            </div>
            <h3 className="text-white text-[22px] sm:text-[24px] lg:text-[28px] font-semibold leading-tight mb-2">
              Consent Verification
            </h3>
            <p className="text-white text-[13px] sm:text-[14px] font-light leading-relaxed mb-4 opacity-80">
              These services require borrower/taxpayer consent and/or OTP, as
              applicable
            </p>
            <ol className="text-white text-[15px] sm:text-[16px] lg:text-[18px] font-medium leading-[26px] sm:leading-[28px] list-decimal list-inside space-y-1">
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
    </section>
  );
}

function ConnectAPISection() {
  return (
    <section className="relative py-12 sm:py-16 px-[5%] lg:px-[6%]">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-white text-[clamp(24px,3vw,40px)] font-bold text-center mb-10 sm:mb-12">
          Connect GST Verification API With Your Existing System
        </h2>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-14">
          {/* Left – Practical Business Workflows */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white text-[28px] sm:text-[36px] lg:text-[40px] xl:text-[44px] font-bold leading-tight sm:leading-[48px] lg:leading-[56px]">
              Practical
              <br />
              Business Workflows
            </h3>

            {/* Blue card */}
            <div className="relative bg-[#b0daff] rounded-[18px] px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12 xl:px-16 xl:py-14 shadow-[2px_2px_5.7px_rgba(0,0,0,0.25),inset_-11px_-11px_14px_0px_rgba(0,132,255,0.42),inset_19px_14px_22.3px_0px_rgba(0,132,255,0.42)]">
              <p className="text-[#06161e] text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[22px] font-medium leading-relaxed sm:leading-[28px]">
                GST-related processes do not always need to be managed
                separately. API integration options for relevant businesses,
                corporates and Application Service Providers. Integrate with:
              </p>
            </div>

            <ol className="text-white text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[22px] font-medium leading-relaxed sm:leading-[28px] list-decimal list-inside space-y-2 pl-2">
              {[
                "ERP systems",
                "Invoicing systems",
                "Business applications",
                "Internal compliance workflows",
                "Financial workflows",
                "Enterprise technology platforms",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>

            <p className="text-white text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[22px] font-medium leading-relaxed sm:leading-[28px]">
              The GSP service also provides pass-through API capabilities for
              applicable GST-related processes.
            </p>

            <button className="self-start bg-[#b0daff] text-[#1e1e1e] font-medium text-base sm:text-lg px-8 py-3 rounded-[18px] shadow-[2px_2px_5.7px_rgba(0,0,0,0.25),inset_5px_-2px_8.7px_0px_rgba(0,132,255,0.42)] hover:opacity-90 transition-opacity">
              Book a Demo
            </button>
          </div>

          {/* Right – use-case cards */}
          <div className="flex flex-col gap-6">
            {[
              {
                title: "Accounts Payable:",
                body: "Use GST verification as part of vendor validation and internal financial workflows before processing relevant vendor transactions.",
              },
              {
                title: "Merchant Onboarding:",
                body: "Integrate GST-related business verification into merchant or business onboarding workflows.",
              },
              {
                title: "SME Lending:",
                body: "Use relevant GST-related information as part of broader business verification and lending workflows, where applicable.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="relative bg-[#dfc6ff] rounded-[18px] px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12 xl:px-16 xl:py-14 shadow-[2px_2px_5.7px_rgba(0,0,0,0.25),inset_-11px_-11px_14px_0px_rgba(0,132,255,0.42),inset_19px_14px_22.3px_0px_rgba(0,132,255,0.42)]"
              >
                <p className="text-[#06161e] text-[20px] sm:text-[24px] lg:text-[28px] font-semibold leading-tight mb-2">
                  {card.title}
                </p>
                <p className="text-[#06161e] text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[22px] font-medium leading-relaxed sm:leading-[28px]">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section className="relative py-12 sm:py-16 px-[5%] lg:px-[6%]">
      {/* Ellipse 20 glow */}
      <div className="absolute right-[-10%] w-full max-w-[848px] pointer-events-none select-none opacity-60 mix-blend-screen">
        <img
          alt=""
          className="w-full h-full object-contain"
          src={imgEllipse20}
        />
      </div>
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
        {/* Left – Dashboard image */}
        <div className="rounded-[18px] overflow-hidden shadow-2xl">
          <img
            alt="GVS Dashboard"
            className="w-full h-auto rounded-[18px] object-cover"
            src={imgFrame81}
          />
        </div>

        {/* Right – Steps */}
        <div>
          <h2 className="text-white text-[28px] sm:text-[36px] lg:text-[44px] font-bold leading-tight lg:leading-[56px] mb-6 sm:mb-8">
            How it works
          </h2>

          <div className="mb-6">
            <h3 className="text-white text-[20px] sm:text-[24px] lg:text-[28px] font-semibold leading-tight mb-3">
              1. Tell Us What You Need:
            </h3>
            <p className="text-white text-[15px] sm:text-[16px] lg:text-[18px] font-medium leading-relaxed mb-2">
              Let us understand your business requirements. For example, you may
              need:
            </p>
            <ol className="text-white text-[15px] sm:text-[16px] lg:text-[18px] font-medium leading-relaxed list-[lower-alpha] list-inside space-y-1 pl-4">
              {[
                "GSTIN verification",
                "GST filing information",
                "API integration",
                "GSTR-related workflows",
                "e-Invoicing",
                "e-Way Bills",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>

          <div className="space-y-4">
            {[
              "Choose the Right Access Option",
              "Integrate With Your Workflow",
              "Complete Consent Requirement",
              "Use the Service for Your Business Process",
            ].map((step, i) => (
              <h3
                key={step}
                className="text-white text-[20px] sm:text-[24px] lg:text-[28px] font-semibold leading-tight"
              >
                {i + 2}. {step}
              </h3>
            ))}
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

function BenefitItem({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col">
      <div className="size-7 mb-3 sm:mb-4 flex-shrink-0">
        <img alt="" className="w-full h-full object-contain" src={icon} />
      </div>
      <h3 className="text-white text-[17px] sm:text-[18px] lg:text-[20px] font-bold leading-snug mb-2">
        {title}
      </h3>
      <p className="text-gray-300 text-[13.5px] sm:text-[14px] lg:text-[15px] font-normal leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

function KeyBenefitsSection() {
  return (
    <section className="relative py-16 sm:py-20 px-[5%] lg:px-[6%]">
      {/* Ellipse 15 glow */}
      <div className="absolute right-[0] top-[5%] w-full max-w-[75%] pointer-events-none select-none opacity-80 mix-blend-screen">
        <img
          alt=""
          className="w-full h-full object-contain"
          src={imgEllipse15}
        />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <h2 className="text-white text-[clamp(26px,3vw,38px)] font-bold text-center mb-12 sm:mb-16">
          Key Benefits For Your Business
        </h2>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-12 xl:gap-14 items-center">
          {/* Left: 2-col × 3-row benefit grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 lg:gap-x-10 gap-y-6 sm:gap-y-8 lg:gap-y-10">
            <BenefitItem
              icon={imgSvgRepoIconCarrier}
              title="Simplify GST Verification"
              desc="Verify GSTIN and available taxpayer information through an API-driven workflow."
            />
            <BenefitItem
              icon={imgSvgRepoIconCarrier1}
              title="API or Portal Access"
              desc="Choose API integration or a ready-to-use portal based on your business needs."
            />
            <BenefitItem
              icon={imgSvgRepoIconCarrier2}
              title="Support GST Compliance Workflows"
              desc="Explore workflows for GSTR filing, e-Invoicing and E-Way Bills."
            />
            <BenefitItem
              icon={imgSvgRepoIconCarrier3}
              title="Consent Based Verification"
              desc="Support verification processes that require OTP or user consent."
            />
            <BenefitItem
              icon={imgSvgRepoIconCarrier2}
              title="Built for Business Workflows"
              desc="Integrate GST verification into onboarding, compliance and other business processes."
            />
            <BenefitItem
              icon={imgSvgRepoIconCarrier3}
              title="Support Bulk Operations"
              desc="Handle larger verification requirements with bulk data upload capabilities."
            />
          </div>

          {/* Right: tablet image card */}
          <div className="w-full max-w-[450px] lg:max-w-none mx-auto rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#D9D9D9] shadow-2xl">
            <img
              alt="GVS dashboard on tablet"
              className="w-full h-auto block"
              src={imgFrame21}
            />
          </div>
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
