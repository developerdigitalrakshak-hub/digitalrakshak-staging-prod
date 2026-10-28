import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search Results | DigitalRakshak Verification Platform",
  description:
    "Search across DigitalRakshak's suite of identity verification APIs, compliance frameworks, regulatory due diligence services, and developer resources.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
