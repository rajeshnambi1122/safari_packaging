'use client';
import React from 'react';
import { Button } from './Button';

interface EcoSectionProps {
  onOpenQuote?: (productName?: string) => void;
}

export const EcoSection: React.FC<EcoSectionProps> = ({ onOpenQuote }) => {
  return (
    <section id="eco" className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-14 font-serif">
      <div className="flex flex-col lg:flex-row gap-0 overflow-hidden shadow-xl">
        {/* Left Green Box */}
        <div className="flex-1 bg-[var(--color-primary)] p-6 md:p-10 lg:p-12 flex flex-col justify-center text-white">
          <h2 className="text-2xl md:text-4xl lg:text-[44px] font-serif leading-tight mb-4 md:mb-6 font-bold">
            Eco-Certified. Food-Safe. Customer-Approved.
          </h2>
          <p className="text-lg md:text-xl lg:text-[24px] font-serif leading-relaxed">
            FSC-certified kraft board, plant-based barrier coatings, and zero-odor soy inks. Your food stays hot. Your planet stays green. Your customers come back.
          </p>
        </div>

        {/* Right Gray Box */}
        <div className="flex-1 bg-[var(--color-secondary)] p-6 md:p-10 lg:p-12 flex flex-col justify-center">
          <p className="text-xl md:text-2xl lg:text-[28px] text-[var(--color-primary)] leading-snug font-serif font-bold">
            Your Logo. Your Story. On Every Box, Cup & Bag.
          </p>
          <p className="text-lg md:text-xl text-gray-800 font-serif mt-4">
            Custom brand printing turns every meal into a marketing moment. Free design and structural dieline support with every order.
          </p>
        </div>
      </div>

      {/* Bottom Large Green Box */}
      <div className="w-full bg-[var(--color-primary)] mt-6 md:mt-8 p-6 md:p-10 lg:p-12 shadow-xl text-white">
        <p className="text-base md:text-lg lg:text-[22px] leading-relaxed font-serif">
          Safari Packaging is a specialized food packaging manufacturer trusted by 50+ growing restaurants, bakeries, cafes, and food brands worldwide.
          <br /><br />
          We combine advanced Offset & Flexo printing with precision die-cutting and eco-coating systems to produce packaging that's grease-resistant, heat-retaining, and structurally superior all manufactured to international food-grade safety standards and FSC environmental certifications.
          <br /><br />
          The result? Packaging that protects your food, elevates your brand, and keeps your customers ordering more. That's the Safari Packaging difference.
        </p>

        {onOpenQuote && (
          <div className="mt-6 flex justify-center lg:justify-start">
            <Button
              variant="secondary"
              className="text-base md:text-lg py-3 px-8 border-white text-[var(--color-primary)] font-bold"
              onClick={() => onOpenQuote('Eco Sustainable Food Packaging')}
            >
              Get My Custom Packaging Quote →
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
