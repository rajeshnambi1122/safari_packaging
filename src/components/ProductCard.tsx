'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from './Button';

export interface ProductItem {
  id: string;
  title: string;
  price: string;
  imageUrl: string;
  category?: string;
  description?: string;
  badge?: string;
}

interface ProductCardProps {
  title: string;
  description?: string;
  price: string;
  imageUrl: string;
  badge?: string;
  onOpenQuote?: (productName: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ title, description, price, imageUrl, badge, onOpenQuote }) => {
  return (
    <div className="flex flex-col justify-between p-4 md:p-5 bg-white border-2 border-[var(--color-primary)] rounded-[28px] md:rounded-[36px] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 w-full max-w-[320px] font-serif relative">

      {/* Product Image with optional badge */}
      <div className="w-full aspect-[4/3] relative rounded-[20px] overflow-hidden mb-4 border border-gray-100 bg-gray-50">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
        {badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-[var(--color-primary)] text-white text-xs font-bold font-serif px-3 py-1.5 rounded-full shadow-md">
              {badge}
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="flex flex-col w-full text-left mb-4 font-serif">
        <h3 className="text-xl md:text-2xl font-serif text-black leading-snug font-bold mb-2">
          {title}
        </h3>
        {description && (
          <p className="text-sm md:text-base text-gray-700 font-serif leading-relaxed line-clamp-2">
            {description}
          </p>
        )}
      </div>

      {/* CTA Button */}
      <Button
        variant="primary"
        className="w-full text-base md:text-lg py-2.5 cursor-pointer rounded-full shadow-sm"
        onClick={() => onOpenQuote && onOpenQuote(title)}
      >
        Get Quote
      </Button>
    </div>
  );
};

