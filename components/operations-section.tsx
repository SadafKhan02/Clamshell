"use client";

import React, { useState } from "react";
import {
  Cpu,
  Flame,
  Droplets,
  Layers,
  Sparkles,
  Cog,
  CheckCircle2,
  Factory,
  Gauge,
  ArrowRight,
} from "lucide-react";

export function OperationsSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Mould Preparation & Formwork Calibration",
      icon: Cog,
      desc: "Heavy-duty CNC steel moulds are thoroughly inspected, aligned with laser precision, and coated with biodegradable mould release agent to ensure mirror-smooth demoulding without surface pitting or micro-spalling.",
      details: [
        "Laser-straight mould alignment to ±1mm tolerance",
        "Dual-locking mechanical pins preventing slurry leakage",
        "Eco-friendly vegetable-based mould release oil",
      ],
    },
    {
      num: "02",
      title: "HT Wire Layout & Hydraulic Pre-Tensioning",
      icon: Gauge,
      desc: "High-tensile steel wires (IS 1785, 4mm dia, 1750 MPa) are laced through precision guide plates and tensioned simultaneously using multi-jack hydraulic pullers up to 75-80% of their ultimate tensile strength.",
      details: [
        "Digital load cell monitoring of wire tension force",
        "Automatic slippage lock-off wedge grips",
        "Continuous 4mm GI earthing wire laid parallel",
      ],
    },
    {
      num: "03",
      title: "Automated Computerized Concrete Batching",
      icon: Factory,
      desc: "Our automated batching plants weigh crushed basalt aggregate, graded sand, micro-silica, and high-strength 53 Grade OPC cement with electronic load cells to guarantee a perfectly balanced low-water/cement ratio M50 mix.",
      details: [
        "Computer-controlled pan mixers with moisture sensors",
        "Zero manual batching error with computerized telemetry",
        "Polycarboxylate-based superplasticizer for void-free flow",
      ],
    },
    {
      num: "04",
      title: "High-Frequency Compaction & Air Elimination",
      icon: Layers,
      desc: "As the concrete enters the moulds, high-frequency external bed vibrators and needle vibrators consolidate the mix, forcing all trapped air to the surface and achieving ultimate molecular packing density.",
      details: [
        "3,000 to 4,500 VPM vibration frequency",
        "Complete encasement of prestressing tendons",
        "Near-zero capillary permeability in hardened matrix",
      ],
    },
    {
      num: "05",
      title: "Accelerated Steam & Hydrothermal Curing",
      icon: Flame,
      desc: "Moulds are enclosed in thermal curing hoods where saturated steam is gradually introduced under regulated heating ramps. This accelerates hydration, enabling concrete to achieve 70% compressive strength in just 8 hours.",
      details: [
        "Computerized temperature gradient monitoring",
        "Prevents thermal shock and shrinkage cracking",
        "Enables swift same-day demoulding without micro-stress",
      ],
    },
    {
      num: "06",
      title: "De-Tensioning & 28-Day Curing Ponds",
      icon: Droplets,
      desc: "Pre-stressing hydraulic jacks slowly release tendon tension, smoothly transferring immense compressive force into the concrete core. Demoulded poles are marked with unique serial QR codes and transferred to water curing ponds.",
      details: [
        "Controlled slow-release de-tensioning prevents shock",
        "Complete 28-day water pond submersion curing",
        "QR code tracking of batch, date, plant, and load rating",
      ],
    },
  ];

  return (
    <section
      id="operations"
      className="w-full py-20 sm:py-28 bg-[#FFFDFB] border-b border-[#E3D7C8] scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FEF4F0] px-3.5 py-1 text-xs font-bold text-[#D96B4F]">
            <span>MANUFACTURING INFRASTRUCTURE</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1A1614] leading-tight">
            State-of-the-Art Operations &amp; Automated Casting Yards
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#573A29]">
            Clamshell operates 6 advanced production plants equipped with
            computerized batching plants, long-line prestressing beds, overhead
            EOT cranes, and automated steam curing chambers.
          </p>
        </div>

        {/* Step-by-Step Flow Showcase */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Step Selector Column (Left) */}
          <div className="lg:col-span-5 space-y-2.5">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isSelected = activeStep === index;
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className={`
                    w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between
                    ${
                      isSelected
                        ? "bg-[#FAF7F2] border-[#D96B4F] shadow-sm ring-1 ring-[#D96B4F]/20"
                        : "bg-white border-[#E3D7C8] hover:border-[#C8B4A2] hover:bg-[#FAF7F2]/60"
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-black tracking-wider px-2 py-1 rounded-md ${
                        isSelected
                          ? "bg-[#D96B4F] text-white"
                          : "bg-[#F6F1EC] text-[#785135]"
                      }`}
                    >
                      {step.num}
                    </span>
                    <span
                      className={`text-xs sm:text-sm font-bold ${
                        isSelected ? "text-[#1A1614]" : "text-[#573A29]"
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                  <Icon
                    className={`h-4 w-4 shrink-0 ${
                      isSelected ? "text-[#D96B4F]" : "text-[#C8B4A2]"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Step Detailed Card (Right) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#FAF7F2] border border-[#E3D7C8] p-6 sm:p-10 shadow-md">
            <div className="flex items-center justify-between pb-4 border-b border-[#E3D7C8]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D96B4F]">
                Process Stage {steps[activeStep].num} of 06
              </span>
              <span className="text-xs font-semibold text-[#785135]">
                Motto: &quot;SHAPE PERFECT&quot;
              </span>
            </div>

            <div className="mt-6">
              <h3 className="text-2xl font-extrabold text-[#1A1614]">
                {steps[activeStep].title}
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[#4A2D1A] leading-relaxed">
                {steps[activeStep].desc}
              </p>

              <div
                id="quality"
                className="mt-6 p-5 rounded-2xl bg-white border border-[#E3D7C8] space-y-3 scroll-mt-24"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-[#785135]">
                  Quality Assurance Controls at this Stage
                </span>
                {steps[activeStep].details.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#D96B4F] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#4A2D1A]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between pt-4 border-t border-[#E3D7C8]">
                <button
                  type="button"
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-[#785135] disabled:opacity-40 hover:bg-white transition-colors"
                >
                  ← Previous Stage
                </button>
                <button
                  type="button"
                  disabled={activeStep === steps.length - 1}
                  onClick={() =>
                    setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))
                  }
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#D96B4F] text-xs font-bold text-white hover:bg-[#C4573B] disabled:opacity-40 transition-colors"
                >
                  <span>Next Stage</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
}
