import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { ProductHero } from "@/components/product-hero";
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
      <ProductHero
        categoryLabel={product.details.categoryLabel}
        heading={cataloguePage.title}
        tagline={product.details.introductionHeading}
        description={cataloguePage.description}
        image={product.details.bannerImage}
        imageAlt={product.imageAlt}
        imagePosition={product.imagePosition}
        category={product.category}
        routeSlug={product.routeSlug}
        breadcrumbLabel={cataloguePage.title}
        highlights={product.details.features}
      />

      <section
        aria-labelledby="category-products-heading"
        className="border-y border-[#E3D7C8] bg-[#FBF7F2] py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mb-7 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#D96B4F]">
              {cataloguePage.variants.length} catalogue options
            </p>
            <h2
              id="category-products-heading"
              className="mt-2 text-3xl font-extrabold tracking-tight text-[#1A1614] sm:text-4xl"
            >
              Explore {cataloguePage.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#573A29]">
              {cataloguePage.status === "proposed"
                ? "This category is part of the proposed product expansion. Product specifications and availability are subject to confirmation."
                : "Review the listed products and supplied technical values. Contact our team to confirm project-specific details and availability."}
            </p>
          </div>
          <div className="grid grid-cols-1 items-stretch gap-5 min-[520px]:grid-cols-2 xl:grid-cols-3 lg:gap-6">
            {cards.map((card) => (
              <ProductCard key={card.slug} product={card} />
            ))}
          </div>
          {cataloguePage.customRequirement && (
            <div className="mt-8 flex flex-col gap-5 rounded-3xl border border-[#E3D7C8] bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div className="max-w-3xl">
                <h3 className="text-xl font-bold text-[#1A1614] sm:text-2xl">
                  {cataloguePage.customRequirement.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#573A29]">
                  {cataloguePage.customRequirement.description}
                </p>
              </div>
              <Link
                href={cataloguePage.customRequirement.destinationUrl}
                className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-xl bg-[#D96B4F] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#C4573B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D96B4F] focus-visible:ring-offset-2 motion-reduce:transition-none"
              >
                {cataloguePage.customRequirement.ctaLabel}
              </Link>
            </div>
          )}
        </div>
      </section>
      {cataloguePage.routeSlug === "super-enamelled-wire" && (
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8" aria-labelledby="super-enamelled-extra-heading">
          <h2 id="super-enamelled-extra-heading" className="text-2xl font-extrabold text-[#1A1614]">
            Project information
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { title: "Future Expansion", href: "/future-expansion" },
              { title: "Industries & Applications", href: "/industries" },
              { title: "Gallery", href: "/gallery" },
            ].map((item) => (
              <a key={item.href} href={item.href} className="rounded-2xl border border-[#E3D7C8] bg-white p-5 text-sm font-bold text-[#4A2D1A] hover:border-[#D96B4F]">
                {item.title}
              </a>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
