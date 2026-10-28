import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FASTag Verification API | DigitalRakshak",
  description:
    "Instantly verify vehicle FASTag registration, Tag ID, active account status, issuing bank, vehicle VRN match, and blacklist/hotlist status via NPCI & NETC gateways.",
  keywords: [
    "FASTag Verification API",
    "NPCI NETC API",
    "FASTag Status Check",
    "Vehicle Tag ID Verification",
    "FASTag Issuing Bank API",
    "FASTag Blacklist Check",
    "Toll Tag Verification API",
    "DigitalRakshak FASTag API",
  ],
  alternates: {
    canonical: "/fastag-verification",
  },
  openGraph: {
    title: "FASTag Verification API | DigitalRakshak",
    description:
      "Instantly verify vehicle FASTag registration, Tag ID, active account status, issuing bank, vehicle VRN match, and blacklist/hotlist status via NPCI & NETC gateways.",
    url: "https://digitalrakshak.com/fastag-verification",
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
    title: "FASTag Verification API | DigitalRakshak",
    description:
      "Instantly verify vehicle FASTag registration, Tag ID, active account status, issuing bank, vehicle VRN match, and blacklist/hotlist status via NPCI & NETC gateways.",
  },
};

export default function FASTagVerificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
