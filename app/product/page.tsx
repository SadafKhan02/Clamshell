import type { Metadata } from "next";
import { ProductFamiliesPage } from "@/components/product-family-page";

export const metadata: Metadata = {
  title: "Products | Clamshell Infrastructure",
  description:
    "Explore Clamshell Infrastructure pole, wire, and cable product ranges.",
};

export default function ProductIndexPage() {
  return <ProductFamiliesPage />;
}
