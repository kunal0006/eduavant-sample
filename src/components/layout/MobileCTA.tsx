import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '../../data/config';

export const MobileCTA: React.FC = () => {
  return (
    <aside aria-label="Mobile Contact Shortcuts" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 shadow-2xl">
      <div className="grid grid-cols-2 gap-2">
        
        {/* WhatsApp Advisor */}
        <a
          href={getWhatsAppLink("Hi EduAvant team, I would like to speak with a career advisor.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-emerald-600 active:bg-emerald-700 text-white rounded-xl font-bold text-xs shadow-sm"
        >
          <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
          <span>WhatsApp Advisor</span>
        </a>

        {/* Join EduAvant */}
        <Link
          to="/join"
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-navy-900 active:bg-navy-950 text-white rounded-xl font-extrabold text-xs shadow-sm uppercase tracking-wider"
        >
          <span>JOIN NOW</span>
          <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
        </Link>

      </div>
    </aside>
  );
};
