import type { Metadata } from "next";
import {
  getProductFamilyMetadata,
  ProductFamilyPage,
} from "@/components/product-family-page";
import { getProductFamily } from "@/data/products";

const poleFamily = getProductFamily("poles");

export const metadata: Metadata = getProductFamilyMetadata(poleFamily);

export default function PolesPage() {
  return <ProductFamilyPage family={poleFamily} />;
}
