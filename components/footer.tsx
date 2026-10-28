"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  ArrowUp,
  Zap,
} from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#1A1614] text-[#EFE9E4] pt-16 pb-10 border-t-4 border-[#D96B4F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#331E11]">
          {/* Column 1: Brand & Logo (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-14 w-14 rounded-full bg-white p-0.5 border-2 border-[#D96B4F] shadow-sm shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="Clamshell Infrastructure Private Limited Official Logo"
                  width={56}
                  height={56}
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <span className="text-lg font-black tracking-wider text-white">
                  CLAMSHELL
                </span>
                <div className="text-xs font-bold text-[#D96B4F] tracking-widest uppercase">
                  INFRASTRUCTURE PVT LTD
                </div>
                <div className="text-[10px] text-[#C8B4A2] font-semibold tracking-wider uppercase">
                  MOTTO: &quot;SHAPE PERFECT&quot;
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#C8B4A2] leading-relaxed pt-1">
              India&apos;s trusted manufacturer of Pre-Stressed Cement Concrete
              (PSCC) Poles, Rectangular Poles, and Spun Concrete Piles.
              Delivering high-reliability power transmission and heavy civil
              infrastructure nationwide with over 1.8M+ annual unit capacity.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#331E11] border border-[#785135]/50 text-xs text-[#FAF7F2]">
              <ShieldCheck className="h-4 w-4 text-[#D96B4F]" />
              <span>ISO 9001:2015 &amp; BIS Certified</span>
            </div>
          </div>

          {/* Column 2: Quick Links (Col 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D96B4F]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#C8B4A2]">
              <li>
                <Link
                  href="#home"
                  className="hover:text-[#D96B4F] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:text-[#D96B4F] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="hover:text-[#D96B4F] transition-colors"
                >
                  Product Range
                </Link>
              </li>
              <li>
                <Link
                  href="#operations"
                  className="hover:text-[#D96B4F] transition-colors"
                >
                  Operations &amp; Plants
                </Link>
              </li>
              <li>
                <Link
                  href="#logistics"
                  className="hover:text-[#D96B4F] transition-colors"
                >
                  Logistics &amp; Fleet
                </Link>
              </li>
              <li>
                <Link
                  href="#quality"
                  className="hover:text-[#D96B4F] transition-colors"
                >
                  Quality Testing
                </Link>
              </li>
              <li>
                
              </li>
              <li>
                <Link
                  href="#downloads"
                  className="hover:text-[#D96B4F] transition-colors"
                >
                  Downloads &amp; Specs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Products & Solutions (Col 7-9) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D96B4F]">
              Products &amp; Infrastructure
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#C8B4A2]">
              <li>
                <Link
                  href="#products"
                  className="hover:text-[#D96B4F] transition-colors"
                >
                  8.0m &amp; 9.0m PSCC Utility Poles
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="hover:text-[#D96B4F] transition-colors"
                >
                  9.5m &amp; 11.0m Heavy Feeder Poles
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="hover:text-[#D96B4F] transition-colors"
                >
                  13.0m High Clearance Sub-Transmission Poles
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="hover:text-[#D96B4F] transition-colors"
                >
                  Rectangular High-Wind Lateral Poles
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="hover:text-[#D96B4F] transition-colors"
                >
                  Centrifugally Spun Hollow Concrete Piles
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="hover:text-[#D96B4F] transition-colors"
                >
                  Substation Cable Trenches &amp; Covers
                </Link>
              </li>
              <li>
                <Link
                  href="#quote-tool"
                  className="hover:text-[#D96B4F] transition-colors font-semibold text-[#FAF7F2]"
                >
                  → Interactive Pole Configurator
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Emergency (Col 10-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D96B4F]">
              Corporate Desk
            </h4>
            <div className="space-y-2.5 text-xs text-[#C8B4A2]">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#D96B4F] shrink-0 mt-0.5" />
                <span>
                  Clamshell House, Industrial Corridor, Dwarakapuri Colony,
                  Punjagutta, Hyderabad – 500082, Telangana, INDIA.
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#D96B4F] shrink-0" />
                <a
                  href="tel:+9104044507070"
                  className="hover:text-[#D96B4F] transition-colors font-semibold text-white"
                >
                  +91 (040) 4450-7070
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#D96B4F] shrink-0" />
                <a
                  href="mailto:enquiry@clamshellinfra.com"
                  className="hover:text-[#D96B4F] transition-colors"
                >
                  enquiry@clamshellinfra.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-[#D96B4F] shrink-0" />
                <span>Mon – Sat: 8:00 AM – 6:00 PM</span>
              </div>
              <div className="p-3 rounded-xl bg-[#331E11] border border-[#785135]/40 text-[11px] text-[#FDF4EE] mt-2">
               
                <div className="font-bold text-white mt-0.5">
                  +91 94400 55667 / 1800-425-9988
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6E635D]">
          <div>
            Copyright © 2026 Clamshell Infrastructure
            Private Limited. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <span className="hover:text-[#FAF7F2] cursor-pointer">
              Privacy Policy
            </span>
            <span>•</span>
            <span className="hover:text-[#FAF7F2] cursor-pointer">
              Terms of Supply
            </span>
            <span>•</span>
            <span className="hover:text-[#FAF7F2] cursor-pointer">
              IS:1678 Compliance
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="ml-0 inline-flex items-center gap-1.5 p-2 rounded-xl bg-[#331E11] text-[#FAF7F2] hover:bg-[#D96B4F] hover:text-white transition-colors sm:ml-4"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
              <span className="text-[11px] font-semibold">Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
