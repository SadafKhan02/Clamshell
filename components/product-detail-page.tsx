import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  FileSpreadsheet,
  MapPin,
} from "lucide-react";
import { QuoteCalculator } from "@/components/quote-calculator";
import { ProductCard } from "@/components/product-card";
import {
  products,
  toProductCardProduct,
  type ProductEntry,
} from "@/data/products";

export function getProductMetadata(product: ProductEntry): Metadata {
  return {
    title: `${product.name} | Clamshell Infrastructure Private Limited`,
    description: product.description,
  };
}

export function ProductDetailPage({ product }: { product: ProductEntry }) {
  const relatedProducts = products
    .filter((relatedProduct) => relatedProduct.slug !== product.slug)
    .sort(
      (first, second) =>
        Number(second.category === product.category) -
        Number(first.category === product.category),
    )
    .slice(0, 3);

  return (
    <div className="w-full bg-[#FDFBF9]">
      <div className="mx-auto max-w-7xl px-4 pt-5 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-[#6E635D]">
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
              {product.name}
            </li>
          </ol>
        </nav>
      </div>

      <section
        aria-labelledby="product-heading"
        className="relative isolate mt-5 overflow-hidden bg-[#1A1614] text-white"
      >
        <Image
          src={product.details.bannerImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: product.imagePosition }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1614]/95 via-[#1A1614]/75 to-[#1A1614]/25" />
        <div className="relative mx-auto flex min-h-[26rem] max-w-7xl items-center px-4 py-14 sm:min-h-[32rem] sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#F5D7CD]">
              {product.details.categoryLabel}
            </p>
            <h1
              id="product-heading"
              className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            >
              {product.name}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
              {product.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#D96B4F] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#C4573B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1614] motion-reduce:transition-none"
              >
                {product.details.ctaLabel}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/product"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/5 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white motion-reduce:transition-none"
              >
                Browse all products
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="product-introduction-heading"
        className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_0.95fr] lg:gap-16 lg:px-8"
      >
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#D96B4F]">
            Product overview
          </p>
          <h2
            id="product-introduction-heading"
            className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-[#1A1614] sm:text-4xl"
          >
            {product.details.introductionHeading}
          </h2>
          <p className="mt-5 text-base leading-7 text-[#573A29]">
            {product.details.introduction}
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-[#983B23] hover:text-[#D96B4F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D96B4F]"
          >
            Talk to our product team
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[#E3D7C8] bg-[#F6F1EC] shadow-lg">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 48vw"
            className={
              product.imageFit === "contain"
                ? "object-contain p-6 sm:p-8"
                : "object-cover"
            }
            style={{ objectPosition: product.imagePosition }}
          />
        </div>
      </section>

      <section
        aria-labelledby="product-details-heading"
        className="border-y border-[#E3D7C8] bg-[#FBF7F2] py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#D96B4F]">
              Product information
            </p>
            <h2
              id="product-details-heading"
              className="mt-3 text-3xl font-extrabold tracking-tight text-[#1A1614] sm:text-4xl"
            >
              Features and specifications
            </h2>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-[#E3D7C8] bg-white p-6 sm:p-8">
              <h3 className="text-xl font-bold text-[#1A1614]">
                Product features
              </h3>
              <ul className="mt-5 space-y-4">
                {product.details.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#D96B4F]"
                      aria-hidden="true"
                    />
                    <span className="text-sm leading-6 text-[#4A2D1A]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-[#E3D7C8] bg-white p-6 sm:p-8">
              <div className="flex items-center gap-2">
                <FileSpreadsheet
                  className="h-5 w-5 text-[#D96B4F]"
                  aria-hidden="true"
                />
                <h3 className="text-xl font-bold text-[#1A1614]">
                  Key specifications
                </h3>
              </div>
              <dl className="mt-5 divide-y divide-[#EDE3D7]">
                {product.details.specifications.map((specification) => (
                  <div
                    key={specification.label}
                    className="grid gap-1 py-3 sm:grid-cols-[0.85fr_1.15fr] sm:gap-4"
                  >
                    <dt className="text-sm text-[#6E635D]">
                      {specification.label}
                    </dt>
                    <dd className="text-sm font-semibold leading-6 text-[#1A1614] sm:text-right">
                      {specification.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 rounded-2xl bg-[#FEF4F0] p-4 text-sm leading-6 text-[#573A29]">
                {product.details.specificationNote}
              </p>
            </div>
          </div>

          {product.details.specificationTable && (
            <div className="mt-8 rounded-3xl border border-[#E3D7C8] bg-white p-5 sm:p-8">
              <h3 className="text-lg font-bold text-[#1A1614] sm:text-xl">
                PSCC pole configurations
              </h3>
              <div className="mt-5 overflow-x-auto rounded-2xl border border-[#E3D7C8]">
                <table className="w-full min-w-[980px] text-left text-sm">
                  <thead className="bg-[#F6F1EC] text-[11px] font-bold uppercase tracking-wide text-[#331E11]">
                    <tr>
                      <th scope="col" className="p-3.5">Length</th>
                      <th scope="col" className="p-3.5">Working load</th>
                      <th scope="col" className="p-3.5">Ultimate load</th>
                      <th scope="col" className="p-3.5">Top dimensions</th>
                      <th scope="col" className="p-3.5">Bottom dimensions</th>
                      <th scope="col" className="p-3.5">Planting depth</th>
                      <th scope="col" className="p-3.5">Typical application</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EDE3D7]">
                    {product.details.specificationTable.map((row) => (
                      <tr
                        key={row.length}
                        id={row.anchorId}
                        className="scroll-mt-24 align-top"
                      >
                        <th scope="row" className="p-3.5 font-bold text-[#1A1614]">
                          {row.length}
                        </th>
                        <td className="p-3.5 text-[#573A29]">{row.workingLoad}</td>
                        <td className="p-3.5 text-[#573A29]">{row.ultimateLoad}</td>
                        <td className="p-3.5 text-[#573A29]">{row.topDimension}</td>
                        <td className="p-3.5 text-[#573A29]">{row.bottomDimension}</td>
                        <td className="p-3.5 text-[#573A29]">{row.plantingDepth}</td>
                        <td className="p-3.5 text-[#573A29]">{row.application}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {product.details.portfolioItems && (
            <div className="mt-8">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#D96B4F]">
                  Portfolio categories
                </p>
                <h3
                  id="portfolio-category-heading"
                  className="mt-2 text-2xl font-extrabold tracking-tight text-[#1A1614] sm:text-3xl"
                >
                  Wire and conductor range
                </h3>
              </div>
              <div className="mt-5 grid gap-5 lg:grid-cols-2">
                {product.details.portfolioItems.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-3xl border border-[#E3D7C8] bg-white p-6 sm:p-8"
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <h4 className="text-lg font-bold text-[#1A1614]">
                        {item.title}
                      </h4>
                      <span className="w-fit rounded-full bg-[#FEF4F0] px-3 py-1 text-xs font-semibold text-[#983B23]">
                        {item.standard}
                      </span>
                    </div>
                    <p className="mt-2 text-sm font-semibold text-[#785135]">
                      {item.specification}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[#573A29]">
                      {item.description}
                    </p>
                    <ul className="mt-4 space-y-2 border-t border-[#EDE3D7] pt-4">
                      {item.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-sm leading-6 text-[#4A2D1A]"
                        >
                          <CheckCircle2
                            className="mt-1 h-4 w-4 shrink-0 text-[#D96B4F]"
                            aria-hidden="true"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section
        aria-labelledby="product-applications-heading"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FEF4F0] text-[#D96B4F]">
            <MapPin className="h-6 w-6" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#D96B4F]">
              Where it fits
            </p>
            <h2
              id="product-applications-heading"
              className="mt-2 text-3xl font-extrabold tracking-tight text-[#1A1614] sm:text-4xl"
            >
              Applications
            </h2>
          </div>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {product.details.applications.map((application) => (
            <article
              key={application.title}
              className="rounded-2xl border border-[#E3D7C8] bg-white p-6"
            >
              <h3 className="text-lg font-bold text-[#1A1614]">
                {application.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#573A29]">
                {application.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="product-gallery-heading"
        className="border-y border-[#E3D7C8] bg-[#FBF7F2] py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-7 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#D96B4F]">
              Product gallery
            </p>
            <h2
              id="product-gallery-heading"
              className="mt-2 text-3xl font-extrabold tracking-tight text-[#1A1614] sm:text-4xl"
            >
              Product imagery
            </h2>
          </div>
          <figure className="overflow-hidden rounded-3xl border border-[#E3D7C8] bg-white shadow-sm">
            <div className="relative aspect-[16/8] min-h-56 bg-[#F6F1EC] sm:min-h-80">
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className={
                  product.imageFit === "contain"
                    ? "object-contain p-6 sm:p-10"
                    : "object-cover"
                }
                style={{ objectPosition: product.imagePosition }}
              />
            </div>
            <figcaption className="px-5 py-4 text-sm leading-6 text-[#6E635D] sm:px-7">
              {product.details.imageCaption}
            </figcaption>
          </figure>
        </div>
      </section>

      <section
        aria-labelledby="product-enquiry-heading"
        className="bg-[#331E11] py-12 text-white sm:py-16"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div className="max-w-2xl">
            <h2
              id="product-enquiry-heading"
              className="text-2xl font-bold leading-tight sm:text-3xl"
            >
              {product.details.ctaHeading}
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#EDE3D7] sm:text-base">
              {product.details.ctaDescription}
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#D96B4F] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#C4573B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#331E11] motion-reduce:transition-none"
          >
            {product.details.ctaLabel}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {product.details.quoteMode && (
        <QuoteCalculator mode={product.details.quoteMode} />
      )}

      <section
        aria-labelledby="related-products-heading"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#D96B4F]">
              Explore more
            </p>
            <h2
              id="related-products-heading"
              className="mt-2 text-3xl font-extrabold tracking-tight text-[#1A1614] sm:text-4xl"
            >
              Related products
            </h2>
          </div>
          <Link
            href="/product"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-[#983B23] hover:text-[#D96B4F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D96B4F]"
          >
            View all products
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {relatedProducts.map((relatedProduct) => (
            <ProductCard
              key={relatedProduct.slug}
              product={toProductCardProduct(relatedProduct)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
