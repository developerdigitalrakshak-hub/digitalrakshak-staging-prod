import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Passport Verification API & MRZ OCR | DigitalRakshak",
  description:
    "Real-Time Passport ID Validation & MRZ OCR extraction. Verify nationality, date of birth, passport number, and travel document authenticity instantly against official registries.",
  keywords: [
    "Passport Verification API",
    "Passport MRZ OCR API",
    "MRZ Code Checksum Validation",
    "Passport OCR Extraction",
    "Travel KYC API",
    "Passport Anti-Spoofing",
    "International Identity Verification",
    "NRI Banking Verification API",
    "ICAO 9303 Compliant Verification"
  ],
  alternates: {
    canonical: "/passport-verification",
  },
  openGraph: {
    title: "Passport Verification API & MRZ OCR | DigitalRakshak",
    description:
      "Real-Time Passport ID Validation & MRZ OCR extraction. Verify nationality, date of birth, passport number, and travel document authenticity instantly against official registries.",
    url: "https://digitalrakshak.com/passport-verification",
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
    title: "Passport Verification API & MRZ OCR | DigitalRakshak",
    description:
      "Real-Time Passport ID Validation & MRZ OCR extraction. Verify nationality, date of birth, passport number, and travel document authenticity instantly against official registries.",
  },
};

export default function PassportVerificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
