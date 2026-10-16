export interface DropdownItem {
  name: string;
  href: string;
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
  { name: "Home", href: "/#home" },
  {
    name: "About Us",
    dropdown: [
      { name: "Overview", href: "/about/overview" },
      { name: "History", href: "/about/history" },
      { name: "Mission", href: "/about/mission" },
    ],
  },
  {
    name: "Product",
    dropdown: [
      { name: "PSCC Poles", href: "/product/pscc-poles" },
      { name: "Cable Wires", href: "/product/cable-wires" },
    ],
  },
  { name: "Operations", href: "/#operations" },
  { name: "Logistics", href: "/#logistics" },
  { name: "Quality & Testing", href: "/#quality" },
  {
    name: "Client",
    dropdown: [
      { name: "Client List", href: "/client/client-list" },
      { name: "Testimonials", href: "/client/testimonials" },
    ],
  },
  { name: "Contact", href: "/contact" },
];
