"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface NavLogoProps {
  brandName?: string;
  tagline?: string;
  logoNode?: React.ReactNode;
  href?: string;
}

export function NavLogo({
  brandName = "CLAMSHELL",
  tagline = "INFRASTRUCTURE",
  logoNode,
  href = "#home",
}: NavLogoProps) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-3 rounded-lg py-1 px-1 transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D96B4F]"
      aria-label={`${brandName} ${tagline}`}
    >
      {logoNode ? (
        logoNode
      ) : (
        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white p-0.5 shadow-sm border border-[#C8B4A2]/40 transition-transform duration-200 group-hover:scale-105">
          <Image
            src="/logo.jpg"
            alt="Clamshell Infrastructure Logo"
            width={55}
            height={55}
            className="rounded-full object-cover"
            priority
          />
        </div>
      )}
      <div className="flex flex-col text-left leading-tight">
        <span className="text-[17px] font-extrabold tracking-wider text-[#1A1614] group-hover:text-[#785135] transition-colors">
          {brandName}
        </span>
        <div className="flex items-center gap-1.5">
          <span className="text-[11px] font-semibold tracking-widest text-[#785135] uppercase">
            {tagline}
          </span>
          <span className="inline-block h-1 w-1 rounded-full bg-[#D96B4F]" />
          <span className="text-[9px] font-medium tracking-wider text-[#983B23] uppercase">
            SHAPE PERFECT
          </span>
        </div>
      </div>
    </Link>
  );
}
