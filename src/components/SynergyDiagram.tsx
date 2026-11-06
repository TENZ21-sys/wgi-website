import React, { useState } from 'react';
import { Satellite, Radio, Cloud, ArrowRight, Zap, Eye, Image as ImageIcon } from 'lucide-react';
import { RollingButton } from './RollingButton';

export const SynergyDiagram: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [viewMode, setViewMode] = useState<'interactive' | 'schematic'>('interactive');

  const steps = [
    {
      num: 1,
      title: 'Satellite Constellation to Ground Reference',
      short: 'GNSS Satellite Link',
      desc: 'GPS, GLONASS, Galileo, and BeiDou satellites transmit multi-frequency signals across 184 channels to both the GNSS Base Station on stable bedrock and GNSS Rovers on moving assets.'
    },
    {
      num: 2,
      title: 'Local Sub-GHz LoRa RTK Differential Broadcast',
      short: 'Base-to-Rover LoRa (5 km)',
      desc: 'The GNSS Base computes real-time atmospheric corrections and broadcasts them directly over license-free sub-GHz LoRa radio to rovers up to 5 km away—without needing cellular or internet on-site.'
    },
    {
      num: 3,
      title: 'Dual Sensor Synergy: Tilt + Millimeter Translation',
      short: 'Field Edge Sensing',
      desc: 'G7 Tiltmeters capture micro-radian rotation (0.0001°) and instant shocks (< 2 sec in EDM mode), while GNSS Rovers calculate absolute 3D geodetic vectors (1–2 mm), resolving both sliding and tilting.'
    },
    {
      num: 4,
      title: 'Centralized 4G Rugged Gateway Aggregation',
      short: 'Long-Range Backhaul (15 km)',
      desc: 'A single 4G Rugged Gateway collects data from hundreds of mixed sensors up to 15 km away, operating completely offline via embedded CMT Edge or relaying via worldwide 4G LTE to CMT Cloud.'
    },
    {
      num: 5,
      title: 'Turnkey Integration with Third-Party SCADA & Alerts',
      short: 'Enterprise Data Delivery',
      desc: 'Data automatically flows via REST APIs and MQTT brokers into Bentley iTwin, Trimble 4D Control, Vista Data Vision, or client SCADA, triggering emergency WhatsApp/SMS alerts when thresholds are breached.'
    }
  ];

  return (
    <section id="architecture" className="py-24 bg-transparent text-slate-100 relative overflow-hidden">
      
      {/* Ambient Gradient Glows */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[500px] bg-gradient-to-br from-sky-500/15 via-blue-600/10 to-transparent blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[400px] bg-gradient-to-tl from-cyan-400/10 via-indigo-600/10 to-transparent blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold glass-obsidian text-sky-300 border border-sky-400/30 shadow-lg shadow-sky-500/15 uppercase tracking-wider">
            <Radio className="w-3.5 h-3.5 text-sky-400" />
            End-to-End System Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            How The Equipment Works Together
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            By unifying multi-band GNSS geodetics, 3-axis micro-tilt, and long-range LoRa telemetry, WGI eliminates single-point measurement blindspots across complex civil assets.
          </p>

          {/* View Mode Toggle Switch */}
          <div className="inline-flex items-center p-1.5 rounded-2xl glass-obsidian border border-white/10 shadow-inner">
            <button
              type="button"
              onClick={() => setViewMode('interactive')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'interactive'
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/30 scale-[1.02]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Interactive Architecture Flow</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('schematic')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'schematic'
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/30 scale-[1.02]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Official Manufacturer Schematic</span>
            </button>
          </div>
        </div>

        {viewMode === 'schematic' ? (
          /* Official Schematic Diagram View */
          <div className="glass-obsidian-card rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
                  Figure 1: Official Worldsensing Architecture
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  Loadsensing GNSS Base, Rover &amp; LoRa Gateway Topology
                </h3>
              </div>
              <span className="text-xs bg-slate-900/90 px-3 py-1 rounded-full border border-white/10 text-slate-300 font-semibold hidden sm:inline shadow-sm">
                From Datasheet_GNSSMeter_EN.pdf
              </span>
            </div>
            
            <div className="rounded-2xl overflow-hidden bg-slate-950 p-4 flex items-center justify-center border border-white/10 shadow-inner">
              <img
                src="/images/gnss-architecture-diagram.png"
                alt="Worldsensing GNSS and Gateway Topology Diagram"
                className="max-h-[500px] w-auto object-contain brightness-95 contrast-105"
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-300 bg-slate-900/80 p-4 rounded-2xl border border-white/10 leading-relaxed shadow-sm">
              <strong className="text-white">Official Operation:</strong> Rovers collect multi-band satellite data and receive differential RTK corrections from the stationary GNSS Base station via sub-GHz LoRa radio. Field nodes transmit calculated 3D coordinates, tilt, and health statistics to the 4G Gateway. The entire network can be remotely supervised and configured through CMT Edge or CMT Cloud.
            </p>
          </div>
        ) : (
          /* Interactive Stage Walkthrough View */
          <>
            {/* Step Selector Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              {steps.map((s) => (
                <button
                  key={s.num}
                  onClick={() => setActiveStep(s.num)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer ${
                    activeStep === s.num
                      ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/30 scale-105 border border-sky-400/40'
                      : 'glass-obsidian text-slate-300 hover:text-white border border-white/10 hover:border-white/20'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    activeStep === s.num ? 'bg-white text-blue-600 font-black' : 'bg-slate-800 text-slate-300'
                  }`}>
                    {s.num}
                  </span>
                  <span>{s.short}</span>
                </button>
              ))}
            </div>

            {/* Interactive Architecture Stage Card */}
            <div className="glass-obsidian-card rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden bg-cyber-hexagons">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Visual Flow Diagram */}
                <div className="lg:col-span-7 glass-obsidian border border-white/10 rounded-2xl p-6 relative shadow-lg">
                  <div className="space-y-6">
                    
                    {/* Stage 1: Space & Satellites */}
                    <div className={`p-4 rounded-2xl border transition-all ${
                      activeStep === 1
                        ? 'bg-sky-950/70 border-sky-400/60 shadow-lg shadow-sky-500/20'
                        : 'bg-slate-900/60 border-white/5'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 rounded-xl bg-sky-950 text-sky-400 border border-sky-500/30">
                            <Satellite className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-white">Multi-Constellation GNSS</p>
                            <p className="text-[11px] text-slate-400">GPS • GLONASS • Galileo • BeiDou</p>
                          </div>
                        </div>
                        <span className="text-[11px] font-mono font-bold text-sky-300 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-500/30">
                          184 Channels
                        </span>
                      </div>
                    </div>

                    {/* Direct Arrow */}
                    <div className="flex justify-around text-slate-500 font-semibold">
                      <span className="text-[11px] font-mono text-sky-400/60">↓ L-band Signals</span>
                      <span className="text-[11px] font-mono text-sky-400/60">↓ L-band Signals</span>
                    </div>

                    {/* Stage 2 & 3: Base, Rovers, Tiltmeters with Real Photos */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* GNSS Base */}
                      <div className={`p-4 rounded-2xl border transition-all flex items-center gap-3 ${
                        activeStep === 2
                          ? 'bg-sky-950/70 border-sky-400/60 shadow-lg shadow-sky-500/20'
                          : 'bg-slate-900/60 border-white/5'
                      }`}>
                        <div className="w-12 h-12 rounded-xl bg-slate-950 p-1 border border-white/10 shrink-0 flex items-center justify-center shadow-sm">
                          <img src="/images/gnss-standard.jpg" alt="GNSS Base" className="max-h-full max-w-full object-contain" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs font-bold text-white">GNSS Meter Base</p>
                          <p className="text-[10px] text-sky-400 font-mono font-bold">LoRa RTK Link (&lt; 5 km)</p>
                        </div>
                      </div>

                      {/* Field Edge Sensors */}
                      <div className={`p-4 rounded-2xl border transition-all flex items-center gap-3 ${
                        activeStep === 3
                          ? 'bg-emerald-950/70 border-emerald-400/60 shadow-lg shadow-emerald-500/20'
                          : 'bg-slate-900/60 border-white/5'
                      }`}>
                        <div className="w-12 h-12 rounded-xl bg-slate-950 p-1 border border-white/10 shrink-0 flex items-center justify-center shadow-sm">
                          <img src="/images/tiltmeter-xhp.jpg" alt="Tiltmeter" className="max-h-full max-w-full object-contain" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs font-bold text-white">GNSS Rovers + Tilt</p>
                          <p className="text-[10px] text-emerald-400 font-mono font-bold">1 mm 3D &amp; 0.0001° Tilt</p>
                        </div>
                      </div>
                    </div>

                    {/* Direct Arrow */}
                    <div className="flex justify-center text-slate-500 font-semibold">
                      <span className="text-[11px] font-mono text-sky-400/60">↓ Sub-GHz Long Range LoRa (Up to 15 km)</span>
                    </div>

                    {/* Stage 4: 4G Rugged Gateway */}
                    <div className={`p-4 rounded-2xl border transition-all flex items-center justify-between ${
                      activeStep === 4
                        ? 'bg-amber-950/70 border-amber-400/60 shadow-lg shadow-amber-500/20'
                        : 'bg-slate-900/60 border-white/5'
                    }`}>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-slate-950 p-1 border border-white/10 shrink-0 flex items-center justify-center shadow-sm">
                          <img src="/images/gateway-cloud.png" alt="4G Gateway" className="max-h-full max-w-full object-contain" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">Worldsensing 4G Rugged Gateway</p>
                          <p className="text-[11px] text-slate-400">Embedded CMT Edge (Local) or CMT Cloud (Cellular 4G)</p>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono font-bold text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-500/30">
                        IP67
                      </span>
                    </div>

                    {/* Direct Arrow */}
                    <div className="flex justify-center text-slate-500 font-semibold">
                      <span className="text-[11px] font-mono text-sky-400/60">↓ REST API / MQTT / TLS 1.3 Backhaul</span>
                    </div>

                    {/* Stage 5: Client SCADA / EWS */}
                    <div className={`p-4 rounded-2xl border transition-all ${
                      activeStep === 5
                        ? 'bg-indigo-950/70 border-indigo-400/60 shadow-lg shadow-indigo-500/20'
                        : 'bg-slate-900/60 border-white/5'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 rounded-xl bg-indigo-950 text-indigo-400 border border-indigo-500/30">
                            <Cloud className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-white">Engineering Platforms &amp; Early Warning</p>
                            <p className="text-[11px] text-slate-400">Bentley iTwin • Trimble 4D • Custom SCADA • SMS/WhatsApp Alerts</p>
                          </div>
                        </div>
                        <span className="text-[11px] font-mono font-bold text-indigo-300 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-500/30">
                          Live Data
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Explanation Column for the Active Step */}
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-sky-300 bg-sky-950/80 px-3 py-1 rounded-full border border-sky-500/30">
                      Step 0{activeStep} Architecture Breakdown
                    </span>
                    <h3 className="text-2xl font-black text-white mt-3 leading-snug">
                      {steps[activeStep - 1].title}
                    </h3>
                    <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                      {steps[activeStep - 1].desc}
                    </p>
                  </div>

                  {/* Crucial Engineering Insight Box */}
                  <div className="p-4 rounded-2xl glass-obsidian border border-white/10 space-y-2">
                    <p className="text-xs font-bold text-sky-400 flex items-center gap-1.5 uppercase tracking-wider">
                      <Zap className="w-4 h-4 text-sky-400" />
                      Why Tilt + GNSS are Combined:
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      A retaining wall or hillside can slide horizontally forward on a flat slip plane with zero rotation—a tiltmeter alone would miss this danger. The GNSS Meter detects the true 3D horizontal displacement. Conversely, localized differential foundation twisting is caught immediately by the tiltmeter's micro-radian sensitivity.
                    </p>
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <RollingButton
                      onClick={() => setActiveStep(activeStep < 5 ? activeStep + 1 : 1)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 transition-colors shadow-lg shadow-sky-500/25 border border-sky-400/30"
                      iconAfter={<ArrowRight className="w-4 h-4 text-white" />}
                    >
                      {activeStep < 5 ? 'Next Architecture Step' : 'Restart Architecture Tour'}
                    </RollingButton>
                  </div>
                </div>

              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
