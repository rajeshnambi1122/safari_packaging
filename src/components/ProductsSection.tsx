'use client';
import React, { useState } from 'react';
import { ProductCard } from './ProductCard';

interface ProductsSectionProps {
  onOpenQuote: (productName: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onOpenQuote }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const products = [
    {
      id: 'pizza-box-1',
      title: "Custom Pizza Box",
      description: "Vented kraft board designed to keep crusts hot & crisp",
      price: "$0.45 per Box",
      category: "Pizza & Bakery",
      imageUrl: "/images/pizza_box.jpg",
      badge: "Most Popular"
    },
    {
      id: 'custom-cups',
      title: "Custom Cups",
      description: "Double-wall thermal insulation for hot & cold beverages",
      price: "$0.15 per Cup",
      category: "Cups & Drinkware",
      imageUrl: "/images/custom_cups.jpg",
      badge: "Best Value"
    },
    {
      id: 'takeout-box',
      title: "Takeout Box",
      description: "Leak-proof oil-resistant container with secure locking flaps",
      price: "$0.35 per Box",
      category: "Eco Takeout Containers",
      imageUrl: "/images/takeout_container.jpg"
    },
    {
      id: 'bakery-box',
      title: "Bakery Box",
      description: "Windowed & non-windowed pastry boxes for cakes & desserts",
      price: "$0.50 per Box",
      category: "Pizza & Bakery",
      imageUrl: "/images/bakery_box.jpg"
    },
    {
      id: 'paper-bags',
      title: "Paper Bags",
      description: "Heavy-duty kraft paper bags with durable twist handles",
      price: "$0.25 per Bag",
      category: "Food Paper Bags",
      imageUrl: "/images/paper_bags.jpg"
    },
    {
      id: 'burger-box',
      title: "Burger Box",
      description: "Sturdy clamshell food cartons for burgers, fries & sides",
      price: "$0.30 per Box",
      category: "Food Cartons & Boxes",
      imageUrl: "/images/burger_box.jpg"
    },
    {
      id: 'gourmet-box',
      title: "Gourmet Kraft Box",
      description: "Eco-friendly premium food box with window for catering & takeaway",
      price: "$0.40 per Box",
      category: "Food Cartons & Boxes",
      imageUrl: "/images/gourmet_box.jpg"
    },
    {
      id: 'pizza-circles',
      title: "Pizza Circles",
      description: "Corrugated cardboard bases to keep crusts crisp and structurally sound",
      price: "$0.10 per Pad",
      category: "Pizza & Bakery",
      imageUrl: "/images/pizza_circles_v2.jpg"
    },
    {
      id: 'pizza-slice-box',
      title: "Pizza Slice Box",
      description: "Individual wedge-shaped kraft boxes perfect for single-serve pizza slices",
      price: "$0.20 per Box",
      category: "Pizza & Bakery",
      imageUrl: "/images/pizza_slice_box_v2.jpg"
    },
    {
      id: 'custom-wax-paper',
      title: "Custom Wax Paper",
      description: "Grease-resistant deli wrapping paper, fully customizable with your logo",
      price: "$0.05 per Sheet",
      category: "Food Paper Bags",
      imageUrl: "/images/wax_paper_v2.jpg"
    }
  ];

  const categories = ['All', 'Cups & Drinkware', 'Pizza & Bakery', 'Eco Takeout Containers', 'Food Paper Bags', 'Food Cartons & Boxes'];

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="w-full relative pt-2 pb-16 font-serif overflow-hidden">

      {/* Exact Figma Dark Green Curved Banner */}
      <div className="relative w-full my-6 md:my-10">
        <svg
          viewBox="0 0 1440 280"
          className="w-full h-[200px] sm:h-[240px] md:h-[280px] text-[var(--color-primary)] fill-current block"
          preserveAspectRatio="none"
        >
          <path d="M0,35 Q720,95 1440,35 L1440,245 Q720,185 0,245 Z" />
        </svg>

        {/* Centered White Title matching Figma */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] text-white font-serif tracking-wide font-normal text-center">
            Best Selling Products
          </h2>
        </div>
      </div>

      {/* Category Filter Pills & Products Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Category filter pills - Horizontally scrollable on mobile */}
        <div className="flex flex-row overflow-x-auto flex-nowrap md:flex-wrap items-center md:justify-center gap-2.5 md:gap-3 mb-10 font-serif pb-4 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 px-4 py-2 md:px-5 md:py-2.5 rounded-full text-sm md:text-base font-serif transition-all duration-200 cursor-pointer ${activeCategory === cat
                ? 'bg-[var(--color-primary)] text-white font-bold shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 justify-items-center">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              badge={product.badge}
              onOpenQuote={onOpenQuote}
            />
          ))}
        </div>

      </div>
    </section>
  );
};


