'use client';
import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

interface FloatingQuoteButtonProps {
  onOpenQuote: () => void;
}

export const FloatingQuoteButton: React.FC<FloatingQuoteButtonProps> = ({ onOpenQuote }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={onOpenQuote}
      aria-label="Get a Quote"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[var(--color-primary)] text-white font-serif text-base font-bold px-5 py-3.5 rounded-full shadow-2xl hover:bg-emerald-900 hover:scale-105 active:scale-95 transition-all duration-200 animate-slide-up"
    >
      <MessageCircle size={20} className="shrink-0" />
      <span>Get Quote</span>
    </button>
  );
};
