import { BgvServicePageData } from "@/components/bgv/types";

export const serviceData: BgvServicePageData = {
  hero: {
    headline: "Social Media & Court Record Screening",
    subheadline:
      "Screen civil, criminal, high court, district court, and tribunal databases alongside public digital footprint with DigitalRakshak™. Protect your corporate reputation, workplace safety, and brand integrity.",
    primaryButton: {
      text: "Run Court Record Check",
      href: "#contact",
    },
    secondaryButton: {
      text: "Explore Legal Databases",
      href: "#capabilities",
    },
    images: {
      mainMockup: "/images/bgv/4aef0.png",
      leftCard: "/images/bgv/46bb4.png",
      rightCard: "/images/bgv/b69e7.png",
    },
  },
  whyImportant: {
    title: "Why Are Court Records & Social Media Screening Essential?",
    subtitle:
      "Avoid negligent hiring liabilities, toxic workplace behavior, and public PR disasters before making a formal job offer.",
    centerImage: "/images/bgv/05f01.png",
    features: {
      topLeft: {
        id: "criminal-litigation",
        title: "Pan-India Litigation Search",
        description:
          "Scan Supreme Court, 25 High Courts, 700+ District Courts, and quasi-judicial tribunals.",
      },
      bottomLeft: {
        id: "social-reputation",
        title: "Digital Footprint Analysis",
        description:
          "Analyze publicly accessible online profiles for hate speech, harassment, violence, and brand sabotage.",
        iconSrc: "/images/bgv/16b77.svg",
      },
      topRight: {
        id: "regulatory-defaulters",
        title: "Regulatory & Watchlist Sanctions",
        description:
          "Cross-check against SEBI, CBI, ED, interpol alerts, and global financial enforcement watchlists.",
        iconSrc: "/images/bgv/53705.svg",
      },
      bottomRight: {
        id: "workplace-safety",
        title: "POSH & Safe Work Culture",
        description:
          "Uncover past complaints, sexual harassment litigation, and violence charges to ensure a safe environment.",
        iconSrc: "/images/bgv/dea7e.svg",
      },
    },
  },
  capabilities: {
    sectionTag: "Legal Due Diligence",
    title: "Our Court & Social Media Checks",
    iconSrc: "/images/bgv/4d8b3.svg",
    capabilities: [
      "e-Courts National Judicial Data Grid (NJDG) Real-Time Queries",
      "District Court, High Court & Supreme Court Civil/Criminal Litigation",
      "Debt Recovery Tribunal (DRT) & NCLT Commercial Litigation Checks",
      "Consumer Dispute Redressal Commission & Labour Court Records",
      "Public Social Media Behavioral & Sentiment Risk Screening",
      "Regulatory Blacklist Searches (SEBI, RBI, MCA, Serious Fraud Office)",
      "Global Sanctions & Interpol Most Wanted Database Matching",
      "Legally Compliant Reports Masking Non-Actionable Private Info",
    ],
    showcaseImage: "/images/bgv/f0016.png",
  },
  howItWorks: {
    title: "How Court & Social Screening Works",
    illustrationImage: "/images/bgv/49dd1.png",
    steps: [
      {
        stepNumber: 1,
        title: "Candidate Identity & Alias Mapping",
        description:
          "We map candidate legal names, maiden names, aliases, and known residential jurisdictions.",
      },
      {
        stepNumber: 2,
        title: "Comprehensive Multi-Court Data Search",
        description:
          "Our fuzzy-logic legal search engine queries over 200 million digitized court records across India.",
      },
      {
        stepNumber: 3,
        title: "Certified Legal Due Diligence Report",
        description:
          "Receive a human-curated legal report distinguishing false-positive name similarities from real cases.",
      },
    ],
  },
  stats: {
    heading: "Unmatched Legal Record Coverage",
    subheading:
      "Combining intelligent digital legal search with human legal analysis to avoid false name positives.",
    stats: [
      {
        value: "200M+",
        title: "Court Records",
        description: "Indexed across civil & criminal courts",
      },
      {
        value: "700+",
        title: "District Courts",
        description: "Pan-India judicial jurisdiction",
      },
      {
        value: "Zero",
        title: "False Positives",
        description: "Verified by legal documentation experts",
      },
    ],
  },
  contactCta: {
    title: "Protect Workplace Integrity",
    subtitle:
      "Safeguard your organization from reputational damage and legal risk with DigitalRakshak's court and social screening.",
    imageSrc: "/images/bgv/b305a.png",
    emailPlaceholder: "Enter your work email",
    companyPlaceholder: "Enter your company name",
    buttonText: "Request Legal Screening Demo",
  },
};
