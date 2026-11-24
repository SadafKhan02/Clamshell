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
<<<<<<< HEAD
  conductorSpecificationTable?: ConductorSpecificationRow[];
=======
  portfolioItems?: ProductPortfolioItem[];
>>>>>>> 1a5c2e9137ebda1a2bc6db5e155a2932a8f96030
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
<<<<<<< HEAD
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
=======
  customRequirement?: {
    title: string;
    description: string;
    ctaLabel: string;
    destinationUrl: string;
  };
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
          "PSC poles in four listed length and working-load configurations. Refer to each product for its supplied weight and ultimate load.",
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
          introductionHeading: "PSC pole configurations",
          introduction:
            "The supplied product list includes four PSC pole configurations. Each product page shows the listed length, working load, theoretical weight, and ultimate load.",
          features: [
            "Four listed PSC pole configurations",
            "Lengths: 8 m and 9 m",
            "Working loads: 140 kg, 200 kg, 300 kg, and 400 kg",
          ],
          specifications: [],
          specificationNote:
            "Additional PSC Pole technical information is available in the product drawing. The drawing was not supplied with this catalogue.",
          applications: [],
          imageCaption:
            "PSC concrete pole reference image.",
          ctaHeading: "Planning a pole project?",
          ctaDescription:
            "Share the required PSC Pole configuration, quantity, and delivery location for an enquiry.",
          ctaLabel: "Request a Pole Quote",
        },
      },
      {
        name: "Rail Pole",
        slug: "rail-pole",
        routeSlug: "rail-poles",
        category: "poles",
        description:
          "Four standard Rail Pole products listed by length and weight per metre.",
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
          introductionHeading: "Standard Rail Pole products",
          introduction:
            "The supplied product list specifies four standard Rail Pole options by length and weight per metre. No other technical specifications were supplied.",
          features: [
            "Four standard listed products",
            "Lengths: 11 m and 13 m",
            "Weights: 52 kg/m and 60 kg/m",
          ],
          specifications: [],
          specificationNote:
            "The supplied product list provides length and weight per metre only. Contact our team to discuss other requirements.",
          applications: [],
          imageCaption:
            "Rail Pole reference image.",
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
>>>>>>> 1a5c2e9137ebda1a2bc6db5e155a2932a8f96030
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

<<<<<<< HEAD
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
=======
export const productListingItems: ProductCardProduct[] = products.map(
  toProductCardProduct,
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
  customRequirement?: ProductCataloguePage["customRequirement"],
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
        ? "Four PSC Pole configurations with their listed lengths, working loads, theoretical weights, and ultimate loads."
        : routeSlug === "rail-poles"
          ? "Four standard Rail Pole products with their listed lengths and weights per metre."
          : `Browse ${title.toLowerCase()} configurations. These catalogue options are temporary; confirm product specifications and availability with our team.`,
    variants,
    images,
    customRequirement,
  };
}

const poleCatalogueImages: ProductCatalogueImage[] = [
  {
    image: "/PSC-pole.jpg",
    imageAlt: "Pre-stressed concrete utility pole carrying overhead lines",
  },
];

const railCatalogueImages: ProductCatalogueImage[] = [
  {
    image: "/rail-pole.avif",
    imageAlt: "Railway electrification pole with overhead catenary equipment",
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

const psccVariants: ProductCatalogueVariant[] = [
  {
    routeSlug: "pscc-pole-8m-140kg",
    name: "8 m 140 kgs W/L PSC Pole",
    description:
      "8 m PSC Pole with a 140 kg working load, 335 kg theoretical weight, and 350 kg ultimate load.",
    highlights: [
      "Length: 8 m",
      "Working load: 140 kg",
      "Theoretical weight: 335 kg",
      "Ultimate load: 350 kg",
    ],
    specifications: [
      { label: "Length", value: "8 m" },
      { label: "Working load", value: "140 kg" },
      { label: "Theoretical weight", value: "335 kg" },
      { label: "Ultimate load", value: "350 kg" },
    ],
    specificationStatus: "verified",
    drawing: { views: [] },
  },
  {
    routeSlug: "pscc-pole-8m-200kg",
    name: "8 m 200 kgs W/L PSC Pole",
    description:
      "8 m PSC Pole with a 200 kg working load, 380 kg theoretical weight, and 500 kg ultimate load.",
    highlights: [
      "Length: 8 m",
      "Working load: 200 kg",
      "Theoretical weight: 380 kg",
      "Ultimate load: 500 kg",
    ],
    specifications: [
      { label: "Length", value: "8 m" },
      { label: "Working load", value: "200 kg" },
      { label: "Theoretical weight", value: "380 kg" },
      { label: "Ultimate load", value: "500 kg" },
    ],
    specificationStatus: "verified",
    drawing: { views: [] },
  },
  {
    routeSlug: "pscc-pole-9m-300kg",
    name: "9 m 300 kgs W/L PSC Pole",
    description:
      "9 m PSC Pole with a 300 kg working load, 596 kg theoretical weight, and 600 kg ultimate load.",
    highlights: [
      "Length: 9 m",
      "Working load: 300 kg",
      "Theoretical weight: 596 kg",
      "Ultimate load: 600 kg",
    ],
    specifications: [
      { label: "Length", value: "9 m" },
      { label: "Working load", value: "300 kg" },
      { label: "Theoretical weight", value: "596 kg" },
      { label: "Ultimate load", value: "600 kg" },
    ],
    specificationStatus: "verified",
    drawing: { views: [] },
  },
  {
    routeSlug: "pscc-pole-9m-400kg",
    name: "9 m 400 kgs W/L PSC Pole",
    description:
      "9 m PSC Pole with a 400 kg working load, 697 kg theoretical weight, and 800 kg ultimate load.",
    highlights: [
      "Length: 9 m",
      "Working load: 400 kg",
      "Theoretical weight: 697 kg",
      "Ultimate load: 800 kg",
    ],
    specifications: [
      { label: "Length", value: "9 m" },
      { label: "Working load", value: "400 kg" },
      { label: "Theoretical weight", value: "697 kg" },
      { label: "Ultimate load", value: "800 kg" },
    ],
    specificationStatus: "verified",
    drawing: { views: [] },
  },
];

const railVariants: ProductCatalogueVariant[] = [
  {
    routeSlug: "rail-pole-13m-60kg-per-m",
    name: "13 m 60 kgs/m Rail Pole",
    description: "13 m Rail Pole weighing 60 kg per metre.",
    highlights: [
      "Length: 13 m",
      "Weight: 60 kg per metre",
      "Standard Rail Pole",
    ],
    specifications: [
      { label: "Length", value: "13 m" },
      { label: "Weight per metre", value: "60 kg per metre" },
    ],
    specificationStatus: "verified",
    drawing: { views: [] },
  },
  {
    routeSlug: "rail-pole-13m-52kg-per-m",
    name: "13 m 52 kgs/m Rail Pole",
    description: "13 m Rail Pole weighing 52 kg per metre.",
    highlights: [
      "Length: 13 m",
      "Weight: 52 kg per metre",
      "Standard Rail Pole",
    ],
    specifications: [
      { label: "Length", value: "13 m" },
      { label: "Weight per metre", value: "52 kg per metre" },
    ],
    specificationStatus: "verified",
    drawing: { views: [] },
  },
  {
    routeSlug: "rail-pole-11m-60kg-per-m",
    name: "11 m 60 kgs/m Rail Pole",
    description: "11 m Rail Pole weighing 60 kg per metre.",
    highlights: [
      "Length: 11 m",
      "Weight: 60 kg per metre",
      "Standard Rail Pole",
    ],
    specifications: [
      { label: "Length", value: "11 m" },
      { label: "Weight per metre", value: "60 kg per metre" },
    ],
    specificationStatus: "verified",
    drawing: { views: [] },
  },
  {
    routeSlug: "rail-pole-11m-52kg-per-m",
    name: "11 m 52 kgs/m Rail Pole",
    description: "11 m Rail Pole weighing 52 kg per metre.",
    highlights: [
      "Length: 11 m",
      "Weight: 52 kg per metre",
      "Standard Rail Pole",
    ],
    specifications: [
      { label: "Length", value: "11 m" },
      { label: "Weight per metre", value: "52 kg per metre" },
    ],
    specificationStatus: "verified",
    drawing: { views: [] },
  },
];

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
    railVariants,
    railCatalogueImages,
    {
      title: "Looking for a Custom Rail Pole?",
      description:
        "Have a specific requirement for Rail Pole length or weight? Share your project requirements with our team, and we will assist you with a suitable solution.",
      ctaLabel: "Submit Your Requirement",
      destinationUrl: "/contact?product=custom-rail-pole#contact",
    },
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
>>>>>>> 1a5c2e9137ebda1a2bc6db5e155a2932a8f96030
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

<<<<<<< HEAD
export function getProductByRouteSlug(routeSlug: string): ProductEntry | undefined {
=======
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
          specificationNote: isVerified
            ? cataloguePage.routeSlug === "pscc-poles"
              ? "Additional PSC Pole technical information is available in the product drawing. The drawing was not supplied with this catalogue."
              : cataloguePage.routeSlug === "rail-poles"
                ? "The supplied product list provides length and weight per metre only. No other technical specifications were supplied."
                : "Specifications are transcribed from the supplied product data. The original drawing image is not accessible in the current project files."
            : "Temporary product page. Unavailable technical values and engineering drawings are marked To Be Updated.",
          imageCaption: image.imageAlt,
        },
      };
    });
  });
}

export const productDetailEntries: ProductEntry[] = [
  ...products.map((product) => ({
    ...product,
    technicalDataStatus: "temporary" as const,
    technicalSpecifications: product.details.specifications,
    details: product.details,
  })),
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
>>>>>>> 1a5c2e9137ebda1a2bc6db5e155a2932a8f96030
  return productDetailEntries.find((product) => product.routeSlug === routeSlug);
}

export function getRelatedProductCards(routeSlug: string, category: ProductFamilyId): ProductCardProduct[] {
  return products
    .filter((product) => product.category === category && product.routeSlug !== routeSlug)
    .slice(0, 3)
    .map(toProductCardProduct);
}
