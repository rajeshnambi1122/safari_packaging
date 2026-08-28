'use client';
import React from 'react';
import { Button } from './Button';
import { Rocket, CheckCircle2 } from 'lucide-react';

interface CtaBannerProps {
  onOpenQuote: (productName?: string) => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenQuote }) => {
  return (
    <section className="w-full bg-[var(--color-primary)] py-14 md:py-20 px-6 lg:px-8 font-serif">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">

        {/* Eyebrow */}
        <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-sm px-4 py-1.5 rounded-full font-serif">
          <Rocket size={16} className="text-white/80" />
          Join 50+ growing food brands
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-[46px] text-white font-serif font-bold leading-tight">
          Ready to Make Every Box Count?
        </h2>

        <p className="text-gray-200 text-lg md:text-xl font-serif leading-relaxed max-w-xl">
          Get factory-direct pricing, free design proofs, and Rapid delivery all in one quote. No hidden fees. No commitment.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto justify-center">
          <Button
            variant="secondary"
            className="w-full sm:w-auto text-base md:text-lg py-3 px-8 text-[var(--color-primary)] font-bold shadow-lg hover:shadow-xl"
            onClick={() => onOpenQuote()}
          >
            Get My Free Quote →
          </Button>
        </div>

        {/* Micro trust signals */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-300 font-serif mt-2">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 size={16} className="text-[#D9D9D9]" strokeWidth={2} />
            Reply within hours
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 size={16} className="text-[#D9D9D9]" strokeWidth={2} />
            Free Design proof
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 size={16} className="text-[#D9D9D9]" strokeWidth={2} />
            FSC Eco Certified
          </span>
        </div>

      </div>
    </section>
  );
};

