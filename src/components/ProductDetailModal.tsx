import React, { useEffect, useState } from 'react';
import { X, CheckCircle, Wrench, Shield, Layers, Radio, ArrowRight } from 'lucide-react';
import type { ProductData } from '../types/monitoring';

interface ProductDetailModalProps {
  product: ProductData | null;
  onClose: () => void;
  onSelectForEnquiry: (productName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onSelectForEnquiry,
}) => {
  const [selectedVariantIdx, setSelectedVariantIdx] = useState<number>(0);
  const [prevProduct, setPrevProduct] = useState(product);

  // Reset variant selection cleanly during render if product prop changes
  if (product !== prevProduct) {
    setPrevProduct(product);
    setSelectedVariantIdx(0);
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const activeVariant = product.variants[selectedVariantIdx] || product.variants[0];
  const activeImg = activeVariant.image || product.image;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] glass-obsidian border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header with Product Visual */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 sm:p-6 border-b border-white/10 bg-slate-950/80">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-white/10 p-2 flex items-center justify-center shrink-0 shadow-sm">
              <img
                src={activeImg}
                alt={product.name}
                className="max-h-full max-w-full object-contain drop-shadow"
              />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-sky-950/80 text-sky-300 border border-sky-500/30 uppercase tracking-wider">
                  Official Datasheet Reference
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-white/10 text-slate-300">
                  WGI Certified Supply
                </span>
              </div>
              <h2 id="modal-title" className="text-xl sm:text-2xl font-black text-white tracking-tight">
                {product.name}
              </h2>
              <p className="text-xs text-sky-400 font-bold mt-0.5">{product.tagline}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="self-end sm:self-center p-2.5 text-slate-400 hover:text-white rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-8 divide-y divide-white/5 text-slate-300 text-sm">
          
          {/* Operating Principle */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-sky-400" />
              Operating Principle &amp; How It Works
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed bg-slate-900/80 p-4 rounded-2xl border border-white/5">
              {product.operatingPrinciple}
            </p>
          </div>

          {/* Product Hardware Variants Selector */}
          <div className="pt-6 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Radio className="w-4 h-4 text-sky-400" />
              Verified Hardware Variants
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.variants.map((v, vIdx) => (
                <div
                  key={v.code}
                  onClick={() => setSelectedVariantIdx(vIdx)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer space-y-2.5 ${
                    selectedVariantIdx === vIdx
                      ? 'bg-sky-950/60 border-sky-400/50 shadow-lg shadow-sky-500/20'
                      : 'bg-slate-900/60 border-white/5 hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm">{v.name}</span>
                    <span className="text-[11px] font-mono font-bold text-sky-300 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-500/30">
                      {v.code}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">{v.description}</p>
                  <ul className="text-xs space-y-1.5 pt-1">
                    {v.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-1.5 text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Specifications Tables */}
          <div className="pt-6 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-400" />
              Verified Manufacturer Specifications
            </h3>
            <div className="space-y-4">
              {product.verifiedSpecs.map((specGroup, idx) => (
                <div key={idx} className="border border-white/5 rounded-2xl overflow-hidden bg-slate-900/60 shadow-sm">
                  <div className="px-4 py-2.5 bg-slate-950/90 border-b border-white/5 font-bold text-xs text-slate-300 uppercase tracking-wider">
                    {specGroup.category}
                  </div>
                  <div className="divide-y divide-white/5">
                    {specGroup.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="grid grid-cols-1 sm:grid-cols-3 px-4 py-2.5 text-xs hover:bg-white/5 transition-colors">
                        <span className="font-semibold text-slate-400">{item.label}</span>
                        <span className="sm:col-span-2 text-white font-mono font-medium mt-0.5 sm:mt-0">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Turnkey Field Engineering Support by WGI */}
          <div className="pt-6 space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Wrench className="w-4 h-4 text-sky-400" />
              WGI Field Engineering Execution in Sri Lanka
            </h3>
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/5 space-y-2">
              <p className="text-xs leading-relaxed text-slate-300">
                WGI Solutions engineers are trained and certified to install this hardware in compliance with Sri Lanka’s national safety directives. Turnkey installation packages include:
              </p>
              <ul className="text-xs space-y-1.5 pt-1 text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>On-site sub-GHz LoRa radio propagation verification</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Rock anchoring, sleeper clamping, and seismic calibration</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Direct telemetry integration into client control rooms</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Full local warranty, replacement stock in Colombo, and 24/7 technical hotline</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 sm:p-6 border-t border-white/10 bg-slate-950/80">
          <span className="text-xs text-slate-400 font-semibold text-center sm:text-left">
            In stock in Sri Lanka • Turnkey deployment ready
          </span>
          <div className="flex gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-white/10 text-xs font-bold text-slate-300 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onSelectForEnquiry(`${product.name} (${activeVariant.name})`);
                onClose();
              }}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-xs font-bold text-white shadow-lg shadow-sky-500/25 transition-all cursor-pointer border border-sky-400/30"
            >
              <span>Enquire for This Model</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
