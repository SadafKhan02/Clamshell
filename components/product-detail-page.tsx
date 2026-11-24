import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  FileSpreadsheet,
  MapPin,
} from "lucide-react";
import { QuoteCalculator } from "@/components/quote-calculator";
import { ProductHero } from "@/components/product-hero";
import { ProductCard } from "@/components/product-card";
import { ProductImageViewer } from "@/components/product-image-viewer";
import {
  getRelatedProductCards,
  type ProductEntry,
} from "@/data/products";

export function getProductMetadata(product: ProductEntry): Metadata {
  return {
    title: `${product.name} | Clamshell Infrastructure Private Limited`,
    description: product.description,
  };
}

export function ProductDetailPage({ product }: { product: ProductEntry }) {
  const relatedProducts = getRelatedProductCards(
    product.routeSlug,
    product.category,
  );
  const technicalSpecifications =
    (product.technicalSpecifications ?? product.details.specifications).filter(
      (specification) =>
        specification.label.toLowerCase() !== "product name" &&
        !/to be updated/i.test(specification.value),
    );
  const drawingViews =
    product.technicalDrawing?.views.filter(
      (view) => !/engineering drawing to be supplied/i.test(view),
    ) ?? [];
  const drawingNotes =
    product.technicalDrawing?.notes?.filter(
      (note) => !/to be updated|not accessible/i.test(note),
    ) ?? [];
  const hasProductInformation =
    technicalSpecifications.length > 0 ||
    Boolean(product.details.conductorSpecificationTable?.length);
  const applications =
    product.technicalDrawing === undefined
      ? product.details.applications
      : [];

  return (
    <div className="w-full bg-[#FDFBF9]">
      <ProductHero
        categoryLabel={product.details.categoryLabel}
        heading={product.name}
        tagline={product.details.introductionHeading}
        description={product.description}
        image={product.details.bannerImage}
        imageAlt={product.imageAlt}
        imagePosition={product.imagePosition}
        category={product.category}
        routeSlug={product.routeSlug}
        breadcrumbLabel={product.name}
        highlights={product.details.features}
      />

      {product.details.introduction !== product.description && (
        <section
          aria-labelledby="product-introduction-heading"
          className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
        >
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#D96B4F]">
              Product overview
            </p>
            <h2
              id="product-introduction-heading"
              className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-[#1A1614] sm:text-4xl"
            >
              About {product.name}
            </h2>
            <p className="mt-5 text-base leading-7 text-[#573A29]">
              {product.details.introduction}
            </p>
          </div>
        </section>
      )}

      {hasProductInformation && (
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
              Product specifications
            </h2>
          </div>

          {technicalSpecifications.length > 0 && (
            <div className="mt-8 rounded-3xl border border-[#E3D7C8] bg-white p-6 sm:p-8">
              <div className="flex items-center gap-2">
                <FileSpreadsheet
                  className="h-5 w-5 text-[#D96B4F]"
                  aria-hidden="true"
                />
                <h3 className="text-xl font-bold text-[#1A1614]">
                  Key specifications
                </h3>
              </div>
              {product.technicalDataStatus && (
                <p
                  className={`mt-4 rounded-xl px-4 py-3 text-sm font-semibold ${
                    product.technicalDataStatus === "verified"
                      ? "bg-[#FAF7F2] text-[#4A2D1A]"
                      : "bg-[#FEF4F0] text-[#983B23]"
                  }`}
                >
                  {product.technicalDataStatus === "verified"
                    ? "Verified values transcribed from the supplied specifications"
                    : "Temporary product data — confirm before procurement"}
                </p>
              )}
              <div className="mt-5 overflow-x-auto rounded-2xl border border-[#E3D7C8]">
                <table className="w-full min-w-[380px] text-left text-sm">
                  <thead className="bg-[#F6F1EC] text-[11px] font-bold uppercase tracking-wide text-[#331E11]">
                    <tr>
                      <th scope="col" className="p-3.5">Specification</th>
                      <th scope="col" className="p-3.5">Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EDE3D7]">
                    {technicalSpecifications.map((specification) => (
                      <tr key={specification.label}>
                        <th
                          scope="row"
                          className="p-3.5 font-medium text-[#6E635D]"
                        >
                          {specification.label}
                        </th>
                        <td className="p-3.5 font-semibold text-[#1A1614]">
                          {specification.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 rounded-2xl bg-[#FEF4F0] p-4 text-sm leading-6 text-[#573A29]">
                {product.details.specificationNote}
              </p>
            </div>
          )}

          {product.details.conductorSpecificationTable && (
            <div className="mt-8 rounded-3xl border border-[#E3D7C8] bg-white p-5 sm:p-8">
              <h3 className="text-lg font-bold text-[#1A1614] sm:text-xl">Conductor technical specifications</h3>
              <p className="mt-2 text-sm text-[#983B23]">
                The Squirrel conductor breaking load is listed as 70.61 kN in the supplied source and requires technical confirmation before public release.
              </p>
              <div className="mt-5 overflow-x-auto rounded-2xl border border-[#E3D7C8]" tabIndex={0} aria-label="Scrollable conductor specification table">
                <table className="w-full min-w-[1180px] text-left text-xs sm:text-sm">
                  <thead className="bg-[#F6F1EC] text-[10px] font-bold uppercase tracking-wide text-[#331E11]">
                    <tr>
                      <th scope="col" className="p-3">Conductor</th>
                      <th scope="col" className="p-3">Nominal Al. area (mm²)</th>
                      <th scope="col" className="p-3">Al. strands</th>
                      <th scope="col" className="p-3">Al. strand dia. (mm)</th>
                      <th scope="col" className="p-3">Steel strands</th>
                      <th scope="col" className="p-3">Steel strand dia. (mm)</th>
                      <th scope="col" className="p-3">Overall dia. (mm)</th>
                      <th scope="col" className="p-3">Steel core dia. (mm)</th>
                      <th scope="col" className="p-3">Resistance at 20°C (Ω/km)</th>
                      <th scope="col" className="p-3">Approx. breaking load (kN)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EDE3D7]">
                    {product.details.conductorSpecificationTable.map((row) => (
                      <tr key={row.conductor}>
                        <th scope="row" className="p-3 font-bold text-[#1A1614]">{row.conductor}</th>
                        <td className="p-3">{row.nominalArea}</td>
                        <td className="p-3">{row.aluminiumStrands}</td>
                        <td className="p-3">{row.aluminiumDiameter}</td>
                        <td className="p-3">{row.steelStrands}</td>
                        <td className="p-3">{row.steelDiameter}</td>
                        <td className="p-3">{row.overallDiameter}</td>
                        <td className="p-3">{row.steelCoreDiameter}</td>
                        <td className="p-3">{row.resistance}</td>
                        <td className="p-3 font-semibold">{row.breakingLoad}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>
      )}

      <section
        aria-labelledby="product-images-heading"
        className="border-y border-[#E3D7C8] bg-[#FBF7F2] py-12 sm:py-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-7 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#D96B4F]">
              Product reference
            </p>
            <h2
              id="product-images-heading"
              className="mt-2 text-3xl font-extrabold tracking-tight text-[#1A1614] sm:text-4xl"
            >
              Product &amp; structure images
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="min-w-0">
              <h3 className="mb-3 text-lg font-bold text-[#1A1614]">
                Product image
              </h3>
              <ProductImageViewer
                title={product.name}
                src={product.image}
                alt={product.imageAlt}
                unavailableMessage={product.details.imageCaption}
              />
            </div>
            <div className="min-w-0">
              <h3 className="mb-3 text-lg font-bold text-[#1A1614]">
                Structure / technical drawing
              </h3>
              <ProductImageViewer
                title={`${product.name} structure`}
                src={product.technicalDrawing?.image}
                alt={`${product.name} structure and technical drawing`}
                unavailableMessage="The structure drawing is not available yet. Contact our team for the approved technical drawing."
              />
              {(drawingViews.length > 0 || drawingNotes.length > 0) && (
                <div className="mt-4 rounded-2xl border border-[#E3D7C8] bg-white p-5">
                  {drawingViews.length > 0 && (
                    <>
                      <h4 className="font-bold text-[#1A1614]">Drawing views</h4>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {drawingViews.map((view) => (
                          <li
                            key={view}
                            className="rounded-full bg-[#FEF4F0] px-3 py-1.5 text-xs font-semibold text-[#983B23]"
                          >
                            {view}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  {drawingNotes.length > 0 && (
                    <>
                      <h4 className="mt-4 font-bold text-[#1A1614]">
                        Drawing notes
                      </h4>
                      <ul className="mt-2 space-y-2 text-sm leading-6 text-[#573A29]">
                        {drawingNotes.map((note) => (
                          <li key={note}>{note}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {applications.length > 0 && (
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
            {applications.map((application) => (
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
      )}

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
            href={`/contact?product=${encodeURIComponent(product.category === "poles" ? (product.details.categoryLabel === "Rail Poles" ? "Rail Poles" : "PSC Poles") : product.name)}&variant=${encodeURIComponent(product.name)}`}
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

      {relatedProducts.length > 0 && (
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
              product={relatedProduct}
            />
          ))}
        </div>
      </section>
      )}
    </div>
  );
}
