import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KYC OCR Plus API for Businesses | DigitalRakshak",
  description:
    "Extract KYC document information with DigitalRakshak's KYC OCR Plus API. Retrieve structured Aadhaar details and integrate document processing into your applications.",
  keywords: [
    "KYC OCR API",
    "KYC OCR Plus API",
    "KYC Document Verification API",
    "Aadhaar OCR API",
    "KYC Data Extraction API",
    "Document OCR API",
    "Identity Document OCR API",
    "Automated KYC Data Extraction",
    "Aadhaar Data Extraction API",
  ],
  alternates: {
    canonical: "/kyc-ocr-plus-api",
  },
  openGraph: {
    title: "KYC OCR Plus API for Businesses | DigitalRakshak",
    description:
      "Extract KYC document information with DigitalRakshak's KYC OCR Plus API. Retrieve structured Aadhaar details and integrate document processing into your applications.",
    url: "https://digitalrakshak.com/kyc-ocr-plus-api",
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
    title: "KYC OCR Plus API for Businesses | DigitalRakshak",
    description:
      "Extract KYC document information with DigitalRakshak's KYC OCR Plus API. Retrieve structured Aadhaar details and integrate document processing into your applications.",
  },
};

export default function KycOcrPlusApiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
