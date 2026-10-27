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
      className="relative w-full overflow-hidden border-b border-[#E3D7C8]/70 py-10 sm:py-14 md:py-20"
      style={{
        backgroundImage:
          "linear-gradient(110deg, rgba(20, 15, 13, 0.48) 0%, rgba(38, 25, 20, 0.38) 48%, rgba(19, 24, 31, 0.32) 100%), linear-gradient(0deg, rgba(14, 14, 16, 0.16), transparent 55%), url('/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Decorative Blueprint Lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#785135_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Announcement Badge */}
        <div className="flex justify-center">
          <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-2xl border border-white/35 bg-[#1A1614]/75 px-3 py-2 text-center text-[10px] font-bold leading-tight text-white shadow-lg shadow-black/20 backdrop-blur-sm sm:gap-2 sm:rounded-full sm:px-4 sm:py-1.5 sm:text-xs">
            <span className="flex h-2 w-2 rounded-full bg-[#D96B4F] animate-pulse" />
            <span className="max-w-full">CLAMSHELL INFRASTRUCTURE PRIVATE LIMITED</span>
            <span className="hidden text-white/60 sm:inline">•</span>
            <span className="font-bold uppercase tracking-wider text-white">
              Motto: SHAPE PERFECT
            </span>
          </div>
        </div>

        {/* Hero Main Headline & Subtitle */}
        <div className="mx-auto mt-5 max-w-4xl text-center sm:mt-6">
          <h1 className="text-[clamp(2rem,8vw,3.75rem)] font-extrabold leading-[1.08] tracking-tight text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.55)] sm:leading-[1.12]">
            Bihar&apos;s Strongest{" "}
            <span className="text-[#D96B4F] underline decoration-[#D96B4F]/80 decoration-wavy decoration-2">
              PSCC &amp; Precast
            </span>{" "}
            Power Infrastructure
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-base font-semibold leading-relaxed text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.8)] sm:mt-5 sm:text-lg md:text-xl">
            Trusted manufacturers and large-volume suppliers of{" "}
            <strong className="font-extrabold text-white">
              Pre-Stressed Cement Concrete (PSCC) Poles
            </strong>
            , Rectangular Poles, and Spun Concrete Piles. Built with
            millimeter-tolerance prestressing, high-density M50 concrete, and
            assured on-site delivery via our dedicated crane fleet.
          </p>

          {/* Action CTAs */}
          <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4">
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
