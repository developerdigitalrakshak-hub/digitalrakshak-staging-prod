import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Negative Due Diligence & Adverse Media Check API | DigitalRakshak",
  description:
    "Instantly screen individuals and businesses against global adverse media, court litigation records, Interpol watchlists, PEP databases, RBI defaulters, and sanction registries in real time.",
  keywords: [
    "Negative Due Diligence API",
    "Adverse Media Check API",
    "Sanctions Screening API",
    "PEP Screening API",
    "Court Litigation Search API",
    "RBI Defaulters Check",
    "AML CFT Compliance API",
    "DigitalRakshak Due Diligence",
  ],
  alternates: {
    canonical: "/negative-due-diligence",
  },
  openGraph: {
    title: "Negative Due Diligence & Adverse Media Check API | DigitalRakshak",
    description:
      "Instantly screen individuals and businesses against global adverse media, court litigation records, Interpol watchlists, PEP databases, RBI defaulters, and sanction registries in real time.",
    url: "https://digitalrakshak.com/negative-due-diligence",
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
    title: "Negative Due Diligence & Adverse Media Check API | DigitalRakshak",
    description:
      "Instantly screen individuals and businesses against global adverse media, court litigation records, Interpol watchlists, PEP databases, RBI defaulters, and sanction registries in real time.",
  },
};

export default function NegativeDueDiligenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
