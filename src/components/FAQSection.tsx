import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Does the GNSS Meter operate through heavy Sri Lankan monsoon rains, fog, and dense clouds?',
      a: 'Yes. Unlike optical survey methods (robotic total stations and prisms) that fail completely when optical sightlines are blinded by rain, mist, or dust, satellite GNSS radio waves easily penetrate atmospheric water vapor and heavy rain as long as a minimum 120° hemispherical view of the sky is maintained.'
    },
    {
      q: 'How does the system function in remote hill country areas without cellular network coverage?',
      a: 'The system is entirely decoupled from consumer internet. Sensor nodes (GNSS meters and G7 Tiltmeters) transmit over license-free sub-GHz LoRa radio directly to a Worldsensing 4G Rugged Gateway Edge (GW-4G-EDGE). The gateway runs embedded CMT Edge software on-site, logging and processing all data locally on non-volatile memory without needing any cellular or internet link.'
    },
    {
      q: 'Can WGI integrate field data into our existing SCADA or Bentley iTwin / Trimble 4D software?',
      a: 'Yes. WGI configures turnkey API data pipes. Telemetry collected by the Worldsensing gateway can be forwarded automatically via REST APIs, MQTT brokers, or scheduled CSV FTP feeds directly into third-party geotechnical platforms like Bentley iTwin (Sensemetrics), Trimble 4D Control, Vista Data Vision, or custom corporate SCADA.'
    },
    {
      q: 'What battery replacement and field maintenance is required over a multi-year project?',
      a: 'Maintenance is minimal. The G7 Tiltmeter features an extraordinary battery lifespan of up to 16.6 years in standard periodic mode (or 10–12 years in motion-triggered mode) on a single Saft D-size cell. The GNSS Meter runs for 2.5 to 3.5 years on its 4x D-size cells. Gateway batteries in off-grid sites are continuously recharged via our rugged 12V solar DC kit.'
    },
    {
      q: 'Are the tiltmeters certified for high-impact vibration on active Sri Lanka Railways tracks?',
      a: 'Yes. The Loadsensing G7 Tilt-IR variant has an integrated antenna and is certified under European railway standard EN 50125-3:2003 (Level C.2) for track sleeper vibration, withstanding shocks up to 70g. For direct rail-web attachment, WGI encapsulates the internal electronics in specialized resin for permanent shock absorption.'
    },
    {
      q: 'Does WGI perform physical civil installation and sensor mounting across Sri Lanka?',
      a: 'Yes. WGI is not merely an equipment vendor. Our field engineering team carries out site surveys, sky visibility analysis, precision drill-and-epoxy civil anchoring, sleeper bracket mounting, solar mast erection, lightning surge protection cabling, and end-to-end commissioning on-site.'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-transparent text-slate-100 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold glass-obsidian text-sky-300 border border-sky-400/30 uppercase tracking-wider shadow-lg shadow-sky-500/15">
            <HelpCircle className="w-3.5 h-3.5 text-sky-400" />
            Engineering Knowledge Base
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Frequently Asked Technical Questions
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Essential facts on LoRa transmission ranges, battery autonomy, software integration, and tropical operational resilience.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-white/10 rounded-2xl glass-obsidian-card overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-white focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-sky-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3 bg-slate-950/60 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
