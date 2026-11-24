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
  detailTitle?: string;
  description: string;
  highlights: string[];
  specifications: ProductSpecification[];
  specificationStatus: "verified" | "temporary";
  drawing: ProductTechnicalDrawing;
  specificationAnchor?: string;
}

export interface ProductCatalogueImage {
  image: string;
  imageAlt: string;
}

export interface ProductCataloguePage {
  routeSlug: string;
  title: string;
  description: string;
  productRouteSlug: string;
  variants: ProductCatalogueVariant[];
  images: ProductCatalogueImage[];
  status?: "operational" | "proposed";
}

const pscImage = "/PSC-pole.jpg";
const railImage = "/rail-pole.avif";

function makePsc(name: string, slug: string, length: string, workingLoad: string, weight: string, ultimateLoad: string): ProductEntry {
  return {
    name, slug, routeSlug: slug, category: "poles",
    description: `${length} PSC Pole with ${workingLoad} working load.`,
    image: pscImage, imageAlt: `Prestressed concrete pole: ${name}`,
    ctaLabel: "View Details", destinationUrl: `/product/${slug}`,
    publicationStatus: "published", imageFit: "contain",
    details: {
      categoryLabel: "PSC Poles", bannerImage: pscImage,
      introductionHeading: "Prestressed concrete pole",
      introduction: `${name} is part of Clamshell Infrastructure's PSC Pole product catalogue.`,
      features: ["Prestressed concrete construction", "Utility distribution applications", "Verified catalogue dimensions supplied by the client"],
      specifications: [
        { label: "Length", value: length },
        { label: "Working load", value: workingLoad },
        { label: "Theoretical pole weight", value: weight },
        { label: "Ultimate load", value: ultimateLoad },
      ],
      specificationNote: "Working load and theoretical pole weight are separate specifications.",
      applications: [
        { title: "Power distribution", description: "Overhead electrical distribution applications." },
        { title: "Rural electrification", description: "Pole infrastructure for rural power networks." },
      ],
      imageCaption: "PSC Pole product photograph.",
      ctaHeading: "Request a PSC Pole quote",
      ctaDescription: "Share quantity and delivery location for a project-specific quotation.",
      ctaLabel: "Request a Quote",
      quoteMode: "pscc",
      projectStatus: "Operational product",
    },
  };
}

const pscProducts = [
  makePsc("8 m 140 kg W/L PSC Pole", "8m-140kg-wl-psc-pole", "8 m", "140 kg", "335 kg", "350 kg"),
  makePsc("8 m 200 kg W/L PSC Pole", "8m-200kg-wl-psc-pole", "8 m", "200 kg", "380 kg", "500 kg"),
  makePsc("9 m 300 kg W/L PSC Pole", "9m-300kg-wl-psc-pole", "9 m", "300 kg", "596 kg", "600 kg"),
  makePsc("9 m 400 kg W/L PSC Pole", "9m-400kg-wl-psc-pole", "9 m", "400 kg", "697 kg", "800 kg"),
];

function makeRail(name: string, slug: string, length: string, weight: string): ProductEntry {
  return {
    name, slug, routeSlug: slug, category: "poles",
    description: `${length} Rail Pole configured at ${weight}.`,
    image: railImage, imageAlt: "General rail pole reference image",
    ctaLabel: "View Details", destinationUrl: `/product/${slug}`,
    publicationStatus: "published", imageFit: "contain",
    details: {
      categoryLabel: "Rail Poles", bannerImage: railImage,
      introductionHeading: "Rail pole catalogue",
      introduction: `${name} is listed as a catalogue variant.`,
      features: ["Customer-specified length and weight", "Project-specific technical review", "Custom requirements accepted"],
      specifications: [{ label: "Length", value: length }, { label: "Weight per metre", value: weight }],
      specificationNote: "The displayed photograph is a general Rail Pole reference image and is not verified for a specific variant.",
      applications: [
        { title: "Rail infrastructure", description: "Rail infrastructure and electrification applications." },
        { title: "Project-specific installations", description: "Configuration confirmed from approved project requirements." },
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

const railProducts = [
  makeRail("13 m 60 kg/m Rail Pole", "13m-60kgm-rail-pole", "13 m", "60 kg/m"),
  makeRail("13 m 52 kg/m Rail Pole", "13m-52kgm-rail-pole", "13 m", "52 kg/m"),
  makeRail("11 m 60 kg/m Rail Pole", "11m-60kgm-rail-pole", "11 m", "60 kg/m"),
  makeRail("11 m 52 kg/m Rail Pole", "11m-52kgm-rail-pole", "11 m", "52 kg/m"),
];

function makeWire(name: string, slug: string, image: string, description: string, features: string[], applications: string[], status = "Proposed Product"): ProductEntry {
  return {
    name, slug, routeSlug: slug, category: "wires", description, image,
    imageAlt: `${name} product reference`,
    ctaLabel: "View Details", destinationUrl: `/product/${slug}`,
    publicationStatus: "proposed", imageFit: "contain",
    details: {
      categoryLabel: "Wire & Cable", bannerImage: image,
      introductionHeading: "Proposed wire and cable manufacturing project",
      introduction: description,
      features,
      specifications: [{ label: "Project status", value: status }],
      specificationNote: "This is a proposed product category. Manufacturing has not commenced; technical dimensions and specifications are subject to project development.",
      applications: applications.map((title) => ({ title, description: `Potential application for ${name.toLowerCase()} in ${title.toLowerCase()}.` })),
      imageCaption: "Proposed product reference image.",
      ctaHeading: `Enquire about ${name}`,
      ctaDescription: "Share project requirements for discussion. This product is part of the proposed expansion.",
      ctaLabel: "Product Enquiry",
      projectStatus: status,
    },
  };
}

const abCable = makeWire("AB Cable", "ab-cable", "/conductor-cable.jpg",
  "Aerial Bunched Cable with insulated aluminium phase cores, XLPE insulation, and a supporting messenger conductor.",
  ["Insulated aluminium phase cores", "XLPE insulation", "Supporting messenger conductor", "Compact overhead cable design", "Planned technical range: 10 mm² to 100 mm²"],
  ["LT distribution", "Rural electrification", "Service connections", "Tree-prone areas"]);

const conductor = makeWire("Conductor", "conductor", "/conductor-cable.jpg",
  "Steel-reinforced aluminium alloy conductor for overhead transmission and distribution applications.",
  ["Aluminium alloy wires around a galvanised steel core", "Strength-to-weight characteristics", "Overhead transmission and distribution", "Crossings and rural electrification"],
  ["Power transmission", "Power distribution", "Long river crossings", "Long road crossings", "Rural electrification"]);
conductor.details.conductorSpecificationTable = [
  { conductor: "Mole", nominalArea: "10", aluminiumStrands: "6", aluminiumDiameter: "1.50", steelStrands: "1", steelDiameter: "1.50", overallDiameter: "4.50", steelCoreDiameter: "1.50", resistance: "2.780", breakingLoad: "3.97" },
  { conductor: "Squirrel", nominalArea: "20", aluminiumStrands: "6", aluminiumDiameter: "2.11", steelStrands: "1", steelDiameter: "2.11", overallDiameter: "6.33", steelCoreDiameter: "2.11", resistance: "1.394", breakingLoad: "70.61" },
  { conductor: "Weasel", nominalArea: "30", aluminiumStrands: "6", aluminiumDiameter: "2.59", steelStrands: "1", steelDiameter: "2.59", overallDiameter: "7.77", steelCoreDiameter: "2.59", resistance: "0.929", breakingLoad: "11.12" },
  { conductor: "Rabbit", nominalArea: "50", aluminiumStrands: "6", aluminiumDiameter: "3.35", steelStrands: "1", steelDiameter: "3.35", overallDiameter: "10.05", steelCoreDiameter: "3.35", resistance: "0.552", breakingLoad: "18.25" },
  { conductor: "Raccoon", nominalArea: "80", aluminiumStrands: "6", aluminiumDiameter: "4.09", steelStrands: "1", steelDiameter: "4.09", overallDiameter: "12.27", steelCoreDiameter: "4.09", resistance: "0.371", breakingLoad: "26.91" },
  { conductor: "Dog", nominalArea: "100", aluminiumStrands: "6", aluminiumDiameter: "4.72", steelStrands: "7", steelDiameter: "1.57", overallDiameter: "14.15", steelCoreDiameter: "4.71", resistance: "0.279", breakingLoad: "32.41" },
];
conductor.details.specifications = [{ label: "Conductor construction", value: "Aluminium alloy strands around a galvanised steel core" }];
conductor.details.specificationNote = "The Squirrel conductor breaking load is listed as 70.61 kN in the supplied source and is flagged for technical confirmation before public release.";

const wireProducts = [
  abCable,
  conductor,
  makeWire("Enamelled Flat Wire", "enamelled-flat-wire", "/strip-wire.jpg",
    "Rectangular copper/aluminium winding conductor with enamel insulation.",
    ["Rectangular winding conductor", "Enamel insulation", "High winding space utilisation", "Heat dissipation and insulation characteristics"],
    ["Transformers", "Motors", "Generators", "Reactors", "Chokes", "EV motors"]),
  makeWire("DPC Strip", "dpc-strip", "/strip-wire.jpg",
    "Flat copper/aluminium conductor with double-layer insulating paper covering.",
    ["Flat copper/aluminium conductor", "Double-layer insulating paper covering", "For oil-filled and heavy-duty winding applications"],
    ["Oil-filled transformers", "Distribution transformers", "Reactor windings", "Heavy-duty coils"]),
  makeWire("Super Enamelled Wire", "super-enamelled-wire", "/super-enamelled.jpg",
    "Fine round copper/aluminium winding wire with heat-resistant enamel insulation.",
    ["Fine round winding conductor", "Heat-resistant enamel insulation", "Proposed product under review"],
    ["Electric motors", "Fans", "Pumps", "Small transformers", "Household appliances"], "Proposed Product — Under Review"),
  makeWire("DPC Wire", "dpc-wire", "/dpc-wire.jpg",
    "Round copper/aluminium conductor with double paper covering.",
    ["Round copper/aluminium conductor", "Double paper covering", "Electrical insulation characteristics"],
    ["Oil-immersed transformers", "Distribution transformers", "Reactors", "Industrial coils"]),
];

export const productFamilies: ProductFamily[] = [
  { id: "poles", title: "PSC & Rail Poles", description: "PSC Pole manufacturing and Rail Pole catalogue.", products: [...pscProducts, ...railProducts] },
  { id: "wires", title: "Wire & Cable", description: "Proposed wire and cable manufacturing expansion.", products: wireProducts },
];

export const products = productFamilies.flatMap((family) => family.products);

export function getProductFamily(familyId: ProductFamilyId): ProductFamily {
  const family = productFamilies.find((entry) => entry.id === familyId);
  if (!family) throw new Error(`Missing product family "${familyId}".`);
  return family;
}

export function toProductCardProduct(product: ProductEntry): ProductCardProduct {
  return {
    name: product.name, slug: product.slug, category: product.category,
    categoryLabel: product.details.categoryLabel, description: product.description,
    image: product.image, imageAlt: product.imageAlt, ctaLabel: product.ctaLabel,
    destinationUrl: product.destinationUrl, imageFit: product.imageFit,
    imagePosition: product.imagePosition,
    highlights: product.details.features.slice(0, 3),
    publicationStatus: product.publicationStatus,
  };
}

export const productCataloguePages: ProductCataloguePage[] = [
  {
    routeSlug: "pscc-poles", title: "PSC Poles", status: "operational",
    description: "Prestressed Concrete Poles",
    productRouteSlug: "8m-140kg-wl-psc-pole",
    variants: pscProducts.map((product) => ({
      routeSlug: product.routeSlug, name: product.name, description: product.description,
      highlights: product.details.features,
      specifications: product.details.specifications,
      specificationStatus: "verified",
      drawing: { views: [] },
    })),
    images: pscProducts.map((product) => ({ image: product.image, imageAlt: product.imageAlt })),
  },
  {
    routeSlug: "rail-poles", title: "Rail Poles", status: "operational",
    description: "Rail Pole catalogue with standard and custom requirement options.",
    productRouteSlug: "13m-60kgm-rail-pole",
    variants: railProducts.map((product) => ({
      routeSlug: product.routeSlug, name: product.name, description: product.description,
      highlights: product.details.features,
      specifications: product.details.specifications,
      specificationStatus: "verified",
      drawing: { views: [] },
    })),
    images: [{ image: railImage, imageAlt: "General Rail Pole reference image" }],
  },
  {
    routeSlug: "wire-cable", title: "Wire & Cable", status: "proposed",
    description: "Wire and cable manufacturing project — proposed expansion.",
    productRouteSlug: "ab-cable",
    variants: wireProducts.map((product) => ({
      routeSlug: product.routeSlug, name: product.name, description: product.description,
      highlights: product.details.features,
      specifications: product.details.specifications,
      specificationStatus: "temporary",
      drawing: { views: [] },
    })),
    images: wireProducts.map((product) => ({ image: product.image, imageAlt: product.imageAlt })),
  },
  {
    routeSlug: "super-enamelled-wire", title: "Super Enamelled Wire", status: "proposed",
    description: "Proposed Product — Under Review",
    productRouteSlug: "super-enamelled-wire",
    variants: [wireProducts.find((product) => product.routeSlug === "super-enamelled-wire")].filter((product): product is ProductEntry => Boolean(product)).map((product) => ({
      routeSlug: product.routeSlug,
      name: product.name,
      description: product.description,
      highlights: product.details.features,
      specifications: product.details.specifications,
      specificationStatus: "temporary",
      drawing: { views: [] },
    })),
    images: [{ image: "/super-enamelled.jpg", imageAlt: "Super enamelled wire proposed product reference" }],
  },
];

export function getProductCataloguePage(routeSlug: string) {
  return productCataloguePages.find((page) => page.routeSlug === routeSlug);
}

export function getCatalogueCardProducts(cataloguePage: ProductCataloguePage): ProductCardProduct[] {
  const product = products.find((entry) => entry.routeSlug === cataloguePage.productRouteSlug);
  if (!product) throw new Error(`Missing product data for catalogue page "${cataloguePage.routeSlug}".`);
  return cataloguePage.variants.map((variant, index) => ({
    name: variant.name, slug: variant.routeSlug, category: product.category,
    categoryLabel: cataloguePage.title, description: variant.description,
    image: cataloguePage.images[index % cataloguePage.images.length]?.image ?? product.image,
    imageAlt: cataloguePage.images[index % cataloguePage.images.length]?.imageAlt ?? product.imageAlt,
    ctaLabel: "View Details", destinationUrl: `/product/${variant.routeSlug}`,
    imageFit: "contain", highlights: variant.highlights,
  }));
}

export const productDetailEntries: ProductEntry[] = products;

export function getProductByRouteSlug(routeSlug: string): ProductEntry | undefined {
  return productDetailEntries.find((product) => product.routeSlug === routeSlug);
}

export function getRelatedProductCards(routeSlug: string, category: ProductFamilyId): ProductCardProduct[] {
  return products
    .filter((product) => product.category === category && product.routeSlug !== routeSlug)
    .slice(0, 3)
    .map(toProductCardProduct);
}
