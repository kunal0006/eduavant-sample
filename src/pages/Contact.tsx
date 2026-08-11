import React, { useState } from 'react';
import { CONTACT_CONFIG, getWhatsAppLink, getCallLink } from '../data/config';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { getAllPrograms } from '../data/careers';

export const Contact: React.FC = () => {
  const programs = getAllPrograms();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    programSlug: 'general',
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
      
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/20 inline-block">
            CONTACT & ADMISSIONS
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Connect With EduAvant Advisors.
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Have questions about career streams, program eligibility, or enrollment procedures? We're here to help.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-2xl font-extrabold text-navy-900 mb-2">
                Admissions Desk Info
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Reach out directly via WhatsApp, phone, or email during office hours.
              </p>
            </div>

            <div className="space-y-4">
              
              {/* WhatsApp */}
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-emerald-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 fill-emerald-600 text-white" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">Instant WhatsApp</span>
                  <span className="text-base font-extrabold text-navy-900 group-hover:text-emerald-700">{CONTACT_CONFIG.whatsappFormatted}</span>
                </div>
              </a>

              {/* Phone */}
              <a
                href={getCallLink()}
                className="flex items-start gap-4 p-5 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-amber-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">Direct Helpline</span>
                  <span className="text-base font-extrabold text-navy-900 group-hover:text-amber-700">{CONTACT_CONFIG.phoneFormatted}</span>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${CONTACT_CONFIG.email}`}
                className="flex items-start gap-4 p-5 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-sky-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">Email Desk</span>
                  <span className="text-base font-extrabold text-navy-900 group-hover:text-sky-700">{CONTACT_CONFIG.email}</span>
                </div>
              </a>

              {/* Campus Address */}
              <div className="flex items-start gap-4 p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">Campus & Tower Address</span>
                  <span className="text-sm font-semibold text-slate-800 leading-snug">{CONTACT_CONFIG.address}</span>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-2xl text-xs font-bold text-amber-900">
                <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{CONTACT_CONFIG.operatingHours}</span>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
              <h2 className="text-2xl font-extrabold text-navy-900">
                Send an Enquiry Message
              </h2>

              {isSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-extrabold text-emerald-900">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-emerald-800 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you! We've received your inquiry and our team will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Full Name <span className="text-amber-600">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter full name"
                        className="w-full px-4 py-3 bg-ivory-50 border border-slate-300 rounded-xl text-slate-900 text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Mobile Number <span className="text-amber-600">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter mobile number"
                        className="w-full px-4 py-3 bg-ivory-50 border border-slate-300 rounded-xl text-slate-900 text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@domain.com"
                        className="w-full px-4 py-3 bg-ivory-50 border border-slate-300 rounded-xl text-slate-900 text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-program" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Interested Topic
                      </label>
                      <select
                        id="contact-program"
                        name="programSlug"
                        value={formData.programSlug}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-ivory-50 border border-slate-300 rounded-xl text-slate-900 text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                      >
                        <option value="general">General Admissions Question</option>
                        {programs.map((p) => (
                          <option key={p.slug} value={p.slug}>
                            {p.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type your message or questions here..."
                      className="w-full px-4 py-3 bg-ivory-50 border border-slate-300 rounded-xl text-slate-900 text-sm focus:ring-2 focus:ring-amber-500 outline-none resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Privacy guaranteed.</span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-navy-900 hover:bg-navy-800 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all"
                    >
                      {isSubmitting ? 'SENDING...' : 'SUBMIT MESSAGE'}
                      <Send className="w-4 h-4 text-amber-400" />
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

    </main>
  );
};
