import React, { useState } from 'react';
import { productsData } from '../data/productsData';
import type { ProductCategory, ProductData, NavTab } from '../types/monitoring';
import { ProductDetailModal } from './ProductDetailModal';
import { Check, Info, ArrowUpRight, Radio, Cpu, Calculator, ArrowRight, ShieldCheck } from 'lucide-react';
import { useScrollReveal, useStaggerReveal } from '../hooks';
import { RollingButton } from './RollingButton';

interface ProductCatalogProps {
  onSelectForEnquiry: (productName: string) => void;
  onNavigateTab?: (tab: NavTab) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onSelectForEnquiry, onNavigateTab }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [activeModalProduct, setActiveModalProduct] = useState<ProductData | null>(null);

  const headerReveal = useScrollReveal<HTMLDivElement>({ yOffset: 30, blur: 6 });
  const productsGridReveal = useStaggerReveal<HTMLDivElement>({ stagger: 0.12, yOffset: 25, blur: 4 });
  const accHeadingReveal = useScrollReveal<HTMLDivElement>({ yOffset: 25, blur: 4 });
  const accGridReveal = useStaggerReveal<HTMLDivElement>({ stagger: 0.08, yOffset: 20, blur: 3 });

  // Maintain selected variant per product
  const [activeVariants, setActiveVariants] = useState<Record<string, number>>({
    'gnss-meter': 0,
    '4g-gateway': 0,
    'g7-tiltmeter': 0,
  });

  const categories: { id: ProductCategory; label: string }[] = [
    { id: 'all', label: 'All Equipment' },
    { id: 'geotechnical', label: 'Geotechnical & Slopes' },
    { id: 'railway', label: 'Railway Tracks' },
    { id: 'structural', label: 'Structural & Dams' },
    { id: 'telemetry', label: 'Telemetry & Gateways' },
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? productsData
      : productsData.filter((p) => p.category.includes(selectedCategory));

  const mountingAccessories = [
    {
      title: 'Railway Sleeper Clamping Bracket',
      code: 'LS-ACC-ANT-RHP',
      image: '/images/gnss-sleeper-bracket.jpg',
      description: 'Heavy-duty steel bracket engineered for rigid mounting on concrete/timber railway sleepers under dynamic rail deflection.'
    },
    {
      title: 'GNSS Pole & Abutment Mount',
      code: 'LS-ACC-GNSS-RD',
      image: '/images/gnss-standard.jpg',
      description: 'High-stability stainless mounting pole with co-located optical prism adapter for geotechnical benchmarks and dam crests.'
    },
    {
      title: 'Horizontal & Vertical Tilt Bracket',
      code: 'LS-ACC-TILT-BRK',
      image: '/images/g7-tiltmeter.jpg',
      description: 'Anodized aluminum dual-axis leveling fixture with fine-pitch bubble level for tunnel crowns, retaining walls, and bridge piers.'
    },
    {
      title: 'Chained Settlement Beam Kit',
      code: 'WS-ACC-2BEAM',
      image: '/images/sectors/deep-excavation.jpg',
      description: 'Lightweight 2-meter anodized aluminum beam with articulated joints for differential settlement and track twist detection.'
    },
    {
      title: 'High-Elevation Solar Gateway Mast',
      code: 'GW-ACC-SOLAR-MST',
      image: '/images/gateway-standard.jpg',
      description: 'Galvanized 3-meter mast with solar panel mount, grounding kit, and lightning surge arrestor for mountain ridge telemetry.'
    },
    {
      title: 'External Sub-GHz Tuned Antenna',
      code: 'ANT-868-HEAVY',
      image: '/images/gateway-solar.jpg',
      description: 'Ruggedized fiberglass omnidirectional 868 MHz antenna delivering up to 15 km radio range in tropical terrain.'
    }
  ];

  return (
    <div className="animate-tabEntrance min-h-screen bg-transparent text-slate-100 pb-20 selection:bg-sky-500 selection:text-white">
      
      {/* 1. Header with Seamless Background */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-transparent">
        
        {/* Atmospheric Laboratory / Sensor Engineering Background */}
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center pointer-events-none mix-blend-luminosity"
          style={{
            backgroundImage: `url('/images/backgrounds/bg-tunnel.jpg')`
          }}
        />

        {/* Ambient Gradient Glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-sky-500/15 via-blue-600/10 to-transparent blur-[140px] pointer-events-none" />

        <div ref={headerReveal} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold glass-obsidian text-sky-300 border border-sky-400/30 shadow-lg shadow-sky-500/15 mb-4">
            <Cpu className="w-3.5 h-3.5 text-sky-400" />
            <span>High-Precision IoT Hardware • Sri Lanka</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.15] max-w-4xl mx-auto">
            Certified Monitoring Sensors &amp; <br />
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_4px_25px_rgba(56,189,248,0.35)]">
              Wireless Telemetry Hubs
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Proven European-engineered sensors built for Sri Lanka's tropical climate. Zero maintenance, long battery life, and complete installation kits for immediate deployment.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl glass-obsidian border border-white/10 shadow-lg max-w-3xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 sm:py-2.5 rounded-xl text-xs font-bold min-h-[38px] transition-all focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/30 scale-[1.02]'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* 2. Product Cards Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={productsGridReveal} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const currentVariantIdx = activeVariants[product.id] || 0;
            const currentVariant = product.variants[currentVariantIdx] || product.variants[0];
            const currentImg = currentVariant.image || product.image;

            return (
              <div
                key={product.id}
                data-product-card="true"
                className="flex flex-col justify-between glass-obsidian-card rounded-3xl p-6 sm:p-7 transition-all duration-300 group"
              >
                <div className="space-y-5">
                  {/* Top Bar: Code & LoRa Badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono tracking-wider text-sky-300 bg-sky-950/80 px-2.5 py-1 rounded-md border border-sky-500/30 uppercase font-bold">
                      {currentVariant.code}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-slate-300 font-semibold bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                      <Radio className="w-3.5 h-3.5 text-sky-400" />
                      <span>Long-Range Wireless</span>
                    </div>
                  </div>

                  {/* Product Title & Plain-English Tagline */}
                  <div>
                    <h3 className="text-xl font-black text-white tracking-tight group-hover:text-sky-300 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs font-bold text-sky-400 mt-1">
                      {product.tagline}
                    </p>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      {product.shortDescription}
                    </p>
                  </div>

                  {/* In-Card Variant Switcher */}
                  {product.variants.length > 1 && (
                    <div className="pt-2">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Hardware Variant:
                      </p>
                      <div className="grid grid-cols-2 gap-1.5 p-1 bg-slate-950/80 rounded-xl border border-white/10">
                        {product.variants.map((v, vIdx) => (
                          <button
                            key={v.code}
                            onClick={() =>
                              setActiveVariants((prev) => ({ ...prev, [product.id]: vIdx }))
                            }
                            className={`px-2 py-1.5 rounded-lg text-[11px] font-semibold transition-all cursor-pointer truncate ${
                              currentVariantIdx === vIdx
                                ? 'bg-sky-500 text-white shadow-sm font-bold'
                                : 'text-slate-400 hover:text-white'
                            }`}
                            title={v.name}
                          >
                            {v.name.replace(product.name, '').trim() || v.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Clean Product Visual */}
                  <div className="h-56 bg-slate-950/90 rounded-2xl p-4 flex items-center justify-center border border-white/10 relative overflow-hidden group-hover:border-sky-500/30 transition-all">
                    <img
                      src={currentImg}
                      alt={product.imageAlt}
                      className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-2 pt-2">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Why Engineers Rely on This:
                    </p>
                    <ul className="space-y-2">
                      {product.highlights.slice(0, 3).map((hl, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-6 border-t border-white/10 mt-6 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setActiveModalProduct(product)}
                    className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-bold text-slate-200 hover:text-white transition-all cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5 text-sky-400" />
                    <span>Datasheet</span>
                  </button>

                  <button
                    onClick={() => onSelectForEnquiry(product.name)}
                    className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-xs font-bold text-white transition-all shadow-md shadow-sky-500/20 cursor-pointer"
                  >
                    <span>Enquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Turnkey Mounting & Anchoring Accessories Gallery */}
      <section className="py-20 bg-transparent relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div ref={accHeadingReveal} className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-obsidian text-slate-300 text-xs font-bold mb-3 border border-white/10">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              <span>Certified Civil Fixtures</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Mounting Brackets &amp; Structural Hardware
            </h2>
            <p className="text-slate-400 mt-3 text-base">
              Sensor precision is only as good as physical anchoring. We supply certified civil brackets designed for high-vibration railway tracks, rock slopes, and dam crests.
            </p>
          </div>

          <div ref={accGridReveal} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mountingAccessories.map((acc, idx) => (
              <div 
                key={idx}
                className="glass-obsidian-card rounded-2xl p-5 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-44 bg-slate-950/90 rounded-xl p-3 flex items-center justify-center border border-white/10 mb-4 overflow-hidden">
                    <img 
                      src={acc.image} 
                      alt={acc.title}
                      className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300" 
                    />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-sky-300 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-500/30">
                    {acc.code}
                  </span>
                  <h3 className="text-base font-bold text-white mt-2 mb-1.5">
                    {acc.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {acc.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Bottom Estimator Link Banner */}
      {onNavigateTab && (
        <section className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-obsidian rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl border border-sky-500/30 bg-cyber-hexagons">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400">Project Sizing Assistant</span>
              <h3 className="text-2xl font-black text-white">Need to estimate hardware quantities for your project?</h3>
              <p className="text-sm text-slate-300 max-w-xl">
                Use our interactive IoT wizard to calculate the exact numbers of GNSS Rovers, Reference Bases, Tiltmeters, and 4G Gateways needed for your site.
              </p>
            </div>
            <RollingButton
              onClick={() => onNavigateTab('estimator')}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-sky-500/25 shrink-0 flex items-center gap-2 border border-sky-400/30"
              icon={<Calculator className="w-4 h-4 text-white" />}
              iconAfter={<ArrowRight className="w-4 h-4" />}
            >
              Launch Estimator Wizard
            </RollingButton>
          </div>
        </section>
      )}

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
        onSelectForEnquiry={onSelectForEnquiry}
      />

    </div>
  );
};
