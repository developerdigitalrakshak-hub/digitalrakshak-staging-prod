import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email & Mobile Verification API for Enterprises | DigitalRakshak",
  description:
    "Real-time email and mobile verification API. Stop fraud, block disposable emails, verify global phone numbers across 200+ countries, and deliver instant OTPs.",
  keywords: [
    "Email Verification API",
    "Mobile Verification API",
    "OTP Services",
    "Phone Number Validation",
    "Disposable Email Detection",
    "SMS OTP API",
    "Carrier Detection",
    "Fraud Prevention API",
  ],
  alternates: {
    canonical: "/email-and-mobile-verification",
  },
  openGraph: {
    title: "Email & Mobile Verification API for Enterprises | DigitalRakshak",
    description:
      "Real-time email and mobile verification API. Stop fraud, block disposable emails, verify global phone numbers across 200+ countries, and deliver instant OTPs.",
    url: "https://digitalrakshak.com/email-and-mobile-verification",
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
    title: "Email & Mobile Verification API for Enterprises | DigitalRakshak",
    description:
      "Real-time email and mobile verification API. Stop fraud, block disposable emails, verify global phone numbers across 200+ countries, and deliver instant OTPs.",
  },
};

export default function EmailMobileVerificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
