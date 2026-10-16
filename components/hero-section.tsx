"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Truck,
  CheckCircle2,
  Factory,
  Zap,
  ChevronRight,
  FileText,
} from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-white to-[#F6F1EC] pt-8 pb-16 md:pt-14 md:pb-24 border-b border-[#E3D7C8]/70"
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

        {/* Hero Visual Card / Brand Showcase Grid */}
        <div className="mt-12 lg:mt-16 rounded-3xl border border-[#E3D7C8] bg-white shadow-xl shadow-[#785135]/5 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#EDE3D7]">
            {/* Visual Column 1: Company Emblem & Core Credentials */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-[#FFFDFB] to-[#FAF7F2]">
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 shrink-0 rounded-2xl border-2 border-[#D96B4F]/30 bg-white p-1 shadow-md">
                  <Image
                    src="/logo.jpg"
                    alt="Clamshell Infrastructure Private Limited Official Stamp"
                    width={80}
                    height={80}
                    className="rounded-xl object-contain"
                    priority
                  />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D96B4F]">
                    Corporate Identity
                  </span>
                  <h3 className="text-lg font-extrabold text-[#1A1614] leading-tight">
                    Clamshell Infrastructure Private Limited
                  </h3>
                  <p className="text-xs font-semibold text-[#785135] mt-0.5">
                    Motto: &quot;SHAPE PERFECT&quot;
                  </p>
                </div>
              </div>

              <div className="my-6 space-y-3">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#D96B4F] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-[#4A2D1A]">
                    <strong className="font-semibold text-[#1A1614]">
                      IS 1678:1998 & IS 2905 Certified
                    </strong>{" "}
                    for high-stress overhead electrical transmission lines.
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#D96B4F] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-[#4A2D1A]">
                    <strong className="font-semibold text-[#1A1614]">
                      1.8+ Million Units Annual Capacity
                    </strong>{" "}
                    across 6 automated casting plants in India.
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#D96B4F] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-[#4A2D1A]">
                    <strong className="font-semibold text-[#1A1614]">
                      Dedicated Logistics Fleet
                    </strong>{" "}
                    with on-board hydraulic boom cranes for pit-side offloading.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E3D7C8]/70 flex items-center justify-between text-xs">
                <span className="text-[#6E635D]">Approved by Major DISCOMs</span>
                <span className="font-bold text-[#D96B4F]">Pan-India Supply</span>
              </div>
            </div>

            {/* Visual Column 2: Core Engineering Capabilities Highlights */}
            <div className="lg:col-span-7 p-6 sm:p-8 bg-white flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#785135]">
                  Flagship Manufacturing Segments
                </h4>
                <span className="text-xs font-medium text-[#D96B4F]">
                  Tested & Approved
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Product Pillar 1 */}
                <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#EDE3D7] hover:border-[#D96B4F] transition-colors group">
                  <div className="h-9 w-9 rounded-xl bg-[#FEF4F0] flex items-center justify-center text-[#D96B4F] mb-3 group-hover:scale-105 transition-transform">
                    <Zap className="h-5 w-5" />
                  </div>
                  <h5 className="font-bold text-[#1A1614] text-sm group-hover:text-[#D96B4F] transition-colors">
                    PSCC Poles
                  </h5>
                  <p className="text-xs text-[#573A29] mt-1 line-clamp-3">
                    8m to 13m prestressed utility poles with working loads from
                    140kg to 400kg.
                  </p>
                  <span className="inline-block mt-3 text-[11px] font-bold text-[#785135]">
                    IS:1678 Compliant →
                  </span>
                </div>

                {/* Product Pillar 2 */}
                <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#EDE3D7] hover:border-[#D96B4F] transition-colors group">
                  <div className="h-9 w-9 rounded-xl bg-[#F6F1EC] flex items-center justify-center text-[#785135] mb-3 group-hover:scale-105 transition-transform">
                    <Factory className="h-5 w-5" />
                  </div>
                  <h5 className="font-bold text-[#1A1614] text-sm group-hover:text-[#D96B4F] transition-colors">
                    Rectangular Poles
                  </h5>
                  <p className="text-xs text-[#573A29] mt-1 line-clamp-3">
                    Space-efficient geometry with superior lateral flexural
                    strength for highway feeders.
                  </p>
                  <span className="inline-block mt-3 text-[11px] font-bold text-[#785135]">
                    Heavy Duty Design →
                  </span>
                </div>

                {/* Product Pillar 3 */}
                <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#EDE3D7] hover:border-[#D96B4F] transition-colors group">
                  <div className="h-9 w-9 rounded-xl bg-[#FEF4F0] flex items-center justify-center text-[#D96B4F] mb-3 group-hover:scale-105 transition-transform">
                    <Truck className="h-5 w-5" />
                  </div>
                  <h5 className="font-bold text-[#1A1614] text-sm group-hover:text-[#D96B4F] transition-colors">
                    Spun Poles & Piles
                  </h5>
                  <p className="text-xs text-[#573A29] mt-1 line-clamp-3">
                    Centrifugally compacted hollow concrete with zero voids for
                    saline coastal corridors.
                  </p>
                  <span className="inline-block mt-3 text-[11px] font-bold text-[#785135]">
                    Cyclone Resilient →
                  </span>
                </div>
              </div>

            
            </div>
          </div>
        </div>

        {/* Key Metrics / Stat Counters Bar */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            {
              metric: "1.8M+",
              label: "Annual Pole Capacity",
              desc: "Highest production in class",
            },
            {
              metric: "6 Plants",
              label: "Automated Facilities",
              desc: "Strategically located in India",
            },
            {
              metric: "450+",
              label: "Transport Trucks",
              desc: "With hydraulic boom cranes",
            },
            {
              metric: "100%",
              label: "IS Standards Tested",
              desc: "NABL calibrated load test beds",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl border border-[#E3D7C8] bg-white shadow-xs hover:border-[#D96B4F] hover:shadow-md transition-all duration-200"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-[#D96B4F]">
                {item.metric}
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#1A1614] mt-1">
                {item.label}
              </div>
              <div className="text-xs text-[#6E635D] mt-0.5">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
