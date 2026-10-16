"use client";

import React from "react";
import { Phone, Mail, Clock, ShieldCheck, Zap } from "lucide-react";

export function TopBar() {
  return (
    <div className="w-full bg-[#331E11] text-[#EFE9E4] text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-[#4A2D1A]/60">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left Side: Contact info & Operating hours */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-[11px] sm:text-xs">
          <a
            href="tel:+9104044507070"
            className="inline-flex items-center gap-1.5 hover:text-[#D96B4F] transition-colors"
          >
            <Phone className="h-3.5 w-3.5 text-[#D96B4F]" />
            <span className="font-semibold">+91 (040) 4450-7070</span>
          </a>
          <a
            href="mailto:enquiry@clamshellinfra.com"
            className="inline-flex items-center gap-1.5 hover:text-[#D96B4F] transition-colors"
          >
            <Mail className="h-3.5 w-3.5 text-[#D96B4F]" />
            <span>enquiry@clamshellinfra.com</span>
          </a>
          <div className="hidden lg:inline-flex items-center gap-1.5 text-[#C8B4A2]">
            <Clock className="h-3.5 w-3.5 text-[#D96B4F]" />
            <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
          </div>
        </div>

        {/* Right Side: Standards Badge & 24/7 Disaster Relief Line */}
        <div className="flex items-center gap-4 text-[11px] sm:text-xs">
          

          <a
            href="#disaster-relief"
            className="hidden sm:inline-flex items-center gap-1.5 font-bold text-[#FDF4EE] hover:text-[#D96B4F] transition-colors"
          >
            
          </a>
        </div>
      </div>
    </div>
  );
}
