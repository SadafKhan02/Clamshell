"use client";

import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { DEFAULT_NAV_ITEMS, NavbarProps } from "./nav-data";
import { NavLogo } from "./nav-logo";
import { NavLinks } from "./nav-links";
import { CtaButton } from "./cta-button";
import { MobileMenu } from "./mobile-menu";
import { TopBar } from "../top-bar";

export function Navbar({
  brandName = "CLAMSHELL",
  tagline = "INFRASTRUCTURE",
  logoNode,
  items = DEFAULT_NAV_ITEMS,
  ctaText = "Quick Quote",
  ctaHref = "/#quote-tool",
  onCtaClick,
  className = "",
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);

      const sectionIds = items
        .filter((item) => item.href && (item.href.startsWith("#") || item.href.startsWith("/#")))
        .map((item) => (item.href!.startsWith("/#") ? item.href!.slice(2) : item.href!.slice(1)));

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 180) {
            setActiveItem(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  return (
    <>
      <div className="w-full flex flex-col">
        {/* Top bar with phone, email, and certifications */}
        <TopBar />

        {/* Main sticky navigation */}
        <header
          role="banner"
          className={`
            sticky top-0 z-40 w-full transition-all duration-300 ease-in-out
            ${
              isScrolled
                ? "bg-white/95 backdrop-blur-md border-b border-[#E3D7C8] shadow-[0_4px_20px_rgba(51,30,17,0.06)]"
                : "bg-white/90 backdrop-blur-sm border-b border-[#EDE3D7]"
            }
            ${className}
          `}
        >
          <nav
            aria-label="Main Navigation"
            className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
          >
            {/* Left: Brand Logo with stamp emblem */}
            <div className="flex items-center">
              <NavLogo
                brandName={brandName}
                tagline={tagline}
                logoNode={logoNode}
                href={items[0]?.href || "#home"}
              />
            </div>

            {/* Center: Desktop Navigation Links */}
            <div className="hidden xl:flex xl:items-center">
              <NavLinks
                items={items}
                activeItem={activeItem}
                onItemClick={(href) => {
                  if (href.startsWith("#")) {
                    setActiveItem(href.slice(1));
                  }
                }}
              />
            </div>

            {/* Right: CTA Button & Mobile Menu Toggle */}
            <div className="flex items-center gap-3">
              {/* Desktop CTA Button */}
              <div className="hidden sm:inline-flex">
                <CtaButton
                  text={ctaText}
                  href={ctaHref}
                  onClick={onCtaClick}
                  size="md"
                />
              </div>

              {/* Mobile menu hamburger toggle */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation"
                aria-label="Open main menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#E3D7C8] bg-[#FBF7F2] text-[#4A2D1A] hover:bg-[#F6F1EC] hover:text-[#D96B4F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D96B4F] xl:hidden transition-colors"
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </nav>
        </header>
      </div>

      {/* Accessible slide-down mobile menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        items={items}
        activeItem={activeItem}
        ctaText={ctaText}
        ctaHref={ctaHref}
        onCtaClick={onCtaClick}
      />
    </>
  );
}
