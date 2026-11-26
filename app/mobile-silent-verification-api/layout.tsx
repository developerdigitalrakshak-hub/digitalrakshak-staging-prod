import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Silent Verification API for Enterprises | DigitalRakshak",
  description:
    "Verify mobile numbers and access subscriber details with DigitalRakshak's Mobile Silent Verification API for seamless business workflows.",
  keywords: [
    "Mobile Silent Verification API",
    "Mobile Number Verification API",
    "Mobile Silent Verification",
    "Mobile KYC API",
    "Mobile Number Validation API",
    "Subscriber Verification API",
    "Telecom Operator Verification",
    "Mobile Number Portability Check",
  ],
  alternates: {
    canonical: "/mobile-silent-verification-api",
  },
  openGraph: {
    title: "Mobile Silent Verification API for Enterprises | DigitalRakshak",
    description:
      "Verify mobile numbers and access subscriber details with DigitalRakshak's Mobile Silent Verification API for seamless business workflows.",
    url: "https://digitalrakshak.com/mobile-silent-verification-api",
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
    title: "Mobile Silent Verification API for Enterprises | DigitalRakshak",
    description:
      "Verify mobile numbers and access subscriber details with DigitalRakshak's Mobile Silent Verification API for seamless business workflows.",
  },
};

export default function MobileSilentVerificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
