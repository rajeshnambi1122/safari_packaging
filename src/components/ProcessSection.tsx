'use client';
import React from 'react';
import { Button } from './Button';

interface ProcessSectionProps {
  onOpenQuote: (productName?: string) => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenQuote }) => {
  const steps = [
    {
      step: "01",
      title: "Tell Us What You Need",
      description: "Share your box size, quantity, and branding ideas. We reply with a factory-direct quote within hours no commitment required."
    },
    {
      step: "02",
      title: "Get Your Design Proof",
      description: "See exactly how your packaging will look before we print. Our designers send 2D dielines and 3D digital mockups at no cost, so you approve with confidence."
    },
    {
      step: "03",
      title: "We Print & Inspect",
      description: "Vibrant Pantone & CMYK Offset/Flexo printing on food-certified kraft board. Every batch passes grease-resistance and food-safety QC before it leaves the facility."
    },
    {
      step: "04",
      title: "Delivered to Your Door",
      description: "Flat-packed, moisture-sealed, and dispatched within 7 days. Straight to your restaurant, bakery, or warehouse ready to fill and serve."
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-10 md:py-16 font-serif">
      <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
        <h2 className="text-2xl md:text-4xl lg:text-[40px] text-[var(--color-primary)] font-serif font-bold leading-tight mb-3">
          From Quote to Doorstep in 4 Easy Steps
        </h2>
        <p className="text-base md:text-lg text-gray-700 font-serif">
          Most customers receive their first quote within hours and their first delivery within days. Here&apos;s exactly how it works.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-stretch gap-0">
        {steps.map((item, index) => (
          <React.Fragment key={index}>
            <div className="flex-1 p-6 bg-white border-2 border-[var(--color-primary)] rounded-[24px] shadow-[4px_4px_4px_rgba(28,63,36,0.2)] flex flex-col hover:shadow-[6px_6px_10px_rgba(28,63,36,0.3)] hover:-translate-y-1 transition-all duration-300">
              <span className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-primary)] block mb-3">
                {item.step}
              </span>
              <h3 className="text-xl font-serif font-bold text-black mb-2">
                {item.title}
              </h3>
              <p className="text-gray-800 font-serif text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
            {/* Arrow connector — visible on desktop only */}
            {index < steps.length - 1 && (
              <div className="hidden lg:flex items-center justify-center px-2 shrink-0">
                <span className="text-3xl text-[var(--color-primary)] font-bold select-none">→</span>
              </div>
            )}
            {/* Mobile vertical connector */}
            {index < steps.length - 1 && (
              <div className="lg:hidden flex justify-center py-1">
                <span className="text-2xl text-[var(--color-primary)] rotate-90 inline-block">→</span>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button
          variant="primary"
          className="text-base md:text-lg py-3 px-8"
          onClick={() => onOpenQuote()}
        >
          Start My Order in 2 Minutes →
        </Button>
      </div>
    </section>
  );
};
