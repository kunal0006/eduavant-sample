import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { getWhatsAppLink, getCallLink, CONTACT_CONFIG } from '../../data/config';
import { getAllPrograms } from '../../data/careers';

export const FinalEnquiry: React.FC = () => {
  const programs = getAllPrograms();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    programSlug: programs[0]?.slug || '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="enquire" className="py-20 bg-navy-950 text-white relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 font-bold text-xs uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>ADMISSIONS ENQUIRY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display">
            Your Next Step Starts Here.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto">
            Fill out the form below to receive detailed program guidance, schedule an advisor callback, or start your admission process.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-navy-900 border border-slate-800 rounded-3xl p-5 sm:p-10 shadow-2xl">
          {isSubmitted ? (
            <div className="bg-emerald-950/80 border border-emerald-500/40 rounded-2xl p-8 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-500 text-navy-950 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                Enquiry Submitted!
              </h3>
              <p className="text-emerald-200 text-sm max-w-md mx-auto leading-relaxed">
                Thank you for contacting EduAvant. Our senior admissions counselor will connect with you via phone or WhatsApp within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: '', phone: '', email: '', programSlug: programs[0]?.slug || '', message: '' });
                }}
                className="mt-2 text-xs font-bold text-amber-400 hover:text-amber-300 underline uppercase tracking-wider"
              >
                Submit another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="space-y-2">
                  <label htmlFor="final-name" className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    Full Name <span className="text-amber-400">*</span>
                  </label>
                  <input
                    id="final-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3.5 bg-navy-950 border border-slate-700 rounded-xl text-white text-sm placeholder-slate-500 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none"
                  />
                </div>

                {/* Mobile Number */}
                <div className="space-y-2">
                  <label htmlFor="final-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    Mobile / WhatsApp Number <span className="text-amber-400">*</span>
                  </label>
                  <input
                    id="final-phone"
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    className="w-full px-4 py-3.5 bg-navy-950 border border-slate-700 rounded-xl text-white text-sm placeholder-slate-500 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none"
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Email Address */}
                <div className="space-y-2">
                  <label htmlFor="final-email" className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    Email Address
                  </label>
                  <input
                    id="final-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="yourname@domain.com"
                    className="w-full px-4 py-3.5 bg-navy-950 border border-slate-700 rounded-xl text-white text-sm placeholder-slate-500 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none"
                  />
                </div>

                {/* Program Selection */}
                <div className="space-y-2">
                  <label htmlFor="final-program" className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    Interested Program Track <span className="text-amber-400">*</span>
                  </label>
                  <select
                    id="final-program"
                    name="programSlug"
                    value={formData.programSlug}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-navy-950 border border-slate-700 rounded-xl text-white text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none"
                  >
                    {programs.map((p) => (
                      <option key={p.slug} value={p.slug}>
                        {p.categoryTitle} — {p.title}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="final-message" className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                  Message or Specific Career Goals
                </label>
                <textarea
                  id="final-message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share any questions about eligibility, starting dates, or counseling..."
                  className="w-full px-4 py-3.5 bg-navy-950 border border-slate-700 rounded-xl text-white text-sm placeholder-slate-500 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Confidential enquiry. No unwanted calls.</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-navy-950 font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>PROCESSING...</span>
                  ) : (
                    <>
                      <span>SUBMIT ENQUIRY</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>

        {/* Direct Prefer to Talk Links */}
        <div className="mt-10 pt-8 border-t border-slate-800 text-center space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Prefer to talk directly right now?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={getWhatsAppLink("Hi EduAvant admissions desk, I would like to speak to an advisor right now.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              <span>WHATSAPP US</span>
            </a>

            <a
              href={getCallLink()}
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl border border-slate-700 transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>CALL NOW ({CONTACT_CONFIG.phoneFormatted})</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
