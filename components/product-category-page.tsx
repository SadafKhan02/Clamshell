import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import {
  getCatalogueCardProducts,
  products,
  type ProductCataloguePage,
} from "@/data/products";

export function getProductCategoryMetadata(
  cataloguePage: ProductCataloguePage,
): Metadata {
  return {
    title: `${cataloguePage.title} | Clamshell Infrastructure`,
    description: cataloguePage.description,
  };
}

export function ProductCategoryPage({
  cataloguePage,
}: {
  cataloguePage: ProductCataloguePage;
}) {
  const cards = getCatalogueCardProducts(cataloguePage);
  const product = products.find(
    (entry) => entry.routeSlug === cataloguePage.productRouteSlug,
  );

  if (!product) {
    throw new Error(
      `Missing product data for catalogue page "${cataloguePage.routeSlug}".`,
    );
  }

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
            <li>
              <Link
                href="/product"
                className="rounded-sm hover:text-[#D96B4F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D96B4F]"
              >
                Products
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-4 w-4" />
            </li>
            <li aria-current="page" className="font-semibold text-[#4A2D1A]">
              {cataloguePage.title}
            </li>
          </ol>
        </nav>
      </div>

      <section
        aria-labelledby="category-heading"
        className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-8 lg:py-16"
      >
        <div>
          <p className="inline-flex items-center rounded-full border border-[#D96B4F]/20 bg-[#FEF4F0] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#983B23]">
            {product.details.categoryLabel}
          </p>
          <h1
            id="category-heading"
            className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-[#1A1614] sm:text-5xl"
          >
            {cataloguePage.title}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-[#573A29]">
            {cataloguePage.description}
          </p>
        </div>
        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-[#E3D7C8] bg-[#F6F1EC] shadow-lg">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className={product.imageFit === "contain" ? "object-contain p-6" : "object-cover"}
            style={{ objectPosition: product.imagePosition }}
          />
        </div>
      </section>

      <section
        aria-labelledby="category-products-heading"
        className="border-y border-[#E3D7C8] bg-[#FBF7F2] py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mb-7 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#D96B4F]">
              12 catalogue options
            </p>
            <h2
              id="category-products-heading"
              className="mt-2 text-3xl font-extrabold tracking-tight text-[#1A1614] sm:text-4xl"
            >
              Explore {cataloguePage.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#573A29]">
              Temporary catalogue configurations are shown for now. Confirm
              technical specifications and availability with our team.
            </p>
          </div>
          <div className="grid grid-cols-1 items-stretch gap-5 min-[520px]:grid-cols-2 xl:grid-cols-3 lg:gap-6">
            {cards.map((card) => (
              <ProductCard key={card.slug} product={card} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
