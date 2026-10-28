import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FileSpreadsheet } from "lucide-react";
import { QuoteCalculator } from "@/components/quote-calculator";

export const metadata: Metadata = {
  title: "Rail Poles | Clamshell Infrastructure Private Limited",
  description:
    "Explore Rail Pole project information and request a quote. Confirm technical requirements with Clamshell for your project.",
};

const confirmationItems = [
  "Pole type and configuration",
  "Dimensions and load requirements",
  "Applicable standards and approvals",
  "Material, weight, and delivery logistics",
];

export default function RailPolesPage() {
  return (
    <div className="w-full bg-[#FFFDFB]">
      <div className="mx-auto max-w-7xl px-4 pt-5 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-[#6E635D]">
            <li>
              <Link
                href="/"
                className="rounded-sm hover:text-[#D96B4F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D96B4F]"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href="/product"
                className="rounded-sm hover:text-[#D96B4F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D96B4F]"
              >
                Products
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="font-semibold text-[#4A2D1A]">
              Rail Poles
            </li>
          </ol>
        </nav>
      </div>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[1fr_0.95fr] lg:gap-14 lg:px-8 lg:py-16">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-[#FEF4F0] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#983B23]">
            Pole product portfolio
          </p>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-[#1A1614] sm:text-5xl">
            Rail Poles
          </h1>
          <p className="mt-5 text-base leading-7 text-[#573A29] sm:text-lg">
            Explore Rail Pole options for railway and rail infrastructure
            projects. Share your project requirements with Clamshell to confirm
            the appropriate configuration and technical details.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#rail-quote-tool"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#D96B4F] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#C4573B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D96B4F] focus-visible:ring-offset-2"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link
              href="/product/pscc-poles"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#C8B4A2] bg-white px-5 py-3 text-sm font-bold text-[#4A2D1A] transition-colors hover:border-[#D96B4F] hover:bg-[#FEF4F0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D96B4F] focus-visible:ring-offset-2"
            >
              View PSCC Poles
            </Link>
          </div>
        </div>

        <div className="relative min-h-72 overflow-hidden rounded-3xl border border-[#E3D7C8] bg-[#F6F1EC] shadow-lg sm:min-h-96">
          <Image
            src="/rail-pole.avif"
            alt="Railway electrification pole with overhead catenary equipment"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>
      </section>

      <section className="border-y border-[#E3D7C8] bg-[#FBF7F2] py-14 sm:py-18">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#785135]">
              <FileSpreadsheet className="h-4 w-4 text-[#D96B4F]" />
              <span>Project-specific technical information</span>
            </div>
            <h2 className="mt-3 text-2xl font-extrabold text-[#1A1614] sm:text-3xl">
              Confirm specifications before planning
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#4A2D1A] sm:text-base">
              Approved technical data for Rail Poles was not available to
              verify specifications. We have therefore not published assumed
              dimensions, capacities, standards, or engineering estimates.
              Contact Clamshell with your project documents to confirm them.
            </p>
          </div>

          <div className="rounded-3xl border border-[#E3D7C8] bg-white p-6 sm:p-8">
            <h3 className="text-lg font-bold text-[#1A1614]">
              Details to confirm for your project
            </h3>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {confirmationItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#D96B4F]"
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-6 text-[#4A2D1A]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-2xl bg-[#FEF4F0] p-4 text-sm leading-6 text-[#4A2D1A]">
              Share applicable drawings or project requirements so the
              specifications can be reviewed for your application.
            </p>
          </div>
        </div>
      </section>

      <QuoteCalculator mode="rail" />
    </div>
  );
}
