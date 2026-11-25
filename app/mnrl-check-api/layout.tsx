import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MNRL Check API for Businesses | DigitalRakshak",
  description:
    "Integrate DigitalRakshak's MNRL Check API to submit mobile numbers for Mobile Number Revocation List checking in your business applications.",
  keywords: [
    "MNRL Check API",
    "Mobile Number Revocation List API",
    "Mobile Number Revocation Check",
    "MNRL Verification API",
    "Mobile Number Check API",
    "Mobile Verification API",
    "MNRL API Integration",
  ],
  alternates: {
    canonical: "/mnrl-check-api",
  },
  openGraph: {
    title: "MNRL Check API for Businesses | DigitalRakshak",
    description:
      "Integrate DigitalRakshak's MNRL Check API to submit mobile numbers for Mobile Number Revocation List checking in your business applications.",
    url: "https://digitalrakshak.com/mnrl-check-api",
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
    title: "MNRL Check API for Businesses | DigitalRakshak",
    description:
      "Integrate DigitalRakshak's MNRL Check API to submit mobile numbers for Mobile Number Revocation List checking in your business applications.",
  },
};

export default function MNRLCheckApiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
