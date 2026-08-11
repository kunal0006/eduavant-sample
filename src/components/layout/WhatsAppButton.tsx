import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../../data/config';

interface WhatsAppButtonProps {
  customMessage?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ customMessage }) => {
  return (
    <a
      href={getWhatsAppLink(customMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Talk to an Advisor on WhatsApp"
      className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 group focus:outline-none focus:ring-4 focus:ring-emerald-300"
    >
      <div className="relative">
        <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full border-2 border-emerald-600 animate-pulse" />
      </div>
      <div className="flex flex-col text-left pr-1">
        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-100 leading-none">
          Questions?
        </span>
        <span className="text-xs font-extrabold tracking-wide leading-tight">
          WhatsApp Advisor
        </span>
      </div>
    </a>
  );
};
