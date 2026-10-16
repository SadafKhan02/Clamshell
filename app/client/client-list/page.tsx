import type { Metadata } from "next";
import Link from "next/link";
import { Building2, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Client List | Clamshell Infrastructure Private Limited",
  description:
    "Our esteemed clients and partners, including state electricity boards, central transmission utilities, and leading EPC infrastructure giants.",
};

export default function ClientListPage() {
  const clients = [
    { name: "TSSPDCL", role: "Southern Power Distribution Co. of Telangana" },
    { name: "TSNPDCL", role: "Northern Power Distribution Co. of Telangana" },
    { name: "APCPDCL", role: "Central Power Distribution Co. of Andhra Pradesh" },
    { name: "APEPDCL", role: "Eastern Power Distribution Co. of Andhra Pradesh" },
    { name: "BESCOM", role: "Bangalore Electricity Supply Company" },
    { name: "MSEDCL", role: "Maharashtra State Electricity Distribution Co." },
    { name: "TANGEDCO", role: "Tamil Nadu Generation & Distribution Corp." },
    { name: "PGCIL", role: "Power Grid Corporation of India Limited" },
    { name: "L&T Construction", role: "Power Transmission & Distribution IC" },
    { name: "Tata Power", role: "Transmission & Renewable Infrastructure" },
    { name: "Adani Energy Solutions", role: "HV Transmission Lines" },
    { name: "NTPC Limited", role: "National Thermal Power Corporation" },
    { name: "KEC International", role: "EPC Infrastructure Contractors" },
    { name: "Kalpataru Projects", role: "Power Transmission & Substations" },
    { name: "Sterling & Wilson", role: "Solar Farm Grid Interconnects" },
    { name: "Indian Railways", role: "Overhead Catenary & Sleepers" },
  ];

  return (
    <div className="w-full py-16 sm:py-24 bg-[#FFFDFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-xs font-semibold text-[#785135] hover:text-[#D96B4F] transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FEF4F0] px-3.5 py-1 text-xs font-bold text-[#D96B4F]">
            <span>OUR ESTEEMED CLIENTS &amp; PARTNERS</span>
          </div>
          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1A1614] leading-tight">
            Client List
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#573A29] leading-relaxed">
            Over two decades of consistent, uncompromised delivery to India&apos;s leading state electricity
            utilities, central transmission grids, and infrastructure leaders.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E3D7C8] shadow-xs hover:border-[#D96B4F] hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-9 w-9 rounded-xl bg-[#FEF4F0] flex items-center justify-center text-[#D96B4F] shrink-0 font-black text-sm">
                    {client.name.slice(0, 2)}
                  </div>
                  <h3 className="font-extrabold text-[#1A1614] text-base truncate">
                    {client.name}
                  </h3>
                </div>
                <p className="text-xs text-[#6E635D] leading-relaxed">
                  {client.role}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#EDE3D7] flex items-center justify-between text-xs text-[#785135]">
                <span>Approved Vendor</span>
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5" /> Active
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-[#331E11] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold">Become an Approved Utility Partner</h3>
            <p className="text-xs sm:text-sm text-[#EDE3D7] mt-1">
              Submit vendor registration inquiries or request immediate technical dispatches.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#D96B4F] px-6 py-3 text-sm font-bold text-white hover:bg-[#C4573B] transition-colors shrink-0"
          >
            <span>Contact Commercial Division</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
