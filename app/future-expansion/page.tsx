import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Future Wire & Cable Expansion | Clamshell Infrastructure",
  description: "Clamshell Infrastructure's proposed wire and cable manufacturing expansion.",
};

export default function FutureExpansionPage() {
  const products = ["AB Cable", "Conductor", "Enamelled Flat Wire", "DPC Strip", "Super Enamelled Wire", "DPC Wire"];
  return (
    <main className="mx-auto min-h-[60vh] max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#D96B4F]">Future expansion</p>
      <h1 className="mt-3 max-w-4xl text-4xl font-extrabold tracking-tight text-[#1A1614] sm:text-5xl">Wire &amp; Cable Manufacturing Project</h1>
      <p className="mt-5 max-w-3xl text-base leading-7 text-[#573A29]">
        Clamshell Infrastructure Private Limited is planning a combined wire and cable manufacturing facility focused on overhead power distribution products and winding conductors for transformer, motor, and electrical equipment applications.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <section className="rounded-3xl border border-[#E3D7C8] bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold">Proposed product portfolio</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {products.map((product) => (
              <li key={product} className="rounded-xl bg-[#FBF7F2] px-4 py-3 text-sm font-semibold">{product}</li>
            ))}
          </ul>
        </section>
        <section className="rounded-3xl border border-[#E3D7C8] bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold">Development status</h2>
          <p className="mt-4 text-sm leading-7 text-[#573A29]">
            These categories are proposed manufacturing activities. They should not be represented as currently operational. Super Enamelled Wire remains under review.
          </p>
          <p className="mt-4 text-sm leading-7 text-[#573A29]">
            Domestic opportunities and potential international expansion are future possibilities, not existing export operations.
          </p>
        </section>
      </div>
      <Link href="/contact?product=Wire%20%26%20Cable" className="mt-10 inline-flex rounded-xl bg-[#D96B4F] px-5 py-3 text-sm font-bold text-white">Discuss the project</Link>
    </main>
  );
}
