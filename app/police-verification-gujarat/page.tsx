import type { Metadata } from "next";
import { BgvServicePage } from "@/components/bgv";
import { serviceData } from "./data";

export const metadata: Metadata = {
  title: "Police Verification (Gujarat) Services | DigitalRakshak™",
  description:
    "Direct police clearance and official criminal background check across all 33 districts of Gujarat with DigitalRakshak™.",
};

export default function PoliceVerificationGujaratPage() {
  return <BgvServicePage data={serviceData} />;
}
