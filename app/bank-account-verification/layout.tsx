import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bank Account Verification API | DigitalRakshak",
  description:
    "Instantly validate bank account numbers, IFSC codes, beneficiary names, and active bank account status in sub-seconds before processing payouts or merchant onboarding.",
  keywords: [
    "Bank Account Verification API",
    "Penny Drop Verification",
    "Reverse Penny Drop API",
    "IFSC Verification API",
    "Beneficiary Name Match API",
    "Bank Account Validation",
    "NPCI IMPS Bank Verification",
    "DigitalRakshak Bank API",
  ],
  alternates: {
    canonical: "/bank-account-verification",
  },
  openGraph: {
    title: "Bank Account Verification API | DigitalRakshak",
    description:
      "Instantly validate bank account numbers, IFSC codes, beneficiary names, and active bank account status in sub-seconds before processing payouts or merchant onboarding.",
    url: "https://digitalrakshak.com/bank-account-verification",
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
    title: "Bank Account Verification API | DigitalRakshak",
    description:
      "Instantly validate bank account numbers, IFSC codes, beneficiary names, and active bank account status in sub-seconds before processing payouts or merchant onboarding.",
  },
};

export default function BankAccountVerificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
