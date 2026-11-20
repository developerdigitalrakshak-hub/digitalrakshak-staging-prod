import type { Metadata } from "next";
import { BgvServicePage } from "@/components/bgv";
import { serviceData } from "./data";

export const metadata: Metadata = {
  title: "Social Media & Court Record Checks | DigitalRakshak™",
  description:
    "Screening civil, criminal, and tribunal court records alongside public digital presence with DigitalRakshak™.",
};

export default function CourtRecordChecksPage() {
  return <BgvServicePage data={serviceData} />;
}
