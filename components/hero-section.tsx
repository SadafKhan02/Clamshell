"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  FileText,
} from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden border-b border-[#E3D7C8]/70 py-12 md:py-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(253, 251, 249, 0.36), rgba(253, 251, 249, 0.42)), url('/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Decorative Blueprint Lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#785135_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Announcement Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D96B4F]/30 bg-[#FEF4F0] px-4 py-1.5 text-xs font-bold text-[#983B23] shadow-xs">
            <span className="flex h-2 w-2 rounded-full bg-[#D96B4F] animate-pulse" />
            <span>CLAMSHELL INFRASTRUCTURE PRIVATE LIMITED</span>
            <span className="text-[#D96B4F]/40">•</span>
            <span className="text-[#785135] uppercase tracking-wider font-semibold">
              Motto: SHAPE PERFECT
            </span>
          </div>
        </div>

        {/* Hero Main Headline & Subtitle */}
        <div className="mt-6 max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1A1614] leading-[1.15]">
            Bihar&apos;s Strongest{" "}
            <span className="text-[#D96B4F] underline decoration-[#785135]/20 decoration-wavy decoration-2">
              PSCC & Precast
            </span>{" "}
            Power Infrastructure
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-[#573A29] leading-relaxed font-normal">
            Trusted manufacturers and large-volume suppliers of{" "}
            <strong className="font-semibold text-[#1A1614]">
              Pre-Stressed Cement Concrete (PSCC) Poles
            </strong>
            , Rectangular Poles, and Spun Concrete Piles. Built with
            millimeter-tolerance prestressing, high-density M50 concrete, and
            assured on-site delivery via our dedicated crane fleet.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <Link
              href="#products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-[#D96B4F] px-7 py-3.5 text-sm sm:text-base font-bold text-white shadow-md hover:bg-[#C4573B] hover:shadow-lg hover:shadow-[#D96B4F]/25 transition-all duration-200 active:scale-[0.98]"
            >
              <span>Explore Products</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="#quote-tool"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-[#785135] bg-white px-7 py-3.5 text-sm sm:text-base font-bold text-[#785135] hover:bg-[#F6F1EC] hover:border-[#4A2D1A] transition-all duration-200 active:scale-[0.98]"
            >
              <span>Technical Pole Configurator</span>
              <ChevronRight className="h-4 w-4" />
            </Link>

            <Link
              href="#downloads"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-[#C8B4A2] bg-[#FAF7F2] px-5 py-3.5 text-sm font-semibold text-[#4A2D1A] hover:bg-white transition-all duration-200"
            >
              <FileText className="h-4 w-4 text-[#D96B4F]" />
              <span>Brochure</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
