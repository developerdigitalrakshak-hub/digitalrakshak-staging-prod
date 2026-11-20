import type { Metadata } from "next";
import { BgvServicePage } from "@/components/bgv";
import { serviceData } from "./data";

export const metadata: Metadata = {
  title: "Employment History Verification Services | DigitalRakshak™",
  description:
    "Validating past work experience, employment tenure, designation, and exit reasons with DigitalRakshak™.",
};

export default function EmploymentHistoryVerificationPage() {
  return <BgvServicePage data={serviceData} />;
}
