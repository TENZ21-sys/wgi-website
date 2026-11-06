import React from 'react';
import { servicesData } from '../data/servicesData';
import { Compass, PackageCheck, Wrench, Cpu, CheckCircle2, ShieldCheck, ArrowRight, Clock, Award } from 'lucide-react';
import type { NavTab } from '../types/monitoring';
import { useScrollReveal, useStaggerReveal } from '../hooks';
import { RollingButton } from './RollingButton';

interface ServicesSectionProps {
  onNavigateTab?: (tab: NavTab) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onNavigateTab }) => {
  const headerReveal = useScrollReveal<HTMLDivElement>({ yOffset: 30, blur: 6 });
  const deliveryGridReveal = useStaggerReveal<HTMLDivElement>({ stagger: 0.1, yOffset: 25, blur: 4 });
  const slaHeadingReveal = useScrollReveal<HTMLDivElement>({ yOffset: 25, blur: 4 });
  const slaGridReveal = useStaggerReveal<HTMLDivElement>({ stagger: 0.1, yOffset: 20, blur: 3 });

  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-sky-400" />;
      case 'PackageCheck':
        return <PackageCheck className="w-6 h-6 text-cyan-400" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-emerald-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-indigo-400" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-sky-400" />;
    }
  };

  const slaCommitments = [
    {
      icon: Clock,
      title: '48-Hour Emergency Mobilization',
      desc: 'Our Sri Lankan field response team is on standby for sudden landslide creep, track subsidence, or dam anomaly verification.'
    },
    {
      icon: Award,
      title: 'Official Manufacturer Warranty',
      desc: 'Direct partnership support from Worldsensing European engineering desk with local backup units stocked in Colombo.'
    },
    {
      icon: CheckCircle2,
      title: 'Periodic Preventative Calibration',
      desc: 'Annual sensor health inspections, optical prism alignment cross-checks, and battery voltage diagnostics.'
    }
  ];

  return (
    <div className="animate-tabEntrance min-h-screen bg-transparent text-slate-100 pb-20 selection:bg-sky-500 selection:text-white">
      
      {/* 1. Header with Seamless Background */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-transparent">
        
        {/* Engineering Highway & Transport Background */}
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center pointer-events-none mix-blend-luminosity"
          style={{
            backgroundImage: `url('/images/backgrounds/bg-road.jpg')`
          }}
        />

        {/* Ambient Gradient Glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-sky-500/15 via-blue-600/10 to-transparent blur-[140px] pointer-events-none" />

        <div ref={headerReveal} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold glass-obsidian text-sky-300 border border-sky-400/30 shadow-lg shadow-sky-500/15 mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
            <span>End-to-End Service Delivery</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.15] max-w-4xl mx-auto">
            More Than Just An <br />
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_4px_25px_rgba(56,189,248,0.35)]">
              Equipment Reseller
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            WGI stands as your complete technical partner in Sri Lanka. We assess site risks, supply certified hardware, perform professional civil installations, and integrate telemetry directly into your control rooms.
          </p>
        </div>
      </section>

      {/* 2. 4-Step Turnkey Delivery Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={deliveryGridReveal} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((svc) => (
            <div
              key={svc.id}
              className="glass-obsidian-card rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-sky-950/80 border border-sky-400/30 flex items-center justify-center">
                    {getIcon(svc.icon)}
                  </div>
                  <span className="text-2xl font-black text-sky-400/40">
                    {svc.step}
                  </span>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400">
                  Turnkey Engineering
                </span>

                <h3 className="text-xl font-bold text-white mt-1 mb-3">
                  {svc.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {svc.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-white/5">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Engineering Deliverables:
                  </p>
                  <ul className="space-y-1.5">
                    {svc.scopeItems.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Service Level Commitments */}
      <section className="py-20 bg-transparent relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={slaHeadingReveal} className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">Local Guarantees</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
              Sri Lanka Service Level Commitments
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Our engineering office in Sri Lanka ensures your safety-critical telemetry remains operational year-round.
            </p>
          </div>

          <div ref={slaGridReveal} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {slaCommitments.map((sla, idx) => {
              const Icon = sla.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl glass-obsidian-card">
                  <div className="w-10 h-10 rounded-xl bg-sky-950/80 border border-sky-400/30 flex items-center justify-center text-sky-400 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-1">{sla.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{sla.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Action CTA */}
      {onNavigateTab && (
        <section className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-obsidian rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl border border-sky-500/30 bg-cyber-dots-3d">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400">Site Feasibility Study</span>
              <h3 className="text-2xl font-black text-white">Book an On-Site Geotechnical &amp; RF Propagation Survey</h3>
              <p className="text-sm text-slate-300 max-w-xl">
                Our technicians test LoRaWAN coverage across your terrain and draft custom bracket anchoring plans before equipment orders.
              </p>
            </div>
            <RollingButton
              onClick={() => onNavigateTab('contact')}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-sky-500/25 shrink-0 flex items-center gap-2 border border-sky-400/30"
              iconAfter={<ArrowRight className="w-4 h-4 text-white" />}
            >
              Request Site Consultation
            </RollingButton>
          </div>
        </section>
      )}

    </div>
  );
};
