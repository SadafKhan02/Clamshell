"use client";

import React from "react";
import Image from "next/image";
import {
  Target,
  Compass,
  Award,
  CheckCircle2,
  Cpu,
  Layers,
  ShieldCheck,
  Building2,
} from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="w-full py-20 sm:py-28 bg-[#FFFDFB] border-b border-[#E3D7C8] scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FEF4F0] px-3.5 py-1 text-xs font-bold text-[#D96B4F]">
            <span>ABOUT CLAMSHELL INFRASTRUCTURE</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1A1614] leading-tight">
            Engineering the Backbone of India&apos;s Utility Networks
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#573A29] leading-relaxed">
            Clamshell Infrastructure Private Limited is one of the nation&apos;s
            foremost manufacturers of Pre-Stressed Cement Concrete (PSCC) poles,
            specialized rectangular poles, and spun concrete piles. With an annual
            production capability of over 1.8 million units across 6 modern
            plants, we are the preferred infrastructure partner for state power
            distribution utilities, EPC contractors, and national grid
            operators.
          </p>
        </div>

        {/* The "SHAPE PERFECT" Philosophy Card */}
        <div className="mt-12 rounded-3xl bg-[#FAF7F2] border border-[#E3D7C8] p-6 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
            <Image
              src="/logo.jpg"
              alt="Clamshell Watermark"
              width={350}
              height={350}
              className="rounded-full"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D96B4F]">
                The Core Motto
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A1614]">
                The &quot;SHAPE PERFECT&quot; Commitment
              </h3>
              <p className="text-sm sm:text-base text-[#4A2D1A] leading-relaxed">
                In pre-stressed concrete infrastructure, minor variations in
                mould alignment, aggregate density, or wire tensioning can lead
                to micro-fractures, moisture seepage, and catastrophic grid
                failure during storm loading.
              </p>
              <p className="text-sm sm:text-base text-[#4A2D1A] leading-relaxed">
                Our motto,{" "}
                <strong className="text-[#983B23] font-bold">
                  &quot;SHAPE PERFECT&quot;
                </strong>
                , is not merely a brand slogan—it is our engineering standard.
                Every pole cast at Clamshell utilizes heavy-gauge CNC-machined steel
                moulds, computerized weigh batching, synchronized multi-wire
                hydraulic tensioning, and high-frequency consolidation to ensure
                impeccable geometric accuracy, aerodynamic wind resistance, and a
                minimum 50-year operational design life.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#E3D7C8]/80">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-[#D96B4F]">
                    M50
                  </div>
                  <div className="text-xs font-semibold text-[#785135]">
                    Concrete Grade
                  </div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-[#D96B4F]">
                    2.5x
                  </div>
                  <div className="text-xs font-semibold text-[#785135]">
                    Factor of Safety
                  </div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-[#D96B4F]">
                    ±2mm
                  </div>
                  <div className="text-xs font-semibold text-[#785135]">
                    Tolerances
                  </div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-[#D96B4F]">
                    50+ Yrs
                  </div>
                  <div className="text-xs font-semibold text-[#785135]">
                    Design Life
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-white border border-[#E3D7C8] shadow-md text-center">
              <div className="relative h-28 w-28 rounded-full border-4 border-[#D96B4F]/20 p-1 shadow-inner bg-white mb-4">
                <Image
                  src="/logo.jpg"
                  alt="Clamshell Infrastructure Official Brand Seal"
                  width={112}
                  height={112}
                  className="rounded-full object-cover"
                />
              </div>
              <h4 className="font-extrabold text-[#1A1614] text-base">
                Clamshell Infrastructure
              </h4>
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

        {/* Vision, Mission & Core Values 3-Card Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Vision */}
          <div className="p-8 rounded-3xl bg-white border border-[#E3D7C8] shadow-xs hover:border-[#D96B4F] hover:shadow-lg transition-all duration-300">
            <div className="h-12 w-12 rounded-2xl bg-[#FEF4F0] flex items-center justify-center text-[#D96B4F] mb-6">
              <Compass className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-[#1A1614]">Our Vision</h3>
            <p className="mt-3 text-sm text-[#573A29] leading-relaxed">
              To be the most trusted, innovative, and resilient pillar of
              India&apos;s electrical power transmission and precast
              infrastructure, recognized globally for structural endurance and
              large-scale manufacturing prowess.
            </p>
          </div>

          {/* Card 2: Mission */}
          <div className="p-8 rounded-3xl bg-white border border-[#E3D7C8] shadow-xs hover:border-[#D96B4F] hover:shadow-lg transition-all duration-300">
            <div className="h-12 w-12 rounded-2xl bg-[#F6F1EC] flex items-center justify-center text-[#785135] mb-6">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-[#1A1614]">Our Mission</h3>
            <p className="mt-3 text-sm text-[#573A29] leading-relaxed">
              Supply zero-defect, certified PSCC and spun concrete solutions at
              unrivaled scale to power companies, supporting rapid grid
              expansion, rural electrification, and disaster recovery with
              punctual delivery.
            </p>
          </div>

          {/* Card 3: Core Values */}
          <div className="p-8 rounded-3xl bg-white border border-[#E3D7C8] shadow-xs hover:border-[#D96B4F] hover:shadow-lg transition-all duration-300">
            <div className="h-12 w-12 rounded-2xl bg-[#FEF4F0] flex items-center justify-center text-[#D96B4F] mb-6">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-[#1A1614]">Core Values</h3>
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

        {/* Production Capacity & Leadership Highlights */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-[#331E11] to-[#4A2D1A] text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D96B4F]">
                Large Volume Leadership
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold mt-1 text-white">
                Supplying Over 150,000 Poles Every Month
              </h3>
              <p className="mt-3 text-sm text-[#EDE3D7] leading-relaxed">
                Clamshell Infrastructure has pioneered mechanized casting line
                automation in India. With 6 integrated plants spanning South,
                Central, and Western India, we offer state electricity
                utilities the security of immediate large-scale dispatches,
                eliminating project bottlenecks and accelerating national
                electrification goals.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                <div className="text-2xl font-black text-[#D96B4F]">6 Plants</div>
                <div className="text-xs text-[#FAF7F2]">
                  Fully automated casting and steam curing yards
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                <div className="text-2xl font-black text-[#D96B4F]">
                  100% In-House
                </div>
                <div className="text-xs text-[#FAF7F2]">
                  From steel bending to crane-assisted site installation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
