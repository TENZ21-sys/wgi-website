import React, { useState } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks';
import { RollingButton } from './RollingButton';

interface SolutionEstimatorProps {
  onApplyRecommendation: (packageSummary: string) => void;
}

export const SolutionEstimator: React.FC<SolutionEstimatorProps> = ({ onApplyRecommendation }) => {
  const [assetType, setAssetType] = useState<string>('slope');
  const [objective, setObjective] = useState<string>('combined');
  const [powerEnv, setPowerEnv] = useState<string>('solar');
  const [scale, setScale] = useState<number>(3); // Number of critical monitoring zones

  const headerReveal = useScrollReveal<HTMLDivElement>({ yOffset: 30, blur: 6 });

  // Calculate tailored package
  const calculateRecommendation = () => {
    let gnssBases = 1;
    let gnssRovers = scale;
    let tiltmeters = scale * 2;
    let gatewayModel = 'Worldsensing 4G Rugged Gateway Cloud (GW-4G-CLOUD)';
    let solarPanels = 1;
    let specialAccessories = 'Standard anchor rod mounts & coaxial surge arrestors';

    if (assetType === 'railway') {
      tiltmeters = scale * 4;
      specialAccessories = 'Low-profile disk GNSS antennas (LSG7GNS-SXLH-RAI) & Sleeper mounts (LS-ACC-ANT-RHP) with resin encapsulation';
    } else if (assetType === 'excavation') {
      gnssRovers = Math.max(1, Math.floor(scale / 2));
      tiltmeters = scale * 3;
      specialAccessories = 'Rigid aluminum beams (WS-ACC-1BEAM / 2BEAM) for chained settlement & 30 kg magnetic mounts';
    } else if (assetType === 'dam') {
      gnssRovers = scale + 2;
      tiltmeters = scale * 2;
      specialAccessories = 'Co-located optical prism mounts (LS-ACC-GNSS-RD) on dam crest benchmarks & lightning arrestor kits';
    }

    if (powerEnv === 'battery') {
      solarPanels = 0;
    } else if (scale > 5) {
      solarPanels = 2;
    }

    return {
      gnssBases,
      gnssRovers,
      tiltmeters,
      gatewayModel,
      solarPanels,
      specialAccessories
    };
  };

  const rec = calculateRecommendation();

  const handleApply = () => {
    const summary = `Estimated Package for ${assetType.toUpperCase()}: ${rec.gnssRovers}x GNSS Rovers, ${rec.gnssBases}x Reference Base, ${rec.tiltmeters}x Dual-Axis Tiltmeters, 1x 4G Outdoor Gateway, ${rec.solarPanels}x Solar Kits. Accessories: ${rec.specialAccessories}.`;
    onApplyRecommendation(summary);
  };

  return (
    <div className="animate-tabEntrance min-h-screen bg-transparent text-slate-100 pb-20 selection:bg-sky-500 selection:text-white">
      
      {/* 1. Header with Seamless Background */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-transparent">
        
        {/* Atmospheric Railway & Infrastructure Background */}
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center pointer-events-none mix-blend-luminosity"
          style={{
            backgroundImage: `url('/images/backgrounds/bg-railway-tunnel.jpg')`
          }}
        />

        {/* Ambient Gradient Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-sky-500/15 via-blue-600/10 to-transparent blur-[140px] pointer-events-none" />

        <div ref={headerReveal} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold glass-obsidian text-sky-300 border border-sky-400/30 shadow-lg shadow-sky-500/15 mb-4">
            <Calculator className="w-3.5 h-3.5 text-sky-400" />
            <span>Interactive Requirement Estimator</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.15] max-w-4xl mx-auto">
            Configure Your <br />
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_4px_25px_rgba(56,189,248,0.35)]">
              IoT Monitoring Package
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Answer 3 quick site questions to calculate the verified hardware bundle, antenna variants, and gateway architecture needed for your project.
          </p>
        </div>
      </section>

      {/* 2. Estimator Sizing Wizard */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Form (Left) */}
          <div className="lg:col-span-7 glass-obsidian-card rounded-3xl p-6 sm:p-8 space-y-6">
            
            {/* Question 1: Infrastructure Type */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                1. Select Asset or Infrastructure Type
              </label>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {[
                  { id: 'slope', label: 'Mountain Landslide & Slopes' },
                  { id: 'railway', label: 'Railway Track Corridor & Tunnels' },
                  { id: 'dam', label: 'Hydroelectric Dam Embankment' },
                  { id: 'excavation', label: 'Deep Excavation Shoring Pit' },
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setAssetType(type.id)}
                    className={`p-3.5 rounded-xl text-left border text-xs font-bold transition-all cursor-pointer ${
                      assetType === type.id
                        ? 'border-sky-400/50 bg-sky-950/70 text-sky-300 shadow-md shadow-sky-500/20'
                        : 'border-white/5 bg-slate-900/60 text-slate-300 hover:border-white/15 hover:text-white'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 2: Monitoring Objective */}
            <div className="space-y-3 pt-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                2. Primary Measurement Objective
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                {[
                  { id: 'gnss', label: 'Millimeter 3D Ground Creep' },
                  { id: 'tilt', label: 'Angular Deflection & Tilt' },
                  { id: 'combined', label: 'Combined Surface & Tilt Array' },
                ].map((obj) => (
                  <button
                    key={obj.id}
                    type="button"
                    onClick={() => setObjective(obj.id)}
                    className={`p-3 rounded-xl text-left border text-xs font-semibold transition-all cursor-pointer ${
                      objective === obj.id
                        ? 'border-sky-400/50 bg-sky-950/70 text-sky-300 shadow-md shadow-sky-500/20 font-bold'
                        : 'border-white/5 bg-slate-900/60 text-slate-300 hover:border-white/15 hover:text-white'
                    }`}
                  >
                    {obj.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 3: Power & Telemetry Conditions */}
            <div className="space-y-3 pt-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                3. Gateway Power Environment
              </label>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {[
                  { id: 'solar', label: 'Solar Autonomous (Remote Terrain)' },
                  { id: 'grid', label: 'AC Mains 230V Available On-Site' },
                ].map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPowerEnv(p.id)}
                    className={`p-3 rounded-xl text-left border text-xs font-semibold transition-all cursor-pointer ${
                      powerEnv === p.id
                        ? 'border-sky-400/50 bg-sky-950/70 text-sky-300 shadow-md shadow-sky-500/20 font-bold'
                        : 'border-white/5 bg-slate-900/60 text-slate-300 hover:border-white/15 hover:text-white'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Scale Slider */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Site Scale (Critical Risk Zones)
                </label>
                <span className="text-sm font-black text-sky-400 bg-sky-950/80 px-2.5 py-0.5 rounded-full border border-sky-500/30">
                  {scale} Zones / Cross-sections
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="12"
                value={scale}
                onChange={(e) => setScale(Number(e.target.value))}
                className="w-full accent-sky-500 bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                <span>1 Zone (Local Hazard)</span>
                <span>6 Zones (Corridor / Cut)</span>
                <span>12 Zones (Major Reservoir / Basin)</span>
              </div>
            </div>

          </div>

          {/* Sizing Output Card (Right) */}
          <div className="lg:col-span-5 glass-obsidian-card rounded-3xl p-6 sm:p-8 space-y-6">
            
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                Recommended Architecture
              </span>
              <h3 className="text-2xl font-black text-white mt-1">
                Recommended Equipment Package
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Calculated according to Worldsensing radio budget and Sri Lanka terrain propagation benchmarks.
              </p>
            </div>

            {/* Hardware Bill of Materials */}
            <div className="space-y-2.5 pt-2">
              {objective !== 'tilt' && (
                <>
                  <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/5 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white">Loadsensing G7 GNSS Rovers</p>
                      <p className="text-[10px] text-slate-400">1 mm 3D kinematic movement nodes</p>
                    </div>
                    <span className="text-lg font-black text-sky-400 bg-sky-950/80 px-3 py-1 rounded-xl border border-sky-500/30">
                      {rec.gnssRovers} units
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/5 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white">Stationary GNSS Reference Base</p>
                      <p className="text-[10px] text-slate-400">Stable geodetic differential anchor</p>
                    </div>
                    <span className="text-lg font-black text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-xl border border-cyan-500/30">
                      {rec.gnssBases} base
                    </span>
                  </div>
                </>
              )}

              {objective !== 'gnss' && (
                <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/5 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white">Loadsensing Tilt-90 Wireless Tiltmeters</p>
                    <p className="text-[10px] text-slate-400">0.001° dual-axis high-speed tilt</p>
                  </div>
                  <span className="text-lg font-black text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-xl border border-indigo-500/30">
                    {rec.tiltmeters} units
                  </span>
                </div>
              )}

              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-white">Worldsensing 4G Rugged Outdoor Gateway</p>
                  <p className="text-[10px] text-slate-400">Sub-GHz LoRa receiver with cellular backhaul</p>
                </div>
                <span className="text-lg font-black text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-xl border border-emerald-500/30">
                  1 unit
                </span>
              </div>

              {rec.solarPanels > 0 && (
                <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/5 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white">Industrial Solar Power Assembly</p>
                    <p className="text-[10px] text-slate-400">60W panel with battery buffering</p>
                  </div>
                  <span className="text-lg font-black text-amber-400 bg-amber-950/80 px-3 py-1 rounded-xl border border-amber-500/30">
                    {rec.solarPanels} kit
                  </span>
                </div>
              )}
            </div>

            {/* Special Mounting Note */}
            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/5 space-y-1">
              <p className="text-[11px] font-bold text-sky-400 uppercase tracking-wider">Mounting &amp; Civil Hardware:</p>
              <p className="text-xs text-slate-300 leading-snug">{rec.specialAccessories}</p>
            </div>

            {/* Apply Action Button */}
            <RollingButton
              onClick={handleApply}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-xl shadow-sky-500/25 transition-all duration-300 border border-sky-400/30"
              iconAfter={<ArrowRight className="w-4 h-4 text-white" />}
            >
              Transfer to Enquiry Form
            </RollingButton>
          </div>
        </div>
      </section>
    </div>
  );
};
