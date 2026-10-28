import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IP Quality Check API & Fraud Prevention | DigitalRakshak",
  description:
    "Real-time IP reputation scoring, VPN/Proxy/Tor detection, geolocation mapping, and bot risk scoring to safeguard your web applications and API endpoints.",
  keywords: [
    "IP Quality Check API",
    "IP Reputation API",
    "VPN Proxy Tor Detection API",
    "Bot Fraud Detection API",
    "IP Geolocation Intelligence",
    "Fraud Prevention API",
    "Account Takeover Protection",
    "DigitalRakshak IP Check",
  ],
  alternates: {
    canonical: "/ip-quality-check",
  },
  openGraph: {
    title: "IP Quality Check API & Fraud Prevention | DigitalRakshak",
    description:
      "Real-time IP reputation scoring, VPN/Proxy/Tor detection, geolocation mapping, and bot risk scoring to safeguard your web applications and API endpoints.",
    url: "https://digitalrakshak.com/ip-quality-check",
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
    title: "IP Quality Check API & Fraud Prevention | DigitalRakshak",
    description:
      "Real-time IP reputation scoring, VPN/Proxy/Tor detection, geolocation mapping, and bot risk scoring to safeguard your web applications and API endpoints.",
  },
};

export default function IPQualityCheckLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
