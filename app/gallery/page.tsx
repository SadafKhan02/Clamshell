import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gallery | Clamshell Infrastructure",
  description: "PSC Pole and electrical product reference gallery.",
};

export default function GalleryPage() {
  const images = [
    ["/PSC-pole.jpg", "PSC Pole product reference"],
    ["/rail-pole.avif", "General Rail Pole reference"],
    ["/conductor-cable.jpg", "Proposed conductor and cable reference"],
    ["/strip-wire.jpg", "Proposed winding strip reference"],
  ];
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#D96B4F]">Gallery</p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">Product and infrastructure gallery</h1>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {images.map(([src, alt]) => (
          <figure key={src} className="overflow-hidden rounded-2xl border border-[#E3D7C8] bg-[#FBF7F2]">
            <div className="relative aspect-square">
              <Image src={src} alt={alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-contain p-4" loading="lazy" />
            </div>
            <figcaption className="border-t border-[#E3D7C8] px-4 py-3 text-sm font-semibold">{alt}</figcaption>
          </figure>
        ))}
      </div>
    </main>
  );
}
