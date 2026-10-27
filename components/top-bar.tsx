"use client";

import React from "react";
import { Phone, Mail, Clock } from "lucide-react";

export function TopBar() {
  return (
    <div className="w-full border-b border-[#4A2D1A]/60 bg-[#331E11] px-4 py-2 text-xs text-[#EFE9E4] sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-2 text-[11px] sm:grid-cols-2 sm:text-xs md:grid-cols-3">
        <div className="flex items-center justify-center gap-1.5 whitespace-nowrap sm:justify-start">
          <a
            href="tel:+9104044507070"
            className="inline-flex items-center gap-1.5 hover:text-[#D96B4F] transition-colors"
          >
            <Phone className="h-3.5 w-3.5 text-[#D96B4F]" />
            <span className="font-semibold">+91 (040) 4450-7070</span>
          </a>
        </div>

        <div className="flex items-center justify-center gap-1.5 whitespace-nowrap">
          <a
            href="mailto:enquiry@clamshellinfra.com"
            className="inline-flex items-center gap-1.5 hover:text-[#D96B4F] transition-colors"
          >
            <Mail className="h-3.5 w-3.5 text-[#D96B4F]" />
            <span>enquiry@clamshellinfra.com</span>
          </a>
        </div>

        <div className="hidden items-center justify-center gap-1.5 whitespace-nowrap text-[#C8B4A2] md:flex md:justify-end">
          <Clock className="h-3.5 w-3.5 shrink-0 text-[#D96B4F]" />
          <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
        </div>
      </div>
    </div>
  );
}
