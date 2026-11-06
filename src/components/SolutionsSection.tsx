import React, { useState } from 'react';
import { solutionsData } from '../data/solutionsData';
import { Mountain, Train, Waves, Building2, CheckCircle2, ArrowRight, MapPin, Wrench, ShieldAlert, Image as ImageIcon } from 'lucide-react';
import { useScrollReveal, useStaggerReveal } from '../hooks';
import { RollingButton } from './RollingButton';

interface SolutionsSectionProps {
  onSelectSolution: (solutionTitle: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onSelectSolution }) => {
  const [activeSolutionId, setActiveSolutionId] = useState<string>(solutionsData[0].id);
  const [viewType, setViewType] = useState<'illustration' | 'photo'>('illustration');

  const headerReveal = useScrollReveal<HTMLDivElement>({ yOffset: 30, blur: 6 });
  const tabsReveal = useStaggerReveal<HTMLDivElement>({ stagger: 0.08, yOffset: 20, blur: 4 });

  const activeSolution = solutionsData.find((s) => s.id === activeSolutionId) || solutionsData[0];

  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Mountain':
        return <Mountain className="w-5 h-5 text-sky-400" />;
      case 'Train':
        return <Train className="w-5 h-5 text-cyan-400" />;
      case 'Waves':
        return <Waves className="w-5 h-5 text-teal-400" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-indigo-400" />;
      default:
        return <Mountain className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <div className="animate-tabEntrance min-h-screen bg-transparent text-slate-100 pb-20 selection:bg-sky-500 selection:text-white">
      
      {/* 1. Solutions Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-transparent">
        
        {/* Mountain Background Scrim */}
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center pointer-events-none mix-blend-luminosity"
          style={{
            backgroundImage: `url('/images/backgrounds/bg-highland.jpg')`
          }}
        />

        {/* Ambient Gradient Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-sky-500/15 via-blue-600/10 to-transparent blur-[140px] pointer-events-none" />

        <div ref={headerReveal} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold glass-obsidian text-sky-300 border border-sky-400/30 shadow-lg shadow-sky-500/15 mb-4">
            <MapPin className="w-3.5 h-3.5 text-sky-400" />
            <span>Sri Lanka Infrastructure Protection</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.15] max-w-4xl mx-auto">
            Securing Sri Lanka’s <br />
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_4px_25px_rgba(56,189,248,0.35)]">
              Most Critical Infrastructure
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From mountain highway landslides to railway tracks, hydroelectric dams, and deep city basements, discover why these sectors are vulnerable and how WGI provides 24/7 protection.
          </p>
        </div>
      </section>

      {/* 2. Interactive Sector Selector */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div ref={tabsReveal} className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 mb-10">
          {solutionsData.map((sol) => (
            <button
              key={sol.id}
              onClick={() => {
                setActiveSolutionId(sol.id);
                setViewType('illustration');
              }}
              className={`p-5 rounded-2xl text-left border transition-all duration-300 flex flex-col justify-between gap-3 focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer ${
                activeSolutionId === sol.id
                  ? 'glass-obsidian border-sky-400/50 shadow-xl shadow-sky-500/20 scale-[1.02]'
                  : 'bg-slate-900/60 border-white/5 hover:border-white/15 text-slate-300 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <div className={`p-2 rounded-xl ${activeSolutionId === sol.id ? 'bg-sky-500/20 text-sky-300 border border-sky-400/30' : 'bg-white/5 text-slate-400'}`}>
                  {getIcon(sol.icon)}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  {sol.sriLankaContext.split('(')[0].trim()}
                </span>
              </div>
              <div>
                <h3 className={`text-base font-bold ${activeSolutionId === sol.id ? 'text-white' : 'text-slate-200'}`}>
                  {sol.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                  {sol.sriLankaContext}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Sector Deep-Dive Card */}
        <div className="glass-obsidian-card rounded-3xl p-6 sm:p-10 transition-all duration-500">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Sector Narrative & Engineering Breakdown */}
            <div className="lg:col-span-6 space-y-6">
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-950/80 text-sky-300 border border-sky-500/30">
                    {activeSolution.sriLankaContext}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    Verified Deployment
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  {activeSolution.title}
                </h2>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  {activeSolution.whyItMatters}
                </p>
              </div>

              {/* View Switcher: Diagram vs Real Photo */}
              <div className="flex items-center gap-2 p-1.5 rounded-2xl glass-obsidian border border-white/10 w-fit">
                <button
                  onClick={() => setViewType('illustration')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    viewType === 'illustration'
                      ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md shadow-sky-500/25'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Wrench className="w-3.5 h-3.5" />
                  <span>Installation Diagram</span>
                </button>
                <button
                  onClick={() => setViewType('photo')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    viewType === 'photo'
                      ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md shadow-sky-500/25'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>Real Site Photo</span>
                </button>
              </div>

              {/* The Danger in Sri Lanka */}
              <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/30 space-y-1">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                  <ShieldAlert className="w-4 h-4" />
                  <span>The Critical Risk:</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  {activeSolution.problem}
                </p>
              </div>

              {/* How WGI Solves It */}
              <div className="p-4 rounded-2xl bg-sky-950/30 border border-sky-500/30 space-y-1">
                <div className="flex items-center gap-2 text-sky-400 font-bold text-xs uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>How WGI Secures the Situation:</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  {activeSolution.howWgiSecures}
                </p>
              </div>

              {/* Step-by-Step Installation Process */}
              <div className="space-y-3 pt-2">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Turnkey Installation Steps:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(activeSolution.installationSteps || []).map((step, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
                      <span className="text-[11px] font-mono font-bold text-sky-400">Step {step.step}</span>
                      <h4 className="text-xs font-bold text-white">{step.title}</h4>
                      <p className="text-[11px] text-slate-400 leading-snug">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Protection Benefits */}
              <div className="space-y-2 pt-2">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Verified Operational Value:</p>
                <ul className="space-y-2">
                  {activeSolution.keyBenefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <RollingButton
                  onClick={() => onSelectSolution(activeSolution.title)}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 transition-all shadow-lg shadow-sky-500/25 border border-sky-400/30"
                  iconAfter={<ArrowRight className="w-4 h-4 text-white" />}
                >
                  Request Consultation for this Sector
                </RollingButton>
              </div>

            </div>

            {/* Right Column: Dynamic Visual Stage */}
            <div className="lg:col-span-6 space-y-4">
              
              <div className="rounded-3xl overflow-hidden border border-white/10 bg-slate-950 p-2 shadow-2xl">
                
                {viewType === 'illustration' ? (
                  /* Visualized Installation Illustration SVG */
                  <div className="relative rounded-2xl overflow-hidden bg-slate-900/90 border border-white/5 p-2 group">
                    <img
                      src={activeSolution.illustrationImage || '/images/illustrations/install-landslide.svg'}
                      alt={`${activeSolution.title} Installation Diagram`}
                      className="w-full h-auto max-h-[380px] object-contain mx-auto transition-transform duration-500 group-hover:scale-[1.01]"
                    />
                    <div className="mt-2 py-2 px-3 bg-slate-950/80 rounded-xl border border-white/10 text-center">
                      <p className="text-[11px] font-semibold text-slate-300">
                        Technical Installation Diagram: Showing sensor mounting, wireless transmission, and early warning
                      </p>
                    </div>
                  </div>
                ) : (
                  /* Real Field Site Photo from WGI/images/ */
                  <div className="relative rounded-2xl overflow-hidden bg-slate-900/90 border border-white/5 p-2 group">
                    <div className="h-[340px] w-full overflow-hidden rounded-xl bg-slate-950 flex items-center justify-center">
                      <img
                        src={activeSolution.realPhotoImage || '/images/sectors/landslide-field.webp'}
                        alt={activeSolution.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-2 py-2 px-3 bg-slate-950/80 rounded-xl border border-white/10 text-center">
                      <p className="text-[11px] font-semibold text-slate-300">
                        {activeSolution.realPhotoCaption || 'Sri Lankan site context requiring automated monitoring'}
                      </p>
                    </div>
                  </div>
                )}

              </div>

              {/* Turnkey Deployment Footprint Card */}
              <div className="p-5 rounded-2xl glass-obsidian border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-sky-400">
                  <MapPin className="w-4 h-4" />
                  <span>Sri Lanka Turnkey Service Included</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  WGI Solutions supplies custom rock brackets, precision sensor calibrators, and solar gateways. Our local crew provides drilling, line safety certification, and full SCADA control room integration.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};
