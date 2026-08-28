'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from './Button';

interface FaqSectionProps {
  onOpenQuote: (productName?: string) => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenQuote }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Can I receive a sample box before placing a large production order?",
      a: "Yes! We offer a Free Packaging Sample Kit containing material swatches, kraft board grades, double-wall paper cup samples, and foil stamp finishes. You can request one directly on our website."
    },
    {
      q: "How fast is production and doorstep delivery?",
      a: "Standard production takes 7 to 10 business days after final design artwork approval. We also offer express 5-day rush production for urgent product launches."
    },
    {
      q: "Do you offer free packaging design and dieline support?",
      a: "Absolutely. Our in-house structural packaging designers will create 2D vector dielines and 3D digital renderings for your product free of charge with any quote request."
    },
    {
      q: "Are Safari Packaging products food-safe and eco-certified?",
      a: "Yes. All of our paperboards, inks, and coatings are 100% food-grade compliant, FSC-certified, and biodegradable or recyclable."
    }
  ];

  return (
    <section className="w-full max-w-4xl mx-auto px-6 lg:px-8 py-10 md:py-16 font-serif">
      <div className="text-center max-w-xl mx-auto mb-10 md:mb-12">
        <h2 className="text-2xl md:text-4xl font-serif text-[var(--color-primary)] font-bold mb-3">
          Your Questions, Answered.
        </h2>
        <p className="text-gray-700 font-serif text-base md:text-lg">
          Everything you need to know about ordering, pricing, production, and getting your packaging right the first time.
        </p>
      </div>

      <div className="space-y-3.5 font-serif">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className={`rounded-[20px] border-2 transition-all duration-300 ${isOpen
                ? 'bg-white border-[var(--color-primary)] shadow-[4px_4px_4px_rgba(28,63,36,0.15)]'
                : 'bg-[var(--color-secondary)]/30 border-gray-300 hover:border-[var(--color-primary)]'
                }`}
            >
              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-lg md:text-xl text-black"
              >
                <span>{faq.q}</span>
                <div className={`p-1.5 rounded-full transition-transform duration-300 shrink-0 ${isOpen ? 'bg-[var(--color-primary)] text-white rotate-180' : 'bg-[#D9D9D9] text-black'}`}>
                  <ChevronDown size={18} />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 text-gray-800 font-serif text-base leading-relaxed border-t border-gray-200 pt-3 animate-fadeIn">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-10 text-center bg-[var(--color-secondary)] rounded-[24px] p-6 border-2 border-[var(--color-primary)] shadow-sm">
        <h3 className="text-xl font-bold font-serif text-[var(--color-primary)] mb-1.5">Still have questions? We reply in within hours.</h3>
        <p className="text-gray-800 text-base font-serif mb-4">Our packaging specialists are ready to help with dielines, compliance, bulk pricing, or anything else on your mind.</p>
        <Button
          variant="primary"
          className="text-base py-2.5 px-6"
          onClick={() => onOpenQuote()}
        >
          Talk to us →
        </Button>
      </div>
    </section>
  );
};
