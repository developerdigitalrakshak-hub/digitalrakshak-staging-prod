import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hybrid Bank Account Verification API | DigitalRakshak",
  description:
    "Combine Penny Drop, Penny-Less, and instant UPI failover verification into a single intelligent API engine for 100% verification success rate and zero payout bounces.",
  keywords: [
    "Hybrid Bank Account Verification API",
    "Multi Mode Bank Verification",
    "Penny Drop Failover API",
    "Penny Less Bank Verification",
    "Beneficiary Name Match API",
    "Bank Account Validation API",
    "NPCI IMPS Bank Verification",
    "Zero Payout Bounces API",
    "DigitalRakshak Bank API",
  ],
  alternates: {
    canonical: "/hybrid-bank-account-verification",
  },
  openGraph: {
    title: "Hybrid Bank Account Verification API | DigitalRakshak",
    description:
      "Combine Penny Drop, Penny-Less, and instant UPI failover verification into a single intelligent API engine for 100% verification success rate and zero payout bounces.",
    url: "https://digitalrakshak.com/hybrid-bank-account-verification",
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
    title: "Hybrid Bank Account Verification API | DigitalRakshak",
    description:
      "Combine Penny Drop, Penny-Less, and instant UPI failover verification into a single intelligent API engine for 100% verification success rate and zero payout bounces.",
  },
};

export default function HybridBankAccountVerificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
