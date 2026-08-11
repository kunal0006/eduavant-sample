import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export const QueryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interestedIn: 'Aviation',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate backend submission response
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
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-ivory-50 border border-slate-200 rounded-3xl p-5 sm:p-10 shadow-lg relative overflow-hidden">
          
          {/* Subtle accent strip */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-navy-900 via-amber-500 to-navy-900" />

          <div className="text-center max-w-2xl mx-auto space-y-3 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-100/70 px-3 py-1 rounded-full border border-amber-200">
              Early Career Consultation
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
              Not Sure Where to Start? Ask Us.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Share your details below and an EduAvant advisor will help you discover the program best suited for your goals.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4 animate-fadeIn">
              <div className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-extrabold text-emerald-900">
                Enquiry Submitted Successfully!
              </h3>
              <p className="text-emerald-800 text-sm max-w-md mx-auto leading-relaxed">
                Thanks! We've received your enquiry. Our team will get in touch with you shortly to provide personalized career guidance.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: '', phone: '', email: '', interestedIn: 'Aviation', message: '' });
                }}
                className="mt-2 text-xs font-bold text-emerald-800 hover:text-emerald-900 underline uppercase tracking-wider"
              >
                Submit another query
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label htmlFor="early-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Full Name <span className="text-amber-600">*</span>
                  </label>
                  <input
                    id="early-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 text-sm placeholder-slate-400 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label htmlFor="early-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Mobile / WhatsApp Number <span className="text-amber-600">*</span>
                  </label>
                  <input
                    id="early-phone"
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter 10-digit mobile number"
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 text-sm placeholder-slate-400 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none"
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Email Address */}
                <div className="space-y-1.5">
                  <label htmlFor="early-email" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Email Address
                  </label>
                  <input
                    id="early-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 text-sm placeholder-slate-400 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none"
                  />
                </div>

                {/* Interested Category Stream */}
                <div className="space-y-1.5">
                  <label htmlFor="early-interest" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Interested Career Stream <span className="text-amber-600">*</span>
                  </label>
                  <select
                    id="early-interest"
                    name="interestedIn"
                    value={formData.interestedIn}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none"
                  >
                    <option value="Aviation">Aviation (Cabin Crew, Ground Staff)</option>
                    <option value="Hospitality">Hospitality (Hotel Ops, F&B)</option>
                    <option value="Travel & Tourism">Travel & Tourism (Ticketing, Tours)</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Social Media Marketing">Social Media Marketing</option>
                    <option value="Not Sure Yet">Not Sure Yet (Need Counseling)</option>
                  </select>
                </div>

              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="early-message" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Optional Questions or Specific Goals
                </label>
                <textarea
                  id="early-message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us a little about your educational background or what you're looking for..."
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 text-sm placeholder-slate-400 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none resize-none"
                />
              </div>

              {/* Form Footer */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>No spam. Your details are safe with our admissions desk.</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-navy-900 hover:bg-navy-800 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>SUBMITTING...</span>
                  ) : (
                    <>
                      <span>GET CAREER GUIDANCE</span>
                      <Send className="w-4 h-4 text-amber-400" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>
      </div>
    </section>
  );
};
