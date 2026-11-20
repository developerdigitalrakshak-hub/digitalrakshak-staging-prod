import type { Metadata } from "next";
import { BgvServicePage } from "@/components/bgv";
import { serviceData } from "./data";

export const metadata: Metadata = {
  title: "Moonlighting & ITR Verification Services | DigitalRakshak™",
  description:
    "Detecting dual employment, overlapping EPFO records, and verifying income tax filings with DigitalRakshak™.",
};

export default function MoonlightingItrVerificationPage() {
  return <BgvServicePage data={serviceData} />;
}
