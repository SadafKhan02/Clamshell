"use client";

import React from "react";
import Link from "next/link";
import {
  Truck,
  ShieldCheck,
  MapPin,
  Navigation,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Clock,
  Compass,
} from "lucide-react";

export function LogisticsSection() {
  return (
    <section
      id="logistics"
      className="w-full py-20 sm:py-28 bg-[#FBF7F2] border-b border-[#E3D7C8] scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FEF4F0] px-3.5 py-1 text-xs font-bold text-[#D96B4F]">
            <span>IN-HOUSE FLEET &amp; LOGISTICS</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1A1614] leading-tight">
            Specialized Fleet Logistics &amp; Crane-Assisted Delivery
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#573A29]">
            Unlike manufacturers who rely on unverified third-party transport,
            Clamshell operates its own dedicated fleet of over 450 multi-axle
            trucks fitted with hydraulic boom cranes to ensure zero-breakage
            pit-side delivery across India.
          </p>
        </div>

        {/* Feature Comparison: Manual vs Clamshell Crane-Mounted Unloading */}
        <div className="mt-12 rounded-3xl bg-white border border-[#E3D7C8] p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: The Industry Problem */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#FFFDFB] border border-[#E3D7C8]/80 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-bold">
                <AlertTriangle className="h-3.5 w-3.5" />
                <span>The Industry Challenge: Manual Offloading</span>
              </div>
              <h3 className="text-xl font-bold text-[#1A1614]">
                Conventional Manual Offloading Risks
              </h3>
              <p className="text-xs sm:text-sm text-[#6E635D] leading-relaxed">
                Conventional suppliers drop poles from truck beds onto sandbags
                or tyres. This impact creates invisible internal hairline micro-fissures
                around the prestressing wires, leading to snapped poles during wire
                stringing or premature corrosion in 2-3 years.
              </p>
              <ul className="space-y-2 text-xs text-[#6E635D]">
                <li className="flex items-center gap-2 text-red-600">
                  <span>✕</span>
                  <span>5% to 8% breakage rate during site unloading</span>
                </li>
                <li className="flex items-center gap-2 text-red-600">
                  <span>✕</span>
                  <span>High risk of severe job-site crush injuries</span>
                </li>
                <li className="flex items-center gap-2 text-red-600">
                  <span>✕</span>
                  <span>Delays of 4-6 hours waiting for manual gangs</span>
                </li>
              </ul>
            </div>

            {/* Right: The Clamshell Solution */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#FEF4F0] to-[#FAF7F2] border border-[#D96B4F]/30 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D96B4F] text-white text-xs font-bold">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>The Clamshell Innovation: Truck-Mounted Boom Cranes</span>
              </div>
              <h3 className="text-2xl font-extrabold text-[#1A1614]">
                Mechanized Pit-Side Placement with Zero Impact
              </h3>
              <p className="text-sm text-[#4A2D1A] leading-relaxed">
                Every long-haul delivery trailer in Clamshell&apos;s prime fleet is
                equipped with an articulated hydraulic crane. A single certified
                operator mechanically lifts each pole from the bed using soft-slings
                and gently lowers it directly beside the erection pit.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "0.0% Structural transit breakage guarantee",
                  "Single-operator mechanical unloading in < 25 mins",
                  "Direct placement next to the utility pole excavation",
                  "Rubber-padded bolsters prevent surface abrasion",
                  "Real-time GPS telemetry on every shipment",
                  "All-terrain access for rural & farm electrification",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#D96B4F] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-[#4A2D1A]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pan-India Logistics Reach Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-[#E3D7C8] shadow-xs">
            <div className="h-10 w-10 rounded-xl bg-[#FEF4F0] flex items-center justify-center text-[#D96B4F] mb-4">
              <Truck className="h-5 w-5" />
            </div>
            <h4 className="font-bold text-base text-[#1A1614]">
              450+ Multi-Axle Fleet
            </h4>
            <p className="text-xs sm:text-sm text-[#573A29] mt-2">
              Heavy multi-axle trailers customized with locking cradle bolsters
              specifically designed for transporting 8m, 9m, 11m, and 13m PSCC
              poles safely over long interstate highways.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E3D7C8] shadow-xs">
            <div className="h-10 w-10 rounded-xl bg-[#F6F1EC] flex items-center justify-center text-[#785135] mb-4">
              <Navigation className="h-5 w-5" />
            </div>
            <h4 className="font-bold text-base text-[#1A1614]">
              Live GPS Dispatch Tracking
            </h4>
            <p className="text-xs sm:text-sm text-[#573A29] mt-2">
              Our centralized logistics control center tracks every consignment
              with real-time temperature, route, and speed telemetry, offering
              utility project managers instant delivery updates.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E3D7C8] shadow-xs">
            <div className="h-10 w-10 rounded-xl bg-[#FEF4F0] flex items-center justify-center text-[#D96B4F] mb-4">
              <Clock className="h-5 w-5" />
            </div>
            <h4 className="font-bold text-base text-[#1A1614]">
              Assured Delivery Timelines
            </h4>
            <p className="text-xs sm:text-sm text-[#573A29] mt-2">
              With 6 manufacturing facilities strategically situated near major
              freight corridors, we guarantee delivery within 24 to 48 hours to
              any project site across India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
