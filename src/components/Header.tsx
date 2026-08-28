'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PhoneCall, Menu, X, Home, Leaf, Package } from 'lucide-react';

interface HeaderProps {
  onOpenQuote?: (productName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white sticky top-0 z-50 font-serif shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border-b border-black">
      {/* ── Desktop & Tablet Header ── */}
      <div className="hidden md:flex max-w-7xl mx-auto px-6 md:px-8 py-3 items-center justify-between w-full">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] shrink-0">
            <Image
              src="/images/logo.png"
              alt="Safari Packaging Logo"
              fill
              sizes="70px"
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-2xl lg:text-3xl text-[var(--color-primary)] font-serif leading-none font-bold">
            Safari Packaging
          </h1>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="flex flex-row items-center gap-6 lg:gap-8 text-base lg:text-lg text-black font-serif">
          <Link href="/" className="flex items-center gap-2 hover:text-[var(--color-primary)] transition-colors">
            <Home size={18} />
            <span>Home</span>
          </Link>
          <Link href="#eco" className="flex items-center gap-2 hover:text-[var(--color-primary)] transition-colors">
            <Leaf size={18} />
            <span>About us</span>
          </Link>
          <Link href="#products" className="flex items-center gap-2 hover:text-[var(--color-primary)] transition-colors">
            <Package size={18} />
            <span>Products</span>
          </Link>
          <Link href="#contact" className="flex items-center gap-2 hover:text-[var(--color-primary)] transition-colors">
            <PhoneCall size={18} />
            <span>Contact</span>
          </Link>
        </nav>
      </div>

      {/* ── Mobile Header ── */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 w-full relative h-[73px]">
        {/* Placeholder for flex balance */}
        <div className="w-8"></div>

        {/* Centered Logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          <div className="relative w-[70px] h-[70px]">
            <Image
              src="/images/logo.png"
              alt="Safari Packaging Logo"
              fill
              sizes="50px"
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Hamburger Menu Right */}
        <button
          className="p-1 text-[var(--color-primary)] z-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Navigation"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <nav className="absolute top-[73px] left-0 w-full bg-white border-b border-black flex flex-col items-center py-6 gap-6 text-xl text-[var(--color-primary)] font-serif shadow-lg z-50">
            <Link href="/" className="flex items-center gap-2 hover:text-emerald-800 transition-colors" onClick={() => setIsMenuOpen(false)}>
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link href="#eco" className="flex items-center gap-2 hover:text-emerald-800 transition-colors" onClick={() => setIsMenuOpen(false)}>
              <Leaf size={20} />
              <span>About us</span>
            </Link>
            <Link href="#products" className="flex items-center gap-2 hover:text-emerald-800 transition-colors" onClick={() => setIsMenuOpen(false)}>
              <Package size={20} />
              <span>Products</span>
            </Link>
            <Link href="#contact" className="flex items-center gap-2 hover:text-emerald-800 transition-colors" onClick={() => setIsMenuOpen(false)}>
              <PhoneCall size={20} />
              <span>Contact</span>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

