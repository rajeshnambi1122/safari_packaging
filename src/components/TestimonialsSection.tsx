'use client';
import React from 'react';

export const TestimonialsSection = () => {
  const reviews = [
    {
      name: "Marcus Vance",
      role: "Operations Director",
      company: "Green Roast Cafe Chain",
      quote: "Switching to Safari Packaging cut our packaging costs by 22% and our customers literally compliment our cup designs. Their 7-day turnaround saved our whole holiday campaign. Game-changer."
    },
    {
      name: "Elena Rostova",
      role: "Founder & Head Chef",
      company: "Artisan Crust Pizza Co.",
      quote: "Our sourdough crusts stay hot and crispy no more soggy bottoms in delivery. And the custom logo print quality is stunning. Safari Packaging is the real deal."
    },
    {
      name: "David Chen",
      role: "Supply Chain Director",
      company: "Gourmet Deli & Bistro Group",
      quote: "We tried four suppliers before Safari Packaging. Nobody else matched their grease resistance, zero ink odor, and perfect branding consistency. They’re now our only packaging partner."
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-10 md:py-16 font-serif">
      <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
        <h2 className="text-2xl md:text-4xl lg:text-[40px] text-[var(--color-primary)] font-serif font-bold leading-tight mb-3">
          Real Results from Real Food Brands
        </h2>
        <p className="text-base md:text-lg text-gray-700 font-serif">
          50+ restaurants and food brands trust Safari Packaging to protect their food, strengthen their brand, and keep customers coming back.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((rev, idx) => (
          <div
            key={idx}
            className="bg-white border-2 border-[var(--color-primary)] rounded-[24px] md:rounded-[36px] p-6 shadow-[4px_4px_4px_rgba(28,63,36,0.2)] flex flex-col justify-between hover:shadow-[6px_6px_10px_rgba(28,63,36,0.3)] transition-all"
          >
            <div>
              <div className="flex gap-0.5 mb-3">
                {[1, 2, 3, 4, 5].map(s => <span key={s} className="text-yellow-400 text-lg">★</span>)}
              </div>
              <p className="text-gray-800 font-serif text-base leading-relaxed italic mb-6">
                &ldquo;{rev.quote}&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <h4 className="font-bold text-[var(--color-primary)] font-serif text-xl">{rev.name}</h4>
              <p className="text-xs md:text-sm text-gray-600 font-serif">{rev.role} — <span className="font-semibold text-black">{rev.company}</span></p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
