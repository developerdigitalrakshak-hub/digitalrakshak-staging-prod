import type { Metadata } from "next";
import { BgvServicePage } from "@/components/bgv";
import { serviceData } from "./data";

export const metadata: Metadata = {
  title: "Digital e-Onboarding Services | DigitalRakshak™",
  description:
    "Streamlined digital candidate onboarding with automated document collection and workflows with DigitalRakshak™.",
};

export default function EOnboardingPage() {
  return <BgvServicePage data={serviceData} />;
}
