import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, CheckCircle2, ArrowRight, Factory, Zap, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Overview | Clamshell Infrastructure Private Limited",
  description:
    "Company overview, manufacturing capabilities, and the SHAPE PERFECT engineering commitment of Clamshell Infrastructure Private Limited.",
};

export default function OverviewPage() {
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
            Company Overview
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#573A29] leading-relaxed">
            Clamshell Infrastructure Private Limited is one of the nation&apos;s foremost
            manufacturers of Pre-Stressed Cement Concrete (PSCC) poles, specialized rectangular poles,
            and spun concrete piles. With an annual production capability of over 1.8 million units across
            6 modern plants, we are the preferred infrastructure partner for state power distribution
            utilities, EPC contractors, and national grid operators.
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E3D7C8] text-center">
            <div className="text-3xl sm:text-4xl font-black text-[#D96B4F]">1.8M+</div>
            <div className="mt-1 text-xs sm:text-sm font-semibold text-[#785135]">
              Annual Unit Capacity
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E3D7C8] text-center">
            <div className="text-3xl sm:text-4xl font-black text-[#D96B4F]">6 Plants</div>
            <div className="mt-1 text-xs sm:text-sm font-semibold text-[#785135]">
              Integrated Modern Facilities
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E3D7C8] text-center">
            <div className="text-3xl sm:text-4xl font-black text-[#D96B4F]">50+ Yrs</div>
            <div className="mt-1 text-xs sm:text-sm font-semibold text-[#785135]">
              Operational Design Life
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E3D7C8] text-center">
            <div className="text-3xl sm:text-4xl font-black text-[#D96B4F]">ISO 9001</div>
            <div className="mt-1 text-xs sm:text-sm font-semibold text-[#785135]">
              &amp; BIS Certified Standards
            </div>
          </div>
        </div>

        {/* The "SHAPE PERFECT" Philosophy Card */}
        <div className="mt-12 rounded-3xl bg-[#FAF7F2] border border-[#E3D7C8] p-6 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D96B4F]">
                The Core Motto
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1614]">
                The &quot;SHAPE PERFECT&quot; Commitment
              </h2>
              <p className="text-sm sm:text-base text-[#4A2D1A] leading-relaxed">
                In pre-stressed concrete infrastructure, minor variations in mould alignment,
                aggregate density, or wire tensioning can lead to micro-fractures, moisture seepage,
                and grid failure during storm loading.
              </p>
              <p className="text-sm sm:text-base text-[#4A2D1A] leading-relaxed">
                Our motto, <strong className="text-[#983B23] font-bold">&quot;SHAPE PERFECT&quot;</strong>,
                is not merely a brand slogan—it is our engineering standard. Every pole cast at
                Clamshell utilizes heavy-gauge CNC-machined steel moulds, computerized weigh batching,
                synchronized multi-wire hydraulic tensioning, and high-frequency consolidation to ensure
                impeccable geometric accuracy and structural longevity.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#E3D7C8]/80">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-[#D96B4F]">M50</div>
                  <div className="text-xs font-semibold text-[#785135]">Concrete Grade</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-[#D96B4F]">2.5x</div>
                  <div className="text-xs font-semibold text-[#785135]">Factor of Safety</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-[#D96B4F]">±2mm</div>
                  <div className="text-xs font-semibold text-[#785135]">Tolerances</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-[#D96B4F]">100%</div>
                  <div className="text-xs font-semibold text-[#785135]">Routine Tested</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-white border border-[#E3D7C8] shadow-md text-center">
              <div className="relative h-24 w-24 rounded-full border-4 border-[#D96B4F]/20 p-1 bg-white mb-4">
                <Image
                  src="/logo.jpg"
                  alt="Clamshell Infrastructure Official Brand Seal"
                  width={96}
                  height={96}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="font-extrabold text-[#1A1614] text-base">
                Clamshell Infrastructure
              </h3>
              <p className="text-xs font-semibold text-[#D96B4F] mt-0.5">
                Private Limited
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF4F0] text-[11px] font-bold text-[#983B23] border border-[#D96B4F]/20">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>Certified QMS ISO 9001:2015</span>
              </div>
            </div>
          </div>
        </div>

        {/* Manufacturing Strengths */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-[#E3D7C8] shadow-xs">
            <div className="h-10 w-10 rounded-xl bg-[#FEF4F0] flex items-center justify-center text-[#D96B4F] mb-4">
              <Factory className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-[#1A1614]">Mechanized Casting Lines</h3>
            <p className="mt-2 text-xs sm:text-sm text-[#573A29] leading-relaxed">
              Automated batching plants and synchronized multi-wire tensioning beds ensure identical
              stress distribution across every production lot.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#E3D7C8] shadow-xs">
            <div className="h-10 w-10 rounded-xl bg-[#FEF4F0] flex items-center justify-center text-[#D96B4F] mb-4">
              <Zap className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-[#1A1614]">Rapid Disaster Restoration</h3>
            <p className="mt-2 text-xs sm:text-sm text-[#573A29] leading-relaxed">
              Our 24/7 emergency dispatch task force mobilizes boom-crane equipped trucks within hours
              for cyclone and storm grid recovery.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#E3D7C8] shadow-xs">
            <div className="h-10 w-10 rounded-xl bg-[#FEF4F0] flex items-center justify-center text-[#D96B4F] mb-4">
              <Building2 className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-[#1A1614]">Turnkey Utility Partner</h3>
            <p className="mt-2 text-xs sm:text-sm text-[#573A29] leading-relaxed">
              Approved vendor for India&apos;s leading DISCOMs, central transmission corporations,
              and premier infrastructure EPC giants.
            </p>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-12 p-8 rounded-3xl bg-[#331E11] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold">Need Tenders or Commercial Specifications?</h3>
            <p className="text-xs sm:text-sm text-[#EDE3D7] mt-1">
              Connect directly with our commercial bidding and engineering desk.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#D96B4F] px-6 py-3 text-sm font-bold text-white hover:bg-[#C4573B] transition-colors shrink-0"
          >
            <span>Contact Engineering Desk</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
