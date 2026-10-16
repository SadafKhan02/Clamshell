"use client";

import React from "react";
import { Award, CheckCircle2, Star, Quote, Building } from "lucide-react";

export function ClientsSection() {
  const clients = [
    { name: "TSSPDCL", role: "Southern Power Distribution Co. of Telangana" },
    { name: "TSNPDCL", role: "Northern Power Distribution Co. of Telangana" },
    { name: "APCPDCL", role: "Central Power Distribution Co. of Andhra Pradesh" },
    { name: "APEPDCL", role: "Eastern Power Distribution Co. of Andhra Pradesh" },
    { name: "BESCOM", role: "Bangalore Electricity Supply Company" },
    { name: "MSEDCL", role: "Maharashtra State Electricity Distribution Co." },
    { name: "TANGEDCO", role: "Tamil Nadu Generation & Distribution Corp." },
    { name: "PGCIL", role: "Power Grid Corporation of India Limited" },
    { name: "L&T Construction", role: "Power Transmission & Distribution IC" },
    { name: "Tata Power", role: "Transmission & Renewable Infrastructure" },
    { name: "Adani Energy Solutions", role: "HV Transmission Lines" },
    { name: "NTPC Limited", role: "National Thermal Power Corporation" },
    { name: "KEC International", role: "EPC Infrastructure Contractors" },
    { name: "Kalpataru Projects", role: "Power Transmission & Substations" },
    { name: "Sterling & Wilson", role: "Solar Farm Grid Interconnects" },
    { name: "Indian Railways", role: "Overhead Catenary & Sleepers" },
  ];

  const testimonials = [
    {
      quote:
        "Clamshell Infrastructure is our premier vendor for large-volume PSCC pole dispatches. During severe storm relief operations in coastal districts, their ability to deliver 25,000 certified poles with truck-mounted boom cranes without a single broken unit saved weeks of critical restoration time.",
      author: "Chief General Manager (Procurement)",
      org: "State Power Distribution Corporation",
      rating: 5,
    },
    {
      quote:
        "Their adherence to IS:1678 standards and the 'Shape Perfect' philosophy is evident in their test reports. The poles exhibit exceptional transverse deflection recovery, and the dimensional consistency across 100,000+ units is the best we've seen in the precast sector.",
      author: "Project Director",
      org: "Leading National Power EPC Contractor",
      rating: 5,
    },
    {
      quote:
        "The dedicated logistics fleet with self-unloading hydraulic cranes is a massive operational advantage. We eliminated manual labor unloading risks on site, and our contractor teams completed rural line stringing far ahead of target milestones.",
      author: "Superintending Engineer (Grid Modernization)",
      org: "Central Electricity Utility",
      rating: 5,
    },
  ];

  return (
    <section
      id="clients"
      className="w-full py-20 sm:py-28 bg-[#FBF7F2] border-b border-[#E3D7C8] scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FEF4F0] px-3.5 py-1 text-xs font-bold text-[#D96B4F]">
            <span>OUR ESTEEMED CLIENTS &amp; PARTNERS</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1A1614] leading-tight">
            Trusted by India&apos;s Leading Utilities &amp; EPC Giants
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#573A29]">
            Over 2 decades of consistent, uncompromised delivery to state power
            corporations, central transmission grids, and infrastructure leaders.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {clients.map((client, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-white border border-[#E3D7C8] shadow-2xs hover:border-[#D96B4F] hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="h-7 w-7 rounded-lg bg-[#FEF4F0] flex items-center justify-center text-[#D96B4F] shrink-0 font-black text-xs">
                  {client.name.slice(0, 2)}
                </div>
                <h4 className="font-extrabold text-[#1A1614] text-sm truncate">
                  {client.name}
                </h4>
              </div>
              <p className="text-[11px] text-[#6E635D] line-clamp-2">
                {client.role}
              </p>
              <div className="mt-3 pt-2 border-t border-[#EDE3D7] flex items-center justify-between text-[10px] text-[#785135]">
                <span>Approved Vendor</span>
                <span className="text-emerald-700 font-bold">✓ Active</span>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials 3-Card Row */}
        <div className="mt-16">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-bold text-[#1A1614]">
              What Our Engineering Partners Say
            </h3>
            <span className="text-xs font-semibold text-[#D96B4F]">
              Verified Feedback
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-[#E3D7C8] shadow-xs flex flex-col justify-between space-y-4 hover:border-[#D96B4F] transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-[#D96B4F]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#D96B4F]" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-[#E3D7C8]" />
                  <p className="text-xs sm:text-sm text-[#4A2D1A] italic leading-relaxed">
                    &quot;{t.quote}&quot;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E3D7C8]">
                  <div className="font-bold text-xs sm:text-sm text-[#1A1614]">
                    {t.author}
                  </div>
                  <div className="text-[11px] font-medium text-[#785135]">
                    {t.org}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
