import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop & Establishment Verification API | DigitalRakshak",
  description:
    "Instantly validate commercial business legitimacy, verify state labor department Shop & Establishment licenses, unmask ghost employers, and eradicate fake experience letter fraud with DigitalRakshak.",
  keywords: [
    "Shop and Establishment Verification API",
    "Commercial Business Validation",
    "Fake Employer Fraud Detection",
    "State Labor Department License Verification",
    "Municipal Trade License Check",
    "Candidate Employment Verification",
    "SME Business Due Diligence",
    "DigitalRakshak BGV API",
  ],
  alternates: {
    canonical: "/shop-establishment",
  },
  openGraph: {
    title: "Shop & Establishment Verification API | DigitalRakshak",
    description:
      "Instantly validate commercial business legitimacy, verify state labor department licenses, and eradicate fake employer fraud via real-time municipal registries.",
    url: "https://digitalrakshak.com/shop-establishment",
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
    title: "Shop & Establishment Verification API | DigitalRakshak",
    description:
      "Instantly validate commercial business legitimacy and eradicate fake employer fraud via real-time municipal registries.",
  },
};

export default function ShopEstablishmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
