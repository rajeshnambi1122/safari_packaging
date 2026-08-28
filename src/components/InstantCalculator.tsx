'use client';
import React, { useState } from 'react';
import { Calculator, ArrowRight, ShieldCheck, Sparkles, Check } from 'lucide-react';

interface InstantCalculatorProps {
  onOpenQuote: (productName?: string) => void;
}

export const InstantCalculator: React.FC<InstantCalculatorProps> = ({ onOpenQuote }) => {
  const [productType, setProductType] = useState('Custom Pizza Box');
  const [quantity, setQuantity] = useState(5000);
  const [finish, setFinish] = useState('Matte Eco Kraft');

  // Base unit rates per product
  const rates: Record<string, number> = {
    'Custom Eco Cups': 0.18,
    'Custom Pizza Box': 0.42,
    'Takeout Clamshell': 0.28,
    'Bakery & Window Box': 0.35,
    'Paper Shopping Bags': 0.22,
    'Pharma & Mono Cartons': 0.15
  };

  const basePrice = rates[productType] || 0.35;
  
  // Quantity discount multiplier
  let discount = 1.0;
  if (quantity >= 25000) discount = 0.55;
  else if (quantity >= 10000) discount = 0.70;
  else if (quantity >= 5000) discount = 0.82;
  else if (quantity >= 2500) discount = 0.90;

  const unitPrice = (basePrice * discount).toFixed(2);
  const totalPrice = (parseFloat(unitPrice) * quantity).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });

  return (
    <section className="w-full max-w-[1600px] mx-auto px-6 lg:px-8 py-12 md:py-20">
      <div className="bg-gradient-to-br from-[#1C3F24] via-[#15321c] to-[#0d2212] text-white rounded-[32px] md:rounded-[48px] p-8 md:p-14 shadow-2xl relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left info column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400/20 text-amber-300 rounded-full text-xs font-semibold uppercase tracking-wider w-fit border border-amber-400/30">
              <Sparkles size={16} /> Instant B2B Price Estimator
            </div>

            <h2 className="text-3xl md:text-5xl font-serif leading-tight">
              Estimate Your Bulk Packaging Savings
            </h2>

            <p className="text-emerald-100/90 text-lg font-sans leading-relaxed">
              Calculate your volume discount instantly. Higher quantities unlock wholesale factory tiers, free custom dielines, and complimentary express freight.
            </p>

            <div className="flex flex-col gap-3 font-sans pt-2">
              {[
                "100% Recyclable & Food-Safe FSC Certified Boards",
                "Free 3D Digital Proofing & Structural Design",
                "Factory Direct Pricing — No Middleman Markup"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-emerald-100">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <Check size={14} />
                  </div>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Interactive Calculator card */}
          <div className="lg:col-span-7 bg-white text-gray-900 rounded-3xl p-6 md:p-8 shadow-xl font-sans border border-gray-100">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <Calculator className="text-[var(--color-primary)]" size={24} />
                <h3 className="text-xl font-bold font-serif text-[var(--color-primary)]">Quick Estimate Calculator</h3>
              </div>
              <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full">
                Live Factory Rates
              </span>
            </div>

            <div className="space-y-6">
              {/* Product selector */}
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">1. Select Packaging Line</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {Object.keys(rates).map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setProductType(item)}
                      className={`p-3 text-xs font-medium rounded-xl border text-center transition-all ${
                        productType === item
                          ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold shadow-sm'
                          : 'border-gray-200 hover:border-gray-300 text-gray-700 bg-gray-50/50'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase text-gray-500">2. Select Order Quantity</label>
                  <span className="text-base font-bold text-[var(--color-primary)] font-mono">
                    {quantity.toLocaleString()} units
                  </span>
                </div>
                <input 
                  type="range" 
                  min="1000" 
                  max="50000" 
                  step="1000"
                  value={quantity} 
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--color-primary)]"
                />
                <div className="flex justify-between text-[11px] text-gray-400 font-mono mt-1">
                  <span>1,000 (MOQ)</span>
                  <span>10,000</span>
                  <span>25,000</span>
                  <span>50,000+</span>
                </div>
              </div>

              {/* Material Finish */}
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">3. Finish Coating</label>
                <div className="flex flex-wrap gap-2">
                  {['Matte Eco Kraft', 'Gloss Varnish', 'Embossed Foil', 'Uncoated Board'].map((f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setFinish(f)}
                      className={`px-3 py-2 text-xs font-medium rounded-lg border transition-all ${
                        finish === f
                          ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white font-semibold'
                          : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              {/* Estimated Price summary box */}
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-5 border border-emerald-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-emerald-800 font-medium uppercase tracking-wider">Estimated Price / Unit</div>
                  <div className="text-3xl font-bold font-mono text-[var(--color-primary)]">
                    ${unitPrice} <span className="text-sm font-normal text-gray-500">/ unit</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Est. Total: <span className="font-bold text-gray-800 font-mono">${totalPrice} USD</span></div>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenQuote(`${productType} (${quantity.toLocaleString()} units, ${finish})`)}
                  className="w-full sm:w-auto px-6 py-4 bg-[var(--color-primary)] text-white font-bold rounded-xl hover:bg-emerald-900 transition-all shadow-md flex items-center justify-center gap-2 group shrink-0"
                >
                  <span>Lock In This Rate</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-gray-400 text-center">
                <ShieldCheck size={14} className="text-emerald-600" />
                <span>No payment required now. Custom dielines & volume discount quote delivered in 2h.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
