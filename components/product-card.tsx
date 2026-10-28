import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ProductEntry } from "@/data/products";

export function ProductCard({ product }: { product: ProductEntry }) {
  const ctaClassName =
    "mt-5 inline-flex min-h-11 items-center justify-between gap-3 rounded-xl bg-[#FEF4F0] px-4 py-2.5 text-sm font-bold text-[#983B23] transition-colors hover:bg-[#D96B4F] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D96B4F] focus-visible:ring-offset-2 motion-reduce:transition-none";

  return (
    <article
      id={product.slug}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E3D7C8] bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#D96B4F]/60 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
    >
      <div className="relative aspect-[3/2] overflow-hidden bg-[#F6F1EC]">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transform-none motion-reduce:transition-none ${
            product.imageFit === "contain"
              ? "object-contain p-5 sm:p-7"
              : "object-cover"
          }`}
          style={{ objectPosition: product.imagePosition }}
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-bold tracking-tight text-[#1A1614]">
          {product.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-[#573A29]">
          {product.description}
        </p>
        {product.destinationUrl.startsWith("#") ? (
          <a href={product.destinationUrl} className={ctaClassName}>
            <span>{product.ctaLabel}</span>
            <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </a>
        ) : (
          <Link href={product.destinationUrl} className={ctaClassName}>
            <span>{product.ctaLabel}</span>
            <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </Link>
        )}
      </div>
    </article>
  );
}
