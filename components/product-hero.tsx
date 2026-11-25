import Image from "next/image";
import Link from "next/link";
import {
  Cable,
  ChevronRight,
  Layers3,
  Ruler,
  ShieldCheck,
  Zap,
} from "lucide-react";
import type { ProductFamilyId } from "@/data/products";

type ProductHeroProps = {
  categoryLabel: string;
  heading: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  category: ProductFamilyId;
  routeSlug: string;
  breadcrumbLabel: string;
  highlights: string[];
};

const wireIcons = [Cable, Zap, ShieldCheck];
const poleIcons = [ShieldCheck, Ruler, Layers3];
const railIcons = [Layers3, ShieldCheck, Ruler];

export function ProductHero({
  categoryLabel,
  heading,
  tagline,
  description,
  image,
  imageAlt,
  imagePosition,
  category,
  routeSlug,
  breadcrumbLabel,
  highlights,
}: ProductHeroProps) {
  if (highlights.length < 3) {
    throw new Error(`Product hero "${routeSlug}" requires three highlights.`);
  }

  const icons =
    routeSlug === "rail-poles"
      ? railIcons
      : category === "wires"
        ? wireIcons
        : poleIcons;
  const headingBreak = heading.lastIndexOf(" ");
  const headingLead =
    headingBreak === -1 ? heading : heading.slice(0, headingBreak);
  const headingAccent =
    headingBreak === -1 ? "" : heading.slice(headingBreak + 1);

  return (
    <section
      aria-labelledby="product-hero-heading"
      className="relative isolate min-h-[40rem] overflow-hidden bg-[#1A1614] text-white sm:min-h-[38rem]"
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: imagePosition }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(110deg, rgba(20, 15, 13, 0.48) 0%, rgba(38, 25, 20, 0.38) 48%, rgba(19, 24, 31, 0.32) 100%), linear-gradient(0deg, rgba(14, 14, 16, 0.16), transparent 55%)",
        }}
      />
      <div className="relative mx-auto flex min-h-[40rem] max-w-7xl flex-col px-4 pb-10 sm:min-h-[38rem] sm:px-6 sm:pb-12 lg:px-8">
        <nav
          aria-label="Breadcrumb"
          className="relative z-10 pt-8 text-xs text-white/85 sm:text-sm"
        >
          <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <li>
              <Link
                href="/"
                className="rounded-sm hover:text-[#D96B4F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D96B4F]"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-3.5 w-3.5" />
            </li>
            <li>
              <Link
                href="/product"
                className="rounded-sm hover:text-[#D96B4F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D96B4F]"
              >
                Products
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-3.5 w-3.5" />
            </li>
            <li aria-current="page" className="font-bold text-white">
              {breadcrumbLabel}
            </li>
          </ol>
        </nav>
        <div className="relative z-10 flex flex-1 items-center py-6">
          <div className="w-full max-w-[48rem]">
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.8)] sm:text-sm">
            <span className="h-1 w-9 rounded-full bg-[#D96B4F]" />
            {categoryLabel}
          </p>
          <h1
            id="product-hero-heading"
            className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.04] tracking-tight text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.55)] sm:text-5xl lg:text-7xl"
          >
            {headingLead}
            {headingAccent && (
              <>
                {" "}
                <span className="text-[#D96B4F]">{headingAccent}</span>
              </>
            )}
          </h1>
          <p className="mt-5 max-w-2xl text-lg font-bold leading-7 text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.8)] sm:text-xl">
            {tagline}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/90 [text-shadow:0_2px_8px_rgba(0,0,0,0.8)] sm:text-base sm:leading-8">
            {description}
          </p>

          <ul className="mt-6 grid gap-2.5 sm:grid-cols-3 lg:mt-7">
            {highlights.slice(0, 3).map((highlight, index) => {
              const Icon = icons[index];

              return (
                <li
                  key={highlight}
                  className="flex min-h-[4.75rem] items-center gap-3 rounded-2xl border border-white/65 bg-white/85 px-3.5 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-md sm:min-h-[5.25rem]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#D96B4F]/15 bg-[#FEF4F0] text-[#D96B4F]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="max-w-[12rem] text-xs font-bold leading-[1.45] text-[#3C281B] sm:text-[13px]">
                    {highlight}
                  </span>
                </li>
              );
            })}
          </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
