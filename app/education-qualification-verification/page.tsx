import type { Metadata } from "next";
import { BgvServicePage } from "@/components/bgv";
import { serviceData } from "./data";

export const metadata: Metadata = {
  title: "Education Qualification Verification Services | DigitalRakshak™",
  description:
    "Authenticating university degrees, academic marksheets, roll numbers, and board records with DigitalRakshak™.",
};

export default function EducationQualificationVerificationPage() {
  return <BgvServicePage data={serviceData} />;
}
