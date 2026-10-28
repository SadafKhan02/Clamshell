"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight } from "lucide-react";
import type { DropdownItem, NavItem } from "./nav-data";

interface NavLinksProps {
  items: NavItem[];
  activeItem: string;
  onItemClick?: (href: string) => void;
  className?: string;
  isMobile?: boolean;
}

const isCurrentPath = (pathname: string, href?: string) =>
  Boolean(href && pathname === href.split("#")[0]);

const hasCurrentDropdownItem = (
  items: DropdownItem[] | undefined,
  pathname: string,
): boolean =>
  Boolean(
    items?.some(
      (item) =>
        isCurrentPath(pathname, item.href) ||
        hasCurrentDropdownItem(item.children, pathname),
    ),
  );

const countCurrentDropdownItems = (
  items: DropdownItem[] | undefined,
  pathname: string,
): number =>
  items?.reduce(
    (count, item) =>
      count +
      Number(isCurrentPath(pathname, item.href)) +
      countCurrentDropdownItems(item.children, pathname),
    0,
  ) ?? 0;

export function NavLinks({
  items,
  activeItem,
  onItemClick,
  className = "",
  isMobile = false,
}: NavLinksProps) {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeNestedDropdown, setActiveNestedDropdown] = useState<string | null>(
    null,
  );
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({
    "About Us": true,
    Client: true,
  });
  const navRef = useRef<HTMLUListElement>(null);
  const dropdownTriggerRefs = useRef(new Map<string, HTMLButtonElement>());

  useEffect(() => {
    if (isMobile) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setActiveNestedDropdown(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        dropdownTriggerRefs.current.get(activeDropdown ?? "")?.focus();
        setActiveDropdown(null);
        setActiveNestedDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeDropdown, isMobile]);

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

  const renderMobileDropdownItem = (
    item: DropdownItem,
    path: string,
    rootItems: DropdownItem[],
  ): React.ReactNode => {
    const hasChildren = Boolean(item.children?.length);
    const isExpanded = mobileExpanded[path] ?? false;
    const itemIsActive =
      (isCurrentPath(pathname, item.href) &&
        countCurrentDropdownItems(rootItems, pathname) === 1) ||
      hasCurrentDropdownItem(item.children, pathname);
    const submenuId = `mobile-submenu-${path.replaceAll(" ", "-")}`;

    return (
      <li key={path}>
        {hasChildren ? (
          <button
            type="button"
            onClick={() =>
              setMobileExpanded((previous) => ({
                ...previous,
                [path]: !isExpanded,
              }))
            }
            role="menuitem"
            aria-haspopup="menu"
            aria-expanded={isExpanded}
            aria-controls={submenuId}
            className={`
              flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D96B4F]
              ${
                itemIsActive
                  ? "bg-[#FEF4F0] text-[#D96B4F] font-semibold"
                  : "text-[#573A29] hover:bg-[#FEF4F0] hover:text-[#D96B4F]"
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
        ) : item.href ? (
          <Link
            href={item.href}
            role="menuitem"
            aria-current={itemIsActive ? "page" : undefined}
            onClick={(event) => handleLinkClick(event, item.href)}
            className={`
              block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D96B4F]
              ${
                itemIsActive
                  ? "bg-[#FEF4F0] text-[#D96B4F] font-semibold"
                  : "text-[#573A29] hover:bg-[#FEF4F0] hover:text-[#D96B4F]"
              }
            `}
          >
            {item.name}
          </Link>
        ) : (
          <span className="block rounded-lg px-3 py-2.5 text-sm font-medium text-[#573A29]">
            {item.name}
          </span>
        )}

        {hasChildren && isExpanded && (
          <ul
            id={submenuId}
            className="ml-3 mt-1 space-y-1 border-l-2 border-[#D96B4F]/30 py-1 pl-3"
            role="menu"
          >
            {item.children?.map((child, index) =>
              renderMobileDropdownItem(
                child,
                `${path}-${index}-${child.name}`,
                rootItems,
              ),
            )}
          </ul>
        )}
      </li>
    );
  };

  const renderDesktopDropdownItem = (
    item: DropdownItem,
    path: string,
    rootItems: DropdownItem[],
  ): React.ReactNode => {
    const hasChildren = Boolean(item.children?.length);
    const isOpen = activeNestedDropdown === path;
    const itemIsActive =
      (isCurrentPath(pathname, item.href) &&
        countCurrentDropdownItems(rootItems, pathname) === 1) ||
      hasCurrentDropdownItem(item.children, pathname);
    const submenuId = `desktop-submenu-${path.replaceAll(" ", "-")}`;

    return (
      <li
        key={path}
        className="relative"
        onMouseEnter={
          hasChildren ? () => setActiveNestedDropdown(path) : undefined
        }
        onMouseLeave={
          hasChildren ? () => setActiveNestedDropdown(null) : undefined
        }
      >
        {hasChildren ? (
          <button
            type="button"
            onFocus={() => setActiveNestedDropdown(path)}
            onClick={() => setActiveNestedDropdown(isOpen ? null : path)}
            role="menuitem"
            aria-haspopup="menu"
            aria-expanded={isOpen}
            aria-controls={submenuId}
            className={`
              flex w-full items-center justify-between gap-5 rounded-xl px-3.5 py-2 text-left text-xs font-medium transition-colors xl:text-sm
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D96B4F]
              ${
                itemIsActive
                  ? "bg-[#FEF4F0] text-[#D96B4F] font-bold"
                  : "text-[#4A2D1A] hover:bg-[#FEF4F0] hover:text-[#D96B4F]"
              }
            `}
          >
            <span>{item.name}</span>
            <ChevronRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </button>
        ) : item.href ? (
          <Link
            href={item.href}
            role="menuitem"
            aria-current={itemIsActive ? "page" : undefined}
            onClick={(event) => {
              setActiveDropdown(null);
              setActiveNestedDropdown(null);
              handleLinkClick(event, item.href);
            }}
            className={`
              block rounded-xl px-3.5 py-2 text-xs font-medium transition-colors xl:text-sm
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D96B4F]
              ${
                itemIsActive
                  ? "bg-[#FEF4F0] text-[#D96B4F] font-bold"
                  : "text-[#4A2D1A] hover:bg-[#FEF4F0] hover:text-[#D96B4F]"
              }
            `}
          >
            {item.name}
          </Link>
        ) : (
          <span className="block rounded-xl px-3.5 py-2 text-xs font-medium text-[#4A2D1A]">
            {item.name}
          </span>
        )}

        {hasChildren && isOpen && (
          <ul
            id={submenuId}
            role="menu"
            aria-label={`${item.name} submenu`}
            className="absolute left-full top-0 z-50 min-w-[220px] rounded-2xl border border-[#E3D7C8] bg-white px-1.5 py-2 shadow-[0_12px_32px_rgba(51,30,17,0.12)]"
          >
            {item.children?.map((child, index) =>
              renderDesktopDropdownItem(
                child,
                `${path}-${index}-${child.name}`,
                rootItems,
              ),
            )}
          </ul>
        )}
      </li>
    );
  };

  return (
    <ul
      ref={navRef}
      className={`flex ${
        isMobile ? "w-full flex-col space-y-1" : "items-center gap-0.5 xl:gap-1"
      } ${className}`}
      role="list"
    >
      {items.map((item) => {
        const hasDropdown = Boolean(item.dropdown?.length);
        const isDropdownActive = hasCurrentDropdownItem(item.dropdown, pathname);
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

        if (isMobile && hasDropdown && item.dropdown) {
          const isExpanded = mobileExpanded[item.name] ?? false;
          const submenuId = `mobile-submenu-${item.name.replaceAll(" ", "-")}`;

          return (
            <li key={item.name} className="w-full">
              <button
                type="button"
                onClick={() =>
                  setMobileExpanded((previous) => ({
                    ...previous,
                    [item.name]: !isExpanded,
                  }))
                }
                aria-haspopup="menu"
                aria-expanded={isExpanded}
                aria-controls={submenuId}
                className={`
                  flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D96B4F]
                  ${
                    isActive
                      ? "bg-[#FEF4F0] text-[#D96B4F] font-semibold"
                      : "text-[#4A2D1A] hover:bg-[#F6F1EC] hover:text-[#D96B4F]"
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
                  id={submenuId}
                  className="ml-4 mt-1 space-y-1 rounded-xl border-l-2 border-[#D96B4F]/30 bg-[#FAF7F2]/60 py-1 pl-3"
                  role="menu"
                >
                  {item.dropdown.map((subItem, index) =>
                    renderMobileDropdownItem(
                      subItem,
                      `${item.name}-${index}-${subItem.name}`,
                      item.dropdown ?? [],
                    ),
                  )}
                </ul>
              )}
            </li>
          );
        }

        if (!isMobile && hasDropdown && item.dropdown) {
          const isOpen = activeDropdown === item.name;
          const submenuId = `desktop-submenu-${item.name.replaceAll(" ", "-")}`;

          return (
            <li
              key={item.name}
              className="relative"
              onMouseEnter={(event) => {
                setActiveDropdown(item.name);
                setActiveNestedDropdown(null);
                const trigger = event.currentTarget.querySelector("button");
                if (trigger) dropdownTriggerRefs.current.set(item.name, trigger);
              }}
              onBlur={(event) => {
                if (
                  !(event.relatedTarget instanceof Node) ||
                  !event.currentTarget.contains(event.relatedTarget)
                ) {
                  setActiveDropdown(null);
                  setActiveNestedDropdown(null);
                }
              }}
              onMouseLeave={() => {
                setActiveDropdown(null);
                setActiveNestedDropdown(null);
              }}
            >
              <button
                ref={(element) => {
                  if (element) dropdownTriggerRefs.current.set(item.name, element);
                  else dropdownTriggerRefs.current.delete(item.name);
                }}
                type="button"
                onFocus={() => setActiveDropdown(item.name)}
                onClick={() => setActiveDropdown(isOpen ? null : item.name)}
                aria-haspopup="menu"
                aria-expanded={isOpen}
                aria-controls={submenuId}
                className={`
                  group relative inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-1.5 text-[13px] font-medium transition-all duration-150 ease-out xl:text-[14px]
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D96B4F]
                  ${
                    isActive
                      ? "bg-[#FEF4F0] font-bold text-[#D96B4F]"
                      : "text-[#4A2D1A] hover:bg-[#F6F1EC]/80 hover:text-[#D96B4F]"
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
                <ul
                  id={submenuId}
                  role="menu"
                  aria-label={`${item.name} submenu`}
                  className={`absolute left-0 top-full z-50 ${
                    item.name === "Operations" ? "min-w-[250px]" : "min-w-[220px]"
                  } animate-in fade-in-50 zoom-in-95 rounded-2xl border border-[#E3D7C8] bg-white px-1.5 py-2 shadow-[0_12px_32px_rgba(51,30,17,0.12)] duration-150`}
                >
                  {item.dropdown.map((subItem, index) =>
                    renderDesktopDropdownItem(
                      subItem,
                      `${item.name}-${index}-${subItem.name}`,
                      item.dropdown ?? [],
                    ),
                  )}
                </ul>
              )}
            </li>
          );
        }

        const href = item.href || "#";

        return (
          <li key={item.name} className={isMobile ? "w-full" : "relative"}>
            <Link
              href={href}
              onClick={(event) => handleLinkClick(event, item.href)}
              aria-current={isActive ? "page" : undefined}
              className={`
                group relative flex items-center whitespace-nowrap transition-all duration-150 ease-out
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D96B4F]
                ${
                  isMobile
                    ? `w-full justify-between rounded-xl px-4 py-3 text-base font-medium ${
                        isActive
                          ? "bg-[#FEF4F0] font-semibold text-[#D96B4F]"
                          : "text-[#4A2D1A] hover:bg-[#F6F1EC] hover:text-[#D96B4F]"
                      }`
                    : `rounded-full px-2.5 py-1.5 text-[13px] font-medium xl:text-[14px] ${
                        isActive
                          ? "bg-[#FEF4F0] font-bold text-[#D96B4F]"
                          : "text-[#4A2D1A] hover:bg-[#F6F1EC]/80 hover:text-[#D96B4F]"
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
