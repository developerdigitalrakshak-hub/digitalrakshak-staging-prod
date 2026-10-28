import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ITR Fetch API | DigitalRakshak",
  description:
    "Instantly retrieve full Income Tax Return financial data, gross income breakdown, taxable income, deductions, tax paid history, and Form 26AS/AIS summaries directly from ITD e-filing portals.",
  keywords: [
    "ITR Fetch API",
    "Tax Return Data Retrieval API",
    "Form 26AS Fetch API",
    "AIS Summary API",
    "Gross Total Income Breakdown API",
    "ITD e-Filing Data Fetch",
    "Credit Underwriting ITR API",
    "DigitalRakshak ITR Fetch",
  ],
  alternates: {
    canonical: "/itr-fetch",
  },
  openGraph: {
    title: "ITR Fetch API | DigitalRakshak",
    description:
      "Instantly retrieve full Income Tax Return financial data, gross income breakdown, taxable income, deductions, tax paid history, and Form 26AS/AIS summaries directly from ITD e-filing portals.",
    url: "https://digitalrakshak.com/itr-fetch",
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
    title: "ITR Fetch API | DigitalRakshak",
    description:
      "Instantly retrieve full Income Tax Return financial data, gross income breakdown, taxable income, deductions, tax paid history, and Form 26AS/AIS summaries directly from ITD e-filing portals.",
  },
};

export default function ITRFetchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
