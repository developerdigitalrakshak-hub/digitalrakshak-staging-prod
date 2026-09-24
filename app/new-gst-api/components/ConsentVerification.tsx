'use client'

import React from 'react'

export default function ConsentVerification() {
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

  return (
    <section className="bg-black py-24 relative overflow-hidden">
      {/* Background ambient lighting matching the glow asset */}
      <div className="absolute -left-28 -top-32 w-[650px] h-[1200px] pointer-events-none z-0">
        <img
          src="/assets/vertical-glow-bg.png"
          alt=""
          className="w-full h-full object-cover object-left opacity-90"
        />
      </div>
      <div className="absolute -left-32 top-1/3 w-[500px] h-[600px] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
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
    </section>
  )
}

