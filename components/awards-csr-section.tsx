"use client";

import React from "react";
import {
  Award,
  ShieldCheck,
  Leaf,
  Droplets,
  GraduationCap,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export function AwardsCsrSection() {
  const awards = [
    {
      title: "Pearls of Infrastructure Excellence",
      org: "National Infrastructure & Energy Forum",
      desc: "Conferred for outstanding manufacturing scale, quality governance, and flawless cyclone disaster restoration supplies.",
    },
    {
      title: "BIS License Certification Mark",
      org: "Bureau of Indian Standards (BIS)",
      desc: "Official certification mark honoring complete conformance to IS:1678 for pre-stressed concrete transmission structures.",
    },
    {
      title: "Tri-Cert Integrated Management (IMS)",
      org: "TUV NORD / ISO Standards",
      desc: "Certified for ISO 9001:2015 (Quality), ISO 14001:2015 (Environment), and ISO 45001:2018 (Occupational Safety).",
    },
    {
      title: "Top Power Utility Vendor Award",
      org: "Federation of State DISCOMs",
      desc: "Recognized for maintaining 99.8% on-time delivery across multiple state rural electrification programs.",
    },
  ];

  const csrPillars = [
    {
      icon: Leaf,
      title: "Green Concrete & Carbon Decarbonization",
      desc: "Incorporating up to 35% recycled industrial pozzolanic fly ash and slag into our concrete mixes, lowering embodied carbon by 30% while enhancing resistance to chemical soil sulfates and marine air.",
    },
    {
      icon: Droplets,
      title: "100% Water Harvesting & Closed Loop Curing",
      desc: "Every manufacturing yard is engineered with expansive rainwater collection ponds and water filtration loops, recycling 95% of curing water and recharging millions of liters into local aquifers annually.",
    },
    {
      icon: GraduationCap,
      title: "Rural Technical Vocational Academy",
      desc: "Providing accredited vocational training for youth in neighboring rural districts in mechanized crane rigging, hydraulic batching operations, and concrete laboratory testing to empower local communities.",
    },
  ];

  return (
    <section className="w-full py-20 sm:py-28 bg-[#FFFDFB] border-b border-[#E3D7C8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FEF4F0] px-3.5 py-1 text-xs font-bold text-[#D96B4F]">
            <span>ACCREDITATIONS &amp; SUSTAINABILITY</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1A1614] leading-tight">
            Recognized Excellence &amp; Responsible Manufacturing
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#573A29]">
            Clamshell Infrastructure balances large-scale industrial capability
            with rigorous environmental governance and meaningful community
            empowerment.
          </p>
        </div>

        {/* Awards 4-Card Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-3xl bg-[#FAF7F2] border border-[#E3D7C8] shadow-xs hover:border-[#D96B4F] hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="h-10 w-10 rounded-xl bg-white border border-[#E3D7C8] flex items-center justify-center text-[#D96B4F]">
                  <Award className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-base text-[#1A1614] leading-snug">
                  {item.title}
                </h4>
                <div className="text-[11px] font-bold text-[#785135] uppercase tracking-wider">
                  {item.org}
                </div>
                <p className="text-xs text-[#573A29] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E3D7C8] flex items-center gap-1.5 text-[11px] font-semibold text-[#D96B4F]">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>Certified &amp; Conferred</span>
              </div>
            </div>
          ))}
        </div>

        {/* CSR Banner */}
        <div className="mt-16 rounded-3xl bg-gradient-to-br from-[#FAF7F2] to-[#F6F1EC] border border-[#E3D7C8] p-6 sm:p-10">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D96B4F]">
              Corporate Social Responsibility
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A1614] mt-1">
              Building a Sustainable Infrastructure Tomorrow
            </h3>
            <p className="text-sm text-[#573A29] mt-2">
              Our pledge toward sustainable manufacturing, carbon neutrality,
              and empowering the rural regions surrounding our 6 production
              facilities.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {csrPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-[#E3D7C8] shadow-xs space-y-3"
                >
                  <div className="h-10 w-10 rounded-xl bg-[#FEF4F0] flex items-center justify-center text-[#D96B4F]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="font-bold text-base text-[#1A1614]">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-[#573A29] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
