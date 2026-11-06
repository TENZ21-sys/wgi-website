import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  Building2,
  ChevronRight,
  Mountain,
  Train,
  Waves,
  Eye,
  Target
} from 'lucide-react';
import type { NavTab } from '../types/monitoring';
import { useScrollReveal, useMagneticHover, useStaggerReveal } from '../hooks';
import { RollingButton } from './RollingButton';

interface HeroProps {
  onNavigateTab: (tab: NavTab) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateTab }) => {
  // Animation hooks
  const headlineRef = useScrollReveal<HTMLDivElement>({ yOffset: 35, blur: 6, duration: 0.9 });
  const subtitleRef = useScrollReveal<HTMLParagraphElement>({ delay: 0.25, yOffset: 25, blur: 4 });
  const ctaRef = useScrollReveal<HTMLDivElement>({ delay: 0.45, yOffset: 20, blur: 3 });
  const metricsRef = useStaggerReveal<HTMLDivElement>({ stagger: 0.12, delay: 0.6, yOffset: 20, blur: 4 });
  const missionRef = useScrollReveal<HTMLDivElement>({ yOffset: 30, blur: 5 });
  const sectorsHeadingRef = useScrollReveal<HTMLDivElement>({ yOffset: 25, blur: 4 });
  const sectorsGridRef = useStaggerReveal<HTMLDivElement>({ stagger: 0.12, yOffset: 25, blur: 4 });
  const deployHeadingRef = useScrollReveal<HTMLDivElement>({ yOffset: 25, blur: 4 });
  const deployGridRef = useStaggerReveal<HTMLDivElement>({ stagger: 0.1, yOffset: 20, blur: 3 });
  const bottomCtaRef = useScrollReveal<HTMLDivElement>({ yOffset: 25, blur: 4 });

  // Physics-based Magnetic Lean on CTAs
  const magneticBtn1 = useMagneticHover<HTMLDivElement>({ strength: 0.35, maxPull: 18, maxTilt: 12 });
  const magneticBtn2 = useMagneticHover<HTMLDivElement>({ strength: 0.35, maxPull: 18, maxTilt: 12 });
  const magneticBtn3 = useMagneticHover<HTMLDivElement>({ strength: 0.35, maxPull: 18, maxTilt: 12 });

  const criticalSectors = [
    {
      title: 'Mountain Landslides',
      region: 'Central Highlands',
      why: 'Heavy monsoon rains weaken steep mountain slopes, threatening hillside roads and communities.',
      solution: 'Wireless satellite sensors detect 1mm ground creep days before collapse, giving early warning to close roads safely.',
      image: '/images/sectors/landslide-field.webp',
      icon: Mountain,
    },
    {
      title: 'Railways & Tunnels',
      region: 'Main Line & Coastal Line',
      why: 'Heavy train traffic and saturated soil cause railway sleepers to tilt, creating derailment hazards.',
      solution: 'Vibration-proof sensors clamped to sleepers track track alignment after every train without stopping schedules.',
      image: '/images/sectors/rail-track-alignment.jpg',
      icon: Train,
    },
    {
      title: 'Hydroelectric Dams',
      region: 'National Water Reservoirs',
      why: 'Dam walls hold millions of tons of water; any foundation tilt or crest settlement must be caught immediately.',
      solution: 'High-precision geodetic sensors provide 24/7 structural health verification directly to national utility control rooms.',
      image: '/images/sectors/dam.avif',
      icon: Waves,
    },
    {
      title: 'Deep City Basements',
      region: 'Colombo Urban Construction',
      why: 'Deep foundation pits can cause surrounding soil to move, risking road cave-ins and cracking neighboring towers.',
      solution: 'Chained sensor beams on shoring walls sound instant alarms if ground movement exceeds safety limits.',
      image: '/images/sectors/deep-excavation.jpg',
      icon: Building2,
    }
  ];

  return (
    <div className="min-h-screen text-slate-100 pb-20 selection:bg-sky-500 selection:text-white">
      
      {/* 1. Full-Screen Hero Section with Clean 3D Space Background */}
      <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-8 md:pt-36 md:pb-12 overflow-hidden">
        
        {/* Subtle Ambient Radial Lighting - Completely Static, Zero Blinking */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_50%_25%,rgba(14,165,233,0.08),transparent)]" />
        </div>

        {/* Ambient Cyber-Zen Gradient Glows */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-sky-500/15 via-blue-600/10 to-transparent blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-cyan-400/10 via-indigo-600/10 to-transparent blur-[150px] rounded-full pointer-events-none" />

        {/* Center Content Stage */}
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto py-8">
          
          {/* Official Partnership Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-obsidian border border-sky-400/30 shadow-lg shadow-sky-500/15 mb-6">
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]"></span>
            <span className="text-xs font-bold text-sky-300">
              Official Worldsensing Industrial Solutions Partner
            </span>
            <span className="text-[11px] font-semibold text-slate-400 border-l border-white/10 pl-2 hidden sm:inline">
              Sri Lanka Engineering Desk
            </span>
          </div>

          {/* Main Headline with Blur-to-Sharp Scroll Reveal */}
          <div ref={headlineRef}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.12] max-w-4xl mx-auto">
              Preventing Disaster <br />
              <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_4px_25px_rgba(56,189,248,0.35)]">
                Before It Strikes
              </span>
            </h1>
          </div>

          {/* Accessible Subtitle */}
          <p ref={subtitleRef} className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            WGI Solutions provides turnkey wireless safety systems that detect subtle ground and structural movements before catastrophic failures occur—protecting Sri Lanka's mountain highways, railway corridors, hydroelectric dams, and deep city excavations.
          </p>

          {/* Action CTAs with Magnetic Physics + Clean Single-Text Hover */}
          <div ref={ctaRef} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <div ref={magneticBtn1} className="w-full sm:w-auto">
              <RollingButton
                onClick={() => onNavigateTab('solutions')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-blue-500 text-white font-extrabold text-xs tracking-wider uppercase shadow-xl shadow-sky-500/30 border border-sky-400/40"
                icon={<Eye className="w-4 h-4 text-sky-200" />}
                iconAfter={<ArrowRight className="w-4 h-4" />}
              >
                See How We Protect Sites
              </RollingButton>
            </div>
            <div ref={magneticBtn2} className="w-full sm:w-auto">
              <RollingButton
                onClick={() => onNavigateTab('about')}
                className="w-full sm:w-auto px-7 py-4 rounded-xl glass-obsidian hover:bg-slate-800/80 text-white font-bold text-xs tracking-wider uppercase border border-white/10 shadow-lg shadow-black/50"
                icon={<Building2 className="w-4 h-4 text-sky-400" />}
              >
                Our Mission &amp; Vision
              </RollingButton>
            </div>
            <div ref={magneticBtn3} className="w-full sm:w-auto">
              <RollingButton
                onClick={() => onNavigateTab('contact')}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-white/10 font-bold text-xs shadow-md"
              >
                Request Site Consultation
              </RollingButton>
            </div>
          </div>

          {/* Metric Highlight Chips with 3D Obsidian Styling */}
          <div ref={metricsRef} className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
            <div className="glass-obsidian-card p-4 rounded-2xl text-center">
              <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">1–2 <span className="text-xs text-sky-400 uppercase font-bold">mm</span></p>
              <p className="text-[11px] font-semibold text-slate-400 mt-1">Ground Movement Detection</p>
            </div>
            <div className="glass-obsidian-card p-4 rounded-2xl text-center">
              <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">15 <span className="text-xs text-cyan-400 uppercase font-bold">km</span></p>
              <p className="text-[11px] font-semibold text-slate-400 mt-1">Wireless Mountain Range</p>
            </div>
            <div className="glass-obsidian-card p-4 rounded-2xl text-center">
              <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">&lt; 2 <span className="text-xs text-emerald-400 uppercase font-bold">sec</span></p>
              <p className="text-[11px] font-semibold text-slate-400 mt-1">Emergency Warning Speed</p>
            </div>
            <div className="glass-obsidian-card p-4 rounded-2xl text-center">
              <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">16+ <span className="text-xs text-teal-300 uppercase font-bold">yrs</span></p>
              <p className="text-[11px] font-semibold text-slate-400 mt-1">Continuous Battery Life</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Live Telemetry Status & Certifications */}
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
          
          <div className="flex items-center gap-2.5 text-xs text-slate-300">
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
            <span className="font-semibold text-slate-400">Live Infrastructure Desk:</span>
            <span className="font-bold text-sky-300 bg-sky-950/70 px-2.5 py-1 rounded-md border border-sky-500/30">
              Autonomous Early-Warning Telemetry Active (Sri Lanka)
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Certified Industrial Hardware Supplied in Sri Lanka</span>
          </div>
        </div>

      </section>

      {/* 2. Corporate Mission & Vision Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 relative z-10">
        <div ref={missionRef} className="glass-obsidian rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-cyber-dots-3d">
          
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/80 text-sky-300 border border-sky-500/30 text-xs font-bold">
              <Target className="w-3.5 h-3.5 text-sky-400" />
              <span>Our Purpose</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Our Mission
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              To empower Sri Lanka's civil authorities and engineering contractors with wireless safety intelligence—detecting subtle micro-movements before structural failure occurs, preserving lives, and protecting national assets.
            </p>
          </div>

          <div className="space-y-3 md:border-l md:border-white/10 md:pl-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 text-indigo-300 border border-indigo-500/30 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Our Horizon</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Our Vision
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              To be South Asia's foremost turnkey geotechnical safety partner, bridging world-leading European sensor engineering with dedicated on-the-ground Sri Lankan civil execution.
            </p>
          </div>

        </div>
      </section>

      {/* 3. The 4 Critical Sectors We Protect */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div ref={sectorsHeadingRef} className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-500/30 text-sky-300 text-xs font-bold mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
            <span>Sri Lanka Infrastructure Focus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Where We Protect Lives &amp; Infrastructure
          </h2>
          <p className="text-slate-400 mt-3 text-base">
            Learn why these 4 sectors are vulnerable in Sri Lanka and how WGI secures each situation.
          </p>
        </div>

        <div ref={sectorsGridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {criticalSectors.map((sector, idx) => {
            const Icon = sector.icon;
            return (
              <div
                key={idx}
                className="group relative glass-obsidian-card rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Real Sector Photo from WGI/images/ */}
                  <div className="h-60 w-full relative overflow-hidden bg-slate-950">
                    <img
                      src={sector.image}
                      alt={sector.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out opacity-85 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-950/80 backdrop-blur-md text-white border border-white/10 shadow-md flex items-center gap-1.5">
                        <Icon className="w-3.5 h-3.5 text-sky-400" />
                        <span>{sector.region}</span>
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-black text-white tracking-tight">
                        {sector.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-1">
                      <p className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">The Danger:</p>
                      <p className="text-xs text-slate-300 leading-relaxed font-medium">
                        {sector.why}
                      </p>
                    </div>

                    <div className="space-y-1 pt-2 border-t border-white/5">
                      <p className="text-[11px] font-bold text-sky-400 uppercase tracking-wider">How WGI Secures It:</p>
                      <p className="text-xs text-slate-300 leading-relaxed font-medium">
                        {sector.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => onNavigateTab('solutions')}
                    className="w-full flex items-center justify-between py-2.5 px-4 rounded-xl bg-white/5 hover:bg-sky-500/15 text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors cursor-pointer border border-white/10 hover:border-sky-400/40"
                  >
                    <span>View Installation Diagram &amp; Case Study</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* 4. WGI Turnkey Field Deployment Workflow */}
      <section className="py-20 bg-transparent relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div ref={deployHeadingRef} className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">Complete Execution Partner</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-1">
              How WGI Deploys On-Site
            </h2>
            <p className="text-slate-400 mt-2 text-base">
              We do not just supply equipment. Our Sri Lankan civil and systems engineers handle the entire deployment from drilling to live alerts.
            </p>
          </div>

          <div ref={deployGridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'On-Site Feasibility Survey',
                desc: 'We visit the mountain slope or railway track, analyze soil movement risks, and test long-range radio signals.'
              },
              {
                step: '02',
                title: 'Civil Anchoring & Brackets',
                desc: 'Our technicians drill rock anchors, clamp sleeper brackets, and install certified fixtures that withstand trains and floods.'
              },
              {
                step: '03',
                title: 'Solar & Wireless Setup',
                desc: 'We erect high-elevation solar-powered gateways that collect data up to 15 km away, requiring zero grid power.'
              },
              {
                step: '04',
                title: '24/7 Early Warning Handover',
                desc: 'We configure safe movement thresholds and deliver live alert notifications directly to your control room screens and phones.'
              }
            ].map((st, i) => (
              <div key={i} className="p-6 rounded-2xl glass-obsidian-card space-y-3">
                <span className="text-2xl font-black text-sky-400">{st.step}</span>
                <h3 className="text-base font-bold text-white">{st.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <RollingButton
              onClick={() => onNavigateTab('services')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-sky-500/25 border border-sky-400/30"
              iconAfter={<ArrowRight className="w-4 h-4 text-white" />}
            >
              Explore Our Full Turnkey Services
            </RollingButton>
          </div>

        </div>
      </section>

      {/* 5. Bottom Action CTA */}
      <section className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={bottomCtaRef} className="glass-obsidian rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl border border-sky-500/30 relative overflow-hidden bg-cyber-hexagons">
          <div className="space-y-3 text-center md:text-left relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
              Ready to Secure Your Site?
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Consult with Our Sri Lanka Engineers
            </h2>
            <p className="text-sm text-slate-300 max-w-xl">
              We provide site feasibility assessments, custom bracket designs, and budgetary quotations tailored to your exact terrain.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0 relative z-10">
            <RollingButton
              onClick={() => onNavigateTab('estimator')}
              className="px-6 py-3.5 rounded-xl glass-obsidian hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md text-center border border-white/10"
            >
              Project Estimator
            </RollingButton>
            <RollingButton
              onClick={() => onNavigateTab('contact')}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-sky-500/30 flex items-center justify-center gap-2 text-center border border-sky-400/30"
              iconAfter={<ArrowRight className="w-4 h-4" />}
            >
              Request Consultation
            </RollingButton>
          </div>
        </div>
      </section>

    </div>
  );
};
