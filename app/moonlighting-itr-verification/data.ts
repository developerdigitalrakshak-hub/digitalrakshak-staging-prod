import { BgvServicePageData } from "@/components/bgv/types";

export const serviceData: BgvServicePageData = {
  hero: {
    headline: "Moonlighting & Dual Employment Detection",
    subheadline:
      "Detect dual employment, overlapping EPFO contributions, conflicting payrolls, and verify Income Tax Returns (ITR) with DigitalRakshak™. Safeguard company IP and ensure exclusive employee dedication.",
    primaryButton: {
      text: "Detect Moonlighting",
      href: "#contact",
    },
    secondaryButton: {
      text: "Explore ITR Checks",
      href: "#capabilities",
    },
    images: {
      mainMockup: "/images/bgv/4aef0.png",
      leftCard: "/images/bgv/46bb4.png",
      rightCard: "/images/bgv/b69e7.png",
    },
  },
  whyImportant: {
    title: "Why Is Moonlighting & ITR Verification Essential?",
    subtitle:
      "Dual employment leads to productivity losses, intellectual property leaks, conflict of interest, and data security compromises.",
    centerImage: "/images/bgv/05f01.png",
    features: {
      topLeft: {
        id: "concurrent-epfo",
        title: "Overlapping PF Contributions",
        description:
          "Catch multiple employers depositing monthly provident fund under the same UAN simultaneously.",
      },
      bottomLeft: {
        id: "itr-income-check",
        title: "Income Tax Return Verification",
        description:
          "Validate declared salary slabs, tax filing consistency, and secondary income streams via Form 26AS.",
        iconSrc: "/images/bgv/16b77.svg",
      },
      topRight: {
        id: "ip-theft-protection",
        title: "IP & Data Security Defense",
        description:
          "Prevent employees from working for direct market competitors while holding active full-time roles with you.",
        iconSrc: "/images/bgv/53705.svg",
      },
      bottomRight: {
        id: "tax-compliance",
        title: "TDS & Statutory Compliance",
        description:
          "Ensure clean corporate compliance by uncovering undisclosed consulting, freelancing, or corporate directorships.",
        iconSrc: "/images/bgv/dea7e.svg",
      },
    },
  },
  capabilities: {
    sectionTag: "Risk Prevention",
    title: "Our Moonlighting & ITR Screening Suite",
    iconSrc: "/images/bgv/4d8b3.svg",
    capabilities: [
      "Real-Time UAN & EPFO Dual Employment Contribution Screening",
      "Detection of Active Concurrent Provident Fund Deposits",
      "Form 26AS & Income Tax Return (ITR) Verification",
      "Ministry of Corporate Affairs (MCA) Director Search Check",
      "GSTIN Registration Check in Candidate's Name",
      "Full Timeline Comparison of Past & Present Employment Tenures",
      "Automated Red Flag Alerts for Dual Payroll Submissions",
      "Comprehensive Confidential Moonlighting Audit Report",
    ],
    showcaseImage: "/images/bgv/f0016.png",
  },
  howItWorks: {
    title: "How Moonlighting Detection Works",
    illustrationImage: "/images/bgv/49dd1.png",
    steps: [
      {
        stepNumber: 1,
        title: "Submit Candidate PAN / UAN",
        description:
          "With candidate consent, submit PAN and UAN credentials through our secure verification platform.",
      },
      {
        stepNumber: 2,
        title: "EPFO & Tax Repository Correlation",
        description:
          "Our algorithm cross-examines monthly remittance histories, active establishment IDs, and tax deductions.",
      },
      {
        stepNumber: 3,
        title: "Dual Employment Audit Report",
        description:
          "Receive a clear breakdown highlighting any concurrent employment tenures or conflicting corporate affiliations.",
      },
    ],
  },
  stats: {
    heading: "Mitigating Corporate Dual Employment Risk",
    subheading:
      "Enterprise studies reveal up to 10% of remote tech and knowledge workers hold undisclosed second employments.",
    stats: [
      {
        value: "100%",
        title: "PF Remittance Match",
        description: "Official EPFO database checks",
      },
      {
        value: "< 5s",
        title: "Digital API Query",
        description: "Instant simultaneous employer detection",
      },
      {
        value: "Zero",
        title: "Data Leakage",
        description: "Strict ISO 27001 data protection",
      },
    ],
  },
  contactCta: {
    title: "Protect Against Moonlighting",
    subtitle:
      "Speak to our enterprise security consultants to run proactive moonlighting and ITR verification across your workforce.",
    imageSrc: "/images/bgv/b305a.png",
    emailPlaceholder: "Enter your work email",
    companyPlaceholder: "Enter your company name",
    buttonText: "Schedule Moonlighting Audit",
  },
};
