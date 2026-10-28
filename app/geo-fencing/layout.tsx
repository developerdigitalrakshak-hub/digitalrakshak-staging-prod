import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Geo-Fencing BGV & Location Intelligence API | DigitalRakshak",
  description:
    "Real-time, location-intelligent verification for the modern, distributed workforce. Eradicate remote work proxy fraud, enforce WFH compliance boundaries, and automate field audits.",
  keywords: [
    "Geo-Fencing BGV",
    "Location Intelligence API",
    "Remote Work Compliance",
    "Anti-Spoofing GPS Verification",
    "Proxy Hiring Fraud Detection",
    "Field Force Auditing API",
    "Background Verification API",
    "DigitalRakshak Geo Fencing",
  ],
  alternates: {
    canonical: "/geo-fencing",
  },
  openGraph: {
    title: "Geo-Fencing BGV & Location Intelligence API | DigitalRakshak",
    description:
      "Real-time, location-intelligent verification for the modern, distributed workforce. Eradicate remote work proxy fraud, enforce WFH compliance boundaries, and automate field audits.",
    url: "https://digitalrakshak.com/geo-fencing",
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
    title: "Geo-Fencing BGV & Location Intelligence API | DigitalRakshak",
    description:
      "Real-time, location-intelligent verification for the modern, distributed workforce. Eradicate remote work proxy fraud, enforce WFH compliance boundaries, and automate field audits.",
  },
};

export default function GeoFencingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
