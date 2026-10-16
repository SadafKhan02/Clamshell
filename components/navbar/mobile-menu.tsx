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
        className="fixed inset-0 bg-neutral-950/40 backdrop-blur-sm transition-opacity duration-300 ease-out"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-down / Dropdown drawer panel */}
      <div
        ref={menuRef}
        className="fixed inset-x-0 top-0 max-h-[90vh] overflow-y-auto bg-white/95 dark:bg-neutral-950/95 backdrop-blur-xl border-b border-neutral-200/80 dark:border-neutral-800 shadow-2xl transition-transform duration-300 ease-out animate-in slide-in-from-top-4"
      >
        <div className="flex flex-col px-5 pt-4 pb-6 sm:px-6">
          {/* Header row inside drawer */}
          <div className="flex items-center justify-between pb-4 border-b border-neutral-200/60 dark:border-neutral-800/80">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
              Navigation Menu
            </span>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white dark:focus-visible:ring-white"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          {/* Navigation Links list */}
          <div className="py-4">
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
          <div className="pt-4 border-t border-neutral-200/60 dark:border-neutral-800/80">
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
