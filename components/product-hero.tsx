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
  supplyNotice?: string;
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
  supplyNotice,
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
      className="relative isolate min-h-[40rem] overflow-hidden bg-[#FBF7F2] text-[#1A1614] sm:min-h-[38rem]"
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
        className="absolute inset-0 bg-gradient-to-b from-[#FDFBF9]/95 via-[#FBF7F2]/88 to-[#F6F1EC]/45 lg:bg-gradient-to-r lg:from-[#FDFBF9]/95 lg:via-[#FBF7F2]/88 lg:via-55% lg:to-[#F6F1EC]/30"
      />
      <div className="relative mx-auto flex min-h-[40rem] max-w-7xl flex-col px-4 pb-10 sm:min-h-[38rem] sm:px-6 sm:pb-12 lg:px-8">
        <nav
          aria-label="Breadcrumb"
          className="relative z-10 pt-8 text-xs text-[#785135] sm:text-sm"
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
            <li aria-current="page" className="font-bold text-[#1A1614]">
              {breadcrumbLabel}
            </li>
          </ol>
        </nav>
        <div className="relative z-10 flex flex-1 items-center py-6">
          <div className="w-full max-w-[48rem]">
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#785135] sm:text-sm">
            <span className="h-1 w-9 rounded-full bg-[#D96B4F]" />
            {categoryLabel}
          </p>
          <h1
            id="product-hero-heading"
            className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.04] tracking-tight text-[#1A1614] sm:text-5xl lg:text-7xl"
          >
            {headingLead}
            {headingAccent && (
              <>
                {" "}
                <span className="text-[#D96B4F]">{headingAccent}</span>
              </>
            )}
          </h1>
          <p className="mt-5 max-w-2xl text-lg font-bold leading-7 text-[#4A2D1A] sm:text-xl">
            {tagline}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#573A29] sm:text-base sm:leading-8">
            {description}
          </p>

          {supplyNotice && (
            <p
              role="note"
              className="mt-4 max-w-2xl rounded-xl border border-[#D96B4F]/30 bg-[#FEF4F0]/95 px-4 py-3 text-sm font-semibold leading-6 text-[#4A2D1A] shadow-sm"
            >
              {supplyNotice}
            </p>
          )}

          <ul className="mt-7 grid gap-2.5 min-[480px]:grid-cols-3 lg:mt-8">
            {highlights.slice(0, 3).map((highlight, index) => {
              const Icon = icons[index];

              return (
                <li
                  key={highlight}
                  className="flex min-h-[4.5rem] items-center gap-3 rounded-xl border border-white/80 bg-white/75 px-3 py-3 shadow-sm backdrop-blur-sm min-[480px]:min-h-[7rem] min-[480px]:flex-col min-[480px]:items-start min-[480px]:justify-between"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FEF4F0] text-[#D96B4F]">
                    <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-semibold leading-5 text-[#4A2D1A] sm:text-[13px]">
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
