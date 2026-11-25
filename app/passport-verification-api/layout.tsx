import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Passport Verification API for Businesses | DigitalRakshak",
  description:
    "Integrate DigitalRakshak's Passport Verification API to submit applicant details and retrieve available passport application information for KYC workflows.",
  keywords: [
    "Passport Verification API",
    "Passport Verification API India",
    "Passport Verification Services",
    "Passport Data Verification API",
    "Passport Details Verification API",
    "Digital Passport Verification",
    "Passport KYC API",
    "Online Passport Verification API",
    "Passport Application Verification API",
  ],
  alternates: {
    canonical: "/passport-verification-api",
  },
  openGraph: {
    title: "Passport Verification API for Businesses | DigitalRakshak",
    description:
      "Integrate DigitalRakshak's Passport Verification API to submit applicant details and retrieve available passport application information for KYC workflows.",
    url: "https://digitalrakshak.com/passport-verification-api",
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
    title: "Passport Verification API for Businesses | DigitalRakshak",
    description:
      "Integrate DigitalRakshak's Passport Verification API to submit applicant details and retrieve available passport application information for KYC workflows.",
  },
};

export default function PassportVerificationApiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
