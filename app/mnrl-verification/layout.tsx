import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TRAI MNRL Verification API for Enterprises | DigitalRakshak",
  description:
    "Query official TRAI Mobile Number Revocation List (MNRL) in real time. Detect recycled, disconnected, or reassigned phone numbers and prevent OTP hijacking & SIM swap fraud.",
  keywords: [
    "TRAI MNRL Verification API",
    "Mobile Number Revocation List",
    "Recycled Phone Number Detection",
    "SIM Swap Fraud Prevention",
    "OTP Hijacking Mitigation",
    "TRAI Database Query",
    "Account Takeover Protection",
    "Telecom Registry API",
  ],
  alternates: {
    canonical: "/mnrl-verification",
  },
  openGraph: {
    title: "TRAI MNRL Verification API for Enterprises | DigitalRakshak",
    description:
      "Query official TRAI Mobile Number Revocation List (MNRL) in real time. Detect recycled, disconnected, or reassigned phone numbers and prevent OTP hijacking & SIM swap fraud.",
    url: "https://digitalrakshak.com/mnrl-verification",
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
    title: "TRAI MNRL Verification API for Enterprises | DigitalRakshak",
    description:
      "Query official TRAI Mobile Number Revocation List (MNRL) in real time. Detect recycled, disconnected, or reassigned phone numbers and prevent OTP hijacking & SIM swap fraud.",
  },
};

export default function MNRLVerificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
