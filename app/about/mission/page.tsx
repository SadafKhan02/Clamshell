import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vision & Mission | Clamshell Infrastructure",
  description: "Vision and mission of Clamshell Infrastructure Private Limited.",
};

export default function MissionPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#D96B4F]">Vision &amp; mission</p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">Our purpose</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <section className="rounded-3xl border border-[#E3D7C8] bg-white p-8">
          <h2 className="text-2xl font-bold">Vision</h2>
          <p className="mt-4 text-base leading-7 text-[#573A29]">To develop reliable infrastructure and electrical products that support power distribution and industrial development.</p>
        </section>
        <section className="rounded-3xl border border-[#E3D7C8] bg-white p-8">
          <h2 className="text-2xl font-bold">Mission</h2>
          <p className="mt-4 text-base leading-7 text-[#573A29]">To focus on product quality, responsible manufacturing, customer requirements, and sustainable business growth.</p>
        </section>
      </div>
    </main>
  );
}
