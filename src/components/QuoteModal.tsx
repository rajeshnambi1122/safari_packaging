'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, initialProduct = '' }) => {
  const [products, setProducts] = useState<string[]>(initialProduct ? [initialProduct] : []);
  const [quantity, setQuantity] = useState('5000');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const PRODUCT_OPTIONS = [
    "Custom Cups", "Custom Pizza Box", "Takeout Box", "Bakery Box",
    "Paper Bags", "Burger Box", "Gourmet Kraft Box", "Wax Sheets",
    "Other / Custom Sizing"
  ];

  useEffect(() => {
    if (initialProduct && !products.includes(initialProduct)) {
      setProducts((prev) => [...prev, initialProduct]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialProduct]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const toggleProduct = (prod: string) => {
    setProducts((prev) =>
      prev.includes(prod) ? prev.filter((p) => p !== prod) : [...prev, prod]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (products.length === 0) {
      alert("Please select at least one packaging product.");
      return;
    }
    setIsSubmitting(true);

    try {
      await fetch(process.env.NEXT_PUBLIC_APPS_SCRIPT_URL!, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain'
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          company,
          product: products.join(', '),
          quantity,
          notes
        }),
      });

      // With 'no-cors', we cannot read the response, so we assume success if no network error
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
        // Reset form fields
        setName('');
        setEmail('');
        setPhone('');
        setCompany('');
        setNotes('');
        setProducts([]);
      }, 3500);
    } catch (error) {
      console.error('Error submitting quote:', error);
      alert('Failed to submit quote request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-white rounded-[30px] md:rounded-[40px] shadow-[5px_5px_15px_rgba(28,63,36,0.3)] overflow-hidden border-2 border-[var(--color-primary)] max-h-[90vh] flex flex-col font-serif"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[var(--color-primary)] text-white px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white shrink-0 p-0.5">
              <Image src="/images/logo.png" alt="Safari Packaging Logo" fill className="object-contain" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-serif">Get your Quote</h3>
              <p className="text-sm text-gray-200 font-serif opacity-90">Safari Packaging Estimate</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-colors text-white"
            aria-label="Close modal"
          >
            <X size={26} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 overflow-y-auto font-serif text-black">
          {submitted ? (
            <div className="py-12 flex flex-col items-center justify-center text-center gap-4">
              <CheckCircle2 className="w-16 h-16 text-[var(--color-primary)] animate-bounce" />
              <h4 className="text-3xl font-serif text-[var(--color-primary)]">Quote Request Received!</h4>
              <p className="text-gray-700 max-w-md text-xl leading-relaxed font-serif">
                Thank you <span className="font-bold text-[var(--color-primary)]">{name || 'valued client'}</span>! Our Sales Team are preparing your custom quote. We will call you at <span className="font-bold text-black">{phone}</span> within hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-[var(--color-primary)] mb-2">Packaging Products</label>
                  <div className="flex flex-wrap gap-2">
                    {PRODUCT_OPTIONS.map((prod) => (
                      <button
                        key={prod}
                        type="button"
                        onClick={() => toggleProduct(prod)}
                        className={`px-3 py-1.5 rounded-full text-sm font-serif border-2 transition-all duration-200 ${products.includes(prod)
                          ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-md'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-[var(--color-primary)]'
                          }`}
                      >
                        {prod}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-[var(--color-primary)] mb-1 mt-2">
                    {products.length > 1 ? "Required Quantity Each" : "Required Quantity"}
                  </label>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl border-2 border-[var(--color-primary)] focus:outline-none font-serif text-gray-900 bg-white"
                  >
                    <option value="500">500 units</option>
                    <option value="1000">1,000 units</option>
                    <option value="2500">2,500 units</option>
                    <option value="5000">5,000 units</option>
                    <option value="10000">10,000 units</option>
                    <option value="25000">25,000+ units</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-[var(--color-primary)] mb-1">Full Name *</label>
                  <input
                    type="text"
                    placeholder="John"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl border-2 border-[var(--color-primary)] focus:outline-none focus:border-emerald-600 font-serif text-gray-900"
                    required
                    minLength={2}
                    maxLength={50}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[var(--color-primary)] mb-1">Company Name</label>
                  <input
                    type="text"
                    placeholder="Your Company Name"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl border-2 border-[var(--color-primary)] focus:outline-none focus:border-emerald-600 font-serif text-gray-900"
                    maxLength={100}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-[var(--color-primary)] mb-1">Email Address *</label>
                  <input
                    type="email"
                    placeholder="john@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl border-2 border-[var(--color-primary)] focus:outline-none focus:border-emerald-600 font-serif text-gray-900"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[var(--color-primary)] mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl border-2 border-[var(--color-primary)] focus:outline-none focus:border-emerald-600 font-serif text-gray-900"
                    required
                    minLength={7}
                    maxLength={20}
                    pattern="[0-9\+\-\s\(\)]+"
                    title="Please enter a valid phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[var(--color-primary)] mb-1">Custom Notes / Dimensions</label>
                <textarea
                  rows={3}
                  placeholder="Specify custom box sizes, print colors, or special requirements..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border-2 border-[var(--color-primary)] focus:outline-none font-serif text-gray-900 resize-none"
                ></textarea>
              </div>

              <Button
                type="submit"
                variant="primary"
                className={`w-full text-xl py-4 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending Request...' : 'Submit Quote Request'}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
