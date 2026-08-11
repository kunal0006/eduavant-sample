import React from 'react';
import { FAQ_ITEMS } from '../../data/faqs';
import { Accordion } from '../ui/Accordion';
import { HelpCircle, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../../data/config';

export const FAQSection: React.FC = () => {
  return (
    <section id="faqs" className="py-20 bg-ivory-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-300/60 text-amber-900 font-bold text-xs uppercase tracking-widest">
            <HelpCircle className="w-4 h-4 text-amber-600" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
            Clear Answers for Your Journey.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about program eligibility, career streams, admissions, and advisor support.
          </p>
        </div>

        {/* Accessible Accordion Component */}
        <Accordion items={FAQ_ITEMS} />

        {/* Bottom Advisor Prompt */}
        <div className="mt-12 text-center bg-white border border-slate-200 max-w-xl mx-auto p-6 rounded-2xl shadow-sm space-y-3">
          <p className="text-sm font-bold text-navy-900">
            Have a question not listed here?
          </p>
          <p className="text-xs text-slate-600">
            Our career advisors are available on WhatsApp to answer your specific questions in real time.
          </p>
          <a
            href={getWhatsAppLink("Hi EduAvant team, I have a specific question about program eligibility.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
            <span>ASK AN ADVISOR ON WHATSAPP</span>
          </a>
        </div>

      </div>
    </section>
  );
};
