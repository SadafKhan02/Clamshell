"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  Zap,
} from "lucide-react";

export function ContactSection({
  initialProduct = "PSC Poles",
}: {
  initialProduct?: string;
}) {
  const [formData, setFormData] = useState(() => {
    const params = typeof window === "undefined" ? null : new URLSearchParams(window.location.search);
    return {
      name: "",
      company: "",
      phone: "",
      email: "",
      product:
        params?.get("product") === "custom-rail-pole"
          ? "Custom Rail Pole"
          : params?.get("product") ?? initialProduct,
      variant: params?.get("variant") ?? "",
      quantity: "",
      location: "",
      message: "",
      requiredLength: "",
      weightPerMetre: "",
      additionalRequirements: "",
    };
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitted(false);
    setError("");
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          phone: formData.phone,
          email: formData.email,
          product: formData.product,
          variant: formData.variant,
          quantity: formData.quantity,
          location: formData.location,
          message: [
            formData.message,
            formData.requiredLength ? `Required pole length: ${formData.requiredLength}` : "",
            formData.weightPerMetre ? `Required weight per metre: ${formData.weightPerMetre}` : "",
            formData.additionalRequirements ? `Additional requirements: ${formData.additionalRequirements}` : "",
          ].filter(Boolean).join("\n"),
        }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Submission failed.");
      setSubmitted(true);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Submission failed.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-20 sm:py-28 bg-[#FFFDFB] border-b border-[#E3D7C8] scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FEF4F0] px-3.5 py-1 text-xs font-bold text-[#D96B4F]">
            <span>GET IN TOUCH &amp; TENDER INQUIRIES</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1A1614] leading-tight">
            Connect with Our Technical &amp; Sales Team
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#573A29]">
            Whether you need prompt tenders for state utility contracts, urgent
            disaster restoration dispatches, or custom precast structural
            designs, our engineering desk is ready to assist.
          </p>
        </div>

        {/* Contact Information & Form Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Corporate Office & Plants */}
          <div className="lg:col-span-5 space-y-6">
            {/* Corporate HQ Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF7F2] border border-[#E3D7C8] space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-[#D96B4F] flex items-center justify-center text-white shrink-0">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-[#1A1614] text-base sm:text-lg">
                    Corporate Headquarters
                  </h3>
                  <p className="text-xs text-[#785135] font-semibold">
                    Clamshell Infrastructure Private Limited
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-[#4A2D1A]">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-[#D96B4F] shrink-0 mt-0.5" />
                  <span>
                    Clamshell House, Industrial Corridor, Dwarakapuri Colony,
                    Punjagutta, Hyderabad – 500082, Telangana, INDIA.
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-[#D96B4F] shrink-0" />
                  <a
                    href="tel:+9104044507070"
                    className="hover:text-[#D96B4F] transition-colors font-bold"
                  >
                    +91 (040) 4450-7070 / +91 94400 55667
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-[#D96B4F] shrink-0" />
                  <a
                    href="mailto:enquiry@clamshellinfra.com"
                    className="hover:text-[#D96B4F] transition-colors"
                  >
                    enquiry@clamshellinfra.com / sales@clamshellinfra.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-[#D96B4F] shrink-0" />
                  <span>Mon – Sat: 8:00 AM – 6:00 PM (IST)</span>
                </div>
              </div>
            </div>

            {/* Emergency Hotline Banner */}
            <div className="p-6 rounded-2xl bg-[#331E11] text-white flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-[#D96B4F] flex items-center justify-center text-white shrink-0">
                <Zap className="h-6 w-6" />
              </div>
              <div>
               
                <div className="text-base sm:text-lg font-black text-[#FAF7F2]">
                  1800-425-9988 / +91 94400 12345
                </div>
                <p className="text-[11px] text-[#EDE3D7] mt-0.5">
                  24/7 Rapid Dispatch Task Force
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry & RFQ Form */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-[#E3D7C8] p-6 sm:p-10 shadow-md">
            <h3 className="text-2xl font-extrabold text-[#1A1614]">
              Send an Inquiry / Request a Commercial Quote
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#573A29]">
              Fill out your requirement specifications below. Our commercial
              bidding engineers will respond with detailed BOQ and freight
              schedules.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#785135] mb-1">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full p-3 rounded-xl border border-[#E3D7C8] text-xs focus:ring-2 focus:ring-[#D96B4F] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#785135] mb-1">
                    Organization / Company *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    placeholder="e.g. State Electricity Board / L&T"
                    className="w-full p-3 rounded-xl border border-[#E3D7C8] text-xs focus:ring-2 focus:ring-[#D96B4F] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#785135] mb-1">
                    Official Mobile / Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+91 98765 43210"
                    className="w-full p-3 rounded-xl border border-[#E3D7C8] text-xs focus:ring-2 focus:ring-[#D96B4F] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#785135] mb-1">
                    Official Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="procurement@utility.com"
                    className="w-full p-3 rounded-xl border border-[#E3D7C8] text-xs focus:ring-2 focus:ring-[#D96B4F] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#785135] mb-1">
                    Product Line
                  </label>
                  <select
                    value={formData.product}
                    onChange={(e) =>
                      setFormData({ ...formData, product: e.target.value })
                    }
                    className="w-full p-3 rounded-xl border border-[#E3D7C8] text-xs bg-white focus:ring-2 focus:ring-[#D96B4F] focus:outline-none"
                  >
                    <option value="PSC Poles">PSC Poles</option>
                    <option value="Rail Poles">Rail Poles</option>
                    <option value="Custom Rail Pole">Custom Rail Pole</option>
                    <option value="AB Cable">AB Cable</option>
                    <option value="Conductor">Conductor</option>
                    <option value="Enamelled Flat Wire">Enamelled Flat Wire</option>
                    <option value="DPC Strip">DPC Strip</option>
                    <option value="Super Enamelled Wire">Super Enamelled Wire</option>
                    <option value="DPC Wire">DPC Wire</option>
                  </select>
                </div>

                {formData.product === "Rail Poles" && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 rounded-2xl border border-[#E3D7C8] bg-[#FBF7F2] p-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#785135] mb-1">Required pole length</label>
                      <input type="text" value={formData.requiredLength} onChange={(e) => setFormData({ ...formData, requiredLength: e.target.value })} className="w-full p-3 rounded-xl border border-[#E3D7C8] text-xs" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#785135] mb-1">Weight per metre</label>
                      <input type="text" value={formData.weightPerMetre} onChange={(e) => setFormData({ ...formData, weightPerMetre: e.target.value })} className="w-full p-3 rounded-xl border border-[#E3D7C8] text-xs" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#785135] mb-1">Additional requirements</label>
                      <input type="text" value={formData.additionalRequirements} onChange={(e) => setFormData({ ...formData, additionalRequirements: e.target.value })} className="w-full p-3 rounded-xl border border-[#E3D7C8] text-xs" />
                    </div>
                  </div>
                )}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#785135] mb-1">
                    Estimated Qty (Units)
                  </label>
                  <input
                    type="text"
                    value={formData.quantity}
                    onChange={(e) =>
                      setFormData({ ...formData, quantity: e.target.value })
                    }
                    placeholder="e.g. 500 units"
                    className="w-full p-3 rounded-xl border border-[#E3D7C8] text-xs focus:ring-2 focus:ring-[#D96B4F] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#785135] mb-1">
                    Delivery State / Location
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    placeholder="e.g. Hyderabad / Vizag"
                    className="w-full p-3 rounded-xl border border-[#E3D7C8] text-xs focus:ring-2 focus:ring-[#D96B4F] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#785135] mb-1">
                  Project Notes &amp; Specifications
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Mention working load, line voltage, required delivery schedule, or tender reference..."
                  className="w-full p-3 rounded-xl border border-[#E3D7C8] text-xs focus:ring-2 focus:ring-[#D96B4F] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#D96B4F] py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#C4573B] transition-colors"
              >
                <span>{submitting ? "Submitting..." : "Submit Inquiry"}</span>
                <Send className="h-4 w-4" />
              </button>

              {submitted && (
                <div className="p-4 rounded-xl bg-[#FEF4F0] border border-[#F5D7CD] text-[#4A2D1A] text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#D96B4F] shrink-0" />
                  <span>
                    Thank you. Your enquiry was received and stored successfully.
                  </span>
                </div>
              )}
              {error && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs font-semibold">
                  {error}
                </div>
              )}
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
