import { BgvServicePageData } from "@/components/bgv/types";

export const serviceData: BgvServicePageData = {
  hero: {
    headline: "Automated Digital e-Onboarding Solutions",
    subheadline:
      "Streamlined candidate onboarding with automated document collection, digital signature integration, and background verification with DigitalRakshak™. Reduce onboarding cycles from weeks to minutes.",
    primaryButton: {
      text: "Start Onboarding Flow",
      href: "#contact",
    },
    secondaryButton: {
      text: "Explore HR Automation",
      href: "#capabilities",
    },
    images: {
      mainMockup: "/images/bgv/4aef0.png",
      leftCard: "/images/bgv/46bb4.png",
      rightCard: "/images/bgv/b69e7.png",
    },
  },
  whyImportant: {
    title: "Why Is Automated e-Onboarding Critical for Modern Teams?",
    subtitle:
      "Replace slow manual paperwork, lost attachments, and compliance slip-ups with a unified digital recruitment engine.",
    centerImage: "/images/bgv/05f01.png",
    features: {
      topLeft: {
        id: "speed-join",
        title: "Fast Candidate Joining",
        description:
          "Convert job offers into confirmed joiners with an effortless mobile-first paperwork experience.",
      },
      bottomLeft: {
        id: "doc-collection",
        title: "Smart Document Collection",
        description:
          "AI auto-validates certificates, PAN, bank passbooks, and previous payslips upon upload.",
        iconSrc: "/images/bgv/16b77.svg",
      },
      topRight: {
        id: "integrated-bgv",
        title: "One-Click BGV Triggers",
        description:
          "Trigger identity, criminal, education, and past employer checks the second paperwork is submitted.",
        iconSrc: "/images/bgv/53705.svg",
      },
      bottomRight: {
        id: "esign-ready",
        title: "Digital e-Sign Agreements",
        description:
          "Execute appointment letters, NDAs, and code of conduct policies with legally binding digital e-signatures.",
        iconSrc: "/images/bgv/dea7e.svg",
      },
    },
  },
  capabilities: {
    sectionTag: "HR Automation Suite",
    title: "Complete e-Onboarding Capabilities",
    iconSrc: "/images/bgv/4d8b3.svg",
    capabilities: [
      "Customizable Multi-Step Candidate Onboarding Portals",
      "Automated OCR Extraction for Candidate Documents",
      "Aadhaar e-Sign & Digital Signature Execution",
      "Real-Time Bank Account Penny Drop Verification",
      "EPFO & UAN Account Automatic Mapping",
      "Automated HR Reminders & Status Dashboards",
      "Seamless Integration with Workday, Darwinbox & BambooHR",
      "Enterprise Grade Encrypted Document Vaults",
    ],
    showcaseImage: "/images/bgv/f0016.png",
  },
  howItWorks: {
    title: "How Digital e-Onboarding Works",
    illustrationImage: "/images/bgv/49dd1.png",
    steps: [
      {
        stepNumber: 1,
        title: "Send Digital Welcome Invite",
        description:
          "HR sends a branded invitation link to the candidate with pre-configured checklist forms.",
      },
      {
        stepNumber: 2,
        title: "Self-Service Document Upload & e-Sign",
        description:
          "Candidate securely uploads credentials, completes identity checks, and e-signs offer letters.",
      },
      {
        stepNumber: 3,
        title: "Instant Verification & HR Sync",
        description:
          "Background checks trigger automatically and complete verified profiles sync straight to your HRMS.",
      },
    ],
  },
  stats: {
    heading: "Transforming Enterprise Talent Acquisition",
    subheading:
      "Accelerate employee time-to-productivity while cutting administrative HR costs by over 70%.",
    stats: [
      {
        value: "80%",
        title: "Time Saved",
        description: "From offer acceptance to joining",
      },
      {
        value: "100%",
        title: "Paperless Experience",
        description: "Secure cloud document vault",
      },
      {
        value: "95%+",
        title: "Candidate Completion",
        description: "Smooth friction-free UI",
      },
    ],
  },
  contactCta: {
    title: "Modernize Your Onboarding",
    subtitle:
      "Talk to our workplace automation team to craft custom e-onboarding workflows for your organization.",
    imageSrc: "/images/bgv/b305a.png",
    emailPlaceholder: "Enter your work email",
    companyPlaceholder: "Enter your company name",
    buttonText: "Schedule Onboarding Demo",
  },
};
