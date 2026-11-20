import type { Metadata } from "next";
import { BgvServicePage } from "@/components/bgv";
import { serviceData } from "./data";

export const metadata: Metadata = {
  title: "Address Verification – Digital & Physical | DigitalRakshak™",
  description:
    "Comprehensive digital geolocation tagging and on-ground physical address verification across India with DigitalRakshak™.",
};

export default function AddressVerificationPage() {
  return <BgvServicePage data={serviceData} />;
}
