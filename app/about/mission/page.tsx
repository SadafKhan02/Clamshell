import type { Metadata } from "next";
import Link from "next/link";
import { Compass, Target, Award, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Mission | Clamshell Infrastructure Private Limited",
  description:
    "Our mission, vision, and core values at Clamshell Infrastructure Private Limited.",
};

export default function MissionPage() {
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
            Our Mission &amp; Vision
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#573A29] leading-relaxed">
            The core tenets and operational philosophy guiding Clamshell Infrastructure Private
            Limited in building durable, high-reliability precast and transmission infrastructure.
          </p>
        </div>

        {/* Vision, Mission & Core Values Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Vision */}
          <div className="p-8 rounded-3xl bg-white border border-[#E3D7C8] shadow-xs hover:border-[#D96B4F] hover:shadow-lg transition-all duration-300">
            <div className="h-12 w-12 rounded-2xl bg-[#FEF4F0] flex items-center justify-center text-[#D96B4F] mb-6">
              <Compass className="h-6 w-6" />
            </div>
            <h2 className="text-xl font-bold text-[#1A1614]">Our Vision</h2>
            <p className="mt-3 text-sm text-[#573A29] leading-relaxed">
              To be the most trusted, innovative, and resilient pillar of India&apos;s electrical power
              transmission and precast infrastructure, recognized globally for structural endurance and
              large-scale manufacturing prowess.
            </p>
          </div>

          {/* Card 2: Mission */}
          <div className="p-8 rounded-3xl bg-white border border-[#E3D7C8] shadow-xs hover:border-[#D96B4F] hover:shadow-lg transition-all duration-300">
            <div className="h-12 w-12 rounded-2xl bg-[#F6F1EC] flex items-center justify-center text-[#785135] mb-6">
              <Target className="h-6 w-6" />
            </div>
            <h2 className="text-xl font-bold text-[#1A1614]">Our Mission</h2>
            <p className="mt-3 text-sm text-[#573A29] leading-relaxed">
              Supply zero-defect, certified PSCC and spun concrete solutions at unrivaled scale to
              power companies, supporting rapid grid expansion, rural electrification, and disaster
              recovery with punctual delivery.
            </p>
          </div>

          {/* Card 3: Core Values */}
          <div className="p-8 rounded-3xl bg-white border border-[#E3D7C8] shadow-xs hover:border-[#D96B4F] hover:shadow-lg transition-all duration-300">
            <div className="h-12 w-12 rounded-2xl bg-[#FEF4F0] flex items-center justify-center text-[#D96B4F] mb-6">
              <Award className="h-6 w-6" />
            </div>
            <h2 className="text-xl font-bold text-[#1A1614]">Core Values</h2>
            <ul className="mt-3 space-y-2 text-sm text-[#573A29]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#D96B4F] shrink-0" />
                <span>
                  <strong>Integrity:</strong> Unwavering honesty in metallurgy &amp; materials.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#D96B4F] shrink-0" />
                <span>
                  <strong>Precision:</strong> Millimeter tolerances in prestressing.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#D96B4F] shrink-0" />
                <span>
                  <strong>Reliability:</strong> 24/7 disaster restoration mobilization.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Quality Commitment Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-[#FAF7F2] border border-[#E3D7C8] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D96B4F]">
              Quality Assurance
            </span>
            <h3 className="text-xl font-extrabold text-[#1A1614]">
              Adherence to IS:1678 &amp; REC Specifications
            </h3>
            <p className="text-xs sm:text-sm text-[#573A29]">
              Every batch undergoes transverse deflection, load-to-failure testing, and cube compressive verification.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#D96B4F] px-6 py-3 text-sm font-bold text-white hover:bg-[#C4573B] transition-colors shrink-0"
          >
            <span>Request Tender Pack</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
