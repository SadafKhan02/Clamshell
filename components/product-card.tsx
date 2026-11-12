"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ProductCardProduct } from "@/data/products";

export function ProductCard({
  product,
  id,
}: {
  product: ProductCardProduct;
  id?: string;
}) {
  const categoryLabel =
    product.categoryLabel ??
    (product.category === "poles" ? "Pole products" : "Wires & cables");

  return (
    <article
      id={id ?? product.slug}
      className="product-card h-full rounded-2xl"
    >
      <Link
        href={product.destinationUrl}
        aria-label={`View ${product.name} details`}
        className="group relative block aspect-square h-full w-full overflow-hidden rounded-2xl border border-[#E3D7C8] bg-[#F6F1EC] shadow-sm transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1.5 hover:border-[#D9B19F] hover:shadow-[0_18px_38px_rgba(26,22,20,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D96B4F] focus-visible:ring-offset-2 motion-reduce:transition-none"
      >
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
          className={`transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none ${
            product.imageFit === "contain"
              ? "object-contain p-5 sm:p-7"
              : "object-cover"
          }`}
          style={{ objectPosition: product.imagePosition }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1614]/95 via-[#1A1614]/25 to-[#1A1614]/5 transition-colors duration-300 group-hover:from-[#1A1614]/95 group-hover:via-[#1A1614]/40" />

        <div
          aria-hidden="true"
          className="absolute left-0 top-0 h-1 w-12 bg-[#D96B4F] transition-all duration-300 group-hover:w-full"
        />

        <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-4 sm:p-5">
          <span className="inline-flex max-w-[80%] rounded-full border border-white/40 bg-[#1A1614]/45 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
            {categoryLabel}
          </span>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/50 bg-white/15 text-white backdrop-blur-sm transition-[background-color,transform] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-[#D96B4F]">
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
        {product.supplyNotice && (
          <span className="absolute left-4 right-4 top-14 z-[1] rounded-lg bg-[#1A1614]/75 px-3 py-2 text-[10px] font-semibold leading-4 text-white backdrop-blur-sm sm:left-5 sm:right-5">
            Not manufactured by Clamshell — supplier-sourced
          </span>
        )}

        <div className="absolute inset-x-0 bottom-0 p-4 text-white transition-opacity duration-200 group-hover:opacity-0 sm:p-5">
          <h3 className="pr-1 text-xl font-bold leading-tight tracking-tight sm:text-2xl">
            {product.name}
          </h3>
          <p className="mt-2 line-clamp-2 text-xs leading-5 text-white/85 sm:text-sm">
            {product.description}
          </p>
        </div>

        <div className="absolute inset-0 z-[1] flex translate-y-full flex-col overflow-y-auto rounded-2xl bg-[#FDFBF9] p-5 opacity-0 transition-[opacity,transform] duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 motion-reduce:transition-none sm:p-6">
          <div className="min-h-0 flex-1">
            <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#785135]">
              {categoryLabel}
            </span>
            <h3 className="mt-2 text-xl font-bold leading-tight text-[#1A1614] sm:text-2xl">
              {product.name}
            </h3>
            <p className="mt-3 text-xs leading-5 text-[#573A29] sm:text-sm">
              {product.description}
            </p>
            {product.supplyNotice && (
              <p className="mt-3 rounded-lg border border-[#D96B4F]/30 bg-[#FEF4F0] px-3 py-2 text-xs font-semibold leading-5 text-[#4A2D1A]">
                {product.supplyNotice}
              </p>
            )}
            <ul className="mt-4 space-y-2">
              {product.highlights.map((highlight) => (
              <li
                key={highlight}
                  className="flex items-start gap-2 text-xs leading-5 text-[#4A2D1A] sm:text-sm"
              >
                <span
                  aria-hidden="true"
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D96B4F]"
                />
                  <span>{highlight}</span>
              </li>
            ))}
            </ul>
          </div>
          <span className="mt-3 inline-flex min-h-10 shrink-0 items-center gap-2 self-start rounded-lg bg-[#D96B4F] px-3.5 py-2 text-sm font-bold text-white">
            View Details
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
      </Link>
    </article>
  );
}
