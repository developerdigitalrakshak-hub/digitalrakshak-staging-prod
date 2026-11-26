import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Verification with OTP API for Enterprises | DigitalRakshak",
  description:
    "Generate OTPs for mobile number verification with DigitalRakshak's Mobile Verification API. Integrate OTP-based authentication into your business workflows.",
  keywords: [
    "Mobile Verification with OTP API",
    "Mobile Number Verification API",
    "OTP Verification API",
    "Mobile OTP Authentication API",
    "Phone Number Verification API",
    "OTP Generation API",
    "Mobile Number Authentication",
    "OTP-Based Mobile Verification",
  ],
  alternates: {
    canonical: "/mobile-verification-with-otp-api",
  },
  openGraph: {
    title: "Mobile Verification with OTP API for Enterprises | DigitalRakshak",
    description:
      "Generate OTPs for mobile number verification with DigitalRakshak's Mobile Verification API. Integrate OTP-based authentication into your business workflows.",
    url: "https://digitalrakshak.com/mobile-verification-with-otp-api",
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
    title: "Mobile Verification with OTP API for Enterprises | DigitalRakshak",
    description:
      "Generate OTPs for mobile number verification with DigitalRakshak's Mobile Verification API. Integrate OTP-based authentication into your business workflows.",
  },
};

export default function MobileVerificationOtpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
