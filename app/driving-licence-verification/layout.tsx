import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Driving License (DL) Verification API | DigitalRakshak",
  description:
    "Real-time Driving License validation, authorized vehicle class extraction, issue & expiry dates, RTO jurisdiction, and DL holder DOB/Address check via Sarathi/Parivahan databases.",
  keywords: [
    "Driving License Verification API",
    "DL Verification API",
    "Sarathi RTO API",
    "Parivahan DL Check",
    "Driver License Validation",
    "Vehicle Class Endorsement API",
    "Commercial Transport Badge Check",
    "DigitalRakshak DL API",
  ],
  alternates: {
    canonical: "/driving-licence-verification",
  },
  openGraph: {
    title: "Driving License (DL) Verification API | DigitalRakshak",
    description:
      "Real-time Driving License validation, authorized vehicle class extraction, issue & expiry dates, RTO jurisdiction, and DL holder DOB/Address check via Sarathi/Parivahan databases.",
    url: "https://digitalrakshak.com/driving-licence-verification",
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
    title: "Driving License (DL) Verification API | DigitalRakshak",
    description:
      "Real-time Driving License validation, authorized vehicle class extraction, issue & expiry dates, RTO jurisdiction, and DL holder DOB/Address check via Sarathi/Parivahan databases.",
  },
};

export default function DrivingLicenceVerificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
