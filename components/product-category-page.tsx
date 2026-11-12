import type { Metadata } from "next";
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
        supplyNotice={product.supplyNotice}
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
