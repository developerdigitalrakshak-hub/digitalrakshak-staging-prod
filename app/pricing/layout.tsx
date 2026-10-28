import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simple, Transparent Pricing | DigitalRakshak",
  description:
    "Find the perfect plan to secure your business, from startups to large enterprises. No hidden fees, just powerful verification solutions with sub-second latency.",
  keywords: [
    "DigitalRakshak Pricing",
    "API Verification Pricing",
    "KYC API Plans",
    "Identity Verification Cost",
    "Enterprise API Pricing",
    "Vahan API Pricing",
    "PAN GST API Pricing",
    "DigitalRakshak Plans",
  ],
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Simple, Transparent Pricing | DigitalRakshak",
    description:
      "Find the perfect plan to secure your business, from startups to large enterprises. No hidden fees, just powerful verification solutions with sub-second latency.",
    url: "https://digitalrakshak.com/pricing",
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
    title: "Simple, Transparent Pricing | DigitalRakshak",
    description:
      "Find the perfect plan to secure your business, from startups to large enterprises. No hidden fees, just powerful verification solutions with sub-second latency.",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
