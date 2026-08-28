'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from './Button';
import { CheckCircle2, Zap } from 'lucide-react';

interface SampleKitBannerProps {
  onOpenQuote: (productName?: string) => void;
}

export const SampleKitBanner: React.FC<SampleKitBannerProps> = ({ onOpenQuote }) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-8 font-serif">
      <div className="rounded-[24px] md:rounded-[36px] overflow-hidden bg-[var(--color-primary)] text-white p-6 md:p-10 shadow-xl border-2 border-[var(--color-primary)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

          {/* Left image showcase */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-[400px] aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white">
              <Image
                src="/images/sample_kit.jpg"
                alt="Safari Packaging Free Sample Kit Box"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right Copy & CTA */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-4 text-center lg:text-left font-serif">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white leading-tight">
              Not Sure Yet? Touch & Feel Before You Commit.
            </h2>

            <p className="text-gray-200 text-base md:text-lg font-serif leading-relaxed">
              Order our <span className="font-bold text-white">Free Safari Packaging Sample Kit</span> to evaluate our paper quality, textures, and finish in your own hands. It&apos;s the fastest way to confirm your perfect packaging fit—on us.
            </p>

            {/* Checklist */}
            <ul className="text-sm md:text-base text-gray-100 font-serif space-y-2">
              {['Eco double-wall paper cup samples', 'Custom box structural dielines', 'Kraft board grease-resistance swatches', 'Foil stamp & print finish samples'].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#D9D9D9] shrink-0" strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>

            {/* Urgency */}
            <p className="flex items-center gap-2 text-[#D9D9D9] text-sm font-serif font-bold">
              <Zap size={16} className="text-[#D9D9D9]" strokeWidth={2} />
              Ships within hours & completely free
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-1 justify-center lg:justify-start">
              <Button
                variant="secondary"
                className="w-full sm:w-auto text-base md:text-lg py-3 px-6 text-[var(--color-primary)] font-bold"
                onClick={() => onOpenQuote('Packaging Sample Kit')}
              >
                Send Me My Free Kit →
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

