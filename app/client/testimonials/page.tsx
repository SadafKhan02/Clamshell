import type { Metadata } from "next";
import Link from "next/link";
import { Star, Quote, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Testimonials | Clamshell Infrastructure Private Limited",
  description:
    "Verified feedback and endorsements from state power utilities, central electricity corporations, and EPC project directors.",
};

export default function TestimonialsPage() {
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
            <span>OUR ESTEEMED CLIENTS &amp; PARTNERS</span>
          </div>
          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1A1614] leading-tight">
            Client Testimonials
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#573A29] leading-relaxed">
            Verified feedback and performance reviews from engineering authorities, procurement directors,
            and state power distribution utilities across India.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#E3D7C8] shadow-xs flex flex-col justify-between space-y-6 hover:border-[#D96B4F] hover:shadow-md transition-all duration-200"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-[#D96B4F]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#D96B4F]" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-[#E3D7C8]" />
                <p className="text-xs sm:text-sm text-[#4A2D1A] italic leading-relaxed">
                  &quot;{t.quote}&quot;
                </p>
              </div>

              <div className="pt-4 border-t border-[#E3D7C8]">
                <div className="font-bold text-sm text-[#1A1614]">
                  {t.author}
                </div>
                <div className="text-xs font-semibold text-[#785135] mt-0.5">
                  {t.org}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reliability & Quality Metrics */}
        <div className="mt-16 p-8 rounded-3xl bg-white border border-[#E3D7C8] shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-extrabold text-[#D96B4F]">99.8%</div>
              <div className="text-xs sm:text-sm font-semibold text-[#1A1614] mt-1">
                Zero-Breakage Delivery Rate
              </div>
              <div className="text-xs text-[#785135] mt-0.5">
                Crane-assisted safe unloading
              </div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-[#D96B4F]">100%</div>
              <div className="text-xs sm:text-sm font-semibold text-[#1A1614] mt-1">
                IS:1678 / IS:2905 Tested
              </div>
              <div className="text-xs text-[#785135] mt-0.5">
                NABL lab calibration standard
              </div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-[#D96B4F]">24/7</div>
              <div className="text-xs sm:text-sm font-semibold text-[#1A1614] mt-1">
                Disaster Restoration Desk
              </div>
              <div className="text-xs text-[#785135] mt-0.5">
                Rapid emergency dispatch capability
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-12 p-8 rounded-3xl bg-[#331E11] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold">Request References &amp; Test Certificates</h3>
            <p className="text-xs sm:text-sm text-[#EDE3D7] mt-1">
              Our engineering team can supply utility test certifications and third-party NABL reports.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#D96B4F] px-6 py-3 text-sm font-bold text-white hover:bg-[#C4573B] transition-colors shrink-0"
          >
            <span>Contact Us</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
