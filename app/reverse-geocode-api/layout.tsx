import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reverse Geocode API for Businesses | DigitalRakshak",
  description:
    "Convert latitude and longitude into structured address details with DigitalRakshak's Reverse Geocode API. Integrate location lookup into your applications.",
  keywords: [
    "Reverse Geocode API",
    "Reverse Geocoding API",
    "Latitude Longitude to Address API",
    "Coordinates to Address API",
    "GPS Coordinates to Address API",
    "Location Geocoding API",
    "Address Lookup API",
    "Reverse Geocoding Services",
    "Coordinate to Address Conversion",
  ],
  alternates: {
    canonical: "/reverse-geocode-api",
  },
  openGraph: {
    title: "Reverse Geocode API for Businesses | DigitalRakshak",
    description:
      "Convert latitude and longitude into structured address details with DigitalRakshak's Reverse Geocode API. Integrate location lookup into your applications.",
    url: "https://digitalrakshak.com/reverse-geocode-api",
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
    title: "Reverse Geocode API for Businesses | DigitalRakshak",
    description:
      "Convert latitude and longitude into structured address details with DigitalRakshak's Reverse Geocode API. Integrate location lookup into your applications.",
  },
};

export default function ReverseGeocodeApiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
