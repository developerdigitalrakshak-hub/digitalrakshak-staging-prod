import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experian Credit Bureau API | DigitalRakshak",
  description:
    "Instantly pull official Experian credit scores, commercial credit risk ranks, active loan accounts, repayment history, DPD delinquencies, and credit utilization for individuals and commercial entities.",
  keywords: [
    "Experian Credit Bureau API",
    "Credit Score API",
    "Experian Score Check",
    "Commercial CMR Rank API",
    "DPD Delinquency Tracking",
    "Active Loan Accounts Audit",
    "Digital Lending Underwriting API",
    "DigitalRakshak Experian API",
  ],
  alternates: {
    canonical: "/experian-credit-bureau",
  },
  openGraph: {
    title: "Experian Credit Bureau API | DigitalRakshak",
    description:
      "Instantly pull official Experian credit scores, commercial credit risk ranks, active loan accounts, repayment history, DPD delinquencies, and credit utilization for individuals and commercial entities.",
    url: "https://digitalrakshak.com/experian-credit-bureau",
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
    title: "Experian Credit Bureau API | DigitalRakshak",
    description:
      "Instantly pull official Experian credit scores, commercial credit risk ranks, active loan accounts, repayment history, DPD delinquencies, and credit utilization for individuals and commercial entities.",
  },
};

export default function ExperianCreditBureauLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
