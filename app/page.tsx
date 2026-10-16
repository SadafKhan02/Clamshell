"use client";

import React from "react";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProductsSection } from "@/components/products-section";
import { OperationsSection } from "@/components/operations-section";
import { LogisticsSection } from "@/components/logistics-section";
import { QualitySection } from "@/components/quality-section";

import { QuoteCalculator } from "@/components/quote-calculator";
import { ClientsSection } from "@/components/clients-section";
import { AwardsCsrSection } from "@/components/awards-csr-section";
import { DownloadsSection } from "@/components/downloads-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* 1. Hero Section (#home) */}
      <HeroSection />

      {/* 2. Corporate About Us & The "SHAPE PERFECT" Promise (#about) */}
      <AboutSection />

      {/* 3. Comprehensive Product Showcase (#products) */}
      <ProductsSection />

      {/* 4. Manufacturing Operations & Automated Casting (#operations) */}
      <OperationsSection />

      {/* 5. Fleet Logistics & Truck-Mounted Cranes (#logistics) */}
      <LogisticsSection />

      {/* 6. Quality Assurance & Testing Laboratories (#quality) */}
      <QualitySection />


      {/* 8. Technical Pole Configurator & RFQ Estimator (#quote-tool) */}
      <QuoteCalculator />

      {/* 9. Esteemed Clients, DISCOMs & Testimonials (#clients) */}
      <ClientsSection />

      {/* 10. Industry Awards, Certifications & CSR Sustainability */}
      <AwardsCsrSection />

      {/* 11. Technical Catalogues & Resource Downloads (#downloads) */}
      <DownloadsSection />

      {/* 12. Corporate Office, Plant Network & Contact Form (#contact) */}
      <ContactSection />
    </div>
  );
}
