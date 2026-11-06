import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, Mail, Loader2, Phone, MapPin } from 'lucide-react';
import { FAQSection } from './FAQSection';
import { useScrollReveal, useStaggerReveal } from '../hooks';

interface EnquiryFormProps {
  initialEquipment?: string;
  initialMessage?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  initialEquipment = '',
  initialMessage = '',
}) => {
  const headerReveal = useScrollReveal<HTMLDivElement>({ yOffset: 30, blur: 6 });
  const contactsReveal = useStaggerReveal<HTMLDivElement>({ stagger: 0.1, yOffset: 20, blur: 3 });

  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    district: 'Colombo',
    phone: '',
    email: '',
    serviceScope: 'Turnkey Solution (Consulting, Supply, Installation & Software)',
    equipmentInterest: initialEquipment || 'Complete Integrated Package (GNSS + Tilt + 4G Gateway)',
    message: initialMessage || '',
  });

  const [prevEquipment, setPrevEquipment] = useState(initialEquipment);
  const [prevMessage, setPrevMessage] = useState(initialMessage);

  // Sync state cleanly during render if cross-tab initial props change
  if (initialEquipment !== prevEquipment) {
    setPrevEquipment(initialEquipment);
    if (initialEquipment) {
      setFormData((prev) => ({ ...prev, equipmentInterest: initialEquipment }));
    }
  }

  if (initialMessage !== prevMessage) {
    setPrevMessage(initialMessage);
    if (initialMessage) {
      setFormData((prev) => ({ ...prev, message: initialMessage }));
    }
  }

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  const districts = [
    'Badulla',
    'Colombo',
    'Galle',
    'Gampaha',
    'Kalutara',
    'Kandy',
    'Kegalle',
    'Kurunegala',
    'Matale',
    'Nuwara Eliya',
    'Ratnapura',
    'Other Sri Lanka District',
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Contact name is required.';
    if (!formData.organization.trim()) errs.organization = 'Organization/Company name is required.';
    if (!formData.phone.trim()) errs.phone = 'Phone number is required for field coordination.';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Valid corporate or technical email address required.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      const generatedRef = `WGI-SRI-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedId(generatedRef);
      setIsSubmitting(false);
    }, 800);
  };

  const whatsappMessage = `*WGI Solutions Enquiry*\nReference: ${submittedId || 'PENDING'}\nName: ${formData.name}\nOrg: ${formData.organization}\nDistrict: ${formData.district}\nScope: ${formData.serviceScope}\nEquipment: ${formData.equipmentInterest}\nNote: ${formData.message}`;
  const whatsappUrl = `https://wa.me/94771234567?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="animate-tabEntrance min-h-screen bg-transparent text-slate-100 pb-20 selection:bg-sky-500 selection:text-white">
      
      {/* 1. Header with Seamless Background */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-transparent">
        
        {/* Background Engineering Civil Overlay */}
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center pointer-events-none mix-blend-luminosity"
          style={{
            backgroundImage: `url('/images/backgrounds/bg-construction.jpg')`
          }}
        />

        {/* Ambient Gradient Glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-sky-500/15 via-blue-600/10 to-transparent blur-[140px] pointer-events-none" />

        <div ref={headerReveal} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold glass-obsidian text-sky-300 border border-sky-400/30 shadow-lg shadow-sky-500/15 mb-4">
            <Mail className="w-3.5 h-3.5 text-sky-400" />
            <span>Sri Lanka Engineering Desk</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.15] max-w-4xl mx-auto">
            Request an Engineering <br />
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_4px_25px_rgba(56,189,248,0.35)]">
              Consultation &amp; Quotation
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Connect with our geotechnical and IoT engineering team in Sri Lanka. We assess site parameters, recommend certified hardware, and prepare turnkey proposals tailored to your budget and timeline.
          </p>

          {/* Direct Contact Cards */}
          <div ref={contactsReveal} className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto text-left">
            <div className="p-4 rounded-2xl glass-obsidian-card flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-sky-950/80 text-sky-400 border border-sky-500/30 shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Direct Telephone Desk</p>
                <a href="tel:+94112345678" className="text-xs text-sky-400 font-bold hover:underline">
                  +94 11 234 5678
                </a>
                <p className="text-[10px] text-slate-400">Mon - Fri: 8:30 AM - 5:30 PM</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl glass-obsidian-card flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 shrink-0">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">WhatsApp Engineering Desk</p>
                <a 
                  href="https://wa.me/94771234567" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs text-emerald-400 font-bold hover:underline"
                >
                  +94 77 123 4567
                </a>
                <p className="text-[10px] text-slate-400">Instant Technical Chat</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl glass-obsidian-card flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-950/80 text-cyan-400 border border-cyan-500/30 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Colombo Technical Center</p>
                <p className="text-xs text-slate-300 font-medium">Galle Road, Colombo 03</p>
                <p className="text-[10px] text-slate-400">Island-wide Field Dispatch</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Main Form Section */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {submittedId ? (
          <div className="glass-obsidian rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl border border-emerald-500/30">
            <div className="w-16 h-16 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            
            <div className="space-y-2">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                Reference: {submittedId}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Enquiry Successfully Logged!
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Thank you, {formData.name}. Our technical desk for {formData.district} has received your specification. An engineer will follow up within 24 business hours.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-500/25 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Summary via WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  setSubmittedId(null);
                  setFormData({
                    name: '',
                    organization: '',
                    district: 'Colombo',
                    phone: '',
                    email: '',
                    serviceScope: 'Turnkey Solution (Consulting, Supply, Installation & Software)',
                    equipmentInterest: 'Complete Integrated Package (GNSS + Tilt + 4G Gateway)',
                    message: '',
                  });
                }}
                className="px-6 py-3.5 rounded-xl glass-obsidian hover:bg-white/10 text-white font-bold text-xs transition-all border border-white/10"
              >
                Submit Another Enquiry
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="glass-obsidian rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/10 space-y-8">
            
            <div className="border-b border-white/10 pb-6">
              <h3 className="text-xl font-bold text-white">Project Details &amp; Site Information</h3>
              <p className="text-xs text-slate-400 mt-1">
                Provide as much context as possible for accurate sensor and radio recommendations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Name */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-bold text-slate-300">
                  Contact Person Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Eng. Priyantha Silva"
                  className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                    errors.name ? 'border-rose-500/80 bg-rose-950/20' : 'border-white/10'
                  }`}
                />
                {errors.name && <p className="text-[11px] text-rose-400">{errors.name}</p>}
              </div>

              {/* Organization */}
              <div className="space-y-1.5">
                <label htmlFor="organization" className="text-xs font-bold text-slate-300">
                  Organization / Engineering Contractor *
                </label>
                <input
                  id="organization"
                  type="text"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  placeholder="e.g. RDA, Ceylon Electricity Board, Maga Eng"
                  className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                    errors.organization ? 'border-rose-500/80 bg-rose-950/20' : 'border-white/10'
                  }`}
                />
                {errors.organization && <p className="text-[11px] text-rose-400">{errors.organization}</p>}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-bold text-slate-300">
                  Official Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@organization.lk"
                  className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                    errors.email ? 'border-rose-500/80 bg-rose-950/20' : 'border-white/10'
                  }`}
                />
                {errors.email && <p className="text-[11px] text-rose-400">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <label htmlFor="phone" className="text-xs font-bold text-slate-300">
                  Mobile / Direct Telephone Desk *
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+94 7X XXX XXXX"
                  className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                    errors.phone ? 'border-rose-500/80 bg-rose-950/20' : 'border-white/10'
                  }`}
                />
                {errors.phone && <p className="text-[11px] text-rose-400">{errors.phone}</p>}
              </div>

              {/* District Selection */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">
                  Project Site District (Sri Lanka)
                </label>
                <select
                  value={formData.district}
                  onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-xs text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  {districts.map((d) => (
                    <option key={d} value={d} className="bg-slate-900 text-white">
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              {/* Service Scope */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">
                  Required Service Scope
                </label>
                <select
                  value={formData.serviceScope}
                  onChange={(e) => setFormData({ ...formData, serviceScope: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-xs text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  <option value="Turnkey Solution (Consulting, Supply, Installation & Software)" className="bg-slate-900 text-white">
                    Turnkey Solution (Consulting, Supply, Installation &amp; Software)
                  </option>
                  <option value="Hardware Supply Only (Sensors, Gateways & Accessories)" className="bg-slate-900 text-white">
                    Hardware Supply Only (Sensors, Gateways &amp; Accessories)
                  </option>
                  <option value="On-Site Geotechnical Risk & Radio Feasibility Survey" className="bg-slate-900 text-white">
                    On-Site Geotechnical Risk &amp; Radio Feasibility Survey
                  </option>
                  <option value="Annual Maintenance, Battery Replacement & Recalibration" className="bg-slate-900 text-white">
                    Annual Maintenance, Battery Replacement &amp; Recalibration
                  </option>
                </select>
              </div>

            </div>

            {/* Equipment Interest */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">
                Primary Hardware &amp; Solution Interest
              </label>
              <input
                type="text"
                value={formData.equipmentInterest}
                onChange={(e) => setFormData({ ...formData, equipmentInterest: e.target.value })}
                placeholder="e.g. 5x GNSS Rovers + 1x Base for Badulla Highway"
                className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            {/* Message Area */}
            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs font-bold text-slate-300">
                Site Description, Structural Symptoms, or Specific Inquiries
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Mention site slope angle, train frequencies, dam height, or previous history of movement..."
                className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
              />
            </div>

            {/* Submission Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-blue-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-xl shadow-sky-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 border border-sky-400/30"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Processing Technical Request...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Proposal Request to Sri Lanka Engineering Desk</span>
                  </>
                )}
              </button>
            </div>

          </form>
        )}

      </section>

      {/* 3. Frequently Asked Questions Section */}
      <FAQSection />

    </div>
  );
};
