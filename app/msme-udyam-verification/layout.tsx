import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MSME / Udyam Verification API | DigitalRakshak",
  description:
    "Instantly verify Udyam Registration Numbers (URN), enterprise category (Micro, Small, Medium), legal business name, DIC jurisdiction, major activity (Manufacturing/Services), and MSME status without OTP authentication.",
  keywords: [
    "MSME Verification API",
    "Udyam Verification API",
    "Udyam Registration Number URN",
    "Zero OTP MSME Verification",
    "Micro Small Medium Enterprise Verification",
    "NIC Code Activity Verification",
    "Priority Sector Lending PSL MSME Audit",
    "Vendor MSME Verification",
    "DigitalRakshak MSME API",
  ],
  alternates: {
    canonical: "/msme-udyam-verification",
  },
  openGraph: {
    title: "MSME / Udyam Verification API | DigitalRakshak",
    description:
      "Instantly verify Udyam Registration Numbers (URN), enterprise category (Micro, Small, Medium), legal business name, DIC jurisdiction, major activity (Manufacturing/Services), and MSME status without OTP authentication.",
    url: "https://digitalrakshak.com/msme-udyam-verification",
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
    title: "MSME / Udyam Verification API | DigitalRakshak",
    description:
      "Instantly verify Udyam Registration Numbers (URN), enterprise category (Micro, Small, Medium), legal business name, DIC jurisdiction, major activity (Manufacturing/Services), and MSME status without OTP authentication.",
  },
};

export default function MSMEUdyamVerificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
