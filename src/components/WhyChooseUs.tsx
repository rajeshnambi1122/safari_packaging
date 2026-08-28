'use client';
import React from 'react';
import { Button } from './Button';
import { BadgeDollarSign, Palette, Leaf, Zap } from 'lucide-react';

interface WhyChooseUsProps {
  onOpenQuote: (productName?: string) => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenQuote }) => {
  const benefits = [
    {
      icon: <BadgeDollarSign size={36} className="text-[var(--color-primary)]" strokeWidth={1.5} />,
      title: "Factory-Direct Pricing No Middlemen",
      description: "Skip distributor markups entirely. We manufacture in our own food-certified facility, passing up to 35% volume savings directly to your business. The more you order, the more you save."
    },
    {
      icon: <Palette size={36} className="text-[var(--color-primary)]" strokeWidth={1.5} />,
      title: "Free Design & Structural Dielines",
      description: "Never waste money on packaging that doesn't fit. Our design team creates precise 2D dielines and 3D digital mockups before a single box is printed all included free with your quote."
    },
    {
      icon: <Leaf size={36} className="text-[var(--color-primary)]" strokeWidth={1.5} />,
      title: "100% Food-Safe & Eco-Certified",
      description: "Win over eco-conscious customers and stay compliant. Our FSC-certified kraft boards, plant-based coatings, and soy inks are fully food-grade, grease-resistant, and biodegradable."
    },
    {
      icon: <Zap size={36} className="text-[var(--color-primary)]" strokeWidth={1.5} />,
      title: "Fast Delivery Guaranteed",
      description: "Running low? Never shut your kitchen down for packaging. Our rapid manufacturing and nationwide logistics put fresh stock at your door in as little as 7 business days."
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-10 md:py-16 font-serif">
      <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
        <h2 className="text-2xl md:text-4xl lg:text-[40px] text-[var(--color-primary)] font-serif font-bold leading-tight mb-3">
          The Smart Packaging Partner for Growing Food Brands
        </h2>
        <p className="text-base md:text-lg text-gray-700 font-serif">
          Built for restaurant operators, bakery owners, and food entrepreneurs who refuse to compromise on quality, speed, or cost.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="p-6 md:p-8 bg-white border-2 border-[var(--color-primary)] rounded-[24px] md:rounded-[36px] shadow-[4px_4px_4px_rgba(28,63,36,0.2)] flex flex-col justify-between hover:shadow-[6px_6px_10px_rgba(28,63,36,0.3)] transition-all"
          >
            <div>
              <span className="mb-4 block">{item.icon}</span>
              <h3 className="text-xl md:text-2xl text-[var(--color-primary)] font-serif font-bold mb-3">
                {item.title}
              </h3>
              <p className="text-base md:text-lg text-gray-800 font-serif leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button
          variant="primary"
          className="text-base md:text-lg py-3 px-8"
          onClick={() => onOpenQuote()}
        >
          Order Now →
        </Button>
      </div>
    </section>
  );
};


