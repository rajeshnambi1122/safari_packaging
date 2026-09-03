'use client';

import React from 'react';
import { CircleUserRound, Award, ShieldCheck, Clock } from 'lucide-react';

export const LeadershipSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 font-serif">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side - Profile Icon */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <div className="relative w-48 h-48 md:w-64 md:h-64 bg-gray-100 rounded-full flex items-center justify-center border-4 border-[var(--color-secondary)] shadow-lg">
              <CircleUserRound className="w-24 h-24 md:w-32 md:h-32 text-gray-400" strokeWidth={1} />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 right-4 md:right-8 bg-[var(--color-primary)] text-white p-3 rounded-full shadow-lg flex items-center justify-center border-2 border-white">
                <Award className="w-8 h-8 text-[var(--color-secondary)]" />
              </div>
            </div>
          </div>

          {/* Right Side - Bio */}
          <div className="w-full md:w-2/3 text-center md:text-left flex flex-col gap-6">
            <div>
              <h3 className="text-[var(--color-primary)] font-serif font-bold tracking-widest uppercase text-sm mb-2">Our Leadership</h3>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 font-bold mb-2">
                Subbu Subbiah
              </h2>
              <p className="text-xl text-[var(--color-primary)] font-serif font-medium italic">
                Business Proprietor
              </p>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed max-w-2xl font-serif">
              With over <span className="font-bold text-[var(--color-primary)]">10+ years of hands-on experience</span> in the food packaging industry, Subbu founded Safari Packaging with a singular vision: to deliver premium, sustainable, and reliable packaging solutions that help brands thrive. 
            </p>
            
            <p className="text-gray-700 text-lg leading-relaxed max-w-2xl font-serif">
              His deep expertise in materials, manufacturing, and supply chain logistics ensures that every client receives factory-direct pricing without ever compromising on quality. Under his guidance, Safari Packaging remains committed to eco-friendly innovations and absolute client satisfaction.
            </p>

            {/* Quick Stats/Badges */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
              <div className="flex items-center gap-2 bg-[var(--color-background)] px-4 py-2 rounded-full border border-[var(--color-primary)]/20">
                <Clock className="w-5 h-5 text-[var(--color-primary)]" />
                <span className="text-sm font-bold text-gray-900">10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 bg-[var(--color-background)] px-4 py-2 rounded-full border border-[var(--color-primary)]/20">
                <ShieldCheck className="w-5 h-5 text-[var(--color-primary)]" />
                <span className="text-sm font-bold text-gray-900">Industry Expert</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
