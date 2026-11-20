import type { Metadata } from "next";
import { BgvServicePage } from "@/components/bgv";
import { serviceData } from "./data";

export const metadata: Metadata = {
  title: "Identity Verification Services | DigitalRakshak™",
  description:
    "Instant government ID validation including Aadhaar, PAN, Voter ID, and Passport with DigitalRakshak™.",
};

export default function IdentityVerificationPage() {
  return <BgvServicePage data={serviceData} />;
}
