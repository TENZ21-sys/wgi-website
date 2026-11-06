import React from 'react';
import { Radio, Phone, Mail, MapPin, MessageSquare, ShieldCheck } from 'lucide-react';
import type { NavTab } from '../types/monitoring';

interface FooterProps {
  onNavigateTab?: (tab: NavTab) => void;
}

const CURRENT_YEAR = 2026;

export const Footer: React.FC<FooterProps> = ({ onNavigateTab }) => {
  const whatsappUrl = `https://wa.me/94771234567?text=${encodeURIComponent(
    'Hello WGI Solutions, I would like to consult with an engineer regarding industrial IoT monitoring in Sri Lanka.'
  )}`;

  return (
    <footer className="bg-gradient-to-b from-transparent via-[#060811]/30 to-[#060811]/70 backdrop-blur-sm text-slate-400 border-t border-white/10 relative overflow-hidden">
      
      {/* Ambient Gradient Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-gradient-to-t from-sky-500/10 via-blue-600/5 to-transparent blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => onNavigateTab && onNavigateTab('home')}
              className="flex items-center gap-3 group focus:outline-none text-left cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center shadow-lg shadow-sky-500/20 border border-sky-400/30">
                <Radio className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5">
                  WGI <span className="text-sky-400 font-semibold text-xs px-2 py-0.5 rounded-full bg-sky-950/80 border border-sky-500/30">Solutions</span>
                </span>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Industrial IoT Monitoring</p>
              </div>
            </button>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Official Sri Lanka engineering partner for Worldsensing industrial IoT geotechnical and structural telemetry. Protecting lives and critical infrastructure through autonomous early-warning micro-movement intelligence.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl glass-obsidian text-emerald-400 text-xs font-bold hover:bg-emerald-950/50 transition-all border border-emerald-500/30"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Desk</span>
              </a>
              <a
                href="tel:+94112345678"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl glass-obsidian text-slate-300 text-xs font-bold hover:text-white hover:bg-white/10 transition-all border border-white/10"
              >
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <span>+94 11 234 5678</span>
              </a>
            </div>
          </div>

          {/* Quick Tabs Navigation */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              Company &amp; Services
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigateTab && onNavigateTab('home')}
                  className="hover:text-sky-400 transition-colors cursor-pointer"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab && onNavigateTab('about')}
                  className="hover:text-sky-400 transition-colors cursor-pointer"
                >
                  About WGI &amp; Credentials
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab && onNavigateTab('products')}
                  className="hover:text-sky-400 transition-colors cursor-pointer"
                >
                  Certified Equipment Catalog
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab && onNavigateTab('services')}
                  className="hover:text-sky-400 transition-colors cursor-pointer"
                >
                  Turnkey Engineering Delivery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab && onNavigateTab('estimator')}
                  className="hover:text-sky-400 transition-colors cursor-pointer"
                >
                  Interactive Project Estimator
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab && onNavigateTab('contact')}
                  className="hover:text-sky-400 transition-colors cursor-pointer"
                >
                  Contact &amp; Quotations
                </button>
              </li>
            </ul>
          </div>

          {/* Application Sectors */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              Protected Sectors
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigateTab && onNavigateTab('solutions')}
                  className="hover:text-sky-400 transition-colors cursor-pointer text-left"
                >
                  Mountain Landslides (Badulla/Kandy)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab && onNavigateTab('solutions')}
                  className="hover:text-sky-400 transition-colors cursor-pointer text-left"
                >
                  Railway Tracks &amp; Tunnels (Main Line)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab && onNavigateTab('solutions')}
                  className="hover:text-sky-400 transition-colors cursor-pointer text-left"
                >
                  Hydroelectric Dams (Mahaweli Basin)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab && onNavigateTab('solutions')}
                  className="hover:text-sky-400 transition-colors cursor-pointer text-left"
                >
                  Deep Excavation Pits (Colombo Metro)
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              Engineering Desk
            </p>
            <div className="space-y-2 text-xs text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                <span>Galle Road, Colombo 03, Sri Lanka</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>+94 11 234 5678</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>engineering@wgisolutions.lk</span>
              </p>
              <p className="text-[11px] text-slate-500 pt-1">
                Mon - Fri: 8:30 AM - 5:30 PM (IST)
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimers */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {CURRENT_YEAR} WGI Solutions (Pvt) Ltd. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Official Worldsensing Partner Sri Lanka</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
