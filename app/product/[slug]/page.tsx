import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ProductDetailPage, getProductMetadata } from "@/components/product-detail-page";
import { getProductByRouteSlug, products } from "@/data/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.routeSlug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductByRouteSlug(slug);

  if (!product) {
    notFound();
  }

  return getProductMetadata(product);
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <Suspense
      fallback={
        <div
          className="flex min-h-[40vh] items-center justify-center px-4 text-sm text-[#573A29]"
          role="status"
        >
          Loading product...
        </div>
      }
    >
      <ProductPageContent params={params} />
    </Suspense>
  );
}

async function ProductPageContent({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductByRouteSlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailPage product={product} />;
}
