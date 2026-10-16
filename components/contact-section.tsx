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
  Factory,
  Zap,
} from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    org: "",
    phone: "",
    email: "",
    product: "PSCC Poles",
    quantity: "",
    destination: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        org: "",
        phone: "",
        email: "",
        product: "PSCC Poles",
        quantity: "",
        destination: "",
        message: "",
      });
    }, 7000);
  };

  const plants = [
    {
      unit: "Plant Unit I (Headquarters & R&D)",
      location: "Hyderabad Industrial Growth Center, Telangana",
      capacity: "450,000 Poles / Year",
      specialty: "PSCC Poles, Testing Laboratory, Central Dispatch",
      phone: "+91 (040) 4450-7070",
    },
    {
      unit: "Plant Unit II (Coastal Marine Hub)",
      location: "Visakhapatnam Autonagar, Andhra Pradesh",
      capacity: "350,000 Poles / Year",
      specialty: "Spun Poles & Marine Saline Corrosion Solutions",
      phone: "+91 891 278-4450",
    },
    {
      unit: "Plant Unit III (Central India Freight Hub)",
      location: "MIDC Butibori, Nagpur, Maharashtra",
      capacity: "300,000 Poles / Year",
      specialty: "Rectangular PSCC Poles & Heavy Substation Precast",
      phone: "+91 712 265-8890",
    },
    {
      unit: "Plant Unit IV (South Hub)",
      location: "Peenya Industrial Area, Bengaluru, Karnataka",
      capacity: "250,000 Poles / Year",
      specialty: "Urban Distribution PSCC Poles & Street Lighting",
      phone: "+91 80 2839-4411",
    },
    {
      unit: "Plant Unit V (East-Central Hub)",
      location: "Urla Industrial Estate, Raipur, Chhattisgarh",
      capacity: "250,000 Poles / Year",
      specialty: "Heavy Tension 33kV & Railway OHE Sleepers",
      phone: "+91 771 405-3320",
    },
    {
      unit: "Plant Unit VI (Western Renewable Corridor)",
      location: "Sanand GIDC, Ahmedabad, Gujarat",
      capacity: "200,000 Poles / Year",
      specialty: "Solar & Wind Farm Evacuation Lines, Spun Piles",
      phone: "+91 79 2685-9912",
    },
  ];

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
                    value={formData.org}
                    onChange={(e) =>
                      setFormData({ ...formData, org: e.target.value })
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
                    <option value="PSCC Poles">PSCC Poles (8m-13m)</option>
                    <option value="Rectangular Poles">Rectangular Poles</option>
                    <option value="Spun Poles & Piles">Spun Poles &amp; Piles</option>
                    <option value="Substation Trenches">Substation Precast</option>
                    <option value="Railway Sleepers">Railway Sleepers</option>
                  </select>
                </div>
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
                    value={formData.destination}
                    onChange={(e) =>
                      setFormData({ ...formData, destination: e.target.value })
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
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#D96B4F] py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#C4573B] transition-colors"
              >
                <span>Submit Inquiry to Clamshell Engineering</span>
                <Send className="h-4 w-4" />
              </button>

              {submitted && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span>
                    Thank you! Your quotation inquiry has been routed to
                    Clamshell Commercial Tenders Division. An official BOQ quote
                    will be dispatched to your email within 2 hours.
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Manufacturing Plants Directory */}
        <div className="mt-20">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D96B4F]">
              Strategic Plant Network
            </span>
            <h3 className="text-2xl font-extrabold text-[#1A1614] mt-1">
              6 Manufacturing Facilities Across Bihar
            </h3>
            <p className="text-xs sm:text-sm text-[#573A29] mt-1">
              Strategically placed adjacent to national highways and freight
              corridors for immediate mobilization.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plants.map((plant, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E3D7C8] space-y-3"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-[#D96B4F]">
                  <Factory className="h-4 w-4" />
                  <span>{plant.unit}</span>
                </div>
                <div className="text-xs text-[#1A1614] font-semibold flex items-start gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-[#785135] shrink-0 mt-0.5" />
                  <span>{plant.location}</span>
                </div>
                <div className="text-xs text-[#573A29]">
                  <strong className="text-[#1A1614]">Annual Capacity:</strong>{" "}
                  {plant.capacity}
                </div>
                <div className="text-[11px] text-[#6E635D]">
                  <strong className="text-[#785135]">Specialization:</strong>{" "}
                  {plant.specialty}
                </div>
                <div className="pt-2 border-t border-[#E3D7C8] flex items-center justify-between text-xs">
                  <span className="text-[#6E635D]">Dispatch Desk:</span>
                  <span className="font-bold text-[#1A1614]">{plant.phone}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
