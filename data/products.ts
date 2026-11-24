export type ProductFamilyId = "poles" | "wires";
export type ProductPublicationStatus = "published" | "proposed";

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductApplication {
  title: string;
  description: string;
}

export interface ProductPortfolioItem {
  title: string;
  standard: string;
  specification: string;
  description: string;
  features: string[];
}

export interface ProductTechnicalDrawing {
  image?: string;
  views: string[];
  notes?: string[];
}

export interface ConductorSpecificationRow {
  conductor: string;
  nominalArea: string;
  aluminiumStrands: string;
  aluminiumDiameter: string;
  steelStrands: string;
  steelDiameter: string;
  overallDiameter: string;
  steelCoreDiameter: string;
  resistance: string;
  breakingLoad: string;
}

export interface ProductDetails {
  categoryLabel: string;
  bannerImage: string;
  introductionHeading: string;
  introduction: string;
  features: string[];
  specifications: ProductSpecification[];
  specificationNote: string;
  conductorSpecificationTable?: ConductorSpecificationRow[];
  portfolioItems?: ProductPortfolioItem[];
  applications: ProductApplication[];
  imageCaption: string;
  ctaHeading: string;
  ctaDescription: string;
  ctaLabel: string;
  quoteMode?: "pscc" | "rail";
  projectStatus?: string;
}

export interface ProductEntry {
  name: string;
  slug: string;
  routeSlug: string;
  category: ProductFamilyId;
  description: string;
  image: string;
  imageAlt: string;
  ctaLabel: string;
  destinationUrl: string;
  publicationStatus: ProductPublicationStatus;
  imageFit?: "cover" | "contain";
  imagePosition?: string;
  technicalDataStatus?: "verified" | "temporary";
  technicalSpecifications?: ProductSpecification[];
  technicalDrawing?: ProductTechnicalDrawing;
  details: ProductDetails;
}

export interface ProductFamily {
  id: ProductFamilyId;
  title: string;
  description: string;
  products: ProductEntry[];
}

export interface ProductCardProduct {
  name: string;
  slug: string;
  category: ProductFamilyId;
  categoryLabel?: string;
  description: string;
  image: string;
  imageAlt: string;
  ctaLabel: string;
  destinationUrl: string;
  imageFit?: "cover" | "contain";
  imagePosition?: string;
  highlights: string[];
  publicationStatus?: ProductPublicationStatus;
}

export interface ProductCatalogueVariant {
  routeSlug: string;
  name: string;
  description: string;
  highlights: string[];
  specifications: ProductSpecification[];
  specificationStatus: "verified" | "temporary";
  drawing: ProductTechnicalDrawing;
}

export interface ProductCataloguePage {
  routeSlug: string;
  title: string;
  description: string;
  productRouteSlug: string;
  variants: ProductCatalogueVariant[];
  images: { image: string; imageAlt: string }[];
  status?: "operational" | "proposed";
  customRequirement?: {
    title: string;
    description: string;
    ctaLabel: string;
    destinationUrl: string;
  };
}

const pscImage = "/PSC-pole.jpg";
const railImage = "/rail-pole.avif";

function createPole(
  name: string,
  slug: string,
  length: string,
  workingLoad: string,
  weight: string,
  ultimateLoad: string,
): ProductEntry {
  return {
    name,
    slug,
    routeSlug: slug,
    category: "poles",
    description: `${length} PSC Pole with ${workingLoad} working load.`,
    image: pscImage,
    imageAlt: `PSC Pole reference image for ${name}`,
    ctaLabel: "View Details",
    destinationUrl: `/product/${slug}`,
    publicationStatus: "published",
    imageFit: "contain",
    details: {
      categoryLabel: "PSC Poles",
      bannerImage: pscImage,
      introductionHeading: "Prestressed concrete pole",
      introduction: `${name} is part of Clamshell Infrastructure's PSC Pole product catalogue.`,
      features: [
        "Prestressed concrete construction",
        "Utility distribution applications",
        "Listed product specifications",
      ],
      specifications: [
        { label: "Length", value: length },
        { label: "Working load", value: workingLoad },
        { label: "Theoretical pole weight", value: weight },
        { label: "Ultimate load", value: ultimateLoad },
      ],
      specificationNote:
        "Working load and theoretical pole weight are separate specifications.",
      applications: [
        {
          title: "Power distribution",
          description: "Overhead electrical distribution applications.",
        },
        {
          title: "Rural electrification",
          description: "Pole infrastructure for rural power networks.",
        },
      ],
      imageCaption: "PSC Pole product reference image.",
      ctaHeading: "Request a PSC Pole quote",
      ctaDescription:
        "Share quantity and delivery location for a project-specific enquiry.",
      ctaLabel: "Request a Quote",
      quoteMode: "pscc",
      projectStatus: "Operational product",
    },
  };
}

function createRailPole(
  name: string,
  slug: string,
  length: string,
  weightPerMetre: string,
): ProductEntry {
  return {
    name,
    slug,
    routeSlug: slug,
    category: "poles",
    description: `${length} Rail Pole listed at ${weightPerMetre}.`,
    image: railImage,
    imageAlt: "General Rail Pole reference image",
    ctaLabel: "View Details",
    destinationUrl: `/product/${slug}`,
    publicationStatus: "published",
    imageFit: "contain",
    details: {
      categoryLabel: "Rail Poles",
      bannerImage: railImage,
      introductionHeading: "Rail Pole catalogue",
      introduction: `${name} is a listed Rail Pole catalogue variant.`,
      features: [
        "Rail Pole catalogue product",
        "Project-specific technical review",
        "Custom requirements can be submitted",
      ],
      specifications: [
        { label: "Length", value: length },
        { label: "Weight per metre", value: weightPerMetre },
      ],
      specificationNote:
        "The supplied product list provides length and weight per metre only. The image is a general Rail Pole reference and is not verified for a specific variant.",
      applications: [
        {
          title: "Rail infrastructure",
          description: "Rail infrastructure and electrification applications.",
        },
      ],
      imageCaption: "General Rail Pole reference image.",
      ctaHeading: "Discuss your Rail Pole requirement",
      ctaDescription: "Submit standard or custom pole requirements.",
      ctaLabel: "Request a Quote",
      quoteMode: "rail",
      projectStatus: "Rail Pole catalogue",
    },
  };
}

function createProposedWire(
  name: string,
  slug: string,
  image: string,
  description: string,
  features: string[],
  applications: string[],
  status = "Proposed Product",
): ProductEntry {
  return {
    name,
    slug,
    routeSlug: slug,
    category: "wires",
    description,
    image,
    imageAlt: `${name} proposed product reference`,
    ctaLabel: "View Details",
    destinationUrl: `/product/${slug}`,
    publicationStatus: "proposed",
    imageFit: "contain",
    details: {
      categoryLabel: "Wire & Cable",
      bannerImage: image,
      introductionHeading: "Proposed wire and cable manufacturing project",
      introduction: description,
      features,
      specifications: [{ label: "Project status", value: status }],
      specificationNote:
        "This is a proposed product category. Manufacturing has not commenced; technical dimensions and specifications are subject to project development.",
      applications: applications.map((title) => ({
        title,
        description: `Potential application for ${name.toLowerCase()} in ${title.toLowerCase()}.`,
      })),
      imageCaption: "Proposed product reference image.",
      ctaHeading: `Enquire about ${name}`,
      ctaDescription:
        "Share project requirements for discussion. This product is part of the proposed expansion.",
      ctaLabel: "Product Enquiry",
      projectStatus: status,
    },
  };
}

const pscProducts: ProductEntry[] = [
  createPole("8 m 140 kg W/L PSC Pole", "8m-140kg-wl-psc-pole", "8 m", "140 kg", "335 kg", "350 kg"),
  createPole("8 m 200 kg W/L PSC Pole", "8m-200kg-wl-psc-pole", "8 m", "200 kg", "380 kg", "500 kg"),
  createPole("9 m 300 kg W/L PSC Pole", "9m-300kg-wl-psc-pole", "9 m", "300 kg", "596 kg", "600 kg"),
  createPole("9 m 400 kg W/L PSC Pole", "9m-400kg-wl-psc-pole", "9 m", "400 kg", "697 kg", "800 kg"),
];

const railProducts: ProductEntry[] = [
  createRailPole("13 m 60 kg/m Rail Pole", "13m-60kgm-rail-pole", "13 m", "60 kg/m"),
  createRailPole("13 m 52 kg/m Rail Pole", "13m-52kgm-rail-pole", "13 m", "52 kg/m"),
  createRailPole("11 m 60 kg/m Rail Pole", "11m-60kgm-rail-pole", "11 m", "60 kg/m"),
  createRailPole("11 m 52 kg/m Rail Pole", "11m-52kgm-rail-pole", "11 m", "52 kg/m"),
];

const abCable = createProposedWire(
  "AB Cable",
  "ab-cable",
  "/conductor-cable.jpg",
  "Aerial Bunched Cable with insulated aluminium phase cores, XLPE insulation, and a supporting messenger conductor.",
  [
    "Insulated aluminium phase cores",
    "XLPE insulation",
    "Supporting messenger conductor",
    "Compact overhead cable design",
    "Planned technical range: 10 mm² to 100 mm²",
  ],
  ["LT distribution", "Rural electrification", "Service connections", "Tree-prone areas"],
);

const conductor = createProposedWire(
  "Conductor",
  "conductor",
  "/conductor-cable.jpg",
  "Steel-reinforced aluminium alloy conductor for overhead transmission and distribution applications.",
  [
    "Aluminium alloy wires around a galvanised steel core",
    "Strength-to-weight characteristics",
    "Overhead transmission and distribution",
    "Crossings and rural electrification",
  ],
  [
    "Power transmission",
    "Power distribution",
    "Long river crossings",
    "Long road crossings",
    "Rural electrification",
  ],
);

conductor.details.conductorSpecificationTable = [
  { conductor: "Mole", nominalArea: "10", aluminiumStrands: "6", aluminiumDiameter: "1.50", steelStrands: "1", steelDiameter: "1.50", overallDiameter: "4.50", steelCoreDiameter: "1.50", resistance: "2.780", breakingLoad: "3.97" },
  { conductor: "Squirrel", nominalArea: "20", aluminiumStrands: "6", aluminiumDiameter: "2.11", steelStrands: "1", steelDiameter: "2.11", overallDiameter: "6.33", steelCoreDiameter: "2.11", resistance: "1.394", breakingLoad: "70.61" },
  { conductor: "Weasel", nominalArea: "30", aluminiumStrands: "6", aluminiumDiameter: "2.59", steelStrands: "1", steelDiameter: "2.59", overallDiameter: "7.77", steelCoreDiameter: "2.59", resistance: "0.929", breakingLoad: "11.12" },
  { conductor: "Rabbit", nominalArea: "50", aluminiumStrands: "6", aluminiumDiameter: "3.35", steelStrands: "1", steelDiameter: "3.35", overallDiameter: "10.05", steelCoreDiameter: "3.35", resistance: "0.552", breakingLoad: "18.25" },
  { conductor: "Raccoon", nominalArea: "80", aluminiumStrands: "6", aluminiumDiameter: "4.09", steelStrands: "1", steelDiameter: "4.09", overallDiameter: "12.27", steelCoreDiameter: "4.09", resistance: "0.371", breakingLoad: "26.91" },
  { conductor: "Dog", nominalArea: "100", aluminiumStrands: "6", aluminiumDiameter: "4.72", steelStrands: "7", steelDiameter: "1.57", overallDiameter: "14.15", steelCoreDiameter: "4.71", resistance: "0.279", breakingLoad: "32.41" },
];
conductor.details.specifications = [
  {
    label: "Conductor construction",
    value: "Aluminium alloy strands around a galvanised steel core",
  },
];
conductor.details.specificationNote =
  "The Squirrel conductor breaking load is listed as 70.61 kN in the supplied source and requires technical confirmation before public release.";

const wireProducts: ProductEntry[] = [
  abCable,
  conductor,
  createProposedWire(
    "Enamelled Flat Wire",
    "enamelled-flat-wire",
    "/strip-wire.jpg",
    "Rectangular copper/aluminium winding conductor with enamel insulation.",
    ["Rectangular winding conductor", "Enamel insulation", "High winding space utilisation", "Heat dissipation and insulation characteristics"],
    ["Transformers", "Motors", "Generators", "Reactors", "Chokes", "EV motors"],
  ),
  createProposedWire(
    "DPC Strip",
    "dpc-strip",
    "/strip-wire.jpg",
    "Flat copper/aluminium conductor with double-layer insulating paper covering.",
    ["Flat copper/aluminium conductor", "Double-layer insulating paper covering", "For oil-filled and heavy-duty winding applications"],
    ["Oil-filled transformers", "Distribution transformers", "Reactor windings", "Heavy-duty coils"],
  ),
  createProposedWire(
    "Super Enamelled Wire",
    "super-enamelled-wire",
    "/super-enamelled.jpg",
    "Fine round copper/aluminium winding wire with heat-resistant enamel insulation.",
    ["Fine round winding conductor", "Heat-resistant enamel insulation", "Proposed product under review"],
    ["Electric motors", "Fans", "Pumps", "Small transformers", "Household appliances"],
    "Proposed Product — Under Review",
  ),
  createProposedWire(
    "DPC Wire",
    "dpc-wire",
    "/dpc-wire.jpg",
    "Round copper/aluminium conductor with double paper covering.",
    ["Round copper/aluminium conductor", "Double paper covering", "Electrical insulation characteristics"],
    ["Oil-immersed transformers", "Distribution transformers", "Reactors", "Industrial coils"],
  ),
];

export const productFamilies: ProductFamily[] = [
  {
    id: "poles",
    title: "PSC & Rail Poles",
    description: "PSC Pole manufacturing and Rail Pole catalogue.",
    products: [...pscProducts, ...railProducts],
  },
  {
    id: "wires",
    title: "Wire & Cable",
    description: "Proposed wire and cable manufacturing expansion.",
    products: wireProducts,
  },
];

export const products = productFamilies.flatMap((family) => family.products);

export function getProductFamily(familyId: ProductFamilyId): ProductFamily {
  const family = productFamilies.find((entry) => entry.id === familyId);
  if (!family) throw new Error(`Missing product family "${familyId}".`);
  return family;
}

export function toProductCardProduct(product: ProductEntry): ProductCardProduct {
  return {
    name: product.name,
    slug: product.slug,
    category: product.category,
    categoryLabel: product.details.categoryLabel,
    description: product.description,
    image: product.image,
    imageAlt: product.imageAlt,
    ctaLabel: product.ctaLabel,
    destinationUrl: product.destinationUrl,
    imageFit: product.imageFit,
    imagePosition: product.imagePosition,
    highlights: product.details.features.slice(0, 3),
    publicationStatus: product.publicationStatus,
  };
}

export const productListingItems: ProductCardProduct[] =
  products.map(toProductCardProduct);

function toCatalogueVariant(product: ProductEntry): ProductCatalogueVariant {
  return {
    routeSlug: product.routeSlug,
    name: product.name,
    description: product.description,
    highlights: product.details.features,
    specifications: product.details.specifications,
    specificationStatus:
      product.publicationStatus === "published" ? "verified" : "temporary",
    drawing: { views: [] },
  };
}

function createCataloguePage(
  routeSlug: string,
  title: string,
  productEntries: ProductEntry[],
  status: "operational" | "proposed",
  customRequirement?: ProductCataloguePage["customRequirement"],
): ProductCataloguePage {
  const firstProduct = productEntries[0];
  if (!firstProduct) {
    throw new Error(`Catalogue page "${routeSlug}" must contain at least one product.`);
  }
  return {
    routeSlug,
    title,
    productRouteSlug: firstProduct.routeSlug,
    description:
      status === "operational"
        ? `Browse listed ${title.toLowerCase()} products and their supplied specifications.`
        : `${title} is part of the proposed wire and cable manufacturing expansion.`,
    variants: productEntries.map(toCatalogueVariant),
    images: productEntries.map((product) => ({
      image: product.image,
      imageAlt: product.imageAlt,
    })),
    status,
    customRequirement,
  };
}

export const productCataloguePages: ProductCataloguePage[] = [
  createCataloguePage("pscc-poles", "PSC Poles", pscProducts, "operational"),
  createCataloguePage("rail-poles", "Rail Poles", railProducts, "operational", {
    title: "Looking for a Custom Rail Pole Size?",
    description:
      "Share the required length, weight per metre, quantity, delivery location, and additional requirements.",
    ctaLabel: "Submit Your Requirement",
    destinationUrl: "/contact?product=Rail%20Poles#contact",
  }),
  createCataloguePage("wire-cable", "Wire & Cable", wireProducts, "proposed"),
  createCataloguePage(
    "super-enamelled-wire",
    "Super Enamelled Wire",
    wireProducts.filter((product) => product.routeSlug === "super-enamelled-wire"),
    "proposed",
  ),
  createCataloguePage(
    "dpc-wire",
    "DPC Wire",
    wireProducts.filter((product) => product.routeSlug === "dpc-wire"),
    "proposed",
  ),
  createCataloguePage(
    "strip-wire",
    "Enamelled Flat Wire",
    wireProducts.filter((product) => product.routeSlug === "enamelled-flat-wire"),
    "proposed",
  ),
  createCataloguePage(
    "conductor-cable",
    "Conductor & Cable",
    [conductor, abCable],
    "proposed",
  ),
  createCataloguePage("cable-wires", "Wire & Cable Portfolio", wireProducts, "proposed"),
];

export function getProductCataloguePage(routeSlug: string) {
  return productCataloguePages.find((page) => page.routeSlug === routeSlug);
}

export function getCatalogueCardProducts(
  cataloguePage: ProductCataloguePage,
): ProductCardProduct[] {
  return cataloguePage.variants.map((variant) => {
    const product = products.find((entry) => entry.routeSlug === variant.routeSlug);
    if (!product) {
      throw new Error(`Missing product data for catalogue variant "${variant.routeSlug}".`);
    }
    return {
      ...toProductCardProduct(product),
      categoryLabel: cataloguePage.title,
      description: variant.description,
      highlights: variant.highlights,
      ctaLabel: "View Details",
    };
  });
}

export const productDetailEntries: ProductEntry[] = products;

export function getProductByRouteSlug(
  routeSlug: string,
): ProductEntry | undefined {
  return productDetailEntries.find((product) => product.routeSlug === routeSlug);
}

export function getRelatedProductCards(
  routeSlug: string,
  category: ProductFamilyId,
): ProductCardProduct[] {
  return products
    .filter(
      (product) =>
        product.category === category && product.routeSlug !== routeSlug,
    )
    .slice(0, 3)
    .map(toProductCardProduct);
}
