"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CtaButtonProps {
  text?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  isFullWidth?: boolean;
  size?: "sm" | "md" | "lg";
}

export function CtaButton({
  text = "Request a Quote",
  href = "#quote-tool",
  onClick,
  className = "",
  isFullWidth = false,
  size = "md",
}: CtaButtonProps) {
  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-xs font-semibold gap-1.5",
    md: "px-5 py-2.5 text-sm font-semibold gap-2",
    lg: "px-6 py-3.5 text-base font-semibold gap-2.5",
  }[size];

  const baseClasses = `
    group relative inline-flex items-center justify-center
    rounded-full font-semibold tracking-wide
    bg-[#D96B4F] text-white
    shadow-sm hover:shadow-md hover:shadow-[#D96B4F]/25
    transition-all duration-200 ease-out
    hover:bg-[#C4573B]
    active:scale-[0.98]
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D96B4F] focus-visible:ring-offset-2
    ${sizeClasses}
    ${isFullWidth ? "w-full" : "w-auto"}
    ${className}
  `.trim().replace(/\s+/g, " ");

  const innerContent = (
    <>
      <span>{text}</span>
      <ArrowRight
        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses} onClick={onClick}>
        {innerContent}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={baseClasses}>
      {innerContent}
    </button>
  );
}
