import React, { useState } from 'react';
import { 
  Radio, 
  Menu, 
  X, 
  Phone, 
  MessageSquare,
  Home,
  Users,
  Cpu,
  Layers,
  Wrench,
  Calculator,
  Mail
} from 'lucide-react';
import type { NavTab } from '../types/monitoring';

interface NavbarProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onSelectTab }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: NavTab; label: string; icon: React.ElementType }[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About Us', icon: Users },
    { id: 'products', label: 'Equipment', icon: Cpu },
    { id: 'solutions', label: 'Solutions', icon: Layers },
    { id: 'services', label: 'Services', icon: Wrench },
    { id: 'estimator', label: 'Estimator', icon: Calculator },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleTabClick = (tabId: NavTab) => {
    onSelectTab(tabId);
    setIsOpen(false);
  };

  const whatsappUrl = `https://wa.me/94771234567?text=${encodeURIComponent(
    'Hello WGI Solutions, I would like to consult with an engineer regarding industrial IoT monitoring in Sri Lanka.'
  )}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/80 py-2.5'
          : 'bg-slate-950/60 backdrop-blur-lg py-3.5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo - Navigates to Home */}
          <button
            onClick={() => handleTabClick('home')}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-xl p-1 text-left cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 via-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-sky-500/25 group-hover:scale-105 group-hover:shadow-sky-400/40 transition-all duration-300 border border-sky-400/30">
              <Radio className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5">
                WGI <span className="text-sky-400 font-semibold text-xs px-2 py-0.5 rounded-full bg-sky-950/70 border border-sky-500/30">Solutions</span>
              </span>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Industrial IoT Monitoring</p>
            </div>
          </button>

          {/* Desktop Multi-Tab Navigation */}
          <nav className="hidden xl:flex items-center bg-slate-900/80 backdrop-blur-md p-1.5 rounded-2xl border border-white/10 shadow-inner" aria-label="Desktop Navigation Tabs">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/30 font-extrabold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Medium Screens (lg) Compact Tabs */}
          <nav className="hidden lg:flex xl:hidden items-center bg-slate-900/80 backdrop-blur-md p-1 rounded-xl border border-white/10" aria-label="Tablet Navigation Tabs">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+94112345678"
              className="flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-sky-400 transition-colors px-2.5 py-1.5 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10"
              title="Direct Telephone Helpline"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>+94 11 234 5678</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105 border border-emerald-400/30"
            >
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Desk</span>
            </a>
          </div>

          {/* Mobile Action Buttons */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-emerald-600/90 text-white hover:bg-emerald-500 border border-emerald-400/30"
              aria-label="WhatsApp Us"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 border border-white/10 focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Multi-Tab Drawer */}
      {isOpen && (
        <div id="mobile-nav-drawer" className="md:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-6 space-y-2 shadow-2xl">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 pt-2">
            Site Navigation Tabs
          </p>
          <div className="grid grid-cols-2 gap-2 pt-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-xs font-bold transition-all text-left cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md shadow-sky-500/25'
                      : 'bg-slate-900/80 text-slate-200 hover:bg-white/10 border border-white/5'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-sky-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-white/10 space-y-2">
            <a
              href="tel:+94112345678"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-900 text-slate-200 text-xs font-bold border border-white/10 hover:bg-white/5"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>Call Sri Lanka Office (+94 11 234 5678)</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md shadow-emerald-500/20"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
