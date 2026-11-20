import { BgvServicePageData } from "@/components/bgv/types";

export const serviceData: BgvServicePageData = {
  hero: {
    headline: "Government Identity Verification Services You Can Rely On",
    subheadline:
      "Instant government ID validation including Aadhaar, PAN, Voter ID, Passport, and Driving Licence with DigitalRakshak™. Ensure 100% genuine candidate identities before onboarding.",
    primaryButton: {
      text: "Get Started",
      href: "#contact",
    },
    secondaryButton: {
      text: "Explore ID Checks",
      href: "#capabilities",
    },
    images: {
      mainMockup: "/images/bgv/4aef0.png",
      leftCard: "/images/bgv/46bb4.png",
      rightCard: "/images/bgv/b69e7.png",
    },
  },
  whyImportant: {
    title: "Why Is Identity Verification Crucial for Your Organization?",
    subtitle:
      "Prevent identity spoofing, synthetic fraud, and ghost profiles with automated government database validations.",
    centerImage: "/images/bgv/05f01.png",
    features: {
      topLeft: {
        id: "id-fraud",
        title: "Prevent Impersonation",
        description:
          "Catch impersonators using counterfeit IDs or someone else's credentials during interviews and hiring.",
      },
      bottomLeft: {
        id: "instant-validation",
        title: "Real-Time ID Validation",
        description:
          "Verify Aadhaar, PAN, and Voter ID against official issuing authority databases in under 2 seconds.",
        iconSrc: "/images/bgv/16b77.svg",
      },
      topRight: {
        id: "compliance-ready",
        title: "Regulatory Compliance",
        description:
          "Fulfill mandatory KYC/AML compliance norms with tamper-proof audit trails and verifiable reports.",
        iconSrc: "/images/bgv/53705.svg",
      },
      bottomRight: {
        id: "trusted-workforce",
        title: "Secure Onboarding",
        description:
          "Build an authentic workforce by ensuring every hired candidate has verified government proof.",
        iconSrc: "/images/bgv/dea7e.svg",
      },
    },
  },
  capabilities: {
    sectionTag: "Core Capabilities",
    title: "Our Identity Verification Suite",
    iconSrc: "/images/bgv/4d8b3.svg",
    capabilities: [
      "Aadhaar Paperless Offline e-KYC Verification",
      "PAN Card Verification with Name Matching",
      "Voter ID / EPIC Card Official Check",
      "Passport MRZ & Authority Verification",
      "Driving Licence Real-Time Status Check",
      "Face Match & Liveness Detection",
      "Government Authority Database Validation",
      "Tamper-Proof Verification Audit Logs",
    ],
    showcaseImage: "/images/bgv/f0016.png",
  },
  howItWorks: {
    title: "How Identity Verification Works",
    illustrationImage: "/images/bgv/49dd1.png",
    steps: [
      {
        stepNumber: 1,
        title: "Upload or Enter ID Details",
        description:
          "Candidate provides ID number or uploads photo of Aadhaar, PAN, Voter ID, or Passport.",
      },
      {
        stepNumber: 2,
        title: "Automated OCR & Authority Matching",
        description:
          "Our AI extracts metadata and matches directly against real-time government databases.",
      },
      {
        stepNumber: 3,
        title: "Instant Verification Report",
        description:
          "Receive a certified identity validation report with clear match scores and audit history.",
      },
    ],
  },
  stats: {
    heading: "Identity Fraud Prevention at Scale",
    subheading:
      "DigitalRakshak safeguards enterprise hiring with 99.8% precision across multi-document validations.",
    stats: [
      {
        value: "99.8%",
        title: "Accuracy Rate",
        description: "Official government database match",
      },
      {
        value: "< 2s",
        title: "Turnaround Time",
        description: "Instant real-time API response",
      },
      {
        value: "5+ IDs",
        title: "Documents Supported",
        description: "Aadhaar, PAN, Voter, Passport, DL",
      },
    ],
  },
  contactCta: {
    title: "Verify Candidate Identities",
    subtitle:
      "Schedule a walkthrough with our identity verification experts and automate your KYC onboarding today.",
    imageSrc: "/images/bgv/b305a.png",
    emailPlaceholder: "Enter your work email",
    companyPlaceholder: "Enter your company name",
    buttonText: "Request Identity Demo",
  },
};
