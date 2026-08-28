'use client';
import React from 'react';
import { Package, Handshake, Zap, Leaf } from 'lucide-react';

export const TrustMetrics = () => {
  const metrics = [
    {
      icon: <Package size={32} className="text-[#D9D9D9]" strokeWidth={1.5} />,
      number: "1M+",
      label: "Packages Delivered",
      subtext: "To restaurants, bakeries & food brands"
    },
    {
      icon: <Handshake size={32} className="text-[#D9D9D9]" strokeWidth={1.5} />,
      number: "50+",
      label: "Happy Business Partners",
      subtext: "Restaurants, cafes & roasters"
    },
    {
      icon: <Zap size={32} className="text-[#D9D9D9]" strokeWidth={1.5} />,
      number: "Rapid Delivery",
      label: "Express Turnaround",
      subtext: "Rapid production & doorstep delivery"
    },
    {
      icon: <Leaf size={32} className="text-[#D9D9D9]" strokeWidth={1.5} />,
      number: "100%",
      label: "FSC Eco Certified",
      subtext: "Food-safe & fully recyclable"
    }
  ];

  return (
    <section className="w-full bg-[var(--color-primary)] text-white py-6 md:py-16 my-4 md:my-6 font-serif overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-row gap-8 md:gap-12 lg:gap-16 animate-marquee-x w-max py-4">
            {[...metrics, ...metrics].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center w-[200px] md:w-[240px] lg:w-[280px]">
                <div className="mb-3 lg:mb-4 flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-white/10 rounded-full">{item.icon}</div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#D9D9D9] mb-1 lg:mb-2">
                  {item.number}
                </div>
                <div className="text-lg md:text-xl font-serif font-semibold text-white mb-0.5 lg:mb-1">
                  {item.label}
                </div>
                <div className="text-sm md:text-base text-gray-300 font-serif">
                  {item.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

