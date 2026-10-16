export interface NavItem {
  name: string;
  href: string;
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
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Operations", href: "#operations" },
  { name: "Logistics", href: "#logistics" },
  { name: "Quality & Testing", href: "#quality" },

  { name: "Clients", href: "#clients" },
  { name: "Contact", href: "#contact" },
];
