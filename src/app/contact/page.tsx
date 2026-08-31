'use client';

import React, { useState } from 'react';
import { Button } from '@/components/Button';
import { Mail, Phone, MapPin } from 'lucide-react';

interface ContactPageProps {
  onOpenQuote?: (productName?: string) => void;
}

export default function ContactPage({ onOpenQuote }: ContactPageProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [products, setProducts] = useState<string[]>([]);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const PRODUCT_OPTIONS = [
    "Custom Cups", "Custom Pizza Box", "Takeout Box", "Bakery Box",
    "Paper Bags", "Burger Box", "Gourmet Kraft Box", "Wax Sheets",
    "Other / Custom Sizing"
  ];

  const toggleProduct = (prod: string) => {
    setProducts((prev) =>
      prev.includes(prod) ? prev.filter((p) => p !== prod) : [...prev, prod]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
          notes: message,
          product: products.length > 0 ? products.join(', ') : 'Contact Page Form'
        }),
      });

      // With 'no-cors', assume success if fetch resolves
      setSubmitted(true);
      setName('');
      setEmail('');
      setPhone('');
      setCompany('');
      setProducts([]);
      setMessage('');
      setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-[var(--color-background)] flex flex-col font-serif">
      <div className="flex-1 w-full max-w-6xl mx-auto px-6 lg:px-8 py-10 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-[var(--color-primary)] font-serif mb-4 font-bold">Let&apos;s Build Your Brand Together</h1>
          <p className="text-base md:text-lg text-gray-700 font-serif max-w-xl mx-auto">
            Ready to stand out on every shelf, table, and delivery bag? Tell us what you need and we&apos;ll send a factory-direct quote within hours no obligation, no sales pressure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-white p-6 md:p-8 rounded-[24px] md:rounded-[36px] border-2 border-[var(--color-primary)] shadow-[4px_4px_4px_rgba(28,63,36,0.2)]">
            <h2 className="text-xl md:text-2xl text-[var(--color-primary)] font-serif mb-6 font-normal">Get your Quote</h2>
            {submitted ? (
              <div className="py-8 flex flex-col items-center justify-center text-center gap-3">
                <div className="w-12 h-12 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center text-2xl mb-2 animate-bounce">✓</div>
                <h4 className="text-2xl font-serif text-[var(--color-primary)] font-bold">Message Received!</h4>
                <p className="text-gray-700 text-lg">We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-serif">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-gray-900 font-serif text-base">Full Name *</label>
                    <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} placeholder="John Doe" className="px-4 py-2.5 rounded-xl border-2 border-[var(--color-primary)] focus:outline-none focus:border-emerald-600 font-serif text-gray-900 text-base" required minLength={2} maxLength={50} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="company" className="text-gray-900 font-serif text-base">Company Name</label>
                    <input type="text" id="company" value={company} onChange={e => setCompany(e.target.value)} placeholder="Your Brand" className="px-4 py-2.5 rounded-xl border-2 border-[var(--color-primary)] focus:outline-none focus:border-emerald-600 font-serif text-gray-900 text-base" maxLength={100} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-gray-900 font-serif text-base">Email Address *</label>
                    <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="john@example.com" className="px-4 py-2.5 rounded-xl border-2 border-[var(--color-primary)] focus:outline-none focus:border-emerald-600 font-serif text-gray-900 text-base" required />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-gray-900 font-serif text-base">Phone Number *</label>
                    <input type="tel" id="phone" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+1 (555) 123-4567" className="px-4 py-2.5 rounded-xl border-2 border-[var(--color-primary)] focus:outline-none focus:border-emerald-600 font-serif text-gray-900 text-base" required minLength={7} maxLength={20} pattern="[0-9\+\-\s\(\)]+" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 mt-1">
                  <label className="text-gray-900 font-serif text-base">Products of Interest</label>
                  <div className="flex flex-wrap gap-2">
                    {PRODUCT_OPTIONS.map((prod) => (
                      <button
                        key={prod}
                        type="button"
                        onClick={() => toggleProduct(prod)}
                        className={`px-3 py-1.5 rounded-full text-sm font-serif border-2 transition-all duration-200 ${products.includes(prod)
                          ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-sm'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-[var(--color-primary)]'
                          }`}
                      >
                        {prod}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-gray-900 font-serif text-base">What Do You Need? *</label>
                  <textarea id="message" value={message} onChange={e => setMessage(e.target.value)} rows={4} placeholder="Tell us about your products, box sizes, quantity, or any branding ideas..." className="px-4 py-2.5 rounded-xl border-2 border-[var(--color-primary)] focus:outline-none focus:border-emerald-600 font-serif text-gray-900 resize-none text-base" required minLength={10} maxLength={1000}></textarea>
                </div>
                <Button type="submit" variant="primary" className={`mt-3 py-3 w-full text-base md:text-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`} disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send My Quote Request →'}
                </Button>
              </form>
            )}
          </div>

          {/* Contact Details */}
          <div className="flex flex-col justify-center gap-8 bg-[var(--color-secondary)] p-6 md:p-8 rounded-[24px] md:rounded-[36px] h-fit shadow-md font-serif border border-gray-300">
            <h2 className="text-xl md:text-2xl text-[var(--color-primary)] font-serif font-bold">Contact Information</h2>

            <div className="flex flex-col gap-6 font-serif">
              <a href="https://maps.google.com/?q=1119+Estey+Rd+Beaverton+MI+48612" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 text-gray-900 hover:opacity-80 transition-opacity group cursor-pointer">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-[var(--color-primary)] group-hover:bg-[var(--color-primary)] transition-colors">
                  <MapPin className="text-[var(--color-primary)] group-hover:text-white transition-colors" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-0.5 text-[var(--color-primary)] group-hover:text-[var(--color-primary)]">Our Location</h3>
                  <p className="text-gray-800 text-base group-hover:text-gray-900">1119 Estey Rd<br />Beaverton<br />MI - 48612</p>
                </div>
              </a>

              <a href="tel:+18122029149" className="flex items-start gap-4 text-gray-900 hover:opacity-80 transition-opacity group cursor-pointer">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-[var(--color-primary)] group-hover:bg-[var(--color-primary)] transition-colors">
                  <Phone className="text-[var(--color-primary)] group-hover:text-white transition-colors" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-0.5 text-[var(--color-primary)]">Phone Number</h3>
                  <p className="text-gray-800 text-base group-hover:text-gray-900">+1 812-202-9149<br />Mon-Fri, 10am - 6pm EST</p>
                </div>
              </a>

              <a href="mailto:sales@safaripackaging.com" className="flex items-start gap-4 text-gray-900 hover:opacity-80 transition-opacity group cursor-pointer">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-[var(--color-primary)] group-hover:bg-[var(--color-primary)] transition-colors">
                  <Mail className="text-[var(--color-primary)] group-hover:text-white transition-colors" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-0.5 text-[var(--color-primary)]">Email Address</h3>
                  <p className="text-gray-800 text-base group-hover:text-gray-900">sales@safaripackaging.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
