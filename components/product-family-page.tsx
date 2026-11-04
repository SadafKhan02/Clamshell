import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import {
  productFamilies,
  toProductCardProduct,
  type ProductFamily,
} from "@/data/products";

export function getProductFamilyMetadata(family: ProductFamily): Metadata {
  return {
    title: `${family.title} | Clamshell Infrastructure`,
    description: family.description,
  };
}

export function ProductFamiliesPage() {
  return (
    <main className="min-h-[60vh] bg-[#FDFBF9]">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#D96B4F]">
          Product range
        </p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-[#1A1614] sm:text-5xl">
          Explore our products
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#573A29]">
          Browse our pole and wire product ranges, then choose a category to
          explore available configurations.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {productFamilies.map((family) => {
            const featuredProduct = family.products[0];

            if (!featuredProduct) {
              throw new Error(
                `Product family "${family.id}" must contain at least one product.`,
              );
            }

            return (
              <Link
                key={family.id}
                href={`/product/${family.id}`}
                className="group overflow-hidden rounded-3xl border border-[#E3D7C8] bg-white shadow-sm transition-shadow hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D96B4F] focus-visible:ring-offset-2"
              >
                <div className="relative aspect-[16/8] overflow-hidden bg-[#F6F1EC]">
                  <Image
                    src={featuredProduct.image}
                    alt={featuredProduct.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    style={{ objectPosition: featuredProduct.imagePosition }}
                  />
                </div>
                <div className="flex items-center justify-between gap-4 p-6 sm:p-8">
                  <div>
                    <h2 className="text-2xl font-bold text-[#1A1614]">
                      {family.title}
                    </h2>
                    <p className="mt-2 max-w-lg text-sm leading-6 text-[#573A29]">
                      {family.description}
                    </p>
                  </div>
                  <ArrowRight
                    className="h-5 w-5 shrink-0 text-[#D96B4F] transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export function ProductFamilyPage({ family }: { family: ProductFamily }) {
  const featuredProduct = family.products[0];

  if (!featuredProduct) {
    throw new Error(`Product family "${family.id}" must contain at least one product.`);
  }

  return (
    <main className="w-full bg-[#FDFBF9]">
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
              {family.title}
            </li>
          </ol>
        </nav>
      </div>

      <section
        aria-labelledby="product-family-heading"
        className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-8 lg:py-16"
      >
        <div>
          <p className="inline-flex items-center rounded-full border border-[#D96B4F]/20 bg-[#FEF4F0] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#983B23]">
            Clamshell product range
          </p>
          <h1
            id="product-family-heading"
            className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-[#1A1614] sm:text-5xl"
          >
            {family.title}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-[#573A29]">
            {family.description}
          </p>
        </div>
        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-[#E3D7C8] bg-[#F6F1EC] shadow-lg">
          <Image
            src={featuredProduct.image}
            alt={featuredProduct.imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover"
            style={{ objectPosition: featuredProduct.imagePosition }}
          />
        </div>
      </section>

      <section
        aria-labelledby="product-family-items-heading"
        className="border-y border-[#E3D7C8] bg-[#FBF7F2] py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mb-7 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#D96B4F]">
              {family.products.length} product categories
            </p>
            <h2
              id="product-family-items-heading"
              className="mt-2 text-3xl font-extrabold tracking-tight text-[#1A1614] sm:text-4xl"
            >
              Explore {family.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#573A29]">
              Choose a product category to see its catalogue and available
              configurations.
            </p>
          </div>
          <div className="grid grid-cols-1 items-stretch gap-5 min-[520px]:grid-cols-2 xl:grid-cols-3 lg:gap-6">
            {family.products.map((product) => (
              <ProductCard
                key={product.slug}
                product={{
                  ...toProductCardProduct(product),
                  destinationUrl: `/product/category/${product.routeSlug}`,
                  ctaLabel: "View Category",
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
