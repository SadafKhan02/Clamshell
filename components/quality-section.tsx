"use client";

import React from "react";
import {
  ShieldCheck,
  CheckCircle2,
  Gauge,
  FlaskConical,
  Activity,
  FileCheck2,
  Award,
  Layers,
} from "lucide-react";

export function QualitySection() {
  return (
    <section
      id="quality"
      className="w-full py-20 sm:py-28 bg-[#FFFDFB] border-b border-[#E3D7C8] scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FEF4F0] px-3.5 py-1 text-xs font-bold text-[#D96B4F]">
            <span>TOTAL QUALITY ASSURANCE</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1A1614] leading-tight">
            ISO 9001:2015 &amp; NABL Accredited Testing Protocols
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#573A29]">
            Quality at Clamshell is non-negotiable. Every production batch
            undergoes rigorous mechanical, metallurgical, and non-destructive
            evaluations to satisfy IS:1678, IS:2905, and client DISCOM
            specifications.
          </p>
        </div>

        {/* 4 Core Testing Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pillar 1 */}
          <div className="p-6 rounded-3xl bg-[#FAF7F2] border border-[#E3D7C8] space-y-4 hover:border-[#D96B4F] transition-colors">
            <div className="h-12 w-12 rounded-2xl bg-[#FEF4F0] flex items-center justify-center text-[#D96B4F]">
              <Gauge className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-[#1A1614]">
              Transverse Load &amp; Deflection Testing
            </h3>
            <p className="text-xs sm:text-sm text-[#573A29] leading-relaxed">
              Full-scale horizontal load test beds anchored into reinforced rock
              foundations. Poles are secured at planting depth while calibrated
              hydraulic actuators apply incremental transverse loads to verify
              elastic deflection and zero cracking at working load.
            </p>
            <div className="text-xs font-bold text-[#D96B4F] pt-2 border-t border-[#E3D7C8]">
              Standard: IS 2905:1989
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 rounded-3xl bg-[#FAF7F2] border border-[#E3D7C8] space-y-4 hover:border-[#D96B4F] transition-colors">
            <div className="h-12 w-12 rounded-2xl bg-[#F6F1EC] flex items-center justify-center text-[#785135]">
              <FlaskConical className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-[#1A1614]">
              Concrete Cube Compressive Testing
            </h3>
            <p className="text-xs sm:text-sm text-[#573A29] leading-relaxed">
              150mm standard test cubes sampled from each batching hopper are
              cured under identical hydro-thermal conditions and crushed in
              calibrated digital 2,000 kN compression testing machines at 7, 14,
              and 28 days to certify M45-M55 compliance.
            </p>
            <div className="text-xs font-bold text-[#785135] pt-2 border-t border-[#E3D7C8]">
              Standard: IS 516:2021
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 rounded-3xl bg-[#FAF7F2] border border-[#E3D7C8] space-y-4 hover:border-[#D96B4F] transition-colors">
            <div className="h-12 w-12 rounded-2xl bg-[#FEF4F0] flex items-center justify-center text-[#D96B4F]">
              <Activity className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-[#1A1614]">
              Ultrasonic Pulse Velocity (UPV)
            </h3>
            <p className="text-xs sm:text-sm text-[#573A29] leading-relaxed">
              Non-destructive electro-acoustic transducer sensors pass
              ultrasonic waves through the concrete matrix to verify internal
              homogeneity, absence of honeycombing, and density surrounding the
              prestressed wire core.
            </p>
            <div className="text-xs font-bold text-[#D96B4F] pt-2 border-t border-[#E3D7C8]">
              Standard: IS 13311 (Part 1)
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="p-6 rounded-3xl bg-[#FAF7F2] border border-[#E3D7C8] space-y-4 hover:border-[#D96B4F] transition-colors">
            <div className="h-12 w-12 rounded-2xl bg-[#F6F1EC] flex items-center justify-center text-[#785135]">
              <FileCheck2 className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-[#1A1614]">
              Wire Tensile &amp; Proof Stress Audit
            </h3>
            <p className="text-xs sm:text-sm text-[#573A29] leading-relaxed">
              Every steel coil lot undergoes universal tensile testing to
              confirm breaking load, 0.2% proof stress, and reverse bend
              resilience, ensuring prestressing wire never snaps or relaxes under
              extreme winter frost or summer heat contraction.
            </p>
            <div className="text-xs font-bold text-[#785135] pt-2 border-t border-[#E3D7C8]">
              Standard: IS 1785 (Part 1)
            </div>
          </div>
        </div>

        {/* Quality Commitment Policy Banner */}
        <div className="mt-12 rounded-3xl bg-gradient-to-r from-[#331E11] to-[#4A2D1A] text-white p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D96B4F]">
                Our Quality Policy
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Guided by Quality Above Cost
              </h3>
              <p className="text-sm text-[#EDE3D7] leading-relaxed">
                &quot;Clamshell Infrastructure Private Limited is dedicated to
                producing Pre-Stressed Cement Concrete utility products that
                exceed national engineering benchmarks. Our procurement
                philosophy rejects subpar aggregates or low-tensile seconds in
                favor of certified raw materials from India&apos;s finest cement and
                steel mills, ensuring every pole stands firm through cyclones,
                seismic vibrations, and generational wear.&quot;
              </p>
            </div>

            <div className="lg:col-span-4 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-3 text-center">
              <div className="inline-flex p-3 rounded-full bg-[#D96B4F] text-white mb-1">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h4 className="font-extrabold text-white text-base">
                Factor of Safety: 2.5
              </h4>
              <p className="text-xs text-[#FAF7F2]">
                Guaranteed minimum ultimate transverse load exceeding 250% of
                working load before ultimate failure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
