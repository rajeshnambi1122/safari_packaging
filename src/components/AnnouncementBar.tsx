'use client';
import React from 'react';

export const AnnouncementBar = () => {
  return (
    <div className="w-full bg-[var(--color-primary)] text-white overflow-hidden pt-3 pb-7 flex items-center relative z-40">
      <div className="flex whitespace-nowrap animate-marquee-x text-sm md:text-base font-medium font-sans">
        {/* First set of items */}
        <div className="flex items-center gap-8 px-4 min-w-full justify-around font-serif">
          <span>Quality Food Packaging Products</span>
          <span>We do Custom Branding on the boxes</span>
          <span>Wholesale Price</span>
          <span>Quality Food Packaging Products</span>
        </div>
        {/* Duplicate for seamless scrolling */}
        <div className="flex items-center gap-8 px-4 min-w-full justify-around font-serif">
          <span>Quality Food Packaging Products</span>
          <span>We do Custom Branding on the boxes</span>
          <span>Wholesale Price</span>
          <span>Quality Food Packaging Products</span>
        </div>
      </div>
    </div>
  );
};
