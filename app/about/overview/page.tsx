import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Clamshell Infrastructure",
  description: "Company overview of Clamshell Infrastructure Private Limited.",
};

export default function OverviewPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#D96B4F]">About us</p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">Clamshell Infrastructure Private Limited</h1>
      <p className="mt-5 max-w-3xl text-base leading-7 text-[#573A29]">
        Clamshell Infrastructure has existing operational PSC Pole manufacturing experience. As reported for November 2026, the company has approximately three years of PSC Pole operations and is led by Director Swatantra Bharadwaj.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[
          ["Current operations", "PSC Pole manufacturing"],
          ["Catalogue", "Rail Pole variants and custom requirements"],
          ["Future expansion", "Proposed wire and cable manufacturing"],
        ].map(([title, text]) => (
          <section key={title} className="rounded-3xl border border-[#E3D7C8] bg-white p-6">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-[#573A29]">{text}</p>
          </section>
        ))}
      </div>
      <Link href="/contact" className="mt-10 inline-flex rounded-xl bg-[#D96B4F] px-5 py-3 text-sm font-bold text-white">Contact us</Link>
    </main>
  );
}
