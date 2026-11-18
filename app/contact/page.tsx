import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactSection } from "@/components/contact-section";

export const metadata: Metadata = {
  title: "Contact Us | Clamshell Infrastructure Private Limited",
  description:
    "Connect with our technical and sales team for tenders, commercial quotations, and plant dispatches across India.",
};

type ContactPageProps = {
  searchParams: Promise<{ product?: string | string[] }>;
};

export default function ContactPage({ searchParams }: ContactPageProps) {
  return (
    <div className="w-full flex flex-col items-center">
      <Suspense
        fallback={
          <div
            className="flex min-h-[40vh] items-center justify-center px-4 text-sm text-[#573A29]"
            role="status"
          >
            Loading inquiry form...
          </div>
        }
      >
        <ContactPageContent searchParams={searchParams} />
      </Suspense>
    </div>
  );
}

async function ContactPageContent({ searchParams }: ContactPageProps) {
  const { product } = await searchParams;
  const initialProduct =
    product === "custom-rail-pole" ? "Custom Rail Pole" : undefined;

  return <ContactSection initialProduct={initialProduct} />;
}
