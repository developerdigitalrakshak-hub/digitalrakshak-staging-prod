import { BgvServicePageData } from "@/components/bgv/types";

export const serviceData: BgvServicePageData = {
  hero: {
    headline: "Credit History & Financial Risk Assessment",
    subheadline:
      "Comprehensive credit bureau score checks, debt default history, loan delinquency analysis, and financial integrity evaluation with DigitalRakshak™. Crucial for finance, banking, and executive roles.",
    primaryButton: {
      text: "Run Credit Check",
      href: "#contact",
    },
    secondaryButton: {
      text: "Explore Bureau Metrics",
      href: "#capabilities",
    },
    images: {
      mainMockup: "/images/bgv/4aef0.png",
      leftCard: "/images/bgv/46bb4.png",
      rightCard: "/images/bgv/b69e7.png",
    },
  },
  whyImportant: {
    title: "Why Is Credit History Verification Crucial for Key Roles?",
    subtitle:
      "Employees under severe personal debt or financial distress pose higher insider fraud, embezzlement, and bribery risks.",
    centerImage: "/images/bgv/05f01.png",
    features: {
      topLeft: {
        id: "insider-threat",
        title: "Mitigate Insider Fraud",
        description:
          "Screen candidates handling company funds, treasury, procurement, or sensitive financial data.",
      },
      bottomLeft: {
        id: "bureau-scores",
        title: "Official Credit Bureau Scores",
        description:
          "Fetch real-time credit score metrics (CIBIL / Experian / CRIF) with applicant consent.",
        iconSrc: "/images/bgv/16b77.svg",
      },
      topRight: {
        id: "default-history",
        title: "Loan Delinquencies & Defaults",
        description:
          "Uncover written-off loans, credit card defaults, and willful non-performing asset (NPA) flags.",
        iconSrc: "/images/bgv/53705.svg",
      },
      bottomRight: {
        id: "banking-standards",
        title: "RBI & Regulatory Standards",
        description:
          "Comply with mandatory central banking guidelines for NBFC, fintech, and banking employee screening.",
        iconSrc: "/images/bgv/dea7e.svg",
      },
    },
  },
  capabilities: {
    sectionTag: "Financial Screening",
    title: "Our Credit History Verification Capabilities",
    iconSrc: "/images/bgv/4d8b3.svg",
    capabilities: [
      "Authorized Real-Time Credit Bureau Score Fetching",
      "Comprehensive Active Loan & Credit Card Repayment History",
      "Analysis of Past Due Amounts (DPD) & Written-Off Accounts",
      "Identification of High-Risk Debt-to-Income Burdens",
      "Bankruptcy, Insolvency & Debt Recovery Tribunal Record Checks",
      "Wilful Defaulter List & Commercial Disqualification Checks",
      "Candidate Consent-Driven Secure OTP Authorization Workflow",
      "Actionable Red/Amber/Green Financial Risk Assessment Reports",
    ],
    showcaseImage: "/images/bgv/f0016.png",
  },
  howItWorks: {
    title: "How Credit History Verification Works",
    illustrationImage: "/images/bgv/49dd1.png",
    steps: [
      {
        stepNumber: 1,
        title: "Candidate Consent & OTP Authentication",
        description:
          "The applicant provides explicit digital consent and verifies their identity via Aadhaar / Mobile OTP.",
      },
      {
        stepNumber: 2,
        title: "Bureau Data Aggregation & Risk Scoring",
        description:
          "Our system securely pulls credit bureau summaries, analyzing delinquency rates and active liabilities.",
      },
      {
        stepNumber: 3,
        title: "Consolidated Credit Profile Report",
        description:
          "HR receives a streamlined financial health report highlighting credit score tier, defaults, and risk factors.",
      },
    ],
  },
  stats: {
    heading: "Financial Due Diligence for Trust-Critical Positions",
    subheading:
      "Prevent corporate asset vulnerability by hiring financially responsible leaders and finance custodians.",
    stats: [
      {
        value: "300-900",
        title: "Score Scale",
        description: "Official credit bureau benchmarking",
      },
      {
        value: "100%",
        title: "Consent Compliant",
        description: "Strict DPDP Act compliant workflows",
      },
      {
        value: "< 60s",
        title: "Report Generation",
        description: "Instant authenticated credit summary",
      },
    ],
  },
  contactCta: {
    title: "Assess Financial Integrity",
    subtitle:
      "Integrate automated credit background screening for your accounting, leadership, and finance appointments.",
    imageSrc: "/images/bgv/b305a.png",
    emailPlaceholder: "Enter your work email",
    companyPlaceholder: "Enter your company name",
    buttonText: "Request Credit Check Demo",
  },
};
