import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company Journey | Clamshell Infrastructure",
  description: "The operating history and future expansion journey of Clamshell Infrastructure.",
};

export default function HistoryPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#D96B4F]">Company journey</p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">From PSC Pole operations to future electrical products</h1>
      <div className="mt-10 space-y-6">
        <section className="rounded-2xl border border-[#E3D7C8] bg-white p-6">
          <h2 className="text-xl font-bold">Existing operations</h2>
          <p className="mt-3 text-sm leading-7 text-[#573A29]">Clamshell Infrastructure has reported approximately three years of PSC Pole manufacturing operations as of November 2026.</p>
        </section>
        <section className="rounded-2xl border border-[#E3D7C8] bg-white p-6">
          <h2 className="text-xl font-bold">Product expansion</h2>
          <p className="mt-3 text-sm leading-7 text-[#573A29]">The company is planning an expansion into wire and cable manufacturing. These proposed categories are not currently represented as operational manufacturing facilities.</p>
        </section>
      </div>
    </main>
  );
}
