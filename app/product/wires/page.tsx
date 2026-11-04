import type { Metadata } from "next";
import {
  getProductFamilyMetadata,
  ProductFamilyPage,
} from "@/components/product-family-page";
import { getProductFamily } from "@/data/products";

const wireFamily = getProductFamily("wires");

export const metadata: Metadata = getProductFamilyMetadata(wireFamily);

export default function WiresPage() {
  return <ProductFamilyPage family={wireFamily} />;
}
