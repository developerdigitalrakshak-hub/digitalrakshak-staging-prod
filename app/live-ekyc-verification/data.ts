import { BgvServicePageData } from "@/components/bgv/types";

export const serviceData: BgvServicePageData = {
  hero: {
    headline: "Live e-KYC & Biometric Verification Services",
    subheadline:
      "Real-time biometric validation, active facial recognition, and anti-spoofing liveness checks with DigitalRakshak™. Onboard genuine remote candidates securely within seconds.",
    primaryButton: {
      text: "Start Live e-KYC",
      href: "#contact",
    },
    secondaryButton: {
      text: "View Verification Flow",
      href: "#capabilities",
    },
    images: {
      mainMockup: "/images/bgv/4aef0.png",
      leftCard: "/images/bgv/46bb4.png",
      rightCard: "/images/bgv/b69e7.png",
    },
  },
  whyImportant: {
    title: "Why Is Live e-KYC Verification Essential?",
    subtitle:
      "Eliminate proxy candidates and deepfake impersonations with cutting-edge real-time video and biometric screening.",
    centerImage: "/images/bgv/05f01.png",
    features: {
      topLeft: {
        id: "anti-spoof",
        title: "Stop Deepfakes & Spoofs",
        description:
          "Advanced 3D liveness detection blocks printed photos, pre-recorded video replays, and digital masks.",
      },
      bottomLeft: {
        id: "biometric-accuracy",
        title: "Biometric Face Matching",
        description:
          "AI compares the live applicant's selfie with the government ID photo with 99.9% precision.",
        iconSrc: "/images/bgv/16b77.svg",
      },
      topRight: {
        id: "zero-friction",
        title: "Seamless Remote Flow",
        description:
          "Candidates complete the verification on any smartphone or laptop without installing any apps.",
        iconSrc: "/images/bgv/53705.svg",
      },
      bottomRight: {
        id: "audit-recorded",
        title: "Certified Audit Trail",
        description:
          "Full session recording, GPS coordinates, and timestamped logs provide ironclad compliance evidence.",
        iconSrc: "/images/bgv/dea7e.svg",
      },
    },
  },
  capabilities: {
    sectionTag: "e-KYC Features",
    title: "Our Live e-KYC Capabilities",
    iconSrc: "/images/bgv/4d8b3.svg",
    capabilities: [
      "Real-Time Active & Passive Liveness Detection",
      "AI Face Matching Against Government ID",
      "Interactive Gesture & Flash Verification",
      "Geo-Location & IP Risk Intelligence",
      "Cross-Platform Browser-Based Mobile SDK",
      "Aadhaar OTP-Based e-KYC Integration",
      "OCR Extraction from Live Document Capture",
      "Instant Comprehensive e-KYC Certificate",
    ],
    showcaseImage: "/images/bgv/f0016.png",
  },
  howItWorks: {
    title: "How Live e-KYC Works",
    illustrationImage: "/images/bgv/49dd1.png",
    steps: [
      {
        stepNumber: 1,
        title: "Link Shared via SMS / Email",
        description:
          "Candidate receives a secure one-time verification link and opens it in their mobile browser.",
      },
      {
        stepNumber: 2,
        title: "Live Selfie & Liveness Check",
        description:
          "The applicant performs a quick natural head movement to confirm real physical presence.",
      },
      {
        stepNumber: 3,
        title: "AI Match & Instant Verification",
        description:
          "Facial biometrics match against official records and an authenticated report is issued immediately.",
      },
    ],
  },
  stats: {
    heading: "High-Fidelity Biometric Verification Metrics",
    subheading:
      "Reduce customer onboarding drop-offs while preventing 100% of synthetic identity and deepfake attempts.",
    stats: [
      {
        value: "99.9%",
        title: "Face Match Accuracy",
        description: "Zero false acceptance rate",
      },
      {
        value: "< 30s",
        title: "Completion Time",
        description: "Fast self-guided verification",
      },
      {
        value: "0 App",
        title: "Zero Installation",
        description: "Works on standard mobile browsers",
      },
    ],
  },
  contactCta: {
    title: "Experience Live e-KYC",
    subtitle:
      "Try our biometric liveness verification pipeline and integrate it into your hiring or user onboarding journey.",
    imageSrc: "/images/bgv/b305a.png",
    emailPlaceholder: "Enter your work email",
    companyPlaceholder: "Enter your company name",
    buttonText: "Schedule e-KYC Demo",
  },
};
