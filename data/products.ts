export type ProductFamilyId = "poles" | "wires";
export type ProductPublicationStatus = "published" | "introductory";

export interface ProductEntry {
  name: string;
  slug: string;
  category: ProductFamilyId;
  description: string;
  image: string;
  imageAlt: string;
  ctaLabel: string;
  destinationUrl: string;
  publicationStatus: ProductPublicationStatus;
  imageFit?: "cover" | "contain";
  imagePosition?: string;
}

export interface ProductFamily {
  id: ProductFamilyId;
  title: string;
  description: string;
  products: ProductEntry[];
}

export const productFamilies: ProductFamily[] = [
  {
    id: "poles",
    title: "Poles",
    description:
      "Explore our pole product range for infrastructure and electrical applications.",
    products: [
      {
        name: "PSC Pole",
        slug: "psc-pole",
        category: "poles",
        description:
          "Explore prestressed concrete pole solutions for applicable electrical infrastructure and utility projects.",
        image: "/PSC-pole.jpg",
        imageAlt: "Concrete utility poles and electrical infrastructure",
        ctaLabel: "View Product",
        destinationUrl: "/product/pscc-poles",
        publicationStatus: "published",
        imageFit: "cover",
        imagePosition: "38% 50%",
      },
      {
        name: "Rail Pole",
        slug: "rail-pole",
        category: "poles",
        description:
          "Explore pole solutions intended for relevant railway or rail infrastructure applications.",
        image: "/rail-pole.avif",
        imageAlt: "Railway electrification pole with overhead catenary equipment",
        ctaLabel: "View Product",
        destinationUrl: "#rail-pole",
        publicationStatus: "introductory",
        imageFit: "cover",
        imagePosition: "50% 42%",
      },
    ],
  },
  {
    id: "wires",
    title: "Wires & Cables",
    description:
      "Explore wire, conductor and cable product categories for relevant electrical and industrial applications.",
    products: [
      {
        name: "DPC Wire",
        slug: "dpc-wire",
        category: "wires",
        description:
          "Explore our DPC wire category and discover product information relevant to your electrical application.",
        image: "/dpc-wire.jpg",
        imageAlt: "Copper wire strands arranged as an electrical conductor",
        ctaLabel: "Explore Product",
        destinationUrl: "/product/cable-wires",
        publicationStatus: "published",
        imageFit: "cover",
      },
      {
        name: "Strip Wire",
        slug: "strip-wire",
        category: "wires",
        description:
          "Explore strip wire solutions and review the product information available for your requirements.",
        image: "/strip-wire.jpg",
        imageAlt: "Coiled electrical strip wire",
        ctaLabel: "Explore Product",
        destinationUrl: "/product/cable-wires",
        publicationStatus: "published",
        imageFit: "cover",
      },
      {
        name: "Super Enamelled Wire",
        slug: "super-enamelled-wire",
        category: "wires",
        description:
          "Explore super enamelled wire products for applicable electrical winding and industrial applications.",
        image: "/super-enamelled.jpg",
        imageAlt: "Spools of enamelled copper winding wire",
        ctaLabel: "Explore Product",
        destinationUrl: "/product/cable-wires",
        publicationStatus: "published",
        imageFit: "cover",
      },
      {
        name: "Conductor & Cable",
        slug: "conductor-cable",
        category: "wires",
        description:
          "Explore conductor and cable categories for relevant electrical distribution and infrastructure requirements.",
        image: "/conductor-cable.jpg",
        imageAlt: "Electrical cables with visible conductor strands",
        ctaLabel: "Explore Product",
        destinationUrl: "/product/cable-wires",
        publicationStatus: "published",
        imageFit: "cover",
      },
    ],
  },
];
