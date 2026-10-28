import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ChevronRight } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { productFamilies } from "@/data/products";

export const metadata: Metadata = {
  title: "Our Products | Clamshell Infrastructure",
  description:
    "Explore Clamshell's pole, wire and cable product categories for infrastructure and electrical applications.",
  alternates: {
    canonical: "https://clamshell-blue.vercel.app/product",
  },
};

export default function ProductsPage() {
  const poles = productFamilies.find((family) => family.id === "poles")!;
  const wires = productFamilies.find((family) => family.id === "wires")!;

  return (
    <div className="w-full bg-[#FDFBF9]">
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
            <li aria-hidden="true">
              <ChevronRight className="h-4 w-4" />
            </li>
            <li aria-current="page" className="font-semibold text-[#4A2D1A]">
              Products
            </li>
          </ol>
        </nav>
      </div>

      <section
        aria-labelledby="products-heading"
        className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-8 lg:py-20"
      >
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#D96B4F]/20 bg-[#FEF4F0] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#983B23]">
            Clamshell product range
          </p>
          <h1
            id="products-heading"
            className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-[#1A1614] sm:text-5xl lg:text-6xl"
          >
            Our Products
          </h1>
          <h2 className="mt-4 max-w-xl text-xl font-semibold leading-snug text-[#785135] sm:text-2xl">
            Engineered Solutions for Infrastructure and Electrical Applications
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#573A29]">
            Explore Clamshell&apos;s range of pole and wire products designed
            for infrastructure and electrical applications. Discover our
            product categories and find the information relevant to your
            project requirements.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#poles"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#D96B4F] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#C4573B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D96B4F] focus-visible:ring-offset-2 motion-reduce:transition-none"
            >
              Explore Poles
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#wires"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#C8B4A2] bg-white px-5 py-3 text-sm font-bold text-[#4A2D1A] transition-colors hover:border-[#D96B4F] hover:bg-[#FEF4F0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D96B4F] focus-visible:ring-offset-2 motion-reduce:transition-none"
            >
              Explore Wires
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="relative min-h-64 overflow-hidden rounded-3xl border border-[#E3D7C8] bg-[#F6F1EC] shadow-lg sm:min-h-80 lg:min-h-[26rem]">
          <Image
            src="/product-hero.png"
            alt="Concrete utility poles and wire products in an infrastructure setting"
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover object-center"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1A1614]/25 via-transparent to-transparent" />
        </div>
      </section>

      <section
        id={poles.id}
        aria-labelledby="poles-heading"
        className="scroll-mt-24 border-y border-[#E3D7C8] bg-[#FBF7F2] py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-2xl sm:mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#D96B4F]">
              Infrastructure range
            </p>
            <h2
              id="poles-heading"
              className="mt-2 text-3xl font-extrabold tracking-tight text-[#1A1614] sm:text-4xl"
            >
              {poles.title}
            </h2>
            <p className="mt-3 text-base leading-7 text-[#573A29]">
              {poles.description}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-7">
            {poles.products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section
        id={wires.id}
        aria-labelledby="wires-heading"
        className="scroll-mt-24 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-2xl sm:mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#D96B4F]">
              Electrical range
            </p>
            <h2
              id="wires-heading"
              className="mt-2 text-3xl font-extrabold tracking-tight text-[#1A1614] sm:text-4xl"
            >
              {wires.title}
            </h2>
            <p className="mt-3 text-base leading-7 text-[#573A29]">
              {wires.description}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {wires.products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="product-enquiry-heading"
        className="border-t border-[#E3D7C8] bg-[#331E11] py-12 text-white sm:py-16"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div className="max-w-2xl">
            <h2
              id="product-enquiry-heading"
              className="text-2xl font-bold leading-tight sm:text-3xl"
            >
              Looking for the Right Product for Your Project?
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#EDE3D7] sm:text-base">
              Explore our product range or contact our team to discuss your
              project requirements.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href="#poles"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#C8B4A2]/50 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D96B4F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#331E11] motion-reduce:transition-none"
            >
              Explore Products
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#D96B4F] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#C4573B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#331E11] motion-reduce:transition-none"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
