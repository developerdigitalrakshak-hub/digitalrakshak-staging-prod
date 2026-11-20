import { BgvServicePageData } from "@/components/bgv/types";

export const serviceData: BgvServicePageData = {
  hero: {
    headline: "Education Qualification Verification Services",
    subheadline:
      "Authenticating university degrees, diplomas, academic marksheets, roll numbers, and board records directly from accredited universities and educational repositories with DigitalRakshak™.",
    primaryButton: {
      text: "Verify Education Now",
      href: "#contact",
    },
    secondaryButton: {
      text: "View Institution Network",
      href: "#capabilities",
    },
    images: {
      mainMockup: "/images/bgv/4aef0.png",
      leftCard: "/images/bgv/46bb4.png",
      rightCard: "/images/bgv/b69e7.png",
    },
  },
  whyImportant: {
    title: "Why Is Education Verification Vital for Hiring Integrity?",
    subtitle:
      "Uncover diploma mill certificates, altered grades, forged marks cards, and unaccredited degree credentials.",
    centerImage: "/images/bgv/05f01.png",
    features: {
      topLeft: {
        id: "diploma-mills",
        title: "Block Fake Degrees",
        description:
          "Identify certificates purchased from unaccredited fake universities or blacklisted diploma mills.",
      },
      bottomLeft: {
        id: "roll-number-check",
        title: "Direct Registrar Validation",
        description:
          "Cross-verify enrollment roll numbers, passing year, and division directly with university registrars.",
        iconSrc: "/images/bgv/16b77.svg",
      },
      topRight: {
        id: "nad-digilocker",
        title: "Digital Academic Repositories",
        description:
          "Instant digital verification through National Academic Depository (NAD) and DigiLocker databases.",
        iconSrc: "/images/bgv/53705.svg",
      },
      bottomRight: {
        id: "specialized-courses",
        title: "Professional Licenses",
        description:
          "Authenticate CA, Bar Council, Medical Council, and engineering certifications with issuing statutory bodies.",
        iconSrc: "/images/bgv/dea7e.svg",
      },
    },
  },
  capabilities: {
    sectionTag: "Academic Screening",
    title: "Our Education Verification Suite",
    iconSrc: "/images/bgv/4d8b3.svg",
    capabilities: [
      "Direct University Registrar Official Records Verification",
      "National Academic Depository (NAD) Digital Validation",
      "Autonomous College, State & Central Board Marksheet Checks",
      "Undergraduate, Postgraduate & Doctorate Degree Authentication",
      "Professional Certificate (CA, CS, MBA, MBBS, Law) Verification",
      "International University & World Education Services (WES) Checks",
      "Tamper-Proof Verification Certificate with College Seal",
      "Discrepancy Reporting on Falsified GPA or Year of Graduation",
    ],
    showcaseImage: "/images/bgv/f0016.png",
  },
  howItWorks: {
    title: "How Education Verification Works",
    illustrationImage: "/images/bgv/49dd1.png",
    steps: [
      {
        stepNumber: 1,
        title: "Upload Degree or Roll Number",
        description:
          "Applicant uploads degree scan or provides student registration roll number and university name.",
      },
      {
        stepNumber: 2,
        title: "University & Repository Validation",
        description:
          "We query digital academic repositories or dispatch official verification inquiries to the registrar office.",
      },
      {
        stepNumber: 3,
        title: "Official Verification Authentication",
        description:
          "Receive a verified status report confirming degree validity, major, grades, and graduation year.",
      },
    ],
  },
  stats: {
    heading: "Academic Integrity Across Sectors",
    subheading:
      "Fake degrees pose severe compliance risks in banking, IT, healthcare, and engineering industries.",
    stats: [
      {
        value: "800+",
        title: "Universities Covered",
        description: "UGC, AICTE & Board accredited",
      },
      {
        value: "100%",
        title: "Registrar Confirmed",
        description: "Official institutional confirmation",
      },
      {
        value: "99.7%",
        title: "Detection Precision",
        description: "Spotting forged marksheets instantly",
      },
    ],
  },
  contactCta: {
    title: "Authenticate Academic Credentials",
    subtitle:
      "Protect your company from unqualified hires with DigitalRakshak's comprehensive university education verification.",
    imageSrc: "/images/bgv/b305a.png",
    emailPlaceholder: "Enter your work email",
    companyPlaceholder: "Enter your company name",
    buttonText: "Request Education Check",
  },
};
