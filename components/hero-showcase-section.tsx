import Image from "next/image";
import { CheckCircle2, Factory, Truck, Zap } from "lucide-react";

export function HeroShowcaseSection() {
  const metrics = [
    {
      metric: "1.8M+",
      label: "Annual Pole Capacity",
      desc: "Highest production in class",
    },
    {
      metric: "6 Plants",
      label: "Automated Facilities",
      desc: "Strategically located in India",
    },
    {
      metric: "450+",
      label: "Transport Trucks",
      desc: "With hydraulic boom cranes",
    },
    {
      metric: "100%",
      label: "IS Standards Tested",
      desc: "NABL calibrated load test beds",
    },
  ];

  const products = [
    {
      name: "PSCC Poles",
      description:
        "8m to 13m prestressed utility poles with working loads from 140kg to 400kg.",
      feature: "IS:1678 Compliant",
      icon: Zap,
    },
    {
      name: "Rectangular Poles",
      description:
        "Space-efficient geometry with superior lateral flexural strength for highway feeders.",
      feature: "Heavy Duty Design",
      icon: Factory,
    },
    {
      name: "Spun Poles & Piles",
      description:
        "Centrifugally compacted hollow concrete with zero voids for saline coastal corridors.",
      feature: "Cyclone Resilient",
      icon: Truck,
    },
  ];

  return (
    <section className="w-full border-b border-[#E3D7C8] bg-[#FBF7F2] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-[#E3D7C8] bg-white shadow-xl shadow-[#785135]/5">
          <div className="grid grid-cols-1 divide-y divide-[#EDE3D7] lg:grid-cols-12 lg:divide-x lg:divide-y-0">
            <div className="flex flex-col justify-between bg-gradient-to-br from-[#FFFDFB] to-[#FAF7F2] p-6 sm:p-8 lg:col-span-5">
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 shrink-0 rounded-2xl border-2 border-[#D96B4F]/30 bg-white p-1 shadow-md">
                  <Image
                    src="/logo.jpg"
                    alt="Clamshell Infrastructure Private Limited Official Stamp"
                    width={80}
                    height={80}
                    className="rounded-xl object-contain"
                  />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D96B4F]">
                    Corporate Identity
                  </span>
                  <h2 className="text-lg font-extrabold leading-tight text-[#1A1614]">
                    Clamshell Infrastructure Private Limited
                  </h2>
                  <p className="mt-0.5 text-xs font-semibold text-[#785135]">
                    Motto: &quot;SHAPE PERFECT&quot;
                  </p>
                </div>
              </div>

              <div className="my-6 space-y-3">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#D96B4F]" />
                  <p className="text-xs text-[#4A2D1A] sm:text-sm">
                    <strong className="font-semibold text-[#1A1614]">
                      IS 1678:1998 &amp; IS 2905 Certified
                    </strong>{" "}
                    for high-stress overhead electrical transmission lines.
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#D96B4F]" />
                  <p className="text-xs text-[#4A2D1A] sm:text-sm">
                    <strong className="font-semibold text-[#1A1614]">
                      1.8+ Million Units Annual Capacity
                    </strong>{" "}
                    across 6 automated casting plants in India.
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#D96B4F]" />
                  <p className="text-xs text-[#4A2D1A] sm:text-sm">
                    <strong className="font-semibold text-[#1A1614]">
                      Dedicated Logistics Fleet
                    </strong>{" "}
                    with on-board hydraulic boom cranes for pit-side offloading.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-[#E3D7C8]/70 pt-4 text-xs">
                <span className="text-[#6E635D]">Approved by Major DISCOMs</span>
                <span className="font-bold text-[#D96B4F]">Pan-India Supply</span>
              </div>
            </div>

            <div className="flex flex-col justify-between bg-white p-6 sm:p-8 lg:col-span-7">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#785135]">
                  Flagship Manufacturing Segments
                </h3>
                <span className="text-xs font-medium text-[#D96B4F]">
                  Tested &amp; Approved
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {products.map((product) => {
                  const Icon = product.icon;

                  return (
                    <div
                      key={product.name}
                      className="group rounded-2xl border border-[#EDE3D7] bg-[#FAF7F2] p-4 transition-colors hover:border-[#D96B4F]"
                    >
                      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#FEF4F0] text-[#D96B4F] transition-transform group-hover:scale-105">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h4 className="text-sm font-bold text-[#1A1614] transition-colors group-hover:text-[#D96B4F]">
                        {product.name}
                      </h4>
                      <p className="mt-1 line-clamp-3 text-xs text-[#573A29]">
                        {product.description}
                      </p>
                      <span className="mt-3 inline-block text-[11px] font-bold text-[#785135]">
                        {product.feature} →
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {metrics.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-[#E3D7C8] bg-white p-5 shadow-xs transition-all duration-200 hover:border-[#D96B4F] hover:shadow-md"
            >
              <div className="text-2xl font-extrabold text-[#D96B4F] sm:text-3xl">
                {item.metric}
              </div>
              <div className="mt-1 text-xs font-bold uppercase tracking-wider text-[#1A1614]">
                {item.label}
              </div>
              <div className="mt-0.5 text-xs text-[#6E635D]">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
