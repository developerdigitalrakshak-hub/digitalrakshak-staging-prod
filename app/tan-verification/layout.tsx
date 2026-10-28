import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TAN Verification API | DigitalRakshak",
  description:
    "Instantly verify 10-character Tax Deduction Account Numbers (TAN), deductee legal entity name, TAN category (Company/Individual/Firm), jurisdiction AO code, active TAN status, and TDS compliance via official ITD registries.",
  keywords: [
    "TAN Verification API",
    "Tax Deduction Account Number Verification",
    "TDS Compliance API",
    "AO Code Jurisdiction Search",
    "Deductor Legal Entity Verification",
    "Income Tax Department NSDL TAN API",
    "Vendor Onboarding Tax Verification",
    "DigitalRakshak TAN API",
  ],
  alternates: {
    canonical: "/tan-verification",
  },
  openGraph: {
    title: "TAN Verification API | DigitalRakshak",
    description:
      "Instantly verify 10-character Tax Deduction Account Numbers (TAN), deductee legal entity name, TAN category (Company/Individual/Firm), jurisdiction AO code, active TAN status, and TDS compliance via official ITD registries.",
    url: "https://digitalrakshak.com/tan-verification",
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
    title: "TAN Verification API | DigitalRakshak",
    description:
      "Instantly verify 10-character Tax Deduction Account Numbers (TAN), deductee legal entity name, TAN category (Company/Individual/Firm), jurisdiction AO code, active TAN status, and TDS compliance via official ITD registries.",
  },
};

export default function TANVerificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
