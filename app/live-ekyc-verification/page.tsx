import type { Metadata } from "next";
import { BgvServicePage } from "@/components/bgv";
import { serviceData } from "./data";

export const metadata: Metadata = {
  title: "Live e-KYC Verification Services | DigitalRakshak™",
  description:
    "Real-time biometric validation, facial recognition, and anti-spoofing liveness check with DigitalRakshak™.",
};

export default function LiveEkycVerificationPage() {
  return <BgvServicePage data={serviceData} />;
}
