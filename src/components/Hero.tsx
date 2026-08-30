'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from './Button';
import Link from 'next/link';

interface HeroProps {
  onOpenQuote?: (productName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section className="w-full min-h-[calc(100svh-73px)] lg:min-h-[500px] xl:min-h-[600px] overflow-hidden flex flex-col justify-between lg:flex-row lg:items-center py-8 sm:py-10 lg:py-12">

      {/* ── Left column: headline + subtitle + desktop buttons ── */}

      <div className="flex-1 flex flex-col gap-4 sm:gap-5 px-5 sm:px-8 lg:pl-12 xl:pl-20 lg:max-w-lg xl:max-w-xl font-serif lg:shrink-0">

        {/* Responsive Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-[44px] text-[var(--color-primary)] font-serif leading-tight font-bold">
          We Make & Sell Quality Food Packaging Products.
        </h2>

        {/* Responsive Subtitle */}
        <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-[var(--color-primary)] tracking-wide font-serif leading-relaxed">
          More than a box. It&apos;s your brand.
        </p>

        {/* Desktop buttons — row layout */}
        <div className="hidden lg:flex flex-row items-center gap-4 xl:gap-6 pt-2">
          <Button
            variant="primary"
            className="text-base xl:text-lg py-2.5 px-6"
            onClick={() => onOpenQuote && onOpenQuote()}
          >
            Get Quote
          </Button>
          <Link href="#products">
            <Button variant="secondary" className="text-base xl:text-lg py-2.5 px-6">
              View Products
            </Button>
          </Link>
        </div>

      </div>

      {/* ── Hero Image: fluid aspect ratio, responsive padding on mobile, bleeds right on desktop ── */}
      <div className="w-full sm:px-6 mt-6 lg:mt-0 lg:flex-1 lg:px-0 lg:flex lg:justify-end animate-slide-in-right">
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] max-w-2xl lg:max-w-[600px] xl:max-w-[700px] ml-auto">
          <Image
            src="/images/hero_image.png"
            alt="Safari Custom Food Packaging Box"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-right"
            priority
          />
        </div>
      </div>

      {/* ── Mobile buttons: centered stack matching design hierarchy ── */}
      <div className="lg:hidden flex flex-col items-center gap-3.5 mt-6 px-4 w-full">
        <Button
          variant="primary"
          className="w-full max-w-[200px] text-lg sm:text-xl py-2.5"
          onClick={() => onOpenQuote && onOpenQuote()}
        >
          Get Quote
        </Button>
        <Link href="#products" className="w-full flex justify-center">
          <Button variant="secondary" className="w-full max-w-[160px] text-sm sm:text-base py-2">
            View Products
          </Button>
        </Link>
      </div>

    </section>
  );
};

