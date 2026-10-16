"use client";

import React from "react";
import { FileText, Download, CheckCircle2, ShieldCheck } from "lucide-react";

export function DownloadsSection() {
  const documents = [
    {
      title: "Clamshell Comprehensive Product Catalogue",
      type: "PDF",
      size: "8.4 MB",
      desc: "Full technical drawings, working loads, bending moments, and dimensional data for PSCC, rectangular, and spun poles.",
    },
    {
      title: "IS:1678 & REC Design Specifications Manual",
      type: "PDF",
      size: "3.2 MB",
      desc: "Engineering guidelines on transverse loads, planting depth, grounding conductors, and cross-arm installation practices.",
    },
    {
      title: "ISO 9001:2015 & BIS Certification Dossier",
      type: "PDF",
      size: "2.1 MB",
      desc: "Accreditation certificates, NABL test bed audit reports, and Bureau of Indian Standards CM/L license endorsements.",
    },
    {
      title: "Emergency Grid Disaster Response Capability Profile",
      type: "PDF",
      size: "1.8 MB",
      desc: "Fleet logistics overview, truck-mounted crane handling protocol, and rapid mobilization case studies.",
    },
  ];

  return (
    <section
      id="downloads"
      className="w-full py-20 sm:py-28 bg-[#FBF7F2] border-b border-[#E3D7C8] scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FEF4F0] px-3.5 py-1 text-xs font-bold text-[#D96B4F]">
            <FileText className="h-3.5 w-3.5" />
            <span>RESOURCES &amp; TECHNICAL DOCUMENTATION</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1A1614] leading-tight">
            Download Engineering Specs &amp; Technical Manuals
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#573A29]">
            Access official technical catalogs, load calculation sheets, and
            certification documents for utility tender documentation.
          </p>
        </div>

        {/* Documents Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="p-6 rounded-3xl bg-white border border-[#E3D7C8] shadow-xs hover:border-[#D96B4F] hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl bg-[#FEF4F0] flex items-center justify-center text-[#D96B4F] shrink-0">
                  <FileText className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#785135] text-white">
                      {doc.type}
                    </span>
                    <span className="text-xs text-[#6E635D]">{doc.size}</span>
                  </div>
                  <h4 className="font-bold text-base text-[#1A1614] leading-snug">
                    {doc.title}
                  </h4>
                  <p className="text-xs text-[#573A29] leading-relaxed pt-1">
                    {doc.desc}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E3D7C8] flex items-center justify-between">
                <span className="text-xs font-medium text-[#785135] flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Free Utility Resource</span>
                </span>
                <button
                  type="button"
                  onClick={() =>
                    alert(
                      `Downloading ${doc.title} (${doc.size}). Thank you for your interest in Clamshell Infrastructure.`
                    )
                  }
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#D96B4F] hover:bg-[#C4573B] text-xs font-bold text-white shadow-xs transition-colors"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download Document</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
