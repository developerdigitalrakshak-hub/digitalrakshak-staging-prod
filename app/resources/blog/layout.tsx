import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DigitalRakshak Blog - Insights on Verification, Compliance & Digital Trust",
  description:
    "Real-world commentary on data privacy laws, identity tech, fraud trends, and engineering trust, straight from the DigitalRakshak team.",
  keywords: [
    "DigitalRakshak Blog",
    "Identity Verification Insights",
    "KYC Compliance Blog",
    "DPDP Act India Compliance",
    "Fraud Prevention Articles",
    "Developer Blueprints API",
  ],
  alternates: {
    canonical: "/resources/blog",
  },
  openGraph: {
    title: "DigitalRakshak Blog - Insights on Verification, Compliance & Digital Trust",
    description:
      "Real-world commentary on data privacy laws, identity tech, fraud trends, and engineering trust, straight from the DigitalRakshak team.",
    url: "https://digitalrakshak.com/resources/blog",
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
    title: "DigitalRakshak Blog - Insights on Verification, Compliance & Digital Trust",
    description:
      "Real-world commentary on data privacy laws, identity tech, fraud trends, and engineering trust, straight from the DigitalRakshak team.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
