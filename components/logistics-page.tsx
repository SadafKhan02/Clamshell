"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Boxes,
  Cable,
  Check,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Forklift,
  Headphones,
  Map,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Route,
  ShieldCheck,
  SlidersHorizontal,
  TrainFront,
  Truck,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import { logisticsContent, logisticsImageNotice } from "@/data/logistics";

const iconMap: Record<string, LucideIcon> = {
  route: Route,
  shield: ShieldCheck,
  map: Map,
  users: Users,
  truck: Truck,
  train: TrainFront,
  cable: Cable,
  boxes: Boxes,
  lift: Forklift,
  clipboard: ClipboardList,
  phone: Phone,
  check: Check,
  sliders: SlidersHorizontal,
  message: MessageCircle,
  headphones: Headphones,
};

const cardClass =
  "rounded-2xl border border-[#E3D7C8] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D9B19F] hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none";
const iconBoxClass =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FEF4F0] text-[#D96B4F]";
const inputClass =
  "mt-1.5 w-full rounded-xl border border-[#E3D7C8] bg-white px-3.5 py-3 text-sm text-[#1A1614] outline-none transition focus:border-[#D96B4F] focus:ring-2 focus:ring-[#D96B4F]/20";

type GalleryImage = (typeof logisticsContent.gallery)[number];

export function LogisticsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    if (!activeImage) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImage]);

  return (
    <main className="w-full overflow-hidden bg-[#FDFBF9]">
      <section className="relative isolate flex min-h-[480px] items-center overflow-hidden bg-[#331E11] sm:min-h-[560px]">
        <Image
          src={logisticsContent.hero.image}
          alt={logisticsContent.hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1A1614]/90 via-[#1A1614]/65 to-[#1A1614]/30" />
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-9 text-sm text-white/75">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-white">Logistics</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold tracking-[0.16em] text-[#FFD3C5] backdrop-blur-sm">
              {logisticsContent.hero.eyebrow}
            </p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              {logisticsContent.hero.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
              {logisticsContent.hero.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#logistics-enquiry" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#D96B4F] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#C4573B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                Request a Logistics Quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="#logistics-services" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/50 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                Explore Our Services <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <p className="mt-5 max-w-xl text-xs leading-5 text-white/65">{logisticsImageNotice}</p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <SectionEyebrow>Logistics overview</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#1A1614] sm:text-4xl">{logisticsContent.overview.title}</h2>
            <p className="mt-5 text-base leading-7 text-[#573A29]">{logisticsContent.overview.description}</p>
            {logisticsContent.overview.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-sm leading-7 text-[#6E635D]">{paragraph}</p>
            ))}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {logisticsContent.highlights.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <article key={item.title} className="flex gap-3 rounded-xl border border-[#E3D7C8] bg-white p-4">
                    <span className={iconBoxClass}><Icon className="h-5 w-5" aria-hidden="true" /></span>
                    <span>
                      <span className="block text-sm font-bold text-[#1A1614]">{item.title}</span>
                      <span className="mt-1 block text-xs leading-5 text-[#6E635D]">{item.description}</span>
                    </span>
                  </article>
                );
              })}
            </div>
          </div>
          <figure className="relative min-h-[360px] overflow-hidden rounded-3xl border border-[#E3D7C8] bg-[#F6F1EC] shadow-lg sm:min-h-[460px]">
            <Image src={logisticsContent.overview.image} alt={logisticsContent.overview.imageAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1A1614]/85 to-transparent px-5 pb-5 pt-16 text-xs text-white/85">
              Illustrative product and infrastructure reference — not a verified logistics operation photograph.
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="logistics-services" className="scroll-mt-24 border-y border-[#E3D7C8] bg-[#FBF7F2] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our logistics services" title="Transport support shaped around your requirement" description="Share your route, material, and timing requirements for a project-specific logistics discussion." />
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {logisticsContent.services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <article key={service.title} className={`${cardClass} flex min-h-[255px] flex-col p-6`}>
                  <div className="flex items-start justify-between gap-4">
                    <span className={iconBoxClass}><Icon className="h-5 w-5" aria-hidden="true" /></span>
                    {service.status && <span className="rounded-full bg-[#FEF4F0] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[#983B23]">{service.status}</span>}
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-[#1A1614]">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-[#6E635D]">{service.description}</p>
                  <Link href={service.href} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#983B23] hover:text-[#D96B4F]">
                    {service.href.startsWith("/product") ? "Learn More" : "Enquire Now"} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-8">
          <figure className="relative order-2 min-h-[340px] overflow-hidden rounded-3xl border border-[#E3D7C8] bg-[#F6F1EC] lg:order-1 sm:min-h-[430px]">
            <Image src={logisticsContent.infrastructure.image} alt={logisticsContent.infrastructure.imageAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1A1614]/85 to-transparent px-5 pb-5 pt-16 text-xs text-white/85">Product reference photo; no fleet or facility claim is implied.</figcaption>
          </figure>
          <div className="order-1 lg:order-2">
            <SectionEyebrow>Planning &amp; coordination</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#1A1614] sm:text-4xl">{logisticsContent.infrastructure.title}</h2>
            <p className="mt-5 text-sm leading-7 text-[#573A29]">{logisticsContent.infrastructure.description}</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {logisticsContent.infrastructure.items.map((item) => {
                const Icon = iconMap[item.icon];
                return <article key={item.title} className="rounded-2xl border border-[#E3D7C8] bg-[#FBF7F2] p-4">
                  <Icon className="h-5 w-5 text-[#D96B4F]" aria-hidden="true" />
                  <h3 className="mt-3 text-sm font-bold text-[#1A1614]">{item.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-[#6E635D]">{item.description}</p>
                </article>;
              })}
            </div>
            <p className="mt-4 text-xs leading-5 text-[#785135]">Fleet availability, equipment, storage, and dispatch procedures are subject to client confirmation.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#E3D7C8] bg-[#FAF7F2] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="How it works" title="A clear six-step logistics workflow" description="A flexible outline for coordinating a shipment from initial requirement to delivery confirmation." />
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {logisticsContent.workflow.map((step, index) => {
              const Icon = iconMap[step.icon];
              return <li key={step.title} className={`${cardClass} relative p-5 sm:p-6`}>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black tracking-tight text-[#D96B4F]/35">{String(index + 1).padStart(2, "0")}</span>
                  <span className={iconBoxClass}><Icon className="h-5 w-5" aria-hidden="true" /></span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#1A1614]">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#6E635D]">{step.description}</p>
                {index < logisticsContent.workflow.length - 1 && <span aria-hidden="true" className="absolute -bottom-3 left-1/2 z-10 hidden h-2 w-2 rounded-full bg-[#D96B4F] lg:block" />}
              </li>;
            })}
          </ol>
        </div>
      </section>

      <TransportCalculator />

      <section id="coverage" className="scroll-mt-24 bg-[#FBF7F2] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <SectionEyebrow>Illustrative service coverage</SectionEyebrow>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#1A1614] sm:text-4xl">{logisticsContent.coverage.title}</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#573A29]">{logisticsContent.coverage.description}</p>
            </div>
            <div className="rounded-3xl border border-[#E3D7C8] bg-white p-5 sm:p-7">
              <div className="grid gap-3 sm:grid-cols-2">
                {logisticsContent.coverage.regions.map((region, index) => (
                  <div key={region} className={`flex items-center gap-3 rounded-xl border p-4 ${index === 4 ? "border-dashed border-[#D9B19F] bg-[#FEF4F0]/50 sm:col-span-2" : "border-[#E3D7C8] bg-[#FBF7F2]"}`}>
                    <MapPin className="h-4 w-4 shrink-0 text-[#D96B4F]" aria-hidden="true" />
                    <span className="text-sm font-bold text-[#4A2D1A]">{region}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs leading-5 text-[#785135]">Coverage list is illustrative, not a statement of current delivery operations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Why choose our logistics solutions" title="Practical planning. Clear communication." description="A customer-focused approach to discussing transport needs without assumed availability or delivery guarantees." />
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {logisticsContent.reasons.map((item) => {
              const Icon = iconMap[item.icon];
              return <article key={item.title} className={`${cardClass} flex gap-4 p-5`}>
                <span className={iconBoxClass}><Icon className="h-5 w-5" aria-hidden="true" /></span>
                <div><h3 className="font-bold text-[#1A1614]">{item.title}</h3><p className="mt-1.5 text-sm leading-6 text-[#6E635D]">{item.description}</p></div>
              </article>;
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-[#E3D7C8] bg-[#FBF7F2] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Gallery" title="Infrastructure & product references" description="Existing images are presented only as product or infrastructure references, not as confirmed company transport or facility photographs." />
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {logisticsContent.gallery.map((image) => (
              <button key={image.image} type="button" onClick={() => setActiveImage(image)} aria-label={`Preview image: ${image.caption}`} className="group relative overflow-hidden rounded-2xl border border-[#E3D7C8] bg-white text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D96B4F]">
                <span className="relative block aspect-[4/3] overflow-hidden">
                  <Image src={image.image} alt={image.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" loading="lazy" className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none" />
                  <span className="absolute inset-0 bg-gradient-to-t from-[#1A1614]/75 to-transparent" />
                  <span className="absolute inset-x-0 bottom-0 p-4 text-sm font-semibold text-white">{image.caption}</span>
                </span>
              </button>
            ))}
          </div>
          <p className="mt-4 text-xs leading-5 text-[#785135]">{logisticsImageNotice}</p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Frequently asked questions" title="Logistics FAQs" description="General guidance for submitting a transport enquiry. Specific arrangements require confirmation." />
          <div className="mt-8 space-y-3">
            {logisticsContent.faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              const panelId = `logistics-faq-${index}`;
              return <article key={faq.question} className="overflow-hidden rounded-2xl border border-[#E3D7C8] bg-white">
                <h3>
                  <button type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpenFaq(isOpen ? null : index)} className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-bold text-[#1A1614] hover:bg-[#FBF7F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#D96B4F]">
                    {faq.question}<ChevronDown className={`h-4 w-4 shrink-0 text-[#D96B4F] transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                  </button>
                </h3>
                {isOpen && <div id={panelId} className="border-t border-[#EDE3D7] px-5 py-4 text-sm leading-6 text-[#6E635D]">{faq.answer}</div>}
              </article>;
            })}
          </div>
        </div>
      </section>

      <LogisticsEnquiryForm />

      <section className="bg-[#331E11] py-12 text-white sm:py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl">Let&apos;s Move Your Next Infrastructure Project Forward.</h2>
            <p className="mt-3 text-sm leading-6 text-[#EDE3D7]">Connect with our team to discuss your transportation and logistics requirements.</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link href="#logistics-enquiry" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#D96B4F] px-5 py-3 text-sm font-bold text-white hover:bg-[#C4573B]">Request a Quote <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/40 px-5 py-3 text-sm font-bold text-white hover:bg-white/10">Contact Our Team</Link>
          </div>
        </div>
      </section>

      {activeImage && (
        <div role="dialog" aria-modal="true" aria-label="Image preview" className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1A1614]/90 p-4" onClick={() => setActiveImage(null)}>
          <button type="button" autoFocus onClick={() => setActiveImage(null)} aria-label="Close image preview" className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"><X className="h-5 w-5" /></button>
          <figure className="w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <div className="relative mx-auto aspect-[16/10] max-h-[78vh] overflow-hidden rounded-2xl">
              <Image src={activeImage.image} alt={activeImage.alt} fill sizes="90vw" className="object-contain" />
            </div>
            <figcaption className="mt-3 text-center text-sm text-white">{activeImage.caption}</figcaption>
          </figure>
        </div>
      )}
    </main>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#D96B4F]">{children}</p>;
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <div className="max-w-3xl">
    <SectionEyebrow>{eyebrow}</SectionEyebrow>
    <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#1A1614] sm:text-4xl">{title}</h2>
    <p className="mt-3 text-sm leading-7 text-[#6E635D] sm:text-base">{description}</p>
  </div>;
}

function TransportCalculator() {
  const [category, setCategory] = useState(logisticsContent.calculator.categories[0]);
  const [variant, setVariant] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [unitWeight, setUnitWeight] = useState("350");
  const [pickup, setPickup] = useState("");
  const [delivery, setDelivery] = useState("");
  const [distance, setDistance] = useState("100");
  const [vehicle, setVehicle] = useState(logisticsContent.calculator.vehicles[0].name);
  const selectedVehicle = logisticsContent.calculator.vehicles.find((option) => option.name === vehicle) ?? logisticsContent.calculator.vehicles[0];
  const totalWeight = useMemo(() => {
    const units = Number(quantity);
    const kg = Number(unitWeight);
    return Number.isFinite(units) && Number.isFinite(kg) && units > 0 && kg > 0 ? units * kg : null;
  }, [quantity, unitWeight]);
  const estimatedLoads = totalWeight === null ? null : Math.ceil(totalWeight / selectedVehicle.planningCapacityKg);

  return <section className="py-16 sm:py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Illustrative planning tool" title={logisticsContent.calculator.title} description={logisticsContent.calculator.description} />
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-[#E3D7C8] bg-white p-5 shadow-sm sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Product category">
              <select value={category} onChange={(event) => setCategory(event.target.value)} className={inputClass}>
                {logisticsContent.calculator.categories.map((option) => <option key={option}>{option}</option>)}
              </select>
            </Field>
            <Field label="Product variant">
              <input value={variant} onChange={(event) => setVariant(event.target.value)} placeholder="e.g. 8 m pole / custom" className={inputClass} />
            </Field>
            <Field label="Required quantity">
              <input type="number" min="1" step="1" value={quantity} onChange={(event) => setQuantity(event.target.value)} className={inputClass} />
            </Field>
            <Field label="Approximate product weight (kg each)">
              <input type="number" min="0.1" step="any" value={unitWeight} onChange={(event) => setUnitWeight(event.target.value)} className={inputClass} />
            </Field>
            <Field label="Pickup location">
              <input value={pickup} onChange={(event) => setPickup(event.target.value)} placeholder="Enter pickup location" className={inputClass} />
            </Field>
            <Field label="Delivery location">
              <input value={delivery} onChange={(event) => setDelivery(event.target.value)} placeholder="Enter delivery location" className={inputClass} />
            </Field>
            <Field label="Estimated distance (km)">
              <input type="number" min="0" step="1" value={distance} onChange={(event) => setDistance(event.target.value)} className={inputClass} />
            </Field>
            <Field label="Vehicle type">
              <select value={vehicle} onChange={(event) => setVehicle(event.target.value)} className={inputClass}>
                {logisticsContent.calculator.vehicles.map((option) => <option key={option.name}>{option.name}</option>)}
              </select>
            </Field>
          </div>
          <p className="mt-5 rounded-xl bg-[#FBF7F2] p-4 text-xs leading-5 text-[#785135]">{logisticsContent.calculator.note}</p>
        </div>
        <aside className="rounded-3xl bg-[#331E11] p-6 text-white sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#F3A58F]">Illustrative estimate</p>
          <h3 className="mt-2 text-2xl font-extrabold">Planning summary</h3>
          <dl className="mt-6 space-y-4">
            <Estimate label="Product category" value={`${category}${variant ? ` · ${variant}` : ""}`} />
            <Estimate label="Planned route" value={`${pickup || "Pickup not entered"} → ${delivery || "Delivery not entered"}`} />
            <Estimate label="Total material weight" value={totalWeight === null ? "Enter valid quantity and weight" : `${totalWeight.toLocaleString()} kg`} />
            <Estimate label="Transport requirement" value={estimatedLoads === null ? "Needs input" : `${estimatedLoads} illustrative ${estimatedLoads === 1 ? "load" : "loads"}`} />
            <Estimate label="Vehicle planning assumption" value={`${selectedVehicle.name} · ${selectedVehicle.planningCapacityKg.toLocaleString()} kg`} />
            <Estimate label="Route distance" value={distance && Number(distance) >= 0 ? `${Number(distance).toLocaleString()} km` : "Enter distance"} />
            <Estimate label="Transportation cost" value="Not estimated — no approved rate configured" />
          </dl>
          <p className="mt-5 text-xs leading-5 text-white/65">This calculator is illustrative only. It does not confirm vehicle limits, capacity, availability, pricing, or shipment suitability.</p>
          <Link href="#logistics-enquiry" className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#D96B4F] px-5 py-3 text-sm font-bold text-white hover:bg-[#C4573B]">Request Final Quotation <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </aside>
      </div>
    </div>
  </section>;
}

function Estimate({ label, value }: { label: string; value: string }) {
  return <div className="flex flex-col gap-1 border-b border-white/15 pb-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
    <dt className="text-xs text-white/65">{label}</dt>
    <dd className="text-sm font-bold text-white sm:max-w-[58%] sm:text-right">{value}</dd>
  </div>;
}

function LogisticsEnquiryForm() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const submissionInProgress = useRef(false);

  async function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submissionInProgress.current) return;
    submissionInProgress.current = true;
    setSubmitting(true);
    setSuccess("");
    setError("");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const pickup = String(formData.get("pickup") ?? "").trim();
    const delivery = String(formData.get("delivery") ?? "").trim();
    const date = String(formData.get("date") ?? "").trim();
    const requirement = String(formData.get("requirements") ?? "").trim();
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          company: formData.get("company"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          product: `Logistics — ${formData.get("category")}`,
          quantity: formData.get("quantity"),
          location: delivery,
          pickupLocation: pickup,
          preferredDate: date,
          message: [`Pickup location: ${pickup}`, `Preferred delivery date: ${date}`, requirement].filter(Boolean).join("\n"),
        }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Could not submit the logistics enquiry.");
      setSuccess(`Enquiry received successfully. Reference: ${result.enquiryId}`);
      form.reset();
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Could not submit the logistics enquiry. Please try again.");
    } finally {
      submissionInProgress.current = false;
      setSubmitting(false);
    }
  }

  return <section id="logistics-enquiry" className="scroll-mt-24 border-y border-[#E3D7C8] bg-[#FBF7F2] py-16 sm:py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12">
        <div>
          <SectionEyebrow>Start a conversation</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#1A1614] sm:text-4xl">Request a Logistics Quotation</h2>
          <p className="mt-4 text-sm leading-7 text-[#573A29]">Provide the route and material details. This enquiry is sent to the configured site enquiry system; all service and quotation details require confirmation.</p>
          <div className="mt-6 rounded-2xl border border-[#E3D7C8] bg-white p-5">
            <div className="flex gap-3"><span className={iconBoxClass}><Navigation className="h-5 w-5" aria-hidden="true" /></span><p className="text-sm leading-6 text-[#6E635D]">Please include accurate pickup and delivery points, quantity, and any handling or access requirements.</p></div>
          </div>
        </div>
        <form onSubmit={submitEnquiry} className="rounded-3xl border border-[#E3D7C8] bg-white p-5 shadow-sm sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full Name" required><input name="name" autoComplete="name" required maxLength={120} className={inputClass} /></Field>
            <Field label="Company Name"><input name="company" autoComplete="organization" maxLength={160} className={inputClass} /></Field>
            <Field label="Email Address" required><input name="email" type="email" autoComplete="email" required maxLength={254} className={inputClass} /></Field>
            <Field label="Phone Number" required><input name="phone" type="tel" autoComplete="tel" required maxLength={40} className={inputClass} /></Field>
            <Field label="Product Category" required>
              <select name="category" required defaultValue="" className={inputClass}>
                <option value="" disabled>Select a category</option>
                <option>PSC Poles</option><option>Rail Poles</option><option>Wire &amp; Cable (proposed)</option><option>Bulk materials</option><option>Other</option>
              </select>
            </Field>
            <Field label="Product Quantity" required><input name="quantity" type="number" min="1" step="1" required className={inputClass} /></Field>
            <Field label="Pickup Location" required><input name="pickup" required maxLength={200} className={inputClass} /></Field>
            <Field label="Delivery Location" required><input name="delivery" required maxLength={200} className={inputClass} /></Field>
            <Field label="Preferred Delivery Date"><input name="date" type="date" className={inputClass} /></Field>
            <Field label="Additional Requirements"><textarea name="requirements" rows={3} maxLength={3000} className={inputClass} /></Field>
          </div>
          <button type="submit" disabled={submitting} className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#D96B4F] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#C4573B] disabled:cursor-wait disabled:opacity-70">
            {submitting ? "Submitting..." : "Submit Logistics Enquiry"} {submitting ? null : <ArrowRight className="h-4 w-4" aria-hidden="true" />}
          </button>
          {success && <p role="status" className="mt-4 rounded-xl border border-green-200 bg-green-50 p-4 text-sm font-semibold text-green-800"><CheckCircle2 className="mr-2 inline h-4 w-4" aria-hidden="true" />{success}</p>}
          {error && <p role="alert" className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-800">{error}</p>}
        </form>
      </div>
    </div>
  </section>;
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return <label className="block text-xs font-bold text-[#785135]">
    {label}{required ? <span aria-hidden="true"> *</span> : null}
    {children}
  </label>;
}
