"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { NavItem } from "./nav-data";

interface NavLinksProps {
  items: NavItem[];
  activeItem: string;
  onItemClick?: (href: string) => void;
  className?: string;
  isMobile?: boolean;
}

export function NavLinks({
  items,
  activeItem,
  onItemClick,
  className = "",
  isMobile = false,
}: NavLinksProps) {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({
    "About Us": true,
    Product: true,
    Client: true,
  });
  const navRef = useRef<HTMLUListElement>(null);

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    if (isMobile) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobile]);

  const handleLinkClick = (e: React.MouseEvent, href?: string) => {
    if (!href) return;

    if (href.startsWith("#")) {
      const targetId = href.slice(1);
      const element = document.getElementById(targetId);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    } else if (
      href.startsWith("/#") &&
      typeof window !== "undefined" &&
      window.location.pathname === "/"
    ) {
      const targetId = href.slice(2);
      const element = document.getElementById(targetId);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${targetId}`);
      }
    }
    onItemClick?.(href);
  };

  return (
    <ul
      ref={navRef}
      className={`flex ${
        isMobile ? "flex-col space-y-1 w-full" : "items-center gap-0.5 xl:gap-1"
      } ${className}`}
      role="list"
    >
      {items.map((item) => {
        const hasDropdown = Boolean(item.dropdown && item.dropdown.length > 0);

        // Active state detection
        const isDropdownActive = hasDropdown
          ? item.dropdown?.some(
              (sub) =>
                pathname === sub.href ||
                (sub.href.startsWith("/#") &&
                  pathname === "/" &&
                  activeItem === sub.href.slice(2))
            )
          : false;

        const isDirectActive =
          !hasDropdown &&
          item.href &&
          (pathname === item.href ||
            (item.href === "/#home" && pathname === "/" && activeItem === "home") ||
            (item.href.startsWith("#") && activeItem === item.href.slice(1)) ||
            (item.href.startsWith("/#") &&
              pathname === "/" &&
              activeItem === item.href.slice(2)));

        const isActive = isDropdownActive || isDirectActive;

        // Mobile dropdown (accordion) item
        if (isMobile && hasDropdown && item.dropdown) {
          const isExpanded = mobileExpanded[item.name] ?? false;

          return (
            <li key={item.name} className="w-full">
              <button
                type="button"
                onClick={() =>
                  setMobileExpanded((prev) => ({
                    ...prev,
                    [item.name]: !isExpanded,
                  }))
                }
                aria-expanded={isExpanded}
                className={`
                  w-full px-4 py-3 text-base rounded-xl font-medium flex items-center justify-between transition-colors
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D96B4F]
                  ${
                    isActive
                      ? "bg-[#FEF4F0] text-[#D96B4F] font-semibold"
                      : "text-[#4A2D1A] hover:text-[#D96B4F] hover:bg-[#F6F1EC]"
                  }
                `}
              >
                <span>{item.name}</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isExpanded ? "rotate-180 text-[#D96B4F]" : "text-[#785135]"
                  }`}
                  aria-hidden="true"
                />
              </button>

              {isExpanded && (
                <ul
                  className="mt-1 ml-4 pl-3 py-1 space-y-1 border-l-2 border-[#D96B4F]/30 bg-[#FAF7F2]/60 rounded-xl"
                  role="menu"
                >
                  {item.dropdown.map((subItem) => {
                    const isSubActive = pathname === subItem.href;

                    return (
                      <li key={subItem.name}>
                        <Link
                          href={subItem.href}
                          role="menuitem"
                          onClick={(e) => {
                            handleLinkClick(e, subItem.href);
                          }}
                          className={`
                            block px-3 py-2 text-sm font-medium rounded-lg transition-colors
                            ${
                              isSubActive
                                ? "bg-[#FEF4F0] text-[#D96B4F] font-bold"
                                : "text-[#573A29] hover:text-[#D96B4F] hover:bg-[#FEF4F0]"
                            }
                          `}
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        }

        // Desktop dropdown item
        if (!isMobile && hasDropdown && item.dropdown) {
          const isOpen = activeDropdown === item.name;

          return (
            <li
              key={item.name}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                onClick={() =>
                  setActiveDropdown(isOpen ? null : item.name)
                }
                aria-haspopup="true"
                aria-expanded={isOpen}
                className={`
                  group relative inline-flex items-center gap-1 transition-all duration-150 ease-out whitespace-nowrap
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D96B4F]
                  px-2.5 py-1.5 text-[13px] xl:text-[14px] rounded-full font-medium cursor-pointer
                  ${
                    isActive
                      ? "text-[#D96B4F] font-bold bg-[#FEF4F0]"
                      : "text-[#4A2D1A] hover:text-[#D96B4F] hover:bg-[#F6F1EC]/80"
                  }
                `}
              >
                <span>{item.name}</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-[#D96B4F]" : "text-[#785135]"
                  }`}
                  aria-hidden="true"
                />
              </button>

              {isOpen && (
                <div
                  role="menu"
                  aria-label={`${item.name} submenu`}
                  className="absolute top-full left-0 pt-1.5 z-50 min-w-[200px] animate-in fade-in-50 zoom-in-95 duration-150"
                >
                  <div className="rounded-2xl bg-white border border-[#E3D7C8] py-2 px-1.5 shadow-[0_12px_32px_rgba(51,30,17,0.12)]">
                    {item.dropdown.map((subItem) => {
                      const isSubActive = pathname === subItem.href;

                      return (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          role="menuitem"
                          onClick={(e) => {
                            setActiveDropdown(null);
                            handleLinkClick(e, subItem.href);
                          }}
                          className={`
                            block px-3.5 py-2 text-xs xl:text-sm font-medium rounded-xl transition-colors whitespace-nowrap
                            ${
                              isSubActive
                                ? "bg-[#FEF4F0] text-[#D96B4F] font-bold"
                                : "text-[#4A2D1A] hover:text-[#D96B4F] hover:bg-[#FEF4F0]"
                            }
                          `}
                        >
                          {subItem.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </li>
          );
        }

        // Standard link item (Desktop or Mobile)
        const href = item.href || "#";

        return (
          <li key={item.name} className={isMobile ? "w-full" : "relative"}>
            <Link
              href={href}
              onClick={(e) => handleLinkClick(e, item.href)}
              aria-current={isActive ? "page" : undefined}
              className={`
                group relative flex items-center transition-all duration-150 ease-out whitespace-nowrap
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D96B4F]
                ${
                  isMobile
                    ? `w-full px-4 py-3 text-base rounded-xl font-medium justify-between ${
                        isActive
                          ? "bg-[#FEF4F0] text-[#D96B4F] font-semibold"
                          : "text-[#4A2D1A] hover:text-[#D96B4F] hover:bg-[#F6F1EC]"
                      }`
                    : `px-2.5 py-1.5 text-[13px] xl:text-[14px] rounded-full font-medium ${
                        isActive
                          ? "text-[#D96B4F] font-bold bg-[#FEF4F0]"
                          : "text-[#4A2D1A] hover:text-[#D96B4F] hover:bg-[#F6F1EC]/80"
                      }`
                }
              `}
            >
              <span>{item.name}</span>

              {isMobile && isActive && (
                <span
                  className="h-2 w-2 rounded-full bg-[#D96B4F]"
                  aria-hidden="true"
                />
              )}

              {item.badge && (
                <span className="ml-1.5 rounded-full bg-[#D96B4F]/10 px-2 py-0.5 text-[10px] font-bold text-[#D96B4F]">
                  {item.badge}
                </span>
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

