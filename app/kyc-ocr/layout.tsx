import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KYC OCR (Document Intelligence) API for Enterprises | DigitalRakshak",
  description:
    "Automate data extraction from KYC documents with speed, accuracy & intelligence. DigitalRakshak's AI-powered KYC OCR API eliminates manual data entry bottlenecks.",
  keywords: [
    "KYC OCR",
    "KYC OCR API",
    "Document Intelligence",
    "Aadhaar OCR",
    "PAN Card OCR",
    "Passport OCR",
    "Driving License OCR",
    "Identity Verification API",
    "OCR Data Extraction",
    "Document Verification",
  ],
  alternates: {
    canonical: "/kyc-ocr",
  },
  openGraph: {
    title: "KYC OCR (Document Intelligence) API for Enterprises | DigitalRakshak",
    description:
      "Automate data extraction from KYC documents with speed, accuracy & intelligence. DigitalRakshak's AI-powered KYC OCR API eliminates manual data entry bottlenecks.",
    url: "https://digitalrakshak.com/kyc-ocr",
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
    title: "KYC OCR (Document Intelligence) API for Enterprises | DigitalRakshak",
    description:
      "Automate data extraction from KYC documents with speed, accuracy & intelligence. DigitalRakshak's AI-powered KYC OCR API eliminates manual data entry bottlenecks.",
  },
};

export default function KycOcrLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
