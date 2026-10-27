"use client";

import React, { useEffect, useRef } from "react";
import { NavItem } from "./nav-data";
import { NavLinks } from "./nav-links";
import { CtaButton } from "./cta-button";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
  activeItem: string;
  ctaText?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
}

export function MobileMenu({
  isOpen,
  onClose,
  items,
  activeItem,
  ctaText = "Get Started",
  ctaHref = "/contact",
  onCtaClick,
}: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close when pressing Escape key & manage body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);
    // Focus the close button for accessibility
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Automatically close menu if viewport expands to desktop
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleResize = (e: MediaQueryListEvent) => {
      if (e.matches && isOpen) {
        onClose();
      }
    };

    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="mobile-navigation"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 lg:hidden"
    >
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-[#1A1614]/25 transition-opacity duration-300 ease-out"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-down / Dropdown drawer panel */}
      <div
        ref={menuRef}
        className="fixed inset-x-0 top-0 h-[100dvh] max-h-[100dvh] overflow-x-hidden overflow-y-auto overscroll-contain border-b border-[#E3D7C8] bg-white text-[#1A1614] shadow-2xl transition-transform duration-300 ease-out animate-in slide-in-from-top-4"
      >
        <div className="flex min-h-full flex-col px-4 pb-6 pt-4 sm:px-6">
          {/* Header row inside drawer */}
          <div className="flex items-center justify-between border-b border-[#E3D7C8] pb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#785135]">
              Navigation Menu
            </span>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[#4A2D1A] hover:bg-[#F6F1EC] hover:text-[#D96B4F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D96B4F]"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          {/* Navigation Links list */}
          <div className="flex-1 py-4">
            <NavLinks
              items={items}
              activeItem={activeItem}
              isMobile={true}
              onItemClick={() => {
                onClose();
              }}
            />
          </div>

          {/* CTA Button container in mobile menu */}
          <div className="border-t border-[#E3D7C8] pt-4">
            <CtaButton
              text={ctaText}
              href={ctaHref}
              onClick={() => {
                onCtaClick?.();
                onClose();
              }}
              isFullWidth={true}
              size="lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
