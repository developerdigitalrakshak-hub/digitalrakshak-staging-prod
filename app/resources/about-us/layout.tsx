import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - DigitalRakshak | Building Digital Trust Infrastructure",
  description:
    "DigitalRakshak builds the backend infrastructure that powers secure hiring, verification, and compliance across India. Unifying real-time verification tech, compliance automation, and enterprise security.",
  keywords: [
    "About DigitalRakshak",
    "Digital Trust Infrastructure",
    "Identity Verification Company India",
    "Compliance Automation Platform",
    "KYC Due Diligence Provider",
    "Enterprise Security Architecture",
  ],
  alternates: {
    canonical: "/resources/about-us",
  },
  openGraph: {
    title: "About Us - DigitalRakshak | Building Digital Trust Infrastructure",
    description:
      "DigitalRakshak builds the backend infrastructure that powers secure hiring, verification, and compliance across India.",
    url: "https://digitalrakshak.com/resources/about-us",
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
    title: "About Us - DigitalRakshak | Building Digital Trust Infrastructure",
    description:
      "DigitalRakshak builds the backend infrastructure that powers secure hiring, verification, and compliance across India.",
  },
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
