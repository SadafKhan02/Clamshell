import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import {
  getProductCategoryMetadata,
  ProductCategoryPage,
} from "@/components/product-category-page";
import {
  getProductCataloguePage,
  productCataloguePages,
} from "@/data/products";

type ProductCategoryPageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return productCataloguePages.map((page) => ({ category: page.routeSlug }));
}

export async function generateMetadata({
  params,
}: ProductCategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const cataloguePage = getProductCataloguePage(category);

  if (!cataloguePage) {
    notFound();
  }

  return getProductCategoryMetadata(cataloguePage);
}

export default function CategoryPage({
  params,
}: ProductCategoryPageProps) {
  return (
    <Suspense
      fallback={
        <div
          className="flex min-h-[40vh] items-center justify-center px-4 text-sm text-[#573A29]"
          role="status"
        >
          Loading product category...
        </div>
      }
    >
      <CategoryPageContent params={params} />
    </Suspense>
  );
}

async function CategoryPageContent({ params }: ProductCategoryPageProps) {
  const { category } = await params;
  const cataloguePage = getProductCataloguePage(category);

  if (!cataloguePage) {
    notFound();
  }

  return <ProductCategoryPage cataloguePage={cataloguePage} />;
}
