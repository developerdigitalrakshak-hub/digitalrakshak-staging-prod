import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers - DigitalRakshak | Build the Future of Digital Trust",
  description:
    "Join a world-class team building the secure, scalable verification infrastructure that powers modern business across India. Explore engineering, legal, product, and growth openings.",
  keywords: [
    "DigitalRakshak Careers",
    "Identity Tech Jobs",
    "Engineering Jobs Bengaluru",
    "Security Engineer Jobs",
    "Fintech Careers India",
    "DigitalRakshak Openings",
  ],
  alternates: {
    canonical: "/resources/glossary",
  },
  openGraph: {
    title: "Careers - DigitalRakshak | Build the Future of Digital Trust",
    description:
      "Join a world-class team building the secure, scalable verification infrastructure that powers modern business across India.",
    url: "https://digitalrakshak.com/resources/glossary",
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
    title: "Careers - DigitalRakshak | Build the Future of Digital Trust",
    description:
      "Join a world-class team building the secure, scalable verification infrastructure that powers modern business across India.",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
