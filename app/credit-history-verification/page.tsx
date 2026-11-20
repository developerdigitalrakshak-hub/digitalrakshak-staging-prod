import type { Metadata } from "next";
import { BgvServicePage } from "@/components/bgv";
import { serviceData } from "./data";

export const metadata: Metadata = {
  title: "Credit History Verification Services | DigitalRakshak™",
  description:
    "Comprehensive credit bureau score checks and financial risk assessment with DigitalRakshak™.",
};

export default function CreditHistoryVerificationPage() {
  return <BgvServicePage data={serviceData} />;
}
