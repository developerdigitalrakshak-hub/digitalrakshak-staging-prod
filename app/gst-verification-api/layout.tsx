import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GST Verification API for Enterprises | DigitalRakshak",
  description:
    "Verify GSTIN and GST filing details with DigitalRakshak's GST Verification API for enterprise workflows, e-Invoicing and e-Way Bills.",
  keywords: [
    "GST Verification API",
    "GST Verification Services",
    "GSTIN Verification API",
    "GST API Services",
    "GST Suvidha Provider",
    "GSP API",
    "GST filing verification",
    "e-Invoice API",
    "e-Way Bill API",
  ],
  alternates: {
    canonical: "/gst-verification-api",
  },
  openGraph: {
    title: "GST Verification API for Enterprises | DigitalRakshak",
    description:
      "Verify GSTIN and GST filing details with DigitalRakshak's GST Verification API for enterprise workflows, e-Invoicing and e-Way Bills.",
    url: "https://digitalrakshak.com/gst-verification-api",
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
    title: "GST Verification API for Enterprises | DigitalRakshak",
    description:
      "Verify GSTIN and GST filing details with DigitalRakshak's GST Verification API for enterprise workflows, e-Invoicing and e-Way Bills.",
  },
};

export default function GstApiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
