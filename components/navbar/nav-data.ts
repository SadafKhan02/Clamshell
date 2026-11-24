export interface DropdownItem {
  name: string;
  href?: string;
  children?: DropdownItem[];
  description?: string;
  badge?: string;
}

export interface NavItem {
  name: string;
  href?: string;
  dropdown?: DropdownItem[];
  description?: string;
  badge?: string;
}

export interface NavbarProps {
  brandName?: string;
  tagline?: string;
  logoNode?: React.ReactNode;
  items?: NavItem[];
  ctaText?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  className?: string;
}

export const DEFAULT_NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    dropdown: [
      { name: "Overview", href: "/about/overview" },
      { name: "History", href: "/about/history" },
      { name: "Mission", href: "/about/mission" },
    ],
  },
  {
    name: "Products",
    href: "/product",
    dropdown: [
      {
        name: "Poles",
        children: [
          { name: "PSC Poles", href: "/product/category/pscc-poles" },
          { name: "Rail Poles", href: "/product/category/rail-poles" },
        ],
      },
      {
        name: "Wires",
        children: [
          { name: "DPC Wire", href: "/product/dpc-wire" },
          { name: "Strip Wire", href: "/product/enamelled-flat-wire" },
          {
            name: "Super Enamelled Wire",
            children: [
              { name: "Super Enamelled Wire Details", href: "/product/category/super-enamelled-wire" },
              { name: "AB Cable", href: "/product/ab-cable" },
              { name: "Enamelled Flat Wire", href: "/product/enamelled-flat-wire" },
              { name: "DPC Strip", href: "/product/dpc-strip" },
            ],
          },
          { name: "Conductor", href: "/product/conductor" },
          { name: "Cable", href: "/product/ab-cable" },
        ],
      },
    ],
  },
  {
    name: "Operations",
    dropdown: [
      { name: "Manufacturing", href: "/operations/manufacture" },
      {
        name: "Quality",
        children: [
          { name: "Quality Overview", href: "/operations/quality" },
          { name: "Pole Testing", href: "/operations/quality/pole_testing" },
          { name: "Rail Testing", href: "/operations/quality/rail_testing" },
          { name: "Wire Testing", href: "/operations/quality/wire_testing" },
        ],
      },
    ],
  },
  { name: "Logistics", href: "/logistics" },
  {
    name: "Client",
    dropdown: [
      { name: "Client List", href: "/client/client-list" },
      { name: "Testimonials", href: "/client/testimonials" },
    ],
  },
  { name: "Contact", href: "/contact" },
];
