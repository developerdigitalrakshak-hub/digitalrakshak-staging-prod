import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vehicle RC Verification API | DigitalRakshak",
  description:
    "Instantly verify vehicle Registration Certificates (RC), owner legal name, vehicle class, fuel type, chassis & engine numbers, insurance validity, PUCC status, and hypothecation records via Vahan/Parivahan databases.",
  keywords: [
    "Vehicle RC Verification API",
    "RC Verification API",
    "Vahan API",
    "Parivahan RC Check",
    "Vehicle Registration Certificate API",
    "Chassis Number Verification",
    "Hypothecation Check API",
    "Motor Insurance Validity API",
    "DigitalRakshak Vehicle RC API",
  ],
  alternates: {
    canonical: "/vehicle-rc-verification",
  },
  openGraph: {
    title: "Vehicle RC Verification API | DigitalRakshak",
    description:
      "Instantly verify vehicle Registration Certificates (RC), owner legal name, vehicle class, fuel type, chassis & engine numbers, insurance validity, PUCC status, and hypothecation records via Vahan/Parivahan databases.",
    url: "https://digitalrakshak.com/vehicle-rc-verification",
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
    title: "Vehicle RC Verification API | DigitalRakshak",
    description:
      "Instantly verify vehicle Registration Certificates (RC), owner legal name, vehicle class, fuel type, chassis & engine numbers, insurance validity, PUCC status, and hypothecation records via Vahan/Parivahan databases.",
  },
};

export default function VehicleRCVerificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
