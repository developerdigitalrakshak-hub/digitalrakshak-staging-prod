import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vehicle Reverse RC Verification API | DigitalRakshak",
  description:
    "Search by Owner Name, Mobile Number, Chassis Number, or Engine Number to discover all linked vehicles, RC registration records, and owner asset details via MoRTH Vahan gateway.",
  keywords: [
    "Vehicle Reverse RC Verification API",
    "Reverse RC Lookup API",
    "Owner Name Vehicle Search API",
    "Chassis to Registration Number API",
    "Vahan Asset Discovery API",
    "Vehicle Asset Recovery API",
    "Fleet Discovery API",
    "DigitalRakshak Reverse RC API",
  ],
  alternates: {
    canonical: "/vehicle-reverse-rc",
  },
  openGraph: {
    title: "Vehicle Reverse RC Verification API | DigitalRakshak",
    description:
      "Search by Owner Name, Mobile Number, Chassis Number, or Engine Number to discover all linked vehicles, RC registration records, and owner asset details via MoRTH Vahan gateway.",
    url: "https://digitalrakshak.com/vehicle-reverse-rc",
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
    title: "Vehicle Reverse RC Verification API | DigitalRakshak",
    description:
      "Search by Owner Name, Mobile Number, Chassis Number, or Engine Number to discover all linked vehicles, RC registration records, and owner asset details via MoRTH Vahan gateway.",
  },
};

export default function VehicleReverseRCLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
