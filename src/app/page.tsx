'use client';

import React, { useState } from 'react';
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustMetrics } from "@/components/TrustMetrics";
import { ProductsSection } from "@/components/ProductsSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ProcessSection } from "@/components/ProcessSection";
import { SampleKitBanner } from "@/components/SampleKitBanner";
import { EcoSection } from "@/components/EcoSection";
import { LeadershipSection } from "@/components/LeadershipSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FaqSection } from "@/components/FaqSection";
import { CtaBanner } from "@/components/CtaBanner";
import { FloatingQuoteButton } from "@/components/FloatingQuoteButton";
import { QuoteModal } from "@/components/QuoteModal";
import ContactPage from "./contact/page";

export default function Home() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const handleOpenQuote = (productName?: string) => {
    if (productName) setSelectedProduct(productName);
    else setSelectedProduct('');
    setIsQuoteOpen(true);
  };

  return (
    <main className="w-full min-h-screen bg-[var(--color-background)] pb-12 font-serif flex flex-col">
      <Header onOpenQuote={handleOpenQuote} />
      <Hero onOpenQuote={handleOpenQuote} />
      <TrustMetrics />
      <ProductsSection onOpenQuote={handleOpenQuote} />
      <WhyChooseUs onOpenQuote={handleOpenQuote} />
      <ProcessSection onOpenQuote={handleOpenQuote} />
      <EcoSection onOpenQuote={handleOpenQuote} />
      <LeadershipSection />
      <TestimonialsSection />
      <FaqSection onOpenQuote={handleOpenQuote} />
      <CtaBanner onOpenQuote={handleOpenQuote} />
      <div id="contact">
        <ContactPage onOpenQuote={handleOpenQuote} />
      </div>

      <FloatingQuoteButton onOpenQuote={handleOpenQuote} />

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialProduct={selectedProduct}
      />
    </main>
  );
}
