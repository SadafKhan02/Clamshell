import type { Metadata } from "next";
import { ContactSection } from "@/components/contact-section";

export const metadata: Metadata = {
  title: "Contact Us | Clamshell Infrastructure Private Limited",
  description:
    "Connect with our technical and sales team for tenders, commercial quotations, and plant dispatches across India.",
};

export default function ContactPage() {
  return (
    <div className="w-full flex flex-col items-center">
      <ContactSection />
    </div>
  );
}
