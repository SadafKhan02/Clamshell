import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, FileSpreadsheet, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "PSCC Poles | Clamshell Infrastructure Private Limited",
  description:
    "Pre-Stressed Cement Concrete (PSCC) utility poles manufactured according to IS:1678 and REC specifications with factor of safety 2.5.",
};

const PSCC_SPECS = [
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

export default function PsccPolesPage() {
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
            PSCC Poles (Pre-Stressed Cement Concrete)
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#573A29] leading-relaxed">
            Manufactured in strict compliance with Indian Standards (IS:1678, IS:2905, IS:7321) and
            Rural Electrification Corporation (REC) guidelines for unmatched structural endurance under
            cyclonic wind loads.
          </p>
        </div>

        {/* Technical Highlights & Overview */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl font-extrabold text-[#1A1614]">
              Utility Power Grid Infrastructure
            </h2>
            <p className="text-sm sm:text-base text-[#4A2D1A] leading-relaxed">
              Clamshell&apos;s PSCC poles are manufactured by pre-tensioning high-tensile steel wire
              tendons inside heavy steel moulds, followed by the controlled pouring of high-density
              M42-M50 concrete mix. The compressive stress induced into the concrete counteracts external
              tension caused by storm winds and conductor pull, preventing micro-cracks and line sag.
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
                  <span className="text-xs sm:text-sm text-[#4A2D1A]">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#FAF7F2] border border-[#E3D7C8] space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#785135]">
              <FileSpreadsheet className="h-4 w-4 text-[#D96B4F]" />
              <span>Technical Standards &amp; Codes</span>
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-[#4A2D1A]">
              <div className="flex justify-between py-1.5 border-b border-[#E3D7C8]">
                <span className="text-[#6E635D]">IS Code Reference</span>
                <span className="font-bold text-[#1A1614]">IS 1678 : 1998</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#E3D7C8]">
                <span className="text-[#6E635D]">Prestressing Wire</span>
                <span className="font-bold text-[#1A1614]">4.00mm Dia (IS 1785 Part-I)</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#E3D7C8]">
                <span className="text-[#6E635D]">UTS of Wire</span>
                <span className="font-bold text-[#1A1614]">1750 N/mm²</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#E3D7C8]">
                <span className="text-[#6E635D]">Earthing Wire</span>
                <span className="font-bold text-[#1A1614]">4mm GI Wire Continuous</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#E3D7C8]">
                <span className="text-[#6E635D]">Design Service Life</span>
                <span className="font-bold text-[#D96B4F]">50+ Years</span>
              </div>
            </div>

            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#D96B4F] py-3 text-xs sm:text-sm font-bold text-white hover:bg-[#C4573B] transition-colors mt-2"
            >
              <span>Request Quotation for PSCC Poles</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Technical Specifications Matrix Table */}
        <div className="mt-16 pt-8 border-t border-[#E3D7C8]">
          <h2 className="text-xl font-bold text-[#1A1614] mb-4 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#D96B4F]" />
            <span>Standard PSCC Utility Pole Dimension Specifications</span>
          </h2>

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
                  <tr key={index} className="hover:bg-[#FEF4F0]/50 transition-colors">
                    <td className="p-3.5 sm:p-4 font-bold text-[#1A1614]">{spec.length}</td>
                    <td className="p-3.5 sm:p-4 text-[#D96B4F] font-semibold">{spec.workingLoad}</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-[#785135]">{spec.ultimateLoad}</td>
                    <td className="p-3.5 sm:p-4 text-[#573A29]">{spec.topDimension} / {spec.bottomDimension}</td>
                    <td className="p-3.5 sm:p-4 text-[#573A29]">{spec.plantingDepth}</td>
                    <td className="p-3.5 sm:p-4 text-[#573A29]">{spec.application}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-[#331E11] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold">Need Custom Load or Height Specifications?</h3>
            <p className="text-xs sm:text-sm text-[#EDE3D7] mt-1">
              We cast customized pole dimensions with designated hole layouts and embedded fittings.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#D96B4F] px-6 py-3 text-sm font-bold text-white hover:bg-[#C4573B] transition-colors shrink-0"
          >
            <span>Inquire for Custom Poles</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
