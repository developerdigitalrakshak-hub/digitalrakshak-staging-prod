import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reverse Geo-Code & Spatial Address Intelligence API | DigitalRakshak",
  description:
    "Convert messy address strings into precise, verified physical coordinates instantly. Automated address validation, PIN code verification, and GIS matching for enterprise workflows.",
  keywords: [
    "Reverse Geo-Code API",
    "Spatial Address Intelligence",
    "Address Verification API",
    "GIS Coordinate Verification",
    "PIN Code Verification",
    "Address Standardization API",
    "Background Verification Address Check",
    "DigitalRakshak Reverse Geocoding",
  ],
  alternates: {
    canonical: "/reverse-geocodes",
  },
  openGraph: {
    title: "Reverse Geo-Code & Spatial Address Intelligence API | DigitalRakshak",
    description:
      "Convert messy address strings into precise, verified physical coordinates instantly. Automated address validation, PIN code verification, and GIS matching for enterprise workflows.",
    url: "https://digitalrakshak.com/reverse-geocodes",
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
    title: "Reverse Geo-Code & Spatial Address Intelligence API | DigitalRakshak",
    description:
      "Convert messy address strings into precise, verified physical coordinates instantly. Automated address validation, PIN code verification, and GIS matching for enterprise workflows.",
  },
};

export default function ReverseGeoCodesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
