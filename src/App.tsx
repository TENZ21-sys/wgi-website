import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { SolutionsSection } from './components/SolutionsSection';
import { ProductCatalog } from './components/ProductCatalog';
import { SynergyDiagram } from './components/SynergyDiagram';
import { ServicesSection } from './components/ServicesSection';
import { SolutionEstimator } from './components/SolutionEstimator';
import { EnquiryForm } from './components/EnquiryForm';
import { Footer } from './components/Footer';
import { SpaceBackground } from './components/SpaceBackground';
import { MessageSquare } from 'lucide-react';
import type { NavTab } from './types/monitoring';

export const App: React.FC = () => {
  // Initialize tab from URL hash if available
  const getInitialTab = (): NavTab => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (['home', 'about', 'products', 'solutions', 'services', 'estimator', 'contact'].includes(hash)) {
      return hash as NavTab;
    }
    // Also map legacy hashes
    if (hash === 'equipment') return 'products';
    if (hash === 'faq') return 'contact';
    return 'home';
  };

  const [activeTab, setActiveTab] = useState<NavTab>(getInitialTab);
  const [enquiryEquipment, setEnquiryEquipment] = useState<string>('');
  const [enquiryMessage, setEnquiryMessage] = useState<string>('');

  // Handle Tab Navigation with scroll-to-top (no downward page scrolling)
  const handleSelectTab = (tab: NavTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'instant' });
    try {
      window.history.replaceState(null, '', `#${tab}`);
    } catch {
      // Fallback if sandboxed
    }
  };

  // Cross-tab actions: Switch to Contact tab with pre-filled state
  const handleSelectEquipmentForEnquiry = (productName: string) => {
    setEnquiryEquipment(productName);
    handleSelectTab('contact');
  };

  const handleSelectSolutionForEnquiry = (solutionTitle: string) => {
    setEnquiryMessage(`We request an engineering proposal and budgetary quotation for: ${solutionTitle}.`);
    handleSelectTab('contact');
  };

  const handleApplyEstimatorPackage = (packageSummary: string) => {
    setEnquiryMessage(packageSummary);
    handleSelectTab('contact');
  };

  // Listen to popstate (back/forward browser navigation)
  useEffect(() => {
    const onHashChange = () => {
      const current = getInitialTab();
      setActiveTab(current);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const floatingWhatsAppUrl = `https://wa.me/94771234567?text=${encodeURIComponent(
    'Hello WGI Solutions, I would like to consult with an engineer regarding industrial IoT monitoring in Sri Lanka.'
  )}`;

  return (
    <div className="min-h-screen bg-[#060811] text-slate-100 flex flex-col font-sans selection:bg-sky-500 selection:text-white relative">
      
      {/* 3D Starfield Space Background (from WGI/3d templates/3d space.html) */}
      <SpaceBackground />

      {/* Top Glassmorphism Navigation Header */}
      <Navbar activeTab={activeTab} onSelectTab={handleSelectTab} />

      {/* Main Multi-Tab View Container */}
      <main className="flex-1 w-full relative z-10" id="main-content">
        {activeTab === 'home' && (
          <Hero onNavigateTab={handleSelectTab} />
        )}

        {activeTab === 'about' && (
          <AboutUs onNavigateTab={handleSelectTab} />
        )}

        {activeTab === 'products' && (
          <ProductCatalog 
            onSelectForEnquiry={handleSelectEquipmentForEnquiry} 
            onNavigateTab={handleSelectTab} 
          />
        )}

        {activeTab === 'solutions' && (
          <div>
            <SolutionsSection 
              onSelectSolution={handleSelectSolutionForEnquiry} 
            />
            <SynergyDiagram />
          </div>
        )}

        {activeTab === 'services' && (
          <ServicesSection onNavigateTab={handleSelectTab} />
        )}

        {activeTab === 'estimator' && (
          <SolutionEstimator onApplyRecommendation={handleApplyEstimatorPackage} />
        )}

        {activeTab === 'contact' && (
          <EnquiryForm 
            initialEquipment={enquiryEquipment} 
            initialMessage={enquiryMessage} 
          />
        )}
      </main>

      {/* Global Grounding Footer */}
      <Footer onNavigateTab={handleSelectTab} />

      {/* Floating WhatsApp Action Speed-Dial */}
      <aside aria-label="Direct support channels" className="fixed bottom-6 right-6 z-40">
        <a
          href={floatingWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs shadow-2xl shadow-emerald-600/30 transition-all duration-300 hover:scale-105 active:scale-95 border border-emerald-400/50 cursor-pointer"
          title="Instant WhatsApp Consultation with WGI Engineering Desk"
        >
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
          <MessageSquare className="w-4 h-4 fill-white" />
          <span className="hidden sm:inline">WhatsApp Desk (Sri Lanka)</span>
        </a>
      </aside>

    </div>
  );
};

export default App;
