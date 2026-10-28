import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Income Tax Return (ITR) Verification API | DigitalRakshak",
  description:
    "Instantly verify ITR filings, Gross Total Income, taxable income, filing status, acknowledgment numbers, tax paid history, and PAN-linked financial compliance via official ITD portals.",
  keywords: [
    "ITR Verification API",
    "Income Tax Return Verification API",
    "ITR Acknowledgment Verification",
    "Gross Total Income Verification",
    "ITD e-Filing Verification API",
    "Tax Compliance API",
    "Credit Underwriting ITR API",
    "DigitalRakshak ITR API",
  ],
  alternates: {
    canonical: "/itr-verification",
  },
  openGraph: {
    title: "Income Tax Return (ITR) Verification API | DigitalRakshak",
    description:
      "Instantly verify ITR filings, Gross Total Income, taxable income, filing status, acknowledgment numbers, tax paid history, and PAN-linked financial compliance via official ITD portals.",
    url: "https://digitalrakshak.com/itr-verification",
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
    title: "Income Tax Return (ITR) Verification API | DigitalRakshak",
    description:
      "Instantly verify ITR filings, Gross Total Income, taxable income, filing status, acknowledgment numbers, tax paid history, and PAN-linked financial compliance via official ITD portals.",
  },
};

export default function ITRVerificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
