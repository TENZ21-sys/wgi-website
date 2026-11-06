import React from 'react';
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  Award, 
  Radio, 
  CheckCircle2, 
  ArrowRight, 
  Compass, 
  Mountain, 
  TrainTrack, 
  HardHat, 
  Zap,
  Clock,
  Sparkles
} from 'lucide-react';
import type { NavTab } from '../types/monitoring';
import { useScrollReveal, useStaggerReveal } from '../hooks';
import { RollingButton } from './RollingButton';

interface AboutUsProps {
  onNavigateTab: (tab: NavTab) => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onNavigateTab }) => {
  const headerReveal = useScrollReveal<HTMLDivElement>({ yOffset: 30, blur: 6 });
  const metricsBarReveal = useStaggerReveal<HTMLDivElement>({ stagger: 0.1, yOffset: 20, blur: 4 });
  const missionVisionReveal = useStaggerReveal<HTMLDivElement>({ stagger: 0.15, yOffset: 30, blur: 5 });
  const galleryReveal = useStaggerReveal<HTMLDivElement>({ stagger: 0.15, yOffset: 30, blur: 5 });
  const valuesHeadingReveal = useScrollReveal<HTMLDivElement>({ yOffset: 25, blur: 4 });
  const valuesGridReveal = useStaggerReveal<HTMLDivElement>({ stagger: 0.1, yOffset: 25, blur: 4 });
  const credsHeadingReveal = useScrollReveal<HTMLDivElement>({ yOffset: 25, blur: 4 });
  const credsGridReveal = useStaggerReveal<HTMLDivElement>({ stagger: 0.1, yOffset: 20, blur: 3 });

  const coreValues = [
    {
      icon: ShieldCheck,
      title: 'Zero-Failure Data Integrity',
      description:
        'Safety decisions depend on accurate data. We deploy dual-link wireless communication and internal memory logging to ensure no measurement is ever lost.',
      tag: 'Zero Data Loss'
    },
    {
      icon: Zap,
      title: 'Monsoon Weather Endurance',
      description:
        'Engineered for Sri Lanka’s heavy rains and humidity with waterproof enclosures, lightning surge protection, and UV-stabilized brackets.',
      tag: 'Waterproof IP67'
    },
    {
      icon: Compass,
      title: 'Requirement-Driven Solutions',
      description:
        'We do not sell generic off-the-shelf packages. Every installation begins with a thorough site survey and custom brackets tailored to your exact structure.',
      tag: 'Custom Engineered'
    },
    {
      icon: Clock,
      title: 'Local Sri Lankan Presence',
      description:
        'Based in Sri Lanka, our local field engineers provide fast emergency mobilization, local spare parts, and on-site support without waiting for overseas teams.',
      tag: 'Local Support Desk'
    }
  ];

  const credentials = [
    {
      badge: 'Official Solutions Partner',
      title: 'Worldsensing Official Partner',
      description: 'Authorized engineering solutions partner deploying genuine European-engineered monitoring equipment with official manufacturer warranty and support.'
    },
    {
      badge: 'Railway Certified',
      title: 'Railway Shock & Vibration Ready',
      description: 'Our sensors meet strict international railway standards, operating reliably under high-speed vibrations on active Sri Lanka Railways tracks.'
    },
    {
      badge: 'Sri Lanka Frequency Compliant',
      title: 'Regulatory Radio Compliance',
      description: 'Radio frequencies tuned precisely to Sri Lankan regulations, ensuring strong wireless signals free from cellular interference.'
    },
    {
      badge: 'Turnkey Integration',
      title: 'Control Room & SCADA Integration',
      description: 'Direct data forwarding into national utility dashboards, client SCADA screens, and automated WhatsApp/SMS emergency alerts.'
    }
  ];

  const disciplines = [
    {
      icon: Mountain,
      title: 'Geotechnical Engineering',
      role: 'Slope stability analysis, soil mechanics assessment, and landslide sensor array positioning across mountain highways.'
    },
    {
      icon: TrainTrack,
      title: 'Railway & Structural Civil',
      role: 'Track cant and twist calculation, sleeper anchor brackets, tunnel convergence monitoring, and dam crest deflection verification.'
    },
    {
      icon: Radio,
      title: 'RF & Wireless Telemetry',
      role: 'Sub-GHz LoRa radio propagation planning, high-gain directional antennae tuning, and solar power dimensioning.'
    },
    {
      icon: HardHat,
      title: 'Turnkey Field Execution',
      role: 'Civil drilling, certified torque clamping, on-site commissioning, zero-line interruption rail work, and 24/7 technical hotline.'
    }
  ];

  return (
    <div className="animate-tabEntrance min-h-screen bg-transparent text-slate-100 pb-20 selection:bg-sky-500 selection:text-white">
      
      {/* 1. Executive Corporate Header with Seamless Background */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-transparent">
        
        {/* Background Engineering Infrastructure Overlay (Subtle) */}
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center pointer-events-none mix-blend-luminosity"
          style={{
            backgroundImage: `url('/images/backgrounds/bg-construction.jpg')`
          }}
        />

        {/* Ambient Gradient Glows */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-gradient-to-bl from-sky-500/15 via-blue-600/10 to-transparent blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 left-10 w-[500px] h-[400px] bg-gradient-to-tr from-cyan-400/10 via-indigo-600/10 to-transparent blur-[140px] pointer-events-none" />

        <div ref={headerReveal} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Partnership Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-obsidian border border-sky-400/30 shadow-lg shadow-sky-500/15 mb-6">
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]"></span>
            <span className="text-xs font-bold text-sky-300">
              Official Worldsensing Solutions Partner • Sri Lanka
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.15] max-w-4xl mx-auto">
            Engineering Safety for <br />
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_4px_25px_rgba(56,189,248,0.35)]">
              Sri Lanka's Vital Infrastructure
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            WGI Solutions is a specialized industrial IoT engineering company dedicated to preventing structural failures, protecting national transport links, and safeguarding communities across Sri Lanka. We bridge certified European sensor technology with hands-on local field execution.
          </p>

          {/* Quick Metrics Bar */}
          <div ref={metricsBarReveal} className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="glass-obsidian-card p-4 rounded-xl text-center">
              <p className="text-2xl font-black text-sky-400 tracking-tight">100%</p>
              <p className="text-xs font-semibold text-slate-400 mt-1">Sri Lanka Coverage</p>
            </div>
            <div className="glass-obsidian-card p-4 rounded-xl text-center">
              <p className="text-2xl font-black text-cyan-400 tracking-tight">&lt; 2.0s</p>
              <p className="text-xs font-semibold text-slate-400 mt-1">Hazard Alert Latency</p>
            </div>
            <div className="glass-obsidian-card p-4 rounded-xl text-center">
              <p className="text-2xl font-black text-indigo-400 tracking-tight">15 km</p>
              <p className="text-xs font-semibold text-slate-400 mt-1">Wireless Sensor Range</p>
            </div>
            <div className="glass-obsidian-card p-4 rounded-xl text-center">
              <p className="text-2xl font-black text-emerald-400 tracking-tight">Turnkey</p>
              <p className="text-xs font-semibold text-slate-400 mt-1">From Survey to Live Alert</p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Mission & Vision Pillars */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={missionVisionReveal} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className="relative group glass-obsidian-card rounded-3xl p-8 sm:p-10 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-sky-950/80 border border-sky-500/30 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
              <Target className="w-7 h-7 text-sky-400" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">Our Purpose</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1 mb-4">
              Our Corporate Mission
            </h2>
            <p className="text-slate-300 leading-relaxed text-base sm:text-lg italic">
              "To empower Sri Lanka’s civil infrastructure authorities, transportation networks, and engineering contractors with military-grade, real-time wireless geotechnical telemetry—detecting subtle micro-movements before catastrophic structural failure occurs, preserving lives, and maximizing asset longevity."
            </p>
            <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-2 text-xs font-bold text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Dedicated to zero preventable structural failures</span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="relative group glass-obsidian-card rounded-3xl p-8 sm:p-10 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
              <Eye className="w-7 h-7 text-indigo-400" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Our Horizon</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1 mb-4">
              Our Strategic Vision
            </h2>
            <p className="text-slate-300 leading-relaxed text-base sm:text-lg italic">
              "To be recognized as South Asia's foremost industrial IoT geotechnical and structural intelligence provider, setting the benchmark for autonomous hazard monitoring through unmatched sensor precision, rugged tropical endurance, and uncompromising field engineering support."
            </p>
            <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-2 text-xs font-bold text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-sky-400" />
              <span>Setting international safety standards across South Asia</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Field Safety & Real Site Deployment */}
      <section className="py-20 bg-transparent relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">On-The-Ground Reality</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-1">
              Safety First in Every Field Deployment
            </h2>
            <p className="text-slate-400 mt-2 text-base">
              Our technicians operate under strict geotechnical and occupational safety guidelines on live highways, active railway tracks, and major construction sites.
            </p>
          </div>

          <div ref={galleryReveal} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="glass-obsidian-card rounded-2xl overflow-hidden group">
              <div className="h-52 overflow-hidden bg-slate-950">
                <img
                  src="/images/sectors/field-safety.jpg"
                  alt="WGI Field Safety Inspection"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="p-5 space-y-1.5">
                <h4 className="text-sm font-bold text-white">Rigorous Site Safety Protocols</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Every installation is preceded by risk assessments, personal protective equipment compliance, and civil coordination.
                </p>
              </div>
            </div>

            <div className="glass-obsidian-card rounded-2xl overflow-hidden group">
              <div className="h-52 overflow-hidden bg-slate-950">
                <img
                  src="/images/sectors/field-survey.jpg"
                  alt="Geotechnical Site Survey"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="p-5 space-y-1.5">
                <h4 className="text-sm font-bold text-white">Pre-Installation Topo Surveys</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Radio propagation and satellite sightline verification conducted prior to drilling rock anchors or mounting clamps.
                </p>
              </div>
            </div>

            <div className="glass-obsidian-card rounded-2xl overflow-hidden group">
              <div className="h-52 overflow-hidden bg-slate-950">
                <img
                  src="/images/sectors/field-team.jpg"
                  alt="WGI Engineering Field Crew"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="p-5 space-y-1.5">
                <h4 className="text-sm font-bold text-white">Experienced Local Engineers</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Trained Sri Lankan technicians certified in rope access, electrical safety, and rail corridor compliance.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Core Values */}
      <section className="py-20 bg-transparent relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div ref={valuesHeadingReveal} className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-500/30 text-sky-300 text-xs font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>Guiding Principles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Our Core Engineering Values
            </h2>
            <p className="text-slate-400 mt-3 text-base">
              The fundamental standards that dictate every site feasibility study, equipment calibration, and civil installation we deliver.
            </p>
          </div>

          <div ref={valuesGridReveal} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div 
                  key={idx}
                  className="glass-obsidian-card rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 text-white flex items-center justify-center mb-4 shadow-lg shadow-sky-500/20">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-500/30">
                      {val.tag}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-3 mb-2">
                      {val.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. Credentials & Certified Standards */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={credsHeadingReveal} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-slate-300 text-xs font-bold mb-3">
            <Award className="w-3.5 h-3.5 text-sky-400" />
            <span>Industrial Compliance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Official Accreditations &amp; Standards
          </h2>
          <p className="text-slate-400 mt-3 text-base">
            Verified European manufacturing excellence paired with rigorous international geotechnical benchmarks.
          </p>
        </div>

        <div ref={credsGridReveal} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {credentials.map((cred, idx) => (
            <div 
              key={idx} 
              className="glass-obsidian-card rounded-2xl p-6 transition-all flex items-start gap-4"
            >
              <div className="mt-1 p-2 rounded-lg bg-sky-950/80 text-sky-400 border border-sky-500/30 shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-sky-300 uppercase tracking-wider bg-sky-950/80 px-2.5 py-0.5 rounded-full border border-sky-500/30">
                  {cred.badge}
                </span>
                <h3 className="text-base font-bold text-white mt-2 mb-1">
                  {cred.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {cred.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Multidisciplinary Engineering Capabilities */}
      <section className="py-20 bg-transparent text-white relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">Integrated Capability</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-1">
              Multidisciplinary Field Delivery
            </h2>
            <p className="text-slate-400 mt-2 text-base">
              A comprehensive team combining geotechnical expertise, RF propagation specialists, and certified civil technicians.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {disciplines.map((disc, idx) => {
              const Icon = disc.icon;
              return (
                <div 
                  key={idx} 
                  className="glass-obsidian-card rounded-2xl p-6 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-sky-950/80 border border-sky-400/30 text-sky-400 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {disc.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {disc.role}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Action Callout Box */}
          <div className="mt-16 glass-obsidian border border-sky-500/30 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl bg-cyber-hexagons">
            <div>
              <h3 className="text-xl font-bold text-white">
                Require a Site Feasibility Study or Sensor Sizing Consultation?
              </h3>
              <p className="text-sm text-slate-300 mt-1 max-w-2xl">
                Our Sri Lankan engineering desk provides on-site radio testing, bracket planning, and sensor recommendations.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <RollingButton
                onClick={() => onNavigateTab('products')}
                className="px-5 py-2.5 rounded-xl glass-obsidian hover:bg-white/10 text-white text-xs font-bold transition-all shadow-md border border-white/10"
              >
                Browse Equipment
              </RollingButton>
              <RollingButton
                onClick={() => onNavigateTab('contact')}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white text-xs font-bold transition-all shadow-lg shadow-sky-500/25 flex items-center gap-2 border border-sky-400/30"
                iconAfter={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Request Consultation
              </RollingButton>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
