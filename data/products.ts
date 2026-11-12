export type ProductFamilyId = "poles" | "wires";
export type ProductPublicationStatus = "published" | "introductory";

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductSpecificationRow {
  anchorId: string;
  length: string;
  workingLoad: string;
  ultimateLoad: string;
  topDimension: string;
  bottomDimension: string;
  plantingDepth: string;
  application: string;
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

export interface ProductDetails {
  categoryLabel: string;
  bannerImage: string;
  introductionHeading: string;
  introduction: string;
  features: string[];
  specifications: ProductSpecification[];
  specificationNote: string;
  specificationTable?: ProductSpecificationRow[];
  portfolioItems?: ProductPortfolioItem[];
  applications: ProductApplication[];
  imageCaption: string;
  ctaHeading: string;
  ctaDescription: string;
  ctaLabel: string;
  quoteMode?: "pscc" | "rail";
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
  supplyNotice?: string;
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
  supplyNotice?: string;
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
        routeSlug: "pscc-poles",
        category: "poles",
        description:
          "Pre-stressed cement concrete poles for utility distribution and infrastructure projects.",
        image: "/PSC-pole.jpg",
        imageAlt: "Pre-stressed concrete utility pole carrying overhead lines",
        ctaLabel: "View Product",
        destinationUrl: "/product/pscc-poles",
        publicationStatus: "published",
        imageFit: "cover",
        imagePosition: "38% 50%",
        details: {
          categoryLabel: "Concrete utility poles",
          bannerImage: "/PSC-pole.jpg",
          introductionHeading: "Built for utility power distribution",
          introduction:
            "Clamshell PSCC poles are produced by pre-tensioning high-tensile steel wire in steel moulds and casting concrete around the tendons. The existing product range includes multiple pole lengths and working-load configurations for utility and infrastructure requirements.",
          features: [
            "Pre-stressed cement concrete construction",
            "Pole lengths and working loads available in multiple configurations",
            "Embedded earthing wire and fittings, subject to the selected configuration",
            "Manufactured to the applicable Indian Standard and project requirements",
          ],
          specifications: [
            { label: "Standard", value: "IS 1678 : 1998" },
            { label: "Available lengths", value: "8.0 m to 13.0 m" },
            { label: "Working load range", value: "140 kg to 500 kg, by configuration" },
            { label: "Prestressing wire", value: "4.00 mm; IS 1785 Part I" },
            { label: "Concrete grades shown", value: "M42 to M55, by configuration" },
          ],
          specificationNote:
            "Confirm the selected pole configuration, dimensions, and project approvals with our team before ordering.",
          specificationTable: [
            {
              anchorId: "pscc-pole-8-0m",
              length: "8.0 m",
              workingLoad: "140 kg / 200 kg",
              ultimateLoad: "350 kg / 500 kg",
              topDimension: "105 x 90 mm",
              bottomDimension: "290 x 105 mm",
              plantingDepth: "1.50 m",
              application: "LT overhead lines, rural distribution, and street lighting",
            },
            {
              anchorId: "pscc-pole-9-0m",
              length: "9.0 m",
              workingLoad: "200 kg / 300 kg",
              ultimateLoad: "500 kg / 750 kg",
              topDimension: "120 x 95 mm",
              bottomDimension: "320 x 120 mm",
              plantingDepth: "1.50 m",
              application: "11 kV feeders and urban grid substations",
            },
            {
              anchorId: "pscc-pole-9-5m",
              length: "9.5 m",
              workingLoad: "300 kg / 400 kg",
              ultimateLoad: "750 kg / 1000 kg",
              topDimension: "140 x 105 mm",
              bottomDimension: "340 x 140 mm",
              plantingDepth: "1.60 m",
              application: "11 kV and 33 kV distribution corridors",
            },
            {
              anchorId: "pscc-pole-11-0m",
              length: "11.0 m",
              workingLoad: "350 kg / 400 kg",
              ultimateLoad: "875 kg / 1000 kg",
              topDimension: "150 x 120 mm",
              bottomDimension: "390 x 150 mm",
              plantingDepth: "1.80 m",
              application: "33 kV sub-transmission lines and crossings",
            },
            {
              anchorId: "pscc-pole-13-0m",
              length: "13.0 m",
              workingLoad: "400 kg / 500 kg",
              ultimateLoad: "1000 kg / 1250 kg",
              topDimension: "165 x 135 mm",
              bottomDimension: "440 x 165 mm",
              plantingDepth: "2.00 m",
              application: "High-clearance 33 kV lines and railway electrification",
            },
          ],
          applications: [
            {
              title: "Utility distribution",
              description:
                "Pole options for low-tension and high-tension overhead distribution projects.",
            },
            {
              title: "Urban and rural networks",
              description:
                "Configurations for local distribution corridors, street lighting, and substations.",
            },
            {
              title: "Line crossings",
              description:
                "Discuss pole length, load, and project requirements for road or river crossings.",
            },
          ],
          imageCaption:
            "Temporary reference image for pre-stressed concrete utility poles.",
          ctaHeading: "Planning a pole project?",
          ctaDescription:
            "Share the required length, working load, quantity, and delivery location for a project-specific discussion.",
          ctaLabel: "Request a Pole Quote",
          quoteMode: "pscc",
        },
      },
      {
        name: "Rail Pole",
        slug: "rail-pole",
        routeSlug: "rail-poles",
        category: "poles",
        description:
          "Pole options for railway and rail infrastructure projects, with configuration confirmed to project requirements.",
        image: "/rail-pole.avif",
        imageAlt: "Railway electrification pole with overhead catenary equipment",
        ctaLabel: "View Product",
        destinationUrl: "/product/rail-poles",
        publicationStatus: "published",
        supplyNotice:
          "Rail poles are not manufactured by Clamshell Infrastructure. They are sourced from external suppliers and supplied for your project.",
        imageFit: "cover",
        imagePosition: "50% 42%",
        details: {
          categoryLabel: "Rail infrastructure",
          bannerImage: "/rail-pole.avif",
          introductionHeading: "Rail infrastructure pole solutions",
          introduction:
            "Explore pole options for railway electrification and related rail infrastructure. Share project drawings and applicable requirements so the appropriate configuration and technical information can be confirmed.",
          features: [
            "Options for railway and rail infrastructure projects",
            "Project-specific configuration review",
            "Technical details confirmed against drawings and requirements",
            "Delivery and logistics can be discussed with the project enquiry",
          ],
          specifications: [
            { label: "Pole type", value: "Confirm for project" },
            { label: "Dimensions and load", value: "Confirm against project requirements" },
            { label: "Applicable standards", value: "Confirm with project documentation" },
            { label: "Material and delivery", value: "Discuss with our team" },
          ],
          specificationNote:
            "Approved technical data for this product has not been published here. We do not assume dimensions, capacities, or standards; request confirmation for your project.",
          applications: [
            {
              title: "Railway electrification",
              description:
                "Discuss pole requirements for railway electrification projects and associated equipment.",
            },
            {
              title: "Rail corridors",
              description:
                "Share corridor drawings and installation requirements for a technical review.",
            },
            {
              title: "Rail infrastructure upgrades",
              description:
                "Coordinate product configuration, approvals, and delivery requirements for upgrade works.",
            },
          ],
          imageCaption:
            "Temporary reference image showing railway overhead electrification infrastructure.",
          ctaHeading: "Discuss your rail project",
          ctaDescription:
            "Send project drawings and requirements to confirm the appropriate product configuration and technical details.",
          ctaLabel: "Enquire About Rail Poles",
          quoteMode: "rail",
        },
      },
    ],
  },
  {
    id: "wires",
    title: "Wires & Cables",
    description:
      "Explore wire, conductor and cable product categories for electrical and industrial project requirements.",
    products: [
      {
        name: "DPC Wire",
        slug: "dpc-wire",
        routeSlug: "dpc-wire",
        category: "wires",
        description:
          "Explore the DPC wire range and discuss conductor build, size, insulation, and supply requirements with our team.",
        image: "/dpc-wire.jpg",
        imageAlt: "Copper wire strands arranged as an electrical conductor",
        ctaLabel: "Explore Product",
        destinationUrl: "/product/dpc-wire",
        publicationStatus: "published",
        imageFit: "cover",
        details: {
          categoryLabel: "Wire products",
          bannerImage: "/dpc-wire.jpg",
          introductionHeading: "DPC wire for project-specific needs",
          introduction:
            "Review the DPC wire category for your electrical application. Conductor build, insulation details, dimensions, and applicable standards should be confirmed against the intended equipment and project requirements.",
          features: [
            "Product selection based on the intended electrical application",
            "Conductor and insulation details confirmed for the selected requirement",
            "Project-specific review of dimensions and applicable standards",
            "Supply and packaging requirements discussed during enquiry",
          ],
          specifications: [
            { label: "Conductor build", value: "Confirm with our team" },
            { label: "Dimensions", value: "Confirm for the selected requirement" },
            { label: "Applicable standard", value: "Confirm for project" },
            { label: "Supply format", value: "Discuss with our team" },
          ],
          specificationNote:
            "Detailed technical values are not provided here. Request the current product datasheet for verified options.",
          applications: [
            {
              title: "Electrical equipment",
              description:
                "Share equipment details and operating requirements to review product suitability.",
            },
            {
              title: "Industrial projects",
              description:
                "Confirm conductor and insulation requirements for the intended installation.",
            },
            {
              title: "Custom procurement",
              description:
                "Discuss requested dimensions, standards, quantities, and delivery schedule.",
            },
          ],
          imageCaption:
            "Temporary reference image for electrical wire and conductor products.",
          ctaHeading: "Need DPC wire specifications?",
          ctaDescription:
            "Tell us about the equipment, required dimensions, and quantity to request current product information.",
          ctaLabel: "Enquire About DPC Wire",
        },
      },
      {
        name: "Strip Wire",
        slug: "strip-wire",
        routeSlug: "strip-wire",
        category: "wires",
        description:
          "Explore strip wire options and confirm material, dimensions, and supply details for your application.",
        image: "/strip-wire.jpg",
        imageAlt: "Coiled electrical strip wire",
        ctaLabel: "Explore Product",
        destinationUrl: "/product/strip-wire",
        publicationStatus: "published",
        imageFit: "cover",
        details: {
          categoryLabel: "Wire products",
          bannerImage: "/strip-wire.jpg",
          introductionHeading: "Strip wire to match your requirements",
          introduction:
            "Review strip wire options for electrical and industrial applications. Share the required profile and use case so material, dimensions, tolerances, and supply details can be confirmed before selection.",
          features: [
            "Product details reviewed against the intended application",
            "Profile and dimensions confirmed for the selected requirement",
            "Material and applicable standard confirmed during enquiry",
            "Supply and packaging options discussed with the project team",
          ],
          specifications: [
            { label: "Profile and dimensions", value: "Confirm with our team" },
            { label: "Material", value: "Confirm for the selected requirement" },
            { label: "Applicable standard", value: "Confirm for project" },
            { label: "Supply format", value: "Discuss with our team" },
          ],
          specificationNote:
            "Detailed technical values are not provided here. Request the current product datasheet for verified options.",
          applications: [
            {
              title: "Electrical assemblies",
              description:
                "Discuss profile and material requirements for electrical assembly applications.",
            },
            {
              title: "Industrial production",
              description:
                "Review strip dimensions and supply needs against the production process.",
            },
            {
              title: "Project-specific supply",
              description:
                "Confirm tolerances, standards, quantities, and delivery requirements before ordering.",
            },
          ],
          imageCaption:
            "Temporary reference image for strip wire products.",
          ctaHeading: "Looking for a strip wire configuration?",
          ctaDescription:
            "Share your required profile, dimensions, and quantity so our team can review the available options.",
          ctaLabel: "Enquire About Strip Wire",
        },
      },
      {
        name: "Super Enamelled Wire",
        slug: "super-enamelled-wire",
        routeSlug: "super-enamelled-wire",
        category: "wires",
        description:
          "Super enamelled wire for applicable electrical winding requirements, with technical details confirmed by configuration.",
        image: "/super-enamelled.jpg",
        imageAlt: "Spools of enamelled copper winding wire",
        ctaLabel: "Explore Product",
        destinationUrl: "/product/super-enamelled-wire",
        publicationStatus: "published",
        imageFit: "cover",
        details: {
          categoryLabel: "Wire products",
          bannerImage: "/super-enamelled.jpg",
          introductionHeading: "Super enamelled wire for winding applications",
          introduction:
            "Explore super enamelled wire for electrical winding requirements. Wire dimensions, conductor material, insulation class, and applicable standards vary by specification and should be confirmed for the intended equipment.",
          features: [
            "For applicable electrical winding requirements",
            "Conductor dimensions confirmed for the selected specification",
            "Insulation details reviewed against operating conditions",
            "Technical datasheet and supply details available by enquiry",
          ],
          specifications: [
            { label: "Conductor dimensions", value: "Confirm with our team" },
            { label: "Insulation class", value: "Confirm for the application" },
            { label: "Applicable standard", value: "Confirm for project" },
            { label: "Packaging and quantity", value: "Discuss with our team" },
          ],
          specificationNote:
            "Detailed technical values are not provided here. Request the current product datasheet for verified options.",
          applications: [
            {
              title: "Electrical windings",
              description:
                "Review wire dimensions and insulation requirements for the intended winding design.",
            },
            {
              title: "Electrical equipment",
              description:
                "Confirm operating conditions and applicable technical requirements before selection.",
            },
            {
              title: "Production procurement",
              description:
                "Discuss quantity, packaging, and delivery schedule for ongoing manufacturing needs.",
            },
          ],
          imageCaption:
            "Temporary reference image for super enamelled winding wire.",
          ctaHeading: "Request winding wire details",
          ctaDescription:
            "Share your required dimensions and insulation requirements to receive product information for review.",
          ctaLabel: "Enquire About Enamelled Wire",
        },
      },
      {
        name: "Conductor & Cable",
        slug: "conductor-cable",
        routeSlug: "conductor-cable",
        category: "wires",
        description:
          "Conductor and cable categories for electrical distribution and infrastructure requirements.",
        image: "/conductor-cable.jpg",
        imageAlt: "Electrical cables with visible conductor strands",
        ctaLabel: "Explore Product",
        destinationUrl: "/product/conductor-cable",
        publicationStatus: "published",
        imageFit: "cover",
        details: {
          categoryLabel: "Conductors & cables",
          bannerImage: "/conductor-cable.jpg",
          introductionHeading: "Conductor and cable options",
          introduction:
            "Explore conductor and cable categories for electrical distribution and infrastructure projects. Share the voltage class, installation conditions, and project standards to confirm an appropriate product configuration.",
          features: [
            "Options reviewed against the intended distribution application",
            "Conductor type and construction confirmed for project",
            "Applicable standards and installation conditions reviewed",
            "Quantity and delivery planning discussed during enquiry",
          ],
          specifications: [
            { label: "Conductor type", value: "Confirm for project" },
            { label: "Voltage class and construction", value: "Confirm with our team" },
            { label: "Applicable standard", value: "Confirm for project" },
            { label: "Supply length and packaging", value: "Discuss with our team" },
          ],
          specificationNote:
            "Detailed technical values are not provided here. Request the current product datasheet for verified options.",
          applications: [
            {
              title: "Electrical distribution",
              description:
                "Discuss conductor and cable requirements for distribution networks.",
            },
            {
              title: "Infrastructure projects",
              description:
                "Review project standards, installation conditions, and delivery needs.",
            },
            {
              title: "Utility procurement",
              description:
                "Confirm technical schedules, quantities, and delivery plans with our team.",
            },
          ],
          imageCaption:
            "Temporary reference image for electrical conductors and cables.",
          ctaHeading: "Planning a conductor or cable order?",
          ctaDescription:
            "Share your project schedule and technical requirements for a product discussion.",
          ctaLabel: "Enquire About Conductors",
        },
      },
      {
        name: "Cable Wires & Transmission Hardware",
        slug: "cable-wires",
        routeSlug: "cable-wires",
        category: "wires",
        description:
          "A portfolio of wire, earthing, stay, and overhead conductor products for electrical infrastructure projects.",
        image: "/product-hero.png",
        imageAlt: "Electrical conductors, cables, and infrastructure in a utility setting",
        ctaLabel: "View Portfolio",
        destinationUrl: "/product/cable-wires",
        publicationStatus: "published",
        imageFit: "cover",
        details: {
          categoryLabel: "Wire & cable portfolio",
          bannerImage: "/product-hero.png",
          introductionHeading: "Wire and cable products for infrastructure",
          introduction:
            "Explore the wire and conductor portfolio, including high-tensile prestressing wire, continuous GI earth wire, galvanized stay wire, and overhead distribution conductors. Confirm the applicable product, standard, and configuration against your project requirements.",
          features: [
            "Multiple wire and conductor product categories",
            "Technical information reviewed against the selected product",
            "Project-specific standards and configurations confirmed by enquiry",
            "Product and delivery requirements coordinated with the project team",
          ],
          specifications: [
            { label: "Product range", value: "Prestressing, earth, stay, and overhead conductor products" },
            { label: "Applicable standards", value: "Product-specific; confirm for project" },
            { label: "Dimensions and grade", value: "Confirm for selected product" },
            { label: "Supply and delivery", value: "Discuss with our team" },
          ],
          specificationNote:
            "Specifications vary by product. Request the relevant technical datasheet to confirm current values and standards.",
          portfolioItems: [
            {
              title: "High-tensile prestressing wire",
              standard: "IS 1785 (Part-I) : 1983",
              specification: "4.00 mm diameter | UTS 1750 N/mm²",
              description:
                "High-carbon steel prestressing wire for use in concrete products. Confirm the selected grade and requirements for your project.",
              features: [
                "Plain and indented surface options",
                "Elongation at gauge length: > 4.0%",
                "Relaxation testing information available by enquiry",
              ],
            },
            {
              title: "Continuous galvanized iron earth wire",
              standard: "IS 280 / IS 4826",
              specification: "4.00 mm continuous internal conductor",
              description:
                "GI earth wire used to connect pole lightning protection and grounding points. Confirm routing and coating requirements for the selected product.",
              features: [
                "4.00 mm galvanized iron wire",
                "Zinc coating class to be confirmed against the order",
                "Internal routing in applicable pole configurations",
              ],
            },
            {
              title: "Galvanized stay wire and guy strands",
              standard: "IS 2141 : 2000",
              specification: "7/8 SWG, 7/10 SWG, and 7/12 SWG strands",
              description:
                "Multi-strand galvanized wire for anchoring structures at angle locations, dead-ends, and crossings. Confirm strand size and load requirements for the installation.",
              features: [
                "Tensile grade to be confirmed by configuration",
                "Galvanized coating for the intended environment",
                "Strand and breaking-load details available by enquiry",
              ],
            },
            {
              title: "Overhead distribution conductors",
              standard: "IS 398 (Part-II & Part-IV)",
              specification: "ACSR and AAAC conductor categories",
              description:
                "Overhead distribution conductor options for low-tension and high-tension feeder projects. Confirm conductor size, voltage class, and line conditions.",
              features: [
                "ACSR and AAAC product categories",
                "Conductor selection based on project requirements",
                "Corrosion-protection requirements can be discussed",
              ],
            },
          ],
          applications: [
            {
              title: "Pole and utility projects",
              description:
                "Discuss prestressing and earthing wire requirements for utility infrastructure.",
            },
            {
              title: "Overhead distribution",
              description:
                "Review conductor options and project conditions for overhead distribution networks.",
            },
            {
              title: "Structural anchoring",
              description:
                "Confirm stay wire requirements for the relevant structure and installation.",
            },
          ],
          imageCaption:
            "Temporary reference image showing conductors and cable products in an infrastructure setting.",
          ctaHeading: "Need help selecting a wire product?",
          ctaDescription:
            "Tell us which product category you need and share the relevant technical or project documents.",
          ctaLabel: "Request Product Information",
        },
      },
    ],
  },
];

export function getProductFamily(familyId: ProductFamilyId): ProductFamily {
  const family = productFamilies.find((entry) => entry.id === familyId);

  if (!family) {
    throw new Error(`Missing product family "${familyId}".`);
  }

  return family;
}

export const products = productFamilies.flatMap((family) => family.products);

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
    highlights: [
      ...product.details.features.slice(0, 2),
      ...product.details.specifications.slice(0, 1).map(
        (specification) => `${specification.label}: ${specification.value}`,
      ),
    ],
    supplyNotice: product.supplyNotice,
  };
}

const psccPoleProduct = products.find(
  (product) => product.routeSlug === "pscc-poles",
);

if (!psccPoleProduct?.details.specificationTable) {
  throw new Error("PSCC pole specifications are required for the product catalogue.");
}

function psccLengthSlug(length: string): string {
  return `${length
    .replace(/\s*m$/i, "")
    .trim()
    .replace(/\.0$/, "")
    .replace(".", "-")}m`;
}

const poleConfigurationCards: ProductCardProduct[] =
  psccPoleProduct.details.specificationTable.map((specification) => ({
    // Keep the existing length-level cards while giving each its own detail route.
    name: `${specification.length} PSCC Utility Pole`,
    slug: specification.anchorId,
    category: "poles",
    categoryLabel: `PSCC pole · ${specification.length}`,
    description: `Working load ${specification.workingLoad}. ${specification.application}.`,
    image: psccPoleProduct.image,
    imageAlt: psccPoleProduct.imageAlt,
    ctaLabel: "View Specifications",
    destinationUrl: `/product/pscc-pole-${psccLengthSlug(specification.length)}-configurations`,
    imageFit: psccPoleProduct.imageFit,
    imagePosition: psccPoleProduct.imagePosition,
    highlights: [
      `Working load: ${specification.workingLoad}`,
      `Ultimate load: ${specification.ultimateLoad}`,
      `Planting depth: ${specification.plantingDepth}`,
    ],
  }));

export const productListingItems: ProductCardProduct[] = products.flatMap(
  (product) => {
    if (product.category === "wires") {
      return [toProductCardProduct(product)];
    }

    return product.slug === psccPoleProduct.slug
      ? [toProductCardProduct(product), ...poleConfigurationCards]
      : [toProductCardProduct(product)];
  },
);

function temporaryVariants(
  categoryLabel: string,
  productName: string,
): ProductCatalogueVariant[] {
  return Array.from({ length: 12 }, (_, index) => {
    const option = String(index + 1).padStart(2, "0");
    const name = `${productName} - Configuration ${option}`;

    return {
      routeSlug: `${categoryLabel}-${option}`
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, ""),
      name,
      description: `Temporary catalogue option ${option} for ${categoryLabel.toLowerCase()}. Confirm dimensions, material, applicable standards, and availability with our team before ordering.`,
      highlights: [
        `Configuration ${option} - technical details to be confirmed`,
        "Request the current product datasheet",
        "Suitability confirmed against project requirements",
      ],
      specifications: [
        { label: "Product name", value: name },
        { label: "Product code", value: "To Be Updated" },
        { label: "Overall length", value: "To Be Updated" },
        { label: "Working load", value: "To Be Updated" },
        { label: "Ultimate load", value: "To Be Updated" },
        { label: "Dimensions", value: "To Be Updated" },
        { label: "Material and grade", value: "To Be Updated" },
        { label: "Applicable standards", value: "To Be Updated" },
      ],
      specificationStatus: "temporary",
      drawing: {
        views: ["Engineering drawing to be supplied"],
        notes: ["Original technical drawing: To Be Updated"],
      },
    };
  });
}

function createCataloguePage(
  routeSlug: string,
  title: string,
  productRouteSlug: string,
  variants: ProductCatalogueVariant[],
  images: ProductCatalogueImage[],
): ProductCataloguePage {
  const product = products.find((entry) => entry.routeSlug === productRouteSlug);

  if (!product) {
    throw new Error(`Missing product data for catalogue page "${routeSlug}".`);
  }

  if (variants.length === 0) {
    throw new Error(`Catalogue page "${routeSlug}" must contain at least one item.`);
  }

  if (images.length === 0) {
    throw new Error(`Catalogue page "${routeSlug}" must have at least one image.`);
  }

  return {
    routeSlug,
    title,
    productRouteSlug,
    description:
      routeSlug === "pscc-poles"
        ? "Browse individual PSC pole configurations. Supplied specifications are shown for selected products; other technical values remain To Be Updated."
        : `Browse ${title.toLowerCase()} configurations. These catalogue options are temporary; confirm product specifications and availability with our team.`,
    variants,
    images,
  };
}

const poleCatalogueImages: ProductCatalogueImage[] = [
  {
    image: "/PSC-pole.jpg",
    imageAlt: "Pre-stressed concrete utility pole carrying overhead lines",
  },
  {
    image: "/hero.png",
    imageAlt: "Concrete utility poles and power distribution infrastructure",
  },
  {
    image: "/PSC-pole.jpg",
    imageAlt: "Pre-stressed cement concrete pole for utility distribution",
  },
  {
    image: "/hero.png",
    imageAlt: "Utility pole range in an electrical infrastructure setting",
  },
];

const railCatalogueImages: ProductCatalogueImage[] = [
  {
    image: "/rail-pole.avif",
    imageAlt: "Railway electrification pole with overhead catenary equipment",
  },
  {
    image: "/product-hero.png",
    imageAlt: "Railway power infrastructure with poles and conductors",
  },
];

const wireCatalogueImages: ProductCatalogueImage[] = [
  {
    image: "/dpc-wire.jpg",
    imageAlt: "Multicolour electrical wires arranged on a reel",
  },
  {
    image: "/strip-wire.jpg",
    imageAlt: "Copper winding wire spools",
  },
  {
    image: "/super-enamelled.jpg",
    imageAlt: "Insulated electrical conductors with copper strands",
  },
  {
    image: "/conductor-cable.jpg",
    imageAlt: "Stranded copper conductors in insulated cables",
  },
  {
    image: "/product-hero.png",
    imageAlt: "Electrical conductors and cable reels for infrastructure",
  },
  {
    image: "/hero.png",
    imageAlt: "Electrical wire coils and utility infrastructure",
  },
];

const psccProduct = products.find((product) => product.routeSlug === "pscc-poles");

if (!psccProduct?.details.specificationTable) {
  throw new Error("PSCC pole specifications are required for its catalogue page.");
}

const psccProductDescription = psccProduct.description;

function temporaryPoleSpecifications(
  name: string,
  length: string,
  workingLoad: string,
): ProductSpecification[] {
  return [
    { label: "Product name", value: name },
    { label: "Product code", value: "To Be Updated" },
    { label: "Overall length", value: length || "To Be Updated" },
    { label: "Working load", value: workingLoad || "To Be Updated" },
    { label: "Ultimate load", value: "To Be Updated" },
    { label: "Top section dimensions", value: "To Be Updated" },
    { label: "Bottom section dimensions", value: "To Be Updated" },
    { label: "Concrete grade and quantity", value: "To Be Updated" },
    { label: "Planting depth", value: "To Be Updated" },
    { label: "Prestressing wire", value: "To Be Updated" },
    { label: "Reinforcement details", value: "To Be Updated" },
    { label: "Clear cover and factor of safety", value: "To Be Updated" },
    { label: "Theoretical weight and load point", value: "To Be Updated" },
    { label: "Earth wire details", value: "To Be Updated" },
  ];
}

function makeVerifiedPoleVariant(
  routeSlug: string,
  name: string,
  specs: ProductSpecification[],
  views: string[],
  highlights: string[],
): ProductCatalogueVariant {
  return {
    routeSlug,
    name,
    detailTitle: name,
    description: psccProductDescription,
    highlights,
    specifications: specs,
    specificationStatus: "verified",
    drawing: {
      views,
      notes: ["Original engineering drawing: To Be Updated (not accessible in the current project files)."],
    },
  };
}

const verifiedPoleVariants: ProductCatalogueVariant[] = [
  makeVerifiedPoleVariant(
    "pscc-pole-9m-300kg",
    "GA of 9.0 MTR / 300 KG PSC Pole (100 mm Width Pole)",
    [
      { label: "Product name", value: "GA of 9.0 MTR / 300 KG PSC Pole (100 mm Width Pole)" },
      { label: "Product code", value: "To Be Updated" },
      { label: "Overall length", value: "9.0 MTR" },
      { label: "Working load", value: "300 KG" },
      { label: "Ultimate load", value: "To Be Updated" },
      { label: "Top section dimensions", value: "185 × 100 MM" },
      { label: "Bottom section dimensions", value: "355 × 100 MM" },
      { label: "Concrete grade", value: "M-40" },
      { label: "Concrete quantity", value: "To Be Updated" },
      { label: "Planting depth", value: "1500 MM" },
      { label: "Prestressing wire diameter", value: "4 MM" },
      { label: "Number of tensioned wires", value: "20 Nos." },
      { label: "Number of untensioned wires", value: "To Be Updated" },
      { label: "Pre-tension applied to each wire", value: "To Be Updated" },
      { label: "Clear cover", value: "22 MM" },
      { label: "Factor of safety", value: "2.5" },
      { label: "Theoretical weight", value: "To Be Updated" },
      { label: "Load application point", value: "To Be Updated" },
      { label: "Minimum concrete cube strength", value: "To Be Updated" },
      { label: "G.I. earth wire", value: "6 SWG, 1 No." },
      { label: "Ultimate tensile strength of prestressing wire", value: "17500 KG/CM²" },
    ],
    ["Elevation", "Side View", "Top Plan", "Section A-A", "Bottom Plan"],
    ["9.0 MTR overall length", "300 KG working load", "100 mm width pole"],
  ),
  makeVerifiedPoleVariant(
    "pscc-pole-9m-400kg",
    "Reinforcement Details of 9.0M / 400KG Prestressed Cement Concrete Pole",
    [
      { label: "Product name", value: "Reinforcement Details of 9.0M / 400KG Prestressed Cement Concrete Pole" },
      { label: "Product code", value: "To Be Updated" },
      { label: "Overall length", value: "9.0 MTR" },
      { label: "Working load", value: "400 KG" },
      { label: "Ultimate load", value: "800 KG" },
      { label: "Top section dimensions", value: "225 × 100 MM" },
      { label: "Bottom section dimensions", value: "395 × 100 MM" },
      { label: "Concrete quantity", value: "0.279 M³" },
      { label: "Concrete grade", value: "M-400" },
      { label: "Planting depth", value: "1.5 MTR" },
      { label: "Prestressing wire diameter", value: "4 MM" },
      { label: "Number of tensioned wires", value: "20 Nos." },
      { label: "Number of untensioned wires", value: "To Be Updated" },
      { label: "Pre-tension applied to each wire", value: "1760 KG" },
      { label: "Minimum cube strength at 28 days", value: "400 KG/CM²" },
      { label: "Clear cover", value: "20 MM" },
      { label: "Factor of safety", value: "2.0" },
      { label: "Theoretical weight", value: "697 KG" },
      { label: "Load application point", value: "600 MM from Top" },
      { label: "G.I. earth wire", value: "To Be Updated" },
      { label: "Ultimate tensile strength of 4 MM wire", value: "17500 KG/CM²" },
    ],
    ["Elevation", "Side View", "Plan at Top", "Section A-A", "Plan at Bottom"],
    ["9.0 MTR overall length", "400 KG working load", "800 KG ultimate load"],
  ),
  makeVerifiedPoleVariant(
    "pscc-pole-8m-200kg",
    "Reinforcement Details of 8.0M / 200KG Prestressed Cement Concrete Pole",
    [
      { label: "Product name", value: "Reinforcement Details of 8.0M / 200KG Prestressed Cement Concrete Pole" },
      { label: "Product code", value: "To Be Updated" },
      { label: "Overall length", value: "8.0 MTR" },
      { label: "Working load", value: "200 KG" },
      { label: "Ultimate load", value: "500 KG" },
      { label: "Top section dimensions", value: "145 × 90 MM" },
      { label: "Bottom section dimensions", value: "290 × 90 MM" },
      { label: "Concrete quantity", value: "0.157 M³" },
      { label: "Concrete grade", value: "M-42" },
      { label: "Planting depth", value: "1.5 MTR" },
      { label: "Prestressing wire diameter", value: "4 MM" },
      { label: "Number of tensioned wires", value: "12 Nos." },
      { label: "Number of untensioned wires", value: "2 Nos." },
      { label: "Pre-tension applied to each wire", value: "1760 KG" },
      { label: "Minimum cube strength at 28 days", value: "420 KG/CM²" },
      { label: "Clear cover", value: "20 MM" },
      { label: "Factor of safety", value: "2.5" },
      { label: "Theoretical weight", value: "380 KG" },
      { label: "Load application point", value: "600 MM from Top" },
      { label: "G.I. earth wire", value: "To Be Updated" },
      { label: "Ultimate tensile strength of 4 MM wire", value: "17500 KG/CM²" },
    ],
    ["Elevation", "Side View", "Plan at Top", "Plan at A-A", "Plan at Bottom"],
    ["8.0 MTR overall length", "200 KG working load", "500 KG ultimate load"],
  ),
];

const verifiedPoleVariantsBySlug = new Map(
  verifiedPoleVariants.map((variant) => [variant.routeSlug, variant]),
);

const psccVariants: ProductCatalogueVariant[] =
  psccProduct.details.specificationTable.flatMap((specification) => {
    const workingLoads = specification.workingLoad.split(" / ");
    const lengthForSlug = psccLengthSlug(specification.length);

    return workingLoads.map((workingLoad) => {
      const loadForSlug = workingLoad.replace(/[^0-9]/g, "");
      const routeSlug = `pscc-pole-${lengthForSlug}-${loadForSlug}kg`;
      const name = `${specification.length} PSCC Utility Pole - ${workingLoad}`;
      const verifiedVariant = verifiedPoleVariantsBySlug.get(routeSlug);

      return (
        (verifiedVariant
          ? {
              ...verifiedVariant,
              name,
              specificationAnchor: specification.anchorId,
            }
          : undefined) ?? {
          routeSlug,
          name,
          description: `Temporary product configuration. Working load ${workingLoad}; confirm all technical specifications before ordering.`,
          highlights: [
            `Length: ${specification.length}`,
            `Working load: ${workingLoad}`,
            "Technical data: To Be Updated",
          ],
          specifications: temporaryPoleSpecifications(
            name,
            specification.length,
            workingLoad,
          ),
          specificationStatus: "temporary" as const,
          drawing: {
            views: ["Engineering drawing to be supplied"],
            notes: ["Original technical drawing: To Be Updated"],
          },
          specificationAnchor: specification.anchorId,
        }
      );
    });
  });

psccVariants.push(
  ...verifiedPoleVariants.filter(
    (variant) => !psccVariants.some((existing) => existing.routeSlug === variant.routeSlug),
  ),
  {
    routeSlug: "pscc-pole-custom-requirement-a",
    name: "PSCC Utility Pole - Custom Requirement A",
    description:
      "Temporary enquiry option for project-specific PSCC pole requirements. Dimensions and load details must be confirmed by our team.",
    highlights: [
      "Custom dimensions to be confirmed",
      "Load configuration to be confirmed",
      "Request a project-specific technical review",
    ],
    specifications: temporaryPoleSpecifications(
      "PSCC Utility Pole - Custom Requirement A",
      "",
      "",
    ),
    specificationStatus: "temporary",
    drawing: {
      views: ["Engineering drawing to be supplied"],
      notes: ["Original technical drawing: To Be Updated"],
    },
  },
  {
    routeSlug: "pscc-pole-custom-requirement-b",
    name: "PSCC Utility Pole - Custom Requirement B",
    description:
      "Temporary enquiry option for project-specific PSCC pole requirements. Dimensions and load details must be confirmed by our team.",
    highlights: [
      "Custom dimensions to be confirmed",
      "Load configuration to be confirmed",
      "Request a project-specific technical review",
    ],
    specifications: temporaryPoleSpecifications(
      "PSCC Utility Pole - Custom Requirement B",
      "",
      "",
    ),
    specificationStatus: "temporary",
    drawing: {
      views: ["Engineering drawing to be supplied"],
      notes: ["Original technical drawing: To Be Updated"],
    },
  },
);

export const productCataloguePages: ProductCataloguePage[] = [
  createCataloguePage(
    "pscc-poles",
    "PSC Poles",
    "pscc-poles",
    psccVariants,
    poleCatalogueImages,
  ),
  createCataloguePage(
    "rail-poles",
    "Rail Poles",
    "rail-poles",
    temporaryVariants("rail poles", "Rail Pole"),
    railCatalogueImages,
  ),
  createCataloguePage(
    "dpc-wire",
    "DPC Wire",
    "dpc-wire",
    temporaryVariants("DPC wire", "DPC Wire"),
    wireCatalogueImages,
  ),
  createCataloguePage(
    "strip-wire",
    "Strip Wire",
    "strip-wire",
    temporaryVariants("strip wire", "Strip Wire"),
    wireCatalogueImages,
  ),
  createCataloguePage(
    "super-enamelled-wire",
    "Super Enamelled Wire",
    "super-enamelled-wire",
    temporaryVariants("super enamelled wire", "Super Enamelled Wire"),
    wireCatalogueImages,
  ),
  createCataloguePage(
    "conductor-cable",
    "Conductor & Cable",
    "conductor-cable",
    temporaryVariants("conductor and cable", "Conductor & Cable"),
    wireCatalogueImages,
  ),
  createCataloguePage(
    "cable-wires",
    "Wire & Cable Portfolio",
    "cable-wires",
    temporaryVariants("wire and cable products", "Wire & Cable"),
    wireCatalogueImages,
  ),
];

export function getProductCataloguePage(routeSlug: string) {
  return productCataloguePages.find((page) => page.routeSlug === routeSlug);
}

export function getCatalogueCardProducts(
  cataloguePage: ProductCataloguePage,
): ProductCardProduct[] {
  const product = products.find(
    (entry) => entry.routeSlug === cataloguePage.productRouteSlug,
  );

  if (!product) {
    throw new Error(
      `Missing product data for catalogue page "${cataloguePage.routeSlug}".`,
    );
  }

  return cataloguePage.variants.map((variant, index) => {
    const catalogueImage = cataloguePage.images[index % cataloguePage.images.length];
    const imagePosition = ["50% 50%", "35% 50%", "65% 50%"][
      Math.floor(index / cataloguePage.images.length) % 3
    ];

    return {
      name: variant.name,
      slug: variant.routeSlug,
      category: product.category,
      categoryLabel: cataloguePage.title,
      description: variant.description,
      image: catalogueImage.image,
      imageAlt: catalogueImage.imageAlt,
      ctaLabel: "View Details",
      destinationUrl: `/product/${variant.routeSlug}`,
      imageFit: "cover" as const,
      imagePosition,
      highlights: variant.highlights,
      supplyNotice: product.supplyNotice,
    };
  });
}

function getCatalogueProductEntries(): ProductEntry[] {
  return productCataloguePages.flatMap((cataloguePage) => {
    const parentProduct = products.find(
      (product) => product.routeSlug === cataloguePage.productRouteSlug,
    );

    if (!parentProduct) {
      throw new Error(
        `Missing product data for catalogue page "${cataloguePage.routeSlug}".`,
      );
    }

    return cataloguePage.variants.map((variant, index) => {
      const image = cataloguePage.images[index % cataloguePage.images.length];
      const name = variant.detailTitle ?? variant.name;
      const isVerified = variant.specificationStatus === "verified";

      return {
        ...parentProduct,
        name,
        slug: variant.routeSlug,
        routeSlug: variant.routeSlug,
        description: variant.description,
        image: image.image,
        imageAlt: image.imageAlt,
        technicalDataStatus: variant.specificationStatus,
        technicalSpecifications: variant.specifications,
        technicalDrawing: variant.drawing,
        details: {
          ...parentProduct.details,
          categoryLabel: cataloguePage.title,
          bannerImage: image.image,
          introductionHeading: name,
          introduction: variant.description,
          features: variant.highlights,
          specifications: variant.specifications,
          specificationTable: undefined,
          specificationNote: isVerified
            ? "Specifications are transcribed from the supplied product data. The original drawing image is not accessible in the current project files."
            : "Temporary product page. Unavailable technical values and engineering drawings are marked To Be Updated.",
          imageCaption: image.imageAlt,
        },
      };
    });
  });
}

function getPoleLengthPageEntries(): ProductEntry[] {
  const parentProduct = psccPoleProduct;
  const specificationRows = parentProduct?.details.specificationTable;

  if (!parentProduct || !specificationRows) {
    return [];
  }

  return specificationRows.map((specification) => {
    const lengthSlug = psccLengthSlug(specification.length);
    const name = `${specification.length} PSCC Utility Pole`;
    const routeSlug = `pscc-pole-${lengthSlug}-configurations`;
    const specifications = temporaryPoleSpecifications(
      name,
      specification.length,
      specification.workingLoad,
    );

    return {
      ...parentProduct,
      name,
      slug: routeSlug,
      routeSlug,
      description:
        `Temporary length-level catalogue page for ${specification.length} PSC poles. ` +
        "Confirm the selected working-load configuration and technical data before ordering.",
      technicalDataStatus: "temporary" as const,
      technicalSpecifications: specifications,
      technicalDrawing: {
        views: ["Engineering drawing to be supplied"],
        notes: ["Original technical drawing: To Be Updated"],
      },
      details: {
        ...parentProduct.details,
        categoryLabel: `PSC pole · ${specification.length}`,
        introductionHeading: name,
        introduction:
          `Available working-load options shown in the catalogue: ${specification.workingLoad}. ` +
          "Other technical values are To Be Updated until a product drawing is supplied.",
        features: [
          `Overall length: ${specification.length}`,
          `Working load options: ${specification.workingLoad}`,
          "Other technical data: To Be Updated",
        ],
        specifications,
        specificationTable: undefined,
        specificationNote:
          "This length-level page is temporary. Select a working-load product card for its individual detail page.",
      },
    };
  });
}

export const productDetailEntries: ProductEntry[] = [
  ...products.map((product) => ({
    ...product,
    technicalDataStatus: "temporary" as const,
    technicalSpecifications: product.details.specifications,
    details:
      product.routeSlug === "pscc-poles"
        ? { ...product.details, specificationTable: undefined }
        : product.details,
  })),
  ...getPoleLengthPageEntries(),
  ...getCatalogueProductEntries(),
];

const uniqueDetailSlugs = new Set(
  productDetailEntries.map((product) => product.routeSlug),
);

if (uniqueDetailSlugs.size !== productDetailEntries.length) {
  throw new Error("Product detail routes must have unique slugs.");
}

export function getRelatedProductCards(
  currentRouteSlug: string,
  category: ProductFamilyId,
): ProductCardProduct[] {
  return productListingItems
    .filter(
      (product) =>
        product.category === category &&
        product.slug !== currentRouteSlug &&
        product.destinationUrl !== `/product/${currentRouteSlug}`,
    )
    .slice(0, 3);
}

export function getProductByRouteSlug(routeSlug: string) {
  return productDetailEntries.find((product) => product.routeSlug === routeSlug);
}
