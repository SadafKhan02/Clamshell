import type { Metadata } from "next";
import { LogisticsPage } from "@/components/logistics-page";

export const metadata: Metadata = {
  title: "Logistics & Distribution | Clamshell Infrastructure",
  description:
    "Explore illustrative logistics planning, transportation coordination, and enquiry options for infrastructure products from Clamshell Infrastructure.",
  openGraph: {
    title: "Logistics & Distribution | Clamshell Infrastructure",
    description:
      "Discuss product transportation, handling, route planning, and delivery requirements with Clamshell Infrastructure.",
    url: "https://clamshellinfra.com/logistics",
    type: "website",
  },
};

export default function LogisticsRoute() {
  return <LogisticsPage />;
}
