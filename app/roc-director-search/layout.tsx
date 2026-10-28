import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ROC Director Search API | DigitalRakshak",
  description:
    "Search by Director Identification Number (DIN), Director Name, or PAN to discover all associated company directorships, DIN validity, appointment dates, and MCA disqualification records in real time.",
  keywords: [
    "ROC Director Search API",
    "MCA DIN Verification API",
    "Director Identification Number Search",
    "Section 164 Disqualification Check",
    "Company Directorship Mapping API",
    "Promoter Background Verification",
    "MCA ROC Due Diligence API",
    "DigitalRakshak ROC Director Search",
  ],
  alternates: {
    canonical: "/roc-director-search",
  },
  openGraph: {
    title: "ROC Director Search API | DigitalRakshak",
    description:
      "Search by Director Identification Number (DIN), Director Name, or PAN to discover all associated company directorships, DIN validity, appointment dates, and MCA disqualification records in real time.",
    url: "https://digitalrakshak.com/roc-director-search",
    siteName: "DigitalRakshak",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "ROC Director Search API | DigitalRakshak",
    description:
      "Search by Director Identification Number (DIN), Director Name, or PAN to discover all associated company directorships, DIN validity, appointment dates, and MCA disqualification records in real time.",
  },
};

export default function ROCDirectorSearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
