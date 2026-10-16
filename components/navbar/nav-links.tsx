"use client";

import React from "react";
import Link from "next/link";
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
  return (
    <ul
      className={`flex ${
        isMobile ? "flex-col space-y-1 w-full" : "items-center gap-0.5 xl:gap-1"
      } ${className}`}
      role="list"
    >
      {items.map((item) => {
        const isActive =
          activeItem === item.name.toLowerCase() ||
          activeItem === item.href ||
          (item.href.startsWith("#") && activeItem === item.href.slice(1));

        return (
          <li key={item.name} className={isMobile ? "w-full" : "relative"}>
            <Link
              href={item.href}
              onClick={(e) => {
                if (item.href.startsWith("#")) {
                  const targetId = item.href.slice(1);
                  const element = document.getElementById(targetId);
                  if (element) {
                    e.preventDefault();
                    element.scrollIntoView({ behavior: "smooth" });
                    window.history.pushState(null, "", item.href);
                  }
                }
                onItemClick?.(item.href);
              }}
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

