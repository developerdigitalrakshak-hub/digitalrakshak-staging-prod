import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Document Forgery Detection API | DigitalRakshak",
  description:
    "Detect manipulated images, photoshopped KYC documents, font tampering, copy-paste artifacts, EXIF metadata anomalies, and digital forgery across Aadhaar, PAN, Voter ID, Passport, and bank statements in real time.",
  keywords: [
    "Document Forgery Detection API",
    "Photoshop Detection API",
    "KYC Tamper Detection",
    "Font Tampering Forensic",
    "EXIF Metadata Audit",
    "Bank Statement Forgery Check",
    "Aadhaar PAN Tamper Detection",
    "DigitalRakshak Forgery API",
  ],
  alternates: {
    canonical: "/document-forgery-detection",
  },
  openGraph: {
    title: "Document Forgery Detection API | DigitalRakshak",
    description:
      "Detect manipulated images, photoshopped KYC documents, font tampering, copy-paste artifacts, EXIF metadata anomalies, and digital forgery across Aadhaar, PAN, Voter ID, Passport, and bank statements in real time.",
    url: "https://digitalrakshak.com/document-forgery-detection",
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
    title: "Document Forgery Detection API | DigitalRakshak",
    description:
      "Detect manipulated images, photoshopped KYC documents, font tampering, copy-paste artifacts, EXIF metadata anomalies, and digital forgery across Aadhaar, PAN, Voter ID, Passport, and bank statements in real time.",
  },
};

export default function DocumentForgeryDetectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
