"use client";

import React, { useState } from "react";
import {
  Calculator,
  Zap,
  Truck,
  Layers,
  ArrowRight,
  CheckCircle2,
  FileText,
  Building2,
} from "lucide-react";

export function QuoteCalculator() {
  const [poleHeight, setPoleHeight] = useState("9.0");
  const [workingLoad, setWorkingLoad] = useState("200");
  const [voltage, setVoltage] = useState("11kv");
  const [quantity, setQuantity] = useState("500");
  const [stateDest, setStateDest] = useState("Telangana");
  const [submitted, setSubmitted] = useState(false);

  // Calculations
  const qtyNum = parseInt(quantity, 10) || 100;
  const heightNum = parseFloat(poleHeight);

  // Approximate weight per pole based on height and load
  const weightPerPole = Math.round(
    heightNum * 70 + (parseInt(workingLoad, 10) / 200) * 80
  );
  const totalWeightMt = ((weightPerPole * qtyNum) / 1000).toFixed(1);

  // Poles per multi-axle trailer
  const polesPerTruck = heightNum <= 8 ? 32 : heightNum <= 9.5 ? 26 : 18;
  const trucksNeeded = Math.ceil(qtyNum / polesPerTruck);

  // Planting depth is roughly 1/6th of total height
  const plantingDepth = (heightNum / 6).toFixed(2);

  // Concrete grade recommendation
  const concreteGrade =
    parseInt(workingLoad, 10) >= 350
      ? "M55 (Self-Compacting High Density)"
      : parseInt(workingLoad, 10) >= 300
      ? "M50 (High Durability Precast)"
      : "M45 (High Performance Precast)";

  // Prestressing wires recommendation
  const wireCount =
    parseInt(workingLoad, 10) >= 400
      ? "18 Nos x 4.0mm High Tensile Wire"
      : parseInt(workingLoad, 10) >= 300
      ? "16 Nos x 4.0mm High Tensile Wire"
      : parseInt(workingLoad, 10) >= 200
      ? "14 Nos x 4.0mm High Tensile Wire"
      : "12 Nos x 4.0mm High Tensile Wire";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section
      id="quote-tool"
      className="w-full py-20 sm:py-28 bg-[#FFFDFB] border-b border-[#E3D7C8] scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FEF4F0] px-3.5 py-1 text-xs font-bold text-[#D96B4F]">
            <Calculator className="h-3.5 w-3.5" />
            <span>ENGINEERING SPECIFICATION &amp; RFQ ESTIMATOR</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1A1614] leading-tight">
            Interactive Pole Configurator &amp; Logistics Calculator
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#573A29]">
            Select your transmission corridor parameters to instantly calculate
            IS:1678 design specifications, reinforcement requirements, and
            fleet trailer requirements.
          </p>
        </div>

        {/* Interactive Grid: Inputs (Left) and Results (Right) */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-6 rounded-3xl bg-[#FAF7F2] border border-[#E3D7C8] p-6 sm:p-8 space-y-6">
            <h3 className="text-lg font-bold text-[#1A1614] flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#D96B4F]" />
              <span>Project Technical Parameters</span>
            </h3>

            {/* Line Voltage Class */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#785135] mb-2">
                1. Voltage Class &amp; Grid Application
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "lt", label: "LT 415V Line" },
                  { id: "11kv", label: "11 kV Feeder" },
                  { id: "33kv", label: "33 kV Sub-Trans" },
                ].map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setVoltage(v.id)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-colors ${
                      voltage === v.id
                        ? "bg-[#D96B4F] text-white border-[#D96B4F]"
                        : "bg-white text-[#573A29] border-[#E3D7C8] hover:border-[#D96B4F]"
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Pole Height Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#785135] mb-2">
                2. Overall Pole Length (Meters)
              </label>
              <div className="grid grid-cols-5 gap-2">
                {["8.0", "9.0", "9.5", "11.0", "13.0"].map((h) => (
                  <button
                    key={h}
                    type="button"
                    onClick={() => setPoleHeight(h)}
                    className={`py-2.5 rounded-xl text-xs font-bold border transition-colors ${
                      poleHeight === h
                        ? "bg-[#785135] text-white border-[#785135]"
                        : "bg-white text-[#573A29] border-[#E3D7C8] hover:border-[#785135]"
                    }`}
                  >
                    {h} m
                  </button>
                ))}
              </div>
            </div>

            {/* Working Load Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#785135] mb-2">
                3. Transverse Working Load (kg)
              </label>
              <div className="grid grid-cols-4 gap-2">
                {["140", "200", "300", "400"].map((l) => (
                  <button
                    key={l}
                    type="button"
                    onClick={() => setWorkingLoad(l)}
                    className={`py-2.5 rounded-xl text-xs font-bold border transition-colors ${
                      workingLoad === l
                        ? "bg-[#D96B4F] text-white border-[#D96B4F]"
                        : "bg-white text-[#573A29] border-[#E3D7C8] hover:border-[#D96B4F]"
                    }`}
                  >
                    {l} kg
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Slider / Input */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#785135]">
                  4. Required Quantity (Units)
                </label>
                <span className="text-sm font-extrabold text-[#D96B4F]">
                  {qtyNum.toLocaleString()} Poles
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="5000"
                step="50"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full accent-[#D96B4F] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#6E635D] mt-1">
                <span>50 units</span>
                <span>1,500 units</span>
                <span>3,000 units</span>
                <span>5,000+ units</span>
              </div>
            </div>

            {/* Delivery Destination State */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#785135] mb-2">
                5. Project Delivery State
              </label>
              <select
                value={stateDest}
                onChange={(e) => setStateDest(e.target.value)}
                className="w-full p-3 rounded-xl bg-white border border-[#E3D7C8] text-xs font-semibold text-[#1A1614] focus:outline-none focus:ring-2 focus:ring-[#D96B4F]"
              >
                <option value="Telangana">Telangana (Hyd / Warangal / Nizamabad)</option>
                <option value="Andhra Pradesh">Andhra Pradesh (Vizag / Vijayawada / Tirupati)</option>
                <option value="Maharashtra">Maharashtra (Nagpur / Pune / Mumbai)</option>
                <option value="Karnataka">Karnataka (Bengaluru / Hubballi / Mysuru)</option>
                <option value="Tamil Nadu">Tamil Nadu (Chennai / Coimbatore / Madurai)</option>
                <option value="Odisha">Odisha (Bhubaneswar / Cuttack / Balasore)</option>
                <option value="Chhattisgarh">Chhattisgarh (Raipur / Bilaspur)</option>
                <option value="Madhya Pradesh">Madhya Pradesh (Bhopal / Indore / Jabalpur)</option>
                <option value="Gujarat">Gujarat (Ahmedabad / Surat / Vadodara)</option>
                <option value="Other">Other States Across India</option>
              </select>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-6 rounded-3xl bg-white border border-[#E3D7C8] p-6 sm:p-8 shadow-md space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#E3D7C8]">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#D96B4F]">
                  Automated Calculation
                </span>
                <h3 className="text-xl font-extrabold text-[#1A1614]">
                  Technical Bill of Materials (BoM)
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#FEF4F0] text-[11px] font-bold text-[#D96B4F]">
                IS:1678 / REC Standard
              </span>
            </div>

            {/* Calculated Metrics Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E3D7C8]">
                <div className="text-xs font-medium text-[#6E635D]">
                  Ultimate Transverse Load
                </div>
                <div className="text-2xl font-black text-[#D96B4F] mt-1">
                  {parseInt(workingLoad, 10) * 2.5} kg
                </div>
                <div className="text-[10px] text-[#785135] mt-0.5">
                  Factor of Safety = 2.5
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E3D7C8]">
                <div className="text-xs font-medium text-[#6E635D]">
                  Planting Excavation Depth
                </div>
                <div className="text-2xl font-black text-[#785135] mt-1">
                  {plantingDepth} m
                </div>
                <div className="text-[10px] text-[#6E635D] mt-0.5">
                  Standard ground embedment
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E3D7C8]">
                <div className="text-xs font-medium text-[#6E635D]">
                  Estimated Weight
                </div>
                <div className="text-2xl font-black text-[#1A1614] mt-1">
                  {totalWeightMt} MT
                </div>
                <div className="text-[10px] text-[#6E635D] mt-0.5">
                  ~{weightPerPole} kg per pole
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E3D7C8]">
                <div className="text-xs font-medium text-[#6E635D]">
                  Crane Trucks Required
                </div>
                <div className="text-2xl font-black text-[#D96B4F] mt-1">
                  {trucksNeeded} Loads
                </div>
                <div className="text-[10px] text-[#785135] mt-0.5">
                  Mechanized boom crane fleet
                </div>
              </div>
            </div>

            {/* Technical Reinforcement Specs */}
            <div className="p-4 rounded-2xl bg-[#F6F1EC] border border-[#E3D7C8] space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-[#6E635D]">Recommended Concrete:</span>
                <span className="font-bold text-[#1A1614]">{concreteGrade}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6E635D]">Prestress Tendons:</span>
                <span className="font-bold text-[#1A1614]">{wireCount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6E635D]">Earthing Continuity:</span>
                <span className="font-bold text-[#1A1614]">
                  Continuous 4mm GI Wire Embedded
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6E635D]">Target Destination:</span>
                <span className="font-bold text-[#D96B4F]">{stateDest}</span>
              </div>
            </div>

            {/* Quick Quotation Request Form Trigger */}
            <form onSubmit={handleSubmit} className="space-y-3 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Your Name / Organization"
                  className="p-3 rounded-xl border border-[#E3D7C8] text-xs focus:ring-2 focus:ring-[#D96B4F] focus:outline-none"
                />
                <input
                  type="tel"
                  required
                  placeholder="Official Phone / Mobile"
                  className="p-3 rounded-xl border border-[#E3D7C8] text-xs focus:ring-2 focus:ring-[#D96B4F] focus:outline-none"
                />
              </div>
              <input
                type="email"
                required
                placeholder="Official Email Address"
                className="w-full p-3 rounded-xl border border-[#E3D7C8] text-xs focus:ring-2 focus:ring-[#D96B4F] focus:outline-none"
              />

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#D96B4F] py-3.5 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-[#C4573B] transition-colors"
              >
                <span>Submit Configuration for Formal Tender / Quote</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              {submitted && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold text-center flex items-center justify-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>
                    Configuration received! Our commercial tender division will
                    reach out with formal BOQ pricing within 2 business hours.
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
