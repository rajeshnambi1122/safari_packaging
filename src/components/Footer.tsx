'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenQuote?: (productName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  return (
    <footer className="w-full bg-[var(--color-primary)] text-white py-10 md:py-12 font-serif">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 bg-white p-0.5">
                <Image
                  src="/images/logo.png"
                  alt="Safari Packaging Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-2xl font-serif text-white font-bold">Safari Packaging</h2>
            </div>
            <p className="text-gray-300 font-serif leading-relaxed text-base">
              We provide quality food packaging materials. More than a box, it's your brand. Eco-friendly and sustainable.
            </p>
            <div className="flex gap-4 pt-1">
              <Link href="https://www.facebook.com/profile.php?id=61593748870980" className="hover:text-[var(--color-secondary)] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </Link>
              <Link href="https://www.instagram.com/safaripackaging/" className="hover:text-[var(--color-secondary)] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold uppercase tracking-wider font-serif">Quick Links</h3>
            <nav className="flex flex-col gap-2.5 font-serif text-gray-300 text-base">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              <Link href="#products" className="hover:text-white transition-colors">Products</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <h3 className="text-lg font-bold uppercase tracking-wider font-serif">Get In Touch</h3>
            <div className="flex flex-col gap-3 font-serif text-gray-300 text-base">
              <a href="https://maps.google.com/?q=1119+Estey+Rd+Beaverton+MI+48612" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-white transition-colors group cursor-pointer">
                <MapPin className="shrink-0 mt-0.5 group-hover:text-[var(--color-secondary)] transition-colors" size={18} />
                <p>1119 Estey Rd<br />Beaverton, MI 48612</p>
              </a>
              <a href="tel:+18122029149" className="flex items-center gap-3 hover:text-white transition-colors group cursor-pointer">
                <Phone className="shrink-0 group-hover:text-[var(--color-secondary)] transition-colors" size={18} />
                <p>+1 812-202-9149</p>
              </a>
              <a href="mailto:sales@safaripackaging.com" className="flex items-center gap-3 hover:text-white transition-colors group cursor-pointer">
                <Mail className="shrink-0 group-hover:text-[var(--color-secondary)] transition-colors" size={18} />
                <p>sales@safaripackaging.com</p>
              </a>
            </div>

            {onOpenQuote && (
              <div className="mt-2">
                <button
                  onClick={() => onOpenQuote('Free Sample Kit')}
                  className="px-5 py-2.5 bg-[var(--color-secondary)] text-[var(--color-primary)] font-serif rounded-[35px] font-bold text-base hover:bg-white transition-transform hover:scale-105"
                >
                  Request Sample Box
                </button>
              </div>
            )}
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-white/20 text-center font-serif text-gray-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Safari Packaging Corp.</p>
        </div>
      </div>
    </footer>
  );
};
