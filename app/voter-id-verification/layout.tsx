import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voter ID Verification API & Electoral KYC | DigitalRakshak",
  description:
    "Instantly verify 10-character EPIC voter card numbers, extract voter legal name, age, gender, relative name, assembly constituency, and state details in sub-seconds.",
  keywords: [
    "Voter ID Verification API",
    "EPIC Number Verification",
    "Voter Card Verification",
    "ECI Electoral Roll Sync",
    "Voter ID KYC API",
    "Digital Electoral Verification",
    "Age 18+ Verification API",
    "Assembly Constituency Data",
    "Demographic Identity Verification",
  ],
  alternates: {
    canonical: "/voter-id-verification",
  },
  openGraph: {
    title: "Voter ID Verification API & Electoral KYC | DigitalRakshak",
    description:
      "Instantly verify 10-character EPIC voter card numbers, extract voter legal name, age, gender, relative name, assembly constituency, and state details in sub-seconds.",
    url: "https://digitalrakshak.com/voter-id-verification",
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
    title: "Voter ID Verification API & Electoral KYC | DigitalRakshak",
    description:
      "Instantly verify 10-character EPIC voter card numbers, extract voter legal name, age, gender, relative name, assembly constituency, and state details in sub-seconds.",
  },
};

export default function VoterIDVerificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
