import type { MetadataRoute } from "next";
import { productDetailEntries, productCataloguePages } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://clamshellinfra.com";
  const routes = ["", "/about/overview", "/about/history", "/about/mission", "/product", "/future-expansion", "/industries", "/gallery", "/contact"];
  const entries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
  for (const page of productCataloguePages) {
    entries.push({ url: `${baseUrl}/product/category/${page.routeSlug}`, lastModified: new Date() });
  }
  for (const product of productDetailEntries) {
    entries.push({ url: `${baseUrl}/product/${product.routeSlug}`, lastModified: new Date() });
  }
  return entries;
}
