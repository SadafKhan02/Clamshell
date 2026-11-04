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
  imageFit?: "cover" | "contain";
  imagePosition?: string;
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
}

export interface ProductCatalogueVariant {
  name: string;
  description: string;
  highlights: string[];
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
  };
}

const psccPoleProduct = products.find(
  (product) => product.routeSlug === "pscc-poles",
);

if (!psccPoleProduct?.details.specificationTable) {
  throw new Error("PSCC pole specifications are required for the product catalogue.");
}

const poleConfigurationCards: ProductCardProduct[] =
  psccPoleProduct.details.specificationTable.map((specification) => ({
    name: `${specification.length} PSCC Utility Pole`,
    slug: specification.anchorId,
    category: "poles",
    categoryLabel: `PSCC pole · ${specification.length}`,
    description: `Working load ${specification.workingLoad}. ${specification.application}.`,
    image: psccPoleProduct.image,
    imageAlt: psccPoleProduct.imageAlt,
    ctaLabel: "View Specifications",
    destinationUrl: `${psccPoleProduct.destinationUrl}#${specification.anchorId}`,
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

    return {
      name: `${productName} - Configuration ${option}`,
      description: `Temporary catalogue option ${option} for ${categoryLabel.toLowerCase()}. Confirm dimensions, material, applicable standards, and availability with our team before ordering.`,
      highlights: [
        `Configuration ${option} - technical details to be confirmed`,
        "Request the current product datasheet",
        "Suitability confirmed against project requirements",
      ],
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

  if (variants.length !== 12) {
    throw new Error(`Catalogue page "${routeSlug}" must contain exactly 12 items.`);
  }

  if (images.length === 0) {
    throw new Error(`Catalogue page "${routeSlug}" must have at least one image.`);
  }

  return {
    routeSlug,
    title,
    productRouteSlug,
    description: `Browse ${title.toLowerCase()} configurations. These catalogue options are temporary; confirm product specifications and availability with our team.`,
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
    image: "/rail-pole.avif",
    imageAlt: "Railway electrification pole with overhead catenary equipment",
  },
  {
    image: "/hero.png",
    imageAlt: "Concrete utility poles and power distribution infrastructure",
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

const psccVariants: ProductCatalogueVariant[] =
  psccProduct.details.specificationTable.flatMap((specification) => {
    const workingLoads = specification.workingLoad.split(" / ");
    const ultimateLoads = specification.ultimateLoad.split(" / ");

    return workingLoads.map((workingLoad, index) => ({
      name: `${specification.length} PSCC Utility Pole - ${workingLoad}`,
      description: `Working load ${workingLoad}; ultimate load ${ultimateLoads[index] ?? "confirm for configuration"}. ${specification.application}. Confirm final dimensions and project requirements before ordering.`,
      highlights: [
        `Working load: ${workingLoad}`,
        `Ultimate load: ${ultimateLoads[index] ?? "Confirm for configuration"}`,
        `Planting depth: ${specification.plantingDepth}`,
      ],
      specificationAnchor: specification.anchorId,
    }));
  });

psccVariants.push(
  {
    name: "PSCC Utility Pole - Custom Requirement A",
    description:
      "Temporary enquiry option for project-specific PSCC pole requirements. Dimensions and load details must be confirmed by our team.",
    highlights: [
      "Custom dimensions to be confirmed",
      "Load configuration to be confirmed",
      "Request a project-specific technical review",
    ],
  },
  {
    name: "PSCC Utility Pole - Custom Requirement B",
    description:
      "Temporary enquiry option for project-specific PSCC pole requirements. Dimensions and load details must be confirmed by our team.",
    highlights: [
      "Custom dimensions to be confirmed",
      "Load configuration to be confirmed",
      "Request a project-specific technical review",
    ],
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
    poleCatalogueImages,
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
      slug: `${cataloguePage.routeSlug}-${String(index + 1).padStart(2, "0")}`,
      category: product.category,
      categoryLabel: cataloguePage.title,
      description: variant.description,
      image: catalogueImage.image,
      imageAlt: catalogueImage.imageAlt,
      ctaLabel: "View Details",
      destinationUrl: variant.specificationAnchor
        ? `${product.destinationUrl}#${variant.specificationAnchor}`
        : product.destinationUrl,
      imageFit: "cover" as const,
      imagePosition,
      highlights: variant.highlights,
    };
  });
}

export function getProductByRouteSlug(routeSlug: string) {
  return products.find((product) => product.routeSlug === routeSlug);
}
