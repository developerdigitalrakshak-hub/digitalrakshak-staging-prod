import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IFSC Code Verification API | DigitalRakshak",
  description:
    "Instantly validate 11-character Indian Financial System Code (IFSC) details, extract bank name, branch, MICR code, branch address, contact number, RTGS/NEFT/IMPS/UPI transfer capability, and RBI status in sub-seconds.",
  keywords: [
    "IFSC Code Verification API",
    "Bank Branch Verification API",
    "IFSC Lookup API",
    "MICR Code Lookup",
    "RBI Bank Master Sync",
    "Bank Payout Validation API",
    "NEFT IMPS RTGS Branch Capability",
    "DigitalRakshak Banking API",
  ],
  alternates: {
    canonical: "/ifsc-check",
  },
  openGraph: {
    title: "IFSC Code Verification API | DigitalRakshak",
    description:
      "Instantly validate 11-character Indian Financial System Code (IFSC) details, extract bank name, branch, MICR code, branch address, contact number, RTGS/NEFT/IMPS/UPI transfer capability, and RBI status in sub-seconds.",
    url: "https://digitalrakshak.com/ifsc-check",
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
    title: "IFSC Code Verification API | DigitalRakshak",
    description:
      "Instantly validate 11-character Indian Financial System Code (IFSC) details, extract bank name, branch, MICR code, branch address, contact number, RTGS/NEFT/IMPS/UPI transfer capability, and RBI status in sub-seconds.",
  },
};

export default function IFSCCheckLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
