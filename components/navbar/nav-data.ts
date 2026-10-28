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
    name: "Products",
    dropdown: [
      {
        name: "Poles",
        children: [
          { name: "PSC Poles", href: "/product/pscc-poles" },
          { name: "Rail Poles", href: "/product/pscc-poles" },
        ],
      },
      {
        name: "Wires",
        children: [
          { name: "DPC Wire", href: "/product/cable-wires" },
          { name: "Strip Wire", href: "/product/cable-wires" },
          { name: "Super Enamelled Wire", href: "/product/cable-wires" },
          { name: "Conductor & Cable", href: "/product/cable-wires" },
        ],
      },
      
    ],
  },
{
    name: "Operations",
   dropdown: [
      {
        name: "Manufacture", href:"/operations/manufacture",
        
      },
      {
        name: "Quality Management system",
        children: [
          { name: "Pole Testing", href: "/operations/quality/pole_testing" },
          { name: "Rail Testing", href: "/operations/quality/rail_testing" },
         { name: "wire Testing", href: "/operations/quality/wire_testing" },
        ],
      },
      
    ],
   
  },

  { name: "Logistics", href: "/logistics" },
  // { name: "Quality & Testing", href: "/#quality" },
  
  {
    name: "Client",
    dropdown: [
      { name: "Client List", href: "/client/client-list" },
      { name: "Testimonials", href: "/client/testimonials" },
    ],
  },
  { name: "Contact", href: "/contact" },
];
