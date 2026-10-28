import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EPFO Establishment Search API | DigitalRakshak",
  description:
    "Instantly verify company EPFO Establishment IDs, employer registration details, employee contribution history, active status, and PF compliance records in real-time.",
  keywords: [
    "EPFO Establishment Search API",
    "EPFO Verification API",
    "EPFO Establishment Code Search",
    "Provident Fund Compliance API",
    "ECR Challan Filing Verification",
    "Employer Background Screening API",
    "Labor Identification Number LIN",
    "DigitalRakshak EPFO API",
  ],
  alternates: {
    canonical: "/epfo-establishment-search",
  },
  openGraph: {
    title: "EPFO Establishment Search API | DigitalRakshak",
    description:
      "Instantly verify company EPFO Establishment IDs, employer registration details, employee contribution history, active status, and PF compliance records in real-time.",
    url: "https://digitalrakshak.com/epfo-establishment-search",
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
    title: "EPFO Establishment Search API | DigitalRakshak",
    description:
      "Instantly verify company EPFO Establishment IDs, employer registration details, employee contribution history, active status, and PF compliance records in real-time.",
  },
};

export default function EPFOEstablishmentSearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
