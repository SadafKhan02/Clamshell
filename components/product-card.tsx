"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ArrowUpRight, Rotate3D } from "lucide-react";
import type { ProductCardProduct } from "@/data/products";

export function ProductCard({
  product,
  id,
}: {
  product: ProductCardProduct;
  id?: string;
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const categoryLabel =
    product.categoryLabel ??
    (product.category === "poles" ? "Pole products" : "Wires & cables");

  return (
    <article
      id={id ?? product.slug}
      className={`product-card h-full rounded-2xl ${isFlipped ? "is-flipped" : ""}`}
    >
      <div className="product-card-inner relative aspect-square h-full w-full rounded-2xl">
        <div className="product-card-face product-card-front absolute inset-0 overflow-hidden rounded-2xl border border-[#E3D7C8] bg-[#F6F1EC] shadow-sm">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
            className={
              product.imageFit === "contain"
                ? "object-contain p-5 sm:p-7"
                : "object-cover"
            }
            style={{ objectPosition: product.imagePosition }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1614]/80 via-[#1A1614]/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
            <span className="inline-flex rounded-full border border-white/35 bg-[#1A1614]/25 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] backdrop-blur-sm">
              {categoryLabel}
            </span>
            <h3 className="mt-2 pr-12 text-xl font-bold leading-tight tracking-tight sm:text-2xl">
              {product.name}
            </h3>
          </div>
          <Link
            href={product.destinationUrl}
            aria-label={`View ${product.name} details`}
            className="absolute inset-0 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
          />
          <button
            type="button"
            onClick={() => setIsFlipped(true)}
            aria-label={`Flip ${product.name} card to see details`}
            aria-pressed={isFlipped}
            className="absolute bottom-5 right-5 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-[#1A1614]/35 text-white backdrop-blur-sm transition-colors hover:bg-[#D96B4F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:bottom-6 sm:right-6"
          >
            <Rotate3D className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="product-card-face product-card-back absolute inset-0 flex flex-col justify-between overflow-hidden rounded-2xl border border-[#E3D7C8] bg-[#F2F6FB] p-5 shadow-sm sm:p-6">
          <div className="min-h-0 overflow-y-auto">
            <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#785135]">
              {categoryLabel}
            </span>
            <h3 className="mt-2 text-xl font-semibold leading-tight text-[#983B23] sm:text-2xl">
              {product.name}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#1A1614]">
              {product.description}
            </p>
            <ul className="mt-4 space-y-2.5">
              {product.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-2 text-xs leading-5 text-[#4A2D1A] sm:text-sm"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D96B4F]"
                    aria-hidden="true"
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-3 flex shrink-0 items-center justify-between gap-3 border-t border-[#D8E0EA] pt-3">
            <Link
              href={product.destinationUrl}
              className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-[#D96B4F] px-3.5 py-2 text-sm font-bold text-white transition-colors hover:bg-[#C4573B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D96B4F] focus-visible:ring-offset-2"
            >
              View Details
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <button
              type="button"
              onClick={() => setIsFlipped(false)}
              aria-label={`Flip ${product.name} card back to the image`}
              aria-pressed={isFlipped}
              className="inline-flex min-h-10 items-center gap-1.5 rounded-lg px-2 text-xs font-semibold text-[#573A29] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D96B4F]"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
