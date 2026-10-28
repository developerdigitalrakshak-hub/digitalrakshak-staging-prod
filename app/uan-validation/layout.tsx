import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UAN Verification Services | DigitalRakshak",
  description:
    "Seamless, instant, and tamper-proof employment history verification. Verify candidate employment directly from the source with DigitalRakshak.",
  keywords: [
    "UAN Verification API",
    "UAN Verification Services",
    "Employment History Verification",
    "Universal Account Number Check",
    "EPFO Candidate Verification",
    "Dual Employment Detection",
    "Moonlighting Detection API",
    "DigitalRakshak UAN",
  ],
  alternates: {
    canonical: "/uan-validation",
  },
  openGraph: {
    title: "UAN Verification Services | DigitalRakshak",
    description:
      "Seamless, instant, and tamper-proof employment history verification. Verify candidate employment directly from the source with DigitalRakshak.",
    url: "https://digitalrakshak.com/uan-validation",
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
    title: "UAN Verification Services | DigitalRakshak",
    description:
      "Seamless, instant, and tamper-proof employment history verification. Verify candidate employment directly from the source with DigitalRakshak.",
  },
};

export default function UANVerificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
