import { BgvServicePageData } from "@/components/bgv/types";

export const serviceData: BgvServicePageData = {
  hero: {
    headline: "Employment History Verification Services",
    subheadline:
      "Validating past work experience, employment tenure, designation, remuneration, and exit reasons directly from previous HRs and official provident fund records with DigitalRakshak™.",
    primaryButton: {
      text: "Verify Past Employment",
      href: "#contact",
    },
    secondaryButton: {
      text: "Explore Verification Process",
      href: "#capabilities",
    },
    images: {
      mainMockup: "/images/bgv/4aef0.png",
      leftCard: "/images/bgv/46bb4.png",
      rightCard: "/images/bgv/b69e7.png",
    },
  },
  whyImportant: {
    title: "Why Is Employment History Verification Critical?",
    subtitle:
      "Protect your team from inflated resumes, fabricated job titles, fake experience certificates, and unverified salary claims.",
    centerImage: "/images/bgv/05f01.png",
    features: {
      topLeft: {
        id: "fake-experience",
        title: "Catch Ghost Companies",
        description:
          "Detect candidates listing defunct, fictitious, or paid fake experience certificate vendors.",
      },
      bottomLeft: {
        id: "tenure-check",
        title: "Exact Tenure & Role Match",
        description:
          "Verify exact date of joining, date of relieving, and official designation directly with past HR.",
        iconSrc: "/images/bgv/16b77.svg",
      },
      topRight: {
        id: "uan-epfo-sync",
        title: "EPFO & UAN Service Records",
        description:
          "Instant cross-validation against official Employees' Provident Fund Organization employment history.",
        iconSrc: "/images/bgv/53705.svg",
      },
      bottomRight: {
        id: "exit-reason",
        title: "Exit Status & Rehire Eligibility",
        description:
          "Uncover termination grounds, performance disciplinary actions, and whether the candidate is eligible for rehire.",
        iconSrc: "/images/bgv/dea7e.svg",
      },
    },
  },
  capabilities: {
    sectionTag: "Workplace Screening",
    title: "Our Employment History Verification Capabilities",
    iconSrc: "/images/bgv/4d8b3.svg",
    capabilities: [
      "Official Corporate HR Email & Telephonic Verification",
      "EPFO / UAN Instant Digital Employment History Match",
      "Verification of Last Drawn Salary & Payslips Authenticity",
      "Relieving Letter & Experience Certificate Validation",
      "Cross-Check of Multi-Employer Employment Gaps",
      "Performance, Conduct & Reason for Leaving Inquiries",
      "Re-Hire Eligibility & Exit Clearance Confirmation",
      "Detection of Moonlighting & Concurrent Employments",
    ],
    showcaseImage: "/images/bgv/f0016.png",
  },
  howItWorks: {
    title: "How Employment Verification Works",
    illustrationImage: "/images/bgv/49dd1.png",
    steps: [
      {
        stepNumber: 1,
        title: "Candidate Submits Previous Employer Details",
        description:
          "Candidate provides company names, employee ID, relieving documents, and past supervisor contact.",
      },
      {
        stepNumber: 2,
        title: "Automated EPFO Check & HR Outreach",
        description:
          "Our system runs instant EPFO service record checks while reaching out to verified official HR contacts.",
      },
      {
        stepNumber: 3,
        title: "Verified Employment Dossier",
        description:
          "You receive an objective report validating tenure, designation, compensation authenticity, and red flags.",
      },
    ],
  },
  stats: {
    heading: "Combatting Workplace Credential Fraud",
    subheading:
      "Industry data shows over 18% of resumes contain exaggerated or entirely falsified employment histories.",
    stats: [
      {
        value: "Up to 3",
        title: "Employers Checked",
        description: "Comprehensive multi-company audit",
      },
      {
        value: "99.4%",
        title: "Verification Accuracy",
        description: "Official corporate HR validated",
      },
      {
        value: "48-72h",
        title: "Average SLA",
        description: "Fast turnaround with automated escalation",
      },
    ],
  },
  contactCta: {
    title: "Verify Past Work Experience",
    subtitle:
      "Eliminate fake resumes and hire trusted professionals with DigitalRakshak's automated employment background screening.",
    imageSrc: "/images/bgv/b305a.png",
    emailPlaceholder: "Enter your work email",
    companyPlaceholder: "Enter your company name",
    buttonText: "Request Employment Check",
  },
};
