import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Zap, ArrowRight, Layers, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Cable Wires | Clamshell Infrastructure Private Limited",
  description:
    "High-tensile prestressing steel wire, continuous GI earthing wire, stay wire strands, and overhead transmission conductors.",
};

export default function CableWiresPage() {
  const wireProducts = [
    {
      title: "High-Tensile (HT) Prestressing Wire",
      standard: "IS 1785 (Part-I) : 1983",
      spec: "4.00 mm Diameter | UTS 1750 N/mm²",
      description:
        "Manufactured from high-carbon steel with low relaxation properties. High elastic limit ensures enduring pre-compression in concrete without tendon relaxation over 50+ years of operational service.",
      features: [
        "Diameter: 4.00 mm (Plain & Indented surface options)",
        "Minimum Ultimate Tensile Strength: 1715 - 1750 N/mm²",
        "Elongation at gauge length: > 4.0%",
        "Tested for 1000-hour relaxation resistance",
      ],
    },
    {
      title: "Continuous Galvanized Iron (GI) Earth Wire",
      standard: "IS 280 / IS 4826",
      spec: "4.00 mm Continuous Internal Conductor",
      description:
        "Embedded integrally inside every Clamshell PSCC pole. Connects the top lightning arrestor terminal directly to the bottom ground electrode, eliminating exterior theft and corrosion vulnerabilities.",
      features: [
        "4.00 mm heavy galvanized iron wire",
        "Zinc coating weight conforming to IS:4826 Class A",
        "High surge dissipation capacity for lightning protection",
        "Internal factory routing protected against mechanical abrasion",
      ],
    },
    {
      title: "Galvanized Stay Wire & Guy Strands",
      standard: "IS 2141 : 2000",
      spec: "7/8 SWG, 7/10 SWG & 7/12 SWG Stranded Steel",
      description:
        "Multi-strand galvanized steel wire designed for anchoring pole structures at angle locations, dead-ends, and river/roadway crossings subject to severe unilateral wind loads.",
      features: [
        "Tensile grade up to 1100 N/mm²",
        "Heavy zinc galvanization against soil and atmospheric rot",
        "Uniform lay length and torsion strength",
        "High breaking load for terminal guy anchoring",
      ],
    },
    {
      title: "Overhead Distribution Conductors (ACSR & AAAC)",
      standard: "IS 398 (Part-II & Part-IV)",
      spec: "Weasel, Rabbit, Dog, Panther & AAAC Conductors",
      description:
        "Aluminium Conductor Steel Reinforced (ACSR) and All Aluminium Alloy Conductors (AAAC) for 11kV, 33kV, and low-tension rural/urban feeder distribution lines.",
      features: [
        "High mechanical strength-to-weight ratio",
        "Superior electrical conductivity with low transmission loss",
        "Corrosion-resistant grease treatment available for coastal belts",
        "Compatible with all Clamshell pole cross-arm fittings",
      ],
    },
  ];

  return (
    <div className="w-full py-16 sm:py-24 bg-[#FFFDFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-xs font-semibold text-[#785135] hover:text-[#D96B4F] transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FEF4F0] px-3.5 py-1 text-xs font-bold text-[#D96B4F]">
            <span>FLAGSHIP PRODUCT PORTFOLIO</span>
          </div>
          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1A1614] leading-tight">
            Cable Wires &amp; Transmission Hardware
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#573A29] leading-relaxed">
            High-tensile prestressing steel wire, continuous internal grounding conductors, galvanized
            stay wire strands, and overhead distribution conductors engineered to national standards.
          </p>
        </div>

        {/* Wire Products Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {wireProducts.map((p, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-[#FAF7F2] border border-[#E3D7C8] shadow-xs flex flex-col justify-between space-y-4 hover:border-[#D96B4F] transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#D96B4F] bg-[#FEF4F0] px-3 py-1 rounded-full border border-[#D96B4F]/20">
                    {p.standard}
                  </span>
                  <span className="text-xs font-semibold text-[#785135]">
                    {p.spec}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#1A1614]">{p.title}</h3>
                <p className="text-xs sm:text-sm text-[#573A29] leading-relaxed">
                  {p.description}
                </p>

                <div className="pt-3 border-t border-[#E3D7C8]/80 space-y-2">
                  {p.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#4A2D1A]">
                      <CheckCircle2 className="h-4 w-4 text-[#D96B4F] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E3D7C8]">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#D96B4F] hover:text-[#C4573B] transition-colors"
                >
                  <span>Request BOQ &amp; Freight Schedule</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Certifications Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-white border border-[#E3D7C8] shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-2xl bg-[#FEF4F0] flex items-center justify-center text-[#D96B4F] shrink-0">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1A1614]">
                  Metallurgical Batch Testing &amp; BIS Compliance
                </h3>
                <p className="text-xs sm:text-sm text-[#573A29] mt-0.5">
                  Every coil of prestressing wire undergoes chemical composition analysis, proof stress
                  measurement, and reverse bend testing in accredited testing laboratories.
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#D96B4F] px-6 py-3 text-sm font-bold text-white hover:bg-[#C4573B] transition-colors shrink-0"
            >
              <span>Inquire for Cable Wires</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
