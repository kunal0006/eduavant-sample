import React, { useState } from 'react';
import { getAllPrograms, careerCategories } from '../data/careers';
import { CheckCircle2, ShieldCheck, ArrowRight, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { getWhatsAppLink, getCallLink } from '../data/config';

export const Join: React.FC = () => {
  const programs = getAllPrograms();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    careerInterest: 'aviation',
    programInterest: 'diploma-in-aviation',
    preferredContact: 'WhatsApp',
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
    <main className="pt-28 pb-20 bg-ivory-50">
      
      {/* Header */}
      <section className="bg-navy-950 text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 font-bold text-xs uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            <span>EXPRESS YOUR INTEREST</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Start Your EduAvant Journey.
          </h1>
          <p className="text-slate-300 text-base sm:text-xl max-w-xl mx-auto leading-relaxed">
            Take the first step towards a practical, career-focused future. Submit your interest below for priority advisor counseling.
          </p>
        </div>
      </section>

      {/* Main Join Form */}
      <section className="py-12 sm:py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-10 shadow-xl space-y-8">
          
          {isSubmitted ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-extrabold text-emerald-900">
                Application Received!
              </h2>
              <p className="text-emerald-800 text-base max-w-md mx-auto leading-relaxed">
                Thank you for applying to EduAvant. A dedicated career advisor will contact you via your preferred method ({formData.preferredContact}) within 24 hours.
              </p>
              <div className="pt-2">
                <a
                  href={getWhatsAppLink(`Hi EduAvant, I just submitted my Join application for ${formData.programInterest}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                  <span>CONNECT IMMEDIATELY ON WHATSAPP</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-xl font-extrabold text-navy-900">
                  Student & Applicant Details
                </h2>
                <p className="text-xs text-slate-500">
                  Provide your contact details so our admissions counselor can reach you.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="join-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Full Name <span className="text-amber-600">*</span>
                  </label>
                  <input
                    id="join-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-ivory-50 border border-slate-300 rounded-xl text-slate-900 text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="join-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Mobile / WhatsApp Number <span className="text-amber-600">*</span>
                  </label>
                  <input
                    id="join-phone"
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit phone number"
                    className="w-full px-4 py-3 bg-ivory-50 border border-slate-300 rounded-xl text-slate-900 text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="join-email" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Email Address
                  </label>
                  <input
                    id="join-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 bg-ivory-50 border border-slate-300 rounded-xl text-slate-900 text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="join-preferred" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Preferred Contact Method
                  </label>
                  <select
                    id="join-preferred"
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-ivory-50 border border-slate-300 rounded-xl text-slate-900 text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                  >
                    <option value="WhatsApp">WhatsApp Message</option>
                    <option value="Phone Call">Direct Phone Call</option>
                    <option value="Email">Email Communication</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="join-category" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Career Stream Interest
                  </label>
                  <select
                    id="join-category"
                    name="careerInterest"
                    value={formData.careerInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-ivory-50 border border-slate-300 rounded-xl text-slate-900 text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                  >
                    {careerCategories.map((c) => (
                      <option key={c.slug} value={c.slug}>
                        {c.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="join-program" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Specific Program Track
                  </label>
                  <select
                    id="join-program"
                    name="programInterest"
                    value={formData.programInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-ivory-50 border border-slate-300 rounded-xl text-slate-900 text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                  >
                    {programs.map((p) => (
                      <option key={p.slug} value={p.slug}>
                        {p.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="join-message" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Additional Notes or Questions
                </label>
                <textarea
                  id="join-message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Mention your current educational qualification (e.g. 12th pass 2025) or preferred timing..."
                  className="w-full px-4 py-3 bg-ivory-50 border border-slate-300 rounded-xl text-slate-900 text-sm focus:ring-2 focus:ring-amber-500 outline-none resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Honest counseling. No spam guaranteed.</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 bg-navy-900 hover:bg-navy-800 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all"
                >
                  {isSubmitting ? 'PROCESSING...' : 'JOIN NOW'}
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>
              </div>

            </form>
          )}

        </div>

        {/* Instant Helpline Option */}
        <div className="mt-8 text-center space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Want immediate assistance?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={getWhatsAppLink("Hi EduAvant, I would like to speak to an advisor about joining right now.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-800"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-600 text-white" />
              <span>WhatsApp Counselor</span>
            </a>
            <span className="text-slate-300">•</span>
            <a
              href={getCallLink()}
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-navy-900"
            >
              <Phone className="w-4 h-4 text-amber-600" />
              <span>Call Helpline</span>
            </a>
          </div>
        </div>

      </section>

    </main>
  );
};
