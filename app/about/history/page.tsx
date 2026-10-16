import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "History | Clamshell Infrastructure Private Limited",
  description:
    "The journey and heritage of Clamshell Infrastructure Private Limited in building resilient utility infrastructure across India.",
};

export default function HistoryPage() {
  const milestones = [
    {
      year: "2004",
      title: "Founding & Infrastructure Vision",
      description:
        "Clamshell Infrastructure Private Limited was incorporated with a mission to eliminate substandard casting practices in rural electrification. We began operations with a dedicated yard focused on precision pre-tensioned utility poles.",
    },
    {
      year: "2010",
      title: "Pioneering Mechanized Prestressing & 'SHAPE PERFECT'",
      description:
        "Adopted long-line multi-wire pre-tensioning beds, computerized aggregate batching, and high-frequency consolidation moulds. Established the 'SHAPE PERFECT' benchmark with M50 grade concrete and strict transverse load testing.",
    },
    {
      year: "2016",
      title: "Multi-Hub Regional Expansion",
      description:
        "Commissioned automated manufacturing facilities across Hyderabad, Visakhapatnam, Nagpur, and Bengaluru. Expanded annual casting capacity past 1 million units to meet massive DISCOM rural electrification rollouts.",
    },
    {
      year: "2020",
      title: "Spun Concrete & Saline Defense Innovations",
      description:
        "Introduced centrifugal high-speed spun concrete casting lines for coastal transmission lines, railway catenary systems, and port infrastructure immune to aggressive saline corrosion and monsoon storms.",
    },
    {
      year: "Present",
      title: "Nationwide Leadership & 24/7 Rapid Mobilization",
      description:
        "Producing over 150,000 poles monthly across 6 facilities with dedicated truck-mounted boom crane fleets. Trusted vendor for all major state electricity boards and premier EPC infrastructure contractors.",
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
            <span>ABOUT CLAMSHELL INFRASTRUCTURE</span>
          </div>
          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1A1614] leading-tight">
            Our History
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#573A29] leading-relaxed">
            Over two decades of engineering discipline, expanding from regional precast casting into
            one of India&apos;s foremost manufacturers of electrical transmission poles and heavy civil
            precast infrastructure.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="mt-12 space-y-6 max-w-4xl">
          {milestones.map((m, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E3D7C8] shadow-xs hover:border-[#D96B4F] transition-colors flex flex-col sm:flex-row gap-6 items-start"
            >
              <div className="shrink-0 flex sm:flex-col items-center gap-2 sm:gap-1">
                <div className="h-12 w-12 rounded-2xl bg-[#FEF4F0] flex items-center justify-center text-[#D96B4F] font-black text-sm">
                  <Calendar className="h-5 w-5" />
                </div>
                <span className="text-xl sm:text-2xl font-black text-[#D96B4F] sm:mt-1">
                  {m.year}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#1A1614]">{m.title}</h3>
                <p className="text-xs sm:text-sm text-[#573A29] leading-relaxed">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 max-w-4xl p-8 rounded-3xl bg-[#FAF7F2] border border-[#E3D7C8] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-[#1A1614]">Partner with an Established Industry Pioneer</h3>
            <p className="text-xs sm:text-sm text-[#573A29] mt-1">
              Explore how our manufacturing heritage supports large-scale utility and EPC tenders.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#D96B4F] px-6 py-3 text-sm font-bold text-white hover:bg-[#C4573B] transition-colors shrink-0"
          >
            <span>Get in Touch</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
