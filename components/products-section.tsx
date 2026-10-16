"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Zap,
  CheckCircle2,
  FileSpreadsheet,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";

interface ProductSpec {
  length: string;
  workingLoad: string;
  ultimateLoad: string;
  topDimension: string;
  bottomDimension: string;
  plantingDepth: string;
  concreteGrade: string;
  application: string;
}

const PSCC_SPECS: ProductSpec[] = [
  {
    length: "8.0 Meters",
    workingLoad: "140 kg / 200 kg",
    ultimateLoad: "350 kg / 500 kg",
    topDimension: "105 x 90 mm",
    bottomDimension: "290 x 105 mm",
    plantingDepth: "1.50 Meters",
    concreteGrade: "M42 / M50",
    application: "LT Overhead Lines, Rural Distribution & Street Lighting",
  },
  {
    length: "9.0 Meters",
    workingLoad: "200 kg / 300 kg",
    ultimateLoad: "500 kg / 750 kg",
    topDimension: "120 x 95 mm",
    bottomDimension: "320 x 120 mm",
    plantingDepth: "1.50 Meters",
    concreteGrade: "M45 / M50",
    application: "11 kV High Tension Feeders & Urban Grid Substations",
  },
  {
    length: "9.5 Meters",
    workingLoad: "300 kg / 400 kg",
    ultimateLoad: "750 kg / 1000 kg",
    topDimension: "140 x 105 mm",
    bottomDimension: "340 x 140 mm",
    plantingDepth: "1.60 Meters",
    concreteGrade: "M50",
    application: "Heavy-Gauge 11 kV & 33 kV Distribution Corridors",
  },
  {
    length: "11.0 Meters",
    workingLoad: "350 kg / 400 kg",
    ultimateLoad: "875 kg / 1000 kg",
    topDimension: "150 x 120 mm",
    bottomDimension: "390 x 150 mm",
    plantingDepth: "1.80 Meters",
    concreteGrade: "M50",
    application: "33 kV Sub-Transmission Lines & River/Roadway Crossing",
  },
  {
    length: "13.0 Meters",
    workingLoad: "400 kg / 500 kg",
    ultimateLoad: "1000 kg / 1250 kg",
    topDimension: "165 x 135 mm",
    bottomDimension: "440 x 165 mm",
    plantingDepth: "2.00 Meters",
    concreteGrade: "M55",
    application: "High-Clearance 33 kV Lines, Railway Electrification",
  },
];

export function ProductsSection() {
  const [activeTab, setActiveTab] = useState<
    "pscc" | "rectangular" | "spun" | "precast"
  >("pscc");

  return (
    <section
      id="products"
      className="w-full py-20 sm:py-28 bg-[#FBF7F2] border-b border-[#E3D7C8] scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FEF4F0] px-3.5 py-1 text-xs font-bold text-[#D96B4F]">
              <span>FLAGSHIP PRODUCT PORTFOLIO</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1A1614] leading-tight">
              Pre-Stressed &amp; Spun Concrete Infrastructure
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#573A29]">
              Engineered according to Indian Standards (IS:1678, IS:2905,
              IS:7321) and Rural Electrification Corporation (REC) guidelines
              for severe environmental endurance.
            </p>
          </div>

          <Link
            href="#quote-tool"
            className="inline-flex items-center gap-2 self-start md:self-auto rounded-full bg-[#785135] px-6 py-3 text-sm font-bold text-white hover:bg-[#573A29] transition-colors"
          >
            <span>Launch Pole Configurator</span>
            <ArrowRight className="h-4 w-4 text-[#D96B4F]" />
          </Link>
        </div>

        {/* Tab Selection Navigation */}
        <div className="mt-10 flex overflow-x-auto pb-2 scrollbar-none gap-2 border-b border-[#E3D7C8]">
          {[
            { id: "pscc", name: "PSCC Poles (Utility)", icon: Zap },
            { id: "rectangular", name: "Rectangular PSCC Poles", icon: Layers },
            { id: "spun", name: "Spun Poles & Piles", icon: Sparkles },
            { id: "precast", name: "Precast Civil Infrastructure", icon: Cpu },
          ].map((tab) => {
            const Icon = tab.icon;
            const isCurrent = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`
                  flex items-center gap-2 px-5 py-3 rounded-t-2xl font-bold text-sm whitespace-nowrap transition-all duration-200
                  ${
                    isCurrent
                      ? "bg-white text-[#D96B4F] border-t-2 border-x border-[#E3D7C8] border-t-[#D96B4F] shadow-xs"
                      : "text-[#6E635D] hover:text-[#1A1614] hover:bg-white/60"
                  }
                `}
              >
                <Icon
                  className={`h-4 w-4 ${
                    isCurrent ? "text-[#D96B4F]" : "text-[#785135]"
                  }`}
                />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="mt-6 rounded-3xl bg-white border border-[#E3D7C8] p-6 sm:p-10 shadow-sm">
          {/* TAB 1: PSCC POLES */}
          {activeTab === "pscc" && (
            <div className="space-y-8 animate-in fade-in-50 duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D96B4F]">
                    Utility Power Grid Infrastructure
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A1614]">
                    Pre-Stressed Cement Concrete (PSCC) Poles
                  </h3>
                  <p className="text-sm sm:text-base text-[#4A2D1A] leading-relaxed">
                    Clamshell&apos;s PSCC poles are manufactured by pre-tensioning
                    high-tensile steel wire tendons inside heavy steel moulds,
                    followed by the controlled pouring of high-density M42-M50
                    concrete mix. The compressive stress induced into the
                    concrete counteracts external tension induced by gale wind
                    loads and cable pull, preventing cracks and deflections.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {[
                      "Immune to rust, termites, atmospheric rot & fire",
                      "Factor of Safety 2.5 on Ultimate Transverse Load",
                      "High-grade M50 concrete with low water-cement ratio",
                      "Full grounding earthing terminal embedded internally",
                      "Available with customized cross-arm fixing holes",
                      "Certified under IS:1678 & REC specifications",
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#D96B4F] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-[#4A2D1A]">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 p-6 rounded-2xl bg-[#FAF7F2] border border-[#E3D7C8] space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#785135]">
                    <FileSpreadsheet className="h-4 w-4 text-[#D96B4F]" />
                    <span>Technical Highlights</span>
                  </div>
                  <div className="space-y-2.5 text-xs text-[#4A2D1A]">
                    <div className="flex justify-between py-1.5 border-b border-[#E3D7C8]">
                      <span className="text-[#6E635D]">IS Code Reference</span>
                      <span className="font-bold text-[#1A1614]">IS 1678 : 1998</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-[#E3D7C8]">
                      <span className="text-[#6E635D]">High Tensile Wire</span>
                      <span className="font-bold text-[#1A1614]">
                        4.00mm Dia (IS 1785 Part-I)
                      </span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-[#E3D7C8]">
                      <span className="text-[#6E635D]">UTS of Prestress Wire</span>
                      <span className="font-bold text-[#1A1614]">1750 N/mm²</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-[#E3D7C8]">
                      <span className="text-[#6E635D]">Earthing Wire</span>
                      <span className="font-bold text-[#1A1614]">
                        4mm GI Wire Continuous
                      </span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-[#E3D7C8]">
                      <span className="text-[#6E635D]">Design Service Life</span>
                      <span className="font-bold text-[#D96B4F]">50+ Years</span>
                    </div>
                  </div>

                  <Link
                    href="#quote-tool"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#D96B4F] py-2.5 text-xs font-bold text-white hover:bg-[#C4573B] transition-colors"
                  >
                    <span>Request Quotation for PSCC Poles</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Technical Specifications Matrix Table */}
              <div className="pt-6 border-t border-[#E3D7C8]">
                <h4 className="text-base font-bold text-[#1A1614] mb-4 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#D96B4F]" />
                  <span>Standard PSCC Utility Pole Dimension Specifications</span>
                </h4>

                <div className="overflow-x-auto rounded-2xl border border-[#E3D7C8]">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-[#F6F1EC] text-[#331E11] font-bold uppercase text-[11px] tracking-wider border-b border-[#E3D7C8]">
                      <tr>
                        <th className="p-3.5 sm:p-4">Length</th>
                        <th className="p-3.5 sm:p-4">Working Load</th>
                        <th className="p-3.5 sm:p-4">Ultimate Load</th>
                        <th className="p-3.5 sm:p-4">Top / Bottom Dim.</th>
                        <th className="p-3.5 sm:p-4">Planting Depth</th>
                        <th className="p-3.5 sm:p-4">Primary Application</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#EDE3D7] bg-white">
                      {PSCC_SPECS.map((spec, index) => (
                        <tr
                          key={index}
                          className="hover:bg-[#FEF4F0]/50 transition-colors"
                        >
                          <td className="p-3.5 sm:p-4 font-bold text-[#1A1614]">
                            {spec.length}
                          </td>
                          <td className="p-3.5 sm:p-4 text-[#D96B4F] font-semibold">
                            {spec.workingLoad}
                          </td>
                          <td className="p-3.5 sm:p-4 font-semibold text-[#785135]">
                            {spec.ultimateLoad}
                          </td>
                          <td className="p-3.5 sm:p-4 text-[#573A29]">
                            {spec.topDimension} / {spec.bottomDimension}
                          </td>
                          <td className="p-3.5 sm:p-4 text-[#573A29]">
                            {spec.plantingDepth}
                          </td>
                          <td className="p-3.5 sm:p-4 text-[#573A29]">
                            {spec.application}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: RECTANGULAR POLES */}
          {activeTab === "rectangular" && (
            <div className="space-y-6 animate-in fade-in-50 duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D96B4F]">
                    Urban &amp; Highway Right-of-Way
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A1614]">
                    Rectangular Precast PSCC Poles
                  </h3>
                  <p className="text-sm sm:text-base text-[#4A2D1A] leading-relaxed">
                    Designed specifically for high-density road corridors,
                    expressway lighting, and urban power distribution where
                    easement space is restricted. The rectangular profile
                    concentrates concrete mass along the transverse axis of
                    primary wind drag, offering up to 40% greater lateral
                    stiffness than square alternatives of equivalent weight.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {[
                      "Streamlined aerodynamic drag coefficient",
                      "Minimal footprint ideal for congested footpaths & dividers",
                      "High lateral flexural resistance for extreme storm winds",
                      "Factory pre-moulded cable inlet/outlet ports",
                      "Uniform rectangular cross section for simple bracket mounting",
                      "Customizable lengths from 8.0 meters to 12.0 meters",
                    ].map((f, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#D96B4F] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-[#4A2D1A]">
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 p-6 rounded-2xl bg-[#FAF7F2] border border-[#E3D7C8] space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#785135]">
                    Geometric Advantages
                  </h4>
                  <div className="p-4 rounded-xl bg-white border border-[#E3D7C8] space-y-2">
                    <div className="text-xs font-bold text-[#1A1614]">
                      Directional Moment of Inertia
                    </div>
                    <p className="text-xs text-[#573A29]">
                      By orienting the greater width perpendicular to the line
                      direction, the pole withstands heavy gust loads during
                      monsoons without line sag or conductor clash.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-[#E3D7C8] space-y-2">
                    <div className="text-xs font-bold text-[#1A1614]">
                      Fast Mechanized Erection
                    </div>
                    <p className="text-xs text-[#573A29]">
                      Parallel faces enable simple hydraulic clamping by our
                      truck-mounted boom cranes, speeding up installation by 3x.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SPUN POLES & PILES */}
          {activeTab === "spun" && (
            <div className="space-y-6 animate-in fade-in-50 duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D96B4F]">
                    Centrifugal Casting Technology
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A1614]">
                    Prestressed Spun Concrete Poles &amp; Piles
                  </h3>
                  <p className="text-sm sm:text-base text-[#4A2D1A] leading-relaxed">
                    Spun concrete poles and piles represent the zenith of precast
                    density. Cast in rotating cylindrical moulds at centrifugal
                    speeds exceeding 400 RPM, all excess water and entrapped air
                    are expelled inward, yielding an ultra-dense, void-free
                    concrete shell impervious to moisture, chemical salts, and
                    marine corrosion.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {[
                      "Ideal for coastal saline corridors & chemical industrial zones",
                      "Hollow core reduces dead load by 35% without strength loss",
                      "Compressive strength exceeds M60 grade",
                      "Used for 66kV transmission, Metro catenary & High-Mast",
                      "Foundation spun piles for bridges, jetties & wind turbines",
                      "Glass-smooth exterior finish requiring zero painting",
                    ].map((f, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#D96B4F] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-[#4A2D1A]">
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 p-6 rounded-2xl bg-[#FAF7F2] border border-[#E3D7C8] space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#785135]">
                    Centrifugal Compaction Metrics
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-white border border-[#E3D7C8] text-center">
                      <div className="text-xl font-bold text-[#D96B4F]">400+</div>
                      <div className="text-[11px] text-[#573A29]">
                        RPM Spinning Speed
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-[#E3D7C8] text-center">
                      <div className="text-xl font-bold text-[#D96B4F]">M60</div>
                      <div className="text-[11px] text-[#573A29]">
                        Concrete Rating
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-[#E3D7C8] text-center">
                      <div className="text-xl font-bold text-[#D96B4F]">0%</div>
                      <div className="text-[11px] text-[#573A29]">Air Voids</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-[#E3D7C8] text-center">
                      <div className="text-xl font-bold text-[#D96B4F]">100 Yrs</div>
                      <div className="text-[11px] text-[#573A29]">Marine Life</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: PRECAST CIVIL INFRASTRUCTURE */}
          {activeTab === "precast" && (
            <div className="space-y-6 animate-in fade-in-50 duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D96B4F]">
                    Modular Speed &amp; Precision
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A1614]">
                    Precast Concrete Civil Infrastructure
                  </h3>
                  <p className="text-sm sm:text-base text-[#4A2D1A] leading-relaxed">
                    Beyond utility poles, Clamshell provides turnkey precast
                    structural systems for power substations, renewable energy
                    farms, and smart highway projects. Offsite fabrication
                    reduces project schedules by up to 70% while guaranteeing
                    uniform quality impossible with cast-in-situ concrete.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {[
                      "Precast Substation Cable Trenches with Interlocking Covers",
                      "Heavy Boundary Wall Systems with Tongue & Groove Panels",
                      "Transformer Foundation Plinths & Fire Barrier Walls",
                      "Modular Precast Box Culverts for Highway Drainage",
                      "Precast Railway Platform Coping Slabs & Sleepers",
                      "Custom Industrial Enclosures & Retention Basins",
                    ].map((f, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#D96B4F] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-[#4A2D1A]">
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 p-6 rounded-2xl bg-[#FAF7F2] border border-[#E3D7C8] space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#785135]">
                    Substation Solutions
                  </h4>
                  <div className="p-4 rounded-xl bg-white border border-[#E3D7C8] space-y-2">
                    <div className="text-xs font-bold text-[#1A1614]">
                      Precast Electrical Trenches
                    </div>
                    <p className="text-xs text-[#573A29]">
                      Integrated rebars and drainage slopes prevent waterlogging
                      around high-voltage cabling in 220kV and 400kV switchyards.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-[#E3D7C8] space-y-2">
                    <div className="text-xs font-bold text-[#1A1614]">
                      Speed of Commissioning
                    </div>
                    <p className="text-xs text-[#573A29]">
                      Enables substation civil works to be completed in days
                      rather than months, avoiding costly on-site curing delays.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
