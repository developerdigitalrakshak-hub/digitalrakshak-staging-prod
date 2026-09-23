'use client'

import React from 'react'

const assetPathPrefix = "/assets";
const imgSvgRepoIconCarrier6 = `${assetPathPrefix}/cdd9c.svg`;
const imgEllipse20 = `${assetPathPrefix}/530e5.png`;

const whatYouCanDo = [
  {
    title: "1. Verify GSTIN Details",
    desc: "Check GSTIN, business name, address, constitution, registration date and taxpayer type."
  },
  {
    title: "Check GST Filing Status",
    desc: "View available GST return filing status, filing dates and month-wise filing details."
  },
  {
    title: "Access GSTR Information",
    desc: "Access available GST invoice and summary information based on service & authorisation requirements."
  },
  {
    title: "Integrate e-Invoicing",
    desc: "Support relevant e-Invoicing workflows through API integration."
  },
  {
    title: "Manage E-Way Bills",
    desc: "Integrate relevant E-Way Bill workflows into business or invoicing processes."
  },
];

const generalList = [
  "GSTIN",
  "Taxpayer name",
  "Address",
  "Business constitution",
  "Date of registration",
  "Taxpayer type"
];

const consentList = [
  "GSTR-1 invoices",
  "GSTR-1 monthly summary",
  "Half-yearly GSTR-1 summary",
  "GSTR-2A invoices",
  "Half-yearly GSTR-2A summary",
  "GSTR-3B monthly summary",
  "Dealer GST compliance reports"
];

export default function WhatYouCanDo() {
  return (
    <section id="features" className="py-28 bg-black relative overflow-hidden">
      {/* Unified Background Ambient Glow spanning entire merged section */}
      <div className="absolute -left-28 top-0 bottom-0 w-[650px] pointer-events-none z-0">
        <img
          src="/assets/vertical-glow-bg.png"
          alt=""
          className="w-full h-full object-cover object-left opacity-90"
        />
      </div>
      <div className="absolute -right-48 top-0 w-[848px] h-[848px] pointer-events-none">
        <div className="absolute" style={{ inset: "-23.25%" }}>
          <img alt="" className="block max-w-none w-full h-full" src={imgEllipse20} />
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Part 1: What Can You Do with GST Verification Service */}
        <div>
          <h2 className="font-['Inter:Bold'] font-bold text-[36px] md:text-[44px] text-center text-white mb-20">
            What Can You Do with GST Verification Service
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 items-stretch">
            {whatYouCanDo.map(({ title, desc }, index) => (
              <div
                key={title}
                className={`relative rounded-[20px] bg-[#304771] ${index === 0
                  ? "border-2 border-[#0084ff] shadow-[0_0_20px_rgba(0,132,255,0.35),0_10px_30px_rgba(0,0,0,0.4)]"
                  : "border border-[#4a689b]/40 shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
                  } p-6 pt-9 flex flex-col justify-start transition-all duration-300 hover:-translate-y-1 hover:border-[#6b8ec7]/60`}
              >
                {/* Circular badge on top center */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#0d64cc] border-2 border-[#549bf7] shadow-[0_0_15px_rgba(13,100,204,0.6)] flex items-center justify-center z-10">
                  <img alt="Verified" className="w-[20px] h-[20px] object-contain" src={imgSvgRepoIconCarrier6} />
                </div>

                {/* Title */}
                <h3 className="font-['Inter:Bold'] font-bold text-[20px] xl:text-[21px] leading-[26px] text-white mb-4 text-left">
                  {title}
                </h3>

                {/* Description */}
                <p className="font-['Inter:Regular'] font-normal text-[14px] xl:text-[15px] leading-[22px] text-[#c2d3ea] text-left">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: General | Consent Based Verification */}
        <div className="mt-32">
          <h2 className="font-['Inter:Bold'] font-bold text-[36px] md:text-[44px] text-center text-white mb-16">
            General | Consent Based Verification
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* General Verification */}
            <div className="bg-[#283c61] border border-[#3d5988]/40 shadow-[0_10px_30px_rgba(0,0,0,0.35)] rounded-[20px] p-8 md:p-10 relative flex flex-col justify-start">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-[#8338ec] border border-[#a855f7]/60 shadow-[0_0_12px_rgba(131,56,236,0.5)] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-['Inter:Bold'] font-bold text-[24px] md:text-[28px] text-white">General Verification</h3>
              </div>
              <p className="font-['Inter:Regular'] font-normal text-[14px] leading-[22px] text-[#b4c7e2] mb-6">
                Taxpayer or borrower consent is not required for these services.
              </p>
              <ol className="font-['Inter:Regular'] font-normal text-[16px] leading-[30px] text-white list-decimal ml-6 space-y-1">
                {generalList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>

            {/* Consent Verification */}
            <div className="bg-[#283c61] border border-[#3d5988]/40 shadow-[0_10px_30px_rgba(0,0,0,0.35)] rounded-[20px] p-8 md:p-10 relative flex flex-col justify-start">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-[#8338ec] border border-[#a855f7]/60 shadow-[0_0_12px_rgba(131,56,236,0.5)] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-['Inter:Bold'] font-bold text-[24px] md:text-[28px] text-white">Consent Verification</h3>
              </div>
              <p className="font-['Inter:Regular'] font-normal text-[14px] leading-[22px] text-[#b4c7e2] mb-6">
                These services require borrower/taxpayer consent and/or OTP, as applicable
              </p>
              <ol className="font-['Inter:Regular'] font-normal text-[16px] leading-[30px] text-white list-decimal ml-6 space-y-1">
                {consentList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

