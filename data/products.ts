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
  manufacturingProcess?: string[];
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

const railImage = "/rail-pole.avif";

function createPole(
  name: string,
  slug: string,
  image: string,
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
    image,
    imageAlt: `${name} PSC pole product image`,
    ctaLabel: "View Details",
    destinationUrl: `/product/${slug}`,
    publicationStatus: "published",
    imageFit: "cover",
    details: {
      categoryLabel: "PSC Poles",
      bannerImage: image,
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
  subtitle: string,
  description: string,
  features: string[],
  applications: string[],
  manufacturingProcess: string[],
  status = "Proposed Product",
): ProductEntry {
  const imageAltBySlug: Record<string, string> = {
    "ab-cable": "Reference photograph of insulated multicolour cable cores with exposed copper conductors; not a product-specific AB Cable photograph.",
    conductor: "Reference photograph of insulated cable cores with exposed copper conductors; not a product-specific bare conductor photograph.",
    "enamelled-flat-wire": "Reference photograph of coloured insulated electrical wire wound on a spool; not an enamelled flat wire photograph.",
    "dpc-strip": "Reference photograph of coloured insulated electrical wire wound on a spool; not a paper-covered strip photograph.",
    "super-enamelled-wire": "Several spools of reddish-brown enamelled winding wire.",
    "dpc-wire": "Reference photograph of bundled copper cable ends; not a paper-covered wire photograph.",
  };
  return {
    name,
    slug,
    routeSlug: slug,
    category: "wires",
    description,
    image,
    imageAlt: imageAltBySlug[slug],
    ctaLabel: "View Details",
    destinationUrl: `/product/${slug}`,
    publicationStatus: "proposed",
    imageFit: "contain",
    details: {
      categoryLabel: "Wire & Cable",
      bannerImage: image,
      introductionHeading: subtitle,
      introduction: description,
      features,
      manufacturingProcess,
      specifications: [{ label: "Project status", value: status }],
      specificationNote:
        "This is a proposed product category. Manufacturing has not commenced; technical dimensions and specifications are subject to project development.",
      applications: applications.map((title) => ({ title, description: "" })),
      imageCaption: "Product reference image; replace with an approved product-specific photograph when available.",
      ctaHeading: `Enquire about ${name}`,
      ctaDescription:
        "Share project requirements for discussion. This product is part of the proposed expansion.",
      ctaLabel: "Product Enquiry",
      projectStatus: status,
    },
  };
}

const pscProducts: ProductEntry[] = [
  createPole("8 m 140 kg W/L PSC Pole", "8m-140kg-wl-psc-pole", "/8m-140kg.png", "8 m", "140 kg", "335 kg", "350 kg"),
  createPole("8 m 200 kg W/L PSC Pole", "8m-200kg-wl-psc-pole", "/8m-200kg.png", "8 m", "200 kg", "380 kg", "500 kg"),
  createPole("9 m 300 kg W/L PSC Pole", "9m-300kg-wl-psc-pole", "/9m-300kg.png", "9 m", "300 kg", "596 kg", "600 kg"),
  createPole("9 m 400 kg W/L PSC Pole", "9m-400kg-wl-psc-pole", "/9m-400kg.png", "9 m", "400 kg", "697 kg", "800 kg"),
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
  "Aerial Bunched Cable",
  "AB Cable is an overhead low-tension power cable in which several insulated aluminium phase cores are twisted around a bare messenger conductor. The bunched design replaces bare open-wire lines on poles: it is compact, safer to touch, and far less prone to faults from tree branches, birds or wind-blown objects.",
  [
    "Insulated phase cores (XLPE) with a bare aluminium-alloy messenger that carries the mechanical load.",
    "Lower line losses and fewer power thefts than bare overhead conductors.",
    "Compact bunched layout needs smaller poles and less right-of-way.",
    "Better safety and reliability in rain, storms and tree-prone areas.",
  ],
  ["LT (low-tension) overhead power distribution lines.", "Rural electrification and village feeders.", "Areas with dense trees, narrow lanes or crowded buildings.", "Service connections from the pole to homes and shops."],
  [
    "Wire drawing: Aluminium rod is drawn through a series of dies to the required conductor wire diameter.",
    "Stranding and compacting: The drawn wires are stranded together and compacted into round cores of the specified cross-section (for example 95 sq mm).",
    "Insulation: XLPE (cross-linked polyethylene) insulation is extruded over each phase core and cured so it can withstand heat, sunlight and weather.",
    "Messenger preparation: A bare aluminium-alloy conductor is stranded to act as the supporting messenger and neutral.",
    "Bunching: The insulated phase cores are twisted (laid up) around the messenger in a fixed lay length, and the cable is marked with its size and type.",
    "Testing and dispatch: The cable is tested for conductor resistance, insulation thickness and voltage withstand, then wound on drums.",
  ],
);

const conductor = createProposedWire(
  "Conductor",
  "conductor",
  "/conductor-cable.jpg",
  "Steel-Reinforced Aluminium Alloy",
  "This is a bare overhead conductor made of aluminium alloy wires stranded in layers around a galvanised steel core. The aluminium carries the current, while the steel core gives the high tensile strength needed to hang the line across long spans.",
  [
    "High strength-to-weight ratio, so fewer towers and poles are needed.",
    "Steel core supports long spans over rivers, roads and valleys.",
    "Aluminium alloy gives good conductivity and corrosion resistance.",
    "Cost-effective compared with copper for overhead lines.",
  ],
  [
    "Overhead transmission lines.",
    "Distribution networks (11 kV, 33 kV and above).",
    "Long river and road crossings.",
    "Rural electrification feeders.",
  ],
  [
    "Wire drawing: Aluminium alloy rod is drawn through dies to the required wire size.",
    "Steel core preparation: Galvanised (zinc-coated) steel wire is prepared for the centre core, so it resists rust.",
    "Stranding: The alloy wires are stranded in concentric layers over the steel core, with each layer laid in the opposite direction to the one below.",
    "Greasing (if required): The core can be greased for extra protection in coastal or polluted areas.",
    "Testing: Samples are tested for tensile strength, elongation, wire diameter, lay length and electrical resistance.",
    "Drumming and dispatch: The finished conductor is wound on drums for transport and installation.",
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
    "Rectangular Winding Strip",
    "Enamelled flat wire is a rectangular copper/aluminium conductor coated with a thin, tough layer of enamel insulation. Its flat shape packs more conductor into a coil than round wire, so windings become smaller, more efficient and run cooler.",
    ["Rectangular cross-section gives a high space (fill) factor in the winding slot.", "Thin enamel film with good dielectric strength and heat resistance.", "Better heat dissipation and lower losses in compact coils.", "Smooth, flexible coating that resists cracking during winding."],
    ["Transformer windings.", "Motor and generator coils.", "Reactors and chokes.", "EV traction motors and industrial motors."],
    ["Drawing and rolling: Conductor rod is drawn and then rolled to the required flat (rectangular) width and thickness, with rounded corners.", "Annealing: The strip is heat-treated to improve softness and flexibility so it bends easily without breaking.", "Enamel coating: Enamel varnish is applied in several thin passes through coating dies to build up the specified film thickness.", "Oven curing: After every pass the wire goes through a hot oven, so each layer cures into a smooth, hard film.", "Testing: The wire is checked for dimensions, enamel thickness, continuity (pinholes), flexibility, adhesion and breakdown voltage.", "Spooling: Approved wire is wound on spools for supply."],
  ),
  createProposedWire(
    "DPC Strip",
    "dpc-strip",
    "/strip-wire.jpg",
    "Paper-Covered Flat Copper/Aluminium",
    "DPC (Double Paper Covered) Strip is a flat copper/aluminium conductor wrapped with two layers of special insulating paper. The paper is soaked with transformer oil in service, which makes it a standard winding conductor for oil-filled power equipment.",
    ["Double layer of high-grade insulating paper over a flat copper/aluminium strip.", "Very good dielectric strength once impregnated with transformer oil.", "Rectangular shape gives a compact, mechanically strong winding.", "Handles heavy currents with good heat transfer into the oil."],
    ["Oil-filled power transformers.", "Distribution transformers.", "Reactor windings.", "Heavy-duty coils."],
    ["Drawing and rolling: Copper/aluminium rod is drawn and rolled into a flat strip of the required width and thickness.", "Annealing and cleaning: The strip is annealed for softness, then cleaned so paper wraps evenly and the surface is smooth.", "Paper covering: Two layers of insulating paper tape are wrapped over the strip, each layer overlapping the previous one to leave no gaps.", "Quality check: Strip size, paper thickness, tightness of covering and insulation quality are inspected.", "Drumming: Approved strip is wound on drums for supply to transformer manufacturers."],
  ),
  createProposedWire(
    "Super Enamelled Wire",
    "super-enamelled-wire",
    "/super-enamelled.jpg",
    "Precision Winding Wire",
    "Super Enamelled Wire is a fine round copper/aluminium wire coated with a heat-resistant enamel film (such as polyester or polyester-imide). It is the standard winding wire for electric motors and small coils, where a thin, uniform, durable insulation is needed.",
    ["Thin, smooth and uniform enamel film with high dielectric strength.", "Good thermal class, so it works at higher temperatures.", "Resists abrasion, solvents and varnish during winding and impregnation.", "Excellent flexibility for high-speed automatic winding machines."],
    ["Electric motors.", "Ceiling fans and pumps.", "Small transformers.", "Home appliances such as mixers, coolers and washing machines."],
    ["Wire drawing: Copper/aluminium rod is drawn through a series of diamond or carbide dies down to the fine round wire size required.", "Annealing: The wire is annealed in a controlled atmosphere so it becomes soft, ductile and bright.", "Enamel coating: Super enamel varnish is applied in several thin passes, each applied through a die or felt applicator for an even film.", "Oven curing: Each coat is baked in an enamelling oven so the varnish cures into a smooth, tough film before the next pass.", "Testing: The wire is tested for conductor diameter, film thickness, pinholes, elongation, adhesion and breakdown voltage.", "Spooling: Approved wire is wound on spools in a neat, layered pattern for supply."],
    "Proposed Product — Under Review",
  ),
  createProposedWire(
    "DPC Wire",
    "dpc-wire",
    "/dpc-wire.jpg",
    "Paper-Covered Round Wire (Copper/Aluminium)",
    "DPC (Double Paper Covered) Wire is a round copper/aluminium wire insulated with two layers of electrical-grade paper. It is the round-wire counterpart of DPC Strip and is used for transformer and reactor windings that are immersed in insulating oil.",
    ["Two layers of insulating paper tightly wrapped over a round copper/aluminium conductor.", "High dielectric strength once impregnated with transformer oil.", "Good mechanical strength, so it holds up during coil winding.", "Reliable long-term performance at transformer operating temperatures."],
    ["Oil-immersed transformers.", "Distribution transformers.", "Reactor windings.", "Industrial coils."],
    ["Wire drawing: Copper/aluminium rod is drawn to the required round wire size through a series of dies.", "Annealing: The wire is annealed to soften it, so it can be wound into coils without cracking.", "Paper covering: Two layers of insulating paper tape are wrapped around the wire, with the layers overlapped to leave no bare spots.", "Inspection: Wire size, paper covering thickness and tightness of the wrap are checked.", "Spooling: Approved wire is wound on spools for supply to transformer and coil manufacturers."],
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
