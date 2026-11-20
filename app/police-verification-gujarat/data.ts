import { BgvServicePageData } from "@/components/bgv/types";

export const serviceData: BgvServicePageData = {
  hero: {
    headline: "Police Verification Services across Gujarat",
    subheadline:
      "Direct police clearance, FIR record checks, and official character & antecedent verification across all 33 districts of Gujarat with DigitalRakshak™. Ensure official law enforcement clearance for high-trust roles.",
    primaryButton: {
      text: "Apply for Police Verification",
      href: "#contact",
    },
    secondaryButton: {
      text: "View District Coverage",
      href: "#capabilities",
    },
    images: {
      mainMockup: "/images/bgv/4aef0.png",
      leftCard: "/images/bgv/46bb4.png",
      rightCard: "/images/bgv/b69e7.png",
    },
  },
  whyImportant: {
    title: "Why Is Official Police Verification Essential?",
    subtitle:
      "Statutory compliance for security personnel, childcare workers, healthcare staff, and sensitive corporate roles.",
    centerImage: "/images/bgv/05f01.png",
    features: {
      topLeft: {
        id: "fir-records",
        title: "Official Police FIR Search",
        description:
          "Check local police station records, non-bailable warrants, and ongoing criminal investigation proceedings.",
      },
      bottomLeft: {
        id: "pcc-certificate",
        title: "Official Police Clearance (PCC)",
        description:
          "Assistance with official Police Clearance Certificates issued directly by District Police Commissionerates.",
        iconSrc: "/images/bgv/16b77.svg",
      },
      topRight: {
        id: "cctns-integration",
        title: "CCTNS Police Database Access",
        description:
          "Cross-verification through Crime and Criminal Tracking Network and Systems (CCTNS) repositories.",
        iconSrc: "/images/bgv/53705.svg",
      },
      bottomRight: {
        id: "gujarat-districts",
        title: "All 33 Districts Covered",
        description:
          "End-to-end liaison with Ahmedabad, Surat, Vadodara, Rajkot, and all district police headquarters.",
        iconSrc: "/images/bgv/dea7e.svg",
      },
    },
  },
  capabilities: {
    sectionTag: "Law Enforcement Liaison",
    title: "Our Gujarat Police Verification Suite",
    iconSrc: "/images/bgv/4d8b3.svg",
    capabilities: [
      "Official Police Clearance Certificate (PCC) Liaison Support",
      "Local Police Station Antecedent & Character Report Check",
      "Criminal Case (FIR) History Search Across Gujarat Jurisdictions",
      "Guaranteed Coverage Across All 33 Districts & 4 Police Commissionerates",
      "On-Ground Document Submission & Police Verification Follow-ups",
      "Identification of Non-Cognizable Offenses & Police Warnings",
      "Corporate Fast-Track Batch Verification for Large Workforces",
      "Official Certified Police Verification Report with Dispatch Reference",
    ],
    showcaseImage: "/images/bgv/f0016.png",
  },
  howItWorks: {
    title: "How Gujarat Police Verification Works",
    illustrationImage: "/images/bgv/49dd1.png",
    steps: [
      {
        stepNumber: 1,
        title: "Application & Documentation Intake",
        description:
          "Submit applicant proof of identity, residential address in Gujarat, and signed verification authorization.",
      },
      {
        stepNumber: 2,
        title: "Police Station Outreach & Field Inquiry",
        description:
          "Liaison with the designated jurisdictional police station for crime records check and beat constable verification.",
      },
      {
        stepNumber: 3,
        title: "Issuance of Police Clearance Record",
        description:
          "Receive the official Police Clearance report verifying clean antecedents or documenting criminal findings.",
      },
    ],
  },
  stats: {
    heading: "Complete Gujarat State Police Verification Network",
    subheading:
      "Helping manufacturing plants, IT parks, retail chains, and corporate offices secure certified police clearances.",
    stats: [
      {
        value: "33",
        title: "Districts in Gujarat",
        description: "100% state-wide jurisdiction coverage",
      },
      {
        value: "Official",
        title: "Government Authority",
        description: "Direct department documentation",
      },
      {
        value: "100%",
        title: "Legal Validity",
        description: "Accepted across courts & enterprise audits",
      },
    ],
  },
  contactCta: {
    title: "Initiate Police Verification",
    subtitle:
      "Partner with DigitalRakshak for certified, streamlined police verification across Ahmedabad, Surat, and all Gujarat districts.",
    imageSrc: "/images/bgv/b305a.png",
    emailPlaceholder: "Enter your work email",
    companyPlaceholder: "Enter your company name",
    buttonText: "Request Police Verification",
  },
};
