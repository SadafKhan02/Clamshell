import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industries & Applications | Clamshell Infrastructure",
  description: "PSC Poles and proposed wire and cable applications.",
};

export default function IndustriesPage() {
  const applications = [
    ["Power transmission", "/product/category/pscc-poles"],
    ["Power distribution", "/product/category/pscc-poles"],
    ["Rural electrification", "/product/category/pscc-poles"],
    ["Electrical infrastructure", "/product/category/rail-poles"],
    ["Transformer manufacturing", "/product/conductor"],
    ["Motor and generator manufacturing", "/product/enamelled-flat-wire"],
    ["Industrial winding applications", "/product/dpc-wire"],
    ["Electrical equipment manufacturing", "/product/dpc-strip"],
    ["EV motor applications", "/product/enamelled-flat-wire"],
    ["Household electrical appliances", "/product/super-enamelled-wire"],
  ];
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#D96B4F]">Industries &amp; applications</p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">Infrastructure and electrical applications</h1>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-[#573A29]">
        Pole applications describe existing product use. Wire and cable applications describe proposed project categories and are not presented as completed manufacturing projects.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {applications.map(([title, href]) => (
          <Link key={title} href={href} className="rounded-2xl border border-[#E3D7C8] bg-white p-6 font-bold text-[#1A1614] transition-shadow hover:shadow-md">
            {title}
          </Link>
        ))}
      </div>
    </main>
  );
}
