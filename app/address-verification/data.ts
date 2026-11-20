import { BgvServicePageData } from "@/components/bgv/types";

export const serviceData: BgvServicePageData = {
  hero: {
    headline: "Address Verification – Digital & Physical",
    subheadline:
      "Comprehensive digital geolocation tagging and nationwide on-ground physical address verification with DigitalRakshak™. Validate candidate residences and business premises with GPS-stamped photo proofs.",
    primaryButton: {
      text: "Verify Address Now",
      href: "#contact",
    },
    secondaryButton: {
      text: "See How It Works",
      href: "#capabilities",
    },
    images: {
      mainMockup: "/images/bgv/4aef0.png",
      leftCard: "/images/bgv/46bb4.png",
      rightCard: "/images/bgv/b69e7.png",
    },
  },
  whyImportant: {
    title: "Why Is Dual Digital & Physical Address Verification Crucial?",
    subtitle:
      "Prevent fake residential records, absconding risks, and legal service delivery failures with certified physical checks.",
    centerImage: "/images/bgv/05f01.png",
    features: {
      topLeft: {
        id: "curb-ghost-addresses",
        title: "Eliminate Ghost Addresses",
        description:
          "Catch fictitious addresses or commercial addresses falsely declared as permanent residences.",
      },
      bottomLeft: {
        id: "geo-tagging",
        title: "Digital Geolocation Tagging",
        description:
          "Applicants share real-time GPS coordinates and house photos through a secure web link.",
        iconSrc: "/images/bgv/16b77.svg",
      },
      topRight: {
        id: "ground-verification",
        title: "Nationwide Field Executives",
        description:
          "Trained verification officers conduct discreet physical visits across 19,000+ pin codes in India.",
        iconSrc: "/images/bgv/53705.svg",
      },
      bottomRight: {
        id: "neighbor-check",
        title: "Neighbor & Landmark Validation",
        description:
          "Cross-verify applicant residency duration, relationship to property, and local reputation.",
        iconSrc: "/images/bgv/dea7e.svg",
      },
    },
  },
  capabilities: {
    sectionTag: "Verification Modes",
    title: "Complete Address Verification Capabilities",
    iconSrc: "/images/bgv/4d8b3.svg",
    capabilities: [
      "Physical Field Officer In-Person Visits Across Pan-India",
      "Digital Self-Service Address Verification with Geo-Fencing",
      "GPS Latitude & Longitude Watermarked Photo Evidence",
      "Ownership & Tenancy Agreement Cross-Checks",
      "Independent Local Neighbor Confirmations",
      "Permanent, Current, and Previous Address Checks",
      "Comprehensive Digital Mapping & Landmark Verification",
      "Detailed Physical Verification Reports with Site Photos",
    ],
    showcaseImage: "/images/bgv/f0016.png",
  },
  howItWorks: {
    title: "How Address Verification Works",
    illustrationImage: "/images/bgv/49dd1.png",
    steps: [
      {
        stepNumber: 1,
        title: "Address Submission & Pin Code Routing",
        description:
          "HR submits address details and the task is dispatched to local field agents or digital link workflow.",
      },
      {
        stepNumber: 2,
        title: "Digital Tagging or On-Ground Visit",
        description:
          "Field agent visits premise, inspects address evidence, takes geotagged pictures, and speaks with neighbors.",
      },
      {
        stepNumber: 3,
        title: "Consolidated Verification Report",
        description:
          "A complete verification dossier with status (Clear/Discrepancy), site photos, and map plots is delivered.",
      },
    ],
  },
  stats: {
    heading: "Pan-India Address Verification Reach",
    subheading:
      "Combining automated digital mapping with an extensive network of ground verification professionals.",
    stats: [
      {
        value: "19k+",
        title: "Pin Codes Covered",
        description: "Urban, semi-urban and rural reach",
      },
      {
        value: "24-48h",
        title: "Digital SLA",
        description: "Rapid turnaround for digital checks",
      },
      {
        value: "100%",
        title: "Geo-Stamped Evidence",
        description: "Tamper-proof photo proofs",
      },
    ],
  },
  contactCta: {
    title: "Verify Candidate Addresses",
    subtitle:
      "Ensure candidate residential authenticity with DigitalRakshak's hybrid digital and on-ground verification network.",
    imageSrc: "/images/bgv/b305a.png",
    emailPlaceholder: "Enter your work email",
    companyPlaceholder: "Enter your company name",
    buttonText: "Request Address Check Demo",
  },
};
